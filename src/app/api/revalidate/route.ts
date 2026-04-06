import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

const REVALIDATE_SECRET = process.env.SANITY_REVALIDATE_SECRET;

const TYPE_TO_TAGS: Record<string, string[]> = {
  hero: ["hero"],
  about: ["about"],
  philosophy: ["philosophy"],
  siteConfig: ["siteConfig"],
  product: ["product"],
  program: ["program"],
  testimonial: ["testimonial"],
  faqItem: ["faqItem"],
  classItem: ["classItem"],
};

function readDocumentType(body: unknown): string | undefined {
  if (!body || typeof body !== "object") return undefined;
  const o = body as Record<string, unknown>;
  if (typeof o._type === "string") return o._type;
  const result = o.result;
  if (result && typeof result === "object" && result !== null) {
    const t = (result as Record<string, unknown>)._type;
    if (typeof t === "string") return t;
  }
  return undefined;
}

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (REVALIDATE_SECRET && secret !== REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body: unknown = await req.json();
    const documentType = readDocumentType(body);
    if (!documentType) {
      return NextResponse.json(
        { message: "Missing _type on payload" },
        { status: 400 },
      );
    }

    const tags = TYPE_TO_TAGS[documentType];

    if (!tags) {
      return NextResponse.json(
        { message: `Unknown type: ${documentType}` },
        { status: 400 },
      );
    }

    for (const tag of tags) {
      revalidateTag(tag);
    }

    console.log(`[revalidate] Tags: ${tags.join(", ")}`);
    return NextResponse.json({ revalidated: true, tags });
  } catch (err) {
    console.error("[revalidate] Error:", err);
    return NextResponse.json(
      { message: "Error processing webhook" },
      { status: 500 },
    );
  }
}
