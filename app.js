const dynamicRelationshipsInfo = {
    'PRODUCT_OWNER-DEFINES-USER_STORY': {
        fields: ['id','title','description','role','priority','acceptance_criteria','note'],
        messages: {
            success: 'User story has been defined successfully!',
            alreadyExists: 'This user story has already been defined!'
        }
    },
    'ADMINISTRATOR-REGISTERS-SOFTWARE_SYSTEM': {
        fields: ['name'],
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
        fields: ['stakeholder_name', 'user_story_id', 'software_system_name', 'type'],
        messages: {
            success: 'Requirement has been identified successfully!',
            alreadyExists: 'This requirement has already been identified!'
        }
    },
}

