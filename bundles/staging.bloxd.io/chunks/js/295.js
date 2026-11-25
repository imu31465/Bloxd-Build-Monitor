/*! For license information please see fo1voe.295.f93ad7ee.chunk.js.LICENSE.txt */
export const id = 295;
export const ids = [295];
export const modules = {
    41628: (MM, rM, iM) => {
        iM.r(rM), iM.d(rM, {
          ActionCodeOperation: () => mM,
          ActionCodeURL: () => Tr,
          AuthCredential: () => fr,
          AuthErrorCodes: () => yM,
          EmailAuthCredential: () => Br,
          EmailAuthProvider: () => cr,
          FacebookAuthProvider: () => Oi,
          FactorId: () => nM,
          GithubAuthProvider: () => ji,
          GoogleAuthProvider: () => Si,
          OAuthCredential: () => Ir,
          OAuthProvider: () => ii,
          OperationType: () => LM,
          PhoneAuthCredential: () => qr,
          PhoneAuthProvider: () => OS,
          PhoneMultiFactorGenerator: () => ij,
          ProviderId: () => QM,
          RecaptchaVerifier: () => qO,
          SAMLAuthProvider: () => Pi,
          SignInMethod: () => zM,
          TotpMultiFactorGenerator: () => Oj,
          TotpSecret: () => jj,
          TwitterAuthProvider: () => ni,
          applyActionCode: () => Di,
          beforeAuthStateChanged: () => aO,
          browserLocalPersistence: () => GO,
          browserPopupRedirectResolver: () => cS,
          browserSessionPersistence: () => eO,
          checkActionCode: () => ki,
          confirmPasswordReset: () => si,
          connectAuthEmulator: () => kr,
          createUserWithEmailAndPassword: () => oi,
          debugErrorMap: () => hM,
          deleteUser: () => LO,
          fetchSignInMethodsForEmail: () => xi,
          getAdditionalUserInfo: () => iO,
          getAuth: () => Hj,
          getIdToken: () => BM,
          getIdTokenResult: () => XM,
          getMultiFactorResolver: () => hO,
          getRedirectResult: () => wS,
          inMemoryPersistence: () => Pr,
          indexedDBLocalPersistence: () => YO,
          initializeAuth: () => Dr,
          initializeRecaptchaConfig: () => SO,
          isSignInWithEmailLink: () => Ni,
          linkWithCredential: () => ei,
          linkWithPhoneNumber: () => cO,
          linkWithPopup: () => HS,
          linkWithRedirect: () => bS,
          multiFactor: () => yO,
          onAuthStateChanged: () => PO,
          onIdTokenChanged: () => jO,
          parseActionCodeURL: () => Vr,
          prodErrorMap: () => JM,
          reauthenticateWithCredential: () => bi,
          reauthenticateWithPhoneNumber: () => MS,
          reauthenticateWithPopup: () => mS,
          reauthenticateWithRedirect: () => eS,
          reload: () => Mr,
          sendEmailVerification: () => vi,
          sendPasswordResetEmail: () => Wi,
          sendSignInLinkToEmail: () => Yi,
          setPersistence: () => OO,
          signInAnonymously: () => mi,
          signInWithCredential: () => Ci,
          signInWithCustomToken: () => wi,
          signInWithEmailAndPassword: () => fi,
          signInWithEmailLink: () => Ai,
          signInWithPhoneNumber: () => VO,
          signInWithPopup: () => LS,
          signInWithRedirect: () => CS,
          signOut: () => zO,
          unlink: () => yi,
          updateCurrentUser: () => QO,
          updateEmail: () => Xi,
          updatePassword: () => Ii,
          updatePhoneNumber: () => iS,
          updateProfile: () => Bi,
          useDeviceLanguage: () => nO,
          verifyBeforeUpdateEmail: () => Fi,
          verifyPasswordResetCode: () => Zi
        });
        var OM = iM(41611),
          SM = iM(41598);

        function jM(MM, rM) {
          var iM = {};
          for (var OM in MM) Object.prototype.hasOwnProperty.call(MM, OM) && rM.indexOf(OM) < 0 && (iM[OM] = MM[OM]);
          if (null != MM && "function" === typeof Object.getOwnPropertySymbols) {
            var SM = 0;
            for (OM = Object.getOwnPropertySymbols(MM); SM < OM.length; SM++) rM.indexOf(OM[SM]) < 0 && Object.prototype.propertyIsEnumerable.call(MM, OM[SM]) && (iM[OM[SM]] = MM[OM[SM]])
          }
          return iM
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var aM = iM(41614),
          PM = iM(41605);
        const nM = {
            PHONE: "phone",
            TOTP: "totp"
          },
          QM = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          zM = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          LM = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          mM = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function HM() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const hM = function() {
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
          JM = HM,
          dM = new OM.h("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          yM = {
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
          lM = new aM.e("@firebase/auth");

        function EM(MM) {
          if (lM.logLevel <= aM.d.ERROR) {
            for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
            lM.error(`Auth (${SM.g}): ${MM}`, ...iM)
          }
        }

        function UM(MM) {
          for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
          throw bM(MM, ...iM)
        }

        function GM(MM) {
          for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
          return bM(MM, ...iM)
        }

        function CM(MM, rM, iM) {
          const SM = Object.assign(Object.assign({}, JM()), {
            [rM]: iM
          });
          return new OM.h("auth", "Firebase", SM).create(rM, {
            appName: MM.name
          })
        }

        function eM(MM, rM, iM) {
          if (!(rM instanceof iM)) throw iM.name !== rM.constructor.name && UM(MM, "argument-error"), CM(MM, "argument-error", `Type of ${rM.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function bM(MM) {
          for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
          if ("string" !== typeof MM) {
            const rM = iM[0],
              OM = [...iM.slice(1)];
            return OM[0] && (OM[0].appName = MM.name), MM._errorFactory.create(rM, ...OM)
          }
          return dM.create(MM, ...iM)
        }

        function wM(MM, rM) {
          if (!MM) {
            for (var iM = arguments.length, OM = new Array(iM > 2 ? iM - 2 : 0), SM = 2; SM < iM; SM++) OM[SM - 2] = arguments[SM];
            throw bM(rM, ...OM)
          }
        }

        function tM(MM) {
          const rM = "INTERNAL ASSERTION FAILED: " + MM;
          throw EM(rM), new Error(rM)
        }

        function gM(MM, rM) {
          MM || tM(rM)
        }

        function uM() {
          var MM;
          return "undefined" !== typeof self && (null === (MM = self.location) || void 0 === MM ? void 0 : MM.href) || ""
        }

        function RM() {
          return "http:" === pM() || "https:" === pM()
        }

        function pM() {
          var MM;
          return "undefined" !== typeof self && (null === (MM = self.location) || void 0 === MM ? void 0 : MM.protocol) || null
        }
        class WM {
          constructor(MM, rM) {
            this.shortDelay = MM, this.longDelay = rM, gM(rM > MM, "Short delay should be less than long delay!"), this.isMobile = (0, OM.$)() || (0, OM.db)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (RM() || (0, OM.T)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function sM(MM, rM) {
          gM(MM.emulator, "Emulator should always be set here");
          const {
            url: iM
          } = MM.emulator;
          return rM ? `${iM}${rM.startsWith("/")?rM.slice(1):rM}` : iM
        }
        class DM {
          static initialize(MM, rM, iM) {
            this.fetchImpl = MM, rM && (this.headersImpl = rM), iM && (this.responseImpl = iM)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void tM("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void tM("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void tM("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const kM = {
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
          ZM = new WM(3e4, 6e4);

        function oM(MM, rM) {
          return MM.tenantId && !rM.tenantId ? Object.assign(Object.assign({}, rM), {
            tenantId: MM.tenantId
          }) : rM
        }
        async function fM(MM, rM, iM, SM) {
          return YM(MM, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let jM = {},
              aM = {};
            SM && ("GET" === rM ? aM = SM : jM = {
              body: JSON.stringify(SM)
            });
            const PM = (0, OM.ib)(Object.assign({
                key: MM.config.apiKey
              }, aM)).slice(1),
              nM = await MM._getAdditionalHeaders();
            return nM["Content-Type"] = "application/json", MM.languageCode && (nM["X-Firebase-Locale"] = MM.languageCode), DM.fetch()(AM(MM, MM.config.apiHost, iM, PM), Object.assign({
              method: rM,
              headers: nM,
              referrerPolicy: "no-referrer"
            }, jM))
          }))
        }
        async function YM(MM, rM, iM) {
          MM._canInitEmulator = !1;
          const SM = Object.assign(Object.assign({}, kM), rM);
          try {
            const rM = new xM(MM),
              OM = await Promise.race([iM(), rM.promise]);
            rM.clearNetworkTimeout();
            const jM = await OM.json();
            if ("needConfirmation" in jM) throw vM(MM, "account-exists-with-different-credential", jM);
            if (OM.ok && !("errorMessage" in jM)) return jM;
            {
              const rM = OM.ok ? jM.errorMessage : jM.error.message,
                [iM, aM] = rM.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === iM) throw vM(MM, "credential-already-in-use", jM);
              if ("EMAIL_EXISTS" === iM) throw vM(MM, "email-already-in-use", jM);
              if ("USER_DISABLED" === iM) throw vM(MM, "user-disabled", jM);
              const PM = SM[iM] || iM.toLowerCase().replace(/[_\s]+/g, "-");
              if (aM) throw CM(MM, PM, aM);
              UM(MM, PM)
            }
          } catch (jM) {
            if (jM instanceof OM.j) throw jM;
            UM(MM, "network-request-failed", {
              message: String(jM)
            })
          }
        }
        async function NM(MM, rM, iM, OM) {
          let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const jM = await fM(MM, rM, iM, OM, SM);
          return "mfaPendingCredential" in jM && UM(MM, "multi-factor-auth-required", {
            _serverResponse: jM
          }), jM
        }

        function AM(MM, rM, iM, OM) {
          const SM = `${rM}${iM}?${OM}`;
          return MM.config.emulator ? sM(MM.config, SM) : `${MM.config.apiScheme}://${SM}`
        }
        class xM {
          constructor(MM) {
            this.auth = MM, this.timer = null, this.promise = new Promise(((MM, rM) => {
              this.timer = setTimeout((() => rM(GM(this.auth, "network-request-failed"))), ZM.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function vM(MM, rM, iM) {
          const OM = {
            appName: MM.name
          };
          iM.email && (OM.email = iM.email), iM.phoneNumber && (OM.phoneNumber = iM.phoneNumber);
          const SM = GM(MM, rM, OM);
          return SM.customData._tokenResponse = iM, SM
        }

        function FM(MM) {
          if (MM) try {
            const rM = new Date(Number(MM));
            if (!isNaN(rM.getTime())) return rM.toUTCString()
          } catch (rM) {}
        }

        function BM(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, OM.N)(MM).getIdToken(rM)
        }
        async function XM(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const iM = (0, OM.N)(MM),
            SM = await iM.getIdToken(rM),
            jM = KM(SM);
          wM(jM && jM.exp && jM.auth_time && jM.iat, iM.auth, "internal-error");
          const aM = "object" === typeof jM.firebase ? jM.firebase : void 0,
            PM = null === aM || void 0 === aM ? void 0 : aM.sign_in_provider;
          return {
            claims: jM,
            token: SM,
            authTime: FM(IM(jM.auth_time)),
            issuedAtTime: FM(IM(jM.iat)),
            expirationTime: FM(IM(jM.exp)),
            signInProvider: PM || null,
            signInSecondFactor: (null === aM || void 0 === aM ? void 0 : aM.sign_in_second_factor) || null
          }
        }

        function IM(MM) {
          return 1e3 * Number(MM)
        }

        function KM(MM) {
          const [rM, iM, SM] = MM.split(".");
          if (void 0 === rM || void 0 === iM || void 0 === SM) return EM("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const MM = (0, OM.q)(iM);
            return MM ? JSON.parse(MM) : (EM("Failed to decode base64 JWT payload"), null)
          } catch (jM) {
            return EM("Caught error parsing JWT payload as JSON", null === jM || void 0 === jM ? void 0 : jM.toString()), null
          }
        }
        async function qM(MM, rM) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return rM;
          try {
            return await rM
          } catch (iM) {
            throw iM instanceof OM.j && function(MM) {
              let {
                code: rM
              } = MM;
              return "auth/user-disabled" === rM || "auth/user-token-expired" === rM
            }(iM) && MM.auth.currentUser === MM && await MM.auth.signOut(), iM
          }
        }
        class TM {
          constructor(MM) {
            this.user = MM, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(MM) {
            var rM;
            if (MM) {
              const MM = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), MM
            } {
              this.errorBackoff = 3e4;
              const MM = (null !== (rM = this.user.stsTokenManager.expirationTime) && void 0 !== rM ? rM : 0) - Date.now() - 3e5;
              return Math.max(0, MM)
            }
          }
          schedule() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const rM = this.getInterval(MM);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), rM)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (MM) {
              return void("auth/network-request-failed" === (null === MM || void 0 === MM ? void 0 : MM.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class VM {
          constructor(MM, rM) {
            this.createdAt = MM, this.lastLoginAt = rM, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = FM(this.lastLoginAt), this.creationTime = FM(this.createdAt)
          }
          _copy(MM) {
            this.createdAt = MM.createdAt, this.lastLoginAt = MM.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function cM(MM) {
          var rM;
          const iM = MM.auth,
            OM = await MM.getIdToken(),
            SM = await qM(MM, async function(MM, rM) {
              return fM(MM, "POST", "/v1/accounts:lookup", rM)
            }(iM, {
              idToken: OM
            }));
          wM(null === SM || void 0 === SM ? void 0 : SM.users.length, iM, "internal-error");
          const aM = SM.users[0];
          MM._notifyReloadListener(aM);
          const PM = (null === (rM = aM.providerUserInfo) || void 0 === rM ? void 0 : rM.length) ? aM.providerUserInfo.map((MM => {
            var {
              providerId: rM
            } = MM, iM = jM(MM, ["providerId"]);
            return {
              providerId: rM,
              uid: iM.rawId || "",
              displayName: iM.displayName || null,
              email: iM.email || null,
              phoneNumber: iM.phoneNumber || null,
              photoURL: iM.photoUrl || null
            }
          })) : [];
          const nM = (QM = MM.providerData, zM = PM, [...QM.filter((MM => !zM.some((rM => rM.providerId === MM.providerId)))), ...zM]);
          var QM, zM;
          const LM = MM.isAnonymous,
            mM = !(MM.email && aM.passwordHash) && !(null === nM || void 0 === nM ? void 0 : nM.length),
            HM = !!LM && mM,
            hM = {
              uid: aM.localId,
              displayName: aM.displayName || null,
              photoURL: aM.photoUrl || null,
              email: aM.email || null,
              emailVerified: aM.emailVerified || !1,
              phoneNumber: aM.phoneNumber || null,
              tenantId: aM.tenantId || null,
              providerData: nM,
              metadata: new VM(aM.createdAt, aM.lastLoginAt),
              isAnonymous: HM
            };
          Object.assign(MM, hM)
        }
        async function Mr(MM) {
          const rM = (0, OM.N)(MM);
          await cM(rM), await rM.auth._persistUserIfCurrent(rM), rM.auth._notifyListenersIfCurrent(rM)
        }
        class rr {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(MM) {
            wM(MM.idToken, "internal-error"), wM("undefined" !== typeof MM.idToken, "internal-error"), wM("undefined" !== typeof MM.refreshToken, "internal-error");
            const rM = "expiresIn" in MM && "undefined" !== typeof MM.expiresIn ? Number(MM.expiresIn) : function(MM) {
              const rM = KM(MM);
              return wM(rM, "internal-error"), wM("undefined" !== typeof rM.exp, "internal-error"), wM("undefined" !== typeof rM.iat, "internal-error"), Number(rM.exp) - Number(rM.iat)
            }(MM.idToken);
            this.updateTokensAndExpiration(MM.idToken, MM.refreshToken, rM)
          }
          async getToken(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return wM(!this.accessToken || this.refreshToken, MM, "user-token-expired"), rM || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(MM, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(MM, rM) {
            const {
              accessToken: iM,
              refreshToken: SM,
              expiresIn: jM
            } = await async function(MM, rM) {
              const iM = await YM(MM, {}, (async () => {
                const iM = (0, OM.ib)({
                    grant_type: "refresh_token",
                    refresh_token: rM
                  }).slice(1),
                  {
                    tokenApiHost: SM,
                    apiKey: jM
                  } = MM.config,
                  aM = AM(MM, SM, "/v1/token", `key=${jM}`),
                  PM = await MM._getAdditionalHeaders();
                return PM["Content-Type"] = "application/x-www-form-urlencoded", DM.fetch()(aM, {
                  method: "POST",
                  headers: PM,
                  body: iM
                })
              }));
              return {
                accessToken: iM.access_token,
                expiresIn: iM.expires_in,
                refreshToken: iM.refresh_token
              }
            }(MM, rM);
            this.updateTokensAndExpiration(iM, SM, Number(jM))
          }
          updateTokensAndExpiration(MM, rM, iM) {
            this.refreshToken = rM || null, this.accessToken = MM || null, this.expirationTime = Date.now() + 1e3 * iM
          }
          static fromJSON(MM, rM) {
            const {
              refreshToken: iM,
              accessToken: OM,
              expirationTime: SM
            } = rM, jM = new rr;
            return iM && (wM("string" === typeof iM, "internal-error", {
              appName: MM
            }), jM.refreshToken = iM), OM && (wM("string" === typeof OM, "internal-error", {
              appName: MM
            }), jM.accessToken = OM), SM && (wM("number" === typeof SM, "internal-error", {
              appName: MM
            }), jM.expirationTime = SM), jM
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(MM) {
            this.accessToken = MM.accessToken, this.refreshToken = MM.refreshToken, this.expirationTime = MM.expirationTime
          }
          _clone() {
            return Object.assign(new rr, this.toJSON())
          }
          _performRefresh() {
            return tM("not implemented")
          }
        }

        function ir(MM, rM) {
          wM("string" === typeof MM || "undefined" === typeof MM, "internal-error", {
            appName: rM
          })
        }
        class Or {
          constructor(MM) {
            var {
              uid: rM,
              auth: iM,
              stsTokenManager: OM
            } = MM, SM = jM(MM, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new TM(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = rM, this.auth = iM, this.stsTokenManager = OM, this.accessToken = OM.accessToken, this.displayName = SM.displayName || null, this.email = SM.email || null, this.emailVerified = SM.emailVerified || !1, this.phoneNumber = SM.phoneNumber || null, this.photoURL = SM.photoURL || null, this.isAnonymous = SM.isAnonymous || !1, this.tenantId = SM.tenantId || null, this.providerData = SM.providerData ? [...SM.providerData] : [], this.metadata = new VM(SM.createdAt || void 0, SM.lastLoginAt || void 0)
          }
          async getIdToken(MM) {
            const rM = await qM(this, this.stsTokenManager.getToken(this.auth, MM));
            return wM(rM, this.auth, "internal-error"), this.accessToken !== rM && (this.accessToken = rM, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), rM
          }
          getIdTokenResult(MM) {
            return XM(this, MM)
          }
          reload() {
            return Mr(this)
          }
          _assign(MM) {
            this !== MM && (wM(this.uid === MM.uid, this.auth, "internal-error"), this.displayName = MM.displayName, this.photoURL = MM.photoURL, this.email = MM.email, this.emailVerified = MM.emailVerified, this.phoneNumber = MM.phoneNumber, this.isAnonymous = MM.isAnonymous, this.tenantId = MM.tenantId, this.providerData = MM.providerData.map((MM => Object.assign({}, MM))), this.metadata._copy(MM.metadata), this.stsTokenManager._assign(MM.stsTokenManager))
          }
          _clone(MM) {
            const rM = new Or(Object.assign(Object.assign({}, this), {
              auth: MM,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return rM.metadata._copy(this.metadata), rM
          }
          _onReload(MM) {
            wM(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = MM, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(MM) {
            this.reloadListener ? this.reloadListener(MM) : this.reloadUserInfo = MM
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              iM = !1;
            MM.idToken && MM.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(MM), iM = !0), rM && await cM(this), await this.auth._persistUserIfCurrent(this), iM && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const MM = await this.getIdToken();
            return await qM(this, async function(MM, rM) {
              return fM(MM, "POST", "/v1/accounts:delete", rM)
            }(this.auth, {
              idToken: MM
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
              providerData: this.providerData.map((MM => Object.assign({}, MM))),
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
          static _fromJSON(MM, rM) {
            var iM, OM, SM, jM, aM, PM, nM, QM;
            const zM = null !== (iM = rM.displayName) && void 0 !== iM ? iM : void 0,
              LM = null !== (OM = rM.email) && void 0 !== OM ? OM : void 0,
              mM = null !== (SM = rM.phoneNumber) && void 0 !== SM ? SM : void 0,
              HM = null !== (jM = rM.photoURL) && void 0 !== jM ? jM : void 0,
              hM = null !== (aM = rM.tenantId) && void 0 !== aM ? aM : void 0,
              JM = null !== (PM = rM._redirectEventId) && void 0 !== PM ? PM : void 0,
              dM = null !== (nM = rM.createdAt) && void 0 !== nM ? nM : void 0,
              yM = null !== (QM = rM.lastLoginAt) && void 0 !== QM ? QM : void 0,
              {
                uid: lM,
                emailVerified: EM,
                isAnonymous: UM,
                providerData: GM,
                stsTokenManager: CM
              } = rM;
            wM(lM && CM, MM, "internal-error");
            const eM = rr.fromJSON(this.name, CM);
            wM("string" === typeof lM, MM, "internal-error"), ir(zM, MM.name), ir(LM, MM.name), wM("boolean" === typeof EM, MM, "internal-error"), wM("boolean" === typeof UM, MM, "internal-error"), ir(mM, MM.name), ir(HM, MM.name), ir(hM, MM.name), ir(JM, MM.name), ir(dM, MM.name), ir(yM, MM.name);
            const bM = new Or({
              uid: lM,
              auth: MM,
              email: LM,
              emailVerified: EM,
              displayName: zM,
              isAnonymous: UM,
              photoURL: HM,
              phoneNumber: mM,
              tenantId: hM,
              stsTokenManager: eM,
              createdAt: dM,
              lastLoginAt: yM
            });
            return GM && Array.isArray(GM) && (bM.providerData = GM.map((MM => Object.assign({}, MM)))), JM && (bM._redirectEventId = JM), bM
          }
          static async _fromIdTokenResponse(MM, rM) {
            let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const OM = new rr;
            OM.updateFromServerResponse(rM);
            const SM = new Or({
              uid: rM.localId,
              auth: MM,
              stsTokenManager: OM,
              isAnonymous: iM
            });
            return await cM(SM), SM
          }
        }
        const Sr = new Map;

        function jr(MM) {
          gM(MM instanceof Function, "Expected a class definition");
          let rM = Sr.get(MM);
          return rM ? (gM(rM instanceof MM, "Instance stored in cache mismatched with class"), rM) : (rM = new MM, Sr.set(MM, rM), rM)
        }
        class ar {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(MM, rM) {
            this.storage[MM] = rM
          }
          async _get(MM) {
            const rM = this.storage[MM];
            return void 0 === rM ? null : rM
          }
          async _remove(MM) {
            delete this.storage[MM]
          }
          _addListener(MM, rM) {}
          _removeListener(MM, rM) {}
        }
        ar.type = "NONE";
        const Pr = ar;

        function nr(MM, rM, iM) {
          return `firebase:${MM}:${rM}:${iM}`
        }
        class Qr {
          constructor(MM, rM, iM) {
            this.persistence = MM, this.auth = rM, this.userKey = iM;
            const {
              config: OM,
              name: SM
            } = this.auth;
            this.fullUserKey = nr(this.userKey, OM.apiKey, SM), this.fullPersistenceKey = nr("persistence", OM.apiKey, SM), this.boundEventHandler = rM._onStorageEvent.bind(rM), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(MM) {
            return this.persistence._set(this.fullUserKey, MM.toJSON())
          }
          async getCurrentUser() {
            const MM = await this.persistence._get(this.fullUserKey);
            return MM ? Or._fromJSON(this.auth, MM) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(MM) {
            if (this.persistence === MM) return;
            const rM = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = MM, rM ? this.setCurrentUser(rM) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(MM, rM) {
            let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!rM.length) return new Qr(jr(Pr), MM, iM);
            const OM = (await Promise.all(rM.map((async MM => {
              if (await MM._isAvailable()) return MM
            })))).filter((MM => MM));
            let SM = OM[0] || jr(Pr);
            const jM = nr(iM, MM.config.apiKey, MM.name);
            let aM = null;
            for (const QM of rM) try {
              const rM = await QM._get(jM);
              if (rM) {
                const iM = Or._fromJSON(MM, rM);
                QM !== SM && (aM = iM), SM = QM;
                break
              }
            } catch (nM) {}
            const PM = OM.filter((MM => MM._shouldAllowMigration));
            return SM._shouldAllowMigration && PM.length ? (SM = PM[0], aM && await SM._set(jM, aM.toJSON()), await Promise.all(rM.map((async MM => {
              if (MM !== SM) try {
                await MM._remove(jM)
              } catch (nM) {}
            }))), new Qr(SM, MM, iM)) : new Qr(SM, MM, iM)
          }
        }

        function zr(MM) {
          const rM = MM.toLowerCase();
          if (rM.includes("opera/") || rM.includes("opr/") || rM.includes("opios/")) return "Opera";
          if (hr(rM)) return "IEMobile";
          if (rM.includes("msie") || rM.includes("trident/")) return "IE";
          if (rM.includes("edge/")) return "Edge";
          if (Lr(rM)) return "Firefox";
          if (rM.includes("silk/")) return "Silk";
          if (dr(rM)) return "Blackberry";
          if (yr(rM)) return "Webos";
          if (mr(rM)) return "Safari";
          if ((rM.includes("chrome/") || Hr(rM)) && !rM.includes("edge/")) return "Chrome";
          if (Jr(rM)) return "Android";
          {
            const rM = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              iM = MM.match(rM);
            if (2 === (null === iM || void 0 === iM ? void 0 : iM.length)) return iM[1]
          }
          return "Other"
        }

        function Lr() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)();
          return /firefox\//i.test(MM)
        }

        function mr() {
          const MM = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)()).toLowerCase();
          return MM.includes("safari/") && !MM.includes("chrome/") && !MM.includes("crios/") && !MM.includes("android")
        }

        function Hr() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)();
          return /crios\//i.test(MM)
        }

        function hr() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)();
          return /iemobile/i.test(MM)
        }

        function Jr() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)();
          return /android/i.test(MM)
        }

        function dr() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)();
          return /blackberry/i.test(MM)
        }

        function yr() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)();
          return /webos/i.test(MM)
        }

        function lr() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)();
          return /iphone|ipad|ipod/i.test(MM) || /macintosh/i.test(MM) && /mobile/i.test(MM)
        }

        function Er() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)();
          return lr(MM) || Jr(MM) || yr(MM) || dr(MM) || /windows phone/i.test(MM) || hr(MM)
        }

        function Ur(MM) {
          let rM, iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (MM) {
            case "Browser":
              rM = zr((0, OM.P)());
              break;
            case "Worker":
              rM = `${zr((0,OM.P)())}-${MM}`;
              break;
            default:
              rM = MM
          }
          const jM = iM.length ? iM.join(",") : "FirebaseCore-web";
          return `${rM}/JsCore/${SM.g}/${jM}`
        }
        async function Gr(MM, rM) {
          return fM(MM, "GET", "/v2/recaptchaConfig", oM(MM, rM))
        }

        function Cr(MM) {
          return void 0 !== MM && void 0 !== MM.getResponse
        }

        function er(MM) {
          return void 0 !== MM && void 0 !== MM.enterprise
        }
        class br {
          constructor(MM) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === MM.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = MM.recaptchaKey.split("/")[3], this.emailPasswordEnabled = MM.recaptchaEnforcementState.some((MM => "EMAIL_PASSWORD_PROVIDER" === MM.provider && "OFF" !== MM.enforcementState))
          }
        }

        function wr(MM) {
          return new Promise(((rM, iM) => {
            const OM = document.createElement("script");
            OM.setAttribute("src", MM), OM.onload = rM, OM.onerror = MM => {
                const rM = GM("internal-error");
                rM.customData = MM, iM(rM)
              }, OM.type = "text/javascript", OM.charset = "UTF-8",
              function() {
                var MM, rM;
                return null !== (rM = null === (MM = document.getElementsByTagName("head")) || void 0 === MM ? void 0 : MM[0]) && void 0 !== rM ? rM : document
              }().appendChild(OM)
          }))
        }

        function tr(MM) {
          return `__${MM}${Math.floor(1e6*Math.random())}`
        }
        class gr {
          constructor(MM) {
            this.type = "recaptcha-enterprise", this.auth = Wr(MM)
          }
          async verify() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function iM(rM, iM, OM) {
              const SM = window.grecaptcha;
              er(SM) ? SM.enterprise.ready((() => {
                SM.enterprise.execute(rM, {
                  action: MM
                }).then((MM => {
                  iM(MM)
                })).catch((() => {
                  iM("NO_RECAPTCHA")
                }))
              })) : OM(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((MM, OM) => {
              (async function(MM) {
                if (!rM) {
                  if (null == MM.tenantId && null != MM._agentRecaptchaConfig) return MM._agentRecaptchaConfig.siteKey;
                  if (null != MM.tenantId && void 0 !== MM._tenantRecaptchaConfigs[MM.tenantId]) return MM._tenantRecaptchaConfigs[MM.tenantId].siteKey
                }
                return new Promise((async (rM, iM) => {
                  Gr(MM, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((OM => {
                    if (void 0 !== OM.recaptchaKey) {
                      const iM = new br(OM);
                      return null == MM.tenantId ? MM._agentRecaptchaConfig = iM : MM._tenantRecaptchaConfigs[MM.tenantId] = iM, rM(iM.siteKey)
                    }
                    iM(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((MM => {
                    iM(MM)
                  }))
                }))
              })(this.auth).then((SM => {
                if (!rM && er(window.grecaptcha)) iM(SM, MM, OM);
                else {
                  if ("undefined" === typeof window) return void OM(new Error("RecaptchaVerifier is only supported in browser"));
                  wr("https://www.google.com/recaptcha/enterprise.js?render=" + SM).then((() => {
                    iM(SM, MM, OM)
                  })).catch((MM => {
                    OM(MM)
                  }))
                }
              })).catch((MM => {
                OM(MM)
              }))
            }))
          }
        }
        async function ur(MM, rM, iM) {
          let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const SM = new gr(MM);
          let jM;
          try {
            jM = await SM.verify(iM)
          } catch (PM) {
            jM = await SM.verify(iM, !0)
          }
          const aM = Object.assign({}, rM);
          return OM ? Object.assign(aM, {
            captchaResp: jM
          }) : Object.assign(aM, {
            captchaResponse: jM
          }), Object.assign(aM, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(aM, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), aM
        }
        class Rr {
          constructor(MM) {
            this.auth = MM, this.queue = []
          }
          pushCallback(MM, rM) {
            const iM = rM => new Promise(((iM, OM) => {
              try {
                iM(MM(rM))
              } catch (SM) {
                OM(SM)
              }
            }));
            iM.onAbort = rM, this.queue.push(iM);
            const OM = this.queue.length - 1;
            return () => {
              this.queue[OM] = () => Promise.resolve()
            }
          }
          async runMiddleware(MM) {
            if (this.auth.currentUser === MM) return;
            const rM = [];
            try {
              for (const iM of this.queue) await iM(MM), iM.onAbort && rM.push(iM.onAbort)
            } catch (iM) {
              rM.reverse();
              for (const MM of rM) try {
                MM()
              } catch (OM) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === iM || void 0 === iM ? void 0 : iM.message
              })
            }
          }
        }
        class pr {
          constructor(MM, rM, iM, OM) {
            this.app = MM, this.heartbeatServiceProvider = rM, this.appCheckServiceProvider = iM, this.config = OM, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new sr(this), this.idTokenSubscription = new sr(this), this.beforeStateQueue = new Rr(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = dM, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = MM.name, this.clientVersion = OM.sdkClientVersion
          }
          _initializeWithPersistence(MM, rM) {
            return rM && (this._popupRedirectResolver = jr(rM)), this._initializationPromise = this.queue((async () => {
              var iM, OM;
              if (!this._deleted && (this.persistenceManager = await Qr.create(this, MM), !this._deleted)) {
                if (null === (iM = this._popupRedirectResolver) || void 0 === iM ? void 0 : iM._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (SM) {}
                await this.initializeCurrentUser(rM), this.lastNotifiedUid = (null === (OM = this.currentUser) || void 0 === OM ? void 0 : OM.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const MM = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || MM ? this.currentUser && MM && this.currentUser.uid === MM.uid ? (this._currentUser._assign(MM), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(MM, !0) : void 0
          }
          async initializeCurrentUser(MM) {
            var rM;
            const iM = await this.assertedPersistence.getCurrentUser();
            let OM = iM,
              SM = !1;
            if (MM && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const iM = null === (rM = this.redirectUser) || void 0 === rM ? void 0 : rM._redirectEventId,
                jM = null === OM || void 0 === OM ? void 0 : OM._redirectEventId,
                aM = await this.tryRedirectSignIn(MM);
              iM && iM !== jM || !(null === aM || void 0 === aM ? void 0 : aM.user) || (OM = aM.user, SM = !0)
            }
            if (!OM) return this.directlySetCurrentUser(null);
            if (!OM._redirectEventId) {
              if (SM) try {
                await this.beforeStateQueue.runMiddleware(OM)
              } catch (jM) {
                OM = iM, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(jM)))
              }
              return OM ? this.reloadAndSetCurrentUserOrClear(OM) : this.directlySetCurrentUser(null)
            }
            return wM(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === OM._redirectEventId ? this.directlySetCurrentUser(OM) : this.reloadAndSetCurrentUserOrClear(OM)
          }
          async tryRedirectSignIn(MM) {
            let rM = null;
            try {
              rM = await this._popupRedirectResolver._completeRedirectFn(this, MM, !0)
            } catch (iM) {
              await this._setRedirectUser(null)
            }
            return rM
          }
          async reloadAndSetCurrentUserOrClear(MM) {
            try {
              await cM(MM)
            } catch (rM) {
              if ("auth/network-request-failed" !== (null === rM || void 0 === rM ? void 0 : rM.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(MM)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const MM = navigator;
              return MM.languages && MM.languages[0] || MM.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(MM) {
            const rM = MM ? (0, OM.N)(MM) : null;
            return rM && wM(rM.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(rM && rM._clone(this))
          }
          async _updateCurrentUser(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return MM && wM(this.tenantId === MM.tenantId, this, "tenant-id-mismatch"), rM || await this.beforeStateQueue.runMiddleware(MM), this.queue((async () => {
              await this.directlySetCurrentUser(MM), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(MM) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(jr(MM))
            }))
          }
          async initializeRecaptchaConfig() {
            const MM = await Gr(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              rM = new br(MM);
            if (null == this.tenantId ? this._agentRecaptchaConfig = rM : this._tenantRecaptchaConfigs[this.tenantId] = rM, rM.emailPasswordEnabled) {
              new gr(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(MM) {
            this._errorFactory = new OM.h("auth", "Firebase", MM())
          }
          onAuthStateChanged(MM, rM, iM) {
            return this.registerStateListener(this.authStateSubscription, MM, rM, iM)
          }
          beforeAuthStateChanged(MM, rM) {
            return this.beforeStateQueue.pushCallback(MM, rM)
          }
          onIdTokenChanged(MM, rM, iM) {
            return this.registerStateListener(this.idTokenSubscription, MM, rM, iM)
          }
          toJSON() {
            var MM;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (MM = this._currentUser) || void 0 === MM ? void 0 : MM.toJSON()
            }
          }
          async _setRedirectUser(MM, rM) {
            const iM = await this.getOrInitRedirectPersistenceManager(rM);
            return null === MM ? iM.removeCurrentUser() : iM.setCurrentUser(MM)
          }
          async getOrInitRedirectPersistenceManager(MM) {
            if (!this.redirectPersistenceManager) {
              const rM = MM && jr(MM) || this._popupRedirectResolver;
              wM(rM, this, "argument-error"), this.redirectPersistenceManager = await Qr.create(this, [jr(rM._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(MM) {
            var rM, iM;
            return this._isInitialized && await this.queue((async () => {})), (null === (rM = this._currentUser) || void 0 === rM ? void 0 : rM._redirectEventId) === MM ? this._currentUser : (null === (iM = this.redirectUser) || void 0 === iM ? void 0 : iM._redirectEventId) === MM ? this.redirectUser : null
          }
          async _persistUserIfCurrent(MM) {
            if (MM === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(MM)))
          }
          _notifyListenersIfCurrent(MM) {
            MM === this.currentUser && this.notifyAuthListeners()
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
            var MM, rM;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const iM = null !== (rM = null === (MM = this.currentUser) || void 0 === MM ? void 0 : MM.uid) && void 0 !== rM ? rM : null;
            this.lastNotifiedUid !== iM && (this.lastNotifiedUid = iM, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(MM, rM, iM, OM) {
            if (this._deleted) return () => {};
            const SM = "function" === typeof rM ? rM : rM.next.bind(rM),
              jM = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return wM(jM, this, "internal-error"), jM.then((() => SM(this.currentUser))), "function" === typeof rM ? MM.addObserver(rM, iM, OM) : MM.addObserver(rM)
          }
          async directlySetCurrentUser(MM) {
            this.currentUser && this.currentUser !== MM && this._currentUser._stopProactiveRefresh(), MM && this.isProactiveRefreshEnabled && MM._startProactiveRefresh(), this.currentUser = MM, MM ? await this.assertedPersistence.setCurrentUser(MM) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(MM) {
            return this.operations = this.operations.then(MM, MM), this.operations
          }
          get assertedPersistence() {
            return wM(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(MM) {
            MM && !this.frameworks.includes(MM) && (this.frameworks.push(MM), this.frameworks.sort(), this.clientVersion = Ur(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var MM;
            const rM = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (rM["X-Firebase-gmpid"] = this.app.options.appId);
            const iM = await (null === (MM = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === MM ? void 0 : MM.getHeartbeatsHeader());
            iM && (rM["X-Firebase-Client"] = iM);
            const OM = await this._getAppCheckToken();
            return OM && (rM["X-Firebase-AppCheck"] = OM), rM
          }
          async _getAppCheckToken() {
            var MM;
            const rM = await (null === (MM = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === MM ? void 0 : MM.getToken());
            return (null === rM || void 0 === rM ? void 0 : rM.error) && function(MM) {
              if (lM.logLevel <= aM.d.WARN) {
                for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
                lM.warn(`Auth (${SM.g}): ${MM}`, ...iM)
              }
            }(`Error while retrieving App Check token: ${rM.error}`), null === rM || void 0 === rM ? void 0 : rM.token
          }
        }

        function Wr(MM) {
          return (0, OM.N)(MM)
        }
        class sr {
          constructor(MM) {
            this.auth = MM, this.observer = null, this.addObserver = (0, OM.y)((MM => this.observer = MM))
          }
          get next() {
            return wM(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function Dr(MM, rM) {
          const iM = (0, SM.x)(MM, "auth");
          if (iM.isInitialized()) {
            const MM = iM.getImmediate(),
              SM = iM.getOptions();
            if ((0, OM.C)(SM, null !== rM && void 0 !== rM ? rM : {})) return MM;
            UM(MM, "already-initialized")
          }
          return iM.initialize({
            options: rM
          })
        }

        function kr(MM, rM, iM) {
          const OM = Wr(MM);
          wM(OM._canInitEmulator, OM, "emulator-config-failed"), wM(/^https?:\/\//.test(rM), OM, "invalid-emulator-scheme");
          const SM = !!(null === iM || void 0 === iM ? void 0 : iM.disableWarnings),
            jM = Zr(rM),
            {
              host: aM,
              port: PM
            } = function(MM) {
              const rM = Zr(MM),
                iM = /(\/\/)?([^?#/]+)/.exec(MM.substr(rM.length));
              if (!iM) return {
                host: "",
                port: null
              };
              const OM = iM[2].split("@").pop() || "",
                SM = /^(\[[^\]]+\])(:|$)/.exec(OM);
              if (SM) {
                const MM = SM[1];
                return {
                  host: MM,
                  port: or(OM.substr(MM.length + 1))
                }
              } {
                const [MM, rM] = OM.split(":");
                return {
                  host: MM,
                  port: or(rM)
                }
              }
            }(rM),
            nM = null === PM ? "" : `:${PM}`;
          OM.config.emulator = {
            url: `${jM}//${aM}${nM}/`
          }, OM.settings.appVerificationDisabledForTesting = !0, OM.emulatorConfig = Object.freeze({
            host: aM,
            port: PM,
            protocol: jM.replace(":", ""),
            options: Object.freeze({
              disableWarnings: SM
            })
          }), SM || function() {
            function MM() {
              const MM = document.createElement("p"),
                rM = MM.style;
              MM.innerText = "Running in emulator mode. Do not use with production credentials.", rM.position = "fixed", rM.width = "100%", rM.backgroundColor = "#ffffff", rM.border = ".1em solid #000000", rM.color = "#b50000", rM.bottom = "0px", rM.left = "0px", rM.margin = "0px", rM.zIndex = "10000", rM.textAlign = "center", MM.classList.add("firebase-emulator-warning"), document.body.appendChild(MM)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", MM) : MM())
          }()
        }

        function Zr(MM) {
          const rM = MM.indexOf(":");
          return rM < 0 ? "" : MM.substr(0, rM + 1)
        }

        function or(MM) {
          if (!MM) return null;
          const rM = Number(MM);
          return isNaN(rM) ? null : rM
        }
        class fr {
          constructor(MM, rM) {
            this.providerId = MM, this.signInMethod = rM
          }
          toJSON() {
            return tM("not implemented")
          }
          _getIdTokenResponse(MM) {
            return tM("not implemented")
          }
          _linkToIdToken(MM, rM) {
            return tM("not implemented")
          }
          _getReauthenticationResolver(MM) {
            return tM("not implemented")
          }
        }
        async function Yr(MM, rM) {
          return fM(MM, "POST", "/v1/accounts:resetPassword", oM(MM, rM))
        }
        async function Nr(MM, rM) {
          return fM(MM, "POST", "/v1/accounts:update", rM)
        }
        async function Ar(MM, rM) {
          return NM(MM, "POST", "/v1/accounts:signInWithPassword", oM(MM, rM))
        }
        async function xr(MM, rM) {
          return fM(MM, "POST", "/v1/accounts:sendOobCode", oM(MM, rM))
        }
        async function vr(MM, rM) {
          return xr(MM, rM)
        }
        async function Fr(MM, rM) {
          return xr(MM, rM)
        }
        class Br extends fr {
          constructor(MM, rM, iM) {
            let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", iM), this._email = MM, this._password = rM, this._tenantId = OM
          }
          static _fromEmailAndPassword(MM, rM) {
            return new Br(MM, rM, "password")
          }
          static _fromEmailAndCode(MM, rM) {
            return new Br(MM, rM, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(MM) {
            const rM = "string" === typeof MM ? JSON.parse(MM) : MM;
            if ((null === rM || void 0 === rM ? void 0 : rM.email) && (null === rM || void 0 === rM ? void 0 : rM.password)) {
              if ("password" === rM.signInMethod) return this._fromEmailAndPassword(rM.email, rM.password);
              if ("emailLink" === rM.signInMethod) return this._fromEmailAndCode(rM.email, rM.password, rM.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(MM) {
            var rM;
            switch (this.signInMethod) {
              case "password":
                const iM = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (rM = MM._getRecaptchaConfig()) || void 0 === rM ? void 0 : rM.emailPasswordEnabled) {
                  const rM = await ur(MM, iM, "signInWithPassword");
                  return Ar(MM, rM)
                }
                return Ar(MM, iM).catch((async rM => {
                  if ("auth/missing-recaptcha-token" === rM.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const rM = await ur(MM, iM, "signInWithPassword");
                    return Ar(MM, rM)
                  }
                  return Promise.reject(rM)
                }));
              case "emailLink":
                return async function(MM, rM) {
                  return NM(MM, "POST", "/v1/accounts:signInWithEmailLink", oM(MM, rM))
                }(MM, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                UM(MM, "internal-error")
            }
          }
          async _linkToIdToken(MM, rM) {
            switch (this.signInMethod) {
              case "password":
                return Nr(MM, {
                  idToken: rM,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(MM, rM) {
                  return NM(MM, "POST", "/v1/accounts:signInWithEmailLink", oM(MM, rM))
                }(MM, {
                  idToken: rM,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                UM(MM, "internal-error")
            }
          }
          _getReauthenticationResolver(MM) {
            return this._getIdTokenResponse(MM)
          }
        }
        async function Xr(MM, rM) {
          return NM(MM, "POST", "/v1/accounts:signInWithIdp", oM(MM, rM))
        }
        class Ir extends fr {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(MM) {
            const rM = new Ir(MM.providerId, MM.signInMethod);
            return MM.idToken || MM.accessToken ? (MM.idToken && (rM.idToken = MM.idToken), MM.accessToken && (rM.accessToken = MM.accessToken), MM.nonce && !MM.pendingToken && (rM.nonce = MM.nonce), MM.pendingToken && (rM.pendingToken = MM.pendingToken)) : MM.oauthToken && MM.oauthTokenSecret ? (rM.accessToken = MM.oauthToken, rM.secret = MM.oauthTokenSecret) : UM("argument-error"), rM
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
          static fromJSON(MM) {
            const rM = "string" === typeof MM ? JSON.parse(MM) : MM,
              {
                providerId: iM,
                signInMethod: OM
              } = rM,
              SM = jM(rM, ["providerId", "signInMethod"]);
            if (!iM || !OM) return null;
            const aM = new Ir(iM, OM);
            return aM.idToken = SM.idToken || void 0, aM.accessToken = SM.accessToken || void 0, aM.secret = SM.secret, aM.nonce = SM.nonce, aM.pendingToken = SM.pendingToken || null, aM
          }
          _getIdTokenResponse(MM) {
            return Xr(MM, this.buildRequest())
          }
          _linkToIdToken(MM, rM) {
            const iM = this.buildRequest();
            return iM.idToken = rM, Xr(MM, iM)
          }
          _getReauthenticationResolver(MM) {
            const rM = this.buildRequest();
            return rM.autoCreate = !1, Xr(MM, rM)
          }
          buildRequest() {
            const MM = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) MM.pendingToken = this.pendingToken;
            else {
              const rM = {};
              this.idToken && (rM.id_token = this.idToken), this.accessToken && (rM.access_token = this.accessToken), this.secret && (rM.oauth_token_secret = this.secret), rM.providerId = this.providerId, this.nonce && !this.pendingToken && (rM.nonce = this.nonce), MM.postBody = (0, OM.ib)(rM)
            }
            return MM
          }
        }
        const Kr = {
          USER_NOT_FOUND: "user-not-found"
        };
        class qr extends fr {
          constructor(MM) {
            super("phone", "phone"), this.params = MM
          }
          static _fromVerification(MM, rM) {
            return new qr({
              verificationId: MM,
              verificationCode: rM
            })
          }
          static _fromTokenResponse(MM, rM) {
            return new qr({
              phoneNumber: MM,
              temporaryProof: rM
            })
          }
          _getIdTokenResponse(MM) {
            return async function(MM, rM) {
              return NM(MM, "POST", "/v1/accounts:signInWithPhoneNumber", oM(MM, rM))
            }(MM, this._makeVerificationRequest())
          }
          _linkToIdToken(MM, rM) {
            return async function(MM, rM) {
              const iM = await NM(MM, "POST", "/v1/accounts:signInWithPhoneNumber", oM(MM, rM));
              if (iM.temporaryProof) throw vM(MM, "account-exists-with-different-credential", iM);
              return iM
            }(MM, Object.assign({
              idToken: rM
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(MM) {
            return async function(MM, rM) {
              return NM(MM, "POST", "/v1/accounts:signInWithPhoneNumber", oM(MM, Object.assign(Object.assign({}, rM), {
                operation: "REAUTH"
              })), Kr)
            }(MM, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: MM,
              phoneNumber: rM,
              verificationId: iM,
              verificationCode: OM
            } = this.params;
            return MM && rM ? {
              temporaryProof: MM,
              phoneNumber: rM
            } : {
              sessionInfo: iM,
              code: OM
            }
          }
          toJSON() {
            const MM = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (MM.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (MM.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (MM.verificationCode = this.params.verificationCode), this.params.verificationId && (MM.verificationId = this.params.verificationId), MM
          }
          static fromJSON(MM) {
            "string" === typeof MM && (MM = JSON.parse(MM));
            const {
              verificationId: rM,
              verificationCode: iM,
              phoneNumber: OM,
              temporaryProof: SM
            } = MM;
            return iM || rM || OM || SM ? new qr({
              verificationId: rM,
              verificationCode: iM,
              phoneNumber: OM,
              temporaryProof: SM
            }) : null
          }
        }
        class Tr {
          constructor(MM) {
            var rM, iM, SM, jM, aM, PM;
            const nM = (0, OM.gb)((0, OM.D)(MM)),
              QM = null !== (rM = nM.apiKey) && void 0 !== rM ? rM : null,
              zM = null !== (iM = nM.oobCode) && void 0 !== iM ? iM : null,
              LM = function(MM) {
                switch (MM) {
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
              }(null !== (SM = nM.mode) && void 0 !== SM ? SM : null);
            wM(QM && zM && LM, "argument-error"), this.apiKey = QM, this.operation = LM, this.code = zM, this.continueUrl = null !== (jM = nM.continueUrl) && void 0 !== jM ? jM : null, this.languageCode = null !== (aM = nM.languageCode) && void 0 !== aM ? aM : null, this.tenantId = null !== (PM = nM.tenantId) && void 0 !== PM ? PM : null
          }
          static parseLink(MM) {
            const rM = function(MM) {
              const rM = (0, OM.gb)((0, OM.D)(MM)).link,
                iM = rM ? (0, OM.gb)((0, OM.D)(rM)).deep_link_id : null,
                SM = (0, OM.gb)((0, OM.D)(MM)).deep_link_id;
              return (SM ? (0, OM.gb)((0, OM.D)(SM)).link : null) || SM || iM || rM || MM
            }(MM);
            try {
              return new Tr(rM)
            } catch (iM) {
              return null
            }
          }
        }

        function Vr(MM) {
          return Tr.parseLink(MM)
        }
        class cr {
          constructor() {
            this.providerId = cr.PROVIDER_ID
          }
          static credential(MM, rM) {
            return Br._fromEmailAndPassword(MM, rM)
          }
          static credentialWithLink(MM, rM) {
            const iM = Tr.parseLink(rM);
            return wM(iM, "argument-error"), Br._fromEmailAndCode(MM, iM.code, iM.tenantId)
          }
        }
        cr.PROVIDER_ID = "password", cr.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", cr.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class Mi {
          constructor(MM) {
            this.providerId = MM, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(MM) {
            this.defaultLanguageCode = MM
          }
          setCustomParameters(MM) {
            return this.customParameters = MM, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class ri extends Mi {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(MM) {
            return this.scopes.includes(MM) || this.scopes.push(MM), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class ii extends ri {
          static credentialFromJSON(MM) {
            const rM = "string" === typeof MM ? JSON.parse(MM) : MM;
            return wM("providerId" in rM && "signInMethod" in rM, "argument-error"), Ir._fromParams(rM)
          }
          credential(MM) {
            return this._credential(Object.assign(Object.assign({}, MM), {
              nonce: MM.rawNonce
            }))
          }
          _credential(MM) {
            return wM(MM.idToken || MM.accessToken, "argument-error"), Ir._fromParams(Object.assign(Object.assign({}, MM), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(MM) {
            return ii.oauthCredentialFromTaggedObject(MM)
          }
          static credentialFromError(MM) {
            return ii.oauthCredentialFromTaggedObject(MM.customData || {})
          }
          static oauthCredentialFromTaggedObject(MM) {
            let {
              _tokenResponse: rM
            } = MM;
            if (!rM) return null;
            const {
              oauthIdToken: iM,
              oauthAccessToken: OM,
              oauthTokenSecret: SM,
              pendingToken: jM,
              nonce: aM,
              providerId: PM
            } = rM;
            if (!OM && !SM && !iM && !jM) return null;
            if (!PM) return null;
            try {
              return new ii(PM)._credential({
                idToken: iM,
                accessToken: OM,
                nonce: aM,
                pendingToken: jM
              })
            } catch (nM) {
              return null
            }
          }
        }
        class Oi extends ri {
          constructor() {
            super("facebook.com")
          }
          static credential(MM) {
            return Ir._fromParams({
              providerId: Oi.PROVIDER_ID,
              signInMethod: Oi.FACEBOOK_SIGN_IN_METHOD,
              accessToken: MM
            })
          }
          static credentialFromResult(MM) {
            return Oi.credentialFromTaggedObject(MM)
          }
          static credentialFromError(MM) {
            return Oi.credentialFromTaggedObject(MM.customData || {})
          }
          static credentialFromTaggedObject(MM) {
            let {
              _tokenResponse: rM
            } = MM;
            if (!rM || !("oauthAccessToken" in rM)) return null;
            if (!rM.oauthAccessToken) return null;
            try {
              return Oi.credential(rM.oauthAccessToken)
            } catch (iM) {
              return null
            }
          }
        }
        Oi.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Oi.PROVIDER_ID = "facebook.com";
        class Si extends ri {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(MM, rM) {
            return Ir._fromParams({
              providerId: Si.PROVIDER_ID,
              signInMethod: Si.GOOGLE_SIGN_IN_METHOD,
              idToken: MM,
              accessToken: rM
            })
          }
          static credentialFromResult(MM) {
            return Si.credentialFromTaggedObject(MM)
          }
          static credentialFromError(MM) {
            return Si.credentialFromTaggedObject(MM.customData || {})
          }
          static credentialFromTaggedObject(MM) {
            let {
              _tokenResponse: rM
            } = MM;
            if (!rM) return null;
            const {
              oauthIdToken: iM,
              oauthAccessToken: OM
            } = rM;
            if (!iM && !OM) return null;
            try {
              return Si.credential(iM, OM)
            } catch (SM) {
              return null
            }
          }
        }
        Si.GOOGLE_SIGN_IN_METHOD = "google.com", Si.PROVIDER_ID = "google.com";
        class ji extends ri {
          constructor() {
            super("github.com")
          }
          static credential(MM) {
            return Ir._fromParams({
              providerId: ji.PROVIDER_ID,
              signInMethod: ji.GITHUB_SIGN_IN_METHOD,
              accessToken: MM
            })
          }
          static credentialFromResult(MM) {
            return ji.credentialFromTaggedObject(MM)
          }
          static credentialFromError(MM) {
            return ji.credentialFromTaggedObject(MM.customData || {})
          }
          static credentialFromTaggedObject(MM) {
            let {
              _tokenResponse: rM
            } = MM;
            if (!rM || !("oauthAccessToken" in rM)) return null;
            if (!rM.oauthAccessToken) return null;
            try {
              return ji.credential(rM.oauthAccessToken)
            } catch (iM) {
              return null
            }
          }
        }
        ji.GITHUB_SIGN_IN_METHOD = "github.com", ji.PROVIDER_ID = "github.com";
        class ai extends fr {
          constructor(MM, rM) {
            super(MM, MM), this.pendingToken = rM
          }
          _getIdTokenResponse(MM) {
            return Xr(MM, this.buildRequest())
          }
          _linkToIdToken(MM, rM) {
            const iM = this.buildRequest();
            return iM.idToken = rM, Xr(MM, iM)
          }
          _getReauthenticationResolver(MM) {
            const rM = this.buildRequest();
            return rM.autoCreate = !1, Xr(MM, rM)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(MM) {
            const rM = "string" === typeof MM ? JSON.parse(MM) : MM,
              {
                providerId: iM,
                signInMethod: OM,
                pendingToken: SM
              } = rM;
            return iM && OM && SM && iM === OM ? new ai(iM, SM) : null
          }
          static _create(MM, rM) {
            return new ai(MM, rM)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class Pi extends Mi {
          constructor(MM) {
            wM(MM.startsWith("saml."), "argument-error"), super(MM)
          }
          static credentialFromResult(MM) {
            return Pi.samlCredentialFromTaggedObject(MM)
          }
          static credentialFromError(MM) {
            return Pi.samlCredentialFromTaggedObject(MM.customData || {})
          }
          static credentialFromJSON(MM) {
            const rM = ai.fromJSON(MM);
            return wM(rM, "argument-error"), rM
          }
          static samlCredentialFromTaggedObject(MM) {
            let {
              _tokenResponse: rM
            } = MM;
            if (!rM) return null;
            const {
              pendingToken: iM,
              providerId: OM
            } = rM;
            if (!iM || !OM) return null;
            try {
              return ai._create(OM, iM)
            } catch (SM) {
              return null
            }
          }
        }
        class ni extends ri {
          constructor() {
            super("twitter.com")
          }
          static credential(MM, rM) {
            return Ir._fromParams({
              providerId: ni.PROVIDER_ID,
              signInMethod: ni.TWITTER_SIGN_IN_METHOD,
              oauthToken: MM,
              oauthTokenSecret: rM
            })
          }
          static credentialFromResult(MM) {
            return ni.credentialFromTaggedObject(MM)
          }
          static credentialFromError(MM) {
            return ni.credentialFromTaggedObject(MM.customData || {})
          }
          static credentialFromTaggedObject(MM) {
            let {
              _tokenResponse: rM
            } = MM;
            if (!rM) return null;
            const {
              oauthAccessToken: iM,
              oauthTokenSecret: OM
            } = rM;
            if (!iM || !OM) return null;
            try {
              return ni.credential(iM, OM)
            } catch (SM) {
              return null
            }
          }
        }
        async function Qi(MM, rM) {
          return NM(MM, "POST", "/v1/accounts:signUp", oM(MM, rM))
        }
        ni.TWITTER_SIGN_IN_METHOD = "twitter.com", ni.PROVIDER_ID = "twitter.com";
        class zi {
          constructor(MM) {
            this.user = MM.user, this.providerId = MM.providerId, this._tokenResponse = MM._tokenResponse, this.operationType = MM.operationType
          }
          static async _fromIdTokenResponse(MM, rM, iM) {
            let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const SM = await Or._fromIdTokenResponse(MM, iM, OM),
              jM = Li(iM);
            return new zi({
              user: SM,
              providerId: jM,
              _tokenResponse: iM,
              operationType: rM
            })
          }
          static async _forOperation(MM, rM, iM) {
            await MM._updateTokensIfNecessary(iM, !0);
            const OM = Li(iM);
            return new zi({
              user: MM,
              providerId: OM,
              _tokenResponse: iM,
              operationType: rM
            })
          }
        }

        function Li(MM) {
          return MM.providerId ? MM.providerId : "phoneNumber" in MM ? "phone" : null
        }
        async function mi(MM) {
          var rM;
          const iM = Wr(MM);
          if (await iM._initializationPromise, null === (rM = iM.currentUser) || void 0 === rM ? void 0 : rM.isAnonymous) return new zi({
            user: iM.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const OM = await Qi(iM, {
              returnSecureToken: !0
            }),
            SM = await zi._fromIdTokenResponse(iM, "signIn", OM, !0);
          return await iM._updateCurrentUser(SM.user), SM
        }
        class Hi extends OM.j {
          constructor(MM, rM, iM, OM) {
            var SM;
            super(rM.code, rM.message), this.operationType = iM, this.user = OM, Object.setPrototypeOf(this, Hi.prototype), this.customData = {
              appName: MM.name,
              tenantId: null !== (SM = MM.tenantId) && void 0 !== SM ? SM : void 0,
              _serverResponse: rM.customData._serverResponse,
              operationType: iM
            }
          }
          static _fromErrorAndOperation(MM, rM, iM, OM) {
            return new Hi(MM, rM, iM, OM)
          }
        }

        function Ji(MM, rM, iM, OM) {
          return ("reauthenticate" === rM ? iM._getReauthenticationResolver(MM) : iM._getIdTokenResponse(MM)).catch((iM => {
            if ("auth/multi-factor-auth-required" === iM.code) throw Hi._fromErrorAndOperation(MM, iM, rM, OM);
            throw iM
          }))
        }

        function di(MM) {
          return new Set(MM.map((MM => {
            let {
              providerId: rM
            } = MM;
            return rM
          })).filter((MM => !!MM)))
        }
        async function yi(MM, rM) {
          const iM = (0, OM.N)(MM);
          await Ei(!0, iM, rM);
          const {
            providerUserInfo: SM
          } = await async function(MM, rM) {
            return fM(MM, "POST", "/v1/accounts:update", rM)
          }(iM.auth, {
            idToken: await iM.getIdToken(),
            deleteProvider: [rM]
          }), jM = di(SM || []);
          return iM.providerData = iM.providerData.filter((MM => jM.has(MM.providerId))), jM.has("phone") || (iM.phoneNumber = null), await iM.auth._persistUserIfCurrent(iM), iM
        }
        async function li(MM, rM) {
          let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const OM = await qM(MM, rM._linkToIdToken(MM.auth, await MM.getIdToken()), iM);
          return zi._forOperation(MM, "link", OM)
        }
        async function Ei(MM, rM, iM) {
          await cM(rM);
          const OM = !1 === MM ? "provider-already-linked" : "no-such-provider";
          wM(di(rM.providerData).has(iM) === MM, rM.auth, OM)
        }
        async function Ui(MM, rM) {
          let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: OM
          } = MM, SM = "reauthenticate";
          try {
            const jM = await qM(MM, Ji(OM, SM, rM, MM), iM);
            wM(jM.idToken, OM, "internal-error");
            const aM = KM(jM.idToken);
            wM(aM, OM, "internal-error");
            const {
              sub: PM
            } = aM;
            return wM(MM.uid === PM, OM, "user-mismatch"), zi._forOperation(MM, SM, jM)
          } catch (jM) {
            throw "auth/user-not-found" === (null === jM || void 0 === jM ? void 0 : jM.code) && UM(OM, "user-mismatch"), jM
          }
        }
        async function Gi(MM, rM) {
          let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const OM = "signIn",
            SM = await Ji(MM, OM, rM),
            jM = await zi._fromIdTokenResponse(MM, OM, SM);
          return iM || await MM._updateCurrentUser(jM.user), jM
        }
        async function Ci(MM, rM) {
          return Gi(Wr(MM), rM)
        }
        async function ei(MM, rM) {
          const iM = (0, OM.N)(MM);
          return await Ei(!1, iM, rM.providerId), li(iM, rM)
        }
        async function bi(MM, rM) {
          return Ui((0, OM.N)(MM), rM)
        }
        async function wi(MM, rM) {
          const iM = Wr(MM),
            OM = await async function(MM, rM) {
              return NM(MM, "POST", "/v1/accounts:signInWithCustomToken", oM(MM, rM))
            }(iM, {
              token: rM,
              returnSecureToken: !0
            }), SM = await zi._fromIdTokenResponse(iM, "signIn", OM);
          return await iM._updateCurrentUser(SM.user), SM
        }
        class ti {
          constructor(MM, rM) {
            this.factorId = MM, this.uid = rM.mfaEnrollmentId, this.enrollmentTime = new Date(rM.enrolledAt).toUTCString(), this.displayName = rM.displayName
          }
          static _fromServerResponse(MM, rM) {
            return "phoneInfo" in rM ? gi._fromServerResponse(MM, rM) : "totpInfo" in rM ? ui._fromServerResponse(MM, rM) : UM(MM, "internal-error")
          }
        }
        class gi extends ti {
          constructor(MM) {
            super("phone", MM), this.phoneNumber = MM.phoneInfo
          }
          static _fromServerResponse(MM, rM) {
            return new gi(rM)
          }
        }
        class ui extends ti {
          constructor(MM) {
            super("totp", MM)
          }
          static _fromServerResponse(MM, rM) {
            return new ui(rM)
          }
        }

        function Ri(MM, rM, iM) {
          var OM;
          wM((null === (OM = iM.url) || void 0 === OM ? void 0 : OM.length) > 0, MM, "invalid-continue-uri"), wM("undefined" === typeof iM.dynamicLinkDomain || iM.dynamicLinkDomain.length > 0, MM, "invalid-dynamic-link-domain"), rM.continueUrl = iM.url, rM.dynamicLinkDomain = iM.dynamicLinkDomain, rM.canHandleCodeInApp = iM.handleCodeInApp, iM.iOS && (wM(iM.iOS.bundleId.length > 0, MM, "missing-ios-bundle-id"), rM.iOSBundleId = iM.iOS.bundleId), iM.android && (wM(iM.android.packageName.length > 0, MM, "missing-android-pkg-name"), rM.androidInstallApp = iM.android.installApp, rM.androidMinimumVersionCode = iM.android.minimumVersion, rM.androidPackageName = iM.android.packageName)
        }
        async function Wi(MM, rM, iM) {
          var OM;
          const SM = Wr(MM),
            jM = {
              requestType: "PASSWORD_RESET",
              email: rM,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (OM = SM._getRecaptchaConfig()) || void 0 === OM ? void 0 : OM.emailPasswordEnabled) {
            const MM = await ur(SM, jM, "getOobCode", !0);
            iM && Ri(SM, MM, iM), await vr(SM, MM)
          } else iM && Ri(SM, jM, iM), await vr(SM, jM).catch((async MM => {
            if ("auth/missing-recaptcha-token" !== MM.code) return Promise.reject(MM);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const MM = await ur(SM, jM, "getOobCode", !0);
              iM && Ri(SM, MM, iM), await vr(SM, MM)
            }
          }))
        }
        async function si(MM, rM, iM) {
          await Yr((0, OM.N)(MM), {
            oobCode: rM,
            newPassword: iM
          })
        }
        async function Di(MM, rM) {
          await async function(MM, rM) {
            return fM(MM, "POST", "/v1/accounts:update", oM(MM, rM))
          }((0, OM.N)(MM), {
            oobCode: rM
          })
        }
        async function ki(MM, rM) {
          const iM = (0, OM.N)(MM),
            SM = await Yr(iM, {
              oobCode: rM
            }),
            jM = SM.requestType;
          switch (wM(jM, iM, "internal-error"), jM) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              wM(SM.newEmail, iM, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              wM(SM.mfaInfo, iM, "internal-error");
            default:
              wM(SM.email, iM, "internal-error")
          }
          let aM = null;
          return SM.mfaInfo && (aM = ti._fromServerResponse(Wr(iM), SM.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === SM.requestType ? SM.newEmail : SM.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === SM.requestType ? SM.email : SM.newEmail) || null,
              multiFactorInfo: aM
            },
            operation: jM
          }
        }
        async function Zi(MM, rM) {
          const {
            data: iM
          } = await ki((0, OM.N)(MM), rM);
          return iM.email
        }
        async function oi(MM, rM, iM) {
          var OM;
          const SM = Wr(MM),
            jM = {
              returnSecureToken: !0,
              email: rM,
              password: iM,
              clientType: "CLIENT_TYPE_WEB"
            };
          let aM;
          if (null === (OM = SM._getRecaptchaConfig()) || void 0 === OM ? void 0 : OM.emailPasswordEnabled) {
            const MM = await ur(SM, jM, "signUpPassword");
            aM = Qi(SM, MM)
          } else aM = Qi(SM, jM).catch((async MM => {
            if ("auth/missing-recaptcha-token" === MM.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const MM = await ur(SM, jM, "signUpPassword");
              return Qi(SM, MM)
            }
            return Promise.reject(MM)
          }));
          const PM = await aM.catch((MM => Promise.reject(MM))),
            nM = await zi._fromIdTokenResponse(SM, "signIn", PM);
          return await SM._updateCurrentUser(nM.user), nM
        }

        function fi(MM, rM, iM) {
          return Ci((0, OM.N)(MM), cr.credential(rM, iM))
        }
        async function Yi(MM, rM, iM) {
          var OM;
          const SM = Wr(MM),
            jM = {
              requestType: "EMAIL_SIGNIN",
              email: rM,
              clientType: "CLIENT_TYPE_WEB"
            };

          function aM(MM, rM) {
            wM(rM.handleCodeInApp, SM, "argument-error"), rM && Ri(SM, MM, rM)
          }
          if (null === (OM = SM._getRecaptchaConfig()) || void 0 === OM ? void 0 : OM.emailPasswordEnabled) {
            const MM = await ur(SM, jM, "getOobCode", !0);
            aM(MM, iM), await Fr(SM, MM)
          } else aM(jM, iM), await Fr(SM, jM).catch((async MM => {
            if ("auth/missing-recaptcha-token" !== MM.code) return Promise.reject(MM);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const MM = await ur(SM, jM, "getOobCode", !0);
              aM(MM, iM), await Fr(SM, MM)
            }
          }))
        }

        function Ni(MM, rM) {
          const iM = Tr.parseLink(rM);
          return "EMAIL_SIGNIN" === (null === iM || void 0 === iM ? void 0 : iM.operation)
        }
        async function Ai(MM, rM, iM) {
          const SM = (0, OM.N)(MM),
            jM = cr.credentialWithLink(rM, iM || uM());
          return wM(jM._tenantId === (SM.tenantId || null), SM, "tenant-id-mismatch"), Ci(SM, jM)
        }
        async function xi(MM, rM) {
          const iM = {
              identifier: rM,
              continueUri: RM() ? uM() : "http://localhost"
            },
            {
              signinMethods: SM
            } = await async function(MM, rM) {
              return fM(MM, "POST", "/v1/accounts:createAuthUri", oM(MM, rM))
            }((0, OM.N)(MM), iM);
          return SM || []
        }
        async function vi(MM, rM) {
          const iM = (0, OM.N)(MM),
            SM = {
              requestType: "VERIFY_EMAIL",
              idToken: await MM.getIdToken()
            };
          rM && Ri(iM.auth, SM, rM);
          const {
            email: jM
          } = await async function(MM, rM) {
            return xr(MM, rM)
          }(iM.auth, SM);
          jM !== MM.email && await MM.reload()
        }
        async function Fi(MM, rM, iM) {
          const SM = (0, OM.N)(MM),
            jM = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await MM.getIdToken(),
              newEmail: rM
            };
          iM && Ri(SM.auth, jM, iM);
          const {
            email: aM
          } = await async function(MM, rM) {
            return xr(MM, rM)
          }(SM.auth, jM);
          aM !== MM.email && await MM.reload()
        }
        async function Bi(MM, rM) {
          let {
            displayName: iM,
            photoURL: SM
          } = rM;
          if (void 0 === iM && void 0 === SM) return;
          const jM = (0, OM.N)(MM),
            aM = {
              idToken: await jM.getIdToken(),
              displayName: iM,
              photoUrl: SM,
              returnSecureToken: !0
            },
            PM = await qM(jM, async function(MM, rM) {
              return fM(MM, "POST", "/v1/accounts:update", rM)
            }(jM.auth, aM));
          jM.displayName = PM.displayName || null, jM.photoURL = PM.photoUrl || null;
          const nM = jM.providerData.find((MM => {
            let {
              providerId: rM
            } = MM;
            return "password" === rM
          }));
          nM && (nM.displayName = jM.displayName, nM.photoURL = jM.photoURL), await jM._updateTokensIfNecessary(PM)
        }

        function Xi(MM, rM) {
          return Ki((0, OM.N)(MM), rM, null)
        }

        function Ii(MM, rM) {
          return Ki((0, OM.N)(MM), null, rM)
        }
        async function Ki(MM, rM, iM) {
          const {
            auth: OM
          } = MM, SM = {
            idToken: await MM.getIdToken(),
            returnSecureToken: !0
          };
          rM && (SM.email = rM), iM && (SM.password = iM);
          const jM = await qM(MM, Nr(OM, SM));
          await MM._updateTokensIfNecessary(jM, !0)
        }
        class qi {
          constructor(MM, rM) {
            let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = MM, this.providerId = rM, this.profile = iM
          }
        }
        class Ti extends qi {
          constructor(MM, rM, iM, OM) {
            super(MM, rM, iM), this.username = OM
          }
        }
        class Vi extends qi {
          constructor(MM, rM) {
            super(MM, "facebook.com", rM)
          }
        }
        class ci extends Ti {
          constructor(MM, rM) {
            super(MM, "github.com", rM, "string" === typeof(null === rM || void 0 === rM ? void 0 : rM.login) ? null === rM || void 0 === rM ? void 0 : rM.login : null)
          }
        }
        class MO extends qi {
          constructor(MM, rM) {
            super(MM, "google.com", rM)
          }
        }
        class rO extends Ti {
          constructor(MM, rM, iM) {
            super(MM, "twitter.com", rM, iM)
          }
        }

        function iO(MM) {
          const {
            user: rM,
            _tokenResponse: iM
          } = MM;
          return rM.isAnonymous && !iM ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(MM) {
            var rM, iM;
            if (!MM) return null;
            const {
              providerId: OM
            } = MM, SM = MM.rawUserInfo ? JSON.parse(MM.rawUserInfo) : {}, jM = MM.isNewUser || "identitytoolkit#SignupNewUserResponse" === MM.kind;
            if (!OM && (null === MM || void 0 === MM ? void 0 : MM.idToken)) {
              const OM = null === (iM = null === (rM = KM(MM.idToken)) || void 0 === rM ? void 0 : rM.firebase) || void 0 === iM ? void 0 : iM.sign_in_provider;
              if (OM) return new qi(jM, "anonymous" !== OM && "custom" !== OM ? OM : null)
            }
            if (!OM) return null;
            switch (OM) {
              case "facebook.com":
                return new Vi(jM, SM);
              case "github.com":
                return new ci(jM, SM);
              case "google.com":
                return new MO(jM, SM);
              case "twitter.com":
                return new rO(jM, SM, MM.screenName || null);
              case "custom":
              case "anonymous":
                return new qi(jM, null);
              default:
                return new qi(jM, OM, SM)
            }
          }(iM)
        }

        function OO(MM, rM) {
          return (0, OM.N)(MM).setPersistence(rM)
        }

        function SO(MM) {
          return Wr(MM).initializeRecaptchaConfig()
        }

        function jO(MM, rM, iM, SM) {
          return (0, OM.N)(MM).onIdTokenChanged(rM, iM, SM)
        }

        function aO(MM, rM, iM) {
          return (0, OM.N)(MM).beforeAuthStateChanged(rM, iM)
        }

        function PO(MM, rM, iM, SM) {
          return (0, OM.N)(MM).onAuthStateChanged(rM, iM, SM)
        }

        function nO(MM) {
          (0, OM.N)(MM).useDeviceLanguage()
        }

        function QO(MM, rM) {
          return (0, OM.N)(MM).updateCurrentUser(rM)
        }

        function zO(MM) {
          return (0, OM.N)(MM).signOut()
        }
        async function LO(MM) {
          return (0, OM.N)(MM).delete()
        }
        class mO {
          constructor(MM, rM, iM) {
            this.type = MM, this.credential = rM, this.auth = iM
          }
          static _fromIdtoken(MM, rM) {
            return new mO("enroll", MM, rM)
          }
          static _fromMfaPendingCredential(MM) {
            return new mO("signin", MM)
          }
          toJSON() {
            const MM = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [MM]: this.credential
              }
            }
          }
          static fromJSON(MM) {
            var rM, iM;
            if (null === MM || void 0 === MM ? void 0 : MM.multiFactorSession) {
              if (null === (rM = MM.multiFactorSession) || void 0 === rM ? void 0 : rM.pendingCredential) return mO._fromMfaPendingCredential(MM.multiFactorSession.pendingCredential);
              if (null === (iM = MM.multiFactorSession) || void 0 === iM ? void 0 : iM.idToken) return mO._fromIdtoken(MM.multiFactorSession.idToken)
            }
            return null
          }
        }
        class HO {
          constructor(MM, rM, iM) {
            this.session = MM, this.hints = rM, this.signInResolver = iM
          }
          static _fromError(MM, rM) {
            const iM = Wr(MM),
              OM = rM.customData._serverResponse,
              SM = (OM.mfaInfo || []).map((MM => ti._fromServerResponse(iM, MM)));
            wM(OM.mfaPendingCredential, iM, "internal-error");
            const jM = mO._fromMfaPendingCredential(OM.mfaPendingCredential);
            return new HO(jM, SM, (async MM => {
              const SM = await MM._process(iM, jM);
              delete OM.mfaInfo, delete OM.mfaPendingCredential;
              const aM = Object.assign(Object.assign({}, OM), {
                idToken: SM.idToken,
                refreshToken: SM.refreshToken
              });
              switch (rM.operationType) {
                case "signIn":
                  const MM = await zi._fromIdTokenResponse(iM, rM.operationType, aM);
                  return await iM._updateCurrentUser(MM.user), MM;
                case "reauthenticate":
                  return wM(rM.user, iM, "internal-error"), zi._forOperation(rM.user, rM.operationType, aM);
                default:
                  UM(iM, "internal-error")
              }
            }))
          }
          async resolveSignIn(MM) {
            const rM = MM;
            return this.signInResolver(rM)
          }
        }

        function hO(MM, rM) {
          var iM;
          const SM = (0, OM.N)(MM),
            jM = rM;
          return wM(rM.customData.operationType, SM, "argument-error"), wM(null === (iM = jM.customData._serverResponse) || void 0 === iM ? void 0 : iM.mfaPendingCredential, SM, "argument-error"), HO._fromError(SM, jM)
        }
        class JO {
          constructor(MM) {
            this.user = MM, this.enrolledFactors = [], MM._onReload((rM => {
              rM.mfaInfo && (this.enrolledFactors = rM.mfaInfo.map((rM => ti._fromServerResponse(MM.auth, rM))))
            }))
          }
          static _fromUser(MM) {
            return new JO(MM)
          }
          async getSession() {
            return mO._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(MM, rM) {
            const iM = MM,
              OM = await this.getSession(),
              SM = await qM(this.user, iM._process(this.user.auth, OM, rM));
            return await this.user._updateTokensIfNecessary(SM), this.user.reload()
          }
          async unenroll(MM) {
            const rM = "string" === typeof MM ? MM : MM.uid,
              iM = await this.user.getIdToken();
            try {
              const MM = await qM(this.user, (OM = this.user.auth, SM = {
                idToken: iM,
                mfaEnrollmentId: rM
              }, fM(OM, "POST", "/v2/accounts/mfaEnrollment:withdraw", oM(OM, SM))));
              this.enrolledFactors = this.enrolledFactors.filter((MM => {
                let {
                  uid: iM
                } = MM;
                return iM !== rM
              })), await this.user._updateTokensIfNecessary(MM), await this.user.reload()
            } catch (jM) {
              throw jM
            }
            var OM, SM
          }
        }
        const dO = new WeakMap;

        function yO(MM) {
          const rM = (0, OM.N)(MM);
          return dO.has(rM) || dO.set(rM, JO._fromUser(rM)), dO.get(rM)
        }
        const lO = "__sak";
        class EO {
          constructor(MM, rM) {
            this.storageRetriever = MM, this.type = rM
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(lO, "1"), this.storage.removeItem(lO), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (MM) {
              return Promise.resolve(!1)
            }
          }
          _set(MM, rM) {
            return this.storage.setItem(MM, JSON.stringify(rM)), Promise.resolve()
          }
          _get(MM) {
            const rM = this.storage.getItem(MM);
            return Promise.resolve(rM ? JSON.parse(rM) : null)
          }
          _remove(MM) {
            return this.storage.removeItem(MM), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class UO extends EO {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (MM, rM) => this.onStorageEvent(MM, rM), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const MM = (0, OM.P)();
              return mr(MM) || lr(MM)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (MM) {
                return !1
              }
            }(), this.fallbackToPolling = Er(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(MM) {
            for (const rM of Object.keys(this.listeners)) {
              const iM = this.storage.getItem(rM),
                OM = this.localCache[rM];
              iM !== OM && MM(rM, OM, iM)
            }
          }
          onStorageEvent(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!MM.key) return void this.forAllChangedKeys(((MM, rM, iM) => {
              this.notifyListeners(MM, iM)
            }));
            const iM = MM.key;
            if (rM ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const OM = this.storage.getItem(iM);
              if (MM.newValue !== OM) null !== MM.newValue ? this.storage.setItem(iM, MM.newValue) : this.storage.removeItem(iM);
              else if (this.localCache[iM] === MM.newValue && !rM) return
            }
            const SM = () => {
                const MM = this.storage.getItem(iM);
                (rM || this.localCache[iM] !== MM) && this.notifyListeners(iM, MM)
              },
              jM = this.storage.getItem(iM);
            (0, OM.V)() && 10 === document.documentMode && jM !== MM.newValue && MM.newValue !== MM.oldValue ? setTimeout(SM, 10) : SM()
          }
          notifyListeners(MM, rM) {
            this.localCache[MM] = rM;
            const iM = this.listeners[MM];
            if (iM)
              for (const OM of Array.from(iM)) OM(rM ? JSON.parse(rM) : rM)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((MM, rM, iM) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: MM,
                  oldValue: rM,
                  newValue: iM
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
          _addListener(MM, rM) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[MM] || (this.listeners[MM] = new Set, this.localCache[MM] = this.storage.getItem(MM)), this.listeners[MM].add(rM)
          }
          _removeListener(MM, rM) {
            this.listeners[MM] && (this.listeners[MM].delete(rM), 0 === this.listeners[MM].size && delete this.listeners[MM]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(MM, rM) {
            await super._set(MM, rM), this.localCache[MM] = JSON.stringify(rM)
          }
          async _get(MM) {
            const rM = await super._get(MM);
            return this.localCache[MM] = JSON.stringify(rM), rM
          }
          async _remove(MM) {
            await super._remove(MM), delete this.localCache[MM]
          }
        }
        UO.type = "LOCAL";
        const GO = UO;
        class CO extends EO {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(MM, rM) {}
          _removeListener(MM, rM) {}
        }
        CO.type = "SESSION";
        const eO = CO;
        class bO {
          constructor(MM) {
            this.eventTarget = MM, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(MM) {
            const rM = this.receivers.find((rM => rM.isListeningto(MM)));
            if (rM) return rM;
            const iM = new bO(MM);
            return this.receivers.push(iM), iM
          }
          isListeningto(MM) {
            return this.eventTarget === MM
          }
          async handleEvent(MM) {
            const rM = MM,
              {
                eventId: iM,
                eventType: OM,
                data: SM
              } = rM.data,
              jM = this.handlersMap[OM];
            if (!(null === jM || void 0 === jM ? void 0 : jM.size)) return;
            rM.ports[0].postMessage({
              status: "ack",
              eventId: iM,
              eventType: OM
            });
            const aM = Array.from(jM).map((async MM => MM(rM.origin, SM))),
              PM = await
            function(MM) {
              return Promise.all(MM.map((async MM => {
                try {
                  return {
                    fulfilled: !0,
                    value: await MM
                  }
                } catch (rM) {
                  return {
                    fulfilled: !1,
                    reason: rM
                  }
                }
              })))
            }(aM);
            rM.ports[0].postMessage({
              status: "done",
              eventId: iM,
              eventType: OM,
              response: PM
            })
          }
          _subscribe(MM, rM) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[MM] || (this.handlersMap[MM] = new Set), this.handlersMap[MM].add(rM)
          }
          _unsubscribe(MM, rM) {
            this.handlersMap[MM] && rM && this.handlersMap[MM].delete(rM), rM && 0 !== this.handlersMap[MM].size || delete this.handlersMap[MM], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function wO() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            iM = "";
          for (let OM = 0; OM < rM; OM++) iM += Math.floor(10 * Math.random());
          return MM + iM
        }
        bO.receivers = [];
        class tO {
          constructor(MM) {
            this.target = MM, this.handlers = new Set
          }
          removeMessageHandler(MM) {
            MM.messageChannel && (MM.messageChannel.port1.removeEventListener("message", MM.TE), MM.messageChannel.port1.close()), this.handlers.delete(MM)
          }
          async _send(MM, rM) {
            let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const OM = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!OM) throw new Error("connection_unavailable");
            let SM, jM;
            return new Promise(((aM, PM) => {
              const nM = wO("", 20);
              OM.port1.start();
              const QM = setTimeout((() => {
                PM(new Error("unsupported_event"))
              }), iM);
              jM = {
                messageChannel: OM,
                TE(MM) {
                  const rM = MM;
                  if (rM.data.eventId === nM) switch (rM.data.status) {
                    case "ack":
                      clearTimeout(QM), SM = setTimeout((() => {
                        PM(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(SM), aM(rM.data.response);
                      break;
                    default:
                      clearTimeout(QM), clearTimeout(SM), PM(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(jM), OM.port1.addEventListener("message", jM.TE), this.target.postMessage({
                eventType: MM,
                eventId: nM,
                data: rM
              }, [OM.port2])
            })).finally((() => {
              jM && this.removeMessageHandler(jM)
            }))
          }
        }

        function gO() {
          return window
        }

        function uO() {
          return "undefined" !== typeof gO().WorkerGlobalScope && "function" === typeof gO().importScripts
        }
        const RO = "firebaseLocalStorageDb",
          pO = "firebaseLocalStorage",
          WO = "fbase_key";
        class sO {
          constructor(MM) {
            this.request = MM
          }
          toPromise() {
            return new Promise(((MM, rM) => {
              this.request.addEventListener("success", (() => {
                MM(this.request.result)
              })), this.request.addEventListener("error", (() => {
                rM(this.request.error)
              }))
            }))
          }
        }

        function DO(MM, rM) {
          return MM.transaction([pO], rM ? "readwrite" : "readonly").objectStore(pO)
        }

        function kO() {
          const MM = indexedDB.open(RO, 1);
          return new Promise(((rM, iM) => {
            MM.addEventListener("error", (() => {
              iM(MM.error)
            })), MM.addEventListener("upgradeneeded", (() => {
              const rM = MM.result;
              try {
                rM.createObjectStore(pO, {
                  keyPath: WO
                })
              } catch (OM) {
                iM(OM)
              }
            })), MM.addEventListener("success", (async () => {
              const iM = MM.result;
              iM.objectStoreNames.contains(pO) ? rM(iM) : (iM.close(), await
                function() {
                  const MM = indexedDB.deleteDatabase(RO);
                  return new sO(MM).toPromise()
                }(), rM(await kO()))
            }))
          }))
        }
        async function ZO(MM, rM, iM) {
          const OM = DO(MM, !0).put({
            [WO]: rM,
            value: iM
          });
          return new sO(OM).toPromise()
        }

        function oO(MM, rM) {
          const iM = DO(MM, !0).delete(rM);
          return new sO(iM).toPromise()
        }
        class fO {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await kO()), this.db
          }
          async _withRetries(MM) {
            let rM = 0;
            for (;;) try {
              const rM = await this._openDb();
              return await MM(rM)
            } catch (iM) {
              if (rM++ > 3) throw iM;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return uO() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = bO._getInstance(uO() ? self : null), this.receiver._subscribe("keyChanged", (async (MM, rM) => ({
              keyProcessed: (await this._poll()).includes(rM.key)
            }))), this.receiver._subscribe("ping", (async (MM, rM) => ["keyChanged"]))
          }
          async initializeSender() {
            var MM, rM;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (MM) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new tO(this.activeServiceWorker);
            const iM = await this.sender._send("ping", {}, 800);
            iM && (null === (MM = iM[0]) || void 0 === MM ? void 0 : MM.fulfilled) && (null === (rM = iM[0]) || void 0 === rM ? void 0 : rM.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(MM) {
            if (this.sender && this.activeServiceWorker && function() {
                var MM;
                return (null === (MM = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === MM ? void 0 : MM.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: MM
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (rM) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const MM = await kO();
              return await ZO(MM, lO, "1"), await oO(MM, lO), !0
            } catch (MM) {}
            return !1
          }
          async _withPendingWrite(MM) {
            this.pendingWrites++;
            try {
              await MM()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(MM, rM) {
            return this._withPendingWrite((async () => (await this._withRetries((iM => ZO(iM, MM, rM))), this.localCache[MM] = rM, this.notifyServiceWorker(MM))))
          }
          async _get(MM) {
            const rM = await this._withRetries((rM => async function(MM, rM) {
              const iM = DO(MM, !1).get(rM),
                OM = await new sO(iM).toPromise();
              return void 0 === OM ? null : OM.value
            }(rM, MM)));
            return this.localCache[MM] = rM, rM
          }
          async _remove(MM) {
            return this._withPendingWrite((async () => (await this._withRetries((rM => oO(rM, MM))), delete this.localCache[MM], this.notifyServiceWorker(MM))))
          }
          async _poll() {
            const MM = await this._withRetries((MM => {
              const rM = DO(MM, !1).getAll();
              return new sO(rM).toPromise()
            }));
            if (!MM) return [];
            if (0 !== this.pendingWrites) return [];
            const rM = [],
              iM = new Set;
            for (const {
                fbase_key: OM,
                value: SM
              }
              of MM) iM.add(OM), JSON.stringify(this.localCache[OM]) !== JSON.stringify(SM) && (this.notifyListeners(OM, SM), rM.push(OM));
            for (const OM of Object.keys(this.localCache)) this.localCache[OM] && !iM.has(OM) && (this.notifyListeners(OM, null), rM.push(OM));
            return rM
          }
          notifyListeners(MM, rM) {
            this.localCache[MM] = rM;
            const iM = this.listeners[MM];
            if (iM)
              for (const OM of Array.from(iM)) OM(rM)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(MM, rM) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[MM] || (this.listeners[MM] = new Set, this._get(MM)), this.listeners[MM].add(rM)
          }
          _removeListener(MM, rM) {
            this.listeners[MM] && (this.listeners[MM].delete(rM), 0 === this.listeners[MM].size && delete this.listeners[MM]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        fO.type = "LOCAL";
        const YO = fO;
        const NO = 1e12;
        class AO {
          constructor(MM) {
            this.auth = MM, this.counter = NO, this._widgets = new Map
          }
          render(MM, rM) {
            const iM = this.counter;
            return this._widgets.set(iM, new xO(MM, this.auth.name, rM || {})), this.counter++, iM
          }
          reset(MM) {
            var rM;
            const iM = MM || NO;
            null === (rM = this._widgets.get(iM)) || void 0 === rM || rM.delete(), this._widgets.delete(iM)
          }
          getResponse(MM) {
            var rM;
            const iM = MM || NO;
            return (null === (rM = this._widgets.get(iM)) || void 0 === rM ? void 0 : rM.getResponse()) || ""
          }
          async execute(MM) {
            var rM;
            const iM = MM || NO;
            return null === (rM = this._widgets.get(iM)) || void 0 === rM || rM.execute(), ""
          }
        }
        class xO {
          constructor(MM, rM, iM) {
            this.params = iM, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const OM = "string" === typeof MM ? document.getElementById(MM) : MM;
            wM(OM, "argument-error", {
              appName: rM
            }), this.container = OM, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(MM) {
                const rM = [],
                  iM = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let OM = 0; OM < MM; OM++) rM.push(iM.charAt(Math.floor(Math.random() * iM.length)));
                return rM.join("")
              }(50);
              const {
                callback: MM,
                "expired-callback": rM
              } = this.params;
              if (MM) try {
                MM(this.responseToken)
              } catch (iM) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, rM) try {
                  rM()
                } catch (iM) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const vO = tr("rcb"),
          FO = new WM(3e4, 6e4);
        class BO {
          constructor() {
            var MM;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (MM = gO().grecaptcha) || void 0 === MM ? void 0 : MM.render)
          }
          load(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return wM(function(MM) {
              return MM.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(MM)
            }(rM), MM, "argument-error"), this.shouldResolveImmediately(rM) && Cr(gO().grecaptcha) ? Promise.resolve(gO().grecaptcha) : new Promise(((iM, SM) => {
              const jM = gO().setTimeout((() => {
                SM(GM(MM, "network-request-failed"))
              }), FO.get());
              gO()[vO] = () => {
                gO().clearTimeout(jM), delete gO()[vO];
                const OM = gO().grecaptcha;
                if (!OM || !Cr(OM)) return void SM(GM(MM, "internal-error"));
                const aM = OM.render;
                OM.render = (MM, rM) => {
                  const iM = aM(MM, rM);
                  return this.counter++, iM
                }, this.hostLanguage = rM, iM(OM)
              };
              wr(`https://www.google.com/recaptcha/api.js??${(0,OM.ib)({onload:vO,render:"explicit",hl:rM})}`).catch((() => {
                clearTimeout(jM), SM(GM(MM, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(MM) {
            var rM;
            return !!(null === (rM = gO().grecaptcha) || void 0 === rM ? void 0 : rM.render) && (MM === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class XO {
          async load(MM) {
            return new AO(MM)
          }
          clearedOneInstance() {}
        }
        const IO = "recaptcha",
          KO = {
            theme: "light",
            type: "image"
          };
        class qO {
          constructor(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, KO),
              iM = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = rM, this.type = IO, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = Wr(iM), this.isInvisible = "invisible" === this.parameters.size, wM("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const OM = "string" === typeof MM ? document.getElementById(MM) : MM;
            wM(OM, this.auth, "argument-error"), this.container = OM, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new XO : new BO, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const MM = await this.render(),
              rM = this.getAssertedRecaptcha(),
              iM = rM.getResponse(MM);
            return iM || new Promise((iM => {
              const OM = MM => {
                MM && (this.tokenChangeListeners.delete(OM), iM(MM))
              };
              this.tokenChangeListeners.add(OM), this.isInvisible && rM.execute(MM)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (MM) {
              return Promise.reject(MM)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((MM => {
              throw this.renderPromise = null, MM
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((MM => {
              this.container.removeChild(MM)
            }))
          }
          validateStartingState() {
            wM(!this.parameters.sitekey, this.auth, "argument-error"), wM(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), wM("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(MM) {
            return rM => {
              if (this.tokenChangeListeners.forEach((MM => MM(rM))), "function" === typeof MM) MM(rM);
              else if ("string" === typeof MM) {
                const iM = gO()[MM];
                "function" === typeof iM && iM(rM)
              }
            }
          }
          assertNotDestroyed() {
            wM(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let MM = this.container;
              if (!this.isInvisible) {
                const rM = document.createElement("div");
                MM.appendChild(rM), MM = rM
              }
              this.widgetId = this.getAssertedRecaptcha().render(MM, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            wM(RM() && !uO(), this.auth, "internal-error"), await
            function() {
              let MM = null;
              return new Promise((rM => {
                "complete" !== document.readyState ? (MM = () => rM(), window.addEventListener("load", MM)) : rM()
              })).catch((rM => {
                throw MM && window.removeEventListener("load", MM), rM
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const MM = await async function(MM) {
              return (await fM(MM, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            wM(MM, this.auth, "internal-error"), this.parameters.sitekey = MM
          }
          getAssertedRecaptcha() {
            return wM(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class TO {
          constructor(MM, rM) {
            this.verificationId = MM, this.onConfirmation = rM
          }
          confirm(MM) {
            const rM = qr._fromVerification(this.verificationId, MM);
            return this.onConfirmation(rM)
          }
        }
        async function VO(MM, rM, iM) {
          const SM = Wr(MM),
            jM = await rS(SM, rM, (0, OM.N)(iM));
          return new TO(jM, (MM => Ci(SM, MM)))
        }
        async function cO(MM, rM, iM) {
          const SM = (0, OM.N)(MM);
          await Ei(!1, SM, "phone");
          const jM = await rS(SM.auth, rM, (0, OM.N)(iM));
          return new TO(jM, (MM => ei(SM, MM)))
        }
        async function MS(MM, rM, iM) {
          const SM = (0, OM.N)(MM),
            jM = await rS(SM.auth, rM, (0, OM.N)(iM));
          return new TO(jM, (MM => bi(SM, MM)))
        }
        async function rS(MM, rM, iM) {
          var OM;
          const SM = await iM.verify();
          try {
            let jM;
            if (wM("string" === typeof SM, MM, "argument-error"), wM(iM.type === IO, MM, "argument-error"), jM = "string" === typeof rM ? {
                phoneNumber: rM
              } : rM, "session" in jM) {
              const rM = jM.session;
              if ("phoneNumber" in jM) {
                wM("enroll" === rM.type, MM, "internal-error");
                const iM = await
                function(MM, rM) {
                  return fM(MM, "POST", "/v2/accounts/mfaEnrollment:start", oM(MM, rM))
                }(MM, {
                  idToken: rM.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: jM.phoneNumber,
                    recaptchaToken: SM
                  }
                });
                return iM.phoneSessionInfo.sessionInfo
              } {
                wM("signin" === rM.type, MM, "internal-error");
                const iM = (null === (OM = jM.multiFactorHint) || void 0 === OM ? void 0 : OM.uid) || jM.multiFactorUid;
                wM(iM, MM, "missing-multi-factor-info");
                const aM = await
                function(MM, rM) {
                  return fM(MM, "POST", "/v2/accounts/mfaSignIn:start", oM(MM, rM))
                }(MM, {
                  mfaPendingCredential: rM.credential,
                  mfaEnrollmentId: iM,
                  phoneSignInInfo: {
                    recaptchaToken: SM
                  }
                });
                return aM.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: rM
              } = await async function(MM, rM) {
                return fM(MM, "POST", "/v1/accounts:sendVerificationCode", oM(MM, rM))
              }(MM, {
                phoneNumber: jM.phoneNumber,
                recaptchaToken: SM
              });
              return rM
            }
          } finally {
            iM._reset()
          }
        }
        async function iS(MM, rM) {
          await li((0, OM.N)(MM), rM)
        }
        class OS {
          constructor(MM) {
            this.providerId = OS.PROVIDER_ID, this.auth = Wr(MM)
          }
          verifyPhoneNumber(MM, rM) {
            return rS(this.auth, MM, (0, OM.N)(rM))
          }
          static credential(MM, rM) {
            return qr._fromVerification(MM, rM)
          }
          static credentialFromResult(MM) {
            const rM = MM;
            return OS.credentialFromTaggedObject(rM)
          }
          static credentialFromError(MM) {
            return OS.credentialFromTaggedObject(MM.customData || {})
          }
          static credentialFromTaggedObject(MM) {
            let {
              _tokenResponse: rM
            } = MM;
            if (!rM) return null;
            const {
              phoneNumber: iM,
              temporaryProof: OM
            } = rM;
            return iM && OM ? qr._fromTokenResponse(iM, OM) : null
          }
        }

        function SS(MM, rM) {
          return rM ? jr(rM) : (wM(MM._popupRedirectResolver, MM, "argument-error"), MM._popupRedirectResolver)
        }
        OS.PROVIDER_ID = "phone", OS.PHONE_SIGN_IN_METHOD = "phone";
        class jS extends fr {
          constructor(MM) {
            super("custom", "custom"), this.params = MM
          }
          _getIdTokenResponse(MM) {
            return Xr(MM, this._buildIdpRequest())
          }
          _linkToIdToken(MM, rM) {
            return Xr(MM, this._buildIdpRequest(rM))
          }
          _getReauthenticationResolver(MM) {
            return Xr(MM, this._buildIdpRequest())
          }
          _buildIdpRequest(MM) {
            const rM = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return MM && (rM.idToken = MM), rM
          }
        }

        function aS(MM) {
          return Gi(MM.auth, new jS(MM), MM.bypassAuthState)
        }

        function PS(MM) {
          const {
            auth: rM,
            user: iM
          } = MM;
          return wM(iM, rM, "internal-error"), Ui(iM, new jS(MM), MM.bypassAuthState)
        }
        async function nS(MM) {
          const {
            auth: rM,
            user: iM
          } = MM;
          return wM(iM, rM, "internal-error"), li(iM, new jS(MM), MM.bypassAuthState)
        }
        class QS {
          constructor(MM, rM, iM, OM) {
            let SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = MM, this.resolver = iM, this.user = OM, this.bypassAuthState = SM, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(rM) ? rM : [rM]
          }
          execute() {
            return new Promise((async (MM, rM) => {
              this.pendingPromise = {
                resolve: MM,
                reject: rM
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (iM) {
                this.reject(iM)
              }
            }))
          }
          async onAuthEvent(MM) {
            const {
              urlResponse: rM,
              sessionId: iM,
              postBody: OM,
              tenantId: SM,
              error: jM,
              type: aM
            } = MM;
            if (jM) return void this.reject(jM);
            const PM = {
              auth: this.auth,
              requestUri: rM,
              sessionId: iM,
              tenantId: SM || void 0,
              postBody: OM || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(aM)(PM))
            } catch (nM) {
              this.reject(nM)
            }
          }
          onError(MM) {
            this.reject(MM)
          }
          getIdpTask(MM) {
            switch (MM) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return aS;
              case "linkViaPopup":
              case "linkViaRedirect":
                return nS;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return PS;
              default:
                UM(this.auth, "internal-error")
            }
          }
          resolve(MM) {
            gM(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(MM), this.unregisterAndCleanUp()
          }
          reject(MM) {
            gM(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(MM), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const zS = new WM(2e3, 1e4);
        async function LS(MM, rM, iM) {
          const OM = Wr(MM);
          eM(MM, rM, Mi);
          const SM = SS(OM, iM);
          return new hS(OM, "signInViaPopup", rM, SM).executeNotNull()
        }
        async function mS(MM, rM, iM) {
          const SM = (0, OM.N)(MM);
          eM(SM.auth, rM, Mi);
          const jM = SS(SM.auth, iM);
          return new hS(SM.auth, "reauthViaPopup", rM, jM, SM).executeNotNull()
        }
        async function HS(MM, rM, iM) {
          const SM = (0, OM.N)(MM);
          eM(SM.auth, rM, Mi);
          const jM = SS(SM.auth, iM);
          return new hS(SM.auth, "linkViaPopup", rM, jM, SM).executeNotNull()
        }
        class hS extends QS {
          constructor(MM, rM, iM, OM, SM) {
            super(MM, rM, OM, SM), this.provider = iM, this.authWindow = null, this.pollId = null, hS.currentPopupAction && hS.currentPopupAction.cancel(), hS.currentPopupAction = this
          }
          async executeNotNull() {
            const MM = await this.execute();
            return wM(MM, this.auth, "internal-error"), MM
          }
          async onExecution() {
            gM(1 === this.filter.length, "Popup operations only handle one event");
            const MM = wO();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], MM), this.authWindow.associatedEvent = MM, this.resolver._originValidation(this.auth).catch((MM => {
              this.reject(MM)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (MM => {
              MM || this.reject(GM(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var MM;
            return (null === (MM = this.authWindow) || void 0 === MM ? void 0 : MM.associatedEvent) || null
          }
          cancel() {
            this.reject(GM(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, hS.currentPopupAction = null
          }
          pollUserCancellation() {
            const MM = () => {
              var rM, iM;
              (null === (iM = null === (rM = this.authWindow) || void 0 === rM ? void 0 : rM.window) || void 0 === iM ? void 0 : iM.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(GM(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(MM, zS.get())
            };
            MM()
          }
        }
        hS.currentPopupAction = null;
        const JS = "pendingRedirect",
          dS = new Map;
        class yS extends QS {
          constructor(MM, rM) {
            super(MM, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], rM, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let MM = dS.get(this.auth._key());
            if (!MM) {
              try {
                const rM = await async function(MM, rM) {
                  const iM = GS(rM),
                    OM = US(MM);
                  if (!await OM._isAvailable()) return !1;
                  const SM = "true" === await OM._get(iM);
                  return await OM._remove(iM), SM
                }(this.resolver, this.auth) ? await super.execute() : null;
                MM = () => Promise.resolve(rM)
              } catch (rM) {
                MM = () => Promise.reject(rM)
              }
              dS.set(this.auth._key(), MM)
            }
            return this.bypassAuthState || dS.set(this.auth._key(), (() => Promise.resolve(null))), MM()
          }
          async onAuthEvent(MM) {
            if ("signInViaRedirect" === MM.type) return super.onAuthEvent(MM);
            if ("unknown" !== MM.type) {
              if (MM.eventId) {
                const rM = await this.auth._redirectUserForId(MM.eventId);
                if (rM) return this.user = rM, super.onAuthEvent(MM);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function lS(MM, rM) {
          return US(MM)._set(GS(rM), "true")
        }

        function ES(MM, rM) {
          dS.set(MM._key(), rM)
        }

        function US(MM) {
          return jr(MM._redirectPersistence)
        }

        function GS(MM) {
          return nr(JS, MM.config.apiKey, MM.name)
        }

        function CS(MM, rM, iM) {
          return async function(MM, rM, iM) {
            const OM = Wr(MM);
            eM(MM, rM, Mi), await OM._initializationPromise;
            const SM = SS(OM, iM);
            return await lS(SM, OM), SM._openRedirect(OM, rM, "signInViaRedirect")
          }(MM, rM, iM)
        }

        function eS(MM, rM, iM) {
          return async function(MM, rM, iM) {
            const SM = (0, OM.N)(MM);
            eM(SM.auth, rM, Mi), await SM.auth._initializationPromise;
            const jM = SS(SM.auth, iM);
            await lS(jM, SM.auth);
            const aM = await gS(SM);
            return jM._openRedirect(SM.auth, rM, "reauthViaRedirect", aM)
          }(MM, rM, iM)
        }

        function bS(MM, rM, iM) {
          return async function(MM, rM, iM) {
            const SM = (0, OM.N)(MM);
            eM(SM.auth, rM, Mi), await SM.auth._initializationPromise;
            const jM = SS(SM.auth, iM);
            await Ei(!1, SM, rM.providerId), await lS(jM, SM.auth);
            const aM = await gS(SM);
            return jM._openRedirect(SM.auth, rM, "linkViaRedirect", aM)
          }(MM, rM, iM)
        }
        async function wS(MM, rM) {
          return await Wr(MM)._initializationPromise, tS(MM, rM, !1)
        }
        async function tS(MM, rM) {
          let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const OM = Wr(MM),
            SM = SS(OM, rM),
            jM = new yS(OM, SM, iM),
            aM = await jM.execute();
          return aM && !iM && (delete aM.user._redirectEventId, await OM._persistUserIfCurrent(aM.user), await OM._setRedirectUser(null, rM)), aM
        }
        async function gS(MM) {
          const rM = wO(`${MM.uid}:::`);
          return MM._redirectEventId = rM, await MM.auth._setRedirectUser(MM), await MM.auth._persistUserIfCurrent(MM), rM
        }
        class uS {
          constructor(MM) {
            this.auth = MM, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(MM) {
            this.consumers.add(MM), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, MM) && (this.sendToConsumer(this.queuedRedirectEvent, MM), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(MM) {
            this.consumers.delete(MM)
          }
          onEvent(MM) {
            if (this.hasEventBeenHandled(MM)) return !1;
            let rM = !1;
            return this.consumers.forEach((iM => {
              this.isEventForConsumer(MM, iM) && (rM = !0, this.sendToConsumer(MM, iM), this.saveEventToCache(MM))
            })), this.hasHandledPotentialRedirect || ! function(MM) {
              switch (MM.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return pS(MM);
                default:
                  return !1
              }
            }(MM) || (this.hasHandledPotentialRedirect = !0, rM || (this.queuedRedirectEvent = MM, rM = !0)), rM
          }
          sendToConsumer(MM, rM) {
            var iM;
            if (MM.error && !pS(MM)) {
              const OM = (null === (iM = MM.error.code) || void 0 === iM ? void 0 : iM.split("auth/")[1]) || "internal-error";
              rM.onError(GM(this.auth, OM))
            } else rM.onAuthEvent(MM)
          }
          isEventForConsumer(MM, rM) {
            const iM = null === rM.eventId || !!MM.eventId && MM.eventId === rM.eventId;
            return rM.filter.includes(MM.type) && iM
          }
          hasEventBeenHandled(MM) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(RS(MM))
          }
          saveEventToCache(MM) {
            this.cachedEventUids.add(RS(MM)), this.lastProcessedEventTime = Date.now()
          }
        }

        function RS(MM) {
          return [MM.type, MM.eventId, MM.sessionId, MM.tenantId].filter((MM => MM)).join("-")
        }

        function pS(MM) {
          let {
            type: rM,
            error: iM
          } = MM;
          return "unknown" === rM && "auth/no-auth-event" === (null === iM || void 0 === iM ? void 0 : iM.code)
        }
        const WS = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          sS = /^https?/;
        async function DS(MM) {
          if (MM.config.emulator) return;
          const {
            authorizedDomains: rM
          } = await async function(MM) {
            return fM(MM, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(MM);
          for (const OM of rM) try {
            if (kS(OM)) return
          } catch (iM) {}
          UM(MM, "unauthorized-domain")
        }

        function kS(MM) {
          const rM = uM(),
            {
              protocol: iM,
              hostname: OM
            } = new URL(rM);
          if (MM.startsWith("chrome-extension://")) {
            const SM = new URL(MM);
            return "" === SM.hostname && "" === OM ? "chrome-extension:" === iM && MM.replace("chrome-extension://", "") === rM.replace("chrome-extension://", "") : "chrome-extension:" === iM && SM.hostname === OM
          }
          if (!sS.test(iM)) return !1;
          if (WS.test(MM)) return OM === MM;
          const SM = MM.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + SM + "|" + SM + ")$", "i").test(OM)
        }
        const ZS = new WM(3e4, 6e4);

        function oS() {
          const MM = gO().___jsl;
          if (null === MM || void 0 === MM ? void 0 : MM.H)
            for (const rM of Object.keys(MM.H))
              if (MM.H[rM].r = MM.H[rM].r || [], MM.H[rM].L = MM.H[rM].L || [], MM.H[rM].r = [...MM.H[rM].L], MM.CP)
                for (let iM = 0; iM < MM.CP.length; iM++) MM.CP[iM] = null
        }
        let fS = null;

        function YS(MM) {
          return fS = fS || function(MM) {
            return new Promise(((rM, iM) => {
              var OM, SM, jM;

              function aM() {
                oS(), gapi.load("gapi.iframes", {
                  callback: () => {
                    rM(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    oS(), iM(GM(MM, "network-request-failed"))
                  },
                  timeout: ZS.get()
                })
              }
              if (null === (SM = null === (OM = gO().gapi) || void 0 === OM ? void 0 : OM.iframes) || void 0 === SM ? void 0 : SM.Iframe) rM(gapi.iframes.getContext());
              else {
                if (!(null === (jM = gO().gapi) || void 0 === jM ? void 0 : jM.load)) {
                  const rM = tr("iframefcb");
                  return gO()[rM] = () => {
                    gapi.load ? aM() : iM(GM(MM, "network-request-failed"))
                  }, wr(`https://apis.google.com/js/api.js?onload=${rM}`).catch((MM => iM(MM)))
                }
                aM()
              }
            })).catch((MM => {
              throw fS = null, MM
            }))
          }(MM), fS
        }
        const NS = new WM(5e3, 15e3),
          AS = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          xS = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function vS(MM) {
          const rM = MM.config;
          wM(rM.authDomain, MM, "auth-domain-config-required");
          const iM = rM.emulator ? sM(rM, "emulator/auth/iframe") : `https://${MM.config.authDomain}/__/auth/iframe`,
            jM = {
              apiKey: rM.apiKey,
              appName: MM.name,
              v: SM.g
            },
            aM = xS.get(MM.config.apiHost);
          aM && (jM.eid = aM);
          const PM = MM._getFrameworks();
          return PM.length && (jM.fw = PM.join(",")), `${iM}?${(0,OM.ib)(jM).slice(1)}`
        }
        const FS = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class BS {
          constructor(MM) {
            this.window = MM, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (MM) {}
          }
        }

        function XS(MM, rM, iM) {
          let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const aM = Math.max((window.screen.availHeight - jM) / 2, 0).toString(),
            PM = Math.max((window.screen.availWidth - SM) / 2, 0).toString();
          let nM = "";
          const QM = Object.assign(Object.assign({}, FS), {
              width: SM.toString(),
              height: jM.toString(),
              top: aM,
              left: PM
            }),
            zM = (0, OM.P)().toLowerCase();
          iM && (nM = Hr(zM) ? "_blank" : iM), Lr(zM) && (rM = rM || "http://localhost", QM.scrollbars = "yes");
          const LM = Object.entries(QM).reduce(((MM, rM) => {
            let [iM, OM] = rM;
            return `${MM}${iM}=${OM},`
          }), "");
          if (function() {
              var MM;
              return lr(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.P)()) && !!(null === (MM = window.navigator) || void 0 === MM ? void 0 : MM.standalone)
            }(zM) && "_self" !== nM) return function(MM, rM) {
            const iM = document.createElement("a");
            iM.href = MM, iM.target = rM;
            const OM = document.createEvent("MouseEvent");
            OM.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), iM.dispatchEvent(OM)
          }(rM || "", nM), new BS(null);
          const mM = window.open(rM || "", nM, LM);
          wM(mM, MM, "popup-blocked");
          try {
            mM.focus()
          } catch (HM) {}
          return new BS(mM)
        }
        const IS = "__/auth/handler",
          KS = "emulator/auth/handler",
          qS = encodeURIComponent("fac");
        async function TS(MM, rM, iM, jM, aM, PM) {
            wM(MM.config.authDomain, MM, "auth-domain-config-required"), wM(MM.config.apiKey, MM, "invalid-api-key");
            const nM = {
              apiKey: MM.config.apiKey,
              appName: MM.name,
              authType: iM,
              redirectUrl: jM,
              v: SM.g,
              eventId: aM
            };
            if (rM instanceof Mi) {
              rM.setDefaultLanguage(MM.languageCode), nM.providerId = rM.providerId || "", (0, OM.U)(rM.getCustomParameters()) || (nM.customParameters = JSON.stringify(rM.getCustomParameters()));
              for (const [MM, rM] of Object.entries(PM || {})) nM[MM] = rM
            }
            if (rM instanceof ri) {
              const MM = rM.getScopes().filter((MM => "" !== MM));
              MM.length > 0 && (nM.scopes = MM.join(","))
            }
            MM.tenantId && (nM.tid = MM.tenantId);
            const QM = nM;
            for (const OM of Object.keys(QM)) void 0 === QM[OM] && delete QM[OM];
            const zM = await MM._getAppCheckToken(),
              LM = zM ? `#${qS}=${encodeURIComponent(zM)}` : "";
            return `${function(MM){let{config:rM}=MM;if(!rM.emulator)return`
            https: //${rM.authDomain}/${IS}`;return sM(rM,KS)}(MM)}?${(0,OM.ib)(QM).slice(1)}${LM}`}const VS="webStorageSupport";const cS=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eO,this._completeRedirectFn=tS,this._overrideRedirectResult=ES}async _openPopup(MM,rM,iM,OM){var SM;gM(null===(SM=this.eventManagers[MM._key()])||void 0===SM?void 0:SM.manager,"_initialize() not called before _openPopup()");return XS(MM,await TS(MM,rM,iM,uM(),OM),wO())}async _openRedirect(MM,rM,iM,OM){await this._originValidation(MM);return function(MM){gO().location.href=MM}(await TS(MM,rM,iM,uM(),OM)),new Promise((()=>{}))}_initialize(MM){const rM=MM._key();if(this.eventManagers[rM]){const{manager:MM,promise:iM}=this.eventManagers[rM];return MM?Promise.resolve(MM):(gM(iM,"If manager is not set, promise should be"),iM)}const iM=this.initAndGetManager(MM);return this.eventManagers[rM]={promise:iM},iM.catch((()=>{delete this.eventManagers[rM]})),iM}async initAndGetManager(MM){const rM=await async function(MM){const rM=await YS(MM),iM=gO().gapi;return wM(iM,MM,"internal-error"),rM.open({where:document.body,url:vS(MM),messageHandlersFilter:iM.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AS,dontclear:!0},(rM=>new Promise((async(iM,OM)=>{await rM.restyle({setHideOnLeave:!1});const SM=GM(MM,"network-request-failed"),jM=gO().setTimeout((()=>{OM(SM)}),NS.get());function aM(){gO().clearTimeout(jM),iM(rM)}rM.ping(aM).then(aM,(()=>{OM(SM)}))}))))}(MM),iM=new uS(MM);return rM.register("authEvent",(rM=>{wM(null===rM||void 0===rM?void 0:rM.authEvent,MM,"invalid-auth-event");return{status:iM.onEvent(rM.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[MM._key()]={manager:iM},this.iframes[MM._key()]=rM,iM}_isIframeWebStorageSupported(MM,rM){this.iframes[MM._key()].send(VS,{type:VS},(iM=>{var OM;const SM=null===(OM=null===iM||void 0===iM?void 0:iM[0])||void 0===OM?void 0:OM[VS];void 0!==SM&&rM(!!SM),UM(MM,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(MM){const rM=MM._key();return this.originValidationPromises[rM]||(this.originValidationPromises[rM]=DS(MM)),this.originValidationPromises[rM]}get _shouldInitProactively(){return Er()||mr()||lr()}};class Mj{constructor(MM){this.factorId=MM}_process(MM,rM,iM){switch(rM.type){case"enroll":return this._finalizeEnroll(MM,rM.credential,iM);case"signin":return this._finalizeSignIn(MM,rM.credential);default:return tM("unexpected MultiFactorSessionType")}}}class rj extends Mj{constructor(MM){super("phone"),this.credential=MM}static _fromCredential(MM){return new rj(MM)}_finalizeEnroll(MM,rM,iM){return function(MM,rM){return fM(MM,"POST","/v2/accounts/mfaEnrollment:finalize",oM(MM,rM))}(MM,{idToken:rM,displayName:iM,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(MM,rM){return function(MM,rM){return fM(MM,"POST","/v2/accounts/mfaSignIn:finalize",oM(MM,rM))}(MM,{mfaPendingCredential:rM,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ij{constructor(){}static assertion(MM){return rj._fromCredential(MM)}}ij.FACTOR_ID="phone";class Oj{static assertionForEnrollment(MM,rM){return Sj._fromSecret(MM,rM)}static assertionForSignIn(MM,rM){return Sj._fromEnrollmentId(MM,rM)}static async generateSecret(MM){const rM=MM;wM("undefined"!==typeof rM.auth,"internal-error");const iM=await(OM=rM.auth,SM={idToken:rM.credential,totpEnrollmentInfo:{}},fM(OM,"POST","/v2/accounts/mfaEnrollment:start",oM(OM,SM)));var OM,SM;return jj._fromStartTotpMfaEnrollmentResponse(iM,rM.auth)}}Oj.FACTOR_ID="totp";class Sj extends Mj{constructor(MM,rM,iM){super("totp"),this.otp=MM,this.enrollmentId=rM,this.secret=iM}static _fromSecret(MM,rM){return new Sj(rM,void 0,MM)}static _fromEnrollmentId(MM,rM){return new Sj(rM,MM)}async _finalizeEnroll(MM,rM,iM){return wM("undefined"!==typeof this.secret,MM,"argument-error"),function(MM,rM){return fM(MM,"POST","/v2/accounts/mfaEnrollment:finalize",oM(MM,rM))}(MM,{idToken:rM,displayName:iM,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(MM,rM){wM(void 0!==this.enrollmentId&&void 0!==this.otp,MM,"argument-error");const iM={verificationCode:this.otp};return function(MM,rM){return fM(MM,"POST","/v2/accounts/mfaSignIn:finalize",oM(MM,rM))}(MM,{mfaPendingCredential:rM,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:iM})}}class jj{constructor(MM,rM,iM,OM,SM,jM,aM){this.sessionInfo=jM,this.auth=aM,this.secretKey=MM,this.hashingAlgorithm=rM,this.codeLength=iM,this.codeIntervalSeconds=OM,this.enrollmentCompletionDeadline=SM}static _fromStartTotpMfaEnrollmentResponse(MM,rM){return new jj(MM.totpSessionInfo.sharedSecretKey,MM.totpSessionInfo.hashingAlgorithm,MM.totpSessionInfo.verificationCodeLength,MM.totpSessionInfo.periodSec,new Date(MM.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),MM.totpSessionInfo.sessionInfo,rM)}_makeTotpVerificationInfo(MM){return{sessionInfo:this.sessionInfo,verificationCode:MM}}generateQrCodeUrl(MM,rM){var iM;let OM=!1;return(aj(MM)||aj(rM))&&(OM=!0),OM&&(aj(MM)&&(MM=(null===(iM=this.auth.currentUser)||void 0===iM?void 0:iM.email)||"unknownuser"),aj(rM)&&(rM=this.auth.name)),`otpauth://totp/${rM}:${MM}?secret=${this.secretKey}&issuer=${rM}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function aj(MM){return"undefined"===typeof MM||0===(null===MM||void 0===MM?void 0:MM.length)}var Pj="@firebase/auth",nj="0.23.2";class Qj{constructor(MM){this.auth=MM,this.internalListeners=new Map}getUid(){var MM;return this.assertAuthConfigured(),(null===(MM=this.auth.currentUser)||void 0===MM?void 0:MM.uid)||null}async getToken(MM){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(MM)}}addAuthTokenListener(MM){if(this.assertAuthConfigured(),this.internalListeners.has(MM))return;const rM=this.auth.onIdTokenChanged((rM=>{MM((null===rM||void 0===rM?void 0:rM.stsTokenManager.accessToken)||null)}));this.internalListeners.set(MM,rM),this.updateProactiveRefresh()}removeAuthTokenListener(MM){this.assertAuthConfigured();const rM=this.internalListeners.get(MM);rM&&(this.internalListeners.delete(MM),rM(),this.updateProactiveRefresh())}assertAuthConfigured(){wM(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const zj=(0,OM.L)("authIdTokenMaxAge")||300;let Lj=null;const mj=MM=>async rM=>{const iM=rM&&await rM.getIdTokenResult(),OM=iM&&((new Date).getTime()-Date.parse(iM.issuedAtTime))/1e3;if(OM&&OM>zj)return;const SM=null===iM||void 0===iM?void 0:iM.token;Lj!==SM&&(Lj=SM,await fetch(MM,{method:SM?"POST":"DELETE",headers:SM?{Authorization:`Bearer ${SM}`}:{}}))};function Hj(){let MM=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,SM.G)();const rM=(0,SM.x)(MM,"auth");if(rM.isInitialized())return rM.getImmediate();const iM=Dr(MM,{popupRedirectResolver:cS,persistence:[YO,GO,eO]}),jM=(0,OM.L)("authTokenSyncURL");if(jM){const MM=mj(jM);aO(iM,MM,(()=>MM(iM.currentUser))),jO(iM,(rM=>MM(rM)))}const aM=(0,OM.H)("auth");return aM&&kr(iM,`http://${aM}`),iM}var hj;hj="Browser",(0,SM.z)(new PM.g("auth",((MM,rM)=>{let{options:iM}=rM;const OM=MM.getProvider("app").getImmediate(),SM=MM.getProvider("heartbeat"),jM=MM.getProvider("app-check-internal"),{apiKey:aM,authDomain:PM}=OM.options;wM(aM&&!aM.includes(":"),"invalid-api-key",{appName:OM.name});const nM={apiKey:aM,authDomain:PM,clientPlatform:hj,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ur(hj)},QM=new pr(OM,SM,jM,nM);return function(MM,rM){const iM=(null===rM||void 0===rM?void 0:rM.persistence)||[],OM=(Array.isArray(iM)?iM:[iM]).map(jr);(null===rM||void 0===rM?void 0:rM.errorMap)&&MM._updateErrorMap(rM.errorMap),MM._initializeWithPersistence(OM,null===rM||void 0===rM?void 0:rM.popupRedirectResolver)}(QM,iM),QM}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((MM,rM,iM)=>{MM.getProvider("auth-internal").initialize()}))),(0,SM.z)(new PM.g("auth-internal",(MM=>(MM=>new Qj(MM))(Wr(MM.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,SM.O)(Pj,nj,function(MM){switch(MM){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(hj)),(0,SM.O)(Pj,nj,"esm2017")}};Object.freeze(modules);for(const MM in modules)Object.freeze(modules[MM]);