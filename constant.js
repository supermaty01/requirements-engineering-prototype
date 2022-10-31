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
        fields: ['id', 'stakeholder_id', 'user_story_id', 'software_system_id', 'type'],
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
        }
    },
    'QUALITY_MANAGER-ESTABLISHES-TEST_PLAN': {
        fields: ['id', 'software_system_id', 'test_type', 'status', 'constraint', 'test_scope', 'assumption', 'risk'],
        messages: {
            success: 'Test Plan has been established successfully!',
            alreadyExists: 'Test Plan has already been established!',
        }
    },
    'QUALITY_MANAGER-DESIGNS-TEST_CASE': {
        fields: ['id', 'software_element_id', 'level', 'version', 'purpose', 'overview', 'description', 'input', 'expected_output'],
        messages: {
            success: 'Test Case has been designed successfully!',
            alreadyExists: 'Test Case has already been designed!',
        }
    },
    'STAKEHOLDER-DESIGNS-TEST_CASE': {
        fields: ['id', 'software_element_id', 'level', 'version', 'purpose', 'overview', 'description', 'input', 'expected_output'],
        messages: {
            success: 'Test Case has been designed successfully!',
            alreadyExists: 'Test Case has already been designed!',
        }
    },
    'QUALITY_ANALYST-EXECUTES-TEST_CASE': {
        fields: ['id', 'start_date', 'end_date', 'result'],
        messages: {
            success: 'Test Case has been executed successfully!',
        }
    },
    'QUALITY_MANAGER-REPORTS-ERROR': {
        fields: ['id', 'name', 'software_element_id', 'status', 'description'],
        messages: {
            success: 'Error has been reported successfully!',
            alreadyExists: 'Error has already been reported!',
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
    'USER_STORY': {
        name: 'User Stories',
        container: 'userStories',
        attributes: ['id', 'title', 'description', 'role', 'priority', 'acceptance_criteria', 'note'],
        attributesNames: ['ID', 'Title', 'Description', 'Role', 'Priority', 'Acceptance Criteria', 'Note'],
    },
    'REQUIREMENT': {
        name: 'Requirements',
        container: 'requirements',
        attributes: ['id', 'stakeholder_id', 'user_story_id', 'software_system_id', 'type'],
        attributesNames: ['ID', 'Stakeholder ID', 'User Story ID', 'Software System ID', 'Type'],
    },
    'SOFTWARE_ELEMENT': {
        name: 'Software Elements',
        container: 'softwareElements',
        attributes: ['id', 'name', 'description', 'software_system_id', 'interface_status', 'status', 'version'],
        attributesNames: ['ID', 'Name', 'Description', 'Software System ID', 'Interface Status', 'Status', 'Version'],
    },
    'TEST_PLAN': {
        name: 'Test Plans',
        container: 'testPlans',
        attributes: ['id', 'software_system_id', 'test_type', 'status', 'constraint', 'test_scope', 'assumption', 'risk'],
        attributesNames: ['ID', 'Software System ID', 'Test Type', 'Status', 'Constraint', 'Test Scope', 'Assumption', 'Risk'],
    },
    'TEST_CASE': {
        name: 'Test Cases',
        container: 'testCases',
        attributes: ['id', 'software_element_id', 'level', 'version', 'purpose', 'overview', 'description', 'input', 'expected_output', 'start_date', 'end_date', 'result'],
        attributesNames: ['ID', 'Software Element ID', 'Level', 'Version', 'Purpose', 'Overview', 'Description', 'Input', 'Expected Output', 'Start Date', 'End Date', 'Result'],
    },
    'ERROR': {
        name: 'Errors',
        container: 'errors',
        attributes: ['id', 'name', 'software_element_id', 'status', 'description'],
        attributesNames: ['ID', 'Name', 'Software Element ID', 'Status', 'Description'],
    },
}

