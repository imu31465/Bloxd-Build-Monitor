/*! For license information please see 4udp6d.305.15b19431.chunk.js.LICENSE.txt */
export const id = 305;
export const ids = [305];
export const modules = {
    42062: (RR, JR, GR) => {
        GR.r(JR), GR.d(JR, {
          ActionCodeOperation: () => wR,
          ActionCodeURL: () => TJ,
          AuthCredential: () => PJ,
          AuthErrorCodes: () => nR,
          EmailAuthCredential: () => EJ,
          EmailAuthProvider: () => hJ,
          FacebookAuthProvider: () => yG,
          FactorId: () => iR,
          GithubAuthProvider: () => uG,
          GoogleAuthProvider: () => tG,
          OAuthCredential: () => kJ,
          OAuthProvider: () => GG,
          OperationType: () => KR,
          PhoneAuthCredential: () => FJ,
          PhoneAuthProvider: () => Jt,
          PhoneMultiFactorGenerator: () => Ju,
          ProviderId: () => fR,
          RecaptchaVerifier: () => ky,
          SAMLAuthProvider: () => qG,
          SignInMethod: () => VR,
          TotpMultiFactorGenerator: () => Gu,
          TotpSecret: () => tu,
          TwitterAuthProvider: () => iG,
          applyActionCode: () => xG,
          beforeAuthStateChanged: () => ty,
          browserLocalPersistence: () => Wy,
          browserPopupRedirectResolver: () => st,
          browserSessionPersistence: () => Cy,
          checkActionCode: () => NG,
          confirmPasswordReset: () => OG,
          connectAuthEmulator: () => HJ,
          createUserWithEmailAndPassword: () => HG,
          debugErrorMap: () => eR,
          deleteUser: () => fy,
          fetchSignInMethodsForEmail: () => mG,
          getAdditionalUserInfo: () => Ry,
          getAuth: () => wu,
          getIdToken: () => ER,
          getIdTokenResult: () => YR,
          getMultiFactorResolver: () => wy,
          getRedirectResult: () => Bt,
          inMemoryPersistence: () => qJ,
          indexedDBLocalPersistence: () => cy,
          initializeAuth: () => DJ,
          initializeRecaptchaConfig: () => Gy,
          isSignInWithEmailLink: () => PG,
          linkWithCredential: () => XG,
          linkWithPhoneNumber: () => Ty,
          linkWithPopup: () => Kt,
          linkWithRedirect: () => Mt,
          multiFactor: () => ay,
          onAuthStateChanged: () => uy,
          onIdTokenChanged: () => yy,
          parseActionCodeURL: () => sJ,
          prodErrorMap: () => aR,
          reauthenticateWithCredential: () => MG,
          reauthenticateWithPhoneNumber: () => sy,
          reauthenticateWithPopup: () => Vt,
          reauthenticateWithRedirect: () => Xt,
          reload: () => RJ,
          sendEmailVerification: () => zG,
          sendPasswordResetEmail: () => vG,
          sendSignInLinkToEmail: () => cG,
          setPersistence: () => Jy,
          signInAnonymously: () => wG,
          signInWithCredential: () => CG,
          signInWithCustomToken: () => BG,
          signInWithEmailAndPassword: () => oG,
          signInWithEmailLink: () => IG,
          signInWithPhoneNumber: () => Fy,
          signInWithPopup: () => ft,
          signInWithRedirect: () => Ct,
          signOut: () => iy,
          unlink: () => LG,
          updateCurrentUser: () => qy,
          updateEmail: () => dG,
          updatePassword: () => EG,
          updatePhoneNumber: () => Rt,
          updateProfile: () => jG,
          useDeviceLanguage: () => Zy,
          verifyBeforeUpdateEmail: () => SG,
          verifyPasswordResetCode: () => DG
        });
        var yR = GR(42046),
          tR = GR(42038);

        function uR(RR, JR) {
          var GR = {};
          for (var yR in RR) Object.prototype.hasOwnProperty.call(RR, yR) && JR.indexOf(yR) < 0 && (GR[yR] = RR[yR]);
          if (null != RR && "function" === typeof Object.getOwnPropertySymbols) {
            var tR = 0;
            for (yR = Object.getOwnPropertySymbols(RR); tR < yR.length; tR++) JR.indexOf(yR[tR]) < 0 && Object.prototype.propertyIsEnumerable.call(RR, yR[tR]) && (GR[yR[tR]] = RR[yR[tR]])
          }
          return GR
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var ZR = GR(42051),
          qR = GR(42044);
        const iR = {
            PHONE: "phone",
            TOTP: "totp"
          },
          fR = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          VR = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          KR = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          wR = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function rR() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const eR = function() {
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
          aR = rR,
          LR = new yR.e("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          nR = {
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
          UR = new ZR.g("@firebase/auth");

        function WR(RR) {
          if (UR.logLevel <= ZR.d.ERROR) {
            for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
            UR.error(`Auth (${tR.c}): ${RR}`, ...GR)
          }
        }

        function AR(RR) {
          for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
          throw BR(RR, ...GR)
        }

        function CR(RR) {
          for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
          return BR(RR, ...GR)
        }

        function XR(RR, JR, GR) {
          const tR = Object.assign(Object.assign({}, aR()), {
            [JR]: GR
          });
          return new yR.e("auth", "Firebase", tR).create(JR, {
            appName: RR.name
          })
        }

        function MR(RR, JR, GR) {
          if (!(JR instanceof GR)) throw GR.name !== JR.constructor.name && AR(RR, "argument-error"), XR(RR, "argument-error", `Type of ${JR.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function BR(RR) {
          for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
          if ("string" !== typeof RR) {
            const JR = GR[0],
              yR = [...GR.slice(1)];
            return yR[0] && (yR[0].appName = RR.name), RR._errorFactory.create(JR, ...yR)
          }
          return LR.create(RR, ...GR)
        }

        function lR(RR, JR) {
          if (!RR) {
            for (var GR = arguments.length, yR = new Array(GR > 2 ? GR - 2 : 0), tR = 2; tR < GR; tR++) yR[tR - 2] = arguments[tR];
            throw BR(JR, ...yR)
          }
        }

        function pR(RR) {
          const JR = "INTERNAL ASSERTION FAILED: " + RR;
          throw WR(JR), new Error(JR)
        }

        function gR(RR, JR) {
          RR || pR(JR)
        }

        function bR() {
          var RR;
          return "undefined" !== typeof self && (null === (RR = self.location) || void 0 === RR ? void 0 : RR.href) || ""
        }

        function vR() {
          return "http:" === OR() || "https:" === OR()
        }

        function OR() {
          var RR;
          return "undefined" !== typeof self && (null === (RR = self.location) || void 0 === RR ? void 0 : RR.protocol) || null
        }
        class xR {
          constructor(RR, JR) {
            this.shortDelay = RR, this.longDelay = JR, gR(JR > RR, "Short delay should be less than long delay!"), this.isMobile = (0, yR.T)() || (0, yR.X)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (vR() || (0, yR.I)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function NR(RR, JR) {
          gR(RR.emulator, "Emulator should always be set here");
          const {
            url: GR
          } = RR.emulator;
          return JR ? `${GR}${JR.startsWith("/")?JR.slice(1):JR}` : GR
        }
        class DR {
          static initialize(RR, JR, GR) {
            this.fetchImpl = RR, JR && (this.headersImpl = JR), GR && (this.responseImpl = GR)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void pR("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void pR("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void pR("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const HR = {
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
          oR = new xR(3e4, 6e4);

        function cR(RR, JR) {
          return RR.tenantId && !JR.tenantId ? Object.assign(Object.assign({}, JR), {
            tenantId: RR.tenantId
          }) : JR
        }
        async function PR(RR, JR, GR, tR) {
          return IR(RR, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let uR = {},
              ZR = {};
            tR && ("GET" === JR ? ZR = tR : uR = {
              body: JSON.stringify(tR)
            });
            const qR = (0, yR.db)(Object.assign({
                key: RR.config.apiKey
              }, ZR)).slice(1),
              iR = await RR._getAdditionalHeaders();
            return iR["Content-Type"] = "application/json", RR.languageCode && (iR["X-Firebase-Locale"] = RR.languageCode), DR.fetch()(zR(RR, RR.config.apiHost, GR, qR), Object.assign({
              method: JR,
              headers: iR,
              referrerPolicy: "no-referrer"
            }, uR))
          }))
        }
        async function IR(RR, JR, GR) {
          RR._canInitEmulator = !1;
          const tR = Object.assign(Object.assign({}, HR), JR);
          try {
            const JR = new SR(RR),
              yR = await Promise.race([GR(), JR.promise]);
            JR.clearNetworkTimeout();
            const uR = await yR.json();
            if ("needConfirmation" in uR) throw jR(RR, "account-exists-with-different-credential", uR);
            if (yR.ok && !("errorMessage" in uR)) return uR;
            {
              const JR = yR.ok ? uR.errorMessage : uR.error.message,
                [GR, ZR] = JR.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === GR) throw jR(RR, "credential-already-in-use", uR);
              if ("EMAIL_EXISTS" === GR) throw jR(RR, "email-already-in-use", uR);
              if ("USER_DISABLED" === GR) throw jR(RR, "user-disabled", uR);
              const qR = tR[GR] || GR.toLowerCase().replace(/[_\s]+/g, "-");
              if (ZR) throw XR(RR, qR, ZR);
              AR(RR, qR)
            }
          } catch (uR) {
            if (uR instanceof yR.f) throw uR;
            AR(RR, "network-request-failed", {
              message: String(uR)
            })
          }
        }
        async function mR(RR, JR, GR, yR) {
          let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const uR = await PR(RR, JR, GR, yR, tR);
          return "mfaPendingCredential" in uR && AR(RR, "multi-factor-auth-required", {
            _serverResponse: uR
          }), uR
        }

        function zR(RR, JR, GR, yR) {
          const tR = `${JR}${GR}?${yR}`;
          return RR.config.emulator ? NR(RR.config, tR) : `${RR.config.apiScheme}://${tR}`
        }
        class SR {
          constructor(RR) {
            this.auth = RR, this.timer = null, this.promise = new Promise(((RR, JR) => {
              this.timer = setTimeout((() => JR(CR(this.auth, "network-request-failed"))), oR.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function jR(RR, JR, GR) {
          const yR = {
            appName: RR.name
          };
          GR.email && (yR.email = GR.email), GR.phoneNumber && (yR.phoneNumber = GR.phoneNumber);
          const tR = CR(RR, JR, yR);
          return tR.customData._tokenResponse = GR, tR
        }

        function dR(RR) {
          if (RR) try {
            const JR = new Date(Number(RR));
            if (!isNaN(JR.getTime())) return JR.toUTCString()
          } catch (JR) {}
        }

        function ER(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, yR.C)(RR).getIdToken(JR)
        }
        async function YR(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const GR = (0, yR.C)(RR),
            tR = await GR.getIdToken(JR),
            uR = QR(tR);
          lR(uR && uR.exp && uR.auth_time && uR.iat, GR.auth, "internal-error");
          const ZR = "object" === typeof uR.firebase ? uR.firebase : void 0,
            qR = null === ZR || void 0 === ZR ? void 0 : ZR.sign_in_provider;
          return {
            claims: uR,
            token: tR,
            authTime: dR(kR(uR.auth_time)),
            issuedAtTime: dR(kR(uR.iat)),
            expirationTime: dR(kR(uR.exp)),
            signInProvider: qR || null,
            signInSecondFactor: (null === ZR || void 0 === ZR ? void 0 : ZR.sign_in_second_factor) || null
          }
        }

        function kR(RR) {
          return 1e3 * Number(RR)
        }

        function QR(RR) {
          const [JR, GR, tR] = RR.split(".");
          if (void 0 === JR || void 0 === GR || void 0 === tR) return WR("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const RR = (0, yR.m)(GR);
            return RR ? JSON.parse(RR) : (WR("Failed to decode base64 JWT payload"), null)
          } catch (uR) {
            return WR("Caught error parsing JWT payload as JSON", null === uR || void 0 === uR ? void 0 : uR.toString()), null
          }
        }
        async function FR(RR, JR) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return JR;
          try {
            return await JR
          } catch (GR) {
            throw GR instanceof yR.f && function(RR) {
              let {
                code: JR
              } = RR;
              return "auth/user-disabled" === JR || "auth/user-token-expired" === JR
            }(GR) && RR.auth.currentUser === RR && await RR.auth.signOut(), GR
          }
        }
        class TR {
          constructor(RR) {
            this.user = RR, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(RR) {
            var JR;
            if (RR) {
              const RR = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), RR
            } {
              this.errorBackoff = 3e4;
              const RR = (null !== (JR = this.user.stsTokenManager.expirationTime) && void 0 !== JR ? JR : 0) - Date.now() - 3e5;
              return Math.max(0, RR)
            }
          }
          schedule() {
            let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const JR = this.getInterval(RR);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), JR)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (RR) {
              return void("auth/network-request-failed" === (null === RR || void 0 === RR ? void 0 : RR.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class sR {
          constructor(RR, JR) {
            this.createdAt = RR, this.lastLoginAt = JR, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = dR(this.lastLoginAt), this.creationTime = dR(this.createdAt)
          }
          _copy(RR) {
            this.createdAt = RR.createdAt, this.lastLoginAt = RR.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function hR(RR) {
          var JR;
          const GR = RR.auth,
            yR = await RR.getIdToken(),
            tR = await FR(RR, async function(RR, JR) {
              return PR(RR, "POST", "/v1/accounts:lookup", JR)
            }(GR, {
              idToken: yR
            }));
          lR(null === tR || void 0 === tR ? void 0 : tR.users.length, GR, "internal-error");
          const ZR = tR.users[0];
          RR._notifyReloadListener(ZR);
          const qR = (null === (JR = ZR.providerUserInfo) || void 0 === JR ? void 0 : JR.length) ? ZR.providerUserInfo.map((RR => {
            var {
              providerId: JR
            } = RR, GR = uR(RR, ["providerId"]);
            return {
              providerId: JR,
              uid: GR.rawId || "",
              displayName: GR.displayName || null,
              email: GR.email || null,
              phoneNumber: GR.phoneNumber || null,
              photoURL: GR.photoUrl || null
            }
          })) : [];
          const iR = (fR = RR.providerData, VR = qR, [...fR.filter((RR => !VR.some((JR => JR.providerId === RR.providerId)))), ...VR]);
          var fR, VR;
          const KR = RR.isAnonymous,
            wR = !(RR.email && ZR.passwordHash) && !(null === iR || void 0 === iR ? void 0 : iR.length),
            rR = !!KR && wR,
            eR = {
              uid: ZR.localId,
              displayName: ZR.displayName || null,
              photoURL: ZR.photoUrl || null,
              email: ZR.email || null,
              emailVerified: ZR.emailVerified || !1,
              phoneNumber: ZR.phoneNumber || null,
              tenantId: ZR.tenantId || null,
              providerData: iR,
              metadata: new sR(ZR.createdAt, ZR.lastLoginAt),
              isAnonymous: rR
            };
          Object.assign(RR, eR)
        }
        async function RJ(RR) {
          const JR = (0, yR.C)(RR);
          await hR(JR), await JR.auth._persistUserIfCurrent(JR), JR.auth._notifyListenersIfCurrent(JR)
        }
        class JJ {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(RR) {
            lR(RR.idToken, "internal-error"), lR("undefined" !== typeof RR.idToken, "internal-error"), lR("undefined" !== typeof RR.refreshToken, "internal-error");
            const JR = "expiresIn" in RR && "undefined" !== typeof RR.expiresIn ? Number(RR.expiresIn) : function(RR) {
              const JR = QR(RR);
              return lR(JR, "internal-error"), lR("undefined" !== typeof JR.exp, "internal-error"), lR("undefined" !== typeof JR.iat, "internal-error"), Number(JR.exp) - Number(JR.iat)
            }(RR.idToken);
            this.updateTokensAndExpiration(RR.idToken, RR.refreshToken, JR)
          }
          async getToken(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return lR(!this.accessToken || this.refreshToken, RR, "user-token-expired"), JR || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(RR, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(RR, JR) {
            const {
              accessToken: GR,
              refreshToken: tR,
              expiresIn: uR
            } = await async function(RR, JR) {
              const GR = await IR(RR, {}, (async () => {
                const GR = (0, yR.db)({
                    grant_type: "refresh_token",
                    refresh_token: JR
                  }).slice(1),
                  {
                    tokenApiHost: tR,
                    apiKey: uR
                  } = RR.config,
                  ZR = zR(RR, tR, "/v1/token", `key=${uR}`),
                  qR = await RR._getAdditionalHeaders();
                return qR["Content-Type"] = "application/x-www-form-urlencoded", DR.fetch()(ZR, {
                  method: "POST",
                  headers: qR,
                  body: GR
                })
              }));
              return {
                accessToken: GR.access_token,
                expiresIn: GR.expires_in,
                refreshToken: GR.refresh_token
              }
            }(RR, JR);
            this.updateTokensAndExpiration(GR, tR, Number(uR))
          }
          updateTokensAndExpiration(RR, JR, GR) {
            this.refreshToken = JR || null, this.accessToken = RR || null, this.expirationTime = Date.now() + 1e3 * GR
          }
          static fromJSON(RR, JR) {
            const {
              refreshToken: GR,
              accessToken: yR,
              expirationTime: tR
            } = JR, uR = new JJ;
            return GR && (lR("string" === typeof GR, "internal-error", {
              appName: RR
            }), uR.refreshToken = GR), yR && (lR("string" === typeof yR, "internal-error", {
              appName: RR
            }), uR.accessToken = yR), tR && (lR("number" === typeof tR, "internal-error", {
              appName: RR
            }), uR.expirationTime = tR), uR
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(RR) {
            this.accessToken = RR.accessToken, this.refreshToken = RR.refreshToken, this.expirationTime = RR.expirationTime
          }
          _clone() {
            return Object.assign(new JJ, this.toJSON())
          }
          _performRefresh() {
            return pR("not implemented")
          }
        }

        function GJ(RR, JR) {
          lR("string" === typeof RR || "undefined" === typeof RR, "internal-error", {
            appName: JR
          })
        }
        class yJ {
          constructor(RR) {
            var {
              uid: JR,
              auth: GR,
              stsTokenManager: yR
            } = RR, tR = uR(RR, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new TR(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = JR, this.auth = GR, this.stsTokenManager = yR, this.accessToken = yR.accessToken, this.displayName = tR.displayName || null, this.email = tR.email || null, this.emailVerified = tR.emailVerified || !1, this.phoneNumber = tR.phoneNumber || null, this.photoURL = tR.photoURL || null, this.isAnonymous = tR.isAnonymous || !1, this.tenantId = tR.tenantId || null, this.providerData = tR.providerData ? [...tR.providerData] : [], this.metadata = new sR(tR.createdAt || void 0, tR.lastLoginAt || void 0)
          }
          async getIdToken(RR) {
            const JR = await FR(this, this.stsTokenManager.getToken(this.auth, RR));
            return lR(JR, this.auth, "internal-error"), this.accessToken !== JR && (this.accessToken = JR, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), JR
          }
          getIdTokenResult(RR) {
            return YR(this, RR)
          }
          reload() {
            return RJ(this)
          }
          _assign(RR) {
            this !== RR && (lR(this.uid === RR.uid, this.auth, "internal-error"), this.displayName = RR.displayName, this.photoURL = RR.photoURL, this.email = RR.email, this.emailVerified = RR.emailVerified, this.phoneNumber = RR.phoneNumber, this.isAnonymous = RR.isAnonymous, this.tenantId = RR.tenantId, this.providerData = RR.providerData.map((RR => Object.assign({}, RR))), this.metadata._copy(RR.metadata), this.stsTokenManager._assign(RR.stsTokenManager))
          }
          _clone(RR) {
            const JR = new yJ(Object.assign(Object.assign({}, this), {
              auth: RR,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return JR.metadata._copy(this.metadata), JR
          }
          _onReload(RR) {
            lR(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = RR, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(RR) {
            this.reloadListener ? this.reloadListener(RR) : this.reloadUserInfo = RR
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              GR = !1;
            RR.idToken && RR.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(RR), GR = !0), JR && await hR(this), await this.auth._persistUserIfCurrent(this), GR && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const RR = await this.getIdToken();
            return await FR(this, async function(RR, JR) {
              return PR(RR, "POST", "/v1/accounts:delete", JR)
            }(this.auth, {
              idToken: RR
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
              providerData: this.providerData.map((RR => Object.assign({}, RR))),
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
          static _fromJSON(RR, JR) {
            var GR, yR, tR, uR, ZR, qR, iR, fR;
            const VR = null !== (GR = JR.displayName) && void 0 !== GR ? GR : void 0,
              KR = null !== (yR = JR.email) && void 0 !== yR ? yR : void 0,
              wR = null !== (tR = JR.phoneNumber) && void 0 !== tR ? tR : void 0,
              rR = null !== (uR = JR.photoURL) && void 0 !== uR ? uR : void 0,
              eR = null !== (ZR = JR.tenantId) && void 0 !== ZR ? ZR : void 0,
              aR = null !== (qR = JR._redirectEventId) && void 0 !== qR ? qR : void 0,
              LR = null !== (iR = JR.createdAt) && void 0 !== iR ? iR : void 0,
              nR = null !== (fR = JR.lastLoginAt) && void 0 !== fR ? fR : void 0,
              {
                uid: UR,
                emailVerified: WR,
                isAnonymous: AR,
                providerData: CR,
                stsTokenManager: XR
              } = JR;
            lR(UR && XR, RR, "internal-error");
            const MR = JJ.fromJSON(this.name, XR);
            lR("string" === typeof UR, RR, "internal-error"), GJ(VR, RR.name), GJ(KR, RR.name), lR("boolean" === typeof WR, RR, "internal-error"), lR("boolean" === typeof AR, RR, "internal-error"), GJ(wR, RR.name), GJ(rR, RR.name), GJ(eR, RR.name), GJ(aR, RR.name), GJ(LR, RR.name), GJ(nR, RR.name);
            const BR = new yJ({
              uid: UR,
              auth: RR,
              email: KR,
              emailVerified: WR,
              displayName: VR,
              isAnonymous: AR,
              photoURL: rR,
              phoneNumber: wR,
              tenantId: eR,
              stsTokenManager: MR,
              createdAt: LR,
              lastLoginAt: nR
            });
            return CR && Array.isArray(CR) && (BR.providerData = CR.map((RR => Object.assign({}, RR)))), aR && (BR._redirectEventId = aR), BR
          }
          static async _fromIdTokenResponse(RR, JR) {
            let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const yR = new JJ;
            yR.updateFromServerResponse(JR);
            const tR = new yJ({
              uid: JR.localId,
              auth: RR,
              stsTokenManager: yR,
              isAnonymous: GR
            });
            return await hR(tR), tR
          }
        }
        const tJ = new Map;

        function uJ(RR) {
          gR(RR instanceof Function, "Expected a class definition");
          let JR = tJ.get(RR);
          return JR ? (gR(JR instanceof RR, "Instance stored in cache mismatched with class"), JR) : (JR = new RR, tJ.set(RR, JR), JR)
        }
        class ZJ {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(RR, JR) {
            this.storage[RR] = JR
          }
          async _get(RR) {
            const JR = this.storage[RR];
            return void 0 === JR ? null : JR
          }
          async _remove(RR) {
            delete this.storage[RR]
          }
          _addListener(RR, JR) {}
          _removeListener(RR, JR) {}
        }
        ZJ.type = "NONE";
        const qJ = ZJ;

        function iJ(RR, JR, GR) {
          return `firebase:${RR}:${JR}:${GR}`
        }
        class fJ {
          constructor(RR, JR, GR) {
            this.persistence = RR, this.auth = JR, this.userKey = GR;
            const {
              config: yR,
              name: tR
            } = this.auth;
            this.fullUserKey = iJ(this.userKey, yR.apiKey, tR), this.fullPersistenceKey = iJ("persistence", yR.apiKey, tR), this.boundEventHandler = JR._onStorageEvent.bind(JR), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(RR) {
            return this.persistence._set(this.fullUserKey, RR.toJSON())
          }
          async getCurrentUser() {
            const RR = await this.persistence._get(this.fullUserKey);
            return RR ? yJ._fromJSON(this.auth, RR) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(RR) {
            if (this.persistence === RR) return;
            const JR = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = RR, JR ? this.setCurrentUser(JR) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(RR, JR) {
            let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!JR.length) return new fJ(uJ(qJ), RR, GR);
            const yR = (await Promise.all(JR.map((async RR => {
              if (await RR._isAvailable()) return RR
            })))).filter((RR => RR));
            let tR = yR[0] || uJ(qJ);
            const uR = iJ(GR, RR.config.apiKey, RR.name);
            let ZR = null;
            for (const fR of JR) try {
              const JR = await fR._get(uR);
              if (JR) {
                const GR = yJ._fromJSON(RR, JR);
                fR !== tR && (ZR = GR), tR = fR;
                break
              }
            } catch (iR) {}
            const qR = yR.filter((RR => RR._shouldAllowMigration));
            return tR._shouldAllowMigration && qR.length ? (tR = qR[0], ZR && await tR._set(uR, ZR.toJSON()), await Promise.all(JR.map((async RR => {
              if (RR !== tR) try {
                await RR._remove(uR)
              } catch (iR) {}
            }))), new fJ(tR, RR, GR)) : new fJ(tR, RR, GR)
          }
        }

        function VJ(RR) {
          const JR = RR.toLowerCase();
          if (JR.includes("opera/") || JR.includes("opr/") || JR.includes("opios/")) return "Opera";
          if (eJ(JR)) return "IEMobile";
          if (JR.includes("msie") || JR.includes("trident/")) return "IE";
          if (JR.includes("edge/")) return "Edge";
          if (KJ(JR)) return "Firefox";
          if (JR.includes("silk/")) return "Silk";
          if (LJ(JR)) return "Blackberry";
          if (nJ(JR)) return "Webos";
          if (wJ(JR)) return "Safari";
          if ((JR.includes("chrome/") || rJ(JR)) && !JR.includes("edge/")) return "Chrome";
          if (aJ(JR)) return "Android";
          {
            const JR = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              GR = RR.match(JR);
            if (2 === (null === GR || void 0 === GR ? void 0 : GR.length)) return GR[1]
          }
          return "Other"
        }

        function KJ() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, yR.F)();
          return /firefox\//i.test(RR)
        }

        function wJ() {
          const RR = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, yR.F)()).toLowerCase();
          return RR.includes("safari/") && !RR.includes("chrome/") && !RR.includes("crios/") && !RR.includes("android")
        }

        function rJ() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, yR.F)();
          return /crios\//i.test(RR)
        }

        function eJ() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, yR.F)();
          return /iemobile/i.test(RR)
        }

        function aJ() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, yR.F)();
          return /android/i.test(RR)
        }

        function LJ() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, yR.F)();
          return /blackberry/i.test(RR)
        }

        function nJ() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, yR.F)();
          return /webos/i.test(RR)
        }

        function UJ() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, yR.F)();
          return /iphone|ipad|ipod/i.test(RR) || /macintosh/i.test(RR) && /mobile/i.test(RR)
        }

        function WJ() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, yR.F)();
          return UJ(RR) || aJ(RR) || nJ(RR) || LJ(RR) || /windows phone/i.test(RR) || eJ(RR)
        }

        function AJ(RR) {
          let JR, GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (RR) {
            case "Browser":
              JR = VJ((0, yR.F)());
              break;
            case "Worker":
              JR = `${VJ((0,yR.F)())}-${RR}`;
              break;
            default:
              JR = RR
          }
          const uR = GR.length ? GR.join(",") : "FirebaseCore-web";
          return `${JR}/JsCore/${tR.c}/${uR}`
        }
        async function CJ(RR, JR) {
          return PR(RR, "GET", "/v2/recaptchaConfig", cR(RR, JR))
        }

        function XJ(RR) {
          return void 0 !== RR && void 0 !== RR.getResponse
        }

        function MJ(RR) {
          return void 0 !== RR && void 0 !== RR.enterprise
        }
        class BJ {
          constructor(RR) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === RR.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = RR.recaptchaKey.split("/")[3], this.emailPasswordEnabled = RR.recaptchaEnforcementState.some((RR => "EMAIL_PASSWORD_PROVIDER" === RR.provider && "OFF" !== RR.enforcementState))
          }
        }

        function lJ(RR) {
          return new Promise(((JR, GR) => {
            const yR = document.createElement("script");
            yR.setAttribute("src", RR), yR.onload = JR, yR.onerror = RR => {
                const JR = CR("internal-error");
                JR.customData = RR, GR(JR)
              }, yR.type = "text/javascript", yR.charset = "UTF-8",
              function() {
                var RR, JR;
                return null !== (JR = null === (RR = document.getElementsByTagName("head")) || void 0 === RR ? void 0 : RR[0]) && void 0 !== JR ? JR : document
              }().appendChild(yR)
          }))
        }

        function pJ(RR) {
          return `__${RR}${Math.floor(1e6*Math.random())}`
        }
        class gJ {
          constructor(RR) {
            this.type = "recaptcha-enterprise", this.auth = xJ(RR)
          }
          async verify() {
            let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function GR(JR, GR, yR) {
              const tR = window.grecaptcha;
              MJ(tR) ? tR.enterprise.ready((() => {
                tR.enterprise.execute(JR, {
                  action: RR
                }).then((RR => {
                  GR(RR)
                })).catch((() => {
                  GR("NO_RECAPTCHA")
                }))
              })) : yR(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((RR, yR) => {
              (async function(RR) {
                if (!JR) {
                  if (null == RR.tenantId && null != RR._agentRecaptchaConfig) return RR._agentRecaptchaConfig.siteKey;
                  if (null != RR.tenantId && void 0 !== RR._tenantRecaptchaConfigs[RR.tenantId]) return RR._tenantRecaptchaConfigs[RR.tenantId].siteKey
                }
                return new Promise((async (JR, GR) => {
                  CJ(RR, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((yR => {
                    if (void 0 !== yR.recaptchaKey) {
                      const GR = new BJ(yR);
                      return null == RR.tenantId ? RR._agentRecaptchaConfig = GR : RR._tenantRecaptchaConfigs[RR.tenantId] = GR, JR(GR.siteKey)
                    }
                    GR(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((RR => {
                    GR(RR)
                  }))
                }))
              })(this.auth).then((tR => {
                if (!JR && MJ(window.grecaptcha)) GR(tR, RR, yR);
                else {
                  if ("undefined" === typeof window) return void yR(new Error("RecaptchaVerifier is only supported in browser"));
                  lJ("https://www.google.com/recaptcha/enterprise.js?render=" + tR).then((() => {
                    GR(tR, RR, yR)
                  })).catch((RR => {
                    yR(RR)
                  }))
                }
              })).catch((RR => {
                yR(RR)
              }))
            }))
          }
        }
        async function bJ(RR, JR, GR) {
          let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const tR = new gJ(RR);
          let uR;
          try {
            uR = await tR.verify(GR)
          } catch (qR) {
            uR = await tR.verify(GR, !0)
          }
          const ZR = Object.assign({}, JR);
          return yR ? Object.assign(ZR, {
            captchaResp: uR
          }) : Object.assign(ZR, {
            captchaResponse: uR
          }), Object.assign(ZR, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(ZR, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), ZR
        }
        class vJ {
          constructor(RR) {
            this.auth = RR, this.queue = []
          }
          pushCallback(RR, JR) {
            const GR = JR => new Promise(((GR, yR) => {
              try {
                GR(RR(JR))
              } catch (tR) {
                yR(tR)
              }
            }));
            GR.onAbort = JR, this.queue.push(GR);
            const yR = this.queue.length - 1;
            return () => {
              this.queue[yR] = () => Promise.resolve()
            }
          }
          async runMiddleware(RR) {
            if (this.auth.currentUser === RR) return;
            const JR = [];
            try {
              for (const GR of this.queue) await GR(RR), GR.onAbort && JR.push(GR.onAbort)
            } catch (GR) {
              JR.reverse();
              for (const RR of JR) try {
                RR()
              } catch (yR) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === GR || void 0 === GR ? void 0 : GR.message
              })
            }
          }
        }
        class OJ {
          constructor(RR, JR, GR, yR) {
            this.app = RR, this.heartbeatServiceProvider = JR, this.appCheckServiceProvider = GR, this.config = yR, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new NJ(this), this.idTokenSubscription = new NJ(this), this.beforeStateQueue = new vJ(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = LR, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = RR.name, this.clientVersion = yR.sdkClientVersion
          }
          _initializeWithPersistence(RR, JR) {
            return JR && (this._popupRedirectResolver = uJ(JR)), this._initializationPromise = this.queue((async () => {
              var GR, yR;
              if (!this._deleted && (this.persistenceManager = await fJ.create(this, RR), !this._deleted)) {
                if (null === (GR = this._popupRedirectResolver) || void 0 === GR ? void 0 : GR._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (tR) {}
                await this.initializeCurrentUser(JR), this.lastNotifiedUid = (null === (yR = this.currentUser) || void 0 === yR ? void 0 : yR.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const RR = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || RR ? this.currentUser && RR && this.currentUser.uid === RR.uid ? (this._currentUser._assign(RR), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(RR, !0) : void 0
          }
          async initializeCurrentUser(RR) {
            var JR;
            const GR = await this.assertedPersistence.getCurrentUser();
            let yR = GR,
              tR = !1;
            if (RR && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const GR = null === (JR = this.redirectUser) || void 0 === JR ? void 0 : JR._redirectEventId,
                uR = null === yR || void 0 === yR ? void 0 : yR._redirectEventId,
                ZR = await this.tryRedirectSignIn(RR);
              GR && GR !== uR || !(null === ZR || void 0 === ZR ? void 0 : ZR.user) || (yR = ZR.user, tR = !0)
            }
            if (!yR) return this.directlySetCurrentUser(null);
            if (!yR._redirectEventId) {
              if (tR) try {
                await this.beforeStateQueue.runMiddleware(yR)
              } catch (uR) {
                yR = GR, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(uR)))
              }
              return yR ? this.reloadAndSetCurrentUserOrClear(yR) : this.directlySetCurrentUser(null)
            }
            return lR(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === yR._redirectEventId ? this.directlySetCurrentUser(yR) : this.reloadAndSetCurrentUserOrClear(yR)
          }
          async tryRedirectSignIn(RR) {
            let JR = null;
            try {
              JR = await this._popupRedirectResolver._completeRedirectFn(this, RR, !0)
            } catch (GR) {
              await this._setRedirectUser(null)
            }
            return JR
          }
          async reloadAndSetCurrentUserOrClear(RR) {
            try {
              await hR(RR)
            } catch (JR) {
              if ("auth/network-request-failed" !== (null === JR || void 0 === JR ? void 0 : JR.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(RR)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const RR = navigator;
              return RR.languages && RR.languages[0] || RR.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(RR) {
            const JR = RR ? (0, yR.C)(RR) : null;
            return JR && lR(JR.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(JR && JR._clone(this))
          }
          async _updateCurrentUser(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return RR && lR(this.tenantId === RR.tenantId, this, "tenant-id-mismatch"), JR || await this.beforeStateQueue.runMiddleware(RR), this.queue((async () => {
              await this.directlySetCurrentUser(RR), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(RR) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(uJ(RR))
            }))
          }
          async initializeRecaptchaConfig() {
            const RR = await CJ(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              JR = new BJ(RR);
            if (null == this.tenantId ? this._agentRecaptchaConfig = JR : this._tenantRecaptchaConfigs[this.tenantId] = JR, JR.emailPasswordEnabled) {
              new gJ(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(RR) {
            this._errorFactory = new yR.e("auth", "Firebase", RR())
          }
          onAuthStateChanged(RR, JR, GR) {
            return this.registerStateListener(this.authStateSubscription, RR, JR, GR)
          }
          beforeAuthStateChanged(RR, JR) {
            return this.beforeStateQueue.pushCallback(RR, JR)
          }
          onIdTokenChanged(RR, JR, GR) {
            return this.registerStateListener(this.idTokenSubscription, RR, JR, GR)
          }
          toJSON() {
            var RR;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (RR = this._currentUser) || void 0 === RR ? void 0 : RR.toJSON()
            }
          }
          async _setRedirectUser(RR, JR) {
            const GR = await this.getOrInitRedirectPersistenceManager(JR);
            return null === RR ? GR.removeCurrentUser() : GR.setCurrentUser(RR)
          }
          async getOrInitRedirectPersistenceManager(RR) {
            if (!this.redirectPersistenceManager) {
              const JR = RR && uJ(RR) || this._popupRedirectResolver;
              lR(JR, this, "argument-error"), this.redirectPersistenceManager = await fJ.create(this, [uJ(JR._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(RR) {
            var JR, GR;
            return this._isInitialized && await this.queue((async () => {})), (null === (JR = this._currentUser) || void 0 === JR ? void 0 : JR._redirectEventId) === RR ? this._currentUser : (null === (GR = this.redirectUser) || void 0 === GR ? void 0 : GR._redirectEventId) === RR ? this.redirectUser : null
          }
          async _persistUserIfCurrent(RR) {
            if (RR === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(RR)))
          }
          _notifyListenersIfCurrent(RR) {
            RR === this.currentUser && this.notifyAuthListeners()
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
            var RR, JR;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const GR = null !== (JR = null === (RR = this.currentUser) || void 0 === RR ? void 0 : RR.uid) && void 0 !== JR ? JR : null;
            this.lastNotifiedUid !== GR && (this.lastNotifiedUid = GR, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(RR, JR, GR, yR) {
            if (this._deleted) return () => {};
            const tR = "function" === typeof JR ? JR : JR.next.bind(JR),
              uR = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return lR(uR, this, "internal-error"), uR.then((() => tR(this.currentUser))), "function" === typeof JR ? RR.addObserver(JR, GR, yR) : RR.addObserver(JR)
          }
          async directlySetCurrentUser(RR) {
            this.currentUser && this.currentUser !== RR && this._currentUser._stopProactiveRefresh(), RR && this.isProactiveRefreshEnabled && RR._startProactiveRefresh(), this.currentUser = RR, RR ? await this.assertedPersistence.setCurrentUser(RR) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(RR) {
            return this.operations = this.operations.then(RR, RR), this.operations
          }
          get assertedPersistence() {
            return lR(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(RR) {
            RR && !this.frameworks.includes(RR) && (this.frameworks.push(RR), this.frameworks.sort(), this.clientVersion = AJ(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var RR;
            const JR = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (JR["X-Firebase-gmpid"] = this.app.options.appId);
            const GR = await (null === (RR = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === RR ? void 0 : RR.getHeartbeatsHeader());
            GR && (JR["X-Firebase-Client"] = GR);
            const yR = await this._getAppCheckToken();
            return yR && (JR["X-Firebase-AppCheck"] = yR), JR
          }
          async _getAppCheckToken() {
            var RR;
            const JR = await (null === (RR = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === RR ? void 0 : RR.getToken());
            return (null === JR || void 0 === JR ? void 0 : JR.error) && function(RR) {
              if (UR.logLevel <= ZR.d.WARN) {
                for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
                UR.warn(`Auth (${tR.c}): ${RR}`, ...GR)
              }
            }(`Error while retrieving App Check token: ${JR.error}`), null === JR || void 0 === JR ? void 0 : JR.token
          }
        }

        function xJ(RR) {
          return (0, yR.C)(RR)
        }
        class NJ {
          constructor(RR) {
            this.auth = RR, this.observer = null, this.addObserver = (0, yR.q)((RR => this.observer = RR))
          }
          get next() {
            return lR(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function DJ(RR, JR) {
          const GR = (0, tR.t)(RR, "auth");
          if (GR.isInitialized()) {
            const RR = GR.getImmediate(),
              tR = GR.getOptions();
            if ((0, yR.r)(tR, null !== JR && void 0 !== JR ? JR : {})) return RR;
            AR(RR, "already-initialized")
          }
          return GR.initialize({
            options: JR
          })
        }

        function HJ(RR, JR, GR) {
          const yR = xJ(RR);
          lR(yR._canInitEmulator, yR, "emulator-config-failed"), lR(/^https?:\/\//.test(JR), yR, "invalid-emulator-scheme");
          const tR = !!(null === GR || void 0 === GR ? void 0 : GR.disableWarnings),
            uR = oJ(JR),
            {
              host: ZR,
              port: qR
            } = function(RR) {
              const JR = oJ(RR),
                GR = /(\/\/)?([^?#/]+)/.exec(RR.substr(JR.length));
              if (!GR) return {
                host: "",
                port: null
              };
              const yR = GR[2].split("@").pop() || "",
                tR = /^(\[[^\]]+\])(:|$)/.exec(yR);
              if (tR) {
                const RR = tR[1];
                return {
                  host: RR,
                  port: cJ(yR.substr(RR.length + 1))
                }
              } {
                const [RR, JR] = yR.split(":");
                return {
                  host: RR,
                  port: cJ(JR)
                }
              }
            }(JR),
            iR = null === qR ? "" : `:${qR}`;
          yR.config.emulator = {
            url: `${uR}//${ZR}${iR}/`
          }, yR.settings.appVerificationDisabledForTesting = !0, yR.emulatorConfig = Object.freeze({
            host: ZR,
            port: qR,
            protocol: uR.replace(":", ""),
            options: Object.freeze({
              disableWarnings: tR
            })
          }), tR || function() {
            function RR() {
              const RR = document.createElement("p"),
                JR = RR.style;
              RR.innerText = "Running in emulator mode. Do not use with production credentials.", JR.position = "fixed", JR.width = "100%", JR.backgroundColor = "#ffffff", JR.border = ".1em solid #000000", JR.color = "#b50000", JR.bottom = "0px", JR.left = "0px", JR.margin = "0px", JR.zIndex = "10000", JR.textAlign = "center", RR.classList.add("firebase-emulator-warning"), document.body.appendChild(RR)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", RR) : RR())
          }()
        }

        function oJ(RR) {
          const JR = RR.indexOf(":");
          return JR < 0 ? "" : RR.substr(0, JR + 1)
        }

        function cJ(RR) {
          if (!RR) return null;
          const JR = Number(RR);
          return isNaN(JR) ? null : JR
        }
        class PJ {
          constructor(RR, JR) {
            this.providerId = RR, this.signInMethod = JR
          }
          toJSON() {
            return pR("not implemented")
          }
          _getIdTokenResponse(RR) {
            return pR("not implemented")
          }
          _linkToIdToken(RR, JR) {
            return pR("not implemented")
          }
          _getReauthenticationResolver(RR) {
            return pR("not implemented")
          }
        }
        async function IJ(RR, JR) {
          return PR(RR, "POST", "/v1/accounts:resetPassword", cR(RR, JR))
        }
        async function mJ(RR, JR) {
          return PR(RR, "POST", "/v1/accounts:update", JR)
        }
        async function zJ(RR, JR) {
          return mR(RR, "POST", "/v1/accounts:signInWithPassword", cR(RR, JR))
        }
        async function SJ(RR, JR) {
          return PR(RR, "POST", "/v1/accounts:sendOobCode", cR(RR, JR))
        }
        async function jJ(RR, JR) {
          return SJ(RR, JR)
        }
        async function dJ(RR, JR) {
          return SJ(RR, JR)
        }
        class EJ extends PJ {
          constructor(RR, JR, GR) {
            let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", GR), this._email = RR, this._password = JR, this._tenantId = yR
          }
          static _fromEmailAndPassword(RR, JR) {
            return new EJ(RR, JR, "password")
          }
          static _fromEmailAndCode(RR, JR) {
            return new EJ(RR, JR, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(RR) {
            const JR = "string" === typeof RR ? JSON.parse(RR) : RR;
            if ((null === JR || void 0 === JR ? void 0 : JR.email) && (null === JR || void 0 === JR ? void 0 : JR.password)) {
              if ("password" === JR.signInMethod) return this._fromEmailAndPassword(JR.email, JR.password);
              if ("emailLink" === JR.signInMethod) return this._fromEmailAndCode(JR.email, JR.password, JR.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(RR) {
            var JR;
            switch (this.signInMethod) {
              case "password":
                const GR = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (JR = RR._getRecaptchaConfig()) || void 0 === JR ? void 0 : JR.emailPasswordEnabled) {
                  const JR = await bJ(RR, GR, "signInWithPassword");
                  return zJ(RR, JR)
                }
                return zJ(RR, GR).catch((async JR => {
                  if ("auth/missing-recaptcha-token" === JR.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const JR = await bJ(RR, GR, "signInWithPassword");
                    return zJ(RR, JR)
                  }
                  return Promise.reject(JR)
                }));
              case "emailLink":
                return async function(RR, JR) {
                  return mR(RR, "POST", "/v1/accounts:signInWithEmailLink", cR(RR, JR))
                }(RR, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                AR(RR, "internal-error")
            }
          }
          async _linkToIdToken(RR, JR) {
            switch (this.signInMethod) {
              case "password":
                return mJ(RR, {
                  idToken: JR,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(RR, JR) {
                  return mR(RR, "POST", "/v1/accounts:signInWithEmailLink", cR(RR, JR))
                }(RR, {
                  idToken: JR,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                AR(RR, "internal-error")
            }
          }
          _getReauthenticationResolver(RR) {
            return this._getIdTokenResponse(RR)
          }
        }
        async function YJ(RR, JR) {
          return mR(RR, "POST", "/v1/accounts:signInWithIdp", cR(RR, JR))
        }
        class kJ extends PJ {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(RR) {
            const JR = new kJ(RR.providerId, RR.signInMethod);
            return RR.idToken || RR.accessToken ? (RR.idToken && (JR.idToken = RR.idToken), RR.accessToken && (JR.accessToken = RR.accessToken), RR.nonce && !RR.pendingToken && (JR.nonce = RR.nonce), RR.pendingToken && (JR.pendingToken = RR.pendingToken)) : RR.oauthToken && RR.oauthTokenSecret ? (JR.accessToken = RR.oauthToken, JR.secret = RR.oauthTokenSecret) : AR("argument-error"), JR
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
          static fromJSON(RR) {
            const JR = "string" === typeof RR ? JSON.parse(RR) : RR,
              {
                providerId: GR,
                signInMethod: yR
              } = JR,
              tR = uR(JR, ["providerId", "signInMethod"]);
            if (!GR || !yR) return null;
            const ZR = new kJ(GR, yR);
            return ZR.idToken = tR.idToken || void 0, ZR.accessToken = tR.accessToken || void 0, ZR.secret = tR.secret, ZR.nonce = tR.nonce, ZR.pendingToken = tR.pendingToken || null, ZR
          }
          _getIdTokenResponse(RR) {
            return YJ(RR, this.buildRequest())
          }
          _linkToIdToken(RR, JR) {
            const GR = this.buildRequest();
            return GR.idToken = JR, YJ(RR, GR)
          }
          _getReauthenticationResolver(RR) {
            const JR = this.buildRequest();
            return JR.autoCreate = !1, YJ(RR, JR)
          }
          buildRequest() {
            const RR = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) RR.pendingToken = this.pendingToken;
            else {
              const JR = {};
              this.idToken && (JR.id_token = this.idToken), this.accessToken && (JR.access_token = this.accessToken), this.secret && (JR.oauth_token_secret = this.secret), JR.providerId = this.providerId, this.nonce && !this.pendingToken && (JR.nonce = this.nonce), RR.postBody = (0, yR.db)(JR)
            }
            return RR
          }
        }
        const QJ = {
          USER_NOT_FOUND: "user-not-found"
        };
        class FJ extends PJ {
          constructor(RR) {
            super("phone", "phone"), this.params = RR
          }
          static _fromVerification(RR, JR) {
            return new FJ({
              verificationId: RR,
              verificationCode: JR
            })
          }
          static _fromTokenResponse(RR, JR) {
            return new FJ({
              phoneNumber: RR,
              temporaryProof: JR
            })
          }
          _getIdTokenResponse(RR) {
            return async function(RR, JR) {
              return mR(RR, "POST", "/v1/accounts:signInWithPhoneNumber", cR(RR, JR))
            }(RR, this._makeVerificationRequest())
          }
          _linkToIdToken(RR, JR) {
            return async function(RR, JR) {
              const GR = await mR(RR, "POST", "/v1/accounts:signInWithPhoneNumber", cR(RR, JR));
              if (GR.temporaryProof) throw jR(RR, "account-exists-with-different-credential", GR);
              return GR
            }(RR, Object.assign({
              idToken: JR
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(RR) {
            return async function(RR, JR) {
              return mR(RR, "POST", "/v1/accounts:signInWithPhoneNumber", cR(RR, Object.assign(Object.assign({}, JR), {
                operation: "REAUTH"
              })), QJ)
            }(RR, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: RR,
              phoneNumber: JR,
              verificationId: GR,
              verificationCode: yR
            } = this.params;
            return RR && JR ? {
              temporaryProof: RR,
              phoneNumber: JR
            } : {
              sessionInfo: GR,
              code: yR
            }
          }
          toJSON() {
            const RR = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (RR.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (RR.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (RR.verificationCode = this.params.verificationCode), this.params.verificationId && (RR.verificationId = this.params.verificationId), RR
          }
          static fromJSON(RR) {
            "string" === typeof RR && (RR = JSON.parse(RR));
            const {
              verificationId: JR,
              verificationCode: GR,
              phoneNumber: yR,
              temporaryProof: tR
            } = RR;
            return GR || JR || yR || tR ? new FJ({
              verificationId: JR,
              verificationCode: GR,
              phoneNumber: yR,
              temporaryProof: tR
            }) : null
          }
        }
        class TJ {
          constructor(RR) {
            var JR, GR, tR, uR, ZR, qR;
            const iR = (0, yR.$)((0, yR.s)(RR)),
              fR = null !== (JR = iR.apiKey) && void 0 !== JR ? JR : null,
              VR = null !== (GR = iR.oobCode) && void 0 !== GR ? GR : null,
              KR = function(RR) {
                switch (RR) {
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
              }(null !== (tR = iR.mode) && void 0 !== tR ? tR : null);
            lR(fR && VR && KR, "argument-error"), this.apiKey = fR, this.operation = KR, this.code = VR, this.continueUrl = null !== (uR = iR.continueUrl) && void 0 !== uR ? uR : null, this.languageCode = null !== (ZR = iR.languageCode) && void 0 !== ZR ? ZR : null, this.tenantId = null !== (qR = iR.tenantId) && void 0 !== qR ? qR : null
          }
          static parseLink(RR) {
            const JR = function(RR) {
              const JR = (0, yR.$)((0, yR.s)(RR)).link,
                GR = JR ? (0, yR.$)((0, yR.s)(JR)).deep_link_id : null,
                tR = (0, yR.$)((0, yR.s)(RR)).deep_link_id;
              return (tR ? (0, yR.$)((0, yR.s)(tR)).link : null) || tR || GR || JR || RR
            }(RR);
            try {
              return new TJ(JR)
            } catch (GR) {
              return null
            }
          }
        }

        function sJ(RR) {
          return TJ.parseLink(RR)
        }
        class hJ {
          constructor() {
            this.providerId = hJ.PROVIDER_ID
          }
          static credential(RR, JR) {
            return EJ._fromEmailAndPassword(RR, JR)
          }
          static credentialWithLink(RR, JR) {
            const GR = TJ.parseLink(JR);
            return lR(GR, "argument-error"), EJ._fromEmailAndCode(RR, GR.code, GR.tenantId)
          }
        }
        hJ.PROVIDER_ID = "password", hJ.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", hJ.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class RG {
          constructor(RR) {
            this.providerId = RR, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(RR) {
            this.defaultLanguageCode = RR
          }
          setCustomParameters(RR) {
            return this.customParameters = RR, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class JG extends RG {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(RR) {
            return this.scopes.includes(RR) || this.scopes.push(RR), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class GG extends JG {
          static credentialFromJSON(RR) {
            const JR = "string" === typeof RR ? JSON.parse(RR) : RR;
            return lR("providerId" in JR && "signInMethod" in JR, "argument-error"), kJ._fromParams(JR)
          }
          credential(RR) {
            return this._credential(Object.assign(Object.assign({}, RR), {
              nonce: RR.rawNonce
            }))
          }
          _credential(RR) {
            return lR(RR.idToken || RR.accessToken, "argument-error"), kJ._fromParams(Object.assign(Object.assign({}, RR), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(RR) {
            return GG.oauthCredentialFromTaggedObject(RR)
          }
          static credentialFromError(RR) {
            return GG.oauthCredentialFromTaggedObject(RR.customData || {})
          }
          static oauthCredentialFromTaggedObject(RR) {
            let {
              _tokenResponse: JR
            } = RR;
            if (!JR) return null;
            const {
              oauthIdToken: GR,
              oauthAccessToken: yR,
              oauthTokenSecret: tR,
              pendingToken: uR,
              nonce: ZR,
              providerId: qR
            } = JR;
            if (!yR && !tR && !GR && !uR) return null;
            if (!qR) return null;
            try {
              return new GG(qR)._credential({
                idToken: GR,
                accessToken: yR,
                nonce: ZR,
                pendingToken: uR
              })
            } catch (iR) {
              return null
            }
          }
        }
        class yG extends JG {
          constructor() {
            super("facebook.com")
          }
          static credential(RR) {
            return kJ._fromParams({
              providerId: yG.PROVIDER_ID,
              signInMethod: yG.FACEBOOK_SIGN_IN_METHOD,
              accessToken: RR
            })
          }
          static credentialFromResult(RR) {
            return yG.credentialFromTaggedObject(RR)
          }
          static credentialFromError(RR) {
            return yG.credentialFromTaggedObject(RR.customData || {})
          }
          static credentialFromTaggedObject(RR) {
            let {
              _tokenResponse: JR
            } = RR;
            if (!JR || !("oauthAccessToken" in JR)) return null;
            if (!JR.oauthAccessToken) return null;
            try {
              return yG.credential(JR.oauthAccessToken)
            } catch (GR) {
              return null
            }
          }
        }
        yG.FACEBOOK_SIGN_IN_METHOD = "facebook.com", yG.PROVIDER_ID = "facebook.com";
        class tG extends JG {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(RR, JR) {
            return kJ._fromParams({
              providerId: tG.PROVIDER_ID,
              signInMethod: tG.GOOGLE_SIGN_IN_METHOD,
              idToken: RR,
              accessToken: JR
            })
          }
          static credentialFromResult(RR) {
            return tG.credentialFromTaggedObject(RR)
          }
          static credentialFromError(RR) {
            return tG.credentialFromTaggedObject(RR.customData || {})
          }
          static credentialFromTaggedObject(RR) {
            let {
              _tokenResponse: JR
            } = RR;
            if (!JR) return null;
            const {
              oauthIdToken: GR,
              oauthAccessToken: yR
            } = JR;
            if (!GR && !yR) return null;
            try {
              return tG.credential(GR, yR)
            } catch (tR) {
              return null
            }
          }
        }
        tG.GOOGLE_SIGN_IN_METHOD = "google.com", tG.PROVIDER_ID = "google.com";
        class uG extends JG {
          constructor() {
            super("github.com")
          }
          static credential(RR) {
            return kJ._fromParams({
              providerId: uG.PROVIDER_ID,
              signInMethod: uG.GITHUB_SIGN_IN_METHOD,
              accessToken: RR
            })
          }
          static credentialFromResult(RR) {
            return uG.credentialFromTaggedObject(RR)
          }
          static credentialFromError(RR) {
            return uG.credentialFromTaggedObject(RR.customData || {})
          }
          static credentialFromTaggedObject(RR) {
            let {
              _tokenResponse: JR
            } = RR;
            if (!JR || !("oauthAccessToken" in JR)) return null;
            if (!JR.oauthAccessToken) return null;
            try {
              return uG.credential(JR.oauthAccessToken)
            } catch (GR) {
              return null
            }
          }
        }
        uG.GITHUB_SIGN_IN_METHOD = "github.com", uG.PROVIDER_ID = "github.com";
        class ZG extends PJ {
          constructor(RR, JR) {
            super(RR, RR), this.pendingToken = JR
          }
          _getIdTokenResponse(RR) {
            return YJ(RR, this.buildRequest())
          }
          _linkToIdToken(RR, JR) {
            const GR = this.buildRequest();
            return GR.idToken = JR, YJ(RR, GR)
          }
          _getReauthenticationResolver(RR) {
            const JR = this.buildRequest();
            return JR.autoCreate = !1, YJ(RR, JR)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(RR) {
            const JR = "string" === typeof RR ? JSON.parse(RR) : RR,
              {
                providerId: GR,
                signInMethod: yR,
                pendingToken: tR
              } = JR;
            return GR && yR && tR && GR === yR ? new ZG(GR, tR) : null
          }
          static _create(RR, JR) {
            return new ZG(RR, JR)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class qG extends RG {
          constructor(RR) {
            lR(RR.startsWith("saml."), "argument-error"), super(RR)
          }
          static credentialFromResult(RR) {
            return qG.samlCredentialFromTaggedObject(RR)
          }
          static credentialFromError(RR) {
            return qG.samlCredentialFromTaggedObject(RR.customData || {})
          }
          static credentialFromJSON(RR) {
            const JR = ZG.fromJSON(RR);
            return lR(JR, "argument-error"), JR
          }
          static samlCredentialFromTaggedObject(RR) {
            let {
              _tokenResponse: JR
            } = RR;
            if (!JR) return null;
            const {
              pendingToken: GR,
              providerId: yR
            } = JR;
            if (!GR || !yR) return null;
            try {
              return ZG._create(yR, GR)
            } catch (tR) {
              return null
            }
          }
        }
        class iG extends JG {
          constructor() {
            super("twitter.com")
          }
          static credential(RR, JR) {
            return kJ._fromParams({
              providerId: iG.PROVIDER_ID,
              signInMethod: iG.TWITTER_SIGN_IN_METHOD,
              oauthToken: RR,
              oauthTokenSecret: JR
            })
          }
          static credentialFromResult(RR) {
            return iG.credentialFromTaggedObject(RR)
          }
          static credentialFromError(RR) {
            return iG.credentialFromTaggedObject(RR.customData || {})
          }
          static credentialFromTaggedObject(RR) {
            let {
              _tokenResponse: JR
            } = RR;
            if (!JR) return null;
            const {
              oauthAccessToken: GR,
              oauthTokenSecret: yR
            } = JR;
            if (!GR || !yR) return null;
            try {
              return iG.credential(GR, yR)
            } catch (tR) {
              return null
            }
          }
        }
        async function fG(RR, JR) {
          return mR(RR, "POST", "/v1/accounts:signUp", cR(RR, JR))
        }
        iG.TWITTER_SIGN_IN_METHOD = "twitter.com", iG.PROVIDER_ID = "twitter.com";
        class VG {
          constructor(RR) {
            this.user = RR.user, this.providerId = RR.providerId, this._tokenResponse = RR._tokenResponse, this.operationType = RR.operationType
          }
          static async _fromIdTokenResponse(RR, JR, GR) {
            let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const tR = await yJ._fromIdTokenResponse(RR, GR, yR),
              uR = KG(GR);
            return new VG({
              user: tR,
              providerId: uR,
              _tokenResponse: GR,
              operationType: JR
            })
          }
          static async _forOperation(RR, JR, GR) {
            await RR._updateTokensIfNecessary(GR, !0);
            const yR = KG(GR);
            return new VG({
              user: RR,
              providerId: yR,
              _tokenResponse: GR,
              operationType: JR
            })
          }
        }

        function KG(RR) {
          return RR.providerId ? RR.providerId : "phoneNumber" in RR ? "phone" : null
        }
        async function wG(RR) {
          var JR;
          const GR = xJ(RR);
          if (await GR._initializationPromise, null === (JR = GR.currentUser) || void 0 === JR ? void 0 : JR.isAnonymous) return new VG({
            user: GR.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const yR = await fG(GR, {
              returnSecureToken: !0
            }),
            tR = await VG._fromIdTokenResponse(GR, "signIn", yR, !0);
          return await GR._updateCurrentUser(tR.user), tR
        }
        class rG extends yR.f {
          constructor(RR, JR, GR, yR) {
            var tR;
            super(JR.code, JR.message), this.operationType = GR, this.user = yR, Object.setPrototypeOf(this, rG.prototype), this.customData = {
              appName: RR.name,
              tenantId: null !== (tR = RR.tenantId) && void 0 !== tR ? tR : void 0,
              _serverResponse: JR.customData._serverResponse,
              operationType: GR
            }
          }
          static _fromErrorAndOperation(RR, JR, GR, yR) {
            return new rG(RR, JR, GR, yR)
          }
        }

        function eG(RR, JR, GR, yR) {
          return ("reauthenticate" === JR ? GR._getReauthenticationResolver(RR) : GR._getIdTokenResponse(RR)).catch((GR => {
            if ("auth/multi-factor-auth-required" === GR.code) throw rG._fromErrorAndOperation(RR, GR, JR, yR);
            throw GR
          }))
        }

        function aG(RR) {
          return new Set(RR.map((RR => {
            let {
              providerId: JR
            } = RR;
            return JR
          })).filter((RR => !!RR)))
        }
        async function LG(RR, JR) {
          const GR = (0, yR.C)(RR);
          await UG(!0, GR, JR);
          const {
            providerUserInfo: tR
          } = await async function(RR, JR) {
            return PR(RR, "POST", "/v1/accounts:update", JR)
          }(GR.auth, {
            idToken: await GR.getIdToken(),
            deleteProvider: [JR]
          }), uR = aG(tR || []);
          return GR.providerData = GR.providerData.filter((RR => uR.has(RR.providerId))), uR.has("phone") || (GR.phoneNumber = null), await GR.auth._persistUserIfCurrent(GR), GR
        }
        async function nG(RR, JR) {
          let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const yR = await FR(RR, JR._linkToIdToken(RR.auth, await RR.getIdToken()), GR);
          return VG._forOperation(RR, "link", yR)
        }
        async function UG(RR, JR, GR) {
          await hR(JR);
          const yR = !1 === RR ? "provider-already-linked" : "no-such-provider";
          lR(aG(JR.providerData).has(GR) === RR, JR.auth, yR)
        }
        async function WG(RR, JR) {
          let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: yR
          } = RR, tR = "reauthenticate";
          try {
            const uR = await FR(RR, eG(yR, tR, JR, RR), GR);
            lR(uR.idToken, yR, "internal-error");
            const ZR = QR(uR.idToken);
            lR(ZR, yR, "internal-error");
            const {
              sub: qR
            } = ZR;
            return lR(RR.uid === qR, yR, "user-mismatch"), VG._forOperation(RR, tR, uR)
          } catch (uR) {
            throw "auth/user-not-found" === (null === uR || void 0 === uR ? void 0 : uR.code) && AR(yR, "user-mismatch"), uR
          }
        }
        async function AG(RR, JR) {
          let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const yR = "signIn",
            tR = await eG(RR, yR, JR),
            uR = await VG._fromIdTokenResponse(RR, yR, tR);
          return GR || await RR._updateCurrentUser(uR.user), uR
        }
        async function CG(RR, JR) {
          return AG(xJ(RR), JR)
        }
        async function XG(RR, JR) {
          const GR = (0, yR.C)(RR);
          return await UG(!1, GR, JR.providerId), nG(GR, JR)
        }
        async function MG(RR, JR) {
          return WG((0, yR.C)(RR), JR)
        }
        async function BG(RR, JR) {
          const GR = xJ(RR),
            yR = await async function(RR, JR) {
              return mR(RR, "POST", "/v1/accounts:signInWithCustomToken", cR(RR, JR))
            }(GR, {
              token: JR,
              returnSecureToken: !0
            }), tR = await VG._fromIdTokenResponse(GR, "signIn", yR);
          return await GR._updateCurrentUser(tR.user), tR
        }
        class lG {
          constructor(RR, JR) {
            this.factorId = RR, this.uid = JR.mfaEnrollmentId, this.enrollmentTime = new Date(JR.enrolledAt).toUTCString(), this.displayName = JR.displayName
          }
          static _fromServerResponse(RR, JR) {
            return "phoneInfo" in JR ? pG._fromServerResponse(RR, JR) : "totpInfo" in JR ? gG._fromServerResponse(RR, JR) : AR(RR, "internal-error")
          }
        }
        class pG extends lG {
          constructor(RR) {
            super("phone", RR), this.phoneNumber = RR.phoneInfo
          }
          static _fromServerResponse(RR, JR) {
            return new pG(JR)
          }
        }
        class gG extends lG {
          constructor(RR) {
            super("totp", RR)
          }
          static _fromServerResponse(RR, JR) {
            return new gG(JR)
          }
        }

        function bG(RR, JR, GR) {
          var yR;
          lR((null === (yR = GR.url) || void 0 === yR ? void 0 : yR.length) > 0, RR, "invalid-continue-uri"), lR("undefined" === typeof GR.dynamicLinkDomain || GR.dynamicLinkDomain.length > 0, RR, "invalid-dynamic-link-domain"), JR.continueUrl = GR.url, JR.dynamicLinkDomain = GR.dynamicLinkDomain, JR.canHandleCodeInApp = GR.handleCodeInApp, GR.iOS && (lR(GR.iOS.bundleId.length > 0, RR, "missing-ios-bundle-id"), JR.iOSBundleId = GR.iOS.bundleId), GR.android && (lR(GR.android.packageName.length > 0, RR, "missing-android-pkg-name"), JR.androidInstallApp = GR.android.installApp, JR.androidMinimumVersionCode = GR.android.minimumVersion, JR.androidPackageName = GR.android.packageName)
        }
        async function vG(RR, JR, GR) {
          var yR;
          const tR = xJ(RR),
            uR = {
              requestType: "PASSWORD_RESET",
              email: JR,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (yR = tR._getRecaptchaConfig()) || void 0 === yR ? void 0 : yR.emailPasswordEnabled) {
            const RR = await bJ(tR, uR, "getOobCode", !0);
            GR && bG(tR, RR, GR), await jJ(tR, RR)
          } else GR && bG(tR, uR, GR), await jJ(tR, uR).catch((async RR => {
            if ("auth/missing-recaptcha-token" !== RR.code) return Promise.reject(RR);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const RR = await bJ(tR, uR, "getOobCode", !0);
              GR && bG(tR, RR, GR), await jJ(tR, RR)
            }
          }))
        }
        async function OG(RR, JR, GR) {
          await IJ((0, yR.C)(RR), {
            oobCode: JR,
            newPassword: GR
          })
        }
        async function xG(RR, JR) {
          await async function(RR, JR) {
            return PR(RR, "POST", "/v1/accounts:update", cR(RR, JR))
          }((0, yR.C)(RR), {
            oobCode: JR
          })
        }
        async function NG(RR, JR) {
          const GR = (0, yR.C)(RR),
            tR = await IJ(GR, {
              oobCode: JR
            }),
            uR = tR.requestType;
          switch (lR(uR, GR, "internal-error"), uR) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              lR(tR.newEmail, GR, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              lR(tR.mfaInfo, GR, "internal-error");
            default:
              lR(tR.email, GR, "internal-error")
          }
          let ZR = null;
          return tR.mfaInfo && (ZR = lG._fromServerResponse(xJ(GR), tR.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === tR.requestType ? tR.newEmail : tR.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === tR.requestType ? tR.email : tR.newEmail) || null,
              multiFactorInfo: ZR
            },
            operation: uR
          }
        }
        async function DG(RR, JR) {
          const {
            data: GR
          } = await NG((0, yR.C)(RR), JR);
          return GR.email
        }
        async function HG(RR, JR, GR) {
          var yR;
          const tR = xJ(RR),
            uR = {
              returnSecureToken: !0,
              email: JR,
              password: GR,
              clientType: "CLIENT_TYPE_WEB"
            };
          let ZR;
          if (null === (yR = tR._getRecaptchaConfig()) || void 0 === yR ? void 0 : yR.emailPasswordEnabled) {
            const RR = await bJ(tR, uR, "signUpPassword");
            ZR = fG(tR, RR)
          } else ZR = fG(tR, uR).catch((async RR => {
            if ("auth/missing-recaptcha-token" === RR.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const RR = await bJ(tR, uR, "signUpPassword");
              return fG(tR, RR)
            }
            return Promise.reject(RR)
          }));
          const qR = await ZR.catch((RR => Promise.reject(RR))),
            iR = await VG._fromIdTokenResponse(tR, "signIn", qR);
          return await tR._updateCurrentUser(iR.user), iR
        }

        function oG(RR, JR, GR) {
          return CG((0, yR.C)(RR), hJ.credential(JR, GR))
        }
        async function cG(RR, JR, GR) {
          var yR;
          const tR = xJ(RR),
            uR = {
              requestType: "EMAIL_SIGNIN",
              email: JR,
              clientType: "CLIENT_TYPE_WEB"
            };

          function ZR(RR, JR) {
            lR(JR.handleCodeInApp, tR, "argument-error"), JR && bG(tR, RR, JR)
          }
          if (null === (yR = tR._getRecaptchaConfig()) || void 0 === yR ? void 0 : yR.emailPasswordEnabled) {
            const RR = await bJ(tR, uR, "getOobCode", !0);
            ZR(RR, GR), await dJ(tR, RR)
          } else ZR(uR, GR), await dJ(tR, uR).catch((async RR => {
            if ("auth/missing-recaptcha-token" !== RR.code) return Promise.reject(RR);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const RR = await bJ(tR, uR, "getOobCode", !0);
              ZR(RR, GR), await dJ(tR, RR)
            }
          }))
        }

        function PG(RR, JR) {
          const GR = TJ.parseLink(JR);
          return "EMAIL_SIGNIN" === (null === GR || void 0 === GR ? void 0 : GR.operation)
        }
        async function IG(RR, JR, GR) {
          const tR = (0, yR.C)(RR),
            uR = hJ.credentialWithLink(JR, GR || bR());
          return lR(uR._tenantId === (tR.tenantId || null), tR, "tenant-id-mismatch"), CG(tR, uR)
        }
        async function mG(RR, JR) {
          const GR = {
              identifier: JR,
              continueUri: vR() ? bR() : "http://localhost"
            },
            {
              signinMethods: tR
            } = await async function(RR, JR) {
              return PR(RR, "POST", "/v1/accounts:createAuthUri", cR(RR, JR))
            }((0, yR.C)(RR), GR);
          return tR || []
        }
        async function zG(RR, JR) {
          const GR = (0, yR.C)(RR),
            tR = {
              requestType: "VERIFY_EMAIL",
              idToken: await RR.getIdToken()
            };
          JR && bG(GR.auth, tR, JR);
          const {
            email: uR
          } = await async function(RR, JR) {
            return SJ(RR, JR)
          }(GR.auth, tR);
          uR !== RR.email && await RR.reload()
        }
        async function SG(RR, JR, GR) {
          const tR = (0, yR.C)(RR),
            uR = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await RR.getIdToken(),
              newEmail: JR
            };
          GR && bG(tR.auth, uR, GR);
          const {
            email: ZR
          } = await async function(RR, JR) {
            return SJ(RR, JR)
          }(tR.auth, uR);
          ZR !== RR.email && await RR.reload()
        }
        async function jG(RR, JR) {
          let {
            displayName: GR,
            photoURL: tR
          } = JR;
          if (void 0 === GR && void 0 === tR) return;
          const uR = (0, yR.C)(RR),
            ZR = {
              idToken: await uR.getIdToken(),
              displayName: GR,
              photoUrl: tR,
              returnSecureToken: !0
            },
            qR = await FR(uR, async function(RR, JR) {
              return PR(RR, "POST", "/v1/accounts:update", JR)
            }(uR.auth, ZR));
          uR.displayName = qR.displayName || null, uR.photoURL = qR.photoUrl || null;
          const iR = uR.providerData.find((RR => {
            let {
              providerId: JR
            } = RR;
            return "password" === JR
          }));
          iR && (iR.displayName = uR.displayName, iR.photoURL = uR.photoURL), await uR._updateTokensIfNecessary(qR)
        }

        function dG(RR, JR) {
          return YG((0, yR.C)(RR), JR, null)
        }

        function EG(RR, JR) {
          return YG((0, yR.C)(RR), null, JR)
        }
        async function YG(RR, JR, GR) {
          const {
            auth: yR
          } = RR, tR = {
            idToken: await RR.getIdToken(),
            returnSecureToken: !0
          };
          JR && (tR.email = JR), GR && (tR.password = GR);
          const uR = await FR(RR, mJ(yR, tR));
          await RR._updateTokensIfNecessary(uR, !0)
        }
        class kG {
          constructor(RR, JR) {
            let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = RR, this.providerId = JR, this.profile = GR
          }
        }
        class QG extends kG {
          constructor(RR, JR, GR, yR) {
            super(RR, JR, GR), this.username = yR
          }
        }
        class FG extends kG {
          constructor(RR, JR) {
            super(RR, "facebook.com", JR)
          }
        }
        class TG extends QG {
          constructor(RR, JR) {
            super(RR, "github.com", JR, "string" === typeof(null === JR || void 0 === JR ? void 0 : JR.login) ? null === JR || void 0 === JR ? void 0 : JR.login : null)
          }
        }
        class sG extends kG {
          constructor(RR, JR) {
            super(RR, "google.com", JR)
          }
        }
        class hG extends QG {
          constructor(RR, JR, GR) {
            super(RR, "twitter.com", JR, GR)
          }
        }

        function Ry(RR) {
          const {
            user: JR,
            _tokenResponse: GR
          } = RR;
          return JR.isAnonymous && !GR ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(RR) {
            var JR, GR;
            if (!RR) return null;
            const {
              providerId: yR
            } = RR, tR = RR.rawUserInfo ? JSON.parse(RR.rawUserInfo) : {}, uR = RR.isNewUser || "identitytoolkit#SignupNewUserResponse" === RR.kind;
            if (!yR && (null === RR || void 0 === RR ? void 0 : RR.idToken)) {
              const yR = null === (GR = null === (JR = QR(RR.idToken)) || void 0 === JR ? void 0 : JR.firebase) || void 0 === GR ? void 0 : GR.sign_in_provider;
              if (yR) return new kG(uR, "anonymous" !== yR && "custom" !== yR ? yR : null)
            }
            if (!yR) return null;
            switch (yR) {
              case "facebook.com":
                return new FG(uR, tR);
              case "github.com":
                return new TG(uR, tR);
              case "google.com":
                return new sG(uR, tR);
              case "twitter.com":
                return new hG(uR, tR, RR.screenName || null);
              case "custom":
              case "anonymous":
                return new kG(uR, null);
              default:
                return new kG(uR, yR, tR)
            }
          }(GR)
        }

        function Jy(RR, JR) {
          return (0, yR.C)(RR).setPersistence(JR)
        }

        function Gy(RR) {
          return xJ(RR).initializeRecaptchaConfig()
        }

        function yy(RR, JR, GR, tR) {
          return (0, yR.C)(RR).onIdTokenChanged(JR, GR, tR)
        }

        function ty(RR, JR, GR) {
          return (0, yR.C)(RR).beforeAuthStateChanged(JR, GR)
        }

        function uy(RR, JR, GR, tR) {
          return (0, yR.C)(RR).onAuthStateChanged(JR, GR, tR)
        }

        function Zy(RR) {
          (0, yR.C)(RR).useDeviceLanguage()
        }

        function qy(RR, JR) {
          return (0, yR.C)(RR).updateCurrentUser(JR)
        }

        function iy(RR) {
          return (0, yR.C)(RR).signOut()
        }
        async function fy(RR) {
          return (0, yR.C)(RR).delete()
        }
        class Vy {
          constructor(RR, JR, GR) {
            this.type = RR, this.credential = JR, this.auth = GR
          }
          static _fromIdtoken(RR, JR) {
            return new Vy("enroll", RR, JR)
          }
          static _fromMfaPendingCredential(RR) {
            return new Vy("signin", RR)
          }
          toJSON() {
            const RR = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [RR]: this.credential
              }
            }
          }
          static fromJSON(RR) {
            var JR, GR;
            if (null === RR || void 0 === RR ? void 0 : RR.multiFactorSession) {
              if (null === (JR = RR.multiFactorSession) || void 0 === JR ? void 0 : JR.pendingCredential) return Vy._fromMfaPendingCredential(RR.multiFactorSession.pendingCredential);
              if (null === (GR = RR.multiFactorSession) || void 0 === GR ? void 0 : GR.idToken) return Vy._fromIdtoken(RR.multiFactorSession.idToken)
            }
            return null
          }
        }
        class Ky {
          constructor(RR, JR, GR) {
            this.session = RR, this.hints = JR, this.signInResolver = GR
          }
          static _fromError(RR, JR) {
            const GR = xJ(RR),
              yR = JR.customData._serverResponse,
              tR = (yR.mfaInfo || []).map((RR => lG._fromServerResponse(GR, RR)));
            lR(yR.mfaPendingCredential, GR, "internal-error");
            const uR = Vy._fromMfaPendingCredential(yR.mfaPendingCredential);
            return new Ky(uR, tR, (async RR => {
              const tR = await RR._process(GR, uR);
              delete yR.mfaInfo, delete yR.mfaPendingCredential;
              const ZR = Object.assign(Object.assign({}, yR), {
                idToken: tR.idToken,
                refreshToken: tR.refreshToken
              });
              switch (JR.operationType) {
                case "signIn":
                  const RR = await VG._fromIdTokenResponse(GR, JR.operationType, ZR);
                  return await GR._updateCurrentUser(RR.user), RR;
                case "reauthenticate":
                  return lR(JR.user, GR, "internal-error"), VG._forOperation(JR.user, JR.operationType, ZR);
                default:
                  AR(GR, "internal-error")
              }
            }))
          }
          async resolveSignIn(RR) {
            const JR = RR;
            return this.signInResolver(JR)
          }
        }

        function wy(RR, JR) {
          var GR;
          const tR = (0, yR.C)(RR),
            uR = JR;
          return lR(JR.customData.operationType, tR, "argument-error"), lR(null === (GR = uR.customData._serverResponse) || void 0 === GR ? void 0 : GR.mfaPendingCredential, tR, "argument-error"), Ky._fromError(tR, uR)
        }
        class ry {
          constructor(RR) {
            this.user = RR, this.enrolledFactors = [], RR._onReload((JR => {
              JR.mfaInfo && (this.enrolledFactors = JR.mfaInfo.map((JR => lG._fromServerResponse(RR.auth, JR))))
            }))
          }
          static _fromUser(RR) {
            return new ry(RR)
          }
          async getSession() {
            return Vy._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(RR, JR) {
            const GR = RR,
              yR = await this.getSession(),
              tR = await FR(this.user, GR._process(this.user.auth, yR, JR));
            return await this.user._updateTokensIfNecessary(tR), this.user.reload()
          }
          async unenroll(RR) {
            const JR = "string" === typeof RR ? RR : RR.uid,
              GR = await this.user.getIdToken();
            try {
              const RR = await FR(this.user, (yR = this.user.auth, tR = {
                idToken: GR,
                mfaEnrollmentId: JR
              }, PR(yR, "POST", "/v2/accounts/mfaEnrollment:withdraw", cR(yR, tR))));
              this.enrolledFactors = this.enrolledFactors.filter((RR => {
                let {
                  uid: GR
                } = RR;
                return GR !== JR
              })), await this.user._updateTokensIfNecessary(RR), await this.user.reload()
            } catch (uR) {
              throw uR
            }
            var yR, tR
          }
        }
        const ey = new WeakMap;

        function ay(RR) {
          const JR = (0, yR.C)(RR);
          return ey.has(JR) || ey.set(JR, ry._fromUser(JR)), ey.get(JR)
        }
        const Ly = "__sak";
        class ny {
          constructor(RR, JR) {
            this.storageRetriever = RR, this.type = JR
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(Ly, "1"), this.storage.removeItem(Ly), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (RR) {
              return Promise.resolve(!1)
            }
          }
          _set(RR, JR) {
            return this.storage.setItem(RR, JSON.stringify(JR)), Promise.resolve()
          }
          _get(RR) {
            const JR = this.storage.getItem(RR);
            return Promise.resolve(JR ? JSON.parse(JR) : null)
          }
          _remove(RR) {
            return this.storage.removeItem(RR), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class Uy extends ny {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (RR, JR) => this.onStorageEvent(RR, JR), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const RR = (0, yR.F)();
              return wJ(RR) || UJ(RR)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (RR) {
                return !1
              }
            }(), this.fallbackToPolling = WJ(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(RR) {
            for (const JR of Object.keys(this.listeners)) {
              const GR = this.storage.getItem(JR),
                yR = this.localCache[JR];
              GR !== yR && RR(JR, yR, GR)
            }
          }
          onStorageEvent(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!RR.key) return void this.forAllChangedKeys(((RR, JR, GR) => {
              this.notifyListeners(RR, GR)
            }));
            const GR = RR.key;
            if (JR ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const yR = this.storage.getItem(GR);
              if (RR.newValue !== yR) null !== RR.newValue ? this.storage.setItem(GR, RR.newValue) : this.storage.removeItem(GR);
              else if (this.localCache[GR] === RR.newValue && !JR) return
            }
            const tR = () => {
                const RR = this.storage.getItem(GR);
                (JR || this.localCache[GR] !== RR) && this.notifyListeners(GR, RR)
              },
              uR = this.storage.getItem(GR);
            (0, yR.M)() && 10 === document.documentMode && uR !== RR.newValue && RR.newValue !== RR.oldValue ? setTimeout(tR, 10) : tR()
          }
          notifyListeners(RR, JR) {
            this.localCache[RR] = JR;
            const GR = this.listeners[RR];
            if (GR)
              for (const yR of Array.from(GR)) yR(JR ? JSON.parse(JR) : JR)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((RR, JR, GR) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: RR,
                  oldValue: JR,
                  newValue: GR
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
          _addListener(RR, JR) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[RR] || (this.listeners[RR] = new Set, this.localCache[RR] = this.storage.getItem(RR)), this.listeners[RR].add(JR)
          }
          _removeListener(RR, JR) {
            this.listeners[RR] && (this.listeners[RR].delete(JR), 0 === this.listeners[RR].size && delete this.listeners[RR]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(RR, JR) {
            await super._set(RR, JR), this.localCache[RR] = JSON.stringify(JR)
          }
          async _get(RR) {
            const JR = await super._get(RR);
            return this.localCache[RR] = JSON.stringify(JR), JR
          }
          async _remove(RR) {
            await super._remove(RR), delete this.localCache[RR]
          }
        }
        Uy.type = "LOCAL";
        const Wy = Uy;
        class Ay extends ny {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(RR, JR) {}
          _removeListener(RR, JR) {}
        }
        Ay.type = "SESSION";
        const Cy = Ay;
        class Xy {
          constructor(RR) {
            this.eventTarget = RR, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(RR) {
            const JR = this.receivers.find((JR => JR.isListeningto(RR)));
            if (JR) return JR;
            const GR = new Xy(RR);
            return this.receivers.push(GR), GR
          }
          isListeningto(RR) {
            return this.eventTarget === RR
          }
          async handleEvent(RR) {
            const JR = RR,
              {
                eventId: GR,
                eventType: yR,
                data: tR
              } = JR.data,
              uR = this.handlersMap[yR];
            if (!(null === uR || void 0 === uR ? void 0 : uR.size)) return;
            JR.ports[0].postMessage({
              status: "ack",
              eventId: GR,
              eventType: yR
            });
            const ZR = Array.from(uR).map((async RR => RR(JR.origin, tR))),
              qR = await
            function(RR) {
              return Promise.all(RR.map((async RR => {
                try {
                  return {
                    fulfilled: !0,
                    value: await RR
                  }
                } catch (JR) {
                  return {
                    fulfilled: !1,
                    reason: JR
                  }
                }
              })))
            }(ZR);
            JR.ports[0].postMessage({
              status: "done",
              eventId: GR,
              eventType: yR,
              response: qR
            })
          }
          _subscribe(RR, JR) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[RR] || (this.handlersMap[RR] = new Set), this.handlersMap[RR].add(JR)
          }
          _unsubscribe(RR, JR) {
            this.handlersMap[RR] && JR && this.handlersMap[RR].delete(JR), JR && 0 !== this.handlersMap[RR].size || delete this.handlersMap[RR], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function My() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            GR = "";
          for (let yR = 0; yR < JR; yR++) GR += Math.floor(10 * Math.random());
          return RR + GR
        }
        Xy.receivers = [];
        class By {
          constructor(RR) {
            this.target = RR, this.handlers = new Set
          }
          removeMessageHandler(RR) {
            RR.messageChannel && (RR.messageChannel.port1.removeEventListener("message", RR.DW), RR.messageChannel.port1.close()), this.handlers.delete(RR)
          }
          async _send(RR, JR) {
            let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const yR = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!yR) throw new Error("connection_unavailable");
            let tR, uR;
            return new Promise(((ZR, qR) => {
              const iR = My("", 20);
              yR.port1.start();
              const fR = setTimeout((() => {
                qR(new Error("unsupported_event"))
              }), GR);
              uR = {
                messageChannel: yR,
                DW(RR) {
                  const JR = RR;
                  if (JR.data.eventId === iR) switch (JR.data.status) {
                    case "ack":
                      clearTimeout(fR), tR = setTimeout((() => {
                        qR(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(tR), ZR(JR.data.response);
                      break;
                    default:
                      clearTimeout(fR), clearTimeout(tR), qR(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(uR), yR.port1.addEventListener("message", uR.DW), this.target.postMessage({
                eventType: RR,
                eventId: iR,
                data: JR
              }, [yR.port2])
            })).finally((() => {
              uR && this.removeMessageHandler(uR)
            }))
          }
        }

        function ly() {
          return window
        }

        function py() {
          return "undefined" !== typeof ly().WorkerGlobalScope && "function" === typeof ly().importScripts
        }
        const gy = "firebaseLocalStorageDb",
          by = "firebaseLocalStorage",
          vy = "fbase_key";
        class Oy {
          constructor(RR) {
            this.request = RR
          }
          toPromise() {
            return new Promise(((RR, JR) => {
              this.request.addEventListener("success", (() => {
                RR(this.request.result)
              })), this.request.addEventListener("error", (() => {
                JR(this.request.error)
              }))
            }))
          }
        }

        function xy(RR, JR) {
          return RR.transaction([by], JR ? "readwrite" : "readonly").objectStore(by)
        }

        function Ny() {
          const RR = indexedDB.open(gy, 1);
          return new Promise(((JR, GR) => {
            RR.addEventListener("error", (() => {
              GR(RR.error)
            })), RR.addEventListener("upgradeneeded", (() => {
              const JR = RR.result;
              try {
                JR.createObjectStore(by, {
                  keyPath: vy
                })
              } catch (yR) {
                GR(yR)
              }
            })), RR.addEventListener("success", (async () => {
              const GR = RR.result;
              GR.objectStoreNames.contains(by) ? JR(GR) : (GR.close(), await
                function() {
                  const RR = indexedDB.deleteDatabase(gy);
                  return new Oy(RR).toPromise()
                }(), JR(await Ny()))
            }))
          }))
        }
        async function Dy(RR, JR, GR) {
          const yR = xy(RR, !0).put({
            [vy]: JR,
            value: GR
          });
          return new Oy(yR).toPromise()
        }

        function Hy(RR, JR) {
          const GR = xy(RR, !0).delete(JR);
          return new Oy(GR).toPromise()
        }
        class oy {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await Ny()), this.db
          }
          async _withRetries(RR) {
            let JR = 0;
            for (;;) try {
              const JR = await this._openDb();
              return await RR(JR)
            } catch (GR) {
              if (JR++ > 3) throw GR;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return py() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = Xy._getInstance(py() ? self : null), this.receiver._subscribe("keyChanged", (async (RR, JR) => ({
              keyProcessed: (await this._poll()).includes(JR.key)
            }))), this.receiver._subscribe("ping", (async (RR, JR) => ["keyChanged"]))
          }
          async initializeSender() {
            var RR, JR;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (RR) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new By(this.activeServiceWorker);
            const GR = await this.sender._send("ping", {}, 800);
            GR && (null === (RR = GR[0]) || void 0 === RR ? void 0 : RR.fulfilled) && (null === (JR = GR[0]) || void 0 === JR ? void 0 : JR.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(RR) {
            if (this.sender && this.activeServiceWorker && function() {
                var RR;
                return (null === (RR = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === RR ? void 0 : RR.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: RR
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (JR) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const RR = await Ny();
              return await Dy(RR, Ly, "1"), await Hy(RR, Ly), !0
            } catch (RR) {}
            return !1
          }
          async _withPendingWrite(RR) {
            this.pendingWrites++;
            try {
              await RR()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(RR, JR) {
            return this._withPendingWrite((async () => (await this._withRetries((GR => Dy(GR, RR, JR))), this.localCache[RR] = JR, this.notifyServiceWorker(RR))))
          }
          async _get(RR) {
            const JR = await this._withRetries((JR => async function(RR, JR) {
              const GR = xy(RR, !1).get(JR),
                yR = await new Oy(GR).toPromise();
              return void 0 === yR ? null : yR.value
            }(JR, RR)));
            return this.localCache[RR] = JR, JR
          }
          async _remove(RR) {
            return this._withPendingWrite((async () => (await this._withRetries((JR => Hy(JR, RR))), delete this.localCache[RR], this.notifyServiceWorker(RR))))
          }
          async _poll() {
            const RR = await this._withRetries((RR => {
              const JR = xy(RR, !1).getAll();
              return new Oy(JR).toPromise()
            }));
            if (!RR) return [];
            if (0 !== this.pendingWrites) return [];
            const JR = [],
              GR = new Set;
            for (const {
                fbase_key: yR,
                value: tR
              }
              of RR) GR.add(yR), JSON.stringify(this.localCache[yR]) !== JSON.stringify(tR) && (this.notifyListeners(yR, tR), JR.push(yR));
            for (const yR of Object.keys(this.localCache)) this.localCache[yR] && !GR.has(yR) && (this.notifyListeners(yR, null), JR.push(yR));
            return JR
          }
          notifyListeners(RR, JR) {
            this.localCache[RR] = JR;
            const GR = this.listeners[RR];
            if (GR)
              for (const yR of Array.from(GR)) yR(JR)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(RR, JR) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[RR] || (this.listeners[RR] = new Set, this._get(RR)), this.listeners[RR].add(JR)
          }
          _removeListener(RR, JR) {
            this.listeners[RR] && (this.listeners[RR].delete(JR), 0 === this.listeners[RR].size && delete this.listeners[RR]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        oy.type = "LOCAL";
        const cy = oy;
        const Py = 1e12;
        class Iy {
          constructor(RR) {
            this.auth = RR, this.counter = Py, this._widgets = new Map
          }
          render(RR, JR) {
            const GR = this.counter;
            return this._widgets.set(GR, new my(RR, this.auth.name, JR || {})), this.counter++, GR
          }
          reset(RR) {
            var JR;
            const GR = RR || Py;
            null === (JR = this._widgets.get(GR)) || void 0 === JR || JR.delete(), this._widgets.delete(GR)
          }
          getResponse(RR) {
            var JR;
            const GR = RR || Py;
            return (null === (JR = this._widgets.get(GR)) || void 0 === JR ? void 0 : JR.getResponse()) || ""
          }
          async execute(RR) {
            var JR;
            const GR = RR || Py;
            return null === (JR = this._widgets.get(GR)) || void 0 === JR || JR.execute(), ""
          }
        }
        class my {
          constructor(RR, JR, GR) {
            this.params = GR, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const yR = "string" === typeof RR ? document.getElementById(RR) : RR;
            lR(yR, "argument-error", {
              appName: JR
            }), this.container = yR, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(RR) {
                const JR = [],
                  GR = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let yR = 0; yR < RR; yR++) JR.push(GR.charAt(Math.floor(Math.random() * GR.length)));
                return JR.join("")
              }(50);
              const {
                callback: RR,
                "expired-callback": JR
              } = this.params;
              if (RR) try {
                RR(this.responseToken)
              } catch (GR) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, JR) try {
                  JR()
                } catch (GR) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const zy = pJ("rcb"),
          Sy = new xR(3e4, 6e4);
        class jy {
          constructor() {
            var RR;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (RR = ly().grecaptcha) || void 0 === RR ? void 0 : RR.render)
          }
          load(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return lR(function(RR) {
              return RR.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(RR)
            }(JR), RR, "argument-error"), this.shouldResolveImmediately(JR) && XJ(ly().grecaptcha) ? Promise.resolve(ly().grecaptcha) : new Promise(((GR, tR) => {
              const uR = ly().setTimeout((() => {
                tR(CR(RR, "network-request-failed"))
              }), Sy.get());
              ly()[zy] = () => {
                ly().clearTimeout(uR), delete ly()[zy];
                const yR = ly().grecaptcha;
                if (!yR || !XJ(yR)) return void tR(CR(RR, "internal-error"));
                const ZR = yR.render;
                yR.render = (RR, JR) => {
                  const GR = ZR(RR, JR);
                  return this.counter++, GR
                }, this.hostLanguage = JR, GR(yR)
              };
              lJ(`https://www.google.com/recaptcha/api.js??${(0,yR.db)({onload:zy,render:"explicit",hl:JR})}`).catch((() => {
                clearTimeout(uR), tR(CR(RR, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(RR) {
            var JR;
            return !!(null === (JR = ly().grecaptcha) || void 0 === JR ? void 0 : JR.render) && (RR === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class dy {
          async load(RR) {
            return new Iy(RR)
          }
          clearedOneInstance() {}
        }
        const Ey = "recaptcha",
          Yy = {
            theme: "light",
            type: "image"
          };
        class ky {
          constructor(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, Yy),
              GR = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = JR, this.type = Ey, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = xJ(GR), this.isInvisible = "invisible" === this.parameters.size, lR("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const yR = "string" === typeof RR ? document.getElementById(RR) : RR;
            lR(yR, this.auth, "argument-error"), this.container = yR, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new dy : new jy, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const RR = await this.render(),
              JR = this.getAssertedRecaptcha(),
              GR = JR.getResponse(RR);
            return GR || new Promise((GR => {
              const yR = RR => {
                RR && (this.tokenChangeListeners.delete(yR), GR(RR))
              };
              this.tokenChangeListeners.add(yR), this.isInvisible && JR.execute(RR)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (RR) {
              return Promise.reject(RR)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((RR => {
              throw this.renderPromise = null, RR
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((RR => {
              this.container.removeChild(RR)
            }))
          }
          validateStartingState() {
            lR(!this.parameters.sitekey, this.auth, "argument-error"), lR(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), lR("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(RR) {
            return JR => {
              if (this.tokenChangeListeners.forEach((RR => RR(JR))), "function" === typeof RR) RR(JR);
              else if ("string" === typeof RR) {
                const GR = ly()[RR];
                "function" === typeof GR && GR(JR)
              }
            }
          }
          assertNotDestroyed() {
            lR(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let RR = this.container;
              if (!this.isInvisible) {
                const JR = document.createElement("div");
                RR.appendChild(JR), RR = JR
              }
              this.widgetId = this.getAssertedRecaptcha().render(RR, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            lR(vR() && !py(), this.auth, "internal-error"), await
            function() {
              let RR = null;
              return new Promise((JR => {
                "complete" !== document.readyState ? (RR = () => JR(), window.addEventListener("load", RR)) : JR()
              })).catch((JR => {
                throw RR && window.removeEventListener("load", RR), JR
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const RR = await async function(RR) {
              return (await PR(RR, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            lR(RR, this.auth, "internal-error"), this.parameters.sitekey = RR
          }
          getAssertedRecaptcha() {
            return lR(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class Qy {
          constructor(RR, JR) {
            this.verificationId = RR, this.onConfirmation = JR
          }
          confirm(RR) {
            const JR = FJ._fromVerification(this.verificationId, RR);
            return this.onConfirmation(JR)
          }
        }
        async function Fy(RR, JR, GR) {
          const tR = xJ(RR),
            uR = await hy(tR, JR, (0, yR.C)(GR));
          return new Qy(uR, (RR => CG(tR, RR)))
        }
        async function Ty(RR, JR, GR) {
          const tR = (0, yR.C)(RR);
          await UG(!1, tR, "phone");
          const uR = await hy(tR.auth, JR, (0, yR.C)(GR));
          return new Qy(uR, (RR => XG(tR, RR)))
        }
        async function sy(RR, JR, GR) {
          const tR = (0, yR.C)(RR),
            uR = await hy(tR.auth, JR, (0, yR.C)(GR));
          return new Qy(uR, (RR => MG(tR, RR)))
        }
        async function hy(RR, JR, GR) {
          var yR;
          const tR = await GR.verify();
          try {
            let uR;
            if (lR("string" === typeof tR, RR, "argument-error"), lR(GR.type === Ey, RR, "argument-error"), uR = "string" === typeof JR ? {
                phoneNumber: JR
              } : JR, "session" in uR) {
              const JR = uR.session;
              if ("phoneNumber" in uR) {
                lR("enroll" === JR.type, RR, "internal-error");
                const GR = await
                function(RR, JR) {
                  return PR(RR, "POST", "/v2/accounts/mfaEnrollment:start", cR(RR, JR))
                }(RR, {
                  idToken: JR.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: uR.phoneNumber,
                    recaptchaToken: tR
                  }
                });
                return GR.phoneSessionInfo.sessionInfo
              } {
                lR("signin" === JR.type, RR, "internal-error");
                const GR = (null === (yR = uR.multiFactorHint) || void 0 === yR ? void 0 : yR.uid) || uR.multiFactorUid;
                lR(GR, RR, "missing-multi-factor-info");
                const ZR = await
                function(RR, JR) {
                  return PR(RR, "POST", "/v2/accounts/mfaSignIn:start", cR(RR, JR))
                }(RR, {
                  mfaPendingCredential: JR.credential,
                  mfaEnrollmentId: GR,
                  phoneSignInInfo: {
                    recaptchaToken: tR
                  }
                });
                return ZR.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: JR
              } = await async function(RR, JR) {
                return PR(RR, "POST", "/v1/accounts:sendVerificationCode", cR(RR, JR))
              }(RR, {
                phoneNumber: uR.phoneNumber,
                recaptchaToken: tR
              });
              return JR
            }
          } finally {
            GR._reset()
          }
        }
        async function Rt(RR, JR) {
          await nG((0, yR.C)(RR), JR)
        }
        class Jt {
          constructor(RR) {
            this.providerId = Jt.PROVIDER_ID, this.auth = xJ(RR)
          }
          verifyPhoneNumber(RR, JR) {
            return hy(this.auth, RR, (0, yR.C)(JR))
          }
          static credential(RR, JR) {
            return FJ._fromVerification(RR, JR)
          }
          static credentialFromResult(RR) {
            const JR = RR;
            return Jt.credentialFromTaggedObject(JR)
          }
          static credentialFromError(RR) {
            return Jt.credentialFromTaggedObject(RR.customData || {})
          }
          static credentialFromTaggedObject(RR) {
            let {
              _tokenResponse: JR
            } = RR;
            if (!JR) return null;
            const {
              phoneNumber: GR,
              temporaryProof: yR
            } = JR;
            return GR && yR ? FJ._fromTokenResponse(GR, yR) : null
          }
        }

        function Gt(RR, JR) {
          return JR ? uJ(JR) : (lR(RR._popupRedirectResolver, RR, "argument-error"), RR._popupRedirectResolver)
        }
        Jt.PROVIDER_ID = "phone", Jt.PHONE_SIGN_IN_METHOD = "phone";
        class yt extends PJ {
          constructor(RR) {
            super("custom", "custom"), this.params = RR
          }
          _getIdTokenResponse(RR) {
            return YJ(RR, this._buildIdpRequest())
          }
          _linkToIdToken(RR, JR) {
            return YJ(RR, this._buildIdpRequest(JR))
          }
          _getReauthenticationResolver(RR) {
            return YJ(RR, this._buildIdpRequest())
          }
          _buildIdpRequest(RR) {
            const JR = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return RR && (JR.idToken = RR), JR
          }
        }

        function tt(RR) {
          return AG(RR.auth, new yt(RR), RR.bypassAuthState)
        }

        function ut(RR) {
          const {
            auth: JR,
            user: GR
          } = RR;
          return lR(GR, JR, "internal-error"), WG(GR, new yt(RR), RR.bypassAuthState)
        }
        async function Zt(RR) {
          const {
            auth: JR,
            user: GR
          } = RR;
          return lR(GR, JR, "internal-error"), nG(GR, new yt(RR), RR.bypassAuthState)
        }
        class qt {
          constructor(RR, JR, GR, yR) {
            let tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = RR, this.resolver = GR, this.user = yR, this.bypassAuthState = tR, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(JR) ? JR : [JR]
          }
          execute() {
            return new Promise((async (RR, JR) => {
              this.pendingPromise = {
                resolve: RR,
                reject: JR
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (GR) {
                this.reject(GR)
              }
            }))
          }
          async onAuthEvent(RR) {
            const {
              urlResponse: JR,
              sessionId: GR,
              postBody: yR,
              tenantId: tR,
              error: uR,
              type: ZR
            } = RR;
            if (uR) return void this.reject(uR);
            const qR = {
              auth: this.auth,
              requestUri: JR,
              sessionId: GR,
              tenantId: tR || void 0,
              postBody: yR || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(ZR)(qR))
            } catch (iR) {
              this.reject(iR)
            }
          }
          onError(RR) {
            this.reject(RR)
          }
          getIdpTask(RR) {
            switch (RR) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return tt;
              case "linkViaPopup":
              case "linkViaRedirect":
                return Zt;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return ut;
              default:
                AR(this.auth, "internal-error")
            }
          }
          resolve(RR) {
            gR(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(RR), this.unregisterAndCleanUp()
          }
          reject(RR) {
            gR(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(RR), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const it = new xR(2e3, 1e4);
        async function ft(RR, JR, GR) {
          const yR = xJ(RR);
          MR(RR, JR, RG);
          const tR = Gt(yR, GR);
          return new wt(yR, "signInViaPopup", JR, tR).executeNotNull()
        }
        async function Vt(RR, JR, GR) {
          const tR = (0, yR.C)(RR);
          MR(tR.auth, JR, RG);
          const uR = Gt(tR.auth, GR);
          return new wt(tR.auth, "reauthViaPopup", JR, uR, tR).executeNotNull()
        }
        async function Kt(RR, JR, GR) {
          const tR = (0, yR.C)(RR);
          MR(tR.auth, JR, RG);
          const uR = Gt(tR.auth, GR);
          return new wt(tR.auth, "linkViaPopup", JR, uR, tR).executeNotNull()
        }
        class wt extends qt {
          constructor(RR, JR, GR, yR, tR) {
            super(RR, JR, yR, tR), this.provider = GR, this.authWindow = null, this.pollId = null, wt.currentPopupAction && wt.currentPopupAction.cancel(), wt.currentPopupAction = this
          }
          async executeNotNull() {
            const RR = await this.execute();
            return lR(RR, this.auth, "internal-error"), RR
          }
          async onExecution() {
            gR(1 === this.filter.length, "Popup operations only handle one event");
            const RR = My();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], RR), this.authWindow.associatedEvent = RR, this.resolver._originValidation(this.auth).catch((RR => {
              this.reject(RR)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (RR => {
              RR || this.reject(CR(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var RR;
            return (null === (RR = this.authWindow) || void 0 === RR ? void 0 : RR.associatedEvent) || null
          }
          cancel() {
            this.reject(CR(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, wt.currentPopupAction = null
          }
          pollUserCancellation() {
            const RR = () => {
              var JR, GR;
              (null === (GR = null === (JR = this.authWindow) || void 0 === JR ? void 0 : JR.window) || void 0 === GR ? void 0 : GR.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(CR(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(RR, it.get())
            };
            RR()
          }
        }
        wt.currentPopupAction = null;
        const rt = "pendingRedirect",
          et = new Map;
        class Lt extends qt {
          constructor(RR, JR) {
            super(RR, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], JR, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let RR = et.get(this.auth._key());
            if (!RR) {
              try {
                const JR = await async function(RR, JR) {
                  const GR = At(JR),
                    yR = Wt(RR);
                  if (!await yR._isAvailable()) return !1;
                  const tR = "true" === await yR._get(GR);
                  return await yR._remove(GR), tR
                }(this.resolver, this.auth) ? await super.execute() : null;
                RR = () => Promise.resolve(JR)
              } catch (JR) {
                RR = () => Promise.reject(JR)
              }
              et.set(this.auth._key(), RR)
            }
            return this.bypassAuthState || et.set(this.auth._key(), (() => Promise.resolve(null))), RR()
          }
          async onAuthEvent(RR) {
            if ("signInViaRedirect" === RR.type) return super.onAuthEvent(RR);
            if ("unknown" !== RR.type) {
              if (RR.eventId) {
                const JR = await this.auth._redirectUserForId(RR.eventId);
                if (JR) return this.user = JR, super.onAuthEvent(RR);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function nt(RR, JR) {
          return Wt(RR)._set(At(JR), "true")
        }

        function Ut(RR, JR) {
          et.set(RR._key(), JR)
        }

        function Wt(RR) {
          return uJ(RR._redirectPersistence)
        }

        function At(RR) {
          return iJ(rt, RR.config.apiKey, RR.name)
        }

        function Ct(RR, JR, GR) {
          return async function(RR, JR, GR) {
            const yR = xJ(RR);
            MR(RR, JR, RG), await yR._initializationPromise;
            const tR = Gt(yR, GR);
            return await nt(tR, yR), tR._openRedirect(yR, JR, "signInViaRedirect")
          }(RR, JR, GR)
        }

        function Xt(RR, JR, GR) {
          return async function(RR, JR, GR) {
            const tR = (0, yR.C)(RR);
            MR(tR.auth, JR, RG), await tR.auth._initializationPromise;
            const uR = Gt(tR.auth, GR);
            await nt(uR, tR.auth);
            const ZR = await pt(tR);
            return uR._openRedirect(tR.auth, JR, "reauthViaRedirect", ZR)
          }(RR, JR, GR)
        }

        function Mt(RR, JR, GR) {
          return async function(RR, JR, GR) {
            const tR = (0, yR.C)(RR);
            MR(tR.auth, JR, RG), await tR.auth._initializationPromise;
            const uR = Gt(tR.auth, GR);
            await UG(!1, tR, JR.providerId), await nt(uR, tR.auth);
            const ZR = await pt(tR);
            return uR._openRedirect(tR.auth, JR, "linkViaRedirect", ZR)
          }(RR, JR, GR)
        }
        async function Bt(RR, JR) {
          return await xJ(RR)._initializationPromise, lt(RR, JR, !1)
        }
        async function lt(RR, JR) {
          let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const yR = xJ(RR),
            tR = Gt(yR, JR),
            uR = new Lt(yR, tR, GR),
            ZR = await uR.execute();
          return ZR && !GR && (delete ZR.user._redirectEventId, await yR._persistUserIfCurrent(ZR.user), await yR._setRedirectUser(null, JR)), ZR
        }
        async function pt(RR) {
          const JR = My(`${RR.uid}:::`);
          return RR._redirectEventId = JR, await RR.auth._setRedirectUser(RR), await RR.auth._persistUserIfCurrent(RR), JR
        }
        class gt {
          constructor(RR) {
            this.auth = RR, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(RR) {
            this.consumers.add(RR), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, RR) && (this.sendToConsumer(this.queuedRedirectEvent, RR), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(RR) {
            this.consumers.delete(RR)
          }
          onEvent(RR) {
            if (this.hasEventBeenHandled(RR)) return !1;
            let JR = !1;
            return this.consumers.forEach((GR => {
              this.isEventForConsumer(RR, GR) && (JR = !0, this.sendToConsumer(RR, GR), this.saveEventToCache(RR))
            })), this.hasHandledPotentialRedirect || ! function(RR) {
              switch (RR.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return vt(RR);
                default:
                  return !1
              }
            }(RR) || (this.hasHandledPotentialRedirect = !0, JR || (this.queuedRedirectEvent = RR, JR = !0)), JR
          }
          sendToConsumer(RR, JR) {
            var GR;
            if (RR.error && !vt(RR)) {
              const yR = (null === (GR = RR.error.code) || void 0 === GR ? void 0 : GR.split("auth/")[1]) || "internal-error";
              JR.onError(CR(this.auth, yR))
            } else JR.onAuthEvent(RR)
          }
          isEventForConsumer(RR, JR) {
            const GR = null === JR.eventId || !!RR.eventId && RR.eventId === JR.eventId;
            return JR.filter.includes(RR.type) && GR
          }
          hasEventBeenHandled(RR) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(bt(RR))
          }
          saveEventToCache(RR) {
            this.cachedEventUids.add(bt(RR)), this.lastProcessedEventTime = Date.now()
          }
        }

        function bt(RR) {
          return [RR.type, RR.eventId, RR.sessionId, RR.tenantId].filter((RR => RR)).join("-")
        }

        function vt(RR) {
          let {
            type: JR,
            error: GR
          } = RR;
          return "unknown" === JR && "auth/no-auth-event" === (null === GR || void 0 === GR ? void 0 : GR.code)
        }
        const Ot = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          xt = /^https?/;
        async function Nt(RR) {
          if (RR.config.emulator) return;
          const {
            authorizedDomains: JR
          } = await async function(RR) {
            return PR(RR, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(RR);
          for (const yR of JR) try {
            if (Dt(yR)) return
          } catch (GR) {}
          AR(RR, "unauthorized-domain")
        }

        function Dt(RR) {
          const JR = bR(),
            {
              protocol: GR,
              hostname: yR
            } = new URL(JR);
          if (RR.startsWith("chrome-extension://")) {
            const tR = new URL(RR);
            return "" === tR.hostname && "" === yR ? "chrome-extension:" === GR && RR.replace("chrome-extension://", "") === JR.replace("chrome-extension://", "") : "chrome-extension:" === GR && tR.hostname === yR
          }
          if (!xt.test(GR)) return !1;
          if (Ot.test(RR)) return yR === RR;
          const tR = RR.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + tR + "|" + tR + ")$", "i").test(yR)
        }
        const Ht = new xR(3e4, 6e4);

        function ot() {
          const RR = ly().___jsl;
          if (null === RR || void 0 === RR ? void 0 : RR.H)
            for (const JR of Object.keys(RR.H))
              if (RR.H[JR].r = RR.H[JR].r || [], RR.H[JR].L = RR.H[JR].L || [], RR.H[JR].r = [...RR.H[JR].L], RR.CP)
                for (let GR = 0; GR < RR.CP.length; GR++) RR.CP[GR] = null
        }
        let ct = null;

        function Pt(RR) {
          return ct = ct || function(RR) {
            return new Promise(((JR, GR) => {
              var yR, tR, uR;

              function ZR() {
                ot(), gapi.load("gapi.iframes", {
                  callback: () => {
                    JR(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    ot(), GR(CR(RR, "network-request-failed"))
                  },
                  timeout: Ht.get()
                })
              }
              if (null === (tR = null === (yR = ly().gapi) || void 0 === yR ? void 0 : yR.iframes) || void 0 === tR ? void 0 : tR.Iframe) JR(gapi.iframes.getContext());
              else {
                if (!(null === (uR = ly().gapi) || void 0 === uR ? void 0 : uR.load)) {
                  const JR = pJ("iframefcb");
                  return ly()[JR] = () => {
                    gapi.load ? ZR() : GR(CR(RR, "network-request-failed"))
                  }, lJ(`https://apis.google.com/js/api.js?onload=${JR}`).catch((RR => GR(RR)))
                }
                ZR()
              }
            })).catch((RR => {
              throw ct = null, RR
            }))
          }(RR), ct
        }
        const It = new xR(5e3, 15e3),
          mt = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          zt = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function St(RR) {
          const JR = RR.config;
          lR(JR.authDomain, RR, "auth-domain-config-required");
          const GR = JR.emulator ? NR(JR, "emulator/auth/iframe") : `https://${RR.config.authDomain}/__/auth/iframe`,
            uR = {
              apiKey: JR.apiKey,
              appName: RR.name,
              v: tR.c
            },
            ZR = zt.get(RR.config.apiHost);
          ZR && (uR.eid = ZR);
          const qR = RR._getFrameworks();
          return qR.length && (uR.fw = qR.join(",")), `${GR}?${(0,yR.db)(uR).slice(1)}`
        }
        const jt = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class dt {
          constructor(RR) {
            this.window = RR, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (RR) {}
          }
        }

        function Et(RR, JR, GR) {
          let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const ZR = Math.max((window.screen.availHeight - uR) / 2, 0).toString(),
            qR = Math.max((window.screen.availWidth - tR) / 2, 0).toString();
          let iR = "";
          const fR = Object.assign(Object.assign({}, jt), {
              width: tR.toString(),
              height: uR.toString(),
              top: ZR,
              left: qR
            }),
            VR = (0, yR.F)().toLowerCase();
          GR && (iR = rJ(VR) ? "_blank" : GR), KJ(VR) && (JR = JR || "http://localhost", fR.scrollbars = "yes");
          const KR = Object.entries(fR).reduce(((RR, JR) => {
            let [GR, yR] = JR;
            return `${RR}${GR}=${yR},`
          }), "");
          if (function() {
              var RR;
              return UJ(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, yR.F)()) && !!(null === (RR = window.navigator) || void 0 === RR ? void 0 : RR.standalone)
            }(VR) && "_self" !== iR) return function(RR, JR) {
            const GR = document.createElement("a");
            GR.href = RR, GR.target = JR;
            const yR = document.createEvent("MouseEvent");
            yR.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), GR.dispatchEvent(yR)
          }(JR || "", iR), new dt(null);
          const wR = window.open(JR || "", iR, KR);
          lR(wR, RR, "popup-blocked");
          try {
            wR.focus()
          } catch (rR) {}
          return new dt(wR)
        }
        const Yt = "__/auth/handler",
          kt = "emulator/auth/handler",
          Qt = encodeURIComponent("fac");
        async function Ft(RR, JR, GR, uR, ZR, qR) {
            lR(RR.config.authDomain, RR, "auth-domain-config-required"), lR(RR.config.apiKey, RR, "invalid-api-key");
            const iR = {
              apiKey: RR.config.apiKey,
              appName: RR.name,
              authType: GR,
              redirectUrl: uR,
              v: tR.c,
              eventId: ZR
            };
            if (JR instanceof RG) {
              JR.setDefaultLanguage(RR.languageCode), iR.providerId = JR.providerId || "", (0, yR.J)(JR.getCustomParameters()) || (iR.customParameters = JSON.stringify(JR.getCustomParameters()));
              for (const [RR, JR] of Object.entries(qR || {})) iR[RR] = JR
            }
            if (JR instanceof JG) {
              const RR = JR.getScopes().filter((RR => "" !== RR));
              RR.length > 0 && (iR.scopes = RR.join(","))
            }
            RR.tenantId && (iR.tid = RR.tenantId);
            const fR = iR;
            for (const yR of Object.keys(fR)) void 0 === fR[yR] && delete fR[yR];
            const VR = await RR._getAppCheckToken(),
              KR = VR ? `#${Qt}=${encodeURIComponent(VR)}` : "";
            return `${function(RR){let{config:JR}=RR;if(!JR.emulator)return`
            https: //${JR.authDomain}/${Yt}`;return NR(JR,kt)}(RR)}?${(0,yR.db)(fR).slice(1)}${KR}`}const Tt="webStorageSupport";const st=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cy,this._completeRedirectFn=lt,this._overrideRedirectResult=Ut}async _openPopup(RR,JR,GR,yR){var tR;gR(null===(tR=this.eventManagers[RR._key()])||void 0===tR?void 0:tR.manager,"_initialize() not called before _openPopup()");return Et(RR,await Ft(RR,JR,GR,bR(),yR),My())}async _openRedirect(RR,JR,GR,yR){await this._originValidation(RR);return function(RR){ly().location.href=RR}(await Ft(RR,JR,GR,bR(),yR)),new Promise((()=>{}))}_initialize(RR){const JR=RR._key();if(this.eventManagers[JR]){const{manager:RR,promise:GR}=this.eventManagers[JR];return RR?Promise.resolve(RR):(gR(GR,"If manager is not set, promise should be"),GR)}const GR=this.initAndGetManager(RR);return this.eventManagers[JR]={promise:GR},GR.catch((()=>{delete this.eventManagers[JR]})),GR}async initAndGetManager(RR){const JR=await async function(RR){const JR=await Pt(RR),GR=ly().gapi;return lR(GR,RR,"internal-error"),JR.open({where:document.body,url:St(RR),messageHandlersFilter:GR.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mt,dontclear:!0},(JR=>new Promise((async(GR,yR)=>{await JR.restyle({setHideOnLeave:!1});const tR=CR(RR,"network-request-failed"),uR=ly().setTimeout((()=>{yR(tR)}),It.get());function ZR(){ly().clearTimeout(uR),GR(JR)}JR.ping(ZR).then(ZR,(()=>{yR(tR)}))}))))}(RR),GR=new gt(RR);return JR.register("authEvent",(JR=>{lR(null===JR||void 0===JR?void 0:JR.authEvent,RR,"invalid-auth-event");return{status:GR.onEvent(JR.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[RR._key()]={manager:GR},this.iframes[RR._key()]=JR,GR}_isIframeWebStorageSupported(RR,JR){this.iframes[RR._key()].send(Tt,{type:Tt},(GR=>{var yR;const tR=null===(yR=null===GR||void 0===GR?void 0:GR[0])||void 0===yR?void 0:yR[Tt];void 0!==tR&&JR(!!tR),AR(RR,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(RR){const JR=RR._key();return this.originValidationPromises[JR]||(this.originValidationPromises[JR]=Nt(RR)),this.originValidationPromises[JR]}get _shouldInitProactively(){return WJ()||wJ()||UJ()}};class ht{constructor(RR){this.factorId=RR}_process(RR,JR,GR){switch(JR.type){case"enroll":return this._finalizeEnroll(RR,JR.credential,GR);case"signin":return this._finalizeSignIn(RR,JR.credential);default:return pR("unexpected MultiFactorSessionType")}}}class Ru extends ht{constructor(RR){super("phone"),this.credential=RR}static _fromCredential(RR){return new Ru(RR)}_finalizeEnroll(RR,JR,GR){return function(RR,JR){return PR(RR,"POST","/v2/accounts/mfaEnrollment:finalize",cR(RR,JR))}(RR,{idToken:JR,displayName:GR,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(RR,JR){return function(RR,JR){return PR(RR,"POST","/v2/accounts/mfaSignIn:finalize",cR(RR,JR))}(RR,{mfaPendingCredential:JR,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ju{constructor(){}static assertion(RR){return Ru._fromCredential(RR)}}Ju.FACTOR_ID="phone";class Gu{static assertionForEnrollment(RR,JR){return yu._fromSecret(RR,JR)}static assertionForSignIn(RR,JR){return yu._fromEnrollmentId(RR,JR)}static async generateSecret(RR){const JR=RR;lR("undefined"!==typeof JR.auth,"internal-error");const GR=await(yR=JR.auth,tR={idToken:JR.credential,totpEnrollmentInfo:{}},PR(yR,"POST","/v2/accounts/mfaEnrollment:start",cR(yR,tR)));var yR,tR;return tu._fromStartTotpMfaEnrollmentResponse(GR,JR.auth)}}Gu.FACTOR_ID="totp";class yu extends ht{constructor(RR,JR,GR){super("totp"),this.otp=RR,this.enrollmentId=JR,this.secret=GR}static _fromSecret(RR,JR){return new yu(JR,void 0,RR)}static _fromEnrollmentId(RR,JR){return new yu(JR,RR)}async _finalizeEnroll(RR,JR,GR){return lR("undefined"!==typeof this.secret,RR,"argument-error"),function(RR,JR){return PR(RR,"POST","/v2/accounts/mfaEnrollment:finalize",cR(RR,JR))}(RR,{idToken:JR,displayName:GR,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(RR,JR){lR(void 0!==this.enrollmentId&&void 0!==this.otp,RR,"argument-error");const GR={verificationCode:this.otp};return function(RR,JR){return PR(RR,"POST","/v2/accounts/mfaSignIn:finalize",cR(RR,JR))}(RR,{mfaPendingCredential:JR,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:GR})}}class tu{constructor(RR,JR,GR,yR,tR,uR,ZR){this.sessionInfo=uR,this.auth=ZR,this.secretKey=RR,this.hashingAlgorithm=JR,this.codeLength=GR,this.codeIntervalSeconds=yR,this.enrollmentCompletionDeadline=tR}static _fromStartTotpMfaEnrollmentResponse(RR,JR){return new tu(RR.totpSessionInfo.sharedSecretKey,RR.totpSessionInfo.hashingAlgorithm,RR.totpSessionInfo.verificationCodeLength,RR.totpSessionInfo.periodSec,new Date(RR.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),RR.totpSessionInfo.sessionInfo,JR)}_makeTotpVerificationInfo(RR){return{sessionInfo:this.sessionInfo,verificationCode:RR}}generateQrCodeUrl(RR,JR){var GR;let yR=!1;return(uu(RR)||uu(JR))&&(yR=!0),yR&&(uu(RR)&&(RR=(null===(GR=this.auth.currentUser)||void 0===GR?void 0:GR.email)||"unknownuser"),uu(JR)&&(JR=this.auth.name)),`otpauth://totp/${JR}:${RR}?secret=${this.secretKey}&issuer=${JR}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function uu(RR){return"undefined"===typeof RR||0===(null===RR||void 0===RR?void 0:RR.length)}var Zu="@firebase/auth",qu="0.23.2";class iu{constructor(RR){this.auth=RR,this.internalListeners=new Map}getUid(){var RR;return this.assertAuthConfigured(),(null===(RR=this.auth.currentUser)||void 0===RR?void 0:RR.uid)||null}async getToken(RR){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(RR)}}addAuthTokenListener(RR){if(this.assertAuthConfigured(),this.internalListeners.has(RR))return;const JR=this.auth.onIdTokenChanged((JR=>{RR((null===JR||void 0===JR?void 0:JR.stsTokenManager.accessToken)||null)}));this.internalListeners.set(RR,JR),this.updateProactiveRefresh()}removeAuthTokenListener(RR){this.assertAuthConfigured();const JR=this.internalListeners.get(RR);JR&&(this.internalListeners.delete(RR),JR(),this.updateProactiveRefresh())}assertAuthConfigured(){lR(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const fu=(0,yR.B)("authIdTokenMaxAge")||300;let Vu=null;const Ku=RR=>async JR=>{const GR=JR&&await JR.getIdTokenResult(),yR=GR&&((new Date).getTime()-Date.parse(GR.issuedAtTime))/1e3;if(yR&&yR>fu)return;const tR=null===GR||void 0===GR?void 0:GR.token;Vu!==tR&&(Vu=tR,await fetch(RR,{method:tR?"POST":"DELETE",headers:tR?{Authorization:`Bearer ${tR}`}:{}}))};function wu(){let RR=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,tR.G)();const JR=(0,tR.t)(RR,"auth");if(JR.isInitialized())return JR.getImmediate();const GR=DJ(RR,{popupRedirectResolver:st,persistence:[cy,Wy,Cy]}),uR=(0,yR.B)("authTokenSyncURL");if(uR){const RR=Ku(uR);ty(GR,RR,(()=>RR(GR.currentUser))),yy(GR,(JR=>RR(JR)))}const ZR=(0,yR.x)("auth");return ZR&&HJ(GR,`http://${ZR}`),GR}var ru;ru="Browser",(0,tR.w)(new qR.i("auth",((RR,JR)=>{let{options:GR}=JR;const yR=RR.getProvider("app").getImmediate(),tR=RR.getProvider("heartbeat"),uR=RR.getProvider("app-check-internal"),{apiKey:ZR,authDomain:qR}=yR.options;lR(ZR&&!ZR.includes(":"),"invalid-api-key",{appName:yR.name});const iR={apiKey:ZR,authDomain:qR,clientPlatform:ru,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:AJ(ru)},fR=new OJ(yR,tR,uR,iR);return function(RR,JR){const GR=(null===JR||void 0===JR?void 0:JR.persistence)||[],yR=(Array.isArray(GR)?GR:[GR]).map(uJ);(null===JR||void 0===JR?void 0:JR.errorMap)&&RR._updateErrorMap(JR.errorMap),RR._initializeWithPersistence(yR,null===JR||void 0===JR?void 0:JR.popupRedirectResolver)}(fR,GR),fR}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((RR,JR,GR)=>{RR.getProvider("auth-internal").initialize()}))),(0,tR.w)(new qR.i("auth-internal",(RR=>(RR=>new iu(RR))(xJ(RR.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,tR.M)(Zu,qu,function(RR){switch(RR){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ru)),(0,tR.M)(Zu,qu,"esm2017")}};Object.freeze(modules);for(const RR in modules)Object.freeze(modules[RR]);