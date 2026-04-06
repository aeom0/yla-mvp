/**
 * Singletons del Studio usan __experimental_actions (API aún tipada de forma incompleta en Sanity 5).
 */
import 'sanity'

declare module 'sanity' {
  export interface DocumentDefinition {
    __experimental_actions?: Array<'create' | 'delete' | 'duplicate' | 'update' | 'publish'>
  }
}
