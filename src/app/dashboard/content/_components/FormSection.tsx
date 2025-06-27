import React from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'

// Learn why we not simply accepted selectedTemplate : TEMPLATE as this
interface PROPS {
    selectedTemplate ?: TEMPLATE
}

const FormSection = ({selectedTemplate} : PROPS) => {
  return (
    <div>
      {selectedTemplate?.name}
    </div>
  )
}

export default FormSection
