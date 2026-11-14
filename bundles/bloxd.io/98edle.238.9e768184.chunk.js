/*! For license information please see 98edle.238.9e768184.chunk.js.LICENSE.txt */
export const id = 238;
export const ids = [238];
export const modules = {
    38118: (WW, RW, MW) => {
        MW.r(RW), MW.d(RW, {
          ActionCodeOperation: () => tR,
          ActionCodeURL: () => qM,
          AuthCredential: () => VR,
          AuthErrorCodes: () => JW,
          EmailAuthCredential: () => nR,
          EmailAuthProvider: () => SR,
          FacebookAuthProvider: () => wM,
          FactorId: () => yR,
          GithubAuthProvider: () => zw,
          GoogleAuthProvider: () => CM,
          OAuthCredential: () => LR,
          OAuthProvider: () => MM,
          OperationType: () => BW,
          PhoneAuthCredential: () => DR,
          PhoneAuthProvider: () => RC,
          PhoneMultiFactorGenerator: () => Wz,
          ProviderId: () => NW,
          RecaptchaVerifier: () => Lw,
          SAMLAuthProvider: () => bw,
          SignInMethod: () => eW,
          TotpMultiFactorGenerator: () => Rz,
          TotpSecret: () => wz,
          TwitterAuthProvider: () => yw,
          applyActionCode: () => sM,
          beforeAuthStateChanged: () => Cw,
          browserLocalPersistence: () => Iw,
          browserPopupRedirectResolver: () => qz,
          browserSessionPersistence: () => lw,
          checkActionCode: () => dM,
          confirmPasswordReset: () => aw,
          connectAuthEmulator: () => hR,
          createUserWithEmailAndPassword: () => hM,
          debugErrorMap: () => gR,
          deleteUser: () => Nw,
          fetchSignInMethodsForEmail: () => xw,
          getAdditionalUserInfo: () => Ww,
          getAuth: () => Bz,
          getIdToken: () => nW,
          getIdTokenResult: () => GW,
          getMultiFactorResolver: () => tC,
          getRedirectResult: () => fC,
          inMemoryPersistence: () => bM,
          indexedDBLocalPersistence: () => Ew,
          initializeAuth: () => pR,
          initializeRecaptchaConfig: () => Mw,
          isSignInWithEmailLink: () => VM,
          linkWithCredential: () => FM,
          linkWithPhoneNumber: () => qC,
          linkWithPopup: () => BC,
          linkWithRedirect: () => FC,
          multiFactor: () => iC,
          onAuthStateChanged: () => zC,
          onIdTokenChanged: () => ww,
          parseActionCodeURL: () => ZR,
          prodErrorMap: () => iR,
          reauthenticateWithCredential: () => fM,
          reauthenticateWithPhoneNumber: () => Zw,
          reauthenticateWithPopup: () => eC,
          reauthenticateWithRedirect: () => lC,
          reload: () => WR,
          sendEmailVerification: () => vw,
          sendPasswordResetEmail: () => kw,
          sendSignInLinkToEmail: () => EM,
          setPersistence: () => Rw,
          signInAnonymously: () => tw,
          signInWithCredential: () => lM,
          signInWithCustomToken: () => QM,
          signInWithEmailAndPassword: () => UM,
          signInWithEmailLink: () => mw,
          signInWithPhoneNumber: () => Dw,
          signInWithPopup: () => NC,
          signInWithRedirect: () => oC,
          signOut: () => yC,
          unlink: () => YM,
          updateCurrentUser: () => bC,
          updateEmail: () => OM,
          updatePassword: () => nM,
          updatePhoneNumber: () => WC,
          updateProfile: () => uM,
          useDeviceLanguage: () => Aw,
          verifyBeforeUpdateEmail: () => KM,
          verifyPasswordResetCode: () => pM
        });
        var wW = MW(38103),
          CW = MW(38097);

        function zR(WW, RW) {
          var MW = {};
          for (var wW in WW) Object.prototype.hasOwnProperty.call(WW, wW) && RW.indexOf(wW) < 0 && (MW[wW] = WW[wW]);
          if (null != WW && "function" === typeof Object.getOwnPropertySymbols) {
            var CW = 0;
            for (wW = Object.getOwnPropertySymbols(WW); CW < wW.length; CW++) RW.indexOf(wW[CW]) < 0 && Object.prototype.propertyIsEnumerable.call(WW, wW[CW]) && (MW[wW[CW]] = WW[wW[CW]])
          }
          return MW
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var AW = MW(38106),
          bR = MW(38101);
        const yR = {
            PHONE: "phone",
            TOTP: "totp"
          },
          NW = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          eW = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          BW = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          tR = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function TW() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const gR = function() {
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
          iR = TW,
          YW = new wW.g("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          JW = {
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
          PW = new AW.f("@firebase/auth");

        function IW(WW) {
          if (PW.logLevel <= AW.e.ERROR) {
            for (var RW = arguments.length, MW = new Array(RW > 1 ? RW - 1 : 0), wW = 1; wW < RW; wW++) MW[wW - 1] = arguments[wW];
            PW.error(`Auth (${CW.d}): ${WW}`, ...MW)
          }
        }

        function oW(WW) {
          for (var RW = arguments.length, MW = new Array(RW > 1 ? RW - 1 : 0), wW = 1; wW < RW; wW++) MW[wW - 1] = arguments[wW];
          throw QW(WW, ...MW)
        }

        function lW(WW) {
          for (var RW = arguments.length, MW = new Array(RW > 1 ? RW - 1 : 0), wW = 1; wW < RW; wW++) MW[wW - 1] = arguments[wW];
          return QW(WW, ...MW)
        }

        function FW(WW, RW, MW) {
          const CW = Object.assign(Object.assign({}, iR()), {
            [RW]: MW
          });
          return new wW.g("auth", "Firebase", CW).create(RW, {
            appName: WW.name
          })
        }

        function fW(WW, RW, MW) {
          if (!(RW instanceof MW)) throw MW.name !== RW.constructor.name && oW(WW, "argument-error"), FW(WW, "argument-error", `Type of ${RW.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function QW(WW) {
          for (var RW = arguments.length, MW = new Array(RW > 1 ? RW - 1 : 0), wW = 1; wW < RW; wW++) MW[wW - 1] = arguments[wW];
          if ("string" !== typeof WW) {
            const RW = MW[0],
              wW = [...MW.slice(1)];
            return wW[0] && (wW[0].appName = WW.name), WW._errorFactory.create(RW, ...wW)
          }
          return YW.create(WW, ...MW)
        }

        function rR(WW, RW) {
          if (!WW) {
            for (var MW = arguments.length, wW = new Array(MW > 2 ? MW - 2 : 0), CW = 2; CW < MW; CW++) wW[CW - 2] = arguments[CW];
            throw QW(RW, ...wW)
          }
        }

        function cR(WW) {
          const RW = "INTERNAL ASSERTION FAILED: " + WW;
          throw IW(RW), new Error(RW)
        }

        function XW(WW, RW) {
          WW || cR(RW)
        }

        function jR() {
          var WW;
          return "undefined" !== typeof self && (null === (WW = self.location) || void 0 === WW ? void 0 : WW.href) || ""
        }

        function kR() {
          return "http:" === aR() || "https:" === aR()
        }

        function aR() {
          var WW;
          return "undefined" !== typeof self && (null === (WW = self.location) || void 0 === WW ? void 0 : WW.protocol) || null
        }
        class sW {
          constructor(WW, RW) {
            this.shortDelay = WW, this.longDelay = RW, XW(RW > WW, "Short delay should be less than long delay!"), this.isMobile = (0, wW.bb)() || (0, wW.cb)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (kR() || (0, wW.Q)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function dW(WW, RW) {
          XW(WW.emulator, "Emulator should always be set here");
          const {
            url: MW
          } = WW.emulator;
          return RW ? `${MW}${RW.startsWith("/")?RW.slice(1):RW}` : MW
        }
        class pW {
          static initialize(WW, RW, MW) {
            this.fetchImpl = WW, RW && (this.headersImpl = RW), MW && (this.responseImpl = MW)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void cR("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void cR("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void cR("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const hW = {
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
          UW = new sW(3e4, 6e4);

        function EW(WW, RW) {
          return WW.tenantId && !RW.tenantId ? Object.assign(Object.assign({}, RW), {
            tenantId: WW.tenantId
          }) : RW
        }
        async function VW(WW, RW, MW, CW) {
          return mR(WW, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let zR = {},
              AW = {};
            CW && ("GET" === RW ? AW = CW : zR = {
              body: JSON.stringify(CW)
            });
            const bR = (0, wW.gb)(Object.assign({
                key: WW.config.apiKey
              }, AW)).slice(1),
              yR = await WW._getAdditionalHeaders();
            return yR["Content-Type"] = "application/json", WW.languageCode && (yR["X-Firebase-Locale"] = WW.languageCode), pW.fetch()(vR(WW, WW.config.apiHost, MW, bR), Object.assign({
              method: RW,
              headers: yR,
              referrerPolicy: "no-referrer"
            }, zR))
          }))
        }
        async function mR(WW, RW, MW) {
          WW._canInitEmulator = !1;
          const CW = Object.assign(Object.assign({}, hW), RW);
          try {
            const RW = new KW(WW),
              wW = await Promise.race([MW(), RW.promise]);
            RW.clearNetworkTimeout();
            const zR = await wW.json();
            if ("needConfirmation" in zR) throw uW(WW, "account-exists-with-different-credential", zR);
            if (wW.ok && !("errorMessage" in zR)) return zR;
            {
              const RW = wW.ok ? zR.errorMessage : zR.error.message,
                [MW, AW] = RW.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === MW) throw uW(WW, "credential-already-in-use", zR);
              if ("EMAIL_EXISTS" === MW) throw uW(WW, "email-already-in-use", zR);
              if ("USER_DISABLED" === MW) throw uW(WW, "user-disabled", zR);
              const bR = CW[MW] || MW.toLowerCase().replace(/[_\s]+/g, "-");
              if (AW) throw FW(WW, bR, AW);
              oW(WW, bR)
            }
          } catch (zR) {
            if (zR instanceof wW.h) throw zR;
            oW(WW, "network-request-failed", {
              message: String(zR)
            })
          }
        }
        async function xR(WW, RW, MW, wW) {
          let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const zR = await VW(WW, RW, MW, wW, CW);
          return "mfaPendingCredential" in zR && oW(WW, "multi-factor-auth-required", {
            _serverResponse: zR
          }), zR
        }

        function vR(WW, RW, MW, wW) {
          const CW = `${RW}${MW}?${wW}`;
          return WW.config.emulator ? dW(WW.config, CW) : `${WW.config.apiScheme}://${CW}`
        }
        class KW {
          constructor(WW) {
            this.auth = WW, this.timer = null, this.promise = new Promise(((WW, RW) => {
              this.timer = setTimeout((() => RW(lW(this.auth, "network-request-failed"))), UW.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function uW(WW, RW, MW) {
          const wW = {
            appName: WW.name
          };
          MW.email && (wW.email = MW.email), MW.phoneNumber && (wW.phoneNumber = MW.phoneNumber);
          const CW = lW(WW, RW, wW);
          return CW.customData._tokenResponse = MW, CW
        }

        function OW(WW) {
          if (WW) try {
            const RW = new Date(Number(WW));
            if (!isNaN(RW.getTime())) return RW.toUTCString()
          } catch (RW) {}
        }

        function nW(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, wW.K)(WW).getIdToken(RW)
        }
        async function GW(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const MW = (0, wW.K)(WW),
            CW = await MW.getIdToken(RW),
            zR = HW(CW);
          rR(zR && zR.exp && zR.auth_time && zR.iat, MW.auth, "internal-error");
          const AW = "object" === typeof zR.firebase ? zR.firebase : void 0,
            bR = null === AW || void 0 === AW ? void 0 : AW.sign_in_provider;
          return {
            claims: zR,
            token: CW,
            authTime: OW(LW(zR.auth_time)),
            issuedAtTime: OW(LW(zR.iat)),
            expirationTime: OW(LW(zR.exp)),
            signInProvider: bR || null,
            signInSecondFactor: (null === AW || void 0 === AW ? void 0 : AW.sign_in_second_factor) || null
          }
        }

        function LW(WW) {
          return 1e3 * Number(WW)
        }

        function HW(WW) {
          const [RW, MW, CW] = WW.split(".");
          if (void 0 === RW || void 0 === MW || void 0 === CW) return IW("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const WW = (0, wW.m)(MW);
            return WW ? JSON.parse(WW) : (IW("Failed to decode base64 JWT payload"), null)
          } catch (zR) {
            return IW("Caught error parsing JWT payload as JSON", null === zR || void 0 === zR ? void 0 : zR.toString()), null
          }
        }
        async function DW(WW, RW) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return RW;
          try {
            return await RW
          } catch (MW) {
            throw MW instanceof wW.h && function(WW) {
              let {
                code: RW
              } = WW;
              return "auth/user-disabled" === RW || "auth/user-token-expired" === RW
            }(MW) && WW.auth.currentUser === WW && await WW.auth.signOut(), MW
          }
        }
        class qR {
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
            var RW;
            if (WW) {
              const WW = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), WW
            } {
              this.errorBackoff = 3e4;
              const WW = (null !== (RW = this.user.stsTokenManager.expirationTime) && void 0 !== RW ? RW : 0) - Date.now() - 3e5;
              return Math.max(0, WW)
            }
          }
          schedule() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const RW = this.getInterval(WW);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), RW)
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
        class ZW {
          constructor(WW, RW) {
            this.createdAt = WW, this.lastLoginAt = RW, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = OW(this.lastLoginAt), this.creationTime = OW(this.createdAt)
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
        async function SW(WW) {
          var RW;
          const MW = WW.auth,
            wW = await WW.getIdToken(),
            CW = await DW(WW, async function(WW, RW) {
              return VW(WW, "POST", "/v1/accounts:lookup", RW)
            }(MW, {
              idToken: wW
            }));
          rR(null === CW || void 0 === CW ? void 0 : CW.users.length, MW, "internal-error");
          const AW = CW.users[0];
          WW._notifyReloadListener(AW);
          const bR = (null === (RW = AW.providerUserInfo) || void 0 === RW ? void 0 : RW.length) ? AW.providerUserInfo.map((WW => {
            var {
              providerId: RW
            } = WW, MW = zR(WW, ["providerId"]);
            return {
              providerId: RW,
              uid: MW.rawId || "",
              displayName: MW.displayName || null,
              email: MW.email || null,
              phoneNumber: MW.phoneNumber || null,
              photoURL: MW.photoUrl || null
            }
          })) : [];
          const yR = (NW = WW.providerData, eW = bR, [...NW.filter((WW => !eW.some((RW => RW.providerId === WW.providerId)))), ...eW]);
          var NW, eW;
          const BW = WW.isAnonymous,
            tR = !(WW.email && AW.passwordHash) && !(null === yR || void 0 === yR ? void 0 : yR.length),
            TW = !!BW && tR,
            gR = {
              uid: AW.localId,
              displayName: AW.displayName || null,
              photoURL: AW.photoUrl || null,
              email: AW.email || null,
              emailVerified: AW.emailVerified || !1,
              phoneNumber: AW.phoneNumber || null,
              tenantId: AW.tenantId || null,
              providerData: yR,
              metadata: new ZW(AW.createdAt, AW.lastLoginAt),
              isAnonymous: TW
            };
          Object.assign(WW, gR)
        }
        async function WR(WW) {
          const RW = (0, wW.K)(WW);
          await SW(RW), await RW.auth._persistUserIfCurrent(RW), RW.auth._notifyListenersIfCurrent(RW)
        }
        class RR {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(WW) {
            rR(WW.idToken, "internal-error"), rR("undefined" !== typeof WW.idToken, "internal-error"), rR("undefined" !== typeof WW.refreshToken, "internal-error");
            const RW = "expiresIn" in WW && "undefined" !== typeof WW.expiresIn ? Number(WW.expiresIn) : function(WW) {
              const RW = HW(WW);
              return rR(RW, "internal-error"), rR("undefined" !== typeof RW.exp, "internal-error"), rR("undefined" !== typeof RW.iat, "internal-error"), Number(RW.exp) - Number(RW.iat)
            }(WW.idToken);
            this.updateTokensAndExpiration(WW.idToken, WW.refreshToken, RW)
          }
          async getToken(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return rR(!this.accessToken || this.refreshToken, WW, "user-token-expired"), RW || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(WW, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(WW, RW) {
            const {
              accessToken: MW,
              refreshToken: CW,
              expiresIn: zR
            } = await async function(WW, RW) {
              const MW = await mR(WW, {}, (async () => {
                const MW = (0, wW.gb)({
                    grant_type: "refresh_token",
                    refresh_token: RW
                  }).slice(1),
                  {
                    tokenApiHost: CW,
                    apiKey: zR
                  } = WW.config,
                  AW = vR(WW, CW, "/v1/token", `key=${zR}`),
                  bR = await WW._getAdditionalHeaders();
                return bR["Content-Type"] = "application/x-www-form-urlencoded", pW.fetch()(AW, {
                  method: "POST",
                  headers: bR,
                  body: MW
                })
              }));
              return {
                accessToken: MW.access_token,
                expiresIn: MW.expires_in,
                refreshToken: MW.refresh_token
              }
            }(WW, RW);
            this.updateTokensAndExpiration(MW, CW, Number(zR))
          }
          updateTokensAndExpiration(WW, RW, MW) {
            this.refreshToken = RW || null, this.accessToken = WW || null, this.expirationTime = Date.now() + 1e3 * MW
          }
          static fromJSON(WW, RW) {
            const {
              refreshToken: MW,
              accessToken: wW,
              expirationTime: CW
            } = RW, zR = new RR;
            return MW && (rR("string" === typeof MW, "internal-error", {
              appName: WW
            }), zR.refreshToken = MW), wW && (rR("string" === typeof wW, "internal-error", {
              appName: WW
            }), zR.accessToken = wW), CW && (rR("number" === typeof CW, "internal-error", {
              appName: WW
            }), zR.expirationTime = CW), zR
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
            return Object.assign(new RR, this.toJSON())
          }
          _performRefresh() {
            return cR("not implemented")
          }
        }

        function MR(WW, RW) {
          rR("string" === typeof WW || "undefined" === typeof WW, "internal-error", {
            appName: RW
          })
        }
        class wR {
          constructor(WW) {
            var {
              uid: RW,
              auth: MW,
              stsTokenManager: wW
            } = WW, CW = zR(WW, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new qR(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = RW, this.auth = MW, this.stsTokenManager = wW, this.accessToken = wW.accessToken, this.displayName = CW.displayName || null, this.email = CW.email || null, this.emailVerified = CW.emailVerified || !1, this.phoneNumber = CW.phoneNumber || null, this.photoURL = CW.photoURL || null, this.isAnonymous = CW.isAnonymous || !1, this.tenantId = CW.tenantId || null, this.providerData = CW.providerData ? [...CW.providerData] : [], this.metadata = new ZW(CW.createdAt || void 0, CW.lastLoginAt || void 0)
          }
          async getIdToken(WW) {
            const RW = await DW(this, this.stsTokenManager.getToken(this.auth, WW));
            return rR(RW, this.auth, "internal-error"), this.accessToken !== RW && (this.accessToken = RW, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), RW
          }
          getIdTokenResult(WW) {
            return GW(this, WW)
          }
          reload() {
            return WR(this)
          }
          _assign(WW) {
            this !== WW && (rR(this.uid === WW.uid, this.auth, "internal-error"), this.displayName = WW.displayName, this.photoURL = WW.photoURL, this.email = WW.email, this.emailVerified = WW.emailVerified, this.phoneNumber = WW.phoneNumber, this.isAnonymous = WW.isAnonymous, this.tenantId = WW.tenantId, this.providerData = WW.providerData.map((WW => Object.assign({}, WW))), this.metadata._copy(WW.metadata), this.stsTokenManager._assign(WW.stsTokenManager))
          }
          _clone(WW) {
            const RW = new wR(Object.assign(Object.assign({}, this), {
              auth: WW,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return RW.metadata._copy(this.metadata), RW
          }
          _onReload(WW) {
            rR(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = WW, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
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
            let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              MW = !1;
            WW.idToken && WW.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(WW), MW = !0), RW && await SW(this), await this.auth._persistUserIfCurrent(this), MW && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const WW = await this.getIdToken();
            return await DW(this, async function(WW, RW) {
              return VW(WW, "POST", "/v1/accounts:delete", RW)
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
          static _fromJSON(WW, RW) {
            var MW, wW, CW, zR, AW, bR, yR, NW;
            const eW = null !== (MW = RW.displayName) && void 0 !== MW ? MW : void 0,
              BW = null !== (wW = RW.email) && void 0 !== wW ? wW : void 0,
              tR = null !== (CW = RW.phoneNumber) && void 0 !== CW ? CW : void 0,
              TW = null !== (zR = RW.photoURL) && void 0 !== zR ? zR : void 0,
              gR = null !== (AW = RW.tenantId) && void 0 !== AW ? AW : void 0,
              iR = null !== (bR = RW._redirectEventId) && void 0 !== bR ? bR : void 0,
              YW = null !== (yR = RW.createdAt) && void 0 !== yR ? yR : void 0,
              JW = null !== (NW = RW.lastLoginAt) && void 0 !== NW ? NW : void 0,
              {
                uid: PW,
                emailVerified: IW,
                isAnonymous: oW,
                providerData: lW,
                stsTokenManager: FW
              } = RW;
            rR(PW && FW, WW, "internal-error");
            const fW = RR.fromJSON(this.name, FW);
            rR("string" === typeof PW, WW, "internal-error"), MR(eW, WW.name), MR(BW, WW.name), rR("boolean" === typeof IW, WW, "internal-error"), rR("boolean" === typeof oW, WW, "internal-error"), MR(tR, WW.name), MR(TW, WW.name), MR(gR, WW.name), MR(iR, WW.name), MR(YW, WW.name), MR(JW, WW.name);
            const QW = new wR({
              uid: PW,
              auth: WW,
              email: BW,
              emailVerified: IW,
              displayName: eW,
              isAnonymous: oW,
              photoURL: TW,
              phoneNumber: tR,
              tenantId: gR,
              stsTokenManager: fW,
              createdAt: YW,
              lastLoginAt: JW
            });
            return lW && Array.isArray(lW) && (QW.providerData = lW.map((WW => Object.assign({}, WW)))), iR && (QW._redirectEventId = iR), QW
          }
          static async _fromIdTokenResponse(WW, RW) {
            let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const wW = new RR;
            wW.updateFromServerResponse(RW);
            const CW = new wR({
              uid: RW.localId,
              auth: WW,
              stsTokenManager: wW,
              isAnonymous: MW
            });
            return await SW(CW), CW
          }
        }
        const CR = new Map;

        function zM(WW) {
          XW(WW instanceof Function, "Expected a class definition");
          let RW = CR.get(WW);
          return RW ? (XW(RW instanceof WW, "Instance stored in cache mismatched with class"), RW) : (RW = new WW, CR.set(WW, RW), RW)
        }
        class AR {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(WW, RW) {
            this.storage[WW] = RW
          }
          async _get(WW) {
            const RW = this.storage[WW];
            return void 0 === RW ? null : RW
          }
          async _remove(WW) {
            delete this.storage[WW]
          }
          _addListener(WW, RW) {}
          _removeListener(WW, RW) {}
        }
        AR.type = "NONE";
        const bM = AR;

        function yM(WW, RW, MW) {
          return `firebase:${WW}:${RW}:${MW}`
        }
        class NR {
          constructor(WW, RW, MW) {
            this.persistence = WW, this.auth = RW, this.userKey = MW;
            const {
              config: wW,
              name: CW
            } = this.auth;
            this.fullUserKey = yM(this.userKey, wW.apiKey, CW), this.fullPersistenceKey = yM("persistence", wW.apiKey, CW), this.boundEventHandler = RW._onStorageEvent.bind(RW), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(WW) {
            return this.persistence._set(this.fullUserKey, WW.toJSON())
          }
          async getCurrentUser() {
            const WW = await this.persistence._get(this.fullUserKey);
            return WW ? wR._fromJSON(this.auth, WW) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(WW) {
            if (this.persistence === WW) return;
            const RW = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = WW, RW ? this.setCurrentUser(RW) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(WW, RW) {
            let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!RW.length) return new NR(zM(bM), WW, MW);
            const wW = (await Promise.all(RW.map((async WW => {
              if (await WW._isAvailable()) return WW
            })))).filter((WW => WW));
            let CW = wW[0] || zM(bM);
            const zR = yM(MW, WW.config.apiKey, WW.name);
            let AW = null;
            for (const NW of RW) try {
              const RW = await NW._get(zR);
              if (RW) {
                const MW = wR._fromJSON(WW, RW);
                NW !== CW && (AW = MW), CW = NW;
                break
              }
            } catch (yR) {}
            const bR = wW.filter((WW => WW._shouldAllowMigration));
            return CW._shouldAllowMigration && bR.length ? (CW = bR[0], AW && await CW._set(zR, AW.toJSON()), await Promise.all(RW.map((async WW => {
              if (WW !== CW) try {
                await WW._remove(zR)
              } catch (yR) {}
            }))), new NR(CW, WW, MW)) : new NR(CW, WW, MW)
          }
        }

        function eR(WW) {
          const RW = WW.toLowerCase();
          if (RW.includes("opera/") || RW.includes("opr/") || RW.includes("opios/")) return "Opera";
          if (gM(RW)) return "IEMobile";
          if (RW.includes("msie") || RW.includes("trident/")) return "IE";
          if (RW.includes("edge/")) return "Edge";
          if (BR(RW)) return "Firefox";
          if (RW.includes("silk/")) return "Silk";
          if (YR(RW)) return "Blackberry";
          if (JR(RW)) return "Webos";
          if (tM(RW)) return "Safari";
          if ((RW.includes("chrome/") || TR(RW)) && !RW.includes("edge/")) return "Chrome";
          if (iM(RW)) return "Android";
          {
            const RW = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              MW = WW.match(RW);
            if (2 === (null === MW || void 0 === MW ? void 0 : MW.length)) return MW[1]
          }
          return "Other"
        }

        function BR() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wW.N)();
          return /firefox\//i.test(WW)
        }

        function tM() {
          const WW = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wW.N)()).toLowerCase();
          return WW.includes("safari/") && !WW.includes("chrome/") && !WW.includes("crios/") && !WW.includes("android")
        }

        function TR() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wW.N)();
          return /crios\//i.test(WW)
        }

        function gM() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wW.N)();
          return /iemobile/i.test(WW)
        }

        function iM() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wW.N)();
          return /android/i.test(WW)
        }

        function YR() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wW.N)();
          return /blackberry/i.test(WW)
        }

        function JR() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wW.N)();
          return /webos/i.test(WW)
        }

        function PR() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wW.N)();
          return /iphone|ipad|ipod/i.test(WW) || /macintosh/i.test(WW) && /mobile/i.test(WW)
        }

        function IR() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wW.N)();
          return PR(WW) || iM(WW) || JR(WW) || YR(WW) || /windows phone/i.test(WW) || gM(WW)
        }

        function oR(WW) {
          let RW, MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (WW) {
            case "Browser":
              RW = eR((0, wW.N)());
              break;
            case "Worker":
              RW = `${eR((0,wW.N)())}-${WW}`;
              break;
            default:
              RW = WW
          }
          const zR = MW.length ? MW.join(",") : "FirebaseCore-web";
          return `${RW}/JsCore/${CW.d}/${zR}`
        }
        async function lR(WW, RW) {
          return VW(WW, "GET", "/v2/recaptchaConfig", EW(WW, RW))
        }

        function FR(WW) {
          return void 0 !== WW && void 0 !== WW.getResponse
        }

        function fR(WW) {
          return void 0 !== WW && void 0 !== WW.enterprise
        }
        class QR {
          constructor(WW) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === WW.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = WW.recaptchaKey.split("/")[3], this.emailPasswordEnabled = WW.recaptchaEnforcementState.some((WW => "EMAIL_PASSWORD_PROVIDER" === WW.provider && "OFF" !== WW.enforcementState))
          }
        }

        function rM(WW) {
          return new Promise(((RW, MW) => {
            const wW = document.createElement("script");
            wW.setAttribute("src", WW), wW.onload = RW, wW.onerror = WW => {
                const RW = lW("internal-error");
                RW.customData = WW, MW(RW)
              }, wW.type = "text/javascript", wW.charset = "UTF-8",
              function() {
                var WW, RW;
                return null !== (RW = null === (WW = document.getElementsByTagName("head")) || void 0 === WW ? void 0 : WW[0]) && void 0 !== RW ? RW : document
              }().appendChild(wW)
          }))
        }

        function cM(WW) {
          return `__${WW}${Math.floor(1e6*Math.random())}`
        }
        class XR {
          constructor(WW) {
            this.type = "recaptcha-enterprise", this.auth = sR(WW)
          }
          async verify() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function MW(RW, MW, wW) {
              const CW = window.grecaptcha;
              fR(CW) ? CW.enterprise.ready((() => {
                CW.enterprise.execute(RW, {
                  action: WW
                }).then((WW => {
                  MW(WW)
                })).catch((() => {
                  MW("NO_RECAPTCHA")
                }))
              })) : wW(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((WW, wW) => {
              (async function(WW) {
                if (!RW) {
                  if (null == WW.tenantId && null != WW._agentRecaptchaConfig) return WW._agentRecaptchaConfig.siteKey;
                  if (null != WW.tenantId && void 0 !== WW._tenantRecaptchaConfigs[WW.tenantId]) return WW._tenantRecaptchaConfigs[WW.tenantId].siteKey
                }
                return new Promise((async (RW, MW) => {
                  lR(WW, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((wW => {
                    if (void 0 !== wW.recaptchaKey) {
                      const MW = new QR(wW);
                      return null == WW.tenantId ? WW._agentRecaptchaConfig = MW : WW._tenantRecaptchaConfigs[WW.tenantId] = MW, RW(MW.siteKey)
                    }
                    MW(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((WW => {
                    MW(WW)
                  }))
                }))
              })(this.auth).then((CW => {
                if (!RW && fR(window.grecaptcha)) MW(CW, WW, wW);
                else {
                  if ("undefined" === typeof window) return void wW(new Error("RecaptchaVerifier is only supported in browser"));
                  rM("https://www.google.com/recaptcha/enterprise.js?render=" + CW).then((() => {
                    MW(CW, WW, wW)
                  })).catch((WW => {
                    wW(WW)
                  }))
                }
              })).catch((WW => {
                wW(WW)
              }))
            }))
          }
        }
        async function jM(WW, RW, MW) {
          let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const CW = new XR(WW);
          let zR;
          try {
            zR = await CW.verify(MW)
          } catch (bR) {
            zR = await CW.verify(MW, !0)
          }
          const AW = Object.assign({}, RW);
          return wW ? Object.assign(AW, {
            captchaResp: zR
          }) : Object.assign(AW, {
            captchaResponse: zR
          }), Object.assign(AW, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(AW, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), AW
        }
        class kM {
          constructor(WW) {
            this.auth = WW, this.queue = []
          }
          pushCallback(WW, RW) {
            const MW = RW => new Promise(((MW, wW) => {
              try {
                MW(WW(RW))
              } catch (CW) {
                wW(CW)
              }
            }));
            MW.onAbort = RW, this.queue.push(MW);
            const wW = this.queue.length - 1;
            return () => {
              this.queue[wW] = () => Promise.resolve()
            }
          }
          async runMiddleware(WW) {
            if (this.auth.currentUser === WW) return;
            const RW = [];
            try {
              for (const MW of this.queue) await MW(WW), MW.onAbort && RW.push(MW.onAbort)
            } catch (MW) {
              RW.reverse();
              for (const WW of RW) try {
                WW()
              } catch (wW) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === MW || void 0 === MW ? void 0 : MW.message
              })
            }
          }
        }
        class aM {
          constructor(WW, RW, MW, wW) {
            this.app = WW, this.heartbeatServiceProvider = RW, this.appCheckServiceProvider = MW, this.config = wW, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new dR(this), this.idTokenSubscription = new dR(this), this.beforeStateQueue = new kM(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = YW, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = WW.name, this.clientVersion = wW.sdkClientVersion
          }
          _initializeWithPersistence(WW, RW) {
            return RW && (this._popupRedirectResolver = zM(RW)), this._initializationPromise = this.queue((async () => {
              var MW, wW;
              if (!this._deleted && (this.persistenceManager = await NR.create(this, WW), !this._deleted)) {
                if (null === (MW = this._popupRedirectResolver) || void 0 === MW ? void 0 : MW._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (CW) {}
                await this.initializeCurrentUser(RW), this.lastNotifiedUid = (null === (wW = this.currentUser) || void 0 === wW ? void 0 : wW.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const WW = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || WW ? this.currentUser && WW && this.currentUser.uid === WW.uid ? (this._currentUser._assign(WW), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(WW, !0) : void 0
          }
          async initializeCurrentUser(WW) {
            var RW;
            const MW = await this.assertedPersistence.getCurrentUser();
            let wW = MW,
              CW = !1;
            if (WW && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const MW = null === (RW = this.redirectUser) || void 0 === RW ? void 0 : RW._redirectEventId,
                zR = null === wW || void 0 === wW ? void 0 : wW._redirectEventId,
                AW = await this.tryRedirectSignIn(WW);
              MW && MW !== zR || !(null === AW || void 0 === AW ? void 0 : AW.user) || (wW = AW.user, CW = !0)
            }
            if (!wW) return this.directlySetCurrentUser(null);
            if (!wW._redirectEventId) {
              if (CW) try {
                await this.beforeStateQueue.runMiddleware(wW)
              } catch (zR) {
                wW = MW, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(zR)))
              }
              return wW ? this.reloadAndSetCurrentUserOrClear(wW) : this.directlySetCurrentUser(null)
            }
            return rR(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === wW._redirectEventId ? this.directlySetCurrentUser(wW) : this.reloadAndSetCurrentUserOrClear(wW)
          }
          async tryRedirectSignIn(WW) {
            let RW = null;
            try {
              RW = await this._popupRedirectResolver._completeRedirectFn(this, WW, !0)
            } catch (MW) {
              await this._setRedirectUser(null)
            }
            return RW
          }
          async reloadAndSetCurrentUserOrClear(WW) {
            try {
              await SW(WW)
            } catch (RW) {
              if ("auth/network-request-failed" !== (null === RW || void 0 === RW ? void 0 : RW.code)) return this.directlySetCurrentUser(null)
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
            const RW = WW ? (0, wW.K)(WW) : null;
            return RW && rR(RW.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(RW && RW._clone(this))
          }
          async _updateCurrentUser(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return WW && rR(this.tenantId === WW.tenantId, this, "tenant-id-mismatch"), RW || await this.beforeStateQueue.runMiddleware(WW), this.queue((async () => {
              await this.directlySetCurrentUser(WW), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(WW) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(zM(WW))
            }))
          }
          async initializeRecaptchaConfig() {
            const WW = await lR(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              RW = new QR(WW);
            if (null == this.tenantId ? this._agentRecaptchaConfig = RW : this._tenantRecaptchaConfigs[this.tenantId] = RW, RW.emailPasswordEnabled) {
              new XR(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(WW) {
            this._errorFactory = new wW.g("auth", "Firebase", WW())
          }
          onAuthStateChanged(WW, RW, MW) {
            return this.registerStateListener(this.authStateSubscription, WW, RW, MW)
          }
          beforeAuthStateChanged(WW, RW) {
            return this.beforeStateQueue.pushCallback(WW, RW)
          }
          onIdTokenChanged(WW, RW, MW) {
            return this.registerStateListener(this.idTokenSubscription, WW, RW, MW)
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
          async _setRedirectUser(WW, RW) {
            const MW = await this.getOrInitRedirectPersistenceManager(RW);
            return null === WW ? MW.removeCurrentUser() : MW.setCurrentUser(WW)
          }
          async getOrInitRedirectPersistenceManager(WW) {
            if (!this.redirectPersistenceManager) {
              const RW = WW && zM(WW) || this._popupRedirectResolver;
              rR(RW, this, "argument-error"), this.redirectPersistenceManager = await NR.create(this, [zM(RW._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(WW) {
            var RW, MW;
            return this._isInitialized && await this.queue((async () => {})), (null === (RW = this._currentUser) || void 0 === RW ? void 0 : RW._redirectEventId) === WW ? this._currentUser : (null === (MW = this.redirectUser) || void 0 === MW ? void 0 : MW._redirectEventId) === WW ? this.redirectUser : null
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
            var WW, RW;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const MW = null !== (RW = null === (WW = this.currentUser) || void 0 === WW ? void 0 : WW.uid) && void 0 !== RW ? RW : null;
            this.lastNotifiedUid !== MW && (this.lastNotifiedUid = MW, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(WW, RW, MW, wW) {
            if (this._deleted) return () => {};
            const CW = "function" === typeof RW ? RW : RW.next.bind(RW),
              zR = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return rR(zR, this, "internal-error"), zR.then((() => CW(this.currentUser))), "function" === typeof RW ? WW.addObserver(RW, MW, wW) : WW.addObserver(RW)
          }
          async directlySetCurrentUser(WW) {
            this.currentUser && this.currentUser !== WW && this._currentUser._stopProactiveRefresh(), WW && this.isProactiveRefreshEnabled && WW._startProactiveRefresh(), this.currentUser = WW, WW ? await this.assertedPersistence.setCurrentUser(WW) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(WW) {
            return this.operations = this.operations.then(WW, WW), this.operations
          }
          get assertedPersistence() {
            return rR(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(WW) {
            WW && !this.frameworks.includes(WW) && (this.frameworks.push(WW), this.frameworks.sort(), this.clientVersion = oR(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var WW;
            const RW = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (RW["X-Firebase-gmpid"] = this.app.options.appId);
            const MW = await (null === (WW = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === WW ? void 0 : WW.getHeartbeatsHeader());
            MW && (RW["X-Firebase-Client"] = MW);
            const wW = await this._getAppCheckToken();
            return wW && (RW["X-Firebase-AppCheck"] = wW), RW
          }
          async _getAppCheckToken() {
            var WW;
            const RW = await (null === (WW = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === WW ? void 0 : WW.getToken());
            return (null === RW || void 0 === RW ? void 0 : RW.error) && function(WW) {
              if (PW.logLevel <= AW.e.WARN) {
                for (var RW = arguments.length, MW = new Array(RW > 1 ? RW - 1 : 0), wW = 1; wW < RW; wW++) MW[wW - 1] = arguments[wW];
                PW.warn(`Auth (${CW.d}): ${WW}`, ...MW)
              }
            }(`Error while retrieving App Check token: ${RW.error}`), null === RW || void 0 === RW ? void 0 : RW.token
          }
        }

        function sR(WW) {
          return (0, wW.K)(WW)
        }
        class dR {
          constructor(WW) {
            this.auth = WW, this.observer = null, this.addObserver = (0, wW.u)((WW => this.observer = WW))
          }
          get next() {
            return rR(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function pR(WW, RW) {
          const MW = (0, CW.t)(WW, "auth");
          if (MW.isInitialized()) {
            const WW = MW.getImmediate(),
              CW = MW.getOptions();
            if ((0, wW.v)(CW, null !== RW && void 0 !== RW ? RW : {})) return WW;
            oW(WW, "already-initialized")
          }
          return MW.initialize({
            options: RW
          })
        }

        function hR(WW, RW, MW) {
          const wW = sR(WW);
          rR(wW._canInitEmulator, wW, "emulator-config-failed"), rR(/^https?:\/\//.test(RW), wW, "invalid-emulator-scheme");
          const CW = !!(null === MW || void 0 === MW ? void 0 : MW.disableWarnings),
            zR = UR(RW),
            {
              host: AW,
              port: bR
            } = function(WW) {
              const RW = UR(WW),
                MW = /(\/\/)?([^?#/]+)/.exec(WW.substr(RW.length));
              if (!MW) return {
                host: "",
                port: null
              };
              const wW = MW[2].split("@").pop() || "",
                CW = /^(\[[^\]]+\])(:|$)/.exec(wW);
              if (CW) {
                const WW = CW[1];
                return {
                  host: WW,
                  port: ER(wW.substr(WW.length + 1))
                }
              } {
                const [WW, RW] = wW.split(":");
                return {
                  host: WW,
                  port: ER(RW)
                }
              }
            }(RW),
            yR = null === bR ? "" : `:${bR}`;
          wW.config.emulator = {
            url: `${zR}//${AW}${yR}/`
          }, wW.settings.appVerificationDisabledForTesting = !0, wW.emulatorConfig = Object.freeze({
            host: AW,
            port: bR,
            protocol: zR.replace(":", ""),
            options: Object.freeze({
              disableWarnings: CW
            })
          }), CW || function() {
            function WW() {
              const WW = document.createElement("p"),
                RW = WW.style;
              WW.innerText = "Running in emulator mode. Do not use with production credentials.", RW.position = "fixed", RW.width = "100%", RW.backgroundColor = "#ffffff", RW.border = ".1em solid #000000", RW.color = "#b50000", RW.bottom = "0px", RW.left = "0px", RW.margin = "0px", RW.zIndex = "10000", RW.textAlign = "center", WW.classList.add("firebase-emulator-warning"), document.body.appendChild(WW)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", WW) : WW())
          }()
        }

        function UR(WW) {
          const RW = WW.indexOf(":");
          return RW < 0 ? "" : WW.substr(0, RW + 1)
        }

        function ER(WW) {
          if (!WW) return null;
          const RW = Number(WW);
          return isNaN(RW) ? null : RW
        }
        class VR {
          constructor(WW, RW) {
            this.providerId = WW, this.signInMethod = RW
          }
          toJSON() {
            return cR("not implemented")
          }
          _getIdTokenResponse(WW) {
            return cR("not implemented")
          }
          _linkToIdToken(WW, RW) {
            return cR("not implemented")
          }
          _getReauthenticationResolver(WW) {
            return cR("not implemented")
          }
        }
        async function mM(WW, RW) {
          return VW(WW, "POST", "/v1/accounts:resetPassword", EW(WW, RW))
        }
        async function xM(WW, RW) {
          return VW(WW, "POST", "/v1/accounts:update", RW)
        }
        async function vM(WW, RW) {
          return xR(WW, "POST", "/v1/accounts:signInWithPassword", EW(WW, RW))
        }
        async function KR(WW, RW) {
          return VW(WW, "POST", "/v1/accounts:sendOobCode", EW(WW, RW))
        }
        async function uR(WW, RW) {
          return KR(WW, RW)
        }
        async function OR(WW, RW) {
          return KR(WW, RW)
        }
        class nR extends VR {
          constructor(WW, RW, MW) {
            let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", MW), this._email = WW, this._password = RW, this._tenantId = wW
          }
          static _fromEmailAndPassword(WW, RW) {
            return new nR(WW, RW, "password")
          }
          static _fromEmailAndCode(WW, RW) {
            return new nR(WW, RW, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
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
            const RW = "string" === typeof WW ? JSON.parse(WW) : WW;
            if ((null === RW || void 0 === RW ? void 0 : RW.email) && (null === RW || void 0 === RW ? void 0 : RW.password)) {
              if ("password" === RW.signInMethod) return this._fromEmailAndPassword(RW.email, RW.password);
              if ("emailLink" === RW.signInMethod) return this._fromEmailAndCode(RW.email, RW.password, RW.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(WW) {
            var RW;
            switch (this.signInMethod) {
              case "password":
                const MW = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (RW = WW._getRecaptchaConfig()) || void 0 === RW ? void 0 : RW.emailPasswordEnabled) {
                  const RW = await jM(WW, MW, "signInWithPassword");
                  return vM(WW, RW)
                }
                return vM(WW, MW).catch((async RW => {
                  if ("auth/missing-recaptcha-token" === RW.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const RW = await jM(WW, MW, "signInWithPassword");
                    return vM(WW, RW)
                  }
                  return Promise.reject(RW)
                }));
              case "emailLink":
                return async function(WW, RW) {
                  return xR(WW, "POST", "/v1/accounts:signInWithEmailLink", EW(WW, RW))
                }(WW, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                oW(WW, "internal-error")
            }
          }
          async _linkToIdToken(WW, RW) {
            switch (this.signInMethod) {
              case "password":
                return xM(WW, {
                  idToken: RW,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(WW, RW) {
                  return xR(WW, "POST", "/v1/accounts:signInWithEmailLink", EW(WW, RW))
                }(WW, {
                  idToken: RW,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                oW(WW, "internal-error")
            }
          }
          _getReauthenticationResolver(WW) {
            return this._getIdTokenResponse(WW)
          }
        }
        async function GR(WW, RW) {
          return xR(WW, "POST", "/v1/accounts:signInWithIdp", EW(WW, RW))
        }
        class LR extends VR {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(WW) {
            const RW = new LR(WW.providerId, WW.signInMethod);
            return WW.idToken || WW.accessToken ? (WW.idToken && (RW.idToken = WW.idToken), WW.accessToken && (RW.accessToken = WW.accessToken), WW.nonce && !WW.pendingToken && (RW.nonce = WW.nonce), WW.pendingToken && (RW.pendingToken = WW.pendingToken)) : WW.oauthToken && WW.oauthTokenSecret ? (RW.accessToken = WW.oauthToken, RW.secret = WW.oauthTokenSecret) : oW("argument-error"), RW
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
            const RW = "string" === typeof WW ? JSON.parse(WW) : WW,
              {
                providerId: MW,
                signInMethod: wW
              } = RW,
              CW = zR(RW, ["providerId", "signInMethod"]);
            if (!MW || !wW) return null;
            const AW = new LR(MW, wW);
            return AW.idToken = CW.idToken || void 0, AW.accessToken = CW.accessToken || void 0, AW.secret = CW.secret, AW.nonce = CW.nonce, AW.pendingToken = CW.pendingToken || null, AW
          }
          _getIdTokenResponse(WW) {
            return GR(WW, this.buildRequest())
          }
          _linkToIdToken(WW, RW) {
            const MW = this.buildRequest();
            return MW.idToken = RW, GR(WW, MW)
          }
          _getReauthenticationResolver(WW) {
            const RW = this.buildRequest();
            return RW.autoCreate = !1, GR(WW, RW)
          }
          buildRequest() {
            const WW = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) WW.pendingToken = this.pendingToken;
            else {
              const RW = {};
              this.idToken && (RW.id_token = this.idToken), this.accessToken && (RW.access_token = this.accessToken), this.secret && (RW.oauth_token_secret = this.secret), RW.providerId = this.providerId, this.nonce && !this.pendingToken && (RW.nonce = this.nonce), WW.postBody = (0, wW.gb)(RW)
            }
            return WW
          }
        }
        const HR = {
          USER_NOT_FOUND: "user-not-found"
        };
        class DR extends VR {
          constructor(WW) {
            super("phone", "phone"), this.params = WW
          }
          static _fromVerification(WW, RW) {
            return new DR({
              verificationId: WW,
              verificationCode: RW
            })
          }
          static _fromTokenResponse(WW, RW) {
            return new DR({
              phoneNumber: WW,
              temporaryProof: RW
            })
          }
          _getIdTokenResponse(WW) {
            return async function(WW, RW) {
              return xR(WW, "POST", "/v1/accounts:signInWithPhoneNumber", EW(WW, RW))
            }(WW, this._makeVerificationRequest())
          }
          _linkToIdToken(WW, RW) {
            return async function(WW, RW) {
              const MW = await xR(WW, "POST", "/v1/accounts:signInWithPhoneNumber", EW(WW, RW));
              if (MW.temporaryProof) throw uW(WW, "account-exists-with-different-credential", MW);
              return MW
            }(WW, Object.assign({
              idToken: RW
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(WW) {
            return async function(WW, RW) {
              return xR(WW, "POST", "/v1/accounts:signInWithPhoneNumber", EW(WW, Object.assign(Object.assign({}, RW), {
                operation: "REAUTH"
              })), HR)
            }(WW, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: WW,
              phoneNumber: RW,
              verificationId: MW,
              verificationCode: wW
            } = this.params;
            return WW && RW ? {
              temporaryProof: WW,
              phoneNumber: RW
            } : {
              sessionInfo: MW,
              code: wW
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
              verificationId: RW,
              verificationCode: MW,
              phoneNumber: wW,
              temporaryProof: CW
            } = WW;
            return MW || RW || wW || CW ? new DR({
              verificationId: RW,
              verificationCode: MW,
              phoneNumber: wW,
              temporaryProof: CW
            }) : null
          }
        }
        class qM {
          constructor(WW) {
            var RW, MW, CW, zR, AW, bR;
            const yR = (0, wW.db)((0, wW.y)(WW)),
              NW = null !== (RW = yR.apiKey) && void 0 !== RW ? RW : null,
              eW = null !== (MW = yR.oobCode) && void 0 !== MW ? MW : null,
              BW = function(WW) {
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
              }(null !== (CW = yR.mode) && void 0 !== CW ? CW : null);
            rR(NW && eW && BW, "argument-error"), this.apiKey = NW, this.operation = BW, this.code = eW, this.continueUrl = null !== (zR = yR.continueUrl) && void 0 !== zR ? zR : null, this.languageCode = null !== (AW = yR.languageCode) && void 0 !== AW ? AW : null, this.tenantId = null !== (bR = yR.tenantId) && void 0 !== bR ? bR : null
          }
          static parseLink(WW) {
            const RW = function(WW) {
              const RW = (0, wW.db)((0, wW.y)(WW)).link,
                MW = RW ? (0, wW.db)((0, wW.y)(RW)).deep_link_id : null,
                CW = (0, wW.db)((0, wW.y)(WW)).deep_link_id;
              return (CW ? (0, wW.db)((0, wW.y)(CW)).link : null) || CW || MW || RW || WW
            }(WW);
            try {
              return new qM(RW)
            } catch (MW) {
              return null
            }
          }
        }

        function ZR(WW) {
          return qM.parseLink(WW)
        }
        class SR {
          constructor() {
            this.providerId = SR.PROVIDER_ID
          }
          static credential(WW, RW) {
            return nR._fromEmailAndPassword(WW, RW)
          }
          static credentialWithLink(WW, RW) {
            const MW = qM.parseLink(RW);
            return rR(MW, "argument-error"), nR._fromEmailAndCode(WW, MW.code, MW.tenantId)
          }
        }
        SR.PROVIDER_ID = "password", SR.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", SR.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class WM {
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
        class RM extends WM {
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
        class MM extends RM {
          static credentialFromJSON(WW) {
            const RW = "string" === typeof WW ? JSON.parse(WW) : WW;
            return rR("providerId" in RW && "signInMethod" in RW, "argument-error"), LR._fromParams(RW)
          }
          credential(WW) {
            return this._credential(Object.assign(Object.assign({}, WW), {
              nonce: WW.rawNonce
            }))
          }
          _credential(WW) {
            return rR(WW.idToken || WW.accessToken, "argument-error"), LR._fromParams(Object.assign(Object.assign({}, WW), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(WW) {
            return MM.oauthCredentialFromTaggedObject(WW)
          }
          static credentialFromError(WW) {
            return MM.oauthCredentialFromTaggedObject(WW.customData || {})
          }
          static oauthCredentialFromTaggedObject(WW) {
            let {
              _tokenResponse: RW
            } = WW;
            if (!RW) return null;
            const {
              oauthIdToken: MW,
              oauthAccessToken: wW,
              oauthTokenSecret: CW,
              pendingToken: zR,
              nonce: AW,
              providerId: bR
            } = RW;
            if (!wW && !CW && !MW && !zR) return null;
            if (!bR) return null;
            try {
              return new MM(bR)._credential({
                idToken: MW,
                accessToken: wW,
                nonce: AW,
                pendingToken: zR
              })
            } catch (yR) {
              return null
            }
          }
        }
        class wM extends RM {
          constructor() {
            super("facebook.com")
          }
          static credential(WW) {
            return LR._fromParams({
              providerId: wM.PROVIDER_ID,
              signInMethod: wM.FACEBOOK_SIGN_IN_METHOD,
              accessToken: WW
            })
          }
          static credentialFromResult(WW) {
            return wM.credentialFromTaggedObject(WW)
          }
          static credentialFromError(WW) {
            return wM.credentialFromTaggedObject(WW.customData || {})
          }
          static credentialFromTaggedObject(WW) {
            let {
              _tokenResponse: RW
            } = WW;
            if (!RW || !("oauthAccessToken" in RW)) return null;
            if (!RW.oauthAccessToken) return null;
            try {
              return wM.credential(RW.oauthAccessToken)
            } catch (MW) {
              return null
            }
          }
        }
        wM.FACEBOOK_SIGN_IN_METHOD = "facebook.com", wM.PROVIDER_ID = "facebook.com";
        class CM extends RM {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(WW, RW) {
            return LR._fromParams({
              providerId: CM.PROVIDER_ID,
              signInMethod: CM.GOOGLE_SIGN_IN_METHOD,
              idToken: WW,
              accessToken: RW
            })
          }
          static credentialFromResult(WW) {
            return CM.credentialFromTaggedObject(WW)
          }
          static credentialFromError(WW) {
            return CM.credentialFromTaggedObject(WW.customData || {})
          }
          static credentialFromTaggedObject(WW) {
            let {
              _tokenResponse: RW
            } = WW;
            if (!RW) return null;
            const {
              oauthIdToken: MW,
              oauthAccessToken: wW
            } = RW;
            if (!MW && !wW) return null;
            try {
              return CM.credential(MW, wW)
            } catch (CW) {
              return null
            }
          }
        }
        CM.GOOGLE_SIGN_IN_METHOD = "google.com", CM.PROVIDER_ID = "google.com";
        class zw extends RM {
          constructor() {
            super("github.com")
          }
          static credential(WW) {
            return LR._fromParams({
              providerId: zw.PROVIDER_ID,
              signInMethod: zw.GITHUB_SIGN_IN_METHOD,
              accessToken: WW
            })
          }
          static credentialFromResult(WW) {
            return zw.credentialFromTaggedObject(WW)
          }
          static credentialFromError(WW) {
            return zw.credentialFromTaggedObject(WW.customData || {})
          }
          static credentialFromTaggedObject(WW) {
            let {
              _tokenResponse: RW
            } = WW;
            if (!RW || !("oauthAccessToken" in RW)) return null;
            if (!RW.oauthAccessToken) return null;
            try {
              return zw.credential(RW.oauthAccessToken)
            } catch (MW) {
              return null
            }
          }
        }
        zw.GITHUB_SIGN_IN_METHOD = "github.com", zw.PROVIDER_ID = "github.com";
        class AM extends VR {
          constructor(WW, RW) {
            super(WW, WW), this.pendingToken = RW
          }
          _getIdTokenResponse(WW) {
            return GR(WW, this.buildRequest())
          }
          _linkToIdToken(WW, RW) {
            const MW = this.buildRequest();
            return MW.idToken = RW, GR(WW, MW)
          }
          _getReauthenticationResolver(WW) {
            const RW = this.buildRequest();
            return RW.autoCreate = !1, GR(WW, RW)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(WW) {
            const RW = "string" === typeof WW ? JSON.parse(WW) : WW,
              {
                providerId: MW,
                signInMethod: wW,
                pendingToken: CW
              } = RW;
            return MW && wW && CW && MW === wW ? new AM(MW, CW) : null
          }
          static _create(WW, RW) {
            return new AM(WW, RW)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class bw extends WM {
          constructor(WW) {
            rR(WW.startsWith("saml."), "argument-error"), super(WW)
          }
          static credentialFromResult(WW) {
            return bw.samlCredentialFromTaggedObject(WW)
          }
          static credentialFromError(WW) {
            return bw.samlCredentialFromTaggedObject(WW.customData || {})
          }
          static credentialFromJSON(WW) {
            const RW = AM.fromJSON(WW);
            return rR(RW, "argument-error"), RW
          }
          static samlCredentialFromTaggedObject(WW) {
            let {
              _tokenResponse: RW
            } = WW;
            if (!RW) return null;
            const {
              pendingToken: MW,
              providerId: wW
            } = RW;
            if (!MW || !wW) return null;
            try {
              return AM._create(wW, MW)
            } catch (CW) {
              return null
            }
          }
        }
        class yw extends RM {
          constructor() {
            super("twitter.com")
          }
          static credential(WW, RW) {
            return LR._fromParams({
              providerId: yw.PROVIDER_ID,
              signInMethod: yw.TWITTER_SIGN_IN_METHOD,
              oauthToken: WW,
              oauthTokenSecret: RW
            })
          }
          static credentialFromResult(WW) {
            return yw.credentialFromTaggedObject(WW)
          }
          static credentialFromError(WW) {
            return yw.credentialFromTaggedObject(WW.customData || {})
          }
          static credentialFromTaggedObject(WW) {
            let {
              _tokenResponse: RW
            } = WW;
            if (!RW) return null;
            const {
              oauthAccessToken: MW,
              oauthTokenSecret: wW
            } = RW;
            if (!MW || !wW) return null;
            try {
              return yw.credential(MW, wW)
            } catch (CW) {
              return null
            }
          }
        }
        async function NM(WW, RW) {
          return xR(WW, "POST", "/v1/accounts:signUp", EW(WW, RW))
        }
        yw.TWITTER_SIGN_IN_METHOD = "twitter.com", yw.PROVIDER_ID = "twitter.com";
        class eM {
          constructor(WW) {
            this.user = WW.user, this.providerId = WW.providerId, this._tokenResponse = WW._tokenResponse, this.operationType = WW.operationType
          }
          static async _fromIdTokenResponse(WW, RW, MW) {
            let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const CW = await wR._fromIdTokenResponse(WW, MW, wW),
              zR = BM(MW);
            return new eM({
              user: CW,
              providerId: zR,
              _tokenResponse: MW,
              operationType: RW
            })
          }
          static async _forOperation(WW, RW, MW) {
            await WW._updateTokensIfNecessary(MW, !0);
            const wW = BM(MW);
            return new eM({
              user: WW,
              providerId: wW,
              _tokenResponse: MW,
              operationType: RW
            })
          }
        }

        function BM(WW) {
          return WW.providerId ? WW.providerId : "phoneNumber" in WW ? "phone" : null
        }
        async function tw(WW) {
          var RW;
          const MW = sR(WW);
          if (await MW._initializationPromise, null === (RW = MW.currentUser) || void 0 === RW ? void 0 : RW.isAnonymous) return new eM({
            user: MW.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const wW = await NM(MW, {
              returnSecureToken: !0
            }),
            CW = await eM._fromIdTokenResponse(MW, "signIn", wW, !0);
          return await MW._updateCurrentUser(CW.user), CW
        }
        class TM extends wW.h {
          constructor(WW, RW, MW, wW) {
            var CW;
            super(RW.code, RW.message), this.operationType = MW, this.user = wW, Object.setPrototypeOf(this, TM.prototype), this.customData = {
              appName: WW.name,
              tenantId: null !== (CW = WW.tenantId) && void 0 !== CW ? CW : void 0,
              _serverResponse: RW.customData._serverResponse,
              operationType: MW
            }
          }
          static _fromErrorAndOperation(WW, RW, MW, wW) {
            return new TM(WW, RW, MW, wW)
          }
        }

        function gw(WW, RW, MW, wW) {
          return ("reauthenticate" === RW ? MW._getReauthenticationResolver(WW) : MW._getIdTokenResponse(WW)).catch((MW => {
            if ("auth/multi-factor-auth-required" === MW.code) throw TM._fromErrorAndOperation(WW, MW, RW, wW);
            throw MW
          }))
        }

        function iw(WW) {
          return new Set(WW.map((WW => {
            let {
              providerId: RW
            } = WW;
            return RW
          })).filter((WW => !!WW)))
        }
        async function YM(WW, RW) {
          const MW = (0, wW.K)(WW);
          await PM(!0, MW, RW);
          const {
            providerUserInfo: CW
          } = await async function(WW, RW) {
            return VW(WW, "POST", "/v1/accounts:update", RW)
          }(MW.auth, {
            idToken: await MW.getIdToken(),
            deleteProvider: [RW]
          }), zR = iw(CW || []);
          return MW.providerData = MW.providerData.filter((WW => zR.has(WW.providerId))), zR.has("phone") || (MW.phoneNumber = null), await MW.auth._persistUserIfCurrent(MW), MW
        }
        async function JM(WW, RW) {
          let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const wW = await DW(WW, RW._linkToIdToken(WW.auth, await WW.getIdToken()), MW);
          return eM._forOperation(WW, "link", wW)
        }
        async function PM(WW, RW, MW) {
          await SW(RW);
          const wW = !1 === WW ? "provider-already-linked" : "no-such-provider";
          rR(iw(RW.providerData).has(MW) === WW, RW.auth, wW)
        }
        async function IM(WW, RW) {
          let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: wW
          } = WW, CW = "reauthenticate";
          try {
            const zR = await DW(WW, gw(wW, CW, RW, WW), MW);
            rR(zR.idToken, wW, "internal-error");
            const AW = HW(zR.idToken);
            rR(AW, wW, "internal-error");
            const {
              sub: bR
            } = AW;
            return rR(WW.uid === bR, wW, "user-mismatch"), eM._forOperation(WW, CW, zR)
          } catch (zR) {
            throw "auth/user-not-found" === (null === zR || void 0 === zR ? void 0 : zR.code) && oW(wW, "user-mismatch"), zR
          }
        }
        async function oM(WW, RW) {
          let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const wW = "signIn",
            CW = await gw(WW, wW, RW),
            zR = await eM._fromIdTokenResponse(WW, wW, CW);
          return MW || await WW._updateCurrentUser(zR.user), zR
        }
        async function lM(WW, RW) {
          return oM(sR(WW), RW)
        }
        async function FM(WW, RW) {
          const MW = (0, wW.K)(WW);
          return await PM(!1, MW, RW.providerId), JM(MW, RW)
        }
        async function fM(WW, RW) {
          return IM((0, wW.K)(WW), RW)
        }
        async function QM(WW, RW) {
          const MW = sR(WW),
            wW = await async function(WW, RW) {
              return xR(WW, "POST", "/v1/accounts:signInWithCustomToken", EW(WW, RW))
            }(MW, {
              token: RW,
              returnSecureToken: !0
            }), CW = await eM._fromIdTokenResponse(MW, "signIn", wW);
          return await MW._updateCurrentUser(CW.user), CW
        }
        class rw {
          constructor(WW, RW) {
            this.factorId = WW, this.uid = RW.mfaEnrollmentId, this.enrollmentTime = new Date(RW.enrolledAt).toUTCString(), this.displayName = RW.displayName
          }
          static _fromServerResponse(WW, RW) {
            return "phoneInfo" in RW ? cwW._fromServerResponse(WW, RW) : "totpInfo" in RW ? XM._fromServerResponse(WW, RW) : oW(WW, "internal-error")
          }
        }
        class cwW extends rw {
          constructor(WW) {
            super("phone", WW), this.phoneNumber = WW.phoneInfo
          }
          static _fromServerResponse(WW, RW) {
            return new cwW(RW)
          }
        }
        class XM extends rw {
          constructor(WW) {
            super("totp", WW)
          }
          static _fromServerResponse(WW, RW) {
            return new XM(RW)
          }
        }

        function jw(WW, RW, MW) {
          var wW;
          rR((null === (wW = MW.url) || void 0 === wW ? void 0 : wW.length) > 0, WW, "invalid-continue-uri"), rR("undefined" === typeof MW.dynamicLinkDomain || MW.dynamicLinkDomain.length > 0, WW, "invalid-dynamic-link-domain"), RW.continueUrl = MW.url, RW.dynamicLinkDomain = MW.dynamicLinkDomain, RW.canHandleCodeInApp = MW.handleCodeInApp, MW.iOS && (rR(MW.iOS.bundleId.length > 0, WW, "missing-ios-bundle-id"), RW.iOSBundleId = MW.iOS.bundleId), MW.android && (rR(MW.android.packageName.length > 0, WW, "missing-android-pkg-name"), RW.androidInstallApp = MW.android.installApp, RW.androidMinimumVersionCode = MW.android.minimumVersion, RW.androidPackageName = MW.android.packageName)
        }
        async function kw(WW, RW, MW) {
          var wW;
          const CW = sR(WW),
            zR = {
              requestType: "PASSWORD_RESET",
              email: RW,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (wW = CW._getRecaptchaConfig()) || void 0 === wW ? void 0 : wW.emailPasswordEnabled) {
            const WW = await jM(CW, zR, "getOobCode", !0);
            MW && jw(CW, WW, MW), await uR(CW, WW)
          } else MW && jw(CW, zR, MW), await uR(CW, zR).catch((async WW => {
            if ("auth/missing-recaptcha-token" !== WW.code) return Promise.reject(WW);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const WW = await jM(CW, zR, "getOobCode", !0);
              MW && jw(CW, WW, MW), await uR(CW, WW)
            }
          }))
        }
        async function aw(WW, RW, MW) {
          await mM((0, wW.K)(WW), {
            oobCode: RW,
            newPassword: MW
          })
        }
        async function sM(WW, RW) {
          await async function(WW, RW) {
            return VW(WW, "POST", "/v1/accounts:update", EW(WW, RW))
          }((0, wW.K)(WW), {
            oobCode: RW
          })
        }
        async function dM(WW, RW) {
          const MW = (0, wW.K)(WW),
            CW = await mM(MW, {
              oobCode: RW
            }),
            zR = CW.requestType;
          switch (rR(zR, MW, "internal-error"), zR) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              rR(CW.newEmail, MW, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              rR(CW.mfaInfo, MW, "internal-error");
            default:
              rR(CW.email, MW, "internal-error")
          }
          let AW = null;
          return CW.mfaInfo && (AW = rw._fromServerResponse(sR(MW), CW.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === CW.requestType ? CW.newEmail : CW.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === CW.requestType ? CW.email : CW.newEmail) || null,
              multiFactorInfo: AW
            },
            operation: zR
          }
        }
        async function pM(WW, RW) {
          const {
            data: MW
          } = await dM((0, wW.K)(WW), RW);
          return MW.email
        }
        async function hM(WW, RW, MW) {
          var wW;
          const CW = sR(WW),
            zR = {
              returnSecureToken: !0,
              email: RW,
              password: MW,
              clientType: "CLIENT_TYPE_WEB"
            };
          let AW;
          if (null === (wW = CW._getRecaptchaConfig()) || void 0 === wW ? void 0 : wW.emailPasswordEnabled) {
            const WW = await jM(CW, zR, "signUpPassword");
            AW = NM(CW, WW)
          } else AW = NM(CW, zR).catch((async WW => {
            if ("auth/missing-recaptcha-token" === WW.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const WW = await jM(CW, zR, "signUpPassword");
              return NM(CW, WW)
            }
            return Promise.reject(WW)
          }));
          const bR = await AW.catch((WW => Promise.reject(WW))),
            yR = await eM._fromIdTokenResponse(CW, "signIn", bR);
          return await CW._updateCurrentUser(yR.user), yR
        }

        function UM(WW, RW, MW) {
          return lM((0, wW.K)(WW), SR.credential(RW, MW))
        }
        async function EM(WW, RW, MW) {
          var wW;
          const CW = sR(WW),
            zR = {
              requestType: "EMAIL_SIGNIN",
              email: RW,
              clientType: "CLIENT_TYPE_WEB"
            };

          function AW(WW, RW) {
            rR(RW.handleCodeInApp, CW, "argument-error"), RW && jw(CW, WW, RW)
          }
          if (null === (wW = CW._getRecaptchaConfig()) || void 0 === wW ? void 0 : wW.emailPasswordEnabled) {
            const WW = await jM(CW, zR, "getOobCode", !0);
            AW(WW, MW), await OR(CW, WW)
          } else AW(zR, MW), await OR(CW, zR).catch((async WW => {
            if ("auth/missing-recaptcha-token" !== WW.code) return Promise.reject(WW);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const WW = await jM(CW, zR, "getOobCode", !0);
              AW(WW, MW), await OR(CW, WW)
            }
          }))
        }

        function VM(WW, RW) {
          const MW = qM.parseLink(RW);
          return "EMAIL_SIGNIN" === (null === MW || void 0 === MW ? void 0 : MW.operation)
        }
        async function mw(WW, RW, MW) {
          const CW = (0, wW.K)(WW),
            zR = SR.credentialWithLink(RW, MW || jR());
          return rR(zR._tenantId === (CW.tenantId || null), CW, "tenant-id-mismatch"), lM(CW, zR)
        }
        async function xw(WW, RW) {
          const MW = {
              identifier: RW,
              continueUri: kR() ? jR() : "http://localhost"
            },
            {
              signinMethods: CW
            } = await async function(WW, RW) {
              return VW(WW, "POST", "/v1/accounts:createAuthUri", EW(WW, RW))
            }((0, wW.K)(WW), MW);
          return CW || []
        }
        async function vw(WW, RW) {
          const MW = (0, wW.K)(WW),
            CW = {
              requestType: "VERIFY_EMAIL",
              idToken: await WW.getIdToken()
            };
          RW && jw(MW.auth, CW, RW);
          const {
            email: zR
          } = await async function(WW, RW) {
            return KR(WW, RW)
          }(MW.auth, CW);
          zR !== WW.email && await WW.reload()
        }
        async function KM(WW, RW, MW) {
          const CW = (0, wW.K)(WW),
            zR = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await WW.getIdToken(),
              newEmail: RW
            };
          MW && jw(CW.auth, zR, MW);
          const {
            email: AW
          } = await async function(WW, RW) {
            return KR(WW, RW)
          }(CW.auth, zR);
          AW !== WW.email && await WW.reload()
        }
        async function uM(WW, RW) {
          let {
            displayName: MW,
            photoURL: CW
          } = RW;
          if (void 0 === MW && void 0 === CW) return;
          const zR = (0, wW.K)(WW),
            AW = {
              idToken: await zR.getIdToken(),
              displayName: MW,
              photoUrl: CW,
              returnSecureToken: !0
            },
            bR = await DW(zR, async function(WW, RW) {
              return VW(WW, "POST", "/v1/accounts:update", RW)
            }(zR.auth, AW));
          zR.displayName = bR.displayName || null, zR.photoURL = bR.photoUrl || null;
          const yR = zR.providerData.find((WW => {
            let {
              providerId: RW
            } = WW;
            return "password" === RW
          }));
          yR && (yR.displayName = zR.displayName, yR.photoURL = zR.photoURL), await zR._updateTokensIfNecessary(bR)
        }

        function OM(WW, RW) {
          return GM((0, wW.K)(WW), RW, null)
        }

        function nM(WW, RW) {
          return GM((0, wW.K)(WW), null, RW)
        }
        async function GM(WW, RW, MW) {
          const {
            auth: wW
          } = WW, CW = {
            idToken: await WW.getIdToken(),
            returnSecureToken: !0
          };
          RW && (CW.email = RW), MW && (CW.password = MW);
          const zR = await DW(WW, xM(wW, CW));
          await WW._updateTokensIfNecessary(zR, !0)
        }
        class LM {
          constructor(WW, RW) {
            let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = WW, this.providerId = RW, this.profile = MW
          }
        }
        class HM extends LM {
          constructor(WW, RW, MW, wW) {
            super(WW, RW, MW), this.username = wW
          }
        }
        class DM extends LM {
          constructor(WW, RW) {
            super(WW, "facebook.com", RW)
          }
        }
        class qw extends HM {
          constructor(WW, RW) {
            super(WW, "github.com", RW, "string" === typeof(null === RW || void 0 === RW ? void 0 : RW.login) ? null === RW || void 0 === RW ? void 0 : RW.login : null)
          }
        }
        class ZM extends LM {
          constructor(WW, RW) {
            super(WW, "google.com", RW)
          }
        }
        class SM extends HM {
          constructor(WW, RW, MW) {
            super(WW, "twitter.com", RW, MW)
          }
        }

        function Ww(WW) {
          const {
            user: RW,
            _tokenResponse: MW
          } = WW;
          return RW.isAnonymous && !MW ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(WW) {
            var RW, MW;
            if (!WW) return null;
            const {
              providerId: wW
            } = WW, CW = WW.rawUserInfo ? JSON.parse(WW.rawUserInfo) : {}, zR = WW.isNewUser || "identitytoolkit#SignupNewUserResponse" === WW.kind;
            if (!wW && (null === WW || void 0 === WW ? void 0 : WW.idToken)) {
              const wW = null === (MW = null === (RW = HW(WW.idToken)) || void 0 === RW ? void 0 : RW.firebase) || void 0 === MW ? void 0 : MW.sign_in_provider;
              if (wW) return new LM(zR, "anonymous" !== wW && "custom" !== wW ? wW : null)
            }
            if (!wW) return null;
            switch (wW) {
              case "facebook.com":
                return new DM(zR, CW);
              case "github.com":
                return new qw(zR, CW);
              case "google.com":
                return new ZM(zR, CW);
              case "twitter.com":
                return new SM(zR, CW, WW.screenName || null);
              case "custom":
              case "anonymous":
                return new LM(zR, null);
              default:
                return new LM(zR, wW, CW)
            }
          }(MW)
        }

        function Rw(WW, RW) {
          return (0, wW.K)(WW).setPersistence(RW)
        }

        function Mw(WW) {
          return sR(WW).initializeRecaptchaConfig()
        }

        function ww(WW, RW, MW, CW) {
          return (0, wW.K)(WW).onIdTokenChanged(RW, MW, CW)
        }

        function Cw(WW, RW, MW) {
          return (0, wW.K)(WW).beforeAuthStateChanged(RW, MW)
        }

        function zC(WW, RW, MW, CW) {
          return (0, wW.K)(WW).onAuthStateChanged(RW, MW, CW)
        }

        function Aw(WW) {
          (0, wW.K)(WW).useDeviceLanguage()
        }

        function bC(WW, RW) {
          return (0, wW.K)(WW).updateCurrentUser(RW)
        }

        function yC(WW) {
          return (0, wW.K)(WW).signOut()
        }
        async function Nw(WW) {
          return (0, wW.K)(WW).delete()
        }
        class ew {
          constructor(WW, RW, MW) {
            this.type = WW, this.credential = RW, this.auth = MW
          }
          static _fromIdtoken(WW, RW) {
            return new ew("enroll", WW, RW)
          }
          static _fromMfaPendingCredential(WW) {
            return new ew("signin", WW)
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
            var RW, MW;
            if (null === WW || void 0 === WW ? void 0 : WW.multiFactorSession) {
              if (null === (RW = WW.multiFactorSession) || void 0 === RW ? void 0 : RW.pendingCredential) return ew._fromMfaPendingCredential(WW.multiFactorSession.pendingCredential);
              if (null === (MW = WW.multiFactorSession) || void 0 === MW ? void 0 : MW.idToken) return ew._fromIdtoken(WW.multiFactorSession.idToken)
            }
            return null
          }
        }
        class Bw {
          constructor(WW, RW, MW) {
            this.session = WW, this.hints = RW, this.signInResolver = MW
          }
          static _fromError(WW, RW) {
            const MW = sR(WW),
              wW = RW.customData._serverResponse,
              CW = (wW.mfaInfo || []).map((WW => rw._fromServerResponse(MW, WW)));
            rR(wW.mfaPendingCredential, MW, "internal-error");
            const zR = ew._fromMfaPendingCredential(wW.mfaPendingCredential);
            return new Bw(zR, CW, (async WW => {
              const CW = await WW._process(MW, zR);
              delete wW.mfaInfo, delete wW.mfaPendingCredential;
              const AW = Object.assign(Object.assign({}, wW), {
                idToken: CW.idToken,
                refreshToken: CW.refreshToken
              });
              switch (RW.operationType) {
                case "signIn":
                  const WW = await eM._fromIdTokenResponse(MW, RW.operationType, AW);
                  return await MW._updateCurrentUser(WW.user), WW;
                case "reauthenticate":
                  return rR(RW.user, MW, "internal-error"), eM._forOperation(RW.user, RW.operationType, AW);
                default:
                  oW(MW, "internal-error")
              }
            }))
          }
          async resolveSignIn(WW) {
            const RW = WW;
            return this.signInResolver(RW)
          }
        }

        function tC(WW, RW) {
          var MW;
          const CW = (0, wW.K)(WW),
            zR = RW;
          return rR(RW.customData.operationType, CW, "argument-error"), rR(null === (MW = zR.customData._serverResponse) || void 0 === MW ? void 0 : MW.mfaPendingCredential, CW, "argument-error"), Bw._fromError(CW, zR)
        }
        class Tw {
          constructor(WW) {
            this.user = WW, this.enrolledFactors = [], WW._onReload((RW => {
              RW.mfaInfo && (this.enrolledFactors = RW.mfaInfo.map((RW => rw._fromServerResponse(WW.auth, RW))))
            }))
          }
          static _fromUser(WW) {
            return new Tw(WW)
          }
          async getSession() {
            return ew._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(WW, RW) {
            const MW = WW,
              wW = await this.getSession(),
              CW = await DW(this.user, MW._process(this.user.auth, wW, RW));
            return await this.user._updateTokensIfNecessary(CW), this.user.reload()
          }
          async unenroll(WW) {
            const RW = "string" === typeof WW ? WW : WW.uid,
              MW = await this.user.getIdToken();
            try {
              const WW = await DW(this.user, (wW = this.user.auth, CW = {
                idToken: MW,
                mfaEnrollmentId: RW
              }, VW(wW, "POST", "/v2/accounts/mfaEnrollment:withdraw", EW(wW, CW))));
              this.enrolledFactors = this.enrolledFactors.filter((WW => {
                let {
                  uid: MW
                } = WW;
                return MW !== RW
              })), await this.user._updateTokensIfNecessary(WW), await this.user.reload()
            } catch (zR) {
              throw zR
            }
            var wW, CW
          }
        }
        const gC = new WeakMap;

        function iC(WW) {
          const RW = (0, wW.K)(WW);
          return gC.has(RW) || gC.set(RW, Tw._fromUser(RW)), gC.get(RW)
        }
        const Yw = "__sak";
        class Jw {
          constructor(WW, RW) {
            this.storageRetriever = WW, this.type = RW
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(Yw, "1"), this.storage.removeItem(Yw), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (WW) {
              return Promise.resolve(!1)
            }
          }
          _set(WW, RW) {
            return this.storage.setItem(WW, JSON.stringify(RW)), Promise.resolve()
          }
          _get(WW) {
            const RW = this.storage.getItem(WW);
            return Promise.resolve(RW ? JSON.parse(RW) : null)
          }
          _remove(WW) {
            return this.storage.removeItem(WW), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class Pw extends Jw {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (WW, RW) => this.onStorageEvent(WW, RW), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const WW = (0, wW.N)();
              return tM(WW) || PR(WW)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (WW) {
                return !1
              }
            }(), this.fallbackToPolling = IR(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(WW) {
            for (const RW of Object.keys(this.listeners)) {
              const MW = this.storage.getItem(RW),
                wW = this.localCache[RW];
              MW !== wW && WW(RW, wW, MW)
            }
          }
          onStorageEvent(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!WW.key) return void this.forAllChangedKeys(((WW, RW, MW) => {
              this.notifyListeners(WW, MW)
            }));
            const MW = WW.key;
            if (RW ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const wW = this.storage.getItem(MW);
              if (WW.newValue !== wW) null !== WW.newValue ? this.storage.setItem(MW, WW.newValue) : this.storage.removeItem(MW);
              else if (this.localCache[MW] === WW.newValue && !RW) return
            }
            const CW = () => {
                const WW = this.storage.getItem(MW);
                (RW || this.localCache[MW] !== WW) && this.notifyListeners(MW, WW)
              },
              zR = this.storage.getItem(MW);
            (0, wW.Y)() && 10 === document.documentMode && zR !== WW.newValue && WW.newValue !== WW.oldValue ? setTimeout(CW, 10) : CW()
          }
          notifyListeners(WW, RW) {
            this.localCache[WW] = RW;
            const MW = this.listeners[WW];
            if (MW)
              for (const wW of Array.from(MW)) wW(RW ? JSON.parse(RW) : RW)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((WW, RW, MW) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: WW,
                  oldValue: RW,
                  newValue: MW
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
          _addListener(WW, RW) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[WW] || (this.listeners[WW] = new Set, this.localCache[WW] = this.storage.getItem(WW)), this.listeners[WW].add(RW)
          }
          _removeListener(WW, RW) {
            this.listeners[WW] && (this.listeners[WW].delete(RW), 0 === this.listeners[WW].size && delete this.listeners[WW]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(WW, RW) {
            await super._set(WW, RW), this.localCache[WW] = JSON.stringify(RW)
          }
          async _get(WW) {
            const RW = await super._get(WW);
            return this.localCache[WW] = JSON.stringify(RW), RW
          }
          async _remove(WW) {
            await super._remove(WW), delete this.localCache[WW]
          }
        }
        Pw.type = "LOCAL";
        const Iw = Pw;
        class ow extends Jw {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(WW, RW) {}
          _removeListener(WW, RW) {}
        }
        ow.type = "SESSION";
        const lw = ow;
        class Fw {
          constructor(WW) {
            this.eventTarget = WW, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(WW) {
            const RW = this.receivers.find((RW => RW.isListeningto(WW)));
            if (RW) return RW;
            const MW = new Fw(WW);
            return this.receivers.push(MW), MW
          }
          isListeningto(WW) {
            return this.eventTarget === WW
          }
          async handleEvent(WW) {
            const RW = WW,
              {
                eventId: MW,
                eventType: wW,
                data: CW
              } = RW.data,
              zR = this.handlersMap[wW];
            if (!(null === zR || void 0 === zR ? void 0 : zR.size)) return;
            RW.ports[0].postMessage({
              status: "ack",
              eventId: MW,
              eventType: wW
            });
            const AW = Array.from(zR).map((async WW => WW(RW.origin, CW))),
              bR = await
            function(WW) {
              return Promise.all(WW.map((async WW => {
                try {
                  return {
                    fulfilled: !0,
                    value: await WW
                  }
                } catch (RW) {
                  return {
                    fulfilled: !1,
                    reason: RW
                  }
                }
              })))
            }(AW);
            RW.ports[0].postMessage({
              status: "done",
              eventId: MW,
              eventType: wW,
              response: bR
            })
          }
          _subscribe(WW, RW) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[WW] || (this.handlersMap[WW] = new Set), this.handlersMap[WW].add(RW)
          }
          _unsubscribe(WW, RW) {
            this.handlersMap[WW] && RW && this.handlersMap[WW].delete(RW), RW && 0 !== this.handlersMap[WW].size || delete this.handlersMap[WW], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function fw() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            MW = "";
          for (let wW = 0; wW < RW; wW++) MW += Math.floor(10 * Math.random());
          return WW + MW
        }
        Fw.receivers = [];
        class Qw {
          constructor(WW) {
            this.target = WW, this.handlers = new Set
          }
          removeMessageHandler(WW) {
            WW.messageChannel && (WW.messageChannel.port1.removeEventListener("message", WW.FX), WW.messageChannel.port1.close()), this.handlers.delete(WW)
          }
          async _send(WW, RW) {
            let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const wW = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!wW) throw new Error("connection_unavailable");
            let CW, zR;
            return new Promise(((AW, bR) => {
              const yR = fw("", 20);
              wW.port1.start();
              const NW = setTimeout((() => {
                bR(new Error("unsupported_event"))
              }), MW);
              zR = {
                messageChannel: wW,
                FX(WW) {
                  const RW = WW;
                  if (RW.data.eventId === yR) switch (RW.data.status) {
                    case "ack":
                      clearTimeout(NW), CW = setTimeout((() => {
                        bR(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(CW), AW(RW.data.response);
                      break;
                    default:
                      clearTimeout(NW), clearTimeout(CW), bR(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(zR), wW.port1.addEventListener("message", zR.FX), this.target.postMessage({
                eventType: WW,
                eventId: yR,
                data: RW
              }, [wW.port2])
            })).finally((() => {
              zR && this.removeMessageHandler(zR)
            }))
          }
        }

        function rC() {
          return window
        }

        function cC() {
          return "undefined" !== typeof rC().WorkerGlobalScope && "function" === typeof rC().importScripts
        }
        const Xw = "firebaseLocalStorageDb",
          jC = "firebaseLocalStorage",
          kC = "fbase_key";
        class aC {
          constructor(WW) {
            this.request = WW
          }
          toPromise() {
            return new Promise(((WW, RW) => {
              this.request.addEventListener("success", (() => {
                WW(this.request.result)
              })), this.request.addEventListener("error", (() => {
                RW(this.request.error)
              }))
            }))
          }
        }

        function sw(WW, RW) {
          return WW.transaction([jC], RW ? "readwrite" : "readonly").objectStore(jC)
        }

        function dw() {
          const WW = indexedDB.open(Xw, 1);
          return new Promise(((RW, MW) => {
            WW.addEventListener("error", (() => {
              MW(WW.error)
            })), WW.addEventListener("upgradeneeded", (() => {
              const RW = WW.result;
              try {
                RW.createObjectStore(jC, {
                  keyPath: kC
                })
              } catch (wW) {
                MW(wW)
              }
            })), WW.addEventListener("success", (async () => {
              const MW = WW.result;
              MW.objectStoreNames.contains(jC) ? RW(MW) : (MW.close(), await
                function() {
                  const WW = indexedDB.deleteDatabase(Xw);
                  return new aC(WW).toPromise()
                }(), RW(await dw()))
            }))
          }))
        }
        async function pw(WW, RW, MW) {
          const wW = sw(WW, !0).put({
            [kC]: RW,
            value: MW
          });
          return new aC(wW).toPromise()
        }

        function hw(WW, RW) {
          const MW = sw(WW, !0).delete(RW);
          return new aC(MW).toPromise()
        }
        class Uw {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await dw()), this.db
          }
          async _withRetries(WW) {
            let RW = 0;
            for (;;) try {
              const RW = await this._openDb();
              return await WW(RW)
            } catch (MW) {
              if (RW++ > 3) throw MW;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return cC() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = Fw._getInstance(cC() ? self : null), this.receiver._subscribe("keyChanged", (async (WW, RW) => ({
              keyProcessed: (await this._poll()).includes(RW.key)
            }))), this.receiver._subscribe("ping", (async (WW, RW) => ["keyChanged"]))
          }
          async initializeSender() {
            var WW, RW;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (WW) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new Qw(this.activeServiceWorker);
            const MW = await this.sender._send("ping", {}, 800);
            MW && (null === (WW = MW[0]) || void 0 === WW ? void 0 : WW.fulfilled) && (null === (RW = MW[0]) || void 0 === RW ? void 0 : RW.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(WW) {
            if (this.sender && this.activeServiceWorker && function() {
                var WW;
                return (null === (WW = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === WW ? void 0 : WW.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: WW
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (RW) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const WW = await dw();
              return await pw(WW, Yw, "1"), await hw(WW, Yw), !0
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
          async _set(WW, RW) {
            return this._withPendingWrite((async () => (await this._withRetries((MW => pw(MW, WW, RW))), this.localCache[WW] = RW, this.notifyServiceWorker(WW))))
          }
          async _get(WW) {
            const RW = await this._withRetries((RW => async function(WW, RW) {
              const MW = sw(WW, !1).get(RW),
                wW = await new aC(MW).toPromise();
              return void 0 === wW ? null : wW.value
            }(RW, WW)));
            return this.localCache[WW] = RW, RW
          }
          async _remove(WW) {
            return this._withPendingWrite((async () => (await this._withRetries((RW => hw(RW, WW))), delete this.localCache[WW], this.notifyServiceWorker(WW))))
          }
          async _poll() {
            const WW = await this._withRetries((WW => {
              const RW = sw(WW, !1).getAll();
              return new aC(RW).toPromise()
            }));
            if (!WW) return [];
            if (0 !== this.pendingWrites) return [];
            const RW = [],
              MW = new Set;
            for (const {
                fbase_key: wW,
                value: CW
              }
              of WW) MW.add(wW), JSON.stringify(this.localCache[wW]) !== JSON.stringify(CW) && (this.notifyListeners(wW, CW), RW.push(wW));
            for (const wW of Object.keys(this.localCache)) this.localCache[wW] && !MW.has(wW) && (this.notifyListeners(wW, null), RW.push(wW));
            return RW
          }
          notifyListeners(WW, RW) {
            this.localCache[WW] = RW;
            const MW = this.listeners[WW];
            if (MW)
              for (const wW of Array.from(MW)) wW(RW)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(WW, RW) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[WW] || (this.listeners[WW] = new Set, this._get(WW)), this.listeners[WW].add(RW)
          }
          _removeListener(WW, RW) {
            this.listeners[WW] && (this.listeners[WW].delete(RW), 0 === this.listeners[WW].size && delete this.listeners[WW]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        Uw.type = "LOCAL";
        const Ew = Uw;
        const Vw = 1e12;
        class mC {
          constructor(WW) {
            this.auth = WW, this.counter = Vw, this._widgets = new Map
          }
          render(WW, RW) {
            const MW = this.counter;
            return this._widgets.set(MW, new xC(WW, this.auth.name, RW || {})), this.counter++, MW
          }
          reset(WW) {
            var RW;
            const MW = WW || Vw;
            null === (RW = this._widgets.get(MW)) || void 0 === RW || RW.delete(), this._widgets.delete(MW)
          }
          getResponse(WW) {
            var RW;
            const MW = WW || Vw;
            return (null === (RW = this._widgets.get(MW)) || void 0 === RW ? void 0 : RW.getResponse()) || ""
          }
          async execute(WW) {
            var RW;
            const MW = WW || Vw;
            return null === (RW = this._widgets.get(MW)) || void 0 === RW || RW.execute(), ""
          }
        }
        class xC {
          constructor(WW, RW, MW) {
            this.params = MW, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const wW = "string" === typeof WW ? document.getElementById(WW) : WW;
            rR(wW, "argument-error", {
              appName: RW
            }), this.container = wW, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
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
                const RW = [],
                  MW = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let wW = 0; wW < WW; wW++) RW.push(MW.charAt(Math.floor(Math.random() * MW.length)));
                return RW.join("")
              }(50);
              const {
                callback: WW,
                "expired-callback": RW
              } = this.params;
              if (WW) try {
                WW(this.responseToken)
              } catch (MW) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, RW) try {
                  RW()
                } catch (MW) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const vC = cM("rcb"),
          Kw = new sW(3e4, 6e4);
        class uw {
          constructor() {
            var WW;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (WW = rC().grecaptcha) || void 0 === WW ? void 0 : WW.render)
          }
          load(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return rR(function(WW) {
              return WW.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(WW)
            }(RW), WW, "argument-error"), this.shouldResolveImmediately(RW) && FR(rC().grecaptcha) ? Promise.resolve(rC().grecaptcha) : new Promise(((MW, CW) => {
              const zR = rC().setTimeout((() => {
                CW(lW(WW, "network-request-failed"))
              }), Kw.get());
              rC()[vC] = () => {
                rC().clearTimeout(zR), delete rC()[vC];
                const wW = rC().grecaptcha;
                if (!wW || !FR(wW)) return void CW(lW(WW, "internal-error"));
                const AW = wW.render;
                wW.render = (WW, RW) => {
                  const MW = AW(WW, RW);
                  return this.counter++, MW
                }, this.hostLanguage = RW, MW(wW)
              };
              rM(`https://www.google.com/recaptcha/api.js??${(0,wW.gb)({onload:vC,render:"explicit",hl:RW})}`).catch((() => {
                clearTimeout(zR), CW(lW(WW, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(WW) {
            var RW;
            return !!(null === (RW = rC().grecaptcha) || void 0 === RW ? void 0 : RW.render) && (WW === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class Ow {
          async load(WW) {
            return new mC(WW)
          }
          clearedOneInstance() {}
        }
        const nw = "recaptcha",
          Gw = {
            theme: "light",
            type: "image"
          };
        class Lw {
          constructor(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, Gw),
              MW = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = RW, this.type = nw, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = sR(MW), this.isInvisible = "invisible" === this.parameters.size, rR("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const wW = "string" === typeof WW ? document.getElementById(WW) : WW;
            rR(wW, this.auth, "argument-error"), this.container = wW, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new Ow : new uw, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const WW = await this.render(),
              RW = this.getAssertedRecaptcha(),
              MW = RW.getResponse(WW);
            return MW || new Promise((MW => {
              const wW = WW => {
                WW && (this.tokenChangeListeners.delete(wW), MW(WW))
              };
              this.tokenChangeListeners.add(wW), this.isInvisible && RW.execute(WW)
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
            rR(!this.parameters.sitekey, this.auth, "argument-error"), rR(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), rR("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(WW) {
            return RW => {
              if (this.tokenChangeListeners.forEach((WW => WW(RW))), "function" === typeof WW) WW(RW);
              else if ("string" === typeof WW) {
                const MW = rC()[WW];
                "function" === typeof MW && MW(RW)
              }
            }
          }
          assertNotDestroyed() {
            rR(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let WW = this.container;
              if (!this.isInvisible) {
                const RW = document.createElement("div");
                WW.appendChild(RW), WW = RW
              }
              this.widgetId = this.getAssertedRecaptcha().render(WW, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            rR(kR() && !cC(), this.auth, "internal-error"), await
            function() {
              let WW = null;
              return new Promise((RW => {
                "complete" !== document.readyState ? (WW = () => RW(), window.addEventListener("load", WW)) : RW()
              })).catch((RW => {
                throw WW && window.removeEventListener("load", WW), RW
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const WW = await async function(WW) {
              return (await VW(WW, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            rR(WW, this.auth, "internal-error"), this.parameters.sitekey = WW
          }
          getAssertedRecaptcha() {
            return rR(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class Hw {
          constructor(WW, RW) {
            this.verificationId = WW, this.onConfirmation = RW
          }
          confirm(WW) {
            const RW = DR._fromVerification(this.verificationId, WW);
            return this.onConfirmation(RW)
          }
        }
        async function Dw(WW, RW, MW) {
          const CW = sR(WW),
            zR = await Sw(CW, RW, (0, wW.K)(MW));
          return new Hw(zR, (WW => lM(CW, WW)))
        }
        async function qC(WW, RW, MW) {
          const CW = (0, wW.K)(WW);
          await PM(!1, CW, "phone");
          const zR = await Sw(CW.auth, RW, (0, wW.K)(MW));
          return new Hw(zR, (WW => FM(CW, WW)))
        }
        async function Zw(WW, RW, MW) {
          const CW = (0, wW.K)(WW),
            zR = await Sw(CW.auth, RW, (0, wW.K)(MW));
          return new Hw(zR, (WW => fM(CW, WW)))
        }
        async function Sw(WW, RW, MW) {
          var wW;
          const CW = await MW.verify();
          try {
            let zR;
            if (rR("string" === typeof CW, WW, "argument-error"), rR(MW.type === nw, WW, "argument-error"), zR = "string" === typeof RW ? {
                phoneNumber: RW
              } : RW, "session" in zR) {
              const RW = zR.session;
              if ("phoneNumber" in zR) {
                rR("enroll" === RW.type, WW, "internal-error");
                const MW = await
                function(WW, RW) {
                  return VW(WW, "POST", "/v2/accounts/mfaEnrollment:start", EW(WW, RW))
                }(WW, {
                  idToken: RW.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: zR.phoneNumber,
                    recaptchaToken: CW
                  }
                });
                return MW.phoneSessionInfo.sessionInfo
              } {
                rR("signin" === RW.type, WW, "internal-error");
                const MW = (null === (wW = zR.multiFactorHint) || void 0 === wW ? void 0 : wW.uid) || zR.multiFactorUid;
                rR(MW, WW, "missing-multi-factor-info");
                const AW = await
                function(WW, RW) {
                  return VW(WW, "POST", "/v2/accounts/mfaSignIn:start", EW(WW, RW))
                }(WW, {
                  mfaPendingCredential: RW.credential,
                  mfaEnrollmentId: MW,
                  phoneSignInInfo: {
                    recaptchaToken: CW
                  }
                });
                return AW.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: RW
              } = await async function(WW, RW) {
                return VW(WW, "POST", "/v1/accounts:sendVerificationCode", EW(WW, RW))
              }(WW, {
                phoneNumber: zR.phoneNumber,
                recaptchaToken: CW
              });
              return RW
            }
          } finally {
            MW._reset()
          }
        }
        async function WC(WW, RW) {
          await JM((0, wW.K)(WW), RW)
        }
        class RC {
          constructor(WW) {
            this.providerId = RC.PROVIDER_ID, this.auth = sR(WW)
          }
          verifyPhoneNumber(WW, RW) {
            return Sw(this.auth, WW, (0, wW.K)(RW))
          }
          static credential(WW, RW) {
            return DR._fromVerification(WW, RW)
          }
          static credentialFromResult(WW) {
            const RW = WW;
            return RC.credentialFromTaggedObject(RW)
          }
          static credentialFromError(WW) {
            return RC.credentialFromTaggedObject(WW.customData || {})
          }
          static credentialFromTaggedObject(WW) {
            let {
              _tokenResponse: RW
            } = WW;
            if (!RW) return null;
            const {
              phoneNumber: MW,
              temporaryProof: wW
            } = RW;
            return MW && wW ? DR._fromTokenResponse(MW, wW) : null
          }
        }

        function MC(WW, RW) {
          return RW ? zM(RW) : (rR(WW._popupRedirectResolver, WW, "argument-error"), WW._popupRedirectResolver)
        }
        RC.PROVIDER_ID = "phone", RC.PHONE_SIGN_IN_METHOD = "phone";
        class wC extends VR {
          constructor(WW) {
            super("custom", "custom"), this.params = WW
          }
          _getIdTokenResponse(WW) {
            return GR(WW, this._buildIdpRequest())
          }
          _linkToIdToken(WW, RW) {
            return GR(WW, this._buildIdpRequest(RW))
          }
          _getReauthenticationResolver(WW) {
            return GR(WW, this._buildIdpRequest())
          }
          _buildIdpRequest(WW) {
            const RW = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return WW && (RW.idToken = WW), RW
          }
        }

        function CC(WW) {
          return oM(WW.auth, new wC(WW), WW.bypassAuthState)
        }

        function zz(WW) {
          const {
            auth: RW,
            user: MW
          } = WW;
          return rR(MW, RW, "internal-error"), IM(MW, new wC(WW), WW.bypassAuthState)
        }
        async function AC(WW) {
          const {
            auth: RW,
            user: MW
          } = WW;
          return rR(MW, RW, "internal-error"), JM(MW, new wC(WW), WW.bypassAuthState)
        }
        class bz {
          constructor(WW, RW, MW, wW) {
            let CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = WW, this.resolver = MW, this.user = wW, this.bypassAuthState = CW, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(RW) ? RW : [RW]
          }
          execute() {
            return new Promise((async (WW, RW) => {
              this.pendingPromise = {
                resolve: WW,
                reject: RW
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (MW) {
                this.reject(MW)
              }
            }))
          }
          async onAuthEvent(WW) {
            const {
              urlResponse: RW,
              sessionId: MW,
              postBody: wW,
              tenantId: CW,
              error: zR,
              type: AW
            } = WW;
            if (zR) return void this.reject(zR);
            const bR = {
              auth: this.auth,
              requestUri: RW,
              sessionId: MW,
              tenantId: CW || void 0,
              postBody: wW || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(AW)(bR))
            } catch (yR) {
              this.reject(yR)
            }
          }
          onError(WW) {
            this.reject(WW)
          }
          getIdpTask(WW) {
            switch (WW) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return CC;
              case "linkViaPopup":
              case "linkViaRedirect":
                return AC;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return zz;
              default:
                oW(this.auth, "internal-error")
            }
          }
          resolve(WW) {
            XW(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(WW), this.unregisterAndCleanUp()
          }
          reject(WW) {
            XW(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(WW), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const yz = new sW(2e3, 1e4);
        async function NC(WW, RW, MW) {
          const wW = sR(WW);
          fW(WW, RW, WM);
          const CW = MC(wW, MW);
          return new tz(wW, "signInViaPopup", RW, CW).executeNotNull()
        }
        async function eC(WW, RW, MW) {
          const CW = (0, wW.K)(WW);
          fW(CW.auth, RW, WM);
          const zR = MC(CW.auth, MW);
          return new tz(CW.auth, "reauthViaPopup", RW, zR, CW).executeNotNull()
        }
        async function BC(WW, RW, MW) {
          const CW = (0, wW.K)(WW);
          fW(CW.auth, RW, WM);
          const zR = MC(CW.auth, MW);
          return new tz(CW.auth, "linkViaPopup", RW, zR, CW).executeNotNull()
        }
        class tz extends bz {
          constructor(WW, RW, MW, wW, CW) {
            super(WW, RW, wW, CW), this.provider = MW, this.authWindow = null, this.pollId = null, tz.currentPopupAction && tz.currentPopupAction.cancel(), tz.currentPopupAction = this
          }
          async executeNotNull() {
            const WW = await this.execute();
            return rR(WW, this.auth, "internal-error"), WW
          }
          async onExecution() {
            XW(1 === this.filter.length, "Popup operations only handle one event");
            const WW = fw();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], WW), this.authWindow.associatedEvent = WW, this.resolver._originValidation(this.auth).catch((WW => {
              this.reject(WW)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (WW => {
              WW || this.reject(lW(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var WW;
            return (null === (WW = this.authWindow) || void 0 === WW ? void 0 : WW.associatedEvent) || null
          }
          cancel() {
            this.reject(lW(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, tz.currentPopupAction = null
          }
          pollUserCancellation() {
            const WW = () => {
              var RW, MW;
              (null === (MW = null === (RW = this.authWindow) || void 0 === RW ? void 0 : RW.window) || void 0 === MW ? void 0 : MW.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(lW(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(WW, yz.get())
            };
            WW()
          }
        }
        tz.currentPopupAction = null;
        const TC = "pendingRedirect",
          gz = new Map;
        class iz extends bz {
          constructor(WW, RW) {
            super(WW, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], RW, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let WW = gz.get(this.auth._key());
            if (!WW) {
              try {
                const RW = await async function(WW, RW) {
                  const MW = IC(RW),
                    wW = PC(WW);
                  if (!await wW._isAvailable()) return !1;
                  const CW = "true" === await wW._get(MW);
                  return await wW._remove(MW), CW
                }(this.resolver, this.auth) ? await super.execute() : null;
                WW = () => Promise.resolve(RW)
              } catch (RW) {
                WW = () => Promise.reject(RW)
              }
              gz.set(this.auth._key(), WW)
            }
            return this.bypassAuthState || gz.set(this.auth._key(), (() => Promise.resolve(null))), WW()
          }
          async onAuthEvent(WW) {
            if ("signInViaRedirect" === WW.type) return super.onAuthEvent(WW);
            if ("unknown" !== WW.type) {
              if (WW.eventId) {
                const RW = await this.auth._redirectUserForId(WW.eventId);
                if (RW) return this.user = RW, super.onAuthEvent(WW);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function YC(WW, RW) {
          return PC(WW)._set(IC(RW), "true")
        }

        function JC(WW, RW) {
          gz.set(WW._key(), RW)
        }

        function PC(WW) {
          return zM(WW._redirectPersistence)
        }

        function IC(WW) {
          return yM(TC, WW.config.apiKey, WW.name)
        }

        function oC(WW, RW, MW) {
          return async function(WW, RW, MW) {
            const wW = sR(WW);
            fW(WW, RW, WM), await wW._initializationPromise;
            const CW = MC(wW, MW);
            return await YC(CW, wW), CW._openRedirect(wW, RW, "signInViaRedirect")
          }(WW, RW, MW)
        }

        function lC(WW, RW, MW) {
          return async function(WW, RW, MW) {
            const CW = (0, wW.K)(WW);
            fW(CW.auth, RW, WM), await CW.auth._initializationPromise;
            const zR = MC(CW.auth, MW);
            await YC(zR, CW.auth);
            const AW = await rz(CW);
            return zR._openRedirect(CW.auth, RW, "reauthViaRedirect", AW)
          }(WW, RW, MW)
        }

        function FC(WW, RW, MW) {
          return async function(WW, RW, MW) {
            const CW = (0, wW.K)(WW);
            fW(CW.auth, RW, WM), await CW.auth._initializationPromise;
            const zR = MC(CW.auth, MW);
            await PM(!1, CW, RW.providerId), await YC(zR, CW.auth);
            const AW = await rz(CW);
            return zR._openRedirect(CW.auth, RW, "linkViaRedirect", AW)
          }(WW, RW, MW)
        }
        async function fC(WW, RW) {
          return await sR(WW)._initializationPromise, QC(WW, RW, !1)
        }
        async function QC(WW, RW) {
          let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const wW = sR(WW),
            CW = MC(wW, RW),
            zR = new iz(wW, CW, MW),
            AW = await zR.execute();
          return AW && !MW && (delete AW.user._redirectEventId, await wW._persistUserIfCurrent(AW.user), await wW._setRedirectUser(null, RW)), AW
        }
        async function rz(WW) {
          const RW = fw(`${WW.uid}:::`);
          return WW._redirectEventId = RW, await WW.auth._setRedirectUser(WW), await WW.auth._persistUserIfCurrent(WW), RW
        }
        class cz {
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
            let RW = !1;
            return this.consumers.forEach((MW => {
              this.isEventForConsumer(WW, MW) && (RW = !0, this.sendToConsumer(WW, MW), this.saveEventToCache(WW))
            })), this.hasHandledPotentialRedirect || ! function(WW) {
              switch (WW.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return jz(WW);
                default:
                  return !1
              }
            }(WW) || (this.hasHandledPotentialRedirect = !0, RW || (this.queuedRedirectEvent = WW, RW = !0)), RW
          }
          sendToConsumer(WW, RW) {
            var MW;
            if (WW.error && !jz(WW)) {
              const wW = (null === (MW = WW.error.code) || void 0 === MW ? void 0 : MW.split("auth/")[1]) || "internal-error";
              RW.onError(lW(this.auth, wW))
            } else RW.onAuthEvent(WW)
          }
          isEventForConsumer(WW, RW) {
            const MW = null === RW.eventId || !!WW.eventId && WW.eventId === RW.eventId;
            return RW.filter.includes(WW.type) && MW
          }
          hasEventBeenHandled(WW) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(XC(WW))
          }
          saveEventToCache(WW) {
            this.cachedEventUids.add(XC(WW)), this.lastProcessedEventTime = Date.now()
          }
        }

        function XC(WW) {
          return [WW.type, WW.eventId, WW.sessionId, WW.tenantId].filter((WW => WW)).join("-")
        }

        function jz(WW) {
          let {
            type: RW,
            error: MW
          } = WW;
          return "unknown" === RW && "auth/no-auth-event" === (null === MW || void 0 === MW ? void 0 : MW.code)
        }
        const kz = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          az = /^https?/;
        async function sC(WW) {
          if (WW.config.emulator) return;
          const {
            authorizedDomains: RW
          } = await async function(WW) {
            return VW(WW, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(WW);
          for (const wW of RW) try {
            if (dC(wW)) return
          } catch (MW) {}
          oW(WW, "unauthorized-domain")
        }

        function dC(WW) {
          const RW = jR(),
            {
              protocol: MW,
              hostname: wW
            } = new URL(RW);
          if (WW.startsWith("chrome-extension://")) {
            const CW = new URL(WW);
            return "" === CW.hostname && "" === wW ? "chrome-extension:" === MW && WW.replace("chrome-extension://", "") === RW.replace("chrome-extension://", "") : "chrome-extension:" === MW && CW.hostname === wW
          }
          if (!az.test(MW)) return !1;
          if (kz.test(WW)) return wW === WW;
          const CW = WW.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + CW + "|" + CW + ")$", "i").test(wW)
        }
        const pC = new sW(3e4, 6e4);

        function hC() {
          const WW = rC().___jsl;
          if (null === WW || void 0 === WW ? void 0 : WW.H)
            for (const RW of Object.keys(WW.H))
              if (WW.H[RW].r = WW.H[RW].r || [], WW.H[RW].L = WW.H[RW].L || [], WW.H[RW].r = [...WW.H[RW].L], WW.CP)
                for (let MW = 0; MW < WW.CP.length; MW++) WW.CP[MW] = null
        }
        let UC = null;

        function EC(WW) {
          return UC = UC || function(WW) {
            return new Promise(((RW, MW) => {
              var wW, CW, zR;

              function AW() {
                hC(), gapi.load("gapi.iframes", {
                  callback: () => {
                    RW(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    hC(), MW(lW(WW, "network-request-failed"))
                  },
                  timeout: pC.get()
                })
              }
              if (null === (CW = null === (wW = rC().gapi) || void 0 === wW ? void 0 : wW.iframes) || void 0 === CW ? void 0 : CW.Iframe) RW(gapi.iframes.getContext());
              else {
                if (!(null === (zR = rC().gapi) || void 0 === zR ? void 0 : zR.load)) {
                  const RW = cM("iframefcb");
                  return rC()[RW] = () => {
                    gapi.load ? AW() : MW(lW(WW, "network-request-failed"))
                  }, rM(`https://apis.google.com/js/api.js?onload=${RW}`).catch((WW => MW(WW)))
                }
                AW()
              }
            })).catch((WW => {
              throw UC = null, WW
            }))
          }(WW), UC
        }
        const VC = new sW(5e3, 15e3),
          mz = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          xz = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function vz(WW) {
          const RW = WW.config;
          rR(RW.authDomain, WW, "auth-domain-config-required");
          const MW = RW.emulator ? dW(RW, "emulator/auth/iframe") : `https://${WW.config.authDomain}/__/auth/iframe`,
            zR = {
              apiKey: RW.apiKey,
              appName: WW.name,
              v: CW.d
            },
            AW = xz.get(WW.config.apiHost);
          AW && (zR.eid = AW);
          const bR = WW._getFrameworks();
          return bR.length && (zR.fw = bR.join(",")), `${MW}?${(0,wW.gb)(zR).slice(1)}`
        }
        const KC = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class uC {
          constructor(WW) {
            this.window = WW, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (WW) {}
          }
        }

        function OC(WW, RW, MW) {
          let CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            zR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const AW = Math.max((window.screen.availHeight - zR) / 2, 0).toString(),
            bR = Math.max((window.screen.availWidth - CW) / 2, 0).toString();
          let yR = "";
          const NW = Object.assign(Object.assign({}, KC), {
              width: CW.toString(),
              height: zR.toString(),
              top: AW,
              left: bR
            }),
            eW = (0, wW.N)().toLowerCase();
          MW && (yR = TR(eW) ? "_blank" : MW), BR(eW) && (RW = RW || "http://localhost", NW.scrollbars = "yes");
          const BW = Object.entries(NW).reduce(((WW, RW) => {
            let [MW, wW] = RW;
            return `${WW}${MW}=${wW},`
          }), "");
          if (function() {
              var WW;
              return PR(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wW.N)()) && !!(null === (WW = window.navigator) || void 0 === WW ? void 0 : WW.standalone)
            }(eW) && "_self" !== yR) return function(WW, RW) {
            const MW = document.createElement("a");
            MW.href = WW, MW.target = RW;
            const wW = document.createEvent("MouseEvent");
            wW.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), MW.dispatchEvent(wW)
          }(RW || "", yR), new uC(null);
          const tR = window.open(RW || "", yR, BW);
          rR(tR, WW, "popup-blocked");
          try {
            tR.focus()
          } catch (TW) {}
          return new uC(tR)
        }
        const nC = "__/auth/handler",
          GC = "emulator/auth/handler",
          LC = encodeURIComponent("fac");
        async function HC(WW, RW, MW, zR, AW, bR) {
            rR(WW.config.authDomain, WW, "auth-domain-config-required"), rR(WW.config.apiKey, WW, "invalid-api-key");
            const yR = {
              apiKey: WW.config.apiKey,
              appName: WW.name,
              authType: MW,
              redirectUrl: zR,
              v: CW.d,
              eventId: AW
            };
            if (RW instanceof WM) {
              RW.setDefaultLanguage(WW.languageCode), yR.providerId = RW.providerId || "", (0, wW.U)(RW.getCustomParameters()) || (yR.customParameters = JSON.stringify(RW.getCustomParameters()));
              for (const [WW, RW] of Object.entries(bR || {})) yR[WW] = RW
            }
            if (RW instanceof RM) {
              const WW = RW.getScopes().filter((WW => "" !== WW));
              WW.length > 0 && (yR.scopes = WW.join(","))
            }
            WW.tenantId && (yR.tid = WW.tenantId);
            const NW = yR;
            for (const wW of Object.keys(NW)) void 0 === NW[wW] && delete NW[wW];
            const eW = await WW._getAppCheckToken(),
              BW = eW ? `#${LC}=${encodeURIComponent(eW)}` : "";
            return `${function(WW){let{config:RW}=WW;if(!RW.emulator)return`
            https: //${RW.authDomain}/${nC}`;return dW(RW,GC)}(WW)}?${(0,wW.gb)(NW).slice(1)}${BW}`}const DC="webStorageSupport";const qz=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lw,this._completeRedirectFn=QC,this._overrideRedirectResult=JC}async _openPopup(WW,RW,MW,wW){var CW;XW(null===(CW=this.eventManagers[WW._key()])||void 0===CW?void 0:CW.manager,"_initialize() not called before _openPopup()");return OC(WW,await HC(WW,RW,MW,jR(),wW),fw())}async _openRedirect(WW,RW,MW,wW){await this._originValidation(WW);return function(WW){rC().location.href=WW}(await HC(WW,RW,MW,jR(),wW)),new Promise((()=>{}))}_initialize(WW){const RW=WW._key();if(this.eventManagers[RW]){const{manager:WW,promise:MW}=this.eventManagers[RW];return WW?Promise.resolve(WW):(XW(MW,"If manager is not set, promise should be"),MW)}const MW=this.initAndGetManager(WW);return this.eventManagers[RW]={promise:MW},MW.catch((()=>{delete this.eventManagers[RW]})),MW}async initAndGetManager(WW){const RW=await async function(WW){const RW=await EC(WW),MW=rC().gapi;return rR(MW,WW,"internal-error"),RW.open({where:document.body,url:vz(WW),messageHandlersFilter:MW.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mz,dontclear:!0},(RW=>new Promise((async(MW,wW)=>{await RW.restyle({setHideOnLeave:!1});const CW=lW(WW,"network-request-failed"),zR=rC().setTimeout((()=>{wW(CW)}),VC.get());function AW(){rC().clearTimeout(zR),MW(RW)}RW.ping(AW).then(AW,(()=>{wW(CW)}))}))))}(WW),MW=new cz(WW);return RW.register("authEvent",(RW=>{rR(null===RW||void 0===RW?void 0:RW.authEvent,WW,"invalid-auth-event");return{status:MW.onEvent(RW.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[WW._key()]={manager:MW},this.iframes[WW._key()]=RW,MW}_isIframeWebStorageSupported(WW,RW){this.iframes[WW._key()].send(DC,{type:DC},(MW=>{var wW;const CW=null===(wW=null===MW||void 0===MW?void 0:MW[0])||void 0===wW?void 0:wW[DC];void 0!==CW&&RW(!!CW),oW(WW,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(WW){const RW=WW._key();return this.originValidationPromises[RW]||(this.originValidationPromises[RW]=sC(WW)),this.originValidationPromises[RW]}get _shouldInitProactively(){return IR()||tM()||PR()}};class ZC{constructor(WW){this.factorId=WW}_process(WW,RW,MW){switch(RW.type){case"enroll":return this._finalizeEnroll(WW,RW.credential,MW);case"signin":return this._finalizeSignIn(WW,RW.credential);default:return cR("unexpected MultiFactorSessionType")}}}class SC extends ZC{constructor(WW){super("phone"),this.credential=WW}static _fromCredential(WW){return new SC(WW)}_finalizeEnroll(WW,RW,MW){return function(WW,RW){return VW(WW,"POST","/v2/accounts/mfaEnrollment:finalize",EW(WW,RW))}(WW,{idToken:RW,displayName:MW,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(WW,RW){return function(WW,RW){return VW(WW,"POST","/v2/accounts/mfaSignIn:finalize",EW(WW,RW))}(WW,{mfaPendingCredential:RW,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Wz{constructor(){}static assertion(WW){return SC._fromCredential(WW)}}Wz.FACTOR_ID="phone";class Rz{static assertionForEnrollment(WW,RW){return Mz._fromSecret(WW,RW)}static assertionForSignIn(WW,RW){return Mz._fromEnrollmentId(WW,RW)}static async generateSecret(WW){const RW=WW;rR("undefined"!==typeof RW.auth,"internal-error");const MW=await(wW=RW.auth,CW={idToken:RW.credential,totpEnrollmentInfo:{}},VW(wW,"POST","/v2/accounts/mfaEnrollment:start",EW(wW,CW)));var wW,CW;return wz._fromStartTotpMfaEnrollmentResponse(MW,RW.auth)}}Rz.FACTOR_ID="totp";class Mz extends ZC{constructor(WW,RW,MW){super("totp"),this.otp=WW,this.enrollmentId=RW,this.secret=MW}static _fromSecret(WW,RW){return new Mz(RW,void 0,WW)}static _fromEnrollmentId(WW,RW){return new Mz(RW,WW)}async _finalizeEnroll(WW,RW,MW){return rR("undefined"!==typeof this.secret,WW,"argument-error"),function(WW,RW){return VW(WW,"POST","/v2/accounts/mfaEnrollment:finalize",EW(WW,RW))}(WW,{idToken:RW,displayName:MW,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(WW,RW){rR(void 0!==this.enrollmentId&&void 0!==this.otp,WW,"argument-error");const MW={verificationCode:this.otp};return function(WW,RW){return VW(WW,"POST","/v2/accounts/mfaSignIn:finalize",EW(WW,RW))}(WW,{mfaPendingCredential:RW,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:MW})}}class wz{constructor(WW,RW,MW,wW,CW,zR,AW){this.sessionInfo=zR,this.auth=AW,this.secretKey=WW,this.hashingAlgorithm=RW,this.codeLength=MW,this.codeIntervalSeconds=wW,this.enrollmentCompletionDeadline=CW}static _fromStartTotpMfaEnrollmentResponse(WW,RW){return new wz(WW.totpSessionInfo.sharedSecretKey,WW.totpSessionInfo.hashingAlgorithm,WW.totpSessionInfo.verificationCodeLength,WW.totpSessionInfo.periodSec,new Date(WW.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),WW.totpSessionInfo.sessionInfo,RW)}_makeTotpVerificationInfo(WW){return{sessionInfo:this.sessionInfo,verificationCode:WW}}generateQrCodeUrl(WW,RW){var MW;let wW=!1;return(Cz(WW)||Cz(RW))&&(wW=!0),wW&&(Cz(WW)&&(WW=(null===(MW=this.auth.currentUser)||void 0===MW?void 0:MW.email)||"unknownuser"),Cz(RW)&&(RW=this.auth.name)),`otpauth://totp/${RW}:${WW}?secret=${this.secretKey}&issuer=${RW}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Cz(WW){return"undefined"===typeof WW||0===(null===WW||void 0===WW?void 0:WW.length)}var zA="@firebase/auth",Az="0.23.2";class bA{constructor(WW){this.auth=WW,this.internalListeners=new Map}getUid(){var WW;return this.assertAuthConfigured(),(null===(WW=this.auth.currentUser)||void 0===WW?void 0:WW.uid)||null}async getToken(WW){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(WW)}}addAuthTokenListener(WW){if(this.assertAuthConfigured(),this.internalListeners.has(WW))return;const RW=this.auth.onIdTokenChanged((RW=>{WW((null===RW||void 0===RW?void 0:RW.stsTokenManager.accessToken)||null)}));this.internalListeners.set(WW,RW),this.updateProactiveRefresh()}removeAuthTokenListener(WW){this.assertAuthConfigured();const RW=this.internalListeners.get(WW);RW&&(this.internalListeners.delete(WW),RW(),this.updateProactiveRefresh())}assertAuthConfigured(){rR(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const yA=(0,wW.I)("authIdTokenMaxAge")||300;let Nz=null;const ez=WW=>async RW=>{const MW=RW&&await RW.getIdTokenResult(),wW=MW&&((new Date).getTime()-Date.parse(MW.issuedAtTime))/1e3;if(wW&&wW>yA)return;const CW=null===MW||void 0===MW?void 0:MW.token;Nz!==CW&&(Nz=CW,await fetch(WW,{method:CW?"POST":"DELETE",headers:CW?{Authorization:`Bearer ${CW}`}:{}}))};function Bz(){let WW=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,CW.E)();const RW=(0,CW.t)(WW,"auth");if(RW.isInitialized())return RW.getImmediate();const MW=pR(WW,{popupRedirectResolver:qz,persistence:[Ew,Iw,lw]}),zR=(0,wW.I)("authTokenSyncURL");if(zR){const WW=ez(zR);Cw(MW,WW,(()=>WW(MW.currentUser))),ww(MW,(RW=>WW(RW)))}const AW=(0,wW.E)("auth");return AW&&hR(MW,`http://${AW}`),MW}var tA;tA="Browser",(0,CW.w)(new bR.e("auth",((WW,RW)=>{let{options:MW}=RW;const wW=WW.getProvider("app").getImmediate(),CW=WW.getProvider("heartbeat"),zR=WW.getProvider("app-check-internal"),{apiKey:AW,authDomain:bR}=wW.options;rR(AW&&!AW.includes(":"),"invalid-api-key",{appName:wW.name});const yR={apiKey:AW,authDomain:bR,clientPlatform:tA,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oR(tA)},NW=new aM(wW,CW,zR,yR);return function(WW,RW){const MW=(null===RW||void 0===RW?void 0:RW.persistence)||[],wW=(Array.isArray(MW)?MW:[MW]).map(zM);(null===RW||void 0===RW?void 0:RW.errorMap)&&WW._updateErrorMap(RW.errorMap),WW._initializeWithPersistence(wW,null===RW||void 0===RW?void 0:RW.popupRedirectResolver)}(NW,MW),NW}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((WW,RW,MW)=>{WW.getProvider("auth-internal").initialize()}))),(0,CW.w)(new bR.e("auth-internal",(WW=>(WW=>new bA(WW))(sR(WW.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,CW.M)(zA,Az,function(WW){switch(WW){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(tA)),(0,CW.M)(zA,Az,"esm2017")}};Object.freeze(modules);for(const WW in modules)Object.freeze(modules[WW]);