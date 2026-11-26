/*! For license information please see fecih8.293.159d40a7.chunk.js.LICENSE.txt */
export const id = 293;
export const ids = [293];
export const modules = {
    41615: (UU, XU, zU) => {
        zU.r(XU), zU.d(XU, {
          ActionCodeOperation: () => NU,
          ActionCodeURL: () => bX,
          AuthCredential: () => HX,
          AuthErrorCodes: () => gU,
          EmailAuthCredential: () => lX,
          EmailAuthProvider: () => hX,
          FacebookAuthProvider: () => cz,
          FactorId: () => oU,
          GithubAuthProvider: () => Qz,
          GoogleAuthProvider: () => yz,
          OAuthCredential: () => JX,
          OAuthProvider: () => zz,
          OperationType: () => YU,
          PhoneAuthCredential: () => KX,
          PhoneAuthProvider: () => Xy,
          PhoneMultiFactorGenerator: () => UQ,
          ProviderId: () => DU,
          RecaptchaVerifier: () => Jc,
          SAMLAuthProvider: () => Fz,
          SignInMethod: () => EU,
          TotpMultiFactorGenerator: () => XQ,
          TotpSecret: () => cQ,
          TwitterAuthProvider: () => oz,
          applyActionCode: () => Oz,
          beforeAuthStateChanged: () => yc,
          browserLocalPersistence: () => Gc,
          browserPopupRedirectResolver: () => by,
          browserSessionPersistence: () => Zc,
          checkActionCode: () => Sz,
          confirmPasswordReset: () => qz,
          connectAuthEmulator: () => uX,
          createUserWithEmailAndPassword: () => uz,
          debugErrorMap: () => pU,
          deleteUser: () => Dc,
          fetchSignInMethodsForEmail: () => vz,
          getAdditionalUserInfo: () => Uc,
          getAuth: () => YQ,
          getIdToken: () => lU,
          getIdTokenResult: () => xU,
          getMultiFactorResolver: () => Nc,
          getRedirectResult: () => Py,
          inMemoryPersistence: () => FX,
          indexedDBLocalPersistence: () => ic,
          initializeAuth: () => rX,
          initializeRecaptchaConfig: () => zc,
          isSignInWithEmailLink: () => Hz,
          linkWithCredential: () => Rz,
          linkWithPhoneNumber: () => bc,
          linkWithPopup: () => Yy,
          linkWithRedirect: () => Ry,
          multiFactor: () => ac,
          onAuthStateChanged: () => Qc,
          onIdTokenChanged: () => cc,
          parseActionCodeURL: () => TX,
          prodErrorMap: () => aU,
          reauthenticateWithCredential: () => Pz,
          reauthenticateWithPhoneNumber: () => Tc,
          reauthenticateWithPopup: () => Ey,
          reauthenticateWithRedirect: () => Zy,
          reload: () => UX,
          sendEmailVerification: () => Vz,
          sendPasswordResetEmail: () => wz,
          sendSignInLinkToEmail: () => iz,
          setPersistence: () => Xc,
          signInAnonymously: () => Nz,
          signInWithCredential: () => Zz,
          signInWithCustomToken: () => Wz,
          signInWithEmailAndPassword: () => fz,
          signInWithEmailLink: () => Mz,
          signInWithPhoneNumber: () => Kc,
          signInWithPopup: () => Dy,
          signInWithRedirect: () => By,
          signOut: () => oc,
          unlink: () => tz,
          updateCurrentUser: () => Fc,
          updateEmail: () => mz,
          updatePassword: () => lz,
          updatePhoneNumber: () => Uy,
          updateProfile: () => nz,
          useDeviceLanguage: () => Ac,
          verifyBeforeUpdateEmail: () => sz,
          verifyPasswordResetCode: () => rz
        });
        var cU = zU(41599),
          yU = zU(41582);

        function QU(UU, XU) {
          var zU = {};
          for (var cU in UU) Object.prototype.hasOwnProperty.call(UU, cU) && XU.indexOf(cU) < 0 && (zU[cU] = UU[cU]);
          if (null != UU && "function" === typeof Object.getOwnPropertySymbols) {
            var yU = 0;
            for (cU = Object.getOwnPropertySymbols(UU); yU < cU.length; yU++) XU.indexOf(cU[yU]) < 0 && Object.prototype.propertyIsEnumerable.call(UU, cU[yU]) && (zU[cU[yU]] = UU[cU[yU]])
          }
          return zU
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var AU = zU(41603),
          FU = zU(41590);
        const oU = {
            PHONE: "phone",
            TOTP: "totp"
          },
          DU = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          EU = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          YU = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          NU = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function IU() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const pU = function() {
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
          aU = IU,
          tU = new cU.f("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          gU = {
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
          kU = new AU.d("@firebase/auth");

        function GU(UU) {
          if (kU.logLevel <= AU.c.ERROR) {
            for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
            kU.error(`Auth (${yU.e}): ${UU}`, ...zU)
          }
        }

        function BU(UU) {
          for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
          throw WU(UU, ...zU)
        }

        function ZU(UU) {
          for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
          return WU(UU, ...zU)
        }

        function RU(UU, XU, zU) {
          const yU = Object.assign(Object.assign({}, aU()), {
            [XU]: zU
          });
          return new cU.f("auth", "Firebase", yU).create(XU, {
            appName: UU.name
          })
        }

        function PU(UU, XU, zU) {
          if (!(XU instanceof zU)) throw zU.name !== XU.constructor.name && BU(UU, "argument-error"), RU(UU, "argument-error", `Type of ${XU.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function WU(UU) {
          for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
          if ("string" !== typeof UU) {
            const XU = zU[0],
              cU = [...zU.slice(1)];
            return cU[0] && (cU[0].appName = UU.name), UU._errorFactory.create(XU, ...cU)
          }
          return tU.create(UU, ...zU)
        }

        function dU(UU, XU) {
          if (!UU) {
            for (var zU = arguments.length, cU = new Array(zU > 2 ? zU - 2 : 0), yU = 2; yU < zU; yU++) cU[yU - 2] = arguments[yU];
            throw WU(XU, ...cU)
          }
        }

        function LU(UU) {
          const XU = "INTERNAL ASSERTION FAILED: " + UU;
          throw GU(XU), new Error(XU)
        }

        function eU(UU, XU) {
          UU || LU(XU)
        }

        function CU() {
          var UU;
          return "undefined" !== typeof self && (null === (UU = self.location) || void 0 === UU ? void 0 : UU.href) || ""
        }

        function wU() {
          return "http:" === qU() || "https:" === qU()
        }

        function qU() {
          var UU;
          return "undefined" !== typeof self && (null === (UU = self.location) || void 0 === UU ? void 0 : UU.protocol) || null
        }
        class OU {
          constructor(UU, XU) {
            this.shortDelay = UU, this.longDelay = XU, eU(XU > UU, "Short delay should be less than long delay!"), this.isMobile = (0, cU.gb)() || (0, cU.jb)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (wU() || (0, cU.Z)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function SU(UU, XU) {
          eU(UU.emulator, "Emulator should always be set here");
          const {
            url: zU
          } = UU.emulator;
          return XU ? `${zU}${XU.startsWith("/")?XU.slice(1):XU}` : zU
        }
        class rU {
          static initialize(UU, XU, zU) {
            this.fetchImpl = UU, XU && (this.headersImpl = XU), zU && (this.responseImpl = zU)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void LU("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void LU("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void LU("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const uU = {
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
          fU = new OU(3e4, 6e4);

        function iU(UU, XU) {
          return UU.tenantId && !XU.tenantId ? Object.assign(Object.assign({}, XU), {
            tenantId: UU.tenantId
          }) : XU
        }
        async function HU(UU, XU, zU, yU) {
          return MU(UU, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let QU = {},
              AU = {};
            yU && ("GET" === XU ? AU = yU : QU = {
              body: JSON.stringify(yU)
            });
            const FU = (0, cU.pb)(Object.assign({
                key: UU.config.apiKey
              }, AU)).slice(1),
              oU = await UU._getAdditionalHeaders();
            return oU["Content-Type"] = "application/json", UU.languageCode && (oU["X-Firebase-Locale"] = UU.languageCode), rU.fetch()(VU(UU, UU.config.apiHost, zU, FU), Object.assign({
              method: XU,
              headers: oU,
              referrerPolicy: "no-referrer"
            }, QU))
          }))
        }
        async function MU(UU, XU, zU) {
          UU._canInitEmulator = !1;
          const yU = Object.assign(Object.assign({}, uU), XU);
          try {
            const XU = new sU(UU),
              cU = await Promise.race([zU(), XU.promise]);
            XU.clearNetworkTimeout();
            const QU = await cU.json();
            if ("needConfirmation" in QU) throw nU(UU, "account-exists-with-different-credential", QU);
            if (cU.ok && !("errorMessage" in QU)) return QU;
            {
              const XU = cU.ok ? QU.errorMessage : QU.error.message,
                [zU, AU] = XU.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === zU) throw nU(UU, "credential-already-in-use", QU);
              if ("EMAIL_EXISTS" === zU) throw nU(UU, "email-already-in-use", QU);
              if ("USER_DISABLED" === zU) throw nU(UU, "user-disabled", QU);
              const FU = yU[zU] || zU.toLowerCase().replace(/[_\s]+/g, "-");
              if (AU) throw RU(UU, FU, AU);
              BU(UU, FU)
            }
          } catch (QU) {
            if (QU instanceof cU.j) throw QU;
            BU(UU, "network-request-failed", {
              message: String(QU)
            })
          }
        }
        async function vU(UU, XU, zU, cU) {
          let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const QU = await HU(UU, XU, zU, cU, yU);
          return "mfaPendingCredential" in QU && BU(UU, "multi-factor-auth-required", {
            _serverResponse: QU
          }), QU
        }

        function VU(UU, XU, zU, cU) {
          const yU = `${XU}${zU}?${cU}`;
          return UU.config.emulator ? SU(UU.config, yU) : `${UU.config.apiScheme}://${yU}`
        }
        class sU {
          constructor(UU) {
            this.auth = UU, this.timer = null, this.promise = new Promise(((UU, XU) => {
              this.timer = setTimeout((() => XU(ZU(this.auth, "network-request-failed"))), fU.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function nU(UU, XU, zU) {
          const cU = {
            appName: UU.name
          };
          zU.email && (cU.email = zU.email), zU.phoneNumber && (cU.phoneNumber = zU.phoneNumber);
          const yU = ZU(UU, XU, cU);
          return yU.customData._tokenResponse = zU, yU
        }

        function mU(UU) {
          if (UU) try {
            const XU = new Date(Number(UU));
            if (!isNaN(XU.getTime())) return XU.toUTCString()
          } catch (XU) {}
        }

        function lU(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, cU.R)(UU).getIdToken(XU)
        }
        async function xU(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const zU = (0, cU.R)(UU),
            yU = await zU.getIdToken(XU),
            QU = jU(yU);
          dU(QU && QU.exp && QU.auth_time && QU.iat, zU.auth, "internal-error");
          const AU = "object" === typeof QU.firebase ? QU.firebase : void 0,
            FU = null === AU || void 0 === AU ? void 0 : AU.sign_in_provider;
          return {
            claims: QU,
            token: yU,
            authTime: mU(JU(QU.auth_time)),
            issuedAtTime: mU(JU(QU.iat)),
            expirationTime: mU(JU(QU.exp)),
            signInProvider: FU || null,
            signInSecondFactor: (null === AU || void 0 === AU ? void 0 : AU.sign_in_second_factor) || null
          }
        }

        function JU(UU) {
          return 1e3 * Number(UU)
        }

        function jU(UU) {
          const [XU, zU, yU] = UU.split(".");
          if (void 0 === XU || void 0 === zU || void 0 === yU) return GU("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const UU = (0, cU.q)(zU);
            return UU ? JSON.parse(UU) : (GU("Failed to decode base64 JWT payload"), null)
          } catch (QU) {
            return GU("Caught error parsing JWT payload as JSON", null === QU || void 0 === QU ? void 0 : QU.toString()), null
          }
        }
        async function KU(UU, XU) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return XU;
          try {
            return await XU
          } catch (zU) {
            throw zU instanceof cU.j && function(UU) {
              let {
                code: XU
              } = UU;
              return "auth/user-disabled" === XU || "auth/user-token-expired" === XU
            }(zU) && UU.auth.currentUser === UU && await UU.auth.signOut(), zU
          }
        }
        class bU {
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
            var XU;
            if (UU) {
              const UU = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), UU
            } {
              this.errorBackoff = 3e4;
              const UU = (null !== (XU = this.user.stsTokenManager.expirationTime) && void 0 !== XU ? XU : 0) - Date.now() - 3e5;
              return Math.max(0, UU)
            }
          }
          schedule() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const XU = this.getInterval(UU);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), XU)
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
        class TU {
          constructor(UU, XU) {
            this.createdAt = UU, this.lastLoginAt = XU, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = mU(this.lastLoginAt), this.creationTime = mU(this.createdAt)
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
        async function hU(UU) {
          var XU;
          const zU = UU.auth,
            cU = await UU.getIdToken(),
            yU = await KU(UU, async function(UU, XU) {
              return HU(UU, "POST", "/v1/accounts:lookup", XU)
            }(zU, {
              idToken: cU
            }));
          dU(null === yU || void 0 === yU ? void 0 : yU.users.length, zU, "internal-error");
          const AU = yU.users[0];
          UU._notifyReloadListener(AU);
          const FU = (null === (XU = AU.providerUserInfo) || void 0 === XU ? void 0 : XU.length) ? AU.providerUserInfo.map((UU => {
            var {
              providerId: XU
            } = UU, zU = QU(UU, ["providerId"]);
            return {
              providerId: XU,
              uid: zU.rawId || "",
              displayName: zU.displayName || null,
              email: zU.email || null,
              phoneNumber: zU.phoneNumber || null,
              photoURL: zU.photoUrl || null
            }
          })) : [];
          const oU = (DU = UU.providerData, EU = FU, [...DU.filter((UU => !EU.some((XU => XU.providerId === UU.providerId)))), ...EU]);
          var DU, EU;
          const YU = UU.isAnonymous,
            NU = !(UU.email && AU.passwordHash) && !(null === oU || void 0 === oU ? void 0 : oU.length),
            IU = !!YU && NU,
            pU = {
              uid: AU.localId,
              displayName: AU.displayName || null,
              photoURL: AU.photoUrl || null,
              email: AU.email || null,
              emailVerified: AU.emailVerified || !1,
              phoneNumber: AU.phoneNumber || null,
              tenantId: AU.tenantId || null,
              providerData: oU,
              metadata: new TU(AU.createdAt, AU.lastLoginAt),
              isAnonymous: IU
            };
          Object.assign(UU, pU)
        }
        async function UX(UU) {
          const XU = (0, cU.R)(UU);
          await hU(XU), await XU.auth._persistUserIfCurrent(XU), XU.auth._notifyListenersIfCurrent(XU)
        }
        class XX {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(UU) {
            dU(UU.idToken, "internal-error"), dU("undefined" !== typeof UU.idToken, "internal-error"), dU("undefined" !== typeof UU.refreshToken, "internal-error");
            const XU = "expiresIn" in UU && "undefined" !== typeof UU.expiresIn ? Number(UU.expiresIn) : function(UU) {
              const XU = jU(UU);
              return dU(XU, "internal-error"), dU("undefined" !== typeof XU.exp, "internal-error"), dU("undefined" !== typeof XU.iat, "internal-error"), Number(XU.exp) - Number(XU.iat)
            }(UU.idToken);
            this.updateTokensAndExpiration(UU.idToken, UU.refreshToken, XU)
          }
          async getToken(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return dU(!this.accessToken || this.refreshToken, UU, "user-token-expired"), XU || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(UU, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(UU, XU) {
            const {
              accessToken: zU,
              refreshToken: yU,
              expiresIn: QU
            } = await async function(UU, XU) {
              const zU = await MU(UU, {}, (async () => {
                const zU = (0, cU.pb)({
                    grant_type: "refresh_token",
                    refresh_token: XU
                  }).slice(1),
                  {
                    tokenApiHost: yU,
                    apiKey: QU
                  } = UU.config,
                  AU = VU(UU, yU, "/v1/token", `key=${QU}`),
                  FU = await UU._getAdditionalHeaders();
                return FU["Content-Type"] = "application/x-www-form-urlencoded", rU.fetch()(AU, {
                  method: "POST",
                  headers: FU,
                  body: zU
                })
              }));
              return {
                accessToken: zU.access_token,
                expiresIn: zU.expires_in,
                refreshToken: zU.refresh_token
              }
            }(UU, XU);
            this.updateTokensAndExpiration(zU, yU, Number(QU))
          }
          updateTokensAndExpiration(UU, XU, zU) {
            this.refreshToken = XU || null, this.accessToken = UU || null, this.expirationTime = Date.now() + 1e3 * zU
          }
          static fromJSON(UU, XU) {
            const {
              refreshToken: zU,
              accessToken: cU,
              expirationTime: yU
            } = XU, QU = new XX;
            return zU && (dU("string" === typeof zU, "internal-error", {
              appName: UU
            }), QU.refreshToken = zU), cU && (dU("string" === typeof cU, "internal-error", {
              appName: UU
            }), QU.accessToken = cU), yU && (dU("number" === typeof yU, "internal-error", {
              appName: UU
            }), QU.expirationTime = yU), QU
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
            return Object.assign(new XX, this.toJSON())
          }
          _performRefresh() {
            return LU("not implemented")
          }
        }

        function zX(UU, XU) {
          dU("string" === typeof UU || "undefined" === typeof UU, "internal-error", {
            appName: XU
          })
        }
        class cX {
          constructor(UU) {
            var {
              uid: XU,
              auth: zU,
              stsTokenManager: cU
            } = UU, yU = QU(UU, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new bU(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = XU, this.auth = zU, this.stsTokenManager = cU, this.accessToken = cU.accessToken, this.displayName = yU.displayName || null, this.email = yU.email || null, this.emailVerified = yU.emailVerified || !1, this.phoneNumber = yU.phoneNumber || null, this.photoURL = yU.photoURL || null, this.isAnonymous = yU.isAnonymous || !1, this.tenantId = yU.tenantId || null, this.providerData = yU.providerData ? [...yU.providerData] : [], this.metadata = new TU(yU.createdAt || void 0, yU.lastLoginAt || void 0)
          }
          async getIdToken(UU) {
            const XU = await KU(this, this.stsTokenManager.getToken(this.auth, UU));
            return dU(XU, this.auth, "internal-error"), this.accessToken !== XU && (this.accessToken = XU, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), XU
          }
          getIdTokenResult(UU) {
            return xU(this, UU)
          }
          reload() {
            return UX(this)
          }
          _assign(UU) {
            this !== UU && (dU(this.uid === UU.uid, this.auth, "internal-error"), this.displayName = UU.displayName, this.photoURL = UU.photoURL, this.email = UU.email, this.emailVerified = UU.emailVerified, this.phoneNumber = UU.phoneNumber, this.isAnonymous = UU.isAnonymous, this.tenantId = UU.tenantId, this.providerData = UU.providerData.map((UU => Object.assign({}, UU))), this.metadata._copy(UU.metadata), this.stsTokenManager._assign(UU.stsTokenManager))
          }
          _clone(UU) {
            const XU = new cX(Object.assign(Object.assign({}, this), {
              auth: UU,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return XU.metadata._copy(this.metadata), XU
          }
          _onReload(UU) {
            dU(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = UU, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
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
            let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              zU = !1;
            UU.idToken && UU.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(UU), zU = !0), XU && await hU(this), await this.auth._persistUserIfCurrent(this), zU && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const UU = await this.getIdToken();
            return await KU(this, async function(UU, XU) {
              return HU(UU, "POST", "/v1/accounts:delete", XU)
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
          static _fromJSON(UU, XU) {
            var zU, cU, yU, QU, AU, FU, oU, DU;
            const EU = null !== (zU = XU.displayName) && void 0 !== zU ? zU : void 0,
              YU = null !== (cU = XU.email) && void 0 !== cU ? cU : void 0,
              NU = null !== (yU = XU.phoneNumber) && void 0 !== yU ? yU : void 0,
              IU = null !== (QU = XU.photoURL) && void 0 !== QU ? QU : void 0,
              pU = null !== (AU = XU.tenantId) && void 0 !== AU ? AU : void 0,
              aU = null !== (FU = XU._redirectEventId) && void 0 !== FU ? FU : void 0,
              tU = null !== (oU = XU.createdAt) && void 0 !== oU ? oU : void 0,
              gU = null !== (DU = XU.lastLoginAt) && void 0 !== DU ? DU : void 0,
              {
                uid: kU,
                emailVerified: GU,
                isAnonymous: BU,
                providerData: ZU,
                stsTokenManager: RU
              } = XU;
            dU(kU && RU, UU, "internal-error");
            const PU = XX.fromJSON(this.name, RU);
            dU("string" === typeof kU, UU, "internal-error"), zX(EU, UU.name), zX(YU, UU.name), dU("boolean" === typeof GU, UU, "internal-error"), dU("boolean" === typeof BU, UU, "internal-error"), zX(NU, UU.name), zX(IU, UU.name), zX(pU, UU.name), zX(aU, UU.name), zX(tU, UU.name), zX(gU, UU.name);
            const WU = new cX({
              uid: kU,
              auth: UU,
              email: YU,
              emailVerified: GU,
              displayName: EU,
              isAnonymous: BU,
              photoURL: IU,
              phoneNumber: NU,
              tenantId: pU,
              stsTokenManager: PU,
              createdAt: tU,
              lastLoginAt: gU
            });
            return ZU && Array.isArray(ZU) && (WU.providerData = ZU.map((UU => Object.assign({}, UU)))), aU && (WU._redirectEventId = aU), WU
          }
          static async _fromIdTokenResponse(UU, XU) {
            let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const cU = new XX;
            cU.updateFromServerResponse(XU);
            const yU = new cX({
              uid: XU.localId,
              auth: UU,
              stsTokenManager: cU,
              isAnonymous: zU
            });
            return await hU(yU), yU
          }
        }
        const yX = new Map;

        function QX(UU) {
          eU(UU instanceof Function, "Expected a class definition");
          let XU = yX.get(UU);
          return XU ? (eU(XU instanceof UU, "Instance stored in cache mismatched with class"), XU) : (XU = new UU, yX.set(UU, XU), XU)
        }
        class AX {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(UU, XU) {
            this.storage[UU] = XU
          }
          async _get(UU) {
            const XU = this.storage[UU];
            return void 0 === XU ? null : XU
          }
          async _remove(UU) {
            delete this.storage[UU]
          }
          _addListener(UU, XU) {}
          _removeListener(UU, XU) {}
        }
        AX.type = "NONE";
        const FX = AX;

        function oX(UU, XU, zU) {
          return `firebase:${UU}:${XU}:${zU}`
        }
        class DX {
          constructor(UU, XU, zU) {
            this.persistence = UU, this.auth = XU, this.userKey = zU;
            const {
              config: cU,
              name: yU
            } = this.auth;
            this.fullUserKey = oX(this.userKey, cU.apiKey, yU), this.fullPersistenceKey = oX("persistence", cU.apiKey, yU), this.boundEventHandler = XU._onStorageEvent.bind(XU), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(UU) {
            return this.persistence._set(this.fullUserKey, UU.toJSON())
          }
          async getCurrentUser() {
            const UU = await this.persistence._get(this.fullUserKey);
            return UU ? cX._fromJSON(this.auth, UU) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(UU) {
            if (this.persistence === UU) return;
            const XU = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = UU, XU ? this.setCurrentUser(XU) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(UU, XU) {
            let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!XU.length) return new DX(QX(FX), UU, zU);
            const cU = (await Promise.all(XU.map((async UU => {
              if (await UU._isAvailable()) return UU
            })))).filter((UU => UU));
            let yU = cU[0] || QX(FX);
            const QU = oX(zU, UU.config.apiKey, UU.name);
            let AU = null;
            for (const DU of XU) try {
              const XU = await DU._get(QU);
              if (XU) {
                const zU = cX._fromJSON(UU, XU);
                DU !== yU && (AU = zU), yU = DU;
                break
              }
            } catch (oU) {}
            const FU = cU.filter((UU => UU._shouldAllowMigration));
            return yU._shouldAllowMigration && FU.length ? (yU = FU[0], AU && await yU._set(QU, AU.toJSON()), await Promise.all(XU.map((async UU => {
              if (UU !== yU) try {
                await UU._remove(QU)
              } catch (oU) {}
            }))), new DX(yU, UU, zU)) : new DX(yU, UU, zU)
          }
        }

        function EX(UU) {
          const XU = UU.toLowerCase();
          if (XU.includes("opera/") || XU.includes("opr/") || XU.includes("opios/")) return "Opera";
          if (pX(XU)) return "IEMobile";
          if (XU.includes("msie") || XU.includes("trident/")) return "IE";
          if (XU.includes("edge/")) return "Edge";
          if (YX(XU)) return "Firefox";
          if (XU.includes("silk/")) return "Silk";
          if (tX(XU)) return "Blackberry";
          if (gX(XU)) return "Webos";
          if (NX(XU)) return "Safari";
          if ((XU.includes("chrome/") || IX(XU)) && !XU.includes("edge/")) return "Chrome";
          if (aX(XU)) return "Android";
          {
            const XU = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              zU = UU.match(XU);
            if (2 === (null === zU || void 0 === zU ? void 0 : zU.length)) return zU[1]
          }
          return "Other"
        }

        function YX() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, cU.V)();
          return /firefox\//i.test(UU)
        }

        function NX() {
          const UU = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, cU.V)()).toLowerCase();
          return UU.includes("safari/") && !UU.includes("chrome/") && !UU.includes("crios/") && !UU.includes("android")
        }

        function IX() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, cU.V)();
          return /crios\//i.test(UU)
        }

        function pX() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, cU.V)();
          return /iemobile/i.test(UU)
        }

        function aX() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, cU.V)();
          return /android/i.test(UU)
        }

        function tX() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, cU.V)();
          return /blackberry/i.test(UU)
        }

        function gX() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, cU.V)();
          return /webos/i.test(UU)
        }

        function kX() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, cU.V)();
          return /iphone|ipad|ipod/i.test(UU) || /macintosh/i.test(UU) && /mobile/i.test(UU)
        }

        function GX() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, cU.V)();
          return kX(UU) || aX(UU) || gX(UU) || tX(UU) || /windows phone/i.test(UU) || pX(UU)
        }

        function BX(UU) {
          let XU, zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (UU) {
            case "Browser":
              XU = EX((0, cU.V)());
              break;
            case "Worker":
              XU = `${EX((0,cU.V)())}-${UU}`;
              break;
            default:
              XU = UU
          }
          const QU = zU.length ? zU.join(",") : "FirebaseCore-web";
          return `${XU}/JsCore/${yU.e}/${QU}`
        }
        async function ZX(UU, XU) {
          return HU(UU, "GET", "/v2/recaptchaConfig", iU(UU, XU))
        }

        function RX(UU) {
          return void 0 !== UU && void 0 !== UU.getResponse
        }

        function PX(UU) {
          return void 0 !== UU && void 0 !== UU.enterprise
        }
        class WX {
          constructor(UU) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === UU.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = UU.recaptchaKey.split("/")[3], this.emailPasswordEnabled = UU.recaptchaEnforcementState.some((UU => "EMAIL_PASSWORD_PROVIDER" === UU.provider && "OFF" !== UU.enforcementState))
          }
        }

        function dX(UU) {
          return new Promise(((XU, zU) => {
            const cU = document.createElement("script");
            cU.setAttribute("src", UU), cU.onload = XU, cU.onerror = UU => {
                const XU = ZU("internal-error");
                XU.customData = UU, zU(XU)
              }, cU.type = "text/javascript", cU.charset = "UTF-8",
              function() {
                var UU, XU;
                return null !== (XU = null === (UU = document.getElementsByTagName("head")) || void 0 === UU ? void 0 : UU[0]) && void 0 !== XU ? XU : document
              }().appendChild(cU)
          }))
        }

        function LX(UU) {
          return `__${UU}${Math.floor(1e6*Math.random())}`
        }
        class eX {
          constructor(UU) {
            this.type = "recaptcha-enterprise", this.auth = OX(UU)
          }
          async verify() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function zU(XU, zU, cU) {
              const yU = window.grecaptcha;
              PX(yU) ? yU.enterprise.ready((() => {
                yU.enterprise.execute(XU, {
                  action: UU
                }).then((UU => {
                  zU(UU)
                })).catch((() => {
                  zU("NO_RECAPTCHA")
                }))
              })) : cU(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((UU, cU) => {
              (async function(UU) {
                if (!XU) {
                  if (null == UU.tenantId && null != UU._agentRecaptchaConfig) return UU._agentRecaptchaConfig.siteKey;
                  if (null != UU.tenantId && void 0 !== UU._tenantRecaptchaConfigs[UU.tenantId]) return UU._tenantRecaptchaConfigs[UU.tenantId].siteKey
                }
                return new Promise((async (XU, zU) => {
                  ZX(UU, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((cU => {
                    if (void 0 !== cU.recaptchaKey) {
                      const zU = new WX(cU);
                      return null == UU.tenantId ? UU._agentRecaptchaConfig = zU : UU._tenantRecaptchaConfigs[UU.tenantId] = zU, XU(zU.siteKey)
                    }
                    zU(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((UU => {
                    zU(UU)
                  }))
                }))
              })(this.auth).then((yU => {
                if (!XU && PX(window.grecaptcha)) zU(yU, UU, cU);
                else {
                  if ("undefined" === typeof window) return void cU(new Error("RecaptchaVerifier is only supported in browser"));
                  dX("https://www.google.com/recaptcha/enterprise.js?render=" + yU).then((() => {
                    zU(yU, UU, cU)
                  })).catch((UU => {
                    cU(UU)
                  }))
                }
              })).catch((UU => {
                cU(UU)
              }))
            }))
          }
        }
        async function CX(UU, XU, zU) {
          let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const yU = new eX(UU);
          let QU;
          try {
            QU = await yU.verify(zU)
          } catch (FU) {
            QU = await yU.verify(zU, !0)
          }
          const AU = Object.assign({}, XU);
          return cU ? Object.assign(AU, {
            captchaResp: QU
          }) : Object.assign(AU, {
            captchaResponse: QU
          }), Object.assign(AU, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(AU, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), AU
        }
        class wX {
          constructor(UU) {
            this.auth = UU, this.queue = []
          }
          pushCallback(UU, XU) {
            const zU = XU => new Promise(((zU, cU) => {
              try {
                zU(UU(XU))
              } catch (yU) {
                cU(yU)
              }
            }));
            zU.onAbort = XU, this.queue.push(zU);
            const cU = this.queue.length - 1;
            return () => {
              this.queue[cU] = () => Promise.resolve()
            }
          }
          async runMiddleware(UU) {
            if (this.auth.currentUser === UU) return;
            const XU = [];
            try {
              for (const zU of this.queue) await zU(UU), zU.onAbort && XU.push(zU.onAbort)
            } catch (zU) {
              XU.reverse();
              for (const UU of XU) try {
                UU()
              } catch (cU) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === zU || void 0 === zU ? void 0 : zU.message
              })
            }
          }
        }
        class qX {
          constructor(UU, XU, zU, cU) {
            this.app = UU, this.heartbeatServiceProvider = XU, this.appCheckServiceProvider = zU, this.config = cU, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new SX(this), this.idTokenSubscription = new SX(this), this.beforeStateQueue = new wX(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = tU, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = UU.name, this.clientVersion = cU.sdkClientVersion
          }
          _initializeWithPersistence(UU, XU) {
            return XU && (this._popupRedirectResolver = QX(XU)), this._initializationPromise = this.queue((async () => {
              var zU, cU;
              if (!this._deleted && (this.persistenceManager = await DX.create(this, UU), !this._deleted)) {
                if (null === (zU = this._popupRedirectResolver) || void 0 === zU ? void 0 : zU._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (yU) {}
                await this.initializeCurrentUser(XU), this.lastNotifiedUid = (null === (cU = this.currentUser) || void 0 === cU ? void 0 : cU.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const UU = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || UU ? this.currentUser && UU && this.currentUser.uid === UU.uid ? (this._currentUser._assign(UU), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(UU, !0) : void 0
          }
          async initializeCurrentUser(UU) {
            var XU;
            const zU = await this.assertedPersistence.getCurrentUser();
            let cU = zU,
              yU = !1;
            if (UU && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const zU = null === (XU = this.redirectUser) || void 0 === XU ? void 0 : XU._redirectEventId,
                QU = null === cU || void 0 === cU ? void 0 : cU._redirectEventId,
                AU = await this.tryRedirectSignIn(UU);
              zU && zU !== QU || !(null === AU || void 0 === AU ? void 0 : AU.user) || (cU = AU.user, yU = !0)
            }
            if (!cU) return this.directlySetCurrentUser(null);
            if (!cU._redirectEventId) {
              if (yU) try {
                await this.beforeStateQueue.runMiddleware(cU)
              } catch (QU) {
                cU = zU, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(QU)))
              }
              return cU ? this.reloadAndSetCurrentUserOrClear(cU) : this.directlySetCurrentUser(null)
            }
            return dU(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === cU._redirectEventId ? this.directlySetCurrentUser(cU) : this.reloadAndSetCurrentUserOrClear(cU)
          }
          async tryRedirectSignIn(UU) {
            let XU = null;
            try {
              XU = await this._popupRedirectResolver._completeRedirectFn(this, UU, !0)
            } catch (zU) {
              await this._setRedirectUser(null)
            }
            return XU
          }
          async reloadAndSetCurrentUserOrClear(UU) {
            try {
              await hU(UU)
            } catch (XU) {
              if ("auth/network-request-failed" !== (null === XU || void 0 === XU ? void 0 : XU.code)) return this.directlySetCurrentUser(null)
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
            const XU = UU ? (0, cU.R)(UU) : null;
            return XU && dU(XU.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(XU && XU._clone(this))
          }
          async _updateCurrentUser(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return UU && dU(this.tenantId === UU.tenantId, this, "tenant-id-mismatch"), XU || await this.beforeStateQueue.runMiddleware(UU), this.queue((async () => {
              await this.directlySetCurrentUser(UU), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(UU) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(QX(UU))
            }))
          }
          async initializeRecaptchaConfig() {
            const UU = await ZX(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              XU = new WX(UU);
            if (null == this.tenantId ? this._agentRecaptchaConfig = XU : this._tenantRecaptchaConfigs[this.tenantId] = XU, XU.emailPasswordEnabled) {
              new eX(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(UU) {
            this._errorFactory = new cU.f("auth", "Firebase", UU())
          }
          onAuthStateChanged(UU, XU, zU) {
            return this.registerStateListener(this.authStateSubscription, UU, XU, zU)
          }
          beforeAuthStateChanged(UU, XU) {
            return this.beforeStateQueue.pushCallback(UU, XU)
          }
          onIdTokenChanged(UU, XU, zU) {
            return this.registerStateListener(this.idTokenSubscription, UU, XU, zU)
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
          async _setRedirectUser(UU, XU) {
            const zU = await this.getOrInitRedirectPersistenceManager(XU);
            return null === UU ? zU.removeCurrentUser() : zU.setCurrentUser(UU)
          }
          async getOrInitRedirectPersistenceManager(UU) {
            if (!this.redirectPersistenceManager) {
              const XU = UU && QX(UU) || this._popupRedirectResolver;
              dU(XU, this, "argument-error"), this.redirectPersistenceManager = await DX.create(this, [QX(XU._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(UU) {
            var XU, zU;
            return this._isInitialized && await this.queue((async () => {})), (null === (XU = this._currentUser) || void 0 === XU ? void 0 : XU._redirectEventId) === UU ? this._currentUser : (null === (zU = this.redirectUser) || void 0 === zU ? void 0 : zU._redirectEventId) === UU ? this.redirectUser : null
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
            var UU, XU;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const zU = null !== (XU = null === (UU = this.currentUser) || void 0 === UU ? void 0 : UU.uid) && void 0 !== XU ? XU : null;
            this.lastNotifiedUid !== zU && (this.lastNotifiedUid = zU, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(UU, XU, zU, cU) {
            if (this._deleted) return () => {};
            const yU = "function" === typeof XU ? XU : XU.next.bind(XU),
              QU = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return dU(QU, this, "internal-error"), QU.then((() => yU(this.currentUser))), "function" === typeof XU ? UU.addObserver(XU, zU, cU) : UU.addObserver(XU)
          }
          async directlySetCurrentUser(UU) {
            this.currentUser && this.currentUser !== UU && this._currentUser._stopProactiveRefresh(), UU && this.isProactiveRefreshEnabled && UU._startProactiveRefresh(), this.currentUser = UU, UU ? await this.assertedPersistence.setCurrentUser(UU) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(UU) {
            return this.operations = this.operations.then(UU, UU), this.operations
          }
          get assertedPersistence() {
            return dU(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(UU) {
            UU && !this.frameworks.includes(UU) && (this.frameworks.push(UU), this.frameworks.sort(), this.clientVersion = BX(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var UU;
            const XU = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (XU["X-Firebase-gmpid"] = this.app.options.appId);
            const zU = await (null === (UU = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === UU ? void 0 : UU.getHeartbeatsHeader());
            zU && (XU["X-Firebase-Client"] = zU);
            const cU = await this._getAppCheckToken();
            return cU && (XU["X-Firebase-AppCheck"] = cU), XU
          }
          async _getAppCheckToken() {
            var UU;
            const XU = await (null === (UU = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === UU ? void 0 : UU.getToken());
            return (null === XU || void 0 === XU ? void 0 : XU.error) && function(UU) {
              if (kU.logLevel <= AU.c.WARN) {
                for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
                kU.warn(`Auth (${yU.e}): ${UU}`, ...zU)
              }
            }(`Error while retrieving App Check token: ${XU.error}`), null === XU || void 0 === XU ? void 0 : XU.token
          }
        }

        function OX(UU) {
          return (0, cU.R)(UU)
        }
        class SX {
          constructor(UU) {
            this.auth = UU, this.observer = null, this.addObserver = (0, cU.y)((UU => this.observer = UU))
          }
          get next() {
            return dU(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function rX(UU, XU) {
          const zU = (0, yU.s)(UU, "auth");
          if (zU.isInitialized()) {
            const UU = zU.getImmediate(),
              yU = zU.getOptions();
            if ((0, cU.z)(yU, null !== XU && void 0 !== XU ? XU : {})) return UU;
            BU(UU, "already-initialized")
          }
          return zU.initialize({
            options: XU
          })
        }

        function uX(UU, XU, zU) {
          const cU = OX(UU);
          dU(cU._canInitEmulator, cU, "emulator-config-failed"), dU(/^https?:\/\//.test(XU), cU, "invalid-emulator-scheme");
          const yU = !!(null === zU || void 0 === zU ? void 0 : zU.disableWarnings),
            QU = fX(XU),
            {
              host: AU,
              port: FU
            } = function(UU) {
              const XU = fX(UU),
                zU = /(\/\/)?([^?#/]+)/.exec(UU.substr(XU.length));
              if (!zU) return {
                host: "",
                port: null
              };
              const cU = zU[2].split("@").pop() || "",
                yU = /^(\[[^\]]+\])(:|$)/.exec(cU);
              if (yU) {
                const UU = yU[1];
                return {
                  host: UU,
                  port: iX(cU.substr(UU.length + 1))
                }
              } {
                const [UU, XU] = cU.split(":");
                return {
                  host: UU,
                  port: iX(XU)
                }
              }
            }(XU),
            oU = null === FU ? "" : `:${FU}`;
          cU.config.emulator = {
            url: `${QU}//${AU}${oU}/`
          }, cU.settings.appVerificationDisabledForTesting = !0, cU.emulatorConfig = Object.freeze({
            host: AU,
            port: FU,
            protocol: QU.replace(":", ""),
            options: Object.freeze({
              disableWarnings: yU
            })
          }), yU || function() {
            function UU() {
              const UU = document.createElement("p"),
                XU = UU.style;
              UU.innerText = "Running in emulator mode. Do not use with production credentials.", XU.position = "fixed", XU.width = "100%", XU.backgroundColor = "#ffffff", XU.border = ".1em solid #000000", XU.color = "#b50000", XU.bottom = "0px", XU.left = "0px", XU.margin = "0px", XU.zIndex = "10000", XU.textAlign = "center", UU.classList.add("firebase-emulator-warning"), document.body.appendChild(UU)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", UU) : UU())
          }()
        }

        function fX(UU) {
          const XU = UU.indexOf(":");
          return XU < 0 ? "" : UU.substr(0, XU + 1)
        }

        function iX(UU) {
          if (!UU) return null;
          const XU = Number(UU);
          return isNaN(XU) ? null : XU
        }
        class HX {
          constructor(UU, XU) {
            this.providerId = UU, this.signInMethod = XU
          }
          toJSON() {
            return LU("not implemented")
          }
          _getIdTokenResponse(UU) {
            return LU("not implemented")
          }
          _linkToIdToken(UU, XU) {
            return LU("not implemented")
          }
          _getReauthenticationResolver(UU) {
            return LU("not implemented")
          }
        }
        async function MX(UU, XU) {
          return HU(UU, "POST", "/v1/accounts:resetPassword", iU(UU, XU))
        }
        async function vX(UU, XU) {
          return HU(UU, "POST", "/v1/accounts:update", XU)
        }
        async function VX(UU, XU) {
          return vU(UU, "POST", "/v1/accounts:signInWithPassword", iU(UU, XU))
        }
        async function sX(UU, XU) {
          return HU(UU, "POST", "/v1/accounts:sendOobCode", iU(UU, XU))
        }
        async function nX(UU, XU) {
          return sX(UU, XU)
        }
        async function mX(UU, XU) {
          return sX(UU, XU)
        }
        class lX extends HX {
          constructor(UU, XU, zU) {
            let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", zU), this._email = UU, this._password = XU, this._tenantId = cU
          }
          static _fromEmailAndPassword(UU, XU) {
            return new lX(UU, XU, "password")
          }
          static _fromEmailAndCode(UU, XU) {
            return new lX(UU, XU, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
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
            const XU = "string" === typeof UU ? JSON.parse(UU) : UU;
            if ((null === XU || void 0 === XU ? void 0 : XU.email) && (null === XU || void 0 === XU ? void 0 : XU.password)) {
              if ("password" === XU.signInMethod) return this._fromEmailAndPassword(XU.email, XU.password);
              if ("emailLink" === XU.signInMethod) return this._fromEmailAndCode(XU.email, XU.password, XU.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(UU) {
            var XU;
            switch (this.signInMethod) {
              case "password":
                const zU = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (XU = UU._getRecaptchaConfig()) || void 0 === XU ? void 0 : XU.emailPasswordEnabled) {
                  const XU = await CX(UU, zU, "signInWithPassword");
                  return VX(UU, XU)
                }
                return VX(UU, zU).catch((async XU => {
                  if ("auth/missing-recaptcha-token" === XU.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const XU = await CX(UU, zU, "signInWithPassword");
                    return VX(UU, XU)
                  }
                  return Promise.reject(XU)
                }));
              case "emailLink":
                return async function(UU, XU) {
                  return vU(UU, "POST", "/v1/accounts:signInWithEmailLink", iU(UU, XU))
                }(UU, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                BU(UU, "internal-error")
            }
          }
          async _linkToIdToken(UU, XU) {
            switch (this.signInMethod) {
              case "password":
                return vX(UU, {
                  idToken: XU,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(UU, XU) {
                  return vU(UU, "POST", "/v1/accounts:signInWithEmailLink", iU(UU, XU))
                }(UU, {
                  idToken: XU,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                BU(UU, "internal-error")
            }
          }
          _getReauthenticationResolver(UU) {
            return this._getIdTokenResponse(UU)
          }
        }
        async function xX(UU, XU) {
          return vU(UU, "POST", "/v1/accounts:signInWithIdp", iU(UU, XU))
        }
        class JX extends HX {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(UU) {
            const XU = new JX(UU.providerId, UU.signInMethod);
            return UU.idToken || UU.accessToken ? (UU.idToken && (XU.idToken = UU.idToken), UU.accessToken && (XU.accessToken = UU.accessToken), UU.nonce && !UU.pendingToken && (XU.nonce = UU.nonce), UU.pendingToken && (XU.pendingToken = UU.pendingToken)) : UU.oauthToken && UU.oauthTokenSecret ? (XU.accessToken = UU.oauthToken, XU.secret = UU.oauthTokenSecret) : BU("argument-error"), XU
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
            const XU = "string" === typeof UU ? JSON.parse(UU) : UU,
              {
                providerId: zU,
                signInMethod: cU
              } = XU,
              yU = QU(XU, ["providerId", "signInMethod"]);
            if (!zU || !cU) return null;
            const AU = new JX(zU, cU);
            return AU.idToken = yU.idToken || void 0, AU.accessToken = yU.accessToken || void 0, AU.secret = yU.secret, AU.nonce = yU.nonce, AU.pendingToken = yU.pendingToken || null, AU
          }
          _getIdTokenResponse(UU) {
            return xX(UU, this.buildRequest())
          }
          _linkToIdToken(UU, XU) {
            const zU = this.buildRequest();
            return zU.idToken = XU, xX(UU, zU)
          }
          _getReauthenticationResolver(UU) {
            const XU = this.buildRequest();
            return XU.autoCreate = !1, xX(UU, XU)
          }
          buildRequest() {
            const UU = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) UU.pendingToken = this.pendingToken;
            else {
              const XU = {};
              this.idToken && (XU.id_token = this.idToken), this.accessToken && (XU.access_token = this.accessToken), this.secret && (XU.oauth_token_secret = this.secret), XU.providerId = this.providerId, this.nonce && !this.pendingToken && (XU.nonce = this.nonce), UU.postBody = (0, cU.pb)(XU)
            }
            return UU
          }
        }
        const jX = {
          USER_NOT_FOUND: "user-not-found"
        };
        class KX extends HX {
          constructor(UU) {
            super("phone", "phone"), this.params = UU
          }
          static _fromVerification(UU, XU) {
            return new KX({
              verificationId: UU,
              verificationCode: XU
            })
          }
          static _fromTokenResponse(UU, XU) {
            return new KX({
              phoneNumber: UU,
              temporaryProof: XU
            })
          }
          _getIdTokenResponse(UU) {
            return async function(UU, XU) {
              return vU(UU, "POST", "/v1/accounts:signInWithPhoneNumber", iU(UU, XU))
            }(UU, this._makeVerificationRequest())
          }
          _linkToIdToken(UU, XU) {
            return async function(UU, XU) {
              const zU = await vU(UU, "POST", "/v1/accounts:signInWithPhoneNumber", iU(UU, XU));
              if (zU.temporaryProof) throw nU(UU, "account-exists-with-different-credential", zU);
              return zU
            }(UU, Object.assign({
              idToken: XU
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(UU) {
            return async function(UU, XU) {
              return vU(UU, "POST", "/v1/accounts:signInWithPhoneNumber", iU(UU, Object.assign(Object.assign({}, XU), {
                operation: "REAUTH"
              })), jX)
            }(UU, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: UU,
              phoneNumber: XU,
              verificationId: zU,
              verificationCode: cU
            } = this.params;
            return UU && XU ? {
              temporaryProof: UU,
              phoneNumber: XU
            } : {
              sessionInfo: zU,
              code: cU
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
              verificationId: XU,
              verificationCode: zU,
              phoneNumber: cU,
              temporaryProof: yU
            } = UU;
            return zU || XU || cU || yU ? new KX({
              verificationId: XU,
              verificationCode: zU,
              phoneNumber: cU,
              temporaryProof: yU
            }) : null
          }
        }
        class bX {
          constructor(UU) {
            var XU, zU, yU, QU, AU, FU;
            const oU = (0, cU.nb)((0, cU.C)(UU)),
              DU = null !== (XU = oU.apiKey) && void 0 !== XU ? XU : null,
              EU = null !== (zU = oU.oobCode) && void 0 !== zU ? zU : null,
              YU = function(UU) {
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
              }(null !== (yU = oU.mode) && void 0 !== yU ? yU : null);
            dU(DU && EU && YU, "argument-error"), this.apiKey = DU, this.operation = YU, this.code = EU, this.continueUrl = null !== (QU = oU.continueUrl) && void 0 !== QU ? QU : null, this.languageCode = null !== (AU = oU.languageCode) && void 0 !== AU ? AU : null, this.tenantId = null !== (FU = oU.tenantId) && void 0 !== FU ? FU : null
          }
          static parseLink(UU) {
            const XU = function(UU) {
              const XU = (0, cU.nb)((0, cU.C)(UU)).link,
                zU = XU ? (0, cU.nb)((0, cU.C)(XU)).deep_link_id : null,
                yU = (0, cU.nb)((0, cU.C)(UU)).deep_link_id;
              return (yU ? (0, cU.nb)((0, cU.C)(yU)).link : null) || yU || zU || XU || UU
            }(UU);
            try {
              return new bX(XU)
            } catch (zU) {
              return null
            }
          }
        }

        function TX(UU) {
          return bX.parseLink(UU)
        }
        class hX {
          constructor() {
            this.providerId = hX.PROVIDER_ID
          }
          static credential(UU, XU) {
            return lX._fromEmailAndPassword(UU, XU)
          }
          static credentialWithLink(UU, XU) {
            const zU = bX.parseLink(XU);
            return dU(zU, "argument-error"), lX._fromEmailAndCode(UU, zU.code, zU.tenantId)
          }
        }
        hX.PROVIDER_ID = "password", hX.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", hX.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class Uz {
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
        class Xz extends Uz {
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
        class zz extends Xz {
          static credentialFromJSON(UU) {
            const XU = "string" === typeof UU ? JSON.parse(UU) : UU;
            return dU("providerId" in XU && "signInMethod" in XU, "argument-error"), JX._fromParams(XU)
          }
          credential(UU) {
            return this._credential(Object.assign(Object.assign({}, UU), {
              nonce: UU.rawNonce
            }))
          }
          _credential(UU) {
            return dU(UU.idToken || UU.accessToken, "argument-error"), JX._fromParams(Object.assign(Object.assign({}, UU), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(UU) {
            return zz.oauthCredentialFromTaggedObject(UU)
          }
          static credentialFromError(UU) {
            return zz.oauthCredentialFromTaggedObject(UU.customData || {})
          }
          static oauthCredentialFromTaggedObject(UU) {
            let {
              _tokenResponse: XU
            } = UU;
            if (!XU) return null;
            const {
              oauthIdToken: zU,
              oauthAccessToken: cU,
              oauthTokenSecret: yU,
              pendingToken: QU,
              nonce: AU,
              providerId: FU
            } = XU;
            if (!cU && !yU && !zU && !QU) return null;
            if (!FU) return null;
            try {
              return new zz(FU)._credential({
                idToken: zU,
                accessToken: cU,
                nonce: AU,
                pendingToken: QU
              })
            } catch (oU) {
              return null
            }
          }
        }
        class cz extends Xz {
          constructor() {
            super("facebook.com")
          }
          static credential(UU) {
            return JX._fromParams({
              providerId: cz.PROVIDER_ID,
              signInMethod: cz.FACEBOOK_SIGN_IN_METHOD,
              accessToken: UU
            })
          }
          static credentialFromResult(UU) {
            return cz.credentialFromTaggedObject(UU)
          }
          static credentialFromError(UU) {
            return cz.credentialFromTaggedObject(UU.customData || {})
          }
          static credentialFromTaggedObject(UU) {
            let {
              _tokenResponse: XU
            } = UU;
            if (!XU || !("oauthAccessToken" in XU)) return null;
            if (!XU.oauthAccessToken) return null;
            try {
              return cz.credential(XU.oauthAccessToken)
            } catch (zU) {
              return null
            }
          }
        }
        cz.FACEBOOK_SIGN_IN_METHOD = "facebook.com", cz.PROVIDER_ID = "facebook.com";
        class yz extends Xz {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(UU, XU) {
            return JX._fromParams({
              providerId: yz.PROVIDER_ID,
              signInMethod: yz.GOOGLE_SIGN_IN_METHOD,
              idToken: UU,
              accessToken: XU
            })
          }
          static credentialFromResult(UU) {
            return yz.credentialFromTaggedObject(UU)
          }
          static credentialFromError(UU) {
            return yz.credentialFromTaggedObject(UU.customData || {})
          }
          static credentialFromTaggedObject(UU) {
            let {
              _tokenResponse: XU
            } = UU;
            if (!XU) return null;
            const {
              oauthIdToken: zU,
              oauthAccessToken: cU
            } = XU;
            if (!zU && !cU) return null;
            try {
              return yz.credential(zU, cU)
            } catch (yU) {
              return null
            }
          }
        }
        yz.GOOGLE_SIGN_IN_METHOD = "google.com", yz.PROVIDER_ID = "google.com";
        class Qz extends Xz {
          constructor() {
            super("github.com")
          }
          static credential(UU) {
            return JX._fromParams({
              providerId: Qz.PROVIDER_ID,
              signInMethod: Qz.GITHUB_SIGN_IN_METHOD,
              accessToken: UU
            })
          }
          static credentialFromResult(UU) {
            return Qz.credentialFromTaggedObject(UU)
          }
          static credentialFromError(UU) {
            return Qz.credentialFromTaggedObject(UU.customData || {})
          }
          static credentialFromTaggedObject(UU) {
            let {
              _tokenResponse: XU
            } = UU;
            if (!XU || !("oauthAccessToken" in XU)) return null;
            if (!XU.oauthAccessToken) return null;
            try {
              return Qz.credential(XU.oauthAccessToken)
            } catch (zU) {
              return null
            }
          }
        }
        Qz.GITHUB_SIGN_IN_METHOD = "github.com", Qz.PROVIDER_ID = "github.com";
        class Az extends HX {
          constructor(UU, XU) {
            super(UU, UU), this.pendingToken = XU
          }
          _getIdTokenResponse(UU) {
            return xX(UU, this.buildRequest())
          }
          _linkToIdToken(UU, XU) {
            const zU = this.buildRequest();
            return zU.idToken = XU, xX(UU, zU)
          }
          _getReauthenticationResolver(UU) {
            const XU = this.buildRequest();
            return XU.autoCreate = !1, xX(UU, XU)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(UU) {
            const XU = "string" === typeof UU ? JSON.parse(UU) : UU,
              {
                providerId: zU,
                signInMethod: cU,
                pendingToken: yU
              } = XU;
            return zU && cU && yU && zU === cU ? new Az(zU, yU) : null
          }
          static _create(UU, XU) {
            return new Az(UU, XU)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class Fz extends Uz {
          constructor(UU) {
            dU(UU.startsWith("saml."), "argument-error"), super(UU)
          }
          static credentialFromResult(UU) {
            return Fz.samlCredentialFromTaggedObject(UU)
          }
          static credentialFromError(UU) {
            return Fz.samlCredentialFromTaggedObject(UU.customData || {})
          }
          static credentialFromJSON(UU) {
            const XU = Az.fromJSON(UU);
            return dU(XU, "argument-error"), XU
          }
          static samlCredentialFromTaggedObject(UU) {
            let {
              _tokenResponse: XU
            } = UU;
            if (!XU) return null;
            const {
              pendingToken: zU,
              providerId: cU
            } = XU;
            if (!zU || !cU) return null;
            try {
              return Az._create(cU, zU)
            } catch (yU) {
              return null
            }
          }
        }
        class oz extends Xz {
          constructor() {
            super("twitter.com")
          }
          static credential(UU, XU) {
            return JX._fromParams({
              providerId: oz.PROVIDER_ID,
              signInMethod: oz.TWITTER_SIGN_IN_METHOD,
              oauthToken: UU,
              oauthTokenSecret: XU
            })
          }
          static credentialFromResult(UU) {
            return oz.credentialFromTaggedObject(UU)
          }
          static credentialFromError(UU) {
            return oz.credentialFromTaggedObject(UU.customData || {})
          }
          static credentialFromTaggedObject(UU) {
            let {
              _tokenResponse: XU
            } = UU;
            if (!XU) return null;
            const {
              oauthAccessToken: zU,
              oauthTokenSecret: cU
            } = XU;
            if (!zU || !cU) return null;
            try {
              return oz.credential(zU, cU)
            } catch (yU) {
              return null
            }
          }
        }
        async function Dz(UU, XU) {
          return vU(UU, "POST", "/v1/accounts:signUp", iU(UU, XU))
        }
        oz.TWITTER_SIGN_IN_METHOD = "twitter.com", oz.PROVIDER_ID = "twitter.com";
        class Ez {
          constructor(UU) {
            this.user = UU.user, this.providerId = UU.providerId, this._tokenResponse = UU._tokenResponse, this.operationType = UU.operationType
          }
          static async _fromIdTokenResponse(UU, XU, zU) {
            let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const yU = await cX._fromIdTokenResponse(UU, zU, cU),
              QU = Yz(zU);
            return new Ez({
              user: yU,
              providerId: QU,
              _tokenResponse: zU,
              operationType: XU
            })
          }
          static async _forOperation(UU, XU, zU) {
            await UU._updateTokensIfNecessary(zU, !0);
            const cU = Yz(zU);
            return new Ez({
              user: UU,
              providerId: cU,
              _tokenResponse: zU,
              operationType: XU
            })
          }
        }

        function Yz(UU) {
          return UU.providerId ? UU.providerId : "phoneNumber" in UU ? "phone" : null
        }
        async function Nz(UU) {
          var XU;
          const zU = OX(UU);
          if (await zU._initializationPromise, null === (XU = zU.currentUser) || void 0 === XU ? void 0 : XU.isAnonymous) return new Ez({
            user: zU.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const cU = await Dz(zU, {
              returnSecureToken: !0
            }),
            yU = await Ez._fromIdTokenResponse(zU, "signIn", cU, !0);
          return await zU._updateCurrentUser(yU.user), yU
        }
        class Iz extends cU.j {
          constructor(UU, XU, zU, cU) {
            var yU;
            super(XU.code, XU.message), this.operationType = zU, this.user = cU, Object.setPrototypeOf(this, Iz.prototype), this.customData = {
              appName: UU.name,
              tenantId: null !== (yU = UU.tenantId) && void 0 !== yU ? yU : void 0,
              _serverResponse: XU.customData._serverResponse,
              operationType: zU
            }
          }
          static _fromErrorAndOperation(UU, XU, zU, cU) {
            return new Iz(UU, XU, zU, cU)
          }
        }

        function pz(UU, XU, zU, cU) {
          return ("reauthenticate" === XU ? zU._getReauthenticationResolver(UU) : zU._getIdTokenResponse(UU)).catch((zU => {
            if ("auth/multi-factor-auth-required" === zU.code) throw Iz._fromErrorAndOperation(UU, zU, XU, cU);
            throw zU
          }))
        }

        function az(UU) {
          return new Set(UU.map((UU => {
            let {
              providerId: XU
            } = UU;
            return XU
          })).filter((UU => !!UU)))
        }
        async function tz(UU, XU) {
          const zU = (0, cU.R)(UU);
          await kz(!0, zU, XU);
          const {
            providerUserInfo: yU
          } = await async function(UU, XU) {
            return HU(UU, "POST", "/v1/accounts:update", XU)
          }(zU.auth, {
            idToken: await zU.getIdToken(),
            deleteProvider: [XU]
          }), QU = az(yU || []);
          return zU.providerData = zU.providerData.filter((UU => QU.has(UU.providerId))), QU.has("phone") || (zU.phoneNumber = null), await zU.auth._persistUserIfCurrent(zU), zU
        }
        async function gz(UU, XU) {
          let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const cU = await KU(UU, XU._linkToIdToken(UU.auth, await UU.getIdToken()), zU);
          return Ez._forOperation(UU, "link", cU)
        }
        async function kz(UU, XU, zU) {
          await hU(XU);
          const cU = !1 === UU ? "provider-already-linked" : "no-such-provider";
          dU(az(XU.providerData).has(zU) === UU, XU.auth, cU)
        }
        async function Gz(UU, XU) {
          let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: cU
          } = UU, yU = "reauthenticate";
          try {
            const QU = await KU(UU, pz(cU, yU, XU, UU), zU);
            dU(QU.idToken, cU, "internal-error");
            const AU = jU(QU.idToken);
            dU(AU, cU, "internal-error");
            const {
              sub: FU
            } = AU;
            return dU(UU.uid === FU, cU, "user-mismatch"), Ez._forOperation(UU, yU, QU)
          } catch (QU) {
            throw "auth/user-not-found" === (null === QU || void 0 === QU ? void 0 : QU.code) && BU(cU, "user-mismatch"), QU
          }
        }
        async function Bz(UU, XU) {
          let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const cU = "signIn",
            yU = await pz(UU, cU, XU),
            QU = await Ez._fromIdTokenResponse(UU, cU, yU);
          return zU || await UU._updateCurrentUser(QU.user), QU
        }
        async function Zz(UU, XU) {
          return Bz(OX(UU), XU)
        }
        async function Rz(UU, XU) {
          const zU = (0, cU.R)(UU);
          return await kz(!1, zU, XU.providerId), gz(zU, XU)
        }
        async function Pz(UU, XU) {
          return Gz((0, cU.R)(UU), XU)
        }
        async function Wz(UU, XU) {
          const zU = OX(UU),
            cU = await async function(UU, XU) {
              return vU(UU, "POST", "/v1/accounts:signInWithCustomToken", iU(UU, XU))
            }(zU, {
              token: XU,
              returnSecureToken: !0
            }), yU = await Ez._fromIdTokenResponse(zU, "signIn", cU);
          return await zU._updateCurrentUser(yU.user), yU
        }
        class dz {
          constructor(UU, XU) {
            this.factorId = UU, this.uid = XU.mfaEnrollmentId, this.enrollmentTime = new Date(XU.enrolledAt).toUTCString(), this.displayName = XU.displayName
          }
          static _fromServerResponse(UU, XU) {
            return "phoneInfo" in XU ? Lz._fromServerResponse(UU, XU) : "totpInfo" in XU ? ez._fromServerResponse(UU, XU) : BU(UU, "internal-error")
          }
        }
        class Lz extends dz {
          constructor(UU) {
            super("phone", UU), this.phoneNumber = UU.phoneInfo
          }
          static _fromServerResponse(UU, XU) {
            return new Lz(XU)
          }
        }
        class ez extends dz {
          constructor(UU) {
            super("totp", UU)
          }
          static _fromServerResponse(UU, XU) {
            return new ez(XU)
          }
        }

        function Cz(UU, XU, zU) {
          var cU;
          dU((null === (cU = zU.url) || void 0 === cU ? void 0 : cU.length) > 0, UU, "invalid-continue-uri"), dU("undefined" === typeof zU.dynamicLinkDomain || zU.dynamicLinkDomain.length > 0, UU, "invalid-dynamic-link-domain"), XU.continueUrl = zU.url, XU.dynamicLinkDomain = zU.dynamicLinkDomain, XU.canHandleCodeInApp = zU.handleCodeInApp, zU.iOS && (dU(zU.iOS.bundleId.length > 0, UU, "missing-ios-bundle-id"), XU.iOSBundleId = zU.iOS.bundleId), zU.android && (dU(zU.android.packageName.length > 0, UU, "missing-android-pkg-name"), XU.androidInstallApp = zU.android.installApp, XU.androidMinimumVersionCode = zU.android.minimumVersion, XU.androidPackageName = zU.android.packageName)
        }
        async function wz(UU, XU, zU) {
          var cU;
          const yU = OX(UU),
            QU = {
              requestType: "PASSWORD_RESET",
              email: XU,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (cU = yU._getRecaptchaConfig()) || void 0 === cU ? void 0 : cU.emailPasswordEnabled) {
            const UU = await CX(yU, QU, "getOobCode", !0);
            zU && Cz(yU, UU, zU), await nX(yU, UU)
          } else zU && Cz(yU, QU, zU), await nX(yU, QU).catch((async UU => {
            if ("auth/missing-recaptcha-token" !== UU.code) return Promise.reject(UU);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const UU = await CX(yU, QU, "getOobCode", !0);
              zU && Cz(yU, UU, zU), await nX(yU, UU)
            }
          }))
        }
        async function qz(UU, XU, zU) {
          await MX((0, cU.R)(UU), {
            oobCode: XU,
            newPassword: zU
          })
        }
        async function Oz(UU, XU) {
          await async function(UU, XU) {
            return HU(UU, "POST", "/v1/accounts:update", iU(UU, XU))
          }((0, cU.R)(UU), {
            oobCode: XU
          })
        }
        async function Sz(UU, XU) {
          const zU = (0, cU.R)(UU),
            yU = await MX(zU, {
              oobCode: XU
            }),
            QU = yU.requestType;
          switch (dU(QU, zU, "internal-error"), QU) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              dU(yU.newEmail, zU, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              dU(yU.mfaInfo, zU, "internal-error");
            default:
              dU(yU.email, zU, "internal-error")
          }
          let AU = null;
          return yU.mfaInfo && (AU = dz._fromServerResponse(OX(zU), yU.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === yU.requestType ? yU.newEmail : yU.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === yU.requestType ? yU.email : yU.newEmail) || null,
              multiFactorInfo: AU
            },
            operation: QU
          }
        }
        async function rz(UU, XU) {
          const {
            data: zU
          } = await Sz((0, cU.R)(UU), XU);
          return zU.email
        }
        async function uz(UU, XU, zU) {
          var cU;
          const yU = OX(UU),
            QU = {
              returnSecureToken: !0,
              email: XU,
              password: zU,
              clientType: "CLIENT_TYPE_WEB"
            };
          let AU;
          if (null === (cU = yU._getRecaptchaConfig()) || void 0 === cU ? void 0 : cU.emailPasswordEnabled) {
            const UU = await CX(yU, QU, "signUpPassword");
            AU = Dz(yU, UU)
          } else AU = Dz(yU, QU).catch((async UU => {
            if ("auth/missing-recaptcha-token" === UU.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const UU = await CX(yU, QU, "signUpPassword");
              return Dz(yU, UU)
            }
            return Promise.reject(UU)
          }));
          const FU = await AU.catch((UU => Promise.reject(UU))),
            oU = await Ez._fromIdTokenResponse(yU, "signIn", FU);
          return await yU._updateCurrentUser(oU.user), oU
        }

        function fz(UU, XU, zU) {
          return Zz((0, cU.R)(UU), hX.credential(XU, zU))
        }
        async function iz(UU, XU, zU) {
          var cU;
          const yU = OX(UU),
            QU = {
              requestType: "EMAIL_SIGNIN",
              email: XU,
              clientType: "CLIENT_TYPE_WEB"
            };

          function AU(UU, XU) {
            dU(XU.handleCodeInApp, yU, "argument-error"), XU && Cz(yU, UU, XU)
          }
          if (null === (cU = yU._getRecaptchaConfig()) || void 0 === cU ? void 0 : cU.emailPasswordEnabled) {
            const UU = await CX(yU, QU, "getOobCode", !0);
            AU(UU, zU), await mX(yU, UU)
          } else AU(QU, zU), await mX(yU, QU).catch((async UU => {
            if ("auth/missing-recaptcha-token" !== UU.code) return Promise.reject(UU);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const UU = await CX(yU, QU, "getOobCode", !0);
              AU(UU, zU), await mX(yU, UU)
            }
          }))
        }

        function Hz(UU, XU) {
          const zU = bX.parseLink(XU);
          return "EMAIL_SIGNIN" === (null === zU || void 0 === zU ? void 0 : zU.operation)
        }
        async function Mz(UU, XU, zU) {
          const yU = (0, cU.R)(UU),
            QU = hX.credentialWithLink(XU, zU || CU());
          return dU(QU._tenantId === (yU.tenantId || null), yU, "tenant-id-mismatch"), Zz(yU, QU)
        }
        async function vz(UU, XU) {
          const zU = {
              identifier: XU,
              continueUri: wU() ? CU() : "http://localhost"
            },
            {
              signinMethods: yU
            } = await async function(UU, XU) {
              return HU(UU, "POST", "/v1/accounts:createAuthUri", iU(UU, XU))
            }((0, cU.R)(UU), zU);
          return yU || []
        }
        async function Vz(UU, XU) {
          const zU = (0, cU.R)(UU),
            yU = {
              requestType: "VERIFY_EMAIL",
              idToken: await UU.getIdToken()
            };
          XU && Cz(zU.auth, yU, XU);
          const {
            email: QU
          } = await async function(UU, XU) {
            return sX(UU, XU)
          }(zU.auth, yU);
          QU !== UU.email && await UU.reload()
        }
        async function sz(UU, XU, zU) {
          const yU = (0, cU.R)(UU),
            QU = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await UU.getIdToken(),
              newEmail: XU
            };
          zU && Cz(yU.auth, QU, zU);
          const {
            email: AU
          } = await async function(UU, XU) {
            return sX(UU, XU)
          }(yU.auth, QU);
          AU !== UU.email && await UU.reload()
        }
        async function nz(UU, XU) {
          let {
            displayName: zU,
            photoURL: yU
          } = XU;
          if (void 0 === zU && void 0 === yU) return;
          const QU = (0, cU.R)(UU),
            AU = {
              idToken: await QU.getIdToken(),
              displayName: zU,
              photoUrl: yU,
              returnSecureToken: !0
            },
            FU = await KU(QU, async function(UU, XU) {
              return HU(UU, "POST", "/v1/accounts:update", XU)
            }(QU.auth, AU));
          QU.displayName = FU.displayName || null, QU.photoURL = FU.photoUrl || null;
          const oU = QU.providerData.find((UU => {
            let {
              providerId: XU
            } = UU;
            return "password" === XU
          }));
          oU && (oU.displayName = QU.displayName, oU.photoURL = QU.photoURL), await QU._updateTokensIfNecessary(FU)
        }

        function mz(UU, XU) {
          return xz((0, cU.R)(UU), XU, null)
        }

        function lz(UU, XU) {
          return xz((0, cU.R)(UU), null, XU)
        }
        async function xz(UU, XU, zU) {
          const {
            auth: cU
          } = UU, yU = {
            idToken: await UU.getIdToken(),
            returnSecureToken: !0
          };
          XU && (yU.email = XU), zU && (yU.password = zU);
          const QU = await KU(UU, vX(cU, yU));
          await UU._updateTokensIfNecessary(QU, !0)
        }
        class Jz {
          constructor(UU, XU) {
            let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = UU, this.providerId = XU, this.profile = zU
          }
        }
        class jz extends Jz {
          constructor(UU, XU, zU, cU) {
            super(UU, XU, zU), this.username = cU
          }
        }
        class Kz extends Jz {
          constructor(UU, XU) {
            super(UU, "facebook.com", XU)
          }
        }
        class bz extends jz {
          constructor(UU, XU) {
            super(UU, "github.com", XU, "string" === typeof(null === XU || void 0 === XU ? void 0 : XU.login) ? null === XU || void 0 === XU ? void 0 : XU.login : null)
          }
        }
        class Tz extends Jz {
          constructor(UU, XU) {
            super(UU, "google.com", XU)
          }
        }
        class hz extends jz {
          constructor(UU, XU, zU) {
            super(UU, "twitter.com", XU, zU)
          }
        }

        function Uc(UU) {
          const {
            user: XU,
            _tokenResponse: zU
          } = UU;
          return XU.isAnonymous && !zU ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(UU) {
            var XU, zU;
            if (!UU) return null;
            const {
              providerId: cU
            } = UU, yU = UU.rawUserInfo ? JSON.parse(UU.rawUserInfo) : {}, QU = UU.isNewUser || "identitytoolkit#SignupNewUserResponse" === UU.kind;
            if (!cU && (null === UU || void 0 === UU ? void 0 : UU.idToken)) {
              const cU = null === (zU = null === (XU = jU(UU.idToken)) || void 0 === XU ? void 0 : XU.firebase) || void 0 === zU ? void 0 : zU.sign_in_provider;
              if (cU) return new Jz(QU, "anonymous" !== cU && "custom" !== cU ? cU : null)
            }
            if (!cU) return null;
            switch (cU) {
              case "facebook.com":
                return new Kz(QU, yU);
              case "github.com":
                return new bz(QU, yU);
              case "google.com":
                return new Tz(QU, yU);
              case "twitter.com":
                return new hz(QU, yU, UU.screenName || null);
              case "custom":
              case "anonymous":
                return new Jz(QU, null);
              default:
                return new Jz(QU, cU, yU)
            }
          }(zU)
        }

        function Xc(UU, XU) {
          return (0, cU.R)(UU).setPersistence(XU)
        }

        function zc(UU) {
          return OX(UU).initializeRecaptchaConfig()
        }

        function cc(UU, XU, zU, yU) {
          return (0, cU.R)(UU).onIdTokenChanged(XU, zU, yU)
        }

        function yc(UU, XU, zU) {
          return (0, cU.R)(UU).beforeAuthStateChanged(XU, zU)
        }

        function Qc(UU, XU, zU, yU) {
          return (0, cU.R)(UU).onAuthStateChanged(XU, zU, yU)
        }

        function Ac(UU) {
          (0, cU.R)(UU).useDeviceLanguage()
        }

        function Fc(UU, XU) {
          return (0, cU.R)(UU).updateCurrentUser(XU)
        }

        function oc(UU) {
          return (0, cU.R)(UU).signOut()
        }
        async function Dc(UU) {
          return (0, cU.R)(UU).delete()
        }
        class Ec {
          constructor(UU, XU, zU) {
            this.type = UU, this.credential = XU, this.auth = zU
          }
          static _fromIdtoken(UU, XU) {
            return new Ec("enroll", UU, XU)
          }
          static _fromMfaPendingCredential(UU) {
            return new Ec("signin", UU)
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
            var XU, zU;
            if (null === UU || void 0 === UU ? void 0 : UU.multiFactorSession) {
              if (null === (XU = UU.multiFactorSession) || void 0 === XU ? void 0 : XU.pendingCredential) return Ec._fromMfaPendingCredential(UU.multiFactorSession.pendingCredential);
              if (null === (zU = UU.multiFactorSession) || void 0 === zU ? void 0 : zU.idToken) return Ec._fromIdtoken(UU.multiFactorSession.idToken)
            }
            return null
          }
        }
        class Yc {
          constructor(UU, XU, zU) {
            this.session = UU, this.hints = XU, this.signInResolver = zU
          }
          static _fromError(UU, XU) {
            const zU = OX(UU),
              cU = XU.customData._serverResponse,
              yU = (cU.mfaInfo || []).map((UU => dz._fromServerResponse(zU, UU)));
            dU(cU.mfaPendingCredential, zU, "internal-error");
            const QU = Ec._fromMfaPendingCredential(cU.mfaPendingCredential);
            return new Yc(QU, yU, (async UU => {
              const yU = await UU._process(zU, QU);
              delete cU.mfaInfo, delete cU.mfaPendingCredential;
              const AU = Object.assign(Object.assign({}, cU), {
                idToken: yU.idToken,
                refreshToken: yU.refreshToken
              });
              switch (XU.operationType) {
                case "signIn":
                  const UU = await Ez._fromIdTokenResponse(zU, XU.operationType, AU);
                  return await zU._updateCurrentUser(UU.user), UU;
                case "reauthenticate":
                  return dU(XU.user, zU, "internal-error"), Ez._forOperation(XU.user, XU.operationType, AU);
                default:
                  BU(zU, "internal-error")
              }
            }))
          }
          async resolveSignIn(UU) {
            const XU = UU;
            return this.signInResolver(XU)
          }
        }

        function Nc(UU, XU) {
          var zU;
          const yU = (0, cU.R)(UU),
            QU = XU;
          return dU(XU.customData.operationType, yU, "argument-error"), dU(null === (zU = QU.customData._serverResponse) || void 0 === zU ? void 0 : zU.mfaPendingCredential, yU, "argument-error"), Yc._fromError(yU, QU)
        }
        class Ic {
          constructor(UU) {
            this.user = UU, this.enrolledFactors = [], UU._onReload((XU => {
              XU.mfaInfo && (this.enrolledFactors = XU.mfaInfo.map((XU => dz._fromServerResponse(UU.auth, XU))))
            }))
          }
          static _fromUser(UU) {
            return new Ic(UU)
          }
          async getSession() {
            return Ec._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(UU, XU) {
            const zU = UU,
              cU = await this.getSession(),
              yU = await KU(this.user, zU._process(this.user.auth, cU, XU));
            return await this.user._updateTokensIfNecessary(yU), this.user.reload()
          }
          async unenroll(UU) {
            const XU = "string" === typeof UU ? UU : UU.uid,
              zU = await this.user.getIdToken();
            try {
              const UU = await KU(this.user, (cU = this.user.auth, yU = {
                idToken: zU,
                mfaEnrollmentId: XU
              }, HU(cU, "POST", "/v2/accounts/mfaEnrollment:withdraw", iU(cU, yU))));
              this.enrolledFactors = this.enrolledFactors.filter((UU => {
                let {
                  uid: zU
                } = UU;
                return zU !== XU
              })), await this.user._updateTokensIfNecessary(UU), await this.user.reload()
            } catch (QU) {
              throw QU
            }
            var cU, yU
          }
        }
        const pc = new WeakMap;

        function ac(UU) {
          const XU = (0, cU.R)(UU);
          return pc.has(XU) || pc.set(XU, Ic._fromUser(XU)), pc.get(XU)
        }
        const tc = "__sak";
        class gc {
          constructor(UU, XU) {
            this.storageRetriever = UU, this.type = XU
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(tc, "1"), this.storage.removeItem(tc), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (UU) {
              return Promise.resolve(!1)
            }
          }
          _set(UU, XU) {
            return this.storage.setItem(UU, JSON.stringify(XU)), Promise.resolve()
          }
          _get(UU) {
            const XU = this.storage.getItem(UU);
            return Promise.resolve(XU ? JSON.parse(XU) : null)
          }
          _remove(UU) {
            return this.storage.removeItem(UU), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class kc extends gc {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (UU, XU) => this.onStorageEvent(UU, XU), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const UU = (0, cU.V)();
              return NX(UU) || kX(UU)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (UU) {
                return !1
              }
            }(), this.fallbackToPolling = GX(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(UU) {
            for (const XU of Object.keys(this.listeners)) {
              const zU = this.storage.getItem(XU),
                cU = this.localCache[XU];
              zU !== cU && UU(XU, cU, zU)
            }
          }
          onStorageEvent(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!UU.key) return void this.forAllChangedKeys(((UU, XU, zU) => {
              this.notifyListeners(UU, zU)
            }));
            const zU = UU.key;
            if (XU ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const cU = this.storage.getItem(zU);
              if (UU.newValue !== cU) null !== UU.newValue ? this.storage.setItem(zU, UU.newValue) : this.storage.removeItem(zU);
              else if (this.localCache[zU] === UU.newValue && !XU) return
            }
            const yU = () => {
                const UU = this.storage.getItem(zU);
                (XU || this.localCache[zU] !== UU) && this.notifyListeners(zU, UU)
              },
              QU = this.storage.getItem(zU);
            (0, cU.eb)() && 10 === document.documentMode && QU !== UU.newValue && UU.newValue !== UU.oldValue ? setTimeout(yU, 10) : yU()
          }
          notifyListeners(UU, XU) {
            this.localCache[UU] = XU;
            const zU = this.listeners[UU];
            if (zU)
              for (const cU of Array.from(zU)) cU(XU ? JSON.parse(XU) : XU)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((UU, XU, zU) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: UU,
                  oldValue: XU,
                  newValue: zU
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
          _addListener(UU, XU) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[UU] || (this.listeners[UU] = new Set, this.localCache[UU] = this.storage.getItem(UU)), this.listeners[UU].add(XU)
          }
          _removeListener(UU, XU) {
            this.listeners[UU] && (this.listeners[UU].delete(XU), 0 === this.listeners[UU].size && delete this.listeners[UU]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(UU, XU) {
            await super._set(UU, XU), this.localCache[UU] = JSON.stringify(XU)
          }
          async _get(UU) {
            const XU = await super._get(UU);
            return this.localCache[UU] = JSON.stringify(XU), XU
          }
          async _remove(UU) {
            await super._remove(UU), delete this.localCache[UU]
          }
        }
        kc.type = "LOCAL";
        const Gc = kc;
        class Bc extends gc {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(UU, XU) {}
          _removeListener(UU, XU) {}
        }
        Bc.type = "SESSION";
        const Zc = Bc;
        class Rc {
          constructor(UU) {
            this.eventTarget = UU, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(UU) {
            const XU = this.receivers.find((XU => XU.isListeningto(UU)));
            if (XU) return XU;
            const zU = new Rc(UU);
            return this.receivers.push(zU), zU
          }
          isListeningto(UU) {
            return this.eventTarget === UU
          }
          async handleEvent(UU) {
            const XU = UU,
              {
                eventId: zU,
                eventType: cU,
                data: yU
              } = XU.data,
              QU = this.handlersMap[cU];
            if (!(null === QU || void 0 === QU ? void 0 : QU.size)) return;
            XU.ports[0].postMessage({
              status: "ack",
              eventId: zU,
              eventType: cU
            });
            const AU = Array.from(QU).map((async UU => UU(XU.origin, yU))),
              FU = await
            function(UU) {
              return Promise.all(UU.map((async UU => {
                try {
                  return {
                    fulfilled: !0,
                    value: await UU
                  }
                } catch (XU) {
                  return {
                    fulfilled: !1,
                    reason: XU
                  }
                }
              })))
            }(AU);
            XU.ports[0].postMessage({
              status: "done",
              eventId: zU,
              eventType: cU,
              response: FU
            })
          }
          _subscribe(UU, XU) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[UU] || (this.handlersMap[UU] = new Set), this.handlersMap[UU].add(XU)
          }
          _unsubscribe(UU, XU) {
            this.handlersMap[UU] && XU && this.handlersMap[UU].delete(XU), XU && 0 !== this.handlersMap[UU].size || delete this.handlersMap[UU], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function Pc() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            zU = "";
          for (let cU = 0; cU < XU; cU++) zU += Math.floor(10 * Math.random());
          return UU + zU
        }
        Rc.receivers = [];
        class Wc {
          constructor(UU) {
            this.target = UU, this.handlers = new Set
          }
          removeMessageHandler(UU) {
            UU.messageChannel && (UU.messageChannel.port1.removeEventListener("message", UU.iG), UU.messageChannel.port1.close()), this.handlers.delete(UU)
          }
          async _send(UU, XU) {
            let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const cU = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!cU) throw new Error("connection_unavailable");
            let yU, QU;
            return new Promise(((AU, FU) => {
              const oU = Pc("", 20);
              cU.port1.start();
              const DU = setTimeout((() => {
                FU(new Error("unsupported_event"))
              }), zU);
              QU = {
                messageChannel: cU,
                iG(UU) {
                  const XU = UU;
                  if (XU.data.eventId === oU) switch (XU.data.status) {
                    case "ack":
                      clearTimeout(DU), yU = setTimeout((() => {
                        FU(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(yU), AU(XU.data.response);
                      break;
                    default:
                      clearTimeout(DU), clearTimeout(yU), FU(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(QU), cU.port1.addEventListener("message", QU.iG), this.target.postMessage({
                eventType: UU,
                eventId: oU,
                data: XU
              }, [cU.port2])
            })).finally((() => {
              QU && this.removeMessageHandler(QU)
            }))
          }
        }

        function dc() {
          return window
        }

        function Lc() {
          return "undefined" !== typeof dc().WorkerGlobalScope && "function" === typeof dc().importScripts
        }
        const ec = "firebaseLocalStorageDb",
          Cc = "firebaseLocalStorage",
          wc = "fbase_key";
        class qc {
          constructor(UU) {
            this.request = UU
          }
          toPromise() {
            return new Promise(((UU, XU) => {
              this.request.addEventListener("success", (() => {
                UU(this.request.result)
              })), this.request.addEventListener("error", (() => {
                XU(this.request.error)
              }))
            }))
          }
        }

        function Oc(UU, XU) {
          return UU.transaction([Cc], XU ? "readwrite" : "readonly").objectStore(Cc)
        }

        function Sc() {
          const UU = indexedDB.open(ec, 1);
          return new Promise(((XU, zU) => {
            UU.addEventListener("error", (() => {
              zU(UU.error)
            })), UU.addEventListener("upgradeneeded", (() => {
              const XU = UU.result;
              try {
                XU.createObjectStore(Cc, {
                  keyPath: wc
                })
              } catch (cU) {
                zU(cU)
              }
            })), UU.addEventListener("success", (async () => {
              const zU = UU.result;
              zU.objectStoreNames.contains(Cc) ? XU(zU) : (zU.close(), await
                function() {
                  const UU = indexedDB.deleteDatabase(ec);
                  return new qc(UU).toPromise()
                }(), XU(await Sc()))
            }))
          }))
        }
        async function rc(UU, XU, zU) {
          const cU = Oc(UU, !0).put({
            [wc]: XU,
            value: zU
          });
          return new qc(cU).toPromise()
        }

        function uc(UU, XU) {
          const zU = Oc(UU, !0).delete(XU);
          return new qc(zU).toPromise()
        }
        class fc {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await Sc()), this.db
          }
          async _withRetries(UU) {
            let XU = 0;
            for (;;) try {
              const XU = await this._openDb();
              return await UU(XU)
            } catch (zU) {
              if (XU++ > 3) throw zU;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return Lc() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = Rc._getInstance(Lc() ? self : null), this.receiver._subscribe("keyChanged", (async (UU, XU) => ({
              keyProcessed: (await this._poll()).includes(XU.key)
            }))), this.receiver._subscribe("ping", (async (UU, XU) => ["keyChanged"]))
          }
          async initializeSender() {
            var UU, XU;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (UU) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new Wc(this.activeServiceWorker);
            const zU = await this.sender._send("ping", {}, 800);
            zU && (null === (UU = zU[0]) || void 0 === UU ? void 0 : UU.fulfilled) && (null === (XU = zU[0]) || void 0 === XU ? void 0 : XU.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(UU) {
            if (this.sender && this.activeServiceWorker && function() {
                var UU;
                return (null === (UU = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === UU ? void 0 : UU.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: UU
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (XU) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const UU = await Sc();
              return await rc(UU, tc, "1"), await uc(UU, tc), !0
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
          async _set(UU, XU) {
            return this._withPendingWrite((async () => (await this._withRetries((zU => rc(zU, UU, XU))), this.localCache[UU] = XU, this.notifyServiceWorker(UU))))
          }
          async _get(UU) {
            const XU = await this._withRetries((XU => async function(UU, XU) {
              const zU = Oc(UU, !1).get(XU),
                cU = await new qc(zU).toPromise();
              return void 0 === cU ? null : cU.value
            }(XU, UU)));
            return this.localCache[UU] = XU, XU
          }
          async _remove(UU) {
            return this._withPendingWrite((async () => (await this._withRetries((XU => uc(XU, UU))), delete this.localCache[UU], this.notifyServiceWorker(UU))))
          }
          async _poll() {
            const UU = await this._withRetries((UU => {
              const XU = Oc(UU, !1).getAll();
              return new qc(XU).toPromise()
            }));
            if (!UU) return [];
            if (0 !== this.pendingWrites) return [];
            const XU = [],
              zU = new Set;
            for (const {
                fbase_key: cU,
                value: yU
              }
              of UU) zU.add(cU), JSON.stringify(this.localCache[cU]) !== JSON.stringify(yU) && (this.notifyListeners(cU, yU), XU.push(cU));
            for (const cU of Object.keys(this.localCache)) this.localCache[cU] && !zU.has(cU) && (this.notifyListeners(cU, null), XU.push(cU));
            return XU
          }
          notifyListeners(UU, XU) {
            this.localCache[UU] = XU;
            const zU = this.listeners[UU];
            if (zU)
              for (const cU of Array.from(zU)) cU(XU)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(UU, XU) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[UU] || (this.listeners[UU] = new Set, this._get(UU)), this.listeners[UU].add(XU)
          }
          _removeListener(UU, XU) {
            this.listeners[UU] && (this.listeners[UU].delete(XU), 0 === this.listeners[UU].size && delete this.listeners[UU]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        fc.type = "LOCAL";
        const ic = fc;
        const Hc = 1e12;
        class Mc {
          constructor(UU) {
            this.auth = UU, this.counter = Hc, this._widgets = new Map
          }
          render(UU, XU) {
            const zU = this.counter;
            return this._widgets.set(zU, new vc(UU, this.auth.name, XU || {})), this.counter++, zU
          }
          reset(UU) {
            var XU;
            const zU = UU || Hc;
            null === (XU = this._widgets.get(zU)) || void 0 === XU || XU.delete(), this._widgets.delete(zU)
          }
          getResponse(UU) {
            var XU;
            const zU = UU || Hc;
            return (null === (XU = this._widgets.get(zU)) || void 0 === XU ? void 0 : XU.getResponse()) || ""
          }
          async execute(UU) {
            var XU;
            const zU = UU || Hc;
            return null === (XU = this._widgets.get(zU)) || void 0 === XU || XU.execute(), ""
          }
        }
        class vc {
          constructor(UU, XU, zU) {
            this.params = zU, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const cU = "string" === typeof UU ? document.getElementById(UU) : UU;
            dU(cU, "argument-error", {
              appName: XU
            }), this.container = cU, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
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
                const XU = [],
                  zU = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let cU = 0; cU < UU; cU++) XU.push(zU.charAt(Math.floor(Math.random() * zU.length)));
                return XU.join("")
              }(50);
              const {
                callback: UU,
                "expired-callback": XU
              } = this.params;
              if (UU) try {
                UU(this.responseToken)
              } catch (zU) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, XU) try {
                  XU()
                } catch (zU) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const Vc = LX("rcb"),
          sc = new OU(3e4, 6e4);
        class nc {
          constructor() {
            var UU;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (UU = dc().grecaptcha) || void 0 === UU ? void 0 : UU.render)
          }
          load(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return dU(function(UU) {
              return UU.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(UU)
            }(XU), UU, "argument-error"), this.shouldResolveImmediately(XU) && RX(dc().grecaptcha) ? Promise.resolve(dc().grecaptcha) : new Promise(((zU, yU) => {
              const QU = dc().setTimeout((() => {
                yU(ZU(UU, "network-request-failed"))
              }), sc.get());
              dc()[Vc] = () => {
                dc().clearTimeout(QU), delete dc()[Vc];
                const cU = dc().grecaptcha;
                if (!cU || !RX(cU)) return void yU(ZU(UU, "internal-error"));
                const AU = cU.render;
                cU.render = (UU, XU) => {
                  const zU = AU(UU, XU);
                  return this.counter++, zU
                }, this.hostLanguage = XU, zU(cU)
              };
              dX(`https://www.google.com/recaptcha/api.js??${(0,cU.pb)({onload:Vc,render:"explicit",hl:XU})}`).catch((() => {
                clearTimeout(QU), yU(ZU(UU, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(UU) {
            var XU;
            return !!(null === (XU = dc().grecaptcha) || void 0 === XU ? void 0 : XU.render) && (UU === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class mc {
          async load(UU) {
            return new Mc(UU)
          }
          clearedOneInstance() {}
        }
        const lc = "recaptcha",
          xc = {
            theme: "light",
            type: "image"
          };
        class Jc {
          constructor(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, xc),
              zU = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = XU, this.type = lc, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = OX(zU), this.isInvisible = "invisible" === this.parameters.size, dU("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const cU = "string" === typeof UU ? document.getElementById(UU) : UU;
            dU(cU, this.auth, "argument-error"), this.container = cU, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new mc : new nc, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const UU = await this.render(),
              XU = this.getAssertedRecaptcha(),
              zU = XU.getResponse(UU);
            return zU || new Promise((zU => {
              const cU = UU => {
                UU && (this.tokenChangeListeners.delete(cU), zU(UU))
              };
              this.tokenChangeListeners.add(cU), this.isInvisible && XU.execute(UU)
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
            dU(!this.parameters.sitekey, this.auth, "argument-error"), dU(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), dU("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(UU) {
            return XU => {
              if (this.tokenChangeListeners.forEach((UU => UU(XU))), "function" === typeof UU) UU(XU);
              else if ("string" === typeof UU) {
                const zU = dc()[UU];
                "function" === typeof zU && zU(XU)
              }
            }
          }
          assertNotDestroyed() {
            dU(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let UU = this.container;
              if (!this.isInvisible) {
                const XU = document.createElement("div");
                UU.appendChild(XU), UU = XU
              }
              this.widgetId = this.getAssertedRecaptcha().render(UU, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            dU(wU() && !Lc(), this.auth, "internal-error"), await
            function() {
              let UU = null;
              return new Promise((XU => {
                "complete" !== document.readyState ? (UU = () => XU(), window.addEventListener("load", UU)) : XU()
              })).catch((XU => {
                throw UU && window.removeEventListener("load", UU), XU
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const UU = await async function(UU) {
              return (await HU(UU, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            dU(UU, this.auth, "internal-error"), this.parameters.sitekey = UU
          }
          getAssertedRecaptcha() {
            return dU(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class jc {
          constructor(UU, XU) {
            this.verificationId = UU, this.onConfirmation = XU
          }
          confirm(UU) {
            const XU = KX._fromVerification(this.verificationId, UU);
            return this.onConfirmation(XU)
          }
        }
        async function Kc(UU, XU, zU) {
          const yU = OX(UU),
            QU = await hc(yU, XU, (0, cU.R)(zU));
          return new jc(QU, (UU => Zz(yU, UU)))
        }
        async function bc(UU, XU, zU) {
          const yU = (0, cU.R)(UU);
          await kz(!1, yU, "phone");
          const QU = await hc(yU.auth, XU, (0, cU.R)(zU));
          return new jc(QU, (UU => Rz(yU, UU)))
        }
        async function Tc(UU, XU, zU) {
          const yU = (0, cU.R)(UU),
            QU = await hc(yU.auth, XU, (0, cU.R)(zU));
          return new jc(QU, (UU => Pz(yU, UU)))
        }
        async function hc(UU, XU, zU) {
          var cU;
          const yU = await zU.verify();
          try {
            let QU;
            if (dU("string" === typeof yU, UU, "argument-error"), dU(zU.type === lc, UU, "argument-error"), QU = "string" === typeof XU ? {
                phoneNumber: XU
              } : XU, "session" in QU) {
              const XU = QU.session;
              if ("phoneNumber" in QU) {
                dU("enroll" === XU.type, UU, "internal-error");
                const zU = await
                function(UU, XU) {
                  return HU(UU, "POST", "/v2/accounts/mfaEnrollment:start", iU(UU, XU))
                }(UU, {
                  idToken: XU.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: QU.phoneNumber,
                    recaptchaToken: yU
                  }
                });
                return zU.phoneSessionInfo.sessionInfo
              } {
                dU("signin" === XU.type, UU, "internal-error");
                const zU = (null === (cU = QU.multiFactorHint) || void 0 === cU ? void 0 : cU.uid) || QU.multiFactorUid;
                dU(zU, UU, "missing-multi-factor-info");
                const AU = await
                function(UU, XU) {
                  return HU(UU, "POST", "/v2/accounts/mfaSignIn:start", iU(UU, XU))
                }(UU, {
                  mfaPendingCredential: XU.credential,
                  mfaEnrollmentId: zU,
                  phoneSignInInfo: {
                    recaptchaToken: yU
                  }
                });
                return AU.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: XU
              } = await async function(UU, XU) {
                return HU(UU, "POST", "/v1/accounts:sendVerificationCode", iU(UU, XU))
              }(UU, {
                phoneNumber: QU.phoneNumber,
                recaptchaToken: yU
              });
              return XU
            }
          } finally {
            zU._reset()
          }
        }
        async function Uy(UU, XU) {
          await gz((0, cU.R)(UU), XU)
        }
        class Xy {
          constructor(UU) {
            this.providerId = Xy.PROVIDER_ID, this.auth = OX(UU)
          }
          verifyPhoneNumber(UU, XU) {
            return hc(this.auth, UU, (0, cU.R)(XU))
          }
          static credential(UU, XU) {
            return KX._fromVerification(UU, XU)
          }
          static credentialFromResult(UU) {
            const XU = UU;
            return Xy.credentialFromTaggedObject(XU)
          }
          static credentialFromError(UU) {
            return Xy.credentialFromTaggedObject(UU.customData || {})
          }
          static credentialFromTaggedObject(UU) {
            let {
              _tokenResponse: XU
            } = UU;
            if (!XU) return null;
            const {
              phoneNumber: zU,
              temporaryProof: cU
            } = XU;
            return zU && cU ? KX._fromTokenResponse(zU, cU) : null
          }
        }

        function zy(UU, XU) {
          return XU ? QX(XU) : (dU(UU._popupRedirectResolver, UU, "argument-error"), UU._popupRedirectResolver)
        }
        Xy.PROVIDER_ID = "phone", Xy.PHONE_SIGN_IN_METHOD = "phone";
        class cy extends HX {
          constructor(UU) {
            super("custom", "custom"), this.params = UU
          }
          _getIdTokenResponse(UU) {
            return xX(UU, this._buildIdpRequest())
          }
          _linkToIdToken(UU, XU) {
            return xX(UU, this._buildIdpRequest(XU))
          }
          _getReauthenticationResolver(UU) {
            return xX(UU, this._buildIdpRequest())
          }
          _buildIdpRequest(UU) {
            const XU = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return UU && (XU.idToken = UU), XU
          }
        }

        function yy(UU) {
          return Bz(UU.auth, new cy(UU), UU.bypassAuthState)
        }

        function Qy(UU) {
          const {
            auth: XU,
            user: zU
          } = UU;
          return dU(zU, XU, "internal-error"), Gz(zU, new cy(UU), UU.bypassAuthState)
        }
        async function Ay(UU) {
          const {
            auth: XU,
            user: zU
          } = UU;
          return dU(zU, XU, "internal-error"), gz(zU, new cy(UU), UU.bypassAuthState)
        }
        class Fy {
          constructor(UU, XU, zU, cU) {
            let yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = UU, this.resolver = zU, this.user = cU, this.bypassAuthState = yU, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(XU) ? XU : [XU]
          }
          execute() {
            return new Promise((async (UU, XU) => {
              this.pendingPromise = {
                resolve: UU,
                reject: XU
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (zU) {
                this.reject(zU)
              }
            }))
          }
          async onAuthEvent(UU) {
            const {
              urlResponse: XU,
              sessionId: zU,
              postBody: cU,
              tenantId: yU,
              error: QU,
              type: AU
            } = UU;
            if (QU) return void this.reject(QU);
            const FU = {
              auth: this.auth,
              requestUri: XU,
              sessionId: zU,
              tenantId: yU || void 0,
              postBody: cU || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(AU)(FU))
            } catch (oU) {
              this.reject(oU)
            }
          }
          onError(UU) {
            this.reject(UU)
          }
          getIdpTask(UU) {
            switch (UU) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return yy;
              case "linkViaPopup":
              case "linkViaRedirect":
                return Ay;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return Qy;
              default:
                BU(this.auth, "internal-error")
            }
          }
          resolve(UU) {
            eU(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(UU), this.unregisterAndCleanUp()
          }
          reject(UU) {
            eU(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(UU), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const oy = new OU(2e3, 1e4);
        async function Dy(UU, XU, zU) {
          const cU = OX(UU);
          PU(UU, XU, Uz);
          const yU = zy(cU, zU);
          return new Ny(cU, "signInViaPopup", XU, yU).executeNotNull()
        }
        async function Ey(UU, XU, zU) {
          const yU = (0, cU.R)(UU);
          PU(yU.auth, XU, Uz);
          const QU = zy(yU.auth, zU);
          return new Ny(yU.auth, "reauthViaPopup", XU, QU, yU).executeNotNull()
        }
        async function Yy(UU, XU, zU) {
          const yU = (0, cU.R)(UU);
          PU(yU.auth, XU, Uz);
          const QU = zy(yU.auth, zU);
          return new Ny(yU.auth, "linkViaPopup", XU, QU, yU).executeNotNull()
        }
        class Ny extends Fy {
          constructor(UU, XU, zU, cU, yU) {
            super(UU, XU, cU, yU), this.provider = zU, this.authWindow = null, this.pollId = null, Ny.currentPopupAction && Ny.currentPopupAction.cancel(), Ny.currentPopupAction = this
          }
          async executeNotNull() {
            const UU = await this.execute();
            return dU(UU, this.auth, "internal-error"), UU
          }
          async onExecution() {
            eU(1 === this.filter.length, "Popup operations only handle one event");
            const UU = Pc();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], UU), this.authWindow.associatedEvent = UU, this.resolver._originValidation(this.auth).catch((UU => {
              this.reject(UU)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (UU => {
              UU || this.reject(ZU(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var UU;
            return (null === (UU = this.authWindow) || void 0 === UU ? void 0 : UU.associatedEvent) || null
          }
          cancel() {
            this.reject(ZU(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Ny.currentPopupAction = null
          }
          pollUserCancellation() {
            const UU = () => {
              var XU, zU;
              (null === (zU = null === (XU = this.authWindow) || void 0 === XU ? void 0 : XU.window) || void 0 === zU ? void 0 : zU.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(ZU(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(UU, oy.get())
            };
            UU()
          }
        }
        Ny.currentPopupAction = null;
        const Iy = "pendingRedirect",
          py = new Map;
        class ay extends Fy {
          constructor(UU, XU) {
            super(UU, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], XU, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let UU = py.get(this.auth._key());
            if (!UU) {
              try {
                const XU = await async function(UU, XU) {
                  const zU = Gy(XU),
                    cU = ky(UU);
                  if (!await cU._isAvailable()) return !1;
                  const yU = "true" === await cU._get(zU);
                  return await cU._remove(zU), yU
                }(this.resolver, this.auth) ? await super.execute() : null;
                UU = () => Promise.resolve(XU)
              } catch (XU) {
                UU = () => Promise.reject(XU)
              }
              py.set(this.auth._key(), UU)
            }
            return this.bypassAuthState || py.set(this.auth._key(), (() => Promise.resolve(null))), UU()
          }
          async onAuthEvent(UU) {
            if ("signInViaRedirect" === UU.type) return super.onAuthEvent(UU);
            if ("unknown" !== UU.type) {
              if (UU.eventId) {
                const XU = await this.auth._redirectUserForId(UU.eventId);
                if (XU) return this.user = XU, super.onAuthEvent(UU);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function ty(UU, XU) {
          return ky(UU)._set(Gy(XU), "true")
        }

        function gy(UU, XU) {
          py.set(UU._key(), XU)
        }

        function ky(UU) {
          return QX(UU._redirectPersistence)
        }

        function Gy(UU) {
          return oX(Iy, UU.config.apiKey, UU.name)
        }

        function By(UU, XU, zU) {
          return async function(UU, XU, zU) {
            const cU = OX(UU);
            PU(UU, XU, Uz), await cU._initializationPromise;
            const yU = zy(cU, zU);
            return await ty(yU, cU), yU._openRedirect(cU, XU, "signInViaRedirect")
          }(UU, XU, zU)
        }

        function Zy(UU, XU, zU) {
          return async function(UU, XU, zU) {
            const yU = (0, cU.R)(UU);
            PU(yU.auth, XU, Uz), await yU.auth._initializationPromise;
            const QU = zy(yU.auth, zU);
            await ty(QU, yU.auth);
            const AU = await dy(yU);
            return QU._openRedirect(yU.auth, XU, "reauthViaRedirect", AU)
          }(UU, XU, zU)
        }

        function Ry(UU, XU, zU) {
          return async function(UU, XU, zU) {
            const yU = (0, cU.R)(UU);
            PU(yU.auth, XU, Uz), await yU.auth._initializationPromise;
            const QU = zy(yU.auth, zU);
            await kz(!1, yU, XU.providerId), await ty(QU, yU.auth);
            const AU = await dy(yU);
            return QU._openRedirect(yU.auth, XU, "linkViaRedirect", AU)
          }(UU, XU, zU)
        }
        async function Py(UU, XU) {
          return await OX(UU)._initializationPromise, Wy(UU, XU, !1)
        }
        async function Wy(UU, XU) {
          let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const cU = OX(UU),
            yU = zy(cU, XU),
            QU = new ay(cU, yU, zU),
            AU = await QU.execute();
          return AU && !zU && (delete AU.user._redirectEventId, await cU._persistUserIfCurrent(AU.user), await cU._setRedirectUser(null, XU)), AU
        }
        async function dy(UU) {
          const XU = Pc(`${UU.uid}:::`);
          return UU._redirectEventId = XU, await UU.auth._setRedirectUser(UU), await UU.auth._persistUserIfCurrent(UU), XU
        }
        class Ly {
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
            let XU = !1;
            return this.consumers.forEach((zU => {
              this.isEventForConsumer(UU, zU) && (XU = !0, this.sendToConsumer(UU, zU), this.saveEventToCache(UU))
            })), this.hasHandledPotentialRedirect || ! function(UU) {
              switch (UU.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return Cy(UU);
                default:
                  return !1
              }
            }(UU) || (this.hasHandledPotentialRedirect = !0, XU || (this.queuedRedirectEvent = UU, XU = !0)), XU
          }
          sendToConsumer(UU, XU) {
            var zU;
            if (UU.error && !Cy(UU)) {
              const cU = (null === (zU = UU.error.code) || void 0 === zU ? void 0 : zU.split("auth/")[1]) || "internal-error";
              XU.onError(ZU(this.auth, cU))
            } else XU.onAuthEvent(UU)
          }
          isEventForConsumer(UU, XU) {
            const zU = null === XU.eventId || !!UU.eventId && UU.eventId === XU.eventId;
            return XU.filter.includes(UU.type) && zU
          }
          hasEventBeenHandled(UU) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(ey(UU))
          }
          saveEventToCache(UU) {
            this.cachedEventUids.add(ey(UU)), this.lastProcessedEventTime = Date.now()
          }
        }

        function ey(UU) {
          return [UU.type, UU.eventId, UU.sessionId, UU.tenantId].filter((UU => UU)).join("-")
        }

        function Cy(UU) {
          let {
            type: XU,
            error: zU
          } = UU;
          return "unknown" === XU && "auth/no-auth-event" === (null === zU || void 0 === zU ? void 0 : zU.code)
        }
        const wy = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          qy = /^https?/;
        async function Oy(UU) {
          if (UU.config.emulator) return;
          const {
            authorizedDomains: XU
          } = await async function(UU) {
            return HU(UU, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(UU);
          for (const cU of XU) try {
            if (Sy(cU)) return
          } catch (zU) {}
          BU(UU, "unauthorized-domain")
        }

        function Sy(UU) {
          const XU = CU(),
            {
              protocol: zU,
              hostname: cU
            } = new URL(XU);
          if (UU.startsWith("chrome-extension://")) {
            const yU = new URL(UU);
            return "" === yU.hostname && "" === cU ? "chrome-extension:" === zU && UU.replace("chrome-extension://", "") === XU.replace("chrome-extension://", "") : "chrome-extension:" === zU && yU.hostname === cU
          }
          if (!qy.test(zU)) return !1;
          if (wy.test(UU)) return cU === UU;
          const yU = UU.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + yU + "|" + yU + ")$", "i").test(cU)
        }
        const ry = new OU(3e4, 6e4);

        function uy() {
          const UU = dc().___jsl;
          if (null === UU || void 0 === UU ? void 0 : UU.H)
            for (const XU of Object.keys(UU.H))
              if (UU.H[XU].r = UU.H[XU].r || [], UU.H[XU].L = UU.H[XU].L || [], UU.H[XU].r = [...UU.H[XU].L], UU.CP)
                for (let zU = 0; zU < UU.CP.length; zU++) UU.CP[zU] = null
        }
        let fy = null;

        function iy(UU) {
          return fy = fy || function(UU) {
            return new Promise(((XU, zU) => {
              var cU, yU, QU;

              function AU() {
                uy(), gapi.load("gapi.iframes", {
                  callback: () => {
                    XU(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    uy(), zU(ZU(UU, "network-request-failed"))
                  },
                  timeout: ry.get()
                })
              }
              if (null === (yU = null === (cU = dc().gapi) || void 0 === cU ? void 0 : cU.iframes) || void 0 === yU ? void 0 : yU.Iframe) XU(gapi.iframes.getContext());
              else {
                if (!(null === (QU = dc().gapi) || void 0 === QU ? void 0 : QU.load)) {
                  const XU = LX("iframefcb");
                  return dc()[XU] = () => {
                    gapi.load ? AU() : zU(ZU(UU, "network-request-failed"))
                  }, dX(`https://apis.google.com/js/api.js?onload=${XU}`).catch((UU => zU(UU)))
                }
                AU()
              }
            })).catch((UU => {
              throw fy = null, UU
            }))
          }(UU), fy
        }
        const Hy = new OU(5e3, 15e3),
          My = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          vy = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function Vy(UU) {
          const XU = UU.config;
          dU(XU.authDomain, UU, "auth-domain-config-required");
          const zU = XU.emulator ? SU(XU, "emulator/auth/iframe") : `https://${UU.config.authDomain}/__/auth/iframe`,
            QU = {
              apiKey: XU.apiKey,
              appName: UU.name,
              v: yU.e
            },
            AU = vy.get(UU.config.apiHost);
          AU && (QU.eid = AU);
          const FU = UU._getFrameworks();
          return FU.length && (QU.fw = FU.join(",")), `${zU}?${(0,cU.pb)(QU).slice(1)}`
        }
        const sy = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class ny {
          constructor(UU) {
            this.window = UU, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (UU) {}
          }
        }

        function my(UU, XU, zU) {
          let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const AU = Math.max((window.screen.availHeight - QU) / 2, 0).toString(),
            FU = Math.max((window.screen.availWidth - yU) / 2, 0).toString();
          let oU = "";
          const DU = Object.assign(Object.assign({}, sy), {
              width: yU.toString(),
              height: QU.toString(),
              top: AU,
              left: FU
            }),
            EU = (0, cU.V)().toLowerCase();
          zU && (oU = IX(EU) ? "_blank" : zU), YX(EU) && (XU = XU || "http://localhost", DU.scrollbars = "yes");
          const YU = Object.entries(DU).reduce(((UU, XU) => {
            let [zU, cU] = XU;
            return `${UU}${zU}=${cU},`
          }), "");
          if (function() {
              var UU;
              return kX(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, cU.V)()) && !!(null === (UU = window.navigator) || void 0 === UU ? void 0 : UU.standalone)
            }(EU) && "_self" !== oU) return function(UU, XU) {
            const zU = document.createElement("a");
            zU.href = UU, zU.target = XU;
            const cU = document.createEvent("MouseEvent");
            cU.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), zU.dispatchEvent(cU)
          }(XU || "", oU), new ny(null);
          const NU = window.open(XU || "", oU, YU);
          dU(NU, UU, "popup-blocked");
          try {
            NU.focus()
          } catch (IU) {}
          return new ny(NU)
        }
        const ly = "__/auth/handler",
          xy = "emulator/auth/handler",
          Jy = encodeURIComponent("fac");
        async function jy(UU, XU, zU, QU, AU, FU) {
            dU(UU.config.authDomain, UU, "auth-domain-config-required"), dU(UU.config.apiKey, UU, "invalid-api-key");
            const oU = {
              apiKey: UU.config.apiKey,
              appName: UU.name,
              authType: zU,
              redirectUrl: QU,
              v: yU.e,
              eventId: AU
            };
            if (XU instanceof Uz) {
              XU.setDefaultLanguage(UU.languageCode), oU.providerId = XU.providerId || "", (0, cU.ab)(XU.getCustomParameters()) || (oU.customParameters = JSON.stringify(XU.getCustomParameters()));
              for (const [UU, XU] of Object.entries(FU || {})) oU[UU] = XU
            }
            if (XU instanceof Xz) {
              const UU = XU.getScopes().filter((UU => "" !== UU));
              UU.length > 0 && (oU.scopes = UU.join(","))
            }
            UU.tenantId && (oU.tid = UU.tenantId);
            const DU = oU;
            for (const cU of Object.keys(DU)) void 0 === DU[cU] && delete DU[cU];
            const EU = await UU._getAppCheckToken(),
              YU = EU ? `#${Jy}=${encodeURIComponent(EU)}` : "";
            return `${function(UU){let{config:XU}=UU;if(!XU.emulator)return`
            https: //${XU.authDomain}/${ly}`;return SU(XU,xy)}(UU)}?${(0,cU.pb)(DU).slice(1)}${YU}`}const Ky="webStorageSupport";const by=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zc,this._completeRedirectFn=Wy,this._overrideRedirectResult=gy}async _openPopup(UU,XU,zU,cU){var yU;eU(null===(yU=this.eventManagers[UU._key()])||void 0===yU?void 0:yU.manager,"_initialize() not called before _openPopup()");return my(UU,await jy(UU,XU,zU,CU(),cU),Pc())}async _openRedirect(UU,XU,zU,cU){await this._originValidation(UU);return function(UU){dc().location.href=UU}(await jy(UU,XU,zU,CU(),cU)),new Promise((()=>{}))}_initialize(UU){const XU=UU._key();if(this.eventManagers[XU]){const{manager:UU,promise:zU}=this.eventManagers[XU];return UU?Promise.resolve(UU):(eU(zU,"If manager is not set, promise should be"),zU)}const zU=this.initAndGetManager(UU);return this.eventManagers[XU]={promise:zU},zU.catch((()=>{delete this.eventManagers[XU]})),zU}async initAndGetManager(UU){const XU=await async function(UU){const XU=await iy(UU),zU=dc().gapi;return dU(zU,UU,"internal-error"),XU.open({where:document.body,url:Vy(UU),messageHandlersFilter:zU.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:My,dontclear:!0},(XU=>new Promise((async(zU,cU)=>{await XU.restyle({setHideOnLeave:!1});const yU=ZU(UU,"network-request-failed"),QU=dc().setTimeout((()=>{cU(yU)}),Hy.get());function AU(){dc().clearTimeout(QU),zU(XU)}XU.ping(AU).then(AU,(()=>{cU(yU)}))}))))}(UU),zU=new Ly(UU);return XU.register("authEvent",(XU=>{dU(null===XU||void 0===XU?void 0:XU.authEvent,UU,"invalid-auth-event");return{status:zU.onEvent(XU.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[UU._key()]={manager:zU},this.iframes[UU._key()]=XU,zU}_isIframeWebStorageSupported(UU,XU){this.iframes[UU._key()].send(Ky,{type:Ky},(zU=>{var cU;const yU=null===(cU=null===zU||void 0===zU?void 0:zU[0])||void 0===cU?void 0:cU[Ky];void 0!==yU&&XU(!!yU),BU(UU,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(UU){const XU=UU._key();return this.originValidationPromises[XU]||(this.originValidationPromises[XU]=Oy(UU)),this.originValidationPromises[XU]}get _shouldInitProactively(){return GX()||NX()||kX()}};class Ty{constructor(UU){this.factorId=UU}_process(UU,XU,zU){switch(XU.type){case"enroll":return this._finalizeEnroll(UU,XU.credential,zU);case"signin":return this._finalizeSignIn(UU,XU.credential);default:return LU("unexpected MultiFactorSessionType")}}}class hy extends Ty{constructor(UU){super("phone"),this.credential=UU}static _fromCredential(UU){return new hy(UU)}_finalizeEnroll(UU,XU,zU){return function(UU,XU){return HU(UU,"POST","/v2/accounts/mfaEnrollment:finalize",iU(UU,XU))}(UU,{idToken:XU,displayName:zU,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(UU,XU){return function(UU,XU){return HU(UU,"POST","/v2/accounts/mfaSignIn:finalize",iU(UU,XU))}(UU,{mfaPendingCredential:XU,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class UQ{constructor(){}static assertion(UU){return hy._fromCredential(UU)}}UQ.FACTOR_ID="phone";class XQ{static assertionForEnrollment(UU,XU){return zQ._fromSecret(UU,XU)}static assertionForSignIn(UU,XU){return zQ._fromEnrollmentId(UU,XU)}static async generateSecret(UU){const XU=UU;dU("undefined"!==typeof XU.auth,"internal-error");const zU=await(cU=XU.auth,yU={idToken:XU.credential,totpEnrollmentInfo:{}},HU(cU,"POST","/v2/accounts/mfaEnrollment:start",iU(cU,yU)));var cU,yU;return cQ._fromStartTotpMfaEnrollmentResponse(zU,XU.auth)}}XQ.FACTOR_ID="totp";class zQ extends Ty{constructor(UU,XU,zU){super("totp"),this.otp=UU,this.enrollmentId=XU,this.secret=zU}static _fromSecret(UU,XU){return new zQ(XU,void 0,UU)}static _fromEnrollmentId(UU,XU){return new zQ(XU,UU)}async _finalizeEnroll(UU,XU,zU){return dU("undefined"!==typeof this.secret,UU,"argument-error"),function(UU,XU){return HU(UU,"POST","/v2/accounts/mfaEnrollment:finalize",iU(UU,XU))}(UU,{idToken:XU,displayName:zU,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(UU,XU){dU(void 0!==this.enrollmentId&&void 0!==this.otp,UU,"argument-error");const zU={verificationCode:this.otp};return function(UU,XU){return HU(UU,"POST","/v2/accounts/mfaSignIn:finalize",iU(UU,XU))}(UU,{mfaPendingCredential:XU,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:zU})}}class cQ{constructor(UU,XU,zU,cU,yU,QU,AU){this.sessionInfo=QU,this.auth=AU,this.secretKey=UU,this.hashingAlgorithm=XU,this.codeLength=zU,this.codeIntervalSeconds=cU,this.enrollmentCompletionDeadline=yU}static _fromStartTotpMfaEnrollmentResponse(UU,XU){return new cQ(UU.totpSessionInfo.sharedSecretKey,UU.totpSessionInfo.hashingAlgorithm,UU.totpSessionInfo.verificationCodeLength,UU.totpSessionInfo.periodSec,new Date(UU.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),UU.totpSessionInfo.sessionInfo,XU)}_makeTotpVerificationInfo(UU){return{sessionInfo:this.sessionInfo,verificationCode:UU}}generateQrCodeUrl(UU,XU){var zU;let cU=!1;return(yQ(UU)||yQ(XU))&&(cU=!0),cU&&(yQ(UU)&&(UU=(null===(zU=this.auth.currentUser)||void 0===zU?void 0:zU.email)||"unknownuser"),yQ(XU)&&(XU=this.auth.name)),`otpauth://totp/${XU}:${UU}?secret=${this.secretKey}&issuer=${XU}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function yQ(UU){return"undefined"===typeof UU||0===(null===UU||void 0===UU?void 0:UU.length)}var QQ="@firebase/auth",AQ="0.23.2";class FQ{constructor(UU){this.auth=UU,this.internalListeners=new Map}getUid(){var UU;return this.assertAuthConfigured(),(null===(UU=this.auth.currentUser)||void 0===UU?void 0:UU.uid)||null}async getToken(UU){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(UU)}}addAuthTokenListener(UU){if(this.assertAuthConfigured(),this.internalListeners.has(UU))return;const XU=this.auth.onIdTokenChanged((XU=>{UU((null===XU||void 0===XU?void 0:XU.stsTokenManager.accessToken)||null)}));this.internalListeners.set(UU,XU),this.updateProactiveRefresh()}removeAuthTokenListener(UU){this.assertAuthConfigured();const XU=this.internalListeners.get(UU);XU&&(this.internalListeners.delete(UU),XU(),this.updateProactiveRefresh())}assertAuthConfigured(){dU(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const oQ=(0,cU.N)("authIdTokenMaxAge")||300;let DQ=null;const EQ=UU=>async XU=>{const zU=XU&&await XU.getIdTokenResult(),cU=zU&&((new Date).getTime()-Date.parse(zU.issuedAtTime))/1e3;if(cU&&cU>oQ)return;const yU=null===zU||void 0===zU?void 0:zU.token;DQ!==yU&&(DQ=yU,await fetch(UU,{method:yU?"POST":"DELETE",headers:yU?{Authorization:`Bearer ${yU}`}:{}}))};function YQ(){let UU=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,yU.H)();const XU=(0,yU.s)(UU,"auth");if(XU.isInitialized())return XU.getImmediate();const zU=rX(UU,{popupRedirectResolver:by,persistence:[ic,Gc,Zc]}),QU=(0,cU.N)("authTokenSyncURL");if(QU){const UU=EQ(QU);yc(zU,UU,(()=>UU(zU.currentUser))),cc(zU,(XU=>UU(XU)))}const AU=(0,cU.K)("auth");return AU&&uX(zU,`http://${AU}`),zU}var NQ;NQ="Browser",(0,yU.t)(new FU.f("auth",((UU,XU)=>{let{options:zU}=XU;const cU=UU.getProvider("app").getImmediate(),yU=UU.getProvider("heartbeat"),QU=UU.getProvider("app-check-internal"),{apiKey:AU,authDomain:FU}=cU.options;dU(AU&&!AU.includes(":"),"invalid-api-key",{appName:cU.name});const oU={apiKey:AU,authDomain:FU,clientPlatform:NQ,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BX(NQ)},DU=new qX(cU,yU,QU,oU);return function(UU,XU){const zU=(null===XU||void 0===XU?void 0:XU.persistence)||[],cU=(Array.isArray(zU)?zU:[zU]).map(QX);(null===XU||void 0===XU?void 0:XU.errorMap)&&UU._updateErrorMap(XU.errorMap),UU._initializeWithPersistence(cU,null===XU||void 0===XU?void 0:XU.popupRedirectResolver)}(DU,zU),DU}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((UU,XU,zU)=>{UU.getProvider("auth-internal").initialize()}))),(0,yU.t)(new FU.f("auth-internal",(UU=>(UU=>new FQ(UU))(OX(UU.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,yU.Q)(QQ,AQ,function(UU){switch(UU){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(NQ)),(0,yU.Q)(QQ,AQ,"esm2017")}};Object.freeze(modules);for(const UU in modules)Object.freeze(modules[UU]);