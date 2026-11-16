---
trigger: model_decision
description: "Antigravity 2.0 vs IDE Remote-WSL (ruta Z:), MCP stdio+PAT Windows/WSL, vercel Bearer, remap WSL"
---

# Antigravity / Gemini — WSL2 + MCP

Aplica a cualquier agente (Gemini, Cursor, Claude) que configure Antigravity, abra carpetas desde Windows o toque MCP. **No imprimir tokens ni valores de `env`.**

Mapa canónico de orgs/PAT/proyectos: monorepo `zm-tech` → `docs/SUPABASE.md` § Orgs, proyectos y PAT. Canónico detallado: `zm-tech/.agents/rules/ops-antigravity-mcp.md`.

## Dos clientes (no confundir)

| Cliente                       | Corre en       | Ruta del repo          | MCP global (archivo distinto)                  |
| ----------------------------- | -------------- | ---------------------- | ---------------------------------------------- |
| Antigravity IDE + Remote-WSL  | Ubuntu (WSL2)  | `/home/alber/<repo>`   | `~/.gemini/config/mcp_config.json` (Linux)     |
| Antigravity 2.0 (app Windows) | Windows nativo | `Z:\home\alber\<repo>` | `%USERPROFILE%\.gemini\config\mcp_config.json` |
| Cursor / Claude Code en WSL   | Ubuntu         | `/home/alber/<repo>`   | (Cursor/Claude propios; no este archivo)       |

- Antigravity 2.0 **no resuelve** UNC `\\wsl.localhost\...` → “Folder doesn't exist”.
- Workaround: `Z:` → `\\wsl.localhost\Ubuntu` (`%USERPROFILE%\.gemini\scripts\map-wsl-z.ps1`).
- Los dos `mcp_config.json` **no son el mismo archivo** (no symlink WSL↔Windows).
- Supabase: **stdio + PAT** (no OAuth `mcp.supabase.com`).

## Wrappers / secretos

| Ámbito           | Path                                                                                |
| ---------------- | ----------------------------------------------------------------------------------- |
| Wrappers WSL     | `~/.gemini/scripts/mcp-supabase-*.sh`                                               |
| Wrappers Windows | `%USERPROFILE%\.gemini\scripts\mcp-{supabase,github,vercel}.cmd` (vía `cmd.exe /c`) |
| PAT espejo       | `~/.supabase/` y `%USERPROFILE%\.supabase/`                                         |

## Vercel MCP (Antigravity 2.0)

`api.vercel.com` **timeout** en esta red → OAuth/`mcp-remote` DCR falla. Usar Bearer del token `vercel login` + `mcp-vercel.cmd` (`--header-file` a `vercel-mcp-headers.txt`). No montar `url: https://mcp.vercel.com` con Authenticate nativo.

## GitHub (2.0)

`mcp-github.cmd` + `%USERPROFILE%\.supabase\github-pat` (espejo de `gh auth token`).

## Orgs → MCP (resumen)

| Org          | MCP                                       | PAT file                    |
| ------------ | ----------------------------------------- | --------------------------- |
| GeemaStudio  | `ClaudeSupabase`                          | `access-token`              |
| ZMTech       | `SupabaseZMTech` · `SupabaseNaturalForce` | `access-token-zmtech`       |
| Alberto Orta | `SupabaseZetaeme`                         | `access-token-alberto-orta` |

Sin BD Supabase: YLA, Guataparo, Prolens, IA Scout360, CondoApp — solo `github` / `vercel` / `pencil` si aplica.

`pencil` solo Windows (no borrar). Merge al editar config de 2.0.
