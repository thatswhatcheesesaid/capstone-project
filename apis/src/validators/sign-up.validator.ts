export const signupValidator = {

    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        normalizeEmail: true,
        trim: true
    },
    profileName: {
        escape: true,
        trim: true,
        optional: {
            options: {
                nullable: true
            }
        }
    },
    profilePassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    },
    profilePasswordConfirm: {
        isLength: {
            errorMessage: 'confirm password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    }
};
