/*! For license information please see eulrrq.258.a3528977.chunk.js.LICENSE.txt */
export const id = 258;
export const ids = [258];
export const modules = {
    39911: (UU, RU, gU) => {
        gU.r(RU), gU.d(RU, {
          ActionCodeOperation: () => jU,
          ActionCodeURL: () => NR,
          AuthCredential: () => HR,
          AuthErrorCodes: () => eU,
          EmailAuthCredential: () => AR,
          EmailAuthProvider: () => OR,
          FacebookAuthProvider: () => tg,
          FactorId: () => qU,
          GithubAuthProvider: () => Eg,
          GoogleAuthProvider: () => pg,
          OAuthCredential: () => MR,
          OAuthProvider: () => gg,
          OperationType: () => GU,
          PhoneAuthCredential: () => LR,
          PhoneAuthProvider: () => gp,
          PhoneMultiFactorGenerator: () => gE,
          ProviderId: () => KU,
          RecaptchaVerifier: () => Dt,
          SAMLAuthProvider: () => Tg,
          SignInMethod: () => cU,
          TotpMultiFactorGenerator: () => tE,
          TotpSecret: () => EE,
          TwitterAuthProvider: () => qg,
          applyActionCode: () => Bg,
          beforeAuthStateChanged: () => pt,
          browserLocalPersistence: () => ft,
          browserPopupRedirectResolver: () => Op,
          browserSessionPersistence: () => mt,
          checkActionCode: () => Vg,
          confirmPasswordReset: () => Yg,
          connectAuthEmulator: () => XR,
          createUserWithEmailAndPassword: () => Xg,
          debugErrorMap: () => CU,
          deleteUser: () => Kt,
          fetchSignInMethodsForEmail: () => sg,
          getAdditionalUserInfo: () => Ut,
          getAuth: () => uE,
          getIdToken: () => AU,
          getIdTokenResult: () => zU,
          getMultiFactorResolver: () => jt,
          getRedirectResult: () => np,
          inMemoryPersistence: () => TR,
          indexedDBLocalPersistence: () => Ht,
          initializeAuth: () => rR,
          initializeRecaptchaConfig: () => gt,
          isSignInWithEmailLink: () => Hg,
          linkWithCredential: () => Ig,
          linkWithPhoneNumber: () => lt,
          linkWithPopup: () => jp,
          linkWithRedirect: () => wp,
          multiFactor: () => ht,
          onAuthStateChanged: () => Et,
          onIdTokenChanged: () => tt,
          parseActionCodeURL: () => lR,
          prodErrorMap: () => hU,
          reauthenticateWithCredential: () => Jg,
          reauthenticateWithPhoneNumber: () => Ot,
          reauthenticateWithPopup: () => Gp,
          reauthenticateWithRedirect: () => Jp,
          reload: () => UR,
          sendEmailVerification: () => yg,
          sendPasswordResetEmail: () => ag,
          sendSignInLinkToEmail: () => dg,
          setPersistence: () => Rt,
          signInAnonymously: () => jg,
          signInWithCredential: () => mg,
          signInWithCustomToken: () => wg,
          signInWithEmailAndPassword: () => vg,
          signInWithEmailLink: () => Sg,
          signInWithPhoneNumber: () => Nt,
          signInWithPopup: () => cp,
          signInWithRedirect: () => Ip,
          signOut: () => qt,
          unlink: () => Qg,
          updateCurrentUser: () => Tt,
          updateEmail: () => ig,
          updatePassword: () => Ag,
          updatePhoneNumber: () => Rp,
          updateProfile: () => Fg,
          useDeviceLanguage: () => Pt,
          verifyBeforeUpdateEmail: () => kg,
          verifyPasswordResetCode: () => rg
        });
        var tU = gU(39894),
          pU = gU(39882);

        function EU(UU, RU) {
          var gU = {};
          for (var tU in UU) Object.prototype.hasOwnProperty.call(UU, tU) && RU.indexOf(tU) < 0 && (gU[tU] = UU[tU]);
          if (null != UU && "function" === typeof Object.getOwnPropertySymbols) {
            var pU = 0;
            for (tU = Object.getOwnPropertySymbols(UU); pU < tU.length; pU++) RU.indexOf(tU[pU]) < 0 && Object.prototype.propertyIsEnumerable.call(UU, tU[pU]) && (gU[tU[pU]] = UU[tU[pU]])
          }
          return gU
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var PU = gU(39898),
          TU = gU(39887);
        const qU = {
            PHONE: "phone",
            TOTP: "totp"
          },
          KU = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          cU = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          GU = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          jU = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function uU() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const CU = function() {
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
          hU = uU,
          QU = new tU.e("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          eU = {
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
          WU = new PU.h("@firebase/auth");

        function fU(UU) {
          if (WU.logLevel <= PU.d.ERROR) {
            for (var RU = arguments.length, gU = new Array(RU > 1 ? RU - 1 : 0), tU = 1; tU < RU; tU++) gU[tU - 1] = arguments[tU];
            WU.error(`Auth (${pU.f}): ${UU}`, ...gU)
          }
        }

        function xU(UU) {
          for (var RU = arguments.length, gU = new Array(RU > 1 ? RU - 1 : 0), tU = 1; tU < RU; tU++) gU[tU - 1] = arguments[tU];
          throw wU(UU, ...gU)
        }

        function mU(UU) {
          for (var RU = arguments.length, gU = new Array(RU > 1 ? RU - 1 : 0), tU = 1; tU < RU; tU++) gU[tU - 1] = arguments[tU];
          return wU(UU, ...gU)
        }

        function IU(UU, RU, gU) {
          const pU = Object.assign(Object.assign({}, hU()), {
            [RU]: gU
          });
          return new tU.e("auth", "Firebase", pU).create(RU, {
            appName: UU.name
          })
        }

        function JU(UU, RU, gU) {
          if (!(RU instanceof gU)) throw gU.name !== RU.constructor.name && xU(UU, "argument-error"), IU(UU, "argument-error", `Type of ${RU.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function wU(UU) {
          for (var RU = arguments.length, gU = new Array(RU > 1 ? RU - 1 : 0), tU = 1; tU < RU; tU++) gU[tU - 1] = arguments[tU];
          if ("string" !== typeof UU) {
            const RU = gU[0],
              tU = [...gU.slice(1)];
            return tU[0] && (tU[0].appName = UU.name), UU._errorFactory.create(RU, ...tU)
          }
          return QU.create(UU, ...gU)
        }

        function nU(UU, RU) {
          if (!UU) {
            for (var gU = arguments.length, tU = new Array(gU > 2 ? gU - 2 : 0), pU = 2; pU < gU; pU++) tU[pU - 2] = arguments[pU];
            throw wU(RU, ...tU)
          }
        }

        function bU(UU) {
          const RU = "INTERNAL ASSERTION FAILED: " + UU;
          throw fU(RU), new Error(RU)
        }

        function oU(UU, RU) {
          UU || bU(RU)
        }

        function ZU() {
          var UU;
          return "undefined" !== typeof self && (null === (UU = self.location) || void 0 === UU ? void 0 : UU.href) || ""
        }

        function aU() {
          return "http:" === YU() || "https:" === YU()
        }

        function YU() {
          var UU;
          return "undefined" !== typeof self && (null === (UU = self.location) || void 0 === UU ? void 0 : UU.protocol) || null
        }
        class BU {
          constructor(UU, RU) {
            this.shortDelay = UU, this.longDelay = RU, oU(RU > UU, "Short delay should be less than long delay!"), this.isMobile = (0, tU.Q)() || (0, tU.U)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (aU() || (0, tU.M)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function VU(UU, RU) {
          oU(UU.emulator, "Emulator should always be set here");
          const {
            url: gU
          } = UU.emulator;
          return RU ? `${gU}${RU.startsWith("/")?RU.slice(1):RU}` : gU
        }
        class rU {
          static initialize(UU, RU, gU) {
            this.fetchImpl = UU, RU && (this.headersImpl = RU), gU && (this.responseImpl = gU)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void bU("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void bU("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void bU("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const XU = {
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
          vU = new BU(3e4, 6e4);

        function dU(UU, RU) {
          return UU.tenantId && !RU.tenantId ? Object.assign(Object.assign({}, RU), {
            tenantId: UU.tenantId
          }) : RU
        }
        async function HU(UU, RU, gU, pU) {
          return SU(UU, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let EU = {},
              PU = {};
            pU && ("GET" === RU ? PU = pU : EU = {
              body: JSON.stringify(pU)
            });
            const TU = (0, tU._)(Object.assign({
                key: UU.config.apiKey
              }, PU)).slice(1),
              qU = await UU._getAdditionalHeaders();
            return qU["Content-Type"] = "application/json", UU.languageCode && (qU["X-Firebase-Locale"] = UU.languageCode), rU.fetch()(yU(UU, UU.config.apiHost, gU, TU), Object.assign({
              method: RU,
              headers: qU,
              referrerPolicy: "no-referrer"
            }, EU))
          }))
        }
        async function SU(UU, RU, gU) {
          UU._canInitEmulator = !1;
          const pU = Object.assign(Object.assign({}, XU), RU);
          try {
            const RU = new kU(UU),
              tU = await Promise.race([gU(), RU.promise]);
            RU.clearNetworkTimeout();
            const EU = await tU.json();
            if ("needConfirmation" in EU) throw FU(UU, "account-exists-with-different-credential", EU);
            if (tU.ok && !("errorMessage" in EU)) return EU;
            {
              const RU = tU.ok ? EU.errorMessage : EU.error.message,
                [gU, PU] = RU.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === gU) throw FU(UU, "credential-already-in-use", EU);
              if ("EMAIL_EXISTS" === gU) throw FU(UU, "email-already-in-use", EU);
              if ("USER_DISABLED" === gU) throw FU(UU, "user-disabled", EU);
              const TU = pU[gU] || gU.toLowerCase().replace(/[_\s]+/g, "-");
              if (PU) throw IU(UU, TU, PU);
              xU(UU, TU)
            }
          } catch (EU) {
            if (EU instanceof tU.i) throw EU;
            xU(UU, "network-request-failed", {
              message: String(EU)
            })
          }
        }
        async function sU(UU, RU, gU, tU) {
          let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const EU = await HU(UU, RU, gU, tU, pU);
          return "mfaPendingCredential" in EU && xU(UU, "multi-factor-auth-required", {
            _serverResponse: EU
          }), EU
        }

        function yU(UU, RU, gU, tU) {
          const pU = `${RU}${gU}?${tU}`;
          return UU.config.emulator ? VU(UU.config, pU) : `${UU.config.apiScheme}://${pU}`
        }
        class kU {
          constructor(UU) {
            this.auth = UU, this.timer = null, this.promise = new Promise(((UU, RU) => {
              this.timer = setTimeout((() => RU(mU(this.auth, "network-request-failed"))), vU.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function FU(UU, RU, gU) {
          const tU = {
            appName: UU.name
          };
          gU.email && (tU.email = gU.email), gU.phoneNumber && (tU.phoneNumber = gU.phoneNumber);
          const pU = mU(UU, RU, tU);
          return pU.customData._tokenResponse = gU, pU
        }

        function iU(UU) {
          if (UU) try {
            const RU = new Date(Number(UU));
            if (!isNaN(RU.getTime())) return RU.toUTCString()
          } catch (RU) {}
        }

        function AU(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, tU.I)(UU).getIdToken(RU)
        }
        async function zU(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const gU = (0, tU.I)(UU),
            pU = await gU.getIdToken(RU),
            EU = DU(pU);
          nU(EU && EU.exp && EU.auth_time && EU.iat, gU.auth, "internal-error");
          const PU = "object" === typeof EU.firebase ? EU.firebase : void 0,
            TU = null === PU || void 0 === PU ? void 0 : PU.sign_in_provider;
          return {
            claims: EU,
            token: pU,
            authTime: iU(MU(EU.auth_time)),
            issuedAtTime: iU(MU(EU.iat)),
            expirationTime: iU(MU(EU.exp)),
            signInProvider: TU || null,
            signInSecondFactor: (null === PU || void 0 === PU ? void 0 : PU.sign_in_second_factor) || null
          }
        }

        function MU(UU) {
          return 1e3 * Number(UU)
        }

        function DU(UU) {
          const [RU, gU, pU] = UU.split(".");
          if (void 0 === RU || void 0 === gU || void 0 === pU) return fU("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const UU = (0, tU.n)(gU);
            return UU ? JSON.parse(UU) : (fU("Failed to decode base64 JWT payload"), null)
          } catch (EU) {
            return fU("Caught error parsing JWT payload as JSON", null === EU || void 0 === EU ? void 0 : EU.toString()), null
          }
        }
        async function LU(UU, RU) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return RU;
          try {
            return await RU
          } catch (gU) {
            throw gU instanceof tU.i && function(UU) {
              let {
                code: RU
              } = UU;
              return "auth/user-disabled" === RU || "auth/user-token-expired" === RU
            }(gU) && UU.auth.currentUser === UU && await UU.auth.signOut(), gU
          }
        }
        class NU {
          constructor(UU) {
            this.user = UU, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(UU) {
            var RU;
            if (UU) {
              const UU = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), UU
            } {
              this.errorBackoff = 3e4;
              const UU = (null !== (RU = this.user.stsTokenManager.expirationTime) && void 0 !== RU ? RU : 0) - Date.now() - 3e5;
              return Math.max(0, UU)
            }
          }
          schedule() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const RU = this.getInterval(UU);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), RU)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (UU) {
              return void("auth/network-request-failed" === (null === UU || void 0 === UU ? void 0 : UU.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class lU {
          constructor(UU, RU) {
            this.createdAt = UU, this.lastLoginAt = RU, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = iU(this.lastLoginAt), this.creationTime = iU(this.createdAt)
          }
          _copy(UU) {
            this.createdAt = UU.createdAt, this.lastLoginAt = UU.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function OU(UU) {
          var RU;
          const gU = UU.auth,
            tU = await UU.getIdToken(),
            pU = await LU(UU, async function(UU, RU) {
              return HU(UU, "POST", "/v1/accounts:lookup", RU)
            }(gU, {
              idToken: tU
            }));
          nU(null === pU || void 0 === pU ? void 0 : pU.users.length, gU, "internal-error");
          const PU = pU.users[0];
          UU._notifyReloadListener(PU);
          const TU = (null === (RU = PU.providerUserInfo) || void 0 === RU ? void 0 : RU.length) ? PU.providerUserInfo.map((UU => {
            var {
              providerId: RU
            } = UU, gU = EU(UU, ["providerId"]);
            return {
              providerId: RU,
              uid: gU.rawId || "",
              displayName: gU.displayName || null,
              email: gU.email || null,
              phoneNumber: gU.phoneNumber || null,
              photoURL: gU.photoUrl || null
            }
          })) : [];
          const qU = (KU = UU.providerData, cU = TU, [...KU.filter((UU => !cU.some((RU => RU.providerId === UU.providerId)))), ...cU]);
          var KU, cU;
          const GU = UU.isAnonymous,
            jU = !(UU.email && PU.passwordHash) && !(null === qU || void 0 === qU ? void 0 : qU.length),
            uU = !!GU && jU,
            CU = {
              uid: PU.localId,
              displayName: PU.displayName || null,
              photoURL: PU.photoUrl || null,
              email: PU.email || null,
              emailVerified: PU.emailVerified || !1,
              phoneNumber: PU.phoneNumber || null,
              tenantId: PU.tenantId || null,
              providerData: qU,
              metadata: new lU(PU.createdAt, PU.lastLoginAt),
              isAnonymous: uU
            };
          Object.assign(UU, CU)
        }
        async function UR(UU) {
          const RU = (0, tU.I)(UU);
          await OU(RU), await RU.auth._persistUserIfCurrent(RU), RU.auth._notifyListenersIfCurrent(RU)
        }
        class RR {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(UU) {
            nU(UU.idToken, "internal-error"), nU("undefined" !== typeof UU.idToken, "internal-error"), nU("undefined" !== typeof UU.refreshToken, "internal-error");
            const RU = "expiresIn" in UU && "undefined" !== typeof UU.expiresIn ? Number(UU.expiresIn) : function(UU) {
              const RU = DU(UU);
              return nU(RU, "internal-error"), nU("undefined" !== typeof RU.exp, "internal-error"), nU("undefined" !== typeof RU.iat, "internal-error"), Number(RU.exp) - Number(RU.iat)
            }(UU.idToken);
            this.updateTokensAndExpiration(UU.idToken, UU.refreshToken, RU)
          }
          async getToken(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return nU(!this.accessToken || this.refreshToken, UU, "user-token-expired"), RU || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(UU, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(UU, RU) {
            const {
              accessToken: gU,
              refreshToken: pU,
              expiresIn: EU
            } = await async function(UU, RU) {
              const gU = await SU(UU, {}, (async () => {
                const gU = (0, tU._)({
                    grant_type: "refresh_token",
                    refresh_token: RU
                  }).slice(1),
                  {
                    tokenApiHost: pU,
                    apiKey: EU
                  } = UU.config,
                  PU = yU(UU, pU, "/v1/token", `key=${EU}`),
                  TU = await UU._getAdditionalHeaders();
                return TU["Content-Type"] = "application/x-www-form-urlencoded", rU.fetch()(PU, {
                  method: "POST",
                  headers: TU,
                  body: gU
                })
              }));
              return {
                accessToken: gU.access_token,
                expiresIn: gU.expires_in,
                refreshToken: gU.refresh_token
              }
            }(UU, RU);
            this.updateTokensAndExpiration(gU, pU, Number(EU))
          }
          updateTokensAndExpiration(UU, RU, gU) {
            this.refreshToken = RU || null, this.accessToken = UU || null, this.expirationTime = Date.now() + 1e3 * gU
          }
          static fromJSON(UU, RU) {
            const {
              refreshToken: gU,
              accessToken: tU,
              expirationTime: pU
            } = RU, EU = new RR;
            return gU && (nU("string" === typeof gU, "internal-error", {
              appName: UU
            }), EU.refreshToken = gU), tU && (nU("string" === typeof tU, "internal-error", {
              appName: UU
            }), EU.accessToken = tU), pU && (nU("number" === typeof pU, "internal-error", {
              appName: UU
            }), EU.expirationTime = pU), EU
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(UU) {
            this.accessToken = UU.accessToken, this.refreshToken = UU.refreshToken, this.expirationTime = UU.expirationTime
          }
          _clone() {
            return Object.assign(new RR, this.toJSON())
          }
          _performRefresh() {
            return bU("not implemented")
          }
        }

        function gR(UU, RU) {
          nU("string" === typeof UU || "undefined" === typeof UU, "internal-error", {
            appName: RU
          })
        }
        class tR {
          constructor(UU) {
            var {
              uid: RU,
              auth: gU,
              stsTokenManager: tU
            } = UU, pU = EU(UU, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new NU(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = RU, this.auth = gU, this.stsTokenManager = tU, this.accessToken = tU.accessToken, this.displayName = pU.displayName || null, this.email = pU.email || null, this.emailVerified = pU.emailVerified || !1, this.phoneNumber = pU.phoneNumber || null, this.photoURL = pU.photoURL || null, this.isAnonymous = pU.isAnonymous || !1, this.tenantId = pU.tenantId || null, this.providerData = pU.providerData ? [...pU.providerData] : [], this.metadata = new lU(pU.createdAt || void 0, pU.lastLoginAt || void 0)
          }
          async getIdToken(UU) {
            const RU = await LU(this, this.stsTokenManager.getToken(this.auth, UU));
            return nU(RU, this.auth, "internal-error"), this.accessToken !== RU && (this.accessToken = RU, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), RU
          }
          getIdTokenResult(UU) {
            return zU(this, UU)
          }
          reload() {
            return UR(this)
          }
          _assign(UU) {
            this !== UU && (nU(this.uid === UU.uid, this.auth, "internal-error"), this.displayName = UU.displayName, this.photoURL = UU.photoURL, this.email = UU.email, this.emailVerified = UU.emailVerified, this.phoneNumber = UU.phoneNumber, this.isAnonymous = UU.isAnonymous, this.tenantId = UU.tenantId, this.providerData = UU.providerData.map((UU => Object.assign({}, UU))), this.metadata._copy(UU.metadata), this.stsTokenManager._assign(UU.stsTokenManager))
          }
          _clone(UU) {
            const RU = new tR(Object.assign(Object.assign({}, this), {
              auth: UU,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return RU.metadata._copy(this.metadata), RU
          }
          _onReload(UU) {
            nU(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = UU, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(UU) {
            this.reloadListener ? this.reloadListener(UU) : this.reloadUserInfo = UU
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              gU = !1;
            UU.idToken && UU.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(UU), gU = !0), RU && await OU(this), await this.auth._persistUserIfCurrent(this), gU && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const UU = await this.getIdToken();
            return await LU(this, async function(UU, RU) {
              return HU(UU, "POST", "/v1/accounts:delete", RU)
            }(this.auth, {
              idToken: UU
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
              providerData: this.providerData.map((UU => Object.assign({}, UU))),
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
          static _fromJSON(UU, RU) {
            var gU, tU, pU, EU, PU, TU, qU, KU;
            const cU = null !== (gU = RU.displayName) && void 0 !== gU ? gU : void 0,
              GU = null !== (tU = RU.email) && void 0 !== tU ? tU : void 0,
              jU = null !== (pU = RU.phoneNumber) && void 0 !== pU ? pU : void 0,
              uU = null !== (EU = RU.photoURL) && void 0 !== EU ? EU : void 0,
              CU = null !== (PU = RU.tenantId) && void 0 !== PU ? PU : void 0,
              hU = null !== (TU = RU._redirectEventId) && void 0 !== TU ? TU : void 0,
              QU = null !== (qU = RU.createdAt) && void 0 !== qU ? qU : void 0,
              eU = null !== (KU = RU.lastLoginAt) && void 0 !== KU ? KU : void 0,
              {
                uid: WU,
                emailVerified: fU,
                isAnonymous: xU,
                providerData: mU,
                stsTokenManager: IU
              } = RU;
            nU(WU && IU, UU, "internal-error");
            const JU = RR.fromJSON(this.name, IU);
            nU("string" === typeof WU, UU, "internal-error"), gR(cU, UU.name), gR(GU, UU.name), nU("boolean" === typeof fU, UU, "internal-error"), nU("boolean" === typeof xU, UU, "internal-error"), gR(jU, UU.name), gR(uU, UU.name), gR(CU, UU.name), gR(hU, UU.name), gR(QU, UU.name), gR(eU, UU.name);
            const wU = new tR({
              uid: WU,
              auth: UU,
              email: GU,
              emailVerified: fU,
              displayName: cU,
              isAnonymous: xU,
              photoURL: uU,
              phoneNumber: jU,
              tenantId: CU,
              stsTokenManager: JU,
              createdAt: QU,
              lastLoginAt: eU
            });
            return mU && Array.isArray(mU) && (wU.providerData = mU.map((UU => Object.assign({}, UU)))), hU && (wU._redirectEventId = hU), wU
          }
          static async _fromIdTokenResponse(UU, RU) {
            let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const tU = new RR;
            tU.updateFromServerResponse(RU);
            const pU = new tR({
              uid: RU.localId,
              auth: UU,
              stsTokenManager: tU,
              isAnonymous: gU
            });
            return await OU(pU), pU
          }
        }
        const pR = new Map;

        function ER(UU) {
          oU(UU instanceof Function, "Expected a class definition");
          let RU = pR.get(UU);
          return RU ? (oU(RU instanceof UU, "Instance stored in cache mismatched with class"), RU) : (RU = new UU, pR.set(UU, RU), RU)
        }
        class PR {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(UU, RU) {
            this.storage[UU] = RU
          }
          async _get(UU) {
            const RU = this.storage[UU];
            return void 0 === RU ? null : RU
          }
          async _remove(UU) {
            delete this.storage[UU]
          }
          _addListener(UU, RU) {}
          _removeListener(UU, RU) {}
        }
        PR.type = "NONE";
        const TR = PR;

        function qR(UU, RU, gU) {
          return `firebase:${UU}:${RU}:${gU}`
        }
        class KR {
          constructor(UU, RU, gU) {
            this.persistence = UU, this.auth = RU, this.userKey = gU;
            const {
              config: tU,
              name: pU
            } = this.auth;
            this.fullUserKey = qR(this.userKey, tU.apiKey, pU), this.fullPersistenceKey = qR("persistence", tU.apiKey, pU), this.boundEventHandler = RU._onStorageEvent.bind(RU), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(UU) {
            return this.persistence._set(this.fullUserKey, UU.toJSON())
          }
          async getCurrentUser() {
            const UU = await this.persistence._get(this.fullUserKey);
            return UU ? tR._fromJSON(this.auth, UU) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(UU) {
            if (this.persistence === UU) return;
            const RU = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = UU, RU ? this.setCurrentUser(RU) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(UU, RU) {
            let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!RU.length) return new KR(ER(TR), UU, gU);
            const tU = (await Promise.all(RU.map((async UU => {
              if (await UU._isAvailable()) return UU
            })))).filter((UU => UU));
            let pU = tU[0] || ER(TR);
            const EU = qR(gU, UU.config.apiKey, UU.name);
            let PU = null;
            for (const KU of RU) try {
              const RU = await KU._get(EU);
              if (RU) {
                const gU = tR._fromJSON(UU, RU);
                KU !== pU && (PU = gU), pU = KU;
                break
              }
            } catch (qU) {}
            const TU = tU.filter((UU => UU._shouldAllowMigration));
            return pU._shouldAllowMigration && TU.length ? (pU = TU[0], PU && await pU._set(EU, PU.toJSON()), await Promise.all(RU.map((async UU => {
              if (UU !== pU) try {
                await UU._remove(EU)
              } catch (qU) {}
            }))), new KR(pU, UU, gU)) : new KR(pU, UU, gU)
          }
        }

        function cR(UU) {
          const RU = UU.toLowerCase();
          if (RU.includes("opera/") || RU.includes("opr/") || RU.includes("opios/")) return "Opera";
          if (CR(RU)) return "IEMobile";
          if (RU.includes("msie") || RU.includes("trident/")) return "IE";
          if (RU.includes("edge/")) return "Edge";
          if (GR(RU)) return "Firefox";
          if (RU.includes("silk/")) return "Silk";
          if (QR(RU)) return "Blackberry";
          if (eR(RU)) return "Webos";
          if (jR(RU)) return "Safari";
          if ((RU.includes("chrome/") || uR(RU)) && !RU.includes("edge/")) return "Chrome";
          if (hR(RU)) return "Android";
          {
            const RU = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              gU = UU.match(RU);
            if (2 === (null === gU || void 0 === gU ? void 0 : gU.length)) return gU[1]
          }
          return "Other"
        }

        function GR() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tU.J)();
          return /firefox\//i.test(UU)
        }

        function jR() {
          const UU = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tU.J)()).toLowerCase();
          return UU.includes("safari/") && !UU.includes("chrome/") && !UU.includes("crios/") && !UU.includes("android")
        }

        function uR() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tU.J)();
          return /crios\//i.test(UU)
        }

        function CR() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tU.J)();
          return /iemobile/i.test(UU)
        }

        function hR() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tU.J)();
          return /android/i.test(UU)
        }

        function QR() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tU.J)();
          return /blackberry/i.test(UU)
        }

        function eR() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tU.J)();
          return /webos/i.test(UU)
        }

        function WR() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tU.J)();
          return /iphone|ipad|ipod/i.test(UU) || /macintosh/i.test(UU) && /mobile/i.test(UU)
        }

        function fR() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tU.J)();
          return WR(UU) || hR(UU) || eR(UU) || QR(UU) || /windows phone/i.test(UU) || CR(UU)
        }

        function xR(UU) {
          let RU, gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (UU) {
            case "Browser":
              RU = cR((0, tU.J)());
              break;
            case "Worker":
              RU = `${cR((0,tU.J)())}-${UU}`;
              break;
            default:
              RU = UU
          }
          const EU = gU.length ? gU.join(",") : "FirebaseCore-web";
          return `${RU}/JsCore/${pU.f}/${EU}`
        }
        async function mR(UU, RU) {
          return HU(UU, "GET", "/v2/recaptchaConfig", dU(UU, RU))
        }

        function IR(UU) {
          return void 0 !== UU && void 0 !== UU.getResponse
        }

        function JR(UU) {
          return void 0 !== UU && void 0 !== UU.enterprise
        }
        class wR {
          constructor(UU) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === UU.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = UU.recaptchaKey.split("/")[3], this.emailPasswordEnabled = UU.recaptchaEnforcementState.some((UU => "EMAIL_PASSWORD_PROVIDER" === UU.provider && "OFF" !== UU.enforcementState))
          }
        }

        function nR(UU) {
          return new Promise(((RU, gU) => {
            const tU = document.createElement("script");
            tU.setAttribute("src", UU), tU.onload = RU, tU.onerror = UU => {
                const RU = mU("internal-error");
                RU.customData = UU, gU(RU)
              }, tU.type = "text/javascript", tU.charset = "UTF-8",
              function() {
                var UU, RU;
                return null !== (RU = null === (UU = document.getElementsByTagName("head")) || void 0 === UU ? void 0 : UU[0]) && void 0 !== RU ? RU : document
              }().appendChild(tU)
          }))
        }

        function bR(UU) {
          return `__${UU}${Math.floor(1e6*Math.random())}`
        }
        class oR {
          constructor(UU) {
            this.type = "recaptcha-enterprise", this.auth = BR(UU)
          }
          async verify() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function gU(RU, gU, tU) {
              const pU = window.grecaptcha;
              JR(pU) ? pU.enterprise.ready((() => {
                pU.enterprise.execute(RU, {
                  action: UU
                }).then((UU => {
                  gU(UU)
                })).catch((() => {
                  gU("NO_RECAPTCHA")
                }))
              })) : tU(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((UU, tU) => {
              (async function(UU) {
                if (!RU) {
                  if (null == UU.tenantId && null != UU._agentRecaptchaConfig) return UU._agentRecaptchaConfig.siteKey;
                  if (null != UU.tenantId && void 0 !== UU._tenantRecaptchaConfigs[UU.tenantId]) return UU._tenantRecaptchaConfigs[UU.tenantId].siteKey
                }
                return new Promise((async (RU, gU) => {
                  mR(UU, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((tU => {
                    if (void 0 !== tU.recaptchaKey) {
                      const gU = new wR(tU);
                      return null == UU.tenantId ? UU._agentRecaptchaConfig = gU : UU._tenantRecaptchaConfigs[UU.tenantId] = gU, RU(gU.siteKey)
                    }
                    gU(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((UU => {
                    gU(UU)
                  }))
                }))
              })(this.auth).then((pU => {
                if (!RU && JR(window.grecaptcha)) gU(pU, UU, tU);
                else {
                  if ("undefined" === typeof window) return void tU(new Error("RecaptchaVerifier is only supported in browser"));
                  nR("https://www.google.com/recaptcha/enterprise.js?render=" + pU).then((() => {
                    gU(pU, UU, tU)
                  })).catch((UU => {
                    tU(UU)
                  }))
                }
              })).catch((UU => {
                tU(UU)
              }))
            }))
          }
        }
        async function ZR(UU, RU, gU) {
          let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const pU = new oR(UU);
          let EU;
          try {
            EU = await pU.verify(gU)
          } catch (TU) {
            EU = await pU.verify(gU, !0)
          }
          const PU = Object.assign({}, RU);
          return tU ? Object.assign(PU, {
            captchaResp: EU
          }) : Object.assign(PU, {
            captchaResponse: EU
          }), Object.assign(PU, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(PU, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), PU
        }
        class aR {
          constructor(UU) {
            this.auth = UU, this.queue = []
          }
          pushCallback(UU, RU) {
            const gU = RU => new Promise(((gU, tU) => {
              try {
                gU(UU(RU))
              } catch (pU) {
                tU(pU)
              }
            }));
            gU.onAbort = RU, this.queue.push(gU);
            const tU = this.queue.length - 1;
            return () => {
              this.queue[tU] = () => Promise.resolve()
            }
          }
          async runMiddleware(UU) {
            if (this.auth.currentUser === UU) return;
            const RU = [];
            try {
              for (const gU of this.queue) await gU(UU), gU.onAbort && RU.push(gU.onAbort)
            } catch (gU) {
              RU.reverse();
              for (const UU of RU) try {
                UU()
              } catch (tU) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === gU || void 0 === gU ? void 0 : gU.message
              })
            }
          }
        }
        class YR {
          constructor(UU, RU, gU, tU) {
            this.app = UU, this.heartbeatServiceProvider = RU, this.appCheckServiceProvider = gU, this.config = tU, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new VR(this), this.idTokenSubscription = new VR(this), this.beforeStateQueue = new aR(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = QU, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = UU.name, this.clientVersion = tU.sdkClientVersion
          }
          _initializeWithPersistence(UU, RU) {
            return RU && (this._popupRedirectResolver = ER(RU)), this._initializationPromise = this.queue((async () => {
              var gU, tU;
              if (!this._deleted && (this.persistenceManager = await KR.create(this, UU), !this._deleted)) {
                if (null === (gU = this._popupRedirectResolver) || void 0 === gU ? void 0 : gU._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (pU) {}
                await this.initializeCurrentUser(RU), this.lastNotifiedUid = (null === (tU = this.currentUser) || void 0 === tU ? void 0 : tU.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const UU = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || UU ? this.currentUser && UU && this.currentUser.uid === UU.uid ? (this._currentUser._assign(UU), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(UU, !0) : void 0
          }
          async initializeCurrentUser(UU) {
            var RU;
            const gU = await this.assertedPersistence.getCurrentUser();
            let tU = gU,
              pU = !1;
            if (UU && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const gU = null === (RU = this.redirectUser) || void 0 === RU ? void 0 : RU._redirectEventId,
                EU = null === tU || void 0 === tU ? void 0 : tU._redirectEventId,
                PU = await this.tryRedirectSignIn(UU);
              gU && gU !== EU || !(null === PU || void 0 === PU ? void 0 : PU.user) || (tU = PU.user, pU = !0)
            }
            if (!tU) return this.directlySetCurrentUser(null);
            if (!tU._redirectEventId) {
              if (pU) try {
                await this.beforeStateQueue.runMiddleware(tU)
              } catch (EU) {
                tU = gU, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(EU)))
              }
              return tU ? this.reloadAndSetCurrentUserOrClear(tU) : this.directlySetCurrentUser(null)
            }
            return nU(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === tU._redirectEventId ? this.directlySetCurrentUser(tU) : this.reloadAndSetCurrentUserOrClear(tU)
          }
          async tryRedirectSignIn(UU) {
            let RU = null;
            try {
              RU = await this._popupRedirectResolver._completeRedirectFn(this, UU, !0)
            } catch (gU) {
              await this._setRedirectUser(null)
            }
            return RU
          }
          async reloadAndSetCurrentUserOrClear(UU) {
            try {
              await OU(UU)
            } catch (RU) {
              if ("auth/network-request-failed" !== (null === RU || void 0 === RU ? void 0 : RU.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(UU)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const UU = navigator;
              return UU.languages && UU.languages[0] || UU.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(UU) {
            const RU = UU ? (0, tU.I)(UU) : null;
            return RU && nU(RU.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(RU && RU._clone(this))
          }
          async _updateCurrentUser(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return UU && nU(this.tenantId === UU.tenantId, this, "tenant-id-mismatch"), RU || await this.beforeStateQueue.runMiddleware(UU), this.queue((async () => {
              await this.directlySetCurrentUser(UU), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(UU) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(ER(UU))
            }))
          }
          async initializeRecaptchaConfig() {
            const UU = await mR(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              RU = new wR(UU);
            if (null == this.tenantId ? this._agentRecaptchaConfig = RU : this._tenantRecaptchaConfigs[this.tenantId] = RU, RU.emailPasswordEnabled) {
              new oR(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(UU) {
            this._errorFactory = new tU.e("auth", "Firebase", UU())
          }
          onAuthStateChanged(UU, RU, gU) {
            return this.registerStateListener(this.authStateSubscription, UU, RU, gU)
          }
          beforeAuthStateChanged(UU, RU) {
            return this.beforeStateQueue.pushCallback(UU, RU)
          }
          onIdTokenChanged(UU, RU, gU) {
            return this.registerStateListener(this.idTokenSubscription, UU, RU, gU)
          }
          toJSON() {
            var UU;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (UU = this._currentUser) || void 0 === UU ? void 0 : UU.toJSON()
            }
          }
          async _setRedirectUser(UU, RU) {
            const gU = await this.getOrInitRedirectPersistenceManager(RU);
            return null === UU ? gU.removeCurrentUser() : gU.setCurrentUser(UU)
          }
          async getOrInitRedirectPersistenceManager(UU) {
            if (!this.redirectPersistenceManager) {
              const RU = UU && ER(UU) || this._popupRedirectResolver;
              nU(RU, this, "argument-error"), this.redirectPersistenceManager = await KR.create(this, [ER(RU._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(UU) {
            var RU, gU;
            return this._isInitialized && await this.queue((async () => {})), (null === (RU = this._currentUser) || void 0 === RU ? void 0 : RU._redirectEventId) === UU ? this._currentUser : (null === (gU = this.redirectUser) || void 0 === gU ? void 0 : gU._redirectEventId) === UU ? this.redirectUser : null
          }
          async _persistUserIfCurrent(UU) {
            if (UU === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(UU)))
          }
          _notifyListenersIfCurrent(UU) {
            UU === this.currentUser && this.notifyAuthListeners()
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
            var UU, RU;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const gU = null !== (RU = null === (UU = this.currentUser) || void 0 === UU ? void 0 : UU.uid) && void 0 !== RU ? RU : null;
            this.lastNotifiedUid !== gU && (this.lastNotifiedUid = gU, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(UU, RU, gU, tU) {
            if (this._deleted) return () => {};
            const pU = "function" === typeof RU ? RU : RU.next.bind(RU),
              EU = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return nU(EU, this, "internal-error"), EU.then((() => pU(this.currentUser))), "function" === typeof RU ? UU.addObserver(RU, gU, tU) : UU.addObserver(RU)
          }
          async directlySetCurrentUser(UU) {
            this.currentUser && this.currentUser !== UU && this._currentUser._stopProactiveRefresh(), UU && this.isProactiveRefreshEnabled && UU._startProactiveRefresh(), this.currentUser = UU, UU ? await this.assertedPersistence.setCurrentUser(UU) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(UU) {
            return this.operations = this.operations.then(UU, UU), this.operations
          }
          get assertedPersistence() {
            return nU(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(UU) {
            UU && !this.frameworks.includes(UU) && (this.frameworks.push(UU), this.frameworks.sort(), this.clientVersion = xR(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var UU;
            const RU = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (RU["X-Firebase-gmpid"] = this.app.options.appId);
            const gU = await (null === (UU = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === UU ? void 0 : UU.getHeartbeatsHeader());
            gU && (RU["X-Firebase-Client"] = gU);
            const tU = await this._getAppCheckToken();
            return tU && (RU["X-Firebase-AppCheck"] = tU), RU
          }
          async _getAppCheckToken() {
            var UU;
            const RU = await (null === (UU = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === UU ? void 0 : UU.getToken());
            return (null === RU || void 0 === RU ? void 0 : RU.error) && function(UU) {
              if (WU.logLevel <= PU.d.WARN) {
                for (var RU = arguments.length, gU = new Array(RU > 1 ? RU - 1 : 0), tU = 1; tU < RU; tU++) gU[tU - 1] = arguments[tU];
                WU.warn(`Auth (${pU.f}): ${UU}`, ...gU)
              }
            }(`Error while retrieving App Check token: ${RU.error}`), null === RU || void 0 === RU ? void 0 : RU.token
          }
        }

        function BR(UU) {
          return (0, tU.I)(UU)
        }
        class VR {
          constructor(UU) {
            this.auth = UU, this.observer = null, this.addObserver = (0, tU.r)((UU => this.observer = UU))
          }
          get next() {
            return nU(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function rR(UU, RU) {
          const gU = (0, pU.w)(UU, "auth");
          if (gU.isInitialized()) {
            const UU = gU.getImmediate(),
              pU = gU.getOptions();
            if ((0, tU.v)(pU, null !== RU && void 0 !== RU ? RU : {})) return UU;
            xU(UU, "already-initialized")
          }
          return gU.initialize({
            options: RU
          })
        }

        function XR(UU, RU, gU) {
          const tU = BR(UU);
          nU(tU._canInitEmulator, tU, "emulator-config-failed"), nU(/^https?:\/\//.test(RU), tU, "invalid-emulator-scheme");
          const pU = !!(null === gU || void 0 === gU ? void 0 : gU.disableWarnings),
            EU = vR(RU),
            {
              host: PU,
              port: TU
            } = function(UU) {
              const RU = vR(UU),
                gU = /(\/\/)?([^?#/]+)/.exec(UU.substr(RU.length));
              if (!gU) return {
                host: "",
                port: null
              };
              const tU = gU[2].split("@").pop() || "",
                pU = /^(\[[^\]]+\])(:|$)/.exec(tU);
              if (pU) {
                const UU = pU[1];
                return {
                  host: UU,
                  port: dR(tU.substr(UU.length + 1))
                }
              } {
                const [UU, RU] = tU.split(":");
                return {
                  host: UU,
                  port: dR(RU)
                }
              }
            }(RU),
            qU = null === TU ? "" : `:${TU}`;
          tU.config.emulator = {
            url: `${EU}//${PU}${qU}/`
          }, tU.settings.appVerificationDisabledForTesting = !0, tU.emulatorConfig = Object.freeze({
            host: PU,
            port: TU,
            protocol: EU.replace(":", ""),
            options: Object.freeze({
              disableWarnings: pU
            })
          }), pU || function() {
            function UU() {
              const UU = document.createElement("p"),
                RU = UU.style;
              UU.innerText = "Running in emulator mode. Do not use with production credentials.", RU.position = "fixed", RU.width = "100%", RU.backgroundColor = "#ffffff", RU.border = ".1em solid #000000", RU.color = "#b50000", RU.bottom = "0px", RU.left = "0px", RU.margin = "0px", RU.zIndex = "10000", RU.textAlign = "center", UU.classList.add("firebase-emulator-warning"), document.body.appendChild(UU)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", UU) : UU())
          }()
        }

        function vR(UU) {
          const RU = UU.indexOf(":");
          return RU < 0 ? "" : UU.substr(0, RU + 1)
        }

        function dR(UU) {
          if (!UU) return null;
          const RU = Number(UU);
          return isNaN(RU) ? null : RU
        }
        class HR {
          constructor(UU, RU) {
            this.providerId = UU, this.signInMethod = RU
          }
          toJSON() {
            return bU("not implemented")
          }
          _getIdTokenResponse(UU) {
            return bU("not implemented")
          }
          _linkToIdToken(UU, RU) {
            return bU("not implemented")
          }
          _getReauthenticationResolver(UU) {
            return bU("not implemented")
          }
        }
        async function SR(UU, RU) {
          return HU(UU, "POST", "/v1/accounts:resetPassword", dU(UU, RU))
        }
        async function sR(UU, RU) {
          return HU(UU, "POST", "/v1/accounts:update", RU)
        }
        async function yR(UU, RU) {
          return sU(UU, "POST", "/v1/accounts:signInWithPassword", dU(UU, RU))
        }
        async function kR(UU, RU) {
          return HU(UU, "POST", "/v1/accounts:sendOobCode", dU(UU, RU))
        }
        async function FR(UU, RU) {
          return kR(UU, RU)
        }
        async function iR(UU, RU) {
          return kR(UU, RU)
        }
        class AR extends HR {
          constructor(UU, RU, gU) {
            let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", gU), this._email = UU, this._password = RU, this._tenantId = tU
          }
          static _fromEmailAndPassword(UU, RU) {
            return new AR(UU, RU, "password")
          }
          static _fromEmailAndCode(UU, RU) {
            return new AR(UU, RU, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(UU) {
            const RU = "string" === typeof UU ? JSON.parse(UU) : UU;
            if ((null === RU || void 0 === RU ? void 0 : RU.email) && (null === RU || void 0 === RU ? void 0 : RU.password)) {
              if ("password" === RU.signInMethod) return this._fromEmailAndPassword(RU.email, RU.password);
              if ("emailLink" === RU.signInMethod) return this._fromEmailAndCode(RU.email, RU.password, RU.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(UU) {
            var RU;
            switch (this.signInMethod) {
              case "password":
                const gU = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (RU = UU._getRecaptchaConfig()) || void 0 === RU ? void 0 : RU.emailPasswordEnabled) {
                  const RU = await ZR(UU, gU, "signInWithPassword");
                  return yR(UU, RU)
                }
                return yR(UU, gU).catch((async RU => {
                  if ("auth/missing-recaptcha-token" === RU.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const RU = await ZR(UU, gU, "signInWithPassword");
                    return yR(UU, RU)
                  }
                  return Promise.reject(RU)
                }));
              case "emailLink":
                return async function(UU, RU) {
                  return sU(UU, "POST", "/v1/accounts:signInWithEmailLink", dU(UU, RU))
                }(UU, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                xU(UU, "internal-error")
            }
          }
          async _linkToIdToken(UU, RU) {
            switch (this.signInMethod) {
              case "password":
                return sR(UU, {
                  idToken: RU,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(UU, RU) {
                  return sU(UU, "POST", "/v1/accounts:signInWithEmailLink", dU(UU, RU))
                }(UU, {
                  idToken: RU,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                xU(UU, "internal-error")
            }
          }
          _getReauthenticationResolver(UU) {
            return this._getIdTokenResponse(UU)
          }
        }
        async function zR(UU, RU) {
          return sU(UU, "POST", "/v1/accounts:signInWithIdp", dU(UU, RU))
        }
        class MR extends HR {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(UU) {
            const RU = new MR(UU.providerId, UU.signInMethod);
            return UU.idToken || UU.accessToken ? (UU.idToken && (RU.idToken = UU.idToken), UU.accessToken && (RU.accessToken = UU.accessToken), UU.nonce && !UU.pendingToken && (RU.nonce = UU.nonce), UU.pendingToken && (RU.pendingToken = UU.pendingToken)) : UU.oauthToken && UU.oauthTokenSecret ? (RU.accessToken = UU.oauthToken, RU.secret = UU.oauthTokenSecret) : xU("argument-error"), RU
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
          static fromJSON(UU) {
            const RU = "string" === typeof UU ? JSON.parse(UU) : UU,
              {
                providerId: gU,
                signInMethod: tU
              } = RU,
              pU = EU(RU, ["providerId", "signInMethod"]);
            if (!gU || !tU) return null;
            const PU = new MR(gU, tU);
            return PU.idToken = pU.idToken || void 0, PU.accessToken = pU.accessToken || void 0, PU.secret = pU.secret, PU.nonce = pU.nonce, PU.pendingToken = pU.pendingToken || null, PU
          }
          _getIdTokenResponse(UU) {
            return zR(UU, this.buildRequest())
          }
          _linkToIdToken(UU, RU) {
            const gU = this.buildRequest();
            return gU.idToken = RU, zR(UU, gU)
          }
          _getReauthenticationResolver(UU) {
            const RU = this.buildRequest();
            return RU.autoCreate = !1, zR(UU, RU)
          }
          buildRequest() {
            const UU = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) UU.pendingToken = this.pendingToken;
            else {
              const RU = {};
              this.idToken && (RU.id_token = this.idToken), this.accessToken && (RU.access_token = this.accessToken), this.secret && (RU.oauth_token_secret = this.secret), RU.providerId = this.providerId, this.nonce && !this.pendingToken && (RU.nonce = this.nonce), UU.postBody = (0, tU._)(RU)
            }
            return UU
          }
        }
        const DR = {
          USER_NOT_FOUND: "user-not-found"
        };
        class LR extends HR {
          constructor(UU) {
            super("phone", "phone"), this.params = UU
          }
          static _fromVerification(UU, RU) {
            return new LR({
              verificationId: UU,
              verificationCode: RU
            })
          }
          static _fromTokenResponse(UU, RU) {
            return new LR({
              phoneNumber: UU,
              temporaryProof: RU
            })
          }
          _getIdTokenResponse(UU) {
            return async function(UU, RU) {
              return sU(UU, "POST", "/v1/accounts:signInWithPhoneNumber", dU(UU, RU))
            }(UU, this._makeVerificationRequest())
          }
          _linkToIdToken(UU, RU) {
            return async function(UU, RU) {
              const gU = await sU(UU, "POST", "/v1/accounts:signInWithPhoneNumber", dU(UU, RU));
              if (gU.temporaryProof) throw FU(UU, "account-exists-with-different-credential", gU);
              return gU
            }(UU, Object.assign({
              idToken: RU
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(UU) {
            return async function(UU, RU) {
              return sU(UU, "POST", "/v1/accounts:signInWithPhoneNumber", dU(UU, Object.assign(Object.assign({}, RU), {
                operation: "REAUTH"
              })), DR)
            }(UU, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: UU,
              phoneNumber: RU,
              verificationId: gU,
              verificationCode: tU
            } = this.params;
            return UU && RU ? {
              temporaryProof: UU,
              phoneNumber: RU
            } : {
              sessionInfo: gU,
              code: tU
            }
          }
          toJSON() {
            const UU = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (UU.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (UU.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (UU.verificationCode = this.params.verificationCode), this.params.verificationId && (UU.verificationId = this.params.verificationId), UU
          }
          static fromJSON(UU) {
            "string" === typeof UU && (UU = JSON.parse(UU));
            const {
              verificationId: RU,
              verificationCode: gU,
              phoneNumber: tU,
              temporaryProof: pU
            } = UU;
            return gU || RU || tU || pU ? new LR({
              verificationId: RU,
              verificationCode: gU,
              phoneNumber: tU,
              temporaryProof: pU
            }) : null
          }
        }
        class NR {
          constructor(UU) {
            var RU, gU, pU, EU, PU, TU;
            const qU = (0, tU.X)((0, tU.z)(UU)),
              KU = null !== (RU = qU.apiKey) && void 0 !== RU ? RU : null,
              cU = null !== (gU = qU.oobCode) && void 0 !== gU ? gU : null,
              GU = function(UU) {
                switch (UU) {
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
              }(null !== (pU = qU.mode) && void 0 !== pU ? pU : null);
            nU(KU && cU && GU, "argument-error"), this.apiKey = KU, this.operation = GU, this.code = cU, this.continueUrl = null !== (EU = qU.continueUrl) && void 0 !== EU ? EU : null, this.languageCode = null !== (PU = qU.languageCode) && void 0 !== PU ? PU : null, this.tenantId = null !== (TU = qU.tenantId) && void 0 !== TU ? TU : null
          }
          static parseLink(UU) {
            const RU = function(UU) {
              const RU = (0, tU.X)((0, tU.z)(UU)).link,
                gU = RU ? (0, tU.X)((0, tU.z)(RU)).deep_link_id : null,
                pU = (0, tU.X)((0, tU.z)(UU)).deep_link_id;
              return (pU ? (0, tU.X)((0, tU.z)(pU)).link : null) || pU || gU || RU || UU
            }(UU);
            try {
              return new NR(RU)
            } catch (gU) {
              return null
            }
          }
        }

        function lR(UU) {
          return NR.parseLink(UU)
        }
        class OR {
          constructor() {
            this.providerId = OR.PROVIDER_ID
          }
          static credential(UU, RU) {
            return AR._fromEmailAndPassword(UU, RU)
          }
          static credentialWithLink(UU, RU) {
            const gU = NR.parseLink(RU);
            return nU(gU, "argument-error"), AR._fromEmailAndCode(UU, gU.code, gU.tenantId)
          }
        }
        OR.PROVIDER_ID = "password", OR.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", OR.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class Ug {
          constructor(UU) {
            this.providerId = UU, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(UU) {
            this.defaultLanguageCode = UU
          }
          setCustomParameters(UU) {
            return this.customParameters = UU, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class Rg extends Ug {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(UU) {
            return this.scopes.includes(UU) || this.scopes.push(UU), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class gg extends Rg {
          static credentialFromJSON(UU) {
            const RU = "string" === typeof UU ? JSON.parse(UU) : UU;
            return nU("providerId" in RU && "signInMethod" in RU, "argument-error"), MR._fromParams(RU)
          }
          credential(UU) {
            return this._credential(Object.assign(Object.assign({}, UU), {
              nonce: UU.rawNonce
            }))
          }
          _credential(UU) {
            return nU(UU.idToken || UU.accessToken, "argument-error"), MR._fromParams(Object.assign(Object.assign({}, UU), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(UU) {
            return gg.oauthCredentialFromTaggedObject(UU)
          }
          static credentialFromError(UU) {
            return gg.oauthCredentialFromTaggedObject(UU.customData || {})
          }
          static oauthCredentialFromTaggedObject(UU) {
            let {
              _tokenResponse: RU
            } = UU;
            if (!RU) return null;
            const {
              oauthIdToken: gU,
              oauthAccessToken: tU,
              oauthTokenSecret: pU,
              pendingToken: EU,
              nonce: PU,
              providerId: TU
            } = RU;
            if (!tU && !pU && !gU && !EU) return null;
            if (!TU) return null;
            try {
              return new gg(TU)._credential({
                idToken: gU,
                accessToken: tU,
                nonce: PU,
                pendingToken: EU
              })
            } catch (qU) {
              return null
            }
          }
        }
        class tg extends Rg {
          constructor() {
            super("facebook.com")
          }
          static credential(UU) {
            return MR._fromParams({
              providerId: tg.PROVIDER_ID,
              signInMethod: tg.FACEBOOK_SIGN_IN_METHOD,
              accessToken: UU
            })
          }
          static credentialFromResult(UU) {
            return tg.credentialFromTaggedObject(UU)
          }
          static credentialFromError(UU) {
            return tg.credentialFromTaggedObject(UU.customData || {})
          }
          static credentialFromTaggedObject(UU) {
            let {
              _tokenResponse: RU
            } = UU;
            if (!RU || !("oauthAccessToken" in RU)) return null;
            if (!RU.oauthAccessToken) return null;
            try {
              return tg.credential(RU.oauthAccessToken)
            } catch (gU) {
              return null
            }
          }
        }
        tg.FACEBOOK_SIGN_IN_METHOD = "facebook.com", tg.PROVIDER_ID = "facebook.com";
        class pg extends Rg {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(UU, RU) {
            return MR._fromParams({
              providerId: pg.PROVIDER_ID,
              signInMethod: pg.GOOGLE_SIGN_IN_METHOD,
              idToken: UU,
              accessToken: RU
            })
          }
          static credentialFromResult(UU) {
            return pg.credentialFromTaggedObject(UU)
          }
          static credentialFromError(UU) {
            return pg.credentialFromTaggedObject(UU.customData || {})
          }
          static credentialFromTaggedObject(UU) {
            let {
              _tokenResponse: RU
            } = UU;
            if (!RU) return null;
            const {
              oauthIdToken: gU,
              oauthAccessToken: tU
            } = RU;
            if (!gU && !tU) return null;
            try {
              return pg.credential(gU, tU)
            } catch (pU) {
              return null
            }
          }
        }
        pg.GOOGLE_SIGN_IN_METHOD = "google.com", pg.PROVIDER_ID = "google.com";
        class Eg extends Rg {
          constructor() {
            super("github.com")
          }
          static credential(UU) {
            return MR._fromParams({
              providerId: Eg.PROVIDER_ID,
              signInMethod: Eg.GITHUB_SIGN_IN_METHOD,
              accessToken: UU
            })
          }
          static credentialFromResult(UU) {
            return Eg.credentialFromTaggedObject(UU)
          }
          static credentialFromError(UU) {
            return Eg.credentialFromTaggedObject(UU.customData || {})
          }
          static credentialFromTaggedObject(UU) {
            let {
              _tokenResponse: RU
            } = UU;
            if (!RU || !("oauthAccessToken" in RU)) return null;
            if (!RU.oauthAccessToken) return null;
            try {
              return Eg.credential(RU.oauthAccessToken)
            } catch (gU) {
              return null
            }
          }
        }
        Eg.GITHUB_SIGN_IN_METHOD = "github.com", Eg.PROVIDER_ID = "github.com";
        class Pg extends HR {
          constructor(UU, RU) {
            super(UU, UU), this.pendingToken = RU
          }
          _getIdTokenResponse(UU) {
            return zR(UU, this.buildRequest())
          }
          _linkToIdToken(UU, RU) {
            const gU = this.buildRequest();
            return gU.idToken = RU, zR(UU, gU)
          }
          _getReauthenticationResolver(UU) {
            const RU = this.buildRequest();
            return RU.autoCreate = !1, zR(UU, RU)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(UU) {
            const RU = "string" === typeof UU ? JSON.parse(UU) : UU,
              {
                providerId: gU,
                signInMethod: tU,
                pendingToken: pU
              } = RU;
            return gU && tU && pU && gU === tU ? new Pg(gU, pU) : null
          }
          static _create(UU, RU) {
            return new Pg(UU, RU)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class Tg extends Ug {
          constructor(UU) {
            nU(UU.startsWith("saml."), "argument-error"), super(UU)
          }
          static credentialFromResult(UU) {
            return Tg.samlCredentialFromTaggedObject(UU)
          }
          static credentialFromError(UU) {
            return Tg.samlCredentialFromTaggedObject(UU.customData || {})
          }
          static credentialFromJSON(UU) {
            const RU = Pg.fromJSON(UU);
            return nU(RU, "argument-error"), RU
          }
          static samlCredentialFromTaggedObject(UU) {
            let {
              _tokenResponse: RU
            } = UU;
            if (!RU) return null;
            const {
              pendingToken: gU,
              providerId: tU
            } = RU;
            if (!gU || !tU) return null;
            try {
              return Pg._create(tU, gU)
            } catch (pU) {
              return null
            }
          }
        }
        class qg extends Rg {
          constructor() {
            super("twitter.com")
          }
          static credential(UU, RU) {
            return MR._fromParams({
              providerId: qg.PROVIDER_ID,
              signInMethod: qg.TWITTER_SIGN_IN_METHOD,
              oauthToken: UU,
              oauthTokenSecret: RU
            })
          }
          static credentialFromResult(UU) {
            return qg.credentialFromTaggedObject(UU)
          }
          static credentialFromError(UU) {
            return qg.credentialFromTaggedObject(UU.customData || {})
          }
          static credentialFromTaggedObject(UU) {
            let {
              _tokenResponse: RU
            } = UU;
            if (!RU) return null;
            const {
              oauthAccessToken: gU,
              oauthTokenSecret: tU
            } = RU;
            if (!gU || !tU) return null;
            try {
              return qg.credential(gU, tU)
            } catch (pU) {
              return null
            }
          }
        }
        async function Kg(UU, RU) {
          return sU(UU, "POST", "/v1/accounts:signUp", dU(UU, RU))
        }
        qg.TWITTER_SIGN_IN_METHOD = "twitter.com", qg.PROVIDER_ID = "twitter.com";
        class cg {
          constructor(UU) {
            this.user = UU.user, this.providerId = UU.providerId, this._tokenResponse = UU._tokenResponse, this.operationType = UU.operationType
          }
          static async _fromIdTokenResponse(UU, RU, gU) {
            let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const pU = await tR._fromIdTokenResponse(UU, gU, tU),
              EU = Gg(gU);
            return new cg({
              user: pU,
              providerId: EU,
              _tokenResponse: gU,
              operationType: RU
            })
          }
          static async _forOperation(UU, RU, gU) {
            await UU._updateTokensIfNecessary(gU, !0);
            const tU = Gg(gU);
            return new cg({
              user: UU,
              providerId: tU,
              _tokenResponse: gU,
              operationType: RU
            })
          }
        }

        function Gg(UU) {
          return UU.providerId ? UU.providerId : "phoneNumber" in UU ? "phone" : null
        }
        async function jg(UU) {
          var RU;
          const gU = BR(UU);
          if (await gU._initializationPromise, null === (RU = gU.currentUser) || void 0 === RU ? void 0 : RU.isAnonymous) return new cg({
            user: gU.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const tU = await Kg(gU, {
              returnSecureToken: !0
            }),
            pU = await cg._fromIdTokenResponse(gU, "signIn", tU, !0);
          return await gU._updateCurrentUser(pU.user), pU
        }
        class ug extends tU.i {
          constructor(UU, RU, gU, tU) {
            var pU;
            super(RU.code, RU.message), this.operationType = gU, this.user = tU, Object.setPrototypeOf(this, ug.prototype), this.customData = {
              appName: UU.name,
              tenantId: null !== (pU = UU.tenantId) && void 0 !== pU ? pU : void 0,
              _serverResponse: RU.customData._serverResponse,
              operationType: gU
            }
          }
          static _fromErrorAndOperation(UU, RU, gU, tU) {
            return new ug(UU, RU, gU, tU)
          }
        }

        function Cg(UU, RU, gU, tU) {
          return ("reauthenticate" === RU ? gU._getReauthenticationResolver(UU) : gU._getIdTokenResponse(UU)).catch((gU => {
            if ("auth/multi-factor-auth-required" === gU.code) throw ug._fromErrorAndOperation(UU, gU, RU, tU);
            throw gU
          }))
        }

        function hg(UU) {
          return new Set(UU.map((UU => {
            let {
              providerId: RU
            } = UU;
            return RU
          })).filter((UU => !!UU)))
        }
        async function Qg(UU, RU) {
          const gU = (0, tU.I)(UU);
          await Wg(!0, gU, RU);
          const {
            providerUserInfo: pU
          } = await async function(UU, RU) {
            return HU(UU, "POST", "/v1/accounts:update", RU)
          }(gU.auth, {
            idToken: await gU.getIdToken(),
            deleteProvider: [RU]
          }), EU = hg(pU || []);
          return gU.providerData = gU.providerData.filter((UU => EU.has(UU.providerId))), EU.has("phone") || (gU.phoneNumber = null), await gU.auth._persistUserIfCurrent(gU), gU
        }
        async function eg(UU, RU) {
          let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const tU = await LU(UU, RU._linkToIdToken(UU.auth, await UU.getIdToken()), gU);
          return cg._forOperation(UU, "link", tU)
        }
        async function Wg(UU, RU, gU) {
          await OU(RU);
          const tU = !1 === UU ? "provider-already-linked" : "no-such-provider";
          nU(hg(RU.providerData).has(gU) === UU, RU.auth, tU)
        }
        async function fg(UU, RU) {
          let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: tU
          } = UU, pU = "reauthenticate";
          try {
            const EU = await LU(UU, Cg(tU, pU, RU, UU), gU);
            nU(EU.idToken, tU, "internal-error");
            const PU = DU(EU.idToken);
            nU(PU, tU, "internal-error");
            const {
              sub: TU
            } = PU;
            return nU(UU.uid === TU, tU, "user-mismatch"), cg._forOperation(UU, pU, EU)
          } catch (EU) {
            throw "auth/user-not-found" === (null === EU || void 0 === EU ? void 0 : EU.code) && xU(tU, "user-mismatch"), EU
          }
        }
        async function xg(UU, RU) {
          let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const tU = "signIn",
            pU = await Cg(UU, tU, RU),
            EU = await cg._fromIdTokenResponse(UU, tU, pU);
          return gU || await UU._updateCurrentUser(EU.user), EU
        }
        async function mg(UU, RU) {
          return xg(BR(UU), RU)
        }
        async function Ig(UU, RU) {
          const gU = (0, tU.I)(UU);
          return await Wg(!1, gU, RU.providerId), eg(gU, RU)
        }
        async function Jg(UU, RU) {
          return fg((0, tU.I)(UU), RU)
        }
        async function wg(UU, RU) {
          const gU = BR(UU),
            tU = await async function(UU, RU) {
              return sU(UU, "POST", "/v1/accounts:signInWithCustomToken", dU(UU, RU))
            }(gU, {
              token: RU,
              returnSecureToken: !0
            }), pU = await cg._fromIdTokenResponse(gU, "signIn", tU);
          return await gU._updateCurrentUser(pU.user), pU
        }
        class ng {
          constructor(UU, RU) {
            this.factorId = UU, this.uid = RU.mfaEnrollmentId, this.enrollmentTime = new Date(RU.enrolledAt).toUTCString(), this.displayName = RU.displayName
          }
          static _fromServerResponse(UU, RU) {
            return "phoneInfo" in RU ? bg._fromServerResponse(UU, RU) : "totpInfo" in RU ? og._fromServerResponse(UU, RU) : xU(UU, "internal-error")
          }
        }
        class bg extends ng {
          constructor(UU) {
            super("phone", UU), this.phoneNumber = UU.phoneInfo
          }
          static _fromServerResponse(UU, RU) {
            return new bg(RU)
          }
        }
        class og extends ng {
          constructor(UU) {
            super("totp", UU)
          }
          static _fromServerResponse(UU, RU) {
            return new og(RU)
          }
        }

        function Zg(UU, RU, gU) {
          var tU;
          nU((null === (tU = gU.url) || void 0 === tU ? void 0 : tU.length) > 0, UU, "invalid-continue-uri"), nU("undefined" === typeof gU.dynamicLinkDomain || gU.dynamicLinkDomain.length > 0, UU, "invalid-dynamic-link-domain"), RU.continueUrl = gU.url, RU.dynamicLinkDomain = gU.dynamicLinkDomain, RU.canHandleCodeInApp = gU.handleCodeInApp, gU.iOS && (nU(gU.iOS.bundleId.length > 0, UU, "missing-ios-bundle-id"), RU.iOSBundleId = gU.iOS.bundleId), gU.android && (nU(gU.android.packageName.length > 0, UU, "missing-android-pkg-name"), RU.androidInstallApp = gU.android.installApp, RU.androidMinimumVersionCode = gU.android.minimumVersion, RU.androidPackageName = gU.android.packageName)
        }
        async function ag(UU, RU, gU) {
          var tU;
          const pU = BR(UU),
            EU = {
              requestType: "PASSWORD_RESET",
              email: RU,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (tU = pU._getRecaptchaConfig()) || void 0 === tU ? void 0 : tU.emailPasswordEnabled) {
            const UU = await ZR(pU, EU, "getOobCode", !0);
            gU && Zg(pU, UU, gU), await FR(pU, UU)
          } else gU && Zg(pU, EU, gU), await FR(pU, EU).catch((async UU => {
            if ("auth/missing-recaptcha-token" !== UU.code) return Promise.reject(UU);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const UU = await ZR(pU, EU, "getOobCode", !0);
              gU && Zg(pU, UU, gU), await FR(pU, UU)
            }
          }))
        }
        async function Yg(UU, RU, gU) {
          await SR((0, tU.I)(UU), {
            oobCode: RU,
            newPassword: gU
          })
        }
        async function Bg(UU, RU) {
          await async function(UU, RU) {
            return HU(UU, "POST", "/v1/accounts:update", dU(UU, RU))
          }((0, tU.I)(UU), {
            oobCode: RU
          })
        }
        async function Vg(UU, RU) {
          const gU = (0, tU.I)(UU),
            pU = await SR(gU, {
              oobCode: RU
            }),
            EU = pU.requestType;
          switch (nU(EU, gU, "internal-error"), EU) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              nU(pU.newEmail, gU, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              nU(pU.mfaInfo, gU, "internal-error");
            default:
              nU(pU.email, gU, "internal-error")
          }
          let PU = null;
          return pU.mfaInfo && (PU = ng._fromServerResponse(BR(gU), pU.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === pU.requestType ? pU.newEmail : pU.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === pU.requestType ? pU.email : pU.newEmail) || null,
              multiFactorInfo: PU
            },
            operation: EU
          }
        }
        async function rg(UU, RU) {
          const {
            data: gU
          } = await Vg((0, tU.I)(UU), RU);
          return gU.email
        }
        async function Xg(UU, RU, gU) {
          var tU;
          const pU = BR(UU),
            EU = {
              returnSecureToken: !0,
              email: RU,
              password: gU,
              clientType: "CLIENT_TYPE_WEB"
            };
          let PU;
          if (null === (tU = pU._getRecaptchaConfig()) || void 0 === tU ? void 0 : tU.emailPasswordEnabled) {
            const UU = await ZR(pU, EU, "signUpPassword");
            PU = Kg(pU, UU)
          } else PU = Kg(pU, EU).catch((async UU => {
            if ("auth/missing-recaptcha-token" === UU.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const UU = await ZR(pU, EU, "signUpPassword");
              return Kg(pU, UU)
            }
            return Promise.reject(UU)
          }));
          const TU = await PU.catch((UU => Promise.reject(UU))),
            qU = await cg._fromIdTokenResponse(pU, "signIn", TU);
          return await pU._updateCurrentUser(qU.user), qU
        }

        function vg(UU, RU, gU) {
          return mg((0, tU.I)(UU), OR.credential(RU, gU))
        }
        async function dg(UU, RU, gU) {
          var tU;
          const pU = BR(UU),
            EU = {
              requestType: "EMAIL_SIGNIN",
              email: RU,
              clientType: "CLIENT_TYPE_WEB"
            };

          function PU(UU, RU) {
            nU(RU.handleCodeInApp, pU, "argument-error"), RU && Zg(pU, UU, RU)
          }
          if (null === (tU = pU._getRecaptchaConfig()) || void 0 === tU ? void 0 : tU.emailPasswordEnabled) {
            const UU = await ZR(pU, EU, "getOobCode", !0);
            PU(UU, gU), await iR(pU, UU)
          } else PU(EU, gU), await iR(pU, EU).catch((async UU => {
            if ("auth/missing-recaptcha-token" !== UU.code) return Promise.reject(UU);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const UU = await ZR(pU, EU, "getOobCode", !0);
              PU(UU, gU), await iR(pU, UU)
            }
          }))
        }

        function Hg(UU, RU) {
          const gU = NR.parseLink(RU);
          return "EMAIL_SIGNIN" === (null === gU || void 0 === gU ? void 0 : gU.operation)
        }
        async function Sg(UU, RU, gU) {
          const pU = (0, tU.I)(UU),
            EU = OR.credentialWithLink(RU, gU || ZU());
          return nU(EU._tenantId === (pU.tenantId || null), pU, "tenant-id-mismatch"), mg(pU, EU)
        }
        async function sg(UU, RU) {
          const gU = {
              identifier: RU,
              continueUri: aU() ? ZU() : "http://localhost"
            },
            {
              signinMethods: pU
            } = await async function(UU, RU) {
              return HU(UU, "POST", "/v1/accounts:createAuthUri", dU(UU, RU))
            }((0, tU.I)(UU), gU);
          return pU || []
        }
        async function yg(UU, RU) {
          const gU = (0, tU.I)(UU),
            pU = {
              requestType: "VERIFY_EMAIL",
              idToken: await UU.getIdToken()
            };
          RU && Zg(gU.auth, pU, RU);
          const {
            email: EU
          } = await async function(UU, RU) {
            return kR(UU, RU)
          }(gU.auth, pU);
          EU !== UU.email && await UU.reload()
        }
        async function kg(UU, RU, gU) {
          const pU = (0, tU.I)(UU),
            EU = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await UU.getIdToken(),
              newEmail: RU
            };
          gU && Zg(pU.auth, EU, gU);
          const {
            email: PU
          } = await async function(UU, RU) {
            return kR(UU, RU)
          }(pU.auth, EU);
          PU !== UU.email && await UU.reload()
        }
        async function Fg(UU, RU) {
          let {
            displayName: gU,
            photoURL: pU
          } = RU;
          if (void 0 === gU && void 0 === pU) return;
          const EU = (0, tU.I)(UU),
            PU = {
              idToken: await EU.getIdToken(),
              displayName: gU,
              photoUrl: pU,
              returnSecureToken: !0
            },
            TU = await LU(EU, async function(UU, RU) {
              return HU(UU, "POST", "/v1/accounts:update", RU)
            }(EU.auth, PU));
          EU.displayName = TU.displayName || null, EU.photoURL = TU.photoUrl || null;
          const qU = EU.providerData.find((UU => {
            let {
              providerId: RU
            } = UU;
            return "password" === RU
          }));
          qU && (qU.displayName = EU.displayName, qU.photoURL = EU.photoURL), await EU._updateTokensIfNecessary(TU)
        }

        function ig(UU, RU) {
          return zg((0, tU.I)(UU), RU, null)
        }

        function Ag(UU, RU) {
          return zg((0, tU.I)(UU), null, RU)
        }
        async function zg(UU, RU, gU) {
          const {
            auth: tU
          } = UU, pU = {
            idToken: await UU.getIdToken(),
            returnSecureToken: !0
          };
          RU && (pU.email = RU), gU && (pU.password = gU);
          const EU = await LU(UU, sR(tU, pU));
          await UU._updateTokensIfNecessary(EU, !0)
        }
        class Mg {
          constructor(UU, RU) {
            let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = UU, this.providerId = RU, this.profile = gU
          }
        }
        class Dg extends Mg {
          constructor(UU, RU, gU, tU) {
            super(UU, RU, gU), this.username = tU
          }
        }
        class Lg extends Mg {
          constructor(UU, RU) {
            super(UU, "facebook.com", RU)
          }
        }
        class Ng extends Dg {
          constructor(UU, RU) {
            super(UU, "github.com", RU, "string" === typeof(null === RU || void 0 === RU ? void 0 : RU.login) ? null === RU || void 0 === RU ? void 0 : RU.login : null)
          }
        }
        class lg extends Mg {
          constructor(UU, RU) {
            super(UU, "google.com", RU)
          }
        }
        class Og extends Dg {
          constructor(UU, RU, gU) {
            super(UU, "twitter.com", RU, gU)
          }
        }

        function Ut(UU) {
          const {
            user: RU,
            _tokenResponse: gU
          } = UU;
          return RU.isAnonymous && !gU ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(UU) {
            var RU, gU;
            if (!UU) return null;
            const {
              providerId: tU
            } = UU, pU = UU.rawUserInfo ? JSON.parse(UU.rawUserInfo) : {}, EU = UU.isNewUser || "identitytoolkit#SignupNewUserResponse" === UU.kind;
            if (!tU && (null === UU || void 0 === UU ? void 0 : UU.idToken)) {
              const tU = null === (gU = null === (RU = DU(UU.idToken)) || void 0 === RU ? void 0 : RU.firebase) || void 0 === gU ? void 0 : gU.sign_in_provider;
              if (tU) return new Mg(EU, "anonymous" !== tU && "custom" !== tU ? tU : null)
            }
            if (!tU) return null;
            switch (tU) {
              case "facebook.com":
                return new Lg(EU, pU);
              case "github.com":
                return new Ng(EU, pU);
              case "google.com":
                return new lg(EU, pU);
              case "twitter.com":
                return new Og(EU, pU, UU.screenName || null);
              case "custom":
              case "anonymous":
                return new Mg(EU, null);
              default:
                return new Mg(EU, tU, pU)
            }
          }(gU)
        }

        function Rt(UU, RU) {
          return (0, tU.I)(UU).setPersistence(RU)
        }

        function gt(UU) {
          return BR(UU).initializeRecaptchaConfig()
        }

        function tt(UU, RU, gU, pU) {
          return (0, tU.I)(UU).onIdTokenChanged(RU, gU, pU)
        }

        function pt(UU, RU, gU) {
          return (0, tU.I)(UU).beforeAuthStateChanged(RU, gU)
        }

        function Et(UU, RU, gU, pU) {
          return (0, tU.I)(UU).onAuthStateChanged(RU, gU, pU)
        }

        function Pt(UU) {
          (0, tU.I)(UU).useDeviceLanguage()
        }

        function Tt(UU, RU) {
          return (0, tU.I)(UU).updateCurrentUser(RU)
        }

        function qt(UU) {
          return (0, tU.I)(UU).signOut()
        }
        async function Kt(UU) {
          return (0, tU.I)(UU).delete()
        }
        class ct {
          constructor(UU, RU, gU) {
            this.type = UU, this.credential = RU, this.auth = gU
          }
          static _fromIdtoken(UU, RU) {
            return new ct("enroll", UU, RU)
          }
          static _fromMfaPendingCredential(UU) {
            return new ct("signin", UU)
          }
          toJSON() {
            const UU = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [UU]: this.credential
              }
            }
          }
          static fromJSON(UU) {
            var RU, gU;
            if (null === UU || void 0 === UU ? void 0 : UU.multiFactorSession) {
              if (null === (RU = UU.multiFactorSession) || void 0 === RU ? void 0 : RU.pendingCredential) return ct._fromMfaPendingCredential(UU.multiFactorSession.pendingCredential);
              if (null === (gU = UU.multiFactorSession) || void 0 === gU ? void 0 : gU.idToken) return ct._fromIdtoken(UU.multiFactorSession.idToken)
            }
            return null
          }
        }
        class Gt {
          constructor(UU, RU, gU) {
            this.session = UU, this.hints = RU, this.signInResolver = gU
          }
          static _fromError(UU, RU) {
            const gU = BR(UU),
              tU = RU.customData._serverResponse,
              pU = (tU.mfaInfo || []).map((UU => ng._fromServerResponse(gU, UU)));
            nU(tU.mfaPendingCredential, gU, "internal-error");
            const EU = ct._fromMfaPendingCredential(tU.mfaPendingCredential);
            return new Gt(EU, pU, (async UU => {
              const pU = await UU._process(gU, EU);
              delete tU.mfaInfo, delete tU.mfaPendingCredential;
              const PU = Object.assign(Object.assign({}, tU), {
                idToken: pU.idToken,
                refreshToken: pU.refreshToken
              });
              switch (RU.operationType) {
                case "signIn":
                  const UU = await cg._fromIdTokenResponse(gU, RU.operationType, PU);
                  return await gU._updateCurrentUser(UU.user), UU;
                case "reauthenticate":
                  return nU(RU.user, gU, "internal-error"), cg._forOperation(RU.user, RU.operationType, PU);
                default:
                  xU(gU, "internal-error")
              }
            }))
          }
          async resolveSignIn(UU) {
            const RU = UU;
            return this.signInResolver(RU)
          }
        }

        function jt(UU, RU) {
          var gU;
          const pU = (0, tU.I)(UU),
            EU = RU;
          return nU(RU.customData.operationType, pU, "argument-error"), nU(null === (gU = EU.customData._serverResponse) || void 0 === gU ? void 0 : gU.mfaPendingCredential, pU, "argument-error"), Gt._fromError(pU, EU)
        }
        class ut {
          constructor(UU) {
            this.user = UU, this.enrolledFactors = [], UU._onReload((RU => {
              RU.mfaInfo && (this.enrolledFactors = RU.mfaInfo.map((RU => ng._fromServerResponse(UU.auth, RU))))
            }))
          }
          static _fromUser(UU) {
            return new ut(UU)
          }
          async getSession() {
            return ct._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(UU, RU) {
            const gU = UU,
              tU = await this.getSession(),
              pU = await LU(this.user, gU._process(this.user.auth, tU, RU));
            return await this.user._updateTokensIfNecessary(pU), this.user.reload()
          }
          async unenroll(UU) {
            const RU = "string" === typeof UU ? UU : UU.uid,
              gU = await this.user.getIdToken();
            try {
              const UU = await LU(this.user, (tU = this.user.auth, pU = {
                idToken: gU,
                mfaEnrollmentId: RU
              }, HU(tU, "POST", "/v2/accounts/mfaEnrollment:withdraw", dU(tU, pU))));
              this.enrolledFactors = this.enrolledFactors.filter((UU => {
                let {
                  uid: gU
                } = UU;
                return gU !== RU
              })), await this.user._updateTokensIfNecessary(UU), await this.user.reload()
            } catch (EU) {
              throw EU
            }
            var tU, pU
          }
        }
        const Ct = new WeakMap;

        function ht(UU) {
          const RU = (0, tU.I)(UU);
          return Ct.has(RU) || Ct.set(RU, ut._fromUser(RU)), Ct.get(RU)
        }
        const Qt = "__sak";
        class et {
          constructor(UU, RU) {
            this.storageRetriever = UU, this.type = RU
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(Qt, "1"), this.storage.removeItem(Qt), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (UU) {
              return Promise.resolve(!1)
            }
          }
          _set(UU, RU) {
            return this.storage.setItem(UU, JSON.stringify(RU)), Promise.resolve()
          }
          _get(UU) {
            const RU = this.storage.getItem(UU);
            return Promise.resolve(RU ? JSON.parse(RU) : null)
          }
          _remove(UU) {
            return this.storage.removeItem(UU), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class Wt extends et {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (UU, RU) => this.onStorageEvent(UU, RU), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const UU = (0, tU.J)();
              return jR(UU) || WR(UU)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (UU) {
                return !1
              }
            }(), this.fallbackToPolling = fR(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(UU) {
            for (const RU of Object.keys(this.listeners)) {
              const gU = this.storage.getItem(RU),
                tU = this.localCache[RU];
              gU !== tU && UU(RU, tU, gU)
            }
          }
          onStorageEvent(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!UU.key) return void this.forAllChangedKeys(((UU, RU, gU) => {
              this.notifyListeners(UU, gU)
            }));
            const gU = UU.key;
            if (RU ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const tU = this.storage.getItem(gU);
              if (UU.newValue !== tU) null !== UU.newValue ? this.storage.setItem(gU, UU.newValue) : this.storage.removeItem(gU);
              else if (this.localCache[gU] === UU.newValue && !RU) return
            }
            const pU = () => {
                const UU = this.storage.getItem(gU);
                (RU || this.localCache[gU] !== UU) && this.notifyListeners(gU, UU)
              },
              EU = this.storage.getItem(gU);
            (0, tU.O)() && 10 === document.documentMode && EU !== UU.newValue && UU.newValue !== UU.oldValue ? setTimeout(pU, 10) : pU()
          }
          notifyListeners(UU, RU) {
            this.localCache[UU] = RU;
            const gU = this.listeners[UU];
            if (gU)
              for (const tU of Array.from(gU)) tU(RU ? JSON.parse(RU) : RU)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((UU, RU, gU) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: UU,
                  oldValue: RU,
                  newValue: gU
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
          _addListener(UU, RU) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[UU] || (this.listeners[UU] = new Set, this.localCache[UU] = this.storage.getItem(UU)), this.listeners[UU].add(RU)
          }
          _removeListener(UU, RU) {
            this.listeners[UU] && (this.listeners[UU].delete(RU), 0 === this.listeners[UU].size && delete this.listeners[UU]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(UU, RU) {
            await super._set(UU, RU), this.localCache[UU] = JSON.stringify(RU)
          }
          async _get(UU) {
            const RU = await super._get(UU);
            return this.localCache[UU] = JSON.stringify(RU), RU
          }
          async _remove(UU) {
            await super._remove(UU), delete this.localCache[UU]
          }
        }
        Wt.type = "LOCAL";
        const ft = Wt;
        class xt extends et {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(UU, RU) {}
          _removeListener(UU, RU) {}
        }
        xt.type = "SESSION";
        const mt = xt;
        class It {
          constructor(UU) {
            this.eventTarget = UU, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(UU) {
            const RU = this.receivers.find((RU => RU.isListeningto(UU)));
            if (RU) return RU;
            const gU = new It(UU);
            return this.receivers.push(gU), gU
          }
          isListeningto(UU) {
            return this.eventTarget === UU
          }
          async handleEvent(UU) {
            const RU = UU,
              {
                eventId: gU,
                eventType: tU,
                data: pU
              } = RU.data,
              EU = this.handlersMap[tU];
            if (!(null === EU || void 0 === EU ? void 0 : EU.size)) return;
            RU.ports[0].postMessage({
              status: "ack",
              eventId: gU,
              eventType: tU
            });
            const PU = Array.from(EU).map((async UU => UU(RU.origin, pU))),
              TU = await
            function(UU) {
              return Promise.all(UU.map((async UU => {
                try {
                  return {
                    fulfilled: !0,
                    value: await UU
                  }
                } catch (RU) {
                  return {
                    fulfilled: !1,
                    reason: RU
                  }
                }
              })))
            }(PU);
            RU.ports[0].postMessage({
              status: "done",
              eventId: gU,
              eventType: tU,
              response: TU
            })
          }
          _subscribe(UU, RU) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[UU] || (this.handlersMap[UU] = new Set), this.handlersMap[UU].add(RU)
          }
          _unsubscribe(UU, RU) {
            this.handlersMap[UU] && RU && this.handlersMap[UU].delete(RU), RU && 0 !== this.handlersMap[UU].size || delete this.handlersMap[UU], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function Jt() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            gU = "";
          for (let tU = 0; tU < RU; tU++) gU += Math.floor(10 * Math.random());
          return UU + gU
        }
        It.receivers = [];
        class wt {
          constructor(UU) {
            this.target = UU, this.handlers = new Set
          }
          removeMessageHandler(UU) {
            UU.messageChannel && (UU.messageChannel.port1.removeEventListener("message", UU.Tm), UU.messageChannel.port1.close()), this.handlers.delete(UU)
          }
          async _send(UU, RU) {
            let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const tU = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!tU) throw new Error("connection_unavailable");
            let pU, EU;
            return new Promise(((PU, TU) => {
              const qU = Jt("", 20);
              tU.port1.start();
              const KU = setTimeout((() => {
                TU(new Error("unsupported_event"))
              }), gU);
              EU = {
                messageChannel: tU,
                Tm(UU) {
                  const RU = UU;
                  if (RU.data.eventId === qU) switch (RU.data.status) {
                    case "ack":
                      clearTimeout(KU), pU = setTimeout((() => {
                        TU(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(pU), PU(RU.data.response);
                      break;
                    default:
                      clearTimeout(KU), clearTimeout(pU), TU(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(EU), tU.port1.addEventListener("message", EU.Tm), this.target.postMessage({
                eventType: UU,
                eventId: qU,
                data: RU
              }, [tU.port2])
            })).finally((() => {
              EU && this.removeMessageHandler(EU)
            }))
          }
        }

        function nt() {
          return window
        }

        function bt() {
          return "undefined" !== typeof nt().WorkerGlobalScope && "function" === typeof nt().importScripts
        }
        const ot = "firebaseLocalStorageDb",
          Zt = "firebaseLocalStorage",
          Yt = "fbase_key";
        class Bt {
          constructor(UU) {
            this.request = UU
          }
          toPromise() {
            return new Promise(((UU, RU) => {
              this.request.addEventListener("success", (() => {
                UU(this.request.result)
              })), this.request.addEventListener("error", (() => {
                RU(this.request.error)
              }))
            }))
          }
        }

        function Vt(UU, RU) {
          return UU.transaction([Zt], RU ? "readwrite" : "readonly").objectStore(Zt)
        }

        function rt() {
          const UU = indexedDB.open(ot, 1);
          return new Promise(((RU, gU) => {
            UU.addEventListener("error", (() => {
              gU(UU.error)
            })), UU.addEventListener("upgradeneeded", (() => {
              const RU = UU.result;
              try {
                RU.createObjectStore(Zt, {
                  keyPath: Yt
                })
              } catch (tU) {
                gU(tU)
              }
            })), UU.addEventListener("success", (async () => {
              const gU = UU.result;
              gU.objectStoreNames.contains(Zt) ? RU(gU) : (gU.close(), await
                function() {
                  const UU = indexedDB.deleteDatabase(ot);
                  return new Bt(UU).toPromise()
                }(), RU(await rt()))
            }))
          }))
        }
        async function Xt(UU, RU, gU) {
          const tU = Vt(UU, !0).put({
            [Yt]: RU,
            value: gU
          });
          return new Bt(tU).toPromise()
        }

        function vt(UU, RU) {
          const gU = Vt(UU, !0).delete(RU);
          return new Bt(gU).toPromise()
        }
        class dt {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await rt()), this.db
          }
          async _withRetries(UU) {
            let RU = 0;
            for (;;) try {
              const RU = await this._openDb();
              return await UU(RU)
            } catch (gU) {
              if (RU++ > 3) throw gU;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return bt() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = It._getInstance(bt() ? self : null), this.receiver._subscribe("keyChanged", (async (UU, RU) => ({
              keyProcessed: (await this._poll()).includes(RU.key)
            }))), this.receiver._subscribe("ping", (async (UU, RU) => ["keyChanged"]))
          }
          async initializeSender() {
            var UU, RU;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (UU) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new wt(this.activeServiceWorker);
            const gU = await this.sender._send("ping", {}, 800);
            gU && (null === (UU = gU[0]) || void 0 === UU ? void 0 : UU.fulfilled) && (null === (RU = gU[0]) || void 0 === RU ? void 0 : RU.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(UU) {
            if (this.sender && this.activeServiceWorker && function() {
                var UU;
                return (null === (UU = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === UU ? void 0 : UU.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: UU
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (RU) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const UU = await rt();
              return await Xt(UU, Qt, "1"), await vt(UU, Qt), !0
            } catch (UU) {}
            return !1
          }
          async _withPendingWrite(UU) {
            this.pendingWrites++;
            try {
              await UU()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(UU, RU) {
            return this._withPendingWrite((async () => (await this._withRetries((gU => Xt(gU, UU, RU))), this.localCache[UU] = RU, this.notifyServiceWorker(UU))))
          }
          async _get(UU) {
            const RU = await this._withRetries((RU => async function(UU, RU) {
              const gU = Vt(UU, !1).get(RU),
                tU = await new Bt(gU).toPromise();
              return void 0 === tU ? null : tU.value
            }(RU, UU)));
            return this.localCache[UU] = RU, RU
          }
          async _remove(UU) {
            return this._withPendingWrite((async () => (await this._withRetries((RU => vt(RU, UU))), delete this.localCache[UU], this.notifyServiceWorker(UU))))
          }
          async _poll() {
            const UU = await this._withRetries((UU => {
              const RU = Vt(UU, !1).getAll();
              return new Bt(RU).toPromise()
            }));
            if (!UU) return [];
            if (0 !== this.pendingWrites) return [];
            const RU = [],
              gU = new Set;
            for (const {
                fbase_key: tU,
                value: pU
              }
              of UU) gU.add(tU), JSON.stringify(this.localCache[tU]) !== JSON.stringify(pU) && (this.notifyListeners(tU, pU), RU.push(tU));
            for (const tU of Object.keys(this.localCache)) this.localCache[tU] && !gU.has(tU) && (this.notifyListeners(tU, null), RU.push(tU));
            return RU
          }
          notifyListeners(UU, RU) {
            this.localCache[UU] = RU;
            const gU = this.listeners[UU];
            if (gU)
              for (const tU of Array.from(gU)) tU(RU)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(UU, RU) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[UU] || (this.listeners[UU] = new Set, this._get(UU)), this.listeners[UU].add(RU)
          }
          _removeListener(UU, RU) {
            this.listeners[UU] && (this.listeners[UU].delete(RU), 0 === this.listeners[UU].size && delete this.listeners[UU]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        dt.type = "LOCAL";
        const Ht = dt;
        const St = 1e12;
        class st {
          constructor(UU) {
            this.auth = UU, this.counter = St, this._widgets = new Map
          }
          render(UU, RU) {
            const gU = this.counter;
            return this._widgets.set(gU, new yt(UU, this.auth.name, RU || {})), this.counter++, gU
          }
          reset(UU) {
            var RU;
            const gU = UU || St;
            null === (RU = this._widgets.get(gU)) || void 0 === RU || RU.delete(), this._widgets.delete(gU)
          }
          getResponse(UU) {
            var RU;
            const gU = UU || St;
            return (null === (RU = this._widgets.get(gU)) || void 0 === RU ? void 0 : RU.getResponse()) || ""
          }
          async execute(UU) {
            var RU;
            const gU = UU || St;
            return null === (RU = this._widgets.get(gU)) || void 0 === RU || RU.execute(), ""
          }
        }
        class yt {
          constructor(UU, RU, gU) {
            this.params = gU, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const tU = "string" === typeof UU ? document.getElementById(UU) : UU;
            nU(tU, "argument-error", {
              appName: RU
            }), this.container = tU, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(UU) {
                const RU = [],
                  gU = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let tU = 0; tU < UU; tU++) RU.push(gU.charAt(Math.floor(Math.random() * gU.length)));
                return RU.join("")
              }(50);
              const {
                callback: UU,
                "expired-callback": RU
              } = this.params;
              if (UU) try {
                UU(this.responseToken)
              } catch (gU) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, RU) try {
                  RU()
                } catch (gU) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const kt = bR("rcb"),
          Ft = new BU(3e4, 6e4);
        class it {
          constructor() {
            var UU;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (UU = nt().grecaptcha) || void 0 === UU ? void 0 : UU.render)
          }
          load(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return nU(function(UU) {
              return UU.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(UU)
            }(RU), UU, "argument-error"), this.shouldResolveImmediately(RU) && IR(nt().grecaptcha) ? Promise.resolve(nt().grecaptcha) : new Promise(((gU, pU) => {
              const EU = nt().setTimeout((() => {
                pU(mU(UU, "network-request-failed"))
              }), Ft.get());
              nt()[kt] = () => {
                nt().clearTimeout(EU), delete nt()[kt];
                const tU = nt().grecaptcha;
                if (!tU || !IR(tU)) return void pU(mU(UU, "internal-error"));
                const PU = tU.render;
                tU.render = (UU, RU) => {
                  const gU = PU(UU, RU);
                  return this.counter++, gU
                }, this.hostLanguage = RU, gU(tU)
              };
              nR(`https://www.google.com/recaptcha/api.js??${(0,tU._)({onload:kt,render:"explicit",hl:RU})}`).catch((() => {
                clearTimeout(EU), pU(mU(UU, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(UU) {
            var RU;
            return !!(null === (RU = nt().grecaptcha) || void 0 === RU ? void 0 : RU.render) && (UU === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class At {
          async load(UU) {
            return new st(UU)
          }
          clearedOneInstance() {}
        }
        const zt = "recaptcha",
          Mt = {
            theme: "light",
            type: "image"
          };
        class Dt {
          constructor(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, Mt),
              gU = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = RU, this.type = zt, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = BR(gU), this.isInvisible = "invisible" === this.parameters.size, nU("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const tU = "string" === typeof UU ? document.getElementById(UU) : UU;
            nU(tU, this.auth, "argument-error"), this.container = tU, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new At : new it, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const UU = await this.render(),
              RU = this.getAssertedRecaptcha(),
              gU = RU.getResponse(UU);
            return gU || new Promise((gU => {
              const tU = UU => {
                UU && (this.tokenChangeListeners.delete(tU), gU(UU))
              };
              this.tokenChangeListeners.add(tU), this.isInvisible && RU.execute(UU)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (UU) {
              return Promise.reject(UU)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((UU => {
              throw this.renderPromise = null, UU
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((UU => {
              this.container.removeChild(UU)
            }))
          }
          validateStartingState() {
            nU(!this.parameters.sitekey, this.auth, "argument-error"), nU(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), nU("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(UU) {
            return RU => {
              if (this.tokenChangeListeners.forEach((UU => UU(RU))), "function" === typeof UU) UU(RU);
              else if ("string" === typeof UU) {
                const gU = nt()[UU];
                "function" === typeof gU && gU(RU)
              }
            }
          }
          assertNotDestroyed() {
            nU(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let UU = this.container;
              if (!this.isInvisible) {
                const RU = document.createElement("div");
                UU.appendChild(RU), UU = RU
              }
              this.widgetId = this.getAssertedRecaptcha().render(UU, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            nU(aU() && !bt(), this.auth, "internal-error"), await
            function() {
              let UU = null;
              return new Promise((RU => {
                "complete" !== document.readyState ? (UU = () => RU(), window.addEventListener("load", UU)) : RU()
              })).catch((RU => {
                throw UU && window.removeEventListener("load", UU), RU
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const UU = await async function(UU) {
              return (await HU(UU, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            nU(UU, this.auth, "internal-error"), this.parameters.sitekey = UU
          }
          getAssertedRecaptcha() {
            return nU(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class Lt {
          constructor(UU, RU) {
            this.verificationId = UU, this.onConfirmation = RU
          }
          confirm(UU) {
            const RU = LR._fromVerification(this.verificationId, UU);
            return this.onConfirmation(RU)
          }
        }
        async function Nt(UU, RU, gU) {
          const pU = BR(UU),
            EU = await Up(pU, RU, (0, tU.I)(gU));
          return new Lt(EU, (UU => mg(pU, UU)))
        }
        async function lt(UU, RU, gU) {
          const pU = (0, tU.I)(UU);
          await Wg(!1, pU, "phone");
          const EU = await Up(pU.auth, RU, (0, tU.I)(gU));
          return new Lt(EU, (UU => Ig(pU, UU)))
        }
        async function Ot(UU, RU, gU) {
          const pU = (0, tU.I)(UU),
            EU = await Up(pU.auth, RU, (0, tU.I)(gU));
          return new Lt(EU, (UU => Jg(pU, UU)))
        }
        async function Up(UU, RU, gU) {
          var tU;
          const pU = await gU.verify();
          try {
            let EU;
            if (nU("string" === typeof pU, UU, "argument-error"), nU(gU.type === zt, UU, "argument-error"), EU = "string" === typeof RU ? {
                phoneNumber: RU
              } : RU, "session" in EU) {
              const RU = EU.session;
              if ("phoneNumber" in EU) {
                nU("enroll" === RU.type, UU, "internal-error");
                const gU = await
                function(UU, RU) {
                  return HU(UU, "POST", "/v2/accounts/mfaEnrollment:start", dU(UU, RU))
                }(UU, {
                  idToken: RU.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: EU.phoneNumber,
                    recaptchaToken: pU
                  }
                });
                return gU.phoneSessionInfo.sessionInfo
              } {
                nU("signin" === RU.type, UU, "internal-error");
                const gU = (null === (tU = EU.multiFactorHint) || void 0 === tU ? void 0 : tU.uid) || EU.multiFactorUid;
                nU(gU, UU, "missing-multi-factor-info");
                const PU = await
                function(UU, RU) {
                  return HU(UU, "POST", "/v2/accounts/mfaSignIn:start", dU(UU, RU))
                }(UU, {
                  mfaPendingCredential: RU.credential,
                  mfaEnrollmentId: gU,
                  phoneSignInInfo: {
                    recaptchaToken: pU
                  }
                });
                return PU.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: RU
              } = await async function(UU, RU) {
                return HU(UU, "POST", "/v1/accounts:sendVerificationCode", dU(UU, RU))
              }(UU, {
                phoneNumber: EU.phoneNumber,
                recaptchaToken: pU
              });
              return RU
            }
          } finally {
            gU._reset()
          }
        }
        async function Rp(UU, RU) {
          await eg((0, tU.I)(UU), RU)
        }
        class gp {
          constructor(UU) {
            this.providerId = gp.PROVIDER_ID, this.auth = BR(UU)
          }
          verifyPhoneNumber(UU, RU) {
            return Up(this.auth, UU, (0, tU.I)(RU))
          }
          static credential(UU, RU) {
            return LR._fromVerification(UU, RU)
          }
          static credentialFromResult(UU) {
            const RU = UU;
            return gp.credentialFromTaggedObject(RU)
          }
          static credentialFromError(UU) {
            return gp.credentialFromTaggedObject(UU.customData || {})
          }
          static credentialFromTaggedObject(UU) {
            let {
              _tokenResponse: RU
            } = UU;
            if (!RU) return null;
            const {
              phoneNumber: gU,
              temporaryProof: tU
            } = RU;
            return gU && tU ? LR._fromTokenResponse(gU, tU) : null
          }
        }

        function tp(UU, RU) {
          return RU ? ER(RU) : (nU(UU._popupRedirectResolver, UU, "argument-error"), UU._popupRedirectResolver)
        }
        gp.PROVIDER_ID = "phone", gp.PHONE_SIGN_IN_METHOD = "phone";
        class pp extends HR {
          constructor(UU) {
            super("custom", "custom"), this.params = UU
          }
          _getIdTokenResponse(UU) {
            return zR(UU, this._buildIdpRequest())
          }
          _linkToIdToken(UU, RU) {
            return zR(UU, this._buildIdpRequest(RU))
          }
          _getReauthenticationResolver(UU) {
            return zR(UU, this._buildIdpRequest())
          }
          _buildIdpRequest(UU) {
            const RU = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return UU && (RU.idToken = UU), RU
          }
        }

        function Ep(UU) {
          return xg(UU.auth, new pp(UU), UU.bypassAuthState)
        }

        function Pp(UU) {
          const {
            auth: RU,
            user: gU
          } = UU;
          return nU(gU, RU, "internal-error"), fg(gU, new pp(UU), UU.bypassAuthState)
        }
        async function Tp(UU) {
          const {
            auth: RU,
            user: gU
          } = UU;
          return nU(gU, RU, "internal-error"), eg(gU, new pp(UU), UU.bypassAuthState)
        }
        class qp {
          constructor(UU, RU, gU, tU) {
            let pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = UU, this.resolver = gU, this.user = tU, this.bypassAuthState = pU, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(RU) ? RU : [RU]
          }
          execute() {
            return new Promise((async (UU, RU) => {
              this.pendingPromise = {
                resolve: UU,
                reject: RU
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (gU) {
                this.reject(gU)
              }
            }))
          }
          async onAuthEvent(UU) {
            const {
              urlResponse: RU,
              sessionId: gU,
              postBody: tU,
              tenantId: pU,
              error: EU,
              type: PU
            } = UU;
            if (EU) return void this.reject(EU);
            const TU = {
              auth: this.auth,
              requestUri: RU,
              sessionId: gU,
              tenantId: pU || void 0,
              postBody: tU || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(PU)(TU))
            } catch (qU) {
              this.reject(qU)
            }
          }
          onError(UU) {
            this.reject(UU)
          }
          getIdpTask(UU) {
            switch (UU) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return Ep;
              case "linkViaPopup":
              case "linkViaRedirect":
                return Tp;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return Pp;
              default:
                xU(this.auth, "internal-error")
            }
          }
          resolve(UU) {
            oU(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(UU), this.unregisterAndCleanUp()
          }
          reject(UU) {
            oU(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(UU), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const Kp = new BU(2e3, 1e4);
        async function cp(UU, RU, gU) {
          const tU = BR(UU);
          JU(UU, RU, Ug);
          const pU = tp(tU, gU);
          return new Cp(tU, "signInViaPopup", RU, pU).executeNotNull()
        }
        async function Gp(UU, RU, gU) {
          const pU = (0, tU.I)(UU);
          JU(pU.auth, RU, Ug);
          const EU = tp(pU.auth, gU);
          return new Cp(pU.auth, "reauthViaPopup", RU, EU, pU).executeNotNull()
        }
        async function jp(UU, RU, gU) {
          const pU = (0, tU.I)(UU);
          JU(pU.auth, RU, Ug);
          const EU = tp(pU.auth, gU);
          return new Cp(pU.auth, "linkViaPopup", RU, EU, pU).executeNotNull()
        }
        class Cp extends qp {
          constructor(UU, RU, gU, tU, pU) {
            super(UU, RU, tU, pU), this.provider = gU, this.authWindow = null, this.pollId = null, Cp.currentPopupAction && Cp.currentPopupAction.cancel(), Cp.currentPopupAction = this
          }
          async executeNotNull() {
            const UU = await this.execute();
            return nU(UU, this.auth, "internal-error"), UU
          }
          async onExecution() {
            oU(1 === this.filter.length, "Popup operations only handle one event");
            const UU = Jt();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], UU), this.authWindow.associatedEvent = UU, this.resolver._originValidation(this.auth).catch((UU => {
              this.reject(UU)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (UU => {
              UU || this.reject(mU(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var UU;
            return (null === (UU = this.authWindow) || void 0 === UU ? void 0 : UU.associatedEvent) || null
          }
          cancel() {
            this.reject(mU(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Cp.currentPopupAction = null
          }
          pollUserCancellation() {
            const UU = () => {
              var RU, gU;
              (null === (gU = null === (RU = this.authWindow) || void 0 === RU ? void 0 : RU.window) || void 0 === gU ? void 0 : gU.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(mU(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(UU, Kp.get())
            };
            UU()
          }
        }
        Cp.currentPopupAction = null;
        const hp = "pendingRedirect",
          Qp = new Map;
        class ep extends qp {
          constructor(UU, RU) {
            super(UU, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], RU, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let UU = Qp.get(this.auth._key());
            if (!UU) {
              try {
                const RU = await async function(UU, RU) {
                  const gU = mp(RU),
                    tU = xp(UU);
                  if (!await tU._isAvailable()) return !1;
                  const pU = "true" === await tU._get(gU);
                  return await tU._remove(gU), pU
                }(this.resolver, this.auth) ? await super.execute() : null;
                UU = () => Promise.resolve(RU)
              } catch (RU) {
                UU = () => Promise.reject(RU)
              }
              Qp.set(this.auth._key(), UU)
            }
            return this.bypassAuthState || Qp.set(this.auth._key(), (() => Promise.resolve(null))), UU()
          }
          async onAuthEvent(UU) {
            if ("signInViaRedirect" === UU.type) return super.onAuthEvent(UU);
            if ("unknown" !== UU.type) {
              if (UU.eventId) {
                const RU = await this.auth._redirectUserForId(UU.eventId);
                if (RU) return this.user = RU, super.onAuthEvent(UU);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function Wp(UU, RU) {
          return xp(UU)._set(mp(RU), "true")
        }

        function fp(UU, RU) {
          Qp.set(UU._key(), RU)
        }

        function xp(UU) {
          return ER(UU._redirectPersistence)
        }

        function mp(UU) {
          return qR(hp, UU.config.apiKey, UU.name)
        }

        function Ip(UU, RU, gU) {
          return async function(UU, RU, gU) {
            const tU = BR(UU);
            JU(UU, RU, Ug), await tU._initializationPromise;
            const pU = tp(tU, gU);
            return await Wp(pU, tU), pU._openRedirect(tU, RU, "signInViaRedirect")
          }(UU, RU, gU)
        }

        function Jp(UU, RU, gU) {
          return async function(UU, RU, gU) {
            const pU = (0, tU.I)(UU);
            JU(pU.auth, RU, Ug), await pU.auth._initializationPromise;
            const EU = tp(pU.auth, gU);
            await Wp(EU, pU.auth);
            const PU = await op(pU);
            return EU._openRedirect(pU.auth, RU, "reauthViaRedirect", PU)
          }(UU, RU, gU)
        }

        function wp(UU, RU, gU) {
          return async function(UU, RU, gU) {
            const pU = (0, tU.I)(UU);
            JU(pU.auth, RU, Ug), await pU.auth._initializationPromise;
            const EU = tp(pU.auth, gU);
            await Wg(!1, pU, RU.providerId), await Wp(EU, pU.auth);
            const PU = await op(pU);
            return EU._openRedirect(pU.auth, RU, "linkViaRedirect", PU)
          }(UU, RU, gU)
        }
        async function np(UU, RU) {
          return await BR(UU)._initializationPromise, bp(UU, RU, !1)
        }
        async function bp(UU, RU) {
          let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const tU = BR(UU),
            pU = tp(tU, RU),
            EU = new ep(tU, pU, gU),
            PU = await EU.execute();
          return PU && !gU && (delete PU.user._redirectEventId, await tU._persistUserIfCurrent(PU.user), await tU._setRedirectUser(null, RU)), PU
        }
        async function op(UU) {
          const RU = Jt(`${UU.uid}:::`);
          return UU._redirectEventId = RU, await UU.auth._setRedirectUser(UU), await UU.auth._persistUserIfCurrent(UU), RU
        }
        class Zp {
          constructor(UU) {
            this.auth = UU, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(UU) {
            this.consumers.add(UU), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, UU) && (this.sendToConsumer(this.queuedRedirectEvent, UU), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(UU) {
            this.consumers.delete(UU)
          }
          onEvent(UU) {
            if (this.hasEventBeenHandled(UU)) return !1;
            let RU = !1;
            return this.consumers.forEach((gU => {
              this.isEventForConsumer(UU, gU) && (RU = !0, this.sendToConsumer(UU, gU), this.saveEventToCache(UU))
            })), this.hasHandledPotentialRedirect || ! function(UU) {
              switch (UU.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return Yp(UU);
                default:
                  return !1
              }
            }(UU) || (this.hasHandledPotentialRedirect = !0, RU || (this.queuedRedirectEvent = UU, RU = !0)), RU
          }
          sendToConsumer(UU, RU) {
            var gU;
            if (UU.error && !Yp(UU)) {
              const tU = (null === (gU = UU.error.code) || void 0 === gU ? void 0 : gU.split("auth/")[1]) || "internal-error";
              RU.onError(mU(this.auth, tU))
            } else RU.onAuthEvent(UU)
          }
          isEventForConsumer(UU, RU) {
            const gU = null === RU.eventId || !!UU.eventId && UU.eventId === RU.eventId;
            return RU.filter.includes(UU.type) && gU
          }
          hasEventBeenHandled(UU) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(ap(UU))
          }
          saveEventToCache(UU) {
            this.cachedEventUids.add(ap(UU)), this.lastProcessedEventTime = Date.now()
          }
        }

        function ap(UU) {
          return [UU.type, UU.eventId, UU.sessionId, UU.tenantId].filter((UU => UU)).join("-")
        }

        function Yp(UU) {
          let {
            type: RU,
            error: gU
          } = UU;
          return "unknown" === RU && "auth/no-auth-event" === (null === gU || void 0 === gU ? void 0 : gU.code)
        }
        const Bp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          Vp = /^https?/;
        async function rp(UU) {
          if (UU.config.emulator) return;
          const {
            authorizedDomains: RU
          } = await async function(UU) {
            return HU(UU, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(UU);
          for (const tU of RU) try {
            if (Xp(tU)) return
          } catch (gU) {}
          xU(UU, "unauthorized-domain")
        }

        function Xp(UU) {
          const RU = ZU(),
            {
              protocol: gU,
              hostname: tU
            } = new URL(RU);
          if (UU.startsWith("chrome-extension://")) {
            const pU = new URL(UU);
            return "" === pU.hostname && "" === tU ? "chrome-extension:" === gU && UU.replace("chrome-extension://", "") === RU.replace("chrome-extension://", "") : "chrome-extension:" === gU && pU.hostname === tU
          }
          if (!Vp.test(gU)) return !1;
          if (Bp.test(UU)) return tU === UU;
          const pU = UU.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + pU + "|" + pU + ")$", "i").test(tU)
        }
        const vp = new BU(3e4, 6e4);

        function dp() {
          const UU = nt().___jsl;
          if (null === UU || void 0 === UU ? void 0 : UU.H)
            for (const RU of Object.keys(UU.H))
              if (UU.H[RU].r = UU.H[RU].r || [], UU.H[RU].L = UU.H[RU].L || [], UU.H[RU].r = [...UU.H[RU].L], UU.CP)
                for (let gU = 0; gU < UU.CP.length; gU++) UU.CP[gU] = null
        }
        let Hp = null;

        function Sp(UU) {
          return Hp = Hp || function(UU) {
            return new Promise(((RU, gU) => {
              var tU, pU, EU;

              function PU() {
                dp(), gapi.load("gapi.iframes", {
                  callback: () => {
                    RU(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    dp(), gU(mU(UU, "network-request-failed"))
                  },
                  timeout: vp.get()
                })
              }
              if (null === (pU = null === (tU = nt().gapi) || void 0 === tU ? void 0 : tU.iframes) || void 0 === pU ? void 0 : pU.Iframe) RU(gapi.iframes.getContext());
              else {
                if (!(null === (EU = nt().gapi) || void 0 === EU ? void 0 : EU.load)) {
                  const RU = bR("iframefcb");
                  return nt()[RU] = () => {
                    gapi.load ? PU() : gU(mU(UU, "network-request-failed"))
                  }, nR(`https://apis.google.com/js/api.js?onload=${RU}`).catch((UU => gU(UU)))
                }
                PU()
              }
            })).catch((UU => {
              throw Hp = null, UU
            }))
          }(UU), Hp
        }
        const sp = new BU(5e3, 15e3),
          yp = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          kp = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function Fp(UU) {
          const RU = UU.config;
          nU(RU.authDomain, UU, "auth-domain-config-required");
          const gU = RU.emulator ? VU(RU, "emulator/auth/iframe") : `https://${UU.config.authDomain}/__/auth/iframe`,
            EU = {
              apiKey: RU.apiKey,
              appName: UU.name,
              v: pU.f
            },
            PU = kp.get(UU.config.apiHost);
          PU && (EU.eid = PU);
          const TU = UU._getFrameworks();
          return TU.length && (EU.fw = TU.join(",")), `${gU}?${(0,tU._)(EU).slice(1)}`
        }
        const ip = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class Ap {
          constructor(UU) {
            this.window = UU, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (UU) {}
          }
        }

        function zp(UU, RU, gU) {
          let pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const PU = Math.max((window.screen.availHeight - EU) / 2, 0).toString(),
            TU = Math.max((window.screen.availWidth - pU) / 2, 0).toString();
          let qU = "";
          const KU = Object.assign(Object.assign({}, ip), {
              width: pU.toString(),
              height: EU.toString(),
              top: PU,
              left: TU
            }),
            cU = (0, tU.J)().toLowerCase();
          gU && (qU = uR(cU) ? "_blank" : gU), GR(cU) && (RU = RU || "http://localhost", KU.scrollbars = "yes");
          const GU = Object.entries(KU).reduce(((UU, RU) => {
            let [gU, tU] = RU;
            return `${UU}${gU}=${tU},`
          }), "");
          if (function() {
              var UU;
              return WR(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tU.J)()) && !!(null === (UU = window.navigator) || void 0 === UU ? void 0 : UU.standalone)
            }(cU) && "_self" !== qU) return function(UU, RU) {
            const gU = document.createElement("a");
            gU.href = UU, gU.target = RU;
            const tU = document.createEvent("MouseEvent");
            tU.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), gU.dispatchEvent(tU)
          }(RU || "", qU), new Ap(null);
          const jU = window.open(RU || "", qU, GU);
          nU(jU, UU, "popup-blocked");
          try {
            jU.focus()
          } catch (uU) {}
          return new Ap(jU)
        }
        const Mp = "__/auth/handler",
          Dp = "emulator/auth/handler",
          Lp = encodeURIComponent("fac");
        async function Np(UU, RU, gU, EU, PU, TU) {
            nU(UU.config.authDomain, UU, "auth-domain-config-required"), nU(UU.config.apiKey, UU, "invalid-api-key");
            const qU = {
              apiKey: UU.config.apiKey,
              appName: UU.name,
              authType: gU,
              redirectUrl: EU,
              v: pU.f,
              eventId: PU
            };
            if (RU instanceof Ug) {
              RU.setDefaultLanguage(UU.languageCode), qU.providerId = RU.providerId || "", (0, tU.N)(RU.getCustomParameters()) || (qU.customParameters = JSON.stringify(RU.getCustomParameters()));
              for (const [UU, RU] of Object.entries(TU || {})) qU[UU] = RU
            }
            if (RU instanceof Rg) {
              const UU = RU.getScopes().filter((UU => "" !== UU));
              UU.length > 0 && (qU.scopes = UU.join(","))
            }
            UU.tenantId && (qU.tid = UU.tenantId);
            const KU = qU;
            for (const tU of Object.keys(KU)) void 0 === KU[tU] && delete KU[tU];
            const cU = await UU._getAppCheckToken(),
              GU = cU ? `#${Lp}=${encodeURIComponent(cU)}` : "";
            return `${function(UU){let{config:RU}=UU;if(!RU.emulator)return`
            https: //${RU.authDomain}/${Mp}`;return VU(RU,Dp)}(UU)}?${(0,tU._)(KU).slice(1)}${GU}`}const lp="webStorageSupport";const Op=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mt,this._completeRedirectFn=bp,this._overrideRedirectResult=fp}async _openPopup(UU,RU,gU,tU){var pU;oU(null===(pU=this.eventManagers[UU._key()])||void 0===pU?void 0:pU.manager,"_initialize() not called before _openPopup()");return zp(UU,await Np(UU,RU,gU,ZU(),tU),Jt())}async _openRedirect(UU,RU,gU,tU){await this._originValidation(UU);return function(UU){nt().location.href=UU}(await Np(UU,RU,gU,ZU(),tU)),new Promise((()=>{}))}_initialize(UU){const RU=UU._key();if(this.eventManagers[RU]){const{manager:UU,promise:gU}=this.eventManagers[RU];return UU?Promise.resolve(UU):(oU(gU,"If manager is not set, promise should be"),gU)}const gU=this.initAndGetManager(UU);return this.eventManagers[RU]={promise:gU},gU.catch((()=>{delete this.eventManagers[RU]})),gU}async initAndGetManager(UU){const RU=await async function(UU){const RU=await Sp(UU),gU=nt().gapi;return nU(gU,UU,"internal-error"),RU.open({where:document.body,url:Fp(UU),messageHandlersFilter:gU.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yp,dontclear:!0},(RU=>new Promise((async(gU,tU)=>{await RU.restyle({setHideOnLeave:!1});const pU=mU(UU,"network-request-failed"),EU=nt().setTimeout((()=>{tU(pU)}),sp.get());function PU(){nt().clearTimeout(EU),gU(RU)}RU.ping(PU).then(PU,(()=>{tU(pU)}))}))))}(UU),gU=new Zp(UU);return RU.register("authEvent",(RU=>{nU(null===RU||void 0===RU?void 0:RU.authEvent,UU,"invalid-auth-event");return{status:gU.onEvent(RU.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[UU._key()]={manager:gU},this.iframes[UU._key()]=RU,gU}_isIframeWebStorageSupported(UU,RU){this.iframes[UU._key()].send(lp,{type:lp},(gU=>{var tU;const pU=null===(tU=null===gU||void 0===gU?void 0:gU[0])||void 0===tU?void 0:tU[lp];void 0!==pU&&RU(!!pU),xU(UU,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(UU){const RU=UU._key();return this.originValidationPromises[RU]||(this.originValidationPromises[RU]=rp(UU)),this.originValidationPromises[RU]}get _shouldInitProactively(){return fR()||jR()||WR()}};class UE{constructor(UU){this.factorId=UU}_process(UU,RU,gU){switch(RU.type){case"enroll":return this._finalizeEnroll(UU,RU.credential,gU);case"signin":return this._finalizeSignIn(UU,RU.credential);default:return bU("unexpected MultiFactorSessionType")}}}class RE extends UE{constructor(UU){super("phone"),this.credential=UU}static _fromCredential(UU){return new RE(UU)}_finalizeEnroll(UU,RU,gU){return function(UU,RU){return HU(UU,"POST","/v2/accounts/mfaEnrollment:finalize",dU(UU,RU))}(UU,{idToken:RU,displayName:gU,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(UU,RU){return function(UU,RU){return HU(UU,"POST","/v2/accounts/mfaSignIn:finalize",dU(UU,RU))}(UU,{mfaPendingCredential:RU,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class gE{constructor(){}static assertion(UU){return RE._fromCredential(UU)}}gE.FACTOR_ID="phone";class tE{static assertionForEnrollment(UU,RU){return pE._fromSecret(UU,RU)}static assertionForSignIn(UU,RU){return pE._fromEnrollmentId(UU,RU)}static async generateSecret(UU){const RU=UU;nU("undefined"!==typeof RU.auth,"internal-error");const gU=await(tU=RU.auth,pU={idToken:RU.credential,totpEnrollmentInfo:{}},HU(tU,"POST","/v2/accounts/mfaEnrollment:start",dU(tU,pU)));var tU,pU;return EE._fromStartTotpMfaEnrollmentResponse(gU,RU.auth)}}tE.FACTOR_ID="totp";class pE extends UE{constructor(UU,RU,gU){super("totp"),this.otp=UU,this.enrollmentId=RU,this.secret=gU}static _fromSecret(UU,RU){return new pE(RU,void 0,UU)}static _fromEnrollmentId(UU,RU){return new pE(RU,UU)}async _finalizeEnroll(UU,RU,gU){return nU("undefined"!==typeof this.secret,UU,"argument-error"),function(UU,RU){return HU(UU,"POST","/v2/accounts/mfaEnrollment:finalize",dU(UU,RU))}(UU,{idToken:RU,displayName:gU,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(UU,RU){nU(void 0!==this.enrollmentId&&void 0!==this.otp,UU,"argument-error");const gU={verificationCode:this.otp};return function(UU,RU){return HU(UU,"POST","/v2/accounts/mfaSignIn:finalize",dU(UU,RU))}(UU,{mfaPendingCredential:RU,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:gU})}}class EE{constructor(UU,RU,gU,tU,pU,EU,PU){this.sessionInfo=EU,this.auth=PU,this.secretKey=UU,this.hashingAlgorithm=RU,this.codeLength=gU,this.codeIntervalSeconds=tU,this.enrollmentCompletionDeadline=pU}static _fromStartTotpMfaEnrollmentResponse(UU,RU){return new EE(UU.totpSessionInfo.sharedSecretKey,UU.totpSessionInfo.hashingAlgorithm,UU.totpSessionInfo.verificationCodeLength,UU.totpSessionInfo.periodSec,new Date(UU.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),UU.totpSessionInfo.sessionInfo,RU)}_makeTotpVerificationInfo(UU){return{sessionInfo:this.sessionInfo,verificationCode:UU}}generateQrCodeUrl(UU,RU){var gU;let tU=!1;return(PE(UU)||PE(RU))&&(tU=!0),tU&&(PE(UU)&&(UU=(null===(gU=this.auth.currentUser)||void 0===gU?void 0:gU.email)||"unknownuser"),PE(RU)&&(RU=this.auth.name)),`otpauth://totp/${RU}:${UU}?secret=${this.secretKey}&issuer=${RU}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function PE(UU){return"undefined"===typeof UU||0===(null===UU||void 0===UU?void 0:UU.length)}var TE="@firebase/auth",qE="0.23.2";class KE{constructor(UU){this.auth=UU,this.internalListeners=new Map}getUid(){var UU;return this.assertAuthConfigured(),(null===(UU=this.auth.currentUser)||void 0===UU?void 0:UU.uid)||null}async getToken(UU){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(UU)}}addAuthTokenListener(UU){if(this.assertAuthConfigured(),this.internalListeners.has(UU))return;const RU=this.auth.onIdTokenChanged((RU=>{UU((null===RU||void 0===RU?void 0:RU.stsTokenManager.accessToken)||null)}));this.internalListeners.set(UU,RU),this.updateProactiveRefresh()}removeAuthTokenListener(UU){this.assertAuthConfigured();const RU=this.internalListeners.get(UU);RU&&(this.internalListeners.delete(UU),RU(),this.updateProactiveRefresh())}assertAuthConfigured(){nU(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const cE=(0,tU.F)("authIdTokenMaxAge")||300;let GE=null;const jE=UU=>async RU=>{const gU=RU&&await RU.getIdTokenResult(),tU=gU&&((new Date).getTime()-Date.parse(gU.issuedAtTime))/1e3;if(tU&&tU>cE)return;const pU=null===gU||void 0===gU?void 0:gU.token;GE!==pU&&(GE=pU,await fetch(UU,{method:pU?"POST":"DELETE",headers:pU?{Authorization:`Bearer ${pU}`}:{}}))};function uE(){let UU=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,pU.K)();const RU=(0,pU.w)(UU,"auth");if(RU.isInitialized())return RU.getImmediate();const gU=rR(UU,{popupRedirectResolver:Op,persistence:[Ht,ft,mt]}),EU=(0,tU.F)("authTokenSyncURL");if(EU){const UU=jE(EU);pt(gU,UU,(()=>UU(gU.currentUser))),tt(gU,(RU=>UU(RU)))}const PU=(0,tU.E)("auth");return PU&&XR(gU,`http://${PU}`),gU}var CE;CE="Browser",(0,pU.A)(new TU.e("auth",((UU,RU)=>{let{options:gU}=RU;const tU=UU.getProvider("app").getImmediate(),pU=UU.getProvider("heartbeat"),EU=UU.getProvider("app-check-internal"),{apiKey:PU,authDomain:TU}=tU.options;nU(PU&&!PU.includes(":"),"invalid-api-key",{appName:tU.name});const qU={apiKey:PU,authDomain:TU,clientPlatform:CE,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xR(CE)},KU=new YR(tU,pU,EU,qU);return function(UU,RU){const gU=(null===RU||void 0===RU?void 0:RU.persistence)||[],tU=(Array.isArray(gU)?gU:[gU]).map(ER);(null===RU||void 0===RU?void 0:RU.errorMap)&&UU._updateErrorMap(RU.errorMap),UU._initializeWithPersistence(tU,null===RU||void 0===RU?void 0:RU.popupRedirectResolver)}(KU,gU),KU}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((UU,RU,gU)=>{UU.getProvider("auth-internal").initialize()}))),(0,pU.A)(new TU.e("auth-internal",(UU=>(UU=>new KE(UU))(BR(UU.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,pU.U)(TE,qE,function(UU){switch(UU){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(CE)),(0,pU.U)(TE,qE,"esm2017")}};Object.freeze(modules);for(const UU in modules)Object.freeze(modules[UU]);