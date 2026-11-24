/*! For license information please see mpd96o.268.ae2f4eb5.chunk.js.LICENSE.txt */
export const id = 268;
export const ids = [268];
export const modules = {
    40628: (mm, Tm, fm) => {
        fm.r(Tm), fm.d(Tm, {
          ActionCodeOperation: () => Em,
          ActionCodeURL: () => WT,
          AuthCredential: () => rT,
          AuthErrorCodes: () => jm,
          EmailAuthCredential: () => vT,
          EmailAuthProvider: () => mf,
          FacebookAuthProvider: () => Af,
          FactorId: () => Dm,
          GithubAuthProvider: () => xf,
          GoogleAuthProvider: () => af,
          OAuthCredential: () => UT,
          OAuthProvider: () => hf,
          OperationType: () => pm,
          PhoneAuthCredential: () => gT,
          PhoneAuthProvider: () => AA,
          PhoneMultiFactorGenerator: () => ha,
          ProviderId: () => im,
          RecaptchaVerifier: () => gh,
          SAMLAuthProvider: () => Df,
          SignInMethod: () => Rm,
          TotpMultiFactorGenerator: () => Aa,
          TotpSecret: () => xa,
          TwitterAuthProvider: () => Rf,
          applyActionCode: () => Pf,
          beforeAuthStateChanged: () => wh,
          browserLocalPersistence: () => nh,
          browserPopupRedirectResolver: () => ma,
          browserSessionPersistence: () => ch,
          checkActionCode: () => Hf,
          confirmPasswordReset: () => Xf,
          connectAuthEmulator: () => HT,
          createUserWithEmailAndPassword: () => Cf,
          debugErrorMap: () => Om,
          deleteUser: () => Eh,
          fetchSignInMethodsForEmail: () => uf,
          getAdditionalUserInfo: () => hh,
          getAuth: () => Oa,
          getIdToken: () => Lm,
          getIdTokenResult: () => tm,
          getMultiFactorResolver: () => Yh,
          getRedirectResult: () => ZA,
          inMemoryPersistence: () => DT,
          indexedDBLocalPersistence: () => sh,
          initializeAuth: () => PT,
          initializeRecaptchaConfig: () => ah,
          isSignInWithEmailLink: () => lf,
          linkWithCredential: () => zf,
          linkWithPhoneNumber: () => mA,
          linkWithPopup: () => OA,
          linkWithRedirect: () => zA,
          multiFactor: () => Vh,
          onAuthStateChanged: () => Dh,
          onIdTokenChanged: () => xh,
          parseActionCodeURL: () => FT,
          prodErrorMap: () => Ym,
          reauthenticateWithCredential: () => Zf,
          reauthenticateWithPhoneNumber: () => TA,
          reauthenticateWithPopup: () => oA,
          reauthenticateWithRedirect: () => cA,
          reload: () => TT,
          sendEmailVerification: () => Bf,
          sendPasswordResetEmail: () => Gf,
          sendSignInLinkToEmail: () => sf,
          setPersistence: () => Ah,
          signInAnonymously: () => Of,
          signInWithCredential: () => Jf,
          signInWithCustomToken: () => kf,
          signInWithEmailAndPassword: () => rf,
          signInWithEmailLink: () => Mf,
          signInWithPhoneNumber: () => Fh,
          signInWithPopup: () => EA,
          signInWithRedirect: () => JA,
          signOut: () => ph,
          unlink: () => Vf,
          updateCurrentUser: () => Rh,
          updateEmail: () => tf,
          updatePassword: () => Uf,
          updatePhoneNumber: () => hA,
          updateProfile: () => vf,
          useDeviceLanguage: () => ih,
          verifyBeforeUpdateEmail: () => Lf,
          verifyPasswordResetCode: () => yf
        });
        var hm = fm(40614),
          Am = fm(40606);

        function am(mm, Tm) {
          var fm = {};
          for (var hm in mm) Object.prototype.hasOwnProperty.call(mm, hm) && Tm.indexOf(hm) < 0 && (fm[hm] = mm[hm]);
          if (null != mm && "function" === typeof Object.getOwnPropertySymbols) {
            var Am = 0;
            for (hm = Object.getOwnPropertySymbols(mm); Am < hm.length; Am++) Tm.indexOf(hm[Am]) < 0 && Object.prototype.propertyIsEnumerable.call(mm, hm[Am]) && (fm[hm[Am]] = mm[hm[Am]])
          }
          return fm
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var xm = fm(40618),
          wm = fm(40610);
        const Dm = {
            PHONE: "phone",
            TOTP: "totp"
          },
          im = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Rm = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          pm = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          Em = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function om() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const Om = function() {
            return {
              "admin-restricted-operation": "This operation is restricted to administrators only.",
              "argument-error": "",
              "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
              "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
              "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
              "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
              "cordova-not-ready": "Cordova framework is not ready.",
              "cors-unsupported": "This browser is not supported.",
              "credential-already-in-use": "This credential is already associated with a different user account.",
              "custom-token-mismatch": "The custom token corresponds to a different audience.",
              "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
              "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
              "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
              "email-change-needs-verification": "Multi-factor users must always have a verified email.",
              "email-already-in-use": "The email address is already in use by another account.",
              "emulator-config-failed": 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
              "expired-action-code": "The action code has expired.",
              "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
              "internal-error": "An internal AuthError has occurred.",
              "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
              "invalid-app-id": "The mobile app identifier is not registed for the current project.",
              "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
              "invalid-auth-event": "An internal AuthError has occurred.",
              "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
              "invalid-continue-uri": "The continue URL provided in the request is invalid.",
              "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
              "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
              "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
              "invalid-email": "The email address is badly formatted.",
              "invalid-emulator-scheme": "Emulator URL must start with a valid scheme (http:// or https://).",
              "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
              "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
              "invalid-credential": "The supplied auth credential is malformed or has expired.",
              "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
              "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
              "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
              "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
              "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
              "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
              "wrong-password": "The password is invalid or the user does not have a password.",
              "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
              "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
              "invalid-provider-id": "The specified provider ID is invalid.",
              "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
              "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
              "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
              "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
              "login-blocked": "Login blocked by user-provided method: {$originalMessage}",
              "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
              "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
              "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
              "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
              "missing-continue-uri": "A continue URL must be provided in the request.",
              "missing-iframe-start": "An internal AuthError has occurred.",
              "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
              "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
              "missing-password": "A non-empty password must be provided",
              "missing-multi-factor-info": "No second factor identifier is provided.",
              "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
              "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
              "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
              "app-deleted": "This instance of FirebaseApp has been deleted.",
              "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
              "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
              "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
              "network-request-failed": "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
              "no-auth-event": "An internal AuthError has occurred.",
              "no-such-provider": "User was not linked to an account with the given provider.",
              "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
              "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
              "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
              "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
              "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
              "provider-already-linked": "User can only be linked to one identity for the given provider.",
              "quota-exceeded": "The project's quota for this operation has been exceeded.",
              "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
              "redirect-operation-pending": "A redirect sign-in operation is already pending.",
              "rejected-credential": "The request contains malformed or mismatching credentials.",
              "second-factor-already-in-use": "The second factor is already enrolled on this account.",
              "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
              "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
              timeout: "The operation has timed out.",
              "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
              "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
              "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
              "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
              "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
              "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
              "unverified-email": "The operation requires a verified email.",
              "user-cancelled": "The user did not grant your application the permissions it requested.",
              "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
              "user-disabled": "The user account has been disabled by an administrator.",
              "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
              "user-signed-out": "",
              "weak-password": "The password must be 6 characters long or more.",
              "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled.",
              "already-initialized": "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
              "missing-recaptcha-token": "The reCAPTCHA token is missing when sending request to the backend.",
              "invalid-recaptcha-token": "The reCAPTCHA token is invalid when sending request to the backend.",
              "invalid-recaptcha-action": "The reCAPTCHA action is invalid when sending request to the backend.",
              "recaptcha-not-enabled": "reCAPTCHA Enterprise integration is not enabled for this project.",
              "missing-client-type": "The reCAPTCHA client type is missing when sending request to the backend.",
              "missing-recaptcha-version": "The reCAPTCHA version is missing when sending request to the backend.",
              "invalid-req-type": "Invalid request parameters.",
              "invalid-recaptcha-version": "The reCAPTCHA version is invalid when sending request to the backend."
            }
          },
          Ym = om,
          qm = new hm.e("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          jm = {
            ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
            ARGUMENT_ERROR: "auth/argument-error",
            APP_NOT_AUTHORIZED: "auth/app-not-authorized",
            APP_NOT_INSTALLED: "auth/app-not-installed",
            CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
            CODE_EXPIRED: "auth/code-expired",
            CORDOVA_NOT_READY: "auth/cordova-not-ready",
            CORS_UNSUPPORTED: "auth/cors-unsupported",
            CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
            CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
            DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
            DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
            EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
            EMAIL_EXISTS: "auth/email-already-in-use",
            EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
            EXPIRED_OOB_CODE: "auth/expired-action-code",
            EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
            INTERNAL_ERROR: "auth/internal-error",
            INVALID_API_KEY: "auth/invalid-api-key",
            INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
            INVALID_APP_ID: "auth/invalid-app-id",
            INVALID_AUTH: "auth/invalid-user-token",
            INVALID_AUTH_EVENT: "auth/invalid-auth-event",
            INVALID_CERT_HASH: "auth/invalid-cert-hash",
            INVALID_CODE: "auth/invalid-verification-code",
            INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
            INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
            INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
            INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
            INVALID_EMAIL: "auth/invalid-email",
            INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
            INVALID_IDP_RESPONSE: "auth/invalid-credential",
            INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
            INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
            INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
            INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
            INVALID_OOB_CODE: "auth/invalid-action-code",
            INVALID_ORIGIN: "auth/unauthorized-domain",
            INVALID_PASSWORD: "auth/wrong-password",
            INVALID_PERSISTENCE: "auth/invalid-persistence-type",
            INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
            INVALID_PROVIDER_ID: "auth/invalid-provider-id",
            INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
            INVALID_SENDER: "auth/invalid-sender",
            INVALID_SESSION_INFO: "auth/invalid-verification-id",
            INVALID_TENANT_ID: "auth/invalid-tenant-id",
            MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
            MFA_REQUIRED: "auth/multi-factor-auth-required",
            MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
            MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
            MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
            MISSING_CODE: "auth/missing-verification-code",
            MISSING_CONTINUE_URI: "auth/missing-continue-uri",
            MISSING_IFRAME_START: "auth/missing-iframe-start",
            MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
            MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
            MISSING_MFA_INFO: "auth/missing-multi-factor-info",
            MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
            MISSING_PHONE_NUMBER: "auth/missing-phone-number",
            MISSING_SESSION_INFO: "auth/missing-verification-id",
            MODULE_DESTROYED: "auth/app-deleted",
            NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
            NETWORK_REQUEST_FAILED: "auth/network-request-failed",
            NULL_USER: "auth/null-user",
            NO_AUTH_EVENT: "auth/no-auth-event",
            NO_SUCH_PROVIDER: "auth/no-such-provider",
            OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
            OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
            POPUP_BLOCKED: "auth/popup-blocked",
            POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
            PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
            QUOTA_EXCEEDED: "auth/quota-exceeded",
            REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
            REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
            REJECTED_CREDENTIAL: "auth/rejected-credential",
            SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
            SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
            TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
            TIMEOUT: "auth/timeout",
            TOKEN_EXPIRED: "auth/user-token-expired",
            TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
            UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
            UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
            UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
            UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
            UNVERIFIED_EMAIL: "auth/unverified-email",
            USER_CANCELLED: "auth/user-cancelled",
            USER_DELETED: "auth/user-not-found",
            USER_DISABLED: "auth/user-disabled",
            USER_MISMATCH: "auth/user-mismatch",
            USER_SIGNED_OUT: "auth/user-signed-out",
            WEAK_PASSWORD: "auth/weak-password",
            WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
            ALREADY_INITIALIZED: "auth/already-initialized",
            RECAPTCHA_NOT_ENABLED: "auth/recaptcha-not-enabled",
            MISSING_RECAPTCHA_TOKEN: "auth/missing-recaptcha-token",
            INVALID_RECAPTCHA_TOKEN: "auth/invalid-recaptcha-token",
            INVALID_RECAPTCHA_ACTION: "auth/invalid-recaptcha-action",
            MISSING_CLIENT_TYPE: "auth/missing-client-type",
            MISSING_RECAPTCHA_VERSION: "auth/missing-recaptcha-version",
            INVALID_RECAPTCHA_VERSION: "auth/invalid-recaptcha-version",
            INVALID_REQ_TYPE: "auth/invalid-req-type"
          },
          Vm = new xm.g("@firebase/auth");

        function Im(mm) {
          if (Vm.logLevel <= xm.d.ERROR) {
            for (var Tm = arguments.length, fm = new Array(Tm > 1 ? Tm - 1 : 0), hm = 1; hm < Tm; hm++) fm[hm - 1] = arguments[hm];
            Vm.error(`Auth (${Am.d}): ${mm}`, ...fm)
          }
        }

        function Km(mm) {
          for (var Tm = arguments.length, fm = new Array(Tm > 1 ? Tm - 1 : 0), hm = 1; hm < Tm; hm++) fm[hm - 1] = arguments[hm];
          throw cm(mm, ...fm)
        }

        function Qm(mm) {
          for (var Tm = arguments.length, fm = new Array(Tm > 1 ? Tm - 1 : 0), hm = 1; hm < Tm; hm++) fm[hm - 1] = arguments[hm];
          return cm(mm, ...fm)
        }

        function nm(mm, Tm, fm) {
          const Am = Object.assign(Object.assign({}, Ym()), {
            [Tm]: fm
          });
          return new hm.e("auth", "Firebase", Am).create(Tm, {
            appName: mm.name
          })
        }

        function Jm(mm, Tm, fm) {
          if (!(Tm instanceof fm)) throw fm.name !== Tm.constructor.name && Km(mm, "argument-error"), nm(mm, "argument-error", `Type of ${Tm.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function cm(mm) {
          for (var Tm = arguments.length, fm = new Array(Tm > 1 ? Tm - 1 : 0), hm = 1; hm < Tm; hm++) fm[hm - 1] = arguments[hm];
          if ("string" !== typeof mm) {
            const Tm = fm[0],
              hm = [...fm.slice(1)];
            return hm[0] && (hm[0].appName = mm.name), mm._errorFactory.create(Tm, ...hm)
          }
          return qm.create(mm, ...fm)
        }

        function zm(mm, Tm) {
          if (!mm) {
            for (var fm = arguments.length, hm = new Array(fm > 2 ? fm - 2 : 0), Am = 2; Am < fm; Am++) hm[Am - 2] = arguments[Am];
            throw cm(Tm, ...hm)
          }
        }

        function Zm(mm) {
          const Tm = "INTERNAL ASSERTION FAILED: " + mm;
          throw Im(Tm), new Error(Tm)
        }

        function km(mm, Tm) {
          mm || Zm(Tm)
        }

        function bm() {
          var mm;
          return "undefined" !== typeof self && (null === (mm = self.location) || void 0 === mm ? void 0 : mm.href) || ""
        }

        function Sm() {
          return "http:" === em() || "https:" === em()
        }

        function em() {
          var mm;
          return "undefined" !== typeof self && (null === (mm = self.location) || void 0 === mm ? void 0 : mm.protocol) || null
        }
        class Nm {
          constructor(mm, Tm) {
            this.shortDelay = mm, this.longDelay = Tm, km(Tm > mm, "Short delay should be less than long delay!"), this.isMobile = (0, hm.V)() || (0, hm.X)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (Sm() || (0, hm.P)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function Gm(mm, Tm) {
          km(mm.emulator, "Emulator should always be set here");
          const {
            url: fm
          } = mm.emulator;
          return Tm ? `${fm}${Tm.startsWith("/")?Tm.slice(1):Tm}` : fm
        }
        class Xm {
          static initialize(mm, Tm, fm) {
            this.fetchImpl = mm, Tm && (this.headersImpl = Tm), fm && (this.responseImpl = fm)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void Zm("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void Zm("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void Zm("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const Pm = {
            CREDENTIAL_MISMATCH: "custom-token-mismatch",
            MISSING_CUSTOM_TOKEN: "internal-error",
            INVALID_IDENTIFIER: "invalid-email",
            MISSING_CONTINUE_URI: "internal-error",
            INVALID_PASSWORD: "wrong-password",
            MISSING_PASSWORD: "missing-password",
            EMAIL_EXISTS: "email-already-in-use",
            PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
            INVALID_IDP_RESPONSE: "invalid-credential",
            INVALID_PENDING_TOKEN: "invalid-credential",
            FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
            MISSING_REQ_TYPE: "internal-error",
            EMAIL_NOT_FOUND: "user-not-found",
            RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
            EXPIRED_OOB_CODE: "expired-action-code",
            INVALID_OOB_CODE: "invalid-action-code",
            MISSING_OOB_CODE: "internal-error",
            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
            INVALID_ID_TOKEN: "invalid-user-token",
            TOKEN_EXPIRED: "user-token-expired",
            USER_NOT_FOUND: "user-token-expired",
            TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
            INVALID_CODE: "invalid-verification-code",
            INVALID_SESSION_INFO: "invalid-verification-id",
            INVALID_TEMPORARY_PROOF: "invalid-credential",
            MISSING_SESSION_INFO: "missing-verification-id",
            SESSION_EXPIRED: "code-expired",
            MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
            UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
            INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
            ADMIN_ONLY_OPERATION: "admin-restricted-operation",
            INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
            MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
            MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
            MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
            SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
            SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
            BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
            RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
            MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
            INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
            INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
            MISSING_CLIENT_TYPE: "missing-client-type",
            MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
            INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
            INVALID_REQ_TYPE: "invalid-req-type"
          },
          Hm = new Nm(3e4, 6e4);

        function ym(mm, Tm) {
          return mm.tenantId && !Tm.tenantId ? Object.assign(Object.assign({}, Tm), {
            tenantId: mm.tenantId
          }) : Tm
        }
        async function Cm(mm, Tm, fm, Am) {
          return rm(mm, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let am = {},
              xm = {};
            Am && ("GET" === Tm ? xm = Am : am = {
              body: JSON.stringify(Am)
            });
            const wm = (0, hm.ab)(Object.assign({
                key: mm.config.apiKey
              }, xm)).slice(1),
              Dm = await mm._getAdditionalHeaders();
            return Dm["Content-Type"] = "application/json", mm.languageCode && (Dm["X-Firebase-Locale"] = mm.languageCode), Xm.fetch()(lm(mm, mm.config.apiHost, fm, wm), Object.assign({
              method: Tm,
              headers: Dm,
              referrerPolicy: "no-referrer"
            }, am))
          }))
        }
        async function rm(mm, Tm, fm) {
          mm._canInitEmulator = !1;
          const Am = Object.assign(Object.assign({}, Pm), Tm);
          try {
            const Tm = new Mm(mm),
              hm = await Promise.race([fm(), Tm.promise]);
            Tm.clearNetworkTimeout();
            const am = await hm.json();
            if ("needConfirmation" in am) throw um(mm, "account-exists-with-different-credential", am);
            if (hm.ok && !("errorMessage" in am)) return am;
            {
              const Tm = hm.ok ? am.errorMessage : am.error.message,
                [fm, xm] = Tm.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === fm) throw um(mm, "credential-already-in-use", am);
              if ("EMAIL_EXISTS" === fm) throw um(mm, "email-already-in-use", am);
              if ("USER_DISABLED" === fm) throw um(mm, "user-disabled", am);
              const wm = Am[fm] || fm.toLowerCase().replace(/[_\s]+/g, "-");
              if (xm) throw nm(mm, wm, xm);
              Km(mm, wm)
            }
          } catch (am) {
            if (am instanceof hm.h) throw am;
            Km(mm, "network-request-failed", {
              message: String(am)
            })
          }
        }
        async function sm(mm, Tm, fm, hm) {
          let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const am = await Cm(mm, Tm, fm, hm, Am);
          return "mfaPendingCredential" in am && Km(mm, "multi-factor-auth-required", {
            _serverResponse: am
          }), am
        }

        function lm(mm, Tm, fm, hm) {
          const Am = `${Tm}${fm}?${hm}`;
          return mm.config.emulator ? Gm(mm.config, Am) : `${mm.config.apiScheme}://${Am}`
        }
        class Mm {
          constructor(mm) {
            this.auth = mm, this.timer = null, this.promise = new Promise(((mm, Tm) => {
              this.timer = setTimeout((() => Tm(Qm(this.auth, "network-request-failed"))), Hm.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function um(mm, Tm, fm) {
          const hm = {
            appName: mm.name
          };
          fm.email && (hm.email = fm.email), fm.phoneNumber && (hm.phoneNumber = fm.phoneNumber);
          const Am = Qm(mm, Tm, hm);
          return Am.customData._tokenResponse = fm, Am
        }

        function Bm(mm) {
          if (mm) try {
            const Tm = new Date(Number(mm));
            if (!isNaN(Tm.getTime())) return Tm.toUTCString()
          } catch (Tm) {}
        }

        function Lm(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, hm.J)(mm).getIdToken(Tm)
        }
        async function tm(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const fm = (0, hm.J)(mm),
            Am = await fm.getIdToken(Tm),
            am = dm(Am);
          zm(am && am.exp && am.auth_time && am.iat, fm.auth, "internal-error");
          const xm = "object" === typeof am.firebase ? am.firebase : void 0,
            wm = null === xm || void 0 === xm ? void 0 : xm.sign_in_provider;
          return {
            claims: am,
            token: Am,
            authTime: Bm(Um(am.auth_time)),
            issuedAtTime: Bm(Um(am.iat)),
            expirationTime: Bm(Um(am.exp)),
            signInProvider: wm || null,
            signInSecondFactor: (null === xm || void 0 === xm ? void 0 : xm.sign_in_second_factor) || null
          }
        }

        function Um(mm) {
          return 1e3 * Number(mm)
        }

        function dm(mm) {
          const [Tm, fm, Am] = mm.split(".");
          if (void 0 === Tm || void 0 === fm || void 0 === Am) return Im("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const mm = (0, hm.m)(fm);
            return mm ? JSON.parse(mm) : (Im("Failed to decode base64 JWT payload"), null)
          } catch (am) {
            return Im("Caught error parsing JWT payload as JSON", null === am || void 0 === am ? void 0 : am.toString()), null
          }
        }
        async function gm(mm, Tm) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return Tm;
          try {
            return await Tm
          } catch (fm) {
            throw fm instanceof hm.h && function(mm) {
              let {
                code: Tm
              } = mm;
              return "auth/user-disabled" === Tm || "auth/user-token-expired" === Tm
            }(fm) && mm.auth.currentUser === mm && await mm.auth.signOut(), fm
          }
        }
        class Wm {
          constructor(mm) {
            this.user = mm, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(mm) {
            var Tm;
            if (mm) {
              const mm = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), mm
            } {
              this.errorBackoff = 3e4;
              const mm = (null !== (Tm = this.user.stsTokenManager.expirationTime) && void 0 !== Tm ? Tm : 0) - Date.now() - 3e5;
              return Math.max(0, mm)
            }
          }
          schedule() {
            let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const Tm = this.getInterval(mm);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), Tm)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (mm) {
              return void("auth/network-request-failed" === (null === mm || void 0 === mm ? void 0 : mm.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class Fm {
          constructor(mm, Tm) {
            this.createdAt = mm, this.lastLoginAt = Tm, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = Bm(this.lastLoginAt), this.creationTime = Bm(this.createdAt)
          }
          _copy(mm) {
            this.createdAt = mm.createdAt, this.lastLoginAt = mm.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function mT(mm) {
          var Tm;
          const fm = mm.auth,
            hm = await mm.getIdToken(),
            Am = await gm(mm, async function(mm, Tm) {
              return Cm(mm, "POST", "/v1/accounts:lookup", Tm)
            }(fm, {
              idToken: hm
            }));
          zm(null === Am || void 0 === Am ? void 0 : Am.users.length, fm, "internal-error");
          const xm = Am.users[0];
          mm._notifyReloadListener(xm);
          const wm = (null === (Tm = xm.providerUserInfo) || void 0 === Tm ? void 0 : Tm.length) ? xm.providerUserInfo.map((mm => {
            var {
              providerId: Tm
            } = mm, fm = am(mm, ["providerId"]);
            return {
              providerId: Tm,
              uid: fm.rawId || "",
              displayName: fm.displayName || null,
              email: fm.email || null,
              phoneNumber: fm.phoneNumber || null,
              photoURL: fm.photoUrl || null
            }
          })) : [];
          const Dm = (im = mm.providerData, Rm = wm, [...im.filter((mm => !Rm.some((Tm => Tm.providerId === mm.providerId)))), ...Rm]);
          var im, Rm;
          const pm = mm.isAnonymous,
            Em = !(mm.email && xm.passwordHash) && !(null === Dm || void 0 === Dm ? void 0 : Dm.length),
            om = !!pm && Em,
            Om = {
              uid: xm.localId,
              displayName: xm.displayName || null,
              photoURL: xm.photoUrl || null,
              email: xm.email || null,
              emailVerified: xm.emailVerified || !1,
              phoneNumber: xm.phoneNumber || null,
              tenantId: xm.tenantId || null,
              providerData: Dm,
              metadata: new Fm(xm.createdAt, xm.lastLoginAt),
              isAnonymous: om
            };
          Object.assign(mm, Om)
        }
        async function TT(mm) {
          const Tm = (0, hm.J)(mm);
          await mT(Tm), await Tm.auth._persistUserIfCurrent(Tm), Tm.auth._notifyListenersIfCurrent(Tm)
        }
        class fT {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(mm) {
            zm(mm.idToken, "internal-error"), zm("undefined" !== typeof mm.idToken, "internal-error"), zm("undefined" !== typeof mm.refreshToken, "internal-error");
            const Tm = "expiresIn" in mm && "undefined" !== typeof mm.expiresIn ? Number(mm.expiresIn) : function(mm) {
              const Tm = dm(mm);
              return zm(Tm, "internal-error"), zm("undefined" !== typeof Tm.exp, "internal-error"), zm("undefined" !== typeof Tm.iat, "internal-error"), Number(Tm.exp) - Number(Tm.iat)
            }(mm.idToken);
            this.updateTokensAndExpiration(mm.idToken, mm.refreshToken, Tm)
          }
          async getToken(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return zm(!this.accessToken || this.refreshToken, mm, "user-token-expired"), Tm || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(mm, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(mm, Tm) {
            const {
              accessToken: fm,
              refreshToken: Am,
              expiresIn: am
            } = await async function(mm, Tm) {
              const fm = await rm(mm, {}, (async () => {
                const fm = (0, hm.ab)({
                    grant_type: "refresh_token",
                    refresh_token: Tm
                  }).slice(1),
                  {
                    tokenApiHost: Am,
                    apiKey: am
                  } = mm.config,
                  xm = lm(mm, Am, "/v1/token", `key=${am}`),
                  wm = await mm._getAdditionalHeaders();
                return wm["Content-Type"] = "application/x-www-form-urlencoded", Xm.fetch()(xm, {
                  method: "POST",
                  headers: wm,
                  body: fm
                })
              }));
              return {
                accessToken: fm.access_token,
                expiresIn: fm.expires_in,
                refreshToken: fm.refresh_token
              }
            }(mm, Tm);
            this.updateTokensAndExpiration(fm, Am, Number(am))
          }
          updateTokensAndExpiration(mm, Tm, fm) {
            this.refreshToken = Tm || null, this.accessToken = mm || null, this.expirationTime = Date.now() + 1e3 * fm
          }
          static fromJSON(mm, Tm) {
            const {
              refreshToken: fm,
              accessToken: hm,
              expirationTime: Am
            } = Tm, am = new fT;
            return fm && (zm("string" === typeof fm, "internal-error", {
              appName: mm
            }), am.refreshToken = fm), hm && (zm("string" === typeof hm, "internal-error", {
              appName: mm
            }), am.accessToken = hm), Am && (zm("number" === typeof Am, "internal-error", {
              appName: mm
            }), am.expirationTime = Am), am
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(mm) {
            this.accessToken = mm.accessToken, this.refreshToken = mm.refreshToken, this.expirationTime = mm.expirationTime
          }
          _clone() {
            return Object.assign(new fT, this.toJSON())
          }
          _performRefresh() {
            return Zm("not implemented")
          }
        }

        function hT(mm, Tm) {
          zm("string" === typeof mm || "undefined" === typeof mm, "internal-error", {
            appName: Tm
          })
        }
        class AT {
          constructor(mm) {
            var {
              uid: Tm,
              auth: fm,
              stsTokenManager: hm
            } = mm, Am = am(mm, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new Wm(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = Tm, this.auth = fm, this.stsTokenManager = hm, this.accessToken = hm.accessToken, this.displayName = Am.displayName || null, this.email = Am.email || null, this.emailVerified = Am.emailVerified || !1, this.phoneNumber = Am.phoneNumber || null, this.photoURL = Am.photoURL || null, this.isAnonymous = Am.isAnonymous || !1, this.tenantId = Am.tenantId || null, this.providerData = Am.providerData ? [...Am.providerData] : [], this.metadata = new Fm(Am.createdAt || void 0, Am.lastLoginAt || void 0)
          }
          async getIdToken(mm) {
            const Tm = await gm(this, this.stsTokenManager.getToken(this.auth, mm));
            return zm(Tm, this.auth, "internal-error"), this.accessToken !== Tm && (this.accessToken = Tm, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), Tm
          }
          getIdTokenResult(mm) {
            return tm(this, mm)
          }
          reload() {
            return TT(this)
          }
          _assign(mm) {
            this !== mm && (zm(this.uid === mm.uid, this.auth, "internal-error"), this.displayName = mm.displayName, this.photoURL = mm.photoURL, this.email = mm.email, this.emailVerified = mm.emailVerified, this.phoneNumber = mm.phoneNumber, this.isAnonymous = mm.isAnonymous, this.tenantId = mm.tenantId, this.providerData = mm.providerData.map((mm => Object.assign({}, mm))), this.metadata._copy(mm.metadata), this.stsTokenManager._assign(mm.stsTokenManager))
          }
          _clone(mm) {
            const Tm = new AT(Object.assign(Object.assign({}, this), {
              auth: mm,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return Tm.metadata._copy(this.metadata), Tm
          }
          _onReload(mm) {
            zm(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = mm, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(mm) {
            this.reloadListener ? this.reloadListener(mm) : this.reloadUserInfo = mm
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              fm = !1;
            mm.idToken && mm.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(mm), fm = !0), Tm && await mT(this), await this.auth._persistUserIfCurrent(this), fm && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const mm = await this.getIdToken();
            return await gm(this, async function(mm, Tm) {
              return Cm(mm, "POST", "/v1/accounts:delete", Tm)
            }(this.auth, {
              idToken: mm
            })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut()
          }
          toJSON() {
            return Object.assign(Object.assign({
              uid: this.uid,
              email: this.email || void 0,
              emailVerified: this.emailVerified,
              displayName: this.displayName || void 0,
              isAnonymous: this.isAnonymous,
              photoURL: this.photoURL || void 0,
              phoneNumber: this.phoneNumber || void 0,
              tenantId: this.tenantId || void 0,
              providerData: this.providerData.map((mm => Object.assign({}, mm))),
              stsTokenManager: this.stsTokenManager.toJSON(),
              _redirectEventId: this._redirectEventId
            }, this.metadata.toJSON()), {
              apiKey: this.auth.config.apiKey,
              appName: this.auth.name
            })
          }
          get refreshToken() {
            return this.stsTokenManager.refreshToken || ""
          }
          static _fromJSON(mm, Tm) {
            var fm, hm, Am, am, xm, wm, Dm, im;
            const Rm = null !== (fm = Tm.displayName) && void 0 !== fm ? fm : void 0,
              pm = null !== (hm = Tm.email) && void 0 !== hm ? hm : void 0,
              Em = null !== (Am = Tm.phoneNumber) && void 0 !== Am ? Am : void 0,
              om = null !== (am = Tm.photoURL) && void 0 !== am ? am : void 0,
              Om = null !== (xm = Tm.tenantId) && void 0 !== xm ? xm : void 0,
              Ym = null !== (wm = Tm._redirectEventId) && void 0 !== wm ? wm : void 0,
              qm = null !== (Dm = Tm.createdAt) && void 0 !== Dm ? Dm : void 0,
              jm = null !== (im = Tm.lastLoginAt) && void 0 !== im ? im : void 0,
              {
                uid: Vm,
                emailVerified: Im,
                isAnonymous: Km,
                providerData: Qm,
                stsTokenManager: nm
              } = Tm;
            zm(Vm && nm, mm, "internal-error");
            const Jm = fT.fromJSON(this.name, nm);
            zm("string" === typeof Vm, mm, "internal-error"), hT(Rm, mm.name), hT(pm, mm.name), zm("boolean" === typeof Im, mm, "internal-error"), zm("boolean" === typeof Km, mm, "internal-error"), hT(Em, mm.name), hT(om, mm.name), hT(Om, mm.name), hT(Ym, mm.name), hT(qm, mm.name), hT(jm, mm.name);
            const cm = new AT({
              uid: Vm,
              auth: mm,
              email: pm,
              emailVerified: Im,
              displayName: Rm,
              isAnonymous: Km,
              photoURL: om,
              phoneNumber: Em,
              tenantId: Om,
              stsTokenManager: Jm,
              createdAt: qm,
              lastLoginAt: jm
            });
            return Qm && Array.isArray(Qm) && (cm.providerData = Qm.map((mm => Object.assign({}, mm)))), Ym && (cm._redirectEventId = Ym), cm
          }
          static async _fromIdTokenResponse(mm, Tm) {
            let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const hm = new fT;
            hm.updateFromServerResponse(Tm);
            const Am = new AT({
              uid: Tm.localId,
              auth: mm,
              stsTokenManager: hm,
              isAnonymous: fm
            });
            return await mT(Am), Am
          }
        }
        const aT = new Map;

        function xT(mm) {
          km(mm instanceof Function, "Expected a class definition");
          let Tm = aT.get(mm);
          return Tm ? (km(Tm instanceof mm, "Instance stored in cache mismatched with class"), Tm) : (Tm = new mm, aT.set(mm, Tm), Tm)
        }
        class wT {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(mm, Tm) {
            this.storage[mm] = Tm
          }
          async _get(mm) {
            const Tm = this.storage[mm];
            return void 0 === Tm ? null : Tm
          }
          async _remove(mm) {
            delete this.storage[mm]
          }
          _addListener(mm, Tm) {}
          _removeListener(mm, Tm) {}
        }
        wT.type = "NONE";
        const DT = wT;

        function iT(mm, Tm, fm) {
          return `firebase:${mm}:${Tm}:${fm}`
        }
        class RT {
          constructor(mm, Tm, fm) {
            this.persistence = mm, this.auth = Tm, this.userKey = fm;
            const {
              config: hm,
              name: Am
            } = this.auth;
            this.fullUserKey = iT(this.userKey, hm.apiKey, Am), this.fullPersistenceKey = iT("persistence", hm.apiKey, Am), this.boundEventHandler = Tm._onStorageEvent.bind(Tm), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(mm) {
            return this.persistence._set(this.fullUserKey, mm.toJSON())
          }
          async getCurrentUser() {
            const mm = await this.persistence._get(this.fullUserKey);
            return mm ? AT._fromJSON(this.auth, mm) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(mm) {
            if (this.persistence === mm) return;
            const Tm = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = mm, Tm ? this.setCurrentUser(Tm) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(mm, Tm) {
            let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!Tm.length) return new RT(xT(DT), mm, fm);
            const hm = (await Promise.all(Tm.map((async mm => {
              if (await mm._isAvailable()) return mm
            })))).filter((mm => mm));
            let Am = hm[0] || xT(DT);
            const am = iT(fm, mm.config.apiKey, mm.name);
            let xm = null;
            for (const im of Tm) try {
              const Tm = await im._get(am);
              if (Tm) {
                const fm = AT._fromJSON(mm, Tm);
                im !== Am && (xm = fm), Am = im;
                break
              }
            } catch (Dm) {}
            const wm = hm.filter((mm => mm._shouldAllowMigration));
            return Am._shouldAllowMigration && wm.length ? (Am = wm[0], xm && await Am._set(am, xm.toJSON()), await Promise.all(Tm.map((async mm => {
              if (mm !== Am) try {
                await mm._remove(am)
              } catch (Dm) {}
            }))), new RT(Am, mm, fm)) : new RT(Am, mm, fm)
          }
        }

        function pT(mm) {
          const Tm = mm.toLowerCase();
          if (Tm.includes("opera/") || Tm.includes("opr/") || Tm.includes("opios/")) return "Opera";
          if (YT(Tm)) return "IEMobile";
          if (Tm.includes("msie") || Tm.includes("trident/")) return "IE";
          if (Tm.includes("edge/")) return "Edge";
          if (ET(Tm)) return "Firefox";
          if (Tm.includes("silk/")) return "Silk";
          if (jT(Tm)) return "Blackberry";
          if (VT(Tm)) return "Webos";
          if (oT(Tm)) return "Safari";
          if ((Tm.includes("chrome/") || OT(Tm)) && !Tm.includes("edge/")) return "Chrome";
          if (qT(Tm)) return "Android";
          {
            const Tm = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              fm = mm.match(Tm);
            if (2 === (null === fm || void 0 === fm ? void 0 : fm.length)) return fm[1]
          }
          return "Other"
        }

        function ET() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hm.N)();
          return /firefox\//i.test(mm)
        }

        function oT() {
          const mm = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hm.N)()).toLowerCase();
          return mm.includes("safari/") && !mm.includes("chrome/") && !mm.includes("crios/") && !mm.includes("android")
        }

        function OT() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hm.N)();
          return /crios\//i.test(mm)
        }

        function YT() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hm.N)();
          return /iemobile/i.test(mm)
        }

        function qT() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hm.N)();
          return /android/i.test(mm)
        }

        function jT() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hm.N)();
          return /blackberry/i.test(mm)
        }

        function VT() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hm.N)();
          return /webos/i.test(mm)
        }

        function IT() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hm.N)();
          return /iphone|ipad|ipod/i.test(mm) || /macintosh/i.test(mm) && /mobile/i.test(mm)
        }

        function KT() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hm.N)();
          return IT(mm) || qT(mm) || VT(mm) || jT(mm) || /windows phone/i.test(mm) || YT(mm)
        }

        function QT(mm) {
          let Tm, fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (mm) {
            case "Browser":
              Tm = pT((0, hm.N)());
              break;
            case "Worker":
              Tm = `${pT((0,hm.N)())}-${mm}`;
              break;
            default:
              Tm = mm
          }
          const am = fm.length ? fm.join(",") : "FirebaseCore-web";
          return `${Tm}/JsCore/${Am.d}/${am}`
        }
        async function nT(mm, Tm) {
          return Cm(mm, "GET", "/v2/recaptchaConfig", ym(mm, Tm))
        }

        function JT(mm) {
          return void 0 !== mm && void 0 !== mm.getResponse
        }

        function cT(mm) {
          return void 0 !== mm && void 0 !== mm.enterprise
        }
        class zT {
          constructor(mm) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === mm.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = mm.recaptchaKey.split("/")[3], this.emailPasswordEnabled = mm.recaptchaEnforcementState.some((mm => "EMAIL_PASSWORD_PROVIDER" === mm.provider && "OFF" !== mm.enforcementState))
          }
        }

        function ZT(mm) {
          return new Promise(((Tm, fm) => {
            const hm = document.createElement("script");
            hm.setAttribute("src", mm), hm.onload = Tm, hm.onerror = mm => {
                const Tm = Qm("internal-error");
                Tm.customData = mm, fm(Tm)
              }, hm.type = "text/javascript", hm.charset = "UTF-8",
              function() {
                var mm, Tm;
                return null !== (Tm = null === (mm = document.getElementsByTagName("head")) || void 0 === mm ? void 0 : mm[0]) && void 0 !== Tm ? Tm : document
              }().appendChild(hm)
          }))
        }

        function kT(mm) {
          return `__${mm}${Math.floor(1e6*Math.random())}`
        }
        class bT {
          constructor(mm) {
            this.type = "recaptcha-enterprise", this.auth = GT(mm)
          }
          async verify() {
            let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function fm(Tm, fm, hm) {
              const Am = window.grecaptcha;
              cT(Am) ? Am.enterprise.ready((() => {
                Am.enterprise.execute(Tm, {
                  action: mm
                }).then((mm => {
                  fm(mm)
                })).catch((() => {
                  fm("NO_RECAPTCHA")
                }))
              })) : hm(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((mm, hm) => {
              (async function(mm) {
                if (!Tm) {
                  if (null == mm.tenantId && null != mm._agentRecaptchaConfig) return mm._agentRecaptchaConfig.siteKey;
                  if (null != mm.tenantId && void 0 !== mm._tenantRecaptchaConfigs[mm.tenantId]) return mm._tenantRecaptchaConfigs[mm.tenantId].siteKey
                }
                return new Promise((async (Tm, fm) => {
                  nT(mm, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((hm => {
                    if (void 0 !== hm.recaptchaKey) {
                      const fm = new zT(hm);
                      return null == mm.tenantId ? mm._agentRecaptchaConfig = fm : mm._tenantRecaptchaConfigs[mm.tenantId] = fm, Tm(fm.siteKey)
                    }
                    fm(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((mm => {
                    fm(mm)
                  }))
                }))
              })(this.auth).then((Am => {
                if (!Tm && cT(window.grecaptcha)) fm(Am, mm, hm);
                else {
                  if ("undefined" === typeof window) return void hm(new Error("RecaptchaVerifier is only supported in browser"));
                  ZT("https://www.google.com/recaptcha/enterprise.js?render=" + Am).then((() => {
                    fm(Am, mm, hm)
                  })).catch((mm => {
                    hm(mm)
                  }))
                }
              })).catch((mm => {
                hm(mm)
              }))
            }))
          }
        }
        async function ST(mm, Tm, fm) {
          let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const Am = new bT(mm);
          let am;
          try {
            am = await Am.verify(fm)
          } catch (wm) {
            am = await Am.verify(fm, !0)
          }
          const xm = Object.assign({}, Tm);
          return hm ? Object.assign(xm, {
            captchaResp: am
          }) : Object.assign(xm, {
            captchaResponse: am
          }), Object.assign(xm, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(xm, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), xm
        }
        class eT {
          constructor(mm) {
            this.auth = mm, this.queue = []
          }
          pushCallback(mm, Tm) {
            const fm = Tm => new Promise(((fm, hm) => {
              try {
                fm(mm(Tm))
              } catch (Am) {
                hm(Am)
              }
            }));
            fm.onAbort = Tm, this.queue.push(fm);
            const hm = this.queue.length - 1;
            return () => {
              this.queue[hm] = () => Promise.resolve()
            }
          }
          async runMiddleware(mm) {
            if (this.auth.currentUser === mm) return;
            const Tm = [];
            try {
              for (const fm of this.queue) await fm(mm), fm.onAbort && Tm.push(fm.onAbort)
            } catch (fm) {
              Tm.reverse();
              for (const mm of Tm) try {
                mm()
              } catch (hm) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === fm || void 0 === fm ? void 0 : fm.message
              })
            }
          }
        }
        class NT {
          constructor(mm, Tm, fm, hm) {
            this.app = mm, this.heartbeatServiceProvider = Tm, this.appCheckServiceProvider = fm, this.config = hm, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new XT(this), this.idTokenSubscription = new XT(this), this.beforeStateQueue = new eT(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = qm, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = mm.name, this.clientVersion = hm.sdkClientVersion
          }
          _initializeWithPersistence(mm, Tm) {
            return Tm && (this._popupRedirectResolver = xT(Tm)), this._initializationPromise = this.queue((async () => {
              var fm, hm;
              if (!this._deleted && (this.persistenceManager = await RT.create(this, mm), !this._deleted)) {
                if (null === (fm = this._popupRedirectResolver) || void 0 === fm ? void 0 : fm._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (Am) {}
                await this.initializeCurrentUser(Tm), this.lastNotifiedUid = (null === (hm = this.currentUser) || void 0 === hm ? void 0 : hm.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const mm = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || mm ? this.currentUser && mm && this.currentUser.uid === mm.uid ? (this._currentUser._assign(mm), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(mm, !0) : void 0
          }
          async initializeCurrentUser(mm) {
            var Tm;
            const fm = await this.assertedPersistence.getCurrentUser();
            let hm = fm,
              Am = !1;
            if (mm && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const fm = null === (Tm = this.redirectUser) || void 0 === Tm ? void 0 : Tm._redirectEventId,
                am = null === hm || void 0 === hm ? void 0 : hm._redirectEventId,
                xm = await this.tryRedirectSignIn(mm);
              fm && fm !== am || !(null === xm || void 0 === xm ? void 0 : xm.user) || (hm = xm.user, Am = !0)
            }
            if (!hm) return this.directlySetCurrentUser(null);
            if (!hm._redirectEventId) {
              if (Am) try {
                await this.beforeStateQueue.runMiddleware(hm)
              } catch (am) {
                hm = fm, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(am)))
              }
              return hm ? this.reloadAndSetCurrentUserOrClear(hm) : this.directlySetCurrentUser(null)
            }
            return zm(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === hm._redirectEventId ? this.directlySetCurrentUser(hm) : this.reloadAndSetCurrentUserOrClear(hm)
          }
          async tryRedirectSignIn(mm) {
            let Tm = null;
            try {
              Tm = await this._popupRedirectResolver._completeRedirectFn(this, mm, !0)
            } catch (fm) {
              await this._setRedirectUser(null)
            }
            return Tm
          }
          async reloadAndSetCurrentUserOrClear(mm) {
            try {
              await mT(mm)
            } catch (Tm) {
              if ("auth/network-request-failed" !== (null === Tm || void 0 === Tm ? void 0 : Tm.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(mm)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const mm = navigator;
              return mm.languages && mm.languages[0] || mm.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(mm) {
            const Tm = mm ? (0, hm.J)(mm) : null;
            return Tm && zm(Tm.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(Tm && Tm._clone(this))
          }
          async _updateCurrentUser(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return mm && zm(this.tenantId === mm.tenantId, this, "tenant-id-mismatch"), Tm || await this.beforeStateQueue.runMiddleware(mm), this.queue((async () => {
              await this.directlySetCurrentUser(mm), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(mm) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(xT(mm))
            }))
          }
          async initializeRecaptchaConfig() {
            const mm = await nT(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              Tm = new zT(mm);
            if (null == this.tenantId ? this._agentRecaptchaConfig = Tm : this._tenantRecaptchaConfigs[this.tenantId] = Tm, Tm.emailPasswordEnabled) {
              new bT(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(mm) {
            this._errorFactory = new hm.e("auth", "Firebase", mm())
          }
          onAuthStateChanged(mm, Tm, fm) {
            return this.registerStateListener(this.authStateSubscription, mm, Tm, fm)
          }
          beforeAuthStateChanged(mm, Tm) {
            return this.beforeStateQueue.pushCallback(mm, Tm)
          }
          onIdTokenChanged(mm, Tm, fm) {
            return this.registerStateListener(this.idTokenSubscription, mm, Tm, fm)
          }
          toJSON() {
            var mm;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (mm = this._currentUser) || void 0 === mm ? void 0 : mm.toJSON()
            }
          }
          async _setRedirectUser(mm, Tm) {
            const fm = await this.getOrInitRedirectPersistenceManager(Tm);
            return null === mm ? fm.removeCurrentUser() : fm.setCurrentUser(mm)
          }
          async getOrInitRedirectPersistenceManager(mm) {
            if (!this.redirectPersistenceManager) {
              const Tm = mm && xT(mm) || this._popupRedirectResolver;
              zm(Tm, this, "argument-error"), this.redirectPersistenceManager = await RT.create(this, [xT(Tm._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(mm) {
            var Tm, fm;
            return this._isInitialized && await this.queue((async () => {})), (null === (Tm = this._currentUser) || void 0 === Tm ? void 0 : Tm._redirectEventId) === mm ? this._currentUser : (null === (fm = this.redirectUser) || void 0 === fm ? void 0 : fm._redirectEventId) === mm ? this.redirectUser : null
          }
          async _persistUserIfCurrent(mm) {
            if (mm === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(mm)))
          }
          _notifyListenersIfCurrent(mm) {
            mm === this.currentUser && this.notifyAuthListeners()
          }
          _key() {
            return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
          }
          _startProactiveRefresh() {
            this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
          }
          _stopProactiveRefresh() {
            this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
          }
          get _currentUser() {
            return this.currentUser
          }
          notifyAuthListeners() {
            var mm, Tm;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const fm = null !== (Tm = null === (mm = this.currentUser) || void 0 === mm ? void 0 : mm.uid) && void 0 !== Tm ? Tm : null;
            this.lastNotifiedUid !== fm && (this.lastNotifiedUid = fm, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(mm, Tm, fm, hm) {
            if (this._deleted) return () => {};
            const Am = "function" === typeof Tm ? Tm : Tm.next.bind(Tm),
              am = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return zm(am, this, "internal-error"), am.then((() => Am(this.currentUser))), "function" === typeof Tm ? mm.addObserver(Tm, fm, hm) : mm.addObserver(Tm)
          }
          async directlySetCurrentUser(mm) {
            this.currentUser && this.currentUser !== mm && this._currentUser._stopProactiveRefresh(), mm && this.isProactiveRefreshEnabled && mm._startProactiveRefresh(), this.currentUser = mm, mm ? await this.assertedPersistence.setCurrentUser(mm) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(mm) {
            return this.operations = this.operations.then(mm, mm), this.operations
          }
          get assertedPersistence() {
            return zm(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(mm) {
            mm && !this.frameworks.includes(mm) && (this.frameworks.push(mm), this.frameworks.sort(), this.clientVersion = QT(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var mm;
            const Tm = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (Tm["X-Firebase-gmpid"] = this.app.options.appId);
            const fm = await (null === (mm = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === mm ? void 0 : mm.getHeartbeatsHeader());
            fm && (Tm["X-Firebase-Client"] = fm);
            const hm = await this._getAppCheckToken();
            return hm && (Tm["X-Firebase-AppCheck"] = hm), Tm
          }
          async _getAppCheckToken() {
            var mm;
            const Tm = await (null === (mm = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === mm ? void 0 : mm.getToken());
            return (null === Tm || void 0 === Tm ? void 0 : Tm.error) && function(mm) {
              if (Vm.logLevel <= xm.d.WARN) {
                for (var Tm = arguments.length, fm = new Array(Tm > 1 ? Tm - 1 : 0), hm = 1; hm < Tm; hm++) fm[hm - 1] = arguments[hm];
                Vm.warn(`Auth (${Am.d}): ${mm}`, ...fm)
              }
            }(`Error while retrieving App Check token: ${Tm.error}`), null === Tm || void 0 === Tm ? void 0 : Tm.token
          }
        }

        function GT(mm) {
          return (0, hm.J)(mm)
        }
        class XT {
          constructor(mm) {
            this.auth = mm, this.observer = null, this.addObserver = (0, hm.t)((mm => this.observer = mm))
          }
          get next() {
            return zm(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function PT(mm, Tm) {
          const fm = (0, Am.z)(mm, "auth");
          if (fm.isInitialized()) {
            const mm = fm.getImmediate(),
              Am = fm.getOptions();
            if ((0, hm.w)(Am, null !== Tm && void 0 !== Tm ? Tm : {})) return mm;
            Km(mm, "already-initialized")
          }
          return fm.initialize({
            options: Tm
          })
        }

        function HT(mm, Tm, fm) {
          const hm = GT(mm);
          zm(hm._canInitEmulator, hm, "emulator-config-failed"), zm(/^https?:\/\//.test(Tm), hm, "invalid-emulator-scheme");
          const Am = !!(null === fm || void 0 === fm ? void 0 : fm.disableWarnings),
            am = yT(Tm),
            {
              host: xm,
              port: wm
            } = function(mm) {
              const Tm = yT(mm),
                fm = /(\/\/)?([^?#/]+)/.exec(mm.substr(Tm.length));
              if (!fm) return {
                host: "",
                port: null
              };
              const hm = fm[2].split("@").pop() || "",
                Am = /^(\[[^\]]+\])(:|$)/.exec(hm);
              if (Am) {
                const mm = Am[1];
                return {
                  host: mm,
                  port: CT(hm.substr(mm.length + 1))
                }
              } {
                const [mm, Tm] = hm.split(":");
                return {
                  host: mm,
                  port: CT(Tm)
                }
              }
            }(Tm),
            Dm = null === wm ? "" : `:${wm}`;
          hm.config.emulator = {
            url: `${am}//${xm}${Dm}/`
          }, hm.settings.appVerificationDisabledForTesting = !0, hm.emulatorConfig = Object.freeze({
            host: xm,
            port: wm,
            protocol: am.replace(":", ""),
            options: Object.freeze({
              disableWarnings: Am
            })
          }), Am || function() {
            function mm() {
              const mm = document.createElement("p"),
                Tm = mm.style;
              mm.innerText = "Running in emulator mode. Do not use with production credentials.", Tm.position = "fixed", Tm.width = "100%", Tm.backgroundColor = "#ffffff", Tm.border = ".1em solid #000000", Tm.color = "#b50000", Tm.bottom = "0px", Tm.left = "0px", Tm.margin = "0px", Tm.zIndex = "10000", Tm.textAlign = "center", mm.classList.add("firebase-emulator-warning"), document.body.appendChild(mm)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", mm) : mm())
          }()
        }

        function yT(mm) {
          const Tm = mm.indexOf(":");
          return Tm < 0 ? "" : mm.substr(0, Tm + 1)
        }

        function CT(mm) {
          if (!mm) return null;
          const Tm = Number(mm);
          return isNaN(Tm) ? null : Tm
        }
        class rT {
          constructor(mm, Tm) {
            this.providerId = mm, this.signInMethod = Tm
          }
          toJSON() {
            return Zm("not implemented")
          }
          _getIdTokenResponse(mm) {
            return Zm("not implemented")
          }
          _linkToIdToken(mm, Tm) {
            return Zm("not implemented")
          }
          _getReauthenticationResolver(mm) {
            return Zm("not implemented")
          }
        }
        async function sT(mm, Tm) {
          return Cm(mm, "POST", "/v1/accounts:resetPassword", ym(mm, Tm))
        }
        async function lT(mm, Tm) {
          return Cm(mm, "POST", "/v1/accounts:update", Tm)
        }
        async function MT(mm, Tm) {
          return sm(mm, "POST", "/v1/accounts:signInWithPassword", ym(mm, Tm))
        }
        async function uT(mm, Tm) {
          return Cm(mm, "POST", "/v1/accounts:sendOobCode", ym(mm, Tm))
        }
        async function BT(mm, Tm) {
          return uT(mm, Tm)
        }
        async function LT(mm, Tm) {
          return uT(mm, Tm)
        }
        class vT extends rT {
          constructor(mm, Tm, fm) {
            let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", fm), this._email = mm, this._password = Tm, this._tenantId = hm
          }
          static _fromEmailAndPassword(mm, Tm) {
            return new vT(mm, Tm, "password")
          }
          static _fromEmailAndCode(mm, Tm) {
            return new vT(mm, Tm, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(mm) {
            const Tm = "string" === typeof mm ? JSON.parse(mm) : mm;
            if ((null === Tm || void 0 === Tm ? void 0 : Tm.email) && (null === Tm || void 0 === Tm ? void 0 : Tm.password)) {
              if ("password" === Tm.signInMethod) return this._fromEmailAndPassword(Tm.email, Tm.password);
              if ("emailLink" === Tm.signInMethod) return this._fromEmailAndCode(Tm.email, Tm.password, Tm.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(mm) {
            var Tm;
            switch (this.signInMethod) {
              case "password":
                const fm = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (Tm = mm._getRecaptchaConfig()) || void 0 === Tm ? void 0 : Tm.emailPasswordEnabled) {
                  const Tm = await ST(mm, fm, "signInWithPassword");
                  return MT(mm, Tm)
                }
                return MT(mm, fm).catch((async Tm => {
                  if ("auth/missing-recaptcha-token" === Tm.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const Tm = await ST(mm, fm, "signInWithPassword");
                    return MT(mm, Tm)
                  }
                  return Promise.reject(Tm)
                }));
              case "emailLink":
                return async function(mm, Tm) {
                  return sm(mm, "POST", "/v1/accounts:signInWithEmailLink", ym(mm, Tm))
                }(mm, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Km(mm, "internal-error")
            }
          }
          async _linkToIdToken(mm, Tm) {
            switch (this.signInMethod) {
              case "password":
                return lT(mm, {
                  idToken: Tm,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(mm, Tm) {
                  return sm(mm, "POST", "/v1/accounts:signInWithEmailLink", ym(mm, Tm))
                }(mm, {
                  idToken: Tm,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Km(mm, "internal-error")
            }
          }
          _getReauthenticationResolver(mm) {
            return this._getIdTokenResponse(mm)
          }
        }
        async function tT(mm, Tm) {
          return sm(mm, "POST", "/v1/accounts:signInWithIdp", ym(mm, Tm))
        }
        class UT extends rT {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(mm) {
            const Tm = new UT(mm.providerId, mm.signInMethod);
            return mm.idToken || mm.accessToken ? (mm.idToken && (Tm.idToken = mm.idToken), mm.accessToken && (Tm.accessToken = mm.accessToken), mm.nonce && !mm.pendingToken && (Tm.nonce = mm.nonce), mm.pendingToken && (Tm.pendingToken = mm.pendingToken)) : mm.oauthToken && mm.oauthTokenSecret ? (Tm.accessToken = mm.oauthToken, Tm.secret = mm.oauthTokenSecret) : Km("argument-error"), Tm
          }
          toJSON() {
            return {
              idToken: this.idToken,
              accessToken: this.accessToken,
              secret: this.secret,
              nonce: this.nonce,
              pendingToken: this.pendingToken,
              providerId: this.providerId,
              signInMethod: this.signInMethod
            }
          }
          static fromJSON(mm) {
            const Tm = "string" === typeof mm ? JSON.parse(mm) : mm,
              {
                providerId: fm,
                signInMethod: hm
              } = Tm,
              Am = am(Tm, ["providerId", "signInMethod"]);
            if (!fm || !hm) return null;
            const xm = new UT(fm, hm);
            return xm.idToken = Am.idToken || void 0, xm.accessToken = Am.accessToken || void 0, xm.secret = Am.secret, xm.nonce = Am.nonce, xm.pendingToken = Am.pendingToken || null, xm
          }
          _getIdTokenResponse(mm) {
            return tT(mm, this.buildRequest())
          }
          _linkToIdToken(mm, Tm) {
            const fm = this.buildRequest();
            return fm.idToken = Tm, tT(mm, fm)
          }
          _getReauthenticationResolver(mm) {
            const Tm = this.buildRequest();
            return Tm.autoCreate = !1, tT(mm, Tm)
          }
          buildRequest() {
            const mm = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) mm.pendingToken = this.pendingToken;
            else {
              const Tm = {};
              this.idToken && (Tm.id_token = this.idToken), this.accessToken && (Tm.access_token = this.accessToken), this.secret && (Tm.oauth_token_secret = this.secret), Tm.providerId = this.providerId, this.nonce && !this.pendingToken && (Tm.nonce = this.nonce), mm.postBody = (0, hm.ab)(Tm)
            }
            return mm
          }
        }
        const dT = {
          USER_NOT_FOUND: "user-not-found"
        };
        class gT extends rT {
          constructor(mm) {
            super("phone", "phone"), this.params = mm
          }
          static _fromVerification(mm, Tm) {
            return new gT({
              verificationId: mm,
              verificationCode: Tm
            })
          }
          static _fromTokenResponse(mm, Tm) {
            return new gT({
              phoneNumber: mm,
              temporaryProof: Tm
            })
          }
          _getIdTokenResponse(mm) {
            return async function(mm, Tm) {
              return sm(mm, "POST", "/v1/accounts:signInWithPhoneNumber", ym(mm, Tm))
            }(mm, this._makeVerificationRequest())
          }
          _linkToIdToken(mm, Tm) {
            return async function(mm, Tm) {
              const fm = await sm(mm, "POST", "/v1/accounts:signInWithPhoneNumber", ym(mm, Tm));
              if (fm.temporaryProof) throw um(mm, "account-exists-with-different-credential", fm);
              return fm
            }(mm, Object.assign({
              idToken: Tm
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(mm) {
            return async function(mm, Tm) {
              return sm(mm, "POST", "/v1/accounts:signInWithPhoneNumber", ym(mm, Object.assign(Object.assign({}, Tm), {
                operation: "REAUTH"
              })), dT)
            }(mm, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: mm,
              phoneNumber: Tm,
              verificationId: fm,
              verificationCode: hm
            } = this.params;
            return mm && Tm ? {
              temporaryProof: mm,
              phoneNumber: Tm
            } : {
              sessionInfo: fm,
              code: hm
            }
          }
          toJSON() {
            const mm = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (mm.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (mm.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (mm.verificationCode = this.params.verificationCode), this.params.verificationId && (mm.verificationId = this.params.verificationId), mm
          }
          static fromJSON(mm) {
            "string" === typeof mm && (mm = JSON.parse(mm));
            const {
              verificationId: Tm,
              verificationCode: fm,
              phoneNumber: hm,
              temporaryProof: Am
            } = mm;
            return fm || Tm || hm || Am ? new gT({
              verificationId: Tm,
              verificationCode: fm,
              phoneNumber: hm,
              temporaryProof: Am
            }) : null
          }
        }
        class WT {
          constructor(mm) {
            var Tm, fm, Am, am, xm, wm;
            const Dm = (0, hm._)((0, hm.z)(mm)),
              im = null !== (Tm = Dm.apiKey) && void 0 !== Tm ? Tm : null,
              Rm = null !== (fm = Dm.oobCode) && void 0 !== fm ? fm : null,
              pm = function(mm) {
                switch (mm) {
                  case "recoverEmail":
                    return "RECOVER_EMAIL";
                  case "resetPassword":
                    return "PASSWORD_RESET";
                  case "signIn":
                    return "EMAIL_SIGNIN";
                  case "verifyEmail":
                    return "VERIFY_EMAIL";
                  case "verifyAndChangeEmail":
                    return "VERIFY_AND_CHANGE_EMAIL";
                  case "revertSecondFactorAddition":
                    return "REVERT_SECOND_FACTOR_ADDITION";
                  default:
                    return null
                }
              }(null !== (Am = Dm.mode) && void 0 !== Am ? Am : null);
            zm(im && Rm && pm, "argument-error"), this.apiKey = im, this.operation = pm, this.code = Rm, this.continueUrl = null !== (am = Dm.continueUrl) && void 0 !== am ? am : null, this.languageCode = null !== (xm = Dm.languageCode) && void 0 !== xm ? xm : null, this.tenantId = null !== (wm = Dm.tenantId) && void 0 !== wm ? wm : null
          }
          static parseLink(mm) {
            const Tm = function(mm) {
              const Tm = (0, hm._)((0, hm.z)(mm)).link,
                fm = Tm ? (0, hm._)((0, hm.z)(Tm)).deep_link_id : null,
                Am = (0, hm._)((0, hm.z)(mm)).deep_link_id;
              return (Am ? (0, hm._)((0, hm.z)(Am)).link : null) || Am || fm || Tm || mm
            }(mm);
            try {
              return new WT(Tm)
            } catch (fm) {
              return null
            }
          }
        }

        function FT(mm) {
          return WT.parseLink(mm)
        }
        class mf {
          constructor() {
            this.providerId = mf.PROVIDER_ID
          }
          static credential(mm, Tm) {
            return vT._fromEmailAndPassword(mm, Tm)
          }
          static credentialWithLink(mm, Tm) {
            const fm = WT.parseLink(Tm);
            return zm(fm, "argument-error"), vT._fromEmailAndCode(mm, fm.code, fm.tenantId)
          }
        }
        mf.PROVIDER_ID = "password", mf.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", mf.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class Tf {
          constructor(mm) {
            this.providerId = mm, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(mm) {
            this.defaultLanguageCode = mm
          }
          setCustomParameters(mm) {
            return this.customParameters = mm, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class ff extends Tf {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(mm) {
            return this.scopes.includes(mm) || this.scopes.push(mm), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class hf extends ff {
          static credentialFromJSON(mm) {
            const Tm = "string" === typeof mm ? JSON.parse(mm) : mm;
            return zm("providerId" in Tm && "signInMethod" in Tm, "argument-error"), UT._fromParams(Tm)
          }
          credential(mm) {
            return this._credential(Object.assign(Object.assign({}, mm), {
              nonce: mm.rawNonce
            }))
          }
          _credential(mm) {
            return zm(mm.idToken || mm.accessToken, "argument-error"), UT._fromParams(Object.assign(Object.assign({}, mm), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(mm) {
            return hf.oauthCredentialFromTaggedObject(mm)
          }
          static credentialFromError(mm) {
            return hf.oauthCredentialFromTaggedObject(mm.customData || {})
          }
          static oauthCredentialFromTaggedObject(mm) {
            let {
              _tokenResponse: Tm
            } = mm;
            if (!Tm) return null;
            const {
              oauthIdToken: fm,
              oauthAccessToken: hm,
              oauthTokenSecret: Am,
              pendingToken: am,
              nonce: xm,
              providerId: wm
            } = Tm;
            if (!hm && !Am && !fm && !am) return null;
            if (!wm) return null;
            try {
              return new hf(wm)._credential({
                idToken: fm,
                accessToken: hm,
                nonce: xm,
                pendingToken: am
              })
            } catch (Dm) {
              return null
            }
          }
        }
        class Af extends ff {
          constructor() {
            super("facebook.com")
          }
          static credential(mm) {
            return UT._fromParams({
              providerId: Af.PROVIDER_ID,
              signInMethod: Af.FACEBOOK_SIGN_IN_METHOD,
              accessToken: mm
            })
          }
          static credentialFromResult(mm) {
            return Af.credentialFromTaggedObject(mm)
          }
          static credentialFromError(mm) {
            return Af.credentialFromTaggedObject(mm.customData || {})
          }
          static credentialFromTaggedObject(mm) {
            let {
              _tokenResponse: Tm
            } = mm;
            if (!Tm || !("oauthAccessToken" in Tm)) return null;
            if (!Tm.oauthAccessToken) return null;
            try {
              return Af.credential(Tm.oauthAccessToken)
            } catch (fm) {
              return null
            }
          }
        }
        Af.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Af.PROVIDER_ID = "facebook.com";
        class af extends ff {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(mm, Tm) {
            return UT._fromParams({
              providerId: af.PROVIDER_ID,
              signInMethod: af.GOOGLE_SIGN_IN_METHOD,
              idToken: mm,
              accessToken: Tm
            })
          }
          static credentialFromResult(mm) {
            return af.credentialFromTaggedObject(mm)
          }
          static credentialFromError(mm) {
            return af.credentialFromTaggedObject(mm.customData || {})
          }
          static credentialFromTaggedObject(mm) {
            let {
              _tokenResponse: Tm
            } = mm;
            if (!Tm) return null;
            const {
              oauthIdToken: fm,
              oauthAccessToken: hm
            } = Tm;
            if (!fm && !hm) return null;
            try {
              return af.credential(fm, hm)
            } catch (Am) {
              return null
            }
          }
        }
        af.GOOGLE_SIGN_IN_METHOD = "google.com", af.PROVIDER_ID = "google.com";
        class xf extends ff {
          constructor() {
            super("github.com")
          }
          static credential(mm) {
            return UT._fromParams({
              providerId: xf.PROVIDER_ID,
              signInMethod: xf.GITHUB_SIGN_IN_METHOD,
              accessToken: mm
            })
          }
          static credentialFromResult(mm) {
            return xf.credentialFromTaggedObject(mm)
          }
          static credentialFromError(mm) {
            return xf.credentialFromTaggedObject(mm.customData || {})
          }
          static credentialFromTaggedObject(mm) {
            let {
              _tokenResponse: Tm
            } = mm;
            if (!Tm || !("oauthAccessToken" in Tm)) return null;
            if (!Tm.oauthAccessToken) return null;
            try {
              return xf.credential(Tm.oauthAccessToken)
            } catch (fm) {
              return null
            }
          }
        }
        xf.GITHUB_SIGN_IN_METHOD = "github.com", xf.PROVIDER_ID = "github.com";
        class wf extends rT {
          constructor(mm, Tm) {
            super(mm, mm), this.pendingToken = Tm
          }
          _getIdTokenResponse(mm) {
            return tT(mm, this.buildRequest())
          }
          _linkToIdToken(mm, Tm) {
            const fm = this.buildRequest();
            return fm.idToken = Tm, tT(mm, fm)
          }
          _getReauthenticationResolver(mm) {
            const Tm = this.buildRequest();
            return Tm.autoCreate = !1, tT(mm, Tm)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(mm) {
            const Tm = "string" === typeof mm ? JSON.parse(mm) : mm,
              {
                providerId: fm,
                signInMethod: hm,
                pendingToken: Am
              } = Tm;
            return fm && hm && Am && fm === hm ? new wf(fm, Am) : null
          }
          static _create(mm, Tm) {
            return new wf(mm, Tm)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class Df extends Tf {
          constructor(mm) {
            zm(mm.startsWith("saml."), "argument-error"), super(mm)
          }
          static credentialFromResult(mm) {
            return Df.samlCredentialFromTaggedObject(mm)
          }
          static credentialFromError(mm) {
            return Df.samlCredentialFromTaggedObject(mm.customData || {})
          }
          static credentialFromJSON(mm) {
            const Tm = wf.fromJSON(mm);
            return zm(Tm, "argument-error"), Tm
          }
          static samlCredentialFromTaggedObject(mm) {
            let {
              _tokenResponse: Tm
            } = mm;
            if (!Tm) return null;
            const {
              pendingToken: fm,
              providerId: hm
            } = Tm;
            if (!fm || !hm) return null;
            try {
              return wf._create(hm, fm)
            } catch (Am) {
              return null
            }
          }
        }
        class Rf extends ff {
          constructor() {
            super("twitter.com")
          }
          static credential(mm, Tm) {
            return UT._fromParams({
              providerId: Rf.PROVIDER_ID,
              signInMethod: Rf.TWITTER_SIGN_IN_METHOD,
              oauthToken: mm,
              oauthTokenSecret: Tm
            })
          }
          static credentialFromResult(mm) {
            return Rf.credentialFromTaggedObject(mm)
          }
          static credentialFromError(mm) {
            return Rf.credentialFromTaggedObject(mm.customData || {})
          }
          static credentialFromTaggedObject(mm) {
            let {
              _tokenResponse: Tm
            } = mm;
            if (!Tm) return null;
            const {
              oauthAccessToken: fm,
              oauthTokenSecret: hm
            } = Tm;
            if (!fm || !hm) return null;
            try {
              return Rf.credential(fm, hm)
            } catch (Am) {
              return null
            }
          }
        }
        async function pf(mm, Tm) {
          return sm(mm, "POST", "/v1/accounts:signUp", ym(mm, Tm))
        }
        Rf.TWITTER_SIGN_IN_METHOD = "twitter.com", Rf.PROVIDER_ID = "twitter.com";
        class Ef {
          constructor(mm) {
            this.user = mm.user, this.providerId = mm.providerId, this._tokenResponse = mm._tokenResponse, this.operationType = mm.operationType
          }
          static async _fromIdTokenResponse(mm, Tm, fm) {
            let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Am = await AT._fromIdTokenResponse(mm, fm, hm),
              am = of(fm);
            return new Ef({
              user: Am,
              providerId: am,
              _tokenResponse: fm,
              operationType: Tm
            })
          }
          static async _forOperation(mm, Tm, fm) {
            await mm._updateTokensIfNecessary(fm, !0);
            const hm = of(fm);
            return new Ef({
              user: mm,
              providerId: hm,
              _tokenResponse: fm,
              operationType: Tm
            })
          }
        }

        function of(mm) {
          return mm.providerId ? mm.providerId : "phoneNumber" in mm ? "phone" : null
        }
        async function Of(mm) {
          var Tm;
          const fm = GT(mm);
          if (await fm._initializationPromise, null === (Tm = fm.currentUser) || void 0 === Tm ? void 0 : Tm.isAnonymous) return new Ef({
            user: fm.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const hm = await pf(fm, {
              returnSecureToken: !0
            }),
            Am = await Ef._fromIdTokenResponse(fm, "signIn", hm, !0);
          return await fm._updateCurrentUser(Am.user), Am
        }
        class Yf extends hm.h {
          constructor(mm, Tm, fm, hm) {
            var Am;
            super(Tm.code, Tm.message), this.operationType = fm, this.user = hm, Object.setPrototypeOf(this, Yf.prototype), this.customData = {
              appName: mm.name,
              tenantId: null !== (Am = mm.tenantId) && void 0 !== Am ? Am : void 0,
              _serverResponse: Tm.customData._serverResponse,
              operationType: fm
            }
          }
          static _fromErrorAndOperation(mm, Tm, fm, hm) {
            return new Yf(mm, Tm, fm, hm)
          }
        }

        function qf(mm, Tm, fm, hm) {
          return ("reauthenticate" === Tm ? fm._getReauthenticationResolver(mm) : fm._getIdTokenResponse(mm)).catch((fm => {
            if ("auth/multi-factor-auth-required" === fm.code) throw Yf._fromErrorAndOperation(mm, fm, Tm, hm);
            throw fm
          }))
        }

        function jf(mm) {
          return new Set(mm.map((mm => {
            let {
              providerId: Tm
            } = mm;
            return Tm
          })).filter((mm => !!mm)))
        }
        async function Vf(mm, Tm) {
          const fm = (0, hm.J)(mm);
          await Kf(!0, fm, Tm);
          const {
            providerUserInfo: Am
          } = await async function(mm, Tm) {
            return Cm(mm, "POST", "/v1/accounts:update", Tm)
          }(fm.auth, {
            idToken: await fm.getIdToken(),
            deleteProvider: [Tm]
          }), am = jf(Am || []);
          return fm.providerData = fm.providerData.filter((mm => am.has(mm.providerId))), am.has("phone") || (fm.phoneNumber = null), await fm.auth._persistUserIfCurrent(fm), fm
        }
        async function If(mm, Tm) {
          let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const hm = await gm(mm, Tm._linkToIdToken(mm.auth, await mm.getIdToken()), fm);
          return Ef._forOperation(mm, "link", hm)
        }
        async function Kf(mm, Tm, fm) {
          await mT(Tm);
          const hm = !1 === mm ? "provider-already-linked" : "no-such-provider";
          zm(jf(Tm.providerData).has(fm) === mm, Tm.auth, hm)
        }
        async function Qf(mm, Tm) {
          let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: hm
          } = mm, Am = "reauthenticate";
          try {
            const am = await gm(mm, qf(hm, Am, Tm, mm), fm);
            zm(am.idToken, hm, "internal-error");
            const xm = dm(am.idToken);
            zm(xm, hm, "internal-error");
            const {
              sub: wm
            } = xm;
            return zm(mm.uid === wm, hm, "user-mismatch"), Ef._forOperation(mm, Am, am)
          } catch (am) {
            throw "auth/user-not-found" === (null === am || void 0 === am ? void 0 : am.code) && Km(hm, "user-mismatch"), am
          }
        }
        async function nf(mm, Tm) {
          let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const hm = "signIn",
            Am = await qf(mm, hm, Tm),
            am = await Ef._fromIdTokenResponse(mm, hm, Am);
          return fm || await mm._updateCurrentUser(am.user), am
        }
        async function Jf(mm, Tm) {
          return nf(GT(mm), Tm)
        }
        async function zf(mm, Tm) {
          const fm = (0, hm.J)(mm);
          return await Kf(!1, fm, Tm.providerId), If(fm, Tm)
        }
        async function Zf(mm, Tm) {
          return Qf((0, hm.J)(mm), Tm)
        }
        async function kf(mm, Tm) {
          const fm = GT(mm),
            hm = await async function(mm, Tm) {
              return sm(mm, "POST", "/v1/accounts:signInWithCustomToken", ym(mm, Tm))
            }(fm, {
              token: Tm,
              returnSecureToken: !0
            }), Am = await Ef._fromIdTokenResponse(fm, "signIn", hm);
          return await fm._updateCurrentUser(Am.user), Am
        }
        class bf {
          constructor(mm, Tm) {
            this.factorId = mm, this.uid = Tm.mfaEnrollmentId, this.enrollmentTime = new Date(Tm.enrolledAt).toUTCString(), this.displayName = Tm.displayName
          }
          static _fromServerResponse(mm, Tm) {
            return "phoneInfo" in Tm ? Sf._fromServerResponse(mm, Tm) : "totpInfo" in Tm ? ef._fromServerResponse(mm, Tm) : Km(mm, "internal-error")
          }
        }
        class Sf extends bf {
          constructor(mm) {
            super("phone", mm), this.phoneNumber = mm.phoneInfo
          }
          static _fromServerResponse(mm, Tm) {
            return new Sf(Tm)
          }
        }
        class ef extends bf {
          constructor(mm) {
            super("totp", mm)
          }
          static _fromServerResponse(mm, Tm) {
            return new ef(Tm)
          }
        }

        function Nf(mm, Tm, fm) {
          var hm;
          zm((null === (hm = fm.url) || void 0 === hm ? void 0 : hm.length) > 0, mm, "invalid-continue-uri"), zm("undefined" === typeof fm.dynamicLinkDomain || fm.dynamicLinkDomain.length > 0, mm, "invalid-dynamic-link-domain"), Tm.continueUrl = fm.url, Tm.dynamicLinkDomain = fm.dynamicLinkDomain, Tm.canHandleCodeInApp = fm.handleCodeInApp, fm.iOS && (zm(fm.iOS.bundleId.length > 0, mm, "missing-ios-bundle-id"), Tm.iOSBundleId = fm.iOS.bundleId), fm.android && (zm(fm.android.packageName.length > 0, mm, "missing-android-pkg-name"), Tm.androidInstallApp = fm.android.installApp, Tm.androidMinimumVersionCode = fm.android.minimumVersion, Tm.androidPackageName = fm.android.packageName)
        }
        async function Gf(mm, Tm, fm) {
          var hm;
          const Am = GT(mm),
            am = {
              requestType: "PASSWORD_RESET",
              email: Tm,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (hm = Am._getRecaptchaConfig()) || void 0 === hm ? void 0 : hm.emailPasswordEnabled) {
            const mm = await ST(Am, am, "getOobCode", !0);
            fm && Nf(Am, mm, fm), await BT(Am, mm)
          } else fm && Nf(Am, am, fm), await BT(Am, am).catch((async mm => {
            if ("auth/missing-recaptcha-token" !== mm.code) return Promise.reject(mm);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const mm = await ST(Am, am, "getOobCode", !0);
              fm && Nf(Am, mm, fm), await BT(Am, mm)
            }
          }))
        }
        async function Xf(mm, Tm, fm) {
          await sT((0, hm.J)(mm), {
            oobCode: Tm,
            newPassword: fm
          })
        }
        async function Pf(mm, Tm) {
          await async function(mm, Tm) {
            return Cm(mm, "POST", "/v1/accounts:update", ym(mm, Tm))
          }((0, hm.J)(mm), {
            oobCode: Tm
          })
        }
        async function Hf(mm, Tm) {
          const fm = (0, hm.J)(mm),
            Am = await sT(fm, {
              oobCode: Tm
            }),
            am = Am.requestType;
          switch (zm(am, fm, "internal-error"), am) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              zm(Am.newEmail, fm, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              zm(Am.mfaInfo, fm, "internal-error");
            default:
              zm(Am.email, fm, "internal-error")
          }
          let xm = null;
          return Am.mfaInfo && (xm = bf._fromServerResponse(GT(fm), Am.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === Am.requestType ? Am.newEmail : Am.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === Am.requestType ? Am.email : Am.newEmail) || null,
              multiFactorInfo: xm
            },
            operation: am
          }
        }
        async function yf(mm, Tm) {
          const {
            data: fm
          } = await Hf((0, hm.J)(mm), Tm);
          return fm.email
        }
        async function Cf(mm, Tm, fm) {
          var hm;
          const Am = GT(mm),
            am = {
              returnSecureToken: !0,
              email: Tm,
              password: fm,
              clientType: "CLIENT_TYPE_WEB"
            };
          let xm;
          if (null === (hm = Am._getRecaptchaConfig()) || void 0 === hm ? void 0 : hm.emailPasswordEnabled) {
            const mm = await ST(Am, am, "signUpPassword");
            xm = pf(Am, mm)
          } else xm = pf(Am, am).catch((async mm => {
            if ("auth/missing-recaptcha-token" === mm.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const mm = await ST(Am, am, "signUpPassword");
              return pf(Am, mm)
            }
            return Promise.reject(mm)
          }));
          const wm = await xm.catch((mm => Promise.reject(mm))),
            Dm = await Ef._fromIdTokenResponse(Am, "signIn", wm);
          return await Am._updateCurrentUser(Dm.user), Dm
        }

        function rf(mm, Tm, fm) {
          return Jf((0, hm.J)(mm), mf.credential(Tm, fm))
        }
        async function sf(mm, Tm, fm) {
          var hm;
          const Am = GT(mm),
            am = {
              requestType: "EMAIL_SIGNIN",
              email: Tm,
              clientType: "CLIENT_TYPE_WEB"
            };

          function xm(mm, Tm) {
            zm(Tm.handleCodeInApp, Am, "argument-error"), Tm && Nf(Am, mm, Tm)
          }
          if (null === (hm = Am._getRecaptchaConfig()) || void 0 === hm ? void 0 : hm.emailPasswordEnabled) {
            const mm = await ST(Am, am, "getOobCode", !0);
            xm(mm, fm), await LT(Am, mm)
          } else xm(am, fm), await LT(Am, am).catch((async mm => {
            if ("auth/missing-recaptcha-token" !== mm.code) return Promise.reject(mm);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const mm = await ST(Am, am, "getOobCode", !0);
              xm(mm, fm), await LT(Am, mm)
            }
          }))
        }

        function lf(mm, Tm) {
          const fm = WT.parseLink(Tm);
          return "EMAIL_SIGNIN" === (null === fm || void 0 === fm ? void 0 : fm.operation)
        }
        async function Mf(mm, Tm, fm) {
          const Am = (0, hm.J)(mm),
            am = mf.credentialWithLink(Tm, fm || bm());
          return zm(am._tenantId === (Am.tenantId || null), Am, "tenant-id-mismatch"), Jf(Am, am)
        }
        async function uf(mm, Tm) {
          const fm = {
              identifier: Tm,
              continueUri: Sm() ? bm() : "http://localhost"
            },
            {
              signinMethods: Am
            } = await async function(mm, Tm) {
              return Cm(mm, "POST", "/v1/accounts:createAuthUri", ym(mm, Tm))
            }((0, hm.J)(mm), fm);
          return Am || []
        }
        async function Bf(mm, Tm) {
          const fm = (0, hm.J)(mm),
            Am = {
              requestType: "VERIFY_EMAIL",
              idToken: await mm.getIdToken()
            };
          Tm && Nf(fm.auth, Am, Tm);
          const {
            email: am
          } = await async function(mm, Tm) {
            return uT(mm, Tm)
          }(fm.auth, Am);
          am !== mm.email && await mm.reload()
        }
        async function Lf(mm, Tm, fm) {
          const Am = (0, hm.J)(mm),
            am = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await mm.getIdToken(),
              newEmail: Tm
            };
          fm && Nf(Am.auth, am, fm);
          const {
            email: xm
          } = await async function(mm, Tm) {
            return uT(mm, Tm)
          }(Am.auth, am);
          xm !== mm.email && await mm.reload()
        }
        async function vf(mm, Tm) {
          let {
            displayName: fm,
            photoURL: Am
          } = Tm;
          if (void 0 === fm && void 0 === Am) return;
          const am = (0, hm.J)(mm),
            xm = {
              idToken: await am.getIdToken(),
              displayName: fm,
              photoUrl: Am,
              returnSecureToken: !0
            },
            wm = await gm(am, async function(mm, Tm) {
              return Cm(mm, "POST", "/v1/accounts:update", Tm)
            }(am.auth, xm));
          am.displayName = wm.displayName || null, am.photoURL = wm.photoUrl || null;
          const Dm = am.providerData.find((mm => {
            let {
              providerId: Tm
            } = mm;
            return "password" === Tm
          }));
          Dm && (Dm.displayName = am.displayName, Dm.photoURL = am.photoURL), await am._updateTokensIfNecessary(wm)
        }

        function tf(mm, Tm) {
          return df((0, hm.J)(mm), Tm, null)
        }

        function Uf(mm, Tm) {
          return df((0, hm.J)(mm), null, Tm)
        }
        async function df(mm, Tm, fm) {
          const {
            auth: hm
          } = mm, Am = {
            idToken: await mm.getIdToken(),
            returnSecureToken: !0
          };
          Tm && (Am.email = Tm), fm && (Am.password = fm);
          const am = await gm(mm, lT(hm, Am));
          await mm._updateTokensIfNecessary(am, !0)
        }
        class gf {
          constructor(mm, Tm) {
            let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = mm, this.providerId = Tm, this.profile = fm
          }
        }
        class Wf extends gf {
          constructor(mm, Tm, fm, hm) {
            super(mm, Tm, fm), this.username = hm
          }
        }
        class Ff extends gf {
          constructor(mm, Tm) {
            super(mm, "facebook.com", Tm)
          }
        }
        class mh extends Wf {
          constructor(mm, Tm) {
            super(mm, "github.com", Tm, "string" === typeof(null === Tm || void 0 === Tm ? void 0 : Tm.login) ? null === Tm || void 0 === Tm ? void 0 : Tm.login : null)
          }
        }
        class Th extends gf {
          constructor(mm, Tm) {
            super(mm, "google.com", Tm)
          }
        }
        class fh extends Wf {
          constructor(mm, Tm, fm) {
            super(mm, "twitter.com", Tm, fm)
          }
        }

        function hh(mm) {
          const {
            user: Tm,
            _tokenResponse: fm
          } = mm;
          return Tm.isAnonymous && !fm ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(mm) {
            var Tm, fm;
            if (!mm) return null;
            const {
              providerId: hm
            } = mm, Am = mm.rawUserInfo ? JSON.parse(mm.rawUserInfo) : {}, am = mm.isNewUser || "identitytoolkit#SignupNewUserResponse" === mm.kind;
            if (!hm && (null === mm || void 0 === mm ? void 0 : mm.idToken)) {
              const hm = null === (fm = null === (Tm = dm(mm.idToken)) || void 0 === Tm ? void 0 : Tm.firebase) || void 0 === fm ? void 0 : fm.sign_in_provider;
              if (hm) return new gf(am, "anonymous" !== hm && "custom" !== hm ? hm : null)
            }
            if (!hm) return null;
            switch (hm) {
              case "facebook.com":
                return new Ff(am, Am);
              case "github.com":
                return new mh(am, Am);
              case "google.com":
                return new Th(am, Am);
              case "twitter.com":
                return new fh(am, Am, mm.screenName || null);
              case "custom":
              case "anonymous":
                return new gf(am, null);
              default:
                return new gf(am, hm, Am)
            }
          }(fm)
        }

        function Ah(mm, Tm) {
          return (0, hm.J)(mm).setPersistence(Tm)
        }

        function ah(mm) {
          return GT(mm).initializeRecaptchaConfig()
        }

        function xh(mm, Tm, fm, Am) {
          return (0, hm.J)(mm).onIdTokenChanged(Tm, fm, Am)
        }

        function wh(mm, Tm, fm) {
          return (0, hm.J)(mm).beforeAuthStateChanged(Tm, fm)
        }

        function Dh(mm, Tm, fm, Am) {
          return (0, hm.J)(mm).onAuthStateChanged(Tm, fm, Am)
        }

        function ih(mm) {
          (0, hm.J)(mm).useDeviceLanguage()
        }

        function Rh(mm, Tm) {
          return (0, hm.J)(mm).updateCurrentUser(Tm)
        }

        function ph(mm) {
          return (0, hm.J)(mm).signOut()
        }
        async function Eh(mm) {
          return (0, hm.J)(mm).delete()
        }
        class oh {
          constructor(mm, Tm, fm) {
            this.type = mm, this.credential = Tm, this.auth = fm
          }
          static _fromIdtoken(mm, Tm) {
            return new oh("enroll", mm, Tm)
          }
          static _fromMfaPendingCredential(mm) {
            return new oh("signin", mm)
          }
          toJSON() {
            const mm = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [mm]: this.credential
              }
            }
          }
          static fromJSON(mm) {
            var Tm, fm;
            if (null === mm || void 0 === mm ? void 0 : mm.multiFactorSession) {
              if (null === (Tm = mm.multiFactorSession) || void 0 === Tm ? void 0 : Tm.pendingCredential) return oh._fromMfaPendingCredential(mm.multiFactorSession.pendingCredential);
              if (null === (fm = mm.multiFactorSession) || void 0 === fm ? void 0 : fm.idToken) return oh._fromIdtoken(mm.multiFactorSession.idToken)
            }
            return null
          }
        }
        class Oh {
          constructor(mm, Tm, fm) {
            this.session = mm, this.hints = Tm, this.signInResolver = fm
          }
          static _fromError(mm, Tm) {
            const fm = GT(mm),
              hm = Tm.customData._serverResponse,
              Am = (hm.mfaInfo || []).map((mm => bf._fromServerResponse(fm, mm)));
            zm(hm.mfaPendingCredential, fm, "internal-error");
            const am = oh._fromMfaPendingCredential(hm.mfaPendingCredential);
            return new Oh(am, Am, (async mm => {
              const Am = await mm._process(fm, am);
              delete hm.mfaInfo, delete hm.mfaPendingCredential;
              const xm = Object.assign(Object.assign({}, hm), {
                idToken: Am.idToken,
                refreshToken: Am.refreshToken
              });
              switch (Tm.operationType) {
                case "signIn":
                  const mm = await Ef._fromIdTokenResponse(fm, Tm.operationType, xm);
                  return await fm._updateCurrentUser(mm.user), mm;
                case "reauthenticate":
                  return zm(Tm.user, fm, "internal-error"), Ef._forOperation(Tm.user, Tm.operationType, xm);
                default:
                  Km(fm, "internal-error")
              }
            }))
          }
          async resolveSignIn(mm) {
            const Tm = mm;
            return this.signInResolver(Tm)
          }
        }

        function Yh(mm, Tm) {
          var fm;
          const Am = (0, hm.J)(mm),
            am = Tm;
          return zm(Tm.customData.operationType, Am, "argument-error"), zm(null === (fm = am.customData._serverResponse) || void 0 === fm ? void 0 : fm.mfaPendingCredential, Am, "argument-error"), Oh._fromError(Am, am)
        }
        class qh {
          constructor(mm) {
            this.user = mm, this.enrolledFactors = [], mm._onReload((Tm => {
              Tm.mfaInfo && (this.enrolledFactors = Tm.mfaInfo.map((Tm => bf._fromServerResponse(mm.auth, Tm))))
            }))
          }
          static _fromUser(mm) {
            return new qh(mm)
          }
          async getSession() {
            return oh._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(mm, Tm) {
            const fm = mm,
              hm = await this.getSession(),
              Am = await gm(this.user, fm._process(this.user.auth, hm, Tm));
            return await this.user._updateTokensIfNecessary(Am), this.user.reload()
          }
          async unenroll(mm) {
            const Tm = "string" === typeof mm ? mm : mm.uid,
              fm = await this.user.getIdToken();
            try {
              const mm = await gm(this.user, (hm = this.user.auth, Am = {
                idToken: fm,
                mfaEnrollmentId: Tm
              }, Cm(hm, "POST", "/v2/accounts/mfaEnrollment:withdraw", ym(hm, Am))));
              this.enrolledFactors = this.enrolledFactors.filter((mm => {
                let {
                  uid: fm
                } = mm;
                return fm !== Tm
              })), await this.user._updateTokensIfNecessary(mm), await this.user.reload()
            } catch (am) {
              throw am
            }
            var hm, Am
          }
        }
        const jh = new WeakMap;

        function Vh(mm) {
          const Tm = (0, hm.J)(mm);
          return jh.has(Tm) || jh.set(Tm, qh._fromUser(Tm)), jh.get(Tm)
        }
        const Ih = "__sak";
        class Kh {
          constructor(mm, Tm) {
            this.storageRetriever = mm, this.type = Tm
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(Ih, "1"), this.storage.removeItem(Ih), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (mm) {
              return Promise.resolve(!1)
            }
          }
          _set(mm, Tm) {
            return this.storage.setItem(mm, JSON.stringify(Tm)), Promise.resolve()
          }
          _get(mm) {
            const Tm = this.storage.getItem(mm);
            return Promise.resolve(Tm ? JSON.parse(Tm) : null)
          }
          _remove(mm) {
            return this.storage.removeItem(mm), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class Qh extends Kh {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (mm, Tm) => this.onStorageEvent(mm, Tm), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const mm = (0, hm.N)();
              return oT(mm) || IT(mm)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (mm) {
                return !1
              }
            }(), this.fallbackToPolling = KT(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(mm) {
            for (const Tm of Object.keys(this.listeners)) {
              const fm = this.storage.getItem(Tm),
                hm = this.localCache[Tm];
              fm !== hm && mm(Tm, hm, fm)
            }
          }
          onStorageEvent(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!mm.key) return void this.forAllChangedKeys(((mm, Tm, fm) => {
              this.notifyListeners(mm, fm)
            }));
            const fm = mm.key;
            if (Tm ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const hm = this.storage.getItem(fm);
              if (mm.newValue !== hm) null !== mm.newValue ? this.storage.setItem(fm, mm.newValue) : this.storage.removeItem(fm);
              else if (this.localCache[fm] === mm.newValue && !Tm) return
            }
            const Am = () => {
                const mm = this.storage.getItem(fm);
                (Tm || this.localCache[fm] !== mm) && this.notifyListeners(fm, mm)
              },
              am = this.storage.getItem(fm);
            (0, hm.R)() && 10 === document.documentMode && am !== mm.newValue && mm.newValue !== mm.oldValue ? setTimeout(Am, 10) : Am()
          }
          notifyListeners(mm, Tm) {
            this.localCache[mm] = Tm;
            const fm = this.listeners[mm];
            if (fm)
              for (const hm of Array.from(fm)) hm(Tm ? JSON.parse(Tm) : Tm)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((mm, Tm, fm) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: mm,
                  oldValue: Tm,
                  newValue: fm
                }), !0)
              }))
            }), 1e3)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          attachListener() {
            window.addEventListener("storage", this.boundEventHandler)
          }
          detachListener() {
            window.removeEventListener("storage", this.boundEventHandler)
          }
          _addListener(mm, Tm) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[mm] || (this.listeners[mm] = new Set, this.localCache[mm] = this.storage.getItem(mm)), this.listeners[mm].add(Tm)
          }
          _removeListener(mm, Tm) {
            this.listeners[mm] && (this.listeners[mm].delete(Tm), 0 === this.listeners[mm].size && delete this.listeners[mm]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(mm, Tm) {
            await super._set(mm, Tm), this.localCache[mm] = JSON.stringify(Tm)
          }
          async _get(mm) {
            const Tm = await super._get(mm);
            return this.localCache[mm] = JSON.stringify(Tm), Tm
          }
          async _remove(mm) {
            await super._remove(mm), delete this.localCache[mm]
          }
        }
        Qh.type = "LOCAL";
        const nh = Qh;
        class Jh extends Kh {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(mm, Tm) {}
          _removeListener(mm, Tm) {}
        }
        Jh.type = "SESSION";
        const ch = Jh;
        class zh {
          constructor(mm) {
            this.eventTarget = mm, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(mm) {
            const Tm = this.receivers.find((Tm => Tm.isListeningto(mm)));
            if (Tm) return Tm;
            const fm = new zh(mm);
            return this.receivers.push(fm), fm
          }
          isListeningto(mm) {
            return this.eventTarget === mm
          }
          async handleEvent(mm) {
            const Tm = mm,
              {
                eventId: fm,
                eventType: hm,
                data: Am
              } = Tm.data,
              am = this.handlersMap[hm];
            if (!(null === am || void 0 === am ? void 0 : am.size)) return;
            Tm.ports[0].postMessage({
              status: "ack",
              eventId: fm,
              eventType: hm
            });
            const xm = Array.from(am).map((async mm => mm(Tm.origin, Am))),
              wm = await
            function(mm) {
              return Promise.all(mm.map((async mm => {
                try {
                  return {
                    fulfilled: !0,
                    value: await mm
                  }
                } catch (Tm) {
                  return {
                    fulfilled: !1,
                    reason: Tm
                  }
                }
              })))
            }(xm);
            Tm.ports[0].postMessage({
              status: "done",
              eventId: fm,
              eventType: hm,
              response: wm
            })
          }
          _subscribe(mm, Tm) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[mm] || (this.handlersMap[mm] = new Set), this.handlersMap[mm].add(Tm)
          }
          _unsubscribe(mm, Tm) {
            this.handlersMap[mm] && Tm && this.handlersMap[mm].delete(Tm), Tm && 0 !== this.handlersMap[mm].size || delete this.handlersMap[mm], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function Zh() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            fm = "";
          for (let hm = 0; hm < Tm; hm++) fm += Math.floor(10 * Math.random());
          return mm + fm
        }
        zh.receivers = [];
        class kh {
          constructor(mm) {
            this.target = mm, this.handlers = new Set
          }
          removeMessageHandler(mm) {
            mm.messageChannel && (mm.messageChannel.port1.removeEventListener("message", mm.lV), mm.messageChannel.port1.close()), this.handlers.delete(mm)
          }
          async _send(mm, Tm) {
            let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const hm = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!hm) throw new Error("connection_unavailable");
            let Am, am;
            return new Promise(((xm, wm) => {
              const Dm = Zh("", 20);
              hm.port1.start();
              const im = setTimeout((() => {
                wm(new Error("unsupported_event"))
              }), fm);
              am = {
                messageChannel: hm,
                lV(mm) {
                  const Tm = mm;
                  if (Tm.data.eventId === Dm) switch (Tm.data.status) {
                    case "ack":
                      clearTimeout(im), Am = setTimeout((() => {
                        wm(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(Am), xm(Tm.data.response);
                      break;
                    default:
                      clearTimeout(im), clearTimeout(Am), wm(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(am), hm.port1.addEventListener("message", am.lV), this.target.postMessage({
                eventType: mm,
                eventId: Dm,
                data: Tm
              }, [hm.port2])
            })).finally((() => {
              am && this.removeMessageHandler(am)
            }))
          }
        }

        function bh() {
          return window
        }

        function Sh() {
          return "undefined" !== typeof bh().WorkerGlobalScope && "function" === typeof bh().importScripts
        }
        const eh = "firebaseLocalStorageDb",
          Nh = "firebaseLocalStorage",
          Gh = "fbase_key";
        class Xh {
          constructor(mm) {
            this.request = mm
          }
          toPromise() {
            return new Promise(((mm, Tm) => {
              this.request.addEventListener("success", (() => {
                mm(this.request.result)
              })), this.request.addEventListener("error", (() => {
                Tm(this.request.error)
              }))
            }))
          }
        }

        function Ph(mm, Tm) {
          return mm.transaction([Nh], Tm ? "readwrite" : "readonly").objectStore(Nh)
        }

        function Hh() {
          const mm = indexedDB.open(eh, 1);
          return new Promise(((Tm, fm) => {
            mm.addEventListener("error", (() => {
              fm(mm.error)
            })), mm.addEventListener("upgradeneeded", (() => {
              const Tm = mm.result;
              try {
                Tm.createObjectStore(Nh, {
                  keyPath: Gh
                })
              } catch (hm) {
                fm(hm)
              }
            })), mm.addEventListener("success", (async () => {
              const fm = mm.result;
              fm.objectStoreNames.contains(Nh) ? Tm(fm) : (fm.close(), await
                function() {
                  const mm = indexedDB.deleteDatabase(eh);
                  return new Xh(mm).toPromise()
                }(), Tm(await Hh()))
            }))
          }))
        }
        async function yh(mm, Tm, fm) {
          const hm = Ph(mm, !0).put({
            [Gh]: Tm,
            value: fm
          });
          return new Xh(hm).toPromise()
        }

        function Ch(mm, Tm) {
          const fm = Ph(mm, !0).delete(Tm);
          return new Xh(fm).toPromise()
        }
        class rh {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await Hh()), this.db
          }
          async _withRetries(mm) {
            let Tm = 0;
            for (;;) try {
              const Tm = await this._openDb();
              return await mm(Tm)
            } catch (fm) {
              if (Tm++ > 3) throw fm;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return Sh() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = zh._getInstance(Sh() ? self : null), this.receiver._subscribe("keyChanged", (async (mm, Tm) => ({
              keyProcessed: (await this._poll()).includes(Tm.key)
            }))), this.receiver._subscribe("ping", (async (mm, Tm) => ["keyChanged"]))
          }
          async initializeSender() {
            var mm, Tm;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (mm) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new kh(this.activeServiceWorker);
            const fm = await this.sender._send("ping", {}, 800);
            fm && (null === (mm = fm[0]) || void 0 === mm ? void 0 : mm.fulfilled) && (null === (Tm = fm[0]) || void 0 === Tm ? void 0 : Tm.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(mm) {
            if (this.sender && this.activeServiceWorker && function() {
                var mm;
                return (null === (mm = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === mm ? void 0 : mm.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: mm
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (Tm) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const mm = await Hh();
              return await yh(mm, Ih, "1"), await Ch(mm, Ih), !0
            } catch (mm) {}
            return !1
          }
          async _withPendingWrite(mm) {
            this.pendingWrites++;
            try {
              await mm()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(mm, Tm) {
            return this._withPendingWrite((async () => (await this._withRetries((fm => yh(fm, mm, Tm))), this.localCache[mm] = Tm, this.notifyServiceWorker(mm))))
          }
          async _get(mm) {
            const Tm = await this._withRetries((Tm => async function(mm, Tm) {
              const fm = Ph(mm, !1).get(Tm),
                hm = await new Xh(fm).toPromise();
              return void 0 === hm ? null : hm.value
            }(Tm, mm)));
            return this.localCache[mm] = Tm, Tm
          }
          async _remove(mm) {
            return this._withPendingWrite((async () => (await this._withRetries((Tm => Ch(Tm, mm))), delete this.localCache[mm], this.notifyServiceWorker(mm))))
          }
          async _poll() {
            const mm = await this._withRetries((mm => {
              const Tm = Ph(mm, !1).getAll();
              return new Xh(Tm).toPromise()
            }));
            if (!mm) return [];
            if (0 !== this.pendingWrites) return [];
            const Tm = [],
              fm = new Set;
            for (const {
                fbase_key: hm,
                value: Am
              }
              of mm) fm.add(hm), JSON.stringify(this.localCache[hm]) !== JSON.stringify(Am) && (this.notifyListeners(hm, Am), Tm.push(hm));
            for (const hm of Object.keys(this.localCache)) this.localCache[hm] && !fm.has(hm) && (this.notifyListeners(hm, null), Tm.push(hm));
            return Tm
          }
          notifyListeners(mm, Tm) {
            this.localCache[mm] = Tm;
            const fm = this.listeners[mm];
            if (fm)
              for (const hm of Array.from(fm)) hm(Tm)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(mm, Tm) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[mm] || (this.listeners[mm] = new Set, this._get(mm)), this.listeners[mm].add(Tm)
          }
          _removeListener(mm, Tm) {
            this.listeners[mm] && (this.listeners[mm].delete(Tm), 0 === this.listeners[mm].size && delete this.listeners[mm]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        rh.type = "LOCAL";
        const sh = rh;
        const lh = 1e12;
        class Mh {
          constructor(mm) {
            this.auth = mm, this.counter = lh, this._widgets = new Map
          }
          render(mm, Tm) {
            const fm = this.counter;
            return this._widgets.set(fm, new uh(mm, this.auth.name, Tm || {})), this.counter++, fm
          }
          reset(mm) {
            var Tm;
            const fm = mm || lh;
            null === (Tm = this._widgets.get(fm)) || void 0 === Tm || Tm.delete(), this._widgets.delete(fm)
          }
          getResponse(mm) {
            var Tm;
            const fm = mm || lh;
            return (null === (Tm = this._widgets.get(fm)) || void 0 === Tm ? void 0 : Tm.getResponse()) || ""
          }
          async execute(mm) {
            var Tm;
            const fm = mm || lh;
            return null === (Tm = this._widgets.get(fm)) || void 0 === Tm || Tm.execute(), ""
          }
        }
        class uh {
          constructor(mm, Tm, fm) {
            this.params = fm, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const hm = "string" === typeof mm ? document.getElementById(mm) : mm;
            zm(hm, "argument-error", {
              appName: Tm
            }), this.container = hm, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(mm) {
                const Tm = [],
                  fm = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let hm = 0; hm < mm; hm++) Tm.push(fm.charAt(Math.floor(Math.random() * fm.length)));
                return Tm.join("")
              }(50);
              const {
                callback: mm,
                "expired-callback": Tm
              } = this.params;
              if (mm) try {
                mm(this.responseToken)
              } catch (fm) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, Tm) try {
                  Tm()
                } catch (fm) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const Bh = kT("rcb"),
          Lh = new Nm(3e4, 6e4);
        class vh {
          constructor() {
            var mm;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (mm = bh().grecaptcha) || void 0 === mm ? void 0 : mm.render)
          }
          load(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return zm(function(mm) {
              return mm.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(mm)
            }(Tm), mm, "argument-error"), this.shouldResolveImmediately(Tm) && JT(bh().grecaptcha) ? Promise.resolve(bh().grecaptcha) : new Promise(((fm, Am) => {
              const am = bh().setTimeout((() => {
                Am(Qm(mm, "network-request-failed"))
              }), Lh.get());
              bh()[Bh] = () => {
                bh().clearTimeout(am), delete bh()[Bh];
                const hm = bh().grecaptcha;
                if (!hm || !JT(hm)) return void Am(Qm(mm, "internal-error"));
                const xm = hm.render;
                hm.render = (mm, Tm) => {
                  const fm = xm(mm, Tm);
                  return this.counter++, fm
                }, this.hostLanguage = Tm, fm(hm)
              };
              ZT(`https://www.google.com/recaptcha/api.js??${(0,hm.ab)({onload:Bh,render:"explicit",hl:Tm})}`).catch((() => {
                clearTimeout(am), Am(Qm(mm, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(mm) {
            var Tm;
            return !!(null === (Tm = bh().grecaptcha) || void 0 === Tm ? void 0 : Tm.render) && (mm === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class th {
          async load(mm) {
            return new Mh(mm)
          }
          clearedOneInstance() {}
        }
        const Uh = "recaptcha",
          dh = {
            theme: "light",
            type: "image"
          };
        class gh {
          constructor(mm) {
            let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, dh),
              fm = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = Tm, this.type = Uh, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = GT(fm), this.isInvisible = "invisible" === this.parameters.size, zm("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const hm = "string" === typeof mm ? document.getElementById(mm) : mm;
            zm(hm, this.auth, "argument-error"), this.container = hm, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new th : new vh, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const mm = await this.render(),
              Tm = this.getAssertedRecaptcha(),
              fm = Tm.getResponse(mm);
            return fm || new Promise((fm => {
              const hm = mm => {
                mm && (this.tokenChangeListeners.delete(hm), fm(mm))
              };
              this.tokenChangeListeners.add(hm), this.isInvisible && Tm.execute(mm)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (mm) {
              return Promise.reject(mm)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((mm => {
              throw this.renderPromise = null, mm
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((mm => {
              this.container.removeChild(mm)
            }))
          }
          validateStartingState() {
            zm(!this.parameters.sitekey, this.auth, "argument-error"), zm(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), zm("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(mm) {
            return Tm => {
              if (this.tokenChangeListeners.forEach((mm => mm(Tm))), "function" === typeof mm) mm(Tm);
              else if ("string" === typeof mm) {
                const fm = bh()[mm];
                "function" === typeof fm && fm(Tm)
              }
            }
          }
          assertNotDestroyed() {
            zm(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let mm = this.container;
              if (!this.isInvisible) {
                const Tm = document.createElement("div");
                mm.appendChild(Tm), mm = Tm
              }
              this.widgetId = this.getAssertedRecaptcha().render(mm, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            zm(Sm() && !Sh(), this.auth, "internal-error"), await
            function() {
              let mm = null;
              return new Promise((Tm => {
                "complete" !== document.readyState ? (mm = () => Tm(), window.addEventListener("load", mm)) : Tm()
              })).catch((Tm => {
                throw mm && window.removeEventListener("load", mm), Tm
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const mm = await async function(mm) {
              return (await Cm(mm, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            zm(mm, this.auth, "internal-error"), this.parameters.sitekey = mm
          }
          getAssertedRecaptcha() {
            return zm(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class Wh {
          constructor(mm, Tm) {
            this.verificationId = mm, this.onConfirmation = Tm
          }
          confirm(mm) {
            const Tm = gT._fromVerification(this.verificationId, mm);
            return this.onConfirmation(Tm)
          }
        }
        async function Fh(mm, Tm, fm) {
          const Am = GT(mm),
            am = await fA(Am, Tm, (0, hm.J)(fm));
          return new Wh(am, (mm => Jf(Am, mm)))
        }
        async function mA(mm, Tm, fm) {
          const Am = (0, hm.J)(mm);
          await Kf(!1, Am, "phone");
          const am = await fA(Am.auth, Tm, (0, hm.J)(fm));
          return new Wh(am, (mm => zf(Am, mm)))
        }
        async function TA(mm, Tm, fm) {
          const Am = (0, hm.J)(mm),
            am = await fA(Am.auth, Tm, (0, hm.J)(fm));
          return new Wh(am, (mm => Zf(Am, mm)))
        }
        async function fA(mm, Tm, fm) {
          var hm;
          const Am = await fm.verify();
          try {
            let am;
            if (zm("string" === typeof Am, mm, "argument-error"), zm(fm.type === Uh, mm, "argument-error"), am = "string" === typeof Tm ? {
                phoneNumber: Tm
              } : Tm, "session" in am) {
              const Tm = am.session;
              if ("phoneNumber" in am) {
                zm("enroll" === Tm.type, mm, "internal-error");
                const fm = await
                function(mm, Tm) {
                  return Cm(mm, "POST", "/v2/accounts/mfaEnrollment:start", ym(mm, Tm))
                }(mm, {
                  idToken: Tm.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: am.phoneNumber,
                    recaptchaToken: Am
                  }
                });
                return fm.phoneSessionInfo.sessionInfo
              } {
                zm("signin" === Tm.type, mm, "internal-error");
                const fm = (null === (hm = am.multiFactorHint) || void 0 === hm ? void 0 : hm.uid) || am.multiFactorUid;
                zm(fm, mm, "missing-multi-factor-info");
                const xm = await
                function(mm, Tm) {
                  return Cm(mm, "POST", "/v2/accounts/mfaSignIn:start", ym(mm, Tm))
                }(mm, {
                  mfaPendingCredential: Tm.credential,
                  mfaEnrollmentId: fm,
                  phoneSignInInfo: {
                    recaptchaToken: Am
                  }
                });
                return xm.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: Tm
              } = await async function(mm, Tm) {
                return Cm(mm, "POST", "/v1/accounts:sendVerificationCode", ym(mm, Tm))
              }(mm, {
                phoneNumber: am.phoneNumber,
                recaptchaToken: Am
              });
              return Tm
            }
          } finally {
            fm._reset()
          }
        }
        async function hA(mm, Tm) {
          await If((0, hm.J)(mm), Tm)
        }
        class AA {
          constructor(mm) {
            this.providerId = AA.PROVIDER_ID, this.auth = GT(mm)
          }
          verifyPhoneNumber(mm, Tm) {
            return fA(this.auth, mm, (0, hm.J)(Tm))
          }
          static credential(mm, Tm) {
            return gT._fromVerification(mm, Tm)
          }
          static credentialFromResult(mm) {
            const Tm = mm;
            return AA.credentialFromTaggedObject(Tm)
          }
          static credentialFromError(mm) {
            return AA.credentialFromTaggedObject(mm.customData || {})
          }
          static credentialFromTaggedObject(mm) {
            let {
              _tokenResponse: Tm
            } = mm;
            if (!Tm) return null;
            const {
              phoneNumber: fm,
              temporaryProof: hm
            } = Tm;
            return fm && hm ? gT._fromTokenResponse(fm, hm) : null
          }
        }

        function aA(mm, Tm) {
          return Tm ? xT(Tm) : (zm(mm._popupRedirectResolver, mm, "argument-error"), mm._popupRedirectResolver)
        }
        AA.PROVIDER_ID = "phone", AA.PHONE_SIGN_IN_METHOD = "phone";
        class xA extends rT {
          constructor(mm) {
            super("custom", "custom"), this.params = mm
          }
          _getIdTokenResponse(mm) {
            return tT(mm, this._buildIdpRequest())
          }
          _linkToIdToken(mm, Tm) {
            return tT(mm, this._buildIdpRequest(Tm))
          }
          _getReauthenticationResolver(mm) {
            return tT(mm, this._buildIdpRequest())
          }
          _buildIdpRequest(mm) {
            const Tm = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return mm && (Tm.idToken = mm), Tm
          }
        }

        function wA(mm) {
          return nf(mm.auth, new xA(mm), mm.bypassAuthState)
        }

        function DA(mm) {
          const {
            auth: Tm,
            user: fm
          } = mm;
          return zm(fm, Tm, "internal-error"), Qf(fm, new xA(mm), mm.bypassAuthState)
        }
        async function iA(mm) {
          const {
            auth: Tm,
            user: fm
          } = mm;
          return zm(fm, Tm, "internal-error"), If(fm, new xA(mm), mm.bypassAuthState)
        }
        class RA {
          constructor(mm, Tm, fm, hm) {
            let Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = mm, this.resolver = fm, this.user = hm, this.bypassAuthState = Am, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(Tm) ? Tm : [Tm]
          }
          execute() {
            return new Promise((async (mm, Tm) => {
              this.pendingPromise = {
                resolve: mm,
                reject: Tm
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (fm) {
                this.reject(fm)
              }
            }))
          }
          async onAuthEvent(mm) {
            const {
              urlResponse: Tm,
              sessionId: fm,
              postBody: hm,
              tenantId: Am,
              error: am,
              type: xm
            } = mm;
            if (am) return void this.reject(am);
            const wm = {
              auth: this.auth,
              requestUri: Tm,
              sessionId: fm,
              tenantId: Am || void 0,
              postBody: hm || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(xm)(wm))
            } catch (Dm) {
              this.reject(Dm)
            }
          }
          onError(mm) {
            this.reject(mm)
          }
          getIdpTask(mm) {
            switch (mm) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return wA;
              case "linkViaPopup":
              case "linkViaRedirect":
                return iA;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return DA;
              default:
                Km(this.auth, "internal-error")
            }
          }
          resolve(mm) {
            km(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(mm), this.unregisterAndCleanUp()
          }
          reject(mm) {
            km(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(mm), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const pA = new Nm(2e3, 1e4);
        async function EA(mm, Tm, fm) {
          const hm = GT(mm);
          Jm(mm, Tm, Tf);
          const Am = aA(hm, fm);
          return new YA(hm, "signInViaPopup", Tm, Am).executeNotNull()
        }
        async function oA(mm, Tm, fm) {
          const Am = (0, hm.J)(mm);
          Jm(Am.auth, Tm, Tf);
          const am = aA(Am.auth, fm);
          return new YA(Am.auth, "reauthViaPopup", Tm, am, Am).executeNotNull()
        }
        async function OA(mm, Tm, fm) {
          const Am = (0, hm.J)(mm);
          Jm(Am.auth, Tm, Tf);
          const am = aA(Am.auth, fm);
          return new YA(Am.auth, "linkViaPopup", Tm, am, Am).executeNotNull()
        }
        class YA extends RA {
          constructor(mm, Tm, fm, hm, Am) {
            super(mm, Tm, hm, Am), this.provider = fm, this.authWindow = null, this.pollId = null, YA.currentPopupAction && YA.currentPopupAction.cancel(), YA.currentPopupAction = this
          }
          async executeNotNull() {
            const mm = await this.execute();
            return zm(mm, this.auth, "internal-error"), mm
          }
          async onExecution() {
            km(1 === this.filter.length, "Popup operations only handle one event");
            const mm = Zh();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], mm), this.authWindow.associatedEvent = mm, this.resolver._originValidation(this.auth).catch((mm => {
              this.reject(mm)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (mm => {
              mm || this.reject(Qm(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var mm;
            return (null === (mm = this.authWindow) || void 0 === mm ? void 0 : mm.associatedEvent) || null
          }
          cancel() {
            this.reject(Qm(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, YA.currentPopupAction = null
          }
          pollUserCancellation() {
            const mm = () => {
              var Tm, fm;
              (null === (fm = null === (Tm = this.authWindow) || void 0 === Tm ? void 0 : Tm.window) || void 0 === fm ? void 0 : fm.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(Qm(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(mm, pA.get())
            };
            mm()
          }
        }
        YA.currentPopupAction = null;
        const qA = "pendingRedirect",
          jA = new Map;
        class VA extends RA {
          constructor(mm, Tm) {
            super(mm, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], Tm, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let mm = jA.get(this.auth._key());
            if (!mm) {
              try {
                const Tm = await async function(mm, Tm) {
                  const fm = nA(Tm),
                    hm = QA(mm);
                  if (!await hm._isAvailable()) return !1;
                  const Am = "true" === await hm._get(fm);
                  return await hm._remove(fm), Am
                }(this.resolver, this.auth) ? await super.execute() : null;
                mm = () => Promise.resolve(Tm)
              } catch (Tm) {
                mm = () => Promise.reject(Tm)
              }
              jA.set(this.auth._key(), mm)
            }
            return this.bypassAuthState || jA.set(this.auth._key(), (() => Promise.resolve(null))), mm()
          }
          async onAuthEvent(mm) {
            if ("signInViaRedirect" === mm.type) return super.onAuthEvent(mm);
            if ("unknown" !== mm.type) {
              if (mm.eventId) {
                const Tm = await this.auth._redirectUserForId(mm.eventId);
                if (Tm) return this.user = Tm, super.onAuthEvent(mm);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function IA(mm, Tm) {
          return QA(mm)._set(nA(Tm), "true")
        }

        function KA(mm, Tm) {
          jA.set(mm._key(), Tm)
        }

        function QA(mm) {
          return xT(mm._redirectPersistence)
        }

        function nA(mm) {
          return iT(qA, mm.config.apiKey, mm.name)
        }

        function JA(mm, Tm, fm) {
          return async function(mm, Tm, fm) {
            const hm = GT(mm);
            Jm(mm, Tm, Tf), await hm._initializationPromise;
            const Am = aA(hm, fm);
            return await IA(Am, hm), Am._openRedirect(hm, Tm, "signInViaRedirect")
          }(mm, Tm, fm)
        }

        function cA(mm, Tm, fm) {
          return async function(mm, Tm, fm) {
            const Am = (0, hm.J)(mm);
            Jm(Am.auth, Tm, Tf), await Am.auth._initializationPromise;
            const am = aA(Am.auth, fm);
            await IA(am, Am.auth);
            const xm = await bA(Am);
            return am._openRedirect(Am.auth, Tm, "reauthViaRedirect", xm)
          }(mm, Tm, fm)
        }

        function zA(mm, Tm, fm) {
          return async function(mm, Tm, fm) {
            const Am = (0, hm.J)(mm);
            Jm(Am.auth, Tm, Tf), await Am.auth._initializationPromise;
            const am = aA(Am.auth, fm);
            await Kf(!1, Am, Tm.providerId), await IA(am, Am.auth);
            const xm = await bA(Am);
            return am._openRedirect(Am.auth, Tm, "linkViaRedirect", xm)
          }(mm, Tm, fm)
        }
        async function ZA(mm, Tm) {
          return await GT(mm)._initializationPromise, kA(mm, Tm, !1)
        }
        async function kA(mm, Tm) {
          let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const hm = GT(mm),
            Am = aA(hm, Tm),
            am = new VA(hm, Am, fm),
            xm = await am.execute();
          return xm && !fm && (delete xm.user._redirectEventId, await hm._persistUserIfCurrent(xm.user), await hm._setRedirectUser(null, Tm)), xm
        }
        async function bA(mm) {
          const Tm = Zh(`${mm.uid}:::`);
          return mm._redirectEventId = Tm, await mm.auth._setRedirectUser(mm), await mm.auth._persistUserIfCurrent(mm), Tm
        }
        class SA {
          constructor(mm) {
            this.auth = mm, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(mm) {
            this.consumers.add(mm), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, mm) && (this.sendToConsumer(this.queuedRedirectEvent, mm), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(mm) {
            this.consumers.delete(mm)
          }
          onEvent(mm) {
            if (this.hasEventBeenHandled(mm)) return !1;
            let Tm = !1;
            return this.consumers.forEach((fm => {
              this.isEventForConsumer(mm, fm) && (Tm = !0, this.sendToConsumer(mm, fm), this.saveEventToCache(mm))
            })), this.hasHandledPotentialRedirect || ! function(mm) {
              switch (mm.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return NA(mm);
                default:
                  return !1
              }
            }(mm) || (this.hasHandledPotentialRedirect = !0, Tm || (this.queuedRedirectEvent = mm, Tm = !0)), Tm
          }
          sendToConsumer(mm, Tm) {
            var fm;
            if (mm.error && !NA(mm)) {
              const hm = (null === (fm = mm.error.code) || void 0 === fm ? void 0 : fm.split("auth/")[1]) || "internal-error";
              Tm.onError(Qm(this.auth, hm))
            } else Tm.onAuthEvent(mm)
          }
          isEventForConsumer(mm, Tm) {
            const fm = null === Tm.eventId || !!mm.eventId && mm.eventId === Tm.eventId;
            return Tm.filter.includes(mm.type) && fm
          }
          hasEventBeenHandled(mm) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(eA(mm))
          }
          saveEventToCache(mm) {
            this.cachedEventUids.add(eA(mm)), this.lastProcessedEventTime = Date.now()
          }
        }

        function eA(mm) {
          return [mm.type, mm.eventId, mm.sessionId, mm.tenantId].filter((mm => mm)).join("-")
        }

        function NA(mm) {
          let {
            type: Tm,
            error: fm
          } = mm;
          return "unknown" === Tm && "auth/no-auth-event" === (null === fm || void 0 === fm ? void 0 : fm.code)
        }
        const GA = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          XA = /^https?/;
        async function PA(mm) {
          if (mm.config.emulator) return;
          const {
            authorizedDomains: Tm
          } = await async function(mm) {
            return Cm(mm, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(mm);
          for (const hm of Tm) try {
            if (HA(hm)) return
          } catch (fm) {}
          Km(mm, "unauthorized-domain")
        }

        function HA(mm) {
          const Tm = bm(),
            {
              protocol: fm,
              hostname: hm
            } = new URL(Tm);
          if (mm.startsWith("chrome-extension://")) {
            const Am = new URL(mm);
            return "" === Am.hostname && "" === hm ? "chrome-extension:" === fm && mm.replace("chrome-extension://", "") === Tm.replace("chrome-extension://", "") : "chrome-extension:" === fm && Am.hostname === hm
          }
          if (!XA.test(fm)) return !1;
          if (GA.test(mm)) return hm === mm;
          const Am = mm.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + Am + "|" + Am + ")$", "i").test(hm)
        }
        const yA = new Nm(3e4, 6e4);

        function CA() {
          const mm = bh().___jsl;
          if (null === mm || void 0 === mm ? void 0 : mm.H)
            for (const Tm of Object.keys(mm.H))
              if (mm.H[Tm].r = mm.H[Tm].r || [], mm.H[Tm].L = mm.H[Tm].L || [], mm.H[Tm].r = [...mm.H[Tm].L], mm.CP)
                for (let fm = 0; fm < mm.CP.length; fm++) mm.CP[fm] = null
        }
        let rA = null;

        function sA(mm) {
          return rA = rA || function(mm) {
            return new Promise(((Tm, fm) => {
              var hm, Am, am;

              function xm() {
                CA(), gapi.load("gapi.iframes", {
                  callback: () => {
                    Tm(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    CA(), fm(Qm(mm, "network-request-failed"))
                  },
                  timeout: yA.get()
                })
              }
              if (null === (Am = null === (hm = bh().gapi) || void 0 === hm ? void 0 : hm.iframes) || void 0 === Am ? void 0 : Am.Iframe) Tm(gapi.iframes.getContext());
              else {
                if (!(null === (am = bh().gapi) || void 0 === am ? void 0 : am.load)) {
                  const Tm = kT("iframefcb");
                  return bh()[Tm] = () => {
                    gapi.load ? xm() : fm(Qm(mm, "network-request-failed"))
                  }, ZT(`https://apis.google.com/js/api.js?onload=${Tm}`).catch((mm => fm(mm)))
                }
                xm()
              }
            })).catch((mm => {
              throw rA = null, mm
            }))
          }(mm), rA
        }
        const lA = new Nm(5e3, 15e3),
          MA = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          uA = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function BA(mm) {
          const Tm = mm.config;
          zm(Tm.authDomain, mm, "auth-domain-config-required");
          const fm = Tm.emulator ? Gm(Tm, "emulator/auth/iframe") : `https://${mm.config.authDomain}/__/auth/iframe`,
            am = {
              apiKey: Tm.apiKey,
              appName: mm.name,
              v: Am.d
            },
            xm = uA.get(mm.config.apiHost);
          xm && (am.eid = xm);
          const wm = mm._getFrameworks();
          return wm.length && (am.fw = wm.join(",")), `${fm}?${(0,hm.ab)(am).slice(1)}`
        }
        const LA = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class vA {
          constructor(mm) {
            this.window = mm, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (mm) {}
          }
        }

        function tA(mm, Tm, fm) {
          let Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const xm = Math.max((window.screen.availHeight - am) / 2, 0).toString(),
            wm = Math.max((window.screen.availWidth - Am) / 2, 0).toString();
          let Dm = "";
          const im = Object.assign(Object.assign({}, LA), {
              width: Am.toString(),
              height: am.toString(),
              top: xm,
              left: wm
            }),
            Rm = (0, hm.N)().toLowerCase();
          fm && (Dm = OT(Rm) ? "_blank" : fm), ET(Rm) && (Tm = Tm || "http://localhost", im.scrollbars = "yes");
          const pm = Object.entries(im).reduce(((mm, Tm) => {
            let [fm, hm] = Tm;
            return `${mm}${fm}=${hm},`
          }), "");
          if (function() {
              var mm;
              return IT(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hm.N)()) && !!(null === (mm = window.navigator) || void 0 === mm ? void 0 : mm.standalone)
            }(Rm) && "_self" !== Dm) return function(mm, Tm) {
            const fm = document.createElement("a");
            fm.href = mm, fm.target = Tm;
            const hm = document.createEvent("MouseEvent");
            hm.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), fm.dispatchEvent(hm)
          }(Tm || "", Dm), new vA(null);
          const Em = window.open(Tm || "", Dm, pm);
          zm(Em, mm, "popup-blocked");
          try {
            Em.focus()
          } catch (om) {}
          return new vA(Em)
        }
        const UA = "__/auth/handler",
          dA = "emulator/auth/handler",
          gA = encodeURIComponent("fac");
        async function WA(mm, Tm, fm, am, xm, wm) {
            zm(mm.config.authDomain, mm, "auth-domain-config-required"), zm(mm.config.apiKey, mm, "invalid-api-key");
            const Dm = {
              apiKey: mm.config.apiKey,
              appName: mm.name,
              authType: fm,
              redirectUrl: am,
              v: Am.d,
              eventId: xm
            };
            if (Tm instanceof Tf) {
              Tm.setDefaultLanguage(mm.languageCode), Dm.providerId = Tm.providerId || "", (0, hm.Q)(Tm.getCustomParameters()) || (Dm.customParameters = JSON.stringify(Tm.getCustomParameters()));
              for (const [mm, Tm] of Object.entries(wm || {})) Dm[mm] = Tm
            }
            if (Tm instanceof ff) {
              const mm = Tm.getScopes().filter((mm => "" !== mm));
              mm.length > 0 && (Dm.scopes = mm.join(","))
            }
            mm.tenantId && (Dm.tid = mm.tenantId);
            const im = Dm;
            for (const hm of Object.keys(im)) void 0 === im[hm] && delete im[hm];
            const Rm = await mm._getAppCheckToken(),
              pm = Rm ? `#${gA}=${encodeURIComponent(Rm)}` : "";
            return `${function(mm){let{config:Tm}=mm;if(!Tm.emulator)return`
            https: //${Tm.authDomain}/${UA}`;return Gm(Tm,dA)}(mm)}?${(0,hm.ab)(im).slice(1)}${pm}`}const FA="webStorageSupport";const ma=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ch,this._completeRedirectFn=kA,this._overrideRedirectResult=KA}async _openPopup(mm,Tm,fm,hm){var Am;km(null===(Am=this.eventManagers[mm._key()])||void 0===Am?void 0:Am.manager,"_initialize() not called before _openPopup()");return tA(mm,await WA(mm,Tm,fm,bm(),hm),Zh())}async _openRedirect(mm,Tm,fm,hm){await this._originValidation(mm);return function(mm){bh().location.href=mm}(await WA(mm,Tm,fm,bm(),hm)),new Promise((()=>{}))}_initialize(mm){const Tm=mm._key();if(this.eventManagers[Tm]){const{manager:mm,promise:fm}=this.eventManagers[Tm];return mm?Promise.resolve(mm):(km(fm,"If manager is not set, promise should be"),fm)}const fm=this.initAndGetManager(mm);return this.eventManagers[Tm]={promise:fm},fm.catch((()=>{delete this.eventManagers[Tm]})),fm}async initAndGetManager(mm){const Tm=await async function(mm){const Tm=await sA(mm),fm=bh().gapi;return zm(fm,mm,"internal-error"),Tm.open({where:document.body,url:BA(mm),messageHandlersFilter:fm.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MA,dontclear:!0},(Tm=>new Promise((async(fm,hm)=>{await Tm.restyle({setHideOnLeave:!1});const Am=Qm(mm,"network-request-failed"),am=bh().setTimeout((()=>{hm(Am)}),lA.get());function xm(){bh().clearTimeout(am),fm(Tm)}Tm.ping(xm).then(xm,(()=>{hm(Am)}))}))))}(mm),fm=new SA(mm);return Tm.register("authEvent",(Tm=>{zm(null===Tm||void 0===Tm?void 0:Tm.authEvent,mm,"invalid-auth-event");return{status:fm.onEvent(Tm.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[mm._key()]={manager:fm},this.iframes[mm._key()]=Tm,fm}_isIframeWebStorageSupported(mm,Tm){this.iframes[mm._key()].send(FA,{type:FA},(fm=>{var hm;const Am=null===(hm=null===fm||void 0===fm?void 0:fm[0])||void 0===hm?void 0:hm[FA];void 0!==Am&&Tm(!!Am),Km(mm,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(mm){const Tm=mm._key();return this.originValidationPromises[Tm]||(this.originValidationPromises[Tm]=PA(mm)),this.originValidationPromises[Tm]}get _shouldInitProactively(){return KT()||oT()||IT()}};class Ta{constructor(mm){this.factorId=mm}_process(mm,Tm,fm){switch(Tm.type){case"enroll":return this._finalizeEnroll(mm,Tm.credential,fm);case"signin":return this._finalizeSignIn(mm,Tm.credential);default:return Zm("unexpected MultiFactorSessionType")}}}class fa extends Ta{constructor(mm){super("phone"),this.credential=mm}static _fromCredential(mm){return new fa(mm)}_finalizeEnroll(mm,Tm,fm){return function(mm,Tm){return Cm(mm,"POST","/v2/accounts/mfaEnrollment:finalize",ym(mm,Tm))}(mm,{idToken:Tm,displayName:fm,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(mm,Tm){return function(mm,Tm){return Cm(mm,"POST","/v2/accounts/mfaSignIn:finalize",ym(mm,Tm))}(mm,{mfaPendingCredential:Tm,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ha{constructor(){}static assertion(mm){return fa._fromCredential(mm)}}ha.FACTOR_ID="phone";class Aa{static assertionForEnrollment(mm,Tm){return aa._fromSecret(mm,Tm)}static assertionForSignIn(mm,Tm){return aa._fromEnrollmentId(mm,Tm)}static async generateSecret(mm){const Tm=mm;zm("undefined"!==typeof Tm.auth,"internal-error");const fm=await(hm=Tm.auth,Am={idToken:Tm.credential,totpEnrollmentInfo:{}},Cm(hm,"POST","/v2/accounts/mfaEnrollment:start",ym(hm,Am)));var hm,Am;return xa._fromStartTotpMfaEnrollmentResponse(fm,Tm.auth)}}Aa.FACTOR_ID="totp";class aa extends Ta{constructor(mm,Tm,fm){super("totp"),this.otp=mm,this.enrollmentId=Tm,this.secret=fm}static _fromSecret(mm,Tm){return new aa(Tm,void 0,mm)}static _fromEnrollmentId(mm,Tm){return new aa(Tm,mm)}async _finalizeEnroll(mm,Tm,fm){return zm("undefined"!==typeof this.secret,mm,"argument-error"),function(mm,Tm){return Cm(mm,"POST","/v2/accounts/mfaEnrollment:finalize",ym(mm,Tm))}(mm,{idToken:Tm,displayName:fm,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(mm,Tm){zm(void 0!==this.enrollmentId&&void 0!==this.otp,mm,"argument-error");const fm={verificationCode:this.otp};return function(mm,Tm){return Cm(mm,"POST","/v2/accounts/mfaSignIn:finalize",ym(mm,Tm))}(mm,{mfaPendingCredential:Tm,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:fm})}}class xa{constructor(mm,Tm,fm,hm,Am,am,xm){this.sessionInfo=am,this.auth=xm,this.secretKey=mm,this.hashingAlgorithm=Tm,this.codeLength=fm,this.codeIntervalSeconds=hm,this.enrollmentCompletionDeadline=Am}static _fromStartTotpMfaEnrollmentResponse(mm,Tm){return new xa(mm.totpSessionInfo.sharedSecretKey,mm.totpSessionInfo.hashingAlgorithm,mm.totpSessionInfo.verificationCodeLength,mm.totpSessionInfo.periodSec,new Date(mm.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),mm.totpSessionInfo.sessionInfo,Tm)}_makeTotpVerificationInfo(mm){return{sessionInfo:this.sessionInfo,verificationCode:mm}}generateQrCodeUrl(mm,Tm){var fm;let hm=!1;return(wa(mm)||wa(Tm))&&(hm=!0),hm&&(wa(mm)&&(mm=(null===(fm=this.auth.currentUser)||void 0===fm?void 0:fm.email)||"unknownuser"),wa(Tm)&&(Tm=this.auth.name)),`otpauth://totp/${Tm}:${mm}?secret=${this.secretKey}&issuer=${Tm}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function wa(mm){return"undefined"===typeof mm||0===(null===mm||void 0===mm?void 0:mm.length)}var Da="@firebase/auth",ia="0.23.2";class Ra{constructor(mm){this.auth=mm,this.internalListeners=new Map}getUid(){var mm;return this.assertAuthConfigured(),(null===(mm=this.auth.currentUser)||void 0===mm?void 0:mm.uid)||null}async getToken(mm){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(mm)}}addAuthTokenListener(mm){if(this.assertAuthConfigured(),this.internalListeners.has(mm))return;const Tm=this.auth.onIdTokenChanged((Tm=>{mm((null===Tm||void 0===Tm?void 0:Tm.stsTokenManager.accessToken)||null)}));this.internalListeners.set(mm,Tm),this.updateProactiveRefresh()}removeAuthTokenListener(mm){this.assertAuthConfigured();const Tm=this.internalListeners.get(mm);Tm&&(this.internalListeners.delete(mm),Tm(),this.updateProactiveRefresh())}assertAuthConfigured(){zm(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const pa=(0,hm.I)("authIdTokenMaxAge")||300;let Ea=null;const oa=mm=>async Tm=>{const fm=Tm&&await Tm.getIdTokenResult(),hm=fm&&((new Date).getTime()-Date.parse(fm.issuedAtTime))/1e3;if(hm&&hm>pa)return;const Am=null===fm||void 0===fm?void 0:fm.token;Ea!==Am&&(Ea=Am,await fetch(mm,{method:Am?"POST":"DELETE",headers:Am?{Authorization:`Bearer ${Am}`}:{}}))};function Oa(){let mm=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,Am.H)();const Tm=(0,Am.z)(mm,"auth");if(Tm.isInitialized())return Tm.getImmediate();const fm=PT(mm,{popupRedirectResolver:ma,persistence:[sh,nh,ch]}),am=(0,hm.I)("authTokenSyncURL");if(am){const mm=oa(am);wh(fm,mm,(()=>mm(fm.currentUser))),xh(fm,(Tm=>mm(Tm)))}const xm=(0,hm.G)("auth");return xm&&HT(fm,`http://${xm}`),fm}var Ya;Ya="Browser",(0,Am.A)(new wm.h("auth",((mm,Tm)=>{let{options:fm}=Tm;const hm=mm.getProvider("app").getImmediate(),Am=mm.getProvider("heartbeat"),am=mm.getProvider("app-check-internal"),{apiKey:xm,authDomain:wm}=hm.options;zm(xm&&!xm.includes(":"),"invalid-api-key",{appName:hm.name});const Dm={apiKey:xm,authDomain:wm,clientPlatform:Ya,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:QT(Ya)},im=new NT(hm,Am,am,Dm);return function(mm,Tm){const fm=(null===Tm||void 0===Tm?void 0:Tm.persistence)||[],hm=(Array.isArray(fm)?fm:[fm]).map(xT);(null===Tm||void 0===Tm?void 0:Tm.errorMap)&&mm._updateErrorMap(Tm.errorMap),mm._initializeWithPersistence(hm,null===Tm||void 0===Tm?void 0:Tm.popupRedirectResolver)}(im,fm),im}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((mm,Tm,fm)=>{mm.getProvider("auth-internal").initialize()}))),(0,Am.A)(new wm.h("auth-internal",(mm=>(mm=>new Ra(mm))(GT(mm.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,Am.N)(Da,ia,function(mm){switch(mm){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ya)),(0,Am.N)(Da,ia,"esm2017")}};Object.freeze(modules);for(const mm in modules)Object.freeze(modules[mm]);