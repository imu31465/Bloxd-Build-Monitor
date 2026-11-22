/*! For license information please see 3lwmg.264.ad0b33c9.chunk.js.LICENSE.txt */
export const id = 264;
export const ids = [264];
export const modules = {
    40111: (kk, ek, ik) => {
        ik.r(ek), ik.d(ek, {
          ActionCodeOperation: () => xk,
          ActionCodeURL: () => Re,
          AuthCredential: () => We,
          AuthErrorCodes: () => lk,
          EmailAuthCredential: () => Ze,
          EmailAuthProvider: () => ki,
          FacebookAuthProvider: () => fi,
          FactorId: () => Pk,
          GithubAuthProvider: () => bi,
          GoogleAuthProvider: () => Si,
          OAuthCredential: () => ge,
          OAuthProvider: () => Di,
          OperationType: () => Kk,
          PhoneAuthCredential: () => Ne,
          PhoneAuthProvider: () => Sf,
          PhoneMultiFactorGenerator: () => SS,
          ProviderId: () => mk,
          RecaptchaVerifier: () => ND,
          SAMLAuthProvider: () => Pi,
          SignInMethod: () => Mk,
          TotpMultiFactorGenerator: () => bS,
          TotpSecret: () => PS,
          TwitterAuthProvider: () => mi,
          applyActionCode: () => Qi,
          beforeAuthStateChanged: () => rD,
          browserLocalPersistence: () => CD,
          browserPopupRedirectResolver: () => iS,
          browserSessionPersistence: () => jD,
          checkActionCode: () => vi,
          confirmPasswordReset: () => zi,
          connectAuthEmulator: () => Ee,
          createUserWithEmailAndPassword: () => ai,
          debugErrorMap: () => Uk,
          deleteUser: () => xD,
          fetchSignInMethodsForEmail: () => ci,
          getAdditionalUserInfo: () => DD,
          getAuth: () => wS,
          getIdToken: () => Zk,
          getIdTokenResult: () => Ok,
          getMultiFactorResolver: () => HD,
          getRedirectResult: () => Vf,
          inMemoryPersistence: () => Pe,
          indexedDBLocalPersistence: () => tD,
          initializeAuth: () => ve,
          initializeRecaptchaConfig: () => SD,
          isSignInWithEmailLink: () => Xi,
          linkWithCredential: () => ji,
          linkWithPhoneNumber: () => kf,
          linkWithPopup: () => Hf,
          linkWithRedirect: () => df,
          multiFactor: () => pD,
          onAuthStateChanged: () => PD,
          onIdTokenChanged: () => bD,
          parseActionCodeURL: () => Je,
          prodErrorMap: () => Hk,
          reauthenticateWithCredential: () => si,
          reauthenticateWithPhoneNumber: () => ef,
          reauthenticateWithPopup: () => Uf,
          reauthenticateWithRedirect: () => sf,
          reload: () => ee,
          sendEmailVerification: () => Ti,
          sendPasswordResetEmail: () => Ii,
          sendSignInLinkToEmail: () => ti,
          setPersistence: () => fD,
          signInAnonymously: () => ni,
          signInWithCredential: () => Ai,
          signInWithCustomToken: () => di,
          signInWithEmailAndPassword: () => Wi,
          signInWithEmailLink: () => Bi,
          signInWithPhoneNumber: () => JD,
          signInWithPopup: () => nf,
          signInWithRedirect: () => jf,
          signOut: () => KD,
          unlink: () => li,
          updateCurrentUser: () => MD,
          updateEmail: () => Oi,
          updatePassword: () => gi,
          updatePhoneNumber: () => ff,
          updateProfile: () => Zi,
          useDeviceLanguage: () => mD,
          verifyBeforeUpdateEmail: () => oi,
          verifyPasswordResetCode: () => Ei
        });
        var Dk = ik(40092),
          fk = ik(40078);

        function Sk(kk, ek) {
          var ik = {};
          for (var Dk in kk) Object.prototype.hasOwnProperty.call(kk, Dk) && ek.indexOf(Dk) < 0 && (ik[Dk] = kk[Dk]);
          if (null != kk && "function" === typeof Object.getOwnPropertySymbols) {
            var fk = 0;
            for (Dk = Object.getOwnPropertySymbols(kk); fk < Dk.length; fk++) ek.indexOf(Dk[fk]) < 0 && Object.prototype.propertyIsEnumerable.call(kk, Dk[fk]) && (ik[Dk[fk]] = kk[Dk[fk]])
          }
          return ik
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var bk = ik(40099),
          rk = ik(40087);
        const Pk = {
            PHONE: "phone",
            TOTP: "totp"
          },
          mk = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Mk = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Kk = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          xk = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function nk() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const Uk = function() {
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
          Hk = nk,
          wk = new Dk.g("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          lk = {
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
          pk = new bk.g("@firebase/auth");

        function yk(kk) {
          if (pk.logLevel <= bk.e.ERROR) {
            for (var ek = arguments.length, ik = new Array(ek > 1 ? ek - 1 : 0), Dk = 1; Dk < ek; Dk++) ik[Dk - 1] = arguments[Dk];
            pk.error(`Auth (${fk.f}): ${kk}`, ...ik)
          }
        }

        function Yk(kk) {
          for (var ek = arguments.length, ik = new Array(ek > 1 ? ek - 1 : 0), Dk = 1; Dk < ek; Dk++) ik[Dk - 1] = arguments[Dk];
          throw jk(kk, ...ik)
        }

        function Lk(kk) {
          for (var ek = arguments.length, ik = new Array(ek > 1 ? ek - 1 : 0), Dk = 1; Dk < ek; Dk++) ik[Dk - 1] = arguments[Dk];
          return jk(kk, ...ik)
        }

        function Ck(kk, ek, ik) {
          const fk = Object.assign(Object.assign({}, Hk()), {
            [ek]: ik
          });
          return new Dk.g("auth", "Firebase", fk).create(ek, {
            appName: kk.name
          })
        }

        function Ak(kk, ek, ik) {
          if (!(ek instanceof ik)) throw ik.name !== ek.constructor.name && Yk(kk, "argument-error"), Ck(kk, "argument-error", `Type of ${ek.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function jk(kk) {
          for (var ek = arguments.length, ik = new Array(ek > 1 ? ek - 1 : 0), Dk = 1; Dk < ek; Dk++) ik[Dk - 1] = arguments[Dk];
          if ("string" !== typeof kk) {
            const ek = ik[0],
              Dk = [...ik.slice(1)];
            return Dk[0] && (Dk[0].appName = kk.name), kk._errorFactory.create(ek, ...Dk)
          }
          return wk.create(kk, ...ik)
        }

        function sk(kk, ek) {
          if (!kk) {
            for (var ik = arguments.length, Dk = new Array(ik > 2 ? ik - 2 : 0), fk = 2; fk < ik; fk++) Dk[fk - 2] = arguments[fk];
            throw jk(ek, ...Dk)
          }
        }

        function dk(kk) {
          const ek = "INTERNAL ASSERTION FAILED: " + kk;
          throw yk(ek), new Error(ek)
        }

        function Vk(kk, ek) {
          kk || dk(ek)
        }

        function Fk() {
          var kk;
          return "undefined" !== typeof self && (null === (kk = self.location) || void 0 === kk ? void 0 : kk.href) || ""
        }

        function uk() {
          return "http:" === qk() || "https:" === qk()
        }

        function qk() {
          var kk;
          return "undefined" !== typeof self && (null === (kk = self.location) || void 0 === kk ? void 0 : kk.protocol) || null
        }
        class Ik {
          constructor(kk, ek) {
            this.shortDelay = kk, this.longDelay = ek, Vk(ek > kk, "Short delay should be less than long delay!"), this.isMobile = (0, Dk.gb)() || (0, Dk.kb)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (uk() || (0, Dk.W)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function zk(kk, ek) {
          Vk(kk.emulator, "Emulator should always be set here");
          const {
            url: ik
          } = kk.emulator;
          return ek ? `${ik}${ek.startsWith("/")?ek.slice(1):ek}` : ik
        }
        class Qk {
          static initialize(kk, ek, ik) {
            this.fetchImpl = kk, ek && (this.headersImpl = ek), ik && (this.responseImpl = ik)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void dk("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void dk("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void dk("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const vk = {
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
          Ek = new Ik(3e4, 6e4);

        function hk(kk, ek) {
          return kk.tenantId && !ek.tenantId ? Object.assign(Object.assign({}, ek), {
            tenantId: kk.tenantId
          }) : ek
        }
        async function ak(kk, ek, ik, fk) {
          return Wk(kk, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let Sk = {},
              bk = {};
            fk && ("GET" === ek ? bk = fk : Sk = {
              body: JSON.stringify(fk)
            });
            const rk = (0, Dk.qb)(Object.assign({
                key: kk.config.apiKey
              }, bk)).slice(1),
              Pk = await kk._getAdditionalHeaders();
            return Pk["Content-Type"] = "application/json", kk.languageCode && (Pk["X-Firebase-Locale"] = kk.languageCode), Qk.fetch()(Xk(kk, kk.config.apiHost, ik, rk), Object.assign({
              method: ek,
              headers: Pk,
              referrerPolicy: "no-referrer"
            }, Sk))
          }))
        }
        async function Wk(kk, ek, ik) {
          kk._canInitEmulator = !1;
          const fk = Object.assign(Object.assign({}, vk), ek);
          try {
            const ek = new Bk(kk),
              Dk = await Promise.race([ik(), ek.promise]);
            ek.clearNetworkTimeout();
            const Sk = await Dk.json();
            if ("needConfirmation" in Sk) throw ck(kk, "account-exists-with-different-credential", Sk);
            if (Dk.ok && !("errorMessage" in Sk)) return Sk;
            {
              const ek = Dk.ok ? Sk.errorMessage : Sk.error.message,
                [ik, bk] = ek.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === ik) throw ck(kk, "credential-already-in-use", Sk);
              if ("EMAIL_EXISTS" === ik) throw ck(kk, "email-already-in-use", Sk);
              if ("USER_DISABLED" === ik) throw ck(kk, "user-disabled", Sk);
              const rk = fk[ik] || ik.toLowerCase().replace(/[_\s]+/g, "-");
              if (bk) throw Ck(kk, rk, bk);
              Yk(kk, rk)
            }
          } catch (Sk) {
            if (Sk instanceof Dk.j) throw Sk;
            Yk(kk, "network-request-failed", {
              message: String(Sk)
            })
          }
        }
        async function tk(kk, ek, ik, Dk) {
          let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const Sk = await ak(kk, ek, ik, Dk, fk);
          return "mfaPendingCredential" in Sk && Yk(kk, "multi-factor-auth-required", {
            _serverResponse: Sk
          }), Sk
        }

        function Xk(kk, ek, ik, Dk) {
          const fk = `${ek}${ik}?${Dk}`;
          return kk.config.emulator ? zk(kk.config, fk) : `${kk.config.apiScheme}://${fk}`
        }
        class Bk {
          constructor(kk) {
            this.auth = kk, this.timer = null, this.promise = new Promise(((kk, ek) => {
              this.timer = setTimeout((() => ek(Lk(this.auth, "network-request-failed"))), Ek.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function ck(kk, ek, ik) {
          const Dk = {
            appName: kk.name
          };
          ik.email && (Dk.email = ik.email), ik.phoneNumber && (Dk.phoneNumber = ik.phoneNumber);
          const fk = Lk(kk, ek, Dk);
          return fk.customData._tokenResponse = ik, fk
        }

        function Tk(kk) {
          if (kk) try {
            const ek = new Date(Number(kk));
            if (!isNaN(ek.getTime())) return ek.toUTCString()
          } catch (ek) {}
        }

        function Zk(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, Dk.Q)(kk).getIdToken(ek)
        }
        async function Ok(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const ik = (0, Dk.Q)(kk),
            fk = await ik.getIdToken(ek),
            Sk = Gk(fk);
          sk(Sk && Sk.exp && Sk.auth_time && Sk.iat, ik.auth, "internal-error");
          const bk = "object" === typeof Sk.firebase ? Sk.firebase : void 0,
            rk = null === bk || void 0 === bk ? void 0 : bk.sign_in_provider;
          return {
            claims: Sk,
            token: fk,
            authTime: Tk(gk(Sk.auth_time)),
            issuedAtTime: Tk(gk(Sk.iat)),
            expirationTime: Tk(gk(Sk.exp)),
            signInProvider: rk || null,
            signInSecondFactor: (null === bk || void 0 === bk ? void 0 : bk.sign_in_second_factor) || null
          }
        }

        function gk(kk) {
          return 1e3 * Number(kk)
        }

        function Gk(kk) {
          const [ek, ik, fk] = kk.split(".");
          if (void 0 === ek || void 0 === ik || void 0 === fk) return yk("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const kk = (0, Dk.o)(ik);
            return kk ? JSON.parse(kk) : (yk("Failed to decode base64 JWT payload"), null)
          } catch (Sk) {
            return yk("Caught error parsing JWT payload as JSON", null === Sk || void 0 === Sk ? void 0 : Sk.toString()), null
          }
        }
        async function Nk(kk, ek) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return ek;
          try {
            return await ek
          } catch (ik) {
            throw ik instanceof Dk.j && function(kk) {
              let {
                code: ek
              } = kk;
              return "auth/user-disabled" === ek || "auth/user-token-expired" === ek
            }(ik) && kk.auth.currentUser === kk && await kk.auth.signOut(), ik
          }
        }
        class Rk {
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
            var ek;
            if (kk) {
              const kk = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), kk
            } {
              this.errorBackoff = 3e4;
              const kk = (null !== (ek = this.user.stsTokenManager.expirationTime) && void 0 !== ek ? ek : 0) - Date.now() - 3e5;
              return Math.max(0, kk)
            }
          }
          schedule() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const ek = this.getInterval(kk);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), ek)
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
        class Jk {
          constructor(kk, ek) {
            this.createdAt = kk, this.lastLoginAt = ek, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = Tk(this.lastLoginAt), this.creationTime = Tk(this.createdAt)
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
        async function ke(kk) {
          var ek;
          const ik = kk.auth,
            Dk = await kk.getIdToken(),
            fk = await Nk(kk, async function(kk, ek) {
              return ak(kk, "POST", "/v1/accounts:lookup", ek)
            }(ik, {
              idToken: Dk
            }));
          sk(null === fk || void 0 === fk ? void 0 : fk.users.length, ik, "internal-error");
          const bk = fk.users[0];
          kk._notifyReloadListener(bk);
          const rk = (null === (ek = bk.providerUserInfo) || void 0 === ek ? void 0 : ek.length) ? bk.providerUserInfo.map((kk => {
            var {
              providerId: ek
            } = kk, ik = Sk(kk, ["providerId"]);
            return {
              providerId: ek,
              uid: ik.rawId || "",
              displayName: ik.displayName || null,
              email: ik.email || null,
              phoneNumber: ik.phoneNumber || null,
              photoURL: ik.photoUrl || null
            }
          })) : [];
          const Pk = (mk = kk.providerData, Mk = rk, [...mk.filter((kk => !Mk.some((ek => ek.providerId === kk.providerId)))), ...Mk]);
          var mk, Mk;
          const Kk = kk.isAnonymous,
            xk = !(kk.email && bk.passwordHash) && !(null === Pk || void 0 === Pk ? void 0 : Pk.length),
            nk = !!Kk && xk,
            Uk = {
              uid: bk.localId,
              displayName: bk.displayName || null,
              photoURL: bk.photoUrl || null,
              email: bk.email || null,
              emailVerified: bk.emailVerified || !1,
              phoneNumber: bk.phoneNumber || null,
              tenantId: bk.tenantId || null,
              providerData: Pk,
              metadata: new Jk(bk.createdAt, bk.lastLoginAt),
              isAnonymous: nk
            };
          Object.assign(kk, Uk)
        }
        async function ee(kk) {
          const ek = (0, Dk.Q)(kk);
          await ke(ek), await ek.auth._persistUserIfCurrent(ek), ek.auth._notifyListenersIfCurrent(ek)
        }
        class ie {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(kk) {
            sk(kk.idToken, "internal-error"), sk("undefined" !== typeof kk.idToken, "internal-error"), sk("undefined" !== typeof kk.refreshToken, "internal-error");
            const ek = "expiresIn" in kk && "undefined" !== typeof kk.expiresIn ? Number(kk.expiresIn) : function(kk) {
              const ek = Gk(kk);
              return sk(ek, "internal-error"), sk("undefined" !== typeof ek.exp, "internal-error"), sk("undefined" !== typeof ek.iat, "internal-error"), Number(ek.exp) - Number(ek.iat)
            }(kk.idToken);
            this.updateTokensAndExpiration(kk.idToken, kk.refreshToken, ek)
          }
          async getToken(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return sk(!this.accessToken || this.refreshToken, kk, "user-token-expired"), ek || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(kk, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(kk, ek) {
            const {
              accessToken: ik,
              refreshToken: fk,
              expiresIn: Sk
            } = await async function(kk, ek) {
              const ik = await Wk(kk, {}, (async () => {
                const ik = (0, Dk.qb)({
                    grant_type: "refresh_token",
                    refresh_token: ek
                  }).slice(1),
                  {
                    tokenApiHost: fk,
                    apiKey: Sk
                  } = kk.config,
                  bk = Xk(kk, fk, "/v1/token", `key=${Sk}`),
                  rk = await kk._getAdditionalHeaders();
                return rk["Content-Type"] = "application/x-www-form-urlencoded", Qk.fetch()(bk, {
                  method: "POST",
                  headers: rk,
                  body: ik
                })
              }));
              return {
                accessToken: ik.access_token,
                expiresIn: ik.expires_in,
                refreshToken: ik.refresh_token
              }
            }(kk, ek);
            this.updateTokensAndExpiration(ik, fk, Number(Sk))
          }
          updateTokensAndExpiration(kk, ek, ik) {
            this.refreshToken = ek || null, this.accessToken = kk || null, this.expirationTime = Date.now() + 1e3 * ik
          }
          static fromJSON(kk, ek) {
            const {
              refreshToken: ik,
              accessToken: Dk,
              expirationTime: fk
            } = ek, Sk = new ie;
            return ik && (sk("string" === typeof ik, "internal-error", {
              appName: kk
            }), Sk.refreshToken = ik), Dk && (sk("string" === typeof Dk, "internal-error", {
              appName: kk
            }), Sk.accessToken = Dk), fk && (sk("number" === typeof fk, "internal-error", {
              appName: kk
            }), Sk.expirationTime = fk), Sk
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
            return Object.assign(new ie, this.toJSON())
          }
          _performRefresh() {
            return dk("not implemented")
          }
        }

        function De(kk, ek) {
          sk("string" === typeof kk || "undefined" === typeof kk, "internal-error", {
            appName: ek
          })
        }
        class fe {
          constructor(kk) {
            var {
              uid: ek,
              auth: ik,
              stsTokenManager: Dk
            } = kk, fk = Sk(kk, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new Rk(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = ek, this.auth = ik, this.stsTokenManager = Dk, this.accessToken = Dk.accessToken, this.displayName = fk.displayName || null, this.email = fk.email || null, this.emailVerified = fk.emailVerified || !1, this.phoneNumber = fk.phoneNumber || null, this.photoURL = fk.photoURL || null, this.isAnonymous = fk.isAnonymous || !1, this.tenantId = fk.tenantId || null, this.providerData = fk.providerData ? [...fk.providerData] : [], this.metadata = new Jk(fk.createdAt || void 0, fk.lastLoginAt || void 0)
          }
          async getIdToken(kk) {
            const ek = await Nk(this, this.stsTokenManager.getToken(this.auth, kk));
            return sk(ek, this.auth, "internal-error"), this.accessToken !== ek && (this.accessToken = ek, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), ek
          }
          getIdTokenResult(kk) {
            return Ok(this, kk)
          }
          reload() {
            return ee(this)
          }
          _assign(kk) {
            this !== kk && (sk(this.uid === kk.uid, this.auth, "internal-error"), this.displayName = kk.displayName, this.photoURL = kk.photoURL, this.email = kk.email, this.emailVerified = kk.emailVerified, this.phoneNumber = kk.phoneNumber, this.isAnonymous = kk.isAnonymous, this.tenantId = kk.tenantId, this.providerData = kk.providerData.map((kk => Object.assign({}, kk))), this.metadata._copy(kk.metadata), this.stsTokenManager._assign(kk.stsTokenManager))
          }
          _clone(kk) {
            const ek = new fe(Object.assign(Object.assign({}, this), {
              auth: kk,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return ek.metadata._copy(this.metadata), ek
          }
          _onReload(kk) {
            sk(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = kk, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
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
            let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ik = !1;
            kk.idToken && kk.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(kk), ik = !0), ek && await ke(this), await this.auth._persistUserIfCurrent(this), ik && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const kk = await this.getIdToken();
            return await Nk(this, async function(kk, ek) {
              return ak(kk, "POST", "/v1/accounts:delete", ek)
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
          static _fromJSON(kk, ek) {
            var ik, Dk, fk, Sk, bk, rk, Pk, mk;
            const Mk = null !== (ik = ek.displayName) && void 0 !== ik ? ik : void 0,
              Kk = null !== (Dk = ek.email) && void 0 !== Dk ? Dk : void 0,
              xk = null !== (fk = ek.phoneNumber) && void 0 !== fk ? fk : void 0,
              nk = null !== (Sk = ek.photoURL) && void 0 !== Sk ? Sk : void 0,
              Uk = null !== (bk = ek.tenantId) && void 0 !== bk ? bk : void 0,
              Hk = null !== (rk = ek._redirectEventId) && void 0 !== rk ? rk : void 0,
              wk = null !== (Pk = ek.createdAt) && void 0 !== Pk ? Pk : void 0,
              lk = null !== (mk = ek.lastLoginAt) && void 0 !== mk ? mk : void 0,
              {
                uid: pk,
                emailVerified: yk,
                isAnonymous: Yk,
                providerData: Lk,
                stsTokenManager: Ck
              } = ek;
            sk(pk && Ck, kk, "internal-error");
            const Ak = ie.fromJSON(this.name, Ck);
            sk("string" === typeof pk, kk, "internal-error"), De(Mk, kk.name), De(Kk, kk.name), sk("boolean" === typeof yk, kk, "internal-error"), sk("boolean" === typeof Yk, kk, "internal-error"), De(xk, kk.name), De(nk, kk.name), De(Uk, kk.name), De(Hk, kk.name), De(wk, kk.name), De(lk, kk.name);
            const jk = new fe({
              uid: pk,
              auth: kk,
              email: Kk,
              emailVerified: yk,
              displayName: Mk,
              isAnonymous: Yk,
              photoURL: nk,
              phoneNumber: xk,
              tenantId: Uk,
              stsTokenManager: Ak,
              createdAt: wk,
              lastLoginAt: lk
            });
            return Lk && Array.isArray(Lk) && (jk.providerData = Lk.map((kk => Object.assign({}, kk)))), Hk && (jk._redirectEventId = Hk), jk
          }
          static async _fromIdTokenResponse(kk, ek) {
            let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const Dk = new ie;
            Dk.updateFromServerResponse(ek);
            const fk = new fe({
              uid: ek.localId,
              auth: kk,
              stsTokenManager: Dk,
              isAnonymous: ik
            });
            return await ke(fk), fk
          }
        }
        const Se = new Map;

        function be(kk) {
          Vk(kk instanceof Function, "Expected a class definition");
          let ek = Se.get(kk);
          return ek ? (Vk(ek instanceof kk, "Instance stored in cache mismatched with class"), ek) : (ek = new kk, Se.set(kk, ek), ek)
        }
        class re {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(kk, ek) {
            this.storage[kk] = ek
          }
          async _get(kk) {
            const ek = this.storage[kk];
            return void 0 === ek ? null : ek
          }
          async _remove(kk) {
            delete this.storage[kk]
          }
          _addListener(kk, ek) {}
          _removeListener(kk, ek) {}
        }
        re.type = "NONE";
        const Pe = re;

        function me(kk, ek, ik) {
          return `firebase:${kk}:${ek}:${ik}`
        }
        class Me {
          constructor(kk, ek, ik) {
            this.persistence = kk, this.auth = ek, this.userKey = ik;
            const {
              config: Dk,
              name: fk
            } = this.auth;
            this.fullUserKey = me(this.userKey, Dk.apiKey, fk), this.fullPersistenceKey = me("persistence", Dk.apiKey, fk), this.boundEventHandler = ek._onStorageEvent.bind(ek), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(kk) {
            return this.persistence._set(this.fullUserKey, kk.toJSON())
          }
          async getCurrentUser() {
            const kk = await this.persistence._get(this.fullUserKey);
            return kk ? fe._fromJSON(this.auth, kk) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(kk) {
            if (this.persistence === kk) return;
            const ek = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = kk, ek ? this.setCurrentUser(ek) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(kk, ek) {
            let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!ek.length) return new Me(be(Pe), kk, ik);
            const Dk = (await Promise.all(ek.map((async kk => {
              if (await kk._isAvailable()) return kk
            })))).filter((kk => kk));
            let fk = Dk[0] || be(Pe);
            const Sk = me(ik, kk.config.apiKey, kk.name);
            let bk = null;
            for (const mk of ek) try {
              const ek = await mk._get(Sk);
              if (ek) {
                const ik = fe._fromJSON(kk, ek);
                mk !== fk && (bk = ik), fk = mk;
                break
              }
            } catch (Pk) {}
            const rk = Dk.filter((kk => kk._shouldAllowMigration));
            return fk._shouldAllowMigration && rk.length ? (fk = rk[0], bk && await fk._set(Sk, bk.toJSON()), await Promise.all(ek.map((async kk => {
              if (kk !== fk) try {
                await kk._remove(Sk)
              } catch (Pk) {}
            }))), new Me(fk, kk, ik)) : new Me(fk, kk, ik)
          }
        }

        function Ke(kk) {
          const ek = kk.toLowerCase();
          if (ek.includes("opera/") || ek.includes("opr/") || ek.includes("opios/")) return "Opera";
          if (He(ek)) return "IEMobile";
          if (ek.includes("msie") || ek.includes("trident/")) return "IE";
          if (ek.includes("edge/")) return "Edge";
          if (xe(ek)) return "Firefox";
          if (ek.includes("silk/")) return "Silk";
          if (le(ek)) return "Blackberry";
          if (pe(ek)) return "Webos";
          if (ne(ek)) return "Safari";
          if ((ek.includes("chrome/") || Ue(ek)) && !ek.includes("edge/")) return "Chrome";
          if (we(ek)) return "Android";
          {
            const ek = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              ik = kk.match(ek);
            if (2 === (null === ik || void 0 === ik ? void 0 : ik.length)) return ik[1]
          }
          return "Other"
        }

        function xe() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Dk.T)();
          return /firefox\//i.test(kk)
        }

        function ne() {
          const kk = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Dk.T)()).toLowerCase();
          return kk.includes("safari/") && !kk.includes("chrome/") && !kk.includes("crios/") && !kk.includes("android")
        }

        function Ue() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Dk.T)();
          return /crios\//i.test(kk)
        }

        function He() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Dk.T)();
          return /iemobile/i.test(kk)
        }

        function we() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Dk.T)();
          return /android/i.test(kk)
        }

        function le() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Dk.T)();
          return /blackberry/i.test(kk)
        }

        function pe() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Dk.T)();
          return /webos/i.test(kk)
        }

        function ye() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Dk.T)();
          return /iphone|ipad|ipod/i.test(kk) || /macintosh/i.test(kk) && /mobile/i.test(kk)
        }

        function Ye() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Dk.T)();
          return ye(kk) || we(kk) || pe(kk) || le(kk) || /windows phone/i.test(kk) || He(kk)
        }

        function Le(kk) {
          let ek, ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (kk) {
            case "Browser":
              ek = Ke((0, Dk.T)());
              break;
            case "Worker":
              ek = `${Ke((0,Dk.T)())}-${kk}`;
              break;
            default:
              ek = kk
          }
          const Sk = ik.length ? ik.join(",") : "FirebaseCore-web";
          return `${ek}/JsCore/${fk.f}/${Sk}`
        }
        async function Ce(kk, ek) {
          return ak(kk, "GET", "/v2/recaptchaConfig", hk(kk, ek))
        }

        function Ae(kk) {
          return void 0 !== kk && void 0 !== kk.getResponse
        }

        function je(kk) {
          return void 0 !== kk && void 0 !== kk.enterprise
        }
        class se {
          constructor(kk) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === kk.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = kk.recaptchaKey.split("/")[3], this.emailPasswordEnabled = kk.recaptchaEnforcementState.some((kk => "EMAIL_PASSWORD_PROVIDER" === kk.provider && "OFF" !== kk.enforcementState))
          }
        }

        function de(kk) {
          return new Promise(((ek, ik) => {
            const Dk = document.createElement("script");
            Dk.setAttribute("src", kk), Dk.onload = ek, Dk.onerror = kk => {
                const ek = Lk("internal-error");
                ek.customData = kk, ik(ek)
              }, Dk.type = "text/javascript", Dk.charset = "UTF-8",
              function() {
                var kk, ek;
                return null !== (ek = null === (kk = document.getElementsByTagName("head")) || void 0 === kk ? void 0 : kk[0]) && void 0 !== ek ? ek : document
              }().appendChild(Dk)
          }))
        }

        function Ve(kk) {
          return `__${kk}${Math.floor(1e6*Math.random())}`
        }
        class Fe {
          constructor(kk) {
            this.type = "recaptcha-enterprise", this.auth = ze(kk)
          }
          async verify() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function ik(ek, ik, Dk) {
              const fk = window.grecaptcha;
              je(fk) ? fk.enterprise.ready((() => {
                fk.enterprise.execute(ek, {
                  action: kk
                }).then((kk => {
                  ik(kk)
                })).catch((() => {
                  ik("NO_RECAPTCHA")
                }))
              })) : Dk(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((kk, Dk) => {
              (async function(kk) {
                if (!ek) {
                  if (null == kk.tenantId && null != kk._agentRecaptchaConfig) return kk._agentRecaptchaConfig.siteKey;
                  if (null != kk.tenantId && void 0 !== kk._tenantRecaptchaConfigs[kk.tenantId]) return kk._tenantRecaptchaConfigs[kk.tenantId].siteKey
                }
                return new Promise((async (ek, ik) => {
                  Ce(kk, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((Dk => {
                    if (void 0 !== Dk.recaptchaKey) {
                      const ik = new se(Dk);
                      return null == kk.tenantId ? kk._agentRecaptchaConfig = ik : kk._tenantRecaptchaConfigs[kk.tenantId] = ik, ek(ik.siteKey)
                    }
                    ik(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((kk => {
                    ik(kk)
                  }))
                }))
              })(this.auth).then((fk => {
                if (!ek && je(window.grecaptcha)) ik(fk, kk, Dk);
                else {
                  if ("undefined" === typeof window) return void Dk(new Error("RecaptchaVerifier is only supported in browser"));
                  de("https://www.google.com/recaptcha/enterprise.js?render=" + fk).then((() => {
                    ik(fk, kk, Dk)
                  })).catch((kk => {
                    Dk(kk)
                  }))
                }
              })).catch((kk => {
                Dk(kk)
              }))
            }))
          }
        }
        async function ue(kk, ek, ik) {
          let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const fk = new Fe(kk);
          let Sk;
          try {
            Sk = await fk.verify(ik)
          } catch (rk) {
            Sk = await fk.verify(ik, !0)
          }
          const bk = Object.assign({}, ek);
          return Dk ? Object.assign(bk, {
            captchaResp: Sk
          }) : Object.assign(bk, {
            captchaResponse: Sk
          }), Object.assign(bk, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(bk, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), bk
        }
        class qe {
          constructor(kk) {
            this.auth = kk, this.queue = []
          }
          pushCallback(kk, ek) {
            const ik = ek => new Promise(((ik, Dk) => {
              try {
                ik(kk(ek))
              } catch (fk) {
                Dk(fk)
              }
            }));
            ik.onAbort = ek, this.queue.push(ik);
            const Dk = this.queue.length - 1;
            return () => {
              this.queue[Dk] = () => Promise.resolve()
            }
          }
          async runMiddleware(kk) {
            if (this.auth.currentUser === kk) return;
            const ek = [];
            try {
              for (const ik of this.queue) await ik(kk), ik.onAbort && ek.push(ik.onAbort)
            } catch (ik) {
              ek.reverse();
              for (const kk of ek) try {
                kk()
              } catch (Dk) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === ik || void 0 === ik ? void 0 : ik.message
              })
            }
          }
        }
        class Ie {
          constructor(kk, ek, ik, Dk) {
            this.app = kk, this.heartbeatServiceProvider = ek, this.appCheckServiceProvider = ik, this.config = Dk, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Qe(this), this.idTokenSubscription = new Qe(this), this.beforeStateQueue = new qe(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = wk, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = kk.name, this.clientVersion = Dk.sdkClientVersion
          }
          _initializeWithPersistence(kk, ek) {
            return ek && (this._popupRedirectResolver = be(ek)), this._initializationPromise = this.queue((async () => {
              var ik, Dk;
              if (!this._deleted && (this.persistenceManager = await Me.create(this, kk), !this._deleted)) {
                if (null === (ik = this._popupRedirectResolver) || void 0 === ik ? void 0 : ik._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (fk) {}
                await this.initializeCurrentUser(ek), this.lastNotifiedUid = (null === (Dk = this.currentUser) || void 0 === Dk ? void 0 : Dk.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const kk = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || kk ? this.currentUser && kk && this.currentUser.uid === kk.uid ? (this._currentUser._assign(kk), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(kk, !0) : void 0
          }
          async initializeCurrentUser(kk) {
            var ek;
            const ik = await this.assertedPersistence.getCurrentUser();
            let Dk = ik,
              fk = !1;
            if (kk && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const ik = null === (ek = this.redirectUser) || void 0 === ek ? void 0 : ek._redirectEventId,
                Sk = null === Dk || void 0 === Dk ? void 0 : Dk._redirectEventId,
                bk = await this.tryRedirectSignIn(kk);
              ik && ik !== Sk || !(null === bk || void 0 === bk ? void 0 : bk.user) || (Dk = bk.user, fk = !0)
            }
            if (!Dk) return this.directlySetCurrentUser(null);
            if (!Dk._redirectEventId) {
              if (fk) try {
                await this.beforeStateQueue.runMiddleware(Dk)
              } catch (Sk) {
                Dk = ik, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(Sk)))
              }
              return Dk ? this.reloadAndSetCurrentUserOrClear(Dk) : this.directlySetCurrentUser(null)
            }
            return sk(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === Dk._redirectEventId ? this.directlySetCurrentUser(Dk) : this.reloadAndSetCurrentUserOrClear(Dk)
          }
          async tryRedirectSignIn(kk) {
            let ek = null;
            try {
              ek = await this._popupRedirectResolver._completeRedirectFn(this, kk, !0)
            } catch (ik) {
              await this._setRedirectUser(null)
            }
            return ek
          }
          async reloadAndSetCurrentUserOrClear(kk) {
            try {
              await ke(kk)
            } catch (ek) {
              if ("auth/network-request-failed" !== (null === ek || void 0 === ek ? void 0 : ek.code)) return this.directlySetCurrentUser(null)
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
            const ek = kk ? (0, Dk.Q)(kk) : null;
            return ek && sk(ek.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(ek && ek._clone(this))
          }
          async _updateCurrentUser(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return kk && sk(this.tenantId === kk.tenantId, this, "tenant-id-mismatch"), ek || await this.beforeStateQueue.runMiddleware(kk), this.queue((async () => {
              await this.directlySetCurrentUser(kk), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(kk) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(be(kk))
            }))
          }
          async initializeRecaptchaConfig() {
            const kk = await Ce(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              ek = new se(kk);
            if (null == this.tenantId ? this._agentRecaptchaConfig = ek : this._tenantRecaptchaConfigs[this.tenantId] = ek, ek.emailPasswordEnabled) {
              new Fe(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(kk) {
            this._errorFactory = new Dk.g("auth", "Firebase", kk())
          }
          onAuthStateChanged(kk, ek, ik) {
            return this.registerStateListener(this.authStateSubscription, kk, ek, ik)
          }
          beforeAuthStateChanged(kk, ek) {
            return this.beforeStateQueue.pushCallback(kk, ek)
          }
          onIdTokenChanged(kk, ek, ik) {
            return this.registerStateListener(this.idTokenSubscription, kk, ek, ik)
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
          async _setRedirectUser(kk, ek) {
            const ik = await this.getOrInitRedirectPersistenceManager(ek);
            return null === kk ? ik.removeCurrentUser() : ik.setCurrentUser(kk)
          }
          async getOrInitRedirectPersistenceManager(kk) {
            if (!this.redirectPersistenceManager) {
              const ek = kk && be(kk) || this._popupRedirectResolver;
              sk(ek, this, "argument-error"), this.redirectPersistenceManager = await Me.create(this, [be(ek._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(kk) {
            var ek, ik;
            return this._isInitialized && await this.queue((async () => {})), (null === (ek = this._currentUser) || void 0 === ek ? void 0 : ek._redirectEventId) === kk ? this._currentUser : (null === (ik = this.redirectUser) || void 0 === ik ? void 0 : ik._redirectEventId) === kk ? this.redirectUser : null
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
            var kk, ek;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const ik = null !== (ek = null === (kk = this.currentUser) || void 0 === kk ? void 0 : kk.uid) && void 0 !== ek ? ek : null;
            this.lastNotifiedUid !== ik && (this.lastNotifiedUid = ik, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(kk, ek, ik, Dk) {
            if (this._deleted) return () => {};
            const fk = "function" === typeof ek ? ek : ek.next.bind(ek),
              Sk = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return sk(Sk, this, "internal-error"), Sk.then((() => fk(this.currentUser))), "function" === typeof ek ? kk.addObserver(ek, ik, Dk) : kk.addObserver(ek)
          }
          async directlySetCurrentUser(kk) {
            this.currentUser && this.currentUser !== kk && this._currentUser._stopProactiveRefresh(), kk && this.isProactiveRefreshEnabled && kk._startProactiveRefresh(), this.currentUser = kk, kk ? await this.assertedPersistence.setCurrentUser(kk) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(kk) {
            return this.operations = this.operations.then(kk, kk), this.operations
          }
          get assertedPersistence() {
            return sk(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(kk) {
            kk && !this.frameworks.includes(kk) && (this.frameworks.push(kk), this.frameworks.sort(), this.clientVersion = Le(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var kk;
            const ek = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (ek["X-Firebase-gmpid"] = this.app.options.appId);
            const ik = await (null === (kk = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === kk ? void 0 : kk.getHeartbeatsHeader());
            ik && (ek["X-Firebase-Client"] = ik);
            const Dk = await this._getAppCheckToken();
            return Dk && (ek["X-Firebase-AppCheck"] = Dk), ek
          }
          async _getAppCheckToken() {
            var kk;
            const ek = await (null === (kk = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === kk ? void 0 : kk.getToken());
            return (null === ek || void 0 === ek ? void 0 : ek.error) && function(kk) {
              if (pk.logLevel <= bk.e.WARN) {
                for (var ek = arguments.length, ik = new Array(ek > 1 ? ek - 1 : 0), Dk = 1; Dk < ek; Dk++) ik[Dk - 1] = arguments[Dk];
                pk.warn(`Auth (${fk.f}): ${kk}`, ...ik)
              }
            }(`Error while retrieving App Check token: ${ek.error}`), null === ek || void 0 === ek ? void 0 : ek.token
          }
        }

        function ze(kk) {
          return (0, Dk.Q)(kk)
        }
        class Qe {
          constructor(kk) {
            this.auth = kk, this.observer = null, this.addObserver = (0, Dk.y)((kk => this.observer = kk))
          }
          get next() {
            return sk(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function ve(kk, ek) {
          const ik = (0, fk.z)(kk, "auth");
          if (ik.isInitialized()) {
            const kk = ik.getImmediate(),
              fk = ik.getOptions();
            if ((0, Dk.C)(fk, null !== ek && void 0 !== ek ? ek : {})) return kk;
            Yk(kk, "already-initialized")
          }
          return ik.initialize({
            options: ek
          })
        }

        function Ee(kk, ek, ik) {
          const Dk = ze(kk);
          sk(Dk._canInitEmulator, Dk, "emulator-config-failed"), sk(/^https?:\/\//.test(ek), Dk, "invalid-emulator-scheme");
          const fk = !!(null === ik || void 0 === ik ? void 0 : ik.disableWarnings),
            Sk = he(ek),
            {
              host: bk,
              port: rk
            } = function(kk) {
              const ek = he(kk),
                ik = /(\/\/)?([^?#/]+)/.exec(kk.substr(ek.length));
              if (!ik) return {
                host: "",
                port: null
              };
              const Dk = ik[2].split("@").pop() || "",
                fk = /^(\[[^\]]+\])(:|$)/.exec(Dk);
              if (fk) {
                const kk = fk[1];
                return {
                  host: kk,
                  port: ae(Dk.substr(kk.length + 1))
                }
              } {
                const [kk, ek] = Dk.split(":");
                return {
                  host: kk,
                  port: ae(ek)
                }
              }
            }(ek),
            Pk = null === rk ? "" : `:${rk}`;
          Dk.config.emulator = {
            url: `${Sk}//${bk}${Pk}/`
          }, Dk.settings.appVerificationDisabledForTesting = !0, Dk.emulatorConfig = Object.freeze({
            host: bk,
            port: rk,
            protocol: Sk.replace(":", ""),
            options: Object.freeze({
              disableWarnings: fk
            })
          }), fk || function() {
            function kk() {
              const kk = document.createElement("p"),
                ek = kk.style;
              kk.innerText = "Running in emulator mode. Do not use with production credentials.", ek.position = "fixed", ek.width = "100%", ek.backgroundColor = "#ffffff", ek.border = ".1em solid #000000", ek.color = "#b50000", ek.bottom = "0px", ek.left = "0px", ek.margin = "0px", ek.zIndex = "10000", ek.textAlign = "center", kk.classList.add("firebase-emulator-warning"), document.body.appendChild(kk)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", kk) : kk())
          }()
        }

        function he(kk) {
          const ek = kk.indexOf(":");
          return ek < 0 ? "" : kk.substr(0, ek + 1)
        }

        function ae(kk) {
          if (!kk) return null;
          const ek = Number(kk);
          return isNaN(ek) ? null : ek
        }
        class We {
          constructor(kk, ek) {
            this.providerId = kk, this.signInMethod = ek
          }
          toJSON() {
            return dk("not implemented")
          }
          _getIdTokenResponse(kk) {
            return dk("not implemented")
          }
          _linkToIdToken(kk, ek) {
            return dk("not implemented")
          }
          _getReauthenticationResolver(kk) {
            return dk("not implemented")
          }
        }
        async function te(kk, ek) {
          return ak(kk, "POST", "/v1/accounts:resetPassword", hk(kk, ek))
        }
        async function Xe(kk, ek) {
          return ak(kk, "POST", "/v1/accounts:update", ek)
        }
        async function Be(kk, ek) {
          return tk(kk, "POST", "/v1/accounts:signInWithPassword", hk(kk, ek))
        }
        async function ce(kk, ek) {
          return ak(kk, "POST", "/v1/accounts:sendOobCode", hk(kk, ek))
        }
        async function Te(kk, ek) {
          return ce(kk, ek)
        }
        async function oe(kk, ek) {
          return ce(kk, ek)
        }
        class Ze extends We {
          constructor(kk, ek, ik) {
            let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", ik), this._email = kk, this._password = ek, this._tenantId = Dk
          }
          static _fromEmailAndPassword(kk, ek) {
            return new Ze(kk, ek, "password")
          }
          static _fromEmailAndCode(kk, ek) {
            return new Ze(kk, ek, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
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
            const ek = "string" === typeof kk ? JSON.parse(kk) : kk;
            if ((null === ek || void 0 === ek ? void 0 : ek.email) && (null === ek || void 0 === ek ? void 0 : ek.password)) {
              if ("password" === ek.signInMethod) return this._fromEmailAndPassword(ek.email, ek.password);
              if ("emailLink" === ek.signInMethod) return this._fromEmailAndCode(ek.email, ek.password, ek.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(kk) {
            var ek;
            switch (this.signInMethod) {
              case "password":
                const ik = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (ek = kk._getRecaptchaConfig()) || void 0 === ek ? void 0 : ek.emailPasswordEnabled) {
                  const ek = await ue(kk, ik, "signInWithPassword");
                  return Be(kk, ek)
                }
                return Be(kk, ik).catch((async ek => {
                  if ("auth/missing-recaptcha-token" === ek.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const ek = await ue(kk, ik, "signInWithPassword");
                    return Be(kk, ek)
                  }
                  return Promise.reject(ek)
                }));
              case "emailLink":
                return async function(kk, ek) {
                  return tk(kk, "POST", "/v1/accounts:signInWithEmailLink", hk(kk, ek))
                }(kk, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Yk(kk, "internal-error")
            }
          }
          async _linkToIdToken(kk, ek) {
            switch (this.signInMethod) {
              case "password":
                return Xe(kk, {
                  idToken: ek,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(kk, ek) {
                  return tk(kk, "POST", "/v1/accounts:signInWithEmailLink", hk(kk, ek))
                }(kk, {
                  idToken: ek,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Yk(kk, "internal-error")
            }
          }
          _getReauthenticationResolver(kk) {
            return this._getIdTokenResponse(kk)
          }
        }
        async function Oe(kk, ek) {
          return tk(kk, "POST", "/v1/accounts:signInWithIdp", hk(kk, ek))
        }
        class ge extends We {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(kk) {
            const ek = new ge(kk.providerId, kk.signInMethod);
            return kk.idToken || kk.accessToken ? (kk.idToken && (ek.idToken = kk.idToken), kk.accessToken && (ek.accessToken = kk.accessToken), kk.nonce && !kk.pendingToken && (ek.nonce = kk.nonce), kk.pendingToken && (ek.pendingToken = kk.pendingToken)) : kk.oauthToken && kk.oauthTokenSecret ? (ek.accessToken = kk.oauthToken, ek.secret = kk.oauthTokenSecret) : Yk("argument-error"), ek
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
            const ek = "string" === typeof kk ? JSON.parse(kk) : kk,
              {
                providerId: ik,
                signInMethod: Dk
              } = ek,
              fk = Sk(ek, ["providerId", "signInMethod"]);
            if (!ik || !Dk) return null;
            const bk = new ge(ik, Dk);
            return bk.idToken = fk.idToken || void 0, bk.accessToken = fk.accessToken || void 0, bk.secret = fk.secret, bk.nonce = fk.nonce, bk.pendingToken = fk.pendingToken || null, bk
          }
          _getIdTokenResponse(kk) {
            return Oe(kk, this.buildRequest())
          }
          _linkToIdToken(kk, ek) {
            const ik = this.buildRequest();
            return ik.idToken = ek, Oe(kk, ik)
          }
          _getReauthenticationResolver(kk) {
            const ek = this.buildRequest();
            return ek.autoCreate = !1, Oe(kk, ek)
          }
          buildRequest() {
            const kk = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) kk.pendingToken = this.pendingToken;
            else {
              const ek = {};
              this.idToken && (ek.id_token = this.idToken), this.accessToken && (ek.access_token = this.accessToken), this.secret && (ek.oauth_token_secret = this.secret), ek.providerId = this.providerId, this.nonce && !this.pendingToken && (ek.nonce = this.nonce), kk.postBody = (0, Dk.qb)(ek)
            }
            return kk
          }
        }
        const Ge = {
          USER_NOT_FOUND: "user-not-found"
        };
        class Ne extends We {
          constructor(kk) {
            super("phone", "phone"), this.params = kk
          }
          static _fromVerification(kk, ek) {
            return new Ne({
              verificationId: kk,
              verificationCode: ek
            })
          }
          static _fromTokenResponse(kk, ek) {
            return new Ne({
              phoneNumber: kk,
              temporaryProof: ek
            })
          }
          _getIdTokenResponse(kk) {
            return async function(kk, ek) {
              return tk(kk, "POST", "/v1/accounts:signInWithPhoneNumber", hk(kk, ek))
            }(kk, this._makeVerificationRequest())
          }
          _linkToIdToken(kk, ek) {
            return async function(kk, ek) {
              const ik = await tk(kk, "POST", "/v1/accounts:signInWithPhoneNumber", hk(kk, ek));
              if (ik.temporaryProof) throw ck(kk, "account-exists-with-different-credential", ik);
              return ik
            }(kk, Object.assign({
              idToken: ek
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(kk) {
            return async function(kk, ek) {
              return tk(kk, "POST", "/v1/accounts:signInWithPhoneNumber", hk(kk, Object.assign(Object.assign({}, ek), {
                operation: "REAUTH"
              })), Ge)
            }(kk, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: kk,
              phoneNumber: ek,
              verificationId: ik,
              verificationCode: Dk
            } = this.params;
            return kk && ek ? {
              temporaryProof: kk,
              phoneNumber: ek
            } : {
              sessionInfo: ik,
              code: Dk
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
              verificationId: ek,
              verificationCode: ik,
              phoneNumber: Dk,
              temporaryProof: fk
            } = kk;
            return ik || ek || Dk || fk ? new Ne({
              verificationId: ek,
              verificationCode: ik,
              phoneNumber: Dk,
              temporaryProof: fk
            }) : null
          }
        }
        class Re {
          constructor(kk) {
            var ek, ik, fk, Sk, bk, rk;
            const Pk = (0, Dk.mb)((0, Dk.G)(kk)),
              mk = null !== (ek = Pk.apiKey) && void 0 !== ek ? ek : null,
              Mk = null !== (ik = Pk.oobCode) && void 0 !== ik ? ik : null,
              Kk = function(kk) {
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
              }(null !== (fk = Pk.mode) && void 0 !== fk ? fk : null);
            sk(mk && Mk && Kk, "argument-error"), this.apiKey = mk, this.operation = Kk, this.code = Mk, this.continueUrl = null !== (Sk = Pk.continueUrl) && void 0 !== Sk ? Sk : null, this.languageCode = null !== (bk = Pk.languageCode) && void 0 !== bk ? bk : null, this.tenantId = null !== (rk = Pk.tenantId) && void 0 !== rk ? rk : null
          }
          static parseLink(kk) {
            const ek = function(kk) {
              const ek = (0, Dk.mb)((0, Dk.G)(kk)).link,
                ik = ek ? (0, Dk.mb)((0, Dk.G)(ek)).deep_link_id : null,
                fk = (0, Dk.mb)((0, Dk.G)(kk)).deep_link_id;
              return (fk ? (0, Dk.mb)((0, Dk.G)(fk)).link : null) || fk || ik || ek || kk
            }(kk);
            try {
              return new Re(ek)
            } catch (ik) {
              return null
            }
          }
        }

        function Je(kk) {
          return Re.parseLink(kk)
        }
        class ki {
          constructor() {
            this.providerId = ki.PROVIDER_ID
          }
          static credential(kk, ek) {
            return Ze._fromEmailAndPassword(kk, ek)
          }
          static credentialWithLink(kk, ek) {
            const ik = Re.parseLink(ek);
            return sk(ik, "argument-error"), Ze._fromEmailAndCode(kk, ik.code, ik.tenantId)
          }
        }
        ki.PROVIDER_ID = "password", ki.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", ki.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class ei {
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
        class ii extends ei {
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
        class Di extends ii {
          static credentialFromJSON(kk) {
            const ek = "string" === typeof kk ? JSON.parse(kk) : kk;
            return sk("providerId" in ek && "signInMethod" in ek, "argument-error"), ge._fromParams(ek)
          }
          credential(kk) {
            return this._credential(Object.assign(Object.assign({}, kk), {
              nonce: kk.rawNonce
            }))
          }
          _credential(kk) {
            return sk(kk.idToken || kk.accessToken, "argument-error"), ge._fromParams(Object.assign(Object.assign({}, kk), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(kk) {
            return Di.oauthCredentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return Di.oauthCredentialFromTaggedObject(kk.customData || {})
          }
          static oauthCredentialFromTaggedObject(kk) {
            let {
              _tokenResponse: ek
            } = kk;
            if (!ek) return null;
            const {
              oauthIdToken: ik,
              oauthAccessToken: Dk,
              oauthTokenSecret: fk,
              pendingToken: Sk,
              nonce: bk,
              providerId: rk
            } = ek;
            if (!Dk && !fk && !ik && !Sk) return null;
            if (!rk) return null;
            try {
              return new Di(rk)._credential({
                idToken: ik,
                accessToken: Dk,
                nonce: bk,
                pendingToken: Sk
              })
            } catch (Pk) {
              return null
            }
          }
        }
        class fi extends ii {
          constructor() {
            super("facebook.com")
          }
          static credential(kk) {
            return ge._fromParams({
              providerId: fi.PROVIDER_ID,
              signInMethod: fi.FACEBOOK_SIGN_IN_METHOD,
              accessToken: kk
            })
          }
          static credentialFromResult(kk) {
            return fi.credentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return fi.credentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromTaggedObject(kk) {
            let {
              _tokenResponse: ek
            } = kk;
            if (!ek || !("oauthAccessToken" in ek)) return null;
            if (!ek.oauthAccessToken) return null;
            try {
              return fi.credential(ek.oauthAccessToken)
            } catch (ik) {
              return null
            }
          }
        }
        fi.FACEBOOK_SIGN_IN_METHOD = "facebook.com", fi.PROVIDER_ID = "facebook.com";
        class Si extends ii {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(kk, ek) {
            return ge._fromParams({
              providerId: Si.PROVIDER_ID,
              signInMethod: Si.GOOGLE_SIGN_IN_METHOD,
              idToken: kk,
              accessToken: ek
            })
          }
          static credentialFromResult(kk) {
            return Si.credentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return Si.credentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromTaggedObject(kk) {
            let {
              _tokenResponse: ek
            } = kk;
            if (!ek) return null;
            const {
              oauthIdToken: ik,
              oauthAccessToken: Dk
            } = ek;
            if (!ik && !Dk) return null;
            try {
              return Si.credential(ik, Dk)
            } catch (fk) {
              return null
            }
          }
        }
        Si.GOOGLE_SIGN_IN_METHOD = "google.com", Si.PROVIDER_ID = "google.com";
        class bi extends ii {
          constructor() {
            super("github.com")
          }
          static credential(kk) {
            return ge._fromParams({
              providerId: bi.PROVIDER_ID,
              signInMethod: bi.GITHUB_SIGN_IN_METHOD,
              accessToken: kk
            })
          }
          static credentialFromResult(kk) {
            return bi.credentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return bi.credentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromTaggedObject(kk) {
            let {
              _tokenResponse: ek
            } = kk;
            if (!ek || !("oauthAccessToken" in ek)) return null;
            if (!ek.oauthAccessToken) return null;
            try {
              return bi.credential(ek.oauthAccessToken)
            } catch (ik) {
              return null
            }
          }
        }
        bi.GITHUB_SIGN_IN_METHOD = "github.com", bi.PROVIDER_ID = "github.com";
        class ri extends We {
          constructor(kk, ek) {
            super(kk, kk), this.pendingToken = ek
          }
          _getIdTokenResponse(kk) {
            return Oe(kk, this.buildRequest())
          }
          _linkToIdToken(kk, ek) {
            const ik = this.buildRequest();
            return ik.idToken = ek, Oe(kk, ik)
          }
          _getReauthenticationResolver(kk) {
            const ek = this.buildRequest();
            return ek.autoCreate = !1, Oe(kk, ek)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(kk) {
            const ek = "string" === typeof kk ? JSON.parse(kk) : kk,
              {
                providerId: ik,
                signInMethod: Dk,
                pendingToken: fk
              } = ek;
            return ik && Dk && fk && ik === Dk ? new ri(ik, fk) : null
          }
          static _create(kk, ek) {
            return new ri(kk, ek)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class Pi extends ei {
          constructor(kk) {
            sk(kk.startsWith("saml."), "argument-error"), super(kk)
          }
          static credentialFromResult(kk) {
            return Pi.samlCredentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return Pi.samlCredentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromJSON(kk) {
            const ek = ri.fromJSON(kk);
            return sk(ek, "argument-error"), ek
          }
          static samlCredentialFromTaggedObject(kk) {
            let {
              _tokenResponse: ek
            } = kk;
            if (!ek) return null;
            const {
              pendingToken: ik,
              providerId: Dk
            } = ek;
            if (!ik || !Dk) return null;
            try {
              return ri._create(Dk, ik)
            } catch (fk) {
              return null
            }
          }
        }
        class mi extends ii {
          constructor() {
            super("twitter.com")
          }
          static credential(kk, ek) {
            return ge._fromParams({
              providerId: mi.PROVIDER_ID,
              signInMethod: mi.TWITTER_SIGN_IN_METHOD,
              oauthToken: kk,
              oauthTokenSecret: ek
            })
          }
          static credentialFromResult(kk) {
            return mi.credentialFromTaggedObject(kk)
          }
          static credentialFromError(kk) {
            return mi.credentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromTaggedObject(kk) {
            let {
              _tokenResponse: ek
            } = kk;
            if (!ek) return null;
            const {
              oauthAccessToken: ik,
              oauthTokenSecret: Dk
            } = ek;
            if (!ik || !Dk) return null;
            try {
              return mi.credential(ik, Dk)
            } catch (fk) {
              return null
            }
          }
        }
        async function Mi(kk, ek) {
          return tk(kk, "POST", "/v1/accounts:signUp", hk(kk, ek))
        }
        mi.TWITTER_SIGN_IN_METHOD = "twitter.com", mi.PROVIDER_ID = "twitter.com";
        class Ki {
          constructor(kk) {
            this.user = kk.user, this.providerId = kk.providerId, this._tokenResponse = kk._tokenResponse, this.operationType = kk.operationType
          }
          static async _fromIdTokenResponse(kk, ek, ik) {
            let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const fk = await fe._fromIdTokenResponse(kk, ik, Dk),
              Sk = xi(ik);
            return new Ki({
              user: fk,
              providerId: Sk,
              _tokenResponse: ik,
              operationType: ek
            })
          }
          static async _forOperation(kk, ek, ik) {
            await kk._updateTokensIfNecessary(ik, !0);
            const Dk = xi(ik);
            return new Ki({
              user: kk,
              providerId: Dk,
              _tokenResponse: ik,
              operationType: ek
            })
          }
        }

        function xi(kk) {
          return kk.providerId ? kk.providerId : "phoneNumber" in kk ? "phone" : null
        }
        async function ni(kk) {
          var ek;
          const ik = ze(kk);
          if (await ik._initializationPromise, null === (ek = ik.currentUser) || void 0 === ek ? void 0 : ek.isAnonymous) return new Ki({
            user: ik.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const Dk = await Mi(ik, {
              returnSecureToken: !0
            }),
            fk = await Ki._fromIdTokenResponse(ik, "signIn", Dk, !0);
          return await ik._updateCurrentUser(fk.user), fk
        }
        class Ui extends Dk.j {
          constructor(kk, ek, ik, Dk) {
            var fk;
            super(ek.code, ek.message), this.operationType = ik, this.user = Dk, Object.setPrototypeOf(this, Ui.prototype), this.customData = {
              appName: kk.name,
              tenantId: null !== (fk = kk.tenantId) && void 0 !== fk ? fk : void 0,
              _serverResponse: ek.customData._serverResponse,
              operationType: ik
            }
          }
          static _fromErrorAndOperation(kk, ek, ik, Dk) {
            return new Ui(kk, ek, ik, Dk)
          }
        }

        function Hi(kk, ek, ik, Dk) {
          return ("reauthenticate" === ek ? ik._getReauthenticationResolver(kk) : ik._getIdTokenResponse(kk)).catch((ik => {
            if ("auth/multi-factor-auth-required" === ik.code) throw Ui._fromErrorAndOperation(kk, ik, ek, Dk);
            throw ik
          }))
        }

        function wi(kk) {
          return new Set(kk.map((kk => {
            let {
              providerId: ek
            } = kk;
            return ek
          })).filter((kk => !!kk)))
        }
        async function li(kk, ek) {
          const ik = (0, Dk.Q)(kk);
          await Yi(!0, ik, ek);
          const {
            providerUserInfo: fk
          } = await async function(kk, ek) {
            return ak(kk, "POST", "/v1/accounts:update", ek)
          }(ik.auth, {
            idToken: await ik.getIdToken(),
            deleteProvider: [ek]
          }), Sk = wi(fk || []);
          return ik.providerData = ik.providerData.filter((kk => Sk.has(kk.providerId))), Sk.has("phone") || (ik.phoneNumber = null), await ik.auth._persistUserIfCurrent(ik), ik
        }
        async function yi(kk, ek) {
          let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Dk = await Nk(kk, ek._linkToIdToken(kk.auth, await kk.getIdToken()), ik);
          return Ki._forOperation(kk, "link", Dk)
        }
        async function Yi(kk, ek, ik) {
          await ke(ek);
          const Dk = !1 === kk ? "provider-already-linked" : "no-such-provider";
          sk(wi(ek.providerData).has(ik) === kk, ek.auth, Dk)
        }
        async function Li(kk, ek) {
          let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: Dk
          } = kk, fk = "reauthenticate";
          try {
            const Sk = await Nk(kk, Hi(Dk, fk, ek, kk), ik);
            sk(Sk.idToken, Dk, "internal-error");
            const bk = Gk(Sk.idToken);
            sk(bk, Dk, "internal-error");
            const {
              sub: rk
            } = bk;
            return sk(kk.uid === rk, Dk, "user-mismatch"), Ki._forOperation(kk, fk, Sk)
          } catch (Sk) {
            throw "auth/user-not-found" === (null === Sk || void 0 === Sk ? void 0 : Sk.code) && Yk(Dk, "user-mismatch"), Sk
          }
        }
        async function Ci(kk, ek) {
          let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Dk = "signIn",
            fk = await Hi(kk, Dk, ek),
            Sk = await Ki._fromIdTokenResponse(kk, Dk, fk);
          return ik || await kk._updateCurrentUser(Sk.user), Sk
        }
        async function Ai(kk, ek) {
          return Ci(ze(kk), ek)
        }
        async function ji(kk, ek) {
          const ik = (0, Dk.Q)(kk);
          return await Yi(!1, ik, ek.providerId), yi(ik, ek)
        }
        async function si(kk, ek) {
          return Li((0, Dk.Q)(kk), ek)
        }
        async function di(kk, ek) {
          const ik = ze(kk),
            Dk = await async function(kk, ek) {
              return tk(kk, "POST", "/v1/accounts:signInWithCustomToken", hk(kk, ek))
            }(ik, {
              token: ek,
              returnSecureToken: !0
            }), fk = await Ki._fromIdTokenResponse(ik, "signIn", Dk);
          return await ik._updateCurrentUser(fk.user), fk
        }
        class Vi {
          constructor(kk, ek) {
            this.factorId = kk, this.uid = ek.mfaEnrollmentId, this.enrollmentTime = new Date(ek.enrolledAt).toUTCString(), this.displayName = ek.displayName
          }
          static _fromServerResponse(kk, ek) {
            return "phoneInfo" in ek ? Fi._fromServerResponse(kk, ek) : "totpInfo" in ek ? ui._fromServerResponse(kk, ek) : Yk(kk, "internal-error")
          }
        }
        class Fi extends Vi {
          constructor(kk) {
            super("phone", kk), this.phoneNumber = kk.phoneInfo
          }
          static _fromServerResponse(kk, ek) {
            return new Fi(ek)
          }
        }
        class ui extends Vi {
          constructor(kk) {
            super("totp", kk)
          }
          static _fromServerResponse(kk, ek) {
            return new ui(ek)
          }
        }

        function qi(kk, ek, ik) {
          var Dk;
          sk((null === (Dk = ik.url) || void 0 === Dk ? void 0 : Dk.length) > 0, kk, "invalid-continue-uri"), sk("undefined" === typeof ik.dynamicLinkDomain || ik.dynamicLinkDomain.length > 0, kk, "invalid-dynamic-link-domain"), ek.continueUrl = ik.url, ek.dynamicLinkDomain = ik.dynamicLinkDomain, ek.canHandleCodeInApp = ik.handleCodeInApp, ik.iOS && (sk(ik.iOS.bundleId.length > 0, kk, "missing-ios-bundle-id"), ek.iOSBundleId = ik.iOS.bundleId), ik.android && (sk(ik.android.packageName.length > 0, kk, "missing-android-pkg-name"), ek.androidInstallApp = ik.android.installApp, ek.androidMinimumVersionCode = ik.android.minimumVersion, ek.androidPackageName = ik.android.packageName)
        }
        async function Ii(kk, ek, ik) {
          var Dk;
          const fk = ze(kk),
            Sk = {
              requestType: "PASSWORD_RESET",
              email: ek,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (Dk = fk._getRecaptchaConfig()) || void 0 === Dk ? void 0 : Dk.emailPasswordEnabled) {
            const kk = await ue(fk, Sk, "getOobCode", !0);
            ik && qi(fk, kk, ik), await Te(fk, kk)
          } else ik && qi(fk, Sk, ik), await Te(fk, Sk).catch((async kk => {
            if ("auth/missing-recaptcha-token" !== kk.code) return Promise.reject(kk);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const kk = await ue(fk, Sk, "getOobCode", !0);
              ik && qi(fk, kk, ik), await Te(fk, kk)
            }
          }))
        }
        async function zi(kk, ek, ik) {
          await te((0, Dk.Q)(kk), {
            oobCode: ek,
            newPassword: ik
          })
        }
        async function Qi(kk, ek) {
          await async function(kk, ek) {
            return ak(kk, "POST", "/v1/accounts:update", hk(kk, ek))
          }((0, Dk.Q)(kk), {
            oobCode: ek
          })
        }
        async function vi(kk, ek) {
          const ik = (0, Dk.Q)(kk),
            fk = await te(ik, {
              oobCode: ek
            }),
            Sk = fk.requestType;
          switch (sk(Sk, ik, "internal-error"), Sk) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              sk(fk.newEmail, ik, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              sk(fk.mfaInfo, ik, "internal-error");
            default:
              sk(fk.email, ik, "internal-error")
          }
          let bk = null;
          return fk.mfaInfo && (bk = Vi._fromServerResponse(ze(ik), fk.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === fk.requestType ? fk.newEmail : fk.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === fk.requestType ? fk.email : fk.newEmail) || null,
              multiFactorInfo: bk
            },
            operation: Sk
          }
        }
        async function Ei(kk, ek) {
          const {
            data: ik
          } = await vi((0, Dk.Q)(kk), ek);
          return ik.email
        }
        async function ai(kk, ek, ik) {
          var Dk;
          const fk = ze(kk),
            Sk = {
              returnSecureToken: !0,
              email: ek,
              password: ik,
              clientType: "CLIENT_TYPE_WEB"
            };
          let bk;
          if (null === (Dk = fk._getRecaptchaConfig()) || void 0 === Dk ? void 0 : Dk.emailPasswordEnabled) {
            const kk = await ue(fk, Sk, "signUpPassword");
            bk = Mi(fk, kk)
          } else bk = Mi(fk, Sk).catch((async kk => {
            if ("auth/missing-recaptcha-token" === kk.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const kk = await ue(fk, Sk, "signUpPassword");
              return Mi(fk, kk)
            }
            return Promise.reject(kk)
          }));
          const rk = await bk.catch((kk => Promise.reject(kk))),
            Pk = await Ki._fromIdTokenResponse(fk, "signIn", rk);
          return await fk._updateCurrentUser(Pk.user), Pk
        }

        function Wi(kk, ek, ik) {
          return Ai((0, Dk.Q)(kk), ki.credential(ek, ik))
        }
        async function ti(kk, ek, ik) {
          var Dk;
          const fk = ze(kk),
            Sk = {
              requestType: "EMAIL_SIGNIN",
              email: ek,
              clientType: "CLIENT_TYPE_WEB"
            };

          function bk(kk, ek) {
            sk(ek.handleCodeInApp, fk, "argument-error"), ek && qi(fk, kk, ek)
          }
          if (null === (Dk = fk._getRecaptchaConfig()) || void 0 === Dk ? void 0 : Dk.emailPasswordEnabled) {
            const kk = await ue(fk, Sk, "getOobCode", !0);
            bk(kk, ik), await oe(fk, kk)
          } else bk(Sk, ik), await oe(fk, Sk).catch((async kk => {
            if ("auth/missing-recaptcha-token" !== kk.code) return Promise.reject(kk);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const kk = await ue(fk, Sk, "getOobCode", !0);
              bk(kk, ik), await oe(fk, kk)
            }
          }))
        }

        function Xi(kk, ek) {
          const ik = Re.parseLink(ek);
          return "EMAIL_SIGNIN" === (null === ik || void 0 === ik ? void 0 : ik.operation)
        }
        async function Bi(kk, ek, ik) {
          const fk = (0, Dk.Q)(kk),
            Sk = ki.credentialWithLink(ek, ik || Fk());
          return sk(Sk._tenantId === (fk.tenantId || null), fk, "tenant-id-mismatch"), Ai(fk, Sk)
        }
        async function ci(kk, ek) {
          const ik = {
              identifier: ek,
              continueUri: uk() ? Fk() : "http://localhost"
            },
            {
              signinMethods: fk
            } = await async function(kk, ek) {
              return ak(kk, "POST", "/v1/accounts:createAuthUri", hk(kk, ek))
            }((0, Dk.Q)(kk), ik);
          return fk || []
        }
        async function Ti(kk, ek) {
          const ik = (0, Dk.Q)(kk),
            fk = {
              requestType: "VERIFY_EMAIL",
              idToken: await kk.getIdToken()
            };
          ek && qi(ik.auth, fk, ek);
          const {
            email: Sk
          } = await async function(kk, ek) {
            return ce(kk, ek)
          }(ik.auth, fk);
          Sk !== kk.email && await kk.reload()
        }
        async function oi(kk, ek, ik) {
          const fk = (0, Dk.Q)(kk),
            Sk = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await kk.getIdToken(),
              newEmail: ek
            };
          ik && qi(fk.auth, Sk, ik);
          const {
            email: bk
          } = await async function(kk, ek) {
            return ce(kk, ek)
          }(fk.auth, Sk);
          bk !== kk.email && await kk.reload()
        }
        async function Zi(kk, ek) {
          let {
            displayName: ik,
            photoURL: fk
          } = ek;
          if (void 0 === ik && void 0 === fk) return;
          const Sk = (0, Dk.Q)(kk),
            bk = {
              idToken: await Sk.getIdToken(),
              displayName: ik,
              photoUrl: fk,
              returnSecureToken: !0
            },
            rk = await Nk(Sk, async function(kk, ek) {
              return ak(kk, "POST", "/v1/accounts:update", ek)
            }(Sk.auth, bk));
          Sk.displayName = rk.displayName || null, Sk.photoURL = rk.photoUrl || null;
          const Pk = Sk.providerData.find((kk => {
            let {
              providerId: ek
            } = kk;
            return "password" === ek
          }));
          Pk && (Pk.displayName = Sk.displayName, Pk.photoURL = Sk.photoURL), await Sk._updateTokensIfNecessary(rk)
        }

        function Oi(kk, ek) {
          return Gi((0, Dk.Q)(kk), ek, null)
        }

        function gi(kk, ek) {
          return Gi((0, Dk.Q)(kk), null, ek)
        }
        async function Gi(kk, ek, ik) {
          const {
            auth: Dk
          } = kk, fk = {
            idToken: await kk.getIdToken(),
            returnSecureToken: !0
          };
          ek && (fk.email = ek), ik && (fk.password = ik);
          const Sk = await Nk(kk, Xe(Dk, fk));
          await kk._updateTokensIfNecessary(Sk, !0)
        }
        class Ni {
          constructor(kk, ek) {
            let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = kk, this.providerId = ek, this.profile = ik
          }
        }
        class Ri extends Ni {
          constructor(kk, ek, ik, Dk) {
            super(kk, ek, ik), this.username = Dk
          }
        }
        class Ji extends Ni {
          constructor(kk, ek) {
            super(kk, "facebook.com", ek)
          }
        }
        class kD extends Ri {
          constructor(kk, ek) {
            super(kk, "github.com", ek, "string" === typeof(null === ek || void 0 === ek ? void 0 : ek.login) ? null === ek || void 0 === ek ? void 0 : ek.login : null)
          }
        }
        class eD extends Ni {
          constructor(kk, ek) {
            super(kk, "google.com", ek)
          }
        }
        class iD extends Ri {
          constructor(kk, ek, ik) {
            super(kk, "twitter.com", ek, ik)
          }
        }

        function DD(kk) {
          const {
            user: ek,
            _tokenResponse: ik
          } = kk;
          return ek.isAnonymous && !ik ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(kk) {
            var ek, ik;
            if (!kk) return null;
            const {
              providerId: Dk
            } = kk, fk = kk.rawUserInfo ? JSON.parse(kk.rawUserInfo) : {}, Sk = kk.isNewUser || "identitytoolkit#SignupNewUserResponse" === kk.kind;
            if (!Dk && (null === kk || void 0 === kk ? void 0 : kk.idToken)) {
              const Dk = null === (ik = null === (ek = Gk(kk.idToken)) || void 0 === ek ? void 0 : ek.firebase) || void 0 === ik ? void 0 : ik.sign_in_provider;
              if (Dk) return new Ni(Sk, "anonymous" !== Dk && "custom" !== Dk ? Dk : null)
            }
            if (!Dk) return null;
            switch (Dk) {
              case "facebook.com":
                return new Ji(Sk, fk);
              case "github.com":
                return new kD(Sk, fk);
              case "google.com":
                return new eD(Sk, fk);
              case "twitter.com":
                return new iD(Sk, fk, kk.screenName || null);
              case "custom":
              case "anonymous":
                return new Ni(Sk, null);
              default:
                return new Ni(Sk, Dk, fk)
            }
          }(ik)
        }

        function fD(kk, ek) {
          return (0, Dk.Q)(kk).setPersistence(ek)
        }

        function SD(kk) {
          return ze(kk).initializeRecaptchaConfig()
        }

        function bD(kk, ek, ik, fk) {
          return (0, Dk.Q)(kk).onIdTokenChanged(ek, ik, fk)
        }

        function rD(kk, ek, ik) {
          return (0, Dk.Q)(kk).beforeAuthStateChanged(ek, ik)
        }

        function PD(kk, ek, ik, fk) {
          return (0, Dk.Q)(kk).onAuthStateChanged(ek, ik, fk)
        }

        function mD(kk) {
          (0, Dk.Q)(kk).useDeviceLanguage()
        }

        function MD(kk, ek) {
          return (0, Dk.Q)(kk).updateCurrentUser(ek)
        }

        function KD(kk) {
          return (0, Dk.Q)(kk).signOut()
        }
        async function xD(kk) {
          return (0, Dk.Q)(kk).delete()
        }
        class nD {
          constructor(kk, ek, ik) {
            this.type = kk, this.credential = ek, this.auth = ik
          }
          static _fromIdtoken(kk, ek) {
            return new nD("enroll", kk, ek)
          }
          static _fromMfaPendingCredential(kk) {
            return new nD("signin", kk)
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
            var ek, ik;
            if (null === kk || void 0 === kk ? void 0 : kk.multiFactorSession) {
              if (null === (ek = kk.multiFactorSession) || void 0 === ek ? void 0 : ek.pendingCredential) return nD._fromMfaPendingCredential(kk.multiFactorSession.pendingCredential);
              if (null === (ik = kk.multiFactorSession) || void 0 === ik ? void 0 : ik.idToken) return nD._fromIdtoken(kk.multiFactorSession.idToken)
            }
            return null
          }
        }
        class UD {
          constructor(kk, ek, ik) {
            this.session = kk, this.hints = ek, this.signInResolver = ik
          }
          static _fromError(kk, ek) {
            const ik = ze(kk),
              Dk = ek.customData._serverResponse,
              fk = (Dk.mfaInfo || []).map((kk => Vi._fromServerResponse(ik, kk)));
            sk(Dk.mfaPendingCredential, ik, "internal-error");
            const Sk = nD._fromMfaPendingCredential(Dk.mfaPendingCredential);
            return new UD(Sk, fk, (async kk => {
              const fk = await kk._process(ik, Sk);
              delete Dk.mfaInfo, delete Dk.mfaPendingCredential;
              const bk = Object.assign(Object.assign({}, Dk), {
                idToken: fk.idToken,
                refreshToken: fk.refreshToken
              });
              switch (ek.operationType) {
                case "signIn":
                  const kk = await Ki._fromIdTokenResponse(ik, ek.operationType, bk);
                  return await ik._updateCurrentUser(kk.user), kk;
                case "reauthenticate":
                  return sk(ek.user, ik, "internal-error"), Ki._forOperation(ek.user, ek.operationType, bk);
                default:
                  Yk(ik, "internal-error")
              }
            }))
          }
          async resolveSignIn(kk) {
            const ek = kk;
            return this.signInResolver(ek)
          }
        }

        function HD(kk, ek) {
          var ik;
          const fk = (0, Dk.Q)(kk),
            Sk = ek;
          return sk(ek.customData.operationType, fk, "argument-error"), sk(null === (ik = Sk.customData._serverResponse) || void 0 === ik ? void 0 : ik.mfaPendingCredential, fk, "argument-error"), UD._fromError(fk, Sk)
        }
        class wD {
          constructor(kk) {
            this.user = kk, this.enrolledFactors = [], kk._onReload((ek => {
              ek.mfaInfo && (this.enrolledFactors = ek.mfaInfo.map((ek => Vi._fromServerResponse(kk.auth, ek))))
            }))
          }
          static _fromUser(kk) {
            return new wD(kk)
          }
          async getSession() {
            return nD._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(kk, ek) {
            const ik = kk,
              Dk = await this.getSession(),
              fk = await Nk(this.user, ik._process(this.user.auth, Dk, ek));
            return await this.user._updateTokensIfNecessary(fk), this.user.reload()
          }
          async unenroll(kk) {
            const ek = "string" === typeof kk ? kk : kk.uid,
              ik = await this.user.getIdToken();
            try {
              const kk = await Nk(this.user, (Dk = this.user.auth, fk = {
                idToken: ik,
                mfaEnrollmentId: ek
              }, ak(Dk, "POST", "/v2/accounts/mfaEnrollment:withdraw", hk(Dk, fk))));
              this.enrolledFactors = this.enrolledFactors.filter((kk => {
                let {
                  uid: ik
                } = kk;
                return ik !== ek
              })), await this.user._updateTokensIfNecessary(kk), await this.user.reload()
            } catch (Sk) {
              throw Sk
            }
            var Dk, fk
          }
        }
        const lD = new WeakMap;

        function pD(kk) {
          const ek = (0, Dk.Q)(kk);
          return lD.has(ek) || lD.set(ek, wD._fromUser(ek)), lD.get(ek)
        }
        const yD = "__sak";
        class YD {
          constructor(kk, ek) {
            this.storageRetriever = kk, this.type = ek
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(yD, "1"), this.storage.removeItem(yD), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (kk) {
              return Promise.resolve(!1)
            }
          }
          _set(kk, ek) {
            return this.storage.setItem(kk, JSON.stringify(ek)), Promise.resolve()
          }
          _get(kk) {
            const ek = this.storage.getItem(kk);
            return Promise.resolve(ek ? JSON.parse(ek) : null)
          }
          _remove(kk) {
            return this.storage.removeItem(kk), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class LD extends YD {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (kk, ek) => this.onStorageEvent(kk, ek), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const kk = (0, Dk.T)();
              return ne(kk) || ye(kk)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (kk) {
                return !1
              }
            }(), this.fallbackToPolling = Ye(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(kk) {
            for (const ek of Object.keys(this.listeners)) {
              const ik = this.storage.getItem(ek),
                Dk = this.localCache[ek];
              ik !== Dk && kk(ek, Dk, ik)
            }
          }
          onStorageEvent(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!kk.key) return void this.forAllChangedKeys(((kk, ek, ik) => {
              this.notifyListeners(kk, ik)
            }));
            const ik = kk.key;
            if (ek ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const Dk = this.storage.getItem(ik);
              if (kk.newValue !== Dk) null !== kk.newValue ? this.storage.setItem(ik, kk.newValue) : this.storage.removeItem(ik);
              else if (this.localCache[ik] === kk.newValue && !ek) return
            }
            const fk = () => {
                const kk = this.storage.getItem(ik);
                (ek || this.localCache[ik] !== kk) && this.notifyListeners(ik, kk)
              },
              Sk = this.storage.getItem(ik);
            (0, Dk.$)() && 10 === document.documentMode && Sk !== kk.newValue && kk.newValue !== kk.oldValue ? setTimeout(fk, 10) : fk()
          }
          notifyListeners(kk, ek) {
            this.localCache[kk] = ek;
            const ik = this.listeners[kk];
            if (ik)
              for (const Dk of Array.from(ik)) Dk(ek ? JSON.parse(ek) : ek)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((kk, ek, ik) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: kk,
                  oldValue: ek,
                  newValue: ik
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
          _addListener(kk, ek) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[kk] || (this.listeners[kk] = new Set, this.localCache[kk] = this.storage.getItem(kk)), this.listeners[kk].add(ek)
          }
          _removeListener(kk, ek) {
            this.listeners[kk] && (this.listeners[kk].delete(ek), 0 === this.listeners[kk].size && delete this.listeners[kk]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(kk, ek) {
            await super._set(kk, ek), this.localCache[kk] = JSON.stringify(ek)
          }
          async _get(kk) {
            const ek = await super._get(kk);
            return this.localCache[kk] = JSON.stringify(ek), ek
          }
          async _remove(kk) {
            await super._remove(kk), delete this.localCache[kk]
          }
        }
        LD.type = "LOCAL";
        const CD = LD;
        class AD extends YD {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(kk, ek) {}
          _removeListener(kk, ek) {}
        }
        AD.type = "SESSION";
        const jD = AD;
        class sD {
          constructor(kk) {
            this.eventTarget = kk, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(kk) {
            const ek = this.receivers.find((ek => ek.isListeningto(kk)));
            if (ek) return ek;
            const ik = new sD(kk);
            return this.receivers.push(ik), ik
          }
          isListeningto(kk) {
            return this.eventTarget === kk
          }
          async handleEvent(kk) {
            const ek = kk,
              {
                eventId: ik,
                eventType: Dk,
                data: fk
              } = ek.data,
              Sk = this.handlersMap[Dk];
            if (!(null === Sk || void 0 === Sk ? void 0 : Sk.size)) return;
            ek.ports[0].postMessage({
              status: "ack",
              eventId: ik,
              eventType: Dk
            });
            const bk = Array.from(Sk).map((async kk => kk(ek.origin, fk))),
              rk = await
            function(kk) {
              return Promise.all(kk.map((async kk => {
                try {
                  return {
                    fulfilled: !0,
                    value: await kk
                  }
                } catch (ek) {
                  return {
                    fulfilled: !1,
                    reason: ek
                  }
                }
              })))
            }(bk);
            ek.ports[0].postMessage({
              status: "done",
              eventId: ik,
              eventType: Dk,
              response: rk
            })
          }
          _subscribe(kk, ek) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[kk] || (this.handlersMap[kk] = new Set), this.handlersMap[kk].add(ek)
          }
          _unsubscribe(kk, ek) {
            this.handlersMap[kk] && ek && this.handlersMap[kk].delete(ek), ek && 0 !== this.handlersMap[kk].size || delete this.handlersMap[kk], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function dD() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            ik = "";
          for (let Dk = 0; Dk < ek; Dk++) ik += Math.floor(10 * Math.random());
          return kk + ik
        }
        sD.receivers = [];
        class VD {
          constructor(kk) {
            this.target = kk, this.handlers = new Set
          }
          removeMessageHandler(kk) {
            kk.messageChannel && (kk.messageChannel.port1.removeEventListener("message", kk.Gy), kk.messageChannel.port1.close()), this.handlers.delete(kk)
          }
          async _send(kk, ek) {
            let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const Dk = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!Dk) throw new Error("connection_unavailable");
            let fk, Sk;
            return new Promise(((bk, rk) => {
              const Pk = dD("", 20);
              Dk.port1.start();
              const mk = setTimeout((() => {
                rk(new Error("unsupported_event"))
              }), ik);
              Sk = {
                messageChannel: Dk,
                Gy(kk) {
                  const ek = kk;
                  if (ek.data.eventId === Pk) switch (ek.data.status) {
                    case "ack":
                      clearTimeout(mk), fk = setTimeout((() => {
                        rk(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(fk), bk(ek.data.response);
                      break;
                    default:
                      clearTimeout(mk), clearTimeout(fk), rk(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(Sk), Dk.port1.addEventListener("message", Sk.Gy), this.target.postMessage({
                eventType: kk,
                eventId: Pk,
                data: ek
              }, [Dk.port2])
            })).finally((() => {
              Sk && this.removeMessageHandler(Sk)
            }))
          }
        }

        function FD() {
          return window
        }

        function uD() {
          return "undefined" !== typeof FD().WorkerGlobalScope && "function" === typeof FD().importScripts
        }
        const qD = "firebaseLocalStorageDb",
          ID = "firebaseLocalStorage",
          zD = "fbase_key";
        class QD {
          constructor(kk) {
            this.request = kk
          }
          toPromise() {
            return new Promise(((kk, ek) => {
              this.request.addEventListener("success", (() => {
                kk(this.request.result)
              })), this.request.addEventListener("error", (() => {
                ek(this.request.error)
              }))
            }))
          }
        }

        function vD(kk, ek) {
          return kk.transaction([ID], ek ? "readwrite" : "readonly").objectStore(ID)
        }

        function ED() {
          const kk = indexedDB.open(qD, 1);
          return new Promise(((ek, ik) => {
            kk.addEventListener("error", (() => {
              ik(kk.error)
            })), kk.addEventListener("upgradeneeded", (() => {
              const ek = kk.result;
              try {
                ek.createObjectStore(ID, {
                  keyPath: zD
                })
              } catch (Dk) {
                ik(Dk)
              }
            })), kk.addEventListener("success", (async () => {
              const ik = kk.result;
              ik.objectStoreNames.contains(ID) ? ek(ik) : (ik.close(), await
                function() {
                  const kk = indexedDB.deleteDatabase(qD);
                  return new QD(kk).toPromise()
                }(), ek(await ED()))
            }))
          }))
        }
        async function hD(kk, ek, ik) {
          const Dk = vD(kk, !0).put({
            [zD]: ek,
            value: ik
          });
          return new QD(Dk).toPromise()
        }

        function aD(kk, ek) {
          const ik = vD(kk, !0).delete(ek);
          return new QD(ik).toPromise()
        }
        class WD {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await ED()), this.db
          }
          async _withRetries(kk) {
            let ek = 0;
            for (;;) try {
              const ek = await this._openDb();
              return await kk(ek)
            } catch (ik) {
              if (ek++ > 3) throw ik;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return uD() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = sD._getInstance(uD() ? self : null), this.receiver._subscribe("keyChanged", (async (kk, ek) => ({
              keyProcessed: (await this._poll()).includes(ek.key)
            }))), this.receiver._subscribe("ping", (async (kk, ek) => ["keyChanged"]))
          }
          async initializeSender() {
            var kk, ek;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (kk) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new VD(this.activeServiceWorker);
            const ik = await this.sender._send("ping", {}, 800);
            ik && (null === (kk = ik[0]) || void 0 === kk ? void 0 : kk.fulfilled) && (null === (ek = ik[0]) || void 0 === ek ? void 0 : ek.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(kk) {
            if (this.sender && this.activeServiceWorker && function() {
                var kk;
                return (null === (kk = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === kk ? void 0 : kk.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: kk
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (ek) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const kk = await ED();
              return await hD(kk, yD, "1"), await aD(kk, yD), !0
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
          async _set(kk, ek) {
            return this._withPendingWrite((async () => (await this._withRetries((ik => hD(ik, kk, ek))), this.localCache[kk] = ek, this.notifyServiceWorker(kk))))
          }
          async _get(kk) {
            const ek = await this._withRetries((ek => async function(kk, ek) {
              const ik = vD(kk, !1).get(ek),
                Dk = await new QD(ik).toPromise();
              return void 0 === Dk ? null : Dk.value
            }(ek, kk)));
            return this.localCache[kk] = ek, ek
          }
          async _remove(kk) {
            return this._withPendingWrite((async () => (await this._withRetries((ek => aD(ek, kk))), delete this.localCache[kk], this.notifyServiceWorker(kk))))
          }
          async _poll() {
            const kk = await this._withRetries((kk => {
              const ek = vD(kk, !1).getAll();
              return new QD(ek).toPromise()
            }));
            if (!kk) return [];
            if (0 !== this.pendingWrites) return [];
            const ek = [],
              ik = new Set;
            for (const {
                fbase_key: Dk,
                value: fk
              }
              of kk) ik.add(Dk), JSON.stringify(this.localCache[Dk]) !== JSON.stringify(fk) && (this.notifyListeners(Dk, fk), ek.push(Dk));
            for (const Dk of Object.keys(this.localCache)) this.localCache[Dk] && !ik.has(Dk) && (this.notifyListeners(Dk, null), ek.push(Dk));
            return ek
          }
          notifyListeners(kk, ek) {
            this.localCache[kk] = ek;
            const ik = this.listeners[kk];
            if (ik)
              for (const Dk of Array.from(ik)) Dk(ek)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(kk, ek) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[kk] || (this.listeners[kk] = new Set, this._get(kk)), this.listeners[kk].add(ek)
          }
          _removeListener(kk, ek) {
            this.listeners[kk] && (this.listeners[kk].delete(ek), 0 === this.listeners[kk].size && delete this.listeners[kk]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        WD.type = "LOCAL";
        const tD = WD;
        const XD = 1e12;
        class BD {
          constructor(kk) {
            this.auth = kk, this.counter = XD, this._widgets = new Map
          }
          render(kk, ek) {
            const ik = this.counter;
            return this._widgets.set(ik, new cD(kk, this.auth.name, ek || {})), this.counter++, ik
          }
          reset(kk) {
            var ek;
            const ik = kk || XD;
            null === (ek = this._widgets.get(ik)) || void 0 === ek || ek.delete(), this._widgets.delete(ik)
          }
          getResponse(kk) {
            var ek;
            const ik = kk || XD;
            return (null === (ek = this._widgets.get(ik)) || void 0 === ek ? void 0 : ek.getResponse()) || ""
          }
          async execute(kk) {
            var ek;
            const ik = kk || XD;
            return null === (ek = this._widgets.get(ik)) || void 0 === ek || ek.execute(), ""
          }
        }
        class cD {
          constructor(kk, ek, ik) {
            this.params = ik, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const Dk = "string" === typeof kk ? document.getElementById(kk) : kk;
            sk(Dk, "argument-error", {
              appName: ek
            }), this.container = Dk, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
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
                const ek = [],
                  ik = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let Dk = 0; Dk < kk; Dk++) ek.push(ik.charAt(Math.floor(Math.random() * ik.length)));
                return ek.join("")
              }(50);
              const {
                callback: kk,
                "expired-callback": ek
              } = this.params;
              if (kk) try {
                kk(this.responseToken)
              } catch (ik) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, ek) try {
                  ek()
                } catch (ik) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const TD = Ve("rcb"),
          oD = new Ik(3e4, 6e4);
        class ZD {
          constructor() {
            var kk;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (kk = FD().grecaptcha) || void 0 === kk ? void 0 : kk.render)
          }
          load(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return sk(function(kk) {
              return kk.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(kk)
            }(ek), kk, "argument-error"), this.shouldResolveImmediately(ek) && Ae(FD().grecaptcha) ? Promise.resolve(FD().grecaptcha) : new Promise(((ik, fk) => {
              const Sk = FD().setTimeout((() => {
                fk(Lk(kk, "network-request-failed"))
              }), oD.get());
              FD()[TD] = () => {
                FD().clearTimeout(Sk), delete FD()[TD];
                const Dk = FD().grecaptcha;
                if (!Dk || !Ae(Dk)) return void fk(Lk(kk, "internal-error"));
                const bk = Dk.render;
                Dk.render = (kk, ek) => {
                  const ik = bk(kk, ek);
                  return this.counter++, ik
                }, this.hostLanguage = ek, ik(Dk)
              };
              de(`https://www.google.com/recaptcha/api.js??${(0,Dk.qb)({onload:TD,render:"explicit",hl:ek})}`).catch((() => {
                clearTimeout(Sk), fk(Lk(kk, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(kk) {
            var ek;
            return !!(null === (ek = FD().grecaptcha) || void 0 === ek ? void 0 : ek.render) && (kk === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class OD {
          async load(kk) {
            return new BD(kk)
          }
          clearedOneInstance() {}
        }
        const gD = "recaptcha",
          GD = {
            theme: "light",
            type: "image"
          };
        class ND {
          constructor(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, GD),
              ik = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = ek, this.type = gD, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = ze(ik), this.isInvisible = "invisible" === this.parameters.size, sk("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const Dk = "string" === typeof kk ? document.getElementById(kk) : kk;
            sk(Dk, this.auth, "argument-error"), this.container = Dk, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new OD : new ZD, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const kk = await this.render(),
              ek = this.getAssertedRecaptcha(),
              ik = ek.getResponse(kk);
            return ik || new Promise((ik => {
              const Dk = kk => {
                kk && (this.tokenChangeListeners.delete(Dk), ik(kk))
              };
              this.tokenChangeListeners.add(Dk), this.isInvisible && ek.execute(kk)
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
            sk(!this.parameters.sitekey, this.auth, "argument-error"), sk(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), sk("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(kk) {
            return ek => {
              if (this.tokenChangeListeners.forEach((kk => kk(ek))), "function" === typeof kk) kk(ek);
              else if ("string" === typeof kk) {
                const ik = FD()[kk];
                "function" === typeof ik && ik(ek)
              }
            }
          }
          assertNotDestroyed() {
            sk(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let kk = this.container;
              if (!this.isInvisible) {
                const ek = document.createElement("div");
                kk.appendChild(ek), kk = ek
              }
              this.widgetId = this.getAssertedRecaptcha().render(kk, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            sk(uk() && !uD(), this.auth, "internal-error"), await
            function() {
              let kk = null;
              return new Promise((ek => {
                "complete" !== document.readyState ? (kk = () => ek(), window.addEventListener("load", kk)) : ek()
              })).catch((ek => {
                throw kk && window.removeEventListener("load", kk), ek
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const kk = await async function(kk) {
              return (await ak(kk, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            sk(kk, this.auth, "internal-error"), this.parameters.sitekey = kk
          }
          getAssertedRecaptcha() {
            return sk(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class RD {
          constructor(kk, ek) {
            this.verificationId = kk, this.onConfirmation = ek
          }
          confirm(kk) {
            const ek = Ne._fromVerification(this.verificationId, kk);
            return this.onConfirmation(ek)
          }
        }
        async function JD(kk, ek, ik) {
          const fk = ze(kk),
            Sk = await Df(fk, ek, (0, Dk.Q)(ik));
          return new RD(Sk, (kk => Ai(fk, kk)))
        }
        async function kf(kk, ek, ik) {
          const fk = (0, Dk.Q)(kk);
          await Yi(!1, fk, "phone");
          const Sk = await Df(fk.auth, ek, (0, Dk.Q)(ik));
          return new RD(Sk, (kk => ji(fk, kk)))
        }
        async function ef(kk, ek, ik) {
          const fk = (0, Dk.Q)(kk),
            Sk = await Df(fk.auth, ek, (0, Dk.Q)(ik));
          return new RD(Sk, (kk => si(fk, kk)))
        }
        async function Df(kk, ek, ik) {
          var Dk;
          const fk = await ik.verify();
          try {
            let Sk;
            if (sk("string" === typeof fk, kk, "argument-error"), sk(ik.type === gD, kk, "argument-error"), Sk = "string" === typeof ek ? {
                phoneNumber: ek
              } : ek, "session" in Sk) {
              const ek = Sk.session;
              if ("phoneNumber" in Sk) {
                sk("enroll" === ek.type, kk, "internal-error");
                const ik = await
                function(kk, ek) {
                  return ak(kk, "POST", "/v2/accounts/mfaEnrollment:start", hk(kk, ek))
                }(kk, {
                  idToken: ek.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: Sk.phoneNumber,
                    recaptchaToken: fk
                  }
                });
                return ik.phoneSessionInfo.sessionInfo
              } {
                sk("signin" === ek.type, kk, "internal-error");
                const ik = (null === (Dk = Sk.multiFactorHint) || void 0 === Dk ? void 0 : Dk.uid) || Sk.multiFactorUid;
                sk(ik, kk, "missing-multi-factor-info");
                const bk = await
                function(kk, ek) {
                  return ak(kk, "POST", "/v2/accounts/mfaSignIn:start", hk(kk, ek))
                }(kk, {
                  mfaPendingCredential: ek.credential,
                  mfaEnrollmentId: ik,
                  phoneSignInInfo: {
                    recaptchaToken: fk
                  }
                });
                return bk.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: ek
              } = await async function(kk, ek) {
                return ak(kk, "POST", "/v1/accounts:sendVerificationCode", hk(kk, ek))
              }(kk, {
                phoneNumber: Sk.phoneNumber,
                recaptchaToken: fk
              });
              return ek
            }
          } finally {
            ik._reset()
          }
        }
        async function ff(kk, ek) {
          await yi((0, Dk.Q)(kk), ek)
        }
        class Sf {
          constructor(kk) {
            this.providerId = Sf.PROVIDER_ID, this.auth = ze(kk)
          }
          verifyPhoneNumber(kk, ek) {
            return Df(this.auth, kk, (0, Dk.Q)(ek))
          }
          static credential(kk, ek) {
            return Ne._fromVerification(kk, ek)
          }
          static credentialFromResult(kk) {
            const ek = kk;
            return Sf.credentialFromTaggedObject(ek)
          }
          static credentialFromError(kk) {
            return Sf.credentialFromTaggedObject(kk.customData || {})
          }
          static credentialFromTaggedObject(kk) {
            let {
              _tokenResponse: ek
            } = kk;
            if (!ek) return null;
            const {
              phoneNumber: ik,
              temporaryProof: Dk
            } = ek;
            return ik && Dk ? Ne._fromTokenResponse(ik, Dk) : null
          }
        }

        function bf(kk, ek) {
          return ek ? be(ek) : (sk(kk._popupRedirectResolver, kk, "argument-error"), kk._popupRedirectResolver)
        }
        Sf.PROVIDER_ID = "phone", Sf.PHONE_SIGN_IN_METHOD = "phone";
        class rf extends We {
          constructor(kk) {
            super("custom", "custom"), this.params = kk
          }
          _getIdTokenResponse(kk) {
            return Oe(kk, this._buildIdpRequest())
          }
          _linkToIdToken(kk, ek) {
            return Oe(kk, this._buildIdpRequest(ek))
          }
          _getReauthenticationResolver(kk) {
            return Oe(kk, this._buildIdpRequest())
          }
          _buildIdpRequest(kk) {
            const ek = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return kk && (ek.idToken = kk), ek
          }
        }

        function Pf(kk) {
          return Ci(kk.auth, new rf(kk), kk.bypassAuthState)
        }

        function mf(kk) {
          const {
            auth: ek,
            user: ik
          } = kk;
          return sk(ik, ek, "internal-error"), Li(ik, new rf(kk), kk.bypassAuthState)
        }
        async function Mf(kk) {
          const {
            auth: ek,
            user: ik
          } = kk;
          return sk(ik, ek, "internal-error"), yi(ik, new rf(kk), kk.bypassAuthState)
        }
        class Kf {
          constructor(kk, ek, ik, Dk) {
            let fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = kk, this.resolver = ik, this.user = Dk, this.bypassAuthState = fk, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(ek) ? ek : [ek]
          }
          execute() {
            return new Promise((async (kk, ek) => {
              this.pendingPromise = {
                resolve: kk,
                reject: ek
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (ik) {
                this.reject(ik)
              }
            }))
          }
          async onAuthEvent(kk) {
            const {
              urlResponse: ek,
              sessionId: ik,
              postBody: Dk,
              tenantId: fk,
              error: Sk,
              type: bk
            } = kk;
            if (Sk) return void this.reject(Sk);
            const rk = {
              auth: this.auth,
              requestUri: ek,
              sessionId: ik,
              tenantId: fk || void 0,
              postBody: Dk || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(bk)(rk))
            } catch (Pk) {
              this.reject(Pk)
            }
          }
          onError(kk) {
            this.reject(kk)
          }
          getIdpTask(kk) {
            switch (kk) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return Pf;
              case "linkViaPopup":
              case "linkViaRedirect":
                return Mf;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return mf;
              default:
                Yk(this.auth, "internal-error")
            }
          }
          resolve(kk) {
            Vk(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(kk), this.unregisterAndCleanUp()
          }
          reject(kk) {
            Vk(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(kk), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const xf = new Ik(2e3, 1e4);
        async function nf(kk, ek, ik) {
          const Dk = ze(kk);
          Ak(kk, ek, ei);
          const fk = bf(Dk, ik);
          return new wf(Dk, "signInViaPopup", ek, fk).executeNotNull()
        }
        async function Uf(kk, ek, ik) {
          const fk = (0, Dk.Q)(kk);
          Ak(fk.auth, ek, ei);
          const Sk = bf(fk.auth, ik);
          return new wf(fk.auth, "reauthViaPopup", ek, Sk, fk).executeNotNull()
        }
        async function Hf(kk, ek, ik) {
          const fk = (0, Dk.Q)(kk);
          Ak(fk.auth, ek, ei);
          const Sk = bf(fk.auth, ik);
          return new wf(fk.auth, "linkViaPopup", ek, Sk, fk).executeNotNull()
        }
        class wf extends Kf {
          constructor(kk, ek, ik, Dk, fk) {
            super(kk, ek, Dk, fk), this.provider = ik, this.authWindow = null, this.pollId = null, wf.currentPopupAction && wf.currentPopupAction.cancel(), wf.currentPopupAction = this
          }
          async executeNotNull() {
            const kk = await this.execute();
            return sk(kk, this.auth, "internal-error"), kk
          }
          async onExecution() {
            Vk(1 === this.filter.length, "Popup operations only handle one event");
            const kk = dD();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], kk), this.authWindow.associatedEvent = kk, this.resolver._originValidation(this.auth).catch((kk => {
              this.reject(kk)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (kk => {
              kk || this.reject(Lk(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var kk;
            return (null === (kk = this.authWindow) || void 0 === kk ? void 0 : kk.associatedEvent) || null
          }
          cancel() {
            this.reject(Lk(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, wf.currentPopupAction = null
          }
          pollUserCancellation() {
            const kk = () => {
              var ek, ik;
              (null === (ik = null === (ek = this.authWindow) || void 0 === ek ? void 0 : ek.window) || void 0 === ik ? void 0 : ik.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(Lk(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(kk, xf.get())
            };
            kk()
          }
        }
        wf.currentPopupAction = null;
        const lf = "pendingRedirect",
          pf = new Map;
        class yf extends Kf {
          constructor(kk, ek) {
            super(kk, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], ek, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let kk = pf.get(this.auth._key());
            if (!kk) {
              try {
                const ek = await async function(kk, ek) {
                  const ik = Af(ek),
                    Dk = Cf(kk);
                  if (!await Dk._isAvailable()) return !1;
                  const fk = "true" === await Dk._get(ik);
                  return await Dk._remove(ik), fk
                }(this.resolver, this.auth) ? await super.execute() : null;
                kk = () => Promise.resolve(ek)
              } catch (ek) {
                kk = () => Promise.reject(ek)
              }
              pf.set(this.auth._key(), kk)
            }
            return this.bypassAuthState || pf.set(this.auth._key(), (() => Promise.resolve(null))), kk()
          }
          async onAuthEvent(kk) {
            if ("signInViaRedirect" === kk.type) return super.onAuthEvent(kk);
            if ("unknown" !== kk.type) {
              if (kk.eventId) {
                const ek = await this.auth._redirectUserForId(kk.eventId);
                if (ek) return this.user = ek, super.onAuthEvent(kk);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function Yf(kk, ek) {
          return Cf(kk)._set(Af(ek), "true")
        }

        function Lf(kk, ek) {
          pf.set(kk._key(), ek)
        }

        function Cf(kk) {
          return be(kk._redirectPersistence)
        }

        function Af(kk) {
          return me(lf, kk.config.apiKey, kk.name)
        }

        function jf(kk, ek, ik) {
          return async function(kk, ek, ik) {
            const Dk = ze(kk);
            Ak(kk, ek, ei), await Dk._initializationPromise;
            const fk = bf(Dk, ik);
            return await Yf(fk, Dk), fk._openRedirect(Dk, ek, "signInViaRedirect")
          }(kk, ek, ik)
        }

        function sf(kk, ek, ik) {
          return async function(kk, ek, ik) {
            const fk = (0, Dk.Q)(kk);
            Ak(fk.auth, ek, ei), await fk.auth._initializationPromise;
            const Sk = bf(fk.auth, ik);
            await Yf(Sk, fk.auth);
            const bk = await uf(fk);
            return Sk._openRedirect(fk.auth, ek, "reauthViaRedirect", bk)
          }(kk, ek, ik)
        }

        function df(kk, ek, ik) {
          return async function(kk, ek, ik) {
            const fk = (0, Dk.Q)(kk);
            Ak(fk.auth, ek, ei), await fk.auth._initializationPromise;
            const Sk = bf(fk.auth, ik);
            await Yi(!1, fk, ek.providerId), await Yf(Sk, fk.auth);
            const bk = await uf(fk);
            return Sk._openRedirect(fk.auth, ek, "linkViaRedirect", bk)
          }(kk, ek, ik)
        }
        async function Vf(kk, ek) {
          return await ze(kk)._initializationPromise, Ff(kk, ek, !1)
        }
        async function Ff(kk, ek) {
          let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Dk = ze(kk),
            fk = bf(Dk, ek),
            Sk = new yf(Dk, fk, ik),
            bk = await Sk.execute();
          return bk && !ik && (delete bk.user._redirectEventId, await Dk._persistUserIfCurrent(bk.user), await Dk._setRedirectUser(null, ek)), bk
        }
        async function uf(kk) {
          const ek = dD(`${kk.uid}:::`);
          return kk._redirectEventId = ek, await kk.auth._setRedirectUser(kk), await kk.auth._persistUserIfCurrent(kk), ek
        }
        class qf {
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
            let ek = !1;
            return this.consumers.forEach((ik => {
              this.isEventForConsumer(kk, ik) && (ek = !0, this.sendToConsumer(kk, ik), this.saveEventToCache(kk))
            })), this.hasHandledPotentialRedirect || ! function(kk) {
              switch (kk.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return zf(kk);
                default:
                  return !1
              }
            }(kk) || (this.hasHandledPotentialRedirect = !0, ek || (this.queuedRedirectEvent = kk, ek = !0)), ek
          }
          sendToConsumer(kk, ek) {
            var ik;
            if (kk.error && !zf(kk)) {
              const Dk = (null === (ik = kk.error.code) || void 0 === ik ? void 0 : ik.split("auth/")[1]) || "internal-error";
              ek.onError(Lk(this.auth, Dk))
            } else ek.onAuthEvent(kk)
          }
          isEventForConsumer(kk, ek) {
            const ik = null === ek.eventId || !!kk.eventId && kk.eventId === ek.eventId;
            return ek.filter.includes(kk.type) && ik
          }
          hasEventBeenHandled(kk) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(If(kk))
          }
          saveEventToCache(kk) {
            this.cachedEventUids.add(If(kk)), this.lastProcessedEventTime = Date.now()
          }
        }

        function If(kk) {
          return [kk.type, kk.eventId, kk.sessionId, kk.tenantId].filter((kk => kk)).join("-")
        }

        function zf(kk) {
          let {
            type: ek,
            error: ik
          } = kk;
          return "unknown" === ek && "auth/no-auth-event" === (null === ik || void 0 === ik ? void 0 : ik.code)
        }
        const Qf = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          vf = /^https?/;
        async function Ef(kk) {
          if (kk.config.emulator) return;
          const {
            authorizedDomains: ek
          } = await async function(kk) {
            return ak(kk, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(kk);
          for (const Dk of ek) try {
            if (hf(Dk)) return
          } catch (ik) {}
          Yk(kk, "unauthorized-domain")
        }

        function hf(kk) {
          const ek = Fk(),
            {
              protocol: ik,
              hostname: Dk
            } = new URL(ek);
          if (kk.startsWith("chrome-extension://")) {
            const fk = new URL(kk);
            return "" === fk.hostname && "" === Dk ? "chrome-extension:" === ik && kk.replace("chrome-extension://", "") === ek.replace("chrome-extension://", "") : "chrome-extension:" === ik && fk.hostname === Dk
          }
          if (!vf.test(ik)) return !1;
          if (Qf.test(kk)) return Dk === kk;
          const fk = kk.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + fk + "|" + fk + ")$", "i").test(Dk)
        }
        const af = new Ik(3e4, 6e4);

        function Wf() {
          const kk = FD().___jsl;
          if (null === kk || void 0 === kk ? void 0 : kk.H)
            for (const ek of Object.keys(kk.H))
              if (kk.H[ek].r = kk.H[ek].r || [], kk.H[ek].L = kk.H[ek].L || [], kk.H[ek].r = [...kk.H[ek].L], kk.CP)
                for (let ik = 0; ik < kk.CP.length; ik++) kk.CP[ik] = null
        }
        let tf = null;

        function Xf(kk) {
          return tf = tf || function(kk) {
            return new Promise(((ek, ik) => {
              var Dk, fk, Sk;

              function bk() {
                Wf(), gapi.load("gapi.iframes", {
                  callback: () => {
                    ek(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    Wf(), ik(Lk(kk, "network-request-failed"))
                  },
                  timeout: af.get()
                })
              }
              if (null === (fk = null === (Dk = FD().gapi) || void 0 === Dk ? void 0 : Dk.iframes) || void 0 === fk ? void 0 : fk.Iframe) ek(gapi.iframes.getContext());
              else {
                if (!(null === (Sk = FD().gapi) || void 0 === Sk ? void 0 : Sk.load)) {
                  const ek = Ve("iframefcb");
                  return FD()[ek] = () => {
                    gapi.load ? bk() : ik(Lk(kk, "network-request-failed"))
                  }, de(`https://apis.google.com/js/api.js?onload=${ek}`).catch((kk => ik(kk)))
                }
                bk()
              }
            })).catch((kk => {
              throw tf = null, kk
            }))
          }(kk), tf
        }
        const Bf = new Ik(5e3, 15e3),
          Tf = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          of = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function Zf(kk) {
          const ek = kk.config;
          sk(ek.authDomain, kk, "auth-domain-config-required");
          const ik = ek.emulator ? zk(ek, "emulator/auth/iframe") : `https://${kk.config.authDomain}/__/auth/iframe`,
            Sk = {
              apiKey: ek.apiKey,
              appName: kk.name,
              v: fk.f
            },
            bk = of.get(kk.config.apiHost);
          bk && (Sk.eid = bk);
          const rk = kk._getFrameworks();
          return rk.length && (Sk.fw = rk.join(",")), `${ik}?${(0,Dk.qb)(Sk).slice(1)}`
        }
        const Of = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class gf {
          constructor(kk) {
            this.window = kk, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (kk) {}
          }
        }

        function Gf(kk, ek, ik) {
          let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const bk = Math.max((window.screen.availHeight - Sk) / 2, 0).toString(),
            rk = Math.max((window.screen.availWidth - fk) / 2, 0).toString();
          let Pk = "";
          const mk = Object.assign(Object.assign({}, Of), {
              width: fk.toString(),
              height: Sk.toString(),
              top: bk,
              left: rk
            }),
            Mk = (0, Dk.T)().toLowerCase();
          ik && (Pk = Ue(Mk) ? "_blank" : ik), xe(Mk) && (ek = ek || "http://localhost", mk.scrollbars = "yes");
          const Kk = Object.entries(mk).reduce(((kk, ek) => {
            let [ik, Dk] = ek;
            return `${kk}${ik}=${Dk},`
          }), "");
          if (function() {
              var kk;
              return ye(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Dk.T)()) && !!(null === (kk = window.navigator) || void 0 === kk ? void 0 : kk.standalone)
            }(Mk) && "_self" !== Pk) return function(kk, ek) {
            const ik = document.createElement("a");
            ik.href = kk, ik.target = ek;
            const Dk = document.createEvent("MouseEvent");
            Dk.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), ik.dispatchEvent(Dk)
          }(ek || "", Pk), new gf(null);
          const xk = window.open(ek || "", Pk, Kk);
          sk(xk, kk, "popup-blocked");
          try {
            xk.focus()
          } catch (nk) {}
          return new gf(xk)
        }
        const Nf = "__/auth/handler",
          Rf = "emulator/auth/handler",
          Jf = encodeURIComponent("fac");
        async function kS(kk, ek, ik, Sk, bk, rk) {
            sk(kk.config.authDomain, kk, "auth-domain-config-required"), sk(kk.config.apiKey, kk, "invalid-api-key");
            const Pk = {
              apiKey: kk.config.apiKey,
              appName: kk.name,
              authType: ik,
              redirectUrl: Sk,
              v: fk.f,
              eventId: bk
            };
            if (ek instanceof ei) {
              ek.setDefaultLanguage(kk.languageCode), Pk.providerId = ek.providerId || "", (0, Dk._)(ek.getCustomParameters()) || (Pk.customParameters = JSON.stringify(ek.getCustomParameters()));
              for (const [kk, ek] of Object.entries(rk || {})) Pk[kk] = ek
            }
            if (ek instanceof ii) {
              const kk = ek.getScopes().filter((kk => "" !== kk));
              kk.length > 0 && (Pk.scopes = kk.join(","))
            }
            kk.tenantId && (Pk.tid = kk.tenantId);
            const mk = Pk;
            for (const Dk of Object.keys(mk)) void 0 === mk[Dk] && delete mk[Dk];
            const Mk = await kk._getAppCheckToken(),
              Kk = Mk ? `#${Jf}=${encodeURIComponent(Mk)}` : "";
            return `${function(kk){let{config:ek}=kk;if(!ek.emulator)return`
            https: //${ek.authDomain}/${Nf}`;return zk(ek,Rf)}(kk)}?${(0,Dk.qb)(mk).slice(1)}${Kk}`}const eS="webStorageSupport";const iS=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jD,this._completeRedirectFn=Ff,this._overrideRedirectResult=Lf}async _openPopup(kk,ek,ik,Dk){var fk;Vk(null===(fk=this.eventManagers[kk._key()])||void 0===fk?void 0:fk.manager,"_initialize() not called before _openPopup()");return Gf(kk,await kS(kk,ek,ik,Fk(),Dk),dD())}async _openRedirect(kk,ek,ik,Dk){await this._originValidation(kk);return function(kk){FD().location.href=kk}(await kS(kk,ek,ik,Fk(),Dk)),new Promise((()=>{}))}_initialize(kk){const ek=kk._key();if(this.eventManagers[ek]){const{manager:kk,promise:ik}=this.eventManagers[ek];return kk?Promise.resolve(kk):(Vk(ik,"If manager is not set, promise should be"),ik)}const ik=this.initAndGetManager(kk);return this.eventManagers[ek]={promise:ik},ik.catch((()=>{delete this.eventManagers[ek]})),ik}async initAndGetManager(kk){const ek=await async function(kk){const ek=await Xf(kk),ik=FD().gapi;return sk(ik,kk,"internal-error"),ek.open({where:document.body,url:Zf(kk),messageHandlersFilter:ik.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tf,dontclear:!0},(ek=>new Promise((async(ik,Dk)=>{await ek.restyle({setHideOnLeave:!1});const fk=Lk(kk,"network-request-failed"),Sk=FD().setTimeout((()=>{Dk(fk)}),Bf.get());function bk(){FD().clearTimeout(Sk),ik(ek)}ek.ping(bk).then(bk,(()=>{Dk(fk)}))}))))}(kk),ik=new qf(kk);return ek.register("authEvent",(ek=>{sk(null===ek||void 0===ek?void 0:ek.authEvent,kk,"invalid-auth-event");return{status:ik.onEvent(ek.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[kk._key()]={manager:ik},this.iframes[kk._key()]=ek,ik}_isIframeWebStorageSupported(kk,ek){this.iframes[kk._key()].send(eS,{type:eS},(ik=>{var Dk;const fk=null===(Dk=null===ik||void 0===ik?void 0:ik[0])||void 0===Dk?void 0:Dk[eS];void 0!==fk&&ek(!!fk),Yk(kk,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(kk){const ek=kk._key();return this.originValidationPromises[ek]||(this.originValidationPromises[ek]=Ef(kk)),this.originValidationPromises[ek]}get _shouldInitProactively(){return Ye()||ne()||ye()}};class DS{constructor(kk){this.factorId=kk}_process(kk,ek,ik){switch(ek.type){case"enroll":return this._finalizeEnroll(kk,ek.credential,ik);case"signin":return this._finalizeSignIn(kk,ek.credential);default:return dk("unexpected MultiFactorSessionType")}}}class fS extends DS{constructor(kk){super("phone"),this.credential=kk}static _fromCredential(kk){return new fS(kk)}_finalizeEnroll(kk,ek,ik){return function(kk,ek){return ak(kk,"POST","/v2/accounts/mfaEnrollment:finalize",hk(kk,ek))}(kk,{idToken:ek,displayName:ik,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(kk,ek){return function(kk,ek){return ak(kk,"POST","/v2/accounts/mfaSignIn:finalize",hk(kk,ek))}(kk,{mfaPendingCredential:ek,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class SS{constructor(){}static assertion(kk){return fS._fromCredential(kk)}}SS.FACTOR_ID="phone";class bS{static assertionForEnrollment(kk,ek){return rS._fromSecret(kk,ek)}static assertionForSignIn(kk,ek){return rS._fromEnrollmentId(kk,ek)}static async generateSecret(kk){const ek=kk;sk("undefined"!==typeof ek.auth,"internal-error");const ik=await(Dk=ek.auth,fk={idToken:ek.credential,totpEnrollmentInfo:{}},ak(Dk,"POST","/v2/accounts/mfaEnrollment:start",hk(Dk,fk)));var Dk,fk;return PS._fromStartTotpMfaEnrollmentResponse(ik,ek.auth)}}bS.FACTOR_ID="totp";class rS extends DS{constructor(kk,ek,ik){super("totp"),this.otp=kk,this.enrollmentId=ek,this.secret=ik}static _fromSecret(kk,ek){return new rS(ek,void 0,kk)}static _fromEnrollmentId(kk,ek){return new rS(ek,kk)}async _finalizeEnroll(kk,ek,ik){return sk("undefined"!==typeof this.secret,kk,"argument-error"),function(kk,ek){return ak(kk,"POST","/v2/accounts/mfaEnrollment:finalize",hk(kk,ek))}(kk,{idToken:ek,displayName:ik,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(kk,ek){sk(void 0!==this.enrollmentId&&void 0!==this.otp,kk,"argument-error");const ik={verificationCode:this.otp};return function(kk,ek){return ak(kk,"POST","/v2/accounts/mfaSignIn:finalize",hk(kk,ek))}(kk,{mfaPendingCredential:ek,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:ik})}}class PS{constructor(kk,ek,ik,Dk,fk,Sk,bk){this.sessionInfo=Sk,this.auth=bk,this.secretKey=kk,this.hashingAlgorithm=ek,this.codeLength=ik,this.codeIntervalSeconds=Dk,this.enrollmentCompletionDeadline=fk}static _fromStartTotpMfaEnrollmentResponse(kk,ek){return new PS(kk.totpSessionInfo.sharedSecretKey,kk.totpSessionInfo.hashingAlgorithm,kk.totpSessionInfo.verificationCodeLength,kk.totpSessionInfo.periodSec,new Date(kk.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),kk.totpSessionInfo.sessionInfo,ek)}_makeTotpVerificationInfo(kk){return{sessionInfo:this.sessionInfo,verificationCode:kk}}generateQrCodeUrl(kk,ek){var ik;let Dk=!1;return(mS(kk)||mS(ek))&&(Dk=!0),Dk&&(mS(kk)&&(kk=(null===(ik=this.auth.currentUser)||void 0===ik?void 0:ik.email)||"unknownuser"),mS(ek)&&(ek=this.auth.name)),`otpauth://totp/${ek}:${kk}?secret=${this.secretKey}&issuer=${ek}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function mS(kk){return"undefined"===typeof kk||0===(null===kk||void 0===kk?void 0:kk.length)}var MS="@firebase/auth",KS="0.23.2";class xS{constructor(kk){this.auth=kk,this.internalListeners=new Map}getUid(){var kk;return this.assertAuthConfigured(),(null===(kk=this.auth.currentUser)||void 0===kk?void 0:kk.uid)||null}async getToken(kk){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(kk)}}addAuthTokenListener(kk){if(this.assertAuthConfigured(),this.internalListeners.has(kk))return;const ek=this.auth.onIdTokenChanged((ek=>{kk((null===ek||void 0===ek?void 0:ek.stsTokenManager.accessToken)||null)}));this.internalListeners.set(kk,ek),this.updateProactiveRefresh()}removeAuthTokenListener(kk){this.assertAuthConfigured();const ek=this.internalListeners.get(kk);ek&&(this.internalListeners.delete(kk),ek(),this.updateProactiveRefresh())}assertAuthConfigured(){sk(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const nS=(0,Dk.N)("authIdTokenMaxAge")||300;let US=null;const HS=kk=>async ek=>{const ik=ek&&await ek.getIdTokenResult(),Dk=ik&&((new Date).getTime()-Date.parse(ik.issuedAtTime))/1e3;if(Dk&&Dk>nS)return;const fk=null===ik||void 0===ik?void 0:ik.token;US!==fk&&(US=fk,await fetch(kk,{method:fk?"POST":"DELETE",headers:fk?{Authorization:`Bearer ${fk}`}:{}}))};function wS(){let kk=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,fk.H)();const ek=(0,fk.z)(kk,"auth");if(ek.isInitialized())return ek.getImmediate();const ik=ve(kk,{popupRedirectResolver:iS,persistence:[tD,CD,jD]}),Sk=(0,Dk.N)("authTokenSyncURL");if(Sk){const kk=HS(Sk);rD(ik,kk,(()=>kk(ik.currentUser))),bD(ik,(ek=>kk(ek)))}const bk=(0,Dk.J)("auth");return bk&&Ee(ik,`http://${bk}`),ik}var lS;lS="Browser",(0,fk.B)(new rk.f("auth",((kk,ek)=>{let{options:ik}=ek;const Dk=kk.getProvider("app").getImmediate(),fk=kk.getProvider("heartbeat"),Sk=kk.getProvider("app-check-internal"),{apiKey:bk,authDomain:rk}=Dk.options;sk(bk&&!bk.includes(":"),"invalid-api-key",{appName:Dk.name});const Pk={apiKey:bk,authDomain:rk,clientPlatform:lS,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Le(lS)},mk=new Ie(Dk,fk,Sk,Pk);return function(kk,ek){const ik=(null===ek||void 0===ek?void 0:ek.persistence)||[],Dk=(Array.isArray(ik)?ik:[ik]).map(be);(null===ek||void 0===ek?void 0:ek.errorMap)&&kk._updateErrorMap(ek.errorMap),kk._initializeWithPersistence(Dk,null===ek||void 0===ek?void 0:ek.popupRedirectResolver)}(mk,ik),mk}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((kk,ek,ik)=>{kk.getProvider("auth-internal").initialize()}))),(0,fk.B)(new rk.f("auth-internal",(kk=>(kk=>new xS(kk))(ze(kk.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,fk.N)(MS,KS,function(kk){switch(kk){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(lS)),(0,fk.N)(MS,KS,"esm2017")}};Object.freeze(modules);for(const kk in modules)Object.freeze(modules[kk]);