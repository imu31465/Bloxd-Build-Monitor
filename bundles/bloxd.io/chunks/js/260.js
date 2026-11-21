/*! For license information please see x17cru.260.47c5fb69.chunk.js.LICENSE.txt */
export const id = 260;
export const ids = [260];
export const modules = {
    40527: (dd, Jd, kd) => {
        kd.r(Jd), kd.d(Jd, {
          ActionCodeOperation: () => ld,
          ActionCodeURL: () => wJ,
          AuthCredential: () => yJ,
          AuthErrorCodes: () => Rd,
          EmailAuthCredential: () => uJ,
          EmailAuthProvider: () => dk,
          FacebookAuthProvider: () => Nk,
          FactorId: () => gd,
          GithubAuthProvider: () => Pk,
          GoogleAuthProvider: () => Wk,
          OAuthCredential: () => VJ,
          OAuthProvider: () => pk,
          OperationType: () => od,
          PhoneAuthCredential: () => HJ,
          PhoneAuthProvider: () => NN,
          PhoneMultiFactorGenerator: () => pW,
          ProviderId: () => Cd,
          RecaptchaVerifier: () => Hp,
          SAMLAuthProvider: () => gk,
          SignInMethod: () => Kd,
          TotpMultiFactorGenerator: () => NW,
          TotpSecret: () => PW,
          TwitterAuthProvider: () => Ck,
          applyActionCode: () => jk,
          beforeAuthStateChanged: () => Pp,
          browserLocalPersistence: () => xp,
          browserPopupRedirectResolver: () => dW,
          browserSessionPersistence: () => Bp,
          checkActionCode: () => Xk,
          confirmPasswordReset: () => Sk,
          connectAuthEmulator: () => fJ,
          createUserWithEmailAndPassword: () => nk,
          debugErrorMap: () => Ld,
          deleteUser: () => op,
          fetchSignInMethodsForEmail: () => Ek,
          getAdditionalUserInfo: () => kp,
          getAuth: () => LW,
          getIdToken: () => ud,
          getIdTokenResult: () => td,
          getMultiFactorResolver: () => Lp,
          getRedirectResult: () => aN,
          inMemoryPersistence: () => gJ,
          indexedDBLocalPersistence: () => yp,
          initializeAuth: () => XJ,
          initializeRecaptchaConfig: () => Np,
          isSignInWithEmailLink: () => Dk,
          linkWithCredential: () => sk,
          linkWithPhoneNumber: () => dN,
          linkWithPopup: () => LN,
          linkWithRedirect: () => iN,
          multiFactor: () => Rp,
          onAuthStateChanged: () => Zp,
          onIdTokenChanged: () => Wp,
          parseActionCodeURL: () => AJ,
          prodErrorMap: () => Od,
          reauthenticateWithCredential: () => ik,
          reauthenticateWithPhoneNumber: () => JN,
          reauthenticateWithPopup: () => QN,
          reauthenticateWithRedirect: () => sN,
          reload: () => JJ,
          sendEmailVerification: () => ck,
          sendPasswordResetEmail: () => bk,
          sendSignInLinkToEmail: () => yk,
          setPersistence: () => pp,
          signInAnonymously: () => Lk,
          signInWithCredential: () => Bk,
          signInWithCustomToken: () => ak,
          signInWithEmailAndPassword: () => Uk,
          signInWithEmailLink: () => Tk,
          signInWithPhoneNumber: () => Ap,
          signInWithPopup: () => lN,
          signInWithRedirect: () => BN,
          signOut: () => Kp,
          unlink: () => Ik,
          updateCurrentUser: () => Cp,
          updateEmail: () => uk,
          updatePassword: () => tk,
          updatePhoneNumber: () => pN,
          updateProfile: () => rk,
          useDeviceLanguage: () => gp,
          verifyBeforeUpdateEmail: () => hk,
          verifyPasswordResetCode: () => fk
        });
        var pd = kd(40506),
          Nd = kd(40498);

        function Wd(dd, Jd) {
          var kd = {};
          for (var pd in dd) Object.prototype.hasOwnProperty.call(dd, pd) && Jd.indexOf(pd) < 0 && (kd[pd] = dd[pd]);
          if (null != dd && "function" === typeof Object.getOwnPropertySymbols) {
            var Nd = 0;
            for (pd = Object.getOwnPropertySymbols(dd); Nd < pd.length; Nd++) Jd.indexOf(pd[Nd]) < 0 && Object.prototype.propertyIsEnumerable.call(dd, pd[Nd]) && (kd[pd[Nd]] = dd[pd[Nd]])
          }
          return kd
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var Pd = kd(40515),
          Zd = kd(40504);
        const gd = {
            PHONE: "phone",
            TOTP: "totp"
          },
          Cd = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Kd = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          od = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          ld = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function Qd() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const Ld = function() {
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
          Od = Qd,
          ed = new pd.h("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          Rd = {
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
          Id = new Pd.d("@firebase/auth");

        function Gd(dd) {
          if (Id.logLevel <= Pd.b.ERROR) {
            for (var Jd = arguments.length, kd = new Array(Jd > 1 ? Jd - 1 : 0), pd = 1; pd < Jd; pd++) kd[pd - 1] = arguments[pd];
            Id.error(`Auth (${Nd.h}): ${dd}`, ...kd)
          }
        }

        function vd(dd) {
          for (var Jd = arguments.length, kd = new Array(Jd > 1 ? Jd - 1 : 0), pd = 1; pd < Jd; pd++) kd[pd - 1] = arguments[pd];
          throw sd(dd, ...kd)
        }

        function xd(dd) {
          for (var Jd = arguments.length, kd = new Array(Jd > 1 ? Jd - 1 : 0), pd = 1; pd < Jd; pd++) kd[pd - 1] = arguments[pd];
          return sd(dd, ...kd)
        }

        function qd(dd, Jd, kd) {
          const Nd = Object.assign(Object.assign({}, Od()), {
            [Jd]: kd
          });
          return new pd.h("auth", "Firebase", Nd).create(Jd, {
            appName: dd.name
          })
        }

        function Bd(dd, Jd, kd) {
          if (!(Jd instanceof kd)) throw kd.name !== Jd.constructor.name && vd(dd, "argument-error"), qd(dd, "argument-error", `Type of ${Jd.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function sd(dd) {
          for (var Jd = arguments.length, kd = new Array(Jd > 1 ? Jd - 1 : 0), pd = 1; pd < Jd; pd++) kd[pd - 1] = arguments[pd];
          if ("string" !== typeof dd) {
            const Jd = kd[0],
              pd = [...kd.slice(1)];
            return pd[0] && (pd[0].appName = dd.name), dd._errorFactory.create(Jd, ...pd)
          }
          return ed.create(dd, ...kd)
        }

        function ad(dd, Jd) {
          if (!dd) {
            for (var kd = arguments.length, pd = new Array(kd > 2 ? kd - 2 : 0), Nd = 2; Nd < kd; Nd++) pd[Nd - 2] = arguments[Nd];
            throw sd(Jd, ...pd)
          }
        }

        function Md(dd) {
          const Jd = "INTERNAL ASSERTION FAILED: " + dd;
          throw Gd(Jd), new Error(Jd)
        }

        function Fd(dd, Jd) {
          dd || Md(Jd)
        }

        function Yd() {
          var dd;
          return "undefined" !== typeof self && (null === (dd = self.location) || void 0 === dd ? void 0 : dd.href) || ""
        }

        function md() {
          return "http:" === bd() || "https:" === bd()
        }

        function bd() {
          var dd;
          return "undefined" !== typeof self && (null === (dd = self.location) || void 0 === dd ? void 0 : dd.protocol) || null
        }
        class Sd {
          constructor(dd, Jd) {
            this.shortDelay = dd, this.longDelay = Jd, Fd(Jd > dd, "Short delay should be less than long delay!"), this.isMobile = (0, pd.$)() || (0, pd.bb)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (md() || (0, pd.S)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function jd(dd, Jd) {
          Fd(dd.emulator, "Emulator should always be set here");
          const {
            url: kd
          } = dd.emulator;
          return Jd ? `${kd}${Jd.startsWith("/")?Jd.slice(1):Jd}` : kd
        }
        class Xd {
          static initialize(dd, Jd, kd) {
            this.fetchImpl = dd, Jd && (this.headersImpl = Jd), kd && (this.responseImpl = kd)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void Md("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void Md("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void Md("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const fd = {
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
          nd = new Sd(3e4, 6e4);

        function Ud(dd, Jd) {
          return dd.tenantId && !Jd.tenantId ? Object.assign(Object.assign({}, Jd), {
            tenantId: dd.tenantId
          }) : Jd
        }
        async function yd(dd, Jd, kd, Nd) {
          return Dd(dd, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let Wd = {},
              Pd = {};
            Nd && ("GET" === Jd ? Pd = Nd : Wd = {
              body: JSON.stringify(Nd)
            });
            const Zd = (0, pd.gb)(Object.assign({
                key: dd.config.apiKey
              }, Pd)).slice(1),
              gd = await dd._getAdditionalHeaders();
            return gd["Content-Type"] = "application/json", dd.languageCode && (gd["X-Firebase-Locale"] = dd.languageCode), Xd.fetch()(Ed(dd, dd.config.apiHost, kd, Zd), Object.assign({
              method: Jd,
              headers: gd,
              referrerPolicy: "no-referrer"
            }, Wd))
          }))
        }
        async function Dd(dd, Jd, kd) {
          dd._canInitEmulator = !1;
          const Nd = Object.assign(Object.assign({}, fd), Jd);
          try {
            const Jd = new cd(dd),
              pd = await Promise.race([kd(), Jd.promise]);
            Jd.clearNetworkTimeout();
            const Wd = await pd.json();
            if ("needConfirmation" in Wd) throw hd(dd, "account-exists-with-different-credential", Wd);
            if (pd.ok && !("errorMessage" in Wd)) return Wd;
            {
              const Jd = pd.ok ? Wd.errorMessage : Wd.error.message,
                [kd, Pd] = Jd.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === kd) throw hd(dd, "credential-already-in-use", Wd);
              if ("EMAIL_EXISTS" === kd) throw hd(dd, "email-already-in-use", Wd);
              if ("USER_DISABLED" === kd) throw hd(dd, "user-disabled", Wd);
              const Zd = Nd[kd] || kd.toLowerCase().replace(/[_\s]+/g, "-");
              if (Pd) throw qd(dd, Zd, Pd);
              vd(dd, Zd)
            }
          } catch (Wd) {
            if (Wd instanceof pd.l) throw Wd;
            vd(dd, "network-request-failed", {
              message: String(Wd)
            })
          }
        }
        async function Td(dd, Jd, kd, pd) {
          let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const Wd = await yd(dd, Jd, kd, pd, Nd);
          return "mfaPendingCredential" in Wd && vd(dd, "multi-factor-auth-required", {
            _serverResponse: Wd
          }), Wd
        }

        function Ed(dd, Jd, kd, pd) {
          const Nd = `${Jd}${kd}?${pd}`;
          return dd.config.emulator ? jd(dd.config, Nd) : `${dd.config.apiScheme}://${Nd}`
        }
        class cd {
          constructor(dd) {
            this.auth = dd, this.timer = null, this.promise = new Promise(((dd, Jd) => {
              this.timer = setTimeout((() => Jd(xd(this.auth, "network-request-failed"))), nd.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function hd(dd, Jd, kd) {
          const pd = {
            appName: dd.name
          };
          kd.email && (pd.email = kd.email), kd.phoneNumber && (pd.phoneNumber = kd.phoneNumber);
          const Nd = xd(dd, Jd, pd);
          return Nd.customData._tokenResponse = kd, Nd
        }

        function rd(dd) {
          if (dd) try {
            const Jd = new Date(Number(dd));
            if (!isNaN(Jd.getTime())) return Jd.toUTCString()
          } catch (Jd) {}
        }

        function ud(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, pd.P)(dd).getIdToken(Jd)
        }
        async function td(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const kd = (0, pd.P)(dd),
            Nd = await kd.getIdToken(Jd),
            Wd = zd(Nd);
          ad(Wd && Wd.exp && Wd.auth_time && Wd.iat, kd.auth, "internal-error");
          const Pd = "object" === typeof Wd.firebase ? Wd.firebase : void 0,
            Zd = null === Pd || void 0 === Pd ? void 0 : Pd.sign_in_provider;
          return {
            claims: Wd,
            token: Nd,
            authTime: rd(Vd(Wd.auth_time)),
            issuedAtTime: rd(Vd(Wd.iat)),
            expirationTime: rd(Vd(Wd.exp)),
            signInProvider: Zd || null,
            signInSecondFactor: (null === Pd || void 0 === Pd ? void 0 : Pd.sign_in_second_factor) || null
          }
        }

        function Vd(dd) {
          return 1e3 * Number(dd)
        }

        function zd(dd) {
          const [Jd, kd, Nd] = dd.split(".");
          if (void 0 === Jd || void 0 === kd || void 0 === Nd) return Gd("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const dd = (0, pd.p)(kd);
            return dd ? JSON.parse(dd) : (Gd("Failed to decode base64 JWT payload"), null)
          } catch (Wd) {
            return Gd("Caught error parsing JWT payload as JSON", null === Wd || void 0 === Wd ? void 0 : Wd.toString()), null
          }
        }
        async function Hd(dd, Jd) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return Jd;
          try {
            return await Jd
          } catch (kd) {
            throw kd instanceof pd.l && function(dd) {
              let {
                code: Jd
              } = dd;
              return "auth/user-disabled" === Jd || "auth/user-token-expired" === Jd
            }(kd) && dd.auth.currentUser === dd && await dd.auth.signOut(), kd
          }
        }
        class wd {
          constructor(dd) {
            this.user = dd, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(dd) {
            var Jd;
            if (dd) {
              const dd = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), dd
            } {
              this.errorBackoff = 3e4;
              const dd = (null !== (Jd = this.user.stsTokenManager.expirationTime) && void 0 !== Jd ? Jd : 0) - Date.now() - 3e5;
              return Math.max(0, dd)
            }
          }
          schedule() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const Jd = this.getInterval(dd);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), Jd)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (dd) {
              return void("auth/network-request-failed" === (null === dd || void 0 === dd ? void 0 : dd.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class Ad {
          constructor(dd, Jd) {
            this.createdAt = dd, this.lastLoginAt = Jd, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = rd(this.lastLoginAt), this.creationTime = rd(this.createdAt)
          }
          _copy(dd) {
            this.createdAt = dd.createdAt, this.lastLoginAt = dd.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function dJ(dd) {
          var Jd;
          const kd = dd.auth,
            pd = await dd.getIdToken(),
            Nd = await Hd(dd, async function(dd, Jd) {
              return yd(dd, "POST", "/v1/accounts:lookup", Jd)
            }(kd, {
              idToken: pd
            }));
          ad(null === Nd || void 0 === Nd ? void 0 : Nd.users.length, kd, "internal-error");
          const Pd = Nd.users[0];
          dd._notifyReloadListener(Pd);
          const Zd = (null === (Jd = Pd.providerUserInfo) || void 0 === Jd ? void 0 : Jd.length) ? Pd.providerUserInfo.map((dd => {
            var {
              providerId: Jd
            } = dd, kd = Wd(dd, ["providerId"]);
            return {
              providerId: Jd,
              uid: kd.rawId || "",
              displayName: kd.displayName || null,
              email: kd.email || null,
              phoneNumber: kd.phoneNumber || null,
              photoURL: kd.photoUrl || null
            }
          })) : [];
          const gd = (Cd = dd.providerData, Kd = Zd, [...Cd.filter((dd => !Kd.some((Jd => Jd.providerId === dd.providerId)))), ...Kd]);
          var Cd, Kd;
          const od = dd.isAnonymous,
            ld = !(dd.email && Pd.passwordHash) && !(null === gd || void 0 === gd ? void 0 : gd.length),
            Qd = !!od && ld,
            Ld = {
              uid: Pd.localId,
              displayName: Pd.displayName || null,
              photoURL: Pd.photoUrl || null,
              email: Pd.email || null,
              emailVerified: Pd.emailVerified || !1,
              phoneNumber: Pd.phoneNumber || null,
              tenantId: Pd.tenantId || null,
              providerData: gd,
              metadata: new Ad(Pd.createdAt, Pd.lastLoginAt),
              isAnonymous: Qd
            };
          Object.assign(dd, Ld)
        }
        async function JJ(dd) {
          const Jd = (0, pd.P)(dd);
          await dJ(Jd), await Jd.auth._persistUserIfCurrent(Jd), Jd.auth._notifyListenersIfCurrent(Jd)
        }
        class kJ {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(dd) {
            ad(dd.idToken, "internal-error"), ad("undefined" !== typeof dd.idToken, "internal-error"), ad("undefined" !== typeof dd.refreshToken, "internal-error");
            const Jd = "expiresIn" in dd && "undefined" !== typeof dd.expiresIn ? Number(dd.expiresIn) : function(dd) {
              const Jd = zd(dd);
              return ad(Jd, "internal-error"), ad("undefined" !== typeof Jd.exp, "internal-error"), ad("undefined" !== typeof Jd.iat, "internal-error"), Number(Jd.exp) - Number(Jd.iat)
            }(dd.idToken);
            this.updateTokensAndExpiration(dd.idToken, dd.refreshToken, Jd)
          }
          async getToken(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return ad(!this.accessToken || this.refreshToken, dd, "user-token-expired"), Jd || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(dd, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(dd, Jd) {
            const {
              accessToken: kd,
              refreshToken: Nd,
              expiresIn: Wd
            } = await async function(dd, Jd) {
              const kd = await Dd(dd, {}, (async () => {
                const kd = (0, pd.gb)({
                    grant_type: "refresh_token",
                    refresh_token: Jd
                  }).slice(1),
                  {
                    tokenApiHost: Nd,
                    apiKey: Wd
                  } = dd.config,
                  Pd = Ed(dd, Nd, "/v1/token", `key=${Wd}`),
                  Zd = await dd._getAdditionalHeaders();
                return Zd["Content-Type"] = "application/x-www-form-urlencoded", Xd.fetch()(Pd, {
                  method: "POST",
                  headers: Zd,
                  body: kd
                })
              }));
              return {
                accessToken: kd.access_token,
                expiresIn: kd.expires_in,
                refreshToken: kd.refresh_token
              }
            }(dd, Jd);
            this.updateTokensAndExpiration(kd, Nd, Number(Wd))
          }
          updateTokensAndExpiration(dd, Jd, kd) {
            this.refreshToken = Jd || null, this.accessToken = dd || null, this.expirationTime = Date.now() + 1e3 * kd
          }
          static fromJSON(dd, Jd) {
            const {
              refreshToken: kd,
              accessToken: pd,
              expirationTime: Nd
            } = Jd, Wd = new kJ;
            return kd && (ad("string" === typeof kd, "internal-error", {
              appName: dd
            }), Wd.refreshToken = kd), pd && (ad("string" === typeof pd, "internal-error", {
              appName: dd
            }), Wd.accessToken = pd), Nd && (ad("number" === typeof Nd, "internal-error", {
              appName: dd
            }), Wd.expirationTime = Nd), Wd
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(dd) {
            this.accessToken = dd.accessToken, this.refreshToken = dd.refreshToken, this.expirationTime = dd.expirationTime
          }
          _clone() {
            return Object.assign(new kJ, this.toJSON())
          }
          _performRefresh() {
            return Md("not implemented")
          }
        }

        function pJ(dd, Jd) {
          ad("string" === typeof dd || "undefined" === typeof dd, "internal-error", {
            appName: Jd
          })
        }
        class NJ {
          constructor(dd) {
            var {
              uid: Jd,
              auth: kd,
              stsTokenManager: pd
            } = dd, Nd = Wd(dd, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new wd(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = Jd, this.auth = kd, this.stsTokenManager = pd, this.accessToken = pd.accessToken, this.displayName = Nd.displayName || null, this.email = Nd.email || null, this.emailVerified = Nd.emailVerified || !1, this.phoneNumber = Nd.phoneNumber || null, this.photoURL = Nd.photoURL || null, this.isAnonymous = Nd.isAnonymous || !1, this.tenantId = Nd.tenantId || null, this.providerData = Nd.providerData ? [...Nd.providerData] : [], this.metadata = new Ad(Nd.createdAt || void 0, Nd.lastLoginAt || void 0)
          }
          async getIdToken(dd) {
            const Jd = await Hd(this, this.stsTokenManager.getToken(this.auth, dd));
            return ad(Jd, this.auth, "internal-error"), this.accessToken !== Jd && (this.accessToken = Jd, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), Jd
          }
          getIdTokenResult(dd) {
            return td(this, dd)
          }
          reload() {
            return JJ(this)
          }
          _assign(dd) {
            this !== dd && (ad(this.uid === dd.uid, this.auth, "internal-error"), this.displayName = dd.displayName, this.photoURL = dd.photoURL, this.email = dd.email, this.emailVerified = dd.emailVerified, this.phoneNumber = dd.phoneNumber, this.isAnonymous = dd.isAnonymous, this.tenantId = dd.tenantId, this.providerData = dd.providerData.map((dd => Object.assign({}, dd))), this.metadata._copy(dd.metadata), this.stsTokenManager._assign(dd.stsTokenManager))
          }
          _clone(dd) {
            const Jd = new NJ(Object.assign(Object.assign({}, this), {
              auth: dd,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return Jd.metadata._copy(this.metadata), Jd
          }
          _onReload(dd) {
            ad(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = dd, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(dd) {
            this.reloadListener ? this.reloadListener(dd) : this.reloadUserInfo = dd
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              kd = !1;
            dd.idToken && dd.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(dd), kd = !0), Jd && await dJ(this), await this.auth._persistUserIfCurrent(this), kd && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const dd = await this.getIdToken();
            return await Hd(this, async function(dd, Jd) {
              return yd(dd, "POST", "/v1/accounts:delete", Jd)
            }(this.auth, {
              idToken: dd
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
              providerData: this.providerData.map((dd => Object.assign({}, dd))),
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
          static _fromJSON(dd, Jd) {
            var kd, pd, Nd, Wd, Pd, Zd, gd, Cd;
            const Kd = null !== (kd = Jd.displayName) && void 0 !== kd ? kd : void 0,
              od = null !== (pd = Jd.email) && void 0 !== pd ? pd : void 0,
              ld = null !== (Nd = Jd.phoneNumber) && void 0 !== Nd ? Nd : void 0,
              Qd = null !== (Wd = Jd.photoURL) && void 0 !== Wd ? Wd : void 0,
              Ld = null !== (Pd = Jd.tenantId) && void 0 !== Pd ? Pd : void 0,
              Od = null !== (Zd = Jd._redirectEventId) && void 0 !== Zd ? Zd : void 0,
              ed = null !== (gd = Jd.createdAt) && void 0 !== gd ? gd : void 0,
              Rd = null !== (Cd = Jd.lastLoginAt) && void 0 !== Cd ? Cd : void 0,
              {
                uid: Id,
                emailVerified: Gd,
                isAnonymous: vd,
                providerData: xd,
                stsTokenManager: qd
              } = Jd;
            ad(Id && qd, dd, "internal-error");
            const Bd = kJ.fromJSON(this.name, qd);
            ad("string" === typeof Id, dd, "internal-error"), pJ(Kd, dd.name), pJ(od, dd.name), ad("boolean" === typeof Gd, dd, "internal-error"), ad("boolean" === typeof vd, dd, "internal-error"), pJ(ld, dd.name), pJ(Qd, dd.name), pJ(Ld, dd.name), pJ(Od, dd.name), pJ(ed, dd.name), pJ(Rd, dd.name);
            const sd = new NJ({
              uid: Id,
              auth: dd,
              email: od,
              emailVerified: Gd,
              displayName: Kd,
              isAnonymous: vd,
              photoURL: Qd,
              phoneNumber: ld,
              tenantId: Ld,
              stsTokenManager: Bd,
              createdAt: ed,
              lastLoginAt: Rd
            });
            return xd && Array.isArray(xd) && (sd.providerData = xd.map((dd => Object.assign({}, dd)))), Od && (sd._redirectEventId = Od), sd
          }
          static async _fromIdTokenResponse(dd, Jd) {
            let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const pd = new kJ;
            pd.updateFromServerResponse(Jd);
            const Nd = new NJ({
              uid: Jd.localId,
              auth: dd,
              stsTokenManager: pd,
              isAnonymous: kd
            });
            return await dJ(Nd), Nd
          }
        }
        const WJ = new Map;

        function PJ(dd) {
          Fd(dd instanceof Function, "Expected a class definition");
          let Jd = WJ.get(dd);
          return Jd ? (Fd(Jd instanceof dd, "Instance stored in cache mismatched with class"), Jd) : (Jd = new dd, WJ.set(dd, Jd), Jd)
        }
        class ZJ {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(dd, Jd) {
            this.storage[dd] = Jd
          }
          async _get(dd) {
            const Jd = this.storage[dd];
            return void 0 === Jd ? null : Jd
          }
          async _remove(dd) {
            delete this.storage[dd]
          }
          _addListener(dd, Jd) {}
          _removeListener(dd, Jd) {}
        }
        ZJ.type = "NONE";
        const gJ = ZJ;

        function CJ(dd, Jd, kd) {
          return `firebase:${dd}:${Jd}:${kd}`
        }
        class KJ {
          constructor(dd, Jd, kd) {
            this.persistence = dd, this.auth = Jd, this.userKey = kd;
            const {
              config: pd,
              name: Nd
            } = this.auth;
            this.fullUserKey = CJ(this.userKey, pd.apiKey, Nd), this.fullPersistenceKey = CJ("persistence", pd.apiKey, Nd), this.boundEventHandler = Jd._onStorageEvent.bind(Jd), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(dd) {
            return this.persistence._set(this.fullUserKey, dd.toJSON())
          }
          async getCurrentUser() {
            const dd = await this.persistence._get(this.fullUserKey);
            return dd ? NJ._fromJSON(this.auth, dd) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(dd) {
            if (this.persistence === dd) return;
            const Jd = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = dd, Jd ? this.setCurrentUser(Jd) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(dd, Jd) {
            let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!Jd.length) return new KJ(PJ(gJ), dd, kd);
            const pd = (await Promise.all(Jd.map((async dd => {
              if (await dd._isAvailable()) return dd
            })))).filter((dd => dd));
            let Nd = pd[0] || PJ(gJ);
            const Wd = CJ(kd, dd.config.apiKey, dd.name);
            let Pd = null;
            for (const Cd of Jd) try {
              const Jd = await Cd._get(Wd);
              if (Jd) {
                const kd = NJ._fromJSON(dd, Jd);
                Cd !== Nd && (Pd = kd), Nd = Cd;
                break
              }
            } catch (gd) {}
            const Zd = pd.filter((dd => dd._shouldAllowMigration));
            return Nd._shouldAllowMigration && Zd.length ? (Nd = Zd[0], Pd && await Nd._set(Wd, Pd.toJSON()), await Promise.all(Jd.map((async dd => {
              if (dd !== Nd) try {
                await dd._remove(Wd)
              } catch (gd) {}
            }))), new KJ(Nd, dd, kd)) : new KJ(Nd, dd, kd)
          }
        }

        function oJ(dd) {
          const Jd = dd.toLowerCase();
          if (Jd.includes("opera/") || Jd.includes("opr/") || Jd.includes("opios/")) return "Opera";
          if (OJ(Jd)) return "IEMobile";
          if (Jd.includes("msie") || Jd.includes("trident/")) return "IE";
          if (Jd.includes("edge/")) return "Edge";
          if (lJ(Jd)) return "Firefox";
          if (Jd.includes("silk/")) return "Silk";
          if (RJ(Jd)) return "Blackberry";
          if (IJ(Jd)) return "Webos";
          if (QJ(Jd)) return "Safari";
          if ((Jd.includes("chrome/") || LJ(Jd)) && !Jd.includes("edge/")) return "Chrome";
          if (eJ(Jd)) return "Android";
          {
            const Jd = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              kd = dd.match(Jd);
            if (2 === (null === kd || void 0 === kd ? void 0 : kd.length)) return kd[1]
          }
          return "Other"
        }

        function lJ() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pd.R)();
          return /firefox\//i.test(dd)
        }

        function QJ() {
          const dd = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pd.R)()).toLowerCase();
          return dd.includes("safari/") && !dd.includes("chrome/") && !dd.includes("crios/") && !dd.includes("android")
        }

        function LJ() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pd.R)();
          return /crios\//i.test(dd)
        }

        function OJ() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pd.R)();
          return /iemobile/i.test(dd)
        }

        function eJ() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pd.R)();
          return /android/i.test(dd)
        }

        function RJ() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pd.R)();
          return /blackberry/i.test(dd)
        }

        function IJ() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pd.R)();
          return /webos/i.test(dd)
        }

        function GJ() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pd.R)();
          return /iphone|ipad|ipod/i.test(dd) || /macintosh/i.test(dd) && /mobile/i.test(dd)
        }

        function vJ() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pd.R)();
          return GJ(dd) || eJ(dd) || IJ(dd) || RJ(dd) || /windows phone/i.test(dd) || OJ(dd)
        }

        function xJ(dd) {
          let Jd, kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (dd) {
            case "Browser":
              Jd = oJ((0, pd.R)());
              break;
            case "Worker":
              Jd = `${oJ((0,pd.R)())}-${dd}`;
              break;
            default:
              Jd = dd
          }
          const Wd = kd.length ? kd.join(",") : "FirebaseCore-web";
          return `${Jd}/JsCore/${Nd.h}/${Wd}`
        }
        async function qJ(dd, Jd) {
          return yd(dd, "GET", "/v2/recaptchaConfig", Ud(dd, Jd))
        }

        function BJ(dd) {
          return void 0 !== dd && void 0 !== dd.getResponse
        }

        function sJ(dd) {
          return void 0 !== dd && void 0 !== dd.enterprise
        }
        class iJ {
          constructor(dd) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === dd.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = dd.recaptchaKey.split("/")[3], this.emailPasswordEnabled = dd.recaptchaEnforcementState.some((dd => "EMAIL_PASSWORD_PROVIDER" === dd.provider && "OFF" !== dd.enforcementState))
          }
        }

        function aJ(dd) {
          return new Promise(((Jd, kd) => {
            const pd = document.createElement("script");
            pd.setAttribute("src", dd), pd.onload = Jd, pd.onerror = dd => {
                const Jd = xd("internal-error");
                Jd.customData = dd, kd(Jd)
              }, pd.type = "text/javascript", pd.charset = "UTF-8",
              function() {
                var dd, Jd;
                return null !== (Jd = null === (dd = document.getElementsByTagName("head")) || void 0 === dd ? void 0 : dd[0]) && void 0 !== Jd ? Jd : document
              }().appendChild(pd)
          }))
        }

        function MJ(dd) {
          return `__${dd}${Math.floor(1e6*Math.random())}`
        }
        class FJ {
          constructor(dd) {
            this.type = "recaptcha-enterprise", this.auth = SJ(dd)
          }
          async verify() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function kd(Jd, kd, pd) {
              const Nd = window.grecaptcha;
              sJ(Nd) ? Nd.enterprise.ready((() => {
                Nd.enterprise.execute(Jd, {
                  action: dd
                }).then((dd => {
                  kd(dd)
                })).catch((() => {
                  kd("NO_RECAPTCHA")
                }))
              })) : pd(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((dd, pd) => {
              (async function(dd) {
                if (!Jd) {
                  if (null == dd.tenantId && null != dd._agentRecaptchaConfig) return dd._agentRecaptchaConfig.siteKey;
                  if (null != dd.tenantId && void 0 !== dd._tenantRecaptchaConfigs[dd.tenantId]) return dd._tenantRecaptchaConfigs[dd.tenantId].siteKey
                }
                return new Promise((async (Jd, kd) => {
                  qJ(dd, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((pd => {
                    if (void 0 !== pd.recaptchaKey) {
                      const kd = new iJ(pd);
                      return null == dd.tenantId ? dd._agentRecaptchaConfig = kd : dd._tenantRecaptchaConfigs[dd.tenantId] = kd, Jd(kd.siteKey)
                    }
                    kd(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((dd => {
                    kd(dd)
                  }))
                }))
              })(this.auth).then((Nd => {
                if (!Jd && sJ(window.grecaptcha)) kd(Nd, dd, pd);
                else {
                  if ("undefined" === typeof window) return void pd(new Error("RecaptchaVerifier is only supported in browser"));
                  aJ("https://www.google.com/recaptcha/enterprise.js?render=" + Nd).then((() => {
                    kd(Nd, dd, pd)
                  })).catch((dd => {
                    pd(dd)
                  }))
                }
              })).catch((dd => {
                pd(dd)
              }))
            }))
          }
        }
        async function YJ(dd, Jd, kd) {
          let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const Nd = new FJ(dd);
          let Wd;
          try {
            Wd = await Nd.verify(kd)
          } catch (Zd) {
            Wd = await Nd.verify(kd, !0)
          }
          const Pd = Object.assign({}, Jd);
          return pd ? Object.assign(Pd, {
            captchaResp: Wd
          }) : Object.assign(Pd, {
            captchaResponse: Wd
          }), Object.assign(Pd, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(Pd, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), Pd
        }
        class mJ {
          constructor(dd) {
            this.auth = dd, this.queue = []
          }
          pushCallback(dd, Jd) {
            const kd = Jd => new Promise(((kd, pd) => {
              try {
                kd(dd(Jd))
              } catch (Nd) {
                pd(Nd)
              }
            }));
            kd.onAbort = Jd, this.queue.push(kd);
            const pd = this.queue.length - 1;
            return () => {
              this.queue[pd] = () => Promise.resolve()
            }
          }
          async runMiddleware(dd) {
            if (this.auth.currentUser === dd) return;
            const Jd = [];
            try {
              for (const kd of this.queue) await kd(dd), kd.onAbort && Jd.push(kd.onAbort)
            } catch (kd) {
              Jd.reverse();
              for (const dd of Jd) try {
                dd()
              } catch (pd) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === kd || void 0 === kd ? void 0 : kd.message
              })
            }
          }
        }
        class bJ {
          constructor(dd, Jd, kd, pd) {
            this.app = dd, this.heartbeatServiceProvider = Jd, this.appCheckServiceProvider = kd, this.config = pd, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new jJ(this), this.idTokenSubscription = new jJ(this), this.beforeStateQueue = new mJ(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = ed, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = dd.name, this.clientVersion = pd.sdkClientVersion
          }
          _initializeWithPersistence(dd, Jd) {
            return Jd && (this._popupRedirectResolver = PJ(Jd)), this._initializationPromise = this.queue((async () => {
              var kd, pd;
              if (!this._deleted && (this.persistenceManager = await KJ.create(this, dd), !this._deleted)) {
                if (null === (kd = this._popupRedirectResolver) || void 0 === kd ? void 0 : kd._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (Nd) {}
                await this.initializeCurrentUser(Jd), this.lastNotifiedUid = (null === (pd = this.currentUser) || void 0 === pd ? void 0 : pd.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const dd = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || dd ? this.currentUser && dd && this.currentUser.uid === dd.uid ? (this._currentUser._assign(dd), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(dd, !0) : void 0
          }
          async initializeCurrentUser(dd) {
            var Jd;
            const kd = await this.assertedPersistence.getCurrentUser();
            let pd = kd,
              Nd = !1;
            if (dd && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const kd = null === (Jd = this.redirectUser) || void 0 === Jd ? void 0 : Jd._redirectEventId,
                Wd = null === pd || void 0 === pd ? void 0 : pd._redirectEventId,
                Pd = await this.tryRedirectSignIn(dd);
              kd && kd !== Wd || !(null === Pd || void 0 === Pd ? void 0 : Pd.user) || (pd = Pd.user, Nd = !0)
            }
            if (!pd) return this.directlySetCurrentUser(null);
            if (!pd._redirectEventId) {
              if (Nd) try {
                await this.beforeStateQueue.runMiddleware(pd)
              } catch (Wd) {
                pd = kd, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(Wd)))
              }
              return pd ? this.reloadAndSetCurrentUserOrClear(pd) : this.directlySetCurrentUser(null)
            }
            return ad(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === pd._redirectEventId ? this.directlySetCurrentUser(pd) : this.reloadAndSetCurrentUserOrClear(pd)
          }
          async tryRedirectSignIn(dd) {
            let Jd = null;
            try {
              Jd = await this._popupRedirectResolver._completeRedirectFn(this, dd, !0)
            } catch (kd) {
              await this._setRedirectUser(null)
            }
            return Jd
          }
          async reloadAndSetCurrentUserOrClear(dd) {
            try {
              await dJ(dd)
            } catch (Jd) {
              if ("auth/network-request-failed" !== (null === Jd || void 0 === Jd ? void 0 : Jd.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(dd)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const dd = navigator;
              return dd.languages && dd.languages[0] || dd.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(dd) {
            const Jd = dd ? (0, pd.P)(dd) : null;
            return Jd && ad(Jd.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(Jd && Jd._clone(this))
          }
          async _updateCurrentUser(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return dd && ad(this.tenantId === dd.tenantId, this, "tenant-id-mismatch"), Jd || await this.beforeStateQueue.runMiddleware(dd), this.queue((async () => {
              await this.directlySetCurrentUser(dd), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(dd) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(PJ(dd))
            }))
          }
          async initializeRecaptchaConfig() {
            const dd = await qJ(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              Jd = new iJ(dd);
            if (null == this.tenantId ? this._agentRecaptchaConfig = Jd : this._tenantRecaptchaConfigs[this.tenantId] = Jd, Jd.emailPasswordEnabled) {
              new FJ(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(dd) {
            this._errorFactory = new pd.h("auth", "Firebase", dd())
          }
          onAuthStateChanged(dd, Jd, kd) {
            return this.registerStateListener(this.authStateSubscription, dd, Jd, kd)
          }
          beforeAuthStateChanged(dd, Jd) {
            return this.beforeStateQueue.pushCallback(dd, Jd)
          }
          onIdTokenChanged(dd, Jd, kd) {
            return this.registerStateListener(this.idTokenSubscription, dd, Jd, kd)
          }
          toJSON() {
            var dd;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (dd = this._currentUser) || void 0 === dd ? void 0 : dd.toJSON()
            }
          }
          async _setRedirectUser(dd, Jd) {
            const kd = await this.getOrInitRedirectPersistenceManager(Jd);
            return null === dd ? kd.removeCurrentUser() : kd.setCurrentUser(dd)
          }
          async getOrInitRedirectPersistenceManager(dd) {
            if (!this.redirectPersistenceManager) {
              const Jd = dd && PJ(dd) || this._popupRedirectResolver;
              ad(Jd, this, "argument-error"), this.redirectPersistenceManager = await KJ.create(this, [PJ(Jd._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(dd) {
            var Jd, kd;
            return this._isInitialized && await this.queue((async () => {})), (null === (Jd = this._currentUser) || void 0 === Jd ? void 0 : Jd._redirectEventId) === dd ? this._currentUser : (null === (kd = this.redirectUser) || void 0 === kd ? void 0 : kd._redirectEventId) === dd ? this.redirectUser : null
          }
          async _persistUserIfCurrent(dd) {
            if (dd === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(dd)))
          }
          _notifyListenersIfCurrent(dd) {
            dd === this.currentUser && this.notifyAuthListeners()
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
            var dd, Jd;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const kd = null !== (Jd = null === (dd = this.currentUser) || void 0 === dd ? void 0 : dd.uid) && void 0 !== Jd ? Jd : null;
            this.lastNotifiedUid !== kd && (this.lastNotifiedUid = kd, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(dd, Jd, kd, pd) {
            if (this._deleted) return () => {};
            const Nd = "function" === typeof Jd ? Jd : Jd.next.bind(Jd),
              Wd = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return ad(Wd, this, "internal-error"), Wd.then((() => Nd(this.currentUser))), "function" === typeof Jd ? dd.addObserver(Jd, kd, pd) : dd.addObserver(Jd)
          }
          async directlySetCurrentUser(dd) {
            this.currentUser && this.currentUser !== dd && this._currentUser._stopProactiveRefresh(), dd && this.isProactiveRefreshEnabled && dd._startProactiveRefresh(), this.currentUser = dd, dd ? await this.assertedPersistence.setCurrentUser(dd) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(dd) {
            return this.operations = this.operations.then(dd, dd), this.operations
          }
          get assertedPersistence() {
            return ad(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(dd) {
            dd && !this.frameworks.includes(dd) && (this.frameworks.push(dd), this.frameworks.sort(), this.clientVersion = xJ(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var dd;
            const Jd = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (Jd["X-Firebase-gmpid"] = this.app.options.appId);
            const kd = await (null === (dd = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === dd ? void 0 : dd.getHeartbeatsHeader());
            kd && (Jd["X-Firebase-Client"] = kd);
            const pd = await this._getAppCheckToken();
            return pd && (Jd["X-Firebase-AppCheck"] = pd), Jd
          }
          async _getAppCheckToken() {
            var dd;
            const Jd = await (null === (dd = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === dd ? void 0 : dd.getToken());
            return (null === Jd || void 0 === Jd ? void 0 : Jd.error) && function(dd) {
              if (Id.logLevel <= Pd.b.WARN) {
                for (var Jd = arguments.length, kd = new Array(Jd > 1 ? Jd - 1 : 0), pd = 1; pd < Jd; pd++) kd[pd - 1] = arguments[pd];
                Id.warn(`Auth (${Nd.h}): ${dd}`, ...kd)
              }
            }(`Error while retrieving App Check token: ${Jd.error}`), null === Jd || void 0 === Jd ? void 0 : Jd.token
          }
        }

        function SJ(dd) {
          return (0, pd.P)(dd)
        }
        class jJ {
          constructor(dd) {
            this.auth = dd, this.observer = null, this.addObserver = (0, pd.x)((dd => this.observer = dd))
          }
          get next() {
            return ad(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function XJ(dd, Jd) {
          const kd = (0, Nd.F)(dd, "auth");
          if (kd.isInitialized()) {
            const dd = kd.getImmediate(),
              Nd = kd.getOptions();
            if ((0, pd.B)(Nd, null !== Jd && void 0 !== Jd ? Jd : {})) return dd;
            vd(dd, "already-initialized")
          }
          return kd.initialize({
            options: Jd
          })
        }

        function fJ(dd, Jd, kd) {
          const pd = SJ(dd);
          ad(pd._canInitEmulator, pd, "emulator-config-failed"), ad(/^https?:\/\//.test(Jd), pd, "invalid-emulator-scheme");
          const Nd = !!(null === kd || void 0 === kd ? void 0 : kd.disableWarnings),
            Wd = nJ(Jd),
            {
              host: Pd,
              port: Zd
            } = function(dd) {
              const Jd = nJ(dd),
                kd = /(\/\/)?([^?#/]+)/.exec(dd.substr(Jd.length));
              if (!kd) return {
                host: "",
                port: null
              };
              const pd = kd[2].split("@").pop() || "",
                Nd = /^(\[[^\]]+\])(:|$)/.exec(pd);
              if (Nd) {
                const dd = Nd[1];
                return {
                  host: dd,
                  port: UJ(pd.substr(dd.length + 1))
                }
              } {
                const [dd, Jd] = pd.split(":");
                return {
                  host: dd,
                  port: UJ(Jd)
                }
              }
            }(Jd),
            gd = null === Zd ? "" : `:${Zd}`;
          pd.config.emulator = {
            url: `${Wd}//${Pd}${gd}/`
          }, pd.settings.appVerificationDisabledForTesting = !0, pd.emulatorConfig = Object.freeze({
            host: Pd,
            port: Zd,
            protocol: Wd.replace(":", ""),
            options: Object.freeze({
              disableWarnings: Nd
            })
          }), Nd || function() {
            function dd() {
              const dd = document.createElement("p"),
                Jd = dd.style;
              dd.innerText = "Running in emulator mode. Do not use with production credentials.", Jd.position = "fixed", Jd.width = "100%", Jd.backgroundColor = "#ffffff", Jd.border = ".1em solid #000000", Jd.color = "#b50000", Jd.bottom = "0px", Jd.left = "0px", Jd.margin = "0px", Jd.zIndex = "10000", Jd.textAlign = "center", dd.classList.add("firebase-emulator-warning"), document.body.appendChild(dd)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", dd) : dd())
          }()
        }

        function nJ(dd) {
          const Jd = dd.indexOf(":");
          return Jd < 0 ? "" : dd.substr(0, Jd + 1)
        }

        function UJ(dd) {
          if (!dd) return null;
          const Jd = Number(dd);
          return isNaN(Jd) ? null : Jd
        }
        class yJ {
          constructor(dd, Jd) {
            this.providerId = dd, this.signInMethod = Jd
          }
          toJSON() {
            return Md("not implemented")
          }
          _getIdTokenResponse(dd) {
            return Md("not implemented")
          }
          _linkToIdToken(dd, Jd) {
            return Md("not implemented")
          }
          _getReauthenticationResolver(dd) {
            return Md("not implemented")
          }
        }
        async function DJ(dd, Jd) {
          return yd(dd, "POST", "/v1/accounts:resetPassword", Ud(dd, Jd))
        }
        async function TJ(dd, Jd) {
          return yd(dd, "POST", "/v1/accounts:update", Jd)
        }
        async function EJ(dd, Jd) {
          return Td(dd, "POST", "/v1/accounts:signInWithPassword", Ud(dd, Jd))
        }
        async function cJ(dd, Jd) {
          return yd(dd, "POST", "/v1/accounts:sendOobCode", Ud(dd, Jd))
        }
        async function hJ(dd, Jd) {
          return cJ(dd, Jd)
        }
        async function rJ(dd, Jd) {
          return cJ(dd, Jd)
        }
        class uJ extends yJ {
          constructor(dd, Jd, kd) {
            let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", kd), this._email = dd, this._password = Jd, this._tenantId = pd
          }
          static _fromEmailAndPassword(dd, Jd) {
            return new uJ(dd, Jd, "password")
          }
          static _fromEmailAndCode(dd, Jd) {
            return new uJ(dd, Jd, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(dd) {
            const Jd = "string" === typeof dd ? JSON.parse(dd) : dd;
            if ((null === Jd || void 0 === Jd ? void 0 : Jd.email) && (null === Jd || void 0 === Jd ? void 0 : Jd.password)) {
              if ("password" === Jd.signInMethod) return this._fromEmailAndPassword(Jd.email, Jd.password);
              if ("emailLink" === Jd.signInMethod) return this._fromEmailAndCode(Jd.email, Jd.password, Jd.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(dd) {
            var Jd;
            switch (this.signInMethod) {
              case "password":
                const kd = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (Jd = dd._getRecaptchaConfig()) || void 0 === Jd ? void 0 : Jd.emailPasswordEnabled) {
                  const Jd = await YJ(dd, kd, "signInWithPassword");
                  return EJ(dd, Jd)
                }
                return EJ(dd, kd).catch((async Jd => {
                  if ("auth/missing-recaptcha-token" === Jd.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const Jd = await YJ(dd, kd, "signInWithPassword");
                    return EJ(dd, Jd)
                  }
                  return Promise.reject(Jd)
                }));
              case "emailLink":
                return async function(dd, Jd) {
                  return Td(dd, "POST", "/v1/accounts:signInWithEmailLink", Ud(dd, Jd))
                }(dd, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                vd(dd, "internal-error")
            }
          }
          async _linkToIdToken(dd, Jd) {
            switch (this.signInMethod) {
              case "password":
                return TJ(dd, {
                  idToken: Jd,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(dd, Jd) {
                  return Td(dd, "POST", "/v1/accounts:signInWithEmailLink", Ud(dd, Jd))
                }(dd, {
                  idToken: Jd,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                vd(dd, "internal-error")
            }
          }
          _getReauthenticationResolver(dd) {
            return this._getIdTokenResponse(dd)
          }
        }
        async function tJ(dd, Jd) {
          return Td(dd, "POST", "/v1/accounts:signInWithIdp", Ud(dd, Jd))
        }
        class VJ extends yJ {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(dd) {
            const Jd = new VJ(dd.providerId, dd.signInMethod);
            return dd.idToken || dd.accessToken ? (dd.idToken && (Jd.idToken = dd.idToken), dd.accessToken && (Jd.accessToken = dd.accessToken), dd.nonce && !dd.pendingToken && (Jd.nonce = dd.nonce), dd.pendingToken && (Jd.pendingToken = dd.pendingToken)) : dd.oauthToken && dd.oauthTokenSecret ? (Jd.accessToken = dd.oauthToken, Jd.secret = dd.oauthTokenSecret) : vd("argument-error"), Jd
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
          static fromJSON(dd) {
            const Jd = "string" === typeof dd ? JSON.parse(dd) : dd,
              {
                providerId: kd,
                signInMethod: pd
              } = Jd,
              Nd = Wd(Jd, ["providerId", "signInMethod"]);
            if (!kd || !pd) return null;
            const Pd = new VJ(kd, pd);
            return Pd.idToken = Nd.idToken || void 0, Pd.accessToken = Nd.accessToken || void 0, Pd.secret = Nd.secret, Pd.nonce = Nd.nonce, Pd.pendingToken = Nd.pendingToken || null, Pd
          }
          _getIdTokenResponse(dd) {
            return tJ(dd, this.buildRequest())
          }
          _linkToIdToken(dd, Jd) {
            const kd = this.buildRequest();
            return kd.idToken = Jd, tJ(dd, kd)
          }
          _getReauthenticationResolver(dd) {
            const Jd = this.buildRequest();
            return Jd.autoCreate = !1, tJ(dd, Jd)
          }
          buildRequest() {
            const dd = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) dd.pendingToken = this.pendingToken;
            else {
              const Jd = {};
              this.idToken && (Jd.id_token = this.idToken), this.accessToken && (Jd.access_token = this.accessToken), this.secret && (Jd.oauth_token_secret = this.secret), Jd.providerId = this.providerId, this.nonce && !this.pendingToken && (Jd.nonce = this.nonce), dd.postBody = (0, pd.gb)(Jd)
            }
            return dd
          }
        }
        const zJ = {
          USER_NOT_FOUND: "user-not-found"
        };
        class HJ extends yJ {
          constructor(dd) {
            super("phone", "phone"), this.params = dd
          }
          static _fromVerification(dd, Jd) {
            return new HJ({
              verificationId: dd,
              verificationCode: Jd
            })
          }
          static _fromTokenResponse(dd, Jd) {
            return new HJ({
              phoneNumber: dd,
              temporaryProof: Jd
            })
          }
          _getIdTokenResponse(dd) {
            return async function(dd, Jd) {
              return Td(dd, "POST", "/v1/accounts:signInWithPhoneNumber", Ud(dd, Jd))
            }(dd, this._makeVerificationRequest())
          }
          _linkToIdToken(dd, Jd) {
            return async function(dd, Jd) {
              const kd = await Td(dd, "POST", "/v1/accounts:signInWithPhoneNumber", Ud(dd, Jd));
              if (kd.temporaryProof) throw hd(dd, "account-exists-with-different-credential", kd);
              return kd
            }(dd, Object.assign({
              idToken: Jd
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(dd) {
            return async function(dd, Jd) {
              return Td(dd, "POST", "/v1/accounts:signInWithPhoneNumber", Ud(dd, Object.assign(Object.assign({}, Jd), {
                operation: "REAUTH"
              })), zJ)
            }(dd, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: dd,
              phoneNumber: Jd,
              verificationId: kd,
              verificationCode: pd
            } = this.params;
            return dd && Jd ? {
              temporaryProof: dd,
              phoneNumber: Jd
            } : {
              sessionInfo: kd,
              code: pd
            }
          }
          toJSON() {
            const dd = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (dd.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (dd.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (dd.verificationCode = this.params.verificationCode), this.params.verificationId && (dd.verificationId = this.params.verificationId), dd
          }
          static fromJSON(dd) {
            "string" === typeof dd && (dd = JSON.parse(dd));
            const {
              verificationId: Jd,
              verificationCode: kd,
              phoneNumber: pd,
              temporaryProof: Nd
            } = dd;
            return kd || Jd || pd || Nd ? new HJ({
              verificationId: Jd,
              verificationCode: kd,
              phoneNumber: pd,
              temporaryProof: Nd
            }) : null
          }
        }
        class wJ {
          constructor(dd) {
            var Jd, kd, Nd, Wd, Pd, Zd;
            const gd = (0, pd.eb)((0, pd.C)(dd)),
              Cd = null !== (Jd = gd.apiKey) && void 0 !== Jd ? Jd : null,
              Kd = null !== (kd = gd.oobCode) && void 0 !== kd ? kd : null,
              od = function(dd) {
                switch (dd) {
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
              }(null !== (Nd = gd.mode) && void 0 !== Nd ? Nd : null);
            ad(Cd && Kd && od, "argument-error"), this.apiKey = Cd, this.operation = od, this.code = Kd, this.continueUrl = null !== (Wd = gd.continueUrl) && void 0 !== Wd ? Wd : null, this.languageCode = null !== (Pd = gd.languageCode) && void 0 !== Pd ? Pd : null, this.tenantId = null !== (Zd = gd.tenantId) && void 0 !== Zd ? Zd : null
          }
          static parseLink(dd) {
            const Jd = function(dd) {
              const Jd = (0, pd.eb)((0, pd.C)(dd)).link,
                kd = Jd ? (0, pd.eb)((0, pd.C)(Jd)).deep_link_id : null,
                Nd = (0, pd.eb)((0, pd.C)(dd)).deep_link_id;
              return (Nd ? (0, pd.eb)((0, pd.C)(Nd)).link : null) || Nd || kd || Jd || dd
            }(dd);
            try {
              return new wJ(Jd)
            } catch (kd) {
              return null
            }
          }
        }

        function AJ(dd) {
          return wJ.parseLink(dd)
        }
        class dk {
          constructor() {
            this.providerId = dk.PROVIDER_ID
          }
          static credential(dd, Jd) {
            return uJ._fromEmailAndPassword(dd, Jd)
          }
          static credentialWithLink(dd, Jd) {
            const kd = wJ.parseLink(Jd);
            return ad(kd, "argument-error"), uJ._fromEmailAndCode(dd, kd.code, kd.tenantId)
          }
        }
        dk.PROVIDER_ID = "password", dk.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", dk.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class Jk {
          constructor(dd) {
            this.providerId = dd, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(dd) {
            this.defaultLanguageCode = dd
          }
          setCustomParameters(dd) {
            return this.customParameters = dd, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class kk extends Jk {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(dd) {
            return this.scopes.includes(dd) || this.scopes.push(dd), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class pk extends kk {
          static credentialFromJSON(dd) {
            const Jd = "string" === typeof dd ? JSON.parse(dd) : dd;
            return ad("providerId" in Jd && "signInMethod" in Jd, "argument-error"), VJ._fromParams(Jd)
          }
          credential(dd) {
            return this._credential(Object.assign(Object.assign({}, dd), {
              nonce: dd.rawNonce
            }))
          }
          _credential(dd) {
            return ad(dd.idToken || dd.accessToken, "argument-error"), VJ._fromParams(Object.assign(Object.assign({}, dd), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(dd) {
            return pk.oauthCredentialFromTaggedObject(dd)
          }
          static credentialFromError(dd) {
            return pk.oauthCredentialFromTaggedObject(dd.customData || {})
          }
          static oauthCredentialFromTaggedObject(dd) {
            let {
              _tokenResponse: Jd
            } = dd;
            if (!Jd) return null;
            const {
              oauthIdToken: kd,
              oauthAccessToken: pd,
              oauthTokenSecret: Nd,
              pendingToken: Wd,
              nonce: Pd,
              providerId: Zd
            } = Jd;
            if (!pd && !Nd && !kd && !Wd) return null;
            if (!Zd) return null;
            try {
              return new pk(Zd)._credential({
                idToken: kd,
                accessToken: pd,
                nonce: Pd,
                pendingToken: Wd
              })
            } catch (gd) {
              return null
            }
          }
        }
        class Nk extends kk {
          constructor() {
            super("facebook.com")
          }
          static credential(dd) {
            return VJ._fromParams({
              providerId: Nk.PROVIDER_ID,
              signInMethod: Nk.FACEBOOK_SIGN_IN_METHOD,
              accessToken: dd
            })
          }
          static credentialFromResult(dd) {
            return Nk.credentialFromTaggedObject(dd)
          }
          static credentialFromError(dd) {
            return Nk.credentialFromTaggedObject(dd.customData || {})
          }
          static credentialFromTaggedObject(dd) {
            let {
              _tokenResponse: Jd
            } = dd;
            if (!Jd || !("oauthAccessToken" in Jd)) return null;
            if (!Jd.oauthAccessToken) return null;
            try {
              return Nk.credential(Jd.oauthAccessToken)
            } catch (kd) {
              return null
            }
          }
        }
        Nk.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Nk.PROVIDER_ID = "facebook.com";
        class Wk extends kk {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(dd, Jd) {
            return VJ._fromParams({
              providerId: Wk.PROVIDER_ID,
              signInMethod: Wk.GOOGLE_SIGN_IN_METHOD,
              idToken: dd,
              accessToken: Jd
            })
          }
          static credentialFromResult(dd) {
            return Wk.credentialFromTaggedObject(dd)
          }
          static credentialFromError(dd) {
            return Wk.credentialFromTaggedObject(dd.customData || {})
          }
          static credentialFromTaggedObject(dd) {
            let {
              _tokenResponse: Jd
            } = dd;
            if (!Jd) return null;
            const {
              oauthIdToken: kd,
              oauthAccessToken: pd
            } = Jd;
            if (!kd && !pd) return null;
            try {
              return Wk.credential(kd, pd)
            } catch (Nd) {
              return null
            }
          }
        }
        Wk.GOOGLE_SIGN_IN_METHOD = "google.com", Wk.PROVIDER_ID = "google.com";
        class Pk extends kk {
          constructor() {
            super("github.com")
          }
          static credential(dd) {
            return VJ._fromParams({
              providerId: Pk.PROVIDER_ID,
              signInMethod: Pk.GITHUB_SIGN_IN_METHOD,
              accessToken: dd
            })
          }
          static credentialFromResult(dd) {
            return Pk.credentialFromTaggedObject(dd)
          }
          static credentialFromError(dd) {
            return Pk.credentialFromTaggedObject(dd.customData || {})
          }
          static credentialFromTaggedObject(dd) {
            let {
              _tokenResponse: Jd
            } = dd;
            if (!Jd || !("oauthAccessToken" in Jd)) return null;
            if (!Jd.oauthAccessToken) return null;
            try {
              return Pk.credential(Jd.oauthAccessToken)
            } catch (kd) {
              return null
            }
          }
        }
        Pk.GITHUB_SIGN_IN_METHOD = "github.com", Pk.PROVIDER_ID = "github.com";
        class Zk extends yJ {
          constructor(dd, Jd) {
            super(dd, dd), this.pendingToken = Jd
          }
          _getIdTokenResponse(dd) {
            return tJ(dd, this.buildRequest())
          }
          _linkToIdToken(dd, Jd) {
            const kd = this.buildRequest();
            return kd.idToken = Jd, tJ(dd, kd)
          }
          _getReauthenticationResolver(dd) {
            const Jd = this.buildRequest();
            return Jd.autoCreate = !1, tJ(dd, Jd)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(dd) {
            const Jd = "string" === typeof dd ? JSON.parse(dd) : dd,
              {
                providerId: kd,
                signInMethod: pd,
                pendingToken: Nd
              } = Jd;
            return kd && pd && Nd && kd === pd ? new Zk(kd, Nd) : null
          }
          static _create(dd, Jd) {
            return new Zk(dd, Jd)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class gk extends Jk {
          constructor(dd) {
            ad(dd.startsWith("saml."), "argument-error"), super(dd)
          }
          static credentialFromResult(dd) {
            return gk.samlCredentialFromTaggedObject(dd)
          }
          static credentialFromError(dd) {
            return gk.samlCredentialFromTaggedObject(dd.customData || {})
          }
          static credentialFromJSON(dd) {
            const Jd = Zk.fromJSON(dd);
            return ad(Jd, "argument-error"), Jd
          }
          static samlCredentialFromTaggedObject(dd) {
            let {
              _tokenResponse: Jd
            } = dd;
            if (!Jd) return null;
            const {
              pendingToken: kd,
              providerId: pd
            } = Jd;
            if (!kd || !pd) return null;
            try {
              return Zk._create(pd, kd)
            } catch (Nd) {
              return null
            }
          }
        }
        class Ck extends kk {
          constructor() {
            super("twitter.com")
          }
          static credential(dd, Jd) {
            return VJ._fromParams({
              providerId: Ck.PROVIDER_ID,
              signInMethod: Ck.TWITTER_SIGN_IN_METHOD,
              oauthToken: dd,
              oauthTokenSecret: Jd
            })
          }
          static credentialFromResult(dd) {
            return Ck.credentialFromTaggedObject(dd)
          }
          static credentialFromError(dd) {
            return Ck.credentialFromTaggedObject(dd.customData || {})
          }
          static credentialFromTaggedObject(dd) {
            let {
              _tokenResponse: Jd
            } = dd;
            if (!Jd) return null;
            const {
              oauthAccessToken: kd,
              oauthTokenSecret: pd
            } = Jd;
            if (!kd || !pd) return null;
            try {
              return Ck.credential(kd, pd)
            } catch (Nd) {
              return null
            }
          }
        }
        async function Kk(dd, Jd) {
          return Td(dd, "POST", "/v1/accounts:signUp", Ud(dd, Jd))
        }
        Ck.TWITTER_SIGN_IN_METHOD = "twitter.com", Ck.PROVIDER_ID = "twitter.com";
        class lk {
          constructor(dd) {
            this.user = dd.user, this.providerId = dd.providerId, this._tokenResponse = dd._tokenResponse, this.operationType = dd.operationType
          }
          static async _fromIdTokenResponse(dd, Jd, kd) {
            let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Nd = await NJ._fromIdTokenResponse(dd, kd, pd),
              Wd = Qk(kd);
            return new lk({
              user: Nd,
              providerId: Wd,
              _tokenResponse: kd,
              operationType: Jd
            })
          }
          static async _forOperation(dd, Jd, kd) {
            await dd._updateTokensIfNecessary(kd, !0);
            const pd = Qk(kd);
            return new lk({
              user: dd,
              providerId: pd,
              _tokenResponse: kd,
              operationType: Jd
            })
          }
        }

        function Qk(dd) {
          return dd.providerId ? dd.providerId : "phoneNumber" in dd ? "phone" : null
        }
        async function Lk(dd) {
          var Jd;
          const kd = SJ(dd);
          if (await kd._initializationPromise, null === (Jd = kd.currentUser) || void 0 === Jd ? void 0 : Jd.isAnonymous) return new lk({
            user: kd.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const pd = await Kk(kd, {
              returnSecureToken: !0
            }),
            Nd = await lk._fromIdTokenResponse(kd, "signIn", pd, !0);
          return await kd._updateCurrentUser(Nd.user), Nd
        }
        class Ok extends pd.l {
          constructor(dd, Jd, kd, pd) {
            var Nd;
            super(Jd.code, Jd.message), this.operationType = kd, this.user = pd, Object.setPrototypeOf(this, Ok.prototype), this.customData = {
              appName: dd.name,
              tenantId: null !== (Nd = dd.tenantId) && void 0 !== Nd ? Nd : void 0,
              _serverResponse: Jd.customData._serverResponse,
              operationType: kd
            }
          }
          static _fromErrorAndOperation(dd, Jd, kd, pd) {
            return new Ok(dd, Jd, kd, pd)
          }
        }

        function ek(dd, Jd, kd, pd) {
          return ("reauthenticate" === Jd ? kd._getReauthenticationResolver(dd) : kd._getIdTokenResponse(dd)).catch((kd => {
            if ("auth/multi-factor-auth-required" === kd.code) throw Ok._fromErrorAndOperation(dd, kd, Jd, pd);
            throw kd
          }))
        }

        function Rk(dd) {
          return new Set(dd.map((dd => {
            let {
              providerId: Jd
            } = dd;
            return Jd
          })).filter((dd => !!dd)))
        }
        async function Ik(dd, Jd) {
          const kd = (0, pd.P)(dd);
          await vk(!0, kd, Jd);
          const {
            providerUserInfo: Nd
          } = await async function(dd, Jd) {
            return yd(dd, "POST", "/v1/accounts:update", Jd)
          }(kd.auth, {
            idToken: await kd.getIdToken(),
            deleteProvider: [Jd]
          }), Wd = Rk(Nd || []);
          return kd.providerData = kd.providerData.filter((dd => Wd.has(dd.providerId))), Wd.has("phone") || (kd.phoneNumber = null), await kd.auth._persistUserIfCurrent(kd), kd
        }
        async function Gk(dd, Jd) {
          let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const pd = await Hd(dd, Jd._linkToIdToken(dd.auth, await dd.getIdToken()), kd);
          return lk._forOperation(dd, "link", pd)
        }
        async function vk(dd, Jd, kd) {
          await dJ(Jd);
          const pd = !1 === dd ? "provider-already-linked" : "no-such-provider";
          ad(Rk(Jd.providerData).has(kd) === dd, Jd.auth, pd)
        }
        async function xk(dd, Jd) {
          let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: pd
          } = dd, Nd = "reauthenticate";
          try {
            const Wd = await Hd(dd, ek(pd, Nd, Jd, dd), kd);
            ad(Wd.idToken, pd, "internal-error");
            const Pd = zd(Wd.idToken);
            ad(Pd, pd, "internal-error");
            const {
              sub: Zd
            } = Pd;
            return ad(dd.uid === Zd, pd, "user-mismatch"), lk._forOperation(dd, Nd, Wd)
          } catch (Wd) {
            throw "auth/user-not-found" === (null === Wd || void 0 === Wd ? void 0 : Wd.code) && vd(pd, "user-mismatch"), Wd
          }
        }
        async function qk(dd, Jd) {
          let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const pd = "signIn",
            Nd = await ek(dd, pd, Jd),
            Wd = await lk._fromIdTokenResponse(dd, pd, Nd);
          return kd || await dd._updateCurrentUser(Wd.user), Wd
        }
        async function Bk(dd, Jd) {
          return qk(SJ(dd), Jd)
        }
        async function sk(dd, Jd) {
          const kd = (0, pd.P)(dd);
          return await vk(!1, kd, Jd.providerId), Gk(kd, Jd)
        }
        async function ik(dd, Jd) {
          return xk((0, pd.P)(dd), Jd)
        }
        async function ak(dd, Jd) {
          const kd = SJ(dd),
            pd = await async function(dd, Jd) {
              return Td(dd, "POST", "/v1/accounts:signInWithCustomToken", Ud(dd, Jd))
            }(kd, {
              token: Jd,
              returnSecureToken: !0
            }), Nd = await lk._fromIdTokenResponse(kd, "signIn", pd);
          return await kd._updateCurrentUser(Nd.user), Nd
        }
        class Mk {
          constructor(dd, Jd) {
            this.factorId = dd, this.uid = Jd.mfaEnrollmentId, this.enrollmentTime = new Date(Jd.enrolledAt).toUTCString(), this.displayName = Jd.displayName
          }
          static _fromServerResponse(dd, Jd) {
            return "phoneInfo" in Jd ? Fk._fromServerResponse(dd, Jd) : "totpInfo" in Jd ? Yk._fromServerResponse(dd, Jd) : vd(dd, "internal-error")
          }
        }
        class Fk extends Mk {
          constructor(dd) {
            super("phone", dd), this.phoneNumber = dd.phoneInfo
          }
          static _fromServerResponse(dd, Jd) {
            return new Fk(Jd)
          }
        }
        class Yk extends Mk {
          constructor(dd) {
            super("totp", dd)
          }
          static _fromServerResponse(dd, Jd) {
            return new Yk(Jd)
          }
        }

        function mk(dd, Jd, kd) {
          var pd;
          ad((null === (pd = kd.url) || void 0 === pd ? void 0 : pd.length) > 0, dd, "invalid-continue-uri"), ad("undefined" === typeof kd.dynamicLinkDomain || kd.dynamicLinkDomain.length > 0, dd, "invalid-dynamic-link-domain"), Jd.continueUrl = kd.url, Jd.dynamicLinkDomain = kd.dynamicLinkDomain, Jd.canHandleCodeInApp = kd.handleCodeInApp, kd.iOS && (ad(kd.iOS.bundleId.length > 0, dd, "missing-ios-bundle-id"), Jd.iOSBundleId = kd.iOS.bundleId), kd.android && (ad(kd.android.packageName.length > 0, dd, "missing-android-pkg-name"), Jd.androidInstallApp = kd.android.installApp, Jd.androidMinimumVersionCode = kd.android.minimumVersion, Jd.androidPackageName = kd.android.packageName)
        }
        async function bk(dd, Jd, kd) {
          var pd;
          const Nd = SJ(dd),
            Wd = {
              requestType: "PASSWORD_RESET",
              email: Jd,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (pd = Nd._getRecaptchaConfig()) || void 0 === pd ? void 0 : pd.emailPasswordEnabled) {
            const dd = await YJ(Nd, Wd, "getOobCode", !0);
            kd && mk(Nd, dd, kd), await hJ(Nd, dd)
          } else kd && mk(Nd, Wd, kd), await hJ(Nd, Wd).catch((async dd => {
            if ("auth/missing-recaptcha-token" !== dd.code) return Promise.reject(dd);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const dd = await YJ(Nd, Wd, "getOobCode", !0);
              kd && mk(Nd, dd, kd), await hJ(Nd, dd)
            }
          }))
        }
        async function Sk(dd, Jd, kd) {
          await DJ((0, pd.P)(dd), {
            oobCode: Jd,
            newPassword: kd
          })
        }
        async function jk(dd, Jd) {
          await async function(dd, Jd) {
            return yd(dd, "POST", "/v1/accounts:update", Ud(dd, Jd))
          }((0, pd.P)(dd), {
            oobCode: Jd
          })
        }
        async function Xk(dd, Jd) {
          const kd = (0, pd.P)(dd),
            Nd = await DJ(kd, {
              oobCode: Jd
            }),
            Wd = Nd.requestType;
          switch (ad(Wd, kd, "internal-error"), Wd) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              ad(Nd.newEmail, kd, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              ad(Nd.mfaInfo, kd, "internal-error");
            default:
              ad(Nd.email, kd, "internal-error")
          }
          let Pd = null;
          return Nd.mfaInfo && (Pd = Mk._fromServerResponse(SJ(kd), Nd.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === Nd.requestType ? Nd.newEmail : Nd.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === Nd.requestType ? Nd.email : Nd.newEmail) || null,
              multiFactorInfo: Pd
            },
            operation: Wd
          }
        }
        async function fk(dd, Jd) {
          const {
            data: kd
          } = await Xk((0, pd.P)(dd), Jd);
          return kd.email
        }
        async function nk(dd, Jd, kd) {
          var pd;
          const Nd = SJ(dd),
            Wd = {
              returnSecureToken: !0,
              email: Jd,
              password: kd,
              clientType: "CLIENT_TYPE_WEB"
            };
          let Pd;
          if (null === (pd = Nd._getRecaptchaConfig()) || void 0 === pd ? void 0 : pd.emailPasswordEnabled) {
            const dd = await YJ(Nd, Wd, "signUpPassword");
            Pd = Kk(Nd, dd)
          } else Pd = Kk(Nd, Wd).catch((async dd => {
            if ("auth/missing-recaptcha-token" === dd.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const dd = await YJ(Nd, Wd, "signUpPassword");
              return Kk(Nd, dd)
            }
            return Promise.reject(dd)
          }));
          const Zd = await Pd.catch((dd => Promise.reject(dd))),
            gd = await lk._fromIdTokenResponse(Nd, "signIn", Zd);
          return await Nd._updateCurrentUser(gd.user), gd
        }

        function Uk(dd, Jd, kd) {
          return Bk((0, pd.P)(dd), dk.credential(Jd, kd))
        }
        async function yk(dd, Jd, kd) {
          var pd;
          const Nd = SJ(dd),
            Wd = {
              requestType: "EMAIL_SIGNIN",
              email: Jd,
              clientType: "CLIENT_TYPE_WEB"
            };

          function Pd(dd, Jd) {
            ad(Jd.handleCodeInApp, Nd, "argument-error"), Jd && mk(Nd, dd, Jd)
          }
          if (null === (pd = Nd._getRecaptchaConfig()) || void 0 === pd ? void 0 : pd.emailPasswordEnabled) {
            const dd = await YJ(Nd, Wd, "getOobCode", !0);
            Pd(dd, kd), await rJ(Nd, dd)
          } else Pd(Wd, kd), await rJ(Nd, Wd).catch((async dd => {
            if ("auth/missing-recaptcha-token" !== dd.code) return Promise.reject(dd);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const dd = await YJ(Nd, Wd, "getOobCode", !0);
              Pd(dd, kd), await rJ(Nd, dd)
            }
          }))
        }

        function Dk(dd, Jd) {
          const kd = wJ.parseLink(Jd);
          return "EMAIL_SIGNIN" === (null === kd || void 0 === kd ? void 0 : kd.operation)
        }
        async function Tk(dd, Jd, kd) {
          const Nd = (0, pd.P)(dd),
            Wd = dk.credentialWithLink(Jd, kd || Yd());
          return ad(Wd._tenantId === (Nd.tenantId || null), Nd, "tenant-id-mismatch"), Bk(Nd, Wd)
        }
        async function Ek(dd, Jd) {
          const kd = {
              identifier: Jd,
              continueUri: md() ? Yd() : "http://localhost"
            },
            {
              signinMethods: Nd
            } = await async function(dd, Jd) {
              return yd(dd, "POST", "/v1/accounts:createAuthUri", Ud(dd, Jd))
            }((0, pd.P)(dd), kd);
          return Nd || []
        }
        async function ck(dd, Jd) {
          const kd = (0, pd.P)(dd),
            Nd = {
              requestType: "VERIFY_EMAIL",
              idToken: await dd.getIdToken()
            };
          Jd && mk(kd.auth, Nd, Jd);
          const {
            email: Wd
          } = await async function(dd, Jd) {
            return cJ(dd, Jd)
          }(kd.auth, Nd);
          Wd !== dd.email && await dd.reload()
        }
        async function hk(dd, Jd, kd) {
          const Nd = (0, pd.P)(dd),
            Wd = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await dd.getIdToken(),
              newEmail: Jd
            };
          kd && mk(Nd.auth, Wd, kd);
          const {
            email: Pd
          } = await async function(dd, Jd) {
            return cJ(dd, Jd)
          }(Nd.auth, Wd);
          Pd !== dd.email && await dd.reload()
        }
        async function rk(dd, Jd) {
          let {
            displayName: kd,
            photoURL: Nd
          } = Jd;
          if (void 0 === kd && void 0 === Nd) return;
          const Wd = (0, pd.P)(dd),
            Pd = {
              idToken: await Wd.getIdToken(),
              displayName: kd,
              photoUrl: Nd,
              returnSecureToken: !0
            },
            Zd = await Hd(Wd, async function(dd, Jd) {
              return yd(dd, "POST", "/v1/accounts:update", Jd)
            }(Wd.auth, Pd));
          Wd.displayName = Zd.displayName || null, Wd.photoURL = Zd.photoUrl || null;
          const gd = Wd.providerData.find((dd => {
            let {
              providerId: Jd
            } = dd;
            return "password" === Jd
          }));
          gd && (gd.displayName = Wd.displayName, gd.photoURL = Wd.photoURL), await Wd._updateTokensIfNecessary(Zd)
        }

        function uk(dd, Jd) {
          return Vk((0, pd.P)(dd), Jd, null)
        }

        function tk(dd, Jd) {
          return Vk((0, pd.P)(dd), null, Jd)
        }
        async function Vk(dd, Jd, kd) {
          const {
            auth: pd
          } = dd, Nd = {
            idToken: await dd.getIdToken(),
            returnSecureToken: !0
          };
          Jd && (Nd.email = Jd), kd && (Nd.password = kd);
          const Wd = await Hd(dd, TJ(pd, Nd));
          await dd._updateTokensIfNecessary(Wd, !0)
        }
        class zk {
          constructor(dd, Jd) {
            let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = dd, this.providerId = Jd, this.profile = kd
          }
        }
        class Hk extends zk {
          constructor(dd, Jd, kd, pd) {
            super(dd, Jd, kd), this.username = pd
          }
        }
        class wk extends zk {
          constructor(dd, Jd) {
            super(dd, "facebook.com", Jd)
          }
        }
        class Ak extends Hk {
          constructor(dd, Jd) {
            super(dd, "github.com", Jd, "string" === typeof(null === Jd || void 0 === Jd ? void 0 : Jd.login) ? null === Jd || void 0 === Jd ? void 0 : Jd.login : null)
          }
        }
        class dp extends zk {
          constructor(dd, Jd) {
            super(dd, "google.com", Jd)
          }
        }
        class Jp extends Hk {
          constructor(dd, Jd, kd) {
            super(dd, "twitter.com", Jd, kd)
          }
        }

        function kp(dd) {
          const {
            user: Jd,
            _tokenResponse: kd
          } = dd;
          return Jd.isAnonymous && !kd ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(dd) {
            var Jd, kd;
            if (!dd) return null;
            const {
              providerId: pd
            } = dd, Nd = dd.rawUserInfo ? JSON.parse(dd.rawUserInfo) : {}, Wd = dd.isNewUser || "identitytoolkit#SignupNewUserResponse" === dd.kind;
            if (!pd && (null === dd || void 0 === dd ? void 0 : dd.idToken)) {
              const pd = null === (kd = null === (Jd = zd(dd.idToken)) || void 0 === Jd ? void 0 : Jd.firebase) || void 0 === kd ? void 0 : kd.sign_in_provider;
              if (pd) return new zk(Wd, "anonymous" !== pd && "custom" !== pd ? pd : null)
            }
            if (!pd) return null;
            switch (pd) {
              case "facebook.com":
                return new wk(Wd, Nd);
              case "github.com":
                return new Ak(Wd, Nd);
              case "google.com":
                return new dp(Wd, Nd);
              case "twitter.com":
                return new Jp(Wd, Nd, dd.screenName || null);
              case "custom":
              case "anonymous":
                return new zk(Wd, null);
              default:
                return new zk(Wd, pd, Nd)
            }
          }(kd)
        }

        function pp(dd, Jd) {
          return (0, pd.P)(dd).setPersistence(Jd)
        }

        function Np(dd) {
          return SJ(dd).initializeRecaptchaConfig()
        }

        function Wp(dd, Jd, kd, Nd) {
          return (0, pd.P)(dd).onIdTokenChanged(Jd, kd, Nd)
        }

        function Pp(dd, Jd, kd) {
          return (0, pd.P)(dd).beforeAuthStateChanged(Jd, kd)
        }

        function Zp(dd, Jd, kd, Nd) {
          return (0, pd.P)(dd).onAuthStateChanged(Jd, kd, Nd)
        }

        function gp(dd) {
          (0, pd.P)(dd).useDeviceLanguage()
        }

        function Cp(dd, Jd) {
          return (0, pd.P)(dd).updateCurrentUser(Jd)
        }

        function Kp(dd) {
          return (0, pd.P)(dd).signOut()
        }
        async function op(dd) {
          return (0, pd.P)(dd).delete()
        }
        class lp {
          constructor(dd, Jd, kd) {
            this.type = dd, this.credential = Jd, this.auth = kd
          }
          static _fromIdtoken(dd, Jd) {
            return new lp("enroll", dd, Jd)
          }
          static _fromMfaPendingCredential(dd) {
            return new lp("signin", dd)
          }
          toJSON() {
            const dd = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [dd]: this.credential
              }
            }
          }
          static fromJSON(dd) {
            var Jd, kd;
            if (null === dd || void 0 === dd ? void 0 : dd.multiFactorSession) {
              if (null === (Jd = dd.multiFactorSession) || void 0 === Jd ? void 0 : Jd.pendingCredential) return lp._fromMfaPendingCredential(dd.multiFactorSession.pendingCredential);
              if (null === (kd = dd.multiFactorSession) || void 0 === kd ? void 0 : kd.idToken) return lp._fromIdtoken(dd.multiFactorSession.idToken)
            }
            return null
          }
        }
        class Qp {
          constructor(dd, Jd, kd) {
            this.session = dd, this.hints = Jd, this.signInResolver = kd
          }
          static _fromError(dd, Jd) {
            const kd = SJ(dd),
              pd = Jd.customData._serverResponse,
              Nd = (pd.mfaInfo || []).map((dd => Mk._fromServerResponse(kd, dd)));
            ad(pd.mfaPendingCredential, kd, "internal-error");
            const Wd = lp._fromMfaPendingCredential(pd.mfaPendingCredential);
            return new Qp(Wd, Nd, (async dd => {
              const Nd = await dd._process(kd, Wd);
              delete pd.mfaInfo, delete pd.mfaPendingCredential;
              const Pd = Object.assign(Object.assign({}, pd), {
                idToken: Nd.idToken,
                refreshToken: Nd.refreshToken
              });
              switch (Jd.operationType) {
                case "signIn":
                  const dd = await lk._fromIdTokenResponse(kd, Jd.operationType, Pd);
                  return await kd._updateCurrentUser(dd.user), dd;
                case "reauthenticate":
                  return ad(Jd.user, kd, "internal-error"), lk._forOperation(Jd.user, Jd.operationType, Pd);
                default:
                  vd(kd, "internal-error")
              }
            }))
          }
          async resolveSignIn(dd) {
            const Jd = dd;
            return this.signInResolver(Jd)
          }
        }

        function Lp(dd, Jd) {
          var kd;
          const Nd = (0, pd.P)(dd),
            Wd = Jd;
          return ad(Jd.customData.operationType, Nd, "argument-error"), ad(null === (kd = Wd.customData._serverResponse) || void 0 === kd ? void 0 : kd.mfaPendingCredential, Nd, "argument-error"), Qp._fromError(Nd, Wd)
        }
        class Op {
          constructor(dd) {
            this.user = dd, this.enrolledFactors = [], dd._onReload((Jd => {
              Jd.mfaInfo && (this.enrolledFactors = Jd.mfaInfo.map((Jd => Mk._fromServerResponse(dd.auth, Jd))))
            }))
          }
          static _fromUser(dd) {
            return new Op(dd)
          }
          async getSession() {
            return lp._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(dd, Jd) {
            const kd = dd,
              pd = await this.getSession(),
              Nd = await Hd(this.user, kd._process(this.user.auth, pd, Jd));
            return await this.user._updateTokensIfNecessary(Nd), this.user.reload()
          }
          async unenroll(dd) {
            const Jd = "string" === typeof dd ? dd : dd.uid,
              kd = await this.user.getIdToken();
            try {
              const dd = await Hd(this.user, (pd = this.user.auth, Nd = {
                idToken: kd,
                mfaEnrollmentId: Jd
              }, yd(pd, "POST", "/v2/accounts/mfaEnrollment:withdraw", Ud(pd, Nd))));
              this.enrolledFactors = this.enrolledFactors.filter((dd => {
                let {
                  uid: kd
                } = dd;
                return kd !== Jd
              })), await this.user._updateTokensIfNecessary(dd), await this.user.reload()
            } catch (Wd) {
              throw Wd
            }
            var pd, Nd
          }
        }
        const ep = new WeakMap;

        function Rp(dd) {
          const Jd = (0, pd.P)(dd);
          return ep.has(Jd) || ep.set(Jd, Op._fromUser(Jd)), ep.get(Jd)
        }
        const Ip = "__sak";
        class Gp {
          constructor(dd, Jd) {
            this.storageRetriever = dd, this.type = Jd
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(Ip, "1"), this.storage.removeItem(Ip), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (dd) {
              return Promise.resolve(!1)
            }
          }
          _set(dd, Jd) {
            return this.storage.setItem(dd, JSON.stringify(Jd)), Promise.resolve()
          }
          _get(dd) {
            const Jd = this.storage.getItem(dd);
            return Promise.resolve(Jd ? JSON.parse(Jd) : null)
          }
          _remove(dd) {
            return this.storage.removeItem(dd), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class vp extends Gp {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (dd, Jd) => this.onStorageEvent(dd, Jd), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const dd = (0, pd.R)();
              return QJ(dd) || GJ(dd)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (dd) {
                return !1
              }
            }(), this.fallbackToPolling = vJ(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(dd) {
            for (const Jd of Object.keys(this.listeners)) {
              const kd = this.storage.getItem(Jd),
                pd = this.localCache[Jd];
              kd !== pd && dd(Jd, pd, kd)
            }
          }
          onStorageEvent(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!dd.key) return void this.forAllChangedKeys(((dd, Jd, kd) => {
              this.notifyListeners(dd, kd)
            }));
            const kd = dd.key;
            if (Jd ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const pd = this.storage.getItem(kd);
              if (dd.newValue !== pd) null !== dd.newValue ? this.storage.setItem(kd, dd.newValue) : this.storage.removeItem(kd);
              else if (this.localCache[kd] === dd.newValue && !Jd) return
            }
            const Nd = () => {
                const dd = this.storage.getItem(kd);
                (Jd || this.localCache[kd] !== dd) && this.notifyListeners(kd, dd)
              },
              Wd = this.storage.getItem(kd);
            (0, pd.W)() && 10 === document.documentMode && Wd !== dd.newValue && dd.newValue !== dd.oldValue ? setTimeout(Nd, 10) : Nd()
          }
          notifyListeners(dd, Jd) {
            this.localCache[dd] = Jd;
            const kd = this.listeners[dd];
            if (kd)
              for (const pd of Array.from(kd)) pd(Jd ? JSON.parse(Jd) : Jd)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((dd, Jd, kd) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: dd,
                  oldValue: Jd,
                  newValue: kd
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
          _addListener(dd, Jd) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[dd] || (this.listeners[dd] = new Set, this.localCache[dd] = this.storage.getItem(dd)), this.listeners[dd].add(Jd)
          }
          _removeListener(dd, Jd) {
            this.listeners[dd] && (this.listeners[dd].delete(Jd), 0 === this.listeners[dd].size && delete this.listeners[dd]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(dd, Jd) {
            await super._set(dd, Jd), this.localCache[dd] = JSON.stringify(Jd)
          }
          async _get(dd) {
            const Jd = await super._get(dd);
            return this.localCache[dd] = JSON.stringify(Jd), Jd
          }
          async _remove(dd) {
            await super._remove(dd), delete this.localCache[dd]
          }
        }
        vp.type = "LOCAL";
        const xp = vp;
        class qp extends Gp {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(dd, Jd) {}
          _removeListener(dd, Jd) {}
        }
        qp.type = "SESSION";
        const Bp = qp;
        class sp {
          constructor(dd) {
            this.eventTarget = dd, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(dd) {
            const Jd = this.receivers.find((Jd => Jd.isListeningto(dd)));
            if (Jd) return Jd;
            const kd = new sp(dd);
            return this.receivers.push(kd), kd
          }
          isListeningto(dd) {
            return this.eventTarget === dd
          }
          async handleEvent(dd) {
            const Jd = dd,
              {
                eventId: kd,
                eventType: pd,
                data: Nd
              } = Jd.data,
              Wd = this.handlersMap[pd];
            if (!(null === Wd || void 0 === Wd ? void 0 : Wd.size)) return;
            Jd.ports[0].postMessage({
              status: "ack",
              eventId: kd,
              eventType: pd
            });
            const Pd = Array.from(Wd).map((async dd => dd(Jd.origin, Nd))),
              Zd = await
            function(dd) {
              return Promise.all(dd.map((async dd => {
                try {
                  return {
                    fulfilled: !0,
                    value: await dd
                  }
                } catch (Jd) {
                  return {
                    fulfilled: !1,
                    reason: Jd
                  }
                }
              })))
            }(Pd);
            Jd.ports[0].postMessage({
              status: "done",
              eventId: kd,
              eventType: pd,
              response: Zd
            })
          }
          _subscribe(dd, Jd) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[dd] || (this.handlersMap[dd] = new Set), this.handlersMap[dd].add(Jd)
          }
          _unsubscribe(dd, Jd) {
            this.handlersMap[dd] && Jd && this.handlersMap[dd].delete(Jd), Jd && 0 !== this.handlersMap[dd].size || delete this.handlersMap[dd], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function ip() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            kd = "";
          for (let pd = 0; pd < Jd; pd++) kd += Math.floor(10 * Math.random());
          return dd + kd
        }
        sp.receivers = [];
        class ap {
          constructor(dd) {
            this.target = dd, this.handlers = new Set
          }
          removeMessageHandler(dd) {
            dd.messageChannel && (dd.messageChannel.port1.removeEventListener("message", dd.JG), dd.messageChannel.port1.close()), this.handlers.delete(dd)
          }
          async _send(dd, Jd) {
            let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const pd = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!pd) throw new Error("connection_unavailable");
            let Nd, Wd;
            return new Promise(((Pd, Zd) => {
              const gd = ip("", 20);
              pd.port1.start();
              const Cd = setTimeout((() => {
                Zd(new Error("unsupported_event"))
              }), kd);
              Wd = {
                messageChannel: pd,
                JG(dd) {
                  const Jd = dd;
                  if (Jd.data.eventId === gd) switch (Jd.data.status) {
                    case "ack":
                      clearTimeout(Cd), Nd = setTimeout((() => {
                        Zd(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(Nd), Pd(Jd.data.response);
                      break;
                    default:
                      clearTimeout(Cd), clearTimeout(Nd), Zd(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(Wd), pd.port1.addEventListener("message", Wd.JG), this.target.postMessage({
                eventType: dd,
                eventId: gd,
                data: Jd
              }, [pd.port2])
            })).finally((() => {
              Wd && this.removeMessageHandler(Wd)
            }))
          }
        }

        function Mp() {
          return window
        }

        function Fp() {
          return "undefined" !== typeof Mp().WorkerGlobalScope && "function" === typeof Mp().importScripts
        }
        const Yp = "firebaseLocalStorageDb",
          mp = "firebaseLocalStorage",
          bp = "fbase_key";
        class Sp {
          constructor(dd) {
            this.request = dd
          }
          toPromise() {
            return new Promise(((dd, Jd) => {
              this.request.addEventListener("success", (() => {
                dd(this.request.result)
              })), this.request.addEventListener("error", (() => {
                Jd(this.request.error)
              }))
            }))
          }
        }

        function jp(dd, Jd) {
          return dd.transaction([mp], Jd ? "readwrite" : "readonly").objectStore(mp)
        }

        function Xp() {
          const dd = indexedDB.open(Yp, 1);
          return new Promise(((Jd, kd) => {
            dd.addEventListener("error", (() => {
              kd(dd.error)
            })), dd.addEventListener("upgradeneeded", (() => {
              const Jd = dd.result;
              try {
                Jd.createObjectStore(mp, {
                  keyPath: bp
                })
              } catch (pd) {
                kd(pd)
              }
            })), dd.addEventListener("success", (async () => {
              const kd = dd.result;
              kd.objectStoreNames.contains(mp) ? Jd(kd) : (kd.close(), await
                function() {
                  const dd = indexedDB.deleteDatabase(Yp);
                  return new Sp(dd).toPromise()
                }(), Jd(await Xp()))
            }))
          }))
        }
        async function fp(dd, Jd, kd) {
          const pd = jp(dd, !0).put({
            [bp]: Jd,
            value: kd
          });
          return new Sp(pd).toPromise()
        }

        function np(dd, Jd) {
          const kd = jp(dd, !0).delete(Jd);
          return new Sp(kd).toPromise()
        }
        class Up {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await Xp()), this.db
          }
          async _withRetries(dd) {
            let Jd = 0;
            for (;;) try {
              const Jd = await this._openDb();
              return await dd(Jd)
            } catch (kd) {
              if (Jd++ > 3) throw kd;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return Fp() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = sp._getInstance(Fp() ? self : null), this.receiver._subscribe("keyChanged", (async (dd, Jd) => ({
              keyProcessed: (await this._poll()).includes(Jd.key)
            }))), this.receiver._subscribe("ping", (async (dd, Jd) => ["keyChanged"]))
          }
          async initializeSender() {
            var dd, Jd;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (dd) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new ap(this.activeServiceWorker);
            const kd = await this.sender._send("ping", {}, 800);
            kd && (null === (dd = kd[0]) || void 0 === dd ? void 0 : dd.fulfilled) && (null === (Jd = kd[0]) || void 0 === Jd ? void 0 : Jd.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(dd) {
            if (this.sender && this.activeServiceWorker && function() {
                var dd;
                return (null === (dd = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === dd ? void 0 : dd.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: dd
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (Jd) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const dd = await Xp();
              return await fp(dd, Ip, "1"), await np(dd, Ip), !0
            } catch (dd) {}
            return !1
          }
          async _withPendingWrite(dd) {
            this.pendingWrites++;
            try {
              await dd()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(dd, Jd) {
            return this._withPendingWrite((async () => (await this._withRetries((kd => fp(kd, dd, Jd))), this.localCache[dd] = Jd, this.notifyServiceWorker(dd))))
          }
          async _get(dd) {
            const Jd = await this._withRetries((Jd => async function(dd, Jd) {
              const kd = jp(dd, !1).get(Jd),
                pd = await new Sp(kd).toPromise();
              return void 0 === pd ? null : pd.value
            }(Jd, dd)));
            return this.localCache[dd] = Jd, Jd
          }
          async _remove(dd) {
            return this._withPendingWrite((async () => (await this._withRetries((Jd => np(Jd, dd))), delete this.localCache[dd], this.notifyServiceWorker(dd))))
          }
          async _poll() {
            const dd = await this._withRetries((dd => {
              const Jd = jp(dd, !1).getAll();
              return new Sp(Jd).toPromise()
            }));
            if (!dd) return [];
            if (0 !== this.pendingWrites) return [];
            const Jd = [],
              kd = new Set;
            for (const {
                fbase_key: pd,
                value: Nd
              }
              of dd) kd.add(pd), JSON.stringify(this.localCache[pd]) !== JSON.stringify(Nd) && (this.notifyListeners(pd, Nd), Jd.push(pd));
            for (const pd of Object.keys(this.localCache)) this.localCache[pd] && !kd.has(pd) && (this.notifyListeners(pd, null), Jd.push(pd));
            return Jd
          }
          notifyListeners(dd, Jd) {
            this.localCache[dd] = Jd;
            const kd = this.listeners[dd];
            if (kd)
              for (const pd of Array.from(kd)) pd(Jd)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(dd, Jd) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[dd] || (this.listeners[dd] = new Set, this._get(dd)), this.listeners[dd].add(Jd)
          }
          _removeListener(dd, Jd) {
            this.listeners[dd] && (this.listeners[dd].delete(Jd), 0 === this.listeners[dd].size && delete this.listeners[dd]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        Up.type = "LOCAL";
        const yp = Up;
        const Dp = 1e12;
        class Tp {
          constructor(dd) {
            this.auth = dd, this.counter = Dp, this._widgets = new Map
          }
          render(dd, Jd) {
            const kd = this.counter;
            return this._widgets.set(kd, new Ep(dd, this.auth.name, Jd || {})), this.counter++, kd
          }
          reset(dd) {
            var Jd;
            const kd = dd || Dp;
            null === (Jd = this._widgets.get(kd)) || void 0 === Jd || Jd.delete(), this._widgets.delete(kd)
          }
          getResponse(dd) {
            var Jd;
            const kd = dd || Dp;
            return (null === (Jd = this._widgets.get(kd)) || void 0 === Jd ? void 0 : Jd.getResponse()) || ""
          }
          async execute(dd) {
            var Jd;
            const kd = dd || Dp;
            return null === (Jd = this._widgets.get(kd)) || void 0 === Jd || Jd.execute(), ""
          }
        }
        class Ep {
          constructor(dd, Jd, kd) {
            this.params = kd, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const pd = "string" === typeof dd ? document.getElementById(dd) : dd;
            ad(pd, "argument-error", {
              appName: Jd
            }), this.container = pd, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(dd) {
                const Jd = [],
                  kd = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let pd = 0; pd < dd; pd++) Jd.push(kd.charAt(Math.floor(Math.random() * kd.length)));
                return Jd.join("")
              }(50);
              const {
                callback: dd,
                "expired-callback": Jd
              } = this.params;
              if (dd) try {
                dd(this.responseToken)
              } catch (kd) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, Jd) try {
                  Jd()
                } catch (kd) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const cp = MJ("rcb"),
          hp = new Sd(3e4, 6e4);
        class rp {
          constructor() {
            var dd;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (dd = Mp().grecaptcha) || void 0 === dd ? void 0 : dd.render)
          }
          load(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return ad(function(dd) {
              return dd.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(dd)
            }(Jd), dd, "argument-error"), this.shouldResolveImmediately(Jd) && BJ(Mp().grecaptcha) ? Promise.resolve(Mp().grecaptcha) : new Promise(((kd, Nd) => {
              const Wd = Mp().setTimeout((() => {
                Nd(xd(dd, "network-request-failed"))
              }), hp.get());
              Mp()[cp] = () => {
                Mp().clearTimeout(Wd), delete Mp()[cp];
                const pd = Mp().grecaptcha;
                if (!pd || !BJ(pd)) return void Nd(xd(dd, "internal-error"));
                const Pd = pd.render;
                pd.render = (dd, Jd) => {
                  const kd = Pd(dd, Jd);
                  return this.counter++, kd
                }, this.hostLanguage = Jd, kd(pd)
              };
              aJ(`https://www.google.com/recaptcha/api.js??${(0,pd.gb)({onload:cp,render:"explicit",hl:Jd})}`).catch((() => {
                clearTimeout(Wd), Nd(xd(dd, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(dd) {
            var Jd;
            return !!(null === (Jd = Mp().grecaptcha) || void 0 === Jd ? void 0 : Jd.render) && (dd === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class tp {
          async load(dd) {
            return new Tp(dd)
          }
          clearedOneInstance() {}
        }
        const Vp = "recaptcha",
          zp = {
            theme: "light",
            type: "image"
          };
        class Hp {
          constructor(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, zp),
              kd = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = Jd, this.type = Vp, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = SJ(kd), this.isInvisible = "invisible" === this.parameters.size, ad("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const pd = "string" === typeof dd ? document.getElementById(dd) : dd;
            ad(pd, this.auth, "argument-error"), this.container = pd, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new tp : new rp, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const dd = await this.render(),
              Jd = this.getAssertedRecaptcha(),
              kd = Jd.getResponse(dd);
            return kd || new Promise((kd => {
              const pd = dd => {
                dd && (this.tokenChangeListeners.delete(pd), kd(dd))
              };
              this.tokenChangeListeners.add(pd), this.isInvisible && Jd.execute(dd)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (dd) {
              return Promise.reject(dd)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((dd => {
              throw this.renderPromise = null, dd
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((dd => {
              this.container.removeChild(dd)
            }))
          }
          validateStartingState() {
            ad(!this.parameters.sitekey, this.auth, "argument-error"), ad(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), ad("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(dd) {
            return Jd => {
              if (this.tokenChangeListeners.forEach((dd => dd(Jd))), "function" === typeof dd) dd(Jd);
              else if ("string" === typeof dd) {
                const kd = Mp()[dd];
                "function" === typeof kd && kd(Jd)
              }
            }
          }
          assertNotDestroyed() {
            ad(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let dd = this.container;
              if (!this.isInvisible) {
                const Jd = document.createElement("div");
                dd.appendChild(Jd), dd = Jd
              }
              this.widgetId = this.getAssertedRecaptcha().render(dd, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            ad(md() && !Fp(), this.auth, "internal-error"), await
            function() {
              let dd = null;
              return new Promise((Jd => {
                "complete" !== document.readyState ? (dd = () => Jd(), window.addEventListener("load", dd)) : Jd()
              })).catch((Jd => {
                throw dd && window.removeEventListener("load", dd), Jd
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const dd = await async function(dd) {
              return (await yd(dd, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            ad(dd, this.auth, "internal-error"), this.parameters.sitekey = dd
          }
          getAssertedRecaptcha() {
            return ad(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class wp {
          constructor(dd, Jd) {
            this.verificationId = dd, this.onConfirmation = Jd
          }
          confirm(dd) {
            const Jd = HJ._fromVerification(this.verificationId, dd);
            return this.onConfirmation(Jd)
          }
        }
        async function Ap(dd, Jd, kd) {
          const Nd = SJ(dd),
            Wd = await kN(Nd, Jd, (0, pd.P)(kd));
          return new wp(Wd, (dd => Bk(Nd, dd)))
        }
        async function dN(dd, Jd, kd) {
          const Nd = (0, pd.P)(dd);
          await vk(!1, Nd, "phone");
          const Wd = await kN(Nd.auth, Jd, (0, pd.P)(kd));
          return new wp(Wd, (dd => sk(Nd, dd)))
        }
        async function JN(dd, Jd, kd) {
          const Nd = (0, pd.P)(dd),
            Wd = await kN(Nd.auth, Jd, (0, pd.P)(kd));
          return new wp(Wd, (dd => ik(Nd, dd)))
        }
        async function kN(dd, Jd, kd) {
          var pd;
          const Nd = await kd.verify();
          try {
            let Wd;
            if (ad("string" === typeof Nd, dd, "argument-error"), ad(kd.type === Vp, dd, "argument-error"), Wd = "string" === typeof Jd ? {
                phoneNumber: Jd
              } : Jd, "session" in Wd) {
              const Jd = Wd.session;
              if ("phoneNumber" in Wd) {
                ad("enroll" === Jd.type, dd, "internal-error");
                const kd = await
                function(dd, Jd) {
                  return yd(dd, "POST", "/v2/accounts/mfaEnrollment:start", Ud(dd, Jd))
                }(dd, {
                  idToken: Jd.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: Wd.phoneNumber,
                    recaptchaToken: Nd
                  }
                });
                return kd.phoneSessionInfo.sessionInfo
              } {
                ad("signin" === Jd.type, dd, "internal-error");
                const kd = (null === (pd = Wd.multiFactorHint) || void 0 === pd ? void 0 : pd.uid) || Wd.multiFactorUid;
                ad(kd, dd, "missing-multi-factor-info");
                const Pd = await
                function(dd, Jd) {
                  return yd(dd, "POST", "/v2/accounts/mfaSignIn:start", Ud(dd, Jd))
                }(dd, {
                  mfaPendingCredential: Jd.credential,
                  mfaEnrollmentId: kd,
                  phoneSignInInfo: {
                    recaptchaToken: Nd
                  }
                });
                return Pd.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: Jd
              } = await async function(dd, Jd) {
                return yd(dd, "POST", "/v1/accounts:sendVerificationCode", Ud(dd, Jd))
              }(dd, {
                phoneNumber: Wd.phoneNumber,
                recaptchaToken: Nd
              });
              return Jd
            }
          } finally {
            kd._reset()
          }
        }
        async function pN(dd, Jd) {
          await Gk((0, pd.P)(dd), Jd)
        }
        class NN {
          constructor(dd) {
            this.providerId = NN.PROVIDER_ID, this.auth = SJ(dd)
          }
          verifyPhoneNumber(dd, Jd) {
            return kN(this.auth, dd, (0, pd.P)(Jd))
          }
          static credential(dd, Jd) {
            return HJ._fromVerification(dd, Jd)
          }
          static credentialFromResult(dd) {
            const Jd = dd;
            return NN.credentialFromTaggedObject(Jd)
          }
          static credentialFromError(dd) {
            return NN.credentialFromTaggedObject(dd.customData || {})
          }
          static credentialFromTaggedObject(dd) {
            let {
              _tokenResponse: Jd
            } = dd;
            if (!Jd) return null;
            const {
              phoneNumber: kd,
              temporaryProof: pd
            } = Jd;
            return kd && pd ? HJ._fromTokenResponse(kd, pd) : null
          }
        }

        function WN(dd, Jd) {
          return Jd ? PJ(Jd) : (ad(dd._popupRedirectResolver, dd, "argument-error"), dd._popupRedirectResolver)
        }
        NN.PROVIDER_ID = "phone", NN.PHONE_SIGN_IN_METHOD = "phone";
        class PN extends yJ {
          constructor(dd) {
            super("custom", "custom"), this.params = dd
          }
          _getIdTokenResponse(dd) {
            return tJ(dd, this._buildIdpRequest())
          }
          _linkToIdToken(dd, Jd) {
            return tJ(dd, this._buildIdpRequest(Jd))
          }
          _getReauthenticationResolver(dd) {
            return tJ(dd, this._buildIdpRequest())
          }
          _buildIdpRequest(dd) {
            const Jd = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return dd && (Jd.idToken = dd), Jd
          }
        }

        function ZN(dd) {
          return qk(dd.auth, new PN(dd), dd.bypassAuthState)
        }

        function gN(dd) {
          const {
            auth: Jd,
            user: kd
          } = dd;
          return ad(kd, Jd, "internal-error"), xk(kd, new PN(dd), dd.bypassAuthState)
        }
        async function CN(dd) {
          const {
            auth: Jd,
            user: kd
          } = dd;
          return ad(kd, Jd, "internal-error"), Gk(kd, new PN(dd), dd.bypassAuthState)
        }
        class KN {
          constructor(dd, Jd, kd, pd) {
            let Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = dd, this.resolver = kd, this.user = pd, this.bypassAuthState = Nd, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(Jd) ? Jd : [Jd]
          }
          execute() {
            return new Promise((async (dd, Jd) => {
              this.pendingPromise = {
                resolve: dd,
                reject: Jd
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (kd) {
                this.reject(kd)
              }
            }))
          }
          async onAuthEvent(dd) {
            const {
              urlResponse: Jd,
              sessionId: kd,
              postBody: pd,
              tenantId: Nd,
              error: Wd,
              type: Pd
            } = dd;
            if (Wd) return void this.reject(Wd);
            const Zd = {
              auth: this.auth,
              requestUri: Jd,
              sessionId: kd,
              tenantId: Nd || void 0,
              postBody: pd || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(Pd)(Zd))
            } catch (gd) {
              this.reject(gd)
            }
          }
          onError(dd) {
            this.reject(dd)
          }
          getIdpTask(dd) {
            switch (dd) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return ZN;
              case "linkViaPopup":
              case "linkViaRedirect":
                return CN;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return gN;
              default:
                vd(this.auth, "internal-error")
            }
          }
          resolve(dd) {
            Fd(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(dd), this.unregisterAndCleanUp()
          }
          reject(dd) {
            Fd(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(dd), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const oN = new Sd(2e3, 1e4);
        async function lN(dd, Jd, kd) {
          const pd = SJ(dd);
          Bd(dd, Jd, Jk);
          const Nd = WN(pd, kd);
          return new ON(pd, "signInViaPopup", Jd, Nd).executeNotNull()
        }
        async function QN(dd, Jd, kd) {
          const Nd = (0, pd.P)(dd);
          Bd(Nd.auth, Jd, Jk);
          const Wd = WN(Nd.auth, kd);
          return new ON(Nd.auth, "reauthViaPopup", Jd, Wd, Nd).executeNotNull()
        }
        async function LN(dd, Jd, kd) {
          const Nd = (0, pd.P)(dd);
          Bd(Nd.auth, Jd, Jk);
          const Wd = WN(Nd.auth, kd);
          return new ON(Nd.auth, "linkViaPopup", Jd, Wd, Nd).executeNotNull()
        }
        class ON extends KN {
          constructor(dd, Jd, kd, pd, Nd) {
            super(dd, Jd, pd, Nd), this.provider = kd, this.authWindow = null, this.pollId = null, ON.currentPopupAction && ON.currentPopupAction.cancel(), ON.currentPopupAction = this
          }
          async executeNotNull() {
            const dd = await this.execute();
            return ad(dd, this.auth, "internal-error"), dd
          }
          async onExecution() {
            Fd(1 === this.filter.length, "Popup operations only handle one event");
            const dd = ip();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], dd), this.authWindow.associatedEvent = dd, this.resolver._originValidation(this.auth).catch((dd => {
              this.reject(dd)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (dd => {
              dd || this.reject(xd(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var dd;
            return (null === (dd = this.authWindow) || void 0 === dd ? void 0 : dd.associatedEvent) || null
          }
          cancel() {
            this.reject(xd(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, ON.currentPopupAction = null
          }
          pollUserCancellation() {
            const dd = () => {
              var Jd, kd;
              (null === (kd = null === (Jd = this.authWindow) || void 0 === Jd ? void 0 : Jd.window) || void 0 === kd ? void 0 : kd.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(xd(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(dd, oN.get())
            };
            dd()
          }
        }
        ON.currentPopupAction = null;
        const eN = "pendingRedirect",
          RN = new Map;
        class IN extends KN {
          constructor(dd, Jd) {
            super(dd, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], Jd, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let dd = RN.get(this.auth._key());
            if (!dd) {
              try {
                const Jd = await async function(dd, Jd) {
                  const kd = qN(Jd),
                    pd = xN(dd);
                  if (!await pd._isAvailable()) return !1;
                  const Nd = "true" === await pd._get(kd);
                  return await pd._remove(kd), Nd
                }(this.resolver, this.auth) ? await super.execute() : null;
                dd = () => Promise.resolve(Jd)
              } catch (Jd) {
                dd = () => Promise.reject(Jd)
              }
              RN.set(this.auth._key(), dd)
            }
            return this.bypassAuthState || RN.set(this.auth._key(), (() => Promise.resolve(null))), dd()
          }
          async onAuthEvent(dd) {
            if ("signInViaRedirect" === dd.type) return super.onAuthEvent(dd);
            if ("unknown" !== dd.type) {
              if (dd.eventId) {
                const Jd = await this.auth._redirectUserForId(dd.eventId);
                if (Jd) return this.user = Jd, super.onAuthEvent(dd);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function GN(dd, Jd) {
          return xN(dd)._set(qN(Jd), "true")
        }

        function vN(dd, Jd) {
          RN.set(dd._key(), Jd)
        }

        function xN(dd) {
          return PJ(dd._redirectPersistence)
        }

        function qN(dd) {
          return CJ(eN, dd.config.apiKey, dd.name)
        }

        function BN(dd, Jd, kd) {
          return async function(dd, Jd, kd) {
            const pd = SJ(dd);
            Bd(dd, Jd, Jk), await pd._initializationPromise;
            const Nd = WN(pd, kd);
            return await GN(Nd, pd), Nd._openRedirect(pd, Jd, "signInViaRedirect")
          }(dd, Jd, kd)
        }

        function sN(dd, Jd, kd) {
          return async function(dd, Jd, kd) {
            const Nd = (0, pd.P)(dd);
            Bd(Nd.auth, Jd, Jk), await Nd.auth._initializationPromise;
            const Wd = WN(Nd.auth, kd);
            await GN(Wd, Nd.auth);
            const Pd = await FN(Nd);
            return Wd._openRedirect(Nd.auth, Jd, "reauthViaRedirect", Pd)
          }(dd, Jd, kd)
        }

        function iN(dd, Jd, kd) {
          return async function(dd, Jd, kd) {
            const Nd = (0, pd.P)(dd);
            Bd(Nd.auth, Jd, Jk), await Nd.auth._initializationPromise;
            const Wd = WN(Nd.auth, kd);
            await vk(!1, Nd, Jd.providerId), await GN(Wd, Nd.auth);
            const Pd = await FN(Nd);
            return Wd._openRedirect(Nd.auth, Jd, "linkViaRedirect", Pd)
          }(dd, Jd, kd)
        }
        async function aN(dd, Jd) {
          return await SJ(dd)._initializationPromise, MN(dd, Jd, !1)
        }
        async function MN(dd, Jd) {
          let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const pd = SJ(dd),
            Nd = WN(pd, Jd),
            Wd = new IN(pd, Nd, kd),
            Pd = await Wd.execute();
          return Pd && !kd && (delete Pd.user._redirectEventId, await pd._persistUserIfCurrent(Pd.user), await pd._setRedirectUser(null, Jd)), Pd
        }
        async function FN(dd) {
          const Jd = ip(`${dd.uid}:::`);
          return dd._redirectEventId = Jd, await dd.auth._setRedirectUser(dd), await dd.auth._persistUserIfCurrent(dd), Jd
        }
        class YN {
          constructor(dd) {
            this.auth = dd, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(dd) {
            this.consumers.add(dd), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, dd) && (this.sendToConsumer(this.queuedRedirectEvent, dd), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(dd) {
            this.consumers.delete(dd)
          }
          onEvent(dd) {
            if (this.hasEventBeenHandled(dd)) return !1;
            let Jd = !1;
            return this.consumers.forEach((kd => {
              this.isEventForConsumer(dd, kd) && (Jd = !0, this.sendToConsumer(dd, kd), this.saveEventToCache(dd))
            })), this.hasHandledPotentialRedirect || ! function(dd) {
              switch (dd.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return bN(dd);
                default:
                  return !1
              }
            }(dd) || (this.hasHandledPotentialRedirect = !0, Jd || (this.queuedRedirectEvent = dd, Jd = !0)), Jd
          }
          sendToConsumer(dd, Jd) {
            var kd;
            if (dd.error && !bN(dd)) {
              const pd = (null === (kd = dd.error.code) || void 0 === kd ? void 0 : kd.split("auth/")[1]) || "internal-error";
              Jd.onError(xd(this.auth, pd))
            } else Jd.onAuthEvent(dd)
          }
          isEventForConsumer(dd, Jd) {
            const kd = null === Jd.eventId || !!dd.eventId && dd.eventId === Jd.eventId;
            return Jd.filter.includes(dd.type) && kd
          }
          hasEventBeenHandled(dd) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(mN(dd))
          }
          saveEventToCache(dd) {
            this.cachedEventUids.add(mN(dd)), this.lastProcessedEventTime = Date.now()
          }
        }

        function mN(dd) {
          return [dd.type, dd.eventId, dd.sessionId, dd.tenantId].filter((dd => dd)).join("-")
        }

        function bN(dd) {
          let {
            type: Jd,
            error: kd
          } = dd;
          return "unknown" === Jd && "auth/no-auth-event" === (null === kd || void 0 === kd ? void 0 : kd.code)
        }
        const SN = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          jN = /^https?/;
        async function XN(dd) {
          if (dd.config.emulator) return;
          const {
            authorizedDomains: Jd
          } = await async function(dd) {
            return yd(dd, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(dd);
          for (const pd of Jd) try {
            if (fN(pd)) return
          } catch (kd) {}
          vd(dd, "unauthorized-domain")
        }

        function fN(dd) {
          const Jd = Yd(),
            {
              protocol: kd,
              hostname: pd
            } = new URL(Jd);
          if (dd.startsWith("chrome-extension://")) {
            const Nd = new URL(dd);
            return "" === Nd.hostname && "" === pd ? "chrome-extension:" === kd && dd.replace("chrome-extension://", "") === Jd.replace("chrome-extension://", "") : "chrome-extension:" === kd && Nd.hostname === pd
          }
          if (!jN.test(kd)) return !1;
          if (SN.test(dd)) return pd === dd;
          const Nd = dd.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + Nd + "|" + Nd + ")$", "i").test(pd)
        }
        const nN = new Sd(3e4, 6e4);

        function UN() {
          const dd = Mp().___jsl;
          if (null === dd || void 0 === dd ? void 0 : dd.H)
            for (const Jd of Object.keys(dd.H))
              if (dd.H[Jd].r = dd.H[Jd].r || [], dd.H[Jd].L = dd.H[Jd].L || [], dd.H[Jd].r = [...dd.H[Jd].L], dd.CP)
                for (let kd = 0; kd < dd.CP.length; kd++) dd.CP[kd] = null
        }
        let yN = null;

        function DN(dd) {
          return yN = yN || function(dd) {
            return new Promise(((Jd, kd) => {
              var pd, Nd, Wd;

              function Pd() {
                UN(), gapi.load("gapi.iframes", {
                  callback: () => {
                    Jd(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    UN(), kd(xd(dd, "network-request-failed"))
                  },
                  timeout: nN.get()
                })
              }
              if (null === (Nd = null === (pd = Mp().gapi) || void 0 === pd ? void 0 : pd.iframes) || void 0 === Nd ? void 0 : Nd.Iframe) Jd(gapi.iframes.getContext());
              else {
                if (!(null === (Wd = Mp().gapi) || void 0 === Wd ? void 0 : Wd.load)) {
                  const Jd = MJ("iframefcb");
                  return Mp()[Jd] = () => {
                    gapi.load ? Pd() : kd(xd(dd, "network-request-failed"))
                  }, aJ(`https://apis.google.com/js/api.js?onload=${Jd}`).catch((dd => kd(dd)))
                }
                Pd()
              }
            })).catch((dd => {
              throw yN = null, dd
            }))
          }(dd), yN
        }
        const TN = new Sd(5e3, 15e3),
          EN = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          cN = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function hN(dd) {
          const Jd = dd.config;
          ad(Jd.authDomain, dd, "auth-domain-config-required");
          const kd = Jd.emulator ? jd(Jd, "emulator/auth/iframe") : `https://${dd.config.authDomain}/__/auth/iframe`,
            Wd = {
              apiKey: Jd.apiKey,
              appName: dd.name,
              v: Nd.h
            },
            Pd = cN.get(dd.config.apiHost);
          Pd && (Wd.eid = Pd);
          const Zd = dd._getFrameworks();
          return Zd.length && (Wd.fw = Zd.join(",")), `${kd}?${(0,pd.gb)(Wd).slice(1)}`
        }
        const rN = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class uN {
          constructor(dd) {
            this.window = dd, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (dd) {}
          }
        }

        function tN(dd, Jd, kd) {
          let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const Pd = Math.max((window.screen.availHeight - Wd) / 2, 0).toString(),
            Zd = Math.max((window.screen.availWidth - Nd) / 2, 0).toString();
          let gd = "";
          const Cd = Object.assign(Object.assign({}, rN), {
              width: Nd.toString(),
              height: Wd.toString(),
              top: Pd,
              left: Zd
            }),
            Kd = (0, pd.R)().toLowerCase();
          kd && (gd = LJ(Kd) ? "_blank" : kd), lJ(Kd) && (Jd = Jd || "http://localhost", Cd.scrollbars = "yes");
          const od = Object.entries(Cd).reduce(((dd, Jd) => {
            let [kd, pd] = Jd;
            return `${dd}${kd}=${pd},`
          }), "");
          if (function() {
              var dd;
              return GJ(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pd.R)()) && !!(null === (dd = window.navigator) || void 0 === dd ? void 0 : dd.standalone)
            }(Kd) && "_self" !== gd) return function(dd, Jd) {
            const kd = document.createElement("a");
            kd.href = dd, kd.target = Jd;
            const pd = document.createEvent("MouseEvent");
            pd.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), kd.dispatchEvent(pd)
          }(Jd || "", gd), new uN(null);
          const ld = window.open(Jd || "", gd, od);
          ad(ld, dd, "popup-blocked");
          try {
            ld.focus()
          } catch (Qd) {}
          return new uN(ld)
        }
        const VN = "__/auth/handler",
          zN = "emulator/auth/handler",
          HN = encodeURIComponent("fac");
        async function wN(dd, Jd, kd, Wd, Pd, Zd) {
            ad(dd.config.authDomain, dd, "auth-domain-config-required"), ad(dd.config.apiKey, dd, "invalid-api-key");
            const gd = {
              apiKey: dd.config.apiKey,
              appName: dd.name,
              authType: kd,
              redirectUrl: Wd,
              v: Nd.h,
              eventId: Pd
            };
            if (Jd instanceof Jk) {
              Jd.setDefaultLanguage(dd.languageCode), gd.providerId = Jd.providerId || "", (0, pd.T)(Jd.getCustomParameters()) || (gd.customParameters = JSON.stringify(Jd.getCustomParameters()));
              for (const [dd, Jd] of Object.entries(Zd || {})) gd[dd] = Jd
            }
            if (Jd instanceof kk) {
              const dd = Jd.getScopes().filter((dd => "" !== dd));
              dd.length > 0 && (gd.scopes = dd.join(","))
            }
            dd.tenantId && (gd.tid = dd.tenantId);
            const Cd = gd;
            for (const pd of Object.keys(Cd)) void 0 === Cd[pd] && delete Cd[pd];
            const Kd = await dd._getAppCheckToken(),
              od = Kd ? `#${HN}=${encodeURIComponent(Kd)}` : "";
            return `${function(dd){let{config:Jd}=dd;if(!Jd.emulator)return`
            https: //${Jd.authDomain}/${VN}`;return jd(Jd,zN)}(dd)}?${(0,pd.gb)(Cd).slice(1)}${od}`}const AN="webStorageSupport";const dW=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bp,this._completeRedirectFn=MN,this._overrideRedirectResult=vN}async _openPopup(dd,Jd,kd,pd){var Nd;Fd(null===(Nd=this.eventManagers[dd._key()])||void 0===Nd?void 0:Nd.manager,"_initialize() not called before _openPopup()");return tN(dd,await wN(dd,Jd,kd,Yd(),pd),ip())}async _openRedirect(dd,Jd,kd,pd){await this._originValidation(dd);return function(dd){Mp().location.href=dd}(await wN(dd,Jd,kd,Yd(),pd)),new Promise((()=>{}))}_initialize(dd){const Jd=dd._key();if(this.eventManagers[Jd]){const{manager:dd,promise:kd}=this.eventManagers[Jd];return dd?Promise.resolve(dd):(Fd(kd,"If manager is not set, promise should be"),kd)}const kd=this.initAndGetManager(dd);return this.eventManagers[Jd]={promise:kd},kd.catch((()=>{delete this.eventManagers[Jd]})),kd}async initAndGetManager(dd){const Jd=await async function(dd){const Jd=await DN(dd),kd=Mp().gapi;return ad(kd,dd,"internal-error"),Jd.open({where:document.body,url:hN(dd),messageHandlersFilter:kd.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EN,dontclear:!0},(Jd=>new Promise((async(kd,pd)=>{await Jd.restyle({setHideOnLeave:!1});const Nd=xd(dd,"network-request-failed"),Wd=Mp().setTimeout((()=>{pd(Nd)}),TN.get());function Pd(){Mp().clearTimeout(Wd),kd(Jd)}Jd.ping(Pd).then(Pd,(()=>{pd(Nd)}))}))))}(dd),kd=new YN(dd);return Jd.register("authEvent",(Jd=>{ad(null===Jd||void 0===Jd?void 0:Jd.authEvent,dd,"invalid-auth-event");return{status:kd.onEvent(Jd.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[dd._key()]={manager:kd},this.iframes[dd._key()]=Jd,kd}_isIframeWebStorageSupported(dd,Jd){this.iframes[dd._key()].send(AN,{type:AN},(kd=>{var pd;const Nd=null===(pd=null===kd||void 0===kd?void 0:kd[0])||void 0===pd?void 0:pd[AN];void 0!==Nd&&Jd(!!Nd),vd(dd,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(dd){const Jd=dd._key();return this.originValidationPromises[Jd]||(this.originValidationPromises[Jd]=XN(dd)),this.originValidationPromises[Jd]}get _shouldInitProactively(){return vJ()||QJ()||GJ()}};class JW{constructor(dd){this.factorId=dd}_process(dd,Jd,kd){switch(Jd.type){case"enroll":return this._finalizeEnroll(dd,Jd.credential,kd);case"signin":return this._finalizeSignIn(dd,Jd.credential);default:return Md("unexpected MultiFactorSessionType")}}}class kW extends JW{constructor(dd){super("phone"),this.credential=dd}static _fromCredential(dd){return new kW(dd)}_finalizeEnroll(dd,Jd,kd){return function(dd,Jd){return yd(dd,"POST","/v2/accounts/mfaEnrollment:finalize",Ud(dd,Jd))}(dd,{idToken:Jd,displayName:kd,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(dd,Jd){return function(dd,Jd){return yd(dd,"POST","/v2/accounts/mfaSignIn:finalize",Ud(dd,Jd))}(dd,{mfaPendingCredential:Jd,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class pW{constructor(){}static assertion(dd){return kW._fromCredential(dd)}}pW.FACTOR_ID="phone";class NW{static assertionForEnrollment(dd,Jd){return WW._fromSecret(dd,Jd)}static assertionForSignIn(dd,Jd){return WW._fromEnrollmentId(dd,Jd)}static async generateSecret(dd){const Jd=dd;ad("undefined"!==typeof Jd.auth,"internal-error");const kd=await(pd=Jd.auth,Nd={idToken:Jd.credential,totpEnrollmentInfo:{}},yd(pd,"POST","/v2/accounts/mfaEnrollment:start",Ud(pd,Nd)));var pd,Nd;return PW._fromStartTotpMfaEnrollmentResponse(kd,Jd.auth)}}NW.FACTOR_ID="totp";class WW extends JW{constructor(dd,Jd,kd){super("totp"),this.otp=dd,this.enrollmentId=Jd,this.secret=kd}static _fromSecret(dd,Jd){return new WW(Jd,void 0,dd)}static _fromEnrollmentId(dd,Jd){return new WW(Jd,dd)}async _finalizeEnroll(dd,Jd,kd){return ad("undefined"!==typeof this.secret,dd,"argument-error"),function(dd,Jd){return yd(dd,"POST","/v2/accounts/mfaEnrollment:finalize",Ud(dd,Jd))}(dd,{idToken:Jd,displayName:kd,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(dd,Jd){ad(void 0!==this.enrollmentId&&void 0!==this.otp,dd,"argument-error");const kd={verificationCode:this.otp};return function(dd,Jd){return yd(dd,"POST","/v2/accounts/mfaSignIn:finalize",Ud(dd,Jd))}(dd,{mfaPendingCredential:Jd,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:kd})}}class PW{constructor(dd,Jd,kd,pd,Nd,Wd,Pd){this.sessionInfo=Wd,this.auth=Pd,this.secretKey=dd,this.hashingAlgorithm=Jd,this.codeLength=kd,this.codeIntervalSeconds=pd,this.enrollmentCompletionDeadline=Nd}static _fromStartTotpMfaEnrollmentResponse(dd,Jd){return new PW(dd.totpSessionInfo.sharedSecretKey,dd.totpSessionInfo.hashingAlgorithm,dd.totpSessionInfo.verificationCodeLength,dd.totpSessionInfo.periodSec,new Date(dd.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),dd.totpSessionInfo.sessionInfo,Jd)}_makeTotpVerificationInfo(dd){return{sessionInfo:this.sessionInfo,verificationCode:dd}}generateQrCodeUrl(dd,Jd){var kd;let pd=!1;return(ZW(dd)||ZW(Jd))&&(pd=!0),pd&&(ZW(dd)&&(dd=(null===(kd=this.auth.currentUser)||void 0===kd?void 0:kd.email)||"unknownuser"),ZW(Jd)&&(Jd=this.auth.name)),`otpauth://totp/${Jd}:${dd}?secret=${this.secretKey}&issuer=${Jd}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function ZW(dd){return"undefined"===typeof dd||0===(null===dd||void 0===dd?void 0:dd.length)}var gW="@firebase/auth",CW="0.23.2";class KW{constructor(dd){this.auth=dd,this.internalListeners=new Map}getUid(){var dd;return this.assertAuthConfigured(),(null===(dd=this.auth.currentUser)||void 0===dd?void 0:dd.uid)||null}async getToken(dd){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(dd)}}addAuthTokenListener(dd){if(this.assertAuthConfigured(),this.internalListeners.has(dd))return;const Jd=this.auth.onIdTokenChanged((Jd=>{dd((null===Jd||void 0===Jd?void 0:Jd.stsTokenManager.accessToken)||null)}));this.internalListeners.set(dd,Jd),this.updateProactiveRefresh()}removeAuthTokenListener(dd){this.assertAuthConfigured();const Jd=this.internalListeners.get(dd);Jd&&(this.internalListeners.delete(dd),Jd(),this.updateProactiveRefresh())}assertAuthConfigured(){ad(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const oW=(0,pd.L)("authIdTokenMaxAge")||300;let lW=null;const QW=dd=>async Jd=>{const kd=Jd&&await Jd.getIdTokenResult(),pd=kd&&((new Date).getTime()-Date.parse(kd.issuedAtTime))/1e3;if(pd&&pd>oW)return;const Nd=null===kd||void 0===kd?void 0:kd.token;lW!==Nd&&(lW=Nd,await fetch(dd,{method:Nd?"POST":"DELETE",headers:Nd?{Authorization:`Bearer ${Nd}`}:{}}))};function LW(){let dd=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,Nd.P)();const Jd=(0,Nd.F)(dd,"auth");if(Jd.isInitialized())return Jd.getImmediate();const kd=XJ(dd,{popupRedirectResolver:dW,persistence:[yp,xp,Bp]}),Wd=(0,pd.L)("authTokenSyncURL");if(Wd){const dd=QW(Wd);Pp(kd,dd,(()=>dd(kd.currentUser))),Wp(kd,(Jd=>dd(Jd)))}const Pd=(0,pd.I)("auth");return Pd&&fJ(kd,`http://${Pd}`),kd}var OW;OW="Browser",(0,Nd.G)(new Zd.e("auth",((dd,Jd)=>{let{options:kd}=Jd;const pd=dd.getProvider("app").getImmediate(),Nd=dd.getProvider("heartbeat"),Wd=dd.getProvider("app-check-internal"),{apiKey:Pd,authDomain:Zd}=pd.options;ad(Pd&&!Pd.includes(":"),"invalid-api-key",{appName:pd.name});const gd={apiKey:Pd,authDomain:Zd,clientPlatform:OW,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xJ(OW)},Cd=new bJ(pd,Nd,Wd,gd);return function(dd,Jd){const kd=(null===Jd||void 0===Jd?void 0:Jd.persistence)||[],pd=(Array.isArray(kd)?kd:[kd]).map(PJ);(null===Jd||void 0===Jd?void 0:Jd.errorMap)&&dd._updateErrorMap(Jd.errorMap),dd._initializeWithPersistence(pd,null===Jd||void 0===Jd?void 0:Jd.popupRedirectResolver)}(Cd,kd),Cd}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((dd,Jd,kd)=>{dd.getProvider("auth-internal").initialize()}))),(0,Nd.G)(new Zd.e("auth-internal",(dd=>(dd=>new KW(dd))(SJ(dd.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,Nd.W)(gW,CW,function(dd){switch(dd){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(OW)),(0,Nd.W)(gW,CW,"esm2017")}};Object.freeze(modules);for(const dd in modules)Object.freeze(modules[dd]);