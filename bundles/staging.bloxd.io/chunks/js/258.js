/*! For license information please see 6ndy1f.258.8821a7e7.chunk.js.LICENSE.txt */
export const id = 258;
export const ids = [258];
export const modules = {
    39943: (kk, Fk, Bk) => {
        Bk.r(Fk), Bk.d(Fk, {
          ActionCodeOperation: () => Jk,
          ActionCodeURL: () => IF,
          AuthCredential: () => zF,
          AuthErrorCodes: () => mk,
          EmailAuthCredential: () => KF,
          EmailAuthProvider: () => kB,
          FacebookAuthProvider: () => tB,
          FactorId: () => wk,
          GithubAuthProvider: () => XB,
          GoogleAuthProvider: () => aB,
          OAuthCredential: () => jF,
          OAuthProvider: () => RB,
          OperationType: () => Vk,
          PhoneAuthCredential: () => nF,
          PhoneAuthProvider: () => Bt,
          PhoneMultiFactorGenerator: () => Ba,
          ProviderId: () => dk,
          RecaptchaVerifier: () => jR,
          SAMLAuthProvider: () => wB,
          SignInMethod: () => sk,
          TotpMultiFactorGenerator: () => Ra,
          TotpSecret: () => aa,
          TwitterAuthProvider: () => dB,
          applyActionCode: () => UB,
          beforeAuthStateChanged: () => aR,
          browserLocalPersistence: () => iR,
          browserPopupRedirectResolver: () => Qt,
          browserSessionPersistence: () => oR,
          checkActionCode: () => cB,
          confirmPasswordReset: () => gB,
          connectAuthEmulator: () => TF,
          createUserWithEmailAndPassword: () => TB,
          debugErrorMap: () => ek,
          deleteUser: () => sR,
          fetchSignInMethodsForEmail: () => hB,
          getAdditionalUserInfo: () => FR,
          getAuth: () => Aa,
          getIdToken: () => Kk,
          getIdTokenResult: () => xk,
          getMultiFactorResolver: () => AR,
          getRedirectResult: () => Et,
          inMemoryPersistence: () => wF,
          indexedDBLocalPersistence: () => DR,
          initializeAuth: () => GF,
          initializeRecaptchaConfig: () => RR,
          isSignInWithEmailLink: () => zB,
          linkWithCredential: () => LB,
          linkWithPhoneNumber: () => IR,
          linkWithPopup: () => At,
          linkWithRedirect: () => Ot,
          multiFactor: () => fR,
          onAuthStateChanged: () => XR,
          onIdTokenChanged: () => tR,
          parseActionCodeURL: () => QF,
          prodErrorMap: () => yk,
          reauthenticateWithCredential: () => OB,
          reauthenticateWithPhoneNumber: () => QR,
          reauthenticateWithPopup: () => Jt,
          reauthenticateWithRedirect: () => Lt,
          reload: () => FF,
          sendEmailVerification: () => qB,
          sendPasswordResetEmail: () => MB,
          sendSignInLinkToEmail: () => DB,
          setPersistence: () => BR,
          signInAnonymously: () => AB,
          signInWithCredential: () => oB,
          signInWithCustomToken: () => EB,
          signInWithEmailAndPassword: () => rB,
          signInWithEmailLink: () => PB,
          signInWithPhoneNumber: () => nR,
          signInWithPopup: () => Vt,
          signInWithRedirect: () => ot,
          signOut: () => dR,
          unlink: () => mB,
          updateCurrentUser: () => wR,
          updateEmail: () => pB,
          updatePassword: () => KB,
          updatePhoneNumber: () => Ft,
          updateProfile: () => ZB,
          useDeviceLanguage: () => bR,
          verifyBeforeUpdateEmail: () => CB,
          verifyPasswordResetCode: () => GB
        });
        var Rk = Bk(39927),
          tk = Bk(39919);

        function ak(kk, Fk) {
          var Bk = {};
          for (var Rk in kk) Object.prototype.hasOwnProperty.call(kk, Rk) && Fk.indexOf(Rk) < 0 && (Bk[Rk] = kk[Rk]);
          if (null != kk && "function" === typeof Object.getOwnPropertySymbols) {
            var tk = 0;
            for (Rk = Object.getOwnPropertySymbols(kk); tk < Rk.length; tk++) Fk.indexOf(Rk[tk]) < 0 && Object.prototype.propertyIsEnumerable.call(kk, Rk[tk]) && (Bk[Rk[tk]] = kk[Rk[tk]])
          }
          return Bk
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var Xk = Bk(39929),
          bk = Bk(39925);
        const wk = {
            PHONE: "phone",
            TOTP: "totp"
          },
          dk = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          sk = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Vk = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          Jk = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function Ak() {
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
          yk = Ak,
          fk = new Rk.h("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          mk = {
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
          Wk = new Xk.d("@firebase/auth");

        function vk(kk) {
          if (Wk.logLevel <= Xk.b.ERROR) {
            for (var Fk = arguments.length, Bk = new Array(Fk > 1 ? Fk - 1 : 0), Rk = 1; Rk < Fk; Rk++) Bk[Rk - 1] = arguments[Rk];
            Wk.error(`Auth (${tk.g}): ${kk}`, ...Bk)
          }
        }

        function ik(kk) {
          for (var Fk = arguments.length, Bk = new Array(Fk > 1 ? Fk - 1 : 0), Rk = 1; Rk < Fk; Rk++) Bk[Rk - 1] = arguments[Rk];
          throw Ek(kk, ...Bk)
        }

        function Yk(kk) {
          for (var Fk = arguments.length, Bk = new Array(Fk > 1 ? Fk - 1 : 0), Rk = 1; Rk < Fk; Rk++) Bk[Rk - 1] = arguments[Rk];
          return Ek(kk, ...Bk)
        }

        function Lk(kk, Fk, Bk) {
          const tk = Object.assign(Object.assign({}, yk()), {
            [Fk]: Bk
          });
          return new Rk.h("auth", "Firebase", tk).create(Fk, {
            appName: kk.name
          })
        }

        function Ok(kk, Fk, Bk) {
          if (!(Fk instanceof Bk)) throw Bk.name !== Fk.constructor.name && ik(kk, "argument-error"), Lk(kk, "argument-error", `Type of ${Fk.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function Ek(kk) {
          for (var Fk = arguments.length, Bk = new Array(Fk > 1 ? Fk - 1 : 0), Rk = 1; Rk < Fk; Rk++) Bk[Rk - 1] = arguments[Rk];
          if ("string" !== typeof kk) {
            const Fk = Bk[0],
              Rk = [...Bk.slice(1)];
            return Rk[0] && (Rk[0].appName = kk.name), kk._errorFactory.create(Fk, ...Rk)
          }
          return fk.create(kk, ...Bk)
        }

        function Sk(kk, Fk) {
          if (!kk) {
            for (var Bk = arguments.length, Rk = new Array(Bk > 2 ? Bk - 2 : 0), tk = 2; tk < Bk; tk++) Rk[tk - 2] = arguments[tk];
            throw Ek(Fk, ...Rk)
          }
        }

        function Nk(kk) {
          const Fk = "INTERNAL ASSERTION FAILED: " + kk;
          throw vk(Fk), new Error(Fk)
        }

        function Hk(kk, Fk) {
          kk || Nk(Fk)
        }

        function uk() {
          var kk;
          return "undefined" !== typeof self && (null === (kk = self.location) || void 0 === kk ? void 0 : kk.href) || ""
        }

        function Mk() {
          return "http:" === gk() || "https:" === gk()
        }

        function gk() {
          var kk;
          return "undefined" !== typeof self && (null === (kk = self.location) || void 0 === kk ? void 0 : kk.protocol) || null
        }
        class Uk {
          constructor(kk, Fk) {
            this.shortDelay = kk, this.longDelay = Fk, Hk(Fk > kk, "Short delay should be less than long delay!"), this.isMobile = (0, Rk._)() || (0, Rk.$)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (Mk() || (0, Rk.S)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function ck(kk, Fk) {
          Hk(kk.emulator, "Emulator should always be set here");
          const {
            url: Bk
          } = kk.emulator;
          return Fk ? `${Bk}${Fk.startsWith("/")?Fk.slice(1):Fk}` : Bk
        }
        class Gk {
          static initialize(kk, Fk, Bk) {
            this.fetchImpl = kk, Fk && (this.headersImpl = Fk), Bk && (this.responseImpl = Bk)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void Nk("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void Nk("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void Nk("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const Tk = {
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
          rk = new Uk(3e4, 6e4);

        function Dk(kk, Fk) {
          return kk.tenantId && !Fk.tenantId ? Object.assign(Object.assign({}, Fk), {
            tenantId: kk.tenantId
          }) : Fk
        }
        async function zk(kk, Fk, Bk, tk) {
          return Pk(kk, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let ak = {},
              Xk = {};
            tk && ("GET" === Fk ? Xk = tk : ak = {
              body: JSON.stringify(tk)
            });
            const bk = (0, Rk.db)(Object.assign({
                key: kk.config.apiKey
              }, Xk)).slice(1),
              wk = await kk._getAdditionalHeaders();
            return wk["Content-Type"] = "application/json", kk.languageCode && (wk["X-Firebase-Locale"] = kk.languageCode), Gk.fetch()(qk(kk, kk.config.apiHost, Bk, bk), Object.assign({
              method: Fk,
              headers: wk,
              referrerPolicy: "no-referrer"
            }, ak))
          }))
        }
        async function Pk(kk, Fk, Bk) {
          kk._canInitEmulator = !1;
          const tk = Object.assign(Object.assign({}, Tk), Fk);
          try {
            const Fk = new Ck(kk),
              Rk = await Promise.race([Bk(), Fk.promise]);
            Fk.clearNetworkTimeout();
            const ak = await Rk.json();
            if ("needConfirmation" in ak) throw Zk(kk, "account-exists-with-different-credential", ak);
            if (Rk.ok && !("errorMessage" in ak)) return ak;
            {
              const Fk = Rk.ok ? ak.errorMessage : ak.error.message,
                [Bk, Xk] = Fk.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === Bk) throw Zk(kk, "credential-already-in-use", ak);
              if ("EMAIL_EXISTS" === Bk) throw Zk(kk, "email-already-in-use", ak);
              if ("USER_DISABLED" === Bk) throw Zk(kk, "user-disabled", ak);
              const bk = tk[Bk] || Bk.toLowerCase().replace(/[_\s]+/g, "-");
              if (Xk) throw Lk(kk, bk, Xk);
              ik(kk, bk)
            }
          } catch (ak) {
            if (ak instanceof Rk.j) throw ak;
            ik(kk, "network-request-failed", {
              message: String(ak)
            })
          }
        }
        async function hk(kk, Fk, Bk, Rk) {
          let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const ak = await zk(kk, Fk, Bk, Rk, tk);
          return "mfaPendingCredential" in ak && ik(kk, "multi-factor-auth-required", {
            _serverResponse: ak
          }), ak
        }

        function qk(kk, Fk, Bk, Rk) {
          const tk = `${Fk}${Bk}?${Rk}`;
          return kk.config.emulator ? ck(kk.config, tk) : `${kk.config.apiScheme}://${tk}`
        }
        class Ck {
          constructor(kk) {
            this.auth = kk, this.timer = null, this.promise = new Promise(((kk, Fk) => {
              this.timer = setTimeout((() => Fk(Yk(this.auth, "network-request-failed"))), rk.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function Zk(kk, Fk, Bk) {
          const Rk = {
            appName: kk.name
          };
          Bk.email && (Rk.email = Bk.email), Bk.phoneNumber && (Rk.phoneNumber = Bk.phoneNumber);
          const tk = Yk(kk, Fk, Rk);
          return tk.customData._tokenResponse = Bk, tk
        }

        function pk(kk) {
          if (kk) try {
            const Fk = new Date(Number(kk));
            if (!isNaN(Fk.getTime())) return Fk.toUTCString()
          } catch (Fk) {}
        }

        function Kk(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, Rk.N)(kk).getIdToken(Fk)
        }
        async function xk(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const Bk = (0, Rk.N)(kk),
            tk = await Bk.getIdToken(Fk),
            ak = lk(tk);
          Sk(ak && ak.exp && ak.auth_time && ak.iat, Bk.auth, "internal-error");
          const Xk = "object" === typeof ak.firebase ? ak.firebase : void 0,
            bk = null === Xk || void 0 === Xk ? void 0 : Xk.sign_in_provider;
          return {
            claims: ak,
            token: tk,
            authTime: pk(jk(ak.auth_time)),
            issuedAtTime: pk(jk(ak.iat)),
            expirationTime: pk(jk(ak.exp)),
            signInProvider: bk || null,
            signInSecondFactor: (null === Xk || void 0 === Xk ? void 0 : Xk.sign_in_second_factor) || null
          }
        }

        function jk(kk) {
          return 1e3 * Number(kk)
        }

        function lk(kk) {
          const [Fk, Bk, tk] = kk.split(".");
          if (void 0 === Fk || void 0 === Bk || void 0 === tk) return vk("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const kk = (0, Rk.m)(Bk);
            return kk ? JSON.parse(kk) : (vk("Failed to decode base64 JWT payload"), null)
          } catch (ak) {
            return vk("Caught error parsing JWT payload as JSON", null === ak || void 0 === ak ? void 0 : ak.toString()), null
          }
        }
        async function nk(kk, Fk) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return Fk;
          try {
            return await Fk
          } catch (Bk) {
            throw Bk instanceof Rk.j && function(kk) {
              let {
                code: Fk
              } = kk;
              return "auth/user-disabled" === Fk || "auth/user-token-expired" === Fk
            }(Bk) && kk.auth.currentUser === kk && await kk.auth.signOut(), Bk
          }
        }
        class Ik {
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
        class Qk {
          constructor(kk, Fk) {
            this.createdAt = kk, this.lastLoginAt = Fk, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = pk(this.lastLoginAt), this.creationTime = pk(this.createdAt)
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
          const Bk = kk.auth,
            Rk = await kk.getIdToken(),
            tk = await nk(kk, async function(kk, Fk) {
              return zk(kk, "POST", "/v1/accounts:lookup", Fk)
            }(Bk, {
              idToken: Rk
            }));
          Sk(null === tk || void 0 === tk ? void 0 : tk.users.length, Bk, "internal-error");
          const Xk = tk.users[0];
          kk._notifyReloadListener(Xk);
          const bk = (null === (Fk = Xk.providerUserInfo) || void 0 === Fk ? void 0 : Fk.length) ? Xk.providerUserInfo.map((kk => {
            var {
              providerId: Fk
            } = kk, Bk = ak(kk, ["providerId"]);
            return {
              providerId: Fk,
              uid: Bk.rawId || "",
              displayName: Bk.displayName || null,
              email: Bk.email || null,
              phoneNumber: Bk.phoneNumber || null,
              photoURL: Bk.photoUrl || null
            }
          })) : [];
          const wk = (dk = kk.providerData, sk = bk, [...dk.filter((kk => !sk.some((Fk => Fk.providerId === kk.providerId)))), ...sk]);
          var dk, sk;
          const Vk = kk.isAnonymous,
            Jk = !(kk.email && Xk.passwordHash) && !(null === wk || void 0 === wk ? void 0 : wk.length),
            Ak = !!Vk && Jk,
            ek = {
              uid: Xk.localId,
              displayName: Xk.displayName || null,
              photoURL: Xk.photoUrl || null,
              email: Xk.email || null,
              emailVerified: Xk.emailVerified || !1,
              phoneNumber: Xk.phoneNumber || null,
              tenantId: Xk.tenantId || null,
              providerData: wk,
              metadata: new Qk(Xk.createdAt, Xk.lastLoginAt),
              isAnonymous: Ak
            };
          Object.assign(kk, ek)
        }
        async function FF(kk) {
          const Fk = (0, Rk.N)(kk);
          await kF(Fk), await Fk.auth._persistUserIfCurrent(Fk), Fk.auth._notifyListenersIfCurrent(Fk)
        }
        class BF {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(kk) {
            Sk(kk.idToken, "internal-error"), Sk("undefined" !== typeof kk.idToken, "internal-error"), Sk("undefined" !== typeof kk.refreshToken, "internal-error");
            const Fk = "expiresIn" in kk && "undefined" !== typeof kk.expiresIn ? Number(kk.expiresIn) : function(kk) {
              const Fk = lk(kk);
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
              accessToken: Bk,
              refreshToken: tk,
              expiresIn: ak
            } = await async function(kk, Fk) {
              const Bk = await Pk(kk, {}, (async () => {
                const Bk = (0, Rk.db)({
                    grant_type: "refresh_token",
                    refresh_token: Fk
                  }).slice(1),
                  {
                    tokenApiHost: tk,
                    apiKey: ak
                  } = kk.config,
                  Xk = qk(kk, tk, "/v1/token", `key=${ak}`),
                  bk = await kk._getAdditionalHeaders();
                return bk["Content-Type"] = "application/x-www-form-urlencoded", Gk.fetch()(Xk, {
                  method: "POST",
                  headers: bk,
                  body: Bk
                })
              }));
              return {
                accessToken: Bk.access_token,
                expiresIn: Bk.expires_in,
                refreshToken: Bk.refresh_token
              }
            }(kk, Fk);
            this.updateTokensAndExpiration(Bk, tk, Number(ak))
          }
          updateTokensAndExpiration(kk, Fk, Bk) {
            this.refreshToken = Fk || null, this.accessToken = kk || null, this.expirationTime = Date.now() + 1e3 * Bk
          }
          static fromJSON(kk, Fk) {
            const {
              refreshToken: Bk,
              accessToken: Rk,
              expirationTime: tk
            } = Fk, ak = new BF;
            return Bk && (Sk("string" === typeof Bk, "internal-error", {
              appName: kk
            }), ak.refreshToken = Bk), Rk && (Sk("string" === typeof Rk, "internal-error", {
              appName: kk
            }), ak.accessToken = Rk), tk && (Sk("number" === typeof tk, "internal-error", {
              appName: kk
            }), ak.expirationTime = tk), ak
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
            return Object.assign(new BF, this.toJSON())
          }
          _performRefresh() {
            return Nk("not implemented")
          }
        }

        function RF(kk, Fk) {
          Sk("string" === typeof kk || "undefined" === typeof kk, "internal-error", {
            appName: Fk
          })
        }
        class tF {
          constructor(kk) {
            var {
              uid: Fk,
              auth: Bk,
              stsTokenManager: Rk
            } = kk, tk = ak(kk, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new Ik(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = Fk, this.auth = Bk, this.stsTokenManager = Rk, this.accessToken = Rk.accessToken, this.displayName = tk.displayName || null, this.email = tk.email || null, this.emailVerified = tk.emailVerified || !1, this.phoneNumber = tk.phoneNumber || null, this.photoURL = tk.photoURL || null, this.isAnonymous = tk.isAnonymous || !1, this.tenantId = tk.tenantId || null, this.providerData = tk.providerData ? [...tk.providerData] : [], this.metadata = new Qk(tk.createdAt || void 0, tk.lastLoginAt || void 0)
          }
          async getIdToken(kk) {
            const Fk = await nk(this, this.stsTokenManager.getToken(this.auth, kk));
            return Sk(Fk, this.auth, "internal-error"), this.accessToken !== Fk && (this.accessToken = Fk, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), Fk
          }
          getIdTokenResult(kk) {
            return xk(this, kk)
          }
          reload() {
            return FF(this)
          }
          _assign(kk) {
            this !== kk && (Sk(this.uid === kk.uid, this.auth, "internal-error"), this.displayName = kk.displayName, this.photoURL = kk.photoURL, this.email = kk.email, this.emailVerified = kk.emailVerified, this.phoneNumber = kk.phoneNumber, this.isAnonymous = kk.isAnonymous, this.tenantId = kk.tenantId, this.providerData = kk.providerData.map((kk => Object.assign({}, kk))), this.metadata._copy(kk.metadata), this.stsTokenManager._assign(kk.stsTokenManager))
          }
          _clone(kk) {
            const Fk = new tF(Object.assign(Object.assign({}, this), {
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
              Bk = !1;
            kk.idToken && kk.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(kk), Bk = !0), Fk && await kF(this), await this.auth._persistUserIfCurrent(this), Bk && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const kk = await this.getIdToken();
            return await nk(this, async function(kk, Fk) {
              return zk(kk, "POST", "/v1/accounts:delete", Fk)
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
            var Bk, Rk, tk, ak, Xk, bk, wk, dk;
            const sk = null !== (Bk = Fk.displayName) && void 0 !== Bk ? Bk : void 0,
              Vk = null !== (Rk = Fk.email) && void 0 !== Rk ? Rk : void 0,
              Jk = null !== (tk = Fk.phoneNumber) && void 0 !== tk ? tk : void 0,
              Ak = null !== (ak = Fk.photoURL) && void 0 !== ak ? ak : void 0,
              ek = null !== (Xk = Fk.tenantId) && void 0 !== Xk ? Xk : void 0,
              yk = null !== (bk = Fk._redirectEventId) && void 0 !== bk ? bk : void 0,
              fk = null !== (wk = Fk.createdAt) && void 0 !== wk ? wk : void 0,
              mk = null !== (dk = Fk.lastLoginAt) && void 0 !== dk ? dk : void 0,
              {
                uid: Wk,
                emailVerified: vk,
                isAnonymous: ik,
                providerData: Yk,
                stsTokenManager: Lk
              } = Fk;
            Sk(Wk && Lk, kk, "internal-error");
            const Ok = BF.fromJSON(this.name, Lk);
            Sk("string" === typeof Wk, kk, "internal-error"), RF(sk, kk.name), RF(Vk, kk.name), Sk("boolean" === typeof vk, kk, "internal-error"), Sk("boolean" === typeof ik, kk, "internal-error"), RF(Jk, kk.name), RF(Ak, kk.name), RF(ek, kk.name), RF(yk, kk.name), RF(fk, kk.name), RF(mk, kk.name);
            const Ek = new tF({
              uid: Wk,
              auth: kk,
              email: Vk,
              emailVerified: vk,
              displayName: sk,
              isAnonymous: ik,
              photoURL: Ak,
              phoneNumber: Jk,
              tenantId: ek,
              stsTokenManager: Ok,
              createdAt: fk,
              lastLoginAt: mk
            });
            return Yk && Array.isArray(Yk) && (Ek.providerData = Yk.map((kk => Object.assign({}, kk)))), yk && (Ek._redirectEventId = yk), Ek
          }
          static async _fromIdTokenResponse(kk, Fk) {
            let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const Rk = new BF;
            Rk.updateFromServerResponse(Fk);
            const tk = new tF({
              uid: Fk.localId,
              auth: kk,
              stsTokenManager: Rk,
              isAnonymous: Bk
            });
            return await kF(tk), tk
          }
        }
        const aF = new Map;

        function XF(kk) {
          Hk(kk instanceof Function, "Expected a class definition");
          let Fk = aF.get(kk);
          return Fk ? (Hk(Fk instanceof kk, "Instance stored in cache mismatched with class"), Fk) : (Fk = new kk, aF.set(kk, Fk), Fk)
        }
        class bF {
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
        bF.type = "NONE";
        const wF = bF;

        function dF(kk, Fk, Bk) {
          return `firebase:${kk}:${Fk}:${Bk}`
        }
        class sF {
          constructor(kk, Fk, Bk) {
            this.persistence = kk, this.auth = Fk, this.userKey = Bk;
            const {
              config: Rk,
              name: tk
            } = this.auth;
            this.fullUserKey = dF(this.userKey, Rk.apiKey, tk), this.fullPersistenceKey = dF("persistence", Rk.apiKey, tk), this.boundEventHandler = Fk._onStorageEvent.bind(Fk), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(kk) {
            return this.persistence._set(this.fullUserKey, kk.toJSON())
          }
          async getCurrentUser() {
            const kk = await this.persistence._get(this.fullUserKey);
            return kk ? tF._fromJSON(this.auth, kk) : null
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
            let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!Fk.length) return new sF(XF(wF), kk, Bk);
            const Rk = (await Promise.all(Fk.map((async kk => {
              if (await kk._isAvailable()) return kk
            })))).filter((kk => kk));
            let tk = Rk[0] || XF(wF);
            const ak = dF(Bk, kk.config.apiKey, kk.name);
            let Xk = null;
            for (const dk of Fk) try {
              const Fk = await dk._get(ak);
              if (Fk) {
                const Bk = tF._fromJSON(kk, Fk);
                dk !== tk && (Xk = Bk), tk = dk;
                break
              }
            } catch (wk) {}
            const bk = Rk.filter((kk => kk._shouldAllowMigration));
            return tk._shouldAllowMigration && bk.length ? (tk = bk[0], Xk && await tk._set(ak, Xk.toJSON()), await Promise.all(Fk.map((async kk => {
              if (kk !== tk) try {
                await kk._remove(ak)
              } catch (wk) {}
            }))), new sF(tk, kk, Bk)) : new sF(tk, kk, Bk)
          }
        }

        function VF(kk) {
          const Fk = kk.toLowerCase();
          if (Fk.includes("opera/") || Fk.includes("opr/") || Fk.includes("opios/")) return "Opera";
          if (yF(Fk)) return "IEMobile";
          if (Fk.includes("msie") || Fk.includes("trident/")) return "IE";
          if (Fk.includes("edge/")) return "Edge";
          if (JF(Fk)) return "Firefox";
          if (Fk.includes("silk/")) return "Silk";
          if (mF(Fk)) return "Blackberry";
          if (WF(Fk)) return "Webos";
          if (AF(Fk)) return "Safari";
          if ((Fk.includes("chrome/") || eF(Fk)) && !Fk.includes("edge/")) return "Chrome";
          if (fF(Fk)) return "Android";
          {
            const Fk = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              Bk = kk.match(Fk);
            if (2 === (null === Bk || void 0 === Bk ? void 0 : Bk.length)) return Bk[1]
          }
          return "Other"
        }

        function JF() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Rk.R)();
          return /firefox\//i.test(kk)
        }

        function AF() {
          const kk = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Rk.R)()).toLowerCase();
          return kk.includes("safari/") && !kk.includes("chrome/") && !kk.includes("crios/") && !kk.includes("android")
        }

        function eF() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Rk.R)();
          return /crios\//i.test(kk)
        }

        function yF() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Rk.R)();
          return /iemobile/i.test(kk)
        }

        function fF() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Rk.R)();
          return /android/i.test(kk)
        }

        function mF() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Rk.R)();
          return /blackberry/i.test(kk)
        }

        function WF() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Rk.R)();
          return /webos/i.test(kk)
        }

        function vF() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Rk.R)();
          return /iphone|ipad|ipod/i.test(kk) || /macintosh/i.test(kk) && /mobile/i.test(kk)
        }

        function iF() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Rk.R)();
          return vF(kk) || fF(kk) || WF(kk) || mF(kk) || /windows phone/i.test(kk) || yF(kk)
        }

        function YF(kk) {
          let Fk, Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (kk) {
            case "Browser":
              Fk = VF((0, Rk.R)());
              break;
            case "Worker":
              Fk = `${VF((0,Rk.R)())}-${kk}`;
              break;
            default:
              Fk = kk
          }
          const ak = Bk.length ? Bk.join(",") : "FirebaseCore-web";
          return `${Fk}/JsCore/${tk.g}/${ak}`
        }
        async function oF(kk, Fk) {
          return zk(kk, "GET", "/v2/recaptchaConfig", Dk(kk, Fk))
        }

        function LF(kk) {
          return void 0 !== kk && void 0 !== kk.getResponse
        }

        function OF(kk) {
          return void 0 !== kk && void 0 !== kk.enterprise
        }
        class EF {
          constructor(kk) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === kk.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = kk.recaptchaKey.split("/")[3], this.emailPasswordEnabled = kk.recaptchaEnforcementState.some((kk => "EMAIL_PASSWORD_PROVIDER" === kk.provider && "OFF" !== kk.enforcementState))
          }
        }

        function SF(kk) {
          return new Promise(((Fk, Bk) => {
            const Rk = document.createElement("script");
            Rk.setAttribute("src", kk), Rk.onload = Fk, Rk.onerror = kk => {
                const Fk = Yk("internal-error");
                Fk.customData = kk, Bk(Fk)
              }, Rk.type = "text/javascript", Rk.charset = "UTF-8",
              function() {
                var kk, Fk;
                return null !== (Fk = null === (kk = document.getElementsByTagName("head")) || void 0 === kk ? void 0 : kk[0]) && void 0 !== Fk ? Fk : document
              }().appendChild(Rk)
          }))
        }

        function NF(kk) {
          return `__${kk}${Math.floor(1e6*Math.random())}`
        }
        class HF {
          constructor(kk) {
            this.type = "recaptcha-enterprise", this.auth = UF(kk)
          }
          async verify() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function Bk(Fk, Bk, Rk) {
              const tk = window.grecaptcha;
              OF(tk) ? tk.enterprise.ready((() => {
                tk.enterprise.execute(Fk, {
                  action: kk
                }).then((kk => {
                  Bk(kk)
                })).catch((() => {
                  Bk("NO_RECAPTCHA")
                }))
              })) : Rk(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((kk, Rk) => {
              (async function(kk) {
                if (!Fk) {
                  if (null == kk.tenantId && null != kk._agentRecaptchaConfig) return kk._agentRecaptchaConfig.siteKey;
                  if (null != kk.tenantId && void 0 !== kk._tenantRecaptchaConfigs[kk.tenantId]) return kk._tenantRecaptchaConfigs[kk.tenantId].siteKey
                }
                return new Promise((async (Fk, Bk) => {
                  oF(kk, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((Rk => {
                    if (void 0 !== Rk.recaptchaKey) {
                      const Bk = new EF(Rk);
                      return null == kk.tenantId ? kk._agentRecaptchaConfig = Bk : kk._tenantRecaptchaConfigs[kk.tenantId] = Bk, Fk(Bk.siteKey)
                    }
                    Bk(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((kk => {
                    Bk(kk)
                  }))
                }))
              })(this.auth).then((tk => {
                if (!Fk && OF(window.grecaptcha)) Bk(tk, kk, Rk);
                else {
                  if ("undefined" === typeof window) return void Rk(new Error("RecaptchaVerifier is only supported in browser"));
                  SF("https://www.google.com/recaptcha/enterprise.js?render=" + tk).then((() => {
                    Bk(tk, kk, Rk)
                  })).catch((kk => {
                    Rk(kk)
                  }))
                }
              })).catch((kk => {
                Rk(kk)
              }))
            }))
          }
        }
        async function uF(kk, Fk, Bk) {
          let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const tk = new HF(kk);
          let ak;
          try {
            ak = await tk.verify(Bk)
          } catch (bk) {
            ak = await tk.verify(Bk, !0)
          }
          const Xk = Object.assign({}, Fk);
          return Rk ? Object.assign(Xk, {
            captchaResp: ak
          }) : Object.assign(Xk, {
            captchaResponse: ak
          }), Object.assign(Xk, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(Xk, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), Xk
        }
        class MF {
          constructor(kk) {
            this.auth = kk, this.queue = []
          }
          pushCallback(kk, Fk) {
            const Bk = Fk => new Promise(((Bk, Rk) => {
              try {
                Bk(kk(Fk))
              } catch (tk) {
                Rk(tk)
              }
            }));
            Bk.onAbort = Fk, this.queue.push(Bk);
            const Rk = this.queue.length - 1;
            return () => {
              this.queue[Rk] = () => Promise.resolve()
            }
          }
          async runMiddleware(kk) {
            if (this.auth.currentUser === kk) return;
            const Fk = [];
            try {
              for (const Bk of this.queue) await Bk(kk), Bk.onAbort && Fk.push(Bk.onAbort)
            } catch (Bk) {
              Fk.reverse();
              for (const kk of Fk) try {
                kk()
              } catch (Rk) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === Bk || void 0 === Bk ? void 0 : Bk.message
              })
            }
          }
        }
        class gF {
          constructor(kk, Fk, Bk, Rk) {
            this.app = kk, this.heartbeatServiceProvider = Fk, this.appCheckServiceProvider = Bk, this.config = Rk, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new cF(this), this.idTokenSubscription = new cF(this), this.beforeStateQueue = new MF(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = fk, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = kk.name, this.clientVersion = Rk.sdkClientVersion
          }
          _initializeWithPersistence(kk, Fk) {
            return Fk && (this._popupRedirectResolver = XF(Fk)), this._initializationPromise = this.queue((async () => {
              var Bk, Rk;
              if (!this._deleted && (this.persistenceManager = await sF.create(this, kk), !this._deleted)) {
                if (null === (Bk = this._popupRedirectResolver) || void 0 === Bk ? void 0 : Bk._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (tk) {}
                await this.initializeCurrentUser(Fk), this.lastNotifiedUid = (null === (Rk = this.currentUser) || void 0 === Rk ? void 0 : Rk.uid) || null, this._deleted || (this._isInitialized = !0)
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
            const Bk = await this.assertedPersistence.getCurrentUser();
            let Rk = Bk,
              tk = !1;
            if (kk && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const Bk = null === (Fk = this.redirectUser) || void 0 === Fk ? void 0 : Fk._redirectEventId,
                ak = null === Rk || void 0 === Rk ? void 0 : Rk._redirectEventId,
                Xk = await this.tryRedirectSignIn(kk);
              Bk && Bk !== ak || !(null === Xk || void 0 === Xk ? void 0 : Xk.user) || (Rk = Xk.user, tk = !0)
            }
            if (!Rk) return this.directlySetCurrentUser(null);
            if (!Rk._redirectEventId) {
              if (tk) try {
                await this.beforeStateQueue.runMiddleware(Rk)
              } catch (ak) {
                Rk = Bk, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(ak)))
              }
              return Rk ? this.reloadAndSetCurrentUserOrClear(Rk) : this.directlySetCurrentUser(null)
            }
            return Sk(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === Rk._redirectEventId ? this.directlySetCurrentUser(Rk) : this.reloadAndSetCurrentUserOrClear(Rk)
          }
          async tryRedirectSignIn(kk) {
            let Fk = null;
            try {
              Fk = await this._popupRedirectResolver._completeRedirectFn(this, kk, !0)
            } catch (Bk) {
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
            const Fk = kk ? (0, Rk.N)(kk) : null;
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
              await this.assertedPersistence.setPersistence(XF(kk))
            }))
          }
          async initializeRecaptchaConfig() {
            const kk = await oF(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              Fk = new EF(kk);
            if (null == this.tenantId ? this._agentRecaptchaConfig = Fk : this._tenantRecaptchaConfigs[this.tenantId] = Fk, Fk.emailPasswordEnabled) {
              new HF(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(kk) {
            this._errorFactory = new Rk.h("auth", "Firebase", kk())
          }
          onAuthStateChanged(kk, Fk, Bk) {
            return this.registerStateListener(this.authStateSubscription, kk, Fk, Bk)
          }
          beforeAuthStateChanged(kk, Fk) {
            return this.beforeStateQueue.pushCallback(kk, Fk)
          }
          onIdTokenChanged(kk, Fk, Bk) {
            return this.registerStateListener(this.idTokenSubscription, kk, Fk, Bk)
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
            const Bk = await this.getOrInitRedirectPersistenceManager(Fk);
            return null === kk ? Bk.removeCurrentUser() : Bk.setCurrentUser(kk)
          }
          async getOrInitRedirectPersistenceManager(kk) {
            if (!this.redirectPersistenceManager) {
              const Fk = kk && XF(kk) || this._popupRedirectResolver;
              Sk(Fk, this, "argument-error"), this.redirectPersistenceManager = await sF.create(this, [XF(Fk._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(kk) {
            var Fk, Bk;
            return this._isInitialized && await this.queue((async () => {})), (null === (Fk = this._currentUser) || void 0 === Fk ? void 0 : Fk._redirectEventId) === kk ? this._currentUser : (null === (Bk = this.redirectUser) || void 0 === Bk ? void 0 : Bk._redirectEventId) === kk ? this.redirectUser : null
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
            const Bk = null !== (Fk = null === (kk = this.currentUser) || void 0 === kk ? void 0 : kk.uid) && void 0 !== Fk ? Fk : null;
            this.lastNotifiedUid !== Bk && (this.lastNotifiedUid = Bk, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(kk, Fk, Bk, Rk) {
            if (this._deleted) return () => {};
            const tk = "function" === typeof Fk ? Fk : Fk.next.bind(Fk),
              ak = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return Sk(ak, this, "internal-error"), ak.then((() => tk(this.currentUser))), "function" === typeof Fk ? kk.addObserver(Fk, Bk, Rk) : kk.addObserver(Fk)
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
            kk && !this.frameworks.includes(kk) && (this.frameworks.push(kk), this.frameworks.sort(), this.clientVersion = YF(this.config.clientPlatform, this._getFrameworks()))
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
            const Bk = await (null === (kk = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === kk ? void 0 : kk.getHeartbeatsHeader());
            Bk && (Fk["X-Firebase-Client"] = Bk);
            const Rk = await this._getAppCheckToken();
            return Rk && (Fk["X-Firebase-AppCheck"] = Rk), Fk
          }
          async _getAppCheckToken() {
            var kk;
            const Fk = await (null === (kk = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === kk ? void 0 : kk.getToken());
            return (null === Fk || void 0 === Fk ? void 0 : Fk.error) && function(kk) {
              if (Wk.logLevel <= Xk.b.WARN) {
                for (var Fk = arguments.length, Bk = new Array(Fk > 1 ? Fk - 1 : 0), Rk = 1; Rk < Fk; Rk++) Bk[Rk - 1] = arguments[Rk];
                Wk.warn(`Auth (${tk.g}): ${kk}`, ...Bk)
              }
            }(`Error while retrieving App Check token: ${Fk.error}`), null === Fk || void 0 === Fk ? void 0 : Fk.token
          }
        }

        function UF(kk) {
          return (0, Rk.N)(kk)
        }
        class cF {
          constructor(kk) {
            this.auth = kk, this.observer = null, this.addObserver = (0, Rk.v)((kk => this.observer = kk))
          }
          get next() {
            return Sk(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function GF(kk, Fk) {
          const Bk = (0, tk.w)(kk, "auth");
          if (Bk.isInitialized()) {
            const kk = Bk.getImmediate(),
              tk = Bk.getOptions();
            if ((0, Rk.z)(tk, null !== Fk && void 0 !== Fk ? Fk : {})) return kk;
            ik(kk, "already-initialized")
          }
          return Bk.initialize({
            options: Fk
          })
        }

        function TF(kk, Fk, Bk) {
          const Rk = UF(kk);
          Sk(Rk._canInitEmulator, Rk, "emulator-config-failed"), Sk(/^https?:\/\//.test(Fk), Rk, "invalid-emulator-scheme");
          const tk = !!(null === Bk || void 0 === Bk ? void 0 : Bk.disableWarnings),
            ak = rF(Fk),
            {
              host: Xk,
              port: bk
            } = function(kk) {
              const Fk = rF(kk),
                Bk = /(\/\/)?([^?#/]+)/.exec(kk.substr(Fk.length));
              if (!Bk) return {
                host: "",
                port: null
              };
              const Rk = Bk[2].split("@").pop() || "",
                tk = /^(\[[^\]]+\])(:|$)/.exec(Rk);
              if (tk) {
                const kk = tk[1];
                return {
                  host: kk,
                  port: DF(Rk.substr(kk.length + 1))
                }
              } {
                const [kk, Fk] = Rk.split(":");
                return {
                  host: kk,
                  port: DF(Fk)
                }
              }
            }(Fk),
            wk = null === bk ? "" : `:${bk}`;
          Rk.config.emulator = {
            url: `${ak}//${Xk}${wk}/`
          }, Rk.settings.appVerificationDisabledForTesting = !0, Rk.emulatorConfig = Object.freeze({
            host: Xk,
            port: bk,
            protocol: ak.replace(":", ""),
            options: Object.freeze({
              disableWarnings: tk
            })
          }), tk || function() {
            function kk() {
              const kk = document.createElement("p"),
                Fk = kk.style;
              kk.innerText = "Running in emulator mode. Do not use with production credentials.", Fk.position = "fixed", Fk.width = "100%", Fk.backgroundColor = "#ffffff", Fk.border = ".1em solid #000000", Fk.color = "#b50000", Fk.bottom = "0px", Fk.left = "0px", Fk.margin = "0px", Fk.zIndex = "10000", Fk.textAlign = "center", kk.classList.add("firebase-emulator-warning"), document.body.appendChild(kk)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", kk) : kk())
          }()
        }

        function rF(kk) {
          const Fk = kk.indexOf(":");
          return Fk < 0 ? "" : kk.substr(0, Fk + 1)
        }

        function DF(kk) {
          if (!kk) return null;
          const Fk = Number(kk);
          return isNaN(Fk) ? null : Fk
        }
        class zF {
          constructor(kk, Fk) {
            this.providerId = kk, this.signInMethod = Fk
          }
          toJSON() {
            return Nk("not implemented")
          }
          _getIdTokenResponse(kk) {
            return Nk("not implemented")
          }
          _linkToIdToken(kk, Fk) {
            return Nk("not implemented")
          }
          _getReauthenticationResolver(kk) {
            return Nk("not implemented")
          }
        }
        async function PF(kk, Fk) {
          return zk(kk, "POST", "/v1/accounts:resetPassword", Dk(kk, Fk))
        }
        async function hF(kk, Fk) {
          return zk(kk, "POST", "/v1/accounts:update", Fk)
        }
        async function qF(kk, Fk) {
          return hk(kk, "POST", "/v1/accounts:signInWithPassword", Dk(kk, Fk))
        }
        async function CF(kk, Fk) {
          return zk(kk, "POST", "/v1/accounts:sendOobCode", Dk(kk, Fk))
        }
        async function ZF(kk, Fk) {
          return CF(kk, Fk)
        }
        async function pF(kk, Fk) {
          return CF(kk, Fk)
        }
        class KF extends zF {
          constructor(kk, Fk, Bk) {
            let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", Bk), this._email = kk, this._password = Fk, this._tenantId = Rk
          }
          static _fromEmailAndPassword(kk, Fk) {
            return new KF(kk, Fk, "password")
          }
          static _fromEmailAndCode(kk, Fk) {
            return new KF(kk, Fk, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
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
                const Bk = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (Fk = kk._getRecaptchaConfig()) || void 0 === Fk ? void 0 : Fk.emailPasswordEnabled) {
                  const Fk = await uF(kk, Bk, "signInWithPassword");
                  return qF(kk, Fk)
                }
                return qF(kk, Bk).catch((async Fk => {
                  if ("auth/missing-recaptcha-token" === Fk.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const Fk = await uF(kk, Bk, "signInWithPassword");
                    return qF(kk, Fk)
                  }
                  return Promise.reject(Fk)
                }));
              case "emailLink":
                return async function(kk, Fk) {
                  return hk(kk, "POST", "/v1/accounts:signInWithEmailLink", Dk(kk, Fk))
                }(kk, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                ik(kk, "internal-error")
            }
          }
          async _linkToIdToken(kk, Fk) {
            switch (this.signInMethod) {
              case "password":
                return hF(kk, {
                  idToken: Fk,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(kk, Fk) {
                  return hk(kk, "POST", "/v1/accounts:signInWithEmailLink", Dk(kk, Fk))
                }(kk, {
                  idToken: Fk,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                ik(kk, "internal-error")
            }
          }
          _getReauthenticationResolver(kk) {
            return this._getIdTokenResponse(kk)
          }
        }
        async function xF(kk, Fk) {
          return hk(kk, "POST", "/v1/accounts:signInWithIdp", Dk(kk, Fk))
        }
        class jF extends zF {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(kk) {
            const Fk = new jF(kk.providerId, kk.signInMethod);
            return kk.idToken || kk.accessToken ? (kk.idToken && (Fk.idToken = kk.idToken), kk.accessToken && (Fk.accessToken = kk.accessToken), kk.nonce && !kk.pendingToken && (Fk.nonce = kk.nonce), kk.pendingToken && (Fk.pendingToken = kk.pendingToken)) : kk.oauthToken && kk.oauthTokenSecret ? (Fk.accessToken = kk.oauthToken, Fk.secret = kk.oauthTokenSecret) : ik("argument-error"), Fk
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
                providerId: Bk,
                signInMethod: Rk
              } = Fk,
              tk = ak(Fk, ["providerId", "signInMethod"]);
            if (!Bk || !Rk) return null;
            const Xk = new jF(Bk, Rk);
            return Xk.idToken = tk.idToken || void 0, Xk.accessToken = tk.accessToken || void 0, Xk.secret = tk.secret, Xk.nonce = tk.nonce, Xk.pendingToken = tk.pendingToken || null, Xk
          }
          _getIdTokenResponse(kk) {
            return xF(kk, this.buildRequest())
          }
          _linkToIdToken(kk, Fk) {
            const Bk = this.buildRequest();
            return Bk.idToken = Fk, xF(kk, Bk)
          }
          _getReauthenticationResolver(kk) {
            const Fk = this.buildRequest();
            return Fk.autoCreate = !1, xF(kk, Fk)
          }
          buildRequest() {
            const kk = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) kk.pendingToken = this.pendingToken;
            else {
              const Fk = {};
              this.idToken && (Fk.id_token = this.idToken), this.accessToken && (Fk.access_token = this.accessToken), this.secret && (Fk.oauth_token_secret = this.secret), Fk.providerId = this.providerId, this.nonce && !this.pendingToken && (Fk.nonce = this.nonce), kk.postBody = (0, Rk.db)(Fk)
            }
            return kk
          }
        }
        const lF = {
          USER_NOT_FOUND: "user-not-found"
        };
        class nF extends zF {
          constructor(kk) {
            super("phone", "phone"), this.params = kk
          }
          static _fromVerification(kk, Fk) {
            return new nF({
              verificationId: kk,
              verificationCode: Fk
            })
          }
          static _fromTokenResponse(kk, Fk) {
            return new nF({
              phoneNumber: kk,
              temporaryProof: Fk
            })
          }
          _getIdTokenResponse(kk) {
            return async function(kk, Fk) {
              return hk(kk, "POST", "/v1/accounts:signInWithPhoneNumber", Dk(kk, Fk))
            }(kk, this._makeVerificationRequest())
          }
          _linkToIdToken(kk, Fk) {
            return async function(kk, Fk) {
              const Bk = await hk(kk, "POST", "/v1/accounts:signInWithPhoneNumber", Dk(kk, Fk));
              if (Bk.temporaryProof) throw Zk(kk, "account-exists-with-different-credential", Bk);
              return Bk
            }(kk, Object.assign({
              idToken: Fk
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(kk) {
            return async function(kk, Fk) {
              return hk(kk, "POST", "/v1/accounts:signInWithPhoneNumber", Dk(kk, Object.assign(Object.assign({}, Fk), {
                operation: "REAUTH"
              })), lF)
            }(kk, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: kk,
              phoneNumber: Fk,
              verificationId: Bk,
              verificationCode: Rk
            } = this.params;
            return kk && Fk ? {
              temporaryProof: kk,
              phoneNumber: Fk
            } : {
              sessionInfo: Bk,
              code: Rk
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
              verificationCode: Bk,
              phoneNumber: Rk,
              temporaryProof: tk
            } = kk;
            return Bk || Fk || Rk || tk ? new nF({
              verificationId: Fk,
              verificationCode: Bk,
              phoneNumber: Rk,
              temporaryProof: tk
            }) : null
          }
        }
        class IF {
          constructor(kk) {
            var Fk, Bk, tk, ak, Xk, bk;
            const wk = (0, Rk.bb)((0, Rk.D)(kk)),
              dk = null !== (Fk = wk.apiKey) && void 0 !== Fk ? Fk : null,
              sk = null !== (Bk = wk.oobCode) && void 0 !== Bk ? Bk : null,
              Vk = function(kk) {
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
              }(null !== (tk = wk.mode) && void 0 !== tk ? tk : null);
            Sk(dk && sk && Vk, "argument-error"), this.apiKey = dk, this.operation = Vk, this.code = sk, this.continueUrl = null !== (ak = wk.continueUrl) && void 0 !== ak ? ak : null, this.languageCode = null !== (Xk = wk.languageCode) && void 0 !== Xk ? Xk : null, this.tenantId = null !== (bk = wk.tenantId) && void 0 !== bk ? bk : null
          }
          static parseLink(kk) {
            const Fk = function(kk) {
              const Fk = (0, Rk.bb)((0, Rk.D)(kk)).link,
                Bk = Fk ? (0, Rk.bb)((0, Rk.D)(Fk)).deep_link_id : null,
                tk = (0, Rk.bb)((0, Rk.D)(kk)).deep_link_id;
              return (tk ? (0, Rk.bb)((0, Rk.D)(tk)).link : null) || tk || Bk || Fk || kk
            }(kk);
            try {
              return new IF(Fk)
            } catch (Bk) {
              return null
            }
          }
        }

        function QF(kk) {
          return IF.parseLink(kk)
        }
        class kB {
          constructor() {
            this.providerId = kB.PROVIDER_ID
          }
          static credential(kk, Fk) {
            return KF._fromEmailAndPassword(kk, Fk)
          }
          static credentialWithLink(kk, Fk) {
            const Bk = IF.parseLink(Fk);
            return Sk(Bk, "argument-error"), KF._fromEmailAndCode(kk, Bk.code, Bk.tenantId)
          }
        }
        kB.PROVIDER_ID = "password", kB.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", kB.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class FB {
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
        class BB extends FB {
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
        class RB extends BB {
          static credentialFromJSON(kk) {
            const Fk = "string" === typeof kk ? JSON.parse(kk) : kk;
            return Sk("providerId" in Fk && "signInMethod" in Fk, "argument-error"), jF._fromParams(Fk)
          }
          credential(kk) {
            return this._credential(Object.assign(Object.assign({}, kk), {
              nonce: kk.rawNonce
            }))
          }
          _credential(kk) {
            return Sk(kk.idToken || kk.accessToken, "argument-error"), jF._fromParams(Object.assign(Object.assign({}, kk), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(kk) {
            return RB.oauthCredentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return RB.oauthCredentialFromTaggedObject(kk.customData || {})
          }
          static oauthCredentialFromTaggedObject(kk) {
            let {
              _tokenResponse: Fk
            } = kk;
            if (!Fk) return null;
            const {
              oauthIdToken: Bk,
              oauthAccessToken: Rk,
              oauthTokenSecret: tk,
              pendingToken: ak,
              nonce: Xk,
              providerId: bk
            } = Fk;
            if (!Rk && !tk && !Bk && !ak) return null;
            if (!bk) return null;
            try {
              return new RB(bk)._credential({
                idToken: Bk,
                accessToken: Rk,
                nonce: Xk,
                pendingToken: ak
              })
            } catch (wk) {
              return null
            }
          }
        }
        class tB extends BB {
          constructor() {
            super("facebook.com")
          }
          static credential(kk) {
            return jF._fromParams({
              providerId: tB.PROVIDER_ID,
              signInMethod: tB.FACEBOOK_SIGN_IN_METHOD,
              accessToken: kk
            })
          }
          static credentialFromResult(kk) {
            return tB.credentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return tB.credentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromTaggedObject(kk) {
            let {
              _tokenResponse: Fk
            } = kk;
            if (!Fk || !("oauthAccessToken" in Fk)) return null;
            if (!Fk.oauthAccessToken) return null;
            try {
              return tB.credential(Fk.oauthAccessToken)
            } catch (Bk) {
              return null
            }
          }
        }
        tB.FACEBOOK_SIGN_IN_METHOD = "facebook.com", tB.PROVIDER_ID = "facebook.com";
        class aB extends BB {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(kk, Fk) {
            return jF._fromParams({
              providerId: aB.PROVIDER_ID,
              signInMethod: aB.GOOGLE_SIGN_IN_METHOD,
              idToken: kk,
              accessToken: Fk
            })
          }
          static credentialFromResult(kk) {
            return aB.credentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return aB.credentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromTaggedObject(kk) {
            let {
              _tokenResponse: Fk
            } = kk;
            if (!Fk) return null;
            const {
              oauthIdToken: Bk,
              oauthAccessToken: Rk
            } = Fk;
            if (!Bk && !Rk) return null;
            try {
              return aB.credential(Bk, Rk)
            } catch (tk) {
              return null
            }
          }
        }
        aB.GOOGLE_SIGN_IN_METHOD = "google.com", aB.PROVIDER_ID = "google.com";
        class XB extends BB {
          constructor() {
            super("github.com")
          }
          static credential(kk) {
            return jF._fromParams({
              providerId: XB.PROVIDER_ID,
              signInMethod: XB.GITHUB_SIGN_IN_METHOD,
              accessToken: kk
            })
          }
          static credentialFromResult(kk) {
            return XB.credentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return XB.credentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromTaggedObject(kk) {
            let {
              _tokenResponse: Fk
            } = kk;
            if (!Fk || !("oauthAccessToken" in Fk)) return null;
            if (!Fk.oauthAccessToken) return null;
            try {
              return XB.credential(Fk.oauthAccessToken)
            } catch (Bk) {
              return null
            }
          }
        }
        XB.GITHUB_SIGN_IN_METHOD = "github.com", XB.PROVIDER_ID = "github.com";
        class bB extends zF {
          constructor(kk, Fk) {
            super(kk, kk), this.pendingToken = Fk
          }
          _getIdTokenResponse(kk) {
            return xF(kk, this.buildRequest())
          }
          _linkToIdToken(kk, Fk) {
            const Bk = this.buildRequest();
            return Bk.idToken = Fk, xF(kk, Bk)
          }
          _getReauthenticationResolver(kk) {
            const Fk = this.buildRequest();
            return Fk.autoCreate = !1, xF(kk, Fk)
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
                providerId: Bk,
                signInMethod: Rk,
                pendingToken: tk
              } = Fk;
            return Bk && Rk && tk && Bk === Rk ? new bB(Bk, tk) : null
          }
          static _create(kk, Fk) {
            return new bB(kk, Fk)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class wB extends FB {
          constructor(kk) {
            Sk(kk.startsWith("saml."), "argument-error"), super(kk)
          }
          static credentialFromResult(kk) {
            return wB.samlCredentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return wB.samlCredentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromJSON(kk) {
            const Fk = bB.fromJSON(kk);
            return Sk(Fk, "argument-error"), Fk
          }
          static samlCredentialFromTaggedObject(kk) {
            let {
              _tokenResponse: Fk
            } = kk;
            if (!Fk) return null;
            const {
              pendingToken: Bk,
              providerId: Rk
            } = Fk;
            if (!Bk || !Rk) return null;
            try {
              return bB._create(Rk, Bk)
            } catch (tk) {
              return null
            }
          }
        }
        class dB extends BB {
          constructor() {
            super("twitter.com")
          }
          static credential(kk, Fk) {
            return jF._fromParams({
              providerId: dB.PROVIDER_ID,
              signInMethod: dB.TWITTER_SIGN_IN_METHOD,
              oauthToken: kk,
              oauthTokenSecret: Fk
            })
          }
          static credentialFromResult(kk) {
            return dB.credentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return dB.credentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromTaggedObject(kk) {
            let {
              _tokenResponse: Fk
            } = kk;
            if (!Fk) return null;
            const {
              oauthAccessToken: Bk,
              oauthTokenSecret: Rk
            } = Fk;
            if (!Bk || !Rk) return null;
            try {
              return dB.credential(Bk, Rk)
            } catch (tk) {
              return null
            }
          }
        }
        async function sB(kk, Fk) {
          return hk(kk, "POST", "/v1/accounts:signUp", Dk(kk, Fk))
        }
        dB.TWITTER_SIGN_IN_METHOD = "twitter.com", dB.PROVIDER_ID = "twitter.com";
        class VB {
          constructor(kk) {
            this.user = kk.user, this.providerId = kk.providerId, this._tokenResponse = kk._tokenResponse, this.operationType = kk.operationType
          }
          static async _fromIdTokenResponse(kk, Fk, Bk) {
            let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const tk = await tF._fromIdTokenResponse(kk, Bk, Rk),
              ak = JB(Bk);
            return new VB({
              user: tk,
              providerId: ak,
              _tokenResponse: Bk,
              operationType: Fk
            })
          }
          static async _forOperation(kk, Fk, Bk) {
            await kk._updateTokensIfNecessary(Bk, !0);
            const Rk = JB(Bk);
            return new VB({
              user: kk,
              providerId: Rk,
              _tokenResponse: Bk,
              operationType: Fk
            })
          }
        }

        function JB(kk) {
          return kk.providerId ? kk.providerId : "phoneNumber" in kk ? "phone" : null
        }
        async function AB(kk) {
          var Fk;
          const Bk = UF(kk);
          if (await Bk._initializationPromise, null === (Fk = Bk.currentUser) || void 0 === Fk ? void 0 : Fk.isAnonymous) return new VB({
            user: Bk.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const Rk = await sB(Bk, {
              returnSecureToken: !0
            }),
            tk = await VB._fromIdTokenResponse(Bk, "signIn", Rk, !0);
          return await Bk._updateCurrentUser(tk.user), tk
        }
        class eB extends Rk.j {
          constructor(kk, Fk, Bk, Rk) {
            var tk;
            super(Fk.code, Fk.message), this.operationType = Bk, this.user = Rk, Object.setPrototypeOf(this, eB.prototype), this.customData = {
              appName: kk.name,
              tenantId: null !== (tk = kk.tenantId) && void 0 !== tk ? tk : void 0,
              _serverResponse: Fk.customData._serverResponse,
              operationType: Bk
            }
          }
          static _fromErrorAndOperation(kk, Fk, Bk, Rk) {
            return new eB(kk, Fk, Bk, Rk)
          }
        }

        function yB(kk, Fk, Bk, Rk) {
          return ("reauthenticate" === Fk ? Bk._getReauthenticationResolver(kk) : Bk._getIdTokenResponse(kk)).catch((Bk => {
            if ("auth/multi-factor-auth-required" === Bk.code) throw eB._fromErrorAndOperation(kk, Bk, Fk, Rk);
            throw Bk
          }))
        }

        function fB(kk) {
          return new Set(kk.map((kk => {
            let {
              providerId: Fk
            } = kk;
            return Fk
          })).filter((kk => !!kk)))
        }
        async function mB(kk, Fk) {
          const Bk = (0, Rk.N)(kk);
          await vB(!0, Bk, Fk);
          const {
            providerUserInfo: tk
          } = await async function(kk, Fk) {
            return zk(kk, "POST", "/v1/accounts:update", Fk)
          }(Bk.auth, {
            idToken: await Bk.getIdToken(),
            deleteProvider: [Fk]
          }), ak = fB(tk || []);
          return Bk.providerData = Bk.providerData.filter((kk => ak.has(kk.providerId))), ak.has("phone") || (Bk.phoneNumber = null), await Bk.auth._persistUserIfCurrent(Bk), Bk
        }
        async function WB(kk, Fk) {
          let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Rk = await nk(kk, Fk._linkToIdToken(kk.auth, await kk.getIdToken()), Bk);
          return VB._forOperation(kk, "link", Rk)
        }
        async function vB(kk, Fk, Bk) {
          await kF(Fk);
          const Rk = !1 === kk ? "provider-already-linked" : "no-such-provider";
          Sk(fB(Fk.providerData).has(Bk) === kk, Fk.auth, Rk)
        }
        async function iB(kk, Fk) {
          let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: Rk
          } = kk, tk = "reauthenticate";
          try {
            const ak = await nk(kk, yB(Rk, tk, Fk, kk), Bk);
            Sk(ak.idToken, Rk, "internal-error");
            const Xk = lk(ak.idToken);
            Sk(Xk, Rk, "internal-error");
            const {
              sub: bk
            } = Xk;
            return Sk(kk.uid === bk, Rk, "user-mismatch"), VB._forOperation(kk, tk, ak)
          } catch (ak) {
            throw "auth/user-not-found" === (null === ak || void 0 === ak ? void 0 : ak.code) && ik(Rk, "user-mismatch"), ak
          }
        }
        async function YB(kk, Fk) {
          let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Rk = "signIn",
            tk = await yB(kk, Rk, Fk),
            ak = await VB._fromIdTokenResponse(kk, Rk, tk);
          return Bk || await kk._updateCurrentUser(ak.user), ak
        }
        async function oB(kk, Fk) {
          return YB(UF(kk), Fk)
        }
        async function LB(kk, Fk) {
          const Bk = (0, Rk.N)(kk);
          return await vB(!1, Bk, Fk.providerId), WB(Bk, Fk)
        }
        async function OB(kk, Fk) {
          return iB((0, Rk.N)(kk), Fk)
        }
        async function EB(kk, Fk) {
          const Bk = UF(kk),
            Rk = await async function(kk, Fk) {
              return hk(kk, "POST", "/v1/accounts:signInWithCustomToken", Dk(kk, Fk))
            }(Bk, {
              token: Fk,
              returnSecureToken: !0
            }), tk = await VB._fromIdTokenResponse(Bk, "signIn", Rk);
          return await Bk._updateCurrentUser(tk.user), tk
        }
        class SB {
          constructor(kk, Fk) {
            this.factorId = kk, this.uid = Fk.mfaEnrollmentId, this.enrollmentTime = new Date(Fk.enrolledAt).toUTCString(), this.displayName = Fk.displayName
          }
          static _fromServerResponse(kk, Fk) {
            return "phoneInfo" in Fk ? NB._fromServerResponse(kk, Fk) : "totpInfo" in Fk ? HB._fromServerResponse(kk, Fk) : ik(kk, "internal-error")
          }
        }
        class NB extends SB {
          constructor(kk) {
            super("phone", kk), this.phoneNumber = kk.phoneInfo
          }
          static _fromServerResponse(kk, Fk) {
            return new NB(Fk)
          }
        }
        class HB extends SB {
          constructor(kk) {
            super("totp", kk)
          }
          static _fromServerResponse(kk, Fk) {
            return new HB(Fk)
          }
        }

        function uB(kk, Fk, Bk) {
          var Rk;
          Sk((null === (Rk = Bk.url) || void 0 === Rk ? void 0 : Rk.length) > 0, kk, "invalid-continue-uri"), Sk("undefined" === typeof Bk.dynamicLinkDomain || Bk.dynamicLinkDomain.length > 0, kk, "invalid-dynamic-link-domain"), Fk.continueUrl = Bk.url, Fk.dynamicLinkDomain = Bk.dynamicLinkDomain, Fk.canHandleCodeInApp = Bk.handleCodeInApp, Bk.iOS && (Sk(Bk.iOS.bundleId.length > 0, kk, "missing-ios-bundle-id"), Fk.iOSBundleId = Bk.iOS.bundleId), Bk.android && (Sk(Bk.android.packageName.length > 0, kk, "missing-android-pkg-name"), Fk.androidInstallApp = Bk.android.installApp, Fk.androidMinimumVersionCode = Bk.android.minimumVersion, Fk.androidPackageName = Bk.android.packageName)
        }
        async function MB(kk, Fk, Bk) {
          var Rk;
          const tk = UF(kk),
            ak = {
              requestType: "PASSWORD_RESET",
              email: Fk,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (Rk = tk._getRecaptchaConfig()) || void 0 === Rk ? void 0 : Rk.emailPasswordEnabled) {
            const kk = await uF(tk, ak, "getOobCode", !0);
            Bk && uB(tk, kk, Bk), await ZF(tk, kk)
          } else Bk && uB(tk, ak, Bk), await ZF(tk, ak).catch((async kk => {
            if ("auth/missing-recaptcha-token" !== kk.code) return Promise.reject(kk);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const kk = await uF(tk, ak, "getOobCode", !0);
              Bk && uB(tk, kk, Bk), await ZF(tk, kk)
            }
          }))
        }
        async function gB(kk, Fk, Bk) {
          await PF((0, Rk.N)(kk), {
            oobCode: Fk,
            newPassword: Bk
          })
        }
        async function UB(kk, Fk) {
          await async function(kk, Fk) {
            return zk(kk, "POST", "/v1/accounts:update", Dk(kk, Fk))
          }((0, Rk.N)(kk), {
            oobCode: Fk
          })
        }
        async function cB(kk, Fk) {
          const Bk = (0, Rk.N)(kk),
            tk = await PF(Bk, {
              oobCode: Fk
            }),
            ak = tk.requestType;
          switch (Sk(ak, Bk, "internal-error"), ak) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              Sk(tk.newEmail, Bk, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              Sk(tk.mfaInfo, Bk, "internal-error");
            default:
              Sk(tk.email, Bk, "internal-error")
          }
          let Xk = null;
          return tk.mfaInfo && (Xk = SB._fromServerResponse(UF(Bk), tk.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === tk.requestType ? tk.newEmail : tk.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === tk.requestType ? tk.email : tk.newEmail) || null,
              multiFactorInfo: Xk
            },
            operation: ak
          }
        }
        async function GB(kk, Fk) {
          const {
            data: Bk
          } = await cB((0, Rk.N)(kk), Fk);
          return Bk.email
        }
        async function TB(kk, Fk, Bk) {
          var Rk;
          const tk = UF(kk),
            ak = {
              returnSecureToken: !0,
              email: Fk,
              password: Bk,
              clientType: "CLIENT_TYPE_WEB"
            };
          let Xk;
          if (null === (Rk = tk._getRecaptchaConfig()) || void 0 === Rk ? void 0 : Rk.emailPasswordEnabled) {
            const kk = await uF(tk, ak, "signUpPassword");
            Xk = sB(tk, kk)
          } else Xk = sB(tk, ak).catch((async kk => {
            if ("auth/missing-recaptcha-token" === kk.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const kk = await uF(tk, ak, "signUpPassword");
              return sB(tk, kk)
            }
            return Promise.reject(kk)
          }));
          const bk = await Xk.catch((kk => Promise.reject(kk))),
            wk = await VB._fromIdTokenResponse(tk, "signIn", bk);
          return await tk._updateCurrentUser(wk.user), wk
        }

        function rB(kk, Fk, Bk) {
          return oB((0, Rk.N)(kk), kB.credential(Fk, Bk))
        }
        async function DB(kk, Fk, Bk) {
          var Rk;
          const tk = UF(kk),
            ak = {
              requestType: "EMAIL_SIGNIN",
              email: Fk,
              clientType: "CLIENT_TYPE_WEB"
            };

          function Xk(kk, Fk) {
            Sk(Fk.handleCodeInApp, tk, "argument-error"), Fk && uB(tk, kk, Fk)
          }
          if (null === (Rk = tk._getRecaptchaConfig()) || void 0 === Rk ? void 0 : Rk.emailPasswordEnabled) {
            const kk = await uF(tk, ak, "getOobCode", !0);
            Xk(kk, Bk), await pF(tk, kk)
          } else Xk(ak, Bk), await pF(tk, ak).catch((async kk => {
            if ("auth/missing-recaptcha-token" !== kk.code) return Promise.reject(kk);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const kk = await uF(tk, ak, "getOobCode", !0);
              Xk(kk, Bk), await pF(tk, kk)
            }
          }))
        }

        function zB(kk, Fk) {
          const Bk = IF.parseLink(Fk);
          return "EMAIL_SIGNIN" === (null === Bk || void 0 === Bk ? void 0 : Bk.operation)
        }
        async function PB(kk, Fk, Bk) {
          const tk = (0, Rk.N)(kk),
            ak = kB.credentialWithLink(Fk, Bk || uk());
          return Sk(ak._tenantId === (tk.tenantId || null), tk, "tenant-id-mismatch"), oB(tk, ak)
        }
        async function hB(kk, Fk) {
          const Bk = {
              identifier: Fk,
              continueUri: Mk() ? uk() : "http://localhost"
            },
            {
              signinMethods: tk
            } = await async function(kk, Fk) {
              return zk(kk, "POST", "/v1/accounts:createAuthUri", Dk(kk, Fk))
            }((0, Rk.N)(kk), Bk);
          return tk || []
        }
        async function qB(kk, Fk) {
          const Bk = (0, Rk.N)(kk),
            tk = {
              requestType: "VERIFY_EMAIL",
              idToken: await kk.getIdToken()
            };
          Fk && uB(Bk.auth, tk, Fk);
          const {
            email: ak
          } = await async function(kk, Fk) {
            return CF(kk, Fk)
          }(Bk.auth, tk);
          ak !== kk.email && await kk.reload()
        }
        async function CB(kk, Fk, Bk) {
          const tk = (0, Rk.N)(kk),
            ak = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await kk.getIdToken(),
              newEmail: Fk
            };
          Bk && uB(tk.auth, ak, Bk);
          const {
            email: Xk
          } = await async function(kk, Fk) {
            return CF(kk, Fk)
          }(tk.auth, ak);
          Xk !== kk.email && await kk.reload()
        }
        async function ZB(kk, Fk) {
          let {
            displayName: Bk,
            photoURL: tk
          } = Fk;
          if (void 0 === Bk && void 0 === tk) return;
          const ak = (0, Rk.N)(kk),
            Xk = {
              idToken: await ak.getIdToken(),
              displayName: Bk,
              photoUrl: tk,
              returnSecureToken: !0
            },
            bk = await nk(ak, async function(kk, Fk) {
              return zk(kk, "POST", "/v1/accounts:update", Fk)
            }(ak.auth, Xk));
          ak.displayName = bk.displayName || null, ak.photoURL = bk.photoUrl || null;
          const wk = ak.providerData.find((kk => {
            let {
              providerId: Fk
            } = kk;
            return "password" === Fk
          }));
          wk && (wk.displayName = ak.displayName, wk.photoURL = ak.photoURL), await ak._updateTokensIfNecessary(bk)
        }

        function pB(kk, Fk) {
          return xB((0, Rk.N)(kk), Fk, null)
        }

        function KB(kk, Fk) {
          return xB((0, Rk.N)(kk), null, Fk)
        }
        async function xB(kk, Fk, Bk) {
          const {
            auth: Rk
          } = kk, tk = {
            idToken: await kk.getIdToken(),
            returnSecureToken: !0
          };
          Fk && (tk.email = Fk), Bk && (tk.password = Bk);
          const ak = await nk(kk, hF(Rk, tk));
          await kk._updateTokensIfNecessary(ak, !0)
        }
        class jB {
          constructor(kk, Fk) {
            let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = kk, this.providerId = Fk, this.profile = Bk
          }
        }
        class lB extends jB {
          constructor(kk, Fk, Bk, Rk) {
            super(kk, Fk, Bk), this.username = Rk
          }
        }
        class nB extends jB {
          constructor(kk, Fk) {
            super(kk, "facebook.com", Fk)
          }
        }
        class IB extends lB {
          constructor(kk, Fk) {
            super(kk, "github.com", Fk, "string" === typeof(null === Fk || void 0 === Fk ? void 0 : Fk.login) ? null === Fk || void 0 === Fk ? void 0 : Fk.login : null)
          }
        }
        class QB extends jB {
          constructor(kk, Fk) {
            super(kk, "google.com", Fk)
          }
        }
        class kR extends lB {
          constructor(kk, Fk, Bk) {
            super(kk, "twitter.com", Fk, Bk)
          }
        }

        function FR(kk) {
          const {
            user: Fk,
            _tokenResponse: Bk
          } = kk;
          return Fk.isAnonymous && !Bk ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(kk) {
            var Fk, Bk;
            if (!kk) return null;
            const {
              providerId: Rk
            } = kk, tk = kk.rawUserInfo ? JSON.parse(kk.rawUserInfo) : {}, ak = kk.isNewUser || "identitytoolkit#SignupNewUserResponse" === kk.kind;
            if (!Rk && (null === kk || void 0 === kk ? void 0 : kk.idToken)) {
              const Rk = null === (Bk = null === (Fk = lk(kk.idToken)) || void 0 === Fk ? void 0 : Fk.firebase) || void 0 === Bk ? void 0 : Bk.sign_in_provider;
              if (Rk) return new jB(ak, "anonymous" !== Rk && "custom" !== Rk ? Rk : null)
            }
            if (!Rk) return null;
            switch (Rk) {
              case "facebook.com":
                return new nB(ak, tk);
              case "github.com":
                return new IB(ak, tk);
              case "google.com":
                return new QB(ak, tk);
              case "twitter.com":
                return new kR(ak, tk, kk.screenName || null);
              case "custom":
              case "anonymous":
                return new jB(ak, null);
              default:
                return new jB(ak, Rk, tk)
            }
          }(Bk)
        }

        function BR(kk, Fk) {
          return (0, Rk.N)(kk).setPersistence(Fk)
        }

        function RR(kk) {
          return UF(kk).initializeRecaptchaConfig()
        }

        function tR(kk, Fk, Bk, tk) {
          return (0, Rk.N)(kk).onIdTokenChanged(Fk, Bk, tk)
        }

        function aR(kk, Fk, Bk) {
          return (0, Rk.N)(kk).beforeAuthStateChanged(Fk, Bk)
        }

        function XR(kk, Fk, Bk, tk) {
          return (0, Rk.N)(kk).onAuthStateChanged(Fk, Bk, tk)
        }

        function bR(kk) {
          (0, Rk.N)(kk).useDeviceLanguage()
        }

        function wR(kk, Fk) {
          return (0, Rk.N)(kk).updateCurrentUser(Fk)
        }

        function dR(kk) {
          return (0, Rk.N)(kk).signOut()
        }
        async function sR(kk) {
          return (0, Rk.N)(kk).delete()
        }
        class VR {
          constructor(kk, Fk, Bk) {
            this.type = kk, this.credential = Fk, this.auth = Bk
          }
          static _fromIdtoken(kk, Fk) {
            return new VR("enroll", kk, Fk)
          }
          static _fromMfaPendingCredential(kk) {
            return new VR("signin", kk)
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
            var Fk, Bk;
            if (null === kk || void 0 === kk ? void 0 : kk.multiFactorSession) {
              if (null === (Fk = kk.multiFactorSession) || void 0 === Fk ? void 0 : Fk.pendingCredential) return VR._fromMfaPendingCredential(kk.multiFactorSession.pendingCredential);
              if (null === (Bk = kk.multiFactorSession) || void 0 === Bk ? void 0 : Bk.idToken) return VR._fromIdtoken(kk.multiFactorSession.idToken)
            }
            return null
          }
        }
        class JR {
          constructor(kk, Fk, Bk) {
            this.session = kk, this.hints = Fk, this.signInResolver = Bk
          }
          static _fromError(kk, Fk) {
            const Bk = UF(kk),
              Rk = Fk.customData._serverResponse,
              tk = (Rk.mfaInfo || []).map((kk => SB._fromServerResponse(Bk, kk)));
            Sk(Rk.mfaPendingCredential, Bk, "internal-error");
            const ak = VR._fromMfaPendingCredential(Rk.mfaPendingCredential);
            return new JR(ak, tk, (async kk => {
              const tk = await kk._process(Bk, ak);
              delete Rk.mfaInfo, delete Rk.mfaPendingCredential;
              const Xk = Object.assign(Object.assign({}, Rk), {
                idToken: tk.idToken,
                refreshToken: tk.refreshToken
              });
              switch (Fk.operationType) {
                case "signIn":
                  const kk = await VB._fromIdTokenResponse(Bk, Fk.operationType, Xk);
                  return await Bk._updateCurrentUser(kk.user), kk;
                case "reauthenticate":
                  return Sk(Fk.user, Bk, "internal-error"), VB._forOperation(Fk.user, Fk.operationType, Xk);
                default:
                  ik(Bk, "internal-error")
              }
            }))
          }
          async resolveSignIn(kk) {
            const Fk = kk;
            return this.signInResolver(Fk)
          }
        }

        function AR(kk, Fk) {
          var Bk;
          const tk = (0, Rk.N)(kk),
            ak = Fk;
          return Sk(Fk.customData.operationType, tk, "argument-error"), Sk(null === (Bk = ak.customData._serverResponse) || void 0 === Bk ? void 0 : Bk.mfaPendingCredential, tk, "argument-error"), JR._fromError(tk, ak)
        }
        class eR {
          constructor(kk) {
            this.user = kk, this.enrolledFactors = [], kk._onReload((Fk => {
              Fk.mfaInfo && (this.enrolledFactors = Fk.mfaInfo.map((Fk => SB._fromServerResponse(kk.auth, Fk))))
            }))
          }
          static _fromUser(kk) {
            return new eR(kk)
          }
          async getSession() {
            return VR._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(kk, Fk) {
            const Bk = kk,
              Rk = await this.getSession(),
              tk = await nk(this.user, Bk._process(this.user.auth, Rk, Fk));
            return await this.user._updateTokensIfNecessary(tk), this.user.reload()
          }
          async unenroll(kk) {
            const Fk = "string" === typeof kk ? kk : kk.uid,
              Bk = await this.user.getIdToken();
            try {
              const kk = await nk(this.user, (Rk = this.user.auth, tk = {
                idToken: Bk,
                mfaEnrollmentId: Fk
              }, zk(Rk, "POST", "/v2/accounts/mfaEnrollment:withdraw", Dk(Rk, tk))));
              this.enrolledFactors = this.enrolledFactors.filter((kk => {
                let {
                  uid: Bk
                } = kk;
                return Bk !== Fk
              })), await this.user._updateTokensIfNecessary(kk), await this.user.reload()
            } catch (ak) {
              throw ak
            }
            var Rk, tk
          }
        }
        const yR = new WeakMap;

        function fR(kk) {
          const Fk = (0, Rk.N)(kk);
          return yR.has(Fk) || yR.set(Fk, eR._fromUser(Fk)), yR.get(Fk)
        }
        const mR = "__sak";
        class WR {
          constructor(kk, Fk) {
            this.storageRetriever = kk, this.type = Fk
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(mR, "1"), this.storage.removeItem(mR), Promise.resolve(!0)) : Promise.resolve(!1)
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
        class vR extends WR {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (kk, Fk) => this.onStorageEvent(kk, Fk), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const kk = (0, Rk.R)();
              return AF(kk) || vF(kk)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (kk) {
                return !1
              }
            }(), this.fallbackToPolling = iF(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(kk) {
            for (const Fk of Object.keys(this.listeners)) {
              const Bk = this.storage.getItem(Fk),
                Rk = this.localCache[Fk];
              Bk !== Rk && kk(Fk, Rk, Bk)
            }
          }
          onStorageEvent(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!kk.key) return void this.forAllChangedKeys(((kk, Fk, Bk) => {
              this.notifyListeners(kk, Bk)
            }));
            const Bk = kk.key;
            if (Fk ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const Rk = this.storage.getItem(Bk);
              if (kk.newValue !== Rk) null !== kk.newValue ? this.storage.setItem(Bk, kk.newValue) : this.storage.removeItem(Bk);
              else if (this.localCache[Bk] === kk.newValue && !Fk) return
            }
            const tk = () => {
                const kk = this.storage.getItem(Bk);
                (Fk || this.localCache[Bk] !== kk) && this.notifyListeners(Bk, kk)
              },
              ak = this.storage.getItem(Bk);
            (0, Rk.W)() && 10 === document.documentMode && ak !== kk.newValue && kk.newValue !== kk.oldValue ? setTimeout(tk, 10) : tk()
          }
          notifyListeners(kk, Fk) {
            this.localCache[kk] = Fk;
            const Bk = this.listeners[kk];
            if (Bk)
              for (const Rk of Array.from(Bk)) Rk(Fk ? JSON.parse(Fk) : Fk)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((kk, Fk, Bk) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: kk,
                  oldValue: Fk,
                  newValue: Bk
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
        vR.type = "LOCAL";
        const iR = vR;
        class YR extends WR {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(kk, Fk) {}
          _removeListener(kk, Fk) {}
        }
        YR.type = "SESSION";
        const oR = YR;
        class LR {
          constructor(kk) {
            this.eventTarget = kk, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(kk) {
            const Fk = this.receivers.find((Fk => Fk.isListeningto(kk)));
            if (Fk) return Fk;
            const Bk = new LR(kk);
            return this.receivers.push(Bk), Bk
          }
          isListeningto(kk) {
            return this.eventTarget === kk
          }
          async handleEvent(kk) {
            const Fk = kk,
              {
                eventId: Bk,
                eventType: Rk,
                data: tk
              } = Fk.data,
              ak = this.handlersMap[Rk];
            if (!(null === ak || void 0 === ak ? void 0 : ak.size)) return;
            Fk.ports[0].postMessage({
              status: "ack",
              eventId: Bk,
              eventType: Rk
            });
            const Xk = Array.from(ak).map((async kk => kk(Fk.origin, tk))),
              bk = await
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
            }(Xk);
            Fk.ports[0].postMessage({
              status: "done",
              eventId: Bk,
              eventType: Rk,
              response: bk
            })
          }
          _subscribe(kk, Fk) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[kk] || (this.handlersMap[kk] = new Set), this.handlersMap[kk].add(Fk)
          }
          _unsubscribe(kk, Fk) {
            this.handlersMap[kk] && Fk && this.handlersMap[kk].delete(Fk), Fk && 0 !== this.handlersMap[kk].size || delete this.handlersMap[kk], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function OR() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            Bk = "";
          for (let Rk = 0; Rk < Fk; Rk++) Bk += Math.floor(10 * Math.random());
          return kk + Bk
        }
        LR.receivers = [];
        class ER {
          constructor(kk) {
            this.target = kk, this.handlers = new Set
          }
          removeMessageHandler(kk) {
            kk.messageChannel && (kk.messageChannel.port1.removeEventListener("message", kk.zW), kk.messageChannel.port1.close()), this.handlers.delete(kk)
          }
          async _send(kk, Fk) {
            let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const Rk = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!Rk) throw new Error("connection_unavailable");
            let tk, ak;
            return new Promise(((Xk, bk) => {
              const wk = OR("", 20);
              Rk.port1.start();
              const dk = setTimeout((() => {
                bk(new Error("unsupported_event"))
              }), Bk);
              ak = {
                messageChannel: Rk,
                zW(kk) {
                  const Fk = kk;
                  if (Fk.data.eventId === wk) switch (Fk.data.status) {
                    case "ack":
                      clearTimeout(dk), tk = setTimeout((() => {
                        bk(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(tk), Xk(Fk.data.response);
                      break;
                    default:
                      clearTimeout(dk), clearTimeout(tk), bk(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(ak), Rk.port1.addEventListener("message", ak.zW), this.target.postMessage({
                eventType: kk,
                eventId: wk,
                data: Fk
              }, [Rk.port2])
            })).finally((() => {
              ak && this.removeMessageHandler(ak)
            }))
          }
        }

        function SR() {
          return window
        }

        function NR() {
          return "undefined" !== typeof SR().WorkerGlobalScope && "function" === typeof SR().importScripts
        }
        const HR = "firebaseLocalStorageDb",
          uR = "firebaseLocalStorage",
          MR = "fbase_key";
        class gR {
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

        function UR(kk, Fk) {
          return kk.transaction([uR], Fk ? "readwrite" : "readonly").objectStore(uR)
        }

        function cR() {
          const kk = indexedDB.open(HR, 1);
          return new Promise(((Fk, Bk) => {
            kk.addEventListener("error", (() => {
              Bk(kk.error)
            })), kk.addEventListener("upgradeneeded", (() => {
              const Fk = kk.result;
              try {
                Fk.createObjectStore(uR, {
                  keyPath: MR
                })
              } catch (Rk) {
                Bk(Rk)
              }
            })), kk.addEventListener("success", (async () => {
              const Bk = kk.result;
              Bk.objectStoreNames.contains(uR) ? Fk(Bk) : (Bk.close(), await
                function() {
                  const kk = indexedDB.deleteDatabase(HR);
                  return new gR(kk).toPromise()
                }(), Fk(await cR()))
            }))
          }))
        }
        async function GR(kk, Fk, Bk) {
          const Rk = UR(kk, !0).put({
            [MR]: Fk,
            value: Bk
          });
          return new gR(Rk).toPromise()
        }

        function TR(kk, Fk) {
          const Bk = UR(kk, !0).delete(Fk);
          return new gR(Bk).toPromise()
        }
        class rR {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await cR()), this.db
          }
          async _withRetries(kk) {
            let Fk = 0;
            for (;;) try {
              const Fk = await this._openDb();
              return await kk(Fk)
            } catch (Bk) {
              if (Fk++ > 3) throw Bk;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return NR() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = LR._getInstance(NR() ? self : null), this.receiver._subscribe("keyChanged", (async (kk, Fk) => ({
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
            this.sender = new ER(this.activeServiceWorker);
            const Bk = await this.sender._send("ping", {}, 800);
            Bk && (null === (kk = Bk[0]) || void 0 === kk ? void 0 : kk.fulfilled) && (null === (Fk = Bk[0]) || void 0 === Fk ? void 0 : Fk.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
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
              const kk = await cR();
              return await GR(kk, mR, "1"), await TR(kk, mR), !0
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
            return this._withPendingWrite((async () => (await this._withRetries((Bk => GR(Bk, kk, Fk))), this.localCache[kk] = Fk, this.notifyServiceWorker(kk))))
          }
          async _get(kk) {
            const Fk = await this._withRetries((Fk => async function(kk, Fk) {
              const Bk = UR(kk, !1).get(Fk),
                Rk = await new gR(Bk).toPromise();
              return void 0 === Rk ? null : Rk.value
            }(Fk, kk)));
            return this.localCache[kk] = Fk, Fk
          }
          async _remove(kk) {
            return this._withPendingWrite((async () => (await this._withRetries((Fk => TR(Fk, kk))), delete this.localCache[kk], this.notifyServiceWorker(kk))))
          }
          async _poll() {
            const kk = await this._withRetries((kk => {
              const Fk = UR(kk, !1).getAll();
              return new gR(Fk).toPromise()
            }));
            if (!kk) return [];
            if (0 !== this.pendingWrites) return [];
            const Fk = [],
              Bk = new Set;
            for (const {
                fbase_key: Rk,
                value: tk
              }
              of kk) Bk.add(Rk), JSON.stringify(this.localCache[Rk]) !== JSON.stringify(tk) && (this.notifyListeners(Rk, tk), Fk.push(Rk));
            for (const Rk of Object.keys(this.localCache)) this.localCache[Rk] && !Bk.has(Rk) && (this.notifyListeners(Rk, null), Fk.push(Rk));
            return Fk
          }
          notifyListeners(kk, Fk) {
            this.localCache[kk] = Fk;
            const Bk = this.listeners[kk];
            if (Bk)
              for (const Rk of Array.from(Bk)) Rk(Fk)
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
        rR.type = "LOCAL";
        const DR = rR;
        const zR = 1e12;
        class PR {
          constructor(kk) {
            this.auth = kk, this.counter = zR, this._widgets = new Map
          }
          render(kk, Fk) {
            const Bk = this.counter;
            return this._widgets.set(Bk, new hR(kk, this.auth.name, Fk || {})), this.counter++, Bk
          }
          reset(kk) {
            var Fk;
            const Bk = kk || zR;
            null === (Fk = this._widgets.get(Bk)) || void 0 === Fk || Fk.delete(), this._widgets.delete(Bk)
          }
          getResponse(kk) {
            var Fk;
            const Bk = kk || zR;
            return (null === (Fk = this._widgets.get(Bk)) || void 0 === Fk ? void 0 : Fk.getResponse()) || ""
          }
          async execute(kk) {
            var Fk;
            const Bk = kk || zR;
            return null === (Fk = this._widgets.get(Bk)) || void 0 === Fk || Fk.execute(), ""
          }
        }
        class hR {
          constructor(kk, Fk, Bk) {
            this.params = Bk, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const Rk = "string" === typeof kk ? document.getElementById(kk) : kk;
            Sk(Rk, "argument-error", {
              appName: Fk
            }), this.container = Rk, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
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
                  Bk = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let Rk = 0; Rk < kk; Rk++) Fk.push(Bk.charAt(Math.floor(Math.random() * Bk.length)));
                return Fk.join("")
              }(50);
              const {
                callback: kk,
                "expired-callback": Fk
              } = this.params;
              if (kk) try {
                kk(this.responseToken)
              } catch (Bk) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, Fk) try {
                  Fk()
                } catch (Bk) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const qR = NF("rcb"),
          CR = new Uk(3e4, 6e4);
        class ZR {
          constructor() {
            var kk;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (kk = SR().grecaptcha) || void 0 === kk ? void 0 : kk.render)
          }
          load(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return Sk(function(kk) {
              return kk.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(kk)
            }(Fk), kk, "argument-error"), this.shouldResolveImmediately(Fk) && LF(SR().grecaptcha) ? Promise.resolve(SR().grecaptcha) : new Promise(((Bk, tk) => {
              const ak = SR().setTimeout((() => {
                tk(Yk(kk, "network-request-failed"))
              }), CR.get());
              SR()[qR] = () => {
                SR().clearTimeout(ak), delete SR()[qR];
                const Rk = SR().grecaptcha;
                if (!Rk || !LF(Rk)) return void tk(Yk(kk, "internal-error"));
                const Xk = Rk.render;
                Rk.render = (kk, Fk) => {
                  const Bk = Xk(kk, Fk);
                  return this.counter++, Bk
                }, this.hostLanguage = Fk, Bk(Rk)
              };
              SF(`https://www.google.com/recaptcha/api.js??${(0,Rk.db)({onload:qR,render:"explicit",hl:Fk})}`).catch((() => {
                clearTimeout(ak), tk(Yk(kk, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(kk) {
            var Fk;
            return !!(null === (Fk = SR().grecaptcha) || void 0 === Fk ? void 0 : Fk.render) && (kk === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class pR {
          async load(kk) {
            return new PR(kk)
          }
          clearedOneInstance() {}
        }
        const KR = "recaptcha",
          xR = {
            theme: "light",
            type: "image"
          };
        class jR {
          constructor(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, xR),
              Bk = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = Fk, this.type = KR, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = UF(Bk), this.isInvisible = "invisible" === this.parameters.size, Sk("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const Rk = "string" === typeof kk ? document.getElementById(kk) : kk;
            Sk(Rk, this.auth, "argument-error"), this.container = Rk, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new pR : new ZR, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const kk = await this.render(),
              Fk = this.getAssertedRecaptcha(),
              Bk = Fk.getResponse(kk);
            return Bk || new Promise((Bk => {
              const Rk = kk => {
                kk && (this.tokenChangeListeners.delete(Rk), Bk(kk))
              };
              this.tokenChangeListeners.add(Rk), this.isInvisible && Fk.execute(kk)
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
                const Bk = SR()[kk];
                "function" === typeof Bk && Bk(Fk)
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
            Sk(Mk() && !NR(), this.auth, "internal-error"), await
            function() {
              let kk = null;
              return new Promise((Fk => {
                "complete" !== document.readyState ? (kk = () => Fk(), window.addEventListener("load", kk)) : Fk()
              })).catch((Fk => {
                throw kk && window.removeEventListener("load", kk), Fk
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const kk = await async function(kk) {
              return (await zk(kk, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            Sk(kk, this.auth, "internal-error"), this.parameters.sitekey = kk
          }
          getAssertedRecaptcha() {
            return Sk(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class lR {
          constructor(kk, Fk) {
            this.verificationId = kk, this.onConfirmation = Fk
          }
          confirm(kk) {
            const Fk = nF._fromVerification(this.verificationId, kk);
            return this.onConfirmation(Fk)
          }
        }
        async function nR(kk, Fk, Bk) {
          const tk = UF(kk),
            ak = await kt(tk, Fk, (0, Rk.N)(Bk));
          return new lR(ak, (kk => oB(tk, kk)))
        }
        async function IR(kk, Fk, Bk) {
          const tk = (0, Rk.N)(kk);
          await vB(!1, tk, "phone");
          const ak = await kt(tk.auth, Fk, (0, Rk.N)(Bk));
          return new lR(ak, (kk => LB(tk, kk)))
        }
        async function QR(kk, Fk, Bk) {
          const tk = (0, Rk.N)(kk),
            ak = await kt(tk.auth, Fk, (0, Rk.N)(Bk));
          return new lR(ak, (kk => OB(tk, kk)))
        }
        async function kt(kk, Fk, Bk) {
          var Rk;
          const tk = await Bk.verify();
          try {
            let ak;
            if (Sk("string" === typeof tk, kk, "argument-error"), Sk(Bk.type === KR, kk, "argument-error"), ak = "string" === typeof Fk ? {
                phoneNumber: Fk
              } : Fk, "session" in ak) {
              const Fk = ak.session;
              if ("phoneNumber" in ak) {
                Sk("enroll" === Fk.type, kk, "internal-error");
                const Bk = await
                function(kk, Fk) {
                  return zk(kk, "POST", "/v2/accounts/mfaEnrollment:start", Dk(kk, Fk))
                }(kk, {
                  idToken: Fk.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: ak.phoneNumber,
                    recaptchaToken: tk
                  }
                });
                return Bk.phoneSessionInfo.sessionInfo
              } {
                Sk("signin" === Fk.type, kk, "internal-error");
                const Bk = (null === (Rk = ak.multiFactorHint) || void 0 === Rk ? void 0 : Rk.uid) || ak.multiFactorUid;
                Sk(Bk, kk, "missing-multi-factor-info");
                const Xk = await
                function(kk, Fk) {
                  return zk(kk, "POST", "/v2/accounts/mfaSignIn:start", Dk(kk, Fk))
                }(kk, {
                  mfaPendingCredential: Fk.credential,
                  mfaEnrollmentId: Bk,
                  phoneSignInInfo: {
                    recaptchaToken: tk
                  }
                });
                return Xk.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: Fk
              } = await async function(kk, Fk) {
                return zk(kk, "POST", "/v1/accounts:sendVerificationCode", Dk(kk, Fk))
              }(kk, {
                phoneNumber: ak.phoneNumber,
                recaptchaToken: tk
              });
              return Fk
            }
          } finally {
            Bk._reset()
          }
        }
        async function Ft(kk, Fk) {
          await WB((0, Rk.N)(kk), Fk)
        }
        class Bt {
          constructor(kk) {
            this.providerId = Bt.PROVIDER_ID, this.auth = UF(kk)
          }
          verifyPhoneNumber(kk, Fk) {
            return kt(this.auth, kk, (0, Rk.N)(Fk))
          }
          static credential(kk, Fk) {
            return nF._fromVerification(kk, Fk)
          }
          static credentialFromResult(kk) {
            const Fk = kk;
            return Bt.credentialFromTaggedObject(Fk)
          }
          static credentialFromError(kk) {
            return Bt.credentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromTaggedObject(kk) {
            let {
              _tokenResponse: Fk
            } = kk;
            if (!Fk) return null;
            const {
              phoneNumber: Bk,
              temporaryProof: Rk
            } = Fk;
            return Bk && Rk ? nF._fromTokenResponse(Bk, Rk) : null
          }
        }

        function Rt(kk, Fk) {
          return Fk ? XF(Fk) : (Sk(kk._popupRedirectResolver, kk, "argument-error"), kk._popupRedirectResolver)
        }
        Bt.PROVIDER_ID = "phone", Bt.PHONE_SIGN_IN_METHOD = "phone";
        class tt extends zF {
          constructor(kk) {
            super("custom", "custom"), this.params = kk
          }
          _getIdTokenResponse(kk) {
            return xF(kk, this._buildIdpRequest())
          }
          _linkToIdToken(kk, Fk) {
            return xF(kk, this._buildIdpRequest(Fk))
          }
          _getReauthenticationResolver(kk) {
            return xF(kk, this._buildIdpRequest())
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

        function Xt(kk) {
          return YB(kk.auth, new tt(kk), kk.bypassAuthState)
        }

        function bt(kk) {
          const {
            auth: Fk,
            user: Bk
          } = kk;
          return Sk(Bk, Fk, "internal-error"), iB(Bk, new tt(kk), kk.bypassAuthState)
        }
        async function wt(kk) {
          const {
            auth: Fk,
            user: Bk
          } = kk;
          return Sk(Bk, Fk, "internal-error"), WB(Bk, new tt(kk), kk.bypassAuthState)
        }
        class dt {
          constructor(kk, Fk, Bk, Rk) {
            let tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = kk, this.resolver = Bk, this.user = Rk, this.bypassAuthState = tk, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(Fk) ? Fk : [Fk]
          }
          execute() {
            return new Promise((async (kk, Fk) => {
              this.pendingPromise = {
                resolve: kk,
                reject: Fk
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (Bk) {
                this.reject(Bk)
              }
            }))
          }
          async onAuthEvent(kk) {
            const {
              urlResponse: Fk,
              sessionId: Bk,
              postBody: Rk,
              tenantId: tk,
              error: ak,
              type: Xk
            } = kk;
            if (ak) return void this.reject(ak);
            const bk = {
              auth: this.auth,
              requestUri: Fk,
              sessionId: Bk,
              tenantId: tk || void 0,
              postBody: Rk || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(Xk)(bk))
            } catch (wk) {
              this.reject(wk)
            }
          }
          onError(kk) {
            this.reject(kk)
          }
          getIdpTask(kk) {
            switch (kk) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return Xt;
              case "linkViaPopup":
              case "linkViaRedirect":
                return wt;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return bt;
              default:
                ik(this.auth, "internal-error")
            }
          }
          resolve(kk) {
            Hk(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(kk), this.unregisterAndCleanUp()
          }
          reject(kk) {
            Hk(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(kk), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const st = new Uk(2e3, 1e4);
        async function Vt(kk, Fk, Bk) {
          const Rk = UF(kk);
          Ok(kk, Fk, FB);
          const tk = Rt(Rk, Bk);
          return new et(Rk, "signInViaPopup", Fk, tk).executeNotNull()
        }
        async function Jt(kk, Fk, Bk) {
          const tk = (0, Rk.N)(kk);
          Ok(tk.auth, Fk, FB);
          const ak = Rt(tk.auth, Bk);
          return new et(tk.auth, "reauthViaPopup", Fk, ak, tk).executeNotNull()
        }
        async function At(kk, Fk, Bk) {
          const tk = (0, Rk.N)(kk);
          Ok(tk.auth, Fk, FB);
          const ak = Rt(tk.auth, Bk);
          return new et(tk.auth, "linkViaPopup", Fk, ak, tk).executeNotNull()
        }
        class et extends dt {
          constructor(kk, Fk, Bk, Rk, tk) {
            super(kk, Fk, Rk, tk), this.provider = Bk, this.authWindow = null, this.pollId = null, et.currentPopupAction && et.currentPopupAction.cancel(), et.currentPopupAction = this
          }
          async executeNotNull() {
            const kk = await this.execute();
            return Sk(kk, this.auth, "internal-error"), kk
          }
          async onExecution() {
            Hk(1 === this.filter.length, "Popup operations only handle one event");
            const kk = OR();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], kk), this.authWindow.associatedEvent = kk, this.resolver._originValidation(this.auth).catch((kk => {
              this.reject(kk)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (kk => {
              kk || this.reject(Yk(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var kk;
            return (null === (kk = this.authWindow) || void 0 === kk ? void 0 : kk.associatedEvent) || null
          }
          cancel() {
            this.reject(Yk(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, et.currentPopupAction = null
          }
          pollUserCancellation() {
            const kk = () => {
              var Fk, Bk;
              (null === (Bk = null === (Fk = this.authWindow) || void 0 === Fk ? void 0 : Fk.window) || void 0 === Bk ? void 0 : Bk.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(Yk(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(kk, st.get())
            };
            kk()
          }
        }
        et.currentPopupAction = null;
        const yt = "pendingRedirect",
          ft = new Map;
        class mt extends dt {
          constructor(kk, Fk) {
            super(kk, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], Fk, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let kk = ft.get(this.auth._key());
            if (!kk) {
              try {
                const Fk = await async function(kk, Fk) {
                  const Bk = Yt(Fk),
                    Rk = it(kk);
                  if (!await Rk._isAvailable()) return !1;
                  const tk = "true" === await Rk._get(Bk);
                  return await Rk._remove(Bk), tk
                }(this.resolver, this.auth) ? await super.execute() : null;
                kk = () => Promise.resolve(Fk)
              } catch (Fk) {
                kk = () => Promise.reject(Fk)
              }
              ft.set(this.auth._key(), kk)
            }
            return this.bypassAuthState || ft.set(this.auth._key(), (() => Promise.resolve(null))), kk()
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
        async function Wt(kk, Fk) {
          return it(kk)._set(Yt(Fk), "true")
        }

        function vt(kk, Fk) {
          ft.set(kk._key(), Fk)
        }

        function it(kk) {
          return XF(kk._redirectPersistence)
        }

        function Yt(kk) {
          return dF(yt, kk.config.apiKey, kk.name)
        }

        function ot(kk, Fk, Bk) {
          return async function(kk, Fk, Bk) {
            const Rk = UF(kk);
            Ok(kk, Fk, FB), await Rk._initializationPromise;
            const tk = Rt(Rk, Bk);
            return await Wt(tk, Rk), tk._openRedirect(Rk, Fk, "signInViaRedirect")
          }(kk, Fk, Bk)
        }

        function Lt(kk, Fk, Bk) {
          return async function(kk, Fk, Bk) {
            const tk = (0, Rk.N)(kk);
            Ok(tk.auth, Fk, FB), await tk.auth._initializationPromise;
            const ak = Rt(tk.auth, Bk);
            await Wt(ak, tk.auth);
            const Xk = await Nt(tk);
            return ak._openRedirect(tk.auth, Fk, "reauthViaRedirect", Xk)
          }(kk, Fk, Bk)
        }

        function Ot(kk, Fk, Bk) {
          return async function(kk, Fk, Bk) {
            const tk = (0, Rk.N)(kk);
            Ok(tk.auth, Fk, FB), await tk.auth._initializationPromise;
            const ak = Rt(tk.auth, Bk);
            await vB(!1, tk, Fk.providerId), await Wt(ak, tk.auth);
            const Xk = await Nt(tk);
            return ak._openRedirect(tk.auth, Fk, "linkViaRedirect", Xk)
          }(kk, Fk, Bk)
        }
        async function Et(kk, Fk) {
          return await UF(kk)._initializationPromise, St(kk, Fk, !1)
        }
        async function St(kk, Fk) {
          let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Rk = UF(kk),
            tk = Rt(Rk, Fk),
            ak = new mt(Rk, tk, Bk),
            Xk = await ak.execute();
          return Xk && !Bk && (delete Xk.user._redirectEventId, await Rk._persistUserIfCurrent(Xk.user), await Rk._setRedirectUser(null, Fk)), Xk
        }
        async function Nt(kk) {
          const Fk = OR(`${kk.uid}:::`);
          return kk._redirectEventId = Fk, await kk.auth._setRedirectUser(kk), await kk.auth._persistUserIfCurrent(kk), Fk
        }
        class Ht {
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
            return this.consumers.forEach((Bk => {
              this.isEventForConsumer(kk, Bk) && (Fk = !0, this.sendToConsumer(kk, Bk), this.saveEventToCache(kk))
            })), this.hasHandledPotentialRedirect || ! function(kk) {
              switch (kk.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return Mt(kk);
                default:
                  return !1
              }
            }(kk) || (this.hasHandledPotentialRedirect = !0, Fk || (this.queuedRedirectEvent = kk, Fk = !0)), Fk
          }
          sendToConsumer(kk, Fk) {
            var Bk;
            if (kk.error && !Mt(kk)) {
              const Rk = (null === (Bk = kk.error.code) || void 0 === Bk ? void 0 : Bk.split("auth/")[1]) || "internal-error";
              Fk.onError(Yk(this.auth, Rk))
            } else Fk.onAuthEvent(kk)
          }
          isEventForConsumer(kk, Fk) {
            const Bk = null === Fk.eventId || !!kk.eventId && kk.eventId === Fk.eventId;
            return Fk.filter.includes(kk.type) && Bk
          }
          hasEventBeenHandled(kk) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(ut(kk))
          }
          saveEventToCache(kk) {
            this.cachedEventUids.add(ut(kk)), this.lastProcessedEventTime = Date.now()
          }
        }

        function ut(kk) {
          return [kk.type, kk.eventId, kk.sessionId, kk.tenantId].filter((kk => kk)).join("-")
        }

        function Mt(kk) {
          let {
            type: Fk,
            error: Bk
          } = kk;
          return "unknown" === Fk && "auth/no-auth-event" === (null === Bk || void 0 === Bk ? void 0 : Bk.code)
        }
        const gt = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          Ut = /^https?/;
        async function ct(kk) {
          if (kk.config.emulator) return;
          const {
            authorizedDomains: Fk
          } = await async function(kk) {
            return zk(kk, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(kk);
          for (const Rk of Fk) try {
            if (Gt(Rk)) return
          } catch (Bk) {}
          ik(kk, "unauthorized-domain")
        }

        function Gt(kk) {
          const Fk = uk(),
            {
              protocol: Bk,
              hostname: Rk
            } = new URL(Fk);
          if (kk.startsWith("chrome-extension://")) {
            const tk = new URL(kk);
            return "" === tk.hostname && "" === Rk ? "chrome-extension:" === Bk && kk.replace("chrome-extension://", "") === Fk.replace("chrome-extension://", "") : "chrome-extension:" === Bk && tk.hostname === Rk
          }
          if (!Ut.test(Bk)) return !1;
          if (gt.test(kk)) return Rk === kk;
          const tk = kk.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + tk + "|" + tk + ")$", "i").test(Rk)
        }
        const Tt = new Uk(3e4, 6e4);

        function rt() {
          const kk = SR().___jsl;
          if (null === kk || void 0 === kk ? void 0 : kk.H)
            for (const Fk of Object.keys(kk.H))
              if (kk.H[Fk].r = kk.H[Fk].r || [], kk.H[Fk].L = kk.H[Fk].L || [], kk.H[Fk].r = [...kk.H[Fk].L], kk.CP)
                for (let Bk = 0; Bk < kk.CP.length; Bk++) kk.CP[Bk] = null
        }
        let Dt = null;

        function zt(kk) {
          return Dt = Dt || function(kk) {
            return new Promise(((Fk, Bk) => {
              var Rk, tk, ak;

              function Xk() {
                rt(), gapi.load("gapi.iframes", {
                  callback: () => {
                    Fk(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    rt(), Bk(Yk(kk, "network-request-failed"))
                  },
                  timeout: Tt.get()
                })
              }
              if (null === (tk = null === (Rk = SR().gapi) || void 0 === Rk ? void 0 : Rk.iframes) || void 0 === tk ? void 0 : tk.Iframe) Fk(gapi.iframes.getContext());
              else {
                if (!(null === (ak = SR().gapi) || void 0 === ak ? void 0 : ak.load)) {
                  const Fk = NF("iframefcb");
                  return SR()[Fk] = () => {
                    gapi.load ? Xk() : Bk(Yk(kk, "network-request-failed"))
                  }, SF(`https://apis.google.com/js/api.js?onload=${Fk}`).catch((kk => Bk(kk)))
                }
                Xk()
              }
            })).catch((kk => {
              throw Dt = null, kk
            }))
          }(kk), Dt
        }
        const Pt = new Uk(5e3, 15e3),
          ht = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          qt = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function Ct(kk) {
          const Fk = kk.config;
          Sk(Fk.authDomain, kk, "auth-domain-config-required");
          const Bk = Fk.emulator ? ck(Fk, "emulator/auth/iframe") : `https://${kk.config.authDomain}/__/auth/iframe`,
            ak = {
              apiKey: Fk.apiKey,
              appName: kk.name,
              v: tk.g
            },
            Xk = qt.get(kk.config.apiHost);
          Xk && (ak.eid = Xk);
          const bk = kk._getFrameworks();
          return bk.length && (ak.fw = bk.join(",")), `${Bk}?${(0,Rk.db)(ak).slice(1)}`
        }
        const Zt = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class pt {
          constructor(kk) {
            this.window = kk, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (kk) {}
          }
        }

        function Kt(kk, Fk, Bk) {
          let tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const Xk = Math.max((window.screen.availHeight - ak) / 2, 0).toString(),
            bk = Math.max((window.screen.availWidth - tk) / 2, 0).toString();
          let wk = "";
          const dk = Object.assign(Object.assign({}, Zt), {
              width: tk.toString(),
              height: ak.toString(),
              top: Xk,
              left: bk
            }),
            sk = (0, Rk.R)().toLowerCase();
          Bk && (wk = eF(sk) ? "_blank" : Bk), JF(sk) && (Fk = Fk || "http://localhost", dk.scrollbars = "yes");
          const Vk = Object.entries(dk).reduce(((kk, Fk) => {
            let [Bk, Rk] = Fk;
            return `${kk}${Bk}=${Rk},`
          }), "");
          if (function() {
              var kk;
              return vF(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Rk.R)()) && !!(null === (kk = window.navigator) || void 0 === kk ? void 0 : kk.standalone)
            }(sk) && "_self" !== wk) return function(kk, Fk) {
            const Bk = document.createElement("a");
            Bk.href = kk, Bk.target = Fk;
            const Rk = document.createEvent("MouseEvent");
            Rk.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), Bk.dispatchEvent(Rk)
          }(Fk || "", wk), new pt(null);
          const Jk = window.open(Fk || "", wk, Vk);
          Sk(Jk, kk, "popup-blocked");
          try {
            Jk.focus()
          } catch (Ak) {}
          return new pt(Jk)
        }
        const xt = "__/auth/handler",
          jt = "emulator/auth/handler",
          lt = encodeURIComponent("fac");
        async function nt(kk, Fk, Bk, ak, Xk, bk) {
            Sk(kk.config.authDomain, kk, "auth-domain-config-required"), Sk(kk.config.apiKey, kk, "invalid-api-key");
            const wk = {
              apiKey: kk.config.apiKey,
              appName: kk.name,
              authType: Bk,
              redirectUrl: ak,
              v: tk.g,
              eventId: Xk
            };
            if (Fk instanceof FB) {
              Fk.setDefaultLanguage(kk.languageCode), wk.providerId = Fk.providerId || "", (0, Rk.U)(Fk.getCustomParameters()) || (wk.customParameters = JSON.stringify(Fk.getCustomParameters()));
              for (const [kk, Fk] of Object.entries(bk || {})) wk[kk] = Fk
            }
            if (Fk instanceof BB) {
              const kk = Fk.getScopes().filter((kk => "" !== kk));
              kk.length > 0 && (wk.scopes = kk.join(","))
            }
            kk.tenantId && (wk.tid = kk.tenantId);
            const dk = wk;
            for (const Rk of Object.keys(dk)) void 0 === dk[Rk] && delete dk[Rk];
            const sk = await kk._getAppCheckToken(),
              Vk = sk ? `#${lt}=${encodeURIComponent(sk)}` : "";
            return `${function(kk){let{config:Fk}=kk;if(!Fk.emulator)return`
            https: //${Fk.authDomain}/${xt}`;return ck(Fk,jt)}(kk)}?${(0,Rk.db)(dk).slice(1)}${Vk}`}const It="webStorageSupport";const Qt=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oR,this._completeRedirectFn=St,this._overrideRedirectResult=vt}async _openPopup(kk,Fk,Bk,Rk){var tk;Hk(null===(tk=this.eventManagers[kk._key()])||void 0===tk?void 0:tk.manager,"_initialize() not called before _openPopup()");return Kt(kk,await nt(kk,Fk,Bk,uk(),Rk),OR())}async _openRedirect(kk,Fk,Bk,Rk){await this._originValidation(kk);return function(kk){SR().location.href=kk}(await nt(kk,Fk,Bk,uk(),Rk)),new Promise((()=>{}))}_initialize(kk){const Fk=kk._key();if(this.eventManagers[Fk]){const{manager:kk,promise:Bk}=this.eventManagers[Fk];return kk?Promise.resolve(kk):(Hk(Bk,"If manager is not set, promise should be"),Bk)}const Bk=this.initAndGetManager(kk);return this.eventManagers[Fk]={promise:Bk},Bk.catch((()=>{delete this.eventManagers[Fk]})),Bk}async initAndGetManager(kk){const Fk=await async function(kk){const Fk=await zt(kk),Bk=SR().gapi;return Sk(Bk,kk,"internal-error"),Fk.open({where:document.body,url:Ct(kk),messageHandlersFilter:Bk.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ht,dontclear:!0},(Fk=>new Promise((async(Bk,Rk)=>{await Fk.restyle({setHideOnLeave:!1});const tk=Yk(kk,"network-request-failed"),ak=SR().setTimeout((()=>{Rk(tk)}),Pt.get());function Xk(){SR().clearTimeout(ak),Bk(Fk)}Fk.ping(Xk).then(Xk,(()=>{Rk(tk)}))}))))}(kk),Bk=new Ht(kk);return Fk.register("authEvent",(Fk=>{Sk(null===Fk||void 0===Fk?void 0:Fk.authEvent,kk,"invalid-auth-event");return{status:Bk.onEvent(Fk.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[kk._key()]={manager:Bk},this.iframes[kk._key()]=Fk,Bk}_isIframeWebStorageSupported(kk,Fk){this.iframes[kk._key()].send(It,{type:It},(Bk=>{var Rk;const tk=null===(Rk=null===Bk||void 0===Bk?void 0:Bk[0])||void 0===Rk?void 0:Rk[It];void 0!==tk&&Fk(!!tk),ik(kk,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(kk){const Fk=kk._key();return this.originValidationPromises[Fk]||(this.originValidationPromises[Fk]=ct(kk)),this.originValidationPromises[Fk]}get _shouldInitProactively(){return iF()||AF()||vF()}};class ka{constructor(kk){this.factorId=kk}_process(kk,Fk,Bk){switch(Fk.type){case"enroll":return this._finalizeEnroll(kk,Fk.credential,Bk);case"signin":return this._finalizeSignIn(kk,Fk.credential);default:return Nk("unexpected MultiFactorSessionType")}}}class Fa extends ka{constructor(kk){super("phone"),this.credential=kk}static _fromCredential(kk){return new Fa(kk)}_finalizeEnroll(kk,Fk,Bk){return function(kk,Fk){return zk(kk,"POST","/v2/accounts/mfaEnrollment:finalize",Dk(kk,Fk))}(kk,{idToken:Fk,displayName:Bk,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(kk,Fk){return function(kk,Fk){return zk(kk,"POST","/v2/accounts/mfaSignIn:finalize",Dk(kk,Fk))}(kk,{mfaPendingCredential:Fk,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ba{constructor(){}static assertion(kk){return Fa._fromCredential(kk)}}Ba.FACTOR_ID="phone";class Ra{static assertionForEnrollment(kk,Fk){return ta._fromSecret(kk,Fk)}static assertionForSignIn(kk,Fk){return ta._fromEnrollmentId(kk,Fk)}static async generateSecret(kk){const Fk=kk;Sk("undefined"!==typeof Fk.auth,"internal-error");const Bk=await(Rk=Fk.auth,tk={idToken:Fk.credential,totpEnrollmentInfo:{}},zk(Rk,"POST","/v2/accounts/mfaEnrollment:start",Dk(Rk,tk)));var Rk,tk;return aa._fromStartTotpMfaEnrollmentResponse(Bk,Fk.auth)}}Ra.FACTOR_ID="totp";class ta extends ka{constructor(kk,Fk,Bk){super("totp"),this.otp=kk,this.enrollmentId=Fk,this.secret=Bk}static _fromSecret(kk,Fk){return new ta(Fk,void 0,kk)}static _fromEnrollmentId(kk,Fk){return new ta(Fk,kk)}async _finalizeEnroll(kk,Fk,Bk){return Sk("undefined"!==typeof this.secret,kk,"argument-error"),function(kk,Fk){return zk(kk,"POST","/v2/accounts/mfaEnrollment:finalize",Dk(kk,Fk))}(kk,{idToken:Fk,displayName:Bk,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(kk,Fk){Sk(void 0!==this.enrollmentId&&void 0!==this.otp,kk,"argument-error");const Bk={verificationCode:this.otp};return function(kk,Fk){return zk(kk,"POST","/v2/accounts/mfaSignIn:finalize",Dk(kk,Fk))}(kk,{mfaPendingCredential:Fk,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:Bk})}}class aa{constructor(kk,Fk,Bk,Rk,tk,ak,Xk){this.sessionInfo=ak,this.auth=Xk,this.secretKey=kk,this.hashingAlgorithm=Fk,this.codeLength=Bk,this.codeIntervalSeconds=Rk,this.enrollmentCompletionDeadline=tk}static _fromStartTotpMfaEnrollmentResponse(kk,Fk){return new aa(kk.totpSessionInfo.sharedSecretKey,kk.totpSessionInfo.hashingAlgorithm,kk.totpSessionInfo.verificationCodeLength,kk.totpSessionInfo.periodSec,new Date(kk.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),kk.totpSessionInfo.sessionInfo,Fk)}_makeTotpVerificationInfo(kk){return{sessionInfo:this.sessionInfo,verificationCode:kk}}generateQrCodeUrl(kk,Fk){var Bk;let Rk=!1;return(Xa(kk)||Xa(Fk))&&(Rk=!0),Rk&&(Xa(kk)&&(kk=(null===(Bk=this.auth.currentUser)||void 0===Bk?void 0:Bk.email)||"unknownuser"),Xa(Fk)&&(Fk=this.auth.name)),`otpauth://totp/${Fk}:${kk}?secret=${this.secretKey}&issuer=${Fk}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Xa(kk){return"undefined"===typeof kk||0===(null===kk||void 0===kk?void 0:kk.length)}var ba="@firebase/auth",wa="0.23.2";class da{constructor(kk){this.auth=kk,this.internalListeners=new Map}getUid(){var kk;return this.assertAuthConfigured(),(null===(kk=this.auth.currentUser)||void 0===kk?void 0:kk.uid)||null}async getToken(kk){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(kk)}}addAuthTokenListener(kk){if(this.assertAuthConfigured(),this.internalListeners.has(kk))return;const Fk=this.auth.onIdTokenChanged((Fk=>{kk((null===Fk||void 0===Fk?void 0:Fk.stsTokenManager.accessToken)||null)}));this.internalListeners.set(kk,Fk),this.updateProactiveRefresh()}removeAuthTokenListener(kk){this.assertAuthConfigured();const Fk=this.internalListeners.get(kk);Fk&&(this.internalListeners.delete(kk),Fk(),this.updateProactiveRefresh())}assertAuthConfigured(){Sk(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const sa=(0,Rk.L)("authIdTokenMaxAge")||300;let Va=null;const Ja=kk=>async Fk=>{const Bk=Fk&&await Fk.getIdTokenResult(),Rk=Bk&&((new Date).getTime()-Date.parse(Bk.issuedAtTime))/1e3;if(Rk&&Rk>sa)return;const tk=null===Bk||void 0===Bk?void 0:Bk.token;Va!==tk&&(Va=tk,await fetch(kk,{method:tk?"POST":"DELETE",headers:tk?{Authorization:`Bearer ${tk}`}:{}}))};function Aa(){let kk=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,tk.K)();const Fk=(0,tk.w)(kk,"auth");if(Fk.isInitialized())return Fk.getImmediate();const Bk=GF(kk,{popupRedirectResolver:Qt,persistence:[DR,iR,oR]}),ak=(0,Rk.L)("authTokenSyncURL");if(ak){const kk=Ja(ak);aR(Bk,kk,(()=>kk(Bk.currentUser))),tR(Bk,(Fk=>kk(Fk)))}const Xk=(0,Rk.I)("auth");return Xk&&TF(Bk,`http://${Xk}`),Bk}var ea;ea="Browser",(0,tk.A)(new bk.g("auth",((kk,Fk)=>{let{options:Bk}=Fk;const Rk=kk.getProvider("app").getImmediate(),tk=kk.getProvider("heartbeat"),ak=kk.getProvider("app-check-internal"),{apiKey:Xk,authDomain:bk}=Rk.options;Sk(Xk&&!Xk.includes(":"),"invalid-api-key",{appName:Rk.name});const wk={apiKey:Xk,authDomain:bk,clientPlatform:ea,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:YF(ea)},dk=new gF(Rk,tk,ak,wk);return function(kk,Fk){const Bk=(null===Fk||void 0===Fk?void 0:Fk.persistence)||[],Rk=(Array.isArray(Bk)?Bk:[Bk]).map(XF);(null===Fk||void 0===Fk?void 0:Fk.errorMap)&&kk._updateErrorMap(Fk.errorMap),kk._initializeWithPersistence(Rk,null===Fk||void 0===Fk?void 0:Fk.popupRedirectResolver)}(dk,Bk),dk}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((kk,Fk,Bk)=>{kk.getProvider("auth-internal").initialize()}))),(0,tk.A)(new bk.g("auth-internal",(kk=>(kk=>new da(kk))(UF(kk.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,tk.S)(ba,wa,function(kk){switch(kk){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ea)),(0,tk.S)(ba,wa,"esm2017")}};Object.freeze(modules);for(const kk in modules)Object.freeze(modules[kk]);