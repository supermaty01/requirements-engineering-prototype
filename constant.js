const dynamicRelationshipsInfo = {
    'PRODUCT_OWNER-DEFINES-USER_STORY': {
        fields: ['id', 'title', 'description', 'role', 'priority', 'acceptance_criteria', 'note'],
        messages: {
            success: 'User story has been defined successfully!',
            alreadyExists: 'This user story has already been defined!'
        }
    },
    'ADMINISTRATOR-REGISTERS-SOFTWARE_SYSTEM': {
        fields: ['id', 'name'],
        messages: {
            success: 'Software System has been registered successfully!',
            alreadyExists: 'This software system has already been registered!'
        }
    },
    'ADMINISTRATOR-REGISTERS-QUALITY_ANALYST': {
        fields: ['id', 'name', 'email'],
        messages: {
            success: 'Quality Analyst has been registered successfully!',
            alreadyExists: 'This quality analyst has already been registered!'
        }
    },
    'ADMINISTRATOR-REGISTERS-QUALITY_MANAGER': {
        fields: ['id', 'name', 'email'],
        messages: {
            success: 'Quality Manager has been registered successfully!',
            alreadyExists: 'This quality manager has already been registered!'
        }
    },
    'ADMINISTRATOR-REGISTERS-DEVELOPER': {
        fields: ['id', 'name', 'email'],
        messages: {
            success: 'Developer has been registered successfully!',
            alreadyExists: 'This developer has already been registered!'
        }
    },
    'ADMINISTRATOR-REGISTERS-SOFTWARE_ARCHITECT': {
        fields: ['id', 'name', 'email'],
        messages: {
            success: 'Software Architect has been registered successfully!',
            alreadyExists: 'This software architect has already been registered!'
        }
    },
    'ADMINISTRATOR-REGISTERS-PRODUCT_OWNER': {
        fields: ['id', 'name', 'email'],
        messages: {
            success: 'Product Owner has been registered successfully!',
            alreadyExists: 'This product owner has already been registered!'
        }
    },
    'ADMINISTRATOR-REGISTERS-STAKEHOLDER': {
        fields: ['id', 'name', 'email', 'company_name'],
        messages: {
            success: 'Stakeholder has been registered successfully!',
            alreadyExists: 'This stakeholder has already been registered!'
        }
    },
    'PRODUCT_OWNER-IDENTIFIES-REQUIREMENT': {
        fields: ['stakeholder_id', 'user_story_id', 'software_system_id', 'type'],
        messages: {
            success: 'Requirement has been identified successfully!',
            alreadyExists: 'This requirement has already been identified!'
        }
    },
    'SOFTWARE_ARCHITECT-DESIGNS-SOFTWARE_SYSTEM': {
        fields: ['id', 'version', 'name', 'programming_language', 'framework', 'environment', 'architecture'],
        messages: {
            success: 'Software System has been designed successfully!',
            alreadyExists: 'Software System has already been designed!',
        }
    },
    'SOFTWARE_ARCHITECT-DEFINES-SOFTWARE_ELEMENT': {
        fields: ['id', 'name', 'description', 'software_system_id'],
        messages: {
            success: 'Software Element has been defined successfully!',
            alreadyExists: 'Software Element has already been defined!',
        }
    },
    'DEVELOPER-DEVELOPS-SOFTWARE_ELEMENT': {
        fields: ['id', 'interface_status', 'status', 'version'],
        messages: {
            success: 'Software Element has been developed successfully!',
            alreadyExists: 'Software Element has already been developed!',
        }
    },
}


const classConceptsInfo = {
    'PRODUCT_OWNER': {
        name: 'Product Owners',
        container: 'productOwners',
        attributes: ['id', 'name', 'email'],
        attributesNames: ['ID', 'Name', 'Email'],
    },
    'STAKEHOLDER': {
        name: 'Stakeholders',
        container: 'stakeholders',
        attributes: ['id', 'name', 'email', 'company_name'],
        attributesNames: ['ID', 'Name', 'Email', 'Company Name'],
    },
    'SOFTWARE_ARCHITECT': {
        name: 'Software Architects',
        container: 'softwareArchitects',
        attributes: ['id', 'name', 'email'],
        attributesNames: ['ID', 'Name', 'Email'],
    },
    'DEVELOPER': {
        name: 'Developers',
        container: 'developers',
        attributes: ['id', 'name', 'email'],
        attributesNames: ['ID', 'Name', 'Email'],
    },
    'QUALITY_MANAGER': {
        name: 'Quality Managers',
        container: 'qualityManagers',
        attributes: ['id', 'name', 'email'],
        attributesNames: ['ID', 'Name', 'Email'],
    },
    'QUALITY_ANALYST': {
        name: 'Quality Analysts',
        container: 'qualityAnalysts',
        attributes: ['id', 'name', 'email'],
        attributesNames: ['ID', 'Name', 'Email'],
    },
    'SOFTWARE_SYSTEM': {
        name: 'Software Systems',
        container: 'softwareSystems',
        attributes: ['id', 'version', 'name', 'programming_language', 'framework', 'environment', 'architecture'],
        attributesNames: ['ID', 'Version', 'Name', 'Programming Language', 'Framework', 'Environment', 'Architecture'],
    },
}

