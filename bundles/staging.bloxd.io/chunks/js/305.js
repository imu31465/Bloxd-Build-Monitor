/*! For license information please see 1yqdn.305.7b1d42cd.chunk.js.LICENSE.txt */
export const id = 305;
export const ids = [305];
export const modules = {
    42048: (WW, iW, OW) => {
        OW.r(iW), OW.d(iW, {
          ActionCodeOperation: () => xW,
          ActionCodeURL: () => Qi,
          AuthCredential: () => fi,
          AuthErrorCodes: () => UW,
          EmailAuthCredential: () => Ii,
          EmailAuthProvider: () => iO,
          FacebookAuthProvider: () => NO,
          FactorId: () => cW,
          GithubAuthProvider: () => LO,
          GoogleAuthProvider: () => PO,
          OAuthCredential: () => ri,
          OAuthProvider: () => EO,
          OperationType: () => ZW,
          PhoneAuthCredential: () => Fi,
          PhoneAuthProvider: () => EE,
          PhoneMultiFactorGenerator: () => mN,
          ProviderId: () => wW,
          RecaptchaVerifier: () => zm,
          SAMLAuthProvider: () => wO,
          SignInMethod: () => tW,
          TotpMultiFactorGenerator: () => EN,
          TotpSecret: () => PN,
          TwitterAuthProvider: () => tO,
          applyActionCode: () => eO,
          beforeAuthStateChanged: () => Pm,
          browserLocalPersistence: () => Km,
          browserPopupRedirectResolver: () => WN,
          browserSessionPersistence: () => Ym,
          checkActionCode: () => vO,
          confirmPasswordReset: () => dO,
          connectAuthEmulator: () => gi,
          createUserWithEmailAndPassword: () => DO,
          debugErrorMap: () => AW,
          deleteUser: () => Zm,
          fetchSignInMethodsForEmail: () => XO,
          getAdditionalUserInfo: () => Om,
          getAuth: () => AN,
          getIdToken: () => RW,
          getIdTokenResult: () => GW,
          getMultiFactorResolver: () => Am,
          getRedirectResult: () => JE,
          inMemoryPersistence: () => Li,
          indexedDBLocalPersistence: () => fm,
          initializeAuth: () => vi,
          initializeRecaptchaConfig: () => Em,
          isSignInWithEmailLink: () => fO,
          linkWithCredential: () => yO,
          linkWithPhoneNumber: () => WE,
          linkWithPopup: () => AE,
          linkWithRedirect: () => TE,
          multiFactor: () => Um,
          onAuthStateChanged: () => Lm,
          onIdTokenChanged: () => Nm,
          parseActionCodeURL: () => WO,
          prodErrorMap: () => bW,
          reauthenticateWithCredential: () => TO,
          reauthenticateWithPhoneNumber: () => iE,
          reauthenticateWithPopup: () => lE,
          reauthenticateWithRedirect: () => yE,
          reload: () => Wi,
          sendEmailVerification: () => BO,
          sendPasswordResetEmail: () => oO,
          sendSignInLinkToEmail: () => pO,
          setPersistence: () => mm,
          signInAnonymously: () => AO,
          signInWithCredential: () => YO,
          signInWithCustomToken: () => JO,
          signInWithEmailAndPassword: () => VO,
          signInWithEmailLink: () => CO,
          signInWithPhoneNumber: () => Qm,
          signInWithPopup: () => xE,
          signInWithRedirect: () => YE,
          signOut: () => tm,
          unlink: () => kO,
          updateCurrentUser: () => wm,
          updateEmail: () => GO,
          updatePassword: () => IO,
          updatePhoneNumber: () => mE,
          updateProfile: () => RO,
          useDeviceLanguage: () => cm,
          verifyBeforeUpdateEmail: () => qO,
          verifyPasswordResetCode: () => gO
        });
        var mW = OW(42041),
          EW = OW(42035);

        function NW(WW, iW) {
          var OW = {};
          for (var mW in WW) Object.prototype.hasOwnProperty.call(WW, mW) && iW.indexOf(mW) < 0 && (OW[mW] = WW[mW]);
          if (null != WW && "function" === typeof Object.getOwnPropertySymbols) {
            var EW = 0;
            for (mW = Object.getOwnPropertySymbols(WW); EW < mW.length; EW++) iW.indexOf(mW[EW]) < 0 && Object.prototype.propertyIsEnumerable.call(WW, mW[EW]) && (OW[mW[EW]] = WW[mW[EW]])
          }
          return OW
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var PW = OW(42043),
          LW = OW(42038);
        const cW = {
            PHONE: "phone",
            TOTP: "totp"
          },
          wW = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          tW = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          ZW = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          xW = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function lW() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const AW = function() {
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
          bW = lW,
          jW = new mW.h("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          UW = {
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
          kW = new PW.f("@firebase/auth");

        function sW(WW) {
          if (kW.logLevel <= PW.b.ERROR) {
            for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
            kW.error(`Auth (${EW.f}): ${WW}`, ...OW)
          }
        }

        function MW(WW) {
          for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
          throw yW(WW, ...OW)
        }

        function KW(WW) {
          for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
          return yW(WW, ...OW)
        }

        function SW(WW, iW, OW) {
          const EW = Object.assign(Object.assign({}, bW()), {
            [iW]: OW
          });
          return new mW.h("auth", "Firebase", EW).create(iW, {
            appName: WW.name
          })
        }

        function YW(WW, iW, OW) {
          if (!(iW instanceof OW)) throw OW.name !== iW.constructor.name && MW(WW, "argument-error"), SW(WW, "argument-error", `Type of ${iW.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function yW(WW) {
          for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
          if ("string" !== typeof WW) {
            const iW = OW[0],
              mW = [...OW.slice(1)];
            return mW[0] && (mW[0].appName = WW.name), WW._errorFactory.create(iW, ...mW)
          }
          return jW.create(WW, ...OW)
        }

        function TW(WW, iW) {
          if (!WW) {
            for (var OW = arguments.length, mW = new Array(OW > 2 ? OW - 2 : 0), EW = 2; EW < OW; EW++) mW[EW - 2] = arguments[EW];
            throw yW(iW, ...mW)
          }
        }

        function JW(WW) {
          const iW = "INTERNAL ASSERTION FAILED: " + WW;
          throw sW(iW), new Error(iW)
        }

        function hW(WW, iW) {
          WW || JW(iW)
        }

        function HW() {
          var WW;
          return "undefined" !== typeof self && (null === (WW = self.location) || void 0 === WW ? void 0 : WW.href) || ""
        }

        function nW() {
          return "http:" === uW() || "https:" === uW()
        }

        function uW() {
          var WW;
          return "undefined" !== typeof self && (null === (WW = self.location) || void 0 === WW ? void 0 : WW.protocol) || null
        }
        class oW {
          constructor(WW, iW) {
            this.shortDelay = WW, this.longDelay = iW, hW(iW > WW, "Short delay should be less than long delay!"), this.isMobile = (0, mW.X)() || (0, mW.Y)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (nW() || (0, mW.O)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function dW(WW, iW) {
          hW(WW.emulator, "Emulator should always be set here");
          const {
            url: OW
          } = WW.emulator;
          return iW ? `${OW}${iW.startsWith("/")?iW.slice(1):iW}` : OW
        }
        class eW {
          static initialize(WW, iW, OW) {
            this.fetchImpl = WW, iW && (this.headersImpl = iW), OW && (this.responseImpl = OW)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void JW("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void JW("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void JW("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const vW = {
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
          gW = new oW(3e4, 6e4);

        function DW(WW, iW) {
          return WW.tenantId && !iW.tenantId ? Object.assign(Object.assign({}, iW), {
            tenantId: WW.tenantId
          }) : iW
        }
        async function VW(WW, iW, OW, EW) {
          return pW(WW, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let NW = {},
              PW = {};
            EW && ("GET" === iW ? PW = EW : NW = {
              body: JSON.stringify(EW)
            });
            const LW = (0, mW.$)(Object.assign({
                key: WW.config.apiKey
              }, PW)).slice(1),
              cW = await WW._getAdditionalHeaders();
            return cW["Content-Type"] = "application/json", WW.languageCode && (cW["X-Firebase-Locale"] = WW.languageCode), eW.fetch()(CW(WW, WW.config.apiHost, OW, LW), Object.assign({
              method: iW,
              headers: cW,
              referrerPolicy: "no-referrer"
            }, NW))
          }))
        }
        async function pW(WW, iW, OW) {
          WW._canInitEmulator = !1;
          const EW = Object.assign(Object.assign({}, vW), iW);
          try {
            const iW = new XW(WW),
              mW = await Promise.race([OW(), iW.promise]);
            iW.clearNetworkTimeout();
            const NW = await mW.json();
            if ("needConfirmation" in NW) throw BW(WW, "account-exists-with-different-credential", NW);
            if (mW.ok && !("errorMessage" in NW)) return NW;
            {
              const iW = mW.ok ? NW.errorMessage : NW.error.message,
                [OW, PW] = iW.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === OW) throw BW(WW, "credential-already-in-use", NW);
              if ("EMAIL_EXISTS" === OW) throw BW(WW, "email-already-in-use", NW);
              if ("USER_DISABLED" === OW) throw BW(WW, "user-disabled", NW);
              const LW = EW[OW] || OW.toLowerCase().replace(/[_\s]+/g, "-");
              if (PW) throw SW(WW, LW, PW);
              MW(WW, LW)
            }
          } catch (NW) {
            if (NW instanceof mW.k) throw NW;
            MW(WW, "network-request-failed", {
              message: String(NW)
            })
          }
        }
        async function fW(WW, iW, OW, mW) {
          let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const NW = await VW(WW, iW, OW, mW, EW);
          return "mfaPendingCredential" in NW && MW(WW, "multi-factor-auth-required", {
            _serverResponse: NW
          }), NW
        }

        function CW(WW, iW, OW, mW) {
          const EW = `${iW}${OW}?${mW}`;
          return WW.config.emulator ? dW(WW.config, EW) : `${WW.config.apiScheme}://${EW}`
        }
        class XW {
          constructor(WW) {
            this.auth = WW, this.timer = null, this.promise = new Promise(((WW, iW) => {
              this.timer = setTimeout((() => iW(KW(this.auth, "network-request-failed"))), gW.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function BW(WW, iW, OW) {
          const mW = {
            appName: WW.name
          };
          OW.email && (mW.email = OW.email), OW.phoneNumber && (mW.phoneNumber = OW.phoneNumber);
          const EW = KW(WW, iW, mW);
          return EW.customData._tokenResponse = OW, EW
        }

        function qW(WW) {
          if (WW) try {
            const iW = new Date(Number(WW));
            if (!isNaN(iW.getTime())) return iW.toUTCString()
          } catch (iW) {}
        }

        function RW(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, mW.J)(WW).getIdToken(iW)
        }
        async function GW(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const OW = (0, mW.J)(WW),
            EW = await OW.getIdToken(iW),
            NW = aW(EW);
          TW(NW && NW.exp && NW.auth_time && NW.iat, OW.auth, "internal-error");
          const PW = "object" === typeof NW.firebase ? NW.firebase : void 0,
            LW = null === PW || void 0 === PW ? void 0 : PW.sign_in_provider;
          return {
            claims: NW,
            token: EW,
            authTime: qW(IW(NW.auth_time)),
            issuedAtTime: qW(IW(NW.iat)),
            expirationTime: qW(IW(NW.exp)),
            signInProvider: LW || null,
            signInSecondFactor: (null === PW || void 0 === PW ? void 0 : PW.sign_in_second_factor) || null
          }
        }

        function IW(WW) {
          return 1e3 * Number(WW)
        }

        function aW(WW) {
          const [iW, OW, EW] = WW.split(".");
          if (void 0 === iW || void 0 === OW || void 0 === EW) return sW("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const WW = (0, mW.o)(OW);
            return WW ? JSON.parse(WW) : (sW("Failed to decode base64 JWT payload"), null)
          } catch (NW) {
            return sW("Caught error parsing JWT payload as JSON", null === NW || void 0 === NW ? void 0 : NW.toString()), null
          }
        }
        async function rW(WW, iW) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return iW;
          try {
            return await iW
          } catch (OW) {
            throw OW instanceof mW.k && function(WW) {
              let {
                code: iW
              } = WW;
              return "auth/user-disabled" === iW || "auth/user-token-expired" === iW
            }(OW) && WW.auth.currentUser === WW && await WW.auth.signOut(), OW
          }
        }
        class zW {
          constructor(WW) {
            this.user = WW, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(WW) {
            var iW;
            if (WW) {
              const WW = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), WW
            } {
              this.errorBackoff = 3e4;
              const WW = (null !== (iW = this.user.stsTokenManager.expirationTime) && void 0 !== iW ? iW : 0) - Date.now() - 3e5;
              return Math.max(0, WW)
            }
          }
          schedule() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const iW = this.getInterval(WW);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), iW)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (WW) {
              return void("auth/network-request-failed" === (null === WW || void 0 === WW ? void 0 : WW.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class FW {
          constructor(WW, iW) {
            this.createdAt = WW, this.lastLoginAt = iW, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = qW(this.lastLoginAt), this.creationTime = qW(this.createdAt)
          }
          _copy(WW) {
            this.createdAt = WW.createdAt, this.lastLoginAt = WW.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function QW(WW) {
          var iW;
          const OW = WW.auth,
            mW = await WW.getIdToken(),
            EW = await rW(WW, async function(WW, iW) {
              return VW(WW, "POST", "/v1/accounts:lookup", iW)
            }(OW, {
              idToken: mW
            }));
          TW(null === EW || void 0 === EW ? void 0 : EW.users.length, OW, "internal-error");
          const PW = EW.users[0];
          WW._notifyReloadListener(PW);
          const LW = (null === (iW = PW.providerUserInfo) || void 0 === iW ? void 0 : iW.length) ? PW.providerUserInfo.map((WW => {
            var {
              providerId: iW
            } = WW, OW = NW(WW, ["providerId"]);
            return {
              providerId: iW,
              uid: OW.rawId || "",
              displayName: OW.displayName || null,
              email: OW.email || null,
              phoneNumber: OW.phoneNumber || null,
              photoURL: OW.photoUrl || null
            }
          })) : [];
          const cW = (wW = WW.providerData, tW = LW, [...wW.filter((WW => !tW.some((iW => iW.providerId === WW.providerId)))), ...tW]);
          var wW, tW;
          const ZW = WW.isAnonymous,
            xW = !(WW.email && PW.passwordHash) && !(null === cW || void 0 === cW ? void 0 : cW.length),
            lW = !!ZW && xW,
            AW = {
              uid: PW.localId,
              displayName: PW.displayName || null,
              photoURL: PW.photoUrl || null,
              email: PW.email || null,
              emailVerified: PW.emailVerified || !1,
              phoneNumber: PW.phoneNumber || null,
              tenantId: PW.tenantId || null,
              providerData: cW,
              metadata: new FW(PW.createdAt, PW.lastLoginAt),
              isAnonymous: lW
            };
          Object.assign(WW, AW)
        }
        async function Wi(WW) {
          const iW = (0, mW.J)(WW);
          await QW(iW), await iW.auth._persistUserIfCurrent(iW), iW.auth._notifyListenersIfCurrent(iW)
        }
        class ii {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(WW) {
            TW(WW.idToken, "internal-error"), TW("undefined" !== typeof WW.idToken, "internal-error"), TW("undefined" !== typeof WW.refreshToken, "internal-error");
            const iW = "expiresIn" in WW && "undefined" !== typeof WW.expiresIn ? Number(WW.expiresIn) : function(WW) {
              const iW = aW(WW);
              return TW(iW, "internal-error"), TW("undefined" !== typeof iW.exp, "internal-error"), TW("undefined" !== typeof iW.iat, "internal-error"), Number(iW.exp) - Number(iW.iat)
            }(WW.idToken);
            this.updateTokensAndExpiration(WW.idToken, WW.refreshToken, iW)
          }
          async getToken(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return TW(!this.accessToken || this.refreshToken, WW, "user-token-expired"), iW || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(WW, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(WW, iW) {
            const {
              accessToken: OW,
              refreshToken: EW,
              expiresIn: NW
            } = await async function(WW, iW) {
              const OW = await pW(WW, {}, (async () => {
                const OW = (0, mW.$)({
                    grant_type: "refresh_token",
                    refresh_token: iW
                  }).slice(1),
                  {
                    tokenApiHost: EW,
                    apiKey: NW
                  } = WW.config,
                  PW = CW(WW, EW, "/v1/token", `key=${NW}`),
                  LW = await WW._getAdditionalHeaders();
                return LW["Content-Type"] = "application/x-www-form-urlencoded", eW.fetch()(PW, {
                  method: "POST",
                  headers: LW,
                  body: OW
                })
              }));
              return {
                accessToken: OW.access_token,
                expiresIn: OW.expires_in,
                refreshToken: OW.refresh_token
              }
            }(WW, iW);
            this.updateTokensAndExpiration(OW, EW, Number(NW))
          }
          updateTokensAndExpiration(WW, iW, OW) {
            this.refreshToken = iW || null, this.accessToken = WW || null, this.expirationTime = Date.now() + 1e3 * OW
          }
          static fromJSON(WW, iW) {
            const {
              refreshToken: OW,
              accessToken: mW,
              expirationTime: EW
            } = iW, NW = new ii;
            return OW && (TW("string" === typeof OW, "internal-error", {
              appName: WW
            }), NW.refreshToken = OW), mW && (TW("string" === typeof mW, "internal-error", {
              appName: WW
            }), NW.accessToken = mW), EW && (TW("number" === typeof EW, "internal-error", {
              appName: WW
            }), NW.expirationTime = EW), NW
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(WW) {
            this.accessToken = WW.accessToken, this.refreshToken = WW.refreshToken, this.expirationTime = WW.expirationTime
          }
          _clone() {
            return Object.assign(new ii, this.toJSON())
          }
          _performRefresh() {
            return JW("not implemented")
          }
        }

        function Oi(WW, iW) {
          TW("string" === typeof WW || "undefined" === typeof WW, "internal-error", {
            appName: iW
          })
        }
        class mi {
          constructor(WW) {
            var {
              uid: iW,
              auth: OW,
              stsTokenManager: mW
            } = WW, EW = NW(WW, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new zW(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = iW, this.auth = OW, this.stsTokenManager = mW, this.accessToken = mW.accessToken, this.displayName = EW.displayName || null, this.email = EW.email || null, this.emailVerified = EW.emailVerified || !1, this.phoneNumber = EW.phoneNumber || null, this.photoURL = EW.photoURL || null, this.isAnonymous = EW.isAnonymous || !1, this.tenantId = EW.tenantId || null, this.providerData = EW.providerData ? [...EW.providerData] : [], this.metadata = new FW(EW.createdAt || void 0, EW.lastLoginAt || void 0)
          }
          async getIdToken(WW) {
            const iW = await rW(this, this.stsTokenManager.getToken(this.auth, WW));
            return TW(iW, this.auth, "internal-error"), this.accessToken !== iW && (this.accessToken = iW, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), iW
          }
          getIdTokenResult(WW) {
            return GW(this, WW)
          }
          reload() {
            return Wi(this)
          }
          _assign(WW) {
            this !== WW && (TW(this.uid === WW.uid, this.auth, "internal-error"), this.displayName = WW.displayName, this.photoURL = WW.photoURL, this.email = WW.email, this.emailVerified = WW.emailVerified, this.phoneNumber = WW.phoneNumber, this.isAnonymous = WW.isAnonymous, this.tenantId = WW.tenantId, this.providerData = WW.providerData.map((WW => Object.assign({}, WW))), this.metadata._copy(WW.metadata), this.stsTokenManager._assign(WW.stsTokenManager))
          }
          _clone(WW) {
            const iW = new mi(Object.assign(Object.assign({}, this), {
              auth: WW,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return iW.metadata._copy(this.metadata), iW
          }
          _onReload(WW) {
            TW(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = WW, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(WW) {
            this.reloadListener ? this.reloadListener(WW) : this.reloadUserInfo = WW
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              OW = !1;
            WW.idToken && WW.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(WW), OW = !0), iW && await QW(this), await this.auth._persistUserIfCurrent(this), OW && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const WW = await this.getIdToken();
            return await rW(this, async function(WW, iW) {
              return VW(WW, "POST", "/v1/accounts:delete", iW)
            }(this.auth, {
              idToken: WW
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
              providerData: this.providerData.map((WW => Object.assign({}, WW))),
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
          static _fromJSON(WW, iW) {
            var OW, mW, EW, NW, PW, LW, cW, wW;
            const tW = null !== (OW = iW.displayName) && void 0 !== OW ? OW : void 0,
              ZW = null !== (mW = iW.email) && void 0 !== mW ? mW : void 0,
              xW = null !== (EW = iW.phoneNumber) && void 0 !== EW ? EW : void 0,
              lW = null !== (NW = iW.photoURL) && void 0 !== NW ? NW : void 0,
              AW = null !== (PW = iW.tenantId) && void 0 !== PW ? PW : void 0,
              bW = null !== (LW = iW._redirectEventId) && void 0 !== LW ? LW : void 0,
              jW = null !== (cW = iW.createdAt) && void 0 !== cW ? cW : void 0,
              UW = null !== (wW = iW.lastLoginAt) && void 0 !== wW ? wW : void 0,
              {
                uid: kW,
                emailVerified: sW,
                isAnonymous: MW,
                providerData: KW,
                stsTokenManager: SW
              } = iW;
            TW(kW && SW, WW, "internal-error");
            const YW = ii.fromJSON(this.name, SW);
            TW("string" === typeof kW, WW, "internal-error"), Oi(tW, WW.name), Oi(ZW, WW.name), TW("boolean" === typeof sW, WW, "internal-error"), TW("boolean" === typeof MW, WW, "internal-error"), Oi(xW, WW.name), Oi(lW, WW.name), Oi(AW, WW.name), Oi(bW, WW.name), Oi(jW, WW.name), Oi(UW, WW.name);
            const yW = new mi({
              uid: kW,
              auth: WW,
              email: ZW,
              emailVerified: sW,
              displayName: tW,
              isAnonymous: MW,
              photoURL: lW,
              phoneNumber: xW,
              tenantId: AW,
              stsTokenManager: YW,
              createdAt: jW,
              lastLoginAt: UW
            });
            return KW && Array.isArray(KW) && (yW.providerData = KW.map((WW => Object.assign({}, WW)))), bW && (yW._redirectEventId = bW), yW
          }
          static async _fromIdTokenResponse(WW, iW) {
            let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const mW = new ii;
            mW.updateFromServerResponse(iW);
            const EW = new mi({
              uid: iW.localId,
              auth: WW,
              stsTokenManager: mW,
              isAnonymous: OW
            });
            return await QW(EW), EW
          }
        }
        const Ei = new Map;

        function Ni(WW) {
          hW(WW instanceof Function, "Expected a class definition");
          let iW = Ei.get(WW);
          return iW ? (hW(iW instanceof WW, "Instance stored in cache mismatched with class"), iW) : (iW = new WW, Ei.set(WW, iW), iW)
        }
        class Pi {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(WW, iW) {
            this.storage[WW] = iW
          }
          async _get(WW) {
            const iW = this.storage[WW];
            return void 0 === iW ? null : iW
          }
          async _remove(WW) {
            delete this.storage[WW]
          }
          _addListener(WW, iW) {}
          _removeListener(WW, iW) {}
        }
        Pi.type = "NONE";
        const Li = Pi;

        function ci(WW, iW, OW) {
          return `firebase:${WW}:${iW}:${OW}`
        }
        class wi {
          constructor(WW, iW, OW) {
            this.persistence = WW, this.auth = iW, this.userKey = OW;
            const {
              config: mW,
              name: EW
            } = this.auth;
            this.fullUserKey = ci(this.userKey, mW.apiKey, EW), this.fullPersistenceKey = ci("persistence", mW.apiKey, EW), this.boundEventHandler = iW._onStorageEvent.bind(iW), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(WW) {
            return this.persistence._set(this.fullUserKey, WW.toJSON())
          }
          async getCurrentUser() {
            const WW = await this.persistence._get(this.fullUserKey);
            return WW ? mi._fromJSON(this.auth, WW) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(WW) {
            if (this.persistence === WW) return;
            const iW = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = WW, iW ? this.setCurrentUser(iW) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(WW, iW) {
            let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!iW.length) return new wi(Ni(Li), WW, OW);
            const mW = (await Promise.all(iW.map((async WW => {
              if (await WW._isAvailable()) return WW
            })))).filter((WW => WW));
            let EW = mW[0] || Ni(Li);
            const NW = ci(OW, WW.config.apiKey, WW.name);
            let PW = null;
            for (const wW of iW) try {
              const iW = await wW._get(NW);
              if (iW) {
                const OW = mi._fromJSON(WW, iW);
                wW !== EW && (PW = OW), EW = wW;
                break
              }
            } catch (cW) {}
            const LW = mW.filter((WW => WW._shouldAllowMigration));
            return EW._shouldAllowMigration && LW.length ? (EW = LW[0], PW && await EW._set(NW, PW.toJSON()), await Promise.all(iW.map((async WW => {
              if (WW !== EW) try {
                await WW._remove(NW)
              } catch (cW) {}
            }))), new wi(EW, WW, OW)) : new wi(EW, WW, OW)
          }
        }

        function ti(WW) {
          const iW = WW.toLowerCase();
          if (iW.includes("opera/") || iW.includes("opr/") || iW.includes("opios/")) return "Opera";
          if (Ai(iW)) return "IEMobile";
          if (iW.includes("msie") || iW.includes("trident/")) return "IE";
          if (iW.includes("edge/")) return "Edge";
          if (Zi(iW)) return "Firefox";
          if (iW.includes("silk/")) return "Silk";
          if (ji(iW)) return "Blackberry";
          if (Ui(iW)) return "Webos";
          if (xi(iW)) return "Safari";
          if ((iW.includes("chrome/") || li(iW)) && !iW.includes("edge/")) return "Chrome";
          if (bi(iW)) return "Android";
          {
            const iW = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              OW = WW.match(iW);
            if (2 === (null === OW || void 0 === OW ? void 0 : OW.length)) return OW[1]
          }
          return "Other"
        }

        function Zi() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, mW.L)();
          return /firefox\//i.test(WW)
        }

        function xi() {
          const WW = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, mW.L)()).toLowerCase();
          return WW.includes("safari/") && !WW.includes("chrome/") && !WW.includes("crios/") && !WW.includes("android")
        }

        function li() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, mW.L)();
          return /crios\//i.test(WW)
        }

        function Ai() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, mW.L)();
          return /iemobile/i.test(WW)
        }

        function bi() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, mW.L)();
          return /android/i.test(WW)
        }

        function ji() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, mW.L)();
          return /blackberry/i.test(WW)
        }

        function Ui() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, mW.L)();
          return /webos/i.test(WW)
        }

        function ki() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, mW.L)();
          return /iphone|ipad|ipod/i.test(WW) || /macintosh/i.test(WW) && /mobile/i.test(WW)
        }

        function si() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, mW.L)();
          return ki(WW) || bi(WW) || Ui(WW) || ji(WW) || /windows phone/i.test(WW) || Ai(WW)
        }

        function Mi(WW) {
          let iW, OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (WW) {
            case "Browser":
              iW = ti((0, mW.L)());
              break;
            case "Worker":
              iW = `${ti((0,mW.L)())}-${WW}`;
              break;
            default:
              iW = WW
          }
          const NW = OW.length ? OW.join(",") : "FirebaseCore-web";
          return `${iW}/JsCore/${EW.f}/${NW}`
        }
        async function Ki(WW, iW) {
          return VW(WW, "GET", "/v2/recaptchaConfig", DW(WW, iW))
        }

        function Si(WW) {
          return void 0 !== WW && void 0 !== WW.getResponse
        }

        function Yi(WW) {
          return void 0 !== WW && void 0 !== WW.enterprise
        }
        class yi {
          constructor(WW) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === WW.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = WW.recaptchaKey.split("/")[3], this.emailPasswordEnabled = WW.recaptchaEnforcementState.some((WW => "EMAIL_PASSWORD_PROVIDER" === WW.provider && "OFF" !== WW.enforcementState))
          }
        }

        function Ti(WW) {
          return new Promise(((iW, OW) => {
            const mW = document.createElement("script");
            mW.setAttribute("src", WW), mW.onload = iW, mW.onerror = WW => {
                const iW = KW("internal-error");
                iW.customData = WW, OW(iW)
              }, mW.type = "text/javascript", mW.charset = "UTF-8",
              function() {
                var WW, iW;
                return null !== (iW = null === (WW = document.getElementsByTagName("head")) || void 0 === WW ? void 0 : WW[0]) && void 0 !== iW ? iW : document
              }().appendChild(mW)
          }))
        }

        function Ji(WW) {
          return `__${WW}${Math.floor(1e6*Math.random())}`
        }
        class Hi {
          constructor(WW) {
            this.type = "recaptcha-enterprise", this.auth = di(WW)
          }
          async verify() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function OW(iW, OW, mW) {
              const EW = window.grecaptcha;
              Yi(EW) ? EW.enterprise.ready((() => {
                EW.enterprise.execute(iW, {
                  action: WW
                }).then((WW => {
                  OW(WW)
                })).catch((() => {
                  OW("NO_RECAPTCHA")
                }))
              })) : mW(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((WW, mW) => {
              (async function(WW) {
                if (!iW) {
                  if (null == WW.tenantId && null != WW._agentRecaptchaConfig) return WW._agentRecaptchaConfig.siteKey;
                  if (null != WW.tenantId && void 0 !== WW._tenantRecaptchaConfigs[WW.tenantId]) return WW._tenantRecaptchaConfigs[WW.tenantId].siteKey
                }
                return new Promise((async (iW, OW) => {
                  Ki(WW, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((mW => {
                    if (void 0 !== mW.recaptchaKey) {
                      const OW = new yi(mW);
                      return null == WW.tenantId ? WW._agentRecaptchaConfig = OW : WW._tenantRecaptchaConfigs[WW.tenantId] = OW, iW(OW.siteKey)
                    }
                    OW(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((WW => {
                    OW(WW)
                  }))
                }))
              })(this.auth).then((EW => {
                if (!iW && Yi(window.grecaptcha)) OW(EW, WW, mW);
                else {
                  if ("undefined" === typeof window) return void mW(new Error("RecaptchaVerifier is only supported in browser"));
                  Ti("https://www.google.com/recaptcha/enterprise.js?render=" + EW).then((() => {
                    OW(EW, WW, mW)
                  })).catch((WW => {
                    mW(WW)
                  }))
                }
              })).catch((WW => {
                mW(WW)
              }))
            }))
          }
        }
        async function ni(WW, iW, OW) {
          let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const EW = new Hi(WW);
          let NW;
          try {
            NW = await EW.verify(OW)
          } catch (LW) {
            NW = await EW.verify(OW, !0)
          }
          const PW = Object.assign({}, iW);
          return mW ? Object.assign(PW, {
            captchaResp: NW
          }) : Object.assign(PW, {
            captchaResponse: NW
          }), Object.assign(PW, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(PW, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), PW
        }
        class ui {
          constructor(WW) {
            this.auth = WW, this.queue = []
          }
          pushCallback(WW, iW) {
            const OW = iW => new Promise(((OW, mW) => {
              try {
                OW(WW(iW))
              } catch (EW) {
                mW(EW)
              }
            }));
            OW.onAbort = iW, this.queue.push(OW);
            const mW = this.queue.length - 1;
            return () => {
              this.queue[mW] = () => Promise.resolve()
            }
          }
          async runMiddleware(WW) {
            if (this.auth.currentUser === WW) return;
            const iW = [];
            try {
              for (const OW of this.queue) await OW(WW), OW.onAbort && iW.push(OW.onAbort)
            } catch (OW) {
              iW.reverse();
              for (const WW of iW) try {
                WW()
              } catch (mW) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === OW || void 0 === OW ? void 0 : OW.message
              })
            }
          }
        }
        class oi {
          constructor(WW, iW, OW, mW) {
            this.app = WW, this.heartbeatServiceProvider = iW, this.appCheckServiceProvider = OW, this.config = mW, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new ei(this), this.idTokenSubscription = new ei(this), this.beforeStateQueue = new ui(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = jW, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = WW.name, this.clientVersion = mW.sdkClientVersion
          }
          _initializeWithPersistence(WW, iW) {
            return iW && (this._popupRedirectResolver = Ni(iW)), this._initializationPromise = this.queue((async () => {
              var OW, mW;
              if (!this._deleted && (this.persistenceManager = await wi.create(this, WW), !this._deleted)) {
                if (null === (OW = this._popupRedirectResolver) || void 0 === OW ? void 0 : OW._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (EW) {}
                await this.initializeCurrentUser(iW), this.lastNotifiedUid = (null === (mW = this.currentUser) || void 0 === mW ? void 0 : mW.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const WW = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || WW ? this.currentUser && WW && this.currentUser.uid === WW.uid ? (this._currentUser._assign(WW), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(WW, !0) : void 0
          }
          async initializeCurrentUser(WW) {
            var iW;
            const OW = await this.assertedPersistence.getCurrentUser();
            let mW = OW,
              EW = !1;
            if (WW && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const OW = null === (iW = this.redirectUser) || void 0 === iW ? void 0 : iW._redirectEventId,
                NW = null === mW || void 0 === mW ? void 0 : mW._redirectEventId,
                PW = await this.tryRedirectSignIn(WW);
              OW && OW !== NW || !(null === PW || void 0 === PW ? void 0 : PW.user) || (mW = PW.user, EW = !0)
            }
            if (!mW) return this.directlySetCurrentUser(null);
            if (!mW._redirectEventId) {
              if (EW) try {
                await this.beforeStateQueue.runMiddleware(mW)
              } catch (NW) {
                mW = OW, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(NW)))
              }
              return mW ? this.reloadAndSetCurrentUserOrClear(mW) : this.directlySetCurrentUser(null)
            }
            return TW(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === mW._redirectEventId ? this.directlySetCurrentUser(mW) : this.reloadAndSetCurrentUserOrClear(mW)
          }
          async tryRedirectSignIn(WW) {
            let iW = null;
            try {
              iW = await this._popupRedirectResolver._completeRedirectFn(this, WW, !0)
            } catch (OW) {
              await this._setRedirectUser(null)
            }
            return iW
          }
          async reloadAndSetCurrentUserOrClear(WW) {
            try {
              await QW(WW)
            } catch (iW) {
              if ("auth/network-request-failed" !== (null === iW || void 0 === iW ? void 0 : iW.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(WW)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const WW = navigator;
              return WW.languages && WW.languages[0] || WW.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(WW) {
            const iW = WW ? (0, mW.J)(WW) : null;
            return iW && TW(iW.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(iW && iW._clone(this))
          }
          async _updateCurrentUser(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return WW && TW(this.tenantId === WW.tenantId, this, "tenant-id-mismatch"), iW || await this.beforeStateQueue.runMiddleware(WW), this.queue((async () => {
              await this.directlySetCurrentUser(WW), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(WW) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(Ni(WW))
            }))
          }
          async initializeRecaptchaConfig() {
            const WW = await Ki(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              iW = new yi(WW);
            if (null == this.tenantId ? this._agentRecaptchaConfig = iW : this._tenantRecaptchaConfigs[this.tenantId] = iW, iW.emailPasswordEnabled) {
              new Hi(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(WW) {
            this._errorFactory = new mW.h("auth", "Firebase", WW())
          }
          onAuthStateChanged(WW, iW, OW) {
            return this.registerStateListener(this.authStateSubscription, WW, iW, OW)
          }
          beforeAuthStateChanged(WW, iW) {
            return this.beforeStateQueue.pushCallback(WW, iW)
          }
          onIdTokenChanged(WW, iW, OW) {
            return this.registerStateListener(this.idTokenSubscription, WW, iW, OW)
          }
          toJSON() {
            var WW;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (WW = this._currentUser) || void 0 === WW ? void 0 : WW.toJSON()
            }
          }
          async _setRedirectUser(WW, iW) {
            const OW = await this.getOrInitRedirectPersistenceManager(iW);
            return null === WW ? OW.removeCurrentUser() : OW.setCurrentUser(WW)
          }
          async getOrInitRedirectPersistenceManager(WW) {
            if (!this.redirectPersistenceManager) {
              const iW = WW && Ni(WW) || this._popupRedirectResolver;
              TW(iW, this, "argument-error"), this.redirectPersistenceManager = await wi.create(this, [Ni(iW._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(WW) {
            var iW, OW;
            return this._isInitialized && await this.queue((async () => {})), (null === (iW = this._currentUser) || void 0 === iW ? void 0 : iW._redirectEventId) === WW ? this._currentUser : (null === (OW = this.redirectUser) || void 0 === OW ? void 0 : OW._redirectEventId) === WW ? this.redirectUser : null
          }
          async _persistUserIfCurrent(WW) {
            if (WW === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(WW)))
          }
          _notifyListenersIfCurrent(WW) {
            WW === this.currentUser && this.notifyAuthListeners()
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
            var WW, iW;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const OW = null !== (iW = null === (WW = this.currentUser) || void 0 === WW ? void 0 : WW.uid) && void 0 !== iW ? iW : null;
            this.lastNotifiedUid !== OW && (this.lastNotifiedUid = OW, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(WW, iW, OW, mW) {
            if (this._deleted) return () => {};
            const EW = "function" === typeof iW ? iW : iW.next.bind(iW),
              NW = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return TW(NW, this, "internal-error"), NW.then((() => EW(this.currentUser))), "function" === typeof iW ? WW.addObserver(iW, OW, mW) : WW.addObserver(iW)
          }
          async directlySetCurrentUser(WW) {
            this.currentUser && this.currentUser !== WW && this._currentUser._stopProactiveRefresh(), WW && this.isProactiveRefreshEnabled && WW._startProactiveRefresh(), this.currentUser = WW, WW ? await this.assertedPersistence.setCurrentUser(WW) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(WW) {
            return this.operations = this.operations.then(WW, WW), this.operations
          }
          get assertedPersistence() {
            return TW(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(WW) {
            WW && !this.frameworks.includes(WW) && (this.frameworks.push(WW), this.frameworks.sort(), this.clientVersion = Mi(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var WW;
            const iW = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (iW["X-Firebase-gmpid"] = this.app.options.appId);
            const OW = await (null === (WW = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === WW ? void 0 : WW.getHeartbeatsHeader());
            OW && (iW["X-Firebase-Client"] = OW);
            const mW = await this._getAppCheckToken();
            return mW && (iW["X-Firebase-AppCheck"] = mW), iW
          }
          async _getAppCheckToken() {
            var WW;
            const iW = await (null === (WW = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === WW ? void 0 : WW.getToken());
            return (null === iW || void 0 === iW ? void 0 : iW.error) && function(WW) {
              if (kW.logLevel <= PW.b.WARN) {
                for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
                kW.warn(`Auth (${EW.f}): ${WW}`, ...OW)
              }
            }(`Error while retrieving App Check token: ${iW.error}`), null === iW || void 0 === iW ? void 0 : iW.token
          }
        }

        function di(WW) {
          return (0, mW.J)(WW)
        }
        class ei {
          constructor(WW) {
            this.auth = WW, this.observer = null, this.addObserver = (0, mW.y)((WW => this.observer = WW))
          }
          get next() {
            return TW(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function vi(WW, iW) {
          const OW = (0, EW.B)(WW, "auth");
          if (OW.isInitialized()) {
            const WW = OW.getImmediate(),
              EW = OW.getOptions();
            if ((0, mW.C)(EW, null !== iW && void 0 !== iW ? iW : {})) return WW;
            MW(WW, "already-initialized")
          }
          return OW.initialize({
            options: iW
          })
        }

        function gi(WW, iW, OW) {
          const mW = di(WW);
          TW(mW._canInitEmulator, mW, "emulator-config-failed"), TW(/^https?:\/\//.test(iW), mW, "invalid-emulator-scheme");
          const EW = !!(null === OW || void 0 === OW ? void 0 : OW.disableWarnings),
            NW = Di(iW),
            {
              host: PW,
              port: LW
            } = function(WW) {
              const iW = Di(WW),
                OW = /(\/\/)?([^?#/]+)/.exec(WW.substr(iW.length));
              if (!OW) return {
                host: "",
                port: null
              };
              const mW = OW[2].split("@").pop() || "",
                EW = /^(\[[^\]]+\])(:|$)/.exec(mW);
              if (EW) {
                const WW = EW[1];
                return {
                  host: WW,
                  port: Vi(mW.substr(WW.length + 1))
                }
              } {
                const [WW, iW] = mW.split(":");
                return {
                  host: WW,
                  port: Vi(iW)
                }
              }
            }(iW),
            cW = null === LW ? "" : `:${LW}`;
          mW.config.emulator = {
            url: `${NW}//${PW}${cW}/`
          }, mW.settings.appVerificationDisabledForTesting = !0, mW.emulatorConfig = Object.freeze({
            host: PW,
            port: LW,
            protocol: NW.replace(":", ""),
            options: Object.freeze({
              disableWarnings: EW
            })
          }), EW || function() {
            function WW() {
              const WW = document.createElement("p"),
                iW = WW.style;
              WW.innerText = "Running in emulator mode. Do not use with production credentials.", iW.position = "fixed", iW.width = "100%", iW.backgroundColor = "#ffffff", iW.border = ".1em solid #000000", iW.color = "#b50000", iW.bottom = "0px", iW.left = "0px", iW.margin = "0px", iW.zIndex = "10000", iW.textAlign = "center", WW.classList.add("firebase-emulator-warning"), document.body.appendChild(WW)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", WW) : WW())
          }()
        }

        function Di(WW) {
          const iW = WW.indexOf(":");
          return iW < 0 ? "" : WW.substr(0, iW + 1)
        }

        function Vi(WW) {
          if (!WW) return null;
          const iW = Number(WW);
          return isNaN(iW) ? null : iW
        }
        class fi {
          constructor(WW, iW) {
            this.providerId = WW, this.signInMethod = iW
          }
          toJSON() {
            return JW("not implemented")
          }
          _getIdTokenResponse(WW) {
            return JW("not implemented")
          }
          _linkToIdToken(WW, iW) {
            return JW("not implemented")
          }
          _getReauthenticationResolver(WW) {
            return JW("not implemented")
          }
        }
        async function Ci(WW, iW) {
          return VW(WW, "POST", "/v1/accounts:resetPassword", DW(WW, iW))
        }
        async function Xi(WW, iW) {
          return VW(WW, "POST", "/v1/accounts:update", iW)
        }
        async function Bi(WW, iW) {
          return fW(WW, "POST", "/v1/accounts:signInWithPassword", DW(WW, iW))
        }
        async function qi(WW, iW) {
          return VW(WW, "POST", "/v1/accounts:sendOobCode", DW(WW, iW))
        }
        async function Ri(WW, iW) {
          return qi(WW, iW)
        }
        async function Gi(WW, iW) {
          return qi(WW, iW)
        }
        class Ii extends fi {
          constructor(WW, iW, OW) {
            let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", OW), this._email = WW, this._password = iW, this._tenantId = mW
          }
          static _fromEmailAndPassword(WW, iW) {
            return new Ii(WW, iW, "password")
          }
          static _fromEmailAndCode(WW, iW) {
            return new Ii(WW, iW, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(WW) {
            const iW = "string" === typeof WW ? JSON.parse(WW) : WW;
            if ((null === iW || void 0 === iW ? void 0 : iW.email) && (null === iW || void 0 === iW ? void 0 : iW.password)) {
              if ("password" === iW.signInMethod) return this._fromEmailAndPassword(iW.email, iW.password);
              if ("emailLink" === iW.signInMethod) return this._fromEmailAndCode(iW.email, iW.password, iW.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(WW) {
            var iW;
            switch (this.signInMethod) {
              case "password":
                const OW = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (iW = WW._getRecaptchaConfig()) || void 0 === iW ? void 0 : iW.emailPasswordEnabled) {
                  const iW = await ni(WW, OW, "signInWithPassword");
                  return Bi(WW, iW)
                }
                return Bi(WW, OW).catch((async iW => {
                  if ("auth/missing-recaptcha-token" === iW.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const iW = await ni(WW, OW, "signInWithPassword");
                    return Bi(WW, iW)
                  }
                  return Promise.reject(iW)
                }));
              case "emailLink":
                return async function(WW, iW) {
                  return fW(WW, "POST", "/v1/accounts:signInWithEmailLink", DW(WW, iW))
                }(WW, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                MW(WW, "internal-error")
            }
          }
          async _linkToIdToken(WW, iW) {
            switch (this.signInMethod) {
              case "password":
                return Xi(WW, {
                  idToken: iW,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(WW, iW) {
                  return fW(WW, "POST", "/v1/accounts:signInWithEmailLink", DW(WW, iW))
                }(WW, {
                  idToken: iW,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                MW(WW, "internal-error")
            }
          }
          _getReauthenticationResolver(WW) {
            return this._getIdTokenResponse(WW)
          }
        }
        async function ai(WW, iW) {
          return fW(WW, "POST", "/v1/accounts:signInWithIdp", DW(WW, iW))
        }
        class ri extends fi {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(WW) {
            const iW = new ri(WW.providerId, WW.signInMethod);
            return WW.idToken || WW.accessToken ? (WW.idToken && (iW.idToken = WW.idToken), WW.accessToken && (iW.accessToken = WW.accessToken), WW.nonce && !WW.pendingToken && (iW.nonce = WW.nonce), WW.pendingToken && (iW.pendingToken = WW.pendingToken)) : WW.oauthToken && WW.oauthTokenSecret ? (iW.accessToken = WW.oauthToken, iW.secret = WW.oauthTokenSecret) : MW("argument-error"), iW
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
          static fromJSON(WW) {
            const iW = "string" === typeof WW ? JSON.parse(WW) : WW,
              {
                providerId: OW,
                signInMethod: mW
              } = iW,
              EW = NW(iW, ["providerId", "signInMethod"]);
            if (!OW || !mW) return null;
            const PW = new ri(OW, mW);
            return PW.idToken = EW.idToken || void 0, PW.accessToken = EW.accessToken || void 0, PW.secret = EW.secret, PW.nonce = EW.nonce, PW.pendingToken = EW.pendingToken || null, PW
          }
          _getIdTokenResponse(WW) {
            return ai(WW, this.buildRequest())
          }
          _linkToIdToken(WW, iW) {
            const OW = this.buildRequest();
            return OW.idToken = iW, ai(WW, OW)
          }
          _getReauthenticationResolver(WW) {
            const iW = this.buildRequest();
            return iW.autoCreate = !1, ai(WW, iW)
          }
          buildRequest() {
            const WW = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) WW.pendingToken = this.pendingToken;
            else {
              const iW = {};
              this.idToken && (iW.id_token = this.idToken), this.accessToken && (iW.access_token = this.accessToken), this.secret && (iW.oauth_token_secret = this.secret), iW.providerId = this.providerId, this.nonce && !this.pendingToken && (iW.nonce = this.nonce), WW.postBody = (0, mW.$)(iW)
            }
            return WW
          }
        }
        const zi = {
          USER_NOT_FOUND: "user-not-found"
        };
        class Fi extends fi {
          constructor(WW) {
            super("phone", "phone"), this.params = WW
          }
          static _fromVerification(WW, iW) {
            return new Fi({
              verificationId: WW,
              verificationCode: iW
            })
          }
          static _fromTokenResponse(WW, iW) {
            return new Fi({
              phoneNumber: WW,
              temporaryProof: iW
            })
          }
          _getIdTokenResponse(WW) {
            return async function(WW, iW) {
              return fW(WW, "POST", "/v1/accounts:signInWithPhoneNumber", DW(WW, iW))
            }(WW, this._makeVerificationRequest())
          }
          _linkToIdToken(WW, iW) {
            return async function(WW, iW) {
              const OW = await fW(WW, "POST", "/v1/accounts:signInWithPhoneNumber", DW(WW, iW));
              if (OW.temporaryProof) throw BW(WW, "account-exists-with-different-credential", OW);
              return OW
            }(WW, Object.assign({
              idToken: iW
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(WW) {
            return async function(WW, iW) {
              return fW(WW, "POST", "/v1/accounts:signInWithPhoneNumber", DW(WW, Object.assign(Object.assign({}, iW), {
                operation: "REAUTH"
              })), zi)
            }(WW, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: WW,
              phoneNumber: iW,
              verificationId: OW,
              verificationCode: mW
            } = this.params;
            return WW && iW ? {
              temporaryProof: WW,
              phoneNumber: iW
            } : {
              sessionInfo: OW,
              code: mW
            }
          }
          toJSON() {
            const WW = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (WW.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (WW.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (WW.verificationCode = this.params.verificationCode), this.params.verificationId && (WW.verificationId = this.params.verificationId), WW
          }
          static fromJSON(WW) {
            "string" === typeof WW && (WW = JSON.parse(WW));
            const {
              verificationId: iW,
              verificationCode: OW,
              phoneNumber: mW,
              temporaryProof: EW
            } = WW;
            return OW || iW || mW || EW ? new Fi({
              verificationId: iW,
              verificationCode: OW,
              phoneNumber: mW,
              temporaryProof: EW
            }) : null
          }
        }
        class Qi {
          constructor(WW) {
            var iW, OW, EW, NW, PW, LW;
            const cW = (0, mW.Z)((0, mW.F)(WW)),
              wW = null !== (iW = cW.apiKey) && void 0 !== iW ? iW : null,
              tW = null !== (OW = cW.oobCode) && void 0 !== OW ? OW : null,
              ZW = function(WW) {
                switch (WW) {
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
              }(null !== (EW = cW.mode) && void 0 !== EW ? EW : null);
            TW(wW && tW && ZW, "argument-error"), this.apiKey = wW, this.operation = ZW, this.code = tW, this.continueUrl = null !== (NW = cW.continueUrl) && void 0 !== NW ? NW : null, this.languageCode = null !== (PW = cW.languageCode) && void 0 !== PW ? PW : null, this.tenantId = null !== (LW = cW.tenantId) && void 0 !== LW ? LW : null
          }
          static parseLink(WW) {
            const iW = function(WW) {
              const iW = (0, mW.Z)((0, mW.F)(WW)).link,
                OW = iW ? (0, mW.Z)((0, mW.F)(iW)).deep_link_id : null,
                EW = (0, mW.Z)((0, mW.F)(WW)).deep_link_id;
              return (EW ? (0, mW.Z)((0, mW.F)(EW)).link : null) || EW || OW || iW || WW
            }(WW);
            try {
              return new Qi(iW)
            } catch (OW) {
              return null
            }
          }
        }

        function WO(WW) {
          return Qi.parseLink(WW)
        }
        class iO {
          constructor() {
            this.providerId = iO.PROVIDER_ID
          }
          static credential(WW, iW) {
            return Ii._fromEmailAndPassword(WW, iW)
          }
          static credentialWithLink(WW, iW) {
            const OW = Qi.parseLink(iW);
            return TW(OW, "argument-error"), Ii._fromEmailAndCode(WW, OW.code, OW.tenantId)
          }
        }
        iO.PROVIDER_ID = "password", iO.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", iO.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class OO {
          constructor(WW) {
            this.providerId = WW, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(WW) {
            this.defaultLanguageCode = WW
          }
          setCustomParameters(WW) {
            return this.customParameters = WW, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class mO extends OO {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(WW) {
            return this.scopes.includes(WW) || this.scopes.push(WW), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class EO extends mO {
          static credentialFromJSON(WW) {
            const iW = "string" === typeof WW ? JSON.parse(WW) : WW;
            return TW("providerId" in iW && "signInMethod" in iW, "argument-error"), ri._fromParams(iW)
          }
          credential(WW) {
            return this._credential(Object.assign(Object.assign({}, WW), {
              nonce: WW.rawNonce
            }))
          }
          _credential(WW) {
            return TW(WW.idToken || WW.accessToken, "argument-error"), ri._fromParams(Object.assign(Object.assign({}, WW), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(WW) {
            return EO.oauthCredentialFromTaggedObject(WW)
          }
          static credentialFromError(WW) {
            return EO.oauthCredentialFromTaggedObject(WW.customData || {})
          }
          static oauthCredentialFromTaggedObject(WW) {
            let {
              _tokenResponse: iW
            } = WW;
            if (!iW) return null;
            const {
              oauthIdToken: OW,
              oauthAccessToken: mW,
              oauthTokenSecret: EW,
              pendingToken: NW,
              nonce: PW,
              providerId: LW
            } = iW;
            if (!mW && !EW && !OW && !NW) return null;
            if (!LW) return null;
            try {
              return new EO(LW)._credential({
                idToken: OW,
                accessToken: mW,
                nonce: PW,
                pendingToken: NW
              })
            } catch (cW) {
              return null
            }
          }
        }
        class NO extends mO {
          constructor() {
            super("facebook.com")
          }
          static credential(WW) {
            return ri._fromParams({
              providerId: NO.PROVIDER_ID,
              signInMethod: NO.FACEBOOK_SIGN_IN_METHOD,
              accessToken: WW
            })
          }
          static credentialFromResult(WW) {
            return NO.credentialFromTaggedObject(WW)
          }
          static credentialFromError(WW) {
            return NO.credentialFromTaggedObject(WW.customData || {})
          }
          static credentialFromTaggedObject(WW) {
            let {
              _tokenResponse: iW
            } = WW;
            if (!iW || !("oauthAccessToken" in iW)) return null;
            if (!iW.oauthAccessToken) return null;
            try {
              return NO.credential(iW.oauthAccessToken)
            } catch (OW) {
              return null
            }
          }
        }
        NO.FACEBOOK_SIGN_IN_METHOD = "facebook.com", NO.PROVIDER_ID = "facebook.com";
        class PO extends mO {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(WW, iW) {
            return ri._fromParams({
              providerId: PO.PROVIDER_ID,
              signInMethod: PO.GOOGLE_SIGN_IN_METHOD,
              idToken: WW,
              accessToken: iW
            })
          }
          static credentialFromResult(WW) {
            return PO.credentialFromTaggedObject(WW)
          }
          static credentialFromError(WW) {
            return PO.credentialFromTaggedObject(WW.customData || {})
          }
          static credentialFromTaggedObject(WW) {
            let {
              _tokenResponse: iW
            } = WW;
            if (!iW) return null;
            const {
              oauthIdToken: OW,
              oauthAccessToken: mW
            } = iW;
            if (!OW && !mW) return null;
            try {
              return PO.credential(OW, mW)
            } catch (EW) {
              return null
            }
          }
        }
        PO.GOOGLE_SIGN_IN_METHOD = "google.com", PO.PROVIDER_ID = "google.com";
        class LO extends mO {
          constructor() {
            super("github.com")
          }
          static credential(WW) {
            return ri._fromParams({
              providerId: LO.PROVIDER_ID,
              signInMethod: LO.GITHUB_SIGN_IN_METHOD,
              accessToken: WW
            })
          }
          static credentialFromResult(WW) {
            return LO.credentialFromTaggedObject(WW)
          }
          static credentialFromError(WW) {
            return LO.credentialFromTaggedObject(WW.customData || {})
          }
          static credentialFromTaggedObject(WW) {
            let {
              _tokenResponse: iW
            } = WW;
            if (!iW || !("oauthAccessToken" in iW)) return null;
            if (!iW.oauthAccessToken) return null;
            try {
              return LO.credential(iW.oauthAccessToken)
            } catch (OW) {
              return null
            }
          }
        }
        LO.GITHUB_SIGN_IN_METHOD = "github.com", LO.PROVIDER_ID = "github.com";
        class cO extends fi {
          constructor(WW, iW) {
            super(WW, WW), this.pendingToken = iW
          }
          _getIdTokenResponse(WW) {
            return ai(WW, this.buildRequest())
          }
          _linkToIdToken(WW, iW) {
            const OW = this.buildRequest();
            return OW.idToken = iW, ai(WW, OW)
          }
          _getReauthenticationResolver(WW) {
            const iW = this.buildRequest();
            return iW.autoCreate = !1, ai(WW, iW)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(WW) {
            const iW = "string" === typeof WW ? JSON.parse(WW) : WW,
              {
                providerId: OW,
                signInMethod: mW,
                pendingToken: EW
              } = iW;
            return OW && mW && EW && OW === mW ? new cO(OW, EW) : null
          }
          static _create(WW, iW) {
            return new cO(WW, iW)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class wO extends OO {
          constructor(WW) {
            TW(WW.startsWith("saml."), "argument-error"), super(WW)
          }
          static credentialFromResult(WW) {
            return wO.samlCredentialFromTaggedObject(WW)
          }
          static credentialFromError(WW) {
            return wO.samlCredentialFromTaggedObject(WW.customData || {})
          }
          static credentialFromJSON(WW) {
            const iW = cO.fromJSON(WW);
            return TW(iW, "argument-error"), iW
          }
          static samlCredentialFromTaggedObject(WW) {
            let {
              _tokenResponse: iW
            } = WW;
            if (!iW) return null;
            const {
              pendingToken: OW,
              providerId: mW
            } = iW;
            if (!OW || !mW) return null;
            try {
              return cO._create(mW, OW)
            } catch (EW) {
              return null
            }
          }
        }
        class tO extends mO {
          constructor() {
            super("twitter.com")
          }
          static credential(WW, iW) {
            return ri._fromParams({
              providerId: tO.PROVIDER_ID,
              signInMethod: tO.TWITTER_SIGN_IN_METHOD,
              oauthToken: WW,
              oauthTokenSecret: iW
            })
          }
          static credentialFromResult(WW) {
            return tO.credentialFromTaggedObject(WW)
          }
          static credentialFromError(WW) {
            return tO.credentialFromTaggedObject(WW.customData || {})
          }
          static credentialFromTaggedObject(WW) {
            let {
              _tokenResponse: iW
            } = WW;
            if (!iW) return null;
            const {
              oauthAccessToken: OW,
              oauthTokenSecret: mW
            } = iW;
            if (!OW || !mW) return null;
            try {
              return tO.credential(OW, mW)
            } catch (EW) {
              return null
            }
          }
        }
        async function ZO(WW, iW) {
          return fW(WW, "POST", "/v1/accounts:signUp", DW(WW, iW))
        }
        tO.TWITTER_SIGN_IN_METHOD = "twitter.com", tO.PROVIDER_ID = "twitter.com";
        class xO {
          constructor(WW) {
            this.user = WW.user, this.providerId = WW.providerId, this._tokenResponse = WW._tokenResponse, this.operationType = WW.operationType
          }
          static async _fromIdTokenResponse(WW, iW, OW) {
            let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const EW = await mi._fromIdTokenResponse(WW, OW, mW),
              NW = lO(OW);
            return new xO({
              user: EW,
              providerId: NW,
              _tokenResponse: OW,
              operationType: iW
            })
          }
          static async _forOperation(WW, iW, OW) {
            await WW._updateTokensIfNecessary(OW, !0);
            const mW = lO(OW);
            return new xO({
              user: WW,
              providerId: mW,
              _tokenResponse: OW,
              operationType: iW
            })
          }
        }

        function lO(WW) {
          return WW.providerId ? WW.providerId : "phoneNumber" in WW ? "phone" : null
        }
        async function AO(WW) {
          var iW;
          const OW = di(WW);
          if (await OW._initializationPromise, null === (iW = OW.currentUser) || void 0 === iW ? void 0 : iW.isAnonymous) return new xO({
            user: OW.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const mW = await ZO(OW, {
              returnSecureToken: !0
            }),
            EW = await xO._fromIdTokenResponse(OW, "signIn", mW, !0);
          return await OW._updateCurrentUser(EW.user), EW
        }
        class bO extends mW.k {
          constructor(WW, iW, OW, mW) {
            var EW;
            super(iW.code, iW.message), this.operationType = OW, this.user = mW, Object.setPrototypeOf(this, bO.prototype), this.customData = {
              appName: WW.name,
              tenantId: null !== (EW = WW.tenantId) && void 0 !== EW ? EW : void 0,
              _serverResponse: iW.customData._serverResponse,
              operationType: OW
            }
          }
          static _fromErrorAndOperation(WW, iW, OW, mW) {
            return new bO(WW, iW, OW, mW)
          }
        }

        function jO(WW, iW, OW, mW) {
          return ("reauthenticate" === iW ? OW._getReauthenticationResolver(WW) : OW._getIdTokenResponse(WW)).catch((OW => {
            if ("auth/multi-factor-auth-required" === OW.code) throw bO._fromErrorAndOperation(WW, OW, iW, mW);
            throw OW
          }))
        }

        function UO(WW) {
          return new Set(WW.map((WW => {
            let {
              providerId: iW
            } = WW;
            return iW
          })).filter((WW => !!WW)))
        }
        async function kO(WW, iW) {
          const OW = (0, mW.J)(WW);
          await MO(!0, OW, iW);
          const {
            providerUserInfo: EW
          } = await async function(WW, iW) {
            return VW(WW, "POST", "/v1/accounts:update", iW)
          }(OW.auth, {
            idToken: await OW.getIdToken(),
            deleteProvider: [iW]
          }), NW = UO(EW || []);
          return OW.providerData = OW.providerData.filter((WW => NW.has(WW.providerId))), NW.has("phone") || (OW.phoneNumber = null), await OW.auth._persistUserIfCurrent(OW), OW
        }
        async function sO(WW, iW) {
          let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const mW = await rW(WW, iW._linkToIdToken(WW.auth, await WW.getIdToken()), OW);
          return xO._forOperation(WW, "link", mW)
        }
        async function MO(WW, iW, OW) {
          await QW(iW);
          const mW = !1 === WW ? "provider-already-linked" : "no-such-provider";
          TW(UO(iW.providerData).has(OW) === WW, iW.auth, mW)
        }
        async function KO(WW, iW) {
          let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: mW
          } = WW, EW = "reauthenticate";
          try {
            const NW = await rW(WW, jO(mW, EW, iW, WW), OW);
            TW(NW.idToken, mW, "internal-error");
            const PW = aW(NW.idToken);
            TW(PW, mW, "internal-error");
            const {
              sub: LW
            } = PW;
            return TW(WW.uid === LW, mW, "user-mismatch"), xO._forOperation(WW, EW, NW)
          } catch (NW) {
            throw "auth/user-not-found" === (null === NW || void 0 === NW ? void 0 : NW.code) && MW(mW, "user-mismatch"), NW
          }
        }
        async function SO(WW, iW) {
          let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const mW = "signIn",
            EW = await jO(WW, mW, iW),
            NW = await xO._fromIdTokenResponse(WW, mW, EW);
          return OW || await WW._updateCurrentUser(NW.user), NW
        }
        async function YO(WW, iW) {
          return SO(di(WW), iW)
        }
        async function yO(WW, iW) {
          const OW = (0, mW.J)(WW);
          return await MO(!1, OW, iW.providerId), sO(OW, iW)
        }
        async function TO(WW, iW) {
          return KO((0, mW.J)(WW), iW)
        }
        async function JO(WW, iW) {
          const OW = di(WW),
            mW = await async function(WW, iW) {
              return fW(WW, "POST", "/v1/accounts:signInWithCustomToken", DW(WW, iW))
            }(OW, {
              token: iW,
              returnSecureToken: !0
            }), EW = await xO._fromIdTokenResponse(OW, "signIn", mW);
          return await OW._updateCurrentUser(EW.user), EW
        }
        class hO {
          constructor(WW, iW) {
            this.factorId = WW, this.uid = iW.mfaEnrollmentId, this.enrollmentTime = new Date(iW.enrolledAt).toUTCString(), this.displayName = iW.displayName
          }
          static _fromServerResponse(WW, iW) {
            return "phoneInfo" in iW ? HO._fromServerResponse(WW, iW) : "totpInfo" in iW ? nO._fromServerResponse(WW, iW) : MW(WW, "internal-error")
          }
        }
        class HO extends hO {
          constructor(WW) {
            super("phone", WW), this.phoneNumber = WW.phoneInfo
          }
          static _fromServerResponse(WW, iW) {
            return new HO(iW)
          }
        }
        class nO extends hO {
          constructor(WW) {
            super("totp", WW)
          }
          static _fromServerResponse(WW, iW) {
            return new nO(iW)
          }
        }

        function uO(WW, iW, OW) {
          var mW;
          TW((null === (mW = OW.url) || void 0 === mW ? void 0 : mW.length) > 0, WW, "invalid-continue-uri"), TW("undefined" === typeof OW.dynamicLinkDomain || OW.dynamicLinkDomain.length > 0, WW, "invalid-dynamic-link-domain"), iW.continueUrl = OW.url, iW.dynamicLinkDomain = OW.dynamicLinkDomain, iW.canHandleCodeInApp = OW.handleCodeInApp, OW.iOS && (TW(OW.iOS.bundleId.length > 0, WW, "missing-ios-bundle-id"), iW.iOSBundleId = OW.iOS.bundleId), OW.android && (TW(OW.android.packageName.length > 0, WW, "missing-android-pkg-name"), iW.androidInstallApp = OW.android.installApp, iW.androidMinimumVersionCode = OW.android.minimumVersion, iW.androidPackageName = OW.android.packageName)
        }
        async function oO(WW, iW, OW) {
          var mW;
          const EW = di(WW),
            NW = {
              requestType: "PASSWORD_RESET",
              email: iW,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (mW = EW._getRecaptchaConfig()) || void 0 === mW ? void 0 : mW.emailPasswordEnabled) {
            const WW = await ni(EW, NW, "getOobCode", !0);
            OW && uO(EW, WW, OW), await Ri(EW, WW)
          } else OW && uO(EW, NW, OW), await Ri(EW, NW).catch((async WW => {
            if ("auth/missing-recaptcha-token" !== WW.code) return Promise.reject(WW);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const WW = await ni(EW, NW, "getOobCode", !0);
              OW && uO(EW, WW, OW), await Ri(EW, WW)
            }
          }))
        }
        async function dO(WW, iW, OW) {
          await Ci((0, mW.J)(WW), {
            oobCode: iW,
            newPassword: OW
          })
        }
        async function eO(WW, iW) {
          await async function(WW, iW) {
            return VW(WW, "POST", "/v1/accounts:update", DW(WW, iW))
          }((0, mW.J)(WW), {
            oobCode: iW
          })
        }
        async function vO(WW, iW) {
          const OW = (0, mW.J)(WW),
            EW = await Ci(OW, {
              oobCode: iW
            }),
            NW = EW.requestType;
          switch (TW(NW, OW, "internal-error"), NW) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              TW(EW.newEmail, OW, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              TW(EW.mfaInfo, OW, "internal-error");
            default:
              TW(EW.email, OW, "internal-error")
          }
          let PW = null;
          return EW.mfaInfo && (PW = hO._fromServerResponse(di(OW), EW.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === EW.requestType ? EW.newEmail : EW.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === EW.requestType ? EW.email : EW.newEmail) || null,
              multiFactorInfo: PW
            },
            operation: NW
          }
        }
        async function gO(WW, iW) {
          const {
            data: OW
          } = await vO((0, mW.J)(WW), iW);
          return OW.email
        }
        async function DO(WW, iW, OW) {
          var mW;
          const EW = di(WW),
            NW = {
              returnSecureToken: !0,
              email: iW,
              password: OW,
              clientType: "CLIENT_TYPE_WEB"
            };
          let PW;
          if (null === (mW = EW._getRecaptchaConfig()) || void 0 === mW ? void 0 : mW.emailPasswordEnabled) {
            const WW = await ni(EW, NW, "signUpPassword");
            PW = ZO(EW, WW)
          } else PW = ZO(EW, NW).catch((async WW => {
            if ("auth/missing-recaptcha-token" === WW.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const WW = await ni(EW, NW, "signUpPassword");
              return ZO(EW, WW)
            }
            return Promise.reject(WW)
          }));
          const LW = await PW.catch((WW => Promise.reject(WW))),
            cW = await xO._fromIdTokenResponse(EW, "signIn", LW);
          return await EW._updateCurrentUser(cW.user), cW
        }

        function VO(WW, iW, OW) {
          return YO((0, mW.J)(WW), iO.credential(iW, OW))
        }
        async function pO(WW, iW, OW) {
          var mW;
          const EW = di(WW),
            NW = {
              requestType: "EMAIL_SIGNIN",
              email: iW,
              clientType: "CLIENT_TYPE_WEB"
            };

          function PW(WW, iW) {
            TW(iW.handleCodeInApp, EW, "argument-error"), iW && uO(EW, WW, iW)
          }
          if (null === (mW = EW._getRecaptchaConfig()) || void 0 === mW ? void 0 : mW.emailPasswordEnabled) {
            const WW = await ni(EW, NW, "getOobCode", !0);
            PW(WW, OW), await Gi(EW, WW)
          } else PW(NW, OW), await Gi(EW, NW).catch((async WW => {
            if ("auth/missing-recaptcha-token" !== WW.code) return Promise.reject(WW);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const WW = await ni(EW, NW, "getOobCode", !0);
              PW(WW, OW), await Gi(EW, WW)
            }
          }))
        }

        function fO(WW, iW) {
          const OW = Qi.parseLink(iW);
          return "EMAIL_SIGNIN" === (null === OW || void 0 === OW ? void 0 : OW.operation)
        }
        async function CO(WW, iW, OW) {
          const EW = (0, mW.J)(WW),
            NW = iO.credentialWithLink(iW, OW || HW());
          return TW(NW._tenantId === (EW.tenantId || null), EW, "tenant-id-mismatch"), YO(EW, NW)
        }
        async function XO(WW, iW) {
          const OW = {
              identifier: iW,
              continueUri: nW() ? HW() : "http://localhost"
            },
            {
              signinMethods: EW
            } = await async function(WW, iW) {
              return VW(WW, "POST", "/v1/accounts:createAuthUri", DW(WW, iW))
            }((0, mW.J)(WW), OW);
          return EW || []
        }
        async function BO(WW, iW) {
          const OW = (0, mW.J)(WW),
            EW = {
              requestType: "VERIFY_EMAIL",
              idToken: await WW.getIdToken()
            };
          iW && uO(OW.auth, EW, iW);
          const {
            email: NW
          } = await async function(WW, iW) {
            return qi(WW, iW)
          }(OW.auth, EW);
          NW !== WW.email && await WW.reload()
        }
        async function qO(WW, iW, OW) {
          const EW = (0, mW.J)(WW),
            NW = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await WW.getIdToken(),
              newEmail: iW
            };
          OW && uO(EW.auth, NW, OW);
          const {
            email: PW
          } = await async function(WW, iW) {
            return qi(WW, iW)
          }(EW.auth, NW);
          PW !== WW.email && await WW.reload()
        }
        async function RO(WW, iW) {
          let {
            displayName: OW,
            photoURL: EW
          } = iW;
          if (void 0 === OW && void 0 === EW) return;
          const NW = (0, mW.J)(WW),
            PW = {
              idToken: await NW.getIdToken(),
              displayName: OW,
              photoUrl: EW,
              returnSecureToken: !0
            },
            LW = await rW(NW, async function(WW, iW) {
              return VW(WW, "POST", "/v1/accounts:update", iW)
            }(NW.auth, PW));
          NW.displayName = LW.displayName || null, NW.photoURL = LW.photoUrl || null;
          const cW = NW.providerData.find((WW => {
            let {
              providerId: iW
            } = WW;
            return "password" === iW
          }));
          cW && (cW.displayName = NW.displayName, cW.photoURL = NW.photoURL), await NW._updateTokensIfNecessary(LW)
        }

        function GO(WW, iW) {
          return aO((0, mW.J)(WW), iW, null)
        }

        function IO(WW, iW) {
          return aO((0, mW.J)(WW), null, iW)
        }
        async function aO(WW, iW, OW) {
          const {
            auth: mW
          } = WW, EW = {
            idToken: await WW.getIdToken(),
            returnSecureToken: !0
          };
          iW && (EW.email = iW), OW && (EW.password = OW);
          const NW = await rW(WW, Xi(mW, EW));
          await WW._updateTokensIfNecessary(NW, !0)
        }
        class rO {
          constructor(WW, iW) {
            let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = WW, this.providerId = iW, this.profile = OW
          }
        }
        class zO extends rO {
          constructor(WW, iW, OW, mW) {
            super(WW, iW, OW), this.username = mW
          }
        }
        class FO extends rO {
          constructor(WW, iW) {
            super(WW, "facebook.com", iW)
          }
        }
        class QO extends zO {
          constructor(WW, iW) {
            super(WW, "github.com", iW, "string" === typeof(null === iW || void 0 === iW ? void 0 : iW.login) ? null === iW || void 0 === iW ? void 0 : iW.login : null)
          }
        }
        class Wm extends rO {
          constructor(WW, iW) {
            super(WW, "google.com", iW)
          }
        }
        class im extends zO {
          constructor(WW, iW, OW) {
            super(WW, "twitter.com", iW, OW)
          }
        }

        function Om(WW) {
          const {
            user: iW,
            _tokenResponse: OW
          } = WW;
          return iW.isAnonymous && !OW ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(WW) {
            var iW, OW;
            if (!WW) return null;
            const {
              providerId: mW
            } = WW, EW = WW.rawUserInfo ? JSON.parse(WW.rawUserInfo) : {}, NW = WW.isNewUser || "identitytoolkit#SignupNewUserResponse" === WW.kind;
            if (!mW && (null === WW || void 0 === WW ? void 0 : WW.idToken)) {
              const mW = null === (OW = null === (iW = aW(WW.idToken)) || void 0 === iW ? void 0 : iW.firebase) || void 0 === OW ? void 0 : OW.sign_in_provider;
              if (mW) return new rO(NW, "anonymous" !== mW && "custom" !== mW ? mW : null)
            }
            if (!mW) return null;
            switch (mW) {
              case "facebook.com":
                return new FO(NW, EW);
              case "github.com":
                return new QO(NW, EW);
              case "google.com":
                return new Wm(NW, EW);
              case "twitter.com":
                return new im(NW, EW, WW.screenName || null);
              case "custom":
              case "anonymous":
                return new rO(NW, null);
              default:
                return new rO(NW, mW, EW)
            }
          }(OW)
        }

        function mm(WW, iW) {
          return (0, mW.J)(WW).setPersistence(iW)
        }

        function Em(WW) {
          return di(WW).initializeRecaptchaConfig()
        }

        function Nm(WW, iW, OW, EW) {
          return (0, mW.J)(WW).onIdTokenChanged(iW, OW, EW)
        }

        function Pm(WW, iW, OW) {
          return (0, mW.J)(WW).beforeAuthStateChanged(iW, OW)
        }

        function Lm(WW, iW, OW, EW) {
          return (0, mW.J)(WW).onAuthStateChanged(iW, OW, EW)
        }

        function cm(WW) {
          (0, mW.J)(WW).useDeviceLanguage()
        }

        function wm(WW, iW) {
          return (0, mW.J)(WW).updateCurrentUser(iW)
        }

        function tm(WW) {
          return (0, mW.J)(WW).signOut()
        }
        async function Zm(WW) {
          return (0, mW.J)(WW).delete()
        }
        class xm {
          constructor(WW, iW, OW) {
            this.type = WW, this.credential = iW, this.auth = OW
          }
          static _fromIdtoken(WW, iW) {
            return new xm("enroll", WW, iW)
          }
          static _fromMfaPendingCredential(WW) {
            return new xm("signin", WW)
          }
          toJSON() {
            const WW = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [WW]: this.credential
              }
            }
          }
          static fromJSON(WW) {
            var iW, OW;
            if (null === WW || void 0 === WW ? void 0 : WW.multiFactorSession) {
              if (null === (iW = WW.multiFactorSession) || void 0 === iW ? void 0 : iW.pendingCredential) return xm._fromMfaPendingCredential(WW.multiFactorSession.pendingCredential);
              if (null === (OW = WW.multiFactorSession) || void 0 === OW ? void 0 : OW.idToken) return xm._fromIdtoken(WW.multiFactorSession.idToken)
            }
            return null
          }
        }
        class lm {
          constructor(WW, iW, OW) {
            this.session = WW, this.hints = iW, this.signInResolver = OW
          }
          static _fromError(WW, iW) {
            const OW = di(WW),
              mW = iW.customData._serverResponse,
              EW = (mW.mfaInfo || []).map((WW => hO._fromServerResponse(OW, WW)));
            TW(mW.mfaPendingCredential, OW, "internal-error");
            const NW = xm._fromMfaPendingCredential(mW.mfaPendingCredential);
            return new lm(NW, EW, (async WW => {
              const EW = await WW._process(OW, NW);
              delete mW.mfaInfo, delete mW.mfaPendingCredential;
              const PW = Object.assign(Object.assign({}, mW), {
                idToken: EW.idToken,
                refreshToken: EW.refreshToken
              });
              switch (iW.operationType) {
                case "signIn":
                  const WW = await xO._fromIdTokenResponse(OW, iW.operationType, PW);
                  return await OW._updateCurrentUser(WW.user), WW;
                case "reauthenticate":
                  return TW(iW.user, OW, "internal-error"), xO._forOperation(iW.user, iW.operationType, PW);
                default:
                  MW(OW, "internal-error")
              }
            }))
          }
          async resolveSignIn(WW) {
            const iW = WW;
            return this.signInResolver(iW)
          }
        }

        function Am(WW, iW) {
          var OW;
          const EW = (0, mW.J)(WW),
            NW = iW;
          return TW(iW.customData.operationType, EW, "argument-error"), TW(null === (OW = NW.customData._serverResponse) || void 0 === OW ? void 0 : OW.mfaPendingCredential, EW, "argument-error"), lm._fromError(EW, NW)
        }
        class bm {
          constructor(WW) {
            this.user = WW, this.enrolledFactors = [], WW._onReload((iW => {
              iW.mfaInfo && (this.enrolledFactors = iW.mfaInfo.map((iW => hO._fromServerResponse(WW.auth, iW))))
            }))
          }
          static _fromUser(WW) {
            return new bm(WW)
          }
          async getSession() {
            return xm._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(WW, iW) {
            const OW = WW,
              mW = await this.getSession(),
              EW = await rW(this.user, OW._process(this.user.auth, mW, iW));
            return await this.user._updateTokensIfNecessary(EW), this.user.reload()
          }
          async unenroll(WW) {
            const iW = "string" === typeof WW ? WW : WW.uid,
              OW = await this.user.getIdToken();
            try {
              const WW = await rW(this.user, (mW = this.user.auth, EW = {
                idToken: OW,
                mfaEnrollmentId: iW
              }, VW(mW, "POST", "/v2/accounts/mfaEnrollment:withdraw", DW(mW, EW))));
              this.enrolledFactors = this.enrolledFactors.filter((WW => {
                let {
                  uid: OW
                } = WW;
                return OW !== iW
              })), await this.user._updateTokensIfNecessary(WW), await this.user.reload()
            } catch (NW) {
              throw NW
            }
            var mW, EW
          }
        }
        const jm = new WeakMap;

        function Um(WW) {
          const iW = (0, mW.J)(WW);
          return jm.has(iW) || jm.set(iW, bm._fromUser(iW)), jm.get(iW)
        }
        const km = "__sak";
        class sm {
          constructor(WW, iW) {
            this.storageRetriever = WW, this.type = iW
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(km, "1"), this.storage.removeItem(km), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (WW) {
              return Promise.resolve(!1)
            }
          }
          _set(WW, iW) {
            return this.storage.setItem(WW, JSON.stringify(iW)), Promise.resolve()
          }
          _get(WW) {
            const iW = this.storage.getItem(WW);
            return Promise.resolve(iW ? JSON.parse(iW) : null)
          }
          _remove(WW) {
            return this.storage.removeItem(WW), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class Mm extends sm {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (WW, iW) => this.onStorageEvent(WW, iW), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const WW = (0, mW.L)();
              return xi(WW) || ki(WW)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (WW) {
                return !1
              }
            }(), this.fallbackToPolling = si(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(WW) {
            for (const iW of Object.keys(this.listeners)) {
              const OW = this.storage.getItem(iW),
                mW = this.localCache[iW];
              OW !== mW && WW(iW, mW, OW)
            }
          }
          onStorageEvent(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!WW.key) return void this.forAllChangedKeys(((WW, iW, OW) => {
              this.notifyListeners(WW, OW)
            }));
            const OW = WW.key;
            if (iW ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const mW = this.storage.getItem(OW);
              if (WW.newValue !== mW) null !== WW.newValue ? this.storage.setItem(OW, WW.newValue) : this.storage.removeItem(OW);
              else if (this.localCache[OW] === WW.newValue && !iW) return
            }
            const EW = () => {
                const WW = this.storage.getItem(OW);
                (iW || this.localCache[OW] !== WW) && this.notifyListeners(OW, WW)
              },
              NW = this.storage.getItem(OW);
            (0, mW.R)() && 10 === document.documentMode && NW !== WW.newValue && WW.newValue !== WW.oldValue ? setTimeout(EW, 10) : EW()
          }
          notifyListeners(WW, iW) {
            this.localCache[WW] = iW;
            const OW = this.listeners[WW];
            if (OW)
              for (const mW of Array.from(OW)) mW(iW ? JSON.parse(iW) : iW)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((WW, iW, OW) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: WW,
                  oldValue: iW,
                  newValue: OW
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
          _addListener(WW, iW) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[WW] || (this.listeners[WW] = new Set, this.localCache[WW] = this.storage.getItem(WW)), this.listeners[WW].add(iW)
          }
          _removeListener(WW, iW) {
            this.listeners[WW] && (this.listeners[WW].delete(iW), 0 === this.listeners[WW].size && delete this.listeners[WW]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(WW, iW) {
            await super._set(WW, iW), this.localCache[WW] = JSON.stringify(iW)
          }
          async _get(WW) {
            const iW = await super._get(WW);
            return this.localCache[WW] = JSON.stringify(iW), iW
          }
          async _remove(WW) {
            await super._remove(WW), delete this.localCache[WW]
          }
        }
        Mm.type = "LOCAL";
        const Km = Mm;
        class Sm extends sm {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(WW, iW) {}
          _removeListener(WW, iW) {}
        }
        Sm.type = "SESSION";
        const Ym = Sm;
        class ym {
          constructor(WW) {
            this.eventTarget = WW, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(WW) {
            const iW = this.receivers.find((iW => iW.isListeningto(WW)));
            if (iW) return iW;
            const OW = new ym(WW);
            return this.receivers.push(OW), OW
          }
          isListeningto(WW) {
            return this.eventTarget === WW
          }
          async handleEvent(WW) {
            const iW = WW,
              {
                eventId: OW,
                eventType: mW,
                data: EW
              } = iW.data,
              NW = this.handlersMap[mW];
            if (!(null === NW || void 0 === NW ? void 0 : NW.size)) return;
            iW.ports[0].postMessage({
              status: "ack",
              eventId: OW,
              eventType: mW
            });
            const PW = Array.from(NW).map((async WW => WW(iW.origin, EW))),
              LW = await
            function(WW) {
              return Promise.all(WW.map((async WW => {
                try {
                  return {
                    fulfilled: !0,
                    value: await WW
                  }
                } catch (iW) {
                  return {
                    fulfilled: !1,
                    reason: iW
                  }
                }
              })))
            }(PW);
            iW.ports[0].postMessage({
              status: "done",
              eventId: OW,
              eventType: mW,
              response: LW
            })
          }
          _subscribe(WW, iW) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[WW] || (this.handlersMap[WW] = new Set), this.handlersMap[WW].add(iW)
          }
          _unsubscribe(WW, iW) {
            this.handlersMap[WW] && iW && this.handlersMap[WW].delete(iW), iW && 0 !== this.handlersMap[WW].size || delete this.handlersMap[WW], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function Tm() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            OW = "";
          for (let mW = 0; mW < iW; mW++) OW += Math.floor(10 * Math.random());
          return WW + OW
        }
        ym.receivers = [];
        class Jm {
          constructor(WW) {
            this.target = WW, this.handlers = new Set
          }
          removeMessageHandler(WW) {
            WW.messageChannel && (WW.messageChannel.port1.removeEventListener("message", WW.zk), WW.messageChannel.port1.close()), this.handlers.delete(WW)
          }
          async _send(WW, iW) {
            let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const mW = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!mW) throw new Error("connection_unavailable");
            let EW, NW;
            return new Promise(((PW, LW) => {
              const cW = Tm("", 20);
              mW.port1.start();
              const wW = setTimeout((() => {
                LW(new Error("unsupported_event"))
              }), OW);
              NW = {
                messageChannel: mW,
                zk(WW) {
                  const iW = WW;
                  if (iW.data.eventId === cW) switch (iW.data.status) {
                    case "ack":
                      clearTimeout(wW), EW = setTimeout((() => {
                        LW(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(EW), PW(iW.data.response);
                      break;
                    default:
                      clearTimeout(wW), clearTimeout(EW), LW(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(NW), mW.port1.addEventListener("message", NW.zk), this.target.postMessage({
                eventType: WW,
                eventId: cW,
                data: iW
              }, [mW.port2])
            })).finally((() => {
              NW && this.removeMessageHandler(NW)
            }))
          }
        }

        function hm() {
          return window
        }

        function Hm() {
          return "undefined" !== typeof hm().WorkerGlobalScope && "function" === typeof hm().importScripts
        }
        const nm = "firebaseLocalStorageDb",
          um = "firebaseLocalStorage",
          om = "fbase_key";
        class dm {
          constructor(WW) {
            this.request = WW
          }
          toPromise() {
            return new Promise(((WW, iW) => {
              this.request.addEventListener("success", (() => {
                WW(this.request.result)
              })), this.request.addEventListener("error", (() => {
                iW(this.request.error)
              }))
            }))
          }
        }

        function em(WW, iW) {
          return WW.transaction([um], iW ? "readwrite" : "readonly").objectStore(um)
        }

        function gm() {
          const WW = indexedDB.open(nm, 1);
          return new Promise(((iW, OW) => {
            WW.addEventListener("error", (() => {
              OW(WW.error)
            })), WW.addEventListener("upgradeneeded", (() => {
              const iW = WW.result;
              try {
                iW.createObjectStore(um, {
                  keyPath: om
                })
              } catch (mW) {
                OW(mW)
              }
            })), WW.addEventListener("success", (async () => {
              const OW = WW.result;
              OW.objectStoreNames.contains(um) ? iW(OW) : (OW.close(), await
                function() {
                  const WW = indexedDB.deleteDatabase(nm);
                  return new dm(WW).toPromise()
                }(), iW(await gm()))
            }))
          }))
        }
        async function Dm(WW, iW, OW) {
          const mW = em(WW, !0).put({
            [om]: iW,
            value: OW
          });
          return new dm(mW).toPromise()
        }

        function Vm(WW, iW) {
          const OW = em(WW, !0).delete(iW);
          return new dm(OW).toPromise()
        }
        class pm {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await gm()), this.db
          }
          async _withRetries(WW) {
            let iW = 0;
            for (;;) try {
              const iW = await this._openDb();
              return await WW(iW)
            } catch (OW) {
              if (iW++ > 3) throw OW;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return Hm() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = ym._getInstance(Hm() ? self : null), this.receiver._subscribe("keyChanged", (async (WW, iW) => ({
              keyProcessed: (await this._poll()).includes(iW.key)
            }))), this.receiver._subscribe("ping", (async (WW, iW) => ["keyChanged"]))
          }
          async initializeSender() {
            var WW, iW;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (WW) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new Jm(this.activeServiceWorker);
            const OW = await this.sender._send("ping", {}, 800);
            OW && (null === (WW = OW[0]) || void 0 === WW ? void 0 : WW.fulfilled) && (null === (iW = OW[0]) || void 0 === iW ? void 0 : iW.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(WW) {
            if (this.sender && this.activeServiceWorker && function() {
                var WW;
                return (null === (WW = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === WW ? void 0 : WW.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: WW
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (iW) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const WW = await gm();
              return await Dm(WW, km, "1"), await Vm(WW, km), !0
            } catch (WW) {}
            return !1
          }
          async _withPendingWrite(WW) {
            this.pendingWrites++;
            try {
              await WW()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(WW, iW) {
            return this._withPendingWrite((async () => (await this._withRetries((OW => Dm(OW, WW, iW))), this.localCache[WW] = iW, this.notifyServiceWorker(WW))))
          }
          async _get(WW) {
            const iW = await this._withRetries((iW => async function(WW, iW) {
              const OW = em(WW, !1).get(iW),
                mW = await new dm(OW).toPromise();
              return void 0 === mW ? null : mW.value
            }(iW, WW)));
            return this.localCache[WW] = iW, iW
          }
          async _remove(WW) {
            return this._withPendingWrite((async () => (await this._withRetries((iW => Vm(iW, WW))), delete this.localCache[WW], this.notifyServiceWorker(WW))))
          }
          async _poll() {
            const WW = await this._withRetries((WW => {
              const iW = em(WW, !1).getAll();
              return new dm(iW).toPromise()
            }));
            if (!WW) return [];
            if (0 !== this.pendingWrites) return [];
            const iW = [],
              OW = new Set;
            for (const {
                fbase_key: mW,
                value: EW
              }
              of WW) OW.add(mW), JSON.stringify(this.localCache[mW]) !== JSON.stringify(EW) && (this.notifyListeners(mW, EW), iW.push(mW));
            for (const mW of Object.keys(this.localCache)) this.localCache[mW] && !OW.has(mW) && (this.notifyListeners(mW, null), iW.push(mW));
            return iW
          }
          notifyListeners(WW, iW) {
            this.localCache[WW] = iW;
            const OW = this.listeners[WW];
            if (OW)
              for (const mW of Array.from(OW)) mW(iW)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(WW, iW) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[WW] || (this.listeners[WW] = new Set, this._get(WW)), this.listeners[WW].add(iW)
          }
          _removeListener(WW, iW) {
            this.listeners[WW] && (this.listeners[WW].delete(iW), 0 === this.listeners[WW].size && delete this.listeners[WW]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        pm.type = "LOCAL";
        const fm = pm;
        const Cm = 1e12;
        class Xm {
          constructor(WW) {
            this.auth = WW, this.counter = Cm, this._widgets = new Map
          }
          render(WW, iW) {
            const OW = this.counter;
            return this._widgets.set(OW, new Bm(WW, this.auth.name, iW || {})), this.counter++, OW
          }
          reset(WW) {
            var iW;
            const OW = WW || Cm;
            null === (iW = this._widgets.get(OW)) || void 0 === iW || iW.delete(), this._widgets.delete(OW)
          }
          getResponse(WW) {
            var iW;
            const OW = WW || Cm;
            return (null === (iW = this._widgets.get(OW)) || void 0 === iW ? void 0 : iW.getResponse()) || ""
          }
          async execute(WW) {
            var iW;
            const OW = WW || Cm;
            return null === (iW = this._widgets.get(OW)) || void 0 === iW || iW.execute(), ""
          }
        }
        class Bm {
          constructor(WW, iW, OW) {
            this.params = OW, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const mW = "string" === typeof WW ? document.getElementById(WW) : WW;
            TW(mW, "argument-error", {
              appName: iW
            }), this.container = mW, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(WW) {
                const iW = [],
                  OW = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let mW = 0; mW < WW; mW++) iW.push(OW.charAt(Math.floor(Math.random() * OW.length)));
                return iW.join("")
              }(50);
              const {
                callback: WW,
                "expired-callback": iW
              } = this.params;
              if (WW) try {
                WW(this.responseToken)
              } catch (OW) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, iW) try {
                  iW()
                } catch (OW) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const qm = Ji("rcb"),
          Rm = new oW(3e4, 6e4);
        class Gm {
          constructor() {
            var WW;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (WW = hm().grecaptcha) || void 0 === WW ? void 0 : WW.render)
          }
          load(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return TW(function(WW) {
              return WW.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(WW)
            }(iW), WW, "argument-error"), this.shouldResolveImmediately(iW) && Si(hm().grecaptcha) ? Promise.resolve(hm().grecaptcha) : new Promise(((OW, EW) => {
              const NW = hm().setTimeout((() => {
                EW(KW(WW, "network-request-failed"))
              }), Rm.get());
              hm()[qm] = () => {
                hm().clearTimeout(NW), delete hm()[qm];
                const mW = hm().grecaptcha;
                if (!mW || !Si(mW)) return void EW(KW(WW, "internal-error"));
                const PW = mW.render;
                mW.render = (WW, iW) => {
                  const OW = PW(WW, iW);
                  return this.counter++, OW
                }, this.hostLanguage = iW, OW(mW)
              };
              Ti(`https://www.google.com/recaptcha/api.js??${(0,mW.$)({onload:qm,render:"explicit",hl:iW})}`).catch((() => {
                clearTimeout(NW), EW(KW(WW, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(WW) {
            var iW;
            return !!(null === (iW = hm().grecaptcha) || void 0 === iW ? void 0 : iW.render) && (WW === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class Im {
          async load(WW) {
            return new Xm(WW)
          }
          clearedOneInstance() {}
        }
        const am = "recaptcha",
          rm = {
            theme: "light",
            type: "image"
          };
        class zm {
          constructor(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, rm),
              OW = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = iW, this.type = am, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = di(OW), this.isInvisible = "invisible" === this.parameters.size, TW("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const mW = "string" === typeof WW ? document.getElementById(WW) : WW;
            TW(mW, this.auth, "argument-error"), this.container = mW, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new Im : new Gm, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const WW = await this.render(),
              iW = this.getAssertedRecaptcha(),
              OW = iW.getResponse(WW);
            return OW || new Promise((OW => {
              const mW = WW => {
                WW && (this.tokenChangeListeners.delete(mW), OW(WW))
              };
              this.tokenChangeListeners.add(mW), this.isInvisible && iW.execute(WW)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (WW) {
              return Promise.reject(WW)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((WW => {
              throw this.renderPromise = null, WW
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((WW => {
              this.container.removeChild(WW)
            }))
          }
          validateStartingState() {
            TW(!this.parameters.sitekey, this.auth, "argument-error"), TW(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), TW("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(WW) {
            return iW => {
              if (this.tokenChangeListeners.forEach((WW => WW(iW))), "function" === typeof WW) WW(iW);
              else if ("string" === typeof WW) {
                const OW = hm()[WW];
                "function" === typeof OW && OW(iW)
              }
            }
          }
          assertNotDestroyed() {
            TW(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let WW = this.container;
              if (!this.isInvisible) {
                const iW = document.createElement("div");
                WW.appendChild(iW), WW = iW
              }
              this.widgetId = this.getAssertedRecaptcha().render(WW, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            TW(nW() && !Hm(), this.auth, "internal-error"), await
            function() {
              let WW = null;
              return new Promise((iW => {
                "complete" !== document.readyState ? (WW = () => iW(), window.addEventListener("load", WW)) : iW()
              })).catch((iW => {
                throw WW && window.removeEventListener("load", WW), iW
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const WW = await async function(WW) {
              return (await VW(WW, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            TW(WW, this.auth, "internal-error"), this.parameters.sitekey = WW
          }
          getAssertedRecaptcha() {
            return TW(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class Fm {
          constructor(WW, iW) {
            this.verificationId = WW, this.onConfirmation = iW
          }
          confirm(WW) {
            const iW = Fi._fromVerification(this.verificationId, WW);
            return this.onConfirmation(iW)
          }
        }
        async function Qm(WW, iW, OW) {
          const EW = di(WW),
            NW = await OE(EW, iW, (0, mW.J)(OW));
          return new Fm(NW, (WW => YO(EW, WW)))
        }
        async function WE(WW, iW, OW) {
          const EW = (0, mW.J)(WW);
          await MO(!1, EW, "phone");
          const NW = await OE(EW.auth, iW, (0, mW.J)(OW));
          return new Fm(NW, (WW => yO(EW, WW)))
        }
        async function iE(WW, iW, OW) {
          const EW = (0, mW.J)(WW),
            NW = await OE(EW.auth, iW, (0, mW.J)(OW));
          return new Fm(NW, (WW => TO(EW, WW)))
        }
        async function OE(WW, iW, OW) {
          var mW;
          const EW = await OW.verify();
          try {
            let NW;
            if (TW("string" === typeof EW, WW, "argument-error"), TW(OW.type === am, WW, "argument-error"), NW = "string" === typeof iW ? {
                phoneNumber: iW
              } : iW, "session" in NW) {
              const iW = NW.session;
              if ("phoneNumber" in NW) {
                TW("enroll" === iW.type, WW, "internal-error");
                const OW = await
                function(WW, iW) {
                  return VW(WW, "POST", "/v2/accounts/mfaEnrollment:start", DW(WW, iW))
                }(WW, {
                  idToken: iW.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: NW.phoneNumber,
                    recaptchaToken: EW
                  }
                });
                return OW.phoneSessionInfo.sessionInfo
              } {
                TW("signin" === iW.type, WW, "internal-error");
                const OW = (null === (mW = NW.multiFactorHint) || void 0 === mW ? void 0 : mW.uid) || NW.multiFactorUid;
                TW(OW, WW, "missing-multi-factor-info");
                const PW = await
                function(WW, iW) {
                  return VW(WW, "POST", "/v2/accounts/mfaSignIn:start", DW(WW, iW))
                }(WW, {
                  mfaPendingCredential: iW.credential,
                  mfaEnrollmentId: OW,
                  phoneSignInInfo: {
                    recaptchaToken: EW
                  }
                });
                return PW.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: iW
              } = await async function(WW, iW) {
                return VW(WW, "POST", "/v1/accounts:sendVerificationCode", DW(WW, iW))
              }(WW, {
                phoneNumber: NW.phoneNumber,
                recaptchaToken: EW
              });
              return iW
            }
          } finally {
            OW._reset()
          }
        }
        async function mE(WW, iW) {
          await sO((0, mW.J)(WW), iW)
        }
        class EE {
          constructor(WW) {
            this.providerId = EE.PROVIDER_ID, this.auth = di(WW)
          }
          verifyPhoneNumber(WW, iW) {
            return OE(this.auth, WW, (0, mW.J)(iW))
          }
          static credential(WW, iW) {
            return Fi._fromVerification(WW, iW)
          }
          static credentialFromResult(WW) {
            const iW = WW;
            return EE.credentialFromTaggedObject(iW)
          }
          static credentialFromError(WW) {
            return EE.credentialFromTaggedObject(WW.customData || {})
          }
          static credentialFromTaggedObject(WW) {
            let {
              _tokenResponse: iW
            } = WW;
            if (!iW) return null;
            const {
              phoneNumber: OW,
              temporaryProof: mW
            } = iW;
            return OW && mW ? Fi._fromTokenResponse(OW, mW) : null
          }
        }

        function NE(WW, iW) {
          return iW ? Ni(iW) : (TW(WW._popupRedirectResolver, WW, "argument-error"), WW._popupRedirectResolver)
        }
        EE.PROVIDER_ID = "phone", EE.PHONE_SIGN_IN_METHOD = "phone";
        class PE extends fi {
          constructor(WW) {
            super("custom", "custom"), this.params = WW
          }
          _getIdTokenResponse(WW) {
            return ai(WW, this._buildIdpRequest())
          }
          _linkToIdToken(WW, iW) {
            return ai(WW, this._buildIdpRequest(iW))
          }
          _getReauthenticationResolver(WW) {
            return ai(WW, this._buildIdpRequest())
          }
          _buildIdpRequest(WW) {
            const iW = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return WW && (iW.idToken = WW), iW
          }
        }

        function LE(WW) {
          return SO(WW.auth, new PE(WW), WW.bypassAuthState)
        }

        function cE(WW) {
          const {
            auth: iW,
            user: OW
          } = WW;
          return TW(OW, iW, "internal-error"), KO(OW, new PE(WW), WW.bypassAuthState)
        }
        async function wE(WW) {
          const {
            auth: iW,
            user: OW
          } = WW;
          return TW(OW, iW, "internal-error"), sO(OW, new PE(WW), WW.bypassAuthState)
        }
        class tE {
          constructor(WW, iW, OW, mW) {
            let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = WW, this.resolver = OW, this.user = mW, this.bypassAuthState = EW, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(iW) ? iW : [iW]
          }
          execute() {
            return new Promise((async (WW, iW) => {
              this.pendingPromise = {
                resolve: WW,
                reject: iW
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (OW) {
                this.reject(OW)
              }
            }))
          }
          async onAuthEvent(WW) {
            const {
              urlResponse: iW,
              sessionId: OW,
              postBody: mW,
              tenantId: EW,
              error: NW,
              type: PW
            } = WW;
            if (NW) return void this.reject(NW);
            const LW = {
              auth: this.auth,
              requestUri: iW,
              sessionId: OW,
              tenantId: EW || void 0,
              postBody: mW || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(PW)(LW))
            } catch (cW) {
              this.reject(cW)
            }
          }
          onError(WW) {
            this.reject(WW)
          }
          getIdpTask(WW) {
            switch (WW) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return LE;
              case "linkViaPopup":
              case "linkViaRedirect":
                return wE;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return cE;
              default:
                MW(this.auth, "internal-error")
            }
          }
          resolve(WW) {
            hW(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(WW), this.unregisterAndCleanUp()
          }
          reject(WW) {
            hW(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(WW), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const ZE = new oW(2e3, 1e4);
        async function xE(WW, iW, OW) {
          const mW = di(WW);
          YW(WW, iW, OO);
          const EW = NE(mW, OW);
          return new bE(mW, "signInViaPopup", iW, EW).executeNotNull()
        }
        async function lE(WW, iW, OW) {
          const EW = (0, mW.J)(WW);
          YW(EW.auth, iW, OO);
          const NW = NE(EW.auth, OW);
          return new bE(EW.auth, "reauthViaPopup", iW, NW, EW).executeNotNull()
        }
        async function AE(WW, iW, OW) {
          const EW = (0, mW.J)(WW);
          YW(EW.auth, iW, OO);
          const NW = NE(EW.auth, OW);
          return new bE(EW.auth, "linkViaPopup", iW, NW, EW).executeNotNull()
        }
        class bE extends tE {
          constructor(WW, iW, OW, mW, EW) {
            super(WW, iW, mW, EW), this.provider = OW, this.authWindow = null, this.pollId = null, bE.currentPopupAction && bE.currentPopupAction.cancel(), bE.currentPopupAction = this
          }
          async executeNotNull() {
            const WW = await this.execute();
            return TW(WW, this.auth, "internal-error"), WW
          }
          async onExecution() {
            hW(1 === this.filter.length, "Popup operations only handle one event");
            const WW = Tm();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], WW), this.authWindow.associatedEvent = WW, this.resolver._originValidation(this.auth).catch((WW => {
              this.reject(WW)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (WW => {
              WW || this.reject(KW(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var WW;
            return (null === (WW = this.authWindow) || void 0 === WW ? void 0 : WW.associatedEvent) || null
          }
          cancel() {
            this.reject(KW(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, bE.currentPopupAction = null
          }
          pollUserCancellation() {
            const WW = () => {
              var iW, OW;
              (null === (OW = null === (iW = this.authWindow) || void 0 === iW ? void 0 : iW.window) || void 0 === OW ? void 0 : OW.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(KW(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(WW, ZE.get())
            };
            WW()
          }
        }
        bE.currentPopupAction = null;
        const jE = "pendingRedirect",
          UE = new Map;
        class kE extends tE {
          constructor(WW, iW) {
            super(WW, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], iW, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let WW = UE.get(this.auth._key());
            if (!WW) {
              try {
                const iW = await async function(WW, iW) {
                  const OW = SE(iW),
                    mW = KE(WW);
                  if (!await mW._isAvailable()) return !1;
                  const EW = "true" === await mW._get(OW);
                  return await mW._remove(OW), EW
                }(this.resolver, this.auth) ? await super.execute() : null;
                WW = () => Promise.resolve(iW)
              } catch (iW) {
                WW = () => Promise.reject(iW)
              }
              UE.set(this.auth._key(), WW)
            }
            return this.bypassAuthState || UE.set(this.auth._key(), (() => Promise.resolve(null))), WW()
          }
          async onAuthEvent(WW) {
            if ("signInViaRedirect" === WW.type) return super.onAuthEvent(WW);
            if ("unknown" !== WW.type) {
              if (WW.eventId) {
                const iW = await this.auth._redirectUserForId(WW.eventId);
                if (iW) return this.user = iW, super.onAuthEvent(WW);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function sE(WW, iW) {
          return KE(WW)._set(SE(iW), "true")
        }

        function ME(WW, iW) {
          UE.set(WW._key(), iW)
        }

        function KE(WW) {
          return Ni(WW._redirectPersistence)
        }

        function SE(WW) {
          return ci(jE, WW.config.apiKey, WW.name)
        }

        function YE(WW, iW, OW) {
          return async function(WW, iW, OW) {
            const mW = di(WW);
            YW(WW, iW, OO), await mW._initializationPromise;
            const EW = NE(mW, OW);
            return await sE(EW, mW), EW._openRedirect(mW, iW, "signInViaRedirect")
          }(WW, iW, OW)
        }

        function yE(WW, iW, OW) {
          return async function(WW, iW, OW) {
            const EW = (0, mW.J)(WW);
            YW(EW.auth, iW, OO), await EW.auth._initializationPromise;
            const NW = NE(EW.auth, OW);
            await sE(NW, EW.auth);
            const PW = await HE(EW);
            return NW._openRedirect(EW.auth, iW, "reauthViaRedirect", PW)
          }(WW, iW, OW)
        }

        function TE(WW, iW, OW) {
          return async function(WW, iW, OW) {
            const EW = (0, mW.J)(WW);
            YW(EW.auth, iW, OO), await EW.auth._initializationPromise;
            const NW = NE(EW.auth, OW);
            await MO(!1, EW, iW.providerId), await sE(NW, EW.auth);
            const PW = await HE(EW);
            return NW._openRedirect(EW.auth, iW, "linkViaRedirect", PW)
          }(WW, iW, OW)
        }
        async function JE(WW, iW) {
          return await di(WW)._initializationPromise, hE(WW, iW, !1)
        }
        async function hE(WW, iW) {
          let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const mW = di(WW),
            EW = NE(mW, iW),
            NW = new kE(mW, EW, OW),
            PW = await NW.execute();
          return PW && !OW && (delete PW.user._redirectEventId, await mW._persistUserIfCurrent(PW.user), await mW._setRedirectUser(null, iW)), PW
        }
        async function HE(WW) {
          const iW = Tm(`${WW.uid}:::`);
          return WW._redirectEventId = iW, await WW.auth._setRedirectUser(WW), await WW.auth._persistUserIfCurrent(WW), iW
        }
        class nE {
          constructor(WW) {
            this.auth = WW, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(WW) {
            this.consumers.add(WW), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, WW) && (this.sendToConsumer(this.queuedRedirectEvent, WW), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(WW) {
            this.consumers.delete(WW)
          }
          onEvent(WW) {
            if (this.hasEventBeenHandled(WW)) return !1;
            let iW = !1;
            return this.consumers.forEach((OW => {
              this.isEventForConsumer(WW, OW) && (iW = !0, this.sendToConsumer(WW, OW), this.saveEventToCache(WW))
            })), this.hasHandledPotentialRedirect || ! function(WW) {
              switch (WW.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return oE(WW);
                default:
                  return !1
              }
            }(WW) || (this.hasHandledPotentialRedirect = !0, iW || (this.queuedRedirectEvent = WW, iW = !0)), iW
          }
          sendToConsumer(WW, iW) {
            var OW;
            if (WW.error && !oE(WW)) {
              const mW = (null === (OW = WW.error.code) || void 0 === OW ? void 0 : OW.split("auth/")[1]) || "internal-error";
              iW.onError(KW(this.auth, mW))
            } else iW.onAuthEvent(WW)
          }
          isEventForConsumer(WW, iW) {
            const OW = null === iW.eventId || !!WW.eventId && WW.eventId === iW.eventId;
            return iW.filter.includes(WW.type) && OW
          }
          hasEventBeenHandled(WW) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(uE(WW))
          }
          saveEventToCache(WW) {
            this.cachedEventUids.add(uE(WW)), this.lastProcessedEventTime = Date.now()
          }
        }

        function uE(WW) {
          return [WW.type, WW.eventId, WW.sessionId, WW.tenantId].filter((WW => WW)).join("-")
        }

        function oE(WW) {
          let {
            type: iW,
            error: OW
          } = WW;
          return "unknown" === iW && "auth/no-auth-event" === (null === OW || void 0 === OW ? void 0 : OW.code)
        }
        const dE = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          eE = /^https?/;
        async function vE(WW) {
          if (WW.config.emulator) return;
          const {
            authorizedDomains: iW
          } = await async function(WW) {
            return VW(WW, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(WW);
          for (const mW of iW) try {
            if (gE(mW)) return
          } catch (OW) {}
          MW(WW, "unauthorized-domain")
        }

        function gE(WW) {
          const iW = HW(),
            {
              protocol: OW,
              hostname: mW
            } = new URL(iW);
          if (WW.startsWith("chrome-extension://")) {
            const EW = new URL(WW);
            return "" === EW.hostname && "" === mW ? "chrome-extension:" === OW && WW.replace("chrome-extension://", "") === iW.replace("chrome-extension://", "") : "chrome-extension:" === OW && EW.hostname === mW
          }
          if (!eE.test(OW)) return !1;
          if (dE.test(WW)) return mW === WW;
          const EW = WW.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + EW + "|" + EW + ")$", "i").test(mW)
        }
        const DE = new oW(3e4, 6e4);

        function VE() {
          const WW = hm().___jsl;
          if (null === WW || void 0 === WW ? void 0 : WW.H)
            for (const iW of Object.keys(WW.H))
              if (WW.H[iW].r = WW.H[iW].r || [], WW.H[iW].L = WW.H[iW].L || [], WW.H[iW].r = [...WW.H[iW].L], WW.CP)
                for (let OW = 0; OW < WW.CP.length; OW++) WW.CP[OW] = null
        }
        let pE = null;

        function fE(WW) {
          return pE = pE || function(WW) {
            return new Promise(((iW, OW) => {
              var mW, EW, NW;

              function PW() {
                VE(), gapi.load("gapi.iframes", {
                  callback: () => {
                    iW(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    VE(), OW(KW(WW, "network-request-failed"))
                  },
                  timeout: DE.get()
                })
              }
              if (null === (EW = null === (mW = hm().gapi) || void 0 === mW ? void 0 : mW.iframes) || void 0 === EW ? void 0 : EW.Iframe) iW(gapi.iframes.getContext());
              else {
                if (!(null === (NW = hm().gapi) || void 0 === NW ? void 0 : NW.load)) {
                  const iW = Ji("iframefcb");
                  return hm()[iW] = () => {
                    gapi.load ? PW() : OW(KW(WW, "network-request-failed"))
                  }, Ti(`https://apis.google.com/js/api.js?onload=${iW}`).catch((WW => OW(WW)))
                }
                PW()
              }
            })).catch((WW => {
              throw pE = null, WW
            }))
          }(WW), pE
        }
        const CE = new oW(5e3, 15e3),
          XE = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          BE = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function qE(WW) {
          const iW = WW.config;
          TW(iW.authDomain, WW, "auth-domain-config-required");
          const OW = iW.emulator ? dW(iW, "emulator/auth/iframe") : `https://${WW.config.authDomain}/__/auth/iframe`,
            NW = {
              apiKey: iW.apiKey,
              appName: WW.name,
              v: EW.f
            },
            PW = BE.get(WW.config.apiHost);
          PW && (NW.eid = PW);
          const LW = WW._getFrameworks();
          return LW.length && (NW.fw = LW.join(",")), `${OW}?${(0,mW.$)(NW).slice(1)}`
        }
        const RE = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class GE {
          constructor(WW) {
            this.window = WW, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (WW) {}
          }
        }

        function IE(WW, iW, OW) {
          let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const PW = Math.max((window.screen.availHeight - NW) / 2, 0).toString(),
            LW = Math.max((window.screen.availWidth - EW) / 2, 0).toString();
          let cW = "";
          const wW = Object.assign(Object.assign({}, RE), {
              width: EW.toString(),
              height: NW.toString(),
              top: PW,
              left: LW
            }),
            tW = (0, mW.L)().toLowerCase();
          OW && (cW = li(tW) ? "_blank" : OW), Zi(tW) && (iW = iW || "http://localhost", wW.scrollbars = "yes");
          const ZW = Object.entries(wW).reduce(((WW, iW) => {
            let [OW, mW] = iW;
            return `${WW}${OW}=${mW},`
          }), "");
          if (function() {
              var WW;
              return ki(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, mW.L)()) && !!(null === (WW = window.navigator) || void 0 === WW ? void 0 : WW.standalone)
            }(tW) && "_self" !== cW) return function(WW, iW) {
            const OW = document.createElement("a");
            OW.href = WW, OW.target = iW;
            const mW = document.createEvent("MouseEvent");
            mW.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), OW.dispatchEvent(mW)
          }(iW || "", cW), new GE(null);
          const xW = window.open(iW || "", cW, ZW);
          TW(xW, WW, "popup-blocked");
          try {
            xW.focus()
          } catch (lW) {}
          return new GE(xW)
        }
        const aE = "__/auth/handler",
          rE = "emulator/auth/handler",
          zE = encodeURIComponent("fac");
        async function FE(WW, iW, OW, NW, PW, LW) {
            TW(WW.config.authDomain, WW, "auth-domain-config-required"), TW(WW.config.apiKey, WW, "invalid-api-key");
            const cW = {
              apiKey: WW.config.apiKey,
              appName: WW.name,
              authType: OW,
              redirectUrl: NW,
              v: EW.f,
              eventId: PW
            };
            if (iW instanceof OO) {
              iW.setDefaultLanguage(WW.languageCode), cW.providerId = iW.providerId || "", (0, mW.P)(iW.getCustomParameters()) || (cW.customParameters = JSON.stringify(iW.getCustomParameters()));
              for (const [WW, iW] of Object.entries(LW || {})) cW[WW] = iW
            }
            if (iW instanceof mO) {
              const WW = iW.getScopes().filter((WW => "" !== WW));
              WW.length > 0 && (cW.scopes = WW.join(","))
            }
            WW.tenantId && (cW.tid = WW.tenantId);
            const wW = cW;
            for (const mW of Object.keys(wW)) void 0 === wW[mW] && delete wW[mW];
            const tW = await WW._getAppCheckToken(),
              ZW = tW ? `#${zE}=${encodeURIComponent(tW)}` : "";
            return `${function(WW){let{config:iW}=WW;if(!iW.emulator)return`
            https: //${iW.authDomain}/${aE}`;return dW(iW,rE)}(WW)}?${(0,mW.$)(wW).slice(1)}${ZW}`}const QE="webStorageSupport";const WN=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ym,this._completeRedirectFn=hE,this._overrideRedirectResult=ME}async _openPopup(WW,iW,OW,mW){var EW;hW(null===(EW=this.eventManagers[WW._key()])||void 0===EW?void 0:EW.manager,"_initialize() not called before _openPopup()");return IE(WW,await FE(WW,iW,OW,HW(),mW),Tm())}async _openRedirect(WW,iW,OW,mW){await this._originValidation(WW);return function(WW){hm().location.href=WW}(await FE(WW,iW,OW,HW(),mW)),new Promise((()=>{}))}_initialize(WW){const iW=WW._key();if(this.eventManagers[iW]){const{manager:WW,promise:OW}=this.eventManagers[iW];return WW?Promise.resolve(WW):(hW(OW,"If manager is not set, promise should be"),OW)}const OW=this.initAndGetManager(WW);return this.eventManagers[iW]={promise:OW},OW.catch((()=>{delete this.eventManagers[iW]})),OW}async initAndGetManager(WW){const iW=await async function(WW){const iW=await fE(WW),OW=hm().gapi;return TW(OW,WW,"internal-error"),iW.open({where:document.body,url:qE(WW),messageHandlersFilter:OW.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XE,dontclear:!0},(iW=>new Promise((async(OW,mW)=>{await iW.restyle({setHideOnLeave:!1});const EW=KW(WW,"network-request-failed"),NW=hm().setTimeout((()=>{mW(EW)}),CE.get());function PW(){hm().clearTimeout(NW),OW(iW)}iW.ping(PW).then(PW,(()=>{mW(EW)}))}))))}(WW),OW=new nE(WW);return iW.register("authEvent",(iW=>{TW(null===iW||void 0===iW?void 0:iW.authEvent,WW,"invalid-auth-event");return{status:OW.onEvent(iW.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[WW._key()]={manager:OW},this.iframes[WW._key()]=iW,OW}_isIframeWebStorageSupported(WW,iW){this.iframes[WW._key()].send(QE,{type:QE},(OW=>{var mW;const EW=null===(mW=null===OW||void 0===OW?void 0:OW[0])||void 0===mW?void 0:mW[QE];void 0!==EW&&iW(!!EW),MW(WW,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(WW){const iW=WW._key();return this.originValidationPromises[iW]||(this.originValidationPromises[iW]=vE(WW)),this.originValidationPromises[iW]}get _shouldInitProactively(){return si()||xi()||ki()}};class iN{constructor(WW){this.factorId=WW}_process(WW,iW,OW){switch(iW.type){case"enroll":return this._finalizeEnroll(WW,iW.credential,OW);case"signin":return this._finalizeSignIn(WW,iW.credential);default:return JW("unexpected MultiFactorSessionType")}}}class ON extends iN{constructor(WW){super("phone"),this.credential=WW}static _fromCredential(WW){return new ON(WW)}_finalizeEnroll(WW,iW,OW){return function(WW,iW){return VW(WW,"POST","/v2/accounts/mfaEnrollment:finalize",DW(WW,iW))}(WW,{idToken:iW,displayName:OW,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(WW,iW){return function(WW,iW){return VW(WW,"POST","/v2/accounts/mfaSignIn:finalize",DW(WW,iW))}(WW,{mfaPendingCredential:iW,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class mN{constructor(){}static assertion(WW){return ON._fromCredential(WW)}}mN.FACTOR_ID="phone";class EN{static assertionForEnrollment(WW,iW){return NN._fromSecret(WW,iW)}static assertionForSignIn(WW,iW){return NN._fromEnrollmentId(WW,iW)}static async generateSecret(WW){const iW=WW;TW("undefined"!==typeof iW.auth,"internal-error");const OW=await(mW=iW.auth,EW={idToken:iW.credential,totpEnrollmentInfo:{}},VW(mW,"POST","/v2/accounts/mfaEnrollment:start",DW(mW,EW)));var mW,EW;return PN._fromStartTotpMfaEnrollmentResponse(OW,iW.auth)}}EN.FACTOR_ID="totp";class NN extends iN{constructor(WW,iW,OW){super("totp"),this.otp=WW,this.enrollmentId=iW,this.secret=OW}static _fromSecret(WW,iW){return new NN(iW,void 0,WW)}static _fromEnrollmentId(WW,iW){return new NN(iW,WW)}async _finalizeEnroll(WW,iW,OW){return TW("undefined"!==typeof this.secret,WW,"argument-error"),function(WW,iW){return VW(WW,"POST","/v2/accounts/mfaEnrollment:finalize",DW(WW,iW))}(WW,{idToken:iW,displayName:OW,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(WW,iW){TW(void 0!==this.enrollmentId&&void 0!==this.otp,WW,"argument-error");const OW={verificationCode:this.otp};return function(WW,iW){return VW(WW,"POST","/v2/accounts/mfaSignIn:finalize",DW(WW,iW))}(WW,{mfaPendingCredential:iW,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:OW})}}class PN{constructor(WW,iW,OW,mW,EW,NW,PW){this.sessionInfo=NW,this.auth=PW,this.secretKey=WW,this.hashingAlgorithm=iW,this.codeLength=OW,this.codeIntervalSeconds=mW,this.enrollmentCompletionDeadline=EW}static _fromStartTotpMfaEnrollmentResponse(WW,iW){return new PN(WW.totpSessionInfo.sharedSecretKey,WW.totpSessionInfo.hashingAlgorithm,WW.totpSessionInfo.verificationCodeLength,WW.totpSessionInfo.periodSec,new Date(WW.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),WW.totpSessionInfo.sessionInfo,iW)}_makeTotpVerificationInfo(WW){return{sessionInfo:this.sessionInfo,verificationCode:WW}}generateQrCodeUrl(WW,iW){var OW;let mW=!1;return(LN(WW)||LN(iW))&&(mW=!0),mW&&(LN(WW)&&(WW=(null===(OW=this.auth.currentUser)||void 0===OW?void 0:OW.email)||"unknownuser"),LN(iW)&&(iW=this.auth.name)),`otpauth://totp/${iW}:${WW}?secret=${this.secretKey}&issuer=${iW}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function LN(WW){return"undefined"===typeof WW||0===(null===WW||void 0===WW?void 0:WW.length)}var cN="@firebase/auth",wN="0.23.2";class tN{constructor(WW){this.auth=WW,this.internalListeners=new Map}getUid(){var WW;return this.assertAuthConfigured(),(null===(WW=this.auth.currentUser)||void 0===WW?void 0:WW.uid)||null}async getToken(WW){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(WW)}}addAuthTokenListener(WW){if(this.assertAuthConfigured(),this.internalListeners.has(WW))return;const iW=this.auth.onIdTokenChanged((iW=>{WW((null===iW||void 0===iW?void 0:iW.stsTokenManager.accessToken)||null)}));this.internalListeners.set(WW,iW),this.updateProactiveRefresh()}removeAuthTokenListener(WW){this.assertAuthConfigured();const iW=this.internalListeners.get(WW);iW&&(this.internalListeners.delete(WW),iW(),this.updateProactiveRefresh())}assertAuthConfigured(){TW(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const ZN=(0,mW.I)("authIdTokenMaxAge")||300;let xN=null;const lN=WW=>async iW=>{const OW=iW&&await iW.getIdTokenResult(),mW=OW&&((new Date).getTime()-Date.parse(OW.issuedAtTime))/1e3;if(mW&&mW>ZN)return;const EW=null===OW||void 0===OW?void 0:OW.token;xN!==EW&&(xN=EW,await fetch(WW,{method:EW?"POST":"DELETE",headers:EW?{Authorization:`Bearer ${EW}`}:{}}))};function AN(){let WW=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,EW.N)();const iW=(0,EW.B)(WW,"auth");if(iW.isInitialized())return iW.getImmediate();const OW=vi(WW,{popupRedirectResolver:WN,persistence:[fm,Km,Ym]}),NW=(0,mW.I)("authTokenSyncURL");if(NW){const WW=lN(NW);Pm(OW,WW,(()=>WW(OW.currentUser))),Nm(OW,(iW=>WW(iW)))}const PW=(0,mW.H)("auth");return PW&&gi(OW,`http://${PW}`),OW}var bN;bN="Browser",(0,EW.E)(new LW.h("auth",((WW,iW)=>{let{options:OW}=iW;const mW=WW.getProvider("app").getImmediate(),EW=WW.getProvider("heartbeat"),NW=WW.getProvider("app-check-internal"),{apiKey:PW,authDomain:LW}=mW.options;TW(PW&&!PW.includes(":"),"invalid-api-key",{appName:mW.name});const cW={apiKey:PW,authDomain:LW,clientPlatform:bN,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mi(bN)},wW=new oi(mW,EW,NW,cW);return function(WW,iW){const OW=(null===iW||void 0===iW?void 0:iW.persistence)||[],mW=(Array.isArray(OW)?OW:[OW]).map(Ni);(null===iW||void 0===iW?void 0:iW.errorMap)&&WW._updateErrorMap(iW.errorMap),WW._initializeWithPersistence(mW,null===iW||void 0===iW?void 0:iW.popupRedirectResolver)}(wW,OW),wW}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((WW,iW,OW)=>{WW.getProvider("auth-internal").initialize()}))),(0,EW.E)(new LW.h("auth-internal",(WW=>(WW=>new tN(WW))(di(WW.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,EW.V)(cN,wN,function(WW){switch(WW){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(bN)),(0,EW.V)(cN,wN,"esm2017")}};Object.freeze(modules);for(const WW in modules)Object.freeze(modules[WW]);