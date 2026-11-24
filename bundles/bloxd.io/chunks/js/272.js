/*! For license information please see c6gaap.272.71428ee2.chunk.js.LICENSE.txt */
export const id = 272;
export const ids = [272];
export const modules = {
    40583: (BB, IB, ZB) => {
        ZB.r(IB), ZB.d(IB, {
          ActionCodeOperation: () => zB,
          ActionCodeURL: () => KI,
          AuthCredential: () => XI,
          AuthErrorCodes: () => yB,
          EmailAuthCredential: () => tI,
          EmailAuthProvider: () => SI,
          FacebookAuthProvider: () => TZ,
          FactorId: () => kB,
          GithubAuthProvider: () => oZ,
          GoogleAuthProvider: () => JZ,
          OAuthCredential: () => xI,
          OAuthProvider: () => ZZ,
          OperationType: () => hB,
          PhoneAuthCredential: () => DI,
          PhoneAuthProvider: () => IJ,
          PhoneMultiFactorGenerator: () => Bo,
          ProviderId: () => cB,
          RecaptchaVerifier: () => xT,
          SAMLAuthProvider: () => vZ,
          SignInMethod: () => nB,
          TotpMultiFactorGenerator: () => Io,
          TotpSecret: () => To,
          TwitterAuthProvider: () => kZ,
          applyActionCode: () => MZ,
          beforeAuthStateChanged: () => JT,
          browserLocalPersistence: () => WT,
          browserPopupRedirectResolver: () => KJ,
          browserSessionPersistence: () => CT,
          checkActionCode: () => jZ,
          confirmPasswordReset: () => HZ,
          connectAuthEmulator: () => RI,
          createUserWithEmailAndPassword: () => RZ,
          debugErrorMap: () => NB,
          deleteUser: () => cT,
          fetchSignInMethodsForEmail: () => eZ,
          getAdditionalUserInfo: () => BT,
          getAuth: () => ho,
          getIdToken: () => tB,
          getIdTokenResult: () => bB,
          getMultiFactorResolver: () => zT,
          getRedirectResult: () => sJ,
          inMemoryPersistence: () => vI,
          indexedDBLocalPersistence: () => mT,
          initializeAuth: () => PI,
          initializeRecaptchaConfig: () => ZT,
          isSignInWithEmailLink: () => XZ,
          linkWithCredential: () => QZ,
          linkWithPhoneNumber: () => KT,
          linkWithPopup: () => hJ,
          linkWithRedirect: () => QJ,
          multiFactor: () => gT,
          onAuthStateChanged: () => oT,
          onIdTokenChanged: () => TT,
          parseActionCodeURL: () => VI,
          prodErrorMap: () => gB,
          reauthenticateWithCredential: () => sZ,
          reauthenticateWithPhoneNumber: () => VT,
          reauthenticateWithPopup: () => nJ,
          reauthenticateWithRedirect: () => CJ,
          reload: () => BI,
          sendEmailVerification: () => uZ,
          sendPasswordResetEmail: () => aZ,
          sendSignInLinkToEmail: () => mZ,
          setPersistence: () => IT,
          signInAnonymously: () => zZ,
          signInWithCredential: () => CZ,
          signInWithCustomToken: () => wZ,
          signInWithEmailAndPassword: () => rZ,
          signInWithEmailLink: () => LZ,
          signInWithPhoneNumber: () => DT,
          signInWithPopup: () => cJ,
          signInWithRedirect: () => dJ,
          signOut: () => kT,
          unlink: () => qZ,
          updateCurrentUser: () => vT,
          updateEmail: () => AZ,
          updatePassword: () => tZ,
          updatePhoneNumber: () => BJ,
          updateProfile: () => lZ,
          useDeviceLanguage: () => GT,
          verifyBeforeUpdateEmail: () => fZ,
          verifyPasswordResetCode: () => PZ
        });
        var TB = ZB(40562),
          JB = ZB(40551);

        function oB(BB, IB) {
          var ZB = {};
          for (var TB in BB) Object.prototype.hasOwnProperty.call(BB, TB) && IB.indexOf(TB) < 0 && (ZB[TB] = BB[TB]);
          if (null != BB && "function" === typeof Object.getOwnPropertySymbols) {
            var JB = 0;
            for (TB = Object.getOwnPropertySymbols(BB); JB < TB.length; JB++) IB.indexOf(TB[JB]) < 0 && Object.prototype.propertyIsEnumerable.call(BB, TB[JB]) && (ZB[TB[JB]] = BB[TB[JB]])
          }
          return ZB
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var GB = ZB(40568),
          vB = ZB(40559);
        const kB = {
            PHONE: "phone",
            TOTP: "totp"
          },
          cB = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          nB = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          hB = {
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

        function FB() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const NB = function() {
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
          gB = FB,
          qB = new TB.h("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          yB = {
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
          UB = new GB.g("@firebase/auth");

        function WB(BB) {
          if (UB.logLevel <= GB.d.ERROR) {
            for (var IB = arguments.length, ZB = new Array(IB > 1 ? IB - 1 : 0), TB = 1; TB < IB; TB++) ZB[TB - 1] = arguments[TB];
            UB.error(`Auth (${JB.f}): ${BB}`, ...ZB)
          }
        }

        function dB(BB) {
          for (var IB = arguments.length, ZB = new Array(IB > 1 ? IB - 1 : 0), TB = 1; TB < IB; TB++) ZB[TB - 1] = arguments[TB];
          throw wB(BB, ...ZB)
        }

        function CB(BB) {
          for (var IB = arguments.length, ZB = new Array(IB > 1 ? IB - 1 : 0), TB = 1; TB < IB; TB++) ZB[TB - 1] = arguments[TB];
          return wB(BB, ...ZB)
        }

        function QB(BB, IB, ZB) {
          const JB = Object.assign(Object.assign({}, gB()), {
            [IB]: ZB
          });
          return new TB.h("auth", "Firebase", JB).create(IB, {
            appName: BB.name
          })
        }

        function sB(BB, IB, ZB) {
          if (!(IB instanceof ZB)) throw ZB.name !== IB.constructor.name && dB(BB, "argument-error"), QB(BB, "argument-error", `Type of ${IB.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function wB(BB) {
          for (var IB = arguments.length, ZB = new Array(IB > 1 ? IB - 1 : 0), TB = 1; TB < IB; TB++) ZB[TB - 1] = arguments[TB];
          if ("string" !== typeof BB) {
            const IB = ZB[0],
              TB = [...ZB.slice(1)];
            return TB[0] && (TB[0].appName = BB.name), BB._errorFactory.create(IB, ...TB)
          }
          return qB.create(BB, ...ZB)
        }

        function OB(BB, IB) {
          if (!BB) {
            for (var ZB = arguments.length, TB = new Array(ZB > 2 ? ZB - 2 : 0), JB = 2; JB < ZB; JB++) TB[JB - 2] = arguments[JB];
            throw wB(IB, ...TB)
          }
        }

        function YB(BB) {
          const IB = "INTERNAL ASSERTION FAILED: " + BB;
          throw WB(IB), new Error(IB)
        }

        function iB(BB, IB) {
          BB || YB(IB)
        }

        function pB() {
          var BB;
          return "undefined" !== typeof self && (null === (BB = self.location) || void 0 === BB ? void 0 : BB.href) || ""
        }

        function aB() {
          return "http:" === HB() || "https:" === HB()
        }

        function HB() {
          var BB;
          return "undefined" !== typeof self && (null === (BB = self.location) || void 0 === BB ? void 0 : BB.protocol) || null
        }
        class MB {
          constructor(BB, IB) {
            this.shortDelay = BB, this.longDelay = IB, iB(IB > BB, "Short delay should be less than long delay!"), this.isMobile = (0, TB.Z)() || (0, TB.ab)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (aB() || (0, TB.T)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function jB(BB, IB) {
          iB(BB.emulator, "Emulator should always be set here");
          const {
            url: ZB
          } = BB.emulator;
          return IB ? `${ZB}${IB.startsWith("/")?IB.slice(1):IB}` : ZB
        }
        class PB {
          static initialize(BB, IB, ZB) {
            this.fetchImpl = BB, IB && (this.headersImpl = IB), ZB && (this.responseImpl = ZB)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void YB("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void YB("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void YB("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const RB = {
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
          rB = new MB(3e4, 6e4);

        function mB(BB, IB) {
          return BB.tenantId && !IB.tenantId ? Object.assign(Object.assign({}, IB), {
            tenantId: BB.tenantId
          }) : IB
        }
        async function XB(BB, IB, ZB, JB) {
          return LB(BB, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let oB = {},
              GB = {};
            JB && ("GET" === IB ? GB = JB : oB = {
              body: JSON.stringify(JB)
            });
            const vB = (0, TB.db)(Object.assign({
                key: BB.config.apiKey
              }, GB)).slice(1),
              kB = await BB._getAdditionalHeaders();
            return kB["Content-Type"] = "application/json", BB.languageCode && (kB["X-Firebase-Locale"] = BB.languageCode), PB.fetch()(uB(BB, BB.config.apiHost, ZB, vB), Object.assign({
              method: IB,
              headers: kB,
              referrerPolicy: "no-referrer"
            }, oB))
          }))
        }
        async function LB(BB, IB, ZB) {
          BB._canInitEmulator = !1;
          const JB = Object.assign(Object.assign({}, RB), IB);
          try {
            const IB = new fB(BB),
              TB = await Promise.race([ZB(), IB.promise]);
            IB.clearNetworkTimeout();
            const oB = await TB.json();
            if ("needConfirmation" in oB) throw lB(BB, "account-exists-with-different-credential", oB);
            if (TB.ok && !("errorMessage" in oB)) return oB;
            {
              const IB = TB.ok ? oB.errorMessage : oB.error.message,
                [ZB, GB] = IB.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === ZB) throw lB(BB, "credential-already-in-use", oB);
              if ("EMAIL_EXISTS" === ZB) throw lB(BB, "email-already-in-use", oB);
              if ("USER_DISABLED" === ZB) throw lB(BB, "user-disabled", oB);
              const vB = JB[ZB] || ZB.toLowerCase().replace(/[_\s]+/g, "-");
              if (GB) throw QB(BB, vB, GB);
              dB(BB, vB)
            }
          } catch (oB) {
            if (oB instanceof TB.j) throw oB;
            dB(BB, "network-request-failed", {
              message: String(oB)
            })
          }
        }
        async function eB(BB, IB, ZB, TB) {
          let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const oB = await XB(BB, IB, ZB, TB, JB);
          return "mfaPendingCredential" in oB && dB(BB, "multi-factor-auth-required", {
            _serverResponse: oB
          }), oB
        }

        function uB(BB, IB, ZB, TB) {
          const JB = `${IB}${ZB}?${TB}`;
          return BB.config.emulator ? jB(BB.config, JB) : `${BB.config.apiScheme}://${JB}`
        }
        class fB {
          constructor(BB) {
            this.auth = BB, this.timer = null, this.promise = new Promise(((BB, IB) => {
              this.timer = setTimeout((() => IB(CB(this.auth, "network-request-failed"))), rB.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function lB(BB, IB, ZB) {
          const TB = {
            appName: BB.name
          };
          ZB.email && (TB.email = ZB.email), ZB.phoneNumber && (TB.phoneNumber = ZB.phoneNumber);
          const JB = CB(BB, IB, TB);
          return JB.customData._tokenResponse = ZB, JB
        }

        function AB(BB) {
          if (BB) try {
            const IB = new Date(Number(BB));
            if (!isNaN(IB.getTime())) return IB.toUTCString()
          } catch (IB) {}
        }

        function tB(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, TB.N)(BB).getIdToken(IB)
        }
        async function bB(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const ZB = (0, TB.N)(BB),
            JB = await ZB.getIdToken(IB),
            oB = EB(JB);
          OB(oB && oB.exp && oB.auth_time && oB.iat, ZB.auth, "internal-error");
          const GB = "object" === typeof oB.firebase ? oB.firebase : void 0,
            vB = null === GB || void 0 === GB ? void 0 : GB.sign_in_provider;
          return {
            claims: oB,
            token: JB,
            authTime: AB(xB(oB.auth_time)),
            issuedAtTime: AB(xB(oB.iat)),
            expirationTime: AB(xB(oB.exp)),
            signInProvider: vB || null,
            signInSecondFactor: (null === GB || void 0 === GB ? void 0 : GB.sign_in_second_factor) || null
          }
        }

        function xB(BB) {
          return 1e3 * Number(BB)
        }

        function EB(BB) {
          const [IB, ZB, JB] = BB.split(".");
          if (void 0 === IB || void 0 === ZB || void 0 === JB) return WB("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const BB = (0, TB.p)(ZB);
            return BB ? JSON.parse(BB) : (WB("Failed to decode base64 JWT payload"), null)
          } catch (oB) {
            return WB("Caught error parsing JWT payload as JSON", null === oB || void 0 === oB ? void 0 : oB.toString()), null
          }
        }
        async function DB(BB, IB) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return IB;
          try {
            return await IB
          } catch (ZB) {
            throw ZB instanceof TB.j && function(BB) {
              let {
                code: IB
              } = BB;
              return "auth/user-disabled" === IB || "auth/user-token-expired" === IB
            }(ZB) && BB.auth.currentUser === BB && await BB.auth.signOut(), ZB
          }
        }
        class KB {
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
            var IB;
            if (BB) {
              const BB = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), BB
            } {
              this.errorBackoff = 3e4;
              const BB = (null !== (IB = this.user.stsTokenManager.expirationTime) && void 0 !== IB ? IB : 0) - Date.now() - 3e5;
              return Math.max(0, BB)
            }
          }
          schedule() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const IB = this.getInterval(BB);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), IB)
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
        class VB {
          constructor(BB, IB) {
            this.createdAt = BB, this.lastLoginAt = IB, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = AB(this.lastLoginAt), this.creationTime = AB(this.createdAt)
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
        async function SB(BB) {
          var IB;
          const ZB = BB.auth,
            TB = await BB.getIdToken(),
            JB = await DB(BB, async function(BB, IB) {
              return XB(BB, "POST", "/v1/accounts:lookup", IB)
            }(ZB, {
              idToken: TB
            }));
          OB(null === JB || void 0 === JB ? void 0 : JB.users.length, ZB, "internal-error");
          const GB = JB.users[0];
          BB._notifyReloadListener(GB);
          const vB = (null === (IB = GB.providerUserInfo) || void 0 === IB ? void 0 : IB.length) ? GB.providerUserInfo.map((BB => {
            var {
              providerId: IB
            } = BB, ZB = oB(BB, ["providerId"]);
            return {
              providerId: IB,
              uid: ZB.rawId || "",
              displayName: ZB.displayName || null,
              email: ZB.email || null,
              phoneNumber: ZB.phoneNumber || null,
              photoURL: ZB.photoUrl || null
            }
          })) : [];
          const kB = (cB = BB.providerData, nB = vB, [...cB.filter((BB => !nB.some((IB => IB.providerId === BB.providerId)))), ...nB]);
          var cB, nB;
          const hB = BB.isAnonymous,
            zB = !(BB.email && GB.passwordHash) && !(null === kB || void 0 === kB ? void 0 : kB.length),
            FB = !!hB && zB,
            NB = {
              uid: GB.localId,
              displayName: GB.displayName || null,
              photoURL: GB.photoUrl || null,
              email: GB.email || null,
              emailVerified: GB.emailVerified || !1,
              phoneNumber: GB.phoneNumber || null,
              tenantId: GB.tenantId || null,
              providerData: kB,
              metadata: new VB(GB.createdAt, GB.lastLoginAt),
              isAnonymous: FB
            };
          Object.assign(BB, NB)
        }
        async function BI(BB) {
          const IB = (0, TB.N)(BB);
          await SB(IB), await IB.auth._persistUserIfCurrent(IB), IB.auth._notifyListenersIfCurrent(IB)
        }
        class II {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(BB) {
            OB(BB.idToken, "internal-error"), OB("undefined" !== typeof BB.idToken, "internal-error"), OB("undefined" !== typeof BB.refreshToken, "internal-error");
            const IB = "expiresIn" in BB && "undefined" !== typeof BB.expiresIn ? Number(BB.expiresIn) : function(BB) {
              const IB = EB(BB);
              return OB(IB, "internal-error"), OB("undefined" !== typeof IB.exp, "internal-error"), OB("undefined" !== typeof IB.iat, "internal-error"), Number(IB.exp) - Number(IB.iat)
            }(BB.idToken);
            this.updateTokensAndExpiration(BB.idToken, BB.refreshToken, IB)
          }
          async getToken(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return OB(!this.accessToken || this.refreshToken, BB, "user-token-expired"), IB || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(BB, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(BB, IB) {
            const {
              accessToken: ZB,
              refreshToken: JB,
              expiresIn: oB
            } = await async function(BB, IB) {
              const ZB = await LB(BB, {}, (async () => {
                const ZB = (0, TB.db)({
                    grant_type: "refresh_token",
                    refresh_token: IB
                  }).slice(1),
                  {
                    tokenApiHost: JB,
                    apiKey: oB
                  } = BB.config,
                  GB = uB(BB, JB, "/v1/token", `key=${oB}`),
                  vB = await BB._getAdditionalHeaders();
                return vB["Content-Type"] = "application/x-www-form-urlencoded", PB.fetch()(GB, {
                  method: "POST",
                  headers: vB,
                  body: ZB
                })
              }));
              return {
                accessToken: ZB.access_token,
                expiresIn: ZB.expires_in,
                refreshToken: ZB.refresh_token
              }
            }(BB, IB);
            this.updateTokensAndExpiration(ZB, JB, Number(oB))
          }
          updateTokensAndExpiration(BB, IB, ZB) {
            this.refreshToken = IB || null, this.accessToken = BB || null, this.expirationTime = Date.now() + 1e3 * ZB
          }
          static fromJSON(BB, IB) {
            const {
              refreshToken: ZB,
              accessToken: TB,
              expirationTime: JB
            } = IB, oB = new II;
            return ZB && (OB("string" === typeof ZB, "internal-error", {
              appName: BB
            }), oB.refreshToken = ZB), TB && (OB("string" === typeof TB, "internal-error", {
              appName: BB
            }), oB.accessToken = TB), JB && (OB("number" === typeof JB, "internal-error", {
              appName: BB
            }), oB.expirationTime = JB), oB
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
            return Object.assign(new II, this.toJSON())
          }
          _performRefresh() {
            return YB("not implemented")
          }
        }

        function ZI(BB, IB) {
          OB("string" === typeof BB || "undefined" === typeof BB, "internal-error", {
            appName: IB
          })
        }
        class TI {
          constructor(BB) {
            var {
              uid: IB,
              auth: ZB,
              stsTokenManager: TB
            } = BB, JB = oB(BB, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new KB(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = IB, this.auth = ZB, this.stsTokenManager = TB, this.accessToken = TB.accessToken, this.displayName = JB.displayName || null, this.email = JB.email || null, this.emailVerified = JB.emailVerified || !1, this.phoneNumber = JB.phoneNumber || null, this.photoURL = JB.photoURL || null, this.isAnonymous = JB.isAnonymous || !1, this.tenantId = JB.tenantId || null, this.providerData = JB.providerData ? [...JB.providerData] : [], this.metadata = new VB(JB.createdAt || void 0, JB.lastLoginAt || void 0)
          }
          async getIdToken(BB) {
            const IB = await DB(this, this.stsTokenManager.getToken(this.auth, BB));
            return OB(IB, this.auth, "internal-error"), this.accessToken !== IB && (this.accessToken = IB, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), IB
          }
          getIdTokenResult(BB) {
            return bB(this, BB)
          }
          reload() {
            return BI(this)
          }
          _assign(BB) {
            this !== BB && (OB(this.uid === BB.uid, this.auth, "internal-error"), this.displayName = BB.displayName, this.photoURL = BB.photoURL, this.email = BB.email, this.emailVerified = BB.emailVerified, this.phoneNumber = BB.phoneNumber, this.isAnonymous = BB.isAnonymous, this.tenantId = BB.tenantId, this.providerData = BB.providerData.map((BB => Object.assign({}, BB))), this.metadata._copy(BB.metadata), this.stsTokenManager._assign(BB.stsTokenManager))
          }
          _clone(BB) {
            const IB = new TI(Object.assign(Object.assign({}, this), {
              auth: BB,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return IB.metadata._copy(this.metadata), IB
          }
          _onReload(BB) {
            OB(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = BB, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
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
            let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZB = !1;
            BB.idToken && BB.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(BB), ZB = !0), IB && await SB(this), await this.auth._persistUserIfCurrent(this), ZB && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const BB = await this.getIdToken();
            return await DB(this, async function(BB, IB) {
              return XB(BB, "POST", "/v1/accounts:delete", IB)
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
          static _fromJSON(BB, IB) {
            var ZB, TB, JB, oB, GB, vB, kB, cB;
            const nB = null !== (ZB = IB.displayName) && void 0 !== ZB ? ZB : void 0,
              hB = null !== (TB = IB.email) && void 0 !== TB ? TB : void 0,
              zB = null !== (JB = IB.phoneNumber) && void 0 !== JB ? JB : void 0,
              FB = null !== (oB = IB.photoURL) && void 0 !== oB ? oB : void 0,
              NB = null !== (GB = IB.tenantId) && void 0 !== GB ? GB : void 0,
              gB = null !== (vB = IB._redirectEventId) && void 0 !== vB ? vB : void 0,
              qB = null !== (kB = IB.createdAt) && void 0 !== kB ? kB : void 0,
              yB = null !== (cB = IB.lastLoginAt) && void 0 !== cB ? cB : void 0,
              {
                uid: UB,
                emailVerified: WB,
                isAnonymous: dB,
                providerData: CB,
                stsTokenManager: QB
              } = IB;
            OB(UB && QB, BB, "internal-error");
            const sB = II.fromJSON(this.name, QB);
            OB("string" === typeof UB, BB, "internal-error"), ZI(nB, BB.name), ZI(hB, BB.name), OB("boolean" === typeof WB, BB, "internal-error"), OB("boolean" === typeof dB, BB, "internal-error"), ZI(zB, BB.name), ZI(FB, BB.name), ZI(NB, BB.name), ZI(gB, BB.name), ZI(qB, BB.name), ZI(yB, BB.name);
            const wB = new TI({
              uid: UB,
              auth: BB,
              email: hB,
              emailVerified: WB,
              displayName: nB,
              isAnonymous: dB,
              photoURL: FB,
              phoneNumber: zB,
              tenantId: NB,
              stsTokenManager: sB,
              createdAt: qB,
              lastLoginAt: yB
            });
            return CB && Array.isArray(CB) && (wB.providerData = CB.map((BB => Object.assign({}, BB)))), gB && (wB._redirectEventId = gB), wB
          }
          static async _fromIdTokenResponse(BB, IB) {
            let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const TB = new II;
            TB.updateFromServerResponse(IB);
            const JB = new TI({
              uid: IB.localId,
              auth: BB,
              stsTokenManager: TB,
              isAnonymous: ZB
            });
            return await SB(JB), JB
          }
        }
        const JI = new Map;

        function oI(BB) {
          iB(BB instanceof Function, "Expected a class definition");
          let IB = JI.get(BB);
          return IB ? (iB(IB instanceof BB, "Instance stored in cache mismatched with class"), IB) : (IB = new BB, JI.set(BB, IB), IB)
        }
        class GI {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(BB, IB) {
            this.storage[BB] = IB
          }
          async _get(BB) {
            const IB = this.storage[BB];
            return void 0 === IB ? null : IB
          }
          async _remove(BB) {
            delete this.storage[BB]
          }
          _addListener(BB, IB) {}
          _removeListener(BB, IB) {}
        }
        GI.type = "NONE";
        const vI = GI;

        function kI(BB, IB, ZB) {
          return `firebase:${BB}:${IB}:${ZB}`
        }
        class cI {
          constructor(BB, IB, ZB) {
            this.persistence = BB, this.auth = IB, this.userKey = ZB;
            const {
              config: TB,
              name: JB
            } = this.auth;
            this.fullUserKey = kI(this.userKey, TB.apiKey, JB), this.fullPersistenceKey = kI("persistence", TB.apiKey, JB), this.boundEventHandler = IB._onStorageEvent.bind(IB), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(BB) {
            return this.persistence._set(this.fullUserKey, BB.toJSON())
          }
          async getCurrentUser() {
            const BB = await this.persistence._get(this.fullUserKey);
            return BB ? TI._fromJSON(this.auth, BB) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(BB) {
            if (this.persistence === BB) return;
            const IB = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = BB, IB ? this.setCurrentUser(IB) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(BB, IB) {
            let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!IB.length) return new cI(oI(vI), BB, ZB);
            const TB = (await Promise.all(IB.map((async BB => {
              if (await BB._isAvailable()) return BB
            })))).filter((BB => BB));
            let JB = TB[0] || oI(vI);
            const oB = kI(ZB, BB.config.apiKey, BB.name);
            let GB = null;
            for (const cB of IB) try {
              const IB = await cB._get(oB);
              if (IB) {
                const ZB = TI._fromJSON(BB, IB);
                cB !== JB && (GB = ZB), JB = cB;
                break
              }
            } catch (kB) {}
            const vB = TB.filter((BB => BB._shouldAllowMigration));
            return JB._shouldAllowMigration && vB.length ? (JB = vB[0], GB && await JB._set(oB, GB.toJSON()), await Promise.all(IB.map((async BB => {
              if (BB !== JB) try {
                await BB._remove(oB)
              } catch (kB) {}
            }))), new cI(JB, BB, ZB)) : new cI(JB, BB, ZB)
          }
        }

        function nI(BB) {
          const IB = BB.toLowerCase();
          if (IB.includes("opera/") || IB.includes("opr/") || IB.includes("opios/")) return "Opera";
          if (NI(IB)) return "IEMobile";
          if (IB.includes("msie") || IB.includes("trident/")) return "IE";
          if (IB.includes("edge/")) return "Edge";
          if (hI(IB)) return "Firefox";
          if (IB.includes("silk/")) return "Silk";
          if (qI(IB)) return "Blackberry";
          if (yI(IB)) return "Webos";
          if (zI(IB)) return "Safari";
          if ((IB.includes("chrome/") || FI(IB)) && !IB.includes("edge/")) return "Chrome";
          if (gI(IB)) return "Android";
          {
            const IB = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              ZB = BB.match(IB);
            if (2 === (null === ZB || void 0 === ZB ? void 0 : ZB.length)) return ZB[1]
          }
          return "Other"
        }

        function hI() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)();
          return /firefox\//i.test(BB)
        }

        function zI() {
          const BB = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)()).toLowerCase();
          return BB.includes("safari/") && !BB.includes("chrome/") && !BB.includes("crios/") && !BB.includes("android")
        }

        function FI() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)();
          return /crios\//i.test(BB)
        }

        function NI() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)();
          return /iemobile/i.test(BB)
        }

        function gI() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)();
          return /android/i.test(BB)
        }

        function qI() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)();
          return /blackberry/i.test(BB)
        }

        function yI() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)();
          return /webos/i.test(BB)
        }

        function UI() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)();
          return /iphone|ipad|ipod/i.test(BB) || /macintosh/i.test(BB) && /mobile/i.test(BB)
        }

        function WI() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)();
          return UI(BB) || gI(BB) || yI(BB) || qI(BB) || /windows phone/i.test(BB) || NI(BB)
        }

        function dI(BB) {
          let IB, ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (BB) {
            case "Browser":
              IB = nI((0, TB.P)());
              break;
            case "Worker":
              IB = `${nI((0,TB.P)())}-${BB}`;
              break;
            default:
              IB = BB
          }
          const oB = ZB.length ? ZB.join(",") : "FirebaseCore-web";
          return `${IB}/JsCore/${JB.f}/${oB}`
        }
        async function CI(BB, IB) {
          return XB(BB, "GET", "/v2/recaptchaConfig", mB(BB, IB))
        }

        function QI(BB) {
          return void 0 !== BB && void 0 !== BB.getResponse
        }

        function sI(BB) {
          return void 0 !== BB && void 0 !== BB.enterprise
        }
        class wI {
          constructor(BB) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === BB.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = BB.recaptchaKey.split("/")[3], this.emailPasswordEnabled = BB.recaptchaEnforcementState.some((BB => "EMAIL_PASSWORD_PROVIDER" === BB.provider && "OFF" !== BB.enforcementState))
          }
        }

        function OI(BB) {
          return new Promise(((IB, ZB) => {
            const TB = document.createElement("script");
            TB.setAttribute("src", BB), TB.onload = IB, TB.onerror = BB => {
                const IB = CB("internal-error");
                IB.customData = BB, ZB(IB)
              }, TB.type = "text/javascript", TB.charset = "UTF-8",
              function() {
                var BB, IB;
                return null !== (IB = null === (BB = document.getElementsByTagName("head")) || void 0 === BB ? void 0 : BB[0]) && void 0 !== IB ? IB : document
              }().appendChild(TB)
          }))
        }

        function YI(BB) {
          return `__${BB}${Math.floor(1e6*Math.random())}`
        }
        class iI {
          constructor(BB) {
            this.type = "recaptcha-enterprise", this.auth = MI(BB)
          }
          async verify() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function ZB(IB, ZB, TB) {
              const JB = window.grecaptcha;
              sI(JB) ? JB.enterprise.ready((() => {
                JB.enterprise.execute(IB, {
                  action: BB
                }).then((BB => {
                  ZB(BB)
                })).catch((() => {
                  ZB("NO_RECAPTCHA")
                }))
              })) : TB(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((BB, TB) => {
              (async function(BB) {
                if (!IB) {
                  if (null == BB.tenantId && null != BB._agentRecaptchaConfig) return BB._agentRecaptchaConfig.siteKey;
                  if (null != BB.tenantId && void 0 !== BB._tenantRecaptchaConfigs[BB.tenantId]) return BB._tenantRecaptchaConfigs[BB.tenantId].siteKey
                }
                return new Promise((async (IB, ZB) => {
                  CI(BB, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((TB => {
                    if (void 0 !== TB.recaptchaKey) {
                      const ZB = new wI(TB);
                      return null == BB.tenantId ? BB._agentRecaptchaConfig = ZB : BB._tenantRecaptchaConfigs[BB.tenantId] = ZB, IB(ZB.siteKey)
                    }
                    ZB(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((BB => {
                    ZB(BB)
                  }))
                }))
              })(this.auth).then((JB => {
                if (!IB && sI(window.grecaptcha)) ZB(JB, BB, TB);
                else {
                  if ("undefined" === typeof window) return void TB(new Error("RecaptchaVerifier is only supported in browser"));
                  OI("https://www.google.com/recaptcha/enterprise.js?render=" + JB).then((() => {
                    ZB(JB, BB, TB)
                  })).catch((BB => {
                    TB(BB)
                  }))
                }
              })).catch((BB => {
                TB(BB)
              }))
            }))
          }
        }
        async function pI(BB, IB, ZB) {
          let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const JB = new iI(BB);
          let oB;
          try {
            oB = await JB.verify(ZB)
          } catch (vB) {
            oB = await JB.verify(ZB, !0)
          }
          const GB = Object.assign({}, IB);
          return TB ? Object.assign(GB, {
            captchaResp: oB
          }) : Object.assign(GB, {
            captchaResponse: oB
          }), Object.assign(GB, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(GB, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), GB
        }
        class aI {
          constructor(BB) {
            this.auth = BB, this.queue = []
          }
          pushCallback(BB, IB) {
            const ZB = IB => new Promise(((ZB, TB) => {
              try {
                ZB(BB(IB))
              } catch (JB) {
                TB(JB)
              }
            }));
            ZB.onAbort = IB, this.queue.push(ZB);
            const TB = this.queue.length - 1;
            return () => {
              this.queue[TB] = () => Promise.resolve()
            }
          }
          async runMiddleware(BB) {
            if (this.auth.currentUser === BB) return;
            const IB = [];
            try {
              for (const ZB of this.queue) await ZB(BB), ZB.onAbort && IB.push(ZB.onAbort)
            } catch (ZB) {
              IB.reverse();
              for (const BB of IB) try {
                BB()
              } catch (TB) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === ZB || void 0 === ZB ? void 0 : ZB.message
              })
            }
          }
        }
        class HI {
          constructor(BB, IB, ZB, TB) {
            this.app = BB, this.heartbeatServiceProvider = IB, this.appCheckServiceProvider = ZB, this.config = TB, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new jI(this), this.idTokenSubscription = new jI(this), this.beforeStateQueue = new aI(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = qB, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = BB.name, this.clientVersion = TB.sdkClientVersion
          }
          _initializeWithPersistence(BB, IB) {
            return IB && (this._popupRedirectResolver = oI(IB)), this._initializationPromise = this.queue((async () => {
              var ZB, TB;
              if (!this._deleted && (this.persistenceManager = await cI.create(this, BB), !this._deleted)) {
                if (null === (ZB = this._popupRedirectResolver) || void 0 === ZB ? void 0 : ZB._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (JB) {}
                await this.initializeCurrentUser(IB), this.lastNotifiedUid = (null === (TB = this.currentUser) || void 0 === TB ? void 0 : TB.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const BB = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || BB ? this.currentUser && BB && this.currentUser.uid === BB.uid ? (this._currentUser._assign(BB), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(BB, !0) : void 0
          }
          async initializeCurrentUser(BB) {
            var IB;
            const ZB = await this.assertedPersistence.getCurrentUser();
            let TB = ZB,
              JB = !1;
            if (BB && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const ZB = null === (IB = this.redirectUser) || void 0 === IB ? void 0 : IB._redirectEventId,
                oB = null === TB || void 0 === TB ? void 0 : TB._redirectEventId,
                GB = await this.tryRedirectSignIn(BB);
              ZB && ZB !== oB || !(null === GB || void 0 === GB ? void 0 : GB.user) || (TB = GB.user, JB = !0)
            }
            if (!TB) return this.directlySetCurrentUser(null);
            if (!TB._redirectEventId) {
              if (JB) try {
                await this.beforeStateQueue.runMiddleware(TB)
              } catch (oB) {
                TB = ZB, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(oB)))
              }
              return TB ? this.reloadAndSetCurrentUserOrClear(TB) : this.directlySetCurrentUser(null)
            }
            return OB(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === TB._redirectEventId ? this.directlySetCurrentUser(TB) : this.reloadAndSetCurrentUserOrClear(TB)
          }
          async tryRedirectSignIn(BB) {
            let IB = null;
            try {
              IB = await this._popupRedirectResolver._completeRedirectFn(this, BB, !0)
            } catch (ZB) {
              await this._setRedirectUser(null)
            }
            return IB
          }
          async reloadAndSetCurrentUserOrClear(BB) {
            try {
              await SB(BB)
            } catch (IB) {
              if ("auth/network-request-failed" !== (null === IB || void 0 === IB ? void 0 : IB.code)) return this.directlySetCurrentUser(null)
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
            const IB = BB ? (0, TB.N)(BB) : null;
            return IB && OB(IB.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(IB && IB._clone(this))
          }
          async _updateCurrentUser(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return BB && OB(this.tenantId === BB.tenantId, this, "tenant-id-mismatch"), IB || await this.beforeStateQueue.runMiddleware(BB), this.queue((async () => {
              await this.directlySetCurrentUser(BB), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(BB) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(oI(BB))
            }))
          }
          async initializeRecaptchaConfig() {
            const BB = await CI(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              IB = new wI(BB);
            if (null == this.tenantId ? this._agentRecaptchaConfig = IB : this._tenantRecaptchaConfigs[this.tenantId] = IB, IB.emailPasswordEnabled) {
              new iI(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(BB) {
            this._errorFactory = new TB.h("auth", "Firebase", BB())
          }
          onAuthStateChanged(BB, IB, ZB) {
            return this.registerStateListener(this.authStateSubscription, BB, IB, ZB)
          }
          beforeAuthStateChanged(BB, IB) {
            return this.beforeStateQueue.pushCallback(BB, IB)
          }
          onIdTokenChanged(BB, IB, ZB) {
            return this.registerStateListener(this.idTokenSubscription, BB, IB, ZB)
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
          async _setRedirectUser(BB, IB) {
            const ZB = await this.getOrInitRedirectPersistenceManager(IB);
            return null === BB ? ZB.removeCurrentUser() : ZB.setCurrentUser(BB)
          }
          async getOrInitRedirectPersistenceManager(BB) {
            if (!this.redirectPersistenceManager) {
              const IB = BB && oI(BB) || this._popupRedirectResolver;
              OB(IB, this, "argument-error"), this.redirectPersistenceManager = await cI.create(this, [oI(IB._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(BB) {
            var IB, ZB;
            return this._isInitialized && await this.queue((async () => {})), (null === (IB = this._currentUser) || void 0 === IB ? void 0 : IB._redirectEventId) === BB ? this._currentUser : (null === (ZB = this.redirectUser) || void 0 === ZB ? void 0 : ZB._redirectEventId) === BB ? this.redirectUser : null
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
            var BB, IB;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const ZB = null !== (IB = null === (BB = this.currentUser) || void 0 === BB ? void 0 : BB.uid) && void 0 !== IB ? IB : null;
            this.lastNotifiedUid !== ZB && (this.lastNotifiedUid = ZB, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(BB, IB, ZB, TB) {
            if (this._deleted) return () => {};
            const JB = "function" === typeof IB ? IB : IB.next.bind(IB),
              oB = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return OB(oB, this, "internal-error"), oB.then((() => JB(this.currentUser))), "function" === typeof IB ? BB.addObserver(IB, ZB, TB) : BB.addObserver(IB)
          }
          async directlySetCurrentUser(BB) {
            this.currentUser && this.currentUser !== BB && this._currentUser._stopProactiveRefresh(), BB && this.isProactiveRefreshEnabled && BB._startProactiveRefresh(), this.currentUser = BB, BB ? await this.assertedPersistence.setCurrentUser(BB) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(BB) {
            return this.operations = this.operations.then(BB, BB), this.operations
          }
          get assertedPersistence() {
            return OB(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(BB) {
            BB && !this.frameworks.includes(BB) && (this.frameworks.push(BB), this.frameworks.sort(), this.clientVersion = dI(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var BB;
            const IB = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (IB["X-Firebase-gmpid"] = this.app.options.appId);
            const ZB = await (null === (BB = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === BB ? void 0 : BB.getHeartbeatsHeader());
            ZB && (IB["X-Firebase-Client"] = ZB);
            const TB = await this._getAppCheckToken();
            return TB && (IB["X-Firebase-AppCheck"] = TB), IB
          }
          async _getAppCheckToken() {
            var BB;
            const IB = await (null === (BB = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === BB ? void 0 : BB.getToken());
            return (null === IB || void 0 === IB ? void 0 : IB.error) && function(BB) {
              if (UB.logLevel <= GB.d.WARN) {
                for (var IB = arguments.length, ZB = new Array(IB > 1 ? IB - 1 : 0), TB = 1; TB < IB; TB++) ZB[TB - 1] = arguments[TB];
                UB.warn(`Auth (${JB.f}): ${BB}`, ...ZB)
              }
            }(`Error while retrieving App Check token: ${IB.error}`), null === IB || void 0 === IB ? void 0 : IB.token
          }
        }

        function MI(BB) {
          return (0, TB.N)(BB)
        }
        class jI {
          constructor(BB) {
            this.auth = BB, this.observer = null, this.addObserver = (0, TB.x)((BB => this.observer = BB))
          }
          get next() {
            return OB(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function PI(BB, IB) {
          const ZB = (0, JB.w)(BB, "auth");
          if (ZB.isInitialized()) {
            const BB = ZB.getImmediate(),
              JB = ZB.getOptions();
            if ((0, TB.B)(JB, null !== IB && void 0 !== IB ? IB : {})) return BB;
            dB(BB, "already-initialized")
          }
          return ZB.initialize({
            options: IB
          })
        }

        function RI(BB, IB, ZB) {
          const TB = MI(BB);
          OB(TB._canInitEmulator, TB, "emulator-config-failed"), OB(/^https?:\/\//.test(IB), TB, "invalid-emulator-scheme");
          const JB = !!(null === ZB || void 0 === ZB ? void 0 : ZB.disableWarnings),
            oB = rI(IB),
            {
              host: GB,
              port: vB
            } = function(BB) {
              const IB = rI(BB),
                ZB = /(\/\/)?([^?#/]+)/.exec(BB.substr(IB.length));
              if (!ZB) return {
                host: "",
                port: null
              };
              const TB = ZB[2].split("@").pop() || "",
                JB = /^(\[[^\]]+\])(:|$)/.exec(TB);
              if (JB) {
                const BB = JB[1];
                return {
                  host: BB,
                  port: mI(TB.substr(BB.length + 1))
                }
              } {
                const [BB, IB] = TB.split(":");
                return {
                  host: BB,
                  port: mI(IB)
                }
              }
            }(IB),
            kB = null === vB ? "" : `:${vB}`;
          TB.config.emulator = {
            url: `${oB}//${GB}${kB}/`
          }, TB.settings.appVerificationDisabledForTesting = !0, TB.emulatorConfig = Object.freeze({
            host: GB,
            port: vB,
            protocol: oB.replace(":", ""),
            options: Object.freeze({
              disableWarnings: JB
            })
          }), JB || function() {
            function BB() {
              const BB = document.createElement("p"),
                IB = BB.style;
              BB.innerText = "Running in emulator mode. Do not use with production credentials.", IB.position = "fixed", IB.width = "100%", IB.backgroundColor = "#ffffff", IB.border = ".1em solid #000000", IB.color = "#b50000", IB.bottom = "0px", IB.left = "0px", IB.margin = "0px", IB.zIndex = "10000", IB.textAlign = "center", BB.classList.add("firebase-emulator-warning"), document.body.appendChild(BB)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", BB) : BB())
          }()
        }

        function rI(BB) {
          const IB = BB.indexOf(":");
          return IB < 0 ? "" : BB.substr(0, IB + 1)
        }

        function mI(BB) {
          if (!BB) return null;
          const IB = Number(BB);
          return isNaN(IB) ? null : IB
        }
        class XI {
          constructor(BB, IB) {
            this.providerId = BB, this.signInMethod = IB
          }
          toJSON() {
            return YB("not implemented")
          }
          _getIdTokenResponse(BB) {
            return YB("not implemented")
          }
          _linkToIdToken(BB, IB) {
            return YB("not implemented")
          }
          _getReauthenticationResolver(BB) {
            return YB("not implemented")
          }
        }
        async function LI(BB, IB) {
          return XB(BB, "POST", "/v1/accounts:resetPassword", mB(BB, IB))
        }
        async function eI(BB, IB) {
          return XB(BB, "POST", "/v1/accounts:update", IB)
        }
        async function uI(BB, IB) {
          return eB(BB, "POST", "/v1/accounts:signInWithPassword", mB(BB, IB))
        }
        async function fI(BB, IB) {
          return XB(BB, "POST", "/v1/accounts:sendOobCode", mB(BB, IB))
        }
        async function lI(BB, IB) {
          return fI(BB, IB)
        }
        async function AI(BB, IB) {
          return fI(BB, IB)
        }
        class tI extends XI {
          constructor(BB, IB, ZB) {
            let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", ZB), this._email = BB, this._password = IB, this._tenantId = TB
          }
          static _fromEmailAndPassword(BB, IB) {
            return new tI(BB, IB, "password")
          }
          static _fromEmailAndCode(BB, IB) {
            return new tI(BB, IB, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
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
            const IB = "string" === typeof BB ? JSON.parse(BB) : BB;
            if ((null === IB || void 0 === IB ? void 0 : IB.email) && (null === IB || void 0 === IB ? void 0 : IB.password)) {
              if ("password" === IB.signInMethod) return this._fromEmailAndPassword(IB.email, IB.password);
              if ("emailLink" === IB.signInMethod) return this._fromEmailAndCode(IB.email, IB.password, IB.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(BB) {
            var IB;
            switch (this.signInMethod) {
              case "password":
                const ZB = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (IB = BB._getRecaptchaConfig()) || void 0 === IB ? void 0 : IB.emailPasswordEnabled) {
                  const IB = await pI(BB, ZB, "signInWithPassword");
                  return uI(BB, IB)
                }
                return uI(BB, ZB).catch((async IB => {
                  if ("auth/missing-recaptcha-token" === IB.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const IB = await pI(BB, ZB, "signInWithPassword");
                    return uI(BB, IB)
                  }
                  return Promise.reject(IB)
                }));
              case "emailLink":
                return async function(BB, IB) {
                  return eB(BB, "POST", "/v1/accounts:signInWithEmailLink", mB(BB, IB))
                }(BB, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                dB(BB, "internal-error")
            }
          }
          async _linkToIdToken(BB, IB) {
            switch (this.signInMethod) {
              case "password":
                return eI(BB, {
                  idToken: IB,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(BB, IB) {
                  return eB(BB, "POST", "/v1/accounts:signInWithEmailLink", mB(BB, IB))
                }(BB, {
                  idToken: IB,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                dB(BB, "internal-error")
            }
          }
          _getReauthenticationResolver(BB) {
            return this._getIdTokenResponse(BB)
          }
        }
        async function bI(BB, IB) {
          return eB(BB, "POST", "/v1/accounts:signInWithIdp", mB(BB, IB))
        }
        class xI extends XI {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(BB) {
            const IB = new xI(BB.providerId, BB.signInMethod);
            return BB.idToken || BB.accessToken ? (BB.idToken && (IB.idToken = BB.idToken), BB.accessToken && (IB.accessToken = BB.accessToken), BB.nonce && !BB.pendingToken && (IB.nonce = BB.nonce), BB.pendingToken && (IB.pendingToken = BB.pendingToken)) : BB.oauthToken && BB.oauthTokenSecret ? (IB.accessToken = BB.oauthToken, IB.secret = BB.oauthTokenSecret) : dB("argument-error"), IB
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
            const IB = "string" === typeof BB ? JSON.parse(BB) : BB,
              {
                providerId: ZB,
                signInMethod: TB
              } = IB,
              JB = oB(IB, ["providerId", "signInMethod"]);
            if (!ZB || !TB) return null;
            const GB = new xI(ZB, TB);
            return GB.idToken = JB.idToken || void 0, GB.accessToken = JB.accessToken || void 0, GB.secret = JB.secret, GB.nonce = JB.nonce, GB.pendingToken = JB.pendingToken || null, GB
          }
          _getIdTokenResponse(BB) {
            return bI(BB, this.buildRequest())
          }
          _linkToIdToken(BB, IB) {
            const ZB = this.buildRequest();
            return ZB.idToken = IB, bI(BB, ZB)
          }
          _getReauthenticationResolver(BB) {
            const IB = this.buildRequest();
            return IB.autoCreate = !1, bI(BB, IB)
          }
          buildRequest() {
            const BB = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) BB.pendingToken = this.pendingToken;
            else {
              const IB = {};
              this.idToken && (IB.id_token = this.idToken), this.accessToken && (IB.access_token = this.accessToken), this.secret && (IB.oauth_token_secret = this.secret), IB.providerId = this.providerId, this.nonce && !this.pendingToken && (IB.nonce = this.nonce), BB.postBody = (0, TB.db)(IB)
            }
            return BB
          }
        }
        const EI = {
          USER_NOT_FOUND: "user-not-found"
        };
        class DI extends XI {
          constructor(BB) {
            super("phone", "phone"), this.params = BB
          }
          static _fromVerification(BB, IB) {
            return new DI({
              verificationId: BB,
              verificationCode: IB
            })
          }
          static _fromTokenResponse(BB, IB) {
            return new DI({
              phoneNumber: BB,
              temporaryProof: IB
            })
          }
          _getIdTokenResponse(BB) {
            return async function(BB, IB) {
              return eB(BB, "POST", "/v1/accounts:signInWithPhoneNumber", mB(BB, IB))
            }(BB, this._makeVerificationRequest())
          }
          _linkToIdToken(BB, IB) {
            return async function(BB, IB) {
              const ZB = await eB(BB, "POST", "/v1/accounts:signInWithPhoneNumber", mB(BB, IB));
              if (ZB.temporaryProof) throw lB(BB, "account-exists-with-different-credential", ZB);
              return ZB
            }(BB, Object.assign({
              idToken: IB
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(BB) {
            return async function(BB, IB) {
              return eB(BB, "POST", "/v1/accounts:signInWithPhoneNumber", mB(BB, Object.assign(Object.assign({}, IB), {
                operation: "REAUTH"
              })), EI)
            }(BB, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: BB,
              phoneNumber: IB,
              verificationId: ZB,
              verificationCode: TB
            } = this.params;
            return BB && IB ? {
              temporaryProof: BB,
              phoneNumber: IB
            } : {
              sessionInfo: ZB,
              code: TB
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
              verificationId: IB,
              verificationCode: ZB,
              phoneNumber: TB,
              temporaryProof: JB
            } = BB;
            return ZB || IB || TB || JB ? new DI({
              verificationId: IB,
              verificationCode: ZB,
              phoneNumber: TB,
              temporaryProof: JB
            }) : null
          }
        }
        class KI {
          constructor(BB) {
            var IB, ZB, JB, oB, GB, vB;
            const kB = (0, TB.cb)((0, TB.F)(BB)),
              cB = null !== (IB = kB.apiKey) && void 0 !== IB ? IB : null,
              nB = null !== (ZB = kB.oobCode) && void 0 !== ZB ? ZB : null,
              hB = function(BB) {
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
              }(null !== (JB = kB.mode) && void 0 !== JB ? JB : null);
            OB(cB && nB && hB, "argument-error"), this.apiKey = cB, this.operation = hB, this.code = nB, this.continueUrl = null !== (oB = kB.continueUrl) && void 0 !== oB ? oB : null, this.languageCode = null !== (GB = kB.languageCode) && void 0 !== GB ? GB : null, this.tenantId = null !== (vB = kB.tenantId) && void 0 !== vB ? vB : null
          }
          static parseLink(BB) {
            const IB = function(BB) {
              const IB = (0, TB.cb)((0, TB.F)(BB)).link,
                ZB = IB ? (0, TB.cb)((0, TB.F)(IB)).deep_link_id : null,
                JB = (0, TB.cb)((0, TB.F)(BB)).deep_link_id;
              return (JB ? (0, TB.cb)((0, TB.F)(JB)).link : null) || JB || ZB || IB || BB
            }(BB);
            try {
              return new KI(IB)
            } catch (ZB) {
              return null
            }
          }
        }

        function VI(BB) {
          return KI.parseLink(BB)
        }
        class SI {
          constructor() {
            this.providerId = SI.PROVIDER_ID
          }
          static credential(BB, IB) {
            return tI._fromEmailAndPassword(BB, IB)
          }
          static credentialWithLink(BB, IB) {
            const ZB = KI.parseLink(IB);
            return OB(ZB, "argument-error"), tI._fromEmailAndCode(BB, ZB.code, ZB.tenantId)
          }
        }
        SI.PROVIDER_ID = "password", SI.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", SI.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class BZ {
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
        class IZ extends BZ {
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
        class ZZ extends IZ {
          static credentialFromJSON(BB) {
            const IB = "string" === typeof BB ? JSON.parse(BB) : BB;
            return OB("providerId" in IB && "signInMethod" in IB, "argument-error"), xI._fromParams(IB)
          }
          credential(BB) {
            return this._credential(Object.assign(Object.assign({}, BB), {
              nonce: BB.rawNonce
            }))
          }
          _credential(BB) {
            return OB(BB.idToken || BB.accessToken, "argument-error"), xI._fromParams(Object.assign(Object.assign({}, BB), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(BB) {
            return ZZ.oauthCredentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return ZZ.oauthCredentialFromTaggedObject(BB.customData || {})
          }
          static oauthCredentialFromTaggedObject(BB) {
            let {
              _tokenResponse: IB
            } = BB;
            if (!IB) return null;
            const {
              oauthIdToken: ZB,
              oauthAccessToken: TB,
              oauthTokenSecret: JB,
              pendingToken: oB,
              nonce: GB,
              providerId: vB
            } = IB;
            if (!TB && !JB && !ZB && !oB) return null;
            if (!vB) return null;
            try {
              return new ZZ(vB)._credential({
                idToken: ZB,
                accessToken: TB,
                nonce: GB,
                pendingToken: oB
              })
            } catch (kB) {
              return null
            }
          }
        }
        class TZ extends IZ {
          constructor() {
            super("facebook.com")
          }
          static credential(BB) {
            return xI._fromParams({
              providerId: TZ.PROVIDER_ID,
              signInMethod: TZ.FACEBOOK_SIGN_IN_METHOD,
              accessToken: BB
            })
          }
          static credentialFromResult(BB) {
            return TZ.credentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return TZ.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: IB
            } = BB;
            if (!IB || !("oauthAccessToken" in IB)) return null;
            if (!IB.oauthAccessToken) return null;
            try {
              return TZ.credential(IB.oauthAccessToken)
            } catch (ZB) {
              return null
            }
          }
        }
        TZ.FACEBOOK_SIGN_IN_METHOD = "facebook.com", TZ.PROVIDER_ID = "facebook.com";
        class JZ extends IZ {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(BB, IB) {
            return xI._fromParams({
              providerId: JZ.PROVIDER_ID,
              signInMethod: JZ.GOOGLE_SIGN_IN_METHOD,
              idToken: BB,
              accessToken: IB
            })
          }
          static credentialFromResult(BB) {
            return JZ.credentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return JZ.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: IB
            } = BB;
            if (!IB) return null;
            const {
              oauthIdToken: ZB,
              oauthAccessToken: TB
            } = IB;
            if (!ZB && !TB) return null;
            try {
              return JZ.credential(ZB, TB)
            } catch (JB) {
              return null
            }
          }
        }
        JZ.GOOGLE_SIGN_IN_METHOD = "google.com", JZ.PROVIDER_ID = "google.com";
        class oZ extends IZ {
          constructor() {
            super("github.com")
          }
          static credential(BB) {
            return xI._fromParams({
              providerId: oZ.PROVIDER_ID,
              signInMethod: oZ.GITHUB_SIGN_IN_METHOD,
              accessToken: BB
            })
          }
          static credentialFromResult(BB) {
            return oZ.credentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return oZ.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: IB
            } = BB;
            if (!IB || !("oauthAccessToken" in IB)) return null;
            if (!IB.oauthAccessToken) return null;
            try {
              return oZ.credential(IB.oauthAccessToken)
            } catch (ZB) {
              return null
            }
          }
        }
        oZ.GITHUB_SIGN_IN_METHOD = "github.com", oZ.PROVIDER_ID = "github.com";
        class GZ extends XI {
          constructor(BB, IB) {
            super(BB, BB), this.pendingToken = IB
          }
          _getIdTokenResponse(BB) {
            return bI(BB, this.buildRequest())
          }
          _linkToIdToken(BB, IB) {
            const ZB = this.buildRequest();
            return ZB.idToken = IB, bI(BB, ZB)
          }
          _getReauthenticationResolver(BB) {
            const IB = this.buildRequest();
            return IB.autoCreate = !1, bI(BB, IB)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(BB) {
            const IB = "string" === typeof BB ? JSON.parse(BB) : BB,
              {
                providerId: ZB,
                signInMethod: TB,
                pendingToken: JB
              } = IB;
            return ZB && TB && JB && ZB === TB ? new GZ(ZB, JB) : null
          }
          static _create(BB, IB) {
            return new GZ(BB, IB)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class vZ extends BZ {
          constructor(BB) {
            OB(BB.startsWith("saml."), "argument-error"), super(BB)
          }
          static credentialFromResult(BB) {
            return vZ.samlCredentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return vZ.samlCredentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromJSON(BB) {
            const IB = GZ.fromJSON(BB);
            return OB(IB, "argument-error"), IB
          }
          static samlCredentialFromTaggedObject(BB) {
            let {
              _tokenResponse: IB
            } = BB;
            if (!IB) return null;
            const {
              pendingToken: ZB,
              providerId: TB
            } = IB;
            if (!ZB || !TB) return null;
            try {
              return GZ._create(TB, ZB)
            } catch (JB) {
              return null
            }
          }
        }
        class kZ extends IZ {
          constructor() {
            super("twitter.com")
          }
          static credential(BB, IB) {
            return xI._fromParams({
              providerId: kZ.PROVIDER_ID,
              signInMethod: kZ.TWITTER_SIGN_IN_METHOD,
              oauthToken: BB,
              oauthTokenSecret: IB
            })
          }
          static credentialFromResult(BB) {
            return kZ.credentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return kZ.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: IB
            } = BB;
            if (!IB) return null;
            const {
              oauthAccessToken: ZB,
              oauthTokenSecret: TB
            } = IB;
            if (!ZB || !TB) return null;
            try {
              return kZ.credential(ZB, TB)
            } catch (JB) {
              return null
            }
          }
        }
        async function cZ(BB, IB) {
          return eB(BB, "POST", "/v1/accounts:signUp", mB(BB, IB))
        }
        kZ.TWITTER_SIGN_IN_METHOD = "twitter.com", kZ.PROVIDER_ID = "twitter.com";
        class nZ {
          constructor(BB) {
            this.user = BB.user, this.providerId = BB.providerId, this._tokenResponse = BB._tokenResponse, this.operationType = BB.operationType
          }
          static async _fromIdTokenResponse(BB, IB, ZB) {
            let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const JB = await TI._fromIdTokenResponse(BB, ZB, TB),
              oB = hZ(ZB);
            return new nZ({
              user: JB,
              providerId: oB,
              _tokenResponse: ZB,
              operationType: IB
            })
          }
          static async _forOperation(BB, IB, ZB) {
            await BB._updateTokensIfNecessary(ZB, !0);
            const TB = hZ(ZB);
            return new nZ({
              user: BB,
              providerId: TB,
              _tokenResponse: ZB,
              operationType: IB
            })
          }
        }

        function hZ(BB) {
          return BB.providerId ? BB.providerId : "phoneNumber" in BB ? "phone" : null
        }
        async function zZ(BB) {
          var IB;
          const ZB = MI(BB);
          if (await ZB._initializationPromise, null === (IB = ZB.currentUser) || void 0 === IB ? void 0 : IB.isAnonymous) return new nZ({
            user: ZB.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const TB = await cZ(ZB, {
              returnSecureToken: !0
            }),
            JB = await nZ._fromIdTokenResponse(ZB, "signIn", TB, !0);
          return await ZB._updateCurrentUser(JB.user), JB
        }
        class FZ extends TB.j {
          constructor(BB, IB, ZB, TB) {
            var JB;
            super(IB.code, IB.message), this.operationType = ZB, this.user = TB, Object.setPrototypeOf(this, FZ.prototype), this.customData = {
              appName: BB.name,
              tenantId: null !== (JB = BB.tenantId) && void 0 !== JB ? JB : void 0,
              _serverResponse: IB.customData._serverResponse,
              operationType: ZB
            }
          }
          static _fromErrorAndOperation(BB, IB, ZB, TB) {
            return new FZ(BB, IB, ZB, TB)
          }
        }

        function NZ(BB, IB, ZB, TB) {
          return ("reauthenticate" === IB ? ZB._getReauthenticationResolver(BB) : ZB._getIdTokenResponse(BB)).catch((ZB => {
            if ("auth/multi-factor-auth-required" === ZB.code) throw FZ._fromErrorAndOperation(BB, ZB, IB, TB);
            throw ZB
          }))
        }

        function gZ(BB) {
          return new Set(BB.map((BB => {
            let {
              providerId: IB
            } = BB;
            return IB
          })).filter((BB => !!BB)))
        }
        async function qZ(BB, IB) {
          const ZB = (0, TB.N)(BB);
          await UZ(!0, ZB, IB);
          const {
            providerUserInfo: JB
          } = await async function(BB, IB) {
            return XB(BB, "POST", "/v1/accounts:update", IB)
          }(ZB.auth, {
            idToken: await ZB.getIdToken(),
            deleteProvider: [IB]
          }), oB = gZ(JB || []);
          return ZB.providerData = ZB.providerData.filter((BB => oB.has(BB.providerId))), oB.has("phone") || (ZB.phoneNumber = null), await ZB.auth._persistUserIfCurrent(ZB), ZB
        }
        async function yZ(BB, IB) {
          let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const TB = await DB(BB, IB._linkToIdToken(BB.auth, await BB.getIdToken()), ZB);
          return nZ._forOperation(BB, "link", TB)
        }
        async function UZ(BB, IB, ZB) {
          await SB(IB);
          const TB = !1 === BB ? "provider-already-linked" : "no-such-provider";
          OB(gZ(IB.providerData).has(ZB) === BB, IB.auth, TB)
        }
        async function WZ(BB, IB) {
          let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: TB
          } = BB, JB = "reauthenticate";
          try {
            const oB = await DB(BB, NZ(TB, JB, IB, BB), ZB);
            OB(oB.idToken, TB, "internal-error");
            const GB = EB(oB.idToken);
            OB(GB, TB, "internal-error");
            const {
              sub: vB
            } = GB;
            return OB(BB.uid === vB, TB, "user-mismatch"), nZ._forOperation(BB, JB, oB)
          } catch (oB) {
            throw "auth/user-not-found" === (null === oB || void 0 === oB ? void 0 : oB.code) && dB(TB, "user-mismatch"), oB
          }
        }
        async function dZ(BB, IB) {
          let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const TB = "signIn",
            JB = await NZ(BB, TB, IB),
            oB = await nZ._fromIdTokenResponse(BB, TB, JB);
          return ZB || await BB._updateCurrentUser(oB.user), oB
        }
        async function CZ(BB, IB) {
          return dZ(MI(BB), IB)
        }
        async function QZ(BB, IB) {
          const ZB = (0, TB.N)(BB);
          return await UZ(!1, ZB, IB.providerId), yZ(ZB, IB)
        }
        async function sZ(BB, IB) {
          return WZ((0, TB.N)(BB), IB)
        }
        async function wZ(BB, IB) {
          const ZB = MI(BB),
            TB = await async function(BB, IB) {
              return eB(BB, "POST", "/v1/accounts:signInWithCustomToken", mB(BB, IB))
            }(ZB, {
              token: IB,
              returnSecureToken: !0
            }), JB = await nZ._fromIdTokenResponse(ZB, "signIn", TB);
          return await ZB._updateCurrentUser(JB.user), JB
        }
        class OZ {
          constructor(BB, IB) {
            this.factorId = BB, this.uid = IB.mfaEnrollmentId, this.enrollmentTime = new Date(IB.enrolledAt).toUTCString(), this.displayName = IB.displayName
          }
          static _fromServerResponse(BB, IB) {
            return "phoneInfo" in IB ? YZ._fromServerResponse(BB, IB) : "totpInfo" in IB ? iZ._fromServerResponse(BB, IB) : dB(BB, "internal-error")
          }
        }
        class YZ extends OZ {
          constructor(BB) {
            super("phone", BB), this.phoneNumber = BB.phoneInfo
          }
          static _fromServerResponse(BB, IB) {
            return new YZ(IB)
          }
        }
        class iZ extends OZ {
          constructor(BB) {
            super("totp", BB)
          }
          static _fromServerResponse(BB, IB) {
            return new iZ(IB)
          }
        }

        function pZ(BB, IB, ZB) {
          var TB;
          OB((null === (TB = ZB.url) || void 0 === TB ? void 0 : TB.length) > 0, BB, "invalid-continue-uri"), OB("undefined" === typeof ZB.dynamicLinkDomain || ZB.dynamicLinkDomain.length > 0, BB, "invalid-dynamic-link-domain"), IB.continueUrl = ZB.url, IB.dynamicLinkDomain = ZB.dynamicLinkDomain, IB.canHandleCodeInApp = ZB.handleCodeInApp, ZB.iOS && (OB(ZB.iOS.bundleId.length > 0, BB, "missing-ios-bundle-id"), IB.iOSBundleId = ZB.iOS.bundleId), ZB.android && (OB(ZB.android.packageName.length > 0, BB, "missing-android-pkg-name"), IB.androidInstallApp = ZB.android.installApp, IB.androidMinimumVersionCode = ZB.android.minimumVersion, IB.androidPackageName = ZB.android.packageName)
        }
        async function aZ(BB, IB, ZB) {
          var TB;
          const JB = MI(BB),
            oB = {
              requestType: "PASSWORD_RESET",
              email: IB,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (TB = JB._getRecaptchaConfig()) || void 0 === TB ? void 0 : TB.emailPasswordEnabled) {
            const BB = await pI(JB, oB, "getOobCode", !0);
            ZB && pZ(JB, BB, ZB), await lI(JB, BB)
          } else ZB && pZ(JB, oB, ZB), await lI(JB, oB).catch((async BB => {
            if ("auth/missing-recaptcha-token" !== BB.code) return Promise.reject(BB);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const BB = await pI(JB, oB, "getOobCode", !0);
              ZB && pZ(JB, BB, ZB), await lI(JB, BB)
            }
          }))
        }
        async function HZ(BB, IB, ZB) {
          await LI((0, TB.N)(BB), {
            oobCode: IB,
            newPassword: ZB
          })
        }
        async function MZ(BB, IB) {
          await async function(BB, IB) {
            return XB(BB, "POST", "/v1/accounts:update", mB(BB, IB))
          }((0, TB.N)(BB), {
            oobCode: IB
          })
        }
        async function jZ(BB, IB) {
          const ZB = (0, TB.N)(BB),
            JB = await LI(ZB, {
              oobCode: IB
            }),
            oB = JB.requestType;
          switch (OB(oB, ZB, "internal-error"), oB) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              OB(JB.newEmail, ZB, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              OB(JB.mfaInfo, ZB, "internal-error");
            default:
              OB(JB.email, ZB, "internal-error")
          }
          let GB = null;
          return JB.mfaInfo && (GB = OZ._fromServerResponse(MI(ZB), JB.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === JB.requestType ? JB.newEmail : JB.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === JB.requestType ? JB.email : JB.newEmail) || null,
              multiFactorInfo: GB
            },
            operation: oB
          }
        }
        async function PZ(BB, IB) {
          const {
            data: ZB
          } = await jZ((0, TB.N)(BB), IB);
          return ZB.email
        }
        async function RZ(BB, IB, ZB) {
          var TB;
          const JB = MI(BB),
            oB = {
              returnSecureToken: !0,
              email: IB,
              password: ZB,
              clientType: "CLIENT_TYPE_WEB"
            };
          let GB;
          if (null === (TB = JB._getRecaptchaConfig()) || void 0 === TB ? void 0 : TB.emailPasswordEnabled) {
            const BB = await pI(JB, oB, "signUpPassword");
            GB = cZ(JB, BB)
          } else GB = cZ(JB, oB).catch((async BB => {
            if ("auth/missing-recaptcha-token" === BB.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const BB = await pI(JB, oB, "signUpPassword");
              return cZ(JB, BB)
            }
            return Promise.reject(BB)
          }));
          const vB = await GB.catch((BB => Promise.reject(BB))),
            kB = await nZ._fromIdTokenResponse(JB, "signIn", vB);
          return await JB._updateCurrentUser(kB.user), kB
        }

        function rZ(BB, IB, ZB) {
          return CZ((0, TB.N)(BB), SI.credential(IB, ZB))
        }
        async function mZ(BB, IB, ZB) {
          var TB;
          const JB = MI(BB),
            oB = {
              requestType: "EMAIL_SIGNIN",
              email: IB,
              clientType: "CLIENT_TYPE_WEB"
            };

          function GB(BB, IB) {
            OB(IB.handleCodeInApp, JB, "argument-error"), IB && pZ(JB, BB, IB)
          }
          if (null === (TB = JB._getRecaptchaConfig()) || void 0 === TB ? void 0 : TB.emailPasswordEnabled) {
            const BB = await pI(JB, oB, "getOobCode", !0);
            GB(BB, ZB), await AI(JB, BB)
          } else GB(oB, ZB), await AI(JB, oB).catch((async BB => {
            if ("auth/missing-recaptcha-token" !== BB.code) return Promise.reject(BB);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const BB = await pI(JB, oB, "getOobCode", !0);
              GB(BB, ZB), await AI(JB, BB)
            }
          }))
        }

        function XZ(BB, IB) {
          const ZB = KI.parseLink(IB);
          return "EMAIL_SIGNIN" === (null === ZB || void 0 === ZB ? void 0 : ZB.operation)
        }
        async function LZ(BB, IB, ZB) {
          const JB = (0, TB.N)(BB),
            oB = SI.credentialWithLink(IB, ZB || pB());
          return OB(oB._tenantId === (JB.tenantId || null), JB, "tenant-id-mismatch"), CZ(JB, oB)
        }
        async function eZ(BB, IB) {
          const ZB = {
              identifier: IB,
              continueUri: aB() ? pB() : "http://localhost"
            },
            {
              signinMethods: JB
            } = await async function(BB, IB) {
              return XB(BB, "POST", "/v1/accounts:createAuthUri", mB(BB, IB))
            }((0, TB.N)(BB), ZB);
          return JB || []
        }
        async function uZ(BB, IB) {
          const ZB = (0, TB.N)(BB),
            JB = {
              requestType: "VERIFY_EMAIL",
              idToken: await BB.getIdToken()
            };
          IB && pZ(ZB.auth, JB, IB);
          const {
            email: oB
          } = await async function(BB, IB) {
            return fI(BB, IB)
          }(ZB.auth, JB);
          oB !== BB.email && await BB.reload()
        }
        async function fZ(BB, IB, ZB) {
          const JB = (0, TB.N)(BB),
            oB = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await BB.getIdToken(),
              newEmail: IB
            };
          ZB && pZ(JB.auth, oB, ZB);
          const {
            email: GB
          } = await async function(BB, IB) {
            return fI(BB, IB)
          }(JB.auth, oB);
          GB !== BB.email && await BB.reload()
        }
        async function lZ(BB, IB) {
          let {
            displayName: ZB,
            photoURL: JB
          } = IB;
          if (void 0 === ZB && void 0 === JB) return;
          const oB = (0, TB.N)(BB),
            GB = {
              idToken: await oB.getIdToken(),
              displayName: ZB,
              photoUrl: JB,
              returnSecureToken: !0
            },
            vB = await DB(oB, async function(BB, IB) {
              return XB(BB, "POST", "/v1/accounts:update", IB)
            }(oB.auth, GB));
          oB.displayName = vB.displayName || null, oB.photoURL = vB.photoUrl || null;
          const kB = oB.providerData.find((BB => {
            let {
              providerId: IB
            } = BB;
            return "password" === IB
          }));
          kB && (kB.displayName = oB.displayName, kB.photoURL = oB.photoURL), await oB._updateTokensIfNecessary(vB)
        }

        function AZ(BB, IB) {
          return bZ((0, TB.N)(BB), IB, null)
        }

        function tZ(BB, IB) {
          return bZ((0, TB.N)(BB), null, IB)
        }
        async function bZ(BB, IB, ZB) {
          const {
            auth: TB
          } = BB, JB = {
            idToken: await BB.getIdToken(),
            returnSecureToken: !0
          };
          IB && (JB.email = IB), ZB && (JB.password = ZB);
          const oB = await DB(BB, eI(TB, JB));
          await BB._updateTokensIfNecessary(oB, !0)
        }
        class xZ {
          constructor(BB, IB) {
            let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = BB, this.providerId = IB, this.profile = ZB
          }
        }
        class EZ extends xZ {
          constructor(BB, IB, ZB, TB) {
            super(BB, IB, ZB), this.username = TB
          }
        }
        class DZ extends xZ {
          constructor(BB, IB) {
            super(BB, "facebook.com", IB)
          }
        }
        class KZ extends EZ {
          constructor(BB, IB) {
            super(BB, "github.com", IB, "string" === typeof(null === IB || void 0 === IB ? void 0 : IB.login) ? null === IB || void 0 === IB ? void 0 : IB.login : null)
          }
        }
        class VZ extends xZ {
          constructor(BB, IB) {
            super(BB, "google.com", IB)
          }
        }
        class SZ extends EZ {
          constructor(BB, IB, ZB) {
            super(BB, "twitter.com", IB, ZB)
          }
        }

        function BT(BB) {
          const {
            user: IB,
            _tokenResponse: ZB
          } = BB;
          return IB.isAnonymous && !ZB ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(BB) {
            var IB, ZB;
            if (!BB) return null;
            const {
              providerId: TB
            } = BB, JB = BB.rawUserInfo ? JSON.parse(BB.rawUserInfo) : {}, oB = BB.isNewUser || "identitytoolkit#SignupNewUserResponse" === BB.kind;
            if (!TB && (null === BB || void 0 === BB ? void 0 : BB.idToken)) {
              const TB = null === (ZB = null === (IB = EB(BB.idToken)) || void 0 === IB ? void 0 : IB.firebase) || void 0 === ZB ? void 0 : ZB.sign_in_provider;
              if (TB) return new xZ(oB, "anonymous" !== TB && "custom" !== TB ? TB : null)
            }
            if (!TB) return null;
            switch (TB) {
              case "facebook.com":
                return new DZ(oB, JB);
              case "github.com":
                return new KZ(oB, JB);
              case "google.com":
                return new VZ(oB, JB);
              case "twitter.com":
                return new SZ(oB, JB, BB.screenName || null);
              case "custom":
              case "anonymous":
                return new xZ(oB, null);
              default:
                return new xZ(oB, TB, JB)
            }
          }(ZB)
        }

        function IT(BB, IB) {
          return (0, TB.N)(BB).setPersistence(IB)
        }

        function ZT(BB) {
          return MI(BB).initializeRecaptchaConfig()
        }

        function TT(BB, IB, ZB, JB) {
          return (0, TB.N)(BB).onIdTokenChanged(IB, ZB, JB)
        }

        function JT(BB, IB, ZB) {
          return (0, TB.N)(BB).beforeAuthStateChanged(IB, ZB)
        }

        function oT(BB, IB, ZB, JB) {
          return (0, TB.N)(BB).onAuthStateChanged(IB, ZB, JB)
        }

        function GT(BB) {
          (0, TB.N)(BB).useDeviceLanguage()
        }

        function vT(BB, IB) {
          return (0, TB.N)(BB).updateCurrentUser(IB)
        }

        function kT(BB) {
          return (0, TB.N)(BB).signOut()
        }
        async function cT(BB) {
          return (0, TB.N)(BB).delete()
        }
        class nT {
          constructor(BB, IB, ZB) {
            this.type = BB, this.credential = IB, this.auth = ZB
          }
          static _fromIdtoken(BB, IB) {
            return new nT("enroll", BB, IB)
          }
          static _fromMfaPendingCredential(BB) {
            return new nT("signin", BB)
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
            var IB, ZB;
            if (null === BB || void 0 === BB ? void 0 : BB.multiFactorSession) {
              if (null === (IB = BB.multiFactorSession) || void 0 === IB ? void 0 : IB.pendingCredential) return nT._fromMfaPendingCredential(BB.multiFactorSession.pendingCredential);
              if (null === (ZB = BB.multiFactorSession) || void 0 === ZB ? void 0 : ZB.idToken) return nT._fromIdtoken(BB.multiFactorSession.idToken)
            }
            return null
          }
        }
        class hT {
          constructor(BB, IB, ZB) {
            this.session = BB, this.hints = IB, this.signInResolver = ZB
          }
          static _fromError(BB, IB) {
            const ZB = MI(BB),
              TB = IB.customData._serverResponse,
              JB = (TB.mfaInfo || []).map((BB => OZ._fromServerResponse(ZB, BB)));
            OB(TB.mfaPendingCredential, ZB, "internal-error");
            const oB = nT._fromMfaPendingCredential(TB.mfaPendingCredential);
            return new hT(oB, JB, (async BB => {
              const JB = await BB._process(ZB, oB);
              delete TB.mfaInfo, delete TB.mfaPendingCredential;
              const GB = Object.assign(Object.assign({}, TB), {
                idToken: JB.idToken,
                refreshToken: JB.refreshToken
              });
              switch (IB.operationType) {
                case "signIn":
                  const BB = await nZ._fromIdTokenResponse(ZB, IB.operationType, GB);
                  return await ZB._updateCurrentUser(BB.user), BB;
                case "reauthenticate":
                  return OB(IB.user, ZB, "internal-error"), nZ._forOperation(IB.user, IB.operationType, GB);
                default:
                  dB(ZB, "internal-error")
              }
            }))
          }
          async resolveSignIn(BB) {
            const IB = BB;
            return this.signInResolver(IB)
          }
        }

        function zT(BB, IB) {
          var ZB;
          const JB = (0, TB.N)(BB),
            oB = IB;
          return OB(IB.customData.operationType, JB, "argument-error"), OB(null === (ZB = oB.customData._serverResponse) || void 0 === ZB ? void 0 : ZB.mfaPendingCredential, JB, "argument-error"), hT._fromError(JB, oB)
        }
        class FT {
          constructor(BB) {
            this.user = BB, this.enrolledFactors = [], BB._onReload((IB => {
              IB.mfaInfo && (this.enrolledFactors = IB.mfaInfo.map((IB => OZ._fromServerResponse(BB.auth, IB))))
            }))
          }
          static _fromUser(BB) {
            return new FT(BB)
          }
          async getSession() {
            return nT._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(BB, IB) {
            const ZB = BB,
              TB = await this.getSession(),
              JB = await DB(this.user, ZB._process(this.user.auth, TB, IB));
            return await this.user._updateTokensIfNecessary(JB), this.user.reload()
          }
          async unenroll(BB) {
            const IB = "string" === typeof BB ? BB : BB.uid,
              ZB = await this.user.getIdToken();
            try {
              const BB = await DB(this.user, (TB = this.user.auth, JB = {
                idToken: ZB,
                mfaEnrollmentId: IB
              }, XB(TB, "POST", "/v2/accounts/mfaEnrollment:withdraw", mB(TB, JB))));
              this.enrolledFactors = this.enrolledFactors.filter((BB => {
                let {
                  uid: ZB
                } = BB;
                return ZB !== IB
              })), await this.user._updateTokensIfNecessary(BB), await this.user.reload()
            } catch (oB) {
              throw oB
            }
            var TB, JB
          }
        }
        const NT = new WeakMap;

        function gT(BB) {
          const IB = (0, TB.N)(BB);
          return NT.has(IB) || NT.set(IB, FT._fromUser(IB)), NT.get(IB)
        }
        const qT = "__sak";
        class yT {
          constructor(BB, IB) {
            this.storageRetriever = BB, this.type = IB
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(qT, "1"), this.storage.removeItem(qT), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (BB) {
              return Promise.resolve(!1)
            }
          }
          _set(BB, IB) {
            return this.storage.setItem(BB, JSON.stringify(IB)), Promise.resolve()
          }
          _get(BB) {
            const IB = this.storage.getItem(BB);
            return Promise.resolve(IB ? JSON.parse(IB) : null)
          }
          _remove(BB) {
            return this.storage.removeItem(BB), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class UT extends yT {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (BB, IB) => this.onStorageEvent(BB, IB), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const BB = (0, TB.P)();
              return zI(BB) || UI(BB)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (BB) {
                return !1
              }
            }(), this.fallbackToPolling = WI(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(BB) {
            for (const IB of Object.keys(this.listeners)) {
              const ZB = this.storage.getItem(IB),
                TB = this.localCache[IB];
              ZB !== TB && BB(IB, TB, ZB)
            }
          }
          onStorageEvent(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!BB.key) return void this.forAllChangedKeys(((BB, IB, ZB) => {
              this.notifyListeners(BB, ZB)
            }));
            const ZB = BB.key;
            if (IB ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const TB = this.storage.getItem(ZB);
              if (BB.newValue !== TB) null !== BB.newValue ? this.storage.setItem(ZB, BB.newValue) : this.storage.removeItem(ZB);
              else if (this.localCache[ZB] === BB.newValue && !IB) return
            }
            const JB = () => {
                const BB = this.storage.getItem(ZB);
                (IB || this.localCache[ZB] !== BB) && this.notifyListeners(ZB, BB)
              },
              oB = this.storage.getItem(ZB);
            (0, TB.W)() && 10 === document.documentMode && oB !== BB.newValue && BB.newValue !== BB.oldValue ? setTimeout(JB, 10) : JB()
          }
          notifyListeners(BB, IB) {
            this.localCache[BB] = IB;
            const ZB = this.listeners[BB];
            if (ZB)
              for (const TB of Array.from(ZB)) TB(IB ? JSON.parse(IB) : IB)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((BB, IB, ZB) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: BB,
                  oldValue: IB,
                  newValue: ZB
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
          _addListener(BB, IB) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[BB] || (this.listeners[BB] = new Set, this.localCache[BB] = this.storage.getItem(BB)), this.listeners[BB].add(IB)
          }
          _removeListener(BB, IB) {
            this.listeners[BB] && (this.listeners[BB].delete(IB), 0 === this.listeners[BB].size && delete this.listeners[BB]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(BB, IB) {
            await super._set(BB, IB), this.localCache[BB] = JSON.stringify(IB)
          }
          async _get(BB) {
            const IB = await super._get(BB);
            return this.localCache[BB] = JSON.stringify(IB), IB
          }
          async _remove(BB) {
            await super._remove(BB), delete this.localCache[BB]
          }
        }
        UT.type = "LOCAL";
        const WT = UT;
        class dT extends yT {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(BB, IB) {}
          _removeListener(BB, IB) {}
        }
        dT.type = "SESSION";
        const CT = dT;
        class QT {
          constructor(BB) {
            this.eventTarget = BB, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(BB) {
            const IB = this.receivers.find((IB => IB.isListeningto(BB)));
            if (IB) return IB;
            const ZB = new QT(BB);
            return this.receivers.push(ZB), ZB
          }
          isListeningto(BB) {
            return this.eventTarget === BB
          }
          async handleEvent(BB) {
            const IB = BB,
              {
                eventId: ZB,
                eventType: TB,
                data: JB
              } = IB.data,
              oB = this.handlersMap[TB];
            if (!(null === oB || void 0 === oB ? void 0 : oB.size)) return;
            IB.ports[0].postMessage({
              status: "ack",
              eventId: ZB,
              eventType: TB
            });
            const GB = Array.from(oB).map((async BB => BB(IB.origin, JB))),
              vB = await
            function(BB) {
              return Promise.all(BB.map((async BB => {
                try {
                  return {
                    fulfilled: !0,
                    value: await BB
                  }
                } catch (IB) {
                  return {
                    fulfilled: !1,
                    reason: IB
                  }
                }
              })))
            }(GB);
            IB.ports[0].postMessage({
              status: "done",
              eventId: ZB,
              eventType: TB,
              response: vB
            })
          }
          _subscribe(BB, IB) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[BB] || (this.handlersMap[BB] = new Set), this.handlersMap[BB].add(IB)
          }
          _unsubscribe(BB, IB) {
            this.handlersMap[BB] && IB && this.handlersMap[BB].delete(IB), IB && 0 !== this.handlersMap[BB].size || delete this.handlersMap[BB], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function sT() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            ZB = "";
          for (let TB = 0; TB < IB; TB++) ZB += Math.floor(10 * Math.random());
          return BB + ZB
        }
        QT.receivers = [];
        class wT {
          constructor(BB) {
            this.target = BB, this.handlers = new Set
          }
          removeMessageHandler(BB) {
            BB.messageChannel && (BB.messageChannel.port1.removeEventListener("message", BB.rU), BB.messageChannel.port1.close()), this.handlers.delete(BB)
          }
          async _send(BB, IB) {
            let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const TB = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!TB) throw new Error("connection_unavailable");
            let JB, oB;
            return new Promise(((GB, vB) => {
              const kB = sT("", 20);
              TB.port1.start();
              const cB = setTimeout((() => {
                vB(new Error("unsupported_event"))
              }), ZB);
              oB = {
                messageChannel: TB,
                rU(BB) {
                  const IB = BB;
                  if (IB.data.eventId === kB) switch (IB.data.status) {
                    case "ack":
                      clearTimeout(cB), JB = setTimeout((() => {
                        vB(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(JB), GB(IB.data.response);
                      break;
                    default:
                      clearTimeout(cB), clearTimeout(JB), vB(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(oB), TB.port1.addEventListener("message", oB.rU), this.target.postMessage({
                eventType: BB,
                eventId: kB,
                data: IB
              }, [TB.port2])
            })).finally((() => {
              oB && this.removeMessageHandler(oB)
            }))
          }
        }

        function OT() {
          return window
        }

        function YT() {
          return "undefined" !== typeof OT().WorkerGlobalScope && "function" === typeof OT().importScripts
        }
        const iT = "firebaseLocalStorageDb",
          pT = "firebaseLocalStorage",
          aT = "fbase_key";
        class HT {
          constructor(BB) {
            this.request = BB
          }
          toPromise() {
            return new Promise(((BB, IB) => {
              this.request.addEventListener("success", (() => {
                BB(this.request.result)
              })), this.request.addEventListener("error", (() => {
                IB(this.request.error)
              }))
            }))
          }
        }

        function MT(BB, IB) {
          return BB.transaction([pT], IB ? "readwrite" : "readonly").objectStore(pT)
        }

        function jT() {
          const BB = indexedDB.open(iT, 1);
          return new Promise(((IB, ZB) => {
            BB.addEventListener("error", (() => {
              ZB(BB.error)
            })), BB.addEventListener("upgradeneeded", (() => {
              const IB = BB.result;
              try {
                IB.createObjectStore(pT, {
                  keyPath: aT
                })
              } catch (TB) {
                ZB(TB)
              }
            })), BB.addEventListener("success", (async () => {
              const ZB = BB.result;
              ZB.objectStoreNames.contains(pT) ? IB(ZB) : (ZB.close(), await
                function() {
                  const BB = indexedDB.deleteDatabase(iT);
                  return new HT(BB).toPromise()
                }(), IB(await jT()))
            }))
          }))
        }
        async function PT(BB, IB, ZB) {
          const TB = MT(BB, !0).put({
            [aT]: IB,
            value: ZB
          });
          return new HT(TB).toPromise()
        }

        function RT(BB, IB) {
          const ZB = MT(BB, !0).delete(IB);
          return new HT(ZB).toPromise()
        }
        class rT {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await jT()), this.db
          }
          async _withRetries(BB) {
            let IB = 0;
            for (;;) try {
              const IB = await this._openDb();
              return await BB(IB)
            } catch (ZB) {
              if (IB++ > 3) throw ZB;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return YT() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = QT._getInstance(YT() ? self : null), this.receiver._subscribe("keyChanged", (async (BB, IB) => ({
              keyProcessed: (await this._poll()).includes(IB.key)
            }))), this.receiver._subscribe("ping", (async (BB, IB) => ["keyChanged"]))
          }
          async initializeSender() {
            var BB, IB;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (BB) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new wT(this.activeServiceWorker);
            const ZB = await this.sender._send("ping", {}, 800);
            ZB && (null === (BB = ZB[0]) || void 0 === BB ? void 0 : BB.fulfilled) && (null === (IB = ZB[0]) || void 0 === IB ? void 0 : IB.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(BB) {
            if (this.sender && this.activeServiceWorker && function() {
                var BB;
                return (null === (BB = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === BB ? void 0 : BB.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: BB
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (IB) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const BB = await jT();
              return await PT(BB, qT, "1"), await RT(BB, qT), !0
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
          async _set(BB, IB) {
            return this._withPendingWrite((async () => (await this._withRetries((ZB => PT(ZB, BB, IB))), this.localCache[BB] = IB, this.notifyServiceWorker(BB))))
          }
          async _get(BB) {
            const IB = await this._withRetries((IB => async function(BB, IB) {
              const ZB = MT(BB, !1).get(IB),
                TB = await new HT(ZB).toPromise();
              return void 0 === TB ? null : TB.value
            }(IB, BB)));
            return this.localCache[BB] = IB, IB
          }
          async _remove(BB) {
            return this._withPendingWrite((async () => (await this._withRetries((IB => RT(IB, BB))), delete this.localCache[BB], this.notifyServiceWorker(BB))))
          }
          async _poll() {
            const BB = await this._withRetries((BB => {
              const IB = MT(BB, !1).getAll();
              return new HT(IB).toPromise()
            }));
            if (!BB) return [];
            if (0 !== this.pendingWrites) return [];
            const IB = [],
              ZB = new Set;
            for (const {
                fbase_key: TB,
                value: JB
              }
              of BB) ZB.add(TB), JSON.stringify(this.localCache[TB]) !== JSON.stringify(JB) && (this.notifyListeners(TB, JB), IB.push(TB));
            for (const TB of Object.keys(this.localCache)) this.localCache[TB] && !ZB.has(TB) && (this.notifyListeners(TB, null), IB.push(TB));
            return IB
          }
          notifyListeners(BB, IB) {
            this.localCache[BB] = IB;
            const ZB = this.listeners[BB];
            if (ZB)
              for (const TB of Array.from(ZB)) TB(IB)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(BB, IB) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[BB] || (this.listeners[BB] = new Set, this._get(BB)), this.listeners[BB].add(IB)
          }
          _removeListener(BB, IB) {
            this.listeners[BB] && (this.listeners[BB].delete(IB), 0 === this.listeners[BB].size && delete this.listeners[BB]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        rT.type = "LOCAL";
        const mT = rT;
        const XT = 1e12;
        class LT {
          constructor(BB) {
            this.auth = BB, this.counter = XT, this._widgets = new Map
          }
          render(BB, IB) {
            const ZB = this.counter;
            return this._widgets.set(ZB, new eT(BB, this.auth.name, IB || {})), this.counter++, ZB
          }
          reset(BB) {
            var IB;
            const ZB = BB || XT;
            null === (IB = this._widgets.get(ZB)) || void 0 === IB || IB.delete(), this._widgets.delete(ZB)
          }
          getResponse(BB) {
            var IB;
            const ZB = BB || XT;
            return (null === (IB = this._widgets.get(ZB)) || void 0 === IB ? void 0 : IB.getResponse()) || ""
          }
          async execute(BB) {
            var IB;
            const ZB = BB || XT;
            return null === (IB = this._widgets.get(ZB)) || void 0 === IB || IB.execute(), ""
          }
        }
        class eT {
          constructor(BB, IB, ZB) {
            this.params = ZB, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const TB = "string" === typeof BB ? document.getElementById(BB) : BB;
            OB(TB, "argument-error", {
              appName: IB
            }), this.container = TB, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
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
                const IB = [],
                  ZB = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let TB = 0; TB < BB; TB++) IB.push(ZB.charAt(Math.floor(Math.random() * ZB.length)));
                return IB.join("")
              }(50);
              const {
                callback: BB,
                "expired-callback": IB
              } = this.params;
              if (BB) try {
                BB(this.responseToken)
              } catch (ZB) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, IB) try {
                  IB()
                } catch (ZB) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const uT = YI("rcb"),
          fT = new MB(3e4, 6e4);
        class lT {
          constructor() {
            var BB;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (BB = OT().grecaptcha) || void 0 === BB ? void 0 : BB.render)
          }
          load(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return OB(function(BB) {
              return BB.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(BB)
            }(IB), BB, "argument-error"), this.shouldResolveImmediately(IB) && QI(OT().grecaptcha) ? Promise.resolve(OT().grecaptcha) : new Promise(((ZB, JB) => {
              const oB = OT().setTimeout((() => {
                JB(CB(BB, "network-request-failed"))
              }), fT.get());
              OT()[uT] = () => {
                OT().clearTimeout(oB), delete OT()[uT];
                const TB = OT().grecaptcha;
                if (!TB || !QI(TB)) return void JB(CB(BB, "internal-error"));
                const GB = TB.render;
                TB.render = (BB, IB) => {
                  const ZB = GB(BB, IB);
                  return this.counter++, ZB
                }, this.hostLanguage = IB, ZB(TB)
              };
              OI(`https://www.google.com/recaptcha/api.js??${(0,TB.db)({onload:uT,render:"explicit",hl:IB})}`).catch((() => {
                clearTimeout(oB), JB(CB(BB, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(BB) {
            var IB;
            return !!(null === (IB = OT().grecaptcha) || void 0 === IB ? void 0 : IB.render) && (BB === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class AT {
          async load(BB) {
            return new LT(BB)
          }
          clearedOneInstance() {}
        }
        const tT = "recaptcha",
          bT = {
            theme: "light",
            type: "image"
          };
        class xT {
          constructor(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, bT),
              ZB = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = IB, this.type = tT, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = MI(ZB), this.isInvisible = "invisible" === this.parameters.size, OB("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const TB = "string" === typeof BB ? document.getElementById(BB) : BB;
            OB(TB, this.auth, "argument-error"), this.container = TB, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new AT : new lT, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const BB = await this.render(),
              IB = this.getAssertedRecaptcha(),
              ZB = IB.getResponse(BB);
            return ZB || new Promise((ZB => {
              const TB = BB => {
                BB && (this.tokenChangeListeners.delete(TB), ZB(BB))
              };
              this.tokenChangeListeners.add(TB), this.isInvisible && IB.execute(BB)
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
            OB(!this.parameters.sitekey, this.auth, "argument-error"), OB(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), OB("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(BB) {
            return IB => {
              if (this.tokenChangeListeners.forEach((BB => BB(IB))), "function" === typeof BB) BB(IB);
              else if ("string" === typeof BB) {
                const ZB = OT()[BB];
                "function" === typeof ZB && ZB(IB)
              }
            }
          }
          assertNotDestroyed() {
            OB(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let BB = this.container;
              if (!this.isInvisible) {
                const IB = document.createElement("div");
                BB.appendChild(IB), BB = IB
              }
              this.widgetId = this.getAssertedRecaptcha().render(BB, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            OB(aB() && !YT(), this.auth, "internal-error"), await
            function() {
              let BB = null;
              return new Promise((IB => {
                "complete" !== document.readyState ? (BB = () => IB(), window.addEventListener("load", BB)) : IB()
              })).catch((IB => {
                throw BB && window.removeEventListener("load", BB), IB
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const BB = await async function(BB) {
              return (await XB(BB, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            OB(BB, this.auth, "internal-error"), this.parameters.sitekey = BB
          }
          getAssertedRecaptcha() {
            return OB(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class ET {
          constructor(BB, IB) {
            this.verificationId = BB, this.onConfirmation = IB
          }
          confirm(BB) {
            const IB = DI._fromVerification(this.verificationId, BB);
            return this.onConfirmation(IB)
          }
        }
        async function DT(BB, IB, ZB) {
          const JB = MI(BB),
            oB = await ST(JB, IB, (0, TB.N)(ZB));
          return new ET(oB, (BB => CZ(JB, BB)))
        }
        async function KT(BB, IB, ZB) {
          const JB = (0, TB.N)(BB);
          await UZ(!1, JB, "phone");
          const oB = await ST(JB.auth, IB, (0, TB.N)(ZB));
          return new ET(oB, (BB => QZ(JB, BB)))
        }
        async function VT(BB, IB, ZB) {
          const JB = (0, TB.N)(BB),
            oB = await ST(JB.auth, IB, (0, TB.N)(ZB));
          return new ET(oB, (BB => sZ(JB, BB)))
        }
        async function ST(BB, IB, ZB) {
          var TB;
          const JB = await ZB.verify();
          try {
            let oB;
            if (OB("string" === typeof JB, BB, "argument-error"), OB(ZB.type === tT, BB, "argument-error"), oB = "string" === typeof IB ? {
                phoneNumber: IB
              } : IB, "session" in oB) {
              const IB = oB.session;
              if ("phoneNumber" in oB) {
                OB("enroll" === IB.type, BB, "internal-error");
                const ZB = await
                function(BB, IB) {
                  return XB(BB, "POST", "/v2/accounts/mfaEnrollment:start", mB(BB, IB))
                }(BB, {
                  idToken: IB.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: oB.phoneNumber,
                    recaptchaToken: JB
                  }
                });
                return ZB.phoneSessionInfo.sessionInfo
              } {
                OB("signin" === IB.type, BB, "internal-error");
                const ZB = (null === (TB = oB.multiFactorHint) || void 0 === TB ? void 0 : TB.uid) || oB.multiFactorUid;
                OB(ZB, BB, "missing-multi-factor-info");
                const GB = await
                function(BB, IB) {
                  return XB(BB, "POST", "/v2/accounts/mfaSignIn:start", mB(BB, IB))
                }(BB, {
                  mfaPendingCredential: IB.credential,
                  mfaEnrollmentId: ZB,
                  phoneSignInInfo: {
                    recaptchaToken: JB
                  }
                });
                return GB.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: IB
              } = await async function(BB, IB) {
                return XB(BB, "POST", "/v1/accounts:sendVerificationCode", mB(BB, IB))
              }(BB, {
                phoneNumber: oB.phoneNumber,
                recaptchaToken: JB
              });
              return IB
            }
          } finally {
            ZB._reset()
          }
        }
        async function BJ(BB, IB) {
          await yZ((0, TB.N)(BB), IB)
        }
        class IJ {
          constructor(BB) {
            this.providerId = IJ.PROVIDER_ID, this.auth = MI(BB)
          }
          verifyPhoneNumber(BB, IB) {
            return ST(this.auth, BB, (0, TB.N)(IB))
          }
          static credential(BB, IB) {
            return DI._fromVerification(BB, IB)
          }
          static credentialFromResult(BB) {
            const IB = BB;
            return IJ.credentialFromTaggedObject(IB)
          }
          static credentialFromError(BB) {
            return IJ.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: IB
            } = BB;
            if (!IB) return null;
            const {
              phoneNumber: ZB,
              temporaryProof: TB
            } = IB;
            return ZB && TB ? DI._fromTokenResponse(ZB, TB) : null
          }
        }

        function ZJ(BB, IB) {
          return IB ? oI(IB) : (OB(BB._popupRedirectResolver, BB, "argument-error"), BB._popupRedirectResolver)
        }
        IJ.PROVIDER_ID = "phone", IJ.PHONE_SIGN_IN_METHOD = "phone";
        class TJ extends XI {
          constructor(BB) {
            super("custom", "custom"), this.params = BB
          }
          _getIdTokenResponse(BB) {
            return bI(BB, this._buildIdpRequest())
          }
          _linkToIdToken(BB, IB) {
            return bI(BB, this._buildIdpRequest(IB))
          }
          _getReauthenticationResolver(BB) {
            return bI(BB, this._buildIdpRequest())
          }
          _buildIdpRequest(BB) {
            const IB = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return BB && (IB.idToken = BB), IB
          }
        }

        function JJ(BB) {
          return dZ(BB.auth, new TJ(BB), BB.bypassAuthState)
        }

        function oJ(BB) {
          const {
            auth: IB,
            user: ZB
          } = BB;
          return OB(ZB, IB, "internal-error"), WZ(ZB, new TJ(BB), BB.bypassAuthState)
        }
        async function GJ(BB) {
          const {
            auth: IB,
            user: ZB
          } = BB;
          return OB(ZB, IB, "internal-error"), yZ(ZB, new TJ(BB), BB.bypassAuthState)
        }
        class vJ {
          constructor(BB, IB, ZB, TB) {
            let JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = BB, this.resolver = ZB, this.user = TB, this.bypassAuthState = JB, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(IB) ? IB : [IB]
          }
          execute() {
            return new Promise((async (BB, IB) => {
              this.pendingPromise = {
                resolve: BB,
                reject: IB
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (ZB) {
                this.reject(ZB)
              }
            }))
          }
          async onAuthEvent(BB) {
            const {
              urlResponse: IB,
              sessionId: ZB,
              postBody: TB,
              tenantId: JB,
              error: oB,
              type: GB
            } = BB;
            if (oB) return void this.reject(oB);
            const vB = {
              auth: this.auth,
              requestUri: IB,
              sessionId: ZB,
              tenantId: JB || void 0,
              postBody: TB || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(GB)(vB))
            } catch (kB) {
              this.reject(kB)
            }
          }
          onError(BB) {
            this.reject(BB)
          }
          getIdpTask(BB) {
            switch (BB) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return JJ;
              case "linkViaPopup":
              case "linkViaRedirect":
                return GJ;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return oJ;
              default:
                dB(this.auth, "internal-error")
            }
          }
          resolve(BB) {
            iB(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(BB), this.unregisterAndCleanUp()
          }
          reject(BB) {
            iB(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(BB), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const kJ = new MB(2e3, 1e4);
        async function cJ(BB, IB, ZB) {
          const TB = MI(BB);
          sB(BB, IB, BZ);
          const JB = ZJ(TB, ZB);
          return new zJ(TB, "signInViaPopup", IB, JB).executeNotNull()
        }
        async function nJ(BB, IB, ZB) {
          const JB = (0, TB.N)(BB);
          sB(JB.auth, IB, BZ);
          const oB = ZJ(JB.auth, ZB);
          return new zJ(JB.auth, "reauthViaPopup", IB, oB, JB).executeNotNull()
        }
        async function hJ(BB, IB, ZB) {
          const JB = (0, TB.N)(BB);
          sB(JB.auth, IB, BZ);
          const oB = ZJ(JB.auth, ZB);
          return new zJ(JB.auth, "linkViaPopup", IB, oB, JB).executeNotNull()
        }
        class zJ extends vJ {
          constructor(BB, IB, ZB, TB, JB) {
            super(BB, IB, TB, JB), this.provider = ZB, this.authWindow = null, this.pollId = null, zJ.currentPopupAction && zJ.currentPopupAction.cancel(), zJ.currentPopupAction = this
          }
          async executeNotNull() {
            const BB = await this.execute();
            return OB(BB, this.auth, "internal-error"), BB
          }
          async onExecution() {
            iB(1 === this.filter.length, "Popup operations only handle one event");
            const BB = sT();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], BB), this.authWindow.associatedEvent = BB, this.resolver._originValidation(this.auth).catch((BB => {
              this.reject(BB)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (BB => {
              BB || this.reject(CB(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var BB;
            return (null === (BB = this.authWindow) || void 0 === BB ? void 0 : BB.associatedEvent) || null
          }
          cancel() {
            this.reject(CB(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, zJ.currentPopupAction = null
          }
          pollUserCancellation() {
            const BB = () => {
              var IB, ZB;
              (null === (ZB = null === (IB = this.authWindow) || void 0 === IB ? void 0 : IB.window) || void 0 === ZB ? void 0 : ZB.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(CB(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(BB, kJ.get())
            };
            BB()
          }
        }
        zJ.currentPopupAction = null;
        const FJ = "pendingRedirect",
          NJ = new Map;
        class gJ extends vJ {
          constructor(BB, IB) {
            super(BB, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], IB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let BB = NJ.get(this.auth._key());
            if (!BB) {
              try {
                const IB = await async function(BB, IB) {
                  const ZB = WJ(IB),
                    TB = UJ(BB);
                  if (!await TB._isAvailable()) return !1;
                  const JB = "true" === await TB._get(ZB);
                  return await TB._remove(ZB), JB
                }(this.resolver, this.auth) ? await super.execute() : null;
                BB = () => Promise.resolve(IB)
              } catch (IB) {
                BB = () => Promise.reject(IB)
              }
              NJ.set(this.auth._key(), BB)
            }
            return this.bypassAuthState || NJ.set(this.auth._key(), (() => Promise.resolve(null))), BB()
          }
          async onAuthEvent(BB) {
            if ("signInViaRedirect" === BB.type) return super.onAuthEvent(BB);
            if ("unknown" !== BB.type) {
              if (BB.eventId) {
                const IB = await this.auth._redirectUserForId(BB.eventId);
                if (IB) return this.user = IB, super.onAuthEvent(BB);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function qJ(BB, IB) {
          return UJ(BB)._set(WJ(IB), "true")
        }

        function yJ(BB, IB) {
          NJ.set(BB._key(), IB)
        }

        function UJ(BB) {
          return oI(BB._redirectPersistence)
        }

        function WJ(BB) {
          return kI(FJ, BB.config.apiKey, BB.name)
        }

        function dJ(BB, IB, ZB) {
          return async function(BB, IB, ZB) {
            const TB = MI(BB);
            sB(BB, IB, BZ), await TB._initializationPromise;
            const JB = ZJ(TB, ZB);
            return await qJ(JB, TB), JB._openRedirect(TB, IB, "signInViaRedirect")
          }(BB, IB, ZB)
        }

        function CJ(BB, IB, ZB) {
          return async function(BB, IB, ZB) {
            const JB = (0, TB.N)(BB);
            sB(JB.auth, IB, BZ), await JB.auth._initializationPromise;
            const oB = ZJ(JB.auth, ZB);
            await qJ(oB, JB.auth);
            const GB = await OJ(JB);
            return oB._openRedirect(JB.auth, IB, "reauthViaRedirect", GB)
          }(BB, IB, ZB)
        }

        function QJ(BB, IB, ZB) {
          return async function(BB, IB, ZB) {
            const JB = (0, TB.N)(BB);
            sB(JB.auth, IB, BZ), await JB.auth._initializationPromise;
            const oB = ZJ(JB.auth, ZB);
            await UZ(!1, JB, IB.providerId), await qJ(oB, JB.auth);
            const GB = await OJ(JB);
            return oB._openRedirect(JB.auth, IB, "linkViaRedirect", GB)
          }(BB, IB, ZB)
        }
        async function sJ(BB, IB) {
          return await MI(BB)._initializationPromise, wJ(BB, IB, !1)
        }
        async function wJ(BB, IB) {
          let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const TB = MI(BB),
            JB = ZJ(TB, IB),
            oB = new gJ(TB, JB, ZB),
            GB = await oB.execute();
          return GB && !ZB && (delete GB.user._redirectEventId, await TB._persistUserIfCurrent(GB.user), await TB._setRedirectUser(null, IB)), GB
        }
        async function OJ(BB) {
          const IB = sT(`${BB.uid}:::`);
          return BB._redirectEventId = IB, await BB.auth._setRedirectUser(BB), await BB.auth._persistUserIfCurrent(BB), IB
        }
        class YJ {
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
            let IB = !1;
            return this.consumers.forEach((ZB => {
              this.isEventForConsumer(BB, ZB) && (IB = !0, this.sendToConsumer(BB, ZB), this.saveEventToCache(BB))
            })), this.hasHandledPotentialRedirect || ! function(BB) {
              switch (BB.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return pJ(BB);
                default:
                  return !1
              }
            }(BB) || (this.hasHandledPotentialRedirect = !0, IB || (this.queuedRedirectEvent = BB, IB = !0)), IB
          }
          sendToConsumer(BB, IB) {
            var ZB;
            if (BB.error && !pJ(BB)) {
              const TB = (null === (ZB = BB.error.code) || void 0 === ZB ? void 0 : ZB.split("auth/")[1]) || "internal-error";
              IB.onError(CB(this.auth, TB))
            } else IB.onAuthEvent(BB)
          }
          isEventForConsumer(BB, IB) {
            const ZB = null === IB.eventId || !!BB.eventId && BB.eventId === IB.eventId;
            return IB.filter.includes(BB.type) && ZB
          }
          hasEventBeenHandled(BB) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(iJ(BB))
          }
          saveEventToCache(BB) {
            this.cachedEventUids.add(iJ(BB)), this.lastProcessedEventTime = Date.now()
          }
        }

        function iJ(BB) {
          return [BB.type, BB.eventId, BB.sessionId, BB.tenantId].filter((BB => BB)).join("-")
        }

        function pJ(BB) {
          let {
            type: IB,
            error: ZB
          } = BB;
          return "unknown" === IB && "auth/no-auth-event" === (null === ZB || void 0 === ZB ? void 0 : ZB.code)
        }
        const aJ = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          HJ = /^https?/;
        async function MJ(BB) {
          if (BB.config.emulator) return;
          const {
            authorizedDomains: IB
          } = await async function(BB) {
            return XB(BB, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(BB);
          for (const TB of IB) try {
            if (jJ(TB)) return
          } catch (ZB) {}
          dB(BB, "unauthorized-domain")
        }

        function jJ(BB) {
          const IB = pB(),
            {
              protocol: ZB,
              hostname: TB
            } = new URL(IB);
          if (BB.startsWith("chrome-extension://")) {
            const JB = new URL(BB);
            return "" === JB.hostname && "" === TB ? "chrome-extension:" === ZB && BB.replace("chrome-extension://", "") === IB.replace("chrome-extension://", "") : "chrome-extension:" === ZB && JB.hostname === TB
          }
          if (!HJ.test(ZB)) return !1;
          if (aJ.test(BB)) return TB === BB;
          const JB = BB.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + JB + "|" + JB + ")$", "i").test(TB)
        }
        const PJ = new MB(3e4, 6e4);

        function RJ() {
          const BB = OT().___jsl;
          if (null === BB || void 0 === BB ? void 0 : BB.H)
            for (const IB of Object.keys(BB.H))
              if (BB.H[IB].r = BB.H[IB].r || [], BB.H[IB].L = BB.H[IB].L || [], BB.H[IB].r = [...BB.H[IB].L], BB.CP)
                for (let ZB = 0; ZB < BB.CP.length; ZB++) BB.CP[ZB] = null
        }
        let rJ = null;

        function mJ(BB) {
          return rJ = rJ || function(BB) {
            return new Promise(((IB, ZB) => {
              var TB, JB, oB;

              function GB() {
                RJ(), gapi.load("gapi.iframes", {
                  callback: () => {
                    IB(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    RJ(), ZB(CB(BB, "network-request-failed"))
                  },
                  timeout: PJ.get()
                })
              }
              if (null === (JB = null === (TB = OT().gapi) || void 0 === TB ? void 0 : TB.iframes) || void 0 === JB ? void 0 : JB.Iframe) IB(gapi.iframes.getContext());
              else {
                if (!(null === (oB = OT().gapi) || void 0 === oB ? void 0 : oB.load)) {
                  const IB = YI("iframefcb");
                  return OT()[IB] = () => {
                    gapi.load ? GB() : ZB(CB(BB, "network-request-failed"))
                  }, OI(`https://apis.google.com/js/api.js?onload=${IB}`).catch((BB => ZB(BB)))
                }
                GB()
              }
            })).catch((BB => {
              throw rJ = null, BB
            }))
          }(BB), rJ
        }
        const XJ = new MB(5e3, 15e3),
          LJ = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          eJ = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function uJ(BB) {
          const IB = BB.config;
          OB(IB.authDomain, BB, "auth-domain-config-required");
          const ZB = IB.emulator ? jB(IB, "emulator/auth/iframe") : `https://${BB.config.authDomain}/__/auth/iframe`,
            oB = {
              apiKey: IB.apiKey,
              appName: BB.name,
              v: JB.f
            },
            GB = eJ.get(BB.config.apiHost);
          GB && (oB.eid = GB);
          const vB = BB._getFrameworks();
          return vB.length && (oB.fw = vB.join(",")), `${ZB}?${(0,TB.db)(oB).slice(1)}`
        }
        const fJ = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class lJ {
          constructor(BB) {
            this.window = BB, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (BB) {}
          }
        }

        function AJ(BB, IB, ZB) {
          let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const GB = Math.max((window.screen.availHeight - oB) / 2, 0).toString(),
            vB = Math.max((window.screen.availWidth - JB) / 2, 0).toString();
          let kB = "";
          const cB = Object.assign(Object.assign({}, fJ), {
              width: JB.toString(),
              height: oB.toString(),
              top: GB,
              left: vB
            }),
            nB = (0, TB.P)().toLowerCase();
          ZB && (kB = FI(nB) ? "_blank" : ZB), hI(nB) && (IB = IB || "http://localhost", cB.scrollbars = "yes");
          const hB = Object.entries(cB).reduce(((BB, IB) => {
            let [ZB, TB] = IB;
            return `${BB}${ZB}=${TB},`
          }), "");
          if (function() {
              var BB;
              return UI(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.P)()) && !!(null === (BB = window.navigator) || void 0 === BB ? void 0 : BB.standalone)
            }(nB) && "_self" !== kB) return function(BB, IB) {
            const ZB = document.createElement("a");
            ZB.href = BB, ZB.target = IB;
            const TB = document.createEvent("MouseEvent");
            TB.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), ZB.dispatchEvent(TB)
          }(IB || "", kB), new lJ(null);
          const zB = window.open(IB || "", kB, hB);
          OB(zB, BB, "popup-blocked");
          try {
            zB.focus()
          } catch (FB) {}
          return new lJ(zB)
        }
        const tJ = "__/auth/handler",
          bJ = "emulator/auth/handler",
          xJ = encodeURIComponent("fac");
        async function EJ(BB, IB, ZB, oB, GB, vB) {
            OB(BB.config.authDomain, BB, "auth-domain-config-required"), OB(BB.config.apiKey, BB, "invalid-api-key");
            const kB = {
              apiKey: BB.config.apiKey,
              appName: BB.name,
              authType: ZB,
              redirectUrl: oB,
              v: JB.f,
              eventId: GB
            };
            if (IB instanceof BZ) {
              IB.setDefaultLanguage(BB.languageCode), kB.providerId = IB.providerId || "", (0, TB.V)(IB.getCustomParameters()) || (kB.customParameters = JSON.stringify(IB.getCustomParameters()));
              for (const [BB, IB] of Object.entries(vB || {})) kB[BB] = IB
            }
            if (IB instanceof IZ) {
              const BB = IB.getScopes().filter((BB => "" !== BB));
              BB.length > 0 && (kB.scopes = BB.join(","))
            }
            BB.tenantId && (kB.tid = BB.tenantId);
            const cB = kB;
            for (const TB of Object.keys(cB)) void 0 === cB[TB] && delete cB[TB];
            const nB = await BB._getAppCheckToken(),
              hB = nB ? `#${xJ}=${encodeURIComponent(nB)}` : "";
            return `${function(BB){let{config:IB}=BB;if(!IB.emulator)return`
            https: //${IB.authDomain}/${tJ}`;return jB(IB,bJ)}(BB)}?${(0,TB.db)(cB).slice(1)}${hB}`}const DJ="webStorageSupport";const KJ=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=CT,this._completeRedirectFn=wJ,this._overrideRedirectResult=yJ}async _openPopup(BB,IB,ZB,TB){var JB;iB(null===(JB=this.eventManagers[BB._key()])||void 0===JB?void 0:JB.manager,"_initialize() not called before _openPopup()");return AJ(BB,await EJ(BB,IB,ZB,pB(),TB),sT())}async _openRedirect(BB,IB,ZB,TB){await this._originValidation(BB);return function(BB){OT().location.href=BB}(await EJ(BB,IB,ZB,pB(),TB)),new Promise((()=>{}))}_initialize(BB){const IB=BB._key();if(this.eventManagers[IB]){const{manager:BB,promise:ZB}=this.eventManagers[IB];return BB?Promise.resolve(BB):(iB(ZB,"If manager is not set, promise should be"),ZB)}const ZB=this.initAndGetManager(BB);return this.eventManagers[IB]={promise:ZB},ZB.catch((()=>{delete this.eventManagers[IB]})),ZB}async initAndGetManager(BB){const IB=await async function(BB){const IB=await mJ(BB),ZB=OT().gapi;return OB(ZB,BB,"internal-error"),IB.open({where:document.body,url:uJ(BB),messageHandlersFilter:ZB.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LJ,dontclear:!0},(IB=>new Promise((async(ZB,TB)=>{await IB.restyle({setHideOnLeave:!1});const JB=CB(BB,"network-request-failed"),oB=OT().setTimeout((()=>{TB(JB)}),XJ.get());function GB(){OT().clearTimeout(oB),ZB(IB)}IB.ping(GB).then(GB,(()=>{TB(JB)}))}))))}(BB),ZB=new YJ(BB);return IB.register("authEvent",(IB=>{OB(null===IB||void 0===IB?void 0:IB.authEvent,BB,"invalid-auth-event");return{status:ZB.onEvent(IB.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[BB._key()]={manager:ZB},this.iframes[BB._key()]=IB,ZB}_isIframeWebStorageSupported(BB,IB){this.iframes[BB._key()].send(DJ,{type:DJ},(ZB=>{var TB;const JB=null===(TB=null===ZB||void 0===ZB?void 0:ZB[0])||void 0===TB?void 0:TB[DJ];void 0!==JB&&IB(!!JB),dB(BB,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(BB){const IB=BB._key();return this.originValidationPromises[IB]||(this.originValidationPromises[IB]=MJ(BB)),this.originValidationPromises[IB]}get _shouldInitProactively(){return WI()||zI()||UI()}};class VJ{constructor(BB){this.factorId=BB}_process(BB,IB,ZB){switch(IB.type){case"enroll":return this._finalizeEnroll(BB,IB.credential,ZB);case"signin":return this._finalizeSignIn(BB,IB.credential);default:return YB("unexpected MultiFactorSessionType")}}}class SJ extends VJ{constructor(BB){super("phone"),this.credential=BB}static _fromCredential(BB){return new SJ(BB)}_finalizeEnroll(BB,IB,ZB){return function(BB,IB){return XB(BB,"POST","/v2/accounts/mfaEnrollment:finalize",mB(BB,IB))}(BB,{idToken:IB,displayName:ZB,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(BB,IB){return function(BB,IB){return XB(BB,"POST","/v2/accounts/mfaSignIn:finalize",mB(BB,IB))}(BB,{mfaPendingCredential:IB,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Bo{constructor(){}static assertion(BB){return SJ._fromCredential(BB)}}Bo.FACTOR_ID="phone";class Io{static assertionForEnrollment(BB,IB){return Zo._fromSecret(BB,IB)}static assertionForSignIn(BB,IB){return Zo._fromEnrollmentId(BB,IB)}static async generateSecret(BB){const IB=BB;OB("undefined"!==typeof IB.auth,"internal-error");const ZB=await(TB=IB.auth,JB={idToken:IB.credential,totpEnrollmentInfo:{}},XB(TB,"POST","/v2/accounts/mfaEnrollment:start",mB(TB,JB)));var TB,JB;return To._fromStartTotpMfaEnrollmentResponse(ZB,IB.auth)}}Io.FACTOR_ID="totp";class Zo extends VJ{constructor(BB,IB,ZB){super("totp"),this.otp=BB,this.enrollmentId=IB,this.secret=ZB}static _fromSecret(BB,IB){return new Zo(IB,void 0,BB)}static _fromEnrollmentId(BB,IB){return new Zo(IB,BB)}async _finalizeEnroll(BB,IB,ZB){return OB("undefined"!==typeof this.secret,BB,"argument-error"),function(BB,IB){return XB(BB,"POST","/v2/accounts/mfaEnrollment:finalize",mB(BB,IB))}(BB,{idToken:IB,displayName:ZB,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(BB,IB){OB(void 0!==this.enrollmentId&&void 0!==this.otp,BB,"argument-error");const ZB={verificationCode:this.otp};return function(BB,IB){return XB(BB,"POST","/v2/accounts/mfaSignIn:finalize",mB(BB,IB))}(BB,{mfaPendingCredential:IB,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:ZB})}}class To{constructor(BB,IB,ZB,TB,JB,oB,GB){this.sessionInfo=oB,this.auth=GB,this.secretKey=BB,this.hashingAlgorithm=IB,this.codeLength=ZB,this.codeIntervalSeconds=TB,this.enrollmentCompletionDeadline=JB}static _fromStartTotpMfaEnrollmentResponse(BB,IB){return new To(BB.totpSessionInfo.sharedSecretKey,BB.totpSessionInfo.hashingAlgorithm,BB.totpSessionInfo.verificationCodeLength,BB.totpSessionInfo.periodSec,new Date(BB.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),BB.totpSessionInfo.sessionInfo,IB)}_makeTotpVerificationInfo(BB){return{sessionInfo:this.sessionInfo,verificationCode:BB}}generateQrCodeUrl(BB,IB){var ZB;let TB=!1;return(Jo(BB)||Jo(IB))&&(TB=!0),TB&&(Jo(BB)&&(BB=(null===(ZB=this.auth.currentUser)||void 0===ZB?void 0:ZB.email)||"unknownuser"),Jo(IB)&&(IB=this.auth.name)),`otpauth://totp/${IB}:${BB}?secret=${this.secretKey}&issuer=${IB}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Jo(BB){return"undefined"===typeof BB||0===(null===BB||void 0===BB?void 0:BB.length)}var oo="@firebase/auth",Go="0.23.2";class vo{constructor(BB){this.auth=BB,this.internalListeners=new Map}getUid(){var BB;return this.assertAuthConfigured(),(null===(BB=this.auth.currentUser)||void 0===BB?void 0:BB.uid)||null}async getToken(BB){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(BB)}}addAuthTokenListener(BB){if(this.assertAuthConfigured(),this.internalListeners.has(BB))return;const IB=this.auth.onIdTokenChanged((IB=>{BB((null===IB||void 0===IB?void 0:IB.stsTokenManager.accessToken)||null)}));this.internalListeners.set(BB,IB),this.updateProactiveRefresh()}removeAuthTokenListener(BB){this.assertAuthConfigured();const IB=this.internalListeners.get(BB);IB&&(this.internalListeners.delete(BB),IB(),this.updateProactiveRefresh())}assertAuthConfigured(){OB(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const ko=(0,TB.K)("authIdTokenMaxAge")||300;let co=null;const no=BB=>async IB=>{const ZB=IB&&await IB.getIdTokenResult(),TB=ZB&&((new Date).getTime()-Date.parse(ZB.issuedAtTime))/1e3;if(TB&&TB>ko)return;const JB=null===ZB||void 0===ZB?void 0:ZB.token;co!==JB&&(co=JB,await fetch(BB,{method:JB?"POST":"DELETE",headers:JB?{Authorization:`Bearer ${JB}`}:{}}))};function ho(){let BB=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,JB.I)();const IB=(0,JB.w)(BB,"auth");if(IB.isInitialized())return IB.getImmediate();const ZB=PI(BB,{popupRedirectResolver:KJ,persistence:[mT,WT,CT]}),oB=(0,TB.K)("authTokenSyncURL");if(oB){const BB=no(oB);JT(ZB,BB,(()=>BB(ZB.currentUser))),TT(ZB,(IB=>BB(IB)))}const GB=(0,TB.I)("auth");return GB&&RI(ZB,`http://${GB}`),ZB}var zo;zo="Browser",(0,JB.y)(new vB.e("auth",((BB,IB)=>{let{options:ZB}=IB;const TB=BB.getProvider("app").getImmediate(),JB=BB.getProvider("heartbeat"),oB=BB.getProvider("app-check-internal"),{apiKey:GB,authDomain:vB}=TB.options;OB(GB&&!GB.includes(":"),"invalid-api-key",{appName:TB.name});const kB={apiKey:GB,authDomain:vB,clientPlatform:zo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dI(zo)},cB=new HI(TB,JB,oB,kB);return function(BB,IB){const ZB=(null===IB||void 0===IB?void 0:IB.persistence)||[],TB=(Array.isArray(ZB)?ZB:[ZB]).map(oI);(null===IB||void 0===IB?void 0:IB.errorMap)&&BB._updateErrorMap(IB.errorMap),BB._initializeWithPersistence(TB,null===IB||void 0===IB?void 0:IB.popupRedirectResolver)}(cB,ZB),cB}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((BB,IB,ZB)=>{BB.getProvider("auth-internal").initialize()}))),(0,JB.y)(new vB.e("auth-internal",(BB=>(BB=>new vo(BB))(MI(BB.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,JB.R)(oo,Go,function(BB){switch(BB){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(zo)),(0,JB.R)(oo,Go,"esm2017")}};Object.freeze(modules);for(const BB in modules)Object.freeze(modules[BB]);