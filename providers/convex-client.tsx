"use client";
import { Loading } from "../components/ui/auth/loading";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, Unauthenticated, ConvexReactClient } from "convex/react";
interface ConvexClientProviderProps{
    children: React.ReactNode;
}
const convexUrl=process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex=new ConvexReactClient(convexUrl);

export const ConvexClientProvider:React.FC<ConvexClientProviderProps> =({children})=>{
    return (
        <ClerkProvider publishableKey="pk_test_cHVtcGVkLWNyYXlmaXNoLTQwLmNsZXJrLmFjY291bnRzLmRldiQ">
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                <Unauthenticated>
                    {children}
                </Unauthenticated>
                <Authenticated>
                    {children}
                </Authenticated>
                <AuthLoading>
                    <Loading />
                </AuthLoading>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}