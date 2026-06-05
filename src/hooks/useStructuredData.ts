import { useEffect } from 'react'
import type { SchemaEntity } from '../lib/schema'

const SCRIPT_ID = 'ld-json-page-schema'

export function useStructuredData(graph: SchemaEntity[]): void {
  const serialized = JSON.stringify(graph)

  useEffect(() => {
    if (graph.length === 0) return

    const payload = {
      '@context': 'https://schema.org',
      '@graph': graph,
    }

    const existing = document.getElementById(SCRIPT_ID)
    if (existing) existing.remove()

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = SCRIPT_ID
    script.text = JSON.stringify(payload)
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serialized])
}
