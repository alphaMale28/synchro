import BorderAnimatedContainer from "../components/BorderAnimatedContainer";

function LoginPage() {
  return (
    <div className="w-full flex items-center justify-center p-4 bg-slate-900">
      <div className="relative w-full max-w-6xl h-[650/4] md:h-[200] ">
        <BorderAnimatedContainer>
          <div className="w-full flex md:flex-row">
            LoginPage {/* FORM COLUMN - LEFT SIDE */}
            <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-slate-600/30">
              <div className="w-full max-w-md">
                {/* HEADING TEXT */}
                <div className="text-center mb-8"></div>
              </div>
            </div>
            {/* FORM COLUMN - RIGHT SIDE */}
            <div className="hidden md:w-1/2 md:flex items-center justify-center"></div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
}

export default LoginPage;
