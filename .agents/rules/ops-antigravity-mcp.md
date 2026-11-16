---
trigger: model_decision
description: 'Antigravity 2.0 vs IDE Remote-WSL (ruta Z:), MCP stdio Supabase por org/PAT, remap WSL'
---

# Antigravity / Gemini — WSL2 + MCP

Aplica a cualquier agente (Gemini, Cursor, Claude) que configure Antigravity, abra carpetas desde Windows o toque MCP. **No imprimir tokens ni valores de `env`.**

Mapa canónico de orgs/PAT/proyectos: monorepo `zm-tech` → `docs/SUPABASE.md` § Orgs, proyectos y PAT.

## Dos clientes (no confundir)

| Cliente | Corre en | Ruta del repo |
| --- | --- | --- |
| Antigravity IDE + Remote-WSL | Ubuntu (WSL2) | `/home/alber/<repo>` |
| Antigravity 2.0 (app Windows) | Windows nativo | `Z:\home\alber\<repo>` |
| Cursor / Claude Code en WSL | Ubuntu | `/home/alber/<repo>` |

- Antigravity 2.0 **no resuelve** UNC `\\wsl.localhost\...` → “Folder doesn't exist”.
- Workaround: `Z:` → `\\wsl.localhost\Ubuntu` (`%USERPROFILE%\.gemini\scripts\map-wsl-z.ps1`).
- Preferido: **IDE Remote-WSL**. No agregar MCP `wsl-filesystem`.

## MCP — archivos

| Ámbito | Archivo |
| --- | --- |
| Global WSL | `~/.gemini/config/mcp_config.json` |
| Workspace | `<repo>/.agents/mcp_config.json` |
| Wrappers Supabase | `~/.gemini/scripts/mcp-supabase-*.sh` |

**Manage MCP panel:** bug de spinner eterno — ignorar; configurar por archivo y probar en el chat.

## Orgs → PAT → MCP (WSL stdio)

| Org | Proyectos | MCP | PAT |
| --- | --- | --- | --- |
| GeemaStudio (`ieuur…`) | `udelx…` | `ClaudeSupabase` | `SUPABASE_ZMLASH_PAT` |
| ZMTech (`eurhu…`) | `llaco…` hub · `ddfm…` Natural Force | `SupabaseZMTech` · `SupabaseNaturalForce` | `SUPABASE_ACCESS_TOKEN` ← `~/.supabase/access-token-zmtech` |
| Alberto Orta (`behuf…`) | `laves…` ZetaEme | `SupabaseZetaeme` | `SUPABASE_PAT_ALBERTO_ORTA` ← `~/.supabase/access-token-alberto-orta` |

Sin BD Supabase activa (no montar MCP de proyecto): YLA, Guataparo, Prolens, IA Scout360, CondoApp.

Otros MCP: `vercel` / `devtools` (HTTP OAuth) · `github` (`~/.cursor/bin/github-mcp.sh`) · `gcp` (stdio SA) · `pencil` solo Windows (`.exe`, no borrar).

## CLI (no son MCP)

`gh` · `eas` · `vercel` · `supabase` · Meta Graph vía MCP `devtools`

Al editar: **merge** (no pisar `pencil`). No tocar Cursor/VS Code/Claude Desktop salvo pedido.
