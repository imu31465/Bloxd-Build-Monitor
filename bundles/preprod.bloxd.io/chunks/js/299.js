/*! For license information please see gw4e3a.299.244068d2.chunk.js.LICENSE.txt */
export const id = 299;
export const ids = [299];
export const modules = {
    41540: (BB, OB, GB) => {
        GB.r(OB), GB.d(OB, {
          ActionCodeOperation: () => zB,
          ActionCodeURL: () => sO,
          AuthCredential: () => XO,
          AuthErrorCodes: () => NB,
          EmailAuthCredential: () => TO,
          EmailAuthProvider: () => tO,
          FacebookAuthProvider: () => YG,
          FactorId: () => yB,
          GithubAuthProvider: () => QG,
          GoogleAuthProvider: () => DG,
          OAuthCredential: () => CO,
          OAuthProvider: () => GG,
          OperationType: () => PB,
          PhoneAuthCredential: () => vO,
          PhoneAuthProvider: () => OD,
          PhoneMultiFactorGenerator: () => BQ,
          ProviderId: () => JB,
          RecaptchaVerifier: () => CY,
          SAMLAuthProvider: () => jG,
          SignInMethod: () => MB,
          TotpMultiFactorGenerator: () => OQ,
          TotpSecret: () => YQ,
          TwitterAuthProvider: () => yG,
          applyActionCode: () => IG,
          beforeAuthStateChanged: () => DY,
          browserLocalPersistence: () => WY,
          browserPopupRedirectResolver: () => sD,
          browserSessionPersistence: () => VY,
          checkActionCode: () => FG,
          confirmPasswordReset: () => mG,
          connectAuthEmulator: () => LO,
          createUserWithEmailAndPassword: () => LG,
          debugErrorMap: () => pB,
          deleteUser: () => JY,
          fetchSignInMethodsForEmail: () => EG,
          getAdditionalUserInfo: () => BY,
          getAuth: () => PQ,
          getIdToken: () => TB,
          getIdTokenResult: () => bB,
          getMultiFactorResolver: () => zY,
          getRedirectResult: () => nD,
          inMemoryPersistence: () => jO,
          indexedDBLocalPersistence: () => rY,
          initializeAuth: () => iO,
          initializeRecaptchaConfig: () => GY,
          isSignInWithEmailLink: () => XG,
          linkWithCredential: () => SG,
          linkWithPhoneNumber: () => sY,
          linkWithPopup: () => PD,
          linkWithRedirect: () => SD,
          multiFactor: () => qY,
          onAuthStateChanged: () => QY,
          onIdTokenChanged: () => YY,
          parseActionCodeURL: () => xO,
          prodErrorMap: () => qB,
          reauthenticateWithCredential: () => nG,
          reauthenticateWithPhoneNumber: () => xY,
          reauthenticateWithPopup: () => MD,
          reauthenticateWithRedirect: () => VD,
          reload: () => BO,
          sendEmailVerification: () => cG,
          sendPasswordResetEmail: () => uG,
          sendSignInLinkToEmail: () => rG,
          setPersistence: () => OY,
          signInAnonymously: () => zG,
          signInWithCredential: () => VG,
          signInWithCustomToken: () => UG,
          signInWithEmailAndPassword: () => gG,
          signInWithEmailLink: () => wG,
          signInWithPhoneNumber: () => vY,
          signInWithPopup: () => JD,
          signInWithRedirect: () => AD,
          signOut: () => yY,
          unlink: () => ZG,
          updateCurrentUser: () => jY,
          updateEmail: () => eG,
          updatePassword: () => TG,
          updatePhoneNumber: () => BD,
          updateProfile: () => aG,
          useDeviceLanguage: () => oY,
          verifyBeforeUpdateEmail: () => hG,
          verifyPasswordResetCode: () => iG
        });
        var YB = GB(41520),
          DB = GB(41513);

        function QB(BB, OB) {
          var GB = {};
          for (var YB in BB) Object.prototype.hasOwnProperty.call(BB, YB) && OB.indexOf(YB) < 0 && (GB[YB] = BB[YB]);
          if (null != BB && "function" === typeof Object.getOwnPropertySymbols) {
            var DB = 0;
            for (YB = Object.getOwnPropertySymbols(BB); DB < YB.length; DB++) OB.indexOf(YB[DB]) < 0 && Object.prototype.propertyIsEnumerable.call(BB, YB[DB]) && (GB[YB[DB]] = BB[YB[DB]])
          }
          return GB
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var oB = GB(41525),
          jB = GB(41515);
        const yB = {
            PHONE: "phone",
            TOTP: "totp"
          },
          JB = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          MB = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          PB = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          zB = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function lB() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const pB = function() {
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
          qB = lB,
          ZB = new YB.f("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          NB = {
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
          RB = new oB.g("@firebase/auth");

        function WB(BB) {
          if (RB.logLevel <= oB.c.ERROR) {
            for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
            RB.error(`Auth (${DB.i}): ${BB}`, ...GB)
          }
        }

        function AB(BB) {
          for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
          throw UB(BB, ...GB)
        }

        function VB(BB) {
          for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
          return UB(BB, ...GB)
        }

        function SB(BB, OB, GB) {
          const DB = Object.assign(Object.assign({}, qB()), {
            [OB]: GB
          });
          return new YB.f("auth", "Firebase", DB).create(OB, {
            appName: BB.name
          })
        }

        function nB(BB, OB, GB) {
          if (!(OB instanceof GB)) throw GB.name !== OB.constructor.name && AB(BB, "argument-error"), SB(BB, "argument-error", `Type of ${OB.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function UB(BB) {
          for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
          if ("string" !== typeof BB) {
            const OB = GB[0],
              YB = [...GB.slice(1)];
            return YB[0] && (YB[0].appName = BB.name), BB._errorFactory.create(OB, ...YB)
          }
          return ZB.create(BB, ...GB)
        }

        function fB(BB, OB) {
          if (!BB) {
            for (var GB = arguments.length, YB = new Array(GB > 2 ? GB - 2 : 0), DB = 2; DB < GB; DB++) YB[DB - 2] = arguments[DB];
            throw UB(OB, ...YB)
          }
        }

        function kB(BB) {
          const OB = "INTERNAL ASSERTION FAILED: " + BB;
          throw WB(OB), new Error(OB)
        }

        function dB(BB, OB) {
          BB || kB(OB)
        }

        function KB() {
          var BB;
          return "undefined" !== typeof self && (null === (BB = self.location) || void 0 === BB ? void 0 : BB.href) || ""
        }

        function uB() {
          return "http:" === mB() || "https:" === mB()
        }

        function mB() {
          var BB;
          return "undefined" !== typeof self && (null === (BB = self.location) || void 0 === BB ? void 0 : BB.protocol) || null
        }
        class IB {
          constructor(BB, OB) {
            this.shortDelay = BB, this.longDelay = OB, dB(OB > BB, "Short delay should be less than long delay!"), this.isMobile = (0, YB.W)() || (0, YB._)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (uB() || (0, YB.I)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function FB(BB, OB) {
          dB(BB.emulator, "Emulator should always be set here");
          const {
            url: GB
          } = BB.emulator;
          return OB ? `${GB}${OB.startsWith("/")?OB.slice(1):OB}` : GB
        }
        class iB {
          static initialize(BB, OB, GB) {
            this.fetchImpl = BB, OB && (this.headersImpl = OB), GB && (this.responseImpl = GB)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void kB("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void kB("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void kB("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const LB = {
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
          gB = new IB(3e4, 6e4);

        function rB(BB, OB) {
          return BB.tenantId && !OB.tenantId ? Object.assign(Object.assign({}, OB), {
            tenantId: BB.tenantId
          }) : OB
        }
        async function XB(BB, OB, GB, DB) {
          return wB(BB, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let QB = {},
              oB = {};
            DB && ("GET" === OB ? oB = DB : QB = {
              body: JSON.stringify(DB)
            });
            const jB = (0, YB.eb)(Object.assign({
                key: BB.config.apiKey
              }, oB)).slice(1),
              yB = await BB._getAdditionalHeaders();
            return yB["Content-Type"] = "application/json", BB.languageCode && (yB["X-Firebase-Locale"] = BB.languageCode), iB.fetch()(cB(BB, BB.config.apiHost, GB, jB), Object.assign({
              method: OB,
              headers: yB,
              referrerPolicy: "no-referrer"
            }, QB))
          }))
        }
        async function wB(BB, OB, GB) {
          BB._canInitEmulator = !1;
          const DB = Object.assign(Object.assign({}, LB), OB);
          try {
            const OB = new hB(BB),
              YB = await Promise.race([GB(), OB.promise]);
            OB.clearNetworkTimeout();
            const QB = await YB.json();
            if ("needConfirmation" in QB) throw aB(BB, "account-exists-with-different-credential", QB);
            if (YB.ok && !("errorMessage" in QB)) return QB;
            {
              const OB = YB.ok ? QB.errorMessage : QB.error.message,
                [GB, oB] = OB.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === GB) throw aB(BB, "credential-already-in-use", QB);
              if ("EMAIL_EXISTS" === GB) throw aB(BB, "email-already-in-use", QB);
              if ("USER_DISABLED" === GB) throw aB(BB, "user-disabled", QB);
              const jB = DB[GB] || GB.toLowerCase().replace(/[_\s]+/g, "-");
              if (oB) throw SB(BB, jB, oB);
              AB(BB, jB)
            }
          } catch (QB) {
            if (QB instanceof YB.h) throw QB;
            AB(BB, "network-request-failed", {
              message: String(QB)
            })
          }
        }
        async function EB(BB, OB, GB, YB) {
          let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const QB = await XB(BB, OB, GB, YB, DB);
          return "mfaPendingCredential" in QB && AB(BB, "multi-factor-auth-required", {
            _serverResponse: QB
          }), QB
        }

        function cB(BB, OB, GB, YB) {
          const DB = `${OB}${GB}?${YB}`;
          return BB.config.emulator ? FB(BB.config, DB) : `${BB.config.apiScheme}://${DB}`
        }
        class hB {
          constructor(BB) {
            this.auth = BB, this.timer = null, this.promise = new Promise(((BB, OB) => {
              this.timer = setTimeout((() => OB(VB(this.auth, "network-request-failed"))), gB.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function aB(BB, OB, GB) {
          const YB = {
            appName: BB.name
          };
          GB.email && (YB.email = GB.email), GB.phoneNumber && (YB.phoneNumber = GB.phoneNumber);
          const DB = VB(BB, OB, YB);
          return DB.customData._tokenResponse = GB, DB
        }

        function eB(BB) {
          if (BB) try {
            const OB = new Date(Number(BB));
            if (!isNaN(OB.getTime())) return OB.toUTCString()
          } catch (OB) {}
        }

        function TB(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, YB.E)(BB).getIdToken(OB)
        }
        async function bB(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const GB = (0, YB.E)(BB),
            DB = await GB.getIdToken(OB),
            QB = HB(DB);
          fB(QB && QB.exp && QB.auth_time && QB.iat, GB.auth, "internal-error");
          const oB = "object" === typeof QB.firebase ? QB.firebase : void 0,
            jB = null === oB || void 0 === oB ? void 0 : oB.sign_in_provider;
          return {
            claims: QB,
            token: DB,
            authTime: eB(CB(QB.auth_time)),
            issuedAtTime: eB(CB(QB.iat)),
            expirationTime: eB(CB(QB.exp)),
            signInProvider: jB || null,
            signInSecondFactor: (null === oB || void 0 === oB ? void 0 : oB.sign_in_second_factor) || null
          }
        }

        function CB(BB) {
          return 1e3 * Number(BB)
        }

        function HB(BB) {
          const [OB, GB, DB] = BB.split(".");
          if (void 0 === OB || void 0 === GB || void 0 === DB) return WB("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const BB = (0, YB.p)(GB);
            return BB ? JSON.parse(BB) : (WB("Failed to decode base64 JWT payload"), null)
          } catch (QB) {
            return WB("Caught error parsing JWT payload as JSON", null === QB || void 0 === QB ? void 0 : QB.toString()), null
          }
        }
        async function vB(BB, OB) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return OB;
          try {
            return await OB
          } catch (GB) {
            throw GB instanceof YB.h && function(BB) {
              let {
                code: OB
              } = BB;
              return "auth/user-disabled" === OB || "auth/user-token-expired" === OB
            }(GB) && BB.auth.currentUser === BB && await BB.auth.signOut(), GB
          }
        }
        class sB {
          constructor(BB) {
            this.user = BB, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(BB) {
            var OB;
            if (BB) {
              const BB = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), BB
            } {
              this.errorBackoff = 3e4;
              const BB = (null !== (OB = this.user.stsTokenManager.expirationTime) && void 0 !== OB ? OB : 0) - Date.now() - 3e5;
              return Math.max(0, BB)
            }
          }
          schedule() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const OB = this.getInterval(BB);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), OB)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (BB) {
              return void("auth/network-request-failed" === (null === BB || void 0 === BB ? void 0 : BB.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class xB {
          constructor(BB, OB) {
            this.createdAt = BB, this.lastLoginAt = OB, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = eB(this.lastLoginAt), this.creationTime = eB(this.createdAt)
          }
          _copy(BB) {
            this.createdAt = BB.createdAt, this.lastLoginAt = BB.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function tB(BB) {
          var OB;
          const GB = BB.auth,
            YB = await BB.getIdToken(),
            DB = await vB(BB, async function(BB, OB) {
              return XB(BB, "POST", "/v1/accounts:lookup", OB)
            }(GB, {
              idToken: YB
            }));
          fB(null === DB || void 0 === DB ? void 0 : DB.users.length, GB, "internal-error");
          const oB = DB.users[0];
          BB._notifyReloadListener(oB);
          const jB = (null === (OB = oB.providerUserInfo) || void 0 === OB ? void 0 : OB.length) ? oB.providerUserInfo.map((BB => {
            var {
              providerId: OB
            } = BB, GB = QB(BB, ["providerId"]);
            return {
              providerId: OB,
              uid: GB.rawId || "",
              displayName: GB.displayName || null,
              email: GB.email || null,
              phoneNumber: GB.phoneNumber || null,
              photoURL: GB.photoUrl || null
            }
          })) : [];
          const yB = (JB = BB.providerData, MB = jB, [...JB.filter((BB => !MB.some((OB => OB.providerId === BB.providerId)))), ...MB]);
          var JB, MB;
          const PB = BB.isAnonymous,
            zB = !(BB.email && oB.passwordHash) && !(null === yB || void 0 === yB ? void 0 : yB.length),
            lB = !!PB && zB,
            pB = {
              uid: oB.localId,
              displayName: oB.displayName || null,
              photoURL: oB.photoUrl || null,
              email: oB.email || null,
              emailVerified: oB.emailVerified || !1,
              phoneNumber: oB.phoneNumber || null,
              tenantId: oB.tenantId || null,
              providerData: yB,
              metadata: new xB(oB.createdAt, oB.lastLoginAt),
              isAnonymous: lB
            };
          Object.assign(BB, pB)
        }
        async function BO(BB) {
          const OB = (0, YB.E)(BB);
          await tB(OB), await OB.auth._persistUserIfCurrent(OB), OB.auth._notifyListenersIfCurrent(OB)
        }
        class OO {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(BB) {
            fB(BB.idToken, "internal-error"), fB("undefined" !== typeof BB.idToken, "internal-error"), fB("undefined" !== typeof BB.refreshToken, "internal-error");
            const OB = "expiresIn" in BB && "undefined" !== typeof BB.expiresIn ? Number(BB.expiresIn) : function(BB) {
              const OB = HB(BB);
              return fB(OB, "internal-error"), fB("undefined" !== typeof OB.exp, "internal-error"), fB("undefined" !== typeof OB.iat, "internal-error"), Number(OB.exp) - Number(OB.iat)
            }(BB.idToken);
            this.updateTokensAndExpiration(BB.idToken, BB.refreshToken, OB)
          }
          async getToken(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return fB(!this.accessToken || this.refreshToken, BB, "user-token-expired"), OB || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(BB, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(BB, OB) {
            const {
              accessToken: GB,
              refreshToken: DB,
              expiresIn: QB
            } = await async function(BB, OB) {
              const GB = await wB(BB, {}, (async () => {
                const GB = (0, YB.eb)({
                    grant_type: "refresh_token",
                    refresh_token: OB
                  }).slice(1),
                  {
                    tokenApiHost: DB,
                    apiKey: QB
                  } = BB.config,
                  oB = cB(BB, DB, "/v1/token", `key=${QB}`),
                  jB = await BB._getAdditionalHeaders();
                return jB["Content-Type"] = "application/x-www-form-urlencoded", iB.fetch()(oB, {
                  method: "POST",
                  headers: jB,
                  body: GB
                })
              }));
              return {
                accessToken: GB.access_token,
                expiresIn: GB.expires_in,
                refreshToken: GB.refresh_token
              }
            }(BB, OB);
            this.updateTokensAndExpiration(GB, DB, Number(QB))
          }
          updateTokensAndExpiration(BB, OB, GB) {
            this.refreshToken = OB || null, this.accessToken = BB || null, this.expirationTime = Date.now() + 1e3 * GB
          }
          static fromJSON(BB, OB) {
            const {
              refreshToken: GB,
              accessToken: YB,
              expirationTime: DB
            } = OB, QB = new OO;
            return GB && (fB("string" === typeof GB, "internal-error", {
              appName: BB
            }), QB.refreshToken = GB), YB && (fB("string" === typeof YB, "internal-error", {
              appName: BB
            }), QB.accessToken = YB), DB && (fB("number" === typeof DB, "internal-error", {
              appName: BB
            }), QB.expirationTime = DB), QB
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(BB) {
            this.accessToken = BB.accessToken, this.refreshToken = BB.refreshToken, this.expirationTime = BB.expirationTime
          }
          _clone() {
            return Object.assign(new OO, this.toJSON())
          }
          _performRefresh() {
            return kB("not implemented")
          }
        }

        function GO(BB, OB) {
          fB("string" === typeof BB || "undefined" === typeof BB, "internal-error", {
            appName: OB
          })
        }
        class YO {
          constructor(BB) {
            var {
              uid: OB,
              auth: GB,
              stsTokenManager: YB
            } = BB, DB = QB(BB, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new sB(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = OB, this.auth = GB, this.stsTokenManager = YB, this.accessToken = YB.accessToken, this.displayName = DB.displayName || null, this.email = DB.email || null, this.emailVerified = DB.emailVerified || !1, this.phoneNumber = DB.phoneNumber || null, this.photoURL = DB.photoURL || null, this.isAnonymous = DB.isAnonymous || !1, this.tenantId = DB.tenantId || null, this.providerData = DB.providerData ? [...DB.providerData] : [], this.metadata = new xB(DB.createdAt || void 0, DB.lastLoginAt || void 0)
          }
          async getIdToken(BB) {
            const OB = await vB(this, this.stsTokenManager.getToken(this.auth, BB));
            return fB(OB, this.auth, "internal-error"), this.accessToken !== OB && (this.accessToken = OB, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), OB
          }
          getIdTokenResult(BB) {
            return bB(this, BB)
          }
          reload() {
            return BO(this)
          }
          _assign(BB) {
            this !== BB && (fB(this.uid === BB.uid, this.auth, "internal-error"), this.displayName = BB.displayName, this.photoURL = BB.photoURL, this.email = BB.email, this.emailVerified = BB.emailVerified, this.phoneNumber = BB.phoneNumber, this.isAnonymous = BB.isAnonymous, this.tenantId = BB.tenantId, this.providerData = BB.providerData.map((BB => Object.assign({}, BB))), this.metadata._copy(BB.metadata), this.stsTokenManager._assign(BB.stsTokenManager))
          }
          _clone(BB) {
            const OB = new YO(Object.assign(Object.assign({}, this), {
              auth: BB,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return OB.metadata._copy(this.metadata), OB
          }
          _onReload(BB) {
            fB(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = BB, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(BB) {
            this.reloadListener ? this.reloadListener(BB) : this.reloadUserInfo = BB
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              GB = !1;
            BB.idToken && BB.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(BB), GB = !0), OB && await tB(this), await this.auth._persistUserIfCurrent(this), GB && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const BB = await this.getIdToken();
            return await vB(this, async function(BB, OB) {
              return XB(BB, "POST", "/v1/accounts:delete", OB)
            }(this.auth, {
              idToken: BB
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
              providerData: this.providerData.map((BB => Object.assign({}, BB))),
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
          static _fromJSON(BB, OB) {
            var GB, YB, DB, QB, oB, jB, yB, JB;
            const MB = null !== (GB = OB.displayName) && void 0 !== GB ? GB : void 0,
              PB = null !== (YB = OB.email) && void 0 !== YB ? YB : void 0,
              zB = null !== (DB = OB.phoneNumber) && void 0 !== DB ? DB : void 0,
              lB = null !== (QB = OB.photoURL) && void 0 !== QB ? QB : void 0,
              pB = null !== (oB = OB.tenantId) && void 0 !== oB ? oB : void 0,
              qB = null !== (jB = OB._redirectEventId) && void 0 !== jB ? jB : void 0,
              ZB = null !== (yB = OB.createdAt) && void 0 !== yB ? yB : void 0,
              NB = null !== (JB = OB.lastLoginAt) && void 0 !== JB ? JB : void 0,
              {
                uid: RB,
                emailVerified: WB,
                isAnonymous: AB,
                providerData: VB,
                stsTokenManager: SB
              } = OB;
            fB(RB && SB, BB, "internal-error");
            const nB = OO.fromJSON(this.name, SB);
            fB("string" === typeof RB, BB, "internal-error"), GO(MB, BB.name), GO(PB, BB.name), fB("boolean" === typeof WB, BB, "internal-error"), fB("boolean" === typeof AB, BB, "internal-error"), GO(zB, BB.name), GO(lB, BB.name), GO(pB, BB.name), GO(qB, BB.name), GO(ZB, BB.name), GO(NB, BB.name);
            const UB = new YO({
              uid: RB,
              auth: BB,
              email: PB,
              emailVerified: WB,
              displayName: MB,
              isAnonymous: AB,
              photoURL: lB,
              phoneNumber: zB,
              tenantId: pB,
              stsTokenManager: nB,
              createdAt: ZB,
              lastLoginAt: NB
            });
            return VB && Array.isArray(VB) && (UB.providerData = VB.map((BB => Object.assign({}, BB)))), qB && (UB._redirectEventId = qB), UB
          }
          static async _fromIdTokenResponse(BB, OB) {
            let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const YB = new OO;
            YB.updateFromServerResponse(OB);
            const DB = new YO({
              uid: OB.localId,
              auth: BB,
              stsTokenManager: YB,
              isAnonymous: GB
            });
            return await tB(DB), DB
          }
        }
        const DO = new Map;

        function QO(BB) {
          dB(BB instanceof Function, "Expected a class definition");
          let OB = DO.get(BB);
          return OB ? (dB(OB instanceof BB, "Instance stored in cache mismatched with class"), OB) : (OB = new BB, DO.set(BB, OB), OB)
        }
        class oO {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(BB, OB) {
            this.storage[BB] = OB
          }
          async _get(BB) {
            const OB = this.storage[BB];
            return void 0 === OB ? null : OB
          }
          async _remove(BB) {
            delete this.storage[BB]
          }
          _addListener(BB, OB) {}
          _removeListener(BB, OB) {}
        }
        oO.type = "NONE";
        const jO = oO;

        function yO(BB, OB, GB) {
          return `firebase:${BB}:${OB}:${GB}`
        }
        class JO {
          constructor(BB, OB, GB) {
            this.persistence = BB, this.auth = OB, this.userKey = GB;
            const {
              config: YB,
              name: DB
            } = this.auth;
            this.fullUserKey = yO(this.userKey, YB.apiKey, DB), this.fullPersistenceKey = yO("persistence", YB.apiKey, DB), this.boundEventHandler = OB._onStorageEvent.bind(OB), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(BB) {
            return this.persistence._set(this.fullUserKey, BB.toJSON())
          }
          async getCurrentUser() {
            const BB = await this.persistence._get(this.fullUserKey);
            return BB ? YO._fromJSON(this.auth, BB) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(BB) {
            if (this.persistence === BB) return;
            const OB = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = BB, OB ? this.setCurrentUser(OB) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(BB, OB) {
            let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!OB.length) return new JO(QO(jO), BB, GB);
            const YB = (await Promise.all(OB.map((async BB => {
              if (await BB._isAvailable()) return BB
            })))).filter((BB => BB));
            let DB = YB[0] || QO(jO);
            const QB = yO(GB, BB.config.apiKey, BB.name);
            let oB = null;
            for (const JB of OB) try {
              const OB = await JB._get(QB);
              if (OB) {
                const GB = YO._fromJSON(BB, OB);
                JB !== DB && (oB = GB), DB = JB;
                break
              }
            } catch (yB) {}
            const jB = YB.filter((BB => BB._shouldAllowMigration));
            return DB._shouldAllowMigration && jB.length ? (DB = jB[0], oB && await DB._set(QB, oB.toJSON()), await Promise.all(OB.map((async BB => {
              if (BB !== DB) try {
                await BB._remove(QB)
              } catch (yB) {}
            }))), new JO(DB, BB, GB)) : new JO(DB, BB, GB)
          }
        }

        function MO(BB) {
          const OB = BB.toLowerCase();
          if (OB.includes("opera/") || OB.includes("opr/") || OB.includes("opios/")) return "Opera";
          if (pO(OB)) return "IEMobile";
          if (OB.includes("msie") || OB.includes("trident/")) return "IE";
          if (OB.includes("edge/")) return "Edge";
          if (PO(OB)) return "Firefox";
          if (OB.includes("silk/")) return "Silk";
          if (ZO(OB)) return "Blackberry";
          if (NO(OB)) return "Webos";
          if (zO(OB)) return "Safari";
          if ((OB.includes("chrome/") || lO(OB)) && !OB.includes("edge/")) return "Chrome";
          if (qO(OB)) return "Android";
          {
            const OB = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              GB = BB.match(OB);
            if (2 === (null === GB || void 0 === GB ? void 0 : GB.length)) return GB[1]
          }
          return "Other"
        }

        function PO() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, YB.H)();
          return /firefox\//i.test(BB)
        }

        function zO() {
          const BB = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, YB.H)()).toLowerCase();
          return BB.includes("safari/") && !BB.includes("chrome/") && !BB.includes("crios/") && !BB.includes("android")
        }

        function lO() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, YB.H)();
          return /crios\//i.test(BB)
        }

        function pO() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, YB.H)();
          return /iemobile/i.test(BB)
        }

        function qO() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, YB.H)();
          return /android/i.test(BB)
        }

        function ZO() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, YB.H)();
          return /blackberry/i.test(BB)
        }

        function NO() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, YB.H)();
          return /webos/i.test(BB)
        }

        function RO() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, YB.H)();
          return /iphone|ipad|ipod/i.test(BB) || /macintosh/i.test(BB) && /mobile/i.test(BB)
        }

        function WO() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, YB.H)();
          return RO(BB) || qO(BB) || NO(BB) || ZO(BB) || /windows phone/i.test(BB) || pO(BB)
        }

        function AO(BB) {
          let OB, GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (BB) {
            case "Browser":
              OB = MO((0, YB.H)());
              break;
            case "Worker":
              OB = `${MO((0,YB.H)())}-${BB}`;
              break;
            default:
              OB = BB
          }
          const QB = GB.length ? GB.join(",") : "FirebaseCore-web";
          return `${OB}/JsCore/${DB.i}/${QB}`
        }
        async function VO(BB, OB) {
          return XB(BB, "GET", "/v2/recaptchaConfig", rB(BB, OB))
        }

        function SO(BB) {
          return void 0 !== BB && void 0 !== BB.getResponse
        }

        function nO(BB) {
          return void 0 !== BB && void 0 !== BB.enterprise
        }
        class UO {
          constructor(BB) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === BB.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = BB.recaptchaKey.split("/")[3], this.emailPasswordEnabled = BB.recaptchaEnforcementState.some((BB => "EMAIL_PASSWORD_PROVIDER" === BB.provider && "OFF" !== BB.enforcementState))
          }
        }

        function fO(BB) {
          return new Promise(((OB, GB) => {
            const YB = document.createElement("script");
            YB.setAttribute("src", BB), YB.onload = OB, YB.onerror = BB => {
                const OB = VB("internal-error");
                OB.customData = BB, GB(OB)
              }, YB.type = "text/javascript", YB.charset = "UTF-8",
              function() {
                var BB, OB;
                return null !== (OB = null === (BB = document.getElementsByTagName("head")) || void 0 === BB ? void 0 : BB[0]) && void 0 !== OB ? OB : document
              }().appendChild(YB)
          }))
        }

        function kO(BB) {
          return `__${BB}${Math.floor(1e6*Math.random())}`
        }
        class dO {
          constructor(BB) {
            this.type = "recaptcha-enterprise", this.auth = IO(BB)
          }
          async verify() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function GB(OB, GB, YB) {
              const DB = window.grecaptcha;
              nO(DB) ? DB.enterprise.ready((() => {
                DB.enterprise.execute(OB, {
                  action: BB
                }).then((BB => {
                  GB(BB)
                })).catch((() => {
                  GB("NO_RECAPTCHA")
                }))
              })) : YB(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((BB, YB) => {
              (async function(BB) {
                if (!OB) {
                  if (null == BB.tenantId && null != BB._agentRecaptchaConfig) return BB._agentRecaptchaConfig.siteKey;
                  if (null != BB.tenantId && void 0 !== BB._tenantRecaptchaConfigs[BB.tenantId]) return BB._tenantRecaptchaConfigs[BB.tenantId].siteKey
                }
                return new Promise((async (OB, GB) => {
                  VO(BB, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((YB => {
                    if (void 0 !== YB.recaptchaKey) {
                      const GB = new UO(YB);
                      return null == BB.tenantId ? BB._agentRecaptchaConfig = GB : BB._tenantRecaptchaConfigs[BB.tenantId] = GB, OB(GB.siteKey)
                    }
                    GB(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((BB => {
                    GB(BB)
                  }))
                }))
              })(this.auth).then((DB => {
                if (!OB && nO(window.grecaptcha)) GB(DB, BB, YB);
                else {
                  if ("undefined" === typeof window) return void YB(new Error("RecaptchaVerifier is only supported in browser"));
                  fO("https://www.google.com/recaptcha/enterprise.js?render=" + DB).then((() => {
                    GB(DB, BB, YB)
                  })).catch((BB => {
                    YB(BB)
                  }))
                }
              })).catch((BB => {
                YB(BB)
              }))
            }))
          }
        }
        async function KO(BB, OB, GB) {
          let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const DB = new dO(BB);
          let QB;
          try {
            QB = await DB.verify(GB)
          } catch (jB) {
            QB = await DB.verify(GB, !0)
          }
          const oB = Object.assign({}, OB);
          return YB ? Object.assign(oB, {
            captchaResp: QB
          }) : Object.assign(oB, {
            captchaResponse: QB
          }), Object.assign(oB, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(oB, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), oB
        }
        class uO {
          constructor(BB) {
            this.auth = BB, this.queue = []
          }
          pushCallback(BB, OB) {
            const GB = OB => new Promise(((GB, YB) => {
              try {
                GB(BB(OB))
              } catch (DB) {
                YB(DB)
              }
            }));
            GB.onAbort = OB, this.queue.push(GB);
            const YB = this.queue.length - 1;
            return () => {
              this.queue[YB] = () => Promise.resolve()
            }
          }
          async runMiddleware(BB) {
            if (this.auth.currentUser === BB) return;
            const OB = [];
            try {
              for (const GB of this.queue) await GB(BB), GB.onAbort && OB.push(GB.onAbort)
            } catch (GB) {
              OB.reverse();
              for (const BB of OB) try {
                BB()
              } catch (YB) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === GB || void 0 === GB ? void 0 : GB.message
              })
            }
          }
        }
        class mO {
          constructor(BB, OB, GB, YB) {
            this.app = BB, this.heartbeatServiceProvider = OB, this.appCheckServiceProvider = GB, this.config = YB, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new FO(this), this.idTokenSubscription = new FO(this), this.beforeStateQueue = new uO(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = ZB, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = BB.name, this.clientVersion = YB.sdkClientVersion
          }
          _initializeWithPersistence(BB, OB) {
            return OB && (this._popupRedirectResolver = QO(OB)), this._initializationPromise = this.queue((async () => {
              var GB, YB;
              if (!this._deleted && (this.persistenceManager = await JO.create(this, BB), !this._deleted)) {
                if (null === (GB = this._popupRedirectResolver) || void 0 === GB ? void 0 : GB._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (DB) {}
                await this.initializeCurrentUser(OB), this.lastNotifiedUid = (null === (YB = this.currentUser) || void 0 === YB ? void 0 : YB.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const BB = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || BB ? this.currentUser && BB && this.currentUser.uid === BB.uid ? (this._currentUser._assign(BB), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(BB, !0) : void 0
          }
          async initializeCurrentUser(BB) {
            var OB;
            const GB = await this.assertedPersistence.getCurrentUser();
            let YB = GB,
              DB = !1;
            if (BB && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const GB = null === (OB = this.redirectUser) || void 0 === OB ? void 0 : OB._redirectEventId,
                QB = null === YB || void 0 === YB ? void 0 : YB._redirectEventId,
                oB = await this.tryRedirectSignIn(BB);
              GB && GB !== QB || !(null === oB || void 0 === oB ? void 0 : oB.user) || (YB = oB.user, DB = !0)
            }
            if (!YB) return this.directlySetCurrentUser(null);
            if (!YB._redirectEventId) {
              if (DB) try {
                await this.beforeStateQueue.runMiddleware(YB)
              } catch (QB) {
                YB = GB, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(QB)))
              }
              return YB ? this.reloadAndSetCurrentUserOrClear(YB) : this.directlySetCurrentUser(null)
            }
            return fB(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === YB._redirectEventId ? this.directlySetCurrentUser(YB) : this.reloadAndSetCurrentUserOrClear(YB)
          }
          async tryRedirectSignIn(BB) {
            let OB = null;
            try {
              OB = await this._popupRedirectResolver._completeRedirectFn(this, BB, !0)
            } catch (GB) {
              await this._setRedirectUser(null)
            }
            return OB
          }
          async reloadAndSetCurrentUserOrClear(BB) {
            try {
              await tB(BB)
            } catch (OB) {
              if ("auth/network-request-failed" !== (null === OB || void 0 === OB ? void 0 : OB.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(BB)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const BB = navigator;
              return BB.languages && BB.languages[0] || BB.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(BB) {
            const OB = BB ? (0, YB.E)(BB) : null;
            return OB && fB(OB.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(OB && OB._clone(this))
          }
          async _updateCurrentUser(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return BB && fB(this.tenantId === BB.tenantId, this, "tenant-id-mismatch"), OB || await this.beforeStateQueue.runMiddleware(BB), this.queue((async () => {
              await this.directlySetCurrentUser(BB), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(BB) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(QO(BB))
            }))
          }
          async initializeRecaptchaConfig() {
            const BB = await VO(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              OB = new UO(BB);
            if (null == this.tenantId ? this._agentRecaptchaConfig = OB : this._tenantRecaptchaConfigs[this.tenantId] = OB, OB.emailPasswordEnabled) {
              new dO(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(BB) {
            this._errorFactory = new YB.f("auth", "Firebase", BB())
          }
          onAuthStateChanged(BB, OB, GB) {
            return this.registerStateListener(this.authStateSubscription, BB, OB, GB)
          }
          beforeAuthStateChanged(BB, OB) {
            return this.beforeStateQueue.pushCallback(BB, OB)
          }
          onIdTokenChanged(BB, OB, GB) {
            return this.registerStateListener(this.idTokenSubscription, BB, OB, GB)
          }
          toJSON() {
            var BB;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (BB = this._currentUser) || void 0 === BB ? void 0 : BB.toJSON()
            }
          }
          async _setRedirectUser(BB, OB) {
            const GB = await this.getOrInitRedirectPersistenceManager(OB);
            return null === BB ? GB.removeCurrentUser() : GB.setCurrentUser(BB)
          }
          async getOrInitRedirectPersistenceManager(BB) {
            if (!this.redirectPersistenceManager) {
              const OB = BB && QO(BB) || this._popupRedirectResolver;
              fB(OB, this, "argument-error"), this.redirectPersistenceManager = await JO.create(this, [QO(OB._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(BB) {
            var OB, GB;
            return this._isInitialized && await this.queue((async () => {})), (null === (OB = this._currentUser) || void 0 === OB ? void 0 : OB._redirectEventId) === BB ? this._currentUser : (null === (GB = this.redirectUser) || void 0 === GB ? void 0 : GB._redirectEventId) === BB ? this.redirectUser : null
          }
          async _persistUserIfCurrent(BB) {
            if (BB === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(BB)))
          }
          _notifyListenersIfCurrent(BB) {
            BB === this.currentUser && this.notifyAuthListeners()
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
            var BB, OB;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const GB = null !== (OB = null === (BB = this.currentUser) || void 0 === BB ? void 0 : BB.uid) && void 0 !== OB ? OB : null;
            this.lastNotifiedUid !== GB && (this.lastNotifiedUid = GB, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(BB, OB, GB, YB) {
            if (this._deleted) return () => {};
            const DB = "function" === typeof OB ? OB : OB.next.bind(OB),
              QB = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return fB(QB, this, "internal-error"), QB.then((() => DB(this.currentUser))), "function" === typeof OB ? BB.addObserver(OB, GB, YB) : BB.addObserver(OB)
          }
          async directlySetCurrentUser(BB) {
            this.currentUser && this.currentUser !== BB && this._currentUser._stopProactiveRefresh(), BB && this.isProactiveRefreshEnabled && BB._startProactiveRefresh(), this.currentUser = BB, BB ? await this.assertedPersistence.setCurrentUser(BB) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(BB) {
            return this.operations = this.operations.then(BB, BB), this.operations
          }
          get assertedPersistence() {
            return fB(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(BB) {
            BB && !this.frameworks.includes(BB) && (this.frameworks.push(BB), this.frameworks.sort(), this.clientVersion = AO(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var BB;
            const OB = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (OB["X-Firebase-gmpid"] = this.app.options.appId);
            const GB = await (null === (BB = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === BB ? void 0 : BB.getHeartbeatsHeader());
            GB && (OB["X-Firebase-Client"] = GB);
            const YB = await this._getAppCheckToken();
            return YB && (OB["X-Firebase-AppCheck"] = YB), OB
          }
          async _getAppCheckToken() {
            var BB;
            const OB = await (null === (BB = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === BB ? void 0 : BB.getToken());
            return (null === OB || void 0 === OB ? void 0 : OB.error) && function(BB) {
              if (RB.logLevel <= oB.c.WARN) {
                for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
                RB.warn(`Auth (${DB.i}): ${BB}`, ...GB)
              }
            }(`Error while retrieving App Check token: ${OB.error}`), null === OB || void 0 === OB ? void 0 : OB.token
          }
        }

        function IO(BB) {
          return (0, YB.E)(BB)
        }
        class FO {
          constructor(BB) {
            this.auth = BB, this.observer = null, this.addObserver = (0, YB.u)((BB => this.observer = BB))
          }
          get next() {
            return fB(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function iO(BB, OB) {
          const GB = (0, DB.D)(BB, "auth");
          if (GB.isInitialized()) {
            const BB = GB.getImmediate(),
              DB = GB.getOptions();
            if ((0, YB.v)(DB, null !== OB && void 0 !== OB ? OB : {})) return BB;
            AB(BB, "already-initialized")
          }
          return GB.initialize({
            options: OB
          })
        }

        function LO(BB, OB, GB) {
          const YB = IO(BB);
          fB(YB._canInitEmulator, YB, "emulator-config-failed"), fB(/^https?:\/\//.test(OB), YB, "invalid-emulator-scheme");
          const DB = !!(null === GB || void 0 === GB ? void 0 : GB.disableWarnings),
            QB = gO(OB),
            {
              host: oB,
              port: jB
            } = function(BB) {
              const OB = gO(BB),
                GB = /(\/\/)?([^?#/]+)/.exec(BB.substr(OB.length));
              if (!GB) return {
                host: "",
                port: null
              };
              const YB = GB[2].split("@").pop() || "",
                DB = /^(\[[^\]]+\])(:|$)/.exec(YB);
              if (DB) {
                const BB = DB[1];
                return {
                  host: BB,
                  port: rO(YB.substr(BB.length + 1))
                }
              } {
                const [BB, OB] = YB.split(":");
                return {
                  host: BB,
                  port: rO(OB)
                }
              }
            }(OB),
            yB = null === jB ? "" : `:${jB}`;
          YB.config.emulator = {
            url: `${QB}//${oB}${yB}/`
          }, YB.settings.appVerificationDisabledForTesting = !0, YB.emulatorConfig = Object.freeze({
            host: oB,
            port: jB,
            protocol: QB.replace(":", ""),
            options: Object.freeze({
              disableWarnings: DB
            })
          }), DB || function() {
            function BB() {
              const BB = document.createElement("p"),
                OB = BB.style;
              BB.innerText = "Running in emulator mode. Do not use with production credentials.", OB.position = "fixed", OB.width = "100%", OB.backgroundColor = "#ffffff", OB.border = ".1em solid #000000", OB.color = "#b50000", OB.bottom = "0px", OB.left = "0px", OB.margin = "0px", OB.zIndex = "10000", OB.textAlign = "center", BB.classList.add("firebase-emulator-warning"), document.body.appendChild(BB)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", BB) : BB())
          }()
        }

        function gO(BB) {
          const OB = BB.indexOf(":");
          return OB < 0 ? "" : BB.substr(0, OB + 1)
        }

        function rO(BB) {
          if (!BB) return null;
          const OB = Number(BB);
          return isNaN(OB) ? null : OB
        }
        class XO {
          constructor(BB, OB) {
            this.providerId = BB, this.signInMethod = OB
          }
          toJSON() {
            return kB("not implemented")
          }
          _getIdTokenResponse(BB) {
            return kB("not implemented")
          }
          _linkToIdToken(BB, OB) {
            return kB("not implemented")
          }
          _getReauthenticationResolver(BB) {
            return kB("not implemented")
          }
        }
        async function wO(BB, OB) {
          return XB(BB, "POST", "/v1/accounts:resetPassword", rB(BB, OB))
        }
        async function EO(BB, OB) {
          return XB(BB, "POST", "/v1/accounts:update", OB)
        }
        async function cO(BB, OB) {
          return EB(BB, "POST", "/v1/accounts:signInWithPassword", rB(BB, OB))
        }
        async function hO(BB, OB) {
          return XB(BB, "POST", "/v1/accounts:sendOobCode", rB(BB, OB))
        }
        async function aO(BB, OB) {
          return hO(BB, OB)
        }
        async function eO(BB, OB) {
          return hO(BB, OB)
        }
        class TO extends XO {
          constructor(BB, OB, GB) {
            let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", GB), this._email = BB, this._password = OB, this._tenantId = YB
          }
          static _fromEmailAndPassword(BB, OB) {
            return new TO(BB, OB, "password")
          }
          static _fromEmailAndCode(BB, OB) {
            return new TO(BB, OB, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(BB) {
            const OB = "string" === typeof BB ? JSON.parse(BB) : BB;
            if ((null === OB || void 0 === OB ? void 0 : OB.email) && (null === OB || void 0 === OB ? void 0 : OB.password)) {
              if ("password" === OB.signInMethod) return this._fromEmailAndPassword(OB.email, OB.password);
              if ("emailLink" === OB.signInMethod) return this._fromEmailAndCode(OB.email, OB.password, OB.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(BB) {
            var OB;
            switch (this.signInMethod) {
              case "password":
                const GB = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (OB = BB._getRecaptchaConfig()) || void 0 === OB ? void 0 : OB.emailPasswordEnabled) {
                  const OB = await KO(BB, GB, "signInWithPassword");
                  return cO(BB, OB)
                }
                return cO(BB, GB).catch((async OB => {
                  if ("auth/missing-recaptcha-token" === OB.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const OB = await KO(BB, GB, "signInWithPassword");
                    return cO(BB, OB)
                  }
                  return Promise.reject(OB)
                }));
              case "emailLink":
                return async function(BB, OB) {
                  return EB(BB, "POST", "/v1/accounts:signInWithEmailLink", rB(BB, OB))
                }(BB, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                AB(BB, "internal-error")
            }
          }
          async _linkToIdToken(BB, OB) {
            switch (this.signInMethod) {
              case "password":
                return EO(BB, {
                  idToken: OB,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(BB, OB) {
                  return EB(BB, "POST", "/v1/accounts:signInWithEmailLink", rB(BB, OB))
                }(BB, {
                  idToken: OB,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                AB(BB, "internal-error")
            }
          }
          _getReauthenticationResolver(BB) {
            return this._getIdTokenResponse(BB)
          }
        }
        async function bO(BB, OB) {
          return EB(BB, "POST", "/v1/accounts:signInWithIdp", rB(BB, OB))
        }
        class CO extends XO {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(BB) {
            const OB = new CO(BB.providerId, BB.signInMethod);
            return BB.idToken || BB.accessToken ? (BB.idToken && (OB.idToken = BB.idToken), BB.accessToken && (OB.accessToken = BB.accessToken), BB.nonce && !BB.pendingToken && (OB.nonce = BB.nonce), BB.pendingToken && (OB.pendingToken = BB.pendingToken)) : BB.oauthToken && BB.oauthTokenSecret ? (OB.accessToken = BB.oauthToken, OB.secret = BB.oauthTokenSecret) : AB("argument-error"), OB
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
          static fromJSON(BB) {
            const OB = "string" === typeof BB ? JSON.parse(BB) : BB,
              {
                providerId: GB,
                signInMethod: YB
              } = OB,
              DB = QB(OB, ["providerId", "signInMethod"]);
            if (!GB || !YB) return null;
            const oB = new CO(GB, YB);
            return oB.idToken = DB.idToken || void 0, oB.accessToken = DB.accessToken || void 0, oB.secret = DB.secret, oB.nonce = DB.nonce, oB.pendingToken = DB.pendingToken || null, oB
          }
          _getIdTokenResponse(BB) {
            return bO(BB, this.buildRequest())
          }
          _linkToIdToken(BB, OB) {
            const GB = this.buildRequest();
            return GB.idToken = OB, bO(BB, GB)
          }
          _getReauthenticationResolver(BB) {
            const OB = this.buildRequest();
            return OB.autoCreate = !1, bO(BB, OB)
          }
          buildRequest() {
            const BB = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) BB.pendingToken = this.pendingToken;
            else {
              const OB = {};
              this.idToken && (OB.id_token = this.idToken), this.accessToken && (OB.access_token = this.accessToken), this.secret && (OB.oauth_token_secret = this.secret), OB.providerId = this.providerId, this.nonce && !this.pendingToken && (OB.nonce = this.nonce), BB.postBody = (0, YB.eb)(OB)
            }
            return BB
          }
        }
        const HO = {
          USER_NOT_FOUND: "user-not-found"
        };
        class vO extends XO {
          constructor(BB) {
            super("phone", "phone"), this.params = BB
          }
          static _fromVerification(BB, OB) {
            return new vO({
              verificationId: BB,
              verificationCode: OB
            })
          }
          static _fromTokenResponse(BB, OB) {
            return new vO({
              phoneNumber: BB,
              temporaryProof: OB
            })
          }
          _getIdTokenResponse(BB) {
            return async function(BB, OB) {
              return EB(BB, "POST", "/v1/accounts:signInWithPhoneNumber", rB(BB, OB))
            }(BB, this._makeVerificationRequest())
          }
          _linkToIdToken(BB, OB) {
            return async function(BB, OB) {
              const GB = await EB(BB, "POST", "/v1/accounts:signInWithPhoneNumber", rB(BB, OB));
              if (GB.temporaryProof) throw aB(BB, "account-exists-with-different-credential", GB);
              return GB
            }(BB, Object.assign({
              idToken: OB
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(BB) {
            return async function(BB, OB) {
              return EB(BB, "POST", "/v1/accounts:signInWithPhoneNumber", rB(BB, Object.assign(Object.assign({}, OB), {
                operation: "REAUTH"
              })), HO)
            }(BB, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: BB,
              phoneNumber: OB,
              verificationId: GB,
              verificationCode: YB
            } = this.params;
            return BB && OB ? {
              temporaryProof: BB,
              phoneNumber: OB
            } : {
              sessionInfo: GB,
              code: YB
            }
          }
          toJSON() {
            const BB = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (BB.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (BB.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (BB.verificationCode = this.params.verificationCode), this.params.verificationId && (BB.verificationId = this.params.verificationId), BB
          }
          static fromJSON(BB) {
            "string" === typeof BB && (BB = JSON.parse(BB));
            const {
              verificationId: OB,
              verificationCode: GB,
              phoneNumber: YB,
              temporaryProof: DB
            } = BB;
            return GB || OB || YB || DB ? new vO({
              verificationId: OB,
              verificationCode: GB,
              phoneNumber: YB,
              temporaryProof: DB
            }) : null
          }
        }
        class sO {
          constructor(BB) {
            var OB, GB, DB, QB, oB, jB;
            const yB = (0, YB.bb)((0, YB.w)(BB)),
              JB = null !== (OB = yB.apiKey) && void 0 !== OB ? OB : null,
              MB = null !== (GB = yB.oobCode) && void 0 !== GB ? GB : null,
              PB = function(BB) {
                switch (BB) {
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
              }(null !== (DB = yB.mode) && void 0 !== DB ? DB : null);
            fB(JB && MB && PB, "argument-error"), this.apiKey = JB, this.operation = PB, this.code = MB, this.continueUrl = null !== (QB = yB.continueUrl) && void 0 !== QB ? QB : null, this.languageCode = null !== (oB = yB.languageCode) && void 0 !== oB ? oB : null, this.tenantId = null !== (jB = yB.tenantId) && void 0 !== jB ? jB : null
          }
          static parseLink(BB) {
            const OB = function(BB) {
              const OB = (0, YB.bb)((0, YB.w)(BB)).link,
                GB = OB ? (0, YB.bb)((0, YB.w)(OB)).deep_link_id : null,
                DB = (0, YB.bb)((0, YB.w)(BB)).deep_link_id;
              return (DB ? (0, YB.bb)((0, YB.w)(DB)).link : null) || DB || GB || OB || BB
            }(BB);
            try {
              return new sO(OB)
            } catch (GB) {
              return null
            }
          }
        }

        function xO(BB) {
          return sO.parseLink(BB)
        }
        class tO {
          constructor() {
            this.providerId = tO.PROVIDER_ID
          }
          static credential(BB, OB) {
            return TO._fromEmailAndPassword(BB, OB)
          }
          static credentialWithLink(BB, OB) {
            const GB = sO.parseLink(OB);
            return fB(GB, "argument-error"), TO._fromEmailAndCode(BB, GB.code, GB.tenantId)
          }
        }
        tO.PROVIDER_ID = "password", tO.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", tO.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class BG {
          constructor(BB) {
            this.providerId = BB, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(BB) {
            this.defaultLanguageCode = BB
          }
          setCustomParameters(BB) {
            return this.customParameters = BB, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class OG extends BG {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(BB) {
            return this.scopes.includes(BB) || this.scopes.push(BB), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class GG extends OG {
          static credentialFromJSON(BB) {
            const OB = "string" === typeof BB ? JSON.parse(BB) : BB;
            return fB("providerId" in OB && "signInMethod" in OB, "argument-error"), CO._fromParams(OB)
          }
          credential(BB) {
            return this._credential(Object.assign(Object.assign({}, BB), {
              nonce: BB.rawNonce
            }))
          }
          _credential(BB) {
            return fB(BB.idToken || BB.accessToken, "argument-error"), CO._fromParams(Object.assign(Object.assign({}, BB), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(BB) {
            return GG.oauthCredentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return GG.oauthCredentialFromTaggedObject(BB.customData || {})
          }
          static oauthCredentialFromTaggedObject(BB) {
            let {
              _tokenResponse: OB
            } = BB;
            if (!OB) return null;
            const {
              oauthIdToken: GB,
              oauthAccessToken: YB,
              oauthTokenSecret: DB,
              pendingToken: QB,
              nonce: oB,
              providerId: jB
            } = OB;
            if (!YB && !DB && !GB && !QB) return null;
            if (!jB) return null;
            try {
              return new GG(jB)._credential({
                idToken: GB,
                accessToken: YB,
                nonce: oB,
                pendingToken: QB
              })
            } catch (yB) {
              return null
            }
          }
        }
        class YG extends OG {
          constructor() {
            super("facebook.com")
          }
          static credential(BB) {
            return CO._fromParams({
              providerId: YG.PROVIDER_ID,
              signInMethod: YG.FACEBOOK_SIGN_IN_METHOD,
              accessToken: BB
            })
          }
          static credentialFromResult(BB) {
            return YG.credentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return YG.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: OB
            } = BB;
            if (!OB || !("oauthAccessToken" in OB)) return null;
            if (!OB.oauthAccessToken) return null;
            try {
              return YG.credential(OB.oauthAccessToken)
            } catch (GB) {
              return null
            }
          }
        }
        YG.FACEBOOK_SIGN_IN_METHOD = "facebook.com", YG.PROVIDER_ID = "facebook.com";
        class DG extends OG {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(BB, OB) {
            return CO._fromParams({
              providerId: DG.PROVIDER_ID,
              signInMethod: DG.GOOGLE_SIGN_IN_METHOD,
              idToken: BB,
              accessToken: OB
            })
          }
          static credentialFromResult(BB) {
            return DG.credentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return DG.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: OB
            } = BB;
            if (!OB) return null;
            const {
              oauthIdToken: GB,
              oauthAccessToken: YB
            } = OB;
            if (!GB && !YB) return null;
            try {
              return DG.credential(GB, YB)
            } catch (DB) {
              return null
            }
          }
        }
        DG.GOOGLE_SIGN_IN_METHOD = "google.com", DG.PROVIDER_ID = "google.com";
        class QG extends OG {
          constructor() {
            super("github.com")
          }
          static credential(BB) {
            return CO._fromParams({
              providerId: QG.PROVIDER_ID,
              signInMethod: QG.GITHUB_SIGN_IN_METHOD,
              accessToken: BB
            })
          }
          static credentialFromResult(BB) {
            return QG.credentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return QG.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: OB
            } = BB;
            if (!OB || !("oauthAccessToken" in OB)) return null;
            if (!OB.oauthAccessToken) return null;
            try {
              return QG.credential(OB.oauthAccessToken)
            } catch (GB) {
              return null
            }
          }
        }
        QG.GITHUB_SIGN_IN_METHOD = "github.com", QG.PROVIDER_ID = "github.com";
        class oG extends XO {
          constructor(BB, OB) {
            super(BB, BB), this.pendingToken = OB
          }
          _getIdTokenResponse(BB) {
            return bO(BB, this.buildRequest())
          }
          _linkToIdToken(BB, OB) {
            const GB = this.buildRequest();
            return GB.idToken = OB, bO(BB, GB)
          }
          _getReauthenticationResolver(BB) {
            const OB = this.buildRequest();
            return OB.autoCreate = !1, bO(BB, OB)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(BB) {
            const OB = "string" === typeof BB ? JSON.parse(BB) : BB,
              {
                providerId: GB,
                signInMethod: YB,
                pendingToken: DB
              } = OB;
            return GB && YB && DB && GB === YB ? new oG(GB, DB) : null
          }
          static _create(BB, OB) {
            return new oG(BB, OB)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class jG extends BG {
          constructor(BB) {
            fB(BB.startsWith("saml."), "argument-error"), super(BB)
          }
          static credentialFromResult(BB) {
            return jG.samlCredentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return jG.samlCredentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromJSON(BB) {
            const OB = oG.fromJSON(BB);
            return fB(OB, "argument-error"), OB
          }
          static samlCredentialFromTaggedObject(BB) {
            let {
              _tokenResponse: OB
            } = BB;
            if (!OB) return null;
            const {
              pendingToken: GB,
              providerId: YB
            } = OB;
            if (!GB || !YB) return null;
            try {
              return oG._create(YB, GB)
            } catch (DB) {
              return null
            }
          }
        }
        class yG extends OG {
          constructor() {
            super("twitter.com")
          }
          static credential(BB, OB) {
            return CO._fromParams({
              providerId: yG.PROVIDER_ID,
              signInMethod: yG.TWITTER_SIGN_IN_METHOD,
              oauthToken: BB,
              oauthTokenSecret: OB
            })
          }
          static credentialFromResult(BB) {
            return yG.credentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return yG.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: OB
            } = BB;
            if (!OB) return null;
            const {
              oauthAccessToken: GB,
              oauthTokenSecret: YB
            } = OB;
            if (!GB || !YB) return null;
            try {
              return yG.credential(GB, YB)
            } catch (DB) {
              return null
            }
          }
        }
        async function JG(BB, OB) {
          return EB(BB, "POST", "/v1/accounts:signUp", rB(BB, OB))
        }
        yG.TWITTER_SIGN_IN_METHOD = "twitter.com", yG.PROVIDER_ID = "twitter.com";
        class MG {
          constructor(BB) {
            this.user = BB.user, this.providerId = BB.providerId, this._tokenResponse = BB._tokenResponse, this.operationType = BB.operationType
          }
          static async _fromIdTokenResponse(BB, OB, GB) {
            let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const DB = await YO._fromIdTokenResponse(BB, GB, YB),
              QB = PG(GB);
            return new MG({
              user: DB,
              providerId: QB,
              _tokenResponse: GB,
              operationType: OB
            })
          }
          static async _forOperation(BB, OB, GB) {
            await BB._updateTokensIfNecessary(GB, !0);
            const YB = PG(GB);
            return new MG({
              user: BB,
              providerId: YB,
              _tokenResponse: GB,
              operationType: OB
            })
          }
        }

        function PG(BB) {
          return BB.providerId ? BB.providerId : "phoneNumber" in BB ? "phone" : null
        }
        async function zG(BB) {
          var OB;
          const GB = IO(BB);
          if (await GB._initializationPromise, null === (OB = GB.currentUser) || void 0 === OB ? void 0 : OB.isAnonymous) return new MG({
            user: GB.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const YB = await JG(GB, {
              returnSecureToken: !0
            }),
            DB = await MG._fromIdTokenResponse(GB, "signIn", YB, !0);
          return await GB._updateCurrentUser(DB.user), DB
        }
        class lG extends YB.h {
          constructor(BB, OB, GB, YB) {
            var DB;
            super(OB.code, OB.message), this.operationType = GB, this.user = YB, Object.setPrototypeOf(this, lG.prototype), this.customData = {
              appName: BB.name,
              tenantId: null !== (DB = BB.tenantId) && void 0 !== DB ? DB : void 0,
              _serverResponse: OB.customData._serverResponse,
              operationType: GB
            }
          }
          static _fromErrorAndOperation(BB, OB, GB, YB) {
            return new lG(BB, OB, GB, YB)
          }
        }

        function pG(BB, OB, GB, YB) {
          return ("reauthenticate" === OB ? GB._getReauthenticationResolver(BB) : GB._getIdTokenResponse(BB)).catch((GB => {
            if ("auth/multi-factor-auth-required" === GB.code) throw lG._fromErrorAndOperation(BB, GB, OB, YB);
            throw GB
          }))
        }

        function qG(BB) {
          return new Set(BB.map((BB => {
            let {
              providerId: OB
            } = BB;
            return OB
          })).filter((BB => !!BB)))
        }
        async function ZG(BB, OB) {
          const GB = (0, YB.E)(BB);
          await RG(!0, GB, OB);
          const {
            providerUserInfo: DB
          } = await async function(BB, OB) {
            return XB(BB, "POST", "/v1/accounts:update", OB)
          }(GB.auth, {
            idToken: await GB.getIdToken(),
            deleteProvider: [OB]
          }), QB = qG(DB || []);
          return GB.providerData = GB.providerData.filter((BB => QB.has(BB.providerId))), QB.has("phone") || (GB.phoneNumber = null), await GB.auth._persistUserIfCurrent(GB), GB
        }
        async function NG(BB, OB) {
          let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const YB = await vB(BB, OB._linkToIdToken(BB.auth, await BB.getIdToken()), GB);
          return MG._forOperation(BB, "link", YB)
        }
        async function RG(BB, OB, GB) {
          await tB(OB);
          const YB = !1 === BB ? "provider-already-linked" : "no-such-provider";
          fB(qG(OB.providerData).has(GB) === BB, OB.auth, YB)
        }
        async function WG(BB, OB) {
          let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: YB
          } = BB, DB = "reauthenticate";
          try {
            const QB = await vB(BB, pG(YB, DB, OB, BB), GB);
            fB(QB.idToken, YB, "internal-error");
            const oB = HB(QB.idToken);
            fB(oB, YB, "internal-error");
            const {
              sub: jB
            } = oB;
            return fB(BB.uid === jB, YB, "user-mismatch"), MG._forOperation(BB, DB, QB)
          } catch (QB) {
            throw "auth/user-not-found" === (null === QB || void 0 === QB ? void 0 : QB.code) && AB(YB, "user-mismatch"), QB
          }
        }
        async function AG(BB, OB) {
          let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const YB = "signIn",
            DB = await pG(BB, YB, OB),
            QB = await MG._fromIdTokenResponse(BB, YB, DB);
          return GB || await BB._updateCurrentUser(QB.user), QB
        }
        async function VG(BB, OB) {
          return AG(IO(BB), OB)
        }
        async function SG(BB, OB) {
          const GB = (0, YB.E)(BB);
          return await RG(!1, GB, OB.providerId), NG(GB, OB)
        }
        async function nG(BB, OB) {
          return WG((0, YB.E)(BB), OB)
        }
        async function UG(BB, OB) {
          const GB = IO(BB),
            YB = await async function(BB, OB) {
              return EB(BB, "POST", "/v1/accounts:signInWithCustomToken", rB(BB, OB))
            }(GB, {
              token: OB,
              returnSecureToken: !0
            }), DB = await MG._fromIdTokenResponse(GB, "signIn", YB);
          return await GB._updateCurrentUser(DB.user), DB
        }
        class fG {
          constructor(BB, OB) {
            this.factorId = BB, this.uid = OB.mfaEnrollmentId, this.enrollmentTime = new Date(OB.enrolledAt).toUTCString(), this.displayName = OB.displayName
          }
          static _fromServerResponse(BB, OB) {
            return "phoneInfo" in OB ? kG._fromServerResponse(BB, OB) : "totpInfo" in OB ? dG._fromServerResponse(BB, OB) : AB(BB, "internal-error")
          }
        }
        class kG extends fG {
          constructor(BB) {
            super("phone", BB), this.phoneNumber = BB.phoneInfo
          }
          static _fromServerResponse(BB, OB) {
            return new kG(OB)
          }
        }
        class dG extends fG {
          constructor(BB) {
            super("totp", BB)
          }
          static _fromServerResponse(BB, OB) {
            return new dG(OB)
          }
        }

        function KG(BB, OB, GB) {
          var YB;
          fB((null === (YB = GB.url) || void 0 === YB ? void 0 : YB.length) > 0, BB, "invalid-continue-uri"), fB("undefined" === typeof GB.dynamicLinkDomain || GB.dynamicLinkDomain.length > 0, BB, "invalid-dynamic-link-domain"), OB.continueUrl = GB.url, OB.dynamicLinkDomain = GB.dynamicLinkDomain, OB.canHandleCodeInApp = GB.handleCodeInApp, GB.iOS && (fB(GB.iOS.bundleId.length > 0, BB, "missing-ios-bundle-id"), OB.iOSBundleId = GB.iOS.bundleId), GB.android && (fB(GB.android.packageName.length > 0, BB, "missing-android-pkg-name"), OB.androidInstallApp = GB.android.installApp, OB.androidMinimumVersionCode = GB.android.minimumVersion, OB.androidPackageName = GB.android.packageName)
        }
        async function uG(BB, OB, GB) {
          var YB;
          const DB = IO(BB),
            QB = {
              requestType: "PASSWORD_RESET",
              email: OB,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (YB = DB._getRecaptchaConfig()) || void 0 === YB ? void 0 : YB.emailPasswordEnabled) {
            const BB = await KO(DB, QB, "getOobCode", !0);
            GB && KG(DB, BB, GB), await aO(DB, BB)
          } else GB && KG(DB, QB, GB), await aO(DB, QB).catch((async BB => {
            if ("auth/missing-recaptcha-token" !== BB.code) return Promise.reject(BB);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const BB = await KO(DB, QB, "getOobCode", !0);
              GB && KG(DB, BB, GB), await aO(DB, BB)
            }
          }))
        }
        async function mG(BB, OB, GB) {
          await wO((0, YB.E)(BB), {
            oobCode: OB,
            newPassword: GB
          })
        }
        async function IG(BB, OB) {
          await async function(BB, OB) {
            return XB(BB, "POST", "/v1/accounts:update", rB(BB, OB))
          }((0, YB.E)(BB), {
            oobCode: OB
          })
        }
        async function FG(BB, OB) {
          const GB = (0, YB.E)(BB),
            DB = await wO(GB, {
              oobCode: OB
            }),
            QB = DB.requestType;
          switch (fB(QB, GB, "internal-error"), QB) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              fB(DB.newEmail, GB, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              fB(DB.mfaInfo, GB, "internal-error");
            default:
              fB(DB.email, GB, "internal-error")
          }
          let oB = null;
          return DB.mfaInfo && (oB = fG._fromServerResponse(IO(GB), DB.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === DB.requestType ? DB.newEmail : DB.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === DB.requestType ? DB.email : DB.newEmail) || null,
              multiFactorInfo: oB
            },
            operation: QB
          }
        }
        async function iG(BB, OB) {
          const {
            data: GB
          } = await FG((0, YB.E)(BB), OB);
          return GB.email
        }
        async function LG(BB, OB, GB) {
          var YB;
          const DB = IO(BB),
            QB = {
              returnSecureToken: !0,
              email: OB,
              password: GB,
              clientType: "CLIENT_TYPE_WEB"
            };
          let oB;
          if (null === (YB = DB._getRecaptchaConfig()) || void 0 === YB ? void 0 : YB.emailPasswordEnabled) {
            const BB = await KO(DB, QB, "signUpPassword");
            oB = JG(DB, BB)
          } else oB = JG(DB, QB).catch((async BB => {
            if ("auth/missing-recaptcha-token" === BB.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const BB = await KO(DB, QB, "signUpPassword");
              return JG(DB, BB)
            }
            return Promise.reject(BB)
          }));
          const jB = await oB.catch((BB => Promise.reject(BB))),
            yB = await MG._fromIdTokenResponse(DB, "signIn", jB);
          return await DB._updateCurrentUser(yB.user), yB
        }

        function gG(BB, OB, GB) {
          return VG((0, YB.E)(BB), tO.credential(OB, GB))
        }
        async function rG(BB, OB, GB) {
          var YB;
          const DB = IO(BB),
            QB = {
              requestType: "EMAIL_SIGNIN",
              email: OB,
              clientType: "CLIENT_TYPE_WEB"
            };

          function oB(BB, OB) {
            fB(OB.handleCodeInApp, DB, "argument-error"), OB && KG(DB, BB, OB)
          }
          if (null === (YB = DB._getRecaptchaConfig()) || void 0 === YB ? void 0 : YB.emailPasswordEnabled) {
            const BB = await KO(DB, QB, "getOobCode", !0);
            oB(BB, GB), await eO(DB, BB)
          } else oB(QB, GB), await eO(DB, QB).catch((async BB => {
            if ("auth/missing-recaptcha-token" !== BB.code) return Promise.reject(BB);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const BB = await KO(DB, QB, "getOobCode", !0);
              oB(BB, GB), await eO(DB, BB)
            }
          }))
        }

        function XG(BB, OB) {
          const GB = sO.parseLink(OB);
          return "EMAIL_SIGNIN" === (null === GB || void 0 === GB ? void 0 : GB.operation)
        }
        async function wG(BB, OB, GB) {
          const DB = (0, YB.E)(BB),
            QB = tO.credentialWithLink(OB, GB || KB());
          return fB(QB._tenantId === (DB.tenantId || null), DB, "tenant-id-mismatch"), VG(DB, QB)
        }
        async function EG(BB, OB) {
          const GB = {
              identifier: OB,
              continueUri: uB() ? KB() : "http://localhost"
            },
            {
              signinMethods: DB
            } = await async function(BB, OB) {
              return XB(BB, "POST", "/v1/accounts:createAuthUri", rB(BB, OB))
            }((0, YB.E)(BB), GB);
          return DB || []
        }
        async function cG(BB, OB) {
          const GB = (0, YB.E)(BB),
            DB = {
              requestType: "VERIFY_EMAIL",
              idToken: await BB.getIdToken()
            };
          OB && KG(GB.auth, DB, OB);
          const {
            email: QB
          } = await async function(BB, OB) {
            return hO(BB, OB)
          }(GB.auth, DB);
          QB !== BB.email && await BB.reload()
        }
        async function hG(BB, OB, GB) {
          const DB = (0, YB.E)(BB),
            QB = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await BB.getIdToken(),
              newEmail: OB
            };
          GB && KG(DB.auth, QB, GB);
          const {
            email: oB
          } = await async function(BB, OB) {
            return hO(BB, OB)
          }(DB.auth, QB);
          oB !== BB.email && await BB.reload()
        }
        async function aG(BB, OB) {
          let {
            displayName: GB,
            photoURL: DB
          } = OB;
          if (void 0 === GB && void 0 === DB) return;
          const QB = (0, YB.E)(BB),
            oB = {
              idToken: await QB.getIdToken(),
              displayName: GB,
              photoUrl: DB,
              returnSecureToken: !0
            },
            jB = await vB(QB, async function(BB, OB) {
              return XB(BB, "POST", "/v1/accounts:update", OB)
            }(QB.auth, oB));
          QB.displayName = jB.displayName || null, QB.photoURL = jB.photoUrl || null;
          const yB = QB.providerData.find((BB => {
            let {
              providerId: OB
            } = BB;
            return "password" === OB
          }));
          yB && (yB.displayName = QB.displayName, yB.photoURL = QB.photoURL), await QB._updateTokensIfNecessary(jB)
        }

        function eG(BB, OB) {
          return bG((0, YB.E)(BB), OB, null)
        }

        function TG(BB, OB) {
          return bG((0, YB.E)(BB), null, OB)
        }
        async function bG(BB, OB, GB) {
          const {
            auth: YB
          } = BB, DB = {
            idToken: await BB.getIdToken(),
            returnSecureToken: !0
          };
          OB && (DB.email = OB), GB && (DB.password = GB);
          const QB = await vB(BB, EO(YB, DB));
          await BB._updateTokensIfNecessary(QB, !0)
        }
        class CG {
          constructor(BB, OB) {
            let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = BB, this.providerId = OB, this.profile = GB
          }
        }
        class HG extends CG {
          constructor(BB, OB, GB, YB) {
            super(BB, OB, GB), this.username = YB
          }
        }
        class vG extends CG {
          constructor(BB, OB) {
            super(BB, "facebook.com", OB)
          }
        }
        class sG extends HG {
          constructor(BB, OB) {
            super(BB, "github.com", OB, "string" === typeof(null === OB || void 0 === OB ? void 0 : OB.login) ? null === OB || void 0 === OB ? void 0 : OB.login : null)
          }
        }
        class xG extends CG {
          constructor(BB, OB) {
            super(BB, "google.com", OB)
          }
        }
        class tG extends HG {
          constructor(BB, OB, GB) {
            super(BB, "twitter.com", OB, GB)
          }
        }

        function BY(BB) {
          const {
            user: OB,
            _tokenResponse: GB
          } = BB;
          return OB.isAnonymous && !GB ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(BB) {
            var OB, GB;
            if (!BB) return null;
            const {
              providerId: YB
            } = BB, DB = BB.rawUserInfo ? JSON.parse(BB.rawUserInfo) : {}, QB = BB.isNewUser || "identitytoolkit#SignupNewUserResponse" === BB.kind;
            if (!YB && (null === BB || void 0 === BB ? void 0 : BB.idToken)) {
              const YB = null === (GB = null === (OB = HB(BB.idToken)) || void 0 === OB ? void 0 : OB.firebase) || void 0 === GB ? void 0 : GB.sign_in_provider;
              if (YB) return new CG(QB, "anonymous" !== YB && "custom" !== YB ? YB : null)
            }
            if (!YB) return null;
            switch (YB) {
              case "facebook.com":
                return new vG(QB, DB);
              case "github.com":
                return new sG(QB, DB);
              case "google.com":
                return new xG(QB, DB);
              case "twitter.com":
                return new tG(QB, DB, BB.screenName || null);
              case "custom":
              case "anonymous":
                return new CG(QB, null);
              default:
                return new CG(QB, YB, DB)
            }
          }(GB)
        }

        function OY(BB, OB) {
          return (0, YB.E)(BB).setPersistence(OB)
        }

        function GY(BB) {
          return IO(BB).initializeRecaptchaConfig()
        }

        function YY(BB, OB, GB, DB) {
          return (0, YB.E)(BB).onIdTokenChanged(OB, GB, DB)
        }

        function DY(BB, OB, GB) {
          return (0, YB.E)(BB).beforeAuthStateChanged(OB, GB)
        }

        function QY(BB, OB, GB, DB) {
          return (0, YB.E)(BB).onAuthStateChanged(OB, GB, DB)
        }

        function oY(BB) {
          (0, YB.E)(BB).useDeviceLanguage()
        }

        function jY(BB, OB) {
          return (0, YB.E)(BB).updateCurrentUser(OB)
        }

        function yY(BB) {
          return (0, YB.E)(BB).signOut()
        }
        async function JY(BB) {
          return (0, YB.E)(BB).delete()
        }
        class MY {
          constructor(BB, OB, GB) {
            this.type = BB, this.credential = OB, this.auth = GB
          }
          static _fromIdtoken(BB, OB) {
            return new MY("enroll", BB, OB)
          }
          static _fromMfaPendingCredential(BB) {
            return new MY("signin", BB)
          }
          toJSON() {
            const BB = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [BB]: this.credential
              }
            }
          }
          static fromJSON(BB) {
            var OB, GB;
            if (null === BB || void 0 === BB ? void 0 : BB.multiFactorSession) {
              if (null === (OB = BB.multiFactorSession) || void 0 === OB ? void 0 : OB.pendingCredential) return MY._fromMfaPendingCredential(BB.multiFactorSession.pendingCredential);
              if (null === (GB = BB.multiFactorSession) || void 0 === GB ? void 0 : GB.idToken) return MY._fromIdtoken(BB.multiFactorSession.idToken)
            }
            return null
          }
        }
        class PY {
          constructor(BB, OB, GB) {
            this.session = BB, this.hints = OB, this.signInResolver = GB
          }
          static _fromError(BB, OB) {
            const GB = IO(BB),
              YB = OB.customData._serverResponse,
              DB = (YB.mfaInfo || []).map((BB => fG._fromServerResponse(GB, BB)));
            fB(YB.mfaPendingCredential, GB, "internal-error");
            const QB = MY._fromMfaPendingCredential(YB.mfaPendingCredential);
            return new PY(QB, DB, (async BB => {
              const DB = await BB._process(GB, QB);
              delete YB.mfaInfo, delete YB.mfaPendingCredential;
              const oB = Object.assign(Object.assign({}, YB), {
                idToken: DB.idToken,
                refreshToken: DB.refreshToken
              });
              switch (OB.operationType) {
                case "signIn":
                  const BB = await MG._fromIdTokenResponse(GB, OB.operationType, oB);
                  return await GB._updateCurrentUser(BB.user), BB;
                case "reauthenticate":
                  return fB(OB.user, GB, "internal-error"), MG._forOperation(OB.user, OB.operationType, oB);
                default:
                  AB(GB, "internal-error")
              }
            }))
          }
          async resolveSignIn(BB) {
            const OB = BB;
            return this.signInResolver(OB)
          }
        }

        function zY(BB, OB) {
          var GB;
          const DB = (0, YB.E)(BB),
            QB = OB;
          return fB(OB.customData.operationType, DB, "argument-error"), fB(null === (GB = QB.customData._serverResponse) || void 0 === GB ? void 0 : GB.mfaPendingCredential, DB, "argument-error"), PY._fromError(DB, QB)
        }
        class lY {
          constructor(BB) {
            this.user = BB, this.enrolledFactors = [], BB._onReload((OB => {
              OB.mfaInfo && (this.enrolledFactors = OB.mfaInfo.map((OB => fG._fromServerResponse(BB.auth, OB))))
            }))
          }
          static _fromUser(BB) {
            return new lY(BB)
          }
          async getSession() {
            return MY._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(BB, OB) {
            const GB = BB,
              YB = await this.getSession(),
              DB = await vB(this.user, GB._process(this.user.auth, YB, OB));
            return await this.user._updateTokensIfNecessary(DB), this.user.reload()
          }
          async unenroll(BB) {
            const OB = "string" === typeof BB ? BB : BB.uid,
              GB = await this.user.getIdToken();
            try {
              const BB = await vB(this.user, (YB = this.user.auth, DB = {
                idToken: GB,
                mfaEnrollmentId: OB
              }, XB(YB, "POST", "/v2/accounts/mfaEnrollment:withdraw", rB(YB, DB))));
              this.enrolledFactors = this.enrolledFactors.filter((BB => {
                let {
                  uid: GB
                } = BB;
                return GB !== OB
              })), await this.user._updateTokensIfNecessary(BB), await this.user.reload()
            } catch (QB) {
              throw QB
            }
            var YB, DB
          }
        }
        const pY = new WeakMap;

        function qY(BB) {
          const OB = (0, YB.E)(BB);
          return pY.has(OB) || pY.set(OB, lY._fromUser(OB)), pY.get(OB)
        }
        const ZY = "__sak";
        class NY {
          constructor(BB, OB) {
            this.storageRetriever = BB, this.type = OB
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(ZY, "1"), this.storage.removeItem(ZY), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (BB) {
              return Promise.resolve(!1)
            }
          }
          _set(BB, OB) {
            return this.storage.setItem(BB, JSON.stringify(OB)), Promise.resolve()
          }
          _get(BB) {
            const OB = this.storage.getItem(BB);
            return Promise.resolve(OB ? JSON.parse(OB) : null)
          }
          _remove(BB) {
            return this.storage.removeItem(BB), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class RY extends NY {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (BB, OB) => this.onStorageEvent(BB, OB), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const BB = (0, YB.H)();
              return zO(BB) || RO(BB)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (BB) {
                return !1
              }
            }(), this.fallbackToPolling = WO(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(BB) {
            for (const OB of Object.keys(this.listeners)) {
              const GB = this.storage.getItem(OB),
                YB = this.localCache[OB];
              GB !== YB && BB(OB, YB, GB)
            }
          }
          onStorageEvent(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!BB.key) return void this.forAllChangedKeys(((BB, OB, GB) => {
              this.notifyListeners(BB, GB)
            }));
            const GB = BB.key;
            if (OB ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const YB = this.storage.getItem(GB);
              if (BB.newValue !== YB) null !== BB.newValue ? this.storage.setItem(GB, BB.newValue) : this.storage.removeItem(GB);
              else if (this.localCache[GB] === BB.newValue && !OB) return
            }
            const DB = () => {
                const BB = this.storage.getItem(GB);
                (OB || this.localCache[GB] !== BB) && this.notifyListeners(GB, BB)
              },
              QB = this.storage.getItem(GB);
            (0, YB.P)() && 10 === document.documentMode && QB !== BB.newValue && BB.newValue !== BB.oldValue ? setTimeout(DB, 10) : DB()
          }
          notifyListeners(BB, OB) {
            this.localCache[BB] = OB;
            const GB = this.listeners[BB];
            if (GB)
              for (const YB of Array.from(GB)) YB(OB ? JSON.parse(OB) : OB)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((BB, OB, GB) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: BB,
                  oldValue: OB,
                  newValue: GB
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
          _addListener(BB, OB) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[BB] || (this.listeners[BB] = new Set, this.localCache[BB] = this.storage.getItem(BB)), this.listeners[BB].add(OB)
          }
          _removeListener(BB, OB) {
            this.listeners[BB] && (this.listeners[BB].delete(OB), 0 === this.listeners[BB].size && delete this.listeners[BB]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(BB, OB) {
            await super._set(BB, OB), this.localCache[BB] = JSON.stringify(OB)
          }
          async _get(BB) {
            const OB = await super._get(BB);
            return this.localCache[BB] = JSON.stringify(OB), OB
          }
          async _remove(BB) {
            await super._remove(BB), delete this.localCache[BB]
          }
        }
        RY.type = "LOCAL";
        const WY = RY;
        class AY extends NY {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(BB, OB) {}
          _removeListener(BB, OB) {}
        }
        AY.type = "SESSION";
        const VY = AY;
        class SY {
          constructor(BB) {
            this.eventTarget = BB, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(BB) {
            const OB = this.receivers.find((OB => OB.isListeningto(BB)));
            if (OB) return OB;
            const GB = new SY(BB);
            return this.receivers.push(GB), GB
          }
          isListeningto(BB) {
            return this.eventTarget === BB
          }
          async handleEvent(BB) {
            const OB = BB,
              {
                eventId: GB,
                eventType: YB,
                data: DB
              } = OB.data,
              QB = this.handlersMap[YB];
            if (!(null === QB || void 0 === QB ? void 0 : QB.size)) return;
            OB.ports[0].postMessage({
              status: "ack",
              eventId: GB,
              eventType: YB
            });
            const oB = Array.from(QB).map((async BB => BB(OB.origin, DB))),
              jB = await
            function(BB) {
              return Promise.all(BB.map((async BB => {
                try {
                  return {
                    fulfilled: !0,
                    value: await BB
                  }
                } catch (OB) {
                  return {
                    fulfilled: !1,
                    reason: OB
                  }
                }
              })))
            }(oB);
            OB.ports[0].postMessage({
              status: "done",
              eventId: GB,
              eventType: YB,
              response: jB
            })
          }
          _subscribe(BB, OB) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[BB] || (this.handlersMap[BB] = new Set), this.handlersMap[BB].add(OB)
          }
          _unsubscribe(BB, OB) {
            this.handlersMap[BB] && OB && this.handlersMap[BB].delete(OB), OB && 0 !== this.handlersMap[BB].size || delete this.handlersMap[BB], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function nY() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            GB = "";
          for (let YB = 0; YB < OB; YB++) GB += Math.floor(10 * Math.random());
          return BB + GB
        }
        SY.receivers = [];
        class UY {
          constructor(BB) {
            this.target = BB, this.handlers = new Set
          }
          removeMessageHandler(BB) {
            BB.messageChannel && (BB.messageChannel.port1.removeEventListener("message", BB.kR), BB.messageChannel.port1.close()), this.handlers.delete(BB)
          }
          async _send(BB, OB) {
            let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const YB = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!YB) throw new Error("connection_unavailable");
            let DB, QB;
            return new Promise(((oB, jB) => {
              const yB = nY("", 20);
              YB.port1.start();
              const JB = setTimeout((() => {
                jB(new Error("unsupported_event"))
              }), GB);
              QB = {
                messageChannel: YB,
                kR(BB) {
                  const OB = BB;
                  if (OB.data.eventId === yB) switch (OB.data.status) {
                    case "ack":
                      clearTimeout(JB), DB = setTimeout((() => {
                        jB(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(DB), oB(OB.data.response);
                      break;
                    default:
                      clearTimeout(JB), clearTimeout(DB), jB(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(QB), YB.port1.addEventListener("message", QB.kR), this.target.postMessage({
                eventType: BB,
                eventId: yB,
                data: OB
              }, [YB.port2])
            })).finally((() => {
              QB && this.removeMessageHandler(QB)
            }))
          }
        }

        function fY() {
          return window
        }

        function kY() {
          return "undefined" !== typeof fY().WorkerGlobalScope && "function" === typeof fY().importScripts
        }
        const dY = "firebaseLocalStorageDb",
          KY = "firebaseLocalStorage",
          uY = "fbase_key";
        class mY {
          constructor(BB) {
            this.request = BB
          }
          toPromise() {
            return new Promise(((BB, OB) => {
              this.request.addEventListener("success", (() => {
                BB(this.request.result)
              })), this.request.addEventListener("error", (() => {
                OB(this.request.error)
              }))
            }))
          }
        }

        function IY(BB, OB) {
          return BB.transaction([KY], OB ? "readwrite" : "readonly").objectStore(KY)
        }

        function FY() {
          const BB = indexedDB.open(dY, 1);
          return new Promise(((OB, GB) => {
            BB.addEventListener("error", (() => {
              GB(BB.error)
            })), BB.addEventListener("upgradeneeded", (() => {
              const OB = BB.result;
              try {
                OB.createObjectStore(KY, {
                  keyPath: uY
                })
              } catch (YB) {
                GB(YB)
              }
            })), BB.addEventListener("success", (async () => {
              const GB = BB.result;
              GB.objectStoreNames.contains(KY) ? OB(GB) : (GB.close(), await
                function() {
                  const BB = indexedDB.deleteDatabase(dY);
                  return new mY(BB).toPromise()
                }(), OB(await FY()))
            }))
          }))
        }
        async function iY(BB, OB, GB) {
          const YB = IY(BB, !0).put({
            [uY]: OB,
            value: GB
          });
          return new mY(YB).toPromise()
        }

        function LY(BB, OB) {
          const GB = IY(BB, !0).delete(OB);
          return new mY(GB).toPromise()
        }
        class gY {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await FY()), this.db
          }
          async _withRetries(BB) {
            let OB = 0;
            for (;;) try {
              const OB = await this._openDb();
              return await BB(OB)
            } catch (GB) {
              if (OB++ > 3) throw GB;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return kY() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = SY._getInstance(kY() ? self : null), this.receiver._subscribe("keyChanged", (async (BB, OB) => ({
              keyProcessed: (await this._poll()).includes(OB.key)
            }))), this.receiver._subscribe("ping", (async (BB, OB) => ["keyChanged"]))
          }
          async initializeSender() {
            var BB, OB;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (BB) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new UY(this.activeServiceWorker);
            const GB = await this.sender._send("ping", {}, 800);
            GB && (null === (BB = GB[0]) || void 0 === BB ? void 0 : BB.fulfilled) && (null === (OB = GB[0]) || void 0 === OB ? void 0 : OB.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(BB) {
            if (this.sender && this.activeServiceWorker && function() {
                var BB;
                return (null === (BB = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === BB ? void 0 : BB.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: BB
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (OB) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const BB = await FY();
              return await iY(BB, ZY, "1"), await LY(BB, ZY), !0
            } catch (BB) {}
            return !1
          }
          async _withPendingWrite(BB) {
            this.pendingWrites++;
            try {
              await BB()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(BB, OB) {
            return this._withPendingWrite((async () => (await this._withRetries((GB => iY(GB, BB, OB))), this.localCache[BB] = OB, this.notifyServiceWorker(BB))))
          }
          async _get(BB) {
            const OB = await this._withRetries((OB => async function(BB, OB) {
              const GB = IY(BB, !1).get(OB),
                YB = await new mY(GB).toPromise();
              return void 0 === YB ? null : YB.value
            }(OB, BB)));
            return this.localCache[BB] = OB, OB
          }
          async _remove(BB) {
            return this._withPendingWrite((async () => (await this._withRetries((OB => LY(OB, BB))), delete this.localCache[BB], this.notifyServiceWorker(BB))))
          }
          async _poll() {
            const BB = await this._withRetries((BB => {
              const OB = IY(BB, !1).getAll();
              return new mY(OB).toPromise()
            }));
            if (!BB) return [];
            if (0 !== this.pendingWrites) return [];
            const OB = [],
              GB = new Set;
            for (const {
                fbase_key: YB,
                value: DB
              }
              of BB) GB.add(YB), JSON.stringify(this.localCache[YB]) !== JSON.stringify(DB) && (this.notifyListeners(YB, DB), OB.push(YB));
            for (const YB of Object.keys(this.localCache)) this.localCache[YB] && !GB.has(YB) && (this.notifyListeners(YB, null), OB.push(YB));
            return OB
          }
          notifyListeners(BB, OB) {
            this.localCache[BB] = OB;
            const GB = this.listeners[BB];
            if (GB)
              for (const YB of Array.from(GB)) YB(OB)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(BB, OB) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[BB] || (this.listeners[BB] = new Set, this._get(BB)), this.listeners[BB].add(OB)
          }
          _removeListener(BB, OB) {
            this.listeners[BB] && (this.listeners[BB].delete(OB), 0 === this.listeners[BB].size && delete this.listeners[BB]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        gY.type = "LOCAL";
        const rY = gY;
        const XY = 1e12;
        class wY {
          constructor(BB) {
            this.auth = BB, this.counter = XY, this._widgets = new Map
          }
          render(BB, OB) {
            const GB = this.counter;
            return this._widgets.set(GB, new EY(BB, this.auth.name, OB || {})), this.counter++, GB
          }
          reset(BB) {
            var OB;
            const GB = BB || XY;
            null === (OB = this._widgets.get(GB)) || void 0 === OB || OB.delete(), this._widgets.delete(GB)
          }
          getResponse(BB) {
            var OB;
            const GB = BB || XY;
            return (null === (OB = this._widgets.get(GB)) || void 0 === OB ? void 0 : OB.getResponse()) || ""
          }
          async execute(BB) {
            var OB;
            const GB = BB || XY;
            return null === (OB = this._widgets.get(GB)) || void 0 === OB || OB.execute(), ""
          }
        }
        class EY {
          constructor(BB, OB, GB) {
            this.params = GB, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const YB = "string" === typeof BB ? document.getElementById(BB) : BB;
            fB(YB, "argument-error", {
              appName: OB
            }), this.container = YB, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(BB) {
                const OB = [],
                  GB = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let YB = 0; YB < BB; YB++) OB.push(GB.charAt(Math.floor(Math.random() * GB.length)));
                return OB.join("")
              }(50);
              const {
                callback: BB,
                "expired-callback": OB
              } = this.params;
              if (BB) try {
                BB(this.responseToken)
              } catch (GB) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, OB) try {
                  OB()
                } catch (GB) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const cY = kO("rcb"),
          hY = new IB(3e4, 6e4);
        class aY {
          constructor() {
            var BB;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (BB = fY().grecaptcha) || void 0 === BB ? void 0 : BB.render)
          }
          load(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return fB(function(BB) {
              return BB.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(BB)
            }(OB), BB, "argument-error"), this.shouldResolveImmediately(OB) && SO(fY().grecaptcha) ? Promise.resolve(fY().grecaptcha) : new Promise(((GB, DB) => {
              const QB = fY().setTimeout((() => {
                DB(VB(BB, "network-request-failed"))
              }), hY.get());
              fY()[cY] = () => {
                fY().clearTimeout(QB), delete fY()[cY];
                const YB = fY().grecaptcha;
                if (!YB || !SO(YB)) return void DB(VB(BB, "internal-error"));
                const oB = YB.render;
                YB.render = (BB, OB) => {
                  const GB = oB(BB, OB);
                  return this.counter++, GB
                }, this.hostLanguage = OB, GB(YB)
              };
              fO(`https://www.google.com/recaptcha/api.js??${(0,YB.eb)({onload:cY,render:"explicit",hl:OB})}`).catch((() => {
                clearTimeout(QB), DB(VB(BB, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(BB) {
            var OB;
            return !!(null === (OB = fY().grecaptcha) || void 0 === OB ? void 0 : OB.render) && (BB === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class eY {
          async load(BB) {
            return new wY(BB)
          }
          clearedOneInstance() {}
        }
        const TY = "recaptcha",
          bY = {
            theme: "light",
            type: "image"
          };
        class CY {
          constructor(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, bY),
              GB = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = OB, this.type = TY, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = IO(GB), this.isInvisible = "invisible" === this.parameters.size, fB("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const YB = "string" === typeof BB ? document.getElementById(BB) : BB;
            fB(YB, this.auth, "argument-error"), this.container = YB, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new eY : new aY, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const BB = await this.render(),
              OB = this.getAssertedRecaptcha(),
              GB = OB.getResponse(BB);
            return GB || new Promise((GB => {
              const YB = BB => {
                BB && (this.tokenChangeListeners.delete(YB), GB(BB))
              };
              this.tokenChangeListeners.add(YB), this.isInvisible && OB.execute(BB)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (BB) {
              return Promise.reject(BB)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((BB => {
              throw this.renderPromise = null, BB
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((BB => {
              this.container.removeChild(BB)
            }))
          }
          validateStartingState() {
            fB(!this.parameters.sitekey, this.auth, "argument-error"), fB(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), fB("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(BB) {
            return OB => {
              if (this.tokenChangeListeners.forEach((BB => BB(OB))), "function" === typeof BB) BB(OB);
              else if ("string" === typeof BB) {
                const GB = fY()[BB];
                "function" === typeof GB && GB(OB)
              }
            }
          }
          assertNotDestroyed() {
            fB(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let BB = this.container;
              if (!this.isInvisible) {
                const OB = document.createElement("div");
                BB.appendChild(OB), BB = OB
              }
              this.widgetId = this.getAssertedRecaptcha().render(BB, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            fB(uB() && !kY(), this.auth, "internal-error"), await
            function() {
              let BB = null;
              return new Promise((OB => {
                "complete" !== document.readyState ? (BB = () => OB(), window.addEventListener("load", BB)) : OB()
              })).catch((OB => {
                throw BB && window.removeEventListener("load", BB), OB
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const BB = await async function(BB) {
              return (await XB(BB, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            fB(BB, this.auth, "internal-error"), this.parameters.sitekey = BB
          }
          getAssertedRecaptcha() {
            return fB(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class HY {
          constructor(BB, OB) {
            this.verificationId = BB, this.onConfirmation = OB
          }
          confirm(BB) {
            const OB = vO._fromVerification(this.verificationId, BB);
            return this.onConfirmation(OB)
          }
        }
        async function vY(BB, OB, GB) {
          const DB = IO(BB),
            QB = await tY(DB, OB, (0, YB.E)(GB));
          return new HY(QB, (BB => VG(DB, BB)))
        }
        async function sY(BB, OB, GB) {
          const DB = (0, YB.E)(BB);
          await RG(!1, DB, "phone");
          const QB = await tY(DB.auth, OB, (0, YB.E)(GB));
          return new HY(QB, (BB => SG(DB, BB)))
        }
        async function xY(BB, OB, GB) {
          const DB = (0, YB.E)(BB),
            QB = await tY(DB.auth, OB, (0, YB.E)(GB));
          return new HY(QB, (BB => nG(DB, BB)))
        }
        async function tY(BB, OB, GB) {
          var YB;
          const DB = await GB.verify();
          try {
            let QB;
            if (fB("string" === typeof DB, BB, "argument-error"), fB(GB.type === TY, BB, "argument-error"), QB = "string" === typeof OB ? {
                phoneNumber: OB
              } : OB, "session" in QB) {
              const OB = QB.session;
              if ("phoneNumber" in QB) {
                fB("enroll" === OB.type, BB, "internal-error");
                const GB = await
                function(BB, OB) {
                  return XB(BB, "POST", "/v2/accounts/mfaEnrollment:start", rB(BB, OB))
                }(BB, {
                  idToken: OB.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: QB.phoneNumber,
                    recaptchaToken: DB
                  }
                });
                return GB.phoneSessionInfo.sessionInfo
              } {
                fB("signin" === OB.type, BB, "internal-error");
                const GB = (null === (YB = QB.multiFactorHint) || void 0 === YB ? void 0 : YB.uid) || QB.multiFactorUid;
                fB(GB, BB, "missing-multi-factor-info");
                const oB = await
                function(BB, OB) {
                  return XB(BB, "POST", "/v2/accounts/mfaSignIn:start", rB(BB, OB))
                }(BB, {
                  mfaPendingCredential: OB.credential,
                  mfaEnrollmentId: GB,
                  phoneSignInInfo: {
                    recaptchaToken: DB
                  }
                });
                return oB.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: OB
              } = await async function(BB, OB) {
                return XB(BB, "POST", "/v1/accounts:sendVerificationCode", rB(BB, OB))
              }(BB, {
                phoneNumber: QB.phoneNumber,
                recaptchaToken: DB
              });
              return OB
            }
          } finally {
            GB._reset()
          }
        }
        async function BD(BB, OB) {
          await NG((0, YB.E)(BB), OB)
        }
        class OD {
          constructor(BB) {
            this.providerId = OD.PROVIDER_ID, this.auth = IO(BB)
          }
          verifyPhoneNumber(BB, OB) {
            return tY(this.auth, BB, (0, YB.E)(OB))
          }
          static credential(BB, OB) {
            return vO._fromVerification(BB, OB)
          }
          static credentialFromResult(BB) {
            const OB = BB;
            return OD.credentialFromTaggedObject(OB)
          }
          static credentialFromError(BB) {
            return OD.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: OB
            } = BB;
            if (!OB) return null;
            const {
              phoneNumber: GB,
              temporaryProof: YB
            } = OB;
            return GB && YB ? vO._fromTokenResponse(GB, YB) : null
          }
        }

        function GD(BB, OB) {
          return OB ? QO(OB) : (fB(BB._popupRedirectResolver, BB, "argument-error"), BB._popupRedirectResolver)
        }
        OD.PROVIDER_ID = "phone", OD.PHONE_SIGN_IN_METHOD = "phone";
        class YD extends XO {
          constructor(BB) {
            super("custom", "custom"), this.params = BB
          }
          _getIdTokenResponse(BB) {
            return bO(BB, this._buildIdpRequest())
          }
          _linkToIdToken(BB, OB) {
            return bO(BB, this._buildIdpRequest(OB))
          }
          _getReauthenticationResolver(BB) {
            return bO(BB, this._buildIdpRequest())
          }
          _buildIdpRequest(BB) {
            const OB = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return BB && (OB.idToken = BB), OB
          }
        }

        function DD(BB) {
          return AG(BB.auth, new YD(BB), BB.bypassAuthState)
        }

        function QD(BB) {
          const {
            auth: OB,
            user: GB
          } = BB;
          return fB(GB, OB, "internal-error"), WG(GB, new YD(BB), BB.bypassAuthState)
        }
        async function oD(BB) {
          const {
            auth: OB,
            user: GB
          } = BB;
          return fB(GB, OB, "internal-error"), NG(GB, new YD(BB), BB.bypassAuthState)
        }
        class jD {
          constructor(BB, OB, GB, YB) {
            let DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = BB, this.resolver = GB, this.user = YB, this.bypassAuthState = DB, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(OB) ? OB : [OB]
          }
          execute() {
            return new Promise((async (BB, OB) => {
              this.pendingPromise = {
                resolve: BB,
                reject: OB
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (GB) {
                this.reject(GB)
              }
            }))
          }
          async onAuthEvent(BB) {
            const {
              urlResponse: OB,
              sessionId: GB,
              postBody: YB,
              tenantId: DB,
              error: QB,
              type: oB
            } = BB;
            if (QB) return void this.reject(QB);
            const jB = {
              auth: this.auth,
              requestUri: OB,
              sessionId: GB,
              tenantId: DB || void 0,
              postBody: YB || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(oB)(jB))
            } catch (yB) {
              this.reject(yB)
            }
          }
          onError(BB) {
            this.reject(BB)
          }
          getIdpTask(BB) {
            switch (BB) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return DD;
              case "linkViaPopup":
              case "linkViaRedirect":
                return oD;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return QD;
              default:
                AB(this.auth, "internal-error")
            }
          }
          resolve(BB) {
            dB(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(BB), this.unregisterAndCleanUp()
          }
          reject(BB) {
            dB(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(BB), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const yD = new IB(2e3, 1e4);
        async function JD(BB, OB, GB) {
          const YB = IO(BB);
          nB(BB, OB, BG);
          const DB = GD(YB, GB);
          return new zD(YB, "signInViaPopup", OB, DB).executeNotNull()
        }
        async function MD(BB, OB, GB) {
          const DB = (0, YB.E)(BB);
          nB(DB.auth, OB, BG);
          const QB = GD(DB.auth, GB);
          return new zD(DB.auth, "reauthViaPopup", OB, QB, DB).executeNotNull()
        }
        async function PD(BB, OB, GB) {
          const DB = (0, YB.E)(BB);
          nB(DB.auth, OB, BG);
          const QB = GD(DB.auth, GB);
          return new zD(DB.auth, "linkViaPopup", OB, QB, DB).executeNotNull()
        }
        class zD extends jD {
          constructor(BB, OB, GB, YB, DB) {
            super(BB, OB, YB, DB), this.provider = GB, this.authWindow = null, this.pollId = null, zD.currentPopupAction && zD.currentPopupAction.cancel(), zD.currentPopupAction = this
          }
          async executeNotNull() {
            const BB = await this.execute();
            return fB(BB, this.auth, "internal-error"), BB
          }
          async onExecution() {
            dB(1 === this.filter.length, "Popup operations only handle one event");
            const BB = nY();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], BB), this.authWindow.associatedEvent = BB, this.resolver._originValidation(this.auth).catch((BB => {
              this.reject(BB)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (BB => {
              BB || this.reject(VB(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var BB;
            return (null === (BB = this.authWindow) || void 0 === BB ? void 0 : BB.associatedEvent) || null
          }
          cancel() {
            this.reject(VB(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, zD.currentPopupAction = null
          }
          pollUserCancellation() {
            const BB = () => {
              var OB, GB;
              (null === (GB = null === (OB = this.authWindow) || void 0 === OB ? void 0 : OB.window) || void 0 === GB ? void 0 : GB.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(VB(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(BB, yD.get())
            };
            BB()
          }
        }
        zD.currentPopupAction = null;
        const lD = "pendingRedirect",
          pD = new Map;
        class qD extends jD {
          constructor(BB, OB) {
            super(BB, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], OB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let BB = pD.get(this.auth._key());
            if (!BB) {
              try {
                const OB = await async function(BB, OB) {
                  const GB = WD(OB),
                    YB = RD(BB);
                  if (!await YB._isAvailable()) return !1;
                  const DB = "true" === await YB._get(GB);
                  return await YB._remove(GB), DB
                }(this.resolver, this.auth) ? await super.execute() : null;
                BB = () => Promise.resolve(OB)
              } catch (OB) {
                BB = () => Promise.reject(OB)
              }
              pD.set(this.auth._key(), BB)
            }
            return this.bypassAuthState || pD.set(this.auth._key(), (() => Promise.resolve(null))), BB()
          }
          async onAuthEvent(BB) {
            if ("signInViaRedirect" === BB.type) return super.onAuthEvent(BB);
            if ("unknown" !== BB.type) {
              if (BB.eventId) {
                const OB = await this.auth._redirectUserForId(BB.eventId);
                if (OB) return this.user = OB, super.onAuthEvent(BB);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function ZD(BB, OB) {
          return RD(BB)._set(WD(OB), "true")
        }

        function ND(BB, OB) {
          pD.set(BB._key(), OB)
        }

        function RD(BB) {
          return QO(BB._redirectPersistence)
        }

        function WD(BB) {
          return yO(lD, BB.config.apiKey, BB.name)
        }

        function AD(BB, OB, GB) {
          return async function(BB, OB, GB) {
            const YB = IO(BB);
            nB(BB, OB, BG), await YB._initializationPromise;
            const DB = GD(YB, GB);
            return await ZD(DB, YB), DB._openRedirect(YB, OB, "signInViaRedirect")
          }(BB, OB, GB)
        }

        function VD(BB, OB, GB) {
          return async function(BB, OB, GB) {
            const DB = (0, YB.E)(BB);
            nB(DB.auth, OB, BG), await DB.auth._initializationPromise;
            const QB = GD(DB.auth, GB);
            await ZD(QB, DB.auth);
            const oB = await fD(DB);
            return QB._openRedirect(DB.auth, OB, "reauthViaRedirect", oB)
          }(BB, OB, GB)
        }

        function SD(BB, OB, GB) {
          return async function(BB, OB, GB) {
            const DB = (0, YB.E)(BB);
            nB(DB.auth, OB, BG), await DB.auth._initializationPromise;
            const QB = GD(DB.auth, GB);
            await RG(!1, DB, OB.providerId), await ZD(QB, DB.auth);
            const oB = await fD(DB);
            return QB._openRedirect(DB.auth, OB, "linkViaRedirect", oB)
          }(BB, OB, GB)
        }
        async function nD(BB, OB) {
          return await IO(BB)._initializationPromise, UD(BB, OB, !1)
        }
        async function UD(BB, OB) {
          let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const YB = IO(BB),
            DB = GD(YB, OB),
            QB = new qD(YB, DB, GB),
            oB = await QB.execute();
          return oB && !GB && (delete oB.user._redirectEventId, await YB._persistUserIfCurrent(oB.user), await YB._setRedirectUser(null, OB)), oB
        }
        async function fD(BB) {
          const OB = nY(`${BB.uid}:::`);
          return BB._redirectEventId = OB, await BB.auth._setRedirectUser(BB), await BB.auth._persistUserIfCurrent(BB), OB
        }
        class kD {
          constructor(BB) {
            this.auth = BB, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(BB) {
            this.consumers.add(BB), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, BB) && (this.sendToConsumer(this.queuedRedirectEvent, BB), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(BB) {
            this.consumers.delete(BB)
          }
          onEvent(BB) {
            if (this.hasEventBeenHandled(BB)) return !1;
            let OB = !1;
            return this.consumers.forEach((GB => {
              this.isEventForConsumer(BB, GB) && (OB = !0, this.sendToConsumer(BB, GB), this.saveEventToCache(BB))
            })), this.hasHandledPotentialRedirect || ! function(BB) {
              switch (BB.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return KD(BB);
                default:
                  return !1
              }
            }(BB) || (this.hasHandledPotentialRedirect = !0, OB || (this.queuedRedirectEvent = BB, OB = !0)), OB
          }
          sendToConsumer(BB, OB) {
            var GB;
            if (BB.error && !KD(BB)) {
              const YB = (null === (GB = BB.error.code) || void 0 === GB ? void 0 : GB.split("auth/")[1]) || "internal-error";
              OB.onError(VB(this.auth, YB))
            } else OB.onAuthEvent(BB)
          }
          isEventForConsumer(BB, OB) {
            const GB = null === OB.eventId || !!BB.eventId && BB.eventId === OB.eventId;
            return OB.filter.includes(BB.type) && GB
          }
          hasEventBeenHandled(BB) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(dD(BB))
          }
          saveEventToCache(BB) {
            this.cachedEventUids.add(dD(BB)), this.lastProcessedEventTime = Date.now()
          }
        }

        function dD(BB) {
          return [BB.type, BB.eventId, BB.sessionId, BB.tenantId].filter((BB => BB)).join("-")
        }

        function KD(BB) {
          let {
            type: OB,
            error: GB
          } = BB;
          return "unknown" === OB && "auth/no-auth-event" === (null === GB || void 0 === GB ? void 0 : GB.code)
        }
        const uD = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          mD = /^https?/;
        async function ID(BB) {
          if (BB.config.emulator) return;
          const {
            authorizedDomains: OB
          } = await async function(BB) {
            return XB(BB, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(BB);
          for (const YB of OB) try {
            if (FD(YB)) return
          } catch (GB) {}
          AB(BB, "unauthorized-domain")
        }

        function FD(BB) {
          const OB = KB(),
            {
              protocol: GB,
              hostname: YB
            } = new URL(OB);
          if (BB.startsWith("chrome-extension://")) {
            const DB = new URL(BB);
            return "" === DB.hostname && "" === YB ? "chrome-extension:" === GB && BB.replace("chrome-extension://", "") === OB.replace("chrome-extension://", "") : "chrome-extension:" === GB && DB.hostname === YB
          }
          if (!mD.test(GB)) return !1;
          if (uD.test(BB)) return YB === BB;
          const DB = BB.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + DB + "|" + DB + ")$", "i").test(YB)
        }
        const iD = new IB(3e4, 6e4);

        function LD() {
          const BB = fY().___jsl;
          if (null === BB || void 0 === BB ? void 0 : BB.H)
            for (const OB of Object.keys(BB.H))
              if (BB.H[OB].r = BB.H[OB].r || [], BB.H[OB].L = BB.H[OB].L || [], BB.H[OB].r = [...BB.H[OB].L], BB.CP)
                for (let GB = 0; GB < BB.CP.length; GB++) BB.CP[GB] = null
        }
        let gD = null;

        function rD(BB) {
          return gD = gD || function(BB) {
            return new Promise(((OB, GB) => {
              var YB, DB, QB;

              function oB() {
                LD(), gapi.load("gapi.iframes", {
                  callback: () => {
                    OB(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    LD(), GB(VB(BB, "network-request-failed"))
                  },
                  timeout: iD.get()
                })
              }
              if (null === (DB = null === (YB = fY().gapi) || void 0 === YB ? void 0 : YB.iframes) || void 0 === DB ? void 0 : DB.Iframe) OB(gapi.iframes.getContext());
              else {
                if (!(null === (QB = fY().gapi) || void 0 === QB ? void 0 : QB.load)) {
                  const OB = kO("iframefcb");
                  return fY()[OB] = () => {
                    gapi.load ? oB() : GB(VB(BB, "network-request-failed"))
                  }, fO(`https://apis.google.com/js/api.js?onload=${OB}`).catch((BB => GB(BB)))
                }
                oB()
              }
            })).catch((BB => {
              throw gD = null, BB
            }))
          }(BB), gD
        }
        const XD = new IB(5e3, 15e3),
          wD = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          ED = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function cD(BB) {
          const OB = BB.config;
          fB(OB.authDomain, BB, "auth-domain-config-required");
          const GB = OB.emulator ? FB(OB, "emulator/auth/iframe") : `https://${BB.config.authDomain}/__/auth/iframe`,
            QB = {
              apiKey: OB.apiKey,
              appName: BB.name,
              v: DB.i
            },
            oB = ED.get(BB.config.apiHost);
          oB && (QB.eid = oB);
          const jB = BB._getFrameworks();
          return jB.length && (QB.fw = jB.join(",")), `${GB}?${(0,YB.eb)(QB).slice(1)}`
        }
        const hD = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class aD {
          constructor(BB) {
            this.window = BB, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (BB) {}
          }
        }

        function eD(BB, OB, GB) {
          let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const oB = Math.max((window.screen.availHeight - QB) / 2, 0).toString(),
            jB = Math.max((window.screen.availWidth - DB) / 2, 0).toString();
          let yB = "";
          const JB = Object.assign(Object.assign({}, hD), {
              width: DB.toString(),
              height: QB.toString(),
              top: oB,
              left: jB
            }),
            MB = (0, YB.H)().toLowerCase();
          GB && (yB = lO(MB) ? "_blank" : GB), PO(MB) && (OB = OB || "http://localhost", JB.scrollbars = "yes");
          const PB = Object.entries(JB).reduce(((BB, OB) => {
            let [GB, YB] = OB;
            return `${BB}${GB}=${YB},`
          }), "");
          if (function() {
              var BB;
              return RO(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, YB.H)()) && !!(null === (BB = window.navigator) || void 0 === BB ? void 0 : BB.standalone)
            }(MB) && "_self" !== yB) return function(BB, OB) {
            const GB = document.createElement("a");
            GB.href = BB, GB.target = OB;
            const YB = document.createEvent("MouseEvent");
            YB.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), GB.dispatchEvent(YB)
          }(OB || "", yB), new aD(null);
          const zB = window.open(OB || "", yB, PB);
          fB(zB, BB, "popup-blocked");
          try {
            zB.focus()
          } catch (lB) {}
          return new aD(zB)
        }
        const TD = "__/auth/handler",
          bD = "emulator/auth/handler",
          CD = encodeURIComponent("fac");
        async function HD(BB, OB, GB, QB, oB, jB) {
            fB(BB.config.authDomain, BB, "auth-domain-config-required"), fB(BB.config.apiKey, BB, "invalid-api-key");
            const yB = {
              apiKey: BB.config.apiKey,
              appName: BB.name,
              authType: GB,
              redirectUrl: QB,
              v: DB.i,
              eventId: oB
            };
            if (OB instanceof BG) {
              OB.setDefaultLanguage(BB.languageCode), yB.providerId = OB.providerId || "", (0, YB.L)(OB.getCustomParameters()) || (yB.customParameters = JSON.stringify(OB.getCustomParameters()));
              for (const [BB, OB] of Object.entries(jB || {})) yB[BB] = OB
            }
            if (OB instanceof OG) {
              const BB = OB.getScopes().filter((BB => "" !== BB));
              BB.length > 0 && (yB.scopes = BB.join(","))
            }
            BB.tenantId && (yB.tid = BB.tenantId);
            const JB = yB;
            for (const YB of Object.keys(JB)) void 0 === JB[YB] && delete JB[YB];
            const MB = await BB._getAppCheckToken(),
              PB = MB ? `#${CD}=${encodeURIComponent(MB)}` : "";
            return `${function(BB){let{config:OB}=BB;if(!OB.emulator)return`
            https: //${OB.authDomain}/${TD}`;return FB(OB,bD)}(BB)}?${(0,YB.eb)(JB).slice(1)}${PB}`}const vD="webStorageSupport";const sD=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=VY,this._completeRedirectFn=UD,this._overrideRedirectResult=ND}async _openPopup(BB,OB,GB,YB){var DB;dB(null===(DB=this.eventManagers[BB._key()])||void 0===DB?void 0:DB.manager,"_initialize() not called before _openPopup()");return eD(BB,await HD(BB,OB,GB,KB(),YB),nY())}async _openRedirect(BB,OB,GB,YB){await this._originValidation(BB);return function(BB){fY().location.href=BB}(await HD(BB,OB,GB,KB(),YB)),new Promise((()=>{}))}_initialize(BB){const OB=BB._key();if(this.eventManagers[OB]){const{manager:BB,promise:GB}=this.eventManagers[OB];return BB?Promise.resolve(BB):(dB(GB,"If manager is not set, promise should be"),GB)}const GB=this.initAndGetManager(BB);return this.eventManagers[OB]={promise:GB},GB.catch((()=>{delete this.eventManagers[OB]})),GB}async initAndGetManager(BB){const OB=await async function(BB){const OB=await rD(BB),GB=fY().gapi;return fB(GB,BB,"internal-error"),OB.open({where:document.body,url:cD(BB),messageHandlersFilter:GB.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wD,dontclear:!0},(OB=>new Promise((async(GB,YB)=>{await OB.restyle({setHideOnLeave:!1});const DB=VB(BB,"network-request-failed"),QB=fY().setTimeout((()=>{YB(DB)}),XD.get());function oB(){fY().clearTimeout(QB),GB(OB)}OB.ping(oB).then(oB,(()=>{YB(DB)}))}))))}(BB),GB=new kD(BB);return OB.register("authEvent",(OB=>{fB(null===OB||void 0===OB?void 0:OB.authEvent,BB,"invalid-auth-event");return{status:GB.onEvent(OB.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[BB._key()]={manager:GB},this.iframes[BB._key()]=OB,GB}_isIframeWebStorageSupported(BB,OB){this.iframes[BB._key()].send(vD,{type:vD},(GB=>{var YB;const DB=null===(YB=null===GB||void 0===GB?void 0:GB[0])||void 0===YB?void 0:YB[vD];void 0!==DB&&OB(!!DB),AB(BB,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(BB){const OB=BB._key();return this.originValidationPromises[OB]||(this.originValidationPromises[OB]=ID(BB)),this.originValidationPromises[OB]}get _shouldInitProactively(){return WO()||zO()||RO()}};class xD{constructor(BB){this.factorId=BB}_process(BB,OB,GB){switch(OB.type){case"enroll":return this._finalizeEnroll(BB,OB.credential,GB);case"signin":return this._finalizeSignIn(BB,OB.credential);default:return kB("unexpected MultiFactorSessionType")}}}class tD extends xD{constructor(BB){super("phone"),this.credential=BB}static _fromCredential(BB){return new tD(BB)}_finalizeEnroll(BB,OB,GB){return function(BB,OB){return XB(BB,"POST","/v2/accounts/mfaEnrollment:finalize",rB(BB,OB))}(BB,{idToken:OB,displayName:GB,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(BB,OB){return function(BB,OB){return XB(BB,"POST","/v2/accounts/mfaSignIn:finalize",rB(BB,OB))}(BB,{mfaPendingCredential:OB,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class BQ{constructor(){}static assertion(BB){return tD._fromCredential(BB)}}BQ.FACTOR_ID="phone";class OQ{static assertionForEnrollment(BB,OB){return GQ._fromSecret(BB,OB)}static assertionForSignIn(BB,OB){return GQ._fromEnrollmentId(BB,OB)}static async generateSecret(BB){const OB=BB;fB("undefined"!==typeof OB.auth,"internal-error");const GB=await(YB=OB.auth,DB={idToken:OB.credential,totpEnrollmentInfo:{}},XB(YB,"POST","/v2/accounts/mfaEnrollment:start",rB(YB,DB)));var YB,DB;return YQ._fromStartTotpMfaEnrollmentResponse(GB,OB.auth)}}OQ.FACTOR_ID="totp";class GQ extends xD{constructor(BB,OB,GB){super("totp"),this.otp=BB,this.enrollmentId=OB,this.secret=GB}static _fromSecret(BB,OB){return new GQ(OB,void 0,BB)}static _fromEnrollmentId(BB,OB){return new GQ(OB,BB)}async _finalizeEnroll(BB,OB,GB){return fB("undefined"!==typeof this.secret,BB,"argument-error"),function(BB,OB){return XB(BB,"POST","/v2/accounts/mfaEnrollment:finalize",rB(BB,OB))}(BB,{idToken:OB,displayName:GB,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(BB,OB){fB(void 0!==this.enrollmentId&&void 0!==this.otp,BB,"argument-error");const GB={verificationCode:this.otp};return function(BB,OB){return XB(BB,"POST","/v2/accounts/mfaSignIn:finalize",rB(BB,OB))}(BB,{mfaPendingCredential:OB,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:GB})}}class YQ{constructor(BB,OB,GB,YB,DB,QB,oB){this.sessionInfo=QB,this.auth=oB,this.secretKey=BB,this.hashingAlgorithm=OB,this.codeLength=GB,this.codeIntervalSeconds=YB,this.enrollmentCompletionDeadline=DB}static _fromStartTotpMfaEnrollmentResponse(BB,OB){return new YQ(BB.totpSessionInfo.sharedSecretKey,BB.totpSessionInfo.hashingAlgorithm,BB.totpSessionInfo.verificationCodeLength,BB.totpSessionInfo.periodSec,new Date(BB.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),BB.totpSessionInfo.sessionInfo,OB)}_makeTotpVerificationInfo(BB){return{sessionInfo:this.sessionInfo,verificationCode:BB}}generateQrCodeUrl(BB,OB){var GB;let YB=!1;return(DQ(BB)||DQ(OB))&&(YB=!0),YB&&(DQ(BB)&&(BB=(null===(GB=this.auth.currentUser)||void 0===GB?void 0:GB.email)||"unknownuser"),DQ(OB)&&(OB=this.auth.name)),`otpauth://totp/${OB}:${BB}?secret=${this.secretKey}&issuer=${OB}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function DQ(BB){return"undefined"===typeof BB||0===(null===BB||void 0===BB?void 0:BB.length)}var QQ="@firebase/auth",oQ="0.23.2";class jQ{constructor(BB){this.auth=BB,this.internalListeners=new Map}getUid(){var BB;return this.assertAuthConfigured(),(null===(BB=this.auth.currentUser)||void 0===BB?void 0:BB.uid)||null}async getToken(BB){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(BB)}}addAuthTokenListener(BB){if(this.assertAuthConfigured(),this.internalListeners.has(BB))return;const OB=this.auth.onIdTokenChanged((OB=>{BB((null===OB||void 0===OB?void 0:OB.stsTokenManager.accessToken)||null)}));this.internalListeners.set(BB,OB),this.updateProactiveRefresh()}removeAuthTokenListener(BB){this.assertAuthConfigured();const OB=this.internalListeners.get(BB);OB&&(this.internalListeners.delete(BB),OB(),this.updateProactiveRefresh())}assertAuthConfigured(){fB(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const yQ=(0,YB.C)("authIdTokenMaxAge")||300;let JQ=null;const MQ=BB=>async OB=>{const GB=OB&&await OB.getIdTokenResult(),YB=GB&&((new Date).getTime()-Date.parse(GB.issuedAtTime))/1e3;if(YB&&YB>yQ)return;const DB=null===GB||void 0===GB?void 0:GB.token;JQ!==DB&&(JQ=DB,await fetch(BB,{method:DB?"POST":"DELETE",headers:DB?{Authorization:`Bearer ${DB}`}:{}}))};function PQ(){let BB=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,DB.S)();const OB=(0,DB.D)(BB,"auth");if(OB.isInitialized())return OB.getImmediate();const GB=iO(BB,{popupRedirectResolver:sD,persistence:[rY,WY,VY]}),QB=(0,YB.C)("authTokenSyncURL");if(QB){const BB=MQ(QB);DY(GB,BB,(()=>BB(GB.currentUser))),YY(GB,(OB=>BB(OB)))}const oB=(0,YB.y)("auth");return oB&&LO(GB,`http://${oB}`),GB}var zQ;zQ="Browser",(0,DB.F)(new jB.f("auth",((BB,OB)=>{let{options:GB}=OB;const YB=BB.getProvider("app").getImmediate(),DB=BB.getProvider("heartbeat"),QB=BB.getProvider("app-check-internal"),{apiKey:oB,authDomain:jB}=YB.options;fB(oB&&!oB.includes(":"),"invalid-api-key",{appName:YB.name});const yB={apiKey:oB,authDomain:jB,clientPlatform:zQ,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:AO(zQ)},JB=new mO(YB,DB,QB,yB);return function(BB,OB){const GB=(null===OB||void 0===OB?void 0:OB.persistence)||[],YB=(Array.isArray(GB)?GB:[GB]).map(QO);(null===OB||void 0===OB?void 0:OB.errorMap)&&BB._updateErrorMap(OB.errorMap),BB._initializeWithPersistence(YB,null===OB||void 0===OB?void 0:OB.popupRedirectResolver)}(JB,GB),JB}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((BB,OB,GB)=>{BB.getProvider("auth-internal").initialize()}))),(0,DB.F)(new jB.f("auth-internal",(BB=>(BB=>new jQ(BB))(IO(BB.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,DB.X)(QQ,oQ,function(BB){switch(BB){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(zQ)),(0,DB.X)(QQ,oQ,"esm2017")}};Object.freeze(modules);for(const BB in modules)Object.freeze(modules[BB]);