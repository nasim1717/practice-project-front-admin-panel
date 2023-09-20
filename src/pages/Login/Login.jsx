import { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useLoginMutation } from "../../features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const Login = () => {
  const [errosName, setErrorName] = useState(false);
  const [errosPass, setErrorPass] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passLabel, setPassLabel] = useState(false);
  const [nameLabel, setNameLabel] = useState(false);
  const [watchPass, setWatchPass] = useState(false);
  const [closeUnAuth, setCloseUnAut] = useState(false);
  const navigate = useNavigate();
  const [login, { error, isLoading, isSuccess }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
    setCloseUnAut(false);
  }, [error, isSuccess, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    if (!name || !password) {
      setErrorName(true);
      setErrorPass(true);
    }
    if (name && password) {
      login({ email: name, password });
    }
  };

  return (
    <div className="bg-[#059669] min-h-[100vh] pb-[76px] w-full flex justify-center items-center ">
      <div className="bg-[#f8fafc] w-[430px] max-[645px]:w-[300px] rounded-md relative">
        <div className="flex justify-center ">
          <div className="mt-16">
            <div className="pl-4">
              <img src={logo} alt="logo" />
            </div>
            <div className="text-center mt-7">
              <h2 className="font-bold text-4xl font-sans">Welcome,</h2>
              <h2 className="font-bold text-3xl text-slate-400">Sign to continue!</h2>
            </div>
          </div>
        </div>
        <div
          className={`border-[1px] border-solid border-red-200 rounded bg-[#fecaca] mx-3 mt-6 px-6 py-5 relative ${
            error ? "block" : "hidden"
          } ${closeUnAuth && "hidden"}`}
        >
          <div className="flex items-center ">
            <IoMdLock className="text-[25px] text-red-800"></IoMdLock>
            <h2 className="pl-6 text-[15px] font-bold text-red-800">Unauthorized</h2>
          </div>
          <RxCross2
            onClick={() => setCloseUnAut(true)}
            className="absolute right-[5px] top-1 text-[22px] text-[#737373]"
          ></RxCross2>
        </div>
        <form onSubmit={handleSubmit} className="max-[645px]:p-4">
          <div className="flex justify-center mt-8 relative">
            <div className="w-96  border-solid  h-[50px]  rounded-[5px]  ">
              <div className="input-container w-full h-full relative ">
                <input
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setNameLabel(true)}
                  onBlur={() => setNameLabel(false)}
                  type="text"
                  id="name"
                  className={`input-field pt-3 w-full h-full font-semibold pl-3 pr-3 text-[16px] border-[2px] ${
                    errosName && !name
                      ? "border-[#f87171] border-[1px] rounded-[5px] focus:outline-offset-1 focus:outline-[#fca5a5]"
                      : "focus:border-slate-400 rounded-[5px] focus:outline-offset-1 focus:outline-[#6ee7b7]"
                  }  bg-[#f3f4f6]`}
                />
                <label
                  htmlFor="name"
                  className={`login-label w-full text-[#94A3B8]  font-semibold absolute left-3  transition-all duration-[0.1s] cursor-text ${
                    nameLabel || name ? "top-[2px] text-[13px]" : "top-2 text-[16px]"
                  }`}
                >
                  Your email or user name
                </label>
              </div>
              {errosName && !name && (
                <span className="text-red-600 text-[14px]">user name can not be blank</span>
              )}
            </div>
            <AiOutlineExclamationCircle
              className={`${
                errosName && !name ? "block text-red-500" : "hidden"
              } absolute right-8 top-5`}
            ></AiOutlineExclamationCircle>
          </div>
          <div className={`flex justify-center relative ${errosName ? "mt-7" : "mt-5"}`}>
            <div className="w-96 border-solid  h-[50px]  rounded-[5px]  ">
              <div className="input-container w-full h-full relative ">
                <input
                  onFocus={() => setPassLabel(true)}
                  onBlur={() => setPassLabel(false)}
                  onChange={(e) => setPassword(e.target.value)}
                  type={`${watchPass ? "text" : "password"}`}
                  id="password"
                  className={`input-password pt-3 w-full h-full font-semibold pl-3 pr-3 leading-10 text-[16px] border-[2px] relative ${
                    errosPass && !password
                      ? "border-[#f87171] border-[1px] rounded-[5px] focus:outline-offset-1 focus:outline-[#fca5a5]"
                      : "focus:border-slate-400 rounded-[5px] focus:outline-offset-1 focus:outline-[#6ee7b7]"
                  }  bg-[#f3f4f6]`}
                />
                <label
                  htmlFor="password"
                  className={`login-password w-full text-[#94A3B8] font-semibold absolute  left-3  transition-all duration-[0.1s] cursor-text ${
                    passLabel || password ? "top-[2px] text-[13px]" : "top-2 text-[16px]"
                  }`}
                >
                  password
                </label>
              </div>
              {errosPass && !password && (
                <span className="text-red-600 text-[14px]">password can not be blank</span>
              )}
            </div>
            <GoEye
              onClick={() => setWatchPass(!watchPass)}
              className={`absolute right-8 top-5 ${errosPass && !password && " hidden"} ${
                watchPass ? "block" : "hidden"
              }`}
            ></GoEye>
            <GoEyeClosed
              onClick={() => setWatchPass(!watchPass)}
              className={`absolute right-8 top-5 ${!watchPass ? "block" : "hidden"} ${
                errosPass && !password && "hidden"
              }`}
            ></GoEyeClosed>
            <AiOutlineExclamationCircle
              className={`${
                errosPass && !password ? "block text-red-500" : "hidden"
              } absolute right-8 top-5`}
            ></AiOutlineExclamationCircle>
          </div>

          <div
            className={`mx-auto bg-[#059669] w-96 max-[645px]:w-full mb-4 rounded hover:bg-[#10b981] ${
              isLoading && "bg-[#10b981]"
            } ${errosPass ? "mt-8" : "mt-5"} relative`}
          >
            <button disabled={isLoading} className="py-3 w-full text-slate-50 font-bold">
              Login
            </button>
            {isLoading && (
              <PulseLoader
                size={10}
                color="#f8fafc"
                className="absolute top-[15px] right-[125px]"
              />
            )}
          </div>
        </form>
        <div className="w-[400px] max-[645px]:w-[272px] relative ">
          <hr className="border-[#065f46] border-[7px] w-full z-10 rounded absolute left-[1rem]" />
          <hr
            className={`border-[#186e56c5] border-[5px] rounded-md w-[383px] max-[645px]:w-[260px] absolute left-[1.5rem]  top-[11px] max-[645px]:top-[34.800rem]"
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
