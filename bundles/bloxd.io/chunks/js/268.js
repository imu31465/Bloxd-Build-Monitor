/*! For license information please see 31kiid.268.5d936b1f.chunk.js.LICENSE.txt */
export const id = 268;
export const ids = [268];
export const modules = {
    40536: (kk, Fk, Ik) => {
        Ik.r(Fk), Ik.d(Fk, {
          ActionCodeOperation: () => Zk,
          ActionCodeURL: () => DF,
          AuthCredential: () => NF,
          AuthErrorCodes: () => Jk,
          EmailAuthCredential: () => AF,
          EmailAuthProvider: () => kI,
          FacebookAuthProvider: () => TI,
          FactorId: () => ak,
          GithubAuthProvider: () => yI,
          GoogleAuthProvider: () => iI,
          OAuthCredential: () => mF,
          OAuthProvider: () => XI,
          OperationType: () => tk,
          PhoneAuthCredential: () => rF,
          PhoneAuthProvider: () => IT,
          PhoneMultiFactorGenerator: () => Fi,
          ProviderId: () => qk,
          RecaptchaVerifier: () => mX,
          SAMLAuthProvider: () => aI,
          SignInMethod: () => Lk,
          TotpMultiFactorGenerator: () => Ii,
          TotpSecret: () => Ti,
          TwitterAuthProvider: () => qI,
          applyActionCode: () => pI,
          beforeAuthStateChanged: () => iX,
          browserLocalPersistence: () => KX,
          browserPopupRedirectResolver: () => DT,
          browserSessionPersistence: () => sX,
          checkActionCode: () => uI,
          confirmPasswordReset: () => GI,
          connectAuthEmulator: () => RF,
          createUserWithEmailAndPassword: () => RI,
          debugErrorMap: () => ek,
          deleteUser: () => LX,
          fetchSignInMethodsForEmail: () => WI,
          getAdditionalUserInfo: () => FX,
          getAuth: () => Zi,
          getIdToken: () => Ak,
          getIdTokenResult: () => gk,
          getMultiFactorResolver: () => jX,
          getRedirectResult: () => zT,
          inMemoryPersistence: () => aF,
          indexedDBLocalPersistence: () => CX,
          initializeAuth: () => bF,
          initializeRecaptchaConfig: () => XX,
          isSignInWithEmailLink: () => NI,
          linkWithCredential: () => VI,
          linkWithPhoneNumber: () => DX,
          linkWithPopup: () => ZT,
          linkWithRedirect: () => VT,
          multiFactor: () => HX,
          onAuthStateChanged: () => yX,
          onIdTokenChanged: () => TX,
          parseActionCodeURL: () => MF,
          prodErrorMap: () => wk,
          reauthenticateWithCredential: () => zI,
          reauthenticateWithPhoneNumber: () => MX,
          reauthenticateWithPopup: () => tT,
          reauthenticateWithRedirect: () => sT,
          reload: () => FF,
          sendEmailVerification: () => fI,
          sendPasswordResetEmail: () => nI,
          sendSignInLinkToEmail: () => CI,
          setPersistence: () => IX,
          signInAnonymously: () => jI,
          signInWithCredential: () => sI,
          signInWithCustomToken: () => SI,
          signInWithEmailAndPassword: () => UI,
          signInWithEmailLink: () => cI,
          signInWithPhoneNumber: () => rX,
          signInWithPopup: () => LT,
          signInWithRedirect: () => QT,
          signOut: () => qX,
          unlink: () => JI,
          updateCurrentUser: () => aX,
          updateEmail: () => YI,
          updatePassword: () => AI,
          updatePhoneNumber: () => FT,
          updateProfile: () => dI,
          useDeviceLanguage: () => lX,
          verifyBeforeUpdateEmail: () => BI,
          verifyPasswordResetCode: () => bI
        });
        var Xk = Ik(40522),
          Tk = Ik(40512);

        function ik(kk, Fk) {
          var Ik = {};
          for (var Xk in kk) Object.prototype.hasOwnProperty.call(kk, Xk) && Fk.indexOf(Xk) < 0 && (Ik[Xk] = kk[Xk]);
          if (null != kk && "function" === typeof Object.getOwnPropertySymbols) {
            var Tk = 0;
            for (Xk = Object.getOwnPropertySymbols(kk); Tk < Xk.length; Tk++) Fk.indexOf(Xk[Tk]) < 0 && Object.prototype.propertyIsEnumerable.call(kk, Xk[Tk]) && (Ik[Xk[Tk]] = kk[Xk[Tk]])
          }
          return Ik
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var yk = Ik(40527),
          lk = Ik(40519);
        const ak = {
            PHONE: "phone",
            TOTP: "totp"
          },
          qk = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Lk = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          tk = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          Zk = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function jk() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const ek = function() {
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
          wk = jk,
          Hk = new Xk.g("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          Jk = {
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
          xk = new yk.h("@firebase/auth");

        function Pk(kk) {
          if (xk.logLevel <= yk.d.ERROR) {
            for (var Fk = arguments.length, Ik = new Array(Fk > 1 ? Fk - 1 : 0), Xk = 1; Xk < Fk; Xk++) Ik[Xk - 1] = arguments[Xk];
            xk.error(`Auth (${Tk.i}): ${kk}`, ...Ik)
          }
        }

        function Kk(kk) {
          for (var Fk = arguments.length, Ik = new Array(Fk > 1 ? Fk - 1 : 0), Xk = 1; Xk < Fk; Xk++) Ik[Xk - 1] = arguments[Xk];
          throw zk(kk, ...Ik)
        }

        function Qk(kk) {
          for (var Fk = arguments.length, Ik = new Array(Fk > 1 ? Fk - 1 : 0), Xk = 1; Xk < Fk; Xk++) Ik[Xk - 1] = arguments[Xk];
          return zk(kk, ...Ik)
        }

        function sk(kk, Fk, Ik) {
          const Tk = Object.assign(Object.assign({}, wk()), {
            [Fk]: Ik
          });
          return new Xk.g("auth", "Firebase", Tk).create(Fk, {
            appName: kk.name
          })
        }

        function Vk(kk, Fk, Ik) {
          if (!(Fk instanceof Ik)) throw Ik.name !== Fk.constructor.name && Kk(kk, "argument-error"), sk(kk, "argument-error", `Type of ${Fk.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function zk(kk) {
          for (var Fk = arguments.length, Ik = new Array(Fk > 1 ? Fk - 1 : 0), Xk = 1; Xk < Fk; Xk++) Ik[Xk - 1] = arguments[Xk];
          if ("string" !== typeof kk) {
            const Fk = Ik[0],
              Xk = [...Ik.slice(1)];
            return Xk[0] && (Xk[0].appName = kk.name), kk._errorFactory.create(Fk, ...Xk)
          }
          return Hk.create(kk, ...Ik)
        }

        function Sk(kk, Fk) {
          if (!kk) {
            for (var Ik = arguments.length, Xk = new Array(Ik > 2 ? Ik - 2 : 0), Tk = 2; Tk < Ik; Tk++) Xk[Tk - 2] = arguments[Tk];
            throw zk(Fk, ...Xk)
          }
        }

        function vk(kk) {
          const Fk = "INTERNAL ASSERTION FAILED: " + kk;
          throw Pk(Fk), new Error(Fk)
        }

        function Ek(kk, Fk) {
          kk || vk(Fk)
        }

        function Ok() {
          var kk;
          return "undefined" !== typeof self && (null === (kk = self.location) || void 0 === kk ? void 0 : kk.href) || ""
        }

        function nk() {
          return "http:" === Gk() || "https:" === Gk()
        }

        function Gk() {
          var kk;
          return "undefined" !== typeof self && (null === (kk = self.location) || void 0 === kk ? void 0 : kk.protocol) || null
        }
        class pk {
          constructor(kk, Fk) {
            this.shortDelay = kk, this.longDelay = Fk, Ek(Fk > kk, "Short delay should be less than long delay!"), this.isMobile = (0, Xk.Y)() || (0, Xk.ab)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (nk() || (0, Xk.R)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function uk(kk, Fk) {
          Ek(kk.emulator, "Emulator should always be set here");
          const {
            url: Ik
          } = kk.emulator;
          return Fk ? `${Ik}${Fk.startsWith("/")?Fk.slice(1):Fk}` : Ik
        }
        class bk {
          static initialize(kk, Fk, Ik) {
            this.fetchImpl = kk, Fk && (this.headersImpl = Fk), Ik && (this.responseImpl = Ik)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void vk("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void vk("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void vk("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const Rk = {
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
          Uk = new pk(3e4, 6e4);

        function Ck(kk, Fk) {
          return kk.tenantId && !Fk.tenantId ? Object.assign(Object.assign({}, Fk), {
            tenantId: kk.tenantId
          }) : Fk
        }
        async function Nk(kk, Fk, Ik, Tk) {
          return ck(kk, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let ik = {},
              yk = {};
            Tk && ("GET" === Fk ? yk = Tk : ik = {
              body: JSON.stringify(Tk)
            });
            const lk = (0, Xk.eb)(Object.assign({
                key: kk.config.apiKey
              }, yk)).slice(1),
              ak = await kk._getAdditionalHeaders();
            return ak["Content-Type"] = "application/json", kk.languageCode && (ak["X-Firebase-Locale"] = kk.languageCode), bk.fetch()(fk(kk, kk.config.apiHost, Ik, lk), Object.assign({
              method: Fk,
              headers: ak,
              referrerPolicy: "no-referrer"
            }, ik))
          }))
        }
        async function ck(kk, Fk, Ik) {
          kk._canInitEmulator = !1;
          const Tk = Object.assign(Object.assign({}, Rk), Fk);
          try {
            const Fk = new Bk(kk),
              Xk = await Promise.race([Ik(), Fk.promise]);
            Fk.clearNetworkTimeout();
            const ik = await Xk.json();
            if ("needConfirmation" in ik) throw dk(kk, "account-exists-with-different-credential", ik);
            if (Xk.ok && !("errorMessage" in ik)) return ik;
            {
              const Fk = Xk.ok ? ik.errorMessage : ik.error.message,
                [Ik, yk] = Fk.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === Ik) throw dk(kk, "credential-already-in-use", ik);
              if ("EMAIL_EXISTS" === Ik) throw dk(kk, "email-already-in-use", ik);
              if ("USER_DISABLED" === Ik) throw dk(kk, "user-disabled", ik);
              const lk = Tk[Ik] || Ik.toLowerCase().replace(/[_\s]+/g, "-");
              if (yk) throw sk(kk, lk, yk);
              Kk(kk, lk)
            }
          } catch (ik) {
            if (ik instanceof Xk.h) throw ik;
            Kk(kk, "network-request-failed", {
              message: String(ik)
            })
          }
        }
        async function Wk(kk, Fk, Ik, Xk) {
          let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const ik = await Nk(kk, Fk, Ik, Xk, Tk);
          return "mfaPendingCredential" in ik && Kk(kk, "multi-factor-auth-required", {
            _serverResponse: ik
          }), ik
        }

        function fk(kk, Fk, Ik, Xk) {
          const Tk = `${Fk}${Ik}?${Xk}`;
          return kk.config.emulator ? uk(kk.config, Tk) : `${kk.config.apiScheme}://${Tk}`
        }
        class Bk {
          constructor(kk) {
            this.auth = kk, this.timer = null, this.promise = new Promise(((kk, Fk) => {
              this.timer = setTimeout((() => Fk(Qk(this.auth, "network-request-failed"))), Uk.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function dk(kk, Fk, Ik) {
          const Xk = {
            appName: kk.name
          };
          Ik.email && (Xk.email = Ik.email), Ik.phoneNumber && (Xk.phoneNumber = Ik.phoneNumber);
          const Tk = Qk(kk, Fk, Xk);
          return Tk.customData._tokenResponse = Ik, Tk
        }

        function Yk(kk) {
          if (kk) try {
            const Fk = new Date(Number(kk));
            if (!isNaN(Fk.getTime())) return Fk.toUTCString()
          } catch (Fk) {}
        }

        function Ak(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, Xk.L)(kk).getIdToken(Fk)
        }
        async function gk(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const Ik = (0, Xk.L)(kk),
            Tk = await Ik.getIdToken(Fk),
            ik = hk(Tk);
          Sk(ik && ik.exp && ik.auth_time && ik.iat, Ik.auth, "internal-error");
          const yk = "object" === typeof ik.firebase ? ik.firebase : void 0,
            lk = null === yk || void 0 === yk ? void 0 : yk.sign_in_provider;
          return {
            claims: ik,
            token: Tk,
            authTime: Yk(mk(ik.auth_time)),
            issuedAtTime: Yk(mk(ik.iat)),
            expirationTime: Yk(mk(ik.exp)),
            signInProvider: lk || null,
            signInSecondFactor: (null === yk || void 0 === yk ? void 0 : yk.sign_in_second_factor) || null
          }
        }

        function mk(kk) {
          return 1e3 * Number(kk)
        }

        function hk(kk) {
          const [Fk, Ik, Tk] = kk.split(".");
          if (void 0 === Fk || void 0 === Ik || void 0 === Tk) return Pk("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const kk = (0, Xk.m)(Ik);
            return kk ? JSON.parse(kk) : (Pk("Failed to decode base64 JWT payload"), null)
          } catch (ik) {
            return Pk("Caught error parsing JWT payload as JSON", null === ik || void 0 === ik ? void 0 : ik.toString()), null
          }
        }
        async function rk(kk, Fk) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return Fk;
          try {
            return await Fk
          } catch (Ik) {
            throw Ik instanceof Xk.h && function(kk) {
              let {
                code: Fk
              } = kk;
              return "auth/user-disabled" === Fk || "auth/user-token-expired" === Fk
            }(Ik) && kk.auth.currentUser === kk && await kk.auth.signOut(), Ik
          }
        }
        class Dk {
          constructor(kk) {
            this.user = kk, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(kk) {
            var Fk;
            if (kk) {
              const kk = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), kk
            } {
              this.errorBackoff = 3e4;
              const kk = (null !== (Fk = this.user.stsTokenManager.expirationTime) && void 0 !== Fk ? Fk : 0) - Date.now() - 3e5;
              return Math.max(0, kk)
            }
          }
          schedule() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const Fk = this.getInterval(kk);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), Fk)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (kk) {
              return void("auth/network-request-failed" === (null === kk || void 0 === kk ? void 0 : kk.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class Mk {
          constructor(kk, Fk) {
            this.createdAt = kk, this.lastLoginAt = Fk, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = Yk(this.lastLoginAt), this.creationTime = Yk(this.createdAt)
          }
          _copy(kk) {
            this.createdAt = kk.createdAt, this.lastLoginAt = kk.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function kF(kk) {
          var Fk;
          const Ik = kk.auth,
            Xk = await kk.getIdToken(),
            Tk = await rk(kk, async function(kk, Fk) {
              return Nk(kk, "POST", "/v1/accounts:lookup", Fk)
            }(Ik, {
              idToken: Xk
            }));
          Sk(null === Tk || void 0 === Tk ? void 0 : Tk.users.length, Ik, "internal-error");
          const yk = Tk.users[0];
          kk._notifyReloadListener(yk);
          const lk = (null === (Fk = yk.providerUserInfo) || void 0 === Fk ? void 0 : Fk.length) ? yk.providerUserInfo.map((kk => {
            var {
              providerId: Fk
            } = kk, Ik = ik(kk, ["providerId"]);
            return {
              providerId: Fk,
              uid: Ik.rawId || "",
              displayName: Ik.displayName || null,
              email: Ik.email || null,
              phoneNumber: Ik.phoneNumber || null,
              photoURL: Ik.photoUrl || null
            }
          })) : [];
          const ak = (qk = kk.providerData, Lk = lk, [...qk.filter((kk => !Lk.some((Fk => Fk.providerId === kk.providerId)))), ...Lk]);
          var qk, Lk;
          const tk = kk.isAnonymous,
            Zk = !(kk.email && yk.passwordHash) && !(null === ak || void 0 === ak ? void 0 : ak.length),
            jk = !!tk && Zk,
            ek = {
              uid: yk.localId,
              displayName: yk.displayName || null,
              photoURL: yk.photoUrl || null,
              email: yk.email || null,
              emailVerified: yk.emailVerified || !1,
              phoneNumber: yk.phoneNumber || null,
              tenantId: yk.tenantId || null,
              providerData: ak,
              metadata: new Mk(yk.createdAt, yk.lastLoginAt),
              isAnonymous: jk
            };
          Object.assign(kk, ek)
        }
        async function FF(kk) {
          const Fk = (0, Xk.L)(kk);
          await kF(Fk), await Fk.auth._persistUserIfCurrent(Fk), Fk.auth._notifyListenersIfCurrent(Fk)
        }
        class IF {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(kk) {
            Sk(kk.idToken, "internal-error"), Sk("undefined" !== typeof kk.idToken, "internal-error"), Sk("undefined" !== typeof kk.refreshToken, "internal-error");
            const Fk = "expiresIn" in kk && "undefined" !== typeof kk.expiresIn ? Number(kk.expiresIn) : function(kk) {
              const Fk = hk(kk);
              return Sk(Fk, "internal-error"), Sk("undefined" !== typeof Fk.exp, "internal-error"), Sk("undefined" !== typeof Fk.iat, "internal-error"), Number(Fk.exp) - Number(Fk.iat)
            }(kk.idToken);
            this.updateTokensAndExpiration(kk.idToken, kk.refreshToken, Fk)
          }
          async getToken(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return Sk(!this.accessToken || this.refreshToken, kk, "user-token-expired"), Fk || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(kk, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(kk, Fk) {
            const {
              accessToken: Ik,
              refreshToken: Tk,
              expiresIn: ik
            } = await async function(kk, Fk) {
              const Ik = await ck(kk, {}, (async () => {
                const Ik = (0, Xk.eb)({
                    grant_type: "refresh_token",
                    refresh_token: Fk
                  }).slice(1),
                  {
                    tokenApiHost: Tk,
                    apiKey: ik
                  } = kk.config,
                  yk = fk(kk, Tk, "/v1/token", `key=${ik}`),
                  lk = await kk._getAdditionalHeaders();
                return lk["Content-Type"] = "application/x-www-form-urlencoded", bk.fetch()(yk, {
                  method: "POST",
                  headers: lk,
                  body: Ik
                })
              }));
              return {
                accessToken: Ik.access_token,
                expiresIn: Ik.expires_in,
                refreshToken: Ik.refresh_token
              }
            }(kk, Fk);
            this.updateTokensAndExpiration(Ik, Tk, Number(ik))
          }
          updateTokensAndExpiration(kk, Fk, Ik) {
            this.refreshToken = Fk || null, this.accessToken = kk || null, this.expirationTime = Date.now() + 1e3 * Ik
          }
          static fromJSON(kk, Fk) {
            const {
              refreshToken: Ik,
              accessToken: Xk,
              expirationTime: Tk
            } = Fk, ik = new IF;
            return Ik && (Sk("string" === typeof Ik, "internal-error", {
              appName: kk
            }), ik.refreshToken = Ik), Xk && (Sk("string" === typeof Xk, "internal-error", {
              appName: kk
            }), ik.accessToken = Xk), Tk && (Sk("number" === typeof Tk, "internal-error", {
              appName: kk
            }), ik.expirationTime = Tk), ik
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(kk) {
            this.accessToken = kk.accessToken, this.refreshToken = kk.refreshToken, this.expirationTime = kk.expirationTime
          }
          _clone() {
            return Object.assign(new IF, this.toJSON())
          }
          _performRefresh() {
            return vk("not implemented")
          }
        }

        function XF(kk, Fk) {
          Sk("string" === typeof kk || "undefined" === typeof kk, "internal-error", {
            appName: Fk
          })
        }
        class TF {
          constructor(kk) {
            var {
              uid: Fk,
              auth: Ik,
              stsTokenManager: Xk
            } = kk, Tk = ik(kk, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new Dk(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = Fk, this.auth = Ik, this.stsTokenManager = Xk, this.accessToken = Xk.accessToken, this.displayName = Tk.displayName || null, this.email = Tk.email || null, this.emailVerified = Tk.emailVerified || !1, this.phoneNumber = Tk.phoneNumber || null, this.photoURL = Tk.photoURL || null, this.isAnonymous = Tk.isAnonymous || !1, this.tenantId = Tk.tenantId || null, this.providerData = Tk.providerData ? [...Tk.providerData] : [], this.metadata = new Mk(Tk.createdAt || void 0, Tk.lastLoginAt || void 0)
          }
          async getIdToken(kk) {
            const Fk = await rk(this, this.stsTokenManager.getToken(this.auth, kk));
            return Sk(Fk, this.auth, "internal-error"), this.accessToken !== Fk && (this.accessToken = Fk, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), Fk
          }
          getIdTokenResult(kk) {
            return gk(this, kk)
          }
          reload() {
            return FF(this)
          }
          _assign(kk) {
            this !== kk && (Sk(this.uid === kk.uid, this.auth, "internal-error"), this.displayName = kk.displayName, this.photoURL = kk.photoURL, this.email = kk.email, this.emailVerified = kk.emailVerified, this.phoneNumber = kk.phoneNumber, this.isAnonymous = kk.isAnonymous, this.tenantId = kk.tenantId, this.providerData = kk.providerData.map((kk => Object.assign({}, kk))), this.metadata._copy(kk.metadata), this.stsTokenManager._assign(kk.stsTokenManager))
          }
          _clone(kk) {
            const Fk = new TF(Object.assign(Object.assign({}, this), {
              auth: kk,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return Fk.metadata._copy(this.metadata), Fk
          }
          _onReload(kk) {
            Sk(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = kk, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(kk) {
            this.reloadListener ? this.reloadListener(kk) : this.reloadUserInfo = kk
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Ik = !1;
            kk.idToken && kk.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(kk), Ik = !0), Fk && await kF(this), await this.auth._persistUserIfCurrent(this), Ik && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const kk = await this.getIdToken();
            return await rk(this, async function(kk, Fk) {
              return Nk(kk, "POST", "/v1/accounts:delete", Fk)
            }(this.auth, {
              idToken: kk
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
              providerData: this.providerData.map((kk => Object.assign({}, kk))),
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
          static _fromJSON(kk, Fk) {
            var Ik, Xk, Tk, ik, yk, lk, ak, qk;
            const Lk = null !== (Ik = Fk.displayName) && void 0 !== Ik ? Ik : void 0,
              tk = null !== (Xk = Fk.email) && void 0 !== Xk ? Xk : void 0,
              Zk = null !== (Tk = Fk.phoneNumber) && void 0 !== Tk ? Tk : void 0,
              jk = null !== (ik = Fk.photoURL) && void 0 !== ik ? ik : void 0,
              ek = null !== (yk = Fk.tenantId) && void 0 !== yk ? yk : void 0,
              wk = null !== (lk = Fk._redirectEventId) && void 0 !== lk ? lk : void 0,
              Hk = null !== (ak = Fk.createdAt) && void 0 !== ak ? ak : void 0,
              Jk = null !== (qk = Fk.lastLoginAt) && void 0 !== qk ? qk : void 0,
              {
                uid: xk,
                emailVerified: Pk,
                isAnonymous: Kk,
                providerData: Qk,
                stsTokenManager: sk
              } = Fk;
            Sk(xk && sk, kk, "internal-error");
            const Vk = IF.fromJSON(this.name, sk);
            Sk("string" === typeof xk, kk, "internal-error"), XF(Lk, kk.name), XF(tk, kk.name), Sk("boolean" === typeof Pk, kk, "internal-error"), Sk("boolean" === typeof Kk, kk, "internal-error"), XF(Zk, kk.name), XF(jk, kk.name), XF(ek, kk.name), XF(wk, kk.name), XF(Hk, kk.name), XF(Jk, kk.name);
            const zk = new TF({
              uid: xk,
              auth: kk,
              email: tk,
              emailVerified: Pk,
              displayName: Lk,
              isAnonymous: Kk,
              photoURL: jk,
              phoneNumber: Zk,
              tenantId: ek,
              stsTokenManager: Vk,
              createdAt: Hk,
              lastLoginAt: Jk
            });
            return Qk && Array.isArray(Qk) && (zk.providerData = Qk.map((kk => Object.assign({}, kk)))), wk && (zk._redirectEventId = wk), zk
          }
          static async _fromIdTokenResponse(kk, Fk) {
            let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const Xk = new IF;
            Xk.updateFromServerResponse(Fk);
            const Tk = new TF({
              uid: Fk.localId,
              auth: kk,
              stsTokenManager: Xk,
              isAnonymous: Ik
            });
            return await kF(Tk), Tk
          }
        }
        const iF = new Map;

        function yF(kk) {
          Ek(kk instanceof Function, "Expected a class definition");
          let Fk = iF.get(kk);
          return Fk ? (Ek(Fk instanceof kk, "Instance stored in cache mismatched with class"), Fk) : (Fk = new kk, iF.set(kk, Fk), Fk)
        }
        class lF {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(kk, Fk) {
            this.storage[kk] = Fk
          }
          async _get(kk) {
            const Fk = this.storage[kk];
            return void 0 === Fk ? null : Fk
          }
          async _remove(kk) {
            delete this.storage[kk]
          }
          _addListener(kk, Fk) {}
          _removeListener(kk, Fk) {}
        }
        lF.type = "NONE";
        const aF = lF;

        function qF(kk, Fk, Ik) {
          return `firebase:${kk}:${Fk}:${Ik}`
        }
        class LF {
          constructor(kk, Fk, Ik) {
            this.persistence = kk, this.auth = Fk, this.userKey = Ik;
            const {
              config: Xk,
              name: Tk
            } = this.auth;
            this.fullUserKey = qF(this.userKey, Xk.apiKey, Tk), this.fullPersistenceKey = qF("persistence", Xk.apiKey, Tk), this.boundEventHandler = Fk._onStorageEvent.bind(Fk), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(kk) {
            return this.persistence._set(this.fullUserKey, kk.toJSON())
          }
          async getCurrentUser() {
            const kk = await this.persistence._get(this.fullUserKey);
            return kk ? TF._fromJSON(this.auth, kk) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(kk) {
            if (this.persistence === kk) return;
            const Fk = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = kk, Fk ? this.setCurrentUser(Fk) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(kk, Fk) {
            let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!Fk.length) return new LF(yF(aF), kk, Ik);
            const Xk = (await Promise.all(Fk.map((async kk => {
              if (await kk._isAvailable()) return kk
            })))).filter((kk => kk));
            let Tk = Xk[0] || yF(aF);
            const ik = qF(Ik, kk.config.apiKey, kk.name);
            let yk = null;
            for (const qk of Fk) try {
              const Fk = await qk._get(ik);
              if (Fk) {
                const Ik = TF._fromJSON(kk, Fk);
                qk !== Tk && (yk = Ik), Tk = qk;
                break
              }
            } catch (ak) {}
            const lk = Xk.filter((kk => kk._shouldAllowMigration));
            return Tk._shouldAllowMigration && lk.length ? (Tk = lk[0], yk && await Tk._set(ik, yk.toJSON()), await Promise.all(Fk.map((async kk => {
              if (kk !== Tk) try {
                await kk._remove(ik)
              } catch (ak) {}
            }))), new LF(Tk, kk, Ik)) : new LF(Tk, kk, Ik)
          }
        }

        function tF(kk) {
          const Fk = kk.toLowerCase();
          if (Fk.includes("opera/") || Fk.includes("opr/") || Fk.includes("opios/")) return "Opera";
          if (wF(Fk)) return "IEMobile";
          if (Fk.includes("msie") || Fk.includes("trident/")) return "IE";
          if (Fk.includes("edge/")) return "Edge";
          if (ZF(Fk)) return "Firefox";
          if (Fk.includes("silk/")) return "Silk";
          if (JF(Fk)) return "Blackberry";
          if (xF(Fk)) return "Webos";
          if (jF(Fk)) return "Safari";
          if ((Fk.includes("chrome/") || eF(Fk)) && !Fk.includes("edge/")) return "Chrome";
          if (HF(Fk)) return "Android";
          {
            const Fk = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              Ik = kk.match(Fk);
            if (2 === (null === Ik || void 0 === Ik ? void 0 : Ik.length)) return Ik[1]
          }
          return "Other"
        }

        function ZF() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Xk.O)();
          return /firefox\//i.test(kk)
        }

        function jF() {
          const kk = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Xk.O)()).toLowerCase();
          return kk.includes("safari/") && !kk.includes("chrome/") && !kk.includes("crios/") && !kk.includes("android")
        }

        function eF() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Xk.O)();
          return /crios\//i.test(kk)
        }

        function wF() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Xk.O)();
          return /iemobile/i.test(kk)
        }

        function HF() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Xk.O)();
          return /android/i.test(kk)
        }

        function JF() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Xk.O)();
          return /blackberry/i.test(kk)
        }

        function xF() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Xk.O)();
          return /webos/i.test(kk)
        }

        function PF() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Xk.O)();
          return /iphone|ipad|ipod/i.test(kk) || /macintosh/i.test(kk) && /mobile/i.test(kk)
        }

        function KF() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Xk.O)();
          return PF(kk) || HF(kk) || xF(kk) || JF(kk) || /windows phone/i.test(kk) || wF(kk)
        }

        function QF(kk) {
          let Fk, Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (kk) {
            case "Browser":
              Fk = tF((0, Xk.O)());
              break;
            case "Worker":
              Fk = `${tF((0,Xk.O)())}-${kk}`;
              break;
            default:
              Fk = kk
          }
          const ik = Ik.length ? Ik.join(",") : "FirebaseCore-web";
          return `${Fk}/JsCore/${Tk.i}/${ik}`
        }
        async function sF(kk, Fk) {
          return Nk(kk, "GET", "/v2/recaptchaConfig", Ck(kk, Fk))
        }

        function VF(kk) {
          return void 0 !== kk && void 0 !== kk.getResponse
        }

        function zF(kk) {
          return void 0 !== kk && void 0 !== kk.enterprise
        }
        class SF {
          constructor(kk) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === kk.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = kk.recaptchaKey.split("/")[3], this.emailPasswordEnabled = kk.recaptchaEnforcementState.some((kk => "EMAIL_PASSWORD_PROVIDER" === kk.provider && "OFF" !== kk.enforcementState))
          }
        }

        function oF(kk) {
          return new Promise(((Fk, Ik) => {
            const Xk = document.createElement("script");
            Xk.setAttribute("src", kk), Xk.onload = Fk, Xk.onerror = kk => {
                const Fk = Qk("internal-error");
                Fk.customData = kk, Ik(Fk)
              }, Xk.type = "text/javascript", Xk.charset = "UTF-8",
              function() {
                var kk, Fk;
                return null !== (Fk = null === (kk = document.getElementsByTagName("head")) || void 0 === kk ? void 0 : kk[0]) && void 0 !== Fk ? Fk : document
              }().appendChild(Xk)
          }))
        }

        function vF(kk) {
          return `__${kk}${Math.floor(1e6*Math.random())}`
        }
        class EF {
          constructor(kk) {
            this.type = "recaptcha-enterprise", this.auth = pF(kk)
          }
          async verify() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function Ik(Fk, Ik, Xk) {
              const Tk = window.grecaptcha;
              zF(Tk) ? Tk.enterprise.ready((() => {
                Tk.enterprise.execute(Fk, {
                  action: kk
                }).then((kk => {
                  Ik(kk)
                })).catch((() => {
                  Ik("NO_RECAPTCHA")
                }))
              })) : Xk(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((kk, Xk) => {
              (async function(kk) {
                if (!Fk) {
                  if (null == kk.tenantId && null != kk._agentRecaptchaConfig) return kk._agentRecaptchaConfig.siteKey;
                  if (null != kk.tenantId && void 0 !== kk._tenantRecaptchaConfigs[kk.tenantId]) return kk._tenantRecaptchaConfigs[kk.tenantId].siteKey
                }
                return new Promise((async (Fk, Ik) => {
                  sF(kk, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((Xk => {
                    if (void 0 !== Xk.recaptchaKey) {
                      const Ik = new SF(Xk);
                      return null == kk.tenantId ? kk._agentRecaptchaConfig = Ik : kk._tenantRecaptchaConfigs[kk.tenantId] = Ik, Fk(Ik.siteKey)
                    }
                    Ik(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((kk => {
                    Ik(kk)
                  }))
                }))
              })(this.auth).then((Tk => {
                if (!Fk && zF(window.grecaptcha)) Ik(Tk, kk, Xk);
                else {
                  if ("undefined" === typeof window) return void Xk(new Error("RecaptchaVerifier is only supported in browser"));
                  oF("https://www.google.com/recaptcha/enterprise.js?render=" + Tk).then((() => {
                    Ik(Tk, kk, Xk)
                  })).catch((kk => {
                    Xk(kk)
                  }))
                }
              })).catch((kk => {
                Xk(kk)
              }))
            }))
          }
        }
        async function OF(kk, Fk, Ik) {
          let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const Tk = new EF(kk);
          let ik;
          try {
            ik = await Tk.verify(Ik)
          } catch (lk) {
            ik = await Tk.verify(Ik, !0)
          }
          const yk = Object.assign({}, Fk);
          return Xk ? Object.assign(yk, {
            captchaResp: ik
          }) : Object.assign(yk, {
            captchaResponse: ik
          }), Object.assign(yk, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(yk, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), yk
        }
        class nF {
          constructor(kk) {
            this.auth = kk, this.queue = []
          }
          pushCallback(kk, Fk) {
            const Ik = Fk => new Promise(((Ik, Xk) => {
              try {
                Ik(kk(Fk))
              } catch (Tk) {
                Xk(Tk)
              }
            }));
            Ik.onAbort = Fk, this.queue.push(Ik);
            const Xk = this.queue.length - 1;
            return () => {
              this.queue[Xk] = () => Promise.resolve()
            }
          }
          async runMiddleware(kk) {
            if (this.auth.currentUser === kk) return;
            const Fk = [];
            try {
              for (const Ik of this.queue) await Ik(kk), Ik.onAbort && Fk.push(Ik.onAbort)
            } catch (Ik) {
              Fk.reverse();
              for (const kk of Fk) try {
                kk()
              } catch (Xk) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === Ik || void 0 === Ik ? void 0 : Ik.message
              })
            }
          }
        }
        class GF {
          constructor(kk, Fk, Ik, Xk) {
            this.app = kk, this.heartbeatServiceProvider = Fk, this.appCheckServiceProvider = Ik, this.config = Xk, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new uF(this), this.idTokenSubscription = new uF(this), this.beforeStateQueue = new nF(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Hk, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = kk.name, this.clientVersion = Xk.sdkClientVersion
          }
          _initializeWithPersistence(kk, Fk) {
            return Fk && (this._popupRedirectResolver = yF(Fk)), this._initializationPromise = this.queue((async () => {
              var Ik, Xk;
              if (!this._deleted && (this.persistenceManager = await LF.create(this, kk), !this._deleted)) {
                if (null === (Ik = this._popupRedirectResolver) || void 0 === Ik ? void 0 : Ik._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (Tk) {}
                await this.initializeCurrentUser(Fk), this.lastNotifiedUid = (null === (Xk = this.currentUser) || void 0 === Xk ? void 0 : Xk.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const kk = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || kk ? this.currentUser && kk && this.currentUser.uid === kk.uid ? (this._currentUser._assign(kk), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(kk, !0) : void 0
          }
          async initializeCurrentUser(kk) {
            var Fk;
            const Ik = await this.assertedPersistence.getCurrentUser();
            let Xk = Ik,
              Tk = !1;
            if (kk && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const Ik = null === (Fk = this.redirectUser) || void 0 === Fk ? void 0 : Fk._redirectEventId,
                ik = null === Xk || void 0 === Xk ? void 0 : Xk._redirectEventId,
                yk = await this.tryRedirectSignIn(kk);
              Ik && Ik !== ik || !(null === yk || void 0 === yk ? void 0 : yk.user) || (Xk = yk.user, Tk = !0)
            }
            if (!Xk) return this.directlySetCurrentUser(null);
            if (!Xk._redirectEventId) {
              if (Tk) try {
                await this.beforeStateQueue.runMiddleware(Xk)
              } catch (ik) {
                Xk = Ik, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(ik)))
              }
              return Xk ? this.reloadAndSetCurrentUserOrClear(Xk) : this.directlySetCurrentUser(null)
            }
            return Sk(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === Xk._redirectEventId ? this.directlySetCurrentUser(Xk) : this.reloadAndSetCurrentUserOrClear(Xk)
          }
          async tryRedirectSignIn(kk) {
            let Fk = null;
            try {
              Fk = await this._popupRedirectResolver._completeRedirectFn(this, kk, !0)
            } catch (Ik) {
              await this._setRedirectUser(null)
            }
            return Fk
          }
          async reloadAndSetCurrentUserOrClear(kk) {
            try {
              await kF(kk)
            } catch (Fk) {
              if ("auth/network-request-failed" !== (null === Fk || void 0 === Fk ? void 0 : Fk.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(kk)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const kk = navigator;
              return kk.languages && kk.languages[0] || kk.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(kk) {
            const Fk = kk ? (0, Xk.L)(kk) : null;
            return Fk && Sk(Fk.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(Fk && Fk._clone(this))
          }
          async _updateCurrentUser(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return kk && Sk(this.tenantId === kk.tenantId, this, "tenant-id-mismatch"), Fk || await this.beforeStateQueue.runMiddleware(kk), this.queue((async () => {
              await this.directlySetCurrentUser(kk), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(kk) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(yF(kk))
            }))
          }
          async initializeRecaptchaConfig() {
            const kk = await sF(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              Fk = new SF(kk);
            if (null == this.tenantId ? this._agentRecaptchaConfig = Fk : this._tenantRecaptchaConfigs[this.tenantId] = Fk, Fk.emailPasswordEnabled) {
              new EF(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(kk) {
            this._errorFactory = new Xk.g("auth", "Firebase", kk())
          }
          onAuthStateChanged(kk, Fk, Ik) {
            return this.registerStateListener(this.authStateSubscription, kk, Fk, Ik)
          }
          beforeAuthStateChanged(kk, Fk) {
            return this.beforeStateQueue.pushCallback(kk, Fk)
          }
          onIdTokenChanged(kk, Fk, Ik) {
            return this.registerStateListener(this.idTokenSubscription, kk, Fk, Ik)
          }
          toJSON() {
            var kk;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (kk = this._currentUser) || void 0 === kk ? void 0 : kk.toJSON()
            }
          }
          async _setRedirectUser(kk, Fk) {
            const Ik = await this.getOrInitRedirectPersistenceManager(Fk);
            return null === kk ? Ik.removeCurrentUser() : Ik.setCurrentUser(kk)
          }
          async getOrInitRedirectPersistenceManager(kk) {
            if (!this.redirectPersistenceManager) {
              const Fk = kk && yF(kk) || this._popupRedirectResolver;
              Sk(Fk, this, "argument-error"), this.redirectPersistenceManager = await LF.create(this, [yF(Fk._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(kk) {
            var Fk, Ik;
            return this._isInitialized && await this.queue((async () => {})), (null === (Fk = this._currentUser) || void 0 === Fk ? void 0 : Fk._redirectEventId) === kk ? this._currentUser : (null === (Ik = this.redirectUser) || void 0 === Ik ? void 0 : Ik._redirectEventId) === kk ? this.redirectUser : null
          }
          async _persistUserIfCurrent(kk) {
            if (kk === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(kk)))
          }
          _notifyListenersIfCurrent(kk) {
            kk === this.currentUser && this.notifyAuthListeners()
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
            var kk, Fk;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const Ik = null !== (Fk = null === (kk = this.currentUser) || void 0 === kk ? void 0 : kk.uid) && void 0 !== Fk ? Fk : null;
            this.lastNotifiedUid !== Ik && (this.lastNotifiedUid = Ik, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(kk, Fk, Ik, Xk) {
            if (this._deleted) return () => {};
            const Tk = "function" === typeof Fk ? Fk : Fk.next.bind(Fk),
              ik = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return Sk(ik, this, "internal-error"), ik.then((() => Tk(this.currentUser))), "function" === typeof Fk ? kk.addObserver(Fk, Ik, Xk) : kk.addObserver(Fk)
          }
          async directlySetCurrentUser(kk) {
            this.currentUser && this.currentUser !== kk && this._currentUser._stopProactiveRefresh(), kk && this.isProactiveRefreshEnabled && kk._startProactiveRefresh(), this.currentUser = kk, kk ? await this.assertedPersistence.setCurrentUser(kk) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(kk) {
            return this.operations = this.operations.then(kk, kk), this.operations
          }
          get assertedPersistence() {
            return Sk(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(kk) {
            kk && !this.frameworks.includes(kk) && (this.frameworks.push(kk), this.frameworks.sort(), this.clientVersion = QF(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var kk;
            const Fk = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (Fk["X-Firebase-gmpid"] = this.app.options.appId);
            const Ik = await (null === (kk = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === kk ? void 0 : kk.getHeartbeatsHeader());
            Ik && (Fk["X-Firebase-Client"] = Ik);
            const Xk = await this._getAppCheckToken();
            return Xk && (Fk["X-Firebase-AppCheck"] = Xk), Fk
          }
          async _getAppCheckToken() {
            var kk;
            const Fk = await (null === (kk = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === kk ? void 0 : kk.getToken());
            return (null === Fk || void 0 === Fk ? void 0 : Fk.error) && function(kk) {
              if (xk.logLevel <= yk.d.WARN) {
                for (var Fk = arguments.length, Ik = new Array(Fk > 1 ? Fk - 1 : 0), Xk = 1; Xk < Fk; Xk++) Ik[Xk - 1] = arguments[Xk];
                xk.warn(`Auth (${Tk.i}): ${kk}`, ...Ik)
              }
            }(`Error while retrieving App Check token: ${Fk.error}`), null === Fk || void 0 === Fk ? void 0 : Fk.token
          }
        }

        function pF(kk) {
          return (0, Xk.L)(kk)
        }
        class uF {
          constructor(kk) {
            this.auth = kk, this.observer = null, this.addObserver = (0, Xk.u)((kk => this.observer = kk))
          }
          get next() {
            return Sk(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function bF(kk, Fk) {
          const Ik = (0, Tk.A)(kk, "auth");
          if (Ik.isInitialized()) {
            const kk = Ik.getImmediate(),
              Tk = Ik.getOptions();
            if ((0, Xk.y)(Tk, null !== Fk && void 0 !== Fk ? Fk : {})) return kk;
            Kk(kk, "already-initialized")
          }
          return Ik.initialize({
            options: Fk
          })
        }

        function RF(kk, Fk, Ik) {
          const Xk = pF(kk);
          Sk(Xk._canInitEmulator, Xk, "emulator-config-failed"), Sk(/^https?:\/\//.test(Fk), Xk, "invalid-emulator-scheme");
          const Tk = !!(null === Ik || void 0 === Ik ? void 0 : Ik.disableWarnings),
            ik = UF(Fk),
            {
              host: yk,
              port: lk
            } = function(kk) {
              const Fk = UF(kk),
                Ik = /(\/\/)?([^?#/]+)/.exec(kk.substr(Fk.length));
              if (!Ik) return {
                host: "",
                port: null
              };
              const Xk = Ik[2].split("@").pop() || "",
                Tk = /^(\[[^\]]+\])(:|$)/.exec(Xk);
              if (Tk) {
                const kk = Tk[1];
                return {
                  host: kk,
                  port: CF(Xk.substr(kk.length + 1))
                }
              } {
                const [kk, Fk] = Xk.split(":");
                return {
                  host: kk,
                  port: CF(Fk)
                }
              }
            }(Fk),
            ak = null === lk ? "" : `:${lk}`;
          Xk.config.emulator = {
            url: `${ik}//${yk}${ak}/`
          }, Xk.settings.appVerificationDisabledForTesting = !0, Xk.emulatorConfig = Object.freeze({
            host: yk,
            port: lk,
            protocol: ik.replace(":", ""),
            options: Object.freeze({
              disableWarnings: Tk
            })
          }), Tk || function() {
            function kk() {
              const kk = document.createElement("p"),
                Fk = kk.style;
              kk.innerText = "Running in emulator mode. Do not use with production credentials.", Fk.position = "fixed", Fk.width = "100%", Fk.backgroundColor = "#ffffff", Fk.border = ".1em solid #000000", Fk.color = "#b50000", Fk.bottom = "0px", Fk.left = "0px", Fk.margin = "0px", Fk.zIndex = "10000", Fk.textAlign = "center", kk.classList.add("firebase-emulator-warning"), document.body.appendChild(kk)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", kk) : kk())
          }()
        }

        function UF(kk) {
          const Fk = kk.indexOf(":");
          return Fk < 0 ? "" : kk.substr(0, Fk + 1)
        }

        function CF(kk) {
          if (!kk) return null;
          const Fk = Number(kk);
          return isNaN(Fk) ? null : Fk
        }
        class NF {
          constructor(kk, Fk) {
            this.providerId = kk, this.signInMethod = Fk
          }
          toJSON() {
            return vk("not implemented")
          }
          _getIdTokenResponse(kk) {
            return vk("not implemented")
          }
          _linkToIdToken(kk, Fk) {
            return vk("not implemented")
          }
          _getReauthenticationResolver(kk) {
            return vk("not implemented")
          }
        }
        async function cF(kk, Fk) {
          return Nk(kk, "POST", "/v1/accounts:resetPassword", Ck(kk, Fk))
        }
        async function WF(kk, Fk) {
          return Nk(kk, "POST", "/v1/accounts:update", Fk)
        }
        async function fF(kk, Fk) {
          return Wk(kk, "POST", "/v1/accounts:signInWithPassword", Ck(kk, Fk))
        }
        async function BF(kk, Fk) {
          return Nk(kk, "POST", "/v1/accounts:sendOobCode", Ck(kk, Fk))
        }
        async function dF(kk, Fk) {
          return BF(kk, Fk)
        }
        async function YF(kk, Fk) {
          return BF(kk, Fk)
        }
        class AF extends NF {
          constructor(kk, Fk, Ik) {
            let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", Ik), this._email = kk, this._password = Fk, this._tenantId = Xk
          }
          static _fromEmailAndPassword(kk, Fk) {
            return new AF(kk, Fk, "password")
          }
          static _fromEmailAndCode(kk, Fk) {
            return new AF(kk, Fk, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(kk) {
            const Fk = "string" === typeof kk ? JSON.parse(kk) : kk;
            if ((null === Fk || void 0 === Fk ? void 0 : Fk.email) && (null === Fk || void 0 === Fk ? void 0 : Fk.password)) {
              if ("password" === Fk.signInMethod) return this._fromEmailAndPassword(Fk.email, Fk.password);
              if ("emailLink" === Fk.signInMethod) return this._fromEmailAndCode(Fk.email, Fk.password, Fk.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(kk) {
            var Fk;
            switch (this.signInMethod) {
              case "password":
                const Ik = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (Fk = kk._getRecaptchaConfig()) || void 0 === Fk ? void 0 : Fk.emailPasswordEnabled) {
                  const Fk = await OF(kk, Ik, "signInWithPassword");
                  return fF(kk, Fk)
                }
                return fF(kk, Ik).catch((async Fk => {
                  if ("auth/missing-recaptcha-token" === Fk.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const Fk = await OF(kk, Ik, "signInWithPassword");
                    return fF(kk, Fk)
                  }
                  return Promise.reject(Fk)
                }));
              case "emailLink":
                return async function(kk, Fk) {
                  return Wk(kk, "POST", "/v1/accounts:signInWithEmailLink", Ck(kk, Fk))
                }(kk, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Kk(kk, "internal-error")
            }
          }
          async _linkToIdToken(kk, Fk) {
            switch (this.signInMethod) {
              case "password":
                return WF(kk, {
                  idToken: Fk,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(kk, Fk) {
                  return Wk(kk, "POST", "/v1/accounts:signInWithEmailLink", Ck(kk, Fk))
                }(kk, {
                  idToken: Fk,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Kk(kk, "internal-error")
            }
          }
          _getReauthenticationResolver(kk) {
            return this._getIdTokenResponse(kk)
          }
        }
        async function gF(kk, Fk) {
          return Wk(kk, "POST", "/v1/accounts:signInWithIdp", Ck(kk, Fk))
        }
        class mF extends NF {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(kk) {
            const Fk = new mF(kk.providerId, kk.signInMethod);
            return kk.idToken || kk.accessToken ? (kk.idToken && (Fk.idToken = kk.idToken), kk.accessToken && (Fk.accessToken = kk.accessToken), kk.nonce && !kk.pendingToken && (Fk.nonce = kk.nonce), kk.pendingToken && (Fk.pendingToken = kk.pendingToken)) : kk.oauthToken && kk.oauthTokenSecret ? (Fk.accessToken = kk.oauthToken, Fk.secret = kk.oauthTokenSecret) : Kk("argument-error"), Fk
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
          static fromJSON(kk) {
            const Fk = "string" === typeof kk ? JSON.parse(kk) : kk,
              {
                providerId: Ik,
                signInMethod: Xk
              } = Fk,
              Tk = ik(Fk, ["providerId", "signInMethod"]);
            if (!Ik || !Xk) return null;
            const yk = new mF(Ik, Xk);
            return yk.idToken = Tk.idToken || void 0, yk.accessToken = Tk.accessToken || void 0, yk.secret = Tk.secret, yk.nonce = Tk.nonce, yk.pendingToken = Tk.pendingToken || null, yk
          }
          _getIdTokenResponse(kk) {
            return gF(kk, this.buildRequest())
          }
          _linkToIdToken(kk, Fk) {
            const Ik = this.buildRequest();
            return Ik.idToken = Fk, gF(kk, Ik)
          }
          _getReauthenticationResolver(kk) {
            const Fk = this.buildRequest();
            return Fk.autoCreate = !1, gF(kk, Fk)
          }
          buildRequest() {
            const kk = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) kk.pendingToken = this.pendingToken;
            else {
              const Fk = {};
              this.idToken && (Fk.id_token = this.idToken), this.accessToken && (Fk.access_token = this.accessToken), this.secret && (Fk.oauth_token_secret = this.secret), Fk.providerId = this.providerId, this.nonce && !this.pendingToken && (Fk.nonce = this.nonce), kk.postBody = (0, Xk.eb)(Fk)
            }
            return kk
          }
        }
        const hF = {
          USER_NOT_FOUND: "user-not-found"
        };
        class rF extends NF {
          constructor(kk) {
            super("phone", "phone"), this.params = kk
          }
          static _fromVerification(kk, Fk) {
            return new rF({
              verificationId: kk,
              verificationCode: Fk
            })
          }
          static _fromTokenResponse(kk, Fk) {
            return new rF({
              phoneNumber: kk,
              temporaryProof: Fk
            })
          }
          _getIdTokenResponse(kk) {
            return async function(kk, Fk) {
              return Wk(kk, "POST", "/v1/accounts:signInWithPhoneNumber", Ck(kk, Fk))
            }(kk, this._makeVerificationRequest())
          }
          _linkToIdToken(kk, Fk) {
            return async function(kk, Fk) {
              const Ik = await Wk(kk, "POST", "/v1/accounts:signInWithPhoneNumber", Ck(kk, Fk));
              if (Ik.temporaryProof) throw dk(kk, "account-exists-with-different-credential", Ik);
              return Ik
            }(kk, Object.assign({
              idToken: Fk
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(kk) {
            return async function(kk, Fk) {
              return Wk(kk, "POST", "/v1/accounts:signInWithPhoneNumber", Ck(kk, Object.assign(Object.assign({}, Fk), {
                operation: "REAUTH"
              })), hF)
            }(kk, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: kk,
              phoneNumber: Fk,
              verificationId: Ik,
              verificationCode: Xk
            } = this.params;
            return kk && Fk ? {
              temporaryProof: kk,
              phoneNumber: Fk
            } : {
              sessionInfo: Ik,
              code: Xk
            }
          }
          toJSON() {
            const kk = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (kk.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (kk.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (kk.verificationCode = this.params.verificationCode), this.params.verificationId && (kk.verificationId = this.params.verificationId), kk
          }
          static fromJSON(kk) {
            "string" === typeof kk && (kk = JSON.parse(kk));
            const {
              verificationId: Fk,
              verificationCode: Ik,
              phoneNumber: Xk,
              temporaryProof: Tk
            } = kk;
            return Ik || Fk || Xk || Tk ? new rF({
              verificationId: Fk,
              verificationCode: Ik,
              phoneNumber: Xk,
              temporaryProof: Tk
            }) : null
          }
        }
        class DF {
          constructor(kk) {
            var Fk, Ik, Tk, ik, yk, lk;
            const ak = (0, Xk.cb)((0, Xk.z)(kk)),
              qk = null !== (Fk = ak.apiKey) && void 0 !== Fk ? Fk : null,
              Lk = null !== (Ik = ak.oobCode) && void 0 !== Ik ? Ik : null,
              tk = function(kk) {
                switch (kk) {
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
              }(null !== (Tk = ak.mode) && void 0 !== Tk ? Tk : null);
            Sk(qk && Lk && tk, "argument-error"), this.apiKey = qk, this.operation = tk, this.code = Lk, this.continueUrl = null !== (ik = ak.continueUrl) && void 0 !== ik ? ik : null, this.languageCode = null !== (yk = ak.languageCode) && void 0 !== yk ? yk : null, this.tenantId = null !== (lk = ak.tenantId) && void 0 !== lk ? lk : null
          }
          static parseLink(kk) {
            const Fk = function(kk) {
              const Fk = (0, Xk.cb)((0, Xk.z)(kk)).link,
                Ik = Fk ? (0, Xk.cb)((0, Xk.z)(Fk)).deep_link_id : null,
                Tk = (0, Xk.cb)((0, Xk.z)(kk)).deep_link_id;
              return (Tk ? (0, Xk.cb)((0, Xk.z)(Tk)).link : null) || Tk || Ik || Fk || kk
            }(kk);
            try {
              return new DF(Fk)
            } catch (Ik) {
              return null
            }
          }
        }

        function MF(kk) {
          return DF.parseLink(kk)
        }
        class kI {
          constructor() {
            this.providerId = kI.PROVIDER_ID
          }
          static credential(kk, Fk) {
            return AF._fromEmailAndPassword(kk, Fk)
          }
          static credentialWithLink(kk, Fk) {
            const Ik = DF.parseLink(Fk);
            return Sk(Ik, "argument-error"), AF._fromEmailAndCode(kk, Ik.code, Ik.tenantId)
          }
        }
        kI.PROVIDER_ID = "password", kI.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", kI.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class FI {
          constructor(kk) {
            this.providerId = kk, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(kk) {
            this.defaultLanguageCode = kk
          }
          setCustomParameters(kk) {
            return this.customParameters = kk, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class II extends FI {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(kk) {
            return this.scopes.includes(kk) || this.scopes.push(kk), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class XI extends II {
          static credentialFromJSON(kk) {
            const Fk = "string" === typeof kk ? JSON.parse(kk) : kk;
            return Sk("providerId" in Fk && "signInMethod" in Fk, "argument-error"), mF._fromParams(Fk)
          }
          credential(kk) {
            return this._credential(Object.assign(Object.assign({}, kk), {
              nonce: kk.rawNonce
            }))
          }
          _credential(kk) {
            return Sk(kk.idToken || kk.accessToken, "argument-error"), mF._fromParams(Object.assign(Object.assign({}, kk), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(kk) {
            return XI.oauthCredentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return XI.oauthCredentialFromTaggedObject(kk.customData || {})
          }
          static oauthCredentialFromTaggedObject(kk) {
            let {
              _tokenResponse: Fk
            } = kk;
            if (!Fk) return null;
            const {
              oauthIdToken: Ik,
              oauthAccessToken: Xk,
              oauthTokenSecret: Tk,
              pendingToken: ik,
              nonce: yk,
              providerId: lk
            } = Fk;
            if (!Xk && !Tk && !Ik && !ik) return null;
            if (!lk) return null;
            try {
              return new XI(lk)._credential({
                idToken: Ik,
                accessToken: Xk,
                nonce: yk,
                pendingToken: ik
              })
            } catch (ak) {
              return null
            }
          }
        }
        class TI extends II {
          constructor() {
            super("facebook.com")
          }
          static credential(kk) {
            return mF._fromParams({
              providerId: TI.PROVIDER_ID,
              signInMethod: TI.FACEBOOK_SIGN_IN_METHOD,
              accessToken: kk
            })
          }
          static credentialFromResult(kk) {
            return TI.credentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return TI.credentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromTaggedObject(kk) {
            let {
              _tokenResponse: Fk
            } = kk;
            if (!Fk || !("oauthAccessToken" in Fk)) return null;
            if (!Fk.oauthAccessToken) return null;
            try {
              return TI.credential(Fk.oauthAccessToken)
            } catch (Ik) {
              return null
            }
          }
        }
        TI.FACEBOOK_SIGN_IN_METHOD = "facebook.com", TI.PROVIDER_ID = "facebook.com";
        class iI extends II {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(kk, Fk) {
            return mF._fromParams({
              providerId: iI.PROVIDER_ID,
              signInMethod: iI.GOOGLE_SIGN_IN_METHOD,
              idToken: kk,
              accessToken: Fk
            })
          }
          static credentialFromResult(kk) {
            return iI.credentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return iI.credentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromTaggedObject(kk) {
            let {
              _tokenResponse: Fk
            } = kk;
            if (!Fk) return null;
            const {
              oauthIdToken: Ik,
              oauthAccessToken: Xk
            } = Fk;
            if (!Ik && !Xk) return null;
            try {
              return iI.credential(Ik, Xk)
            } catch (Tk) {
              return null
            }
          }
        }
        iI.GOOGLE_SIGN_IN_METHOD = "google.com", iI.PROVIDER_ID = "google.com";
        class yI extends II {
          constructor() {
            super("github.com")
          }
          static credential(kk) {
            return mF._fromParams({
              providerId: yI.PROVIDER_ID,
              signInMethod: yI.GITHUB_SIGN_IN_METHOD,
              accessToken: kk
            })
          }
          static credentialFromResult(kk) {
            return yI.credentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return yI.credentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromTaggedObject(kk) {
            let {
              _tokenResponse: Fk
            } = kk;
            if (!Fk || !("oauthAccessToken" in Fk)) return null;
            if (!Fk.oauthAccessToken) return null;
            try {
              return yI.credential(Fk.oauthAccessToken)
            } catch (Ik) {
              return null
            }
          }
        }
        yI.GITHUB_SIGN_IN_METHOD = "github.com", yI.PROVIDER_ID = "github.com";
        class lI extends NF {
          constructor(kk, Fk) {
            super(kk, kk), this.pendingToken = Fk
          }
          _getIdTokenResponse(kk) {
            return gF(kk, this.buildRequest())
          }
          _linkToIdToken(kk, Fk) {
            const Ik = this.buildRequest();
            return Ik.idToken = Fk, gF(kk, Ik)
          }
          _getReauthenticationResolver(kk) {
            const Fk = this.buildRequest();
            return Fk.autoCreate = !1, gF(kk, Fk)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(kk) {
            const Fk = "string" === typeof kk ? JSON.parse(kk) : kk,
              {
                providerId: Ik,
                signInMethod: Xk,
                pendingToken: Tk
              } = Fk;
            return Ik && Xk && Tk && Ik === Xk ? new lI(Ik, Tk) : null
          }
          static _create(kk, Fk) {
            return new lI(kk, Fk)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class aI extends FI {
          constructor(kk) {
            Sk(kk.startsWith("saml."), "argument-error"), super(kk)
          }
          static credentialFromResult(kk) {
            return aI.samlCredentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return aI.samlCredentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromJSON(kk) {
            const Fk = lI.fromJSON(kk);
            return Sk(Fk, "argument-error"), Fk
          }
          static samlCredentialFromTaggedObject(kk) {
            let {
              _tokenResponse: Fk
            } = kk;
            if (!Fk) return null;
            const {
              pendingToken: Ik,
              providerId: Xk
            } = Fk;
            if (!Ik || !Xk) return null;
            try {
              return lI._create(Xk, Ik)
            } catch (Tk) {
              return null
            }
          }
        }
        class qI extends II {
          constructor() {
            super("twitter.com")
          }
          static credential(kk, Fk) {
            return mF._fromParams({
              providerId: qI.PROVIDER_ID,
              signInMethod: qI.TWITTER_SIGN_IN_METHOD,
              oauthToken: kk,
              oauthTokenSecret: Fk
            })
          }
          static credentialFromResult(kk) {
            return qI.credentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return qI.credentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromTaggedObject(kk) {
            let {
              _tokenResponse: Fk
            } = kk;
            if (!Fk) return null;
            const {
              oauthAccessToken: Ik,
              oauthTokenSecret: Xk
            } = Fk;
            if (!Ik || !Xk) return null;
            try {
              return qI.credential(Ik, Xk)
            } catch (Tk) {
              return null
            }
          }
        }
        async function LI(kk, Fk) {
          return Wk(kk, "POST", "/v1/accounts:signUp", Ck(kk, Fk))
        }
        qI.TWITTER_SIGN_IN_METHOD = "twitter.com", qI.PROVIDER_ID = "twitter.com";
        class tI {
          constructor(kk) {
            this.user = kk.user, this.providerId = kk.providerId, this._tokenResponse = kk._tokenResponse, this.operationType = kk.operationType
          }
          static async _fromIdTokenResponse(kk, Fk, Ik) {
            let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const Tk = await TF._fromIdTokenResponse(kk, Ik, Xk),
              ik = ZI(Ik);
            return new tI({
              user: Tk,
              providerId: ik,
              _tokenResponse: Ik,
              operationType: Fk
            })
          }
          static async _forOperation(kk, Fk, Ik) {
            await kk._updateTokensIfNecessary(Ik, !0);
            const Xk = ZI(Ik);
            return new tI({
              user: kk,
              providerId: Xk,
              _tokenResponse: Ik,
              operationType: Fk
            })
          }
        }

        function ZI(kk) {
          return kk.providerId ? kk.providerId : "phoneNumber" in kk ? "phone" : null
        }
        async function jI(kk) {
          var Fk;
          const Ik = pF(kk);
          if (await Ik._initializationPromise, null === (Fk = Ik.currentUser) || void 0 === Fk ? void 0 : Fk.isAnonymous) return new tI({
            user: Ik.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const Xk = await LI(Ik, {
              returnSecureToken: !0
            }),
            Tk = await tI._fromIdTokenResponse(Ik, "signIn", Xk, !0);
          return await Ik._updateCurrentUser(Tk.user), Tk
        }
        class eI extends Xk.h {
          constructor(kk, Fk, Ik, Xk) {
            var Tk;
            super(Fk.code, Fk.message), this.operationType = Ik, this.user = Xk, Object.setPrototypeOf(this, eI.prototype), this.customData = {
              appName: kk.name,
              tenantId: null !== (Tk = kk.tenantId) && void 0 !== Tk ? Tk : void 0,
              _serverResponse: Fk.customData._serverResponse,
              operationType: Ik
            }
          }
          static _fromErrorAndOperation(kk, Fk, Ik, Xk) {
            return new eI(kk, Fk, Ik, Xk)
          }
        }

        function wI(kk, Fk, Ik, Xk) {
          return ("reauthenticate" === Fk ? Ik._getReauthenticationResolver(kk) : Ik._getIdTokenResponse(kk)).catch((Ik => {
            if ("auth/multi-factor-auth-required" === Ik.code) throw eI._fromErrorAndOperation(kk, Ik, Fk, Xk);
            throw Ik
          }))
        }

        function HI(kk) {
          return new Set(kk.map((kk => {
            let {
              providerId: Fk
            } = kk;
            return Fk
          })).filter((kk => !!kk)))
        }
        async function JI(kk, Fk) {
          const Ik = (0, Xk.L)(kk);
          await PI(!0, Ik, Fk);
          const {
            providerUserInfo: Tk
          } = await async function(kk, Fk) {
            return Nk(kk, "POST", "/v1/accounts:update", Fk)
          }(Ik.auth, {
            idToken: await Ik.getIdToken(),
            deleteProvider: [Fk]
          }), ik = HI(Tk || []);
          return Ik.providerData = Ik.providerData.filter((kk => ik.has(kk.providerId))), ik.has("phone") || (Ik.phoneNumber = null), await Ik.auth._persistUserIfCurrent(Ik), Ik
        }
        async function xI(kk, Fk) {
          let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Xk = await rk(kk, Fk._linkToIdToken(kk.auth, await kk.getIdToken()), Ik);
          return tI._forOperation(kk, "link", Xk)
        }
        async function PI(kk, Fk, Ik) {
          await kF(Fk);
          const Xk = !1 === kk ? "provider-already-linked" : "no-such-provider";
          Sk(HI(Fk.providerData).has(Ik) === kk, Fk.auth, Xk)
        }
        async function KI(kk, Fk) {
          let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: Xk
          } = kk, Tk = "reauthenticate";
          try {
            const ik = await rk(kk, wI(Xk, Tk, Fk, kk), Ik);
            Sk(ik.idToken, Xk, "internal-error");
            const yk = hk(ik.idToken);
            Sk(yk, Xk, "internal-error");
            const {
              sub: lk
            } = yk;
            return Sk(kk.uid === lk, Xk, "user-mismatch"), tI._forOperation(kk, Tk, ik)
          } catch (ik) {
            throw "auth/user-not-found" === (null === ik || void 0 === ik ? void 0 : ik.code) && Kk(Xk, "user-mismatch"), ik
          }
        }
        async function QI(kk, Fk) {
          let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Xk = "signIn",
            Tk = await wI(kk, Xk, Fk),
            ik = await tI._fromIdTokenResponse(kk, Xk, Tk);
          return Ik || await kk._updateCurrentUser(ik.user), ik
        }
        async function sI(kk, Fk) {
          return QI(pF(kk), Fk)
        }
        async function VI(kk, Fk) {
          const Ik = (0, Xk.L)(kk);
          return await PI(!1, Ik, Fk.providerId), xI(Ik, Fk)
        }
        async function zI(kk, Fk) {
          return KI((0, Xk.L)(kk), Fk)
        }
        async function SI(kk, Fk) {
          const Ik = pF(kk),
            Xk = await async function(kk, Fk) {
              return Wk(kk, "POST", "/v1/accounts:signInWithCustomToken", Ck(kk, Fk))
            }(Ik, {
              token: Fk,
              returnSecureToken: !0
            }), Tk = await tI._fromIdTokenResponse(Ik, "signIn", Xk);
          return await Ik._updateCurrentUser(Tk.user), Tk
        }
        class oI {
          constructor(kk, Fk) {
            this.factorId = kk, this.uid = Fk.mfaEnrollmentId, this.enrollmentTime = new Date(Fk.enrolledAt).toUTCString(), this.displayName = Fk.displayName
          }
          static _fromServerResponse(kk, Fk) {
            return "phoneInfo" in Fk ? vI._fromServerResponse(kk, Fk) : "totpInfo" in Fk ? EI._fromServerResponse(kk, Fk) : Kk(kk, "internal-error")
          }
        }
        class vI extends oI {
          constructor(kk) {
            super("phone", kk), this.phoneNumber = kk.phoneInfo
          }
          static _fromServerResponse(kk, Fk) {
            return new vI(Fk)
          }
        }
        class EI extends oI {
          constructor(kk) {
            super("totp", kk)
          }
          static _fromServerResponse(kk, Fk) {
            return new EI(Fk)
          }
        }

        function OI(kk, Fk, Ik) {
          var Xk;
          Sk((null === (Xk = Ik.url) || void 0 === Xk ? void 0 : Xk.length) > 0, kk, "invalid-continue-uri"), Sk("undefined" === typeof Ik.dynamicLinkDomain || Ik.dynamicLinkDomain.length > 0, kk, "invalid-dynamic-link-domain"), Fk.continueUrl = Ik.url, Fk.dynamicLinkDomain = Ik.dynamicLinkDomain, Fk.canHandleCodeInApp = Ik.handleCodeInApp, Ik.iOS && (Sk(Ik.iOS.bundleId.length > 0, kk, "missing-ios-bundle-id"), Fk.iOSBundleId = Ik.iOS.bundleId), Ik.android && (Sk(Ik.android.packageName.length > 0, kk, "missing-android-pkg-name"), Fk.androidInstallApp = Ik.android.installApp, Fk.androidMinimumVersionCode = Ik.android.minimumVersion, Fk.androidPackageName = Ik.android.packageName)
        }
        async function nI(kk, Fk, Ik) {
          var Xk;
          const Tk = pF(kk),
            ik = {
              requestType: "PASSWORD_RESET",
              email: Fk,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (Xk = Tk._getRecaptchaConfig()) || void 0 === Xk ? void 0 : Xk.emailPasswordEnabled) {
            const kk = await OF(Tk, ik, "getOobCode", !0);
            Ik && OI(Tk, kk, Ik), await dF(Tk, kk)
          } else Ik && OI(Tk, ik, Ik), await dF(Tk, ik).catch((async kk => {
            if ("auth/missing-recaptcha-token" !== kk.code) return Promise.reject(kk);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const kk = await OF(Tk, ik, "getOobCode", !0);
              Ik && OI(Tk, kk, Ik), await dF(Tk, kk)
            }
          }))
        }
        async function GI(kk, Fk, Ik) {
          await cF((0, Xk.L)(kk), {
            oobCode: Fk,
            newPassword: Ik
          })
        }
        async function pI(kk, Fk) {
          await async function(kk, Fk) {
            return Nk(kk, "POST", "/v1/accounts:update", Ck(kk, Fk))
          }((0, Xk.L)(kk), {
            oobCode: Fk
          })
        }
        async function uI(kk, Fk) {
          const Ik = (0, Xk.L)(kk),
            Tk = await cF(Ik, {
              oobCode: Fk
            }),
            ik = Tk.requestType;
          switch (Sk(ik, Ik, "internal-error"), ik) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              Sk(Tk.newEmail, Ik, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              Sk(Tk.mfaInfo, Ik, "internal-error");
            default:
              Sk(Tk.email, Ik, "internal-error")
          }
          let yk = null;
          return Tk.mfaInfo && (yk = oI._fromServerResponse(pF(Ik), Tk.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === Tk.requestType ? Tk.newEmail : Tk.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === Tk.requestType ? Tk.email : Tk.newEmail) || null,
              multiFactorInfo: yk
            },
            operation: ik
          }
        }
        async function bI(kk, Fk) {
          const {
            data: Ik
          } = await uI((0, Xk.L)(kk), Fk);
          return Ik.email
        }
        async function RI(kk, Fk, Ik) {
          var Xk;
          const Tk = pF(kk),
            ik = {
              returnSecureToken: !0,
              email: Fk,
              password: Ik,
              clientType: "CLIENT_TYPE_WEB"
            };
          let yk;
          if (null === (Xk = Tk._getRecaptchaConfig()) || void 0 === Xk ? void 0 : Xk.emailPasswordEnabled) {
            const kk = await OF(Tk, ik, "signUpPassword");
            yk = LI(Tk, kk)
          } else yk = LI(Tk, ik).catch((async kk => {
            if ("auth/missing-recaptcha-token" === kk.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const kk = await OF(Tk, ik, "signUpPassword");
              return LI(Tk, kk)
            }
            return Promise.reject(kk)
          }));
          const lk = await yk.catch((kk => Promise.reject(kk))),
            ak = await tI._fromIdTokenResponse(Tk, "signIn", lk);
          return await Tk._updateCurrentUser(ak.user), ak
        }

        function UI(kk, Fk, Ik) {
          return sI((0, Xk.L)(kk), kI.credential(Fk, Ik))
        }
        async function CI(kk, Fk, Ik) {
          var Xk;
          const Tk = pF(kk),
            ik = {
              requestType: "EMAIL_SIGNIN",
              email: Fk,
              clientType: "CLIENT_TYPE_WEB"
            };

          function yk(kk, Fk) {
            Sk(Fk.handleCodeInApp, Tk, "argument-error"), Fk && OI(Tk, kk, Fk)
          }
          if (null === (Xk = Tk._getRecaptchaConfig()) || void 0 === Xk ? void 0 : Xk.emailPasswordEnabled) {
            const kk = await OF(Tk, ik, "getOobCode", !0);
            yk(kk, Ik), await YF(Tk, kk)
          } else yk(ik, Ik), await YF(Tk, ik).catch((async kk => {
            if ("auth/missing-recaptcha-token" !== kk.code) return Promise.reject(kk);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const kk = await OF(Tk, ik, "getOobCode", !0);
              yk(kk, Ik), await YF(Tk, kk)
            }
          }))
        }

        function NI(kk, Fk) {
          const Ik = DF.parseLink(Fk);
          return "EMAIL_SIGNIN" === (null === Ik || void 0 === Ik ? void 0 : Ik.operation)
        }
        async function cI(kk, Fk, Ik) {
          const Tk = (0, Xk.L)(kk),
            ik = kI.credentialWithLink(Fk, Ik || Ok());
          return Sk(ik._tenantId === (Tk.tenantId || null), Tk, "tenant-id-mismatch"), sI(Tk, ik)
        }
        async function WI(kk, Fk) {
          const Ik = {
              identifier: Fk,
              continueUri: nk() ? Ok() : "http://localhost"
            },
            {
              signinMethods: Tk
            } = await async function(kk, Fk) {
              return Nk(kk, "POST", "/v1/accounts:createAuthUri", Ck(kk, Fk))
            }((0, Xk.L)(kk), Ik);
          return Tk || []
        }
        async function fI(kk, Fk) {
          const Ik = (0, Xk.L)(kk),
            Tk = {
              requestType: "VERIFY_EMAIL",
              idToken: await kk.getIdToken()
            };
          Fk && OI(Ik.auth, Tk, Fk);
          const {
            email: ik
          } = await async function(kk, Fk) {
            return BF(kk, Fk)
          }(Ik.auth, Tk);
          ik !== kk.email && await kk.reload()
        }
        async function BI(kk, Fk, Ik) {
          const Tk = (0, Xk.L)(kk),
            ik = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await kk.getIdToken(),
              newEmail: Fk
            };
          Ik && OI(Tk.auth, ik, Ik);
          const {
            email: yk
          } = await async function(kk, Fk) {
            return BF(kk, Fk)
          }(Tk.auth, ik);
          yk !== kk.email && await kk.reload()
        }
        async function dI(kk, Fk) {
          let {
            displayName: Ik,
            photoURL: Tk
          } = Fk;
          if (void 0 === Ik && void 0 === Tk) return;
          const ik = (0, Xk.L)(kk),
            yk = {
              idToken: await ik.getIdToken(),
              displayName: Ik,
              photoUrl: Tk,
              returnSecureToken: !0
            },
            lk = await rk(ik, async function(kk, Fk) {
              return Nk(kk, "POST", "/v1/accounts:update", Fk)
            }(ik.auth, yk));
          ik.displayName = lk.displayName || null, ik.photoURL = lk.photoUrl || null;
          const ak = ik.providerData.find((kk => {
            let {
              providerId: Fk
            } = kk;
            return "password" === Fk
          }));
          ak && (ak.displayName = ik.displayName, ak.photoURL = ik.photoURL), await ik._updateTokensIfNecessary(lk)
        }

        function YI(kk, Fk) {
          return gI((0, Xk.L)(kk), Fk, null)
        }

        function AI(kk, Fk) {
          return gI((0, Xk.L)(kk), null, Fk)
        }
        async function gI(kk, Fk, Ik) {
          const {
            auth: Xk
          } = kk, Tk = {
            idToken: await kk.getIdToken(),
            returnSecureToken: !0
          };
          Fk && (Tk.email = Fk), Ik && (Tk.password = Ik);
          const ik = await rk(kk, WF(Xk, Tk));
          await kk._updateTokensIfNecessary(ik, !0)
        }
        class mI {
          constructor(kk, Fk) {
            let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = kk, this.providerId = Fk, this.profile = Ik
          }
        }
        class hI extends mI {
          constructor(kk, Fk, Ik, Xk) {
            super(kk, Fk, Ik), this.username = Xk
          }
        }
        class rI extends mI {
          constructor(kk, Fk) {
            super(kk, "facebook.com", Fk)
          }
        }
        class DI extends hI {
          constructor(kk, Fk) {
            super(kk, "github.com", Fk, "string" === typeof(null === Fk || void 0 === Fk ? void 0 : Fk.login) ? null === Fk || void 0 === Fk ? void 0 : Fk.login : null)
          }
        }
        class MI extends mI {
          constructor(kk, Fk) {
            super(kk, "google.com", Fk)
          }
        }
        class kX extends hI {
          constructor(kk, Fk, Ik) {
            super(kk, "twitter.com", Fk, Ik)
          }
        }

        function FX(kk) {
          const {
            user: Fk,
            _tokenResponse: Ik
          } = kk;
          return Fk.isAnonymous && !Ik ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(kk) {
            var Fk, Ik;
            if (!kk) return null;
            const {
              providerId: Xk
            } = kk, Tk = kk.rawUserInfo ? JSON.parse(kk.rawUserInfo) : {}, ik = kk.isNewUser || "identitytoolkit#SignupNewUserResponse" === kk.kind;
            if (!Xk && (null === kk || void 0 === kk ? void 0 : kk.idToken)) {
              const Xk = null === (Ik = null === (Fk = hk(kk.idToken)) || void 0 === Fk ? void 0 : Fk.firebase) || void 0 === Ik ? void 0 : Ik.sign_in_provider;
              if (Xk) return new mI(ik, "anonymous" !== Xk && "custom" !== Xk ? Xk : null)
            }
            if (!Xk) return null;
            switch (Xk) {
              case "facebook.com":
                return new rI(ik, Tk);
              case "github.com":
                return new DI(ik, Tk);
              case "google.com":
                return new MI(ik, Tk);
              case "twitter.com":
                return new kX(ik, Tk, kk.screenName || null);
              case "custom":
              case "anonymous":
                return new mI(ik, null);
              default:
                return new mI(ik, Xk, Tk)
            }
          }(Ik)
        }

        function IX(kk, Fk) {
          return (0, Xk.L)(kk).setPersistence(Fk)
        }

        function XX(kk) {
          return pF(kk).initializeRecaptchaConfig()
        }

        function TX(kk, Fk, Ik, Tk) {
          return (0, Xk.L)(kk).onIdTokenChanged(Fk, Ik, Tk)
        }

        function iX(kk, Fk, Ik) {
          return (0, Xk.L)(kk).beforeAuthStateChanged(Fk, Ik)
        }

        function yX(kk, Fk, Ik, Tk) {
          return (0, Xk.L)(kk).onAuthStateChanged(Fk, Ik, Tk)
        }

        function lX(kk) {
          (0, Xk.L)(kk).useDeviceLanguage()
        }

        function aX(kk, Fk) {
          return (0, Xk.L)(kk).updateCurrentUser(Fk)
        }

        function qX(kk) {
          return (0, Xk.L)(kk).signOut()
        }
        async function LX(kk) {
          return (0, Xk.L)(kk).delete()
        }
        class tX {
          constructor(kk, Fk, Ik) {
            this.type = kk, this.credential = Fk, this.auth = Ik
          }
          static _fromIdtoken(kk, Fk) {
            return new tX("enroll", kk, Fk)
          }
          static _fromMfaPendingCredential(kk) {
            return new tX("signin", kk)
          }
          toJSON() {
            const kk = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [kk]: this.credential
              }
            }
          }
          static fromJSON(kk) {
            var Fk, Ik;
            if (null === kk || void 0 === kk ? void 0 : kk.multiFactorSession) {
              if (null === (Fk = kk.multiFactorSession) || void 0 === Fk ? void 0 : Fk.pendingCredential) return tX._fromMfaPendingCredential(kk.multiFactorSession.pendingCredential);
              if (null === (Ik = kk.multiFactorSession) || void 0 === Ik ? void 0 : Ik.idToken) return tX._fromIdtoken(kk.multiFactorSession.idToken)
            }
            return null
          }
        }
        class ZX {
          constructor(kk, Fk, Ik) {
            this.session = kk, this.hints = Fk, this.signInResolver = Ik
          }
          static _fromError(kk, Fk) {
            const Ik = pF(kk),
              Xk = Fk.customData._serverResponse,
              Tk = (Xk.mfaInfo || []).map((kk => oI._fromServerResponse(Ik, kk)));
            Sk(Xk.mfaPendingCredential, Ik, "internal-error");
            const ik = tX._fromMfaPendingCredential(Xk.mfaPendingCredential);
            return new ZX(ik, Tk, (async kk => {
              const Tk = await kk._process(Ik, ik);
              delete Xk.mfaInfo, delete Xk.mfaPendingCredential;
              const yk = Object.assign(Object.assign({}, Xk), {
                idToken: Tk.idToken,
                refreshToken: Tk.refreshToken
              });
              switch (Fk.operationType) {
                case "signIn":
                  const kk = await tI._fromIdTokenResponse(Ik, Fk.operationType, yk);
                  return await Ik._updateCurrentUser(kk.user), kk;
                case "reauthenticate":
                  return Sk(Fk.user, Ik, "internal-error"), tI._forOperation(Fk.user, Fk.operationType, yk);
                default:
                  Kk(Ik, "internal-error")
              }
            }))
          }
          async resolveSignIn(kk) {
            const Fk = kk;
            return this.signInResolver(Fk)
          }
        }

        function jX(kk, Fk) {
          var Ik;
          const Tk = (0, Xk.L)(kk),
            ik = Fk;
          return Sk(Fk.customData.operationType, Tk, "argument-error"), Sk(null === (Ik = ik.customData._serverResponse) || void 0 === Ik ? void 0 : Ik.mfaPendingCredential, Tk, "argument-error"), ZX._fromError(Tk, ik)
        }
        class eX {
          constructor(kk) {
            this.user = kk, this.enrolledFactors = [], kk._onReload((Fk => {
              Fk.mfaInfo && (this.enrolledFactors = Fk.mfaInfo.map((Fk => oI._fromServerResponse(kk.auth, Fk))))
            }))
          }
          static _fromUser(kk) {
            return new eX(kk)
          }
          async getSession() {
            return tX._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(kk, Fk) {
            const Ik = kk,
              Xk = await this.getSession(),
              Tk = await rk(this.user, Ik._process(this.user.auth, Xk, Fk));
            return await this.user._updateTokensIfNecessary(Tk), this.user.reload()
          }
          async unenroll(kk) {
            const Fk = "string" === typeof kk ? kk : kk.uid,
              Ik = await this.user.getIdToken();
            try {
              const kk = await rk(this.user, (Xk = this.user.auth, Tk = {
                idToken: Ik,
                mfaEnrollmentId: Fk
              }, Nk(Xk, "POST", "/v2/accounts/mfaEnrollment:withdraw", Ck(Xk, Tk))));
              this.enrolledFactors = this.enrolledFactors.filter((kk => {
                let {
                  uid: Ik
                } = kk;
                return Ik !== Fk
              })), await this.user._updateTokensIfNecessary(kk), await this.user.reload()
            } catch (ik) {
              throw ik
            }
            var Xk, Tk
          }
        }
        const wX = new WeakMap;

        function HX(kk) {
          const Fk = (0, Xk.L)(kk);
          return wX.has(Fk) || wX.set(Fk, eX._fromUser(Fk)), wX.get(Fk)
        }
        const JX = "__sak";
        class xX {
          constructor(kk, Fk) {
            this.storageRetriever = kk, this.type = Fk
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(JX, "1"), this.storage.removeItem(JX), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (kk) {
              return Promise.resolve(!1)
            }
          }
          _set(kk, Fk) {
            return this.storage.setItem(kk, JSON.stringify(Fk)), Promise.resolve()
          }
          _get(kk) {
            const Fk = this.storage.getItem(kk);
            return Promise.resolve(Fk ? JSON.parse(Fk) : null)
          }
          _remove(kk) {
            return this.storage.removeItem(kk), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class PX extends xX {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (kk, Fk) => this.onStorageEvent(kk, Fk), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const kk = (0, Xk.O)();
              return jF(kk) || PF(kk)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (kk) {
                return !1
              }
            }(), this.fallbackToPolling = KF(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(kk) {
            for (const Fk of Object.keys(this.listeners)) {
              const Ik = this.storage.getItem(Fk),
                Xk = this.localCache[Fk];
              Ik !== Xk && kk(Fk, Xk, Ik)
            }
          }
          onStorageEvent(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!kk.key) return void this.forAllChangedKeys(((kk, Fk, Ik) => {
              this.notifyListeners(kk, Ik)
            }));
            const Ik = kk.key;
            if (Fk ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const Xk = this.storage.getItem(Ik);
              if (kk.newValue !== Xk) null !== kk.newValue ? this.storage.setItem(Ik, kk.newValue) : this.storage.removeItem(Ik);
              else if (this.localCache[Ik] === kk.newValue && !Fk) return
            }
            const Tk = () => {
                const kk = this.storage.getItem(Ik);
                (Fk || this.localCache[Ik] !== kk) && this.notifyListeners(Ik, kk)
              },
              ik = this.storage.getItem(Ik);
            (0, Xk.U)() && 10 === document.documentMode && ik !== kk.newValue && kk.newValue !== kk.oldValue ? setTimeout(Tk, 10) : Tk()
          }
          notifyListeners(kk, Fk) {
            this.localCache[kk] = Fk;
            const Ik = this.listeners[kk];
            if (Ik)
              for (const Xk of Array.from(Ik)) Xk(Fk ? JSON.parse(Fk) : Fk)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((kk, Fk, Ik) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: kk,
                  oldValue: Fk,
                  newValue: Ik
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
          _addListener(kk, Fk) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[kk] || (this.listeners[kk] = new Set, this.localCache[kk] = this.storage.getItem(kk)), this.listeners[kk].add(Fk)
          }
          _removeListener(kk, Fk) {
            this.listeners[kk] && (this.listeners[kk].delete(Fk), 0 === this.listeners[kk].size && delete this.listeners[kk]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(kk, Fk) {
            await super._set(kk, Fk), this.localCache[kk] = JSON.stringify(Fk)
          }
          async _get(kk) {
            const Fk = await super._get(kk);
            return this.localCache[kk] = JSON.stringify(Fk), Fk
          }
          async _remove(kk) {
            await super._remove(kk), delete this.localCache[kk]
          }
        }
        PX.type = "LOCAL";
        const KX = PX;
        class QX extends xX {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(kk, Fk) {}
          _removeListener(kk, Fk) {}
        }
        QX.type = "SESSION";
        const sX = QX;
        class VX {
          constructor(kk) {
            this.eventTarget = kk, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(kk) {
            const Fk = this.receivers.find((Fk => Fk.isListeningto(kk)));
            if (Fk) return Fk;
            const Ik = new VX(kk);
            return this.receivers.push(Ik), Ik
          }
          isListeningto(kk) {
            return this.eventTarget === kk
          }
          async handleEvent(kk) {
            const Fk = kk,
              {
                eventId: Ik,
                eventType: Xk,
                data: Tk
              } = Fk.data,
              ik = this.handlersMap[Xk];
            if (!(null === ik || void 0 === ik ? void 0 : ik.size)) return;
            Fk.ports[0].postMessage({
              status: "ack",
              eventId: Ik,
              eventType: Xk
            });
            const yk = Array.from(ik).map((async kk => kk(Fk.origin, Tk))),
              lk = await
            function(kk) {
              return Promise.all(kk.map((async kk => {
                try {
                  return {
                    fulfilled: !0,
                    value: await kk
                  }
                } catch (Fk) {
                  return {
                    fulfilled: !1,
                    reason: Fk
                  }
                }
              })))
            }(yk);
            Fk.ports[0].postMessage({
              status: "done",
              eventId: Ik,
              eventType: Xk,
              response: lk
            })
          }
          _subscribe(kk, Fk) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[kk] || (this.handlersMap[kk] = new Set), this.handlersMap[kk].add(Fk)
          }
          _unsubscribe(kk, Fk) {
            this.handlersMap[kk] && Fk && this.handlersMap[kk].delete(Fk), Fk && 0 !== this.handlersMap[kk].size || delete this.handlersMap[kk], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function zX() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            Ik = "";
          for (let Xk = 0; Xk < Fk; Xk++) Ik += Math.floor(10 * Math.random());
          return kk + Ik
        }
        VX.receivers = [];
        class SX {
          constructor(kk) {
            this.target = kk, this.handlers = new Set
          }
          removeMessageHandler(kk) {
            kk.messageChannel && (kk.messageChannel.port1.removeEventListener("message", kk.bJ), kk.messageChannel.port1.close()), this.handlers.delete(kk)
          }
          async _send(kk, Fk) {
            let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const Xk = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!Xk) throw new Error("connection_unavailable");
            let Tk, ik;
            return new Promise(((yk, lk) => {
              const ak = zX("", 20);
              Xk.port1.start();
              const qk = setTimeout((() => {
                lk(new Error("unsupported_event"))
              }), Ik);
              ik = {
                messageChannel: Xk,
                bJ(kk) {
                  const Fk = kk;
                  if (Fk.data.eventId === ak) switch (Fk.data.status) {
                    case "ack":
                      clearTimeout(qk), Tk = setTimeout((() => {
                        lk(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(Tk), yk(Fk.data.response);
                      break;
                    default:
                      clearTimeout(qk), clearTimeout(Tk), lk(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(ik), Xk.port1.addEventListener("message", ik.bJ), this.target.postMessage({
                eventType: kk,
                eventId: ak,
                data: Fk
              }, [Xk.port2])
            })).finally((() => {
              ik && this.removeMessageHandler(ik)
            }))
          }
        }

        function oX() {
          return window
        }

        function vX() {
          return "undefined" !== typeof oX().WorkerGlobalScope && "function" === typeof oX().importScripts
        }
        const EX = "firebaseLocalStorageDb",
          OX = "firebaseLocalStorage",
          nX = "fbase_key";
        class GX {
          constructor(kk) {
            this.request = kk
          }
          toPromise() {
            return new Promise(((kk, Fk) => {
              this.request.addEventListener("success", (() => {
                kk(this.request.result)
              })), this.request.addEventListener("error", (() => {
                Fk(this.request.error)
              }))
            }))
          }
        }

        function pX(kk, Fk) {
          return kk.transaction([OX], Fk ? "readwrite" : "readonly").objectStore(OX)
        }

        function uX() {
          const kk = indexedDB.open(EX, 1);
          return new Promise(((Fk, Ik) => {
            kk.addEventListener("error", (() => {
              Ik(kk.error)
            })), kk.addEventListener("upgradeneeded", (() => {
              const Fk = kk.result;
              try {
                Fk.createObjectStore(OX, {
                  keyPath: nX
                })
              } catch (Xk) {
                Ik(Xk)
              }
            })), kk.addEventListener("success", (async () => {
              const Ik = kk.result;
              Ik.objectStoreNames.contains(OX) ? Fk(Ik) : (Ik.close(), await
                function() {
                  const kk = indexedDB.deleteDatabase(EX);
                  return new GX(kk).toPromise()
                }(), Fk(await uX()))
            }))
          }))
        }
        async function bX(kk, Fk, Ik) {
          const Xk = pX(kk, !0).put({
            [nX]: Fk,
            value: Ik
          });
          return new GX(Xk).toPromise()
        }

        function RX(kk, Fk) {
          const Ik = pX(kk, !0).delete(Fk);
          return new GX(Ik).toPromise()
        }
        class UX {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await uX()), this.db
          }
          async _withRetries(kk) {
            let Fk = 0;
            for (;;) try {
              const Fk = await this._openDb();
              return await kk(Fk)
            } catch (Ik) {
              if (Fk++ > 3) throw Ik;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return vX() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = VX._getInstance(vX() ? self : null), this.receiver._subscribe("keyChanged", (async (kk, Fk) => ({
              keyProcessed: (await this._poll()).includes(Fk.key)
            }))), this.receiver._subscribe("ping", (async (kk, Fk) => ["keyChanged"]))
          }
          async initializeSender() {
            var kk, Fk;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (kk) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new SX(this.activeServiceWorker);
            const Ik = await this.sender._send("ping", {}, 800);
            Ik && (null === (kk = Ik[0]) || void 0 === kk ? void 0 : kk.fulfilled) && (null === (Fk = Ik[0]) || void 0 === Fk ? void 0 : Fk.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(kk) {
            if (this.sender && this.activeServiceWorker && function() {
                var kk;
                return (null === (kk = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === kk ? void 0 : kk.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: kk
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (Fk) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const kk = await uX();
              return await bX(kk, JX, "1"), await RX(kk, JX), !0
            } catch (kk) {}
            return !1
          }
          async _withPendingWrite(kk) {
            this.pendingWrites++;
            try {
              await kk()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(kk, Fk) {
            return this._withPendingWrite((async () => (await this._withRetries((Ik => bX(Ik, kk, Fk))), this.localCache[kk] = Fk, this.notifyServiceWorker(kk))))
          }
          async _get(kk) {
            const Fk = await this._withRetries((Fk => async function(kk, Fk) {
              const Ik = pX(kk, !1).get(Fk),
                Xk = await new GX(Ik).toPromise();
              return void 0 === Xk ? null : Xk.value
            }(Fk, kk)));
            return this.localCache[kk] = Fk, Fk
          }
          async _remove(kk) {
            return this._withPendingWrite((async () => (await this._withRetries((Fk => RX(Fk, kk))), delete this.localCache[kk], this.notifyServiceWorker(kk))))
          }
          async _poll() {
            const kk = await this._withRetries((kk => {
              const Fk = pX(kk, !1).getAll();
              return new GX(Fk).toPromise()
            }));
            if (!kk) return [];
            if (0 !== this.pendingWrites) return [];
            const Fk = [],
              Ik = new Set;
            for (const {
                fbase_key: Xk,
                value: Tk
              }
              of kk) Ik.add(Xk), JSON.stringify(this.localCache[Xk]) !== JSON.stringify(Tk) && (this.notifyListeners(Xk, Tk), Fk.push(Xk));
            for (const Xk of Object.keys(this.localCache)) this.localCache[Xk] && !Ik.has(Xk) && (this.notifyListeners(Xk, null), Fk.push(Xk));
            return Fk
          }
          notifyListeners(kk, Fk) {
            this.localCache[kk] = Fk;
            const Ik = this.listeners[kk];
            if (Ik)
              for (const Xk of Array.from(Ik)) Xk(Fk)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(kk, Fk) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[kk] || (this.listeners[kk] = new Set, this._get(kk)), this.listeners[kk].add(Fk)
          }
          _removeListener(kk, Fk) {
            this.listeners[kk] && (this.listeners[kk].delete(Fk), 0 === this.listeners[kk].size && delete this.listeners[kk]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        UX.type = "LOCAL";
        const CX = UX;
        const NX = 1e12;
        class cX {
          constructor(kk) {
            this.auth = kk, this.counter = NX, this._widgets = new Map
          }
          render(kk, Fk) {
            const Ik = this.counter;
            return this._widgets.set(Ik, new WX(kk, this.auth.name, Fk || {})), this.counter++, Ik
          }
          reset(kk) {
            var Fk;
            const Ik = kk || NX;
            null === (Fk = this._widgets.get(Ik)) || void 0 === Fk || Fk.delete(), this._widgets.delete(Ik)
          }
          getResponse(kk) {
            var Fk;
            const Ik = kk || NX;
            return (null === (Fk = this._widgets.get(Ik)) || void 0 === Fk ? void 0 : Fk.getResponse()) || ""
          }
          async execute(kk) {
            var Fk;
            const Ik = kk || NX;
            return null === (Fk = this._widgets.get(Ik)) || void 0 === Fk || Fk.execute(), ""
          }
        }
        class WX {
          constructor(kk, Fk, Ik) {
            this.params = Ik, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const Xk = "string" === typeof kk ? document.getElementById(kk) : kk;
            Sk(Xk, "argument-error", {
              appName: Fk
            }), this.container = Xk, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(kk) {
                const Fk = [],
                  Ik = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let Xk = 0; Xk < kk; Xk++) Fk.push(Ik.charAt(Math.floor(Math.random() * Ik.length)));
                return Fk.join("")
              }(50);
              const {
                callback: kk,
                "expired-callback": Fk
              } = this.params;
              if (kk) try {
                kk(this.responseToken)
              } catch (Ik) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, Fk) try {
                  Fk()
                } catch (Ik) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const fX = vF("rcb"),
          BX = new pk(3e4, 6e4);
        class dX {
          constructor() {
            var kk;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (kk = oX().grecaptcha) || void 0 === kk ? void 0 : kk.render)
          }
          load(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return Sk(function(kk) {
              return kk.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(kk)
            }(Fk), kk, "argument-error"), this.shouldResolveImmediately(Fk) && VF(oX().grecaptcha) ? Promise.resolve(oX().grecaptcha) : new Promise(((Ik, Tk) => {
              const ik = oX().setTimeout((() => {
                Tk(Qk(kk, "network-request-failed"))
              }), BX.get());
              oX()[fX] = () => {
                oX().clearTimeout(ik), delete oX()[fX];
                const Xk = oX().grecaptcha;
                if (!Xk || !VF(Xk)) return void Tk(Qk(kk, "internal-error"));
                const yk = Xk.render;
                Xk.render = (kk, Fk) => {
                  const Ik = yk(kk, Fk);
                  return this.counter++, Ik
                }, this.hostLanguage = Fk, Ik(Xk)
              };
              oF(`https://www.google.com/recaptcha/api.js??${(0,Xk.eb)({onload:fX,render:"explicit",hl:Fk})}`).catch((() => {
                clearTimeout(ik), Tk(Qk(kk, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(kk) {
            var Fk;
            return !!(null === (Fk = oX().grecaptcha) || void 0 === Fk ? void 0 : Fk.render) && (kk === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class YX {
          async load(kk) {
            return new cX(kk)
          }
          clearedOneInstance() {}
        }
        const AX = "recaptcha",
          gX = {
            theme: "light",
            type: "image"
          };
        class mX {
          constructor(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, gX),
              Ik = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = Fk, this.type = AX, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = pF(Ik), this.isInvisible = "invisible" === this.parameters.size, Sk("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const Xk = "string" === typeof kk ? document.getElementById(kk) : kk;
            Sk(Xk, this.auth, "argument-error"), this.container = Xk, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new YX : new dX, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const kk = await this.render(),
              Fk = this.getAssertedRecaptcha(),
              Ik = Fk.getResponse(kk);
            return Ik || new Promise((Ik => {
              const Xk = kk => {
                kk && (this.tokenChangeListeners.delete(Xk), Ik(kk))
              };
              this.tokenChangeListeners.add(Xk), this.isInvisible && Fk.execute(kk)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (kk) {
              return Promise.reject(kk)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((kk => {
              throw this.renderPromise = null, kk
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((kk => {
              this.container.removeChild(kk)
            }))
          }
          validateStartingState() {
            Sk(!this.parameters.sitekey, this.auth, "argument-error"), Sk(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), Sk("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(kk) {
            return Fk => {
              if (this.tokenChangeListeners.forEach((kk => kk(Fk))), "function" === typeof kk) kk(Fk);
              else if ("string" === typeof kk) {
                const Ik = oX()[kk];
                "function" === typeof Ik && Ik(Fk)
              }
            }
          }
          assertNotDestroyed() {
            Sk(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let kk = this.container;
              if (!this.isInvisible) {
                const Fk = document.createElement("div");
                kk.appendChild(Fk), kk = Fk
              }
              this.widgetId = this.getAssertedRecaptcha().render(kk, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            Sk(nk() && !vX(), this.auth, "internal-error"), await
            function() {
              let kk = null;
              return new Promise((Fk => {
                "complete" !== document.readyState ? (kk = () => Fk(), window.addEventListener("load", kk)) : Fk()
              })).catch((Fk => {
                throw kk && window.removeEventListener("load", kk), Fk
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const kk = await async function(kk) {
              return (await Nk(kk, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            Sk(kk, this.auth, "internal-error"), this.parameters.sitekey = kk
          }
          getAssertedRecaptcha() {
            return Sk(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class hX {
          constructor(kk, Fk) {
            this.verificationId = kk, this.onConfirmation = Fk
          }
          confirm(kk) {
            const Fk = rF._fromVerification(this.verificationId, kk);
            return this.onConfirmation(Fk)
          }
        }
        async function rX(kk, Fk, Ik) {
          const Tk = pF(kk),
            ik = await kT(Tk, Fk, (0, Xk.L)(Ik));
          return new hX(ik, (kk => sI(Tk, kk)))
        }
        async function DX(kk, Fk, Ik) {
          const Tk = (0, Xk.L)(kk);
          await PI(!1, Tk, "phone");
          const ik = await kT(Tk.auth, Fk, (0, Xk.L)(Ik));
          return new hX(ik, (kk => VI(Tk, kk)))
        }
        async function MX(kk, Fk, Ik) {
          const Tk = (0, Xk.L)(kk),
            ik = await kT(Tk.auth, Fk, (0, Xk.L)(Ik));
          return new hX(ik, (kk => zI(Tk, kk)))
        }
        async function kT(kk, Fk, Ik) {
          var Xk;
          const Tk = await Ik.verify();
          try {
            let ik;
            if (Sk("string" === typeof Tk, kk, "argument-error"), Sk(Ik.type === AX, kk, "argument-error"), ik = "string" === typeof Fk ? {
                phoneNumber: Fk
              } : Fk, "session" in ik) {
              const Fk = ik.session;
              if ("phoneNumber" in ik) {
                Sk("enroll" === Fk.type, kk, "internal-error");
                const Ik = await
                function(kk, Fk) {
                  return Nk(kk, "POST", "/v2/accounts/mfaEnrollment:start", Ck(kk, Fk))
                }(kk, {
                  idToken: Fk.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: ik.phoneNumber,
                    recaptchaToken: Tk
                  }
                });
                return Ik.phoneSessionInfo.sessionInfo
              } {
                Sk("signin" === Fk.type, kk, "internal-error");
                const Ik = (null === (Xk = ik.multiFactorHint) || void 0 === Xk ? void 0 : Xk.uid) || ik.multiFactorUid;
                Sk(Ik, kk, "missing-multi-factor-info");
                const yk = await
                function(kk, Fk) {
                  return Nk(kk, "POST", "/v2/accounts/mfaSignIn:start", Ck(kk, Fk))
                }(kk, {
                  mfaPendingCredential: Fk.credential,
                  mfaEnrollmentId: Ik,
                  phoneSignInInfo: {
                    recaptchaToken: Tk
                  }
                });
                return yk.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: Fk
              } = await async function(kk, Fk) {
                return Nk(kk, "POST", "/v1/accounts:sendVerificationCode", Ck(kk, Fk))
              }(kk, {
                phoneNumber: ik.phoneNumber,
                recaptchaToken: Tk
              });
              return Fk
            }
          } finally {
            Ik._reset()
          }
        }
        async function FT(kk, Fk) {
          await xI((0, Xk.L)(kk), Fk)
        }
        class IT {
          constructor(kk) {
            this.providerId = IT.PROVIDER_ID, this.auth = pF(kk)
          }
          verifyPhoneNumber(kk, Fk) {
            return kT(this.auth, kk, (0, Xk.L)(Fk))
          }
          static credential(kk, Fk) {
            return rF._fromVerification(kk, Fk)
          }
          static credentialFromResult(kk) {
            const Fk = kk;
            return IT.credentialFromTaggedObject(Fk)
          }
          static credentialFromError(kk) {
            return IT.credentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromTaggedObject(kk) {
            let {
              _tokenResponse: Fk
            } = kk;
            if (!Fk) return null;
            const {
              phoneNumber: Ik,
              temporaryProof: Xk
            } = Fk;
            return Ik && Xk ? rF._fromTokenResponse(Ik, Xk) : null
          }
        }

        function XT(kk, Fk) {
          return Fk ? yF(Fk) : (Sk(kk._popupRedirectResolver, kk, "argument-error"), kk._popupRedirectResolver)
        }
        IT.PROVIDER_ID = "phone", IT.PHONE_SIGN_IN_METHOD = "phone";
        class TT extends NF {
          constructor(kk) {
            super("custom", "custom"), this.params = kk
          }
          _getIdTokenResponse(kk) {
            return gF(kk, this._buildIdpRequest())
          }
          _linkToIdToken(kk, Fk) {
            return gF(kk, this._buildIdpRequest(Fk))
          }
          _getReauthenticationResolver(kk) {
            return gF(kk, this._buildIdpRequest())
          }
          _buildIdpRequest(kk) {
            const Fk = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return kk && (Fk.idToken = kk), Fk
          }
        }

        function iT(kk) {
          return QI(kk.auth, new TT(kk), kk.bypassAuthState)
        }

        function yT(kk) {
          const {
            auth: Fk,
            user: Ik
          } = kk;
          return Sk(Ik, Fk, "internal-error"), KI(Ik, new TT(kk), kk.bypassAuthState)
        }
        async function lT(kk) {
          const {
            auth: Fk,
            user: Ik
          } = kk;
          return Sk(Ik, Fk, "internal-error"), xI(Ik, new TT(kk), kk.bypassAuthState)
        }
        class aT {
          constructor(kk, Fk, Ik, Xk) {
            let Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = kk, this.resolver = Ik, this.user = Xk, this.bypassAuthState = Tk, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(Fk) ? Fk : [Fk]
          }
          execute() {
            return new Promise((async (kk, Fk) => {
              this.pendingPromise = {
                resolve: kk,
                reject: Fk
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (Ik) {
                this.reject(Ik)
              }
            }))
          }
          async onAuthEvent(kk) {
            const {
              urlResponse: Fk,
              sessionId: Ik,
              postBody: Xk,
              tenantId: Tk,
              error: ik,
              type: yk
            } = kk;
            if (ik) return void this.reject(ik);
            const lk = {
              auth: this.auth,
              requestUri: Fk,
              sessionId: Ik,
              tenantId: Tk || void 0,
              postBody: Xk || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(yk)(lk))
            } catch (ak) {
              this.reject(ak)
            }
          }
          onError(kk) {
            this.reject(kk)
          }
          getIdpTask(kk) {
            switch (kk) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return iT;
              case "linkViaPopup":
              case "linkViaRedirect":
                return lT;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return yT;
              default:
                Kk(this.auth, "internal-error")
            }
          }
          resolve(kk) {
            Ek(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(kk), this.unregisterAndCleanUp()
          }
          reject(kk) {
            Ek(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(kk), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const qT = new pk(2e3, 1e4);
        async function LT(kk, Fk, Ik) {
          const Xk = pF(kk);
          Vk(kk, Fk, FI);
          const Tk = XT(Xk, Ik);
          return new jT(Xk, "signInViaPopup", Fk, Tk).executeNotNull()
        }
        async function tT(kk, Fk, Ik) {
          const Tk = (0, Xk.L)(kk);
          Vk(Tk.auth, Fk, FI);
          const ik = XT(Tk.auth, Ik);
          return new jT(Tk.auth, "reauthViaPopup", Fk, ik, Tk).executeNotNull()
        }
        async function ZT(kk, Fk, Ik) {
          const Tk = (0, Xk.L)(kk);
          Vk(Tk.auth, Fk, FI);
          const ik = XT(Tk.auth, Ik);
          return new jT(Tk.auth, "linkViaPopup", Fk, ik, Tk).executeNotNull()
        }
        class jT extends aT {
          constructor(kk, Fk, Ik, Xk, Tk) {
            super(kk, Fk, Xk, Tk), this.provider = Ik, this.authWindow = null, this.pollId = null, jT.currentPopupAction && jT.currentPopupAction.cancel(), jT.currentPopupAction = this
          }
          async executeNotNull() {
            const kk = await this.execute();
            return Sk(kk, this.auth, "internal-error"), kk
          }
          async onExecution() {
            Ek(1 === this.filter.length, "Popup operations only handle one event");
            const kk = zX();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], kk), this.authWindow.associatedEvent = kk, this.resolver._originValidation(this.auth).catch((kk => {
              this.reject(kk)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (kk => {
              kk || this.reject(Qk(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var kk;
            return (null === (kk = this.authWindow) || void 0 === kk ? void 0 : kk.associatedEvent) || null
          }
          cancel() {
            this.reject(Qk(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, jT.currentPopupAction = null
          }
          pollUserCancellation() {
            const kk = () => {
              var Fk, Ik;
              (null === (Ik = null === (Fk = this.authWindow) || void 0 === Fk ? void 0 : Fk.window) || void 0 === Ik ? void 0 : Ik.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(Qk(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(kk, qT.get())
            };
            kk()
          }
        }
        jT.currentPopupAction = null;
        const eT = "pendingRedirect",
          wT = new Map;
        class HT extends aT {
          constructor(kk, Fk) {
            super(kk, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], Fk, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let kk = wT.get(this.auth._key());
            if (!kk) {
              try {
                const Fk = await async function(kk, Fk) {
                  const Ik = KT(Fk),
                    Xk = PT(kk);
                  if (!await Xk._isAvailable()) return !1;
                  const Tk = "true" === await Xk._get(Ik);
                  return await Xk._remove(Ik), Tk
                }(this.resolver, this.auth) ? await super.execute() : null;
                kk = () => Promise.resolve(Fk)
              } catch (Fk) {
                kk = () => Promise.reject(Fk)
              }
              wT.set(this.auth._key(), kk)
            }
            return this.bypassAuthState || wT.set(this.auth._key(), (() => Promise.resolve(null))), kk()
          }
          async onAuthEvent(kk) {
            if ("signInViaRedirect" === kk.type) return super.onAuthEvent(kk);
            if ("unknown" !== kk.type) {
              if (kk.eventId) {
                const Fk = await this.auth._redirectUserForId(kk.eventId);
                if (Fk) return this.user = Fk, super.onAuthEvent(kk);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function JT(kk, Fk) {
          return PT(kk)._set(KT(Fk), "true")
        }

        function xT(kk, Fk) {
          wT.set(kk._key(), Fk)
        }

        function PT(kk) {
          return yF(kk._redirectPersistence)
        }

        function KT(kk) {
          return qF(eT, kk.config.apiKey, kk.name)
        }

        function QT(kk, Fk, Ik) {
          return async function(kk, Fk, Ik) {
            const Xk = pF(kk);
            Vk(kk, Fk, FI), await Xk._initializationPromise;
            const Tk = XT(Xk, Ik);
            return await JT(Tk, Xk), Tk._openRedirect(Xk, Fk, "signInViaRedirect")
          }(kk, Fk, Ik)
        }

        function sT(kk, Fk, Ik) {
          return async function(kk, Fk, Ik) {
            const Tk = (0, Xk.L)(kk);
            Vk(Tk.auth, Fk, FI), await Tk.auth._initializationPromise;
            const ik = XT(Tk.auth, Ik);
            await JT(ik, Tk.auth);
            const yk = await oT(Tk);
            return ik._openRedirect(Tk.auth, Fk, "reauthViaRedirect", yk)
          }(kk, Fk, Ik)
        }

        function VT(kk, Fk, Ik) {
          return async function(kk, Fk, Ik) {
            const Tk = (0, Xk.L)(kk);
            Vk(Tk.auth, Fk, FI), await Tk.auth._initializationPromise;
            const ik = XT(Tk.auth, Ik);
            await PI(!1, Tk, Fk.providerId), await JT(ik, Tk.auth);
            const yk = await oT(Tk);
            return ik._openRedirect(Tk.auth, Fk, "linkViaRedirect", yk)
          }(kk, Fk, Ik)
        }
        async function zT(kk, Fk) {
          return await pF(kk)._initializationPromise, ST(kk, Fk, !1)
        }
        async function ST(kk, Fk) {
          let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Xk = pF(kk),
            Tk = XT(Xk, Fk),
            ik = new HT(Xk, Tk, Ik),
            yk = await ik.execute();
          return yk && !Ik && (delete yk.user._redirectEventId, await Xk._persistUserIfCurrent(yk.user), await Xk._setRedirectUser(null, Fk)), yk
        }
        async function oT(kk) {
          const Fk = zX(`${kk.uid}:::`);
          return kk._redirectEventId = Fk, await kk.auth._setRedirectUser(kk), await kk.auth._persistUserIfCurrent(kk), Fk
        }
        class vT {
          constructor(kk) {
            this.auth = kk, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(kk) {
            this.consumers.add(kk), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, kk) && (this.sendToConsumer(this.queuedRedirectEvent, kk), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(kk) {
            this.consumers.delete(kk)
          }
          onEvent(kk) {
            if (this.hasEventBeenHandled(kk)) return !1;
            let Fk = !1;
            return this.consumers.forEach((Ik => {
              this.isEventForConsumer(kk, Ik) && (Fk = !0, this.sendToConsumer(kk, Ik), this.saveEventToCache(kk))
            })), this.hasHandledPotentialRedirect || ! function(kk) {
              switch (kk.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return OT(kk);
                default:
                  return !1
              }
            }(kk) || (this.hasHandledPotentialRedirect = !0, Fk || (this.queuedRedirectEvent = kk, Fk = !0)), Fk
          }
          sendToConsumer(kk, Fk) {
            var Ik;
            if (kk.error && !OT(kk)) {
              const Xk = (null === (Ik = kk.error.code) || void 0 === Ik ? void 0 : Ik.split("auth/")[1]) || "internal-error";
              Fk.onError(Qk(this.auth, Xk))
            } else Fk.onAuthEvent(kk)
          }
          isEventForConsumer(kk, Fk) {
            const Ik = null === Fk.eventId || !!kk.eventId && kk.eventId === Fk.eventId;
            return Fk.filter.includes(kk.type) && Ik
          }
          hasEventBeenHandled(kk) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(ET(kk))
          }
          saveEventToCache(kk) {
            this.cachedEventUids.add(ET(kk)), this.lastProcessedEventTime = Date.now()
          }
        }

        function ET(kk) {
          return [kk.type, kk.eventId, kk.sessionId, kk.tenantId].filter((kk => kk)).join("-")
        }

        function OT(kk) {
          let {
            type: Fk,
            error: Ik
          } = kk;
          return "unknown" === Fk && "auth/no-auth-event" === (null === Ik || void 0 === Ik ? void 0 : Ik.code)
        }
        const nT = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          GT = /^https?/;
        async function pT(kk) {
          if (kk.config.emulator) return;
          const {
            authorizedDomains: Fk
          } = await async function(kk) {
            return Nk(kk, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(kk);
          for (const Xk of Fk) try {
            if (uT(Xk)) return
          } catch (Ik) {}
          Kk(kk, "unauthorized-domain")
        }

        function uT(kk) {
          const Fk = Ok(),
            {
              protocol: Ik,
              hostname: Xk
            } = new URL(Fk);
          if (kk.startsWith("chrome-extension://")) {
            const Tk = new URL(kk);
            return "" === Tk.hostname && "" === Xk ? "chrome-extension:" === Ik && kk.replace("chrome-extension://", "") === Fk.replace("chrome-extension://", "") : "chrome-extension:" === Ik && Tk.hostname === Xk
          }
          if (!GT.test(Ik)) return !1;
          if (nT.test(kk)) return Xk === kk;
          const Tk = kk.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + Tk + "|" + Tk + ")$", "i").test(Xk)
        }
        const bT = new pk(3e4, 6e4);

        function RT() {
          const kk = oX().___jsl;
          if (null === kk || void 0 === kk ? void 0 : kk.H)
            for (const Fk of Object.keys(kk.H))
              if (kk.H[Fk].r = kk.H[Fk].r || [], kk.H[Fk].L = kk.H[Fk].L || [], kk.H[Fk].r = [...kk.H[Fk].L], kk.CP)
                for (let Ik = 0; Ik < kk.CP.length; Ik++) kk.CP[Ik] = null
        }
        let UT = null;

        function CT(kk) {
          return UT = UT || function(kk) {
            return new Promise(((Fk, Ik) => {
              var Xk, Tk, ik;

              function yk() {
                RT(), gapi.load("gapi.iframes", {
                  callback: () => {
                    Fk(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    RT(), Ik(Qk(kk, "network-request-failed"))
                  },
                  timeout: bT.get()
                })
              }
              if (null === (Tk = null === (Xk = oX().gapi) || void 0 === Xk ? void 0 : Xk.iframes) || void 0 === Tk ? void 0 : Tk.Iframe) Fk(gapi.iframes.getContext());
              else {
                if (!(null === (ik = oX().gapi) || void 0 === ik ? void 0 : ik.load)) {
                  const Fk = vF("iframefcb");
                  return oX()[Fk] = () => {
                    gapi.load ? yk() : Ik(Qk(kk, "network-request-failed"))
                  }, oF(`https://apis.google.com/js/api.js?onload=${Fk}`).catch((kk => Ik(kk)))
                }
                yk()
              }
            })).catch((kk => {
              throw UT = null, kk
            }))
          }(kk), UT
        }
        const NT = new pk(5e3, 15e3),
          cT = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          WT = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function fT(kk) {
          const Fk = kk.config;
          Sk(Fk.authDomain, kk, "auth-domain-config-required");
          const Ik = Fk.emulator ? uk(Fk, "emulator/auth/iframe") : `https://${kk.config.authDomain}/__/auth/iframe`,
            ik = {
              apiKey: Fk.apiKey,
              appName: kk.name,
              v: Tk.i
            },
            yk = WT.get(kk.config.apiHost);
          yk && (ik.eid = yk);
          const lk = kk._getFrameworks();
          return lk.length && (ik.fw = lk.join(",")), `${Ik}?${(0,Xk.eb)(ik).slice(1)}`
        }
        const BT = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class dT {
          constructor(kk) {
            this.window = kk, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (kk) {}
          }
        }

        function YT(kk, Fk, Ik) {
          let Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const yk = Math.max((window.screen.availHeight - ik) / 2, 0).toString(),
            lk = Math.max((window.screen.availWidth - Tk) / 2, 0).toString();
          let ak = "";
          const qk = Object.assign(Object.assign({}, BT), {
              width: Tk.toString(),
              height: ik.toString(),
              top: yk,
              left: lk
            }),
            Lk = (0, Xk.O)().toLowerCase();
          Ik && (ak = eF(Lk) ? "_blank" : Ik), ZF(Lk) && (Fk = Fk || "http://localhost", qk.scrollbars = "yes");
          const tk = Object.entries(qk).reduce(((kk, Fk) => {
            let [Ik, Xk] = Fk;
            return `${kk}${Ik}=${Xk},`
          }), "");
          if (function() {
              var kk;
              return PF(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Xk.O)()) && !!(null === (kk = window.navigator) || void 0 === kk ? void 0 : kk.standalone)
            }(Lk) && "_self" !== ak) return function(kk, Fk) {
            const Ik = document.createElement("a");
            Ik.href = kk, Ik.target = Fk;
            const Xk = document.createEvent("MouseEvent");
            Xk.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), Ik.dispatchEvent(Xk)
          }(Fk || "", ak), new dT(null);
          const Zk = window.open(Fk || "", ak, tk);
          Sk(Zk, kk, "popup-blocked");
          try {
            Zk.focus()
          } catch (jk) {}
          return new dT(Zk)
        }
        const AT = "__/auth/handler",
          gT = "emulator/auth/handler",
          mT = encodeURIComponent("fac");
        async function hT(kk, Fk, Ik, ik, yk, lk) {
            Sk(kk.config.authDomain, kk, "auth-domain-config-required"), Sk(kk.config.apiKey, kk, "invalid-api-key");
            const ak = {
              apiKey: kk.config.apiKey,
              appName: kk.name,
              authType: Ik,
              redirectUrl: ik,
              v: Tk.i,
              eventId: yk
            };
            if (Fk instanceof FI) {
              Fk.setDefaultLanguage(kk.languageCode), ak.providerId = Fk.providerId || "", (0, Xk.T)(Fk.getCustomParameters()) || (ak.customParameters = JSON.stringify(Fk.getCustomParameters()));
              for (const [kk, Fk] of Object.entries(lk || {})) ak[kk] = Fk
            }
            if (Fk instanceof II) {
              const kk = Fk.getScopes().filter((kk => "" !== kk));
              kk.length > 0 && (ak.scopes = kk.join(","))
            }
            kk.tenantId && (ak.tid = kk.tenantId);
            const qk = ak;
            for (const Xk of Object.keys(qk)) void 0 === qk[Xk] && delete qk[Xk];
            const Lk = await kk._getAppCheckToken(),
              tk = Lk ? `#${mT}=${encodeURIComponent(Lk)}` : "";
            return `${function(kk){let{config:Fk}=kk;if(!Fk.emulator)return`
            https: //${Fk.authDomain}/${AT}`;return uk(Fk,gT)}(kk)}?${(0,Xk.eb)(qk).slice(1)}${tk}`}const rT="webStorageSupport";const DT=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sX,this._completeRedirectFn=ST,this._overrideRedirectResult=xT}async _openPopup(kk,Fk,Ik,Xk){var Tk;Ek(null===(Tk=this.eventManagers[kk._key()])||void 0===Tk?void 0:Tk.manager,"_initialize() not called before _openPopup()");return YT(kk,await hT(kk,Fk,Ik,Ok(),Xk),zX())}async _openRedirect(kk,Fk,Ik,Xk){await this._originValidation(kk);return function(kk){oX().location.href=kk}(await hT(kk,Fk,Ik,Ok(),Xk)),new Promise((()=>{}))}_initialize(kk){const Fk=kk._key();if(this.eventManagers[Fk]){const{manager:kk,promise:Ik}=this.eventManagers[Fk];return kk?Promise.resolve(kk):(Ek(Ik,"If manager is not set, promise should be"),Ik)}const Ik=this.initAndGetManager(kk);return this.eventManagers[Fk]={promise:Ik},Ik.catch((()=>{delete this.eventManagers[Fk]})),Ik}async initAndGetManager(kk){const Fk=await async function(kk){const Fk=await CT(kk),Ik=oX().gapi;return Sk(Ik,kk,"internal-error"),Fk.open({where:document.body,url:fT(kk),messageHandlersFilter:Ik.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cT,dontclear:!0},(Fk=>new Promise((async(Ik,Xk)=>{await Fk.restyle({setHideOnLeave:!1});const Tk=Qk(kk,"network-request-failed"),ik=oX().setTimeout((()=>{Xk(Tk)}),NT.get());function yk(){oX().clearTimeout(ik),Ik(Fk)}Fk.ping(yk).then(yk,(()=>{Xk(Tk)}))}))))}(kk),Ik=new vT(kk);return Fk.register("authEvent",(Fk=>{Sk(null===Fk||void 0===Fk?void 0:Fk.authEvent,kk,"invalid-auth-event");return{status:Ik.onEvent(Fk.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[kk._key()]={manager:Ik},this.iframes[kk._key()]=Fk,Ik}_isIframeWebStorageSupported(kk,Fk){this.iframes[kk._key()].send(rT,{type:rT},(Ik=>{var Xk;const Tk=null===(Xk=null===Ik||void 0===Ik?void 0:Ik[0])||void 0===Xk?void 0:Xk[rT];void 0!==Tk&&Fk(!!Tk),Kk(kk,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(kk){const Fk=kk._key();return this.originValidationPromises[Fk]||(this.originValidationPromises[Fk]=pT(kk)),this.originValidationPromises[Fk]}get _shouldInitProactively(){return KF()||jF()||PF()}};class MT{constructor(kk){this.factorId=kk}_process(kk,Fk,Ik){switch(Fk.type){case"enroll":return this._finalizeEnroll(kk,Fk.credential,Ik);case"signin":return this._finalizeSignIn(kk,Fk.credential);default:return vk("unexpected MultiFactorSessionType")}}}class ki extends MT{constructor(kk){super("phone"),this.credential=kk}static _fromCredential(kk){return new ki(kk)}_finalizeEnroll(kk,Fk,Ik){return function(kk,Fk){return Nk(kk,"POST","/v2/accounts/mfaEnrollment:finalize",Ck(kk,Fk))}(kk,{idToken:Fk,displayName:Ik,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(kk,Fk){return function(kk,Fk){return Nk(kk,"POST","/v2/accounts/mfaSignIn:finalize",Ck(kk,Fk))}(kk,{mfaPendingCredential:Fk,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Fi{constructor(){}static assertion(kk){return ki._fromCredential(kk)}}Fi.FACTOR_ID="phone";class Ii{static assertionForEnrollment(kk,Fk){return Xi._fromSecret(kk,Fk)}static assertionForSignIn(kk,Fk){return Xi._fromEnrollmentId(kk,Fk)}static async generateSecret(kk){const Fk=kk;Sk("undefined"!==typeof Fk.auth,"internal-error");const Ik=await(Xk=Fk.auth,Tk={idToken:Fk.credential,totpEnrollmentInfo:{}},Nk(Xk,"POST","/v2/accounts/mfaEnrollment:start",Ck(Xk,Tk)));var Xk,Tk;return Ti._fromStartTotpMfaEnrollmentResponse(Ik,Fk.auth)}}Ii.FACTOR_ID="totp";class Xi extends MT{constructor(kk,Fk,Ik){super("totp"),this.otp=kk,this.enrollmentId=Fk,this.secret=Ik}static _fromSecret(kk,Fk){return new Xi(Fk,void 0,kk)}static _fromEnrollmentId(kk,Fk){return new Xi(Fk,kk)}async _finalizeEnroll(kk,Fk,Ik){return Sk("undefined"!==typeof this.secret,kk,"argument-error"),function(kk,Fk){return Nk(kk,"POST","/v2/accounts/mfaEnrollment:finalize",Ck(kk,Fk))}(kk,{idToken:Fk,displayName:Ik,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(kk,Fk){Sk(void 0!==this.enrollmentId&&void 0!==this.otp,kk,"argument-error");const Ik={verificationCode:this.otp};return function(kk,Fk){return Nk(kk,"POST","/v2/accounts/mfaSignIn:finalize",Ck(kk,Fk))}(kk,{mfaPendingCredential:Fk,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:Ik})}}class Ti{constructor(kk,Fk,Ik,Xk,Tk,ik,yk){this.sessionInfo=ik,this.auth=yk,this.secretKey=kk,this.hashingAlgorithm=Fk,this.codeLength=Ik,this.codeIntervalSeconds=Xk,this.enrollmentCompletionDeadline=Tk}static _fromStartTotpMfaEnrollmentResponse(kk,Fk){return new Ti(kk.totpSessionInfo.sharedSecretKey,kk.totpSessionInfo.hashingAlgorithm,kk.totpSessionInfo.verificationCodeLength,kk.totpSessionInfo.periodSec,new Date(kk.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),kk.totpSessionInfo.sessionInfo,Fk)}_makeTotpVerificationInfo(kk){return{sessionInfo:this.sessionInfo,verificationCode:kk}}generateQrCodeUrl(kk,Fk){var Ik;let Xk=!1;return(ii(kk)||ii(Fk))&&(Xk=!0),Xk&&(ii(kk)&&(kk=(null===(Ik=this.auth.currentUser)||void 0===Ik?void 0:Ik.email)||"unknownuser"),ii(Fk)&&(Fk=this.auth.name)),`otpauth://totp/${Fk}:${kk}?secret=${this.secretKey}&issuer=${Fk}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function ii(kk){return"undefined"===typeof kk||0===(null===kk||void 0===kk?void 0:kk.length)}var yi="@firebase/auth",li="0.23.2";class ai{constructor(kk){this.auth=kk,this.internalListeners=new Map}getUid(){var kk;return this.assertAuthConfigured(),(null===(kk=this.auth.currentUser)||void 0===kk?void 0:kk.uid)||null}async getToken(kk){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(kk)}}addAuthTokenListener(kk){if(this.assertAuthConfigured(),this.internalListeners.has(kk))return;const Fk=this.auth.onIdTokenChanged((Fk=>{kk((null===Fk||void 0===Fk?void 0:Fk.stsTokenManager.accessToken)||null)}));this.internalListeners.set(kk,Fk),this.updateProactiveRefresh()}removeAuthTokenListener(kk){this.assertAuthConfigured();const Fk=this.internalListeners.get(kk);Fk&&(this.internalListeners.delete(kk),Fk(),this.updateProactiveRefresh())}assertAuthConfigured(){Sk(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const qi=(0,Xk.J)("authIdTokenMaxAge")||300;let Li=null;const ti=kk=>async Fk=>{const Ik=Fk&&await Fk.getIdTokenResult(),Xk=Ik&&((new Date).getTime()-Date.parse(Ik.issuedAtTime))/1e3;if(Xk&&Xk>qi)return;const Tk=null===Ik||void 0===Ik?void 0:Ik.token;Li!==Tk&&(Li=Tk,await fetch(kk,{method:Tk?"POST":"DELETE",headers:Tk?{Authorization:`Bearer ${Tk}`}:{}}))};function Zi(){let kk=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,Tk.M)();const Fk=(0,Tk.A)(kk,"auth");if(Fk.isInitialized())return Fk.getImmediate();const Ik=bF(kk,{popupRedirectResolver:DT,persistence:[CX,KX,sX]}),ik=(0,Xk.J)("authTokenSyncURL");if(ik){const kk=ti(ik);iX(Ik,kk,(()=>kk(Ik.currentUser))),TX(Ik,(Fk=>kk(Fk)))}const yk=(0,Xk.G)("auth");return yk&&RF(Ik,`http://${yk}`),Ik}var ji;ji="Browser",(0,Tk.C)(new lk.g("auth",((kk,Fk)=>{let{options:Ik}=Fk;const Xk=kk.getProvider("app").getImmediate(),Tk=kk.getProvider("heartbeat"),ik=kk.getProvider("app-check-internal"),{apiKey:yk,authDomain:lk}=Xk.options;Sk(yk&&!yk.includes(":"),"invalid-api-key",{appName:Xk.name});const ak={apiKey:yk,authDomain:lk,clientPlatform:ji,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:QF(ji)},qk=new GF(Xk,Tk,ik,ak);return function(kk,Fk){const Ik=(null===Fk||void 0===Fk?void 0:Fk.persistence)||[],Xk=(Array.isArray(Ik)?Ik:[Ik]).map(yF);(null===Fk||void 0===Fk?void 0:Fk.errorMap)&&kk._updateErrorMap(Fk.errorMap),kk._initializeWithPersistence(Xk,null===Fk||void 0===Fk?void 0:Fk.popupRedirectResolver)}(qk,Ik),qk}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((kk,Fk,Ik)=>{kk.getProvider("auth-internal").initialize()}))),(0,Tk.C)(new lk.g("auth-internal",(kk=>(kk=>new ai(kk))(pF(kk.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,Tk.W)(yi,li,function(kk){switch(kk){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ji)),(0,Tk.W)(yi,li,"esm2017")}};Object.freeze(modules);for(const kk in modules)Object.freeze(modules[kk]);