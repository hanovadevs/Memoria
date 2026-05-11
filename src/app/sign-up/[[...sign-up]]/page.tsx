import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { AuthLayout } from "@/components/auth/AuthLayout";

export default function SignUpPage() {
  return (
    <AuthLayout title="Create Account." subtitle="New Membership">
      <SignUp
        appearance={{
          baseTheme: dark,
          variables: {
            colorPrimary: '#ffffff',
            colorBackground: 'transparent',
            colorText: '#ffffff',
            colorInputBackground: 'rgba(255,255,255,0.03)',
            colorInputText: '#ffffff',
            borderRadius: '0.75rem',
          },
          elements: {
            rootBox: "w-full mx-auto",
            card: "bg-transparent shadow-none p-0 border-none",
            header: "hidden",
            socialButtonsBlockButton: "bg-white/[0.05] border-white/10 hover:bg-white/[0.1] transition-all py-3.5",
            socialButtonsBlockButtonText: "text-white font-bold uppercase tracking-widest text-[10px]",
            dividerLine: "bg-white/10",
            dividerText: "text-neutral-500 text-[10px] uppercase tracking-[0.3em] font-bold",
            formFieldLabel: "text-neutral-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-3 ml-1",
            formFieldInput: "bg-white/[0.03] border-white/10 text-white rounded-xl py-4 focus:border-white/30 focus:ring-0 transition-all text-sm px-4",
            formButtonPrimary: "bg-white text-black hover:bg-neutral-200 transition-all rounded-xl py-4 text-[11px] font-bold uppercase tracking-[0.3em] shadow-xl shadow-white/5 mt-4",
            footerActionText: "text-neutral-500 text-[11px] font-medium tracking-tight",
            footerActionLink: "text-white hover:text-neutral-300 font-bold transition-colors text-[11px] uppercase tracking-widest ml-1",
          },
        }}
      />
    </AuthLayout>
  );
}
