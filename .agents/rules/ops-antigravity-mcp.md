---
trigger: model_decision
description: 'Antigravity 2.0 vs IDE Remote-WSL (ruta Z:), MCP globales OAuth y scripts de remap — entorno WSL2 Windows 11 de Alberto'
---

# Antigravity / Gemini — WSL2 + MCP

Aplica a cualquier agente (Gemini, Cursor, Claude) que configure Antigravity, abra carpetas desde Windows o toque MCP globales. **No imprimir tokens ni valores de `env`.**

## Dos clientes (no confundir)

| Cliente                       | Corre en       | Ruta del repo          |
| ----------------------------- | -------------- | ---------------------- |
| Antigravity IDE + Remote-WSL  | Ubuntu (WSL2)  | `/home/alber/<repo>`   |
| Antigravity 2.0 (app Windows) | Windows nativo | `Z:\home\alber\<repo>` |
| Cursor / Claude Code en WSL   | Ubuntu         | `/home/alber/<repo>`   |

- Antigravity 2.0 **no resuelve** UNC `\\wsl.localhost\...` ni `\\wsl$\...` → UI: “Folder doesn't exist”.
- Workaround: unidad **`Z:`** → `\\wsl.localhost\Ubuntu` (`net use` persistente + Startup).
- Script: `%USERPROFILE%\.gemini\scripts\map-wsl-z.ps1` (bat en Startup).
- Si falta `Z:`: levantar WSL y correr el script. **No** es un problema de `PATH`.
- **No** agregar MCP `wsl-filesystem`: Antigravity ya ve el workspace.
- Preferido para coding agentic del monorepo: **IDE Remote-WSL** (o Cursor/Claude en WSL). 2.0 solo con `Z:\...`.

## Proyectos registrados en Antigravity 2.0 (`Z:\`)

`zm-tech`, `naturalforce-suite`, `zetaeme-enterprise-suite`, `ZM-Lash-and-Nails-Beauty`, `guataparobr`, `yla-mvp`, `prolens`, `ia-scout360`, `condoapp` (`CondominiOS\condoapp`).

URI en `%.gemini\config\projects\*.json`: `file:///Z:/home/alber/...` (nunca `file://wsl.localhost/...`).

## MCP — dónde viven

| Ámbito                   | Archivo                                                         |
| ------------------------ | --------------------------------------------------------------- |
| Global Windows           | `%USERPROFILE%\.gemini\config\mcp_config.json`                  |
| Global Windows (symlink) | `%USERPROFILE%\.gemini\antigravity\mcp_config.json` → `config\` |
| Global WSL2              | `~/.gemini/config/mcp_config.json`                              |
| Global WSL2 (symlink)    | `~/.gemini/antigravity/mcp_config.json` → `../config/`          |
| Workspace                | `<repo>/.agents/mcp_config.json`                                |

Remotos: Streamable HTTP con campo **`url`** (también acepta `serverUrl`). OAuth al conectar; no meter PAT en el JSON.

### Servidores globales típicos

| Nombre                 | Transporte | Notas                                                                                   |
| ---------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `ClaudeSupabase`       | HTTP       | Geema / ZM Lash — `udelxwwnyivknslueerr`                                                |
| `SupabaseZMTech`       | HTTP       | Hub — `llacowjutjfefboqgfnj`                                                            |
| `SupabaseNaturalForce` | HTTP       | `ddfmmgddzphxidocmjba`                                                                  |
| `SupabaseYla`          | HTTP       | YLA — `mwvgtxzvqhducjggycuu`                                                            |
| `SupabaseZetaeme`      | HTTP       | ZetaEme — `lavesnngygpwgmkyvuim`                                                        |
| `vercel`               | HTTP       | OAuth Vercel                                                                            |
| `devtools`             | HTTP       | Meta / Facebook DevTools                                                                |
| `github`               | stdio      | Windows: `npx` + env `GITHUB_PERSONAL_ACCESS_TOKEN`. WSL: `~/.cursor/bin/github-mcp.sh` |
| `pencil`               | stdio      | Solo Windows (`.exe` Pen). **No borrar**                                                |
| `gcp`                  | stdio      | Solo WSL (`gcp-mcp-server`)                                                             |

Al editar MCP de Antigravity: **merge** (no pisar `pencil`). No tocar configs de Cursor, VS Code ni Claude Desktop salvo que Alberto lo pida.

Workspace `.agents/mcp_config.json` puede seguir con stdio/`serverUrl` para Claude Code; el global de Antigravity prioriza HTTP+OAuth para Windows y WSL.
