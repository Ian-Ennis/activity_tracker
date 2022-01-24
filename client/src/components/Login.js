// import { useState } from 'react';
// import LoginForm from './LoginForm';
// import SignUpForm from './SignUpForm';

// export default function Login( {onLogin} ) {
//     const [showLogin, setShowLogin] = useState(true);

//     return (
//        <Wrapper>
//            <Logo>Leg Up</Logo>
//            {showLogin ? (
//                <>
//                <LoginForm onLogin={onLogin} />
//                <Divider />
//                <p>
//                    Need an account? &nbsp;
//                    <Button onClick={() => setShowLogin(false)}>
//                        Create Account
//                    </Button>
//                </p>
//                </>
//            ) : (
//                <>
//                <SignUpForm onLogin={onLogin} />
//                <Divider />
//                <p>
//                    Have an account already? &nbsp;
//                    <Button onClick={() => setShowLogin(true)}>
//                        Login In 
//                    </Button>
//                </p>
//                </>
//            )}
//        </Wrapper> 
//     );
// };