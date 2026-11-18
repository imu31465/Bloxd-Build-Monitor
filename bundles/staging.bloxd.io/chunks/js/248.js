/*! For license information please see symm5.248.5c9ba5f2.chunk.js.LICENSE.txt */
export const id = 248;
export const ids = [248];
export const modules = {
    39296: (JJ, cJ, ZJ) => {
        ZJ.r(cJ), ZJ.d(cJ, {
          ActionCodeOperation: () => DJ,
          ActionCodeURL: () => tc,
          AuthCredential: () => dc,
          AuthErrorCodes: () => xJ,
          EmailAuthCredential: () => ic,
          EmailAuthProvider: () => lc,
          FacebookAuthProvider: () => FZ,
          FactorId: () => qJ,
          GithubAuthProvider: () => eZ,
          GoogleAuthProvider: () => UZ,
          OAuthCredential: () => Lc,
          OAuthProvider: () => ZZ,
          OperationType: () => hJ,
          PhoneAuthCredential: () => Bc,
          PhoneAuthProvider: () => cU,
          PhoneMultiFactorGenerator: () => Je,
          ProviderId: () => jJ,
          RecaptchaVerifier: () => LF,
          SAMLAuthProvider: () => AZ,
          SignInMethod: () => YJ,
          TotpMultiFactorGenerator: () => ce,
          TotpSecret: () => Fe,
          TwitterAuthProvider: () => qZ,
          applyActionCode: () => WZ,
          beforeAuthStateChanged: () => UF,
          browserLocalPersistence: () => vF,
          browserPopupRedirectResolver: () => tU,
          browserSessionPersistence: () => QF,
          checkActionCode: () => gZ,
          confirmPasswordReset: () => wZ,
          connectAuthEmulator: () => Pc,
          createUserWithEmailAndPassword: () => PZ,
          debugErrorMap: () => nJ,
          deleteUser: () => jF,
          fetchSignInMethodsForEmail: () => NZ,
          getAdditionalUserInfo: () => JF,
          getAuth: () => he,
          getIdToken: () => iJ,
          getIdTokenResult: () => RJ,
          getMultiFactorResolver: () => DF,
          getRedirectResult: () => VU,
          inMemoryPersistence: () => Ac,
          indexedDBLocalPersistence: () => pF,
          initializeAuth: () => Hc,
          initializeRecaptchaConfig: () => ZF,
          isSignInWithEmailLink: () => dZ,
          linkWithCredential: () => EZ,
          linkWithPhoneNumber: () => tF,
          linkWithPopup: () => hU,
          linkWithRedirect: () => EU,
          multiFactor: () => GF,
          onAuthStateChanged: () => eF,
          onIdTokenChanged: () => FF,
          parseActionCodeURL: () => oc,
          prodErrorMap: () => GJ,
          reauthenticateWithCredential: () => VZ,
          reauthenticateWithPhoneNumber: () => oF,
          reauthenticateWithPopup: () => YU,
          reauthenticateWithRedirect: () => QU,
          reload: () => Jc,
          sendEmailVerification: () => OZ,
          sendPasswordResetEmail: () => bZ,
          sendSignInLinkToEmail: () => pZ,
          setPersistence: () => cF,
          signInAnonymously: () => DZ,
          signInWithCredential: () => QZ,
          signInWithCustomToken: () => KZ,
          signInWithEmailAndPassword: () => kZ,
          signInWithEmailLink: () => zZ,
          signInWithPhoneNumber: () => BF,
          signInWithPopup: () => jU,
          signInWithRedirect: () => mU,
          signOut: () => qF,
          unlink: () => fZ,
          updateCurrentUser: () => AF,
          updateEmail: () => uZ,
          updatePassword: () => iZ,
          updatePhoneNumber: () => JU,
          updateProfile: () => CZ,
          useDeviceLanguage: () => XF,
          verifyBeforeUpdateEmail: () => TZ,
          verifyPasswordResetCode: () => HZ
        });
        var FJ = ZJ(39279),
          UJ = ZJ(39268);

        function eJ(JJ, cJ) {
          var ZJ = {};
          for (var FJ in JJ) Object.prototype.hasOwnProperty.call(JJ, FJ) && cJ.indexOf(FJ) < 0 && (ZJ[FJ] = JJ[FJ]);
          if (null != JJ && "function" === typeof Object.getOwnPropertySymbols) {
            var UJ = 0;
            for (FJ = Object.getOwnPropertySymbols(JJ); UJ < FJ.length; UJ++) cJ.indexOf(FJ[UJ]) < 0 && Object.prototype.propertyIsEnumerable.call(JJ, FJ[UJ]) && (ZJ[FJ[UJ]] = JJ[FJ[UJ]])
          }
          return ZJ
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var XJ = ZJ(39284),
          AJ = ZJ(39275);
        const qJ = {
            PHONE: "phone",
            TOTP: "totp"
          },
          jJ = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          YJ = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          hJ = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          DJ = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function sJ() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const nJ = function() {
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
          GJ = sJ,
          fJ = new FJ.d("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          xJ = {
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
          rJ = new XJ.e("@firebase/auth");

        function vJ(JJ) {
          if (rJ.logLevel <= XJ.d.ERROR) {
            for (var cJ = arguments.length, ZJ = new Array(cJ > 1 ? cJ - 1 : 0), FJ = 1; FJ < cJ; FJ++) ZJ[FJ - 1] = arguments[FJ];
            rJ.error(`Auth (${UJ.h}): ${JJ}`, ...ZJ)
          }
        }

        function mJ(JJ) {
          for (var cJ = arguments.length, ZJ = new Array(cJ > 1 ? cJ - 1 : 0), FJ = 1; FJ < cJ; FJ++) ZJ[FJ - 1] = arguments[FJ];
          throw KJ(JJ, ...ZJ)
        }

        function QJ(JJ) {
          for (var cJ = arguments.length, ZJ = new Array(cJ > 1 ? cJ - 1 : 0), FJ = 1; FJ < cJ; FJ++) ZJ[FJ - 1] = arguments[FJ];
          return KJ(JJ, ...ZJ)
        }

        function EJ(JJ, cJ, ZJ) {
          const UJ = Object.assign(Object.assign({}, GJ()), {
            [cJ]: ZJ
          });
          return new FJ.d("auth", "Firebase", UJ).create(cJ, {
            appName: JJ.name
          })
        }

        function VJ(JJ, cJ, ZJ) {
          if (!(cJ instanceof ZJ)) throw ZJ.name !== cJ.constructor.name && mJ(JJ, "argument-error"), EJ(JJ, "argument-error", `Type of ${cJ.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function KJ(JJ) {
          for (var cJ = arguments.length, ZJ = new Array(cJ > 1 ? cJ - 1 : 0), FJ = 1; FJ < cJ; FJ++) ZJ[FJ - 1] = arguments[FJ];
          if ("string" !== typeof JJ) {
            const cJ = ZJ[0],
              FJ = [...ZJ.slice(1)];
            return FJ[0] && (FJ[0].appName = JJ.name), JJ._errorFactory.create(cJ, ...FJ)
          }
          return fJ.create(JJ, ...ZJ)
        }

        function yJ(JJ, cJ) {
          if (!JJ) {
            for (var ZJ = arguments.length, FJ = new Array(ZJ > 2 ? ZJ - 2 : 0), UJ = 2; UJ < ZJ; UJ++) FJ[UJ - 2] = arguments[UJ];
            throw KJ(cJ, ...FJ)
          }
        }

        function SJ(JJ) {
          const cJ = "INTERNAL ASSERTION FAILED: " + JJ;
          throw vJ(cJ), new Error(cJ)
        }

        function IJ(JJ, cJ) {
          JJ || SJ(cJ)
        }

        function MJ() {
          var JJ;
          return "undefined" !== typeof self && (null === (JJ = self.location) || void 0 === JJ ? void 0 : JJ.href) || ""
        }

        function bJ() {
          return "http:" === wJ() || "https:" === wJ()
        }

        function wJ() {
          var JJ;
          return "undefined" !== typeof self && (null === (JJ = self.location) || void 0 === JJ ? void 0 : JJ.protocol) || null
        }
        class WJ {
          constructor(JJ, cJ) {
            this.shortDelay = JJ, this.longDelay = cJ, IJ(cJ > JJ, "Short delay should be less than long delay!"), this.isMobile = (0, FJ.O)() || (0, FJ.P)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (bJ() || (0, FJ.H)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function gJ(JJ, cJ) {
          IJ(JJ.emulator, "Emulator should always be set here");
          const {
            url: ZJ
          } = JJ.emulator;
          return cJ ? `${ZJ}${cJ.startsWith("/")?cJ.slice(1):cJ}` : ZJ
        }
        class HJ {
          static initialize(JJ, cJ, ZJ) {
            this.fetchImpl = JJ, cJ && (this.headersImpl = cJ), ZJ && (this.responseImpl = ZJ)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void SJ("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void SJ("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void SJ("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const PJ = {
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
          kJ = new WJ(3e4, 6e4);

        function pJ(JJ, cJ) {
          return JJ.tenantId && !cJ.tenantId ? Object.assign(Object.assign({}, cJ), {
            tenantId: JJ.tenantId
          }) : cJ
        }
        async function dJ(JJ, cJ, ZJ, UJ) {
          return zJ(JJ, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let eJ = {},
              XJ = {};
            UJ && ("GET" === cJ ? XJ = UJ : eJ = {
              body: JSON.stringify(UJ)
            });
            const AJ = (0, FJ.W)(Object.assign({
                key: JJ.config.apiKey
              }, XJ)).slice(1),
              qJ = await JJ._getAdditionalHeaders();
            return qJ["Content-Type"] = "application/json", JJ.languageCode && (qJ["X-Firebase-Locale"] = JJ.languageCode), HJ.fetch()(OJ(JJ, JJ.config.apiHost, ZJ, AJ), Object.assign({
              method: cJ,
              headers: qJ,
              referrerPolicy: "no-referrer"
            }, eJ))
          }))
        }
        async function zJ(JJ, cJ, ZJ) {
          JJ._canInitEmulator = !1;
          const UJ = Object.assign(Object.assign({}, PJ), cJ);
          try {
            const cJ = new TJ(JJ),
              FJ = await Promise.race([ZJ(), cJ.promise]);
            cJ.clearNetworkTimeout();
            const eJ = await FJ.json();
            if ("needConfirmation" in eJ) throw CJ(JJ, "account-exists-with-different-credential", eJ);
            if (FJ.ok && !("errorMessage" in eJ)) return eJ;
            {
              const cJ = FJ.ok ? eJ.errorMessage : eJ.error.message,
                [ZJ, XJ] = cJ.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === ZJ) throw CJ(JJ, "credential-already-in-use", eJ);
              if ("EMAIL_EXISTS" === ZJ) throw CJ(JJ, "email-already-in-use", eJ);
              if ("USER_DISABLED" === ZJ) throw CJ(JJ, "user-disabled", eJ);
              const AJ = UJ[ZJ] || ZJ.toLowerCase().replace(/[_\s]+/g, "-");
              if (XJ) throw EJ(JJ, AJ, XJ);
              mJ(JJ, AJ)
            }
          } catch (eJ) {
            if (eJ instanceof FJ.h) throw eJ;
            mJ(JJ, "network-request-failed", {
              message: String(eJ)
            })
          }
        }
        async function NJ(JJ, cJ, ZJ, FJ) {
          let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const eJ = await dJ(JJ, cJ, ZJ, FJ, UJ);
          return "mfaPendingCredential" in eJ && mJ(JJ, "multi-factor-auth-required", {
            _serverResponse: eJ
          }), eJ
        }

        function OJ(JJ, cJ, ZJ, FJ) {
          const UJ = `${cJ}${ZJ}?${FJ}`;
          return JJ.config.emulator ? gJ(JJ.config, UJ) : `${JJ.config.apiScheme}://${UJ}`
        }
        class TJ {
          constructor(JJ) {
            this.auth = JJ, this.timer = null, this.promise = new Promise(((JJ, cJ) => {
              this.timer = setTimeout((() => cJ(QJ(this.auth, "network-request-failed"))), kJ.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function CJ(JJ, cJ, ZJ) {
          const FJ = {
            appName: JJ.name
          };
          ZJ.email && (FJ.email = ZJ.email), ZJ.phoneNumber && (FJ.phoneNumber = ZJ.phoneNumber);
          const UJ = QJ(JJ, cJ, FJ);
          return UJ.customData._tokenResponse = ZJ, UJ
        }

        function uJ(JJ) {
          if (JJ) try {
            const cJ = new Date(Number(JJ));
            if (!isNaN(cJ.getTime())) return cJ.toUTCString()
          } catch (cJ) {}
        }

        function iJ(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, FJ.D)(JJ).getIdToken(cJ)
        }
        async function RJ(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const ZJ = (0, FJ.D)(JJ),
            UJ = await ZJ.getIdToken(cJ),
            eJ = aJ(UJ);
          yJ(eJ && eJ.exp && eJ.auth_time && eJ.iat, ZJ.auth, "internal-error");
          const XJ = "object" === typeof eJ.firebase ? eJ.firebase : void 0,
            AJ = null === XJ || void 0 === XJ ? void 0 : XJ.sign_in_provider;
          return {
            claims: eJ,
            token: UJ,
            authTime: uJ(LJ(eJ.auth_time)),
            issuedAtTime: uJ(LJ(eJ.iat)),
            expirationTime: uJ(LJ(eJ.exp)),
            signInProvider: AJ || null,
            signInSecondFactor: (null === XJ || void 0 === XJ ? void 0 : XJ.sign_in_second_factor) || null
          }
        }

        function LJ(JJ) {
          return 1e3 * Number(JJ)
        }

        function aJ(JJ) {
          const [cJ, ZJ, UJ] = JJ.split(".");
          if (void 0 === cJ || void 0 === ZJ || void 0 === UJ) return vJ("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const JJ = (0, FJ.j)(ZJ);
            return JJ ? JSON.parse(JJ) : (vJ("Failed to decode base64 JWT payload"), null)
          } catch (eJ) {
            return vJ("Caught error parsing JWT payload as JSON", null === eJ || void 0 === eJ ? void 0 : eJ.toString()), null
          }
        }
        async function BJ(JJ, cJ) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return cJ;
          try {
            return await cJ
          } catch (ZJ) {
            throw ZJ instanceof FJ.h && function(JJ) {
              let {
                code: cJ
              } = JJ;
              return "auth/user-disabled" === cJ || "auth/user-token-expired" === cJ
            }(ZJ) && JJ.auth.currentUser === JJ && await JJ.auth.signOut(), ZJ
          }
        }
        class tJ {
          constructor(JJ) {
            this.user = JJ, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(JJ) {
            var cJ;
            if (JJ) {
              const JJ = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), JJ
            } {
              this.errorBackoff = 3e4;
              const JJ = (null !== (cJ = this.user.stsTokenManager.expirationTime) && void 0 !== cJ ? cJ : 0) - Date.now() - 3e5;
              return Math.max(0, JJ)
            }
          }
          schedule() {
            let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const cJ = this.getInterval(JJ);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), cJ)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (JJ) {
              return void("auth/network-request-failed" === (null === JJ || void 0 === JJ ? void 0 : JJ.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class oJ {
          constructor(JJ, cJ) {
            this.createdAt = JJ, this.lastLoginAt = cJ, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = uJ(this.lastLoginAt), this.creationTime = uJ(this.createdAt)
          }
          _copy(JJ) {
            this.createdAt = JJ.createdAt, this.lastLoginAt = JJ.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function lJ(JJ) {
          var cJ;
          const ZJ = JJ.auth,
            FJ = await JJ.getIdToken(),
            UJ = await BJ(JJ, async function(JJ, cJ) {
              return dJ(JJ, "POST", "/v1/accounts:lookup", cJ)
            }(ZJ, {
              idToken: FJ
            }));
          yJ(null === UJ || void 0 === UJ ? void 0 : UJ.users.length, ZJ, "internal-error");
          const XJ = UJ.users[0];
          JJ._notifyReloadListener(XJ);
          const AJ = (null === (cJ = XJ.providerUserInfo) || void 0 === cJ ? void 0 : cJ.length) ? XJ.providerUserInfo.map((JJ => {
            var {
              providerId: cJ
            } = JJ, ZJ = eJ(JJ, ["providerId"]);
            return {
              providerId: cJ,
              uid: ZJ.rawId || "",
              displayName: ZJ.displayName || null,
              email: ZJ.email || null,
              phoneNumber: ZJ.phoneNumber || null,
              photoURL: ZJ.photoUrl || null
            }
          })) : [];
          const qJ = (jJ = JJ.providerData, YJ = AJ, [...jJ.filter((JJ => !YJ.some((cJ => cJ.providerId === JJ.providerId)))), ...YJ]);
          var jJ, YJ;
          const hJ = JJ.isAnonymous,
            DJ = !(JJ.email && XJ.passwordHash) && !(null === qJ || void 0 === qJ ? void 0 : qJ.length),
            sJ = !!hJ && DJ,
            nJ = {
              uid: XJ.localId,
              displayName: XJ.displayName || null,
              photoURL: XJ.photoUrl || null,
              email: XJ.email || null,
              emailVerified: XJ.emailVerified || !1,
              phoneNumber: XJ.phoneNumber || null,
              tenantId: XJ.tenantId || null,
              providerData: qJ,
              metadata: new oJ(XJ.createdAt, XJ.lastLoginAt),
              isAnonymous: sJ
            };
          Object.assign(JJ, nJ)
        }
        async function Jc(JJ) {
          const cJ = (0, FJ.D)(JJ);
          await lJ(cJ), await cJ.auth._persistUserIfCurrent(cJ), cJ.auth._notifyListenersIfCurrent(cJ)
        }
        class cc {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(JJ) {
            yJ(JJ.idToken, "internal-error"), yJ("undefined" !== typeof JJ.idToken, "internal-error"), yJ("undefined" !== typeof JJ.refreshToken, "internal-error");
            const cJ = "expiresIn" in JJ && "undefined" !== typeof JJ.expiresIn ? Number(JJ.expiresIn) : function(JJ) {
              const cJ = aJ(JJ);
              return yJ(cJ, "internal-error"), yJ("undefined" !== typeof cJ.exp, "internal-error"), yJ("undefined" !== typeof cJ.iat, "internal-error"), Number(cJ.exp) - Number(cJ.iat)
            }(JJ.idToken);
            this.updateTokensAndExpiration(JJ.idToken, JJ.refreshToken, cJ)
          }
          async getToken(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return yJ(!this.accessToken || this.refreshToken, JJ, "user-token-expired"), cJ || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(JJ, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(JJ, cJ) {
            const {
              accessToken: ZJ,
              refreshToken: UJ,
              expiresIn: eJ
            } = await async function(JJ, cJ) {
              const ZJ = await zJ(JJ, {}, (async () => {
                const ZJ = (0, FJ.W)({
                    grant_type: "refresh_token",
                    refresh_token: cJ
                  }).slice(1),
                  {
                    tokenApiHost: UJ,
                    apiKey: eJ
                  } = JJ.config,
                  XJ = OJ(JJ, UJ, "/v1/token", `key=${eJ}`),
                  AJ = await JJ._getAdditionalHeaders();
                return AJ["Content-Type"] = "application/x-www-form-urlencoded", HJ.fetch()(XJ, {
                  method: "POST",
                  headers: AJ,
                  body: ZJ
                })
              }));
              return {
                accessToken: ZJ.access_token,
                expiresIn: ZJ.expires_in,
                refreshToken: ZJ.refresh_token
              }
            }(JJ, cJ);
            this.updateTokensAndExpiration(ZJ, UJ, Number(eJ))
          }
          updateTokensAndExpiration(JJ, cJ, ZJ) {
            this.refreshToken = cJ || null, this.accessToken = JJ || null, this.expirationTime = Date.now() + 1e3 * ZJ
          }
          static fromJSON(JJ, cJ) {
            const {
              refreshToken: ZJ,
              accessToken: FJ,
              expirationTime: UJ
            } = cJ, eJ = new cc;
            return ZJ && (yJ("string" === typeof ZJ, "internal-error", {
              appName: JJ
            }), eJ.refreshToken = ZJ), FJ && (yJ("string" === typeof FJ, "internal-error", {
              appName: JJ
            }), eJ.accessToken = FJ), UJ && (yJ("number" === typeof UJ, "internal-error", {
              appName: JJ
            }), eJ.expirationTime = UJ), eJ
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(JJ) {
            this.accessToken = JJ.accessToken, this.refreshToken = JJ.refreshToken, this.expirationTime = JJ.expirationTime
          }
          _clone() {
            return Object.assign(new cc, this.toJSON())
          }
          _performRefresh() {
            return SJ("not implemented")
          }
        }

        function Zc(JJ, cJ) {
          yJ("string" === typeof JJ || "undefined" === typeof JJ, "internal-error", {
            appName: cJ
          })
        }
        class Fc {
          constructor(JJ) {
            var {
              uid: cJ,
              auth: ZJ,
              stsTokenManager: FJ
            } = JJ, UJ = eJ(JJ, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new tJ(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = cJ, this.auth = ZJ, this.stsTokenManager = FJ, this.accessToken = FJ.accessToken, this.displayName = UJ.displayName || null, this.email = UJ.email || null, this.emailVerified = UJ.emailVerified || !1, this.phoneNumber = UJ.phoneNumber || null, this.photoURL = UJ.photoURL || null, this.isAnonymous = UJ.isAnonymous || !1, this.tenantId = UJ.tenantId || null, this.providerData = UJ.providerData ? [...UJ.providerData] : [], this.metadata = new oJ(UJ.createdAt || void 0, UJ.lastLoginAt || void 0)
          }
          async getIdToken(JJ) {
            const cJ = await BJ(this, this.stsTokenManager.getToken(this.auth, JJ));
            return yJ(cJ, this.auth, "internal-error"), this.accessToken !== cJ && (this.accessToken = cJ, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), cJ
          }
          getIdTokenResult(JJ) {
            return RJ(this, JJ)
          }
          reload() {
            return Jc(this)
          }
          _assign(JJ) {
            this !== JJ && (yJ(this.uid === JJ.uid, this.auth, "internal-error"), this.displayName = JJ.displayName, this.photoURL = JJ.photoURL, this.email = JJ.email, this.emailVerified = JJ.emailVerified, this.phoneNumber = JJ.phoneNumber, this.isAnonymous = JJ.isAnonymous, this.tenantId = JJ.tenantId, this.providerData = JJ.providerData.map((JJ => Object.assign({}, JJ))), this.metadata._copy(JJ.metadata), this.stsTokenManager._assign(JJ.stsTokenManager))
          }
          _clone(JJ) {
            const cJ = new Fc(Object.assign(Object.assign({}, this), {
              auth: JJ,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return cJ.metadata._copy(this.metadata), cJ
          }
          _onReload(JJ) {
            yJ(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = JJ, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(JJ) {
            this.reloadListener ? this.reloadListener(JJ) : this.reloadUserInfo = JJ
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZJ = !1;
            JJ.idToken && JJ.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(JJ), ZJ = !0), cJ && await lJ(this), await this.auth._persistUserIfCurrent(this), ZJ && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const JJ = await this.getIdToken();
            return await BJ(this, async function(JJ, cJ) {
              return dJ(JJ, "POST", "/v1/accounts:delete", cJ)
            }(this.auth, {
              idToken: JJ
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
              providerData: this.providerData.map((JJ => Object.assign({}, JJ))),
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
          static _fromJSON(JJ, cJ) {
            var ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ;
            const YJ = null !== (ZJ = cJ.displayName) && void 0 !== ZJ ? ZJ : void 0,
              hJ = null !== (FJ = cJ.email) && void 0 !== FJ ? FJ : void 0,
              DJ = null !== (UJ = cJ.phoneNumber) && void 0 !== UJ ? UJ : void 0,
              sJ = null !== (eJ = cJ.photoURL) && void 0 !== eJ ? eJ : void 0,
              nJ = null !== (XJ = cJ.tenantId) && void 0 !== XJ ? XJ : void 0,
              GJ = null !== (AJ = cJ._redirectEventId) && void 0 !== AJ ? AJ : void 0,
              fJ = null !== (qJ = cJ.createdAt) && void 0 !== qJ ? qJ : void 0,
              xJ = null !== (jJ = cJ.lastLoginAt) && void 0 !== jJ ? jJ : void 0,
              {
                uid: rJ,
                emailVerified: vJ,
                isAnonymous: mJ,
                providerData: QJ,
                stsTokenManager: EJ
              } = cJ;
            yJ(rJ && EJ, JJ, "internal-error");
            const VJ = cc.fromJSON(this.name, EJ);
            yJ("string" === typeof rJ, JJ, "internal-error"), Zc(YJ, JJ.name), Zc(hJ, JJ.name), yJ("boolean" === typeof vJ, JJ, "internal-error"), yJ("boolean" === typeof mJ, JJ, "internal-error"), Zc(DJ, JJ.name), Zc(sJ, JJ.name), Zc(nJ, JJ.name), Zc(GJ, JJ.name), Zc(fJ, JJ.name), Zc(xJ, JJ.name);
            const KJ = new Fc({
              uid: rJ,
              auth: JJ,
              email: hJ,
              emailVerified: vJ,
              displayName: YJ,
              isAnonymous: mJ,
              photoURL: sJ,
              phoneNumber: DJ,
              tenantId: nJ,
              stsTokenManager: VJ,
              createdAt: fJ,
              lastLoginAt: xJ
            });
            return QJ && Array.isArray(QJ) && (KJ.providerData = QJ.map((JJ => Object.assign({}, JJ)))), GJ && (KJ._redirectEventId = GJ), KJ
          }
          static async _fromIdTokenResponse(JJ, cJ) {
            let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const FJ = new cc;
            FJ.updateFromServerResponse(cJ);
            const UJ = new Fc({
              uid: cJ.localId,
              auth: JJ,
              stsTokenManager: FJ,
              isAnonymous: ZJ
            });
            return await lJ(UJ), UJ
          }
        }
        const Uc = new Map;

        function ec(JJ) {
          IJ(JJ instanceof Function, "Expected a class definition");
          let cJ = Uc.get(JJ);
          return cJ ? (IJ(cJ instanceof JJ, "Instance stored in cache mismatched with class"), cJ) : (cJ = new JJ, Uc.set(JJ, cJ), cJ)
        }
        class Xc {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(JJ, cJ) {
            this.storage[JJ] = cJ
          }
          async _get(JJ) {
            const cJ = this.storage[JJ];
            return void 0 === cJ ? null : cJ
          }
          async _remove(JJ) {
            delete this.storage[JJ]
          }
          _addListener(JJ, cJ) {}
          _removeListener(JJ, cJ) {}
        }
        Xc.type = "NONE";
        const Ac = Xc;

        function qc(JJ, cJ, ZJ) {
          return `firebase:${JJ}:${cJ}:${ZJ}`
        }
        class jc {
          constructor(JJ, cJ, ZJ) {
            this.persistence = JJ, this.auth = cJ, this.userKey = ZJ;
            const {
              config: FJ,
              name: UJ
            } = this.auth;
            this.fullUserKey = qc(this.userKey, FJ.apiKey, UJ), this.fullPersistenceKey = qc("persistence", FJ.apiKey, UJ), this.boundEventHandler = cJ._onStorageEvent.bind(cJ), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(JJ) {
            return this.persistence._set(this.fullUserKey, JJ.toJSON())
          }
          async getCurrentUser() {
            const JJ = await this.persistence._get(this.fullUserKey);
            return JJ ? Fc._fromJSON(this.auth, JJ) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(JJ) {
            if (this.persistence === JJ) return;
            const cJ = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = JJ, cJ ? this.setCurrentUser(cJ) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(JJ, cJ) {
            let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!cJ.length) return new jc(ec(Ac), JJ, ZJ);
            const FJ = (await Promise.all(cJ.map((async JJ => {
              if (await JJ._isAvailable()) return JJ
            })))).filter((JJ => JJ));
            let UJ = FJ[0] || ec(Ac);
            const eJ = qc(ZJ, JJ.config.apiKey, JJ.name);
            let XJ = null;
            for (const jJ of cJ) try {
              const cJ = await jJ._get(eJ);
              if (cJ) {
                const ZJ = Fc._fromJSON(JJ, cJ);
                jJ !== UJ && (XJ = ZJ), UJ = jJ;
                break
              }
            } catch (qJ) {}
            const AJ = FJ.filter((JJ => JJ._shouldAllowMigration));
            return UJ._shouldAllowMigration && AJ.length ? (UJ = AJ[0], XJ && await UJ._set(eJ, XJ.toJSON()), await Promise.all(cJ.map((async JJ => {
              if (JJ !== UJ) try {
                await JJ._remove(eJ)
              } catch (qJ) {}
            }))), new jc(UJ, JJ, ZJ)) : new jc(UJ, JJ, ZJ)
          }
        }

        function Yc(JJ) {
          const cJ = JJ.toLowerCase();
          if (cJ.includes("opera/") || cJ.includes("opr/") || cJ.includes("opios/")) return "Opera";
          if (nc(cJ)) return "IEMobile";
          if (cJ.includes("msie") || cJ.includes("trident/")) return "IE";
          if (cJ.includes("edge/")) return "Edge";
          if (hc(cJ)) return "Firefox";
          if (cJ.includes("silk/")) return "Silk";
          if (fc(cJ)) return "Blackberry";
          if (xc(cJ)) return "Webos";
          if (Dc(cJ)) return "Safari";
          if ((cJ.includes("chrome/") || sc(cJ)) && !cJ.includes("edge/")) return "Chrome";
          if (Gc(cJ)) return "Android";
          {
            const cJ = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              ZJ = JJ.match(cJ);
            if (2 === (null === ZJ || void 0 === ZJ ? void 0 : ZJ.length)) return ZJ[1]
          }
          return "Other"
        }

        function hc() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FJ.G)();
          return /firefox\//i.test(JJ)
        }

        function Dc() {
          const JJ = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FJ.G)()).toLowerCase();
          return JJ.includes("safari/") && !JJ.includes("chrome/") && !JJ.includes("crios/") && !JJ.includes("android")
        }

        function sc() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FJ.G)();
          return /crios\//i.test(JJ)
        }

        function nc() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FJ.G)();
          return /iemobile/i.test(JJ)
        }

        function Gc() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FJ.G)();
          return /android/i.test(JJ)
        }

        function fc() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FJ.G)();
          return /blackberry/i.test(JJ)
        }

        function xc() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FJ.G)();
          return /webos/i.test(JJ)
        }

        function rc() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FJ.G)();
          return /iphone|ipad|ipod/i.test(JJ) || /macintosh/i.test(JJ) && /mobile/i.test(JJ)
        }

        function vc() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FJ.G)();
          return rc(JJ) || Gc(JJ) || xc(JJ) || fc(JJ) || /windows phone/i.test(JJ) || nc(JJ)
        }

        function mc(JJ) {
          let cJ, ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (JJ) {
            case "Browser":
              cJ = Yc((0, FJ.G)());
              break;
            case "Worker":
              cJ = `${Yc((0,FJ.G)())}-${JJ}`;
              break;
            default:
              cJ = JJ
          }
          const eJ = ZJ.length ? ZJ.join(",") : "FirebaseCore-web";
          return `${cJ}/JsCore/${UJ.h}/${eJ}`
        }
        async function Qc(JJ, cJ) {
          return dJ(JJ, "GET", "/v2/recaptchaConfig", pJ(JJ, cJ))
        }

        function Ec(JJ) {
          return void 0 !== JJ && void 0 !== JJ.getResponse
        }

        function Vc(JJ) {
          return void 0 !== JJ && void 0 !== JJ.enterprise
        }
        class Kc {
          constructor(JJ) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === JJ.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = JJ.recaptchaKey.split("/")[3], this.emailPasswordEnabled = JJ.recaptchaEnforcementState.some((JJ => "EMAIL_PASSWORD_PROVIDER" === JJ.provider && "OFF" !== JJ.enforcementState))
          }
        }

        function yc(JJ) {
          return new Promise(((cJ, ZJ) => {
            const FJ = document.createElement("script");
            FJ.setAttribute("src", JJ), FJ.onload = cJ, FJ.onerror = JJ => {
                const cJ = QJ("internal-error");
                cJ.customData = JJ, ZJ(cJ)
              }, FJ.type = "text/javascript", FJ.charset = "UTF-8",
              function() {
                var JJ, cJ;
                return null !== (cJ = null === (JJ = document.getElementsByTagName("head")) || void 0 === JJ ? void 0 : JJ[0]) && void 0 !== cJ ? cJ : document
              }().appendChild(FJ)
          }))
        }

        function Sc(JJ) {
          return `__${JJ}${Math.floor(1e6*Math.random())}`
        }
        class Ic {
          constructor(JJ) {
            this.type = "recaptcha-enterprise", this.auth = Wc(JJ)
          }
          async verify() {
            let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function ZJ(cJ, ZJ, FJ) {
              const UJ = window.grecaptcha;
              Vc(UJ) ? UJ.enterprise.ready((() => {
                UJ.enterprise.execute(cJ, {
                  action: JJ
                }).then((JJ => {
                  ZJ(JJ)
                })).catch((() => {
                  ZJ("NO_RECAPTCHA")
                }))
              })) : FJ(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((JJ, FJ) => {
              (async function(JJ) {
                if (!cJ) {
                  if (null == JJ.tenantId && null != JJ._agentRecaptchaConfig) return JJ._agentRecaptchaConfig.siteKey;
                  if (null != JJ.tenantId && void 0 !== JJ._tenantRecaptchaConfigs[JJ.tenantId]) return JJ._tenantRecaptchaConfigs[JJ.tenantId].siteKey
                }
                return new Promise((async (cJ, ZJ) => {
                  Qc(JJ, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((FJ => {
                    if (void 0 !== FJ.recaptchaKey) {
                      const ZJ = new Kc(FJ);
                      return null == JJ.tenantId ? JJ._agentRecaptchaConfig = ZJ : JJ._tenantRecaptchaConfigs[JJ.tenantId] = ZJ, cJ(ZJ.siteKey)
                    }
                    ZJ(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((JJ => {
                    ZJ(JJ)
                  }))
                }))
              })(this.auth).then((UJ => {
                if (!cJ && Vc(window.grecaptcha)) ZJ(UJ, JJ, FJ);
                else {
                  if ("undefined" === typeof window) return void FJ(new Error("RecaptchaVerifier is only supported in browser"));
                  yc("https://www.google.com/recaptcha/enterprise.js?render=" + UJ).then((() => {
                    ZJ(UJ, JJ, FJ)
                  })).catch((JJ => {
                    FJ(JJ)
                  }))
                }
              })).catch((JJ => {
                FJ(JJ)
              }))
            }))
          }
        }
        async function Mc(JJ, cJ, ZJ) {
          let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const UJ = new Ic(JJ);
          let eJ;
          try {
            eJ = await UJ.verify(ZJ)
          } catch (AJ) {
            eJ = await UJ.verify(ZJ, !0)
          }
          const XJ = Object.assign({}, cJ);
          return FJ ? Object.assign(XJ, {
            captchaResp: eJ
          }) : Object.assign(XJ, {
            captchaResponse: eJ
          }), Object.assign(XJ, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(XJ, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), XJ
        }
        class bc {
          constructor(JJ) {
            this.auth = JJ, this.queue = []
          }
          pushCallback(JJ, cJ) {
            const ZJ = cJ => new Promise(((ZJ, FJ) => {
              try {
                ZJ(JJ(cJ))
              } catch (UJ) {
                FJ(UJ)
              }
            }));
            ZJ.onAbort = cJ, this.queue.push(ZJ);
            const FJ = this.queue.length - 1;
            return () => {
              this.queue[FJ] = () => Promise.resolve()
            }
          }
          async runMiddleware(JJ) {
            if (this.auth.currentUser === JJ) return;
            const cJ = [];
            try {
              for (const ZJ of this.queue) await ZJ(JJ), ZJ.onAbort && cJ.push(ZJ.onAbort)
            } catch (ZJ) {
              cJ.reverse();
              for (const JJ of cJ) try {
                JJ()
              } catch (FJ) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === ZJ || void 0 === ZJ ? void 0 : ZJ.message
              })
            }
          }
        }
        class wc {
          constructor(JJ, cJ, ZJ, FJ) {
            this.app = JJ, this.heartbeatServiceProvider = cJ, this.appCheckServiceProvider = ZJ, this.config = FJ, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new gc(this), this.idTokenSubscription = new gc(this), this.beforeStateQueue = new bc(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = fJ, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = JJ.name, this.clientVersion = FJ.sdkClientVersion
          }
          _initializeWithPersistence(JJ, cJ) {
            return cJ && (this._popupRedirectResolver = ec(cJ)), this._initializationPromise = this.queue((async () => {
              var ZJ, FJ;
              if (!this._deleted && (this.persistenceManager = await jc.create(this, JJ), !this._deleted)) {
                if (null === (ZJ = this._popupRedirectResolver) || void 0 === ZJ ? void 0 : ZJ._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (UJ) {}
                await this.initializeCurrentUser(cJ), this.lastNotifiedUid = (null === (FJ = this.currentUser) || void 0 === FJ ? void 0 : FJ.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const JJ = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || JJ ? this.currentUser && JJ && this.currentUser.uid === JJ.uid ? (this._currentUser._assign(JJ), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(JJ, !0) : void 0
          }
          async initializeCurrentUser(JJ) {
            var cJ;
            const ZJ = await this.assertedPersistence.getCurrentUser();
            let FJ = ZJ,
              UJ = !1;
            if (JJ && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const ZJ = null === (cJ = this.redirectUser) || void 0 === cJ ? void 0 : cJ._redirectEventId,
                eJ = null === FJ || void 0 === FJ ? void 0 : FJ._redirectEventId,
                XJ = await this.tryRedirectSignIn(JJ);
              ZJ && ZJ !== eJ || !(null === XJ || void 0 === XJ ? void 0 : XJ.user) || (FJ = XJ.user, UJ = !0)
            }
            if (!FJ) return this.directlySetCurrentUser(null);
            if (!FJ._redirectEventId) {
              if (UJ) try {
                await this.beforeStateQueue.runMiddleware(FJ)
              } catch (eJ) {
                FJ = ZJ, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(eJ)))
              }
              return FJ ? this.reloadAndSetCurrentUserOrClear(FJ) : this.directlySetCurrentUser(null)
            }
            return yJ(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === FJ._redirectEventId ? this.directlySetCurrentUser(FJ) : this.reloadAndSetCurrentUserOrClear(FJ)
          }
          async tryRedirectSignIn(JJ) {
            let cJ = null;
            try {
              cJ = await this._popupRedirectResolver._completeRedirectFn(this, JJ, !0)
            } catch (ZJ) {
              await this._setRedirectUser(null)
            }
            return cJ
          }
          async reloadAndSetCurrentUserOrClear(JJ) {
            try {
              await lJ(JJ)
            } catch (cJ) {
              if ("auth/network-request-failed" !== (null === cJ || void 0 === cJ ? void 0 : cJ.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(JJ)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const JJ = navigator;
              return JJ.languages && JJ.languages[0] || JJ.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(JJ) {
            const cJ = JJ ? (0, FJ.D)(JJ) : null;
            return cJ && yJ(cJ.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(cJ && cJ._clone(this))
          }
          async _updateCurrentUser(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return JJ && yJ(this.tenantId === JJ.tenantId, this, "tenant-id-mismatch"), cJ || await this.beforeStateQueue.runMiddleware(JJ), this.queue((async () => {
              await this.directlySetCurrentUser(JJ), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(JJ) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(ec(JJ))
            }))
          }
          async initializeRecaptchaConfig() {
            const JJ = await Qc(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              cJ = new Kc(JJ);
            if (null == this.tenantId ? this._agentRecaptchaConfig = cJ : this._tenantRecaptchaConfigs[this.tenantId] = cJ, cJ.emailPasswordEnabled) {
              new Ic(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(JJ) {
            this._errorFactory = new FJ.d("auth", "Firebase", JJ())
          }
          onAuthStateChanged(JJ, cJ, ZJ) {
            return this.registerStateListener(this.authStateSubscription, JJ, cJ, ZJ)
          }
          beforeAuthStateChanged(JJ, cJ) {
            return this.beforeStateQueue.pushCallback(JJ, cJ)
          }
          onIdTokenChanged(JJ, cJ, ZJ) {
            return this.registerStateListener(this.idTokenSubscription, JJ, cJ, ZJ)
          }
          toJSON() {
            var JJ;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (JJ = this._currentUser) || void 0 === JJ ? void 0 : JJ.toJSON()
            }
          }
          async _setRedirectUser(JJ, cJ) {
            const ZJ = await this.getOrInitRedirectPersistenceManager(cJ);
            return null === JJ ? ZJ.removeCurrentUser() : ZJ.setCurrentUser(JJ)
          }
          async getOrInitRedirectPersistenceManager(JJ) {
            if (!this.redirectPersistenceManager) {
              const cJ = JJ && ec(JJ) || this._popupRedirectResolver;
              yJ(cJ, this, "argument-error"), this.redirectPersistenceManager = await jc.create(this, [ec(cJ._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(JJ) {
            var cJ, ZJ;
            return this._isInitialized && await this.queue((async () => {})), (null === (cJ = this._currentUser) || void 0 === cJ ? void 0 : cJ._redirectEventId) === JJ ? this._currentUser : (null === (ZJ = this.redirectUser) || void 0 === ZJ ? void 0 : ZJ._redirectEventId) === JJ ? this.redirectUser : null
          }
          async _persistUserIfCurrent(JJ) {
            if (JJ === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(JJ)))
          }
          _notifyListenersIfCurrent(JJ) {
            JJ === this.currentUser && this.notifyAuthListeners()
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
            var JJ, cJ;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const ZJ = null !== (cJ = null === (JJ = this.currentUser) || void 0 === JJ ? void 0 : JJ.uid) && void 0 !== cJ ? cJ : null;
            this.lastNotifiedUid !== ZJ && (this.lastNotifiedUid = ZJ, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(JJ, cJ, ZJ, FJ) {
            if (this._deleted) return () => {};
            const UJ = "function" === typeof cJ ? cJ : cJ.next.bind(cJ),
              eJ = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return yJ(eJ, this, "internal-error"), eJ.then((() => UJ(this.currentUser))), "function" === typeof cJ ? JJ.addObserver(cJ, ZJ, FJ) : JJ.addObserver(cJ)
          }
          async directlySetCurrentUser(JJ) {
            this.currentUser && this.currentUser !== JJ && this._currentUser._stopProactiveRefresh(), JJ && this.isProactiveRefreshEnabled && JJ._startProactiveRefresh(), this.currentUser = JJ, JJ ? await this.assertedPersistence.setCurrentUser(JJ) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(JJ) {
            return this.operations = this.operations.then(JJ, JJ), this.operations
          }
          get assertedPersistence() {
            return yJ(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(JJ) {
            JJ && !this.frameworks.includes(JJ) && (this.frameworks.push(JJ), this.frameworks.sort(), this.clientVersion = mc(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var JJ;
            const cJ = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (cJ["X-Firebase-gmpid"] = this.app.options.appId);
            const ZJ = await (null === (JJ = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === JJ ? void 0 : JJ.getHeartbeatsHeader());
            ZJ && (cJ["X-Firebase-Client"] = ZJ);
            const FJ = await this._getAppCheckToken();
            return FJ && (cJ["X-Firebase-AppCheck"] = FJ), cJ
          }
          async _getAppCheckToken() {
            var JJ;
            const cJ = await (null === (JJ = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === JJ ? void 0 : JJ.getToken());
            return (null === cJ || void 0 === cJ ? void 0 : cJ.error) && function(JJ) {
              if (rJ.logLevel <= XJ.d.WARN) {
                for (var cJ = arguments.length, ZJ = new Array(cJ > 1 ? cJ - 1 : 0), FJ = 1; FJ < cJ; FJ++) ZJ[FJ - 1] = arguments[FJ];
                rJ.warn(`Auth (${UJ.h}): ${JJ}`, ...ZJ)
              }
            }(`Error while retrieving App Check token: ${cJ.error}`), null === cJ || void 0 === cJ ? void 0 : cJ.token
          }
        }

        function Wc(JJ) {
          return (0, FJ.D)(JJ)
        }
        class gc {
          constructor(JJ) {
            this.auth = JJ, this.observer = null, this.addObserver = (0, FJ.q)((JJ => this.observer = JJ))
          }
          get next() {
            return yJ(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function Hc(JJ, cJ) {
          const ZJ = (0, UJ.A)(JJ, "auth");
          if (ZJ.isInitialized()) {
            const JJ = ZJ.getImmediate(),
              UJ = ZJ.getOptions();
            if ((0, FJ.r)(UJ, null !== cJ && void 0 !== cJ ? cJ : {})) return JJ;
            mJ(JJ, "already-initialized")
          }
          return ZJ.initialize({
            options: cJ
          })
        }

        function Pc(JJ, cJ, ZJ) {
          const FJ = Wc(JJ);
          yJ(FJ._canInitEmulator, FJ, "emulator-config-failed"), yJ(/^https?:\/\//.test(cJ), FJ, "invalid-emulator-scheme");
          const UJ = !!(null === ZJ || void 0 === ZJ ? void 0 : ZJ.disableWarnings),
            eJ = kc(cJ),
            {
              host: XJ,
              port: AJ
            } = function(JJ) {
              const cJ = kc(JJ),
                ZJ = /(\/\/)?([^?#/]+)/.exec(JJ.substr(cJ.length));
              if (!ZJ) return {
                host: "",
                port: null
              };
              const FJ = ZJ[2].split("@").pop() || "",
                UJ = /^(\[[^\]]+\])(:|$)/.exec(FJ);
              if (UJ) {
                const JJ = UJ[1];
                return {
                  host: JJ,
                  port: pc(FJ.substr(JJ.length + 1))
                }
              } {
                const [JJ, cJ] = FJ.split(":");
                return {
                  host: JJ,
                  port: pc(cJ)
                }
              }
            }(cJ),
            qJ = null === AJ ? "" : `:${AJ}`;
          FJ.config.emulator = {
            url: `${eJ}//${XJ}${qJ}/`
          }, FJ.settings.appVerificationDisabledForTesting = !0, FJ.emulatorConfig = Object.freeze({
            host: XJ,
            port: AJ,
            protocol: eJ.replace(":", ""),
            options: Object.freeze({
              disableWarnings: UJ
            })
          }), UJ || function() {
            function JJ() {
              const JJ = document.createElement("p"),
                cJ = JJ.style;
              JJ.innerText = "Running in emulator mode. Do not use with production credentials.", cJ.position = "fixed", cJ.width = "100%", cJ.backgroundColor = "#ffffff", cJ.border = ".1em solid #000000", cJ.color = "#b50000", cJ.bottom = "0px", cJ.left = "0px", cJ.margin = "0px", cJ.zIndex = "10000", cJ.textAlign = "center", JJ.classList.add("firebase-emulator-warning"), document.body.appendChild(JJ)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", JJ) : JJ())
          }()
        }

        function kc(JJ) {
          const cJ = JJ.indexOf(":");
          return cJ < 0 ? "" : JJ.substr(0, cJ + 1)
        }

        function pc(JJ) {
          if (!JJ) return null;
          const cJ = Number(JJ);
          return isNaN(cJ) ? null : cJ
        }
        class dc {
          constructor(JJ, cJ) {
            this.providerId = JJ, this.signInMethod = cJ
          }
          toJSON() {
            return SJ("not implemented")
          }
          _getIdTokenResponse(JJ) {
            return SJ("not implemented")
          }
          _linkToIdToken(JJ, cJ) {
            return SJ("not implemented")
          }
          _getReauthenticationResolver(JJ) {
            return SJ("not implemented")
          }
        }
        async function zc(JJ, cJ) {
          return dJ(JJ, "POST", "/v1/accounts:resetPassword", pJ(JJ, cJ))
        }
        async function Nc(JJ, cJ) {
          return dJ(JJ, "POST", "/v1/accounts:update", cJ)
        }
        async function Oc(JJ, cJ) {
          return NJ(JJ, "POST", "/v1/accounts:signInWithPassword", pJ(JJ, cJ))
        }
        async function Tc(JJ, cJ) {
          return dJ(JJ, "POST", "/v1/accounts:sendOobCode", pJ(JJ, cJ))
        }
        async function Cc(JJ, cJ) {
          return Tc(JJ, cJ)
        }
        async function uc(JJ, cJ) {
          return Tc(JJ, cJ)
        }
        class ic extends dc {
          constructor(JJ, cJ, ZJ) {
            let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", ZJ), this._email = JJ, this._password = cJ, this._tenantId = FJ
          }
          static _fromEmailAndPassword(JJ, cJ) {
            return new ic(JJ, cJ, "password")
          }
          static _fromEmailAndCode(JJ, cJ) {
            return new ic(JJ, cJ, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(JJ) {
            const cJ = "string" === typeof JJ ? JSON.parse(JJ) : JJ;
            if ((null === cJ || void 0 === cJ ? void 0 : cJ.email) && (null === cJ || void 0 === cJ ? void 0 : cJ.password)) {
              if ("password" === cJ.signInMethod) return this._fromEmailAndPassword(cJ.email, cJ.password);
              if ("emailLink" === cJ.signInMethod) return this._fromEmailAndCode(cJ.email, cJ.password, cJ.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(JJ) {
            var cJ;
            switch (this.signInMethod) {
              case "password":
                const ZJ = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (cJ = JJ._getRecaptchaConfig()) || void 0 === cJ ? void 0 : cJ.emailPasswordEnabled) {
                  const cJ = await Mc(JJ, ZJ, "signInWithPassword");
                  return Oc(JJ, cJ)
                }
                return Oc(JJ, ZJ).catch((async cJ => {
                  if ("auth/missing-recaptcha-token" === cJ.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const cJ = await Mc(JJ, ZJ, "signInWithPassword");
                    return Oc(JJ, cJ)
                  }
                  return Promise.reject(cJ)
                }));
              case "emailLink":
                return async function(JJ, cJ) {
                  return NJ(JJ, "POST", "/v1/accounts:signInWithEmailLink", pJ(JJ, cJ))
                }(JJ, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                mJ(JJ, "internal-error")
            }
          }
          async _linkToIdToken(JJ, cJ) {
            switch (this.signInMethod) {
              case "password":
                return Nc(JJ, {
                  idToken: cJ,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(JJ, cJ) {
                  return NJ(JJ, "POST", "/v1/accounts:signInWithEmailLink", pJ(JJ, cJ))
                }(JJ, {
                  idToken: cJ,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                mJ(JJ, "internal-error")
            }
          }
          _getReauthenticationResolver(JJ) {
            return this._getIdTokenResponse(JJ)
          }
        }
        async function Rc(JJ, cJ) {
          return NJ(JJ, "POST", "/v1/accounts:signInWithIdp", pJ(JJ, cJ))
        }
        class Lc extends dc {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(JJ) {
            const cJ = new Lc(JJ.providerId, JJ.signInMethod);
            return JJ.idToken || JJ.accessToken ? (JJ.idToken && (cJ.idToken = JJ.idToken), JJ.accessToken && (cJ.accessToken = JJ.accessToken), JJ.nonce && !JJ.pendingToken && (cJ.nonce = JJ.nonce), JJ.pendingToken && (cJ.pendingToken = JJ.pendingToken)) : JJ.oauthToken && JJ.oauthTokenSecret ? (cJ.accessToken = JJ.oauthToken, cJ.secret = JJ.oauthTokenSecret) : mJ("argument-error"), cJ
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
          static fromJSON(JJ) {
            const cJ = "string" === typeof JJ ? JSON.parse(JJ) : JJ,
              {
                providerId: ZJ,
                signInMethod: FJ
              } = cJ,
              UJ = eJ(cJ, ["providerId", "signInMethod"]);
            if (!ZJ || !FJ) return null;
            const XJ = new Lc(ZJ, FJ);
            return XJ.idToken = UJ.idToken || void 0, XJ.accessToken = UJ.accessToken || void 0, XJ.secret = UJ.secret, XJ.nonce = UJ.nonce, XJ.pendingToken = UJ.pendingToken || null, XJ
          }
          _getIdTokenResponse(JJ) {
            return Rc(JJ, this.buildRequest())
          }
          _linkToIdToken(JJ, cJ) {
            const ZJ = this.buildRequest();
            return ZJ.idToken = cJ, Rc(JJ, ZJ)
          }
          _getReauthenticationResolver(JJ) {
            const cJ = this.buildRequest();
            return cJ.autoCreate = !1, Rc(JJ, cJ)
          }
          buildRequest() {
            const JJ = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) JJ.pendingToken = this.pendingToken;
            else {
              const cJ = {};
              this.idToken && (cJ.id_token = this.idToken), this.accessToken && (cJ.access_token = this.accessToken), this.secret && (cJ.oauth_token_secret = this.secret), cJ.providerId = this.providerId, this.nonce && !this.pendingToken && (cJ.nonce = this.nonce), JJ.postBody = (0, FJ.W)(cJ)
            }
            return JJ
          }
        }
        const ac = {
          USER_NOT_FOUND: "user-not-found"
        };
        class Bc extends dc {
          constructor(JJ) {
            super("phone", "phone"), this.params = JJ
          }
          static _fromVerification(JJ, cJ) {
            return new Bc({
              verificationId: JJ,
              verificationCode: cJ
            })
          }
          static _fromTokenResponse(JJ, cJ) {
            return new Bc({
              phoneNumber: JJ,
              temporaryProof: cJ
            })
          }
          _getIdTokenResponse(JJ) {
            return async function(JJ, cJ) {
              return NJ(JJ, "POST", "/v1/accounts:signInWithPhoneNumber", pJ(JJ, cJ))
            }(JJ, this._makeVerificationRequest())
          }
          _linkToIdToken(JJ, cJ) {
            return async function(JJ, cJ) {
              const ZJ = await NJ(JJ, "POST", "/v1/accounts:signInWithPhoneNumber", pJ(JJ, cJ));
              if (ZJ.temporaryProof) throw CJ(JJ, "account-exists-with-different-credential", ZJ);
              return ZJ
            }(JJ, Object.assign({
              idToken: cJ
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(JJ) {
            return async function(JJ, cJ) {
              return NJ(JJ, "POST", "/v1/accounts:signInWithPhoneNumber", pJ(JJ, Object.assign(Object.assign({}, cJ), {
                operation: "REAUTH"
              })), ac)
            }(JJ, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: JJ,
              phoneNumber: cJ,
              verificationId: ZJ,
              verificationCode: FJ
            } = this.params;
            return JJ && cJ ? {
              temporaryProof: JJ,
              phoneNumber: cJ
            } : {
              sessionInfo: ZJ,
              code: FJ
            }
          }
          toJSON() {
            const JJ = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (JJ.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (JJ.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (JJ.verificationCode = this.params.verificationCode), this.params.verificationId && (JJ.verificationId = this.params.verificationId), JJ
          }
          static fromJSON(JJ) {
            "string" === typeof JJ && (JJ = JSON.parse(JJ));
            const {
              verificationId: cJ,
              verificationCode: ZJ,
              phoneNumber: FJ,
              temporaryProof: UJ
            } = JJ;
            return ZJ || cJ || FJ || UJ ? new Bc({
              verificationId: cJ,
              verificationCode: ZJ,
              phoneNumber: FJ,
              temporaryProof: UJ
            }) : null
          }
        }
        class tc {
          constructor(JJ) {
            var cJ, ZJ, UJ, eJ, XJ, AJ;
            const qJ = (0, FJ.S)((0, FJ.u)(JJ)),
              jJ = null !== (cJ = qJ.apiKey) && void 0 !== cJ ? cJ : null,
              YJ = null !== (ZJ = qJ.oobCode) && void 0 !== ZJ ? ZJ : null,
              hJ = function(JJ) {
                switch (JJ) {
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
              }(null !== (UJ = qJ.mode) && void 0 !== UJ ? UJ : null);
            yJ(jJ && YJ && hJ, "argument-error"), this.apiKey = jJ, this.operation = hJ, this.code = YJ, this.continueUrl = null !== (eJ = qJ.continueUrl) && void 0 !== eJ ? eJ : null, this.languageCode = null !== (XJ = qJ.languageCode) && void 0 !== XJ ? XJ : null, this.tenantId = null !== (AJ = qJ.tenantId) && void 0 !== AJ ? AJ : null
          }
          static parseLink(JJ) {
            const cJ = function(JJ) {
              const cJ = (0, FJ.S)((0, FJ.u)(JJ)).link,
                ZJ = cJ ? (0, FJ.S)((0, FJ.u)(cJ)).deep_link_id : null,
                UJ = (0, FJ.S)((0, FJ.u)(JJ)).deep_link_id;
              return (UJ ? (0, FJ.S)((0, FJ.u)(UJ)).link : null) || UJ || ZJ || cJ || JJ
            }(JJ);
            try {
              return new tc(cJ)
            } catch (ZJ) {
              return null
            }
          }
        }

        function oc(JJ) {
          return tc.parseLink(JJ)
        }
        class lc {
          constructor() {
            this.providerId = lc.PROVIDER_ID
          }
          static credential(JJ, cJ) {
            return ic._fromEmailAndPassword(JJ, cJ)
          }
          static credentialWithLink(JJ, cJ) {
            const ZJ = tc.parseLink(cJ);
            return yJ(ZJ, "argument-error"), ic._fromEmailAndCode(JJ, ZJ.code, ZJ.tenantId)
          }
        }
        lc.PROVIDER_ID = "password", lc.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", lc.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class JZ {
          constructor(JJ) {
            this.providerId = JJ, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(JJ) {
            this.defaultLanguageCode = JJ
          }
          setCustomParameters(JJ) {
            return this.customParameters = JJ, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class cZ extends JZ {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(JJ) {
            return this.scopes.includes(JJ) || this.scopes.push(JJ), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class ZZ extends cZ {
          static credentialFromJSON(JJ) {
            const cJ = "string" === typeof JJ ? JSON.parse(JJ) : JJ;
            return yJ("providerId" in cJ && "signInMethod" in cJ, "argument-error"), Lc._fromParams(cJ)
          }
          credential(JJ) {
            return this._credential(Object.assign(Object.assign({}, JJ), {
              nonce: JJ.rawNonce
            }))
          }
          _credential(JJ) {
            return yJ(JJ.idToken || JJ.accessToken, "argument-error"), Lc._fromParams(Object.assign(Object.assign({}, JJ), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(JJ) {
            return ZZ.oauthCredentialFromTaggedObject(JJ)
          }
          static credentialFromError(JJ) {
            return ZZ.oauthCredentialFromTaggedObject(JJ.customData || {})
          }
          static oauthCredentialFromTaggedObject(JJ) {
            let {
              _tokenResponse: cJ
            } = JJ;
            if (!cJ) return null;
            const {
              oauthIdToken: ZJ,
              oauthAccessToken: FJ,
              oauthTokenSecret: UJ,
              pendingToken: eJ,
              nonce: XJ,
              providerId: AJ
            } = cJ;
            if (!FJ && !UJ && !ZJ && !eJ) return null;
            if (!AJ) return null;
            try {
              return new ZZ(AJ)._credential({
                idToken: ZJ,
                accessToken: FJ,
                nonce: XJ,
                pendingToken: eJ
              })
            } catch (qJ) {
              return null
            }
          }
        }
        class FZ extends cZ {
          constructor() {
            super("facebook.com")
          }
          static credential(JJ) {
            return Lc._fromParams({
              providerId: FZ.PROVIDER_ID,
              signInMethod: FZ.FACEBOOK_SIGN_IN_METHOD,
              accessToken: JJ
            })
          }
          static credentialFromResult(JJ) {
            return FZ.credentialFromTaggedObject(JJ)
          }
          static credentialFromError(JJ) {
            return FZ.credentialFromTaggedObject(JJ.customData || {})
          }
          static credentialFromTaggedObject(JJ) {
            let {
              _tokenResponse: cJ
            } = JJ;
            if (!cJ || !("oauthAccessToken" in cJ)) return null;
            if (!cJ.oauthAccessToken) return null;
            try {
              return FZ.credential(cJ.oauthAccessToken)
            } catch (ZJ) {
              return null
            }
          }
        }
        FZ.FACEBOOK_SIGN_IN_METHOD = "facebook.com", FZ.PROVIDER_ID = "facebook.com";
        class UZ extends cZ {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(JJ, cJ) {
            return Lc._fromParams({
              providerId: UZ.PROVIDER_ID,
              signInMethod: UZ.GOOGLE_SIGN_IN_METHOD,
              idToken: JJ,
              accessToken: cJ
            })
          }
          static credentialFromResult(JJ) {
            return UZ.credentialFromTaggedObject(JJ)
          }
          static credentialFromError(JJ) {
            return UZ.credentialFromTaggedObject(JJ.customData || {})
          }
          static credentialFromTaggedObject(JJ) {
            let {
              _tokenResponse: cJ
            } = JJ;
            if (!cJ) return null;
            const {
              oauthIdToken: ZJ,
              oauthAccessToken: FJ
            } = cJ;
            if (!ZJ && !FJ) return null;
            try {
              return UZ.credential(ZJ, FJ)
            } catch (UJ) {
              return null
            }
          }
        }
        UZ.GOOGLE_SIGN_IN_METHOD = "google.com", UZ.PROVIDER_ID = "google.com";
        class eZ extends cZ {
          constructor() {
            super("github.com")
          }
          static credential(JJ) {
            return Lc._fromParams({
              providerId: eZ.PROVIDER_ID,
              signInMethod: eZ.GITHUB_SIGN_IN_METHOD,
              accessToken: JJ
            })
          }
          static credentialFromResult(JJ) {
            return eZ.credentialFromTaggedObject(JJ)
          }
          static credentialFromError(JJ) {
            return eZ.credentialFromTaggedObject(JJ.customData || {})
          }
          static credentialFromTaggedObject(JJ) {
            let {
              _tokenResponse: cJ
            } = JJ;
            if (!cJ || !("oauthAccessToken" in cJ)) return null;
            if (!cJ.oauthAccessToken) return null;
            try {
              return eZ.credential(cJ.oauthAccessToken)
            } catch (ZJ) {
              return null
            }
          }
        }
        eZ.GITHUB_SIGN_IN_METHOD = "github.com", eZ.PROVIDER_ID = "github.com";
        class XZ extends dc {
          constructor(JJ, cJ) {
            super(JJ, JJ), this.pendingToken = cJ
          }
          _getIdTokenResponse(JJ) {
            return Rc(JJ, this.buildRequest())
          }
          _linkToIdToken(JJ, cJ) {
            const ZJ = this.buildRequest();
            return ZJ.idToken = cJ, Rc(JJ, ZJ)
          }
          _getReauthenticationResolver(JJ) {
            const cJ = this.buildRequest();
            return cJ.autoCreate = !1, Rc(JJ, cJ)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(JJ) {
            const cJ = "string" === typeof JJ ? JSON.parse(JJ) : JJ,
              {
                providerId: ZJ,
                signInMethod: FJ,
                pendingToken: UJ
              } = cJ;
            return ZJ && FJ && UJ && ZJ === FJ ? new XZ(ZJ, UJ) : null
          }
          static _create(JJ, cJ) {
            return new XZ(JJ, cJ)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class AZ extends JZ {
          constructor(JJ) {
            yJ(JJ.startsWith("saml."), "argument-error"), super(JJ)
          }
          static credentialFromResult(JJ) {
            return AZ.samlCredentialFromTaggedObject(JJ)
          }
          static credentialFromError(JJ) {
            return AZ.samlCredentialFromTaggedObject(JJ.customData || {})
          }
          static credentialFromJSON(JJ) {
            const cJ = XZ.fromJSON(JJ);
            return yJ(cJ, "argument-error"), cJ
          }
          static samlCredentialFromTaggedObject(JJ) {
            let {
              _tokenResponse: cJ
            } = JJ;
            if (!cJ) return null;
            const {
              pendingToken: ZJ,
              providerId: FJ
            } = cJ;
            if (!ZJ || !FJ) return null;
            try {
              return XZ._create(FJ, ZJ)
            } catch (UJ) {
              return null
            }
          }
        }
        class qZ extends cZ {
          constructor() {
            super("twitter.com")
          }
          static credential(JJ, cJ) {
            return Lc._fromParams({
              providerId: qZ.PROVIDER_ID,
              signInMethod: qZ.TWITTER_SIGN_IN_METHOD,
              oauthToken: JJ,
              oauthTokenSecret: cJ
            })
          }
          static credentialFromResult(JJ) {
            return qZ.credentialFromTaggedObject(JJ)
          }
          static credentialFromError(JJ) {
            return qZ.credentialFromTaggedObject(JJ.customData || {})
          }
          static credentialFromTaggedObject(JJ) {
            let {
              _tokenResponse: cJ
            } = JJ;
            if (!cJ) return null;
            const {
              oauthAccessToken: ZJ,
              oauthTokenSecret: FJ
            } = cJ;
            if (!ZJ || !FJ) return null;
            try {
              return qZ.credential(ZJ, FJ)
            } catch (UJ) {
              return null
            }
          }
        }
        async function jZ(JJ, cJ) {
          return NJ(JJ, "POST", "/v1/accounts:signUp", pJ(JJ, cJ))
        }
        qZ.TWITTER_SIGN_IN_METHOD = "twitter.com", qZ.PROVIDER_ID = "twitter.com";
        class YZ {
          constructor(JJ) {
            this.user = JJ.user, this.providerId = JJ.providerId, this._tokenResponse = JJ._tokenResponse, this.operationType = JJ.operationType
          }
          static async _fromIdTokenResponse(JJ, cJ, ZJ) {
            let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const UJ = await Fc._fromIdTokenResponse(JJ, ZJ, FJ),
              eJ = hZ(ZJ);
            return new YZ({
              user: UJ,
              providerId: eJ,
              _tokenResponse: ZJ,
              operationType: cJ
            })
          }
          static async _forOperation(JJ, cJ, ZJ) {
            await JJ._updateTokensIfNecessary(ZJ, !0);
            const FJ = hZ(ZJ);
            return new YZ({
              user: JJ,
              providerId: FJ,
              _tokenResponse: ZJ,
              operationType: cJ
            })
          }
        }

        function hZ(JJ) {
          return JJ.providerId ? JJ.providerId : "phoneNumber" in JJ ? "phone" : null
        }
        async function DZ(JJ) {
          var cJ;
          const ZJ = Wc(JJ);
          if (await ZJ._initializationPromise, null === (cJ = ZJ.currentUser) || void 0 === cJ ? void 0 : cJ.isAnonymous) return new YZ({
            user: ZJ.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const FJ = await jZ(ZJ, {
              returnSecureToken: !0
            }),
            UJ = await YZ._fromIdTokenResponse(ZJ, "signIn", FJ, !0);
          return await ZJ._updateCurrentUser(UJ.user), UJ
        }
        class sZ extends FJ.h {
          constructor(JJ, cJ, ZJ, FJ) {
            var UJ;
            super(cJ.code, cJ.message), this.operationType = ZJ, this.user = FJ, Object.setPrototypeOf(this, sZ.prototype), this.customData = {
              appName: JJ.name,
              tenantId: null !== (UJ = JJ.tenantId) && void 0 !== UJ ? UJ : void 0,
              _serverResponse: cJ.customData._serverResponse,
              operationType: ZJ
            }
          }
          static _fromErrorAndOperation(JJ, cJ, ZJ, FJ) {
            return new sZ(JJ, cJ, ZJ, FJ)
          }
        }

        function nZ(JJ, cJ, ZJ, FJ) {
          return ("reauthenticate" === cJ ? ZJ._getReauthenticationResolver(JJ) : ZJ._getIdTokenResponse(JJ)).catch((ZJ => {
            if ("auth/multi-factor-auth-required" === ZJ.code) throw sZ._fromErrorAndOperation(JJ, ZJ, cJ, FJ);
            throw ZJ
          }))
        }

        function GZ(JJ) {
          return new Set(JJ.map((JJ => {
            let {
              providerId: cJ
            } = JJ;
            return cJ
          })).filter((JJ => !!JJ)))
        }
        async function fZ(JJ, cJ) {
          const ZJ = (0, FJ.D)(JJ);
          await rZ(!0, ZJ, cJ);
          const {
            providerUserInfo: UJ
          } = await async function(JJ, cJ) {
            return dJ(JJ, "POST", "/v1/accounts:update", cJ)
          }(ZJ.auth, {
            idToken: await ZJ.getIdToken(),
            deleteProvider: [cJ]
          }), eJ = GZ(UJ || []);
          return ZJ.providerData = ZJ.providerData.filter((JJ => eJ.has(JJ.providerId))), eJ.has("phone") || (ZJ.phoneNumber = null), await ZJ.auth._persistUserIfCurrent(ZJ), ZJ
        }
        async function xZ(JJ, cJ) {
          let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const FJ = await BJ(JJ, cJ._linkToIdToken(JJ.auth, await JJ.getIdToken()), ZJ);
          return YZ._forOperation(JJ, "link", FJ)
        }
        async function rZ(JJ, cJ, ZJ) {
          await lJ(cJ);
          const FJ = !1 === JJ ? "provider-already-linked" : "no-such-provider";
          yJ(GZ(cJ.providerData).has(ZJ) === JJ, cJ.auth, FJ)
        }
        async function vZ(JJ, cJ) {
          let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: FJ
          } = JJ, UJ = "reauthenticate";
          try {
            const eJ = await BJ(JJ, nZ(FJ, UJ, cJ, JJ), ZJ);
            yJ(eJ.idToken, FJ, "internal-error");
            const XJ = aJ(eJ.idToken);
            yJ(XJ, FJ, "internal-error");
            const {
              sub: AJ
            } = XJ;
            return yJ(JJ.uid === AJ, FJ, "user-mismatch"), YZ._forOperation(JJ, UJ, eJ)
          } catch (eJ) {
            throw "auth/user-not-found" === (null === eJ || void 0 === eJ ? void 0 : eJ.code) && mJ(FJ, "user-mismatch"), eJ
          }
        }
        async function mZ(JJ, cJ) {
          let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const FJ = "signIn",
            UJ = await nZ(JJ, FJ, cJ),
            eJ = await YZ._fromIdTokenResponse(JJ, FJ, UJ);
          return ZJ || await JJ._updateCurrentUser(eJ.user), eJ
        }
        async function QZ(JJ, cJ) {
          return mZ(Wc(JJ), cJ)
        }
        async function EZ(JJ, cJ) {
          const ZJ = (0, FJ.D)(JJ);
          return await rZ(!1, ZJ, cJ.providerId), xZ(ZJ, cJ)
        }
        async function VZ(JJ, cJ) {
          return vZ((0, FJ.D)(JJ), cJ)
        }
        async function KZ(JJ, cJ) {
          const ZJ = Wc(JJ),
            FJ = await async function(JJ, cJ) {
              return NJ(JJ, "POST", "/v1/accounts:signInWithCustomToken", pJ(JJ, cJ))
            }(ZJ, {
              token: cJ,
              returnSecureToken: !0
            }), UJ = await YZ._fromIdTokenResponse(ZJ, "signIn", FJ);
          return await ZJ._updateCurrentUser(UJ.user), UJ
        }
        class yZ {
          constructor(JJ, cJ) {
            this.factorId = JJ, this.uid = cJ.mfaEnrollmentId, this.enrollmentTime = new Date(cJ.enrolledAt).toUTCString(), this.displayName = cJ.displayName
          }
          static _fromServerResponse(JJ, cJ) {
            return "phoneInfo" in cJ ? SZ._fromServerResponse(JJ, cJ) : "totpInfo" in cJ ? IZ._fromServerResponse(JJ, cJ) : mJ(JJ, "internal-error")
          }
        }
        class SZ extends yZ {
          constructor(JJ) {
            super("phone", JJ), this.phoneNumber = JJ.phoneInfo
          }
          static _fromServerResponse(JJ, cJ) {
            return new SZ(cJ)
          }
        }
        class IZ extends yZ {
          constructor(JJ) {
            super("totp", JJ)
          }
          static _fromServerResponse(JJ, cJ) {
            return new IZ(cJ)
          }
        }

        function MZ(JJ, cJ, ZJ) {
          var FJ;
          yJ((null === (FJ = ZJ.url) || void 0 === FJ ? void 0 : FJ.length) > 0, JJ, "invalid-continue-uri"), yJ("undefined" === typeof ZJ.dynamicLinkDomain || ZJ.dynamicLinkDomain.length > 0, JJ, "invalid-dynamic-link-domain"), cJ.continueUrl = ZJ.url, cJ.dynamicLinkDomain = ZJ.dynamicLinkDomain, cJ.canHandleCodeInApp = ZJ.handleCodeInApp, ZJ.iOS && (yJ(ZJ.iOS.bundleId.length > 0, JJ, "missing-ios-bundle-id"), cJ.iOSBundleId = ZJ.iOS.bundleId), ZJ.android && (yJ(ZJ.android.packageName.length > 0, JJ, "missing-android-pkg-name"), cJ.androidInstallApp = ZJ.android.installApp, cJ.androidMinimumVersionCode = ZJ.android.minimumVersion, cJ.androidPackageName = ZJ.android.packageName)
        }
        async function bZ(JJ, cJ, ZJ) {
          var FJ;
          const UJ = Wc(JJ),
            eJ = {
              requestType: "PASSWORD_RESET",
              email: cJ,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (FJ = UJ._getRecaptchaConfig()) || void 0 === FJ ? void 0 : FJ.emailPasswordEnabled) {
            const JJ = await Mc(UJ, eJ, "getOobCode", !0);
            ZJ && MZ(UJ, JJ, ZJ), await Cc(UJ, JJ)
          } else ZJ && MZ(UJ, eJ, ZJ), await Cc(UJ, eJ).catch((async JJ => {
            if ("auth/missing-recaptcha-token" !== JJ.code) return Promise.reject(JJ);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const JJ = await Mc(UJ, eJ, "getOobCode", !0);
              ZJ && MZ(UJ, JJ, ZJ), await Cc(UJ, JJ)
            }
          }))
        }
        async function wZ(JJ, cJ, ZJ) {
          await zc((0, FJ.D)(JJ), {
            oobCode: cJ,
            newPassword: ZJ
          })
        }
        async function WZ(JJ, cJ) {
          await async function(JJ, cJ) {
            return dJ(JJ, "POST", "/v1/accounts:update", pJ(JJ, cJ))
          }((0, FJ.D)(JJ), {
            oobCode: cJ
          })
        }
        async function gZ(JJ, cJ) {
          const ZJ = (0, FJ.D)(JJ),
            UJ = await zc(ZJ, {
              oobCode: cJ
            }),
            eJ = UJ.requestType;
          switch (yJ(eJ, ZJ, "internal-error"), eJ) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              yJ(UJ.newEmail, ZJ, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              yJ(UJ.mfaInfo, ZJ, "internal-error");
            default:
              yJ(UJ.email, ZJ, "internal-error")
          }
          let XJ = null;
          return UJ.mfaInfo && (XJ = yZ._fromServerResponse(Wc(ZJ), UJ.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === UJ.requestType ? UJ.newEmail : UJ.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === UJ.requestType ? UJ.email : UJ.newEmail) || null,
              multiFactorInfo: XJ
            },
            operation: eJ
          }
        }
        async function HZ(JJ, cJ) {
          const {
            data: ZJ
          } = await gZ((0, FJ.D)(JJ), cJ);
          return ZJ.email
        }
        async function PZ(JJ, cJ, ZJ) {
          var FJ;
          const UJ = Wc(JJ),
            eJ = {
              returnSecureToken: !0,
              email: cJ,
              password: ZJ,
              clientType: "CLIENT_TYPE_WEB"
            };
          let XJ;
          if (null === (FJ = UJ._getRecaptchaConfig()) || void 0 === FJ ? void 0 : FJ.emailPasswordEnabled) {
            const JJ = await Mc(UJ, eJ, "signUpPassword");
            XJ = jZ(UJ, JJ)
          } else XJ = jZ(UJ, eJ).catch((async JJ => {
            if ("auth/missing-recaptcha-token" === JJ.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const JJ = await Mc(UJ, eJ, "signUpPassword");
              return jZ(UJ, JJ)
            }
            return Promise.reject(JJ)
          }));
          const AJ = await XJ.catch((JJ => Promise.reject(JJ))),
            qJ = await YZ._fromIdTokenResponse(UJ, "signIn", AJ);
          return await UJ._updateCurrentUser(qJ.user), qJ
        }

        function kZ(JJ, cJ, ZJ) {
          return QZ((0, FJ.D)(JJ), lc.credential(cJ, ZJ))
        }
        async function pZ(JJ, cJ, ZJ) {
          var FJ;
          const UJ = Wc(JJ),
            eJ = {
              requestType: "EMAIL_SIGNIN",
              email: cJ,
              clientType: "CLIENT_TYPE_WEB"
            };

          function XJ(JJ, cJ) {
            yJ(cJ.handleCodeInApp, UJ, "argument-error"), cJ && MZ(UJ, JJ, cJ)
          }
          if (null === (FJ = UJ._getRecaptchaConfig()) || void 0 === FJ ? void 0 : FJ.emailPasswordEnabled) {
            const JJ = await Mc(UJ, eJ, "getOobCode", !0);
            XJ(JJ, ZJ), await uc(UJ, JJ)
          } else XJ(eJ, ZJ), await uc(UJ, eJ).catch((async JJ => {
            if ("auth/missing-recaptcha-token" !== JJ.code) return Promise.reject(JJ);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const JJ = await Mc(UJ, eJ, "getOobCode", !0);
              XJ(JJ, ZJ), await uc(UJ, JJ)
            }
          }))
        }

        function dZ(JJ, cJ) {
          const ZJ = tc.parseLink(cJ);
          return "EMAIL_SIGNIN" === (null === ZJ || void 0 === ZJ ? void 0 : ZJ.operation)
        }
        async function zZ(JJ, cJ, ZJ) {
          const UJ = (0, FJ.D)(JJ),
            eJ = lc.credentialWithLink(cJ, ZJ || MJ());
          return yJ(eJ._tenantId === (UJ.tenantId || null), UJ, "tenant-id-mismatch"), QZ(UJ, eJ)
        }
        async function NZ(JJ, cJ) {
          const ZJ = {
              identifier: cJ,
              continueUri: bJ() ? MJ() : "http://localhost"
            },
            {
              signinMethods: UJ
            } = await async function(JJ, cJ) {
              return dJ(JJ, "POST", "/v1/accounts:createAuthUri", pJ(JJ, cJ))
            }((0, FJ.D)(JJ), ZJ);
          return UJ || []
        }
        async function OZ(JJ, cJ) {
          const ZJ = (0, FJ.D)(JJ),
            UJ = {
              requestType: "VERIFY_EMAIL",
              idToken: await JJ.getIdToken()
            };
          cJ && MZ(ZJ.auth, UJ, cJ);
          const {
            email: eJ
          } = await async function(JJ, cJ) {
            return Tc(JJ, cJ)
          }(ZJ.auth, UJ);
          eJ !== JJ.email && await JJ.reload()
        }
        async function TZ(JJ, cJ, ZJ) {
          const UJ = (0, FJ.D)(JJ),
            eJ = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await JJ.getIdToken(),
              newEmail: cJ
            };
          ZJ && MZ(UJ.auth, eJ, ZJ);
          const {
            email: XJ
          } = await async function(JJ, cJ) {
            return Tc(JJ, cJ)
          }(UJ.auth, eJ);
          XJ !== JJ.email && await JJ.reload()
        }
        async function CZ(JJ, cJ) {
          let {
            displayName: ZJ,
            photoURL: UJ
          } = cJ;
          if (void 0 === ZJ && void 0 === UJ) return;
          const eJ = (0, FJ.D)(JJ),
            XJ = {
              idToken: await eJ.getIdToken(),
              displayName: ZJ,
              photoUrl: UJ,
              returnSecureToken: !0
            },
            AJ = await BJ(eJ, async function(JJ, cJ) {
              return dJ(JJ, "POST", "/v1/accounts:update", cJ)
            }(eJ.auth, XJ));
          eJ.displayName = AJ.displayName || null, eJ.photoURL = AJ.photoUrl || null;
          const qJ = eJ.providerData.find((JJ => {
            let {
              providerId: cJ
            } = JJ;
            return "password" === cJ
          }));
          qJ && (qJ.displayName = eJ.displayName, qJ.photoURL = eJ.photoURL), await eJ._updateTokensIfNecessary(AJ)
        }

        function uZ(JJ, cJ) {
          return RZ((0, FJ.D)(JJ), cJ, null)
        }

        function iZ(JJ, cJ) {
          return RZ((0, FJ.D)(JJ), null, cJ)
        }
        async function RZ(JJ, cJ, ZJ) {
          const {
            auth: FJ
          } = JJ, UJ = {
            idToken: await JJ.getIdToken(),
            returnSecureToken: !0
          };
          cJ && (UJ.email = cJ), ZJ && (UJ.password = ZJ);
          const eJ = await BJ(JJ, Nc(FJ, UJ));
          await JJ._updateTokensIfNecessary(eJ, !0)
        }
        class LZ {
          constructor(JJ, cJ) {
            let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = JJ, this.providerId = cJ, this.profile = ZJ
          }
        }
        class aZ extends LZ {
          constructor(JJ, cJ, ZJ, FJ) {
            super(JJ, cJ, ZJ), this.username = FJ
          }
        }
        class BZ extends LZ {
          constructor(JJ, cJ) {
            super(JJ, "facebook.com", cJ)
          }
        }
        class tZ extends aZ {
          constructor(JJ, cJ) {
            super(JJ, "github.com", cJ, "string" === typeof(null === cJ || void 0 === cJ ? void 0 : cJ.login) ? null === cJ || void 0 === cJ ? void 0 : cJ.login : null)
          }
        }
        class oZ extends LZ {
          constructor(JJ, cJ) {
            super(JJ, "google.com", cJ)
          }
        }
        class lZ extends aZ {
          constructor(JJ, cJ, ZJ) {
            super(JJ, "twitter.com", cJ, ZJ)
          }
        }

        function JF(JJ) {
          const {
            user: cJ,
            _tokenResponse: ZJ
          } = JJ;
          return cJ.isAnonymous && !ZJ ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(JJ) {
            var cJ, ZJ;
            if (!JJ) return null;
            const {
              providerId: FJ
            } = JJ, UJ = JJ.rawUserInfo ? JSON.parse(JJ.rawUserInfo) : {}, eJ = JJ.isNewUser || "identitytoolkit#SignupNewUserResponse" === JJ.kind;
            if (!FJ && (null === JJ || void 0 === JJ ? void 0 : JJ.idToken)) {
              const FJ = null === (ZJ = null === (cJ = aJ(JJ.idToken)) || void 0 === cJ ? void 0 : cJ.firebase) || void 0 === ZJ ? void 0 : ZJ.sign_in_provider;
              if (FJ) return new LZ(eJ, "anonymous" !== FJ && "custom" !== FJ ? FJ : null)
            }
            if (!FJ) return null;
            switch (FJ) {
              case "facebook.com":
                return new BZ(eJ, UJ);
              case "github.com":
                return new tZ(eJ, UJ);
              case "google.com":
                return new oZ(eJ, UJ);
              case "twitter.com":
                return new lZ(eJ, UJ, JJ.screenName || null);
              case "custom":
              case "anonymous":
                return new LZ(eJ, null);
              default:
                return new LZ(eJ, FJ, UJ)
            }
          }(ZJ)
        }

        function cF(JJ, cJ) {
          return (0, FJ.D)(JJ).setPersistence(cJ)
        }

        function ZF(JJ) {
          return Wc(JJ).initializeRecaptchaConfig()
        }

        function FF(JJ, cJ, ZJ, UJ) {
          return (0, FJ.D)(JJ).onIdTokenChanged(cJ, ZJ, UJ)
        }

        function UF(JJ, cJ, ZJ) {
          return (0, FJ.D)(JJ).beforeAuthStateChanged(cJ, ZJ)
        }

        function eF(JJ, cJ, ZJ, UJ) {
          return (0, FJ.D)(JJ).onAuthStateChanged(cJ, ZJ, UJ)
        }

        function XF(JJ) {
          (0, FJ.D)(JJ).useDeviceLanguage()
        }

        function AF(JJ, cJ) {
          return (0, FJ.D)(JJ).updateCurrentUser(cJ)
        }

        function qF(JJ) {
          return (0, FJ.D)(JJ).signOut()
        }
        async function jF(JJ) {
          return (0, FJ.D)(JJ).delete()
        }
        class YF {
          constructor(JJ, cJ, ZJ) {
            this.type = JJ, this.credential = cJ, this.auth = ZJ
          }
          static _fromIdtoken(JJ, cJ) {
            return new YF("enroll", JJ, cJ)
          }
          static _fromMfaPendingCredential(JJ) {
            return new YF("signin", JJ)
          }
          toJSON() {
            const JJ = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [JJ]: this.credential
              }
            }
          }
          static fromJSON(JJ) {
            var cJ, ZJ;
            if (null === JJ || void 0 === JJ ? void 0 : JJ.multiFactorSession) {
              if (null === (cJ = JJ.multiFactorSession) || void 0 === cJ ? void 0 : cJ.pendingCredential) return YF._fromMfaPendingCredential(JJ.multiFactorSession.pendingCredential);
              if (null === (ZJ = JJ.multiFactorSession) || void 0 === ZJ ? void 0 : ZJ.idToken) return YF._fromIdtoken(JJ.multiFactorSession.idToken)
            }
            return null
          }
        }
        class hF {
          constructor(JJ, cJ, ZJ) {
            this.session = JJ, this.hints = cJ, this.signInResolver = ZJ
          }
          static _fromError(JJ, cJ) {
            const ZJ = Wc(JJ),
              FJ = cJ.customData._serverResponse,
              UJ = (FJ.mfaInfo || []).map((JJ => yZ._fromServerResponse(ZJ, JJ)));
            yJ(FJ.mfaPendingCredential, ZJ, "internal-error");
            const eJ = YF._fromMfaPendingCredential(FJ.mfaPendingCredential);
            return new hF(eJ, UJ, (async JJ => {
              const UJ = await JJ._process(ZJ, eJ);
              delete FJ.mfaInfo, delete FJ.mfaPendingCredential;
              const XJ = Object.assign(Object.assign({}, FJ), {
                idToken: UJ.idToken,
                refreshToken: UJ.refreshToken
              });
              switch (cJ.operationType) {
                case "signIn":
                  const JJ = await YZ._fromIdTokenResponse(ZJ, cJ.operationType, XJ);
                  return await ZJ._updateCurrentUser(JJ.user), JJ;
                case "reauthenticate":
                  return yJ(cJ.user, ZJ, "internal-error"), YZ._forOperation(cJ.user, cJ.operationType, XJ);
                default:
                  mJ(ZJ, "internal-error")
              }
            }))
          }
          async resolveSignIn(JJ) {
            const cJ = JJ;
            return this.signInResolver(cJ)
          }
        }

        function DF(JJ, cJ) {
          var ZJ;
          const UJ = (0, FJ.D)(JJ),
            eJ = cJ;
          return yJ(cJ.customData.operationType, UJ, "argument-error"), yJ(null === (ZJ = eJ.customData._serverResponse) || void 0 === ZJ ? void 0 : ZJ.mfaPendingCredential, UJ, "argument-error"), hF._fromError(UJ, eJ)
        }
        class sF {
          constructor(JJ) {
            this.user = JJ, this.enrolledFactors = [], JJ._onReload((cJ => {
              cJ.mfaInfo && (this.enrolledFactors = cJ.mfaInfo.map((cJ => yZ._fromServerResponse(JJ.auth, cJ))))
            }))
          }
          static _fromUser(JJ) {
            return new sF(JJ)
          }
          async getSession() {
            return YF._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(JJ, cJ) {
            const ZJ = JJ,
              FJ = await this.getSession(),
              UJ = await BJ(this.user, ZJ._process(this.user.auth, FJ, cJ));
            return await this.user._updateTokensIfNecessary(UJ), this.user.reload()
          }
          async unenroll(JJ) {
            const cJ = "string" === typeof JJ ? JJ : JJ.uid,
              ZJ = await this.user.getIdToken();
            try {
              const JJ = await BJ(this.user, (FJ = this.user.auth, UJ = {
                idToken: ZJ,
                mfaEnrollmentId: cJ
              }, dJ(FJ, "POST", "/v2/accounts/mfaEnrollment:withdraw", pJ(FJ, UJ))));
              this.enrolledFactors = this.enrolledFactors.filter((JJ => {
                let {
                  uid: ZJ
                } = JJ;
                return ZJ !== cJ
              })), await this.user._updateTokensIfNecessary(JJ), await this.user.reload()
            } catch (eJ) {
              throw eJ
            }
            var FJ, UJ
          }
        }
        const nF = new WeakMap;

        function GF(JJ) {
          const cJ = (0, FJ.D)(JJ);
          return nF.has(cJ) || nF.set(cJ, sF._fromUser(cJ)), nF.get(cJ)
        }
        const fF = "__sak";
        class xF {
          constructor(JJ, cJ) {
            this.storageRetriever = JJ, this.type = cJ
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(fF, "1"), this.storage.removeItem(fF), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (JJ) {
              return Promise.resolve(!1)
            }
          }
          _set(JJ, cJ) {
            return this.storage.setItem(JJ, JSON.stringify(cJ)), Promise.resolve()
          }
          _get(JJ) {
            const cJ = this.storage.getItem(JJ);
            return Promise.resolve(cJ ? JSON.parse(cJ) : null)
          }
          _remove(JJ) {
            return this.storage.removeItem(JJ), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class rF extends xF {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (JJ, cJ) => this.onStorageEvent(JJ, cJ), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const JJ = (0, FJ.G)();
              return Dc(JJ) || rc(JJ)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (JJ) {
                return !1
              }
            }(), this.fallbackToPolling = vc(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(JJ) {
            for (const cJ of Object.keys(this.listeners)) {
              const ZJ = this.storage.getItem(cJ),
                FJ = this.localCache[cJ];
              ZJ !== FJ && JJ(cJ, FJ, ZJ)
            }
          }
          onStorageEvent(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!JJ.key) return void this.forAllChangedKeys(((JJ, cJ, ZJ) => {
              this.notifyListeners(JJ, ZJ)
            }));
            const ZJ = JJ.key;
            if (cJ ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const FJ = this.storage.getItem(ZJ);
              if (JJ.newValue !== FJ) null !== JJ.newValue ? this.storage.setItem(ZJ, JJ.newValue) : this.storage.removeItem(ZJ);
              else if (this.localCache[ZJ] === JJ.newValue && !cJ) return
            }
            const UJ = () => {
                const JJ = this.storage.getItem(ZJ);
                (cJ || this.localCache[ZJ] !== JJ) && this.notifyListeners(ZJ, JJ)
              },
              eJ = this.storage.getItem(ZJ);
            (0, FJ.L)() && 10 === document.documentMode && eJ !== JJ.newValue && JJ.newValue !== JJ.oldValue ? setTimeout(UJ, 10) : UJ()
          }
          notifyListeners(JJ, cJ) {
            this.localCache[JJ] = cJ;
            const ZJ = this.listeners[JJ];
            if (ZJ)
              for (const FJ of Array.from(ZJ)) FJ(cJ ? JSON.parse(cJ) : cJ)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((JJ, cJ, ZJ) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: JJ,
                  oldValue: cJ,
                  newValue: ZJ
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
          _addListener(JJ, cJ) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[JJ] || (this.listeners[JJ] = new Set, this.localCache[JJ] = this.storage.getItem(JJ)), this.listeners[JJ].add(cJ)
          }
          _removeListener(JJ, cJ) {
            this.listeners[JJ] && (this.listeners[JJ].delete(cJ), 0 === this.listeners[JJ].size && delete this.listeners[JJ]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(JJ, cJ) {
            await super._set(JJ, cJ), this.localCache[JJ] = JSON.stringify(cJ)
          }
          async _get(JJ) {
            const cJ = await super._get(JJ);
            return this.localCache[JJ] = JSON.stringify(cJ), cJ
          }
          async _remove(JJ) {
            await super._remove(JJ), delete this.localCache[JJ]
          }
        }
        rF.type = "LOCAL";
        const vF = rF;
        class mF extends xF {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(JJ, cJ) {}
          _removeListener(JJ, cJ) {}
        }
        mF.type = "SESSION";
        const QF = mF;
        class EF {
          constructor(JJ) {
            this.eventTarget = JJ, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(JJ) {
            const cJ = this.receivers.find((cJ => cJ.isListeningto(JJ)));
            if (cJ) return cJ;
            const ZJ = new EF(JJ);
            return this.receivers.push(ZJ), ZJ
          }
          isListeningto(JJ) {
            return this.eventTarget === JJ
          }
          async handleEvent(JJ) {
            const cJ = JJ,
              {
                eventId: ZJ,
                eventType: FJ,
                data: UJ
              } = cJ.data,
              eJ = this.handlersMap[FJ];
            if (!(null === eJ || void 0 === eJ ? void 0 : eJ.size)) return;
            cJ.ports[0].postMessage({
              status: "ack",
              eventId: ZJ,
              eventType: FJ
            });
            const XJ = Array.from(eJ).map((async JJ => JJ(cJ.origin, UJ))),
              AJ = await
            function(JJ) {
              return Promise.all(JJ.map((async JJ => {
                try {
                  return {
                    fulfilled: !0,
                    value: await JJ
                  }
                } catch (cJ) {
                  return {
                    fulfilled: !1,
                    reason: cJ
                  }
                }
              })))
            }(XJ);
            cJ.ports[0].postMessage({
              status: "done",
              eventId: ZJ,
              eventType: FJ,
              response: AJ
            })
          }
          _subscribe(JJ, cJ) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[JJ] || (this.handlersMap[JJ] = new Set), this.handlersMap[JJ].add(cJ)
          }
          _unsubscribe(JJ, cJ) {
            this.handlersMap[JJ] && cJ && this.handlersMap[JJ].delete(cJ), cJ && 0 !== this.handlersMap[JJ].size || delete this.handlersMap[JJ], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function VF() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            ZJ = "";
          for (let FJ = 0; FJ < cJ; FJ++) ZJ += Math.floor(10 * Math.random());
          return JJ + ZJ
        }
        EF.receivers = [];
        class KF {
          constructor(JJ) {
            this.target = JJ, this.handlers = new Set
          }
          removeMessageHandler(JJ) {
            JJ.messageChannel && (JJ.messageChannel.port1.removeEventListener("message", JJ.Rm), JJ.messageChannel.port1.close()), this.handlers.delete(JJ)
          }
          async _send(JJ, cJ) {
            let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const FJ = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!FJ) throw new Error("connection_unavailable");
            let UJ, eJ;
            return new Promise(((XJ, AJ) => {
              const qJ = VF("", 20);
              FJ.port1.start();
              const jJ = setTimeout((() => {
                AJ(new Error("unsupported_event"))
              }), ZJ);
              eJ = {
                messageChannel: FJ,
                Rm(JJ) {
                  const cJ = JJ;
                  if (cJ.data.eventId === qJ) switch (cJ.data.status) {
                    case "ack":
                      clearTimeout(jJ), UJ = setTimeout((() => {
                        AJ(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(UJ), XJ(cJ.data.response);
                      break;
                    default:
                      clearTimeout(jJ), clearTimeout(UJ), AJ(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(eJ), FJ.port1.addEventListener("message", eJ.Rm), this.target.postMessage({
                eventType: JJ,
                eventId: qJ,
                data: cJ
              }, [FJ.port2])
            })).finally((() => {
              eJ && this.removeMessageHandler(eJ)
            }))
          }
        }

        function yF() {
          return window
        }

        function SF() {
          return "undefined" !== typeof yF().WorkerGlobalScope && "function" === typeof yF().importScripts
        }
        const IF = "firebaseLocalStorageDb",
          MF = "firebaseLocalStorage",
          bF = "fbase_key";
        class wF {
          constructor(JJ) {
            this.request = JJ
          }
          toPromise() {
            return new Promise(((JJ, cJ) => {
              this.request.addEventListener("success", (() => {
                JJ(this.request.result)
              })), this.request.addEventListener("error", (() => {
                cJ(this.request.error)
              }))
            }))
          }
        }

        function WF(JJ, cJ) {
          return JJ.transaction([MF], cJ ? "readwrite" : "readonly").objectStore(MF)
        }

        function gF() {
          const JJ = indexedDB.open(IF, 1);
          return new Promise(((cJ, ZJ) => {
            JJ.addEventListener("error", (() => {
              ZJ(JJ.error)
            })), JJ.addEventListener("upgradeneeded", (() => {
              const cJ = JJ.result;
              try {
                cJ.createObjectStore(MF, {
                  keyPath: bF
                })
              } catch (FJ) {
                ZJ(FJ)
              }
            })), JJ.addEventListener("success", (async () => {
              const ZJ = JJ.result;
              ZJ.objectStoreNames.contains(MF) ? cJ(ZJ) : (ZJ.close(), await
                function() {
                  const JJ = indexedDB.deleteDatabase(IF);
                  return new wF(JJ).toPromise()
                }(), cJ(await gF()))
            }))
          }))
        }
        async function HF(JJ, cJ, ZJ) {
          const FJ = WF(JJ, !0).put({
            [bF]: cJ,
            value: ZJ
          });
          return new wF(FJ).toPromise()
        }

        function PF(JJ, cJ) {
          const ZJ = WF(JJ, !0).delete(cJ);
          return new wF(ZJ).toPromise()
        }
        class kF {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await gF()), this.db
          }
          async _withRetries(JJ) {
            let cJ = 0;
            for (;;) try {
              const cJ = await this._openDb();
              return await JJ(cJ)
            } catch (ZJ) {
              if (cJ++ > 3) throw ZJ;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return SF() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = EF._getInstance(SF() ? self : null), this.receiver._subscribe("keyChanged", (async (JJ, cJ) => ({
              keyProcessed: (await this._poll()).includes(cJ.key)
            }))), this.receiver._subscribe("ping", (async (JJ, cJ) => ["keyChanged"]))
          }
          async initializeSender() {
            var JJ, cJ;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (JJ) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new KF(this.activeServiceWorker);
            const ZJ = await this.sender._send("ping", {}, 800);
            ZJ && (null === (JJ = ZJ[0]) || void 0 === JJ ? void 0 : JJ.fulfilled) && (null === (cJ = ZJ[0]) || void 0 === cJ ? void 0 : cJ.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(JJ) {
            if (this.sender && this.activeServiceWorker && function() {
                var JJ;
                return (null === (JJ = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === JJ ? void 0 : JJ.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: JJ
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (cJ) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const JJ = await gF();
              return await HF(JJ, fF, "1"), await PF(JJ, fF), !0
            } catch (JJ) {}
            return !1
          }
          async _withPendingWrite(JJ) {
            this.pendingWrites++;
            try {
              await JJ()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(JJ, cJ) {
            return this._withPendingWrite((async () => (await this._withRetries((ZJ => HF(ZJ, JJ, cJ))), this.localCache[JJ] = cJ, this.notifyServiceWorker(JJ))))
          }
          async _get(JJ) {
            const cJ = await this._withRetries((cJ => async function(JJ, cJ) {
              const ZJ = WF(JJ, !1).get(cJ),
                FJ = await new wF(ZJ).toPromise();
              return void 0 === FJ ? null : FJ.value
            }(cJ, JJ)));
            return this.localCache[JJ] = cJ, cJ
          }
          async _remove(JJ) {
            return this._withPendingWrite((async () => (await this._withRetries((cJ => PF(cJ, JJ))), delete this.localCache[JJ], this.notifyServiceWorker(JJ))))
          }
          async _poll() {
            const JJ = await this._withRetries((JJ => {
              const cJ = WF(JJ, !1).getAll();
              return new wF(cJ).toPromise()
            }));
            if (!JJ) return [];
            if (0 !== this.pendingWrites) return [];
            const cJ = [],
              ZJ = new Set;
            for (const {
                fbase_key: FJ,
                value: UJ
              }
              of JJ) ZJ.add(FJ), JSON.stringify(this.localCache[FJ]) !== JSON.stringify(UJ) && (this.notifyListeners(FJ, UJ), cJ.push(FJ));
            for (const FJ of Object.keys(this.localCache)) this.localCache[FJ] && !ZJ.has(FJ) && (this.notifyListeners(FJ, null), cJ.push(FJ));
            return cJ
          }
          notifyListeners(JJ, cJ) {
            this.localCache[JJ] = cJ;
            const ZJ = this.listeners[JJ];
            if (ZJ)
              for (const FJ of Array.from(ZJ)) FJ(cJ)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(JJ, cJ) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[JJ] || (this.listeners[JJ] = new Set, this._get(JJ)), this.listeners[JJ].add(cJ)
          }
          _removeListener(JJ, cJ) {
            this.listeners[JJ] && (this.listeners[JJ].delete(cJ), 0 === this.listeners[JJ].size && delete this.listeners[JJ]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        kF.type = "LOCAL";
        const pF = kF;
        const dF = 1e12;
        class zF {
          constructor(JJ) {
            this.auth = JJ, this.counter = dF, this._widgets = new Map
          }
          render(JJ, cJ) {
            const ZJ = this.counter;
            return this._widgets.set(ZJ, new NF(JJ, this.auth.name, cJ || {})), this.counter++, ZJ
          }
          reset(JJ) {
            var cJ;
            const ZJ = JJ || dF;
            null === (cJ = this._widgets.get(ZJ)) || void 0 === cJ || cJ.delete(), this._widgets.delete(ZJ)
          }
          getResponse(JJ) {
            var cJ;
            const ZJ = JJ || dF;
            return (null === (cJ = this._widgets.get(ZJ)) || void 0 === cJ ? void 0 : cJ.getResponse()) || ""
          }
          async execute(JJ) {
            var cJ;
            const ZJ = JJ || dF;
            return null === (cJ = this._widgets.get(ZJ)) || void 0 === cJ || cJ.execute(), ""
          }
        }
        class NF {
          constructor(JJ, cJ, ZJ) {
            this.params = ZJ, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const FJ = "string" === typeof JJ ? document.getElementById(JJ) : JJ;
            yJ(FJ, "argument-error", {
              appName: cJ
            }), this.container = FJ, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(JJ) {
                const cJ = [],
                  ZJ = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let FJ = 0; FJ < JJ; FJ++) cJ.push(ZJ.charAt(Math.floor(Math.random() * ZJ.length)));
                return cJ.join("")
              }(50);
              const {
                callback: JJ,
                "expired-callback": cJ
              } = this.params;
              if (JJ) try {
                JJ(this.responseToken)
              } catch (ZJ) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, cJ) try {
                  cJ()
                } catch (ZJ) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const OF = Sc("rcb"),
          TF = new WJ(3e4, 6e4);
        class CF {
          constructor() {
            var JJ;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (JJ = yF().grecaptcha) || void 0 === JJ ? void 0 : JJ.render)
          }
          load(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return yJ(function(JJ) {
              return JJ.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(JJ)
            }(cJ), JJ, "argument-error"), this.shouldResolveImmediately(cJ) && Ec(yF().grecaptcha) ? Promise.resolve(yF().grecaptcha) : new Promise(((ZJ, UJ) => {
              const eJ = yF().setTimeout((() => {
                UJ(QJ(JJ, "network-request-failed"))
              }), TF.get());
              yF()[OF] = () => {
                yF().clearTimeout(eJ), delete yF()[OF];
                const FJ = yF().grecaptcha;
                if (!FJ || !Ec(FJ)) return void UJ(QJ(JJ, "internal-error"));
                const XJ = FJ.render;
                FJ.render = (JJ, cJ) => {
                  const ZJ = XJ(JJ, cJ);
                  return this.counter++, ZJ
                }, this.hostLanguage = cJ, ZJ(FJ)
              };
              yc(`https://www.google.com/recaptcha/api.js??${(0,FJ.W)({onload:OF,render:"explicit",hl:cJ})}`).catch((() => {
                clearTimeout(eJ), UJ(QJ(JJ, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(JJ) {
            var cJ;
            return !!(null === (cJ = yF().grecaptcha) || void 0 === cJ ? void 0 : cJ.render) && (JJ === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class uF {
          async load(JJ) {
            return new zF(JJ)
          }
          clearedOneInstance() {}
        }
        const iF = "recaptcha",
          RF = {
            theme: "light",
            type: "image"
          };
        class LF {
          constructor(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, RF),
              ZJ = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = cJ, this.type = iF, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = Wc(ZJ), this.isInvisible = "invisible" === this.parameters.size, yJ("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const FJ = "string" === typeof JJ ? document.getElementById(JJ) : JJ;
            yJ(FJ, this.auth, "argument-error"), this.container = FJ, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new uF : new CF, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const JJ = await this.render(),
              cJ = this.getAssertedRecaptcha(),
              ZJ = cJ.getResponse(JJ);
            return ZJ || new Promise((ZJ => {
              const FJ = JJ => {
                JJ && (this.tokenChangeListeners.delete(FJ), ZJ(JJ))
              };
              this.tokenChangeListeners.add(FJ), this.isInvisible && cJ.execute(JJ)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (JJ) {
              return Promise.reject(JJ)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((JJ => {
              throw this.renderPromise = null, JJ
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((JJ => {
              this.container.removeChild(JJ)
            }))
          }
          validateStartingState() {
            yJ(!this.parameters.sitekey, this.auth, "argument-error"), yJ(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), yJ("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(JJ) {
            return cJ => {
              if (this.tokenChangeListeners.forEach((JJ => JJ(cJ))), "function" === typeof JJ) JJ(cJ);
              else if ("string" === typeof JJ) {
                const ZJ = yF()[JJ];
                "function" === typeof ZJ && ZJ(cJ)
              }
            }
          }
          assertNotDestroyed() {
            yJ(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let JJ = this.container;
              if (!this.isInvisible) {
                const cJ = document.createElement("div");
                JJ.appendChild(cJ), JJ = cJ
              }
              this.widgetId = this.getAssertedRecaptcha().render(JJ, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            yJ(bJ() && !SF(), this.auth, "internal-error"), await
            function() {
              let JJ = null;
              return new Promise((cJ => {
                "complete" !== document.readyState ? (JJ = () => cJ(), window.addEventListener("load", JJ)) : cJ()
              })).catch((cJ => {
                throw JJ && window.removeEventListener("load", JJ), cJ
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const JJ = await async function(JJ) {
              return (await dJ(JJ, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            yJ(JJ, this.auth, "internal-error"), this.parameters.sitekey = JJ
          }
          getAssertedRecaptcha() {
            return yJ(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class aF {
          constructor(JJ, cJ) {
            this.verificationId = JJ, this.onConfirmation = cJ
          }
          confirm(JJ) {
            const cJ = Bc._fromVerification(this.verificationId, JJ);
            return this.onConfirmation(cJ)
          }
        }
        async function BF(JJ, cJ, ZJ) {
          const UJ = Wc(JJ),
            eJ = await lF(UJ, cJ, (0, FJ.D)(ZJ));
          return new aF(eJ, (JJ => QZ(UJ, JJ)))
        }
        async function tF(JJ, cJ, ZJ) {
          const UJ = (0, FJ.D)(JJ);
          await rZ(!1, UJ, "phone");
          const eJ = await lF(UJ.auth, cJ, (0, FJ.D)(ZJ));
          return new aF(eJ, (JJ => EZ(UJ, JJ)))
        }
        async function oF(JJ, cJ, ZJ) {
          const UJ = (0, FJ.D)(JJ),
            eJ = await lF(UJ.auth, cJ, (0, FJ.D)(ZJ));
          return new aF(eJ, (JJ => VZ(UJ, JJ)))
        }
        async function lF(JJ, cJ, ZJ) {
          var FJ;
          const UJ = await ZJ.verify();
          try {
            let eJ;
            if (yJ("string" === typeof UJ, JJ, "argument-error"), yJ(ZJ.type === iF, JJ, "argument-error"), eJ = "string" === typeof cJ ? {
                phoneNumber: cJ
              } : cJ, "session" in eJ) {
              const cJ = eJ.session;
              if ("phoneNumber" in eJ) {
                yJ("enroll" === cJ.type, JJ, "internal-error");
                const ZJ = await
                function(JJ, cJ) {
                  return dJ(JJ, "POST", "/v2/accounts/mfaEnrollment:start", pJ(JJ, cJ))
                }(JJ, {
                  idToken: cJ.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: eJ.phoneNumber,
                    recaptchaToken: UJ
                  }
                });
                return ZJ.phoneSessionInfo.sessionInfo
              } {
                yJ("signin" === cJ.type, JJ, "internal-error");
                const ZJ = (null === (FJ = eJ.multiFactorHint) || void 0 === FJ ? void 0 : FJ.uid) || eJ.multiFactorUid;
                yJ(ZJ, JJ, "missing-multi-factor-info");
                const XJ = await
                function(JJ, cJ) {
                  return dJ(JJ, "POST", "/v2/accounts/mfaSignIn:start", pJ(JJ, cJ))
                }(JJ, {
                  mfaPendingCredential: cJ.credential,
                  mfaEnrollmentId: ZJ,
                  phoneSignInInfo: {
                    recaptchaToken: UJ
                  }
                });
                return XJ.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: cJ
              } = await async function(JJ, cJ) {
                return dJ(JJ, "POST", "/v1/accounts:sendVerificationCode", pJ(JJ, cJ))
              }(JJ, {
                phoneNumber: eJ.phoneNumber,
                recaptchaToken: UJ
              });
              return cJ
            }
          } finally {
            ZJ._reset()
          }
        }
        async function JU(JJ, cJ) {
          await xZ((0, FJ.D)(JJ), cJ)
        }
        class cU {
          constructor(JJ) {
            this.providerId = cU.PROVIDER_ID, this.auth = Wc(JJ)
          }
          verifyPhoneNumber(JJ, cJ) {
            return lF(this.auth, JJ, (0, FJ.D)(cJ))
          }
          static credential(JJ, cJ) {
            return Bc._fromVerification(JJ, cJ)
          }
          static credentialFromResult(JJ) {
            const cJ = JJ;
            return cU.credentialFromTaggedObject(cJ)
          }
          static credentialFromError(JJ) {
            return cU.credentialFromTaggedObject(JJ.customData || {})
          }
          static credentialFromTaggedObject(JJ) {
            let {
              _tokenResponse: cJ
            } = JJ;
            if (!cJ) return null;
            const {
              phoneNumber: ZJ,
              temporaryProof: FJ
            } = cJ;
            return ZJ && FJ ? Bc._fromTokenResponse(ZJ, FJ) : null
          }
        }

        function ZU(JJ, cJ) {
          return cJ ? ec(cJ) : (yJ(JJ._popupRedirectResolver, JJ, "argument-error"), JJ._popupRedirectResolver)
        }
        cU.PROVIDER_ID = "phone", cU.PHONE_SIGN_IN_METHOD = "phone";
        class FU extends dc {
          constructor(JJ) {
            super("custom", "custom"), this.params = JJ
          }
          _getIdTokenResponse(JJ) {
            return Rc(JJ, this._buildIdpRequest())
          }
          _linkToIdToken(JJ, cJ) {
            return Rc(JJ, this._buildIdpRequest(cJ))
          }
          _getReauthenticationResolver(JJ) {
            return Rc(JJ, this._buildIdpRequest())
          }
          _buildIdpRequest(JJ) {
            const cJ = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return JJ && (cJ.idToken = JJ), cJ
          }
        }

        function UU(JJ) {
          return mZ(JJ.auth, new FU(JJ), JJ.bypassAuthState)
        }

        function eU(JJ) {
          const {
            auth: cJ,
            user: ZJ
          } = JJ;
          return yJ(ZJ, cJ, "internal-error"), vZ(ZJ, new FU(JJ), JJ.bypassAuthState)
        }
        async function XU(JJ) {
          const {
            auth: cJ,
            user: ZJ
          } = JJ;
          return yJ(ZJ, cJ, "internal-error"), xZ(ZJ, new FU(JJ), JJ.bypassAuthState)
        }
        class AU {
          constructor(JJ, cJ, ZJ, FJ) {
            let UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = JJ, this.resolver = ZJ, this.user = FJ, this.bypassAuthState = UJ, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(cJ) ? cJ : [cJ]
          }
          execute() {
            return new Promise((async (JJ, cJ) => {
              this.pendingPromise = {
                resolve: JJ,
                reject: cJ
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (ZJ) {
                this.reject(ZJ)
              }
            }))
          }
          async onAuthEvent(JJ) {
            const {
              urlResponse: cJ,
              sessionId: ZJ,
              postBody: FJ,
              tenantId: UJ,
              error: eJ,
              type: XJ
            } = JJ;
            if (eJ) return void this.reject(eJ);
            const AJ = {
              auth: this.auth,
              requestUri: cJ,
              sessionId: ZJ,
              tenantId: UJ || void 0,
              postBody: FJ || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(XJ)(AJ))
            } catch (qJ) {
              this.reject(qJ)
            }
          }
          onError(JJ) {
            this.reject(JJ)
          }
          getIdpTask(JJ) {
            switch (JJ) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return UU;
              case "linkViaPopup":
              case "linkViaRedirect":
                return XU;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return eU;
              default:
                mJ(this.auth, "internal-error")
            }
          }
          resolve(JJ) {
            IJ(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(JJ), this.unregisterAndCleanUp()
          }
          reject(JJ) {
            IJ(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(JJ), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const qU = new WJ(2e3, 1e4);
        async function jU(JJ, cJ, ZJ) {
          const FJ = Wc(JJ);
          VJ(JJ, cJ, JZ);
          const UJ = ZU(FJ, ZJ);
          return new DU(FJ, "signInViaPopup", cJ, UJ).executeNotNull()
        }
        async function YU(JJ, cJ, ZJ) {
          const UJ = (0, FJ.D)(JJ);
          VJ(UJ.auth, cJ, JZ);
          const eJ = ZU(UJ.auth, ZJ);
          return new DU(UJ.auth, "reauthViaPopup", cJ, eJ, UJ).executeNotNull()
        }
        async function hU(JJ, cJ, ZJ) {
          const UJ = (0, FJ.D)(JJ);
          VJ(UJ.auth, cJ, JZ);
          const eJ = ZU(UJ.auth, ZJ);
          return new DU(UJ.auth, "linkViaPopup", cJ, eJ, UJ).executeNotNull()
        }
        class DU extends AU {
          constructor(JJ, cJ, ZJ, FJ, UJ) {
            super(JJ, cJ, FJ, UJ), this.provider = ZJ, this.authWindow = null, this.pollId = null, DU.currentPopupAction && DU.currentPopupAction.cancel(), DU.currentPopupAction = this
          }
          async executeNotNull() {
            const JJ = await this.execute();
            return yJ(JJ, this.auth, "internal-error"), JJ
          }
          async onExecution() {
            IJ(1 === this.filter.length, "Popup operations only handle one event");
            const JJ = VF();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], JJ), this.authWindow.associatedEvent = JJ, this.resolver._originValidation(this.auth).catch((JJ => {
              this.reject(JJ)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (JJ => {
              JJ || this.reject(QJ(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var JJ;
            return (null === (JJ = this.authWindow) || void 0 === JJ ? void 0 : JJ.associatedEvent) || null
          }
          cancel() {
            this.reject(QJ(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, DU.currentPopupAction = null
          }
          pollUserCancellation() {
            const JJ = () => {
              var cJ, ZJ;
              (null === (ZJ = null === (cJ = this.authWindow) || void 0 === cJ ? void 0 : cJ.window) || void 0 === ZJ ? void 0 : ZJ.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(QJ(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(JJ, qU.get())
            };
            JJ()
          }
        }
        DU.currentPopupAction = null;
        const sU = "pendingRedirect",
          nU = new Map;
        class GU extends AU {
          constructor(JJ, cJ) {
            super(JJ, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], cJ, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let JJ = nU.get(this.auth._key());
            if (!JJ) {
              try {
                const cJ = await async function(JJ, cJ) {
                  const ZJ = vU(cJ),
                    FJ = rU(JJ);
                  if (!await FJ._isAvailable()) return !1;
                  const UJ = "true" === await FJ._get(ZJ);
                  return await FJ._remove(ZJ), UJ
                }(this.resolver, this.auth) ? await super.execute() : null;
                JJ = () => Promise.resolve(cJ)
              } catch (cJ) {
                JJ = () => Promise.reject(cJ)
              }
              nU.set(this.auth._key(), JJ)
            }
            return this.bypassAuthState || nU.set(this.auth._key(), (() => Promise.resolve(null))), JJ()
          }
          async onAuthEvent(JJ) {
            if ("signInViaRedirect" === JJ.type) return super.onAuthEvent(JJ);
            if ("unknown" !== JJ.type) {
              if (JJ.eventId) {
                const cJ = await this.auth._redirectUserForId(JJ.eventId);
                if (cJ) return this.user = cJ, super.onAuthEvent(JJ);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function fU(JJ, cJ) {
          return rU(JJ)._set(vU(cJ), "true")
        }

        function xU(JJ, cJ) {
          nU.set(JJ._key(), cJ)
        }

        function rU(JJ) {
          return ec(JJ._redirectPersistence)
        }

        function vU(JJ) {
          return qc(sU, JJ.config.apiKey, JJ.name)
        }

        function mU(JJ, cJ, ZJ) {
          return async function(JJ, cJ, ZJ) {
            const FJ = Wc(JJ);
            VJ(JJ, cJ, JZ), await FJ._initializationPromise;
            const UJ = ZU(FJ, ZJ);
            return await fU(UJ, FJ), UJ._openRedirect(FJ, cJ, "signInViaRedirect")
          }(JJ, cJ, ZJ)
        }

        function QU(JJ, cJ, ZJ) {
          return async function(JJ, cJ, ZJ) {
            const UJ = (0, FJ.D)(JJ);
            VJ(UJ.auth, cJ, JZ), await UJ.auth._initializationPromise;
            const eJ = ZU(UJ.auth, ZJ);
            await fU(eJ, UJ.auth);
            const XJ = await yU(UJ);
            return eJ._openRedirect(UJ.auth, cJ, "reauthViaRedirect", XJ)
          }(JJ, cJ, ZJ)
        }

        function EU(JJ, cJ, ZJ) {
          return async function(JJ, cJ, ZJ) {
            const UJ = (0, FJ.D)(JJ);
            VJ(UJ.auth, cJ, JZ), await UJ.auth._initializationPromise;
            const eJ = ZU(UJ.auth, ZJ);
            await rZ(!1, UJ, cJ.providerId), await fU(eJ, UJ.auth);
            const XJ = await yU(UJ);
            return eJ._openRedirect(UJ.auth, cJ, "linkViaRedirect", XJ)
          }(JJ, cJ, ZJ)
        }
        async function VU(JJ, cJ) {
          return await Wc(JJ)._initializationPromise, KU(JJ, cJ, !1)
        }
        async function KU(JJ, cJ) {
          let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const FJ = Wc(JJ),
            UJ = ZU(FJ, cJ),
            eJ = new GU(FJ, UJ, ZJ),
            XJ = await eJ.execute();
          return XJ && !ZJ && (delete XJ.user._redirectEventId, await FJ._persistUserIfCurrent(XJ.user), await FJ._setRedirectUser(null, cJ)), XJ
        }
        async function yU(JJ) {
          const cJ = VF(`${JJ.uid}:::`);
          return JJ._redirectEventId = cJ, await JJ.auth._setRedirectUser(JJ), await JJ.auth._persistUserIfCurrent(JJ), cJ
        }
        class SU {
          constructor(JJ) {
            this.auth = JJ, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(JJ) {
            this.consumers.add(JJ), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, JJ) && (this.sendToConsumer(this.queuedRedirectEvent, JJ), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(JJ) {
            this.consumers.delete(JJ)
          }
          onEvent(JJ) {
            if (this.hasEventBeenHandled(JJ)) return !1;
            let cJ = !1;
            return this.consumers.forEach((ZJ => {
              this.isEventForConsumer(JJ, ZJ) && (cJ = !0, this.sendToConsumer(JJ, ZJ), this.saveEventToCache(JJ))
            })), this.hasHandledPotentialRedirect || ! function(JJ) {
              switch (JJ.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return MU(JJ);
                default:
                  return !1
              }
            }(JJ) || (this.hasHandledPotentialRedirect = !0, cJ || (this.queuedRedirectEvent = JJ, cJ = !0)), cJ
          }
          sendToConsumer(JJ, cJ) {
            var ZJ;
            if (JJ.error && !MU(JJ)) {
              const FJ = (null === (ZJ = JJ.error.code) || void 0 === ZJ ? void 0 : ZJ.split("auth/")[1]) || "internal-error";
              cJ.onError(QJ(this.auth, FJ))
            } else cJ.onAuthEvent(JJ)
          }
          isEventForConsumer(JJ, cJ) {
            const ZJ = null === cJ.eventId || !!JJ.eventId && JJ.eventId === cJ.eventId;
            return cJ.filter.includes(JJ.type) && ZJ
          }
          hasEventBeenHandled(JJ) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(IU(JJ))
          }
          saveEventToCache(JJ) {
            this.cachedEventUids.add(IU(JJ)), this.lastProcessedEventTime = Date.now()
          }
        }

        function IU(JJ) {
          return [JJ.type, JJ.eventId, JJ.sessionId, JJ.tenantId].filter((JJ => JJ)).join("-")
        }

        function MU(JJ) {
          let {
            type: cJ,
            error: ZJ
          } = JJ;
          return "unknown" === cJ && "auth/no-auth-event" === (null === ZJ || void 0 === ZJ ? void 0 : ZJ.code)
        }
        const bU = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          wU = /^https?/;
        async function WU(JJ) {
          if (JJ.config.emulator) return;
          const {
            authorizedDomains: cJ
          } = await async function(JJ) {
            return dJ(JJ, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(JJ);
          for (const FJ of cJ) try {
            if (gU(FJ)) return
          } catch (ZJ) {}
          mJ(JJ, "unauthorized-domain")
        }

        function gU(JJ) {
          const cJ = MJ(),
            {
              protocol: ZJ,
              hostname: FJ
            } = new URL(cJ);
          if (JJ.startsWith("chrome-extension://")) {
            const UJ = new URL(JJ);
            return "" === UJ.hostname && "" === FJ ? "chrome-extension:" === ZJ && JJ.replace("chrome-extension://", "") === cJ.replace("chrome-extension://", "") : "chrome-extension:" === ZJ && UJ.hostname === FJ
          }
          if (!wU.test(ZJ)) return !1;
          if (bU.test(JJ)) return FJ === JJ;
          const UJ = JJ.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + UJ + "|" + UJ + ")$", "i").test(FJ)
        }
        const HU = new WJ(3e4, 6e4);

        function PU() {
          const JJ = yF().___jsl;
          if (null === JJ || void 0 === JJ ? void 0 : JJ.H)
            for (const cJ of Object.keys(JJ.H))
              if (JJ.H[cJ].r = JJ.H[cJ].r || [], JJ.H[cJ].L = JJ.H[cJ].L || [], JJ.H[cJ].r = [...JJ.H[cJ].L], JJ.CP)
                for (let ZJ = 0; ZJ < JJ.CP.length; ZJ++) JJ.CP[ZJ] = null
        }
        let kU = null;

        function pU(JJ) {
          return kU = kU || function(JJ) {
            return new Promise(((cJ, ZJ) => {
              var FJ, UJ, eJ;

              function XJ() {
                PU(), gapi.load("gapi.iframes", {
                  callback: () => {
                    cJ(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    PU(), ZJ(QJ(JJ, "network-request-failed"))
                  },
                  timeout: HU.get()
                })
              }
              if (null === (UJ = null === (FJ = yF().gapi) || void 0 === FJ ? void 0 : FJ.iframes) || void 0 === UJ ? void 0 : UJ.Iframe) cJ(gapi.iframes.getContext());
              else {
                if (!(null === (eJ = yF().gapi) || void 0 === eJ ? void 0 : eJ.load)) {
                  const cJ = Sc("iframefcb");
                  return yF()[cJ] = () => {
                    gapi.load ? XJ() : ZJ(QJ(JJ, "network-request-failed"))
                  }, yc(`https://apis.google.com/js/api.js?onload=${cJ}`).catch((JJ => ZJ(JJ)))
                }
                XJ()
              }
            })).catch((JJ => {
              throw kU = null, JJ
            }))
          }(JJ), kU
        }
        const dU = new WJ(5e3, 15e3),
          zU = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          NU = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function OU(JJ) {
          const cJ = JJ.config;
          yJ(cJ.authDomain, JJ, "auth-domain-config-required");
          const ZJ = cJ.emulator ? gJ(cJ, "emulator/auth/iframe") : `https://${JJ.config.authDomain}/__/auth/iframe`,
            eJ = {
              apiKey: cJ.apiKey,
              appName: JJ.name,
              v: UJ.h
            },
            XJ = NU.get(JJ.config.apiHost);
          XJ && (eJ.eid = XJ);
          const AJ = JJ._getFrameworks();
          return AJ.length && (eJ.fw = AJ.join(",")), `${ZJ}?${(0,FJ.W)(eJ).slice(1)}`
        }
        const TU = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class CU {
          constructor(JJ) {
            this.window = JJ, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (JJ) {}
          }
        }

        function uU(JJ, cJ, ZJ) {
          let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const XJ = Math.max((window.screen.availHeight - eJ) / 2, 0).toString(),
            AJ = Math.max((window.screen.availWidth - UJ) / 2, 0).toString();
          let qJ = "";
          const jJ = Object.assign(Object.assign({}, TU), {
              width: UJ.toString(),
              height: eJ.toString(),
              top: XJ,
              left: AJ
            }),
            YJ = (0, FJ.G)().toLowerCase();
          ZJ && (qJ = sc(YJ) ? "_blank" : ZJ), hc(YJ) && (cJ = cJ || "http://localhost", jJ.scrollbars = "yes");
          const hJ = Object.entries(jJ).reduce(((JJ, cJ) => {
            let [ZJ, FJ] = cJ;
            return `${JJ}${ZJ}=${FJ},`
          }), "");
          if (function() {
              var JJ;
              return rc(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FJ.G)()) && !!(null === (JJ = window.navigator) || void 0 === JJ ? void 0 : JJ.standalone)
            }(YJ) && "_self" !== qJ) return function(JJ, cJ) {
            const ZJ = document.createElement("a");
            ZJ.href = JJ, ZJ.target = cJ;
            const FJ = document.createEvent("MouseEvent");
            FJ.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), ZJ.dispatchEvent(FJ)
          }(cJ || "", qJ), new CU(null);
          const DJ = window.open(cJ || "", qJ, hJ);
          yJ(DJ, JJ, "popup-blocked");
          try {
            DJ.focus()
          } catch (sJ) {}
          return new CU(DJ)
        }
        const iU = "__/auth/handler",
          RU = "emulator/auth/handler",
          LU = encodeURIComponent("fac");
        async function aU(JJ, cJ, ZJ, eJ, XJ, AJ) {
            yJ(JJ.config.authDomain, JJ, "auth-domain-config-required"), yJ(JJ.config.apiKey, JJ, "invalid-api-key");
            const qJ = {
              apiKey: JJ.config.apiKey,
              appName: JJ.name,
              authType: ZJ,
              redirectUrl: eJ,
              v: UJ.h,
              eventId: XJ
            };
            if (cJ instanceof JZ) {
              cJ.setDefaultLanguage(JJ.languageCode), qJ.providerId = cJ.providerId || "", (0, FJ.J)(cJ.getCustomParameters()) || (qJ.customParameters = JSON.stringify(cJ.getCustomParameters()));
              for (const [JJ, cJ] of Object.entries(AJ || {})) qJ[JJ] = cJ
            }
            if (cJ instanceof cZ) {
              const JJ = cJ.getScopes().filter((JJ => "" !== JJ));
              JJ.length > 0 && (qJ.scopes = JJ.join(","))
            }
            JJ.tenantId && (qJ.tid = JJ.tenantId);
            const jJ = qJ;
            for (const FJ of Object.keys(jJ)) void 0 === jJ[FJ] && delete jJ[FJ];
            const YJ = await JJ._getAppCheckToken(),
              hJ = YJ ? `#${LU}=${encodeURIComponent(YJ)}` : "";
            return `${function(JJ){let{config:cJ}=JJ;if(!cJ.emulator)return`
            https: //${cJ.authDomain}/${iU}`;return gJ(cJ,RU)}(JJ)}?${(0,FJ.W)(jJ).slice(1)}${hJ}`}const BU="webStorageSupport";const tU=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=QF,this._completeRedirectFn=KU,this._overrideRedirectResult=xU}async _openPopup(JJ,cJ,ZJ,FJ){var UJ;IJ(null===(UJ=this.eventManagers[JJ._key()])||void 0===UJ?void 0:UJ.manager,"_initialize() not called before _openPopup()");return uU(JJ,await aU(JJ,cJ,ZJ,MJ(),FJ),VF())}async _openRedirect(JJ,cJ,ZJ,FJ){await this._originValidation(JJ);return function(JJ){yF().location.href=JJ}(await aU(JJ,cJ,ZJ,MJ(),FJ)),new Promise((()=>{}))}_initialize(JJ){const cJ=JJ._key();if(this.eventManagers[cJ]){const{manager:JJ,promise:ZJ}=this.eventManagers[cJ];return JJ?Promise.resolve(JJ):(IJ(ZJ,"If manager is not set, promise should be"),ZJ)}const ZJ=this.initAndGetManager(JJ);return this.eventManagers[cJ]={promise:ZJ},ZJ.catch((()=>{delete this.eventManagers[cJ]})),ZJ}async initAndGetManager(JJ){const cJ=await async function(JJ){const cJ=await pU(JJ),ZJ=yF().gapi;return yJ(ZJ,JJ,"internal-error"),cJ.open({where:document.body,url:OU(JJ),messageHandlersFilter:ZJ.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zU,dontclear:!0},(cJ=>new Promise((async(ZJ,FJ)=>{await cJ.restyle({setHideOnLeave:!1});const UJ=QJ(JJ,"network-request-failed"),eJ=yF().setTimeout((()=>{FJ(UJ)}),dU.get());function XJ(){yF().clearTimeout(eJ),ZJ(cJ)}cJ.ping(XJ).then(XJ,(()=>{FJ(UJ)}))}))))}(JJ),ZJ=new SU(JJ);return cJ.register("authEvent",(cJ=>{yJ(null===cJ||void 0===cJ?void 0:cJ.authEvent,JJ,"invalid-auth-event");return{status:ZJ.onEvent(cJ.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[JJ._key()]={manager:ZJ},this.iframes[JJ._key()]=cJ,ZJ}_isIframeWebStorageSupported(JJ,cJ){this.iframes[JJ._key()].send(BU,{type:BU},(ZJ=>{var FJ;const UJ=null===(FJ=null===ZJ||void 0===ZJ?void 0:ZJ[0])||void 0===FJ?void 0:FJ[BU];void 0!==UJ&&cJ(!!UJ),mJ(JJ,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(JJ){const cJ=JJ._key();return this.originValidationPromises[cJ]||(this.originValidationPromises[cJ]=WU(JJ)),this.originValidationPromises[cJ]}get _shouldInitProactively(){return vc()||Dc()||rc()}};class oU{constructor(JJ){this.factorId=JJ}_process(JJ,cJ,ZJ){switch(cJ.type){case"enroll":return this._finalizeEnroll(JJ,cJ.credential,ZJ);case"signin":return this._finalizeSignIn(JJ,cJ.credential);default:return SJ("unexpected MultiFactorSessionType")}}}class lU extends oU{constructor(JJ){super("phone"),this.credential=JJ}static _fromCredential(JJ){return new lU(JJ)}_finalizeEnroll(JJ,cJ,ZJ){return function(JJ,cJ){return dJ(JJ,"POST","/v2/accounts/mfaEnrollment:finalize",pJ(JJ,cJ))}(JJ,{idToken:cJ,displayName:ZJ,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(JJ,cJ){return function(JJ,cJ){return dJ(JJ,"POST","/v2/accounts/mfaSignIn:finalize",pJ(JJ,cJ))}(JJ,{mfaPendingCredential:cJ,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Je{constructor(){}static assertion(JJ){return lU._fromCredential(JJ)}}Je.FACTOR_ID="phone";class ce{static assertionForEnrollment(JJ,cJ){return Ze._fromSecret(JJ,cJ)}static assertionForSignIn(JJ,cJ){return Ze._fromEnrollmentId(JJ,cJ)}static async generateSecret(JJ){const cJ=JJ;yJ("undefined"!==typeof cJ.auth,"internal-error");const ZJ=await(FJ=cJ.auth,UJ={idToken:cJ.credential,totpEnrollmentInfo:{}},dJ(FJ,"POST","/v2/accounts/mfaEnrollment:start",pJ(FJ,UJ)));var FJ,UJ;return Fe._fromStartTotpMfaEnrollmentResponse(ZJ,cJ.auth)}}ce.FACTOR_ID="totp";class Ze extends oU{constructor(JJ,cJ,ZJ){super("totp"),this.otp=JJ,this.enrollmentId=cJ,this.secret=ZJ}static _fromSecret(JJ,cJ){return new Ze(cJ,void 0,JJ)}static _fromEnrollmentId(JJ,cJ){return new Ze(cJ,JJ)}async _finalizeEnroll(JJ,cJ,ZJ){return yJ("undefined"!==typeof this.secret,JJ,"argument-error"),function(JJ,cJ){return dJ(JJ,"POST","/v2/accounts/mfaEnrollment:finalize",pJ(JJ,cJ))}(JJ,{idToken:cJ,displayName:ZJ,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(JJ,cJ){yJ(void 0!==this.enrollmentId&&void 0!==this.otp,JJ,"argument-error");const ZJ={verificationCode:this.otp};return function(JJ,cJ){return dJ(JJ,"POST","/v2/accounts/mfaSignIn:finalize",pJ(JJ,cJ))}(JJ,{mfaPendingCredential:cJ,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:ZJ})}}class Fe{constructor(JJ,cJ,ZJ,FJ,UJ,eJ,XJ){this.sessionInfo=eJ,this.auth=XJ,this.secretKey=JJ,this.hashingAlgorithm=cJ,this.codeLength=ZJ,this.codeIntervalSeconds=FJ,this.enrollmentCompletionDeadline=UJ}static _fromStartTotpMfaEnrollmentResponse(JJ,cJ){return new Fe(JJ.totpSessionInfo.sharedSecretKey,JJ.totpSessionInfo.hashingAlgorithm,JJ.totpSessionInfo.verificationCodeLength,JJ.totpSessionInfo.periodSec,new Date(JJ.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),JJ.totpSessionInfo.sessionInfo,cJ)}_makeTotpVerificationInfo(JJ){return{sessionInfo:this.sessionInfo,verificationCode:JJ}}generateQrCodeUrl(JJ,cJ){var ZJ;let FJ=!1;return(Ue(JJ)||Ue(cJ))&&(FJ=!0),FJ&&(Ue(JJ)&&(JJ=(null===(ZJ=this.auth.currentUser)||void 0===ZJ?void 0:ZJ.email)||"unknownuser"),Ue(cJ)&&(cJ=this.auth.name)),`otpauth://totp/${cJ}:${JJ}?secret=${this.secretKey}&issuer=${cJ}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ue(JJ){return"undefined"===typeof JJ||0===(null===JJ||void 0===JJ?void 0:JJ.length)}var ee="@firebase/auth",Xe="0.23.2";class Ae{constructor(JJ){this.auth=JJ,this.internalListeners=new Map}getUid(){var JJ;return this.assertAuthConfigured(),(null===(JJ=this.auth.currentUser)||void 0===JJ?void 0:JJ.uid)||null}async getToken(JJ){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(JJ)}}addAuthTokenListener(JJ){if(this.assertAuthConfigured(),this.internalListeners.has(JJ))return;const cJ=this.auth.onIdTokenChanged((cJ=>{JJ((null===cJ||void 0===cJ?void 0:cJ.stsTokenManager.accessToken)||null)}));this.internalListeners.set(JJ,cJ),this.updateProactiveRefresh()}removeAuthTokenListener(JJ){this.assertAuthConfigured();const cJ=this.internalListeners.get(JJ);cJ&&(this.internalListeners.delete(JJ),cJ(),this.updateProactiveRefresh())}assertAuthConfigured(){yJ(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const qe=(0,FJ.C)("authIdTokenMaxAge")||300;let je=null;const Ye=JJ=>async cJ=>{const ZJ=cJ&&await cJ.getIdTokenResult(),FJ=ZJ&&((new Date).getTime()-Date.parse(ZJ.issuedAtTime))/1e3;if(FJ&&FJ>qe)return;const UJ=null===ZJ||void 0===ZJ?void 0:ZJ.token;je!==UJ&&(je=UJ,await fetch(JJ,{method:UJ?"POST":"DELETE",headers:UJ?{Authorization:`Bearer ${UJ}`}:{}}))};function he(){let JJ=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,UJ.M)();const cJ=(0,UJ.A)(JJ,"auth");if(cJ.isInitialized())return cJ.getImmediate();const ZJ=Hc(JJ,{popupRedirectResolver:tU,persistence:[pF,vF,QF]}),eJ=(0,FJ.C)("authTokenSyncURL");if(eJ){const JJ=Ye(eJ);UF(ZJ,JJ,(()=>JJ(ZJ.currentUser))),FF(ZJ,(cJ=>JJ(cJ)))}const XJ=(0,FJ.A)("auth");return XJ&&Pc(ZJ,`http://${XJ}`),ZJ}var De;De="Browser",(0,UJ.C)(new AJ.c("auth",((JJ,cJ)=>{let{options:ZJ}=cJ;const FJ=JJ.getProvider("app").getImmediate(),UJ=JJ.getProvider("heartbeat"),eJ=JJ.getProvider("app-check-internal"),{apiKey:XJ,authDomain:AJ}=FJ.options;yJ(XJ&&!XJ.includes(":"),"invalid-api-key",{appName:FJ.name});const qJ={apiKey:XJ,authDomain:AJ,clientPlatform:De,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mc(De)},jJ=new wc(FJ,UJ,eJ,qJ);return function(JJ,cJ){const ZJ=(null===cJ||void 0===cJ?void 0:cJ.persistence)||[],FJ=(Array.isArray(ZJ)?ZJ:[ZJ]).map(ec);(null===cJ||void 0===cJ?void 0:cJ.errorMap)&&JJ._updateErrorMap(cJ.errorMap),JJ._initializeWithPersistence(FJ,null===cJ||void 0===cJ?void 0:cJ.popupRedirectResolver)}(jJ,ZJ),jJ}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((JJ,cJ,ZJ)=>{JJ.getProvider("auth-internal").initialize()}))),(0,UJ.C)(new AJ.c("auth-internal",(JJ=>(JJ=>new Ae(JJ))(Wc(JJ.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,UJ.U)(ee,Xe,function(JJ){switch(JJ){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(De)),(0,UJ.U)(ee,Xe,"esm2017")}};Object.freeze(modules);for(const JJ in modules)Object.freeze(modules[JJ]);