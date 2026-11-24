/*! For license information please see 7zvlu.272.8be229ea.chunk.js.LICENSE.txt */
export const id = 272;
export const ids = [272];
export const modules = {
    40634: (BB, jB, zB) => {
        zB.r(jB), zB.d(jB, {
          ActionCodeOperation: () => rB,
          ActionCodeURL: () => vj,
          AuthCredential: () => Aj,
          AuthErrorCodes: () => kB,
          EmailAuthCredential: () => xj,
          EmailAuthProvider: () => Oj,
          FacebookAuthProvider: () => Qz,
          FactorId: () => uB,
          GithubAuthProvider: () => dz,
          GoogleAuthProvider: () => nz,
          OAuthCredential: () => Cj,
          OAuthProvider: () => zz,
          OperationType: () => pB,
          PhoneAuthCredential: () => bj,
          PhoneAuthProvider: () => jn,
          PhoneMultiFactorGenerator: () => Qd,
          ProviderId: () => UB,
          RecaptchaVerifier: () => CQ,
          SAMLAuthProvider: () => Nz,
          SignInMethod: () => aB,
          TotpMultiFactorGenerator: () => nd,
          TotpSecret: () => Id,
          TwitterAuthProvider: () => uz,
          applyActionCode: () => Fz,
          beforeAuthStateChanged: () => nQ,
          browserLocalPersistence: () => LQ,
          browserPopupRedirectResolver: () => Bd,
          browserSessionPersistence: () => tQ,
          checkActionCode: () => Yz,
          confirmPasswordReset: () => Dz,
          connectAuthEmulator: () => hj,
          createUserWithEmailAndPassword: () => hz,
          debugErrorMap: () => JB,
          deleteUser: () => UQ,
          fetchSignInMethodsForEmail: () => Pz,
          getAdditionalUserInfo: () => BQ,
          getAuth: () => md,
          getIdToken: () => xB,
          getIdTokenResult: () => KB,
          getMultiFactorResolver: () => rQ,
          getRedirectResult: () => Mn,
          inMemoryPersistence: () => Nj,
          indexedDBLocalPersistence: () => ZQ,
          initializeAuth: () => Vj,
          initializeRecaptchaConfig: () => zQ,
          isSignInWithEmailLink: () => Az,
          linkWithCredential: () => Sz,
          linkWithPhoneNumber: () => vQ,
          linkWithPopup: () => pn,
          linkWithRedirect: () => Sn,
          multiFactor: () => mQ,
          onAuthStateChanged: () => dQ,
          onIdTokenChanged: () => QQ,
          parseActionCodeURL: () => Rj,
          prodErrorMap: () => mB,
          reauthenticateWithCredential: () => Mz,
          reauthenticateWithPhoneNumber: () => RQ,
          reauthenticateWithPopup: () => an,
          reauthenticateWithRedirect: () => tn,
          reload: () => Bj,
          sendEmailVerification: () => Wz,
          sendPasswordResetEmail: () => Hz,
          sendSignInLinkToEmail: () => Zz,
          setPersistence: () => jQ,
          signInAnonymously: () => rz,
          signInWithCredential: () => tz,
          signInWithCustomToken: () => Ez,
          signInWithEmailAndPassword: () => Xz,
          signInWithEmailLink: () => Tz,
          signInWithPhoneNumber: () => bQ,
          signInWithPopup: () => Un,
          signInWithRedirect: () => gn,
          signOut: () => uQ,
          unlink: () => yz,
          updateCurrentUser: () => NQ,
          updateEmail: () => wz,
          updatePassword: () => xz,
          updatePhoneNumber: () => Bn,
          updateProfile: () => lz,
          useDeviceLanguage: () => IQ,
          verifyBeforeUpdateEmail: () => ez,
          verifyPasswordResetCode: () => Vz
        });
        var QB = zB(40611),
          nB = zB(40601);

        function dB(BB, jB) {
          var zB = {};
          for (var QB in BB) Object.prototype.hasOwnProperty.call(BB, QB) && jB.indexOf(QB) < 0 && (zB[QB] = BB[QB]);
          if (null != BB && "function" === typeof Object.getOwnPropertySymbols) {
            var nB = 0;
            for (QB = Object.getOwnPropertySymbols(BB); nB < QB.length; nB++) jB.indexOf(QB[nB]) < 0 && Object.prototype.propertyIsEnumerable.call(BB, QB[nB]) && (zB[QB[nB]] = BB[QB[nB]])
          }
          return zB
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var IB = zB(40616),
          NB = zB(40603);
        const uB = {
            PHONE: "phone",
            TOTP: "totp"
          },
          UB = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          aB = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          pB = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          rB = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function sB() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const JB = function() {
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
          mB = sB,
          yB = new QB.d("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          kB = {
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
          GB = new IB.c("@firebase/auth");

        function LB(BB) {
          if (GB.logLevel <= IB.b.ERROR) {
            for (var jB = arguments.length, zB = new Array(jB > 1 ? jB - 1 : 0), QB = 1; QB < jB; QB++) zB[QB - 1] = arguments[QB];
            GB.error(`Auth (${nB.e}): ${BB}`, ...zB)
          }
        }

        function gB(BB) {
          for (var jB = arguments.length, zB = new Array(jB > 1 ? jB - 1 : 0), QB = 1; QB < jB; QB++) zB[QB - 1] = arguments[QB];
          throw EB(BB, ...zB)
        }

        function tB(BB) {
          for (var jB = arguments.length, zB = new Array(jB > 1 ? jB - 1 : 0), QB = 1; QB < jB; QB++) zB[QB - 1] = arguments[QB];
          return EB(BB, ...zB)
        }

        function SB(BB, jB, zB) {
          const nB = Object.assign(Object.assign({}, mB()), {
            [jB]: zB
          });
          return new QB.d("auth", "Firebase", nB).create(jB, {
            appName: BB.name
          })
        }

        function MB(BB, jB, zB) {
          if (!(jB instanceof zB)) throw zB.name !== jB.constructor.name && gB(BB, "argument-error"), SB(BB, "argument-error", `Type of ${jB.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function EB(BB) {
          for (var jB = arguments.length, zB = new Array(jB > 1 ? jB - 1 : 0), QB = 1; QB < jB; QB++) zB[QB - 1] = arguments[QB];
          if ("string" !== typeof BB) {
            const jB = zB[0],
              QB = [...zB.slice(1)];
            return QB[0] && (QB[0].appName = BB.name), BB._errorFactory.create(jB, ...QB)
          }
          return yB.create(BB, ...zB)
        }

        function iB(BB, jB) {
          if (!BB) {
            for (var zB = arguments.length, QB = new Array(zB > 2 ? zB - 2 : 0), nB = 2; nB < zB; nB++) QB[nB - 2] = arguments[nB];
            throw EB(jB, ...QB)
          }
        }

        function qB(BB) {
          const jB = "INTERNAL ASSERTION FAILED: " + BB;
          throw LB(jB), new Error(jB)
        }

        function fB(BB, jB) {
          BB || qB(jB)
        }

        function oB() {
          var BB;
          return "undefined" !== typeof self && (null === (BB = self.location) || void 0 === BB ? void 0 : BB.href) || ""
        }

        function HB() {
          return "http:" === DB() || "https:" === DB()
        }

        function DB() {
          var BB;
          return "undefined" !== typeof self && (null === (BB = self.location) || void 0 === BB ? void 0 : BB.protocol) || null
        }
        class FB {
          constructor(BB, jB) {
            this.shortDelay = BB, this.longDelay = jB, fB(jB > BB, "Short delay should be less than long delay!"), this.isMobile = (0, QB.T)() || (0, QB.W)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (HB() || (0, QB.K)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function YB(BB, jB) {
          fB(BB.emulator, "Emulator should always be set here");
          const {
            url: zB
          } = BB.emulator;
          return jB ? `${zB}${jB.startsWith("/")?jB.slice(1):jB}` : zB
        }
        class VB {
          static initialize(BB, jB, zB) {
            this.fetchImpl = BB, jB && (this.headersImpl = jB), zB && (this.responseImpl = zB)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void qB("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void qB("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void qB("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const hB = {
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
          XB = new FB(3e4, 6e4);

        function ZB(BB, jB) {
          return BB.tenantId && !jB.tenantId ? Object.assign(Object.assign({}, jB), {
            tenantId: BB.tenantId
          }) : jB
        }
        async function AB(BB, jB, zB, nB) {
          return TB(BB, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let dB = {},
              IB = {};
            nB && ("GET" === jB ? IB = nB : dB = {
              body: JSON.stringify(nB)
            });
            const NB = (0, QB.$)(Object.assign({
                key: BB.config.apiKey
              }, IB)).slice(1),
              uB = await BB._getAdditionalHeaders();
            return uB["Content-Type"] = "application/json", BB.languageCode && (uB["X-Firebase-Locale"] = BB.languageCode), VB.fetch()(WB(BB, BB.config.apiHost, zB, NB), Object.assign({
              method: jB,
              headers: uB,
              referrerPolicy: "no-referrer"
            }, dB))
          }))
        }
        async function TB(BB, jB, zB) {
          BB._canInitEmulator = !1;
          const nB = Object.assign(Object.assign({}, hB), jB);
          try {
            const jB = new eB(BB),
              QB = await Promise.race([zB(), jB.promise]);
            jB.clearNetworkTimeout();
            const dB = await QB.json();
            if ("needConfirmation" in dB) throw lB(BB, "account-exists-with-different-credential", dB);
            if (QB.ok && !("errorMessage" in dB)) return dB;
            {
              const jB = QB.ok ? dB.errorMessage : dB.error.message,
                [zB, IB] = jB.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === zB) throw lB(BB, "credential-already-in-use", dB);
              if ("EMAIL_EXISTS" === zB) throw lB(BB, "email-already-in-use", dB);
              if ("USER_DISABLED" === zB) throw lB(BB, "user-disabled", dB);
              const NB = nB[zB] || zB.toLowerCase().replace(/[_\s]+/g, "-");
              if (IB) throw SB(BB, NB, IB);
              gB(BB, NB)
            }
          } catch (dB) {
            if (dB instanceof QB.g) throw dB;
            gB(BB, "network-request-failed", {
              message: String(dB)
            })
          }
        }
        async function PB(BB, jB, zB, QB) {
          let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const dB = await AB(BB, jB, zB, QB, nB);
          return "mfaPendingCredential" in dB && gB(BB, "multi-factor-auth-required", {
            _serverResponse: dB
          }), dB
        }

        function WB(BB, jB, zB, QB) {
          const nB = `${jB}${zB}?${QB}`;
          return BB.config.emulator ? YB(BB.config, nB) : `${BB.config.apiScheme}://${nB}`
        }
        class eB {
          constructor(BB) {
            this.auth = BB, this.timer = null, this.promise = new Promise(((BB, jB) => {
              this.timer = setTimeout((() => jB(tB(this.auth, "network-request-failed"))), XB.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function lB(BB, jB, zB) {
          const QB = {
            appName: BB.name
          };
          zB.email && (QB.email = zB.email), zB.phoneNumber && (QB.phoneNumber = zB.phoneNumber);
          const nB = tB(BB, jB, QB);
          return nB.customData._tokenResponse = zB, nB
        }

        function wB(BB) {
          if (BB) try {
            const jB = new Date(Number(BB));
            if (!isNaN(jB.getTime())) return jB.toUTCString()
          } catch (jB) {}
        }

        function xB(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, QB.H)(BB).getIdToken(jB)
        }
        async function KB(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const zB = (0, QB.H)(BB),
            nB = await zB.getIdToken(jB),
            dB = cB(nB);
          iB(dB && dB.exp && dB.auth_time && dB.iat, zB.auth, "internal-error");
          const IB = "object" === typeof dB.firebase ? dB.firebase : void 0,
            NB = null === IB || void 0 === IB ? void 0 : IB.sign_in_provider;
          return {
            claims: dB,
            token: nB,
            authTime: wB(CB(dB.auth_time)),
            issuedAtTime: wB(CB(dB.iat)),
            expirationTime: wB(CB(dB.exp)),
            signInProvider: NB || null,
            signInSecondFactor: (null === IB || void 0 === IB ? void 0 : IB.sign_in_second_factor) || null
          }
        }

        function CB(BB) {
          return 1e3 * Number(BB)
        }

        function cB(BB) {
          const [jB, zB, nB] = BB.split(".");
          if (void 0 === jB || void 0 === zB || void 0 === nB) return LB("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const BB = (0, QB.l)(zB);
            return BB ? JSON.parse(BB) : (LB("Failed to decode base64 JWT payload"), null)
          } catch (dB) {
            return LB("Caught error parsing JWT payload as JSON", null === dB || void 0 === dB ? void 0 : dB.toString()), null
          }
        }
        async function bB(BB, jB) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return jB;
          try {
            return await jB
          } catch (zB) {
            throw zB instanceof QB.g && function(BB) {
              let {
                code: jB
              } = BB;
              return "auth/user-disabled" === jB || "auth/user-token-expired" === jB
            }(zB) && BB.auth.currentUser === BB && await BB.auth.signOut(), zB
          }
        }
        class vB {
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
            var jB;
            if (BB) {
              const BB = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), BB
            } {
              this.errorBackoff = 3e4;
              const BB = (null !== (jB = this.user.stsTokenManager.expirationTime) && void 0 !== jB ? jB : 0) - Date.now() - 3e5;
              return Math.max(0, BB)
            }
          }
          schedule() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const jB = this.getInterval(BB);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), jB)
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
        class RB {
          constructor(BB, jB) {
            this.createdAt = BB, this.lastLoginAt = jB, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = wB(this.lastLoginAt), this.creationTime = wB(this.createdAt)
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
        async function OB(BB) {
          var jB;
          const zB = BB.auth,
            QB = await BB.getIdToken(),
            nB = await bB(BB, async function(BB, jB) {
              return AB(BB, "POST", "/v1/accounts:lookup", jB)
            }(zB, {
              idToken: QB
            }));
          iB(null === nB || void 0 === nB ? void 0 : nB.users.length, zB, "internal-error");
          const IB = nB.users[0];
          BB._notifyReloadListener(IB);
          const NB = (null === (jB = IB.providerUserInfo) || void 0 === jB ? void 0 : jB.length) ? IB.providerUserInfo.map((BB => {
            var {
              providerId: jB
            } = BB, zB = dB(BB, ["providerId"]);
            return {
              providerId: jB,
              uid: zB.rawId || "",
              displayName: zB.displayName || null,
              email: zB.email || null,
              phoneNumber: zB.phoneNumber || null,
              photoURL: zB.photoUrl || null
            }
          })) : [];
          const uB = (UB = BB.providerData, aB = NB, [...UB.filter((BB => !aB.some((jB => jB.providerId === BB.providerId)))), ...aB]);
          var UB, aB;
          const pB = BB.isAnonymous,
            rB = !(BB.email && IB.passwordHash) && !(null === uB || void 0 === uB ? void 0 : uB.length),
            sB = !!pB && rB,
            JB = {
              uid: IB.localId,
              displayName: IB.displayName || null,
              photoURL: IB.photoUrl || null,
              email: IB.email || null,
              emailVerified: IB.emailVerified || !1,
              phoneNumber: IB.phoneNumber || null,
              tenantId: IB.tenantId || null,
              providerData: uB,
              metadata: new RB(IB.createdAt, IB.lastLoginAt),
              isAnonymous: sB
            };
          Object.assign(BB, JB)
        }
        async function Bj(BB) {
          const jB = (0, QB.H)(BB);
          await OB(jB), await jB.auth._persistUserIfCurrent(jB), jB.auth._notifyListenersIfCurrent(jB)
        }
        class jj {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(BB) {
            iB(BB.idToken, "internal-error"), iB("undefined" !== typeof BB.idToken, "internal-error"), iB("undefined" !== typeof BB.refreshToken, "internal-error");
            const jB = "expiresIn" in BB && "undefined" !== typeof BB.expiresIn ? Number(BB.expiresIn) : function(BB) {
              const jB = cB(BB);
              return iB(jB, "internal-error"), iB("undefined" !== typeof jB.exp, "internal-error"), iB("undefined" !== typeof jB.iat, "internal-error"), Number(jB.exp) - Number(jB.iat)
            }(BB.idToken);
            this.updateTokensAndExpiration(BB.idToken, BB.refreshToken, jB)
          }
          async getToken(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return iB(!this.accessToken || this.refreshToken, BB, "user-token-expired"), jB || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(BB, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(BB, jB) {
            const {
              accessToken: zB,
              refreshToken: nB,
              expiresIn: dB
            } = await async function(BB, jB) {
              const zB = await TB(BB, {}, (async () => {
                const zB = (0, QB.$)({
                    grant_type: "refresh_token",
                    refresh_token: jB
                  }).slice(1),
                  {
                    tokenApiHost: nB,
                    apiKey: dB
                  } = BB.config,
                  IB = WB(BB, nB, "/v1/token", `key=${dB}`),
                  NB = await BB._getAdditionalHeaders();
                return NB["Content-Type"] = "application/x-www-form-urlencoded", VB.fetch()(IB, {
                  method: "POST",
                  headers: NB,
                  body: zB
                })
              }));
              return {
                accessToken: zB.access_token,
                expiresIn: zB.expires_in,
                refreshToken: zB.refresh_token
              }
            }(BB, jB);
            this.updateTokensAndExpiration(zB, nB, Number(dB))
          }
          updateTokensAndExpiration(BB, jB, zB) {
            this.refreshToken = jB || null, this.accessToken = BB || null, this.expirationTime = Date.now() + 1e3 * zB
          }
          static fromJSON(BB, jB) {
            const {
              refreshToken: zB,
              accessToken: QB,
              expirationTime: nB
            } = jB, dB = new jj;
            return zB && (iB("string" === typeof zB, "internal-error", {
              appName: BB
            }), dB.refreshToken = zB), QB && (iB("string" === typeof QB, "internal-error", {
              appName: BB
            }), dB.accessToken = QB), nB && (iB("number" === typeof nB, "internal-error", {
              appName: BB
            }), dB.expirationTime = nB), dB
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
            return Object.assign(new jj, this.toJSON())
          }
          _performRefresh() {
            return qB("not implemented")
          }
        }

        function zj(BB, jB) {
          iB("string" === typeof BB || "undefined" === typeof BB, "internal-error", {
            appName: jB
          })
        }
        class Qj {
          constructor(BB) {
            var {
              uid: jB,
              auth: zB,
              stsTokenManager: QB
            } = BB, nB = dB(BB, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new vB(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = jB, this.auth = zB, this.stsTokenManager = QB, this.accessToken = QB.accessToken, this.displayName = nB.displayName || null, this.email = nB.email || null, this.emailVerified = nB.emailVerified || !1, this.phoneNumber = nB.phoneNumber || null, this.photoURL = nB.photoURL || null, this.isAnonymous = nB.isAnonymous || !1, this.tenantId = nB.tenantId || null, this.providerData = nB.providerData ? [...nB.providerData] : [], this.metadata = new RB(nB.createdAt || void 0, nB.lastLoginAt || void 0)
          }
          async getIdToken(BB) {
            const jB = await bB(this, this.stsTokenManager.getToken(this.auth, BB));
            return iB(jB, this.auth, "internal-error"), this.accessToken !== jB && (this.accessToken = jB, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), jB
          }
          getIdTokenResult(BB) {
            return KB(this, BB)
          }
          reload() {
            return Bj(this)
          }
          _assign(BB) {
            this !== BB && (iB(this.uid === BB.uid, this.auth, "internal-error"), this.displayName = BB.displayName, this.photoURL = BB.photoURL, this.email = BB.email, this.emailVerified = BB.emailVerified, this.phoneNumber = BB.phoneNumber, this.isAnonymous = BB.isAnonymous, this.tenantId = BB.tenantId, this.providerData = BB.providerData.map((BB => Object.assign({}, BB))), this.metadata._copy(BB.metadata), this.stsTokenManager._assign(BB.stsTokenManager))
          }
          _clone(BB) {
            const jB = new Qj(Object.assign(Object.assign({}, this), {
              auth: BB,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return jB.metadata._copy(this.metadata), jB
          }
          _onReload(BB) {
            iB(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = BB, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
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
            let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              zB = !1;
            BB.idToken && BB.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(BB), zB = !0), jB && await OB(this), await this.auth._persistUserIfCurrent(this), zB && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const BB = await this.getIdToken();
            return await bB(this, async function(BB, jB) {
              return AB(BB, "POST", "/v1/accounts:delete", jB)
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
          static _fromJSON(BB, jB) {
            var zB, QB, nB, dB, IB, NB, uB, UB;
            const aB = null !== (zB = jB.displayName) && void 0 !== zB ? zB : void 0,
              pB = null !== (QB = jB.email) && void 0 !== QB ? QB : void 0,
              rB = null !== (nB = jB.phoneNumber) && void 0 !== nB ? nB : void 0,
              sB = null !== (dB = jB.photoURL) && void 0 !== dB ? dB : void 0,
              JB = null !== (IB = jB.tenantId) && void 0 !== IB ? IB : void 0,
              mB = null !== (NB = jB._redirectEventId) && void 0 !== NB ? NB : void 0,
              yB = null !== (uB = jB.createdAt) && void 0 !== uB ? uB : void 0,
              kB = null !== (UB = jB.lastLoginAt) && void 0 !== UB ? UB : void 0,
              {
                uid: GB,
                emailVerified: LB,
                isAnonymous: gB,
                providerData: tB,
                stsTokenManager: SB
              } = jB;
            iB(GB && SB, BB, "internal-error");
            const MB = jj.fromJSON(this.name, SB);
            iB("string" === typeof GB, BB, "internal-error"), zj(aB, BB.name), zj(pB, BB.name), iB("boolean" === typeof LB, BB, "internal-error"), iB("boolean" === typeof gB, BB, "internal-error"), zj(rB, BB.name), zj(sB, BB.name), zj(JB, BB.name), zj(mB, BB.name), zj(yB, BB.name), zj(kB, BB.name);
            const EB = new Qj({
              uid: GB,
              auth: BB,
              email: pB,
              emailVerified: LB,
              displayName: aB,
              isAnonymous: gB,
              photoURL: sB,
              phoneNumber: rB,
              tenantId: JB,
              stsTokenManager: MB,
              createdAt: yB,
              lastLoginAt: kB
            });
            return tB && Array.isArray(tB) && (EB.providerData = tB.map((BB => Object.assign({}, BB)))), mB && (EB._redirectEventId = mB), EB
          }
          static async _fromIdTokenResponse(BB, jB) {
            let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const QB = new jj;
            QB.updateFromServerResponse(jB);
            const nB = new Qj({
              uid: jB.localId,
              auth: BB,
              stsTokenManager: QB,
              isAnonymous: zB
            });
            return await OB(nB), nB
          }
        }
        const nj = new Map;

        function dj(BB) {
          fB(BB instanceof Function, "Expected a class definition");
          let jB = nj.get(BB);
          return jB ? (fB(jB instanceof BB, "Instance stored in cache mismatched with class"), jB) : (jB = new BB, nj.set(BB, jB), jB)
        }
        class Ij {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(BB, jB) {
            this.storage[BB] = jB
          }
          async _get(BB) {
            const jB = this.storage[BB];
            return void 0 === jB ? null : jB
          }
          async _remove(BB) {
            delete this.storage[BB]
          }
          _addListener(BB, jB) {}
          _removeListener(BB, jB) {}
        }
        Ij.type = "NONE";
        const Nj = Ij;

        function uj(BB, jB, zB) {
          return `firebase:${BB}:${jB}:${zB}`
        }
        class Uj {
          constructor(BB, jB, zB) {
            this.persistence = BB, this.auth = jB, this.userKey = zB;
            const {
              config: QB,
              name: nB
            } = this.auth;
            this.fullUserKey = uj(this.userKey, QB.apiKey, nB), this.fullPersistenceKey = uj("persistence", QB.apiKey, nB), this.boundEventHandler = jB._onStorageEvent.bind(jB), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(BB) {
            return this.persistence._set(this.fullUserKey, BB.toJSON())
          }
          async getCurrentUser() {
            const BB = await this.persistence._get(this.fullUserKey);
            return BB ? Qj._fromJSON(this.auth, BB) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(BB) {
            if (this.persistence === BB) return;
            const jB = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = BB, jB ? this.setCurrentUser(jB) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(BB, jB) {
            let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!jB.length) return new Uj(dj(Nj), BB, zB);
            const QB = (await Promise.all(jB.map((async BB => {
              if (await BB._isAvailable()) return BB
            })))).filter((BB => BB));
            let nB = QB[0] || dj(Nj);
            const dB = uj(zB, BB.config.apiKey, BB.name);
            let IB = null;
            for (const UB of jB) try {
              const jB = await UB._get(dB);
              if (jB) {
                const zB = Qj._fromJSON(BB, jB);
                UB !== nB && (IB = zB), nB = UB;
                break
              }
            } catch (uB) {}
            const NB = QB.filter((BB => BB._shouldAllowMigration));
            return nB._shouldAllowMigration && NB.length ? (nB = NB[0], IB && await nB._set(dB, IB.toJSON()), await Promise.all(jB.map((async BB => {
              if (BB !== nB) try {
                await BB._remove(dB)
              } catch (uB) {}
            }))), new Uj(nB, BB, zB)) : new Uj(nB, BB, zB)
          }
        }

        function aj(BB) {
          const jB = BB.toLowerCase();
          if (jB.includes("opera/") || jB.includes("opr/") || jB.includes("opios/")) return "Opera";
          if (Jj(jB)) return "IEMobile";
          if (jB.includes("msie") || jB.includes("trident/")) return "IE";
          if (jB.includes("edge/")) return "Edge";
          if (pj(jB)) return "Firefox";
          if (jB.includes("silk/")) return "Silk";
          if (yj(jB)) return "Blackberry";
          if (kj(jB)) return "Webos";
          if (rj(jB)) return "Safari";
          if ((jB.includes("chrome/") || sj(jB)) && !jB.includes("edge/")) return "Chrome";
          if (mj(jB)) return "Android";
          {
            const jB = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              zB = BB.match(jB);
            if (2 === (null === zB || void 0 === zB ? void 0 : zB.length)) return zB[1]
          }
          return "Other"
        }

        function pj() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)();
          return /firefox\//i.test(BB)
        }

        function rj() {
          const BB = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)()).toLowerCase();
          return BB.includes("safari/") && !BB.includes("chrome/") && !BB.includes("crios/") && !BB.includes("android")
        }

        function sj() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)();
          return /crios\//i.test(BB)
        }

        function Jj() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)();
          return /iemobile/i.test(BB)
        }

        function mj() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)();
          return /android/i.test(BB)
        }

        function yj() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)();
          return /blackberry/i.test(BB)
        }

        function kj() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)();
          return /webos/i.test(BB)
        }

        function Gj() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)();
          return /iphone|ipad|ipod/i.test(BB) || /macintosh/i.test(BB) && /mobile/i.test(BB)
        }

        function Lj() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)();
          return Gj(BB) || mj(BB) || kj(BB) || yj(BB) || /windows phone/i.test(BB) || Jj(BB)
        }

        function gj(BB) {
          let jB, zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (BB) {
            case "Browser":
              jB = aj((0, QB.J)());
              break;
            case "Worker":
              jB = `${aj((0,QB.J)())}-${BB}`;
              break;
            default:
              jB = BB
          }
          const dB = zB.length ? zB.join(",") : "FirebaseCore-web";
          return `${jB}/JsCore/${nB.e}/${dB}`
        }
        async function tj(BB, jB) {
          return AB(BB, "GET", "/v2/recaptchaConfig", ZB(BB, jB))
        }

        function Sj(BB) {
          return void 0 !== BB && void 0 !== BB.getResponse
        }

        function Mj(BB) {
          return void 0 !== BB && void 0 !== BB.enterprise
        }
        class Ej {
          constructor(BB) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === BB.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = BB.recaptchaKey.split("/")[3], this.emailPasswordEnabled = BB.recaptchaEnforcementState.some((BB => "EMAIL_PASSWORD_PROVIDER" === BB.provider && "OFF" !== BB.enforcementState))
          }
        }

        function ij(BB) {
          return new Promise(((jB, zB) => {
            const QB = document.createElement("script");
            QB.setAttribute("src", BB), QB.onload = jB, QB.onerror = BB => {
                const jB = tB("internal-error");
                jB.customData = BB, zB(jB)
              }, QB.type = "text/javascript", QB.charset = "UTF-8",
              function() {
                var BB, jB;
                return null !== (jB = null === (BB = document.getElementsByTagName("head")) || void 0 === BB ? void 0 : BB[0]) && void 0 !== jB ? jB : document
              }().appendChild(QB)
          }))
        }

        function qj(BB) {
          return `__${BB}${Math.floor(1e6*Math.random())}`
        }
        class fj {
          constructor(BB) {
            this.type = "recaptcha-enterprise", this.auth = Fj(BB)
          }
          async verify() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function zB(jB, zB, QB) {
              const nB = window.grecaptcha;
              Mj(nB) ? nB.enterprise.ready((() => {
                nB.enterprise.execute(jB, {
                  action: BB
                }).then((BB => {
                  zB(BB)
                })).catch((() => {
                  zB("NO_RECAPTCHA")
                }))
              })) : QB(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((BB, QB) => {
              (async function(BB) {
                if (!jB) {
                  if (null == BB.tenantId && null != BB._agentRecaptchaConfig) return BB._agentRecaptchaConfig.siteKey;
                  if (null != BB.tenantId && void 0 !== BB._tenantRecaptchaConfigs[BB.tenantId]) return BB._tenantRecaptchaConfigs[BB.tenantId].siteKey
                }
                return new Promise((async (jB, zB) => {
                  tj(BB, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((QB => {
                    if (void 0 !== QB.recaptchaKey) {
                      const zB = new Ej(QB);
                      return null == BB.tenantId ? BB._agentRecaptchaConfig = zB : BB._tenantRecaptchaConfigs[BB.tenantId] = zB, jB(zB.siteKey)
                    }
                    zB(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((BB => {
                    zB(BB)
                  }))
                }))
              })(this.auth).then((nB => {
                if (!jB && Mj(window.grecaptcha)) zB(nB, BB, QB);
                else {
                  if ("undefined" === typeof window) return void QB(new Error("RecaptchaVerifier is only supported in browser"));
                  ij("https://www.google.com/recaptcha/enterprise.js?render=" + nB).then((() => {
                    zB(nB, BB, QB)
                  })).catch((BB => {
                    QB(BB)
                  }))
                }
              })).catch((BB => {
                QB(BB)
              }))
            }))
          }
        }
        async function oj(BB, jB, zB) {
          let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const nB = new fj(BB);
          let dB;
          try {
            dB = await nB.verify(zB)
          } catch (NB) {
            dB = await nB.verify(zB, !0)
          }
          const IB = Object.assign({}, jB);
          return QB ? Object.assign(IB, {
            captchaResp: dB
          }) : Object.assign(IB, {
            captchaResponse: dB
          }), Object.assign(IB, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(IB, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), IB
        }
        class Hj {
          constructor(BB) {
            this.auth = BB, this.queue = []
          }
          pushCallback(BB, jB) {
            const zB = jB => new Promise(((zB, QB) => {
              try {
                zB(BB(jB))
              } catch (nB) {
                QB(nB)
              }
            }));
            zB.onAbort = jB, this.queue.push(zB);
            const QB = this.queue.length - 1;
            return () => {
              this.queue[QB] = () => Promise.resolve()
            }
          }
          async runMiddleware(BB) {
            if (this.auth.currentUser === BB) return;
            const jB = [];
            try {
              for (const zB of this.queue) await zB(BB), zB.onAbort && jB.push(zB.onAbort)
            } catch (zB) {
              jB.reverse();
              for (const BB of jB) try {
                BB()
              } catch (QB) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === zB || void 0 === zB ? void 0 : zB.message
              })
            }
          }
        }
        class Dj {
          constructor(BB, jB, zB, QB) {
            this.app = BB, this.heartbeatServiceProvider = jB, this.appCheckServiceProvider = zB, this.config = QB, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Yj(this), this.idTokenSubscription = new Yj(this), this.beforeStateQueue = new Hj(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = yB, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = BB.name, this.clientVersion = QB.sdkClientVersion
          }
          _initializeWithPersistence(BB, jB) {
            return jB && (this._popupRedirectResolver = dj(jB)), this._initializationPromise = this.queue((async () => {
              var zB, QB;
              if (!this._deleted && (this.persistenceManager = await Uj.create(this, BB), !this._deleted)) {
                if (null === (zB = this._popupRedirectResolver) || void 0 === zB ? void 0 : zB._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (nB) {}
                await this.initializeCurrentUser(jB), this.lastNotifiedUid = (null === (QB = this.currentUser) || void 0 === QB ? void 0 : QB.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const BB = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || BB ? this.currentUser && BB && this.currentUser.uid === BB.uid ? (this._currentUser._assign(BB), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(BB, !0) : void 0
          }
          async initializeCurrentUser(BB) {
            var jB;
            const zB = await this.assertedPersistence.getCurrentUser();
            let QB = zB,
              nB = !1;
            if (BB && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const zB = null === (jB = this.redirectUser) || void 0 === jB ? void 0 : jB._redirectEventId,
                dB = null === QB || void 0 === QB ? void 0 : QB._redirectEventId,
                IB = await this.tryRedirectSignIn(BB);
              zB && zB !== dB || !(null === IB || void 0 === IB ? void 0 : IB.user) || (QB = IB.user, nB = !0)
            }
            if (!QB) return this.directlySetCurrentUser(null);
            if (!QB._redirectEventId) {
              if (nB) try {
                await this.beforeStateQueue.runMiddleware(QB)
              } catch (dB) {
                QB = zB, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(dB)))
              }
              return QB ? this.reloadAndSetCurrentUserOrClear(QB) : this.directlySetCurrentUser(null)
            }
            return iB(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === QB._redirectEventId ? this.directlySetCurrentUser(QB) : this.reloadAndSetCurrentUserOrClear(QB)
          }
          async tryRedirectSignIn(BB) {
            let jB = null;
            try {
              jB = await this._popupRedirectResolver._completeRedirectFn(this, BB, !0)
            } catch (zB) {
              await this._setRedirectUser(null)
            }
            return jB
          }
          async reloadAndSetCurrentUserOrClear(BB) {
            try {
              await OB(BB)
            } catch (jB) {
              if ("auth/network-request-failed" !== (null === jB || void 0 === jB ? void 0 : jB.code)) return this.directlySetCurrentUser(null)
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
            const jB = BB ? (0, QB.H)(BB) : null;
            return jB && iB(jB.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(jB && jB._clone(this))
          }
          async _updateCurrentUser(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return BB && iB(this.tenantId === BB.tenantId, this, "tenant-id-mismatch"), jB || await this.beforeStateQueue.runMiddleware(BB), this.queue((async () => {
              await this.directlySetCurrentUser(BB), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(BB) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(dj(BB))
            }))
          }
          async initializeRecaptchaConfig() {
            const BB = await tj(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              jB = new Ej(BB);
            if (null == this.tenantId ? this._agentRecaptchaConfig = jB : this._tenantRecaptchaConfigs[this.tenantId] = jB, jB.emailPasswordEnabled) {
              new fj(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(BB) {
            this._errorFactory = new QB.d("auth", "Firebase", BB())
          }
          onAuthStateChanged(BB, jB, zB) {
            return this.registerStateListener(this.authStateSubscription, BB, jB, zB)
          }
          beforeAuthStateChanged(BB, jB) {
            return this.beforeStateQueue.pushCallback(BB, jB)
          }
          onIdTokenChanged(BB, jB, zB) {
            return this.registerStateListener(this.idTokenSubscription, BB, jB, zB)
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
          async _setRedirectUser(BB, jB) {
            const zB = await this.getOrInitRedirectPersistenceManager(jB);
            return null === BB ? zB.removeCurrentUser() : zB.setCurrentUser(BB)
          }
          async getOrInitRedirectPersistenceManager(BB) {
            if (!this.redirectPersistenceManager) {
              const jB = BB && dj(BB) || this._popupRedirectResolver;
              iB(jB, this, "argument-error"), this.redirectPersistenceManager = await Uj.create(this, [dj(jB._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(BB) {
            var jB, zB;
            return this._isInitialized && await this.queue((async () => {})), (null === (jB = this._currentUser) || void 0 === jB ? void 0 : jB._redirectEventId) === BB ? this._currentUser : (null === (zB = this.redirectUser) || void 0 === zB ? void 0 : zB._redirectEventId) === BB ? this.redirectUser : null
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
            var BB, jB;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const zB = null !== (jB = null === (BB = this.currentUser) || void 0 === BB ? void 0 : BB.uid) && void 0 !== jB ? jB : null;
            this.lastNotifiedUid !== zB && (this.lastNotifiedUid = zB, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(BB, jB, zB, QB) {
            if (this._deleted) return () => {};
            const nB = "function" === typeof jB ? jB : jB.next.bind(jB),
              dB = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return iB(dB, this, "internal-error"), dB.then((() => nB(this.currentUser))), "function" === typeof jB ? BB.addObserver(jB, zB, QB) : BB.addObserver(jB)
          }
          async directlySetCurrentUser(BB) {
            this.currentUser && this.currentUser !== BB && this._currentUser._stopProactiveRefresh(), BB && this.isProactiveRefreshEnabled && BB._startProactiveRefresh(), this.currentUser = BB, BB ? await this.assertedPersistence.setCurrentUser(BB) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(BB) {
            return this.operations = this.operations.then(BB, BB), this.operations
          }
          get assertedPersistence() {
            return iB(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(BB) {
            BB && !this.frameworks.includes(BB) && (this.frameworks.push(BB), this.frameworks.sort(), this.clientVersion = gj(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var BB;
            const jB = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (jB["X-Firebase-gmpid"] = this.app.options.appId);
            const zB = await (null === (BB = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === BB ? void 0 : BB.getHeartbeatsHeader());
            zB && (jB["X-Firebase-Client"] = zB);
            const QB = await this._getAppCheckToken();
            return QB && (jB["X-Firebase-AppCheck"] = QB), jB
          }
          async _getAppCheckToken() {
            var BB;
            const jB = await (null === (BB = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === BB ? void 0 : BB.getToken());
            return (null === jB || void 0 === jB ? void 0 : jB.error) && function(BB) {
              if (GB.logLevel <= IB.b.WARN) {
                for (var jB = arguments.length, zB = new Array(jB > 1 ? jB - 1 : 0), QB = 1; QB < jB; QB++) zB[QB - 1] = arguments[QB];
                GB.warn(`Auth (${nB.e}): ${BB}`, ...zB)
              }
            }(`Error while retrieving App Check token: ${jB.error}`), null === jB || void 0 === jB ? void 0 : jB.token
          }
        }

        function Fj(BB) {
          return (0, QB.H)(BB)
        }
        class Yj {
          constructor(BB) {
            this.auth = BB, this.observer = null, this.addObserver = (0, QB.u)((BB => this.observer = BB))
          }
          get next() {
            return iB(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function Vj(BB, jB) {
          const zB = (0, nB.z)(BB, "auth");
          if (zB.isInitialized()) {
            const BB = zB.getImmediate(),
              nB = zB.getOptions();
            if ((0, QB.x)(nB, null !== jB && void 0 !== jB ? jB : {})) return BB;
            gB(BB, "already-initialized")
          }
          return zB.initialize({
            options: jB
          })
        }

        function hj(BB, jB, zB) {
          const QB = Fj(BB);
          iB(QB._canInitEmulator, QB, "emulator-config-failed"), iB(/^https?:\/\//.test(jB), QB, "invalid-emulator-scheme");
          const nB = !!(null === zB || void 0 === zB ? void 0 : zB.disableWarnings),
            dB = Xj(jB),
            {
              host: IB,
              port: NB
            } = function(BB) {
              const jB = Xj(BB),
                zB = /(\/\/)?([^?#/]+)/.exec(BB.substr(jB.length));
              if (!zB) return {
                host: "",
                port: null
              };
              const QB = zB[2].split("@").pop() || "",
                nB = /^(\[[^\]]+\])(:|$)/.exec(QB);
              if (nB) {
                const BB = nB[1];
                return {
                  host: BB,
                  port: Zj(QB.substr(BB.length + 1))
                }
              } {
                const [BB, jB] = QB.split(":");
                return {
                  host: BB,
                  port: Zj(jB)
                }
              }
            }(jB),
            uB = null === NB ? "" : `:${NB}`;
          QB.config.emulator = {
            url: `${dB}//${IB}${uB}/`
          }, QB.settings.appVerificationDisabledForTesting = !0, QB.emulatorConfig = Object.freeze({
            host: IB,
            port: NB,
            protocol: dB.replace(":", ""),
            options: Object.freeze({
              disableWarnings: nB
            })
          }), nB || function() {
            function BB() {
              const BB = document.createElement("p"),
                jB = BB.style;
              BB.innerText = "Running in emulator mode. Do not use with production credentials.", jB.position = "fixed", jB.width = "100%", jB.backgroundColor = "#ffffff", jB.border = ".1em solid #000000", jB.color = "#b50000", jB.bottom = "0px", jB.left = "0px", jB.margin = "0px", jB.zIndex = "10000", jB.textAlign = "center", BB.classList.add("firebase-emulator-warning"), document.body.appendChild(BB)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", BB) : BB())
          }()
        }

        function Xj(BB) {
          const jB = BB.indexOf(":");
          return jB < 0 ? "" : BB.substr(0, jB + 1)
        }

        function Zj(BB) {
          if (!BB) return null;
          const jB = Number(BB);
          return isNaN(jB) ? null : jB
        }
        class Aj {
          constructor(BB, jB) {
            this.providerId = BB, this.signInMethod = jB
          }
          toJSON() {
            return qB("not implemented")
          }
          _getIdTokenResponse(BB) {
            return qB("not implemented")
          }
          _linkToIdToken(BB, jB) {
            return qB("not implemented")
          }
          _getReauthenticationResolver(BB) {
            return qB("not implemented")
          }
        }
        async function Tj(BB, jB) {
          return AB(BB, "POST", "/v1/accounts:resetPassword", ZB(BB, jB))
        }
        async function Pj(BB, jB) {
          return AB(BB, "POST", "/v1/accounts:update", jB)
        }
        async function Wj(BB, jB) {
          return PB(BB, "POST", "/v1/accounts:signInWithPassword", ZB(BB, jB))
        }
        async function ej(BB, jB) {
          return AB(BB, "POST", "/v1/accounts:sendOobCode", ZB(BB, jB))
        }
        async function lj(BB, jB) {
          return ej(BB, jB)
        }
        async function wj(BB, jB) {
          return ej(BB, jB)
        }
        class xj extends Aj {
          constructor(BB, jB, zB) {
            let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", zB), this._email = BB, this._password = jB, this._tenantId = QB
          }
          static _fromEmailAndPassword(BB, jB) {
            return new xj(BB, jB, "password")
          }
          static _fromEmailAndCode(BB, jB) {
            return new xj(BB, jB, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
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
            const jB = "string" === typeof BB ? JSON.parse(BB) : BB;
            if ((null === jB || void 0 === jB ? void 0 : jB.email) && (null === jB || void 0 === jB ? void 0 : jB.password)) {
              if ("password" === jB.signInMethod) return this._fromEmailAndPassword(jB.email, jB.password);
              if ("emailLink" === jB.signInMethod) return this._fromEmailAndCode(jB.email, jB.password, jB.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(BB) {
            var jB;
            switch (this.signInMethod) {
              case "password":
                const zB = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (jB = BB._getRecaptchaConfig()) || void 0 === jB ? void 0 : jB.emailPasswordEnabled) {
                  const jB = await oj(BB, zB, "signInWithPassword");
                  return Wj(BB, jB)
                }
                return Wj(BB, zB).catch((async jB => {
                  if ("auth/missing-recaptcha-token" === jB.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const jB = await oj(BB, zB, "signInWithPassword");
                    return Wj(BB, jB)
                  }
                  return Promise.reject(jB)
                }));
              case "emailLink":
                return async function(BB, jB) {
                  return PB(BB, "POST", "/v1/accounts:signInWithEmailLink", ZB(BB, jB))
                }(BB, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                gB(BB, "internal-error")
            }
          }
          async _linkToIdToken(BB, jB) {
            switch (this.signInMethod) {
              case "password":
                return Pj(BB, {
                  idToken: jB,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(BB, jB) {
                  return PB(BB, "POST", "/v1/accounts:signInWithEmailLink", ZB(BB, jB))
                }(BB, {
                  idToken: jB,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                gB(BB, "internal-error")
            }
          }
          _getReauthenticationResolver(BB) {
            return this._getIdTokenResponse(BB)
          }
        }
        async function Kj(BB, jB) {
          return PB(BB, "POST", "/v1/accounts:signInWithIdp", ZB(BB, jB))
        }
        class Cj extends Aj {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(BB) {
            const jB = new Cj(BB.providerId, BB.signInMethod);
            return BB.idToken || BB.accessToken ? (BB.idToken && (jB.idToken = BB.idToken), BB.accessToken && (jB.accessToken = BB.accessToken), BB.nonce && !BB.pendingToken && (jB.nonce = BB.nonce), BB.pendingToken && (jB.pendingToken = BB.pendingToken)) : BB.oauthToken && BB.oauthTokenSecret ? (jB.accessToken = BB.oauthToken, jB.secret = BB.oauthTokenSecret) : gB("argument-error"), jB
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
            const jB = "string" === typeof BB ? JSON.parse(BB) : BB,
              {
                providerId: zB,
                signInMethod: QB
              } = jB,
              nB = dB(jB, ["providerId", "signInMethod"]);
            if (!zB || !QB) return null;
            const IB = new Cj(zB, QB);
            return IB.idToken = nB.idToken || void 0, IB.accessToken = nB.accessToken || void 0, IB.secret = nB.secret, IB.nonce = nB.nonce, IB.pendingToken = nB.pendingToken || null, IB
          }
          _getIdTokenResponse(BB) {
            return Kj(BB, this.buildRequest())
          }
          _linkToIdToken(BB, jB) {
            const zB = this.buildRequest();
            return zB.idToken = jB, Kj(BB, zB)
          }
          _getReauthenticationResolver(BB) {
            const jB = this.buildRequest();
            return jB.autoCreate = !1, Kj(BB, jB)
          }
          buildRequest() {
            const BB = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) BB.pendingToken = this.pendingToken;
            else {
              const jB = {};
              this.idToken && (jB.id_token = this.idToken), this.accessToken && (jB.access_token = this.accessToken), this.secret && (jB.oauth_token_secret = this.secret), jB.providerId = this.providerId, this.nonce && !this.pendingToken && (jB.nonce = this.nonce), BB.postBody = (0, QB.$)(jB)
            }
            return BB
          }
        }
        const cj = {
          USER_NOT_FOUND: "user-not-found"
        };
        class bj extends Aj {
          constructor(BB) {
            super("phone", "phone"), this.params = BB
          }
          static _fromVerification(BB, jB) {
            return new bj({
              verificationId: BB,
              verificationCode: jB
            })
          }
          static _fromTokenResponse(BB, jB) {
            return new bj({
              phoneNumber: BB,
              temporaryProof: jB
            })
          }
          _getIdTokenResponse(BB) {
            return async function(BB, jB) {
              return PB(BB, "POST", "/v1/accounts:signInWithPhoneNumber", ZB(BB, jB))
            }(BB, this._makeVerificationRequest())
          }
          _linkToIdToken(BB, jB) {
            return async function(BB, jB) {
              const zB = await PB(BB, "POST", "/v1/accounts:signInWithPhoneNumber", ZB(BB, jB));
              if (zB.temporaryProof) throw lB(BB, "account-exists-with-different-credential", zB);
              return zB
            }(BB, Object.assign({
              idToken: jB
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(BB) {
            return async function(BB, jB) {
              return PB(BB, "POST", "/v1/accounts:signInWithPhoneNumber", ZB(BB, Object.assign(Object.assign({}, jB), {
                operation: "REAUTH"
              })), cj)
            }(BB, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: BB,
              phoneNumber: jB,
              verificationId: zB,
              verificationCode: QB
            } = this.params;
            return BB && jB ? {
              temporaryProof: BB,
              phoneNumber: jB
            } : {
              sessionInfo: zB,
              code: QB
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
              verificationId: jB,
              verificationCode: zB,
              phoneNumber: QB,
              temporaryProof: nB
            } = BB;
            return zB || jB || QB || nB ? new bj({
              verificationId: jB,
              verificationCode: zB,
              phoneNumber: QB,
              temporaryProof: nB
            }) : null
          }
        }
        class vj {
          constructor(BB) {
            var jB, zB, nB, dB, IB, NB;
            const uB = (0, QB._)((0, QB.y)(BB)),
              UB = null !== (jB = uB.apiKey) && void 0 !== jB ? jB : null,
              aB = null !== (zB = uB.oobCode) && void 0 !== zB ? zB : null,
              pB = function(BB) {
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
              }(null !== (nB = uB.mode) && void 0 !== nB ? nB : null);
            iB(UB && aB && pB, "argument-error"), this.apiKey = UB, this.operation = pB, this.code = aB, this.continueUrl = null !== (dB = uB.continueUrl) && void 0 !== dB ? dB : null, this.languageCode = null !== (IB = uB.languageCode) && void 0 !== IB ? IB : null, this.tenantId = null !== (NB = uB.tenantId) && void 0 !== NB ? NB : null
          }
          static parseLink(BB) {
            const jB = function(BB) {
              const jB = (0, QB._)((0, QB.y)(BB)).link,
                zB = jB ? (0, QB._)((0, QB.y)(jB)).deep_link_id : null,
                nB = (0, QB._)((0, QB.y)(BB)).deep_link_id;
              return (nB ? (0, QB._)((0, QB.y)(nB)).link : null) || nB || zB || jB || BB
            }(BB);
            try {
              return new vj(jB)
            } catch (zB) {
              return null
            }
          }
        }

        function Rj(BB) {
          return vj.parseLink(BB)
        }
        class Oj {
          constructor() {
            this.providerId = Oj.PROVIDER_ID
          }
          static credential(BB, jB) {
            return xj._fromEmailAndPassword(BB, jB)
          }
          static credentialWithLink(BB, jB) {
            const zB = vj.parseLink(jB);
            return iB(zB, "argument-error"), xj._fromEmailAndCode(BB, zB.code, zB.tenantId)
          }
        }
        Oj.PROVIDER_ID = "password", Oj.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", Oj.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class Bz {
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
        class jz extends Bz {
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
        class zz extends jz {
          static credentialFromJSON(BB) {
            const jB = "string" === typeof BB ? JSON.parse(BB) : BB;
            return iB("providerId" in jB && "signInMethod" in jB, "argument-error"), Cj._fromParams(jB)
          }
          credential(BB) {
            return this._credential(Object.assign(Object.assign({}, BB), {
              nonce: BB.rawNonce
            }))
          }
          _credential(BB) {
            return iB(BB.idToken || BB.accessToken, "argument-error"), Cj._fromParams(Object.assign(Object.assign({}, BB), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(BB) {
            return zz.oauthCredentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return zz.oauthCredentialFromTaggedObject(BB.customData || {})
          }
          static oauthCredentialFromTaggedObject(BB) {
            let {
              _tokenResponse: jB
            } = BB;
            if (!jB) return null;
            const {
              oauthIdToken: zB,
              oauthAccessToken: QB,
              oauthTokenSecret: nB,
              pendingToken: dB,
              nonce: IB,
              providerId: NB
            } = jB;
            if (!QB && !nB && !zB && !dB) return null;
            if (!NB) return null;
            try {
              return new zz(NB)._credential({
                idToken: zB,
                accessToken: QB,
                nonce: IB,
                pendingToken: dB
              })
            } catch (uB) {
              return null
            }
          }
        }
        class Qz extends jz {
          constructor() {
            super("facebook.com")
          }
          static credential(BB) {
            return Cj._fromParams({
              providerId: Qz.PROVIDER_ID,
              signInMethod: Qz.FACEBOOK_SIGN_IN_METHOD,
              accessToken: BB
            })
          }
          static credentialFromResult(BB) {
            return Qz.credentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return Qz.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: jB
            } = BB;
            if (!jB || !("oauthAccessToken" in jB)) return null;
            if (!jB.oauthAccessToken) return null;
            try {
              return Qz.credential(jB.oauthAccessToken)
            } catch (zB) {
              return null
            }
          }
        }
        Qz.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Qz.PROVIDER_ID = "facebook.com";
        class nz extends jz {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(BB, jB) {
            return Cj._fromParams({
              providerId: nz.PROVIDER_ID,
              signInMethod: nz.GOOGLE_SIGN_IN_METHOD,
              idToken: BB,
              accessToken: jB
            })
          }
          static credentialFromResult(BB) {
            return nz.credentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return nz.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: jB
            } = BB;
            if (!jB) return null;
            const {
              oauthIdToken: zB,
              oauthAccessToken: QB
            } = jB;
            if (!zB && !QB) return null;
            try {
              return nz.credential(zB, QB)
            } catch (nB) {
              return null
            }
          }
        }
        nz.GOOGLE_SIGN_IN_METHOD = "google.com", nz.PROVIDER_ID = "google.com";
        class dz extends jz {
          constructor() {
            super("github.com")
          }
          static credential(BB) {
            return Cj._fromParams({
              providerId: dz.PROVIDER_ID,
              signInMethod: dz.GITHUB_SIGN_IN_METHOD,
              accessToken: BB
            })
          }
          static credentialFromResult(BB) {
            return dz.credentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return dz.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: jB
            } = BB;
            if (!jB || !("oauthAccessToken" in jB)) return null;
            if (!jB.oauthAccessToken) return null;
            try {
              return dz.credential(jB.oauthAccessToken)
            } catch (zB) {
              return null
            }
          }
        }
        dz.GITHUB_SIGN_IN_METHOD = "github.com", dz.PROVIDER_ID = "github.com";
        class Iz extends Aj {
          constructor(BB, jB) {
            super(BB, BB), this.pendingToken = jB
          }
          _getIdTokenResponse(BB) {
            return Kj(BB, this.buildRequest())
          }
          _linkToIdToken(BB, jB) {
            const zB = this.buildRequest();
            return zB.idToken = jB, Kj(BB, zB)
          }
          _getReauthenticationResolver(BB) {
            const jB = this.buildRequest();
            return jB.autoCreate = !1, Kj(BB, jB)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(BB) {
            const jB = "string" === typeof BB ? JSON.parse(BB) : BB,
              {
                providerId: zB,
                signInMethod: QB,
                pendingToken: nB
              } = jB;
            return zB && QB && nB && zB === QB ? new Iz(zB, nB) : null
          }
          static _create(BB, jB) {
            return new Iz(BB, jB)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class Nz extends Bz {
          constructor(BB) {
            iB(BB.startsWith("saml."), "argument-error"), super(BB)
          }
          static credentialFromResult(BB) {
            return Nz.samlCredentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return Nz.samlCredentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromJSON(BB) {
            const jB = Iz.fromJSON(BB);
            return iB(jB, "argument-error"), jB
          }
          static samlCredentialFromTaggedObject(BB) {
            let {
              _tokenResponse: jB
            } = BB;
            if (!jB) return null;
            const {
              pendingToken: zB,
              providerId: QB
            } = jB;
            if (!zB || !QB) return null;
            try {
              return Iz._create(QB, zB)
            } catch (nB) {
              return null
            }
          }
        }
        class uz extends jz {
          constructor() {
            super("twitter.com")
          }
          static credential(BB, jB) {
            return Cj._fromParams({
              providerId: uz.PROVIDER_ID,
              signInMethod: uz.TWITTER_SIGN_IN_METHOD,
              oauthToken: BB,
              oauthTokenSecret: jB
            })
          }
          static credentialFromResult(BB) {
            return uz.credentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return uz.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: jB
            } = BB;
            if (!jB) return null;
            const {
              oauthAccessToken: zB,
              oauthTokenSecret: QB
            } = jB;
            if (!zB || !QB) return null;
            try {
              return uz.credential(zB, QB)
            } catch (nB) {
              return null
            }
          }
        }
        async function Uz(BB, jB) {
          return PB(BB, "POST", "/v1/accounts:signUp", ZB(BB, jB))
        }
        uz.TWITTER_SIGN_IN_METHOD = "twitter.com", uz.PROVIDER_ID = "twitter.com";
        class az {
          constructor(BB) {
            this.user = BB.user, this.providerId = BB.providerId, this._tokenResponse = BB._tokenResponse, this.operationType = BB.operationType
          }
          static async _fromIdTokenResponse(BB, jB, zB) {
            let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const nB = await Qj._fromIdTokenResponse(BB, zB, QB),
              dB = pz(zB);
            return new az({
              user: nB,
              providerId: dB,
              _tokenResponse: zB,
              operationType: jB
            })
          }
          static async _forOperation(BB, jB, zB) {
            await BB._updateTokensIfNecessary(zB, !0);
            const QB = pz(zB);
            return new az({
              user: BB,
              providerId: QB,
              _tokenResponse: zB,
              operationType: jB
            })
          }
        }

        function pz(BB) {
          return BB.providerId ? BB.providerId : "phoneNumber" in BB ? "phone" : null
        }
        async function rz(BB) {
          var jB;
          const zB = Fj(BB);
          if (await zB._initializationPromise, null === (jB = zB.currentUser) || void 0 === jB ? void 0 : jB.isAnonymous) return new az({
            user: zB.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const QB = await Uz(zB, {
              returnSecureToken: !0
            }),
            nB = await az._fromIdTokenResponse(zB, "signIn", QB, !0);
          return await zB._updateCurrentUser(nB.user), nB
        }
        class sz extends QB.g {
          constructor(BB, jB, zB, QB) {
            var nB;
            super(jB.code, jB.message), this.operationType = zB, this.user = QB, Object.setPrototypeOf(this, sz.prototype), this.customData = {
              appName: BB.name,
              tenantId: null !== (nB = BB.tenantId) && void 0 !== nB ? nB : void 0,
              _serverResponse: jB.customData._serverResponse,
              operationType: zB
            }
          }
          static _fromErrorAndOperation(BB, jB, zB, QB) {
            return new sz(BB, jB, zB, QB)
          }
        }

        function Jz(BB, jB, zB, QB) {
          return ("reauthenticate" === jB ? zB._getReauthenticationResolver(BB) : zB._getIdTokenResponse(BB)).catch((zB => {
            if ("auth/multi-factor-auth-required" === zB.code) throw sz._fromErrorAndOperation(BB, zB, jB, QB);
            throw zB
          }))
        }

        function mz(BB) {
          return new Set(BB.map((BB => {
            let {
              providerId: jB
            } = BB;
            return jB
          })).filter((BB => !!BB)))
        }
        async function yz(BB, jB) {
          const zB = (0, QB.H)(BB);
          await Gz(!0, zB, jB);
          const {
            providerUserInfo: nB
          } = await async function(BB, jB) {
            return AB(BB, "POST", "/v1/accounts:update", jB)
          }(zB.auth, {
            idToken: await zB.getIdToken(),
            deleteProvider: [jB]
          }), dB = mz(nB || []);
          return zB.providerData = zB.providerData.filter((BB => dB.has(BB.providerId))), dB.has("phone") || (zB.phoneNumber = null), await zB.auth._persistUserIfCurrent(zB), zB
        }
        async function kz(BB, jB) {
          let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const QB = await bB(BB, jB._linkToIdToken(BB.auth, await BB.getIdToken()), zB);
          return az._forOperation(BB, "link", QB)
        }
        async function Gz(BB, jB, zB) {
          await OB(jB);
          const QB = !1 === BB ? "provider-already-linked" : "no-such-provider";
          iB(mz(jB.providerData).has(zB) === BB, jB.auth, QB)
        }
        async function Lz(BB, jB) {
          let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: QB
          } = BB, nB = "reauthenticate";
          try {
            const dB = await bB(BB, Jz(QB, nB, jB, BB), zB);
            iB(dB.idToken, QB, "internal-error");
            const IB = cB(dB.idToken);
            iB(IB, QB, "internal-error");
            const {
              sub: NB
            } = IB;
            return iB(BB.uid === NB, QB, "user-mismatch"), az._forOperation(BB, nB, dB)
          } catch (dB) {
            throw "auth/user-not-found" === (null === dB || void 0 === dB ? void 0 : dB.code) && gB(QB, "user-mismatch"), dB
          }
        }
        async function gz(BB, jB) {
          let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const QB = "signIn",
            nB = await Jz(BB, QB, jB),
            dB = await az._fromIdTokenResponse(BB, QB, nB);
          return zB || await BB._updateCurrentUser(dB.user), dB
        }
        async function tz(BB, jB) {
          return gz(Fj(BB), jB)
        }
        async function Sz(BB, jB) {
          const zB = (0, QB.H)(BB);
          return await Gz(!1, zB, jB.providerId), kz(zB, jB)
        }
        async function Mz(BB, jB) {
          return Lz((0, QB.H)(BB), jB)
        }
        async function Ez(BB, jB) {
          const zB = Fj(BB),
            QB = await async function(BB, jB) {
              return PB(BB, "POST", "/v1/accounts:signInWithCustomToken", ZB(BB, jB))
            }(zB, {
              token: jB,
              returnSecureToken: !0
            }), nB = await az._fromIdTokenResponse(zB, "signIn", QB);
          return await zB._updateCurrentUser(nB.user), nB
        }
        class iz {
          constructor(BB, jB) {
            this.factorId = BB, this.uid = jB.mfaEnrollmentId, this.enrollmentTime = new Date(jB.enrolledAt).toUTCString(), this.displayName = jB.displayName
          }
          static _fromServerResponse(BB, jB) {
            return "phoneInfo" in jB ? qz._fromServerResponse(BB, jB) : "totpInfo" in jB ? fz._fromServerResponse(BB, jB) : gB(BB, "internal-error")
          }
        }
        class qz extends iz {
          constructor(BB) {
            super("phone", BB), this.phoneNumber = BB.phoneInfo
          }
          static _fromServerResponse(BB, jB) {
            return new qz(jB)
          }
        }
        class fz extends iz {
          constructor(BB) {
            super("totp", BB)
          }
          static _fromServerResponse(BB, jB) {
            return new fz(jB)
          }
        }

        function oz(BB, jB, zB) {
          var QB;
          iB((null === (QB = zB.url) || void 0 === QB ? void 0 : QB.length) > 0, BB, "invalid-continue-uri"), iB("undefined" === typeof zB.dynamicLinkDomain || zB.dynamicLinkDomain.length > 0, BB, "invalid-dynamic-link-domain"), jB.continueUrl = zB.url, jB.dynamicLinkDomain = zB.dynamicLinkDomain, jB.canHandleCodeInApp = zB.handleCodeInApp, zB.iOS && (iB(zB.iOS.bundleId.length > 0, BB, "missing-ios-bundle-id"), jB.iOSBundleId = zB.iOS.bundleId), zB.android && (iB(zB.android.packageName.length > 0, BB, "missing-android-pkg-name"), jB.androidInstallApp = zB.android.installApp, jB.androidMinimumVersionCode = zB.android.minimumVersion, jB.androidPackageName = zB.android.packageName)
        }
        async function Hz(BB, jB, zB) {
          var QB;
          const nB = Fj(BB),
            dB = {
              requestType: "PASSWORD_RESET",
              email: jB,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (QB = nB._getRecaptchaConfig()) || void 0 === QB ? void 0 : QB.emailPasswordEnabled) {
            const BB = await oj(nB, dB, "getOobCode", !0);
            zB && oz(nB, BB, zB), await lj(nB, BB)
          } else zB && oz(nB, dB, zB), await lj(nB, dB).catch((async BB => {
            if ("auth/missing-recaptcha-token" !== BB.code) return Promise.reject(BB);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const BB = await oj(nB, dB, "getOobCode", !0);
              zB && oz(nB, BB, zB), await lj(nB, BB)
            }
          }))
        }
        async function Dz(BB, jB, zB) {
          await Tj((0, QB.H)(BB), {
            oobCode: jB,
            newPassword: zB
          })
        }
        async function Fz(BB, jB) {
          await async function(BB, jB) {
            return AB(BB, "POST", "/v1/accounts:update", ZB(BB, jB))
          }((0, QB.H)(BB), {
            oobCode: jB
          })
        }
        async function Yz(BB, jB) {
          const zB = (0, QB.H)(BB),
            nB = await Tj(zB, {
              oobCode: jB
            }),
            dB = nB.requestType;
          switch (iB(dB, zB, "internal-error"), dB) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              iB(nB.newEmail, zB, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              iB(nB.mfaInfo, zB, "internal-error");
            default:
              iB(nB.email, zB, "internal-error")
          }
          let IB = null;
          return nB.mfaInfo && (IB = iz._fromServerResponse(Fj(zB), nB.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === nB.requestType ? nB.newEmail : nB.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === nB.requestType ? nB.email : nB.newEmail) || null,
              multiFactorInfo: IB
            },
            operation: dB
          }
        }
        async function Vz(BB, jB) {
          const {
            data: zB
          } = await Yz((0, QB.H)(BB), jB);
          return zB.email
        }
        async function hz(BB, jB, zB) {
          var QB;
          const nB = Fj(BB),
            dB = {
              returnSecureToken: !0,
              email: jB,
              password: zB,
              clientType: "CLIENT_TYPE_WEB"
            };
          let IB;
          if (null === (QB = nB._getRecaptchaConfig()) || void 0 === QB ? void 0 : QB.emailPasswordEnabled) {
            const BB = await oj(nB, dB, "signUpPassword");
            IB = Uz(nB, BB)
          } else IB = Uz(nB, dB).catch((async BB => {
            if ("auth/missing-recaptcha-token" === BB.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const BB = await oj(nB, dB, "signUpPassword");
              return Uz(nB, BB)
            }
            return Promise.reject(BB)
          }));
          const NB = await IB.catch((BB => Promise.reject(BB))),
            uB = await az._fromIdTokenResponse(nB, "signIn", NB);
          return await nB._updateCurrentUser(uB.user), uB
        }

        function Xz(BB, jB, zB) {
          return tz((0, QB.H)(BB), Oj.credential(jB, zB))
        }
        async function Zz(BB, jB, zB) {
          var QB;
          const nB = Fj(BB),
            dB = {
              requestType: "EMAIL_SIGNIN",
              email: jB,
              clientType: "CLIENT_TYPE_WEB"
            };

          function IB(BB, jB) {
            iB(jB.handleCodeInApp, nB, "argument-error"), jB && oz(nB, BB, jB)
          }
          if (null === (QB = nB._getRecaptchaConfig()) || void 0 === QB ? void 0 : QB.emailPasswordEnabled) {
            const BB = await oj(nB, dB, "getOobCode", !0);
            IB(BB, zB), await wj(nB, BB)
          } else IB(dB, zB), await wj(nB, dB).catch((async BB => {
            if ("auth/missing-recaptcha-token" !== BB.code) return Promise.reject(BB);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const BB = await oj(nB, dB, "getOobCode", !0);
              IB(BB, zB), await wj(nB, BB)
            }
          }))
        }

        function Az(BB, jB) {
          const zB = vj.parseLink(jB);
          return "EMAIL_SIGNIN" === (null === zB || void 0 === zB ? void 0 : zB.operation)
        }
        async function Tz(BB, jB, zB) {
          const nB = (0, QB.H)(BB),
            dB = Oj.credentialWithLink(jB, zB || oB());
          return iB(dB._tenantId === (nB.tenantId || null), nB, "tenant-id-mismatch"), tz(nB, dB)
        }
        async function Pz(BB, jB) {
          const zB = {
              identifier: jB,
              continueUri: HB() ? oB() : "http://localhost"
            },
            {
              signinMethods: nB
            } = await async function(BB, jB) {
              return AB(BB, "POST", "/v1/accounts:createAuthUri", ZB(BB, jB))
            }((0, QB.H)(BB), zB);
          return nB || []
        }
        async function Wz(BB, jB) {
          const zB = (0, QB.H)(BB),
            nB = {
              requestType: "VERIFY_EMAIL",
              idToken: await BB.getIdToken()
            };
          jB && oz(zB.auth, nB, jB);
          const {
            email: dB
          } = await async function(BB, jB) {
            return ej(BB, jB)
          }(zB.auth, nB);
          dB !== BB.email && await BB.reload()
        }
        async function ez(BB, jB, zB) {
          const nB = (0, QB.H)(BB),
            dB = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await BB.getIdToken(),
              newEmail: jB
            };
          zB && oz(nB.auth, dB, zB);
          const {
            email: IB
          } = await async function(BB, jB) {
            return ej(BB, jB)
          }(nB.auth, dB);
          IB !== BB.email && await BB.reload()
        }
        async function lz(BB, jB) {
          let {
            displayName: zB,
            photoURL: nB
          } = jB;
          if (void 0 === zB && void 0 === nB) return;
          const dB = (0, QB.H)(BB),
            IB = {
              idToken: await dB.getIdToken(),
              displayName: zB,
              photoUrl: nB,
              returnSecureToken: !0
            },
            NB = await bB(dB, async function(BB, jB) {
              return AB(BB, "POST", "/v1/accounts:update", jB)
            }(dB.auth, IB));
          dB.displayName = NB.displayName || null, dB.photoURL = NB.photoUrl || null;
          const uB = dB.providerData.find((BB => {
            let {
              providerId: jB
            } = BB;
            return "password" === jB
          }));
          uB && (uB.displayName = dB.displayName, uB.photoURL = dB.photoURL), await dB._updateTokensIfNecessary(NB)
        }

        function wz(BB, jB) {
          return Kz((0, QB.H)(BB), jB, null)
        }

        function xz(BB, jB) {
          return Kz((0, QB.H)(BB), null, jB)
        }
        async function Kz(BB, jB, zB) {
          const {
            auth: QB
          } = BB, nB = {
            idToken: await BB.getIdToken(),
            returnSecureToken: !0
          };
          jB && (nB.email = jB), zB && (nB.password = zB);
          const dB = await bB(BB, Pj(QB, nB));
          await BB._updateTokensIfNecessary(dB, !0)
        }
        class Cz {
          constructor(BB, jB) {
            let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = BB, this.providerId = jB, this.profile = zB
          }
        }
        class cz extends Cz {
          constructor(BB, jB, zB, QB) {
            super(BB, jB, zB), this.username = QB
          }
        }
        class bz extends Cz {
          constructor(BB, jB) {
            super(BB, "facebook.com", jB)
          }
        }
        class vz extends cz {
          constructor(BB, jB) {
            super(BB, "github.com", jB, "string" === typeof(null === jB || void 0 === jB ? void 0 : jB.login) ? null === jB || void 0 === jB ? void 0 : jB.login : null)
          }
        }
        class Rz extends Cz {
          constructor(BB, jB) {
            super(BB, "google.com", jB)
          }
        }
        class Oz extends cz {
          constructor(BB, jB, zB) {
            super(BB, "twitter.com", jB, zB)
          }
        }

        function BQ(BB) {
          const {
            user: jB,
            _tokenResponse: zB
          } = BB;
          return jB.isAnonymous && !zB ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(BB) {
            var jB, zB;
            if (!BB) return null;
            const {
              providerId: QB
            } = BB, nB = BB.rawUserInfo ? JSON.parse(BB.rawUserInfo) : {}, dB = BB.isNewUser || "identitytoolkit#SignupNewUserResponse" === BB.kind;
            if (!QB && (null === BB || void 0 === BB ? void 0 : BB.idToken)) {
              const QB = null === (zB = null === (jB = cB(BB.idToken)) || void 0 === jB ? void 0 : jB.firebase) || void 0 === zB ? void 0 : zB.sign_in_provider;
              if (QB) return new Cz(dB, "anonymous" !== QB && "custom" !== QB ? QB : null)
            }
            if (!QB) return null;
            switch (QB) {
              case "facebook.com":
                return new bz(dB, nB);
              case "github.com":
                return new vz(dB, nB);
              case "google.com":
                return new Rz(dB, nB);
              case "twitter.com":
                return new Oz(dB, nB, BB.screenName || null);
              case "custom":
              case "anonymous":
                return new Cz(dB, null);
              default:
                return new Cz(dB, QB, nB)
            }
          }(zB)
        }

        function jQ(BB, jB) {
          return (0, QB.H)(BB).setPersistence(jB)
        }

        function zQ(BB) {
          return Fj(BB).initializeRecaptchaConfig()
        }

        function QQ(BB, jB, zB, nB) {
          return (0, QB.H)(BB).onIdTokenChanged(jB, zB, nB)
        }

        function nQ(BB, jB, zB) {
          return (0, QB.H)(BB).beforeAuthStateChanged(jB, zB)
        }

        function dQ(BB, jB, zB, nB) {
          return (0, QB.H)(BB).onAuthStateChanged(jB, zB, nB)
        }

        function IQ(BB) {
          (0, QB.H)(BB).useDeviceLanguage()
        }

        function NQ(BB, jB) {
          return (0, QB.H)(BB).updateCurrentUser(jB)
        }

        function uQ(BB) {
          return (0, QB.H)(BB).signOut()
        }
        async function UQ(BB) {
          return (0, QB.H)(BB).delete()
        }
        class aQ {
          constructor(BB, jB, zB) {
            this.type = BB, this.credential = jB, this.auth = zB
          }
          static _fromIdtoken(BB, jB) {
            return new aQ("enroll", BB, jB)
          }
          static _fromMfaPendingCredential(BB) {
            return new aQ("signin", BB)
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
            var jB, zB;
            if (null === BB || void 0 === BB ? void 0 : BB.multiFactorSession) {
              if (null === (jB = BB.multiFactorSession) || void 0 === jB ? void 0 : jB.pendingCredential) return aQ._fromMfaPendingCredential(BB.multiFactorSession.pendingCredential);
              if (null === (zB = BB.multiFactorSession) || void 0 === zB ? void 0 : zB.idToken) return aQ._fromIdtoken(BB.multiFactorSession.idToken)
            }
            return null
          }
        }
        class pQ {
          constructor(BB, jB, zB) {
            this.session = BB, this.hints = jB, this.signInResolver = zB
          }
          static _fromError(BB, jB) {
            const zB = Fj(BB),
              QB = jB.customData._serverResponse,
              nB = (QB.mfaInfo || []).map((BB => iz._fromServerResponse(zB, BB)));
            iB(QB.mfaPendingCredential, zB, "internal-error");
            const dB = aQ._fromMfaPendingCredential(QB.mfaPendingCredential);
            return new pQ(dB, nB, (async BB => {
              const nB = await BB._process(zB, dB);
              delete QB.mfaInfo, delete QB.mfaPendingCredential;
              const IB = Object.assign(Object.assign({}, QB), {
                idToken: nB.idToken,
                refreshToken: nB.refreshToken
              });
              switch (jB.operationType) {
                case "signIn":
                  const BB = await az._fromIdTokenResponse(zB, jB.operationType, IB);
                  return await zB._updateCurrentUser(BB.user), BB;
                case "reauthenticate":
                  return iB(jB.user, zB, "internal-error"), az._forOperation(jB.user, jB.operationType, IB);
                default:
                  gB(zB, "internal-error")
              }
            }))
          }
          async resolveSignIn(BB) {
            const jB = BB;
            return this.signInResolver(jB)
          }
        }

        function rQ(BB, jB) {
          var zB;
          const nB = (0, QB.H)(BB),
            dB = jB;
          return iB(jB.customData.operationType, nB, "argument-error"), iB(null === (zB = dB.customData._serverResponse) || void 0 === zB ? void 0 : zB.mfaPendingCredential, nB, "argument-error"), pQ._fromError(nB, dB)
        }
        class sQ {
          constructor(BB) {
            this.user = BB, this.enrolledFactors = [], BB._onReload((jB => {
              jB.mfaInfo && (this.enrolledFactors = jB.mfaInfo.map((jB => iz._fromServerResponse(BB.auth, jB))))
            }))
          }
          static _fromUser(BB) {
            return new sQ(BB)
          }
          async getSession() {
            return aQ._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(BB, jB) {
            const zB = BB,
              QB = await this.getSession(),
              nB = await bB(this.user, zB._process(this.user.auth, QB, jB));
            return await this.user._updateTokensIfNecessary(nB), this.user.reload()
          }
          async unenroll(BB) {
            const jB = "string" === typeof BB ? BB : BB.uid,
              zB = await this.user.getIdToken();
            try {
              const BB = await bB(this.user, (QB = this.user.auth, nB = {
                idToken: zB,
                mfaEnrollmentId: jB
              }, AB(QB, "POST", "/v2/accounts/mfaEnrollment:withdraw", ZB(QB, nB))));
              this.enrolledFactors = this.enrolledFactors.filter((BB => {
                let {
                  uid: zB
                } = BB;
                return zB !== jB
              })), await this.user._updateTokensIfNecessary(BB), await this.user.reload()
            } catch (dB) {
              throw dB
            }
            var QB, nB
          }
        }
        const JQ = new WeakMap;

        function mQ(BB) {
          const jB = (0, QB.H)(BB);
          return JQ.has(jB) || JQ.set(jB, sQ._fromUser(jB)), JQ.get(jB)
        }
        const yQ = "__sak";
        class kQ {
          constructor(BB, jB) {
            this.storageRetriever = BB, this.type = jB
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(yQ, "1"), this.storage.removeItem(yQ), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (BB) {
              return Promise.resolve(!1)
            }
          }
          _set(BB, jB) {
            return this.storage.setItem(BB, JSON.stringify(jB)), Promise.resolve()
          }
          _get(BB) {
            const jB = this.storage.getItem(BB);
            return Promise.resolve(jB ? JSON.parse(jB) : null)
          }
          _remove(BB) {
            return this.storage.removeItem(BB), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class GQ extends kQ {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (BB, jB) => this.onStorageEvent(BB, jB), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const BB = (0, QB.J)();
              return rj(BB) || Gj(BB)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (BB) {
                return !1
              }
            }(), this.fallbackToPolling = Lj(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(BB) {
            for (const jB of Object.keys(this.listeners)) {
              const zB = this.storage.getItem(jB),
                QB = this.localCache[jB];
              zB !== QB && BB(jB, QB, zB)
            }
          }
          onStorageEvent(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!BB.key) return void this.forAllChangedKeys(((BB, jB, zB) => {
              this.notifyListeners(BB, zB)
            }));
            const zB = BB.key;
            if (jB ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const QB = this.storage.getItem(zB);
              if (BB.newValue !== QB) null !== BB.newValue ? this.storage.setItem(zB, BB.newValue) : this.storage.removeItem(zB);
              else if (this.localCache[zB] === BB.newValue && !jB) return
            }
            const nB = () => {
                const BB = this.storage.getItem(zB);
                (jB || this.localCache[zB] !== BB) && this.notifyListeners(zB, BB)
              },
              dB = this.storage.getItem(zB);
            (0, QB.O)() && 10 === document.documentMode && dB !== BB.newValue && BB.newValue !== BB.oldValue ? setTimeout(nB, 10) : nB()
          }
          notifyListeners(BB, jB) {
            this.localCache[BB] = jB;
            const zB = this.listeners[BB];
            if (zB)
              for (const QB of Array.from(zB)) QB(jB ? JSON.parse(jB) : jB)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((BB, jB, zB) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: BB,
                  oldValue: jB,
                  newValue: zB
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
          _addListener(BB, jB) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[BB] || (this.listeners[BB] = new Set, this.localCache[BB] = this.storage.getItem(BB)), this.listeners[BB].add(jB)
          }
          _removeListener(BB, jB) {
            this.listeners[BB] && (this.listeners[BB].delete(jB), 0 === this.listeners[BB].size && delete this.listeners[BB]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(BB, jB) {
            await super._set(BB, jB), this.localCache[BB] = JSON.stringify(jB)
          }
          async _get(BB) {
            const jB = await super._get(BB);
            return this.localCache[BB] = JSON.stringify(jB), jB
          }
          async _remove(BB) {
            await super._remove(BB), delete this.localCache[BB]
          }
        }
        GQ.type = "LOCAL";
        const LQ = GQ;
        class gQ extends kQ {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(BB, jB) {}
          _removeListener(BB, jB) {}
        }
        gQ.type = "SESSION";
        const tQ = gQ;
        class SQ {
          constructor(BB) {
            this.eventTarget = BB, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(BB) {
            const jB = this.receivers.find((jB => jB.isListeningto(BB)));
            if (jB) return jB;
            const zB = new SQ(BB);
            return this.receivers.push(zB), zB
          }
          isListeningto(BB) {
            return this.eventTarget === BB
          }
          async handleEvent(BB) {
            const jB = BB,
              {
                eventId: zB,
                eventType: QB,
                data: nB
              } = jB.data,
              dB = this.handlersMap[QB];
            if (!(null === dB || void 0 === dB ? void 0 : dB.size)) return;
            jB.ports[0].postMessage({
              status: "ack",
              eventId: zB,
              eventType: QB
            });
            const IB = Array.from(dB).map((async BB => BB(jB.origin, nB))),
              NB = await
            function(BB) {
              return Promise.all(BB.map((async BB => {
                try {
                  return {
                    fulfilled: !0,
                    value: await BB
                  }
                } catch (jB) {
                  return {
                    fulfilled: !1,
                    reason: jB
                  }
                }
              })))
            }(IB);
            jB.ports[0].postMessage({
              status: "done",
              eventId: zB,
              eventType: QB,
              response: NB
            })
          }
          _subscribe(BB, jB) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[BB] || (this.handlersMap[BB] = new Set), this.handlersMap[BB].add(jB)
          }
          _unsubscribe(BB, jB) {
            this.handlersMap[BB] && jB && this.handlersMap[BB].delete(jB), jB && 0 !== this.handlersMap[BB].size || delete this.handlersMap[BB], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function MQ() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            zB = "";
          for (let QB = 0; QB < jB; QB++) zB += Math.floor(10 * Math.random());
          return BB + zB
        }
        SQ.receivers = [];
        class EQ {
          constructor(BB) {
            this.target = BB, this.handlers = new Set
          }
          removeMessageHandler(BB) {
            BB.messageChannel && (BB.messageChannel.port1.removeEventListener("message", BB.hG), BB.messageChannel.port1.close()), this.handlers.delete(BB)
          }
          async _send(BB, jB) {
            let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const QB = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!QB) throw new Error("connection_unavailable");
            let nB, dB;
            return new Promise(((IB, NB) => {
              const uB = MQ("", 20);
              QB.port1.start();
              const UB = setTimeout((() => {
                NB(new Error("unsupported_event"))
              }), zB);
              dB = {
                messageChannel: QB,
                hG(BB) {
                  const jB = BB;
                  if (jB.data.eventId === uB) switch (jB.data.status) {
                    case "ack":
                      clearTimeout(UB), nB = setTimeout((() => {
                        NB(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(nB), IB(jB.data.response);
                      break;
                    default:
                      clearTimeout(UB), clearTimeout(nB), NB(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(dB), QB.port1.addEventListener("message", dB.hG), this.target.postMessage({
                eventType: BB,
                eventId: uB,
                data: jB
              }, [QB.port2])
            })).finally((() => {
              dB && this.removeMessageHandler(dB)
            }))
          }
        }

        function iQ() {
          return window
        }

        function qQ() {
          return "undefined" !== typeof iQ().WorkerGlobalScope && "function" === typeof iQ().importScripts
        }
        const fQ = "firebaseLocalStorageDb",
          oQ = "firebaseLocalStorage",
          HQ = "fbase_key";
        class DQ {
          constructor(BB) {
            this.request = BB
          }
          toPromise() {
            return new Promise(((BB, jB) => {
              this.request.addEventListener("success", (() => {
                BB(this.request.result)
              })), this.request.addEventListener("error", (() => {
                jB(this.request.error)
              }))
            }))
          }
        }

        function FQ(BB, jB) {
          return BB.transaction([oQ], jB ? "readwrite" : "readonly").objectStore(oQ)
        }

        function YQ() {
          const BB = indexedDB.open(fQ, 1);
          return new Promise(((jB, zB) => {
            BB.addEventListener("error", (() => {
              zB(BB.error)
            })), BB.addEventListener("upgradeneeded", (() => {
              const jB = BB.result;
              try {
                jB.createObjectStore(oQ, {
                  keyPath: HQ
                })
              } catch (QB) {
                zB(QB)
              }
            })), BB.addEventListener("success", (async () => {
              const zB = BB.result;
              zB.objectStoreNames.contains(oQ) ? jB(zB) : (zB.close(), await
                function() {
                  const BB = indexedDB.deleteDatabase(fQ);
                  return new DQ(BB).toPromise()
                }(), jB(await YQ()))
            }))
          }))
        }
        async function VQ(BB, jB, zB) {
          const QB = FQ(BB, !0).put({
            [HQ]: jB,
            value: zB
          });
          return new DQ(QB).toPromise()
        }

        function hQ(BB, jB) {
          const zB = FQ(BB, !0).delete(jB);
          return new DQ(zB).toPromise()
        }
        class XQ {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await YQ()), this.db
          }
          async _withRetries(BB) {
            let jB = 0;
            for (;;) try {
              const jB = await this._openDb();
              return await BB(jB)
            } catch (zB) {
              if (jB++ > 3) throw zB;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return qQ() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = SQ._getInstance(qQ() ? self : null), this.receiver._subscribe("keyChanged", (async (BB, jB) => ({
              keyProcessed: (await this._poll()).includes(jB.key)
            }))), this.receiver._subscribe("ping", (async (BB, jB) => ["keyChanged"]))
          }
          async initializeSender() {
            var BB, jB;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (BB) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new EQ(this.activeServiceWorker);
            const zB = await this.sender._send("ping", {}, 800);
            zB && (null === (BB = zB[0]) || void 0 === BB ? void 0 : BB.fulfilled) && (null === (jB = zB[0]) || void 0 === jB ? void 0 : jB.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(BB) {
            if (this.sender && this.activeServiceWorker && function() {
                var BB;
                return (null === (BB = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === BB ? void 0 : BB.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: BB
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (jB) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const BB = await YQ();
              return await VQ(BB, yQ, "1"), await hQ(BB, yQ), !0
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
          async _set(BB, jB) {
            return this._withPendingWrite((async () => (await this._withRetries((zB => VQ(zB, BB, jB))), this.localCache[BB] = jB, this.notifyServiceWorker(BB))))
          }
          async _get(BB) {
            const jB = await this._withRetries((jB => async function(BB, jB) {
              const zB = FQ(BB, !1).get(jB),
                QB = await new DQ(zB).toPromise();
              return void 0 === QB ? null : QB.value
            }(jB, BB)));
            return this.localCache[BB] = jB, jB
          }
          async _remove(BB) {
            return this._withPendingWrite((async () => (await this._withRetries((jB => hQ(jB, BB))), delete this.localCache[BB], this.notifyServiceWorker(BB))))
          }
          async _poll() {
            const BB = await this._withRetries((BB => {
              const jB = FQ(BB, !1).getAll();
              return new DQ(jB).toPromise()
            }));
            if (!BB) return [];
            if (0 !== this.pendingWrites) return [];
            const jB = [],
              zB = new Set;
            for (const {
                fbase_key: QB,
                value: nB
              }
              of BB) zB.add(QB), JSON.stringify(this.localCache[QB]) !== JSON.stringify(nB) && (this.notifyListeners(QB, nB), jB.push(QB));
            for (const QB of Object.keys(this.localCache)) this.localCache[QB] && !zB.has(QB) && (this.notifyListeners(QB, null), jB.push(QB));
            return jB
          }
          notifyListeners(BB, jB) {
            this.localCache[BB] = jB;
            const zB = this.listeners[BB];
            if (zB)
              for (const QB of Array.from(zB)) QB(jB)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(BB, jB) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[BB] || (this.listeners[BB] = new Set, this._get(BB)), this.listeners[BB].add(jB)
          }
          _removeListener(BB, jB) {
            this.listeners[BB] && (this.listeners[BB].delete(jB), 0 === this.listeners[BB].size && delete this.listeners[BB]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        XQ.type = "LOCAL";
        const ZQ = XQ;
        const AQ = 1e12;
        class TQ {
          constructor(BB) {
            this.auth = BB, this.counter = AQ, this._widgets = new Map
          }
          render(BB, jB) {
            const zB = this.counter;
            return this._widgets.set(zB, new PQ(BB, this.auth.name, jB || {})), this.counter++, zB
          }
          reset(BB) {
            var jB;
            const zB = BB || AQ;
            null === (jB = this._widgets.get(zB)) || void 0 === jB || jB.delete(), this._widgets.delete(zB)
          }
          getResponse(BB) {
            var jB;
            const zB = BB || AQ;
            return (null === (jB = this._widgets.get(zB)) || void 0 === jB ? void 0 : jB.getResponse()) || ""
          }
          async execute(BB) {
            var jB;
            const zB = BB || AQ;
            return null === (jB = this._widgets.get(zB)) || void 0 === jB || jB.execute(), ""
          }
        }
        class PQ {
          constructor(BB, jB, zB) {
            this.params = zB, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const QB = "string" === typeof BB ? document.getElementById(BB) : BB;
            iB(QB, "argument-error", {
              appName: jB
            }), this.container = QB, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
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
                const jB = [],
                  zB = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let QB = 0; QB < BB; QB++) jB.push(zB.charAt(Math.floor(Math.random() * zB.length)));
                return jB.join("")
              }(50);
              const {
                callback: BB,
                "expired-callback": jB
              } = this.params;
              if (BB) try {
                BB(this.responseToken)
              } catch (zB) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, jB) try {
                  jB()
                } catch (zB) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const WQ = qj("rcb"),
          eQ = new FB(3e4, 6e4);
        class lQ {
          constructor() {
            var BB;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (BB = iQ().grecaptcha) || void 0 === BB ? void 0 : BB.render)
          }
          load(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return iB(function(BB) {
              return BB.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(BB)
            }(jB), BB, "argument-error"), this.shouldResolveImmediately(jB) && Sj(iQ().grecaptcha) ? Promise.resolve(iQ().grecaptcha) : new Promise(((zB, nB) => {
              const dB = iQ().setTimeout((() => {
                nB(tB(BB, "network-request-failed"))
              }), eQ.get());
              iQ()[WQ] = () => {
                iQ().clearTimeout(dB), delete iQ()[WQ];
                const QB = iQ().grecaptcha;
                if (!QB || !Sj(QB)) return void nB(tB(BB, "internal-error"));
                const IB = QB.render;
                QB.render = (BB, jB) => {
                  const zB = IB(BB, jB);
                  return this.counter++, zB
                }, this.hostLanguage = jB, zB(QB)
              };
              ij(`https://www.google.com/recaptcha/api.js??${(0,QB.$)({onload:WQ,render:"explicit",hl:jB})}`).catch((() => {
                clearTimeout(dB), nB(tB(BB, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(BB) {
            var jB;
            return !!(null === (jB = iQ().grecaptcha) || void 0 === jB ? void 0 : jB.render) && (BB === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class wQ {
          async load(BB) {
            return new TQ(BB)
          }
          clearedOneInstance() {}
        }
        const xQ = "recaptcha",
          KQ = {
            theme: "light",
            type: "image"
          };
        class CQ {
          constructor(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, KQ),
              zB = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = jB, this.type = xQ, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = Fj(zB), this.isInvisible = "invisible" === this.parameters.size, iB("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const QB = "string" === typeof BB ? document.getElementById(BB) : BB;
            iB(QB, this.auth, "argument-error"), this.container = QB, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new wQ : new lQ, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const BB = await this.render(),
              jB = this.getAssertedRecaptcha(),
              zB = jB.getResponse(BB);
            return zB || new Promise((zB => {
              const QB = BB => {
                BB && (this.tokenChangeListeners.delete(QB), zB(BB))
              };
              this.tokenChangeListeners.add(QB), this.isInvisible && jB.execute(BB)
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
            iB(!this.parameters.sitekey, this.auth, "argument-error"), iB(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), iB("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(BB) {
            return jB => {
              if (this.tokenChangeListeners.forEach((BB => BB(jB))), "function" === typeof BB) BB(jB);
              else if ("string" === typeof BB) {
                const zB = iQ()[BB];
                "function" === typeof zB && zB(jB)
              }
            }
          }
          assertNotDestroyed() {
            iB(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let BB = this.container;
              if (!this.isInvisible) {
                const jB = document.createElement("div");
                BB.appendChild(jB), BB = jB
              }
              this.widgetId = this.getAssertedRecaptcha().render(BB, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            iB(HB() && !qQ(), this.auth, "internal-error"), await
            function() {
              let BB = null;
              return new Promise((jB => {
                "complete" !== document.readyState ? (BB = () => jB(), window.addEventListener("load", BB)) : jB()
              })).catch((jB => {
                throw BB && window.removeEventListener("load", BB), jB
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const BB = await async function(BB) {
              return (await AB(BB, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            iB(BB, this.auth, "internal-error"), this.parameters.sitekey = BB
          }
          getAssertedRecaptcha() {
            return iB(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class cQ {
          constructor(BB, jB) {
            this.verificationId = BB, this.onConfirmation = jB
          }
          confirm(BB) {
            const jB = bj._fromVerification(this.verificationId, BB);
            return this.onConfirmation(jB)
          }
        }
        async function bQ(BB, jB, zB) {
          const nB = Fj(BB),
            dB = await OQ(nB, jB, (0, QB.H)(zB));
          return new cQ(dB, (BB => tz(nB, BB)))
        }
        async function vQ(BB, jB, zB) {
          const nB = (0, QB.H)(BB);
          await Gz(!1, nB, "phone");
          const dB = await OQ(nB.auth, jB, (0, QB.H)(zB));
          return new cQ(dB, (BB => Sz(nB, BB)))
        }
        async function RQ(BB, jB, zB) {
          const nB = (0, QB.H)(BB),
            dB = await OQ(nB.auth, jB, (0, QB.H)(zB));
          return new cQ(dB, (BB => Mz(nB, BB)))
        }
        async function OQ(BB, jB, zB) {
          var QB;
          const nB = await zB.verify();
          try {
            let dB;
            if (iB("string" === typeof nB, BB, "argument-error"), iB(zB.type === xQ, BB, "argument-error"), dB = "string" === typeof jB ? {
                phoneNumber: jB
              } : jB, "session" in dB) {
              const jB = dB.session;
              if ("phoneNumber" in dB) {
                iB("enroll" === jB.type, BB, "internal-error");
                const zB = await
                function(BB, jB) {
                  return AB(BB, "POST", "/v2/accounts/mfaEnrollment:start", ZB(BB, jB))
                }(BB, {
                  idToken: jB.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: dB.phoneNumber,
                    recaptchaToken: nB
                  }
                });
                return zB.phoneSessionInfo.sessionInfo
              } {
                iB("signin" === jB.type, BB, "internal-error");
                const zB = (null === (QB = dB.multiFactorHint) || void 0 === QB ? void 0 : QB.uid) || dB.multiFactorUid;
                iB(zB, BB, "missing-multi-factor-info");
                const IB = await
                function(BB, jB) {
                  return AB(BB, "POST", "/v2/accounts/mfaSignIn:start", ZB(BB, jB))
                }(BB, {
                  mfaPendingCredential: jB.credential,
                  mfaEnrollmentId: zB,
                  phoneSignInInfo: {
                    recaptchaToken: nB
                  }
                });
                return IB.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: jB
              } = await async function(BB, jB) {
                return AB(BB, "POST", "/v1/accounts:sendVerificationCode", ZB(BB, jB))
              }(BB, {
                phoneNumber: dB.phoneNumber,
                recaptchaToken: nB
              });
              return jB
            }
          } finally {
            zB._reset()
          }
        }
        async function Bn(BB, jB) {
          await kz((0, QB.H)(BB), jB)
        }
        class jn {
          constructor(BB) {
            this.providerId = jn.PROVIDER_ID, this.auth = Fj(BB)
          }
          verifyPhoneNumber(BB, jB) {
            return OQ(this.auth, BB, (0, QB.H)(jB))
          }
          static credential(BB, jB) {
            return bj._fromVerification(BB, jB)
          }
          static credentialFromResult(BB) {
            const jB = BB;
            return jn.credentialFromTaggedObject(jB)
          }
          static credentialFromError(BB) {
            return jn.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: jB
            } = BB;
            if (!jB) return null;
            const {
              phoneNumber: zB,
              temporaryProof: QB
            } = jB;
            return zB && QB ? bj._fromTokenResponse(zB, QB) : null
          }
        }

        function zn(BB, jB) {
          return jB ? dj(jB) : (iB(BB._popupRedirectResolver, BB, "argument-error"), BB._popupRedirectResolver)
        }
        jn.PROVIDER_ID = "phone", jn.PHONE_SIGN_IN_METHOD = "phone";
        class Qn extends Aj {
          constructor(BB) {
            super("custom", "custom"), this.params = BB
          }
          _getIdTokenResponse(BB) {
            return Kj(BB, this._buildIdpRequest())
          }
          _linkToIdToken(BB, jB) {
            return Kj(BB, this._buildIdpRequest(jB))
          }
          _getReauthenticationResolver(BB) {
            return Kj(BB, this._buildIdpRequest())
          }
          _buildIdpRequest(BB) {
            const jB = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return BB && (jB.idToken = BB), jB
          }
        }

        function nn(BB) {
          return gz(BB.auth, new Qn(BB), BB.bypassAuthState)
        }

        function dn(BB) {
          const {
            auth: jB,
            user: zB
          } = BB;
          return iB(zB, jB, "internal-error"), Lz(zB, new Qn(BB), BB.bypassAuthState)
        }
        async function In(BB) {
          const {
            auth: jB,
            user: zB
          } = BB;
          return iB(zB, jB, "internal-error"), kz(zB, new Qn(BB), BB.bypassAuthState)
        }
        class Nn {
          constructor(BB, jB, zB, QB) {
            let nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = BB, this.resolver = zB, this.user = QB, this.bypassAuthState = nB, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(jB) ? jB : [jB]
          }
          execute() {
            return new Promise((async (BB, jB) => {
              this.pendingPromise = {
                resolve: BB,
                reject: jB
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (zB) {
                this.reject(zB)
              }
            }))
          }
          async onAuthEvent(BB) {
            const {
              urlResponse: jB,
              sessionId: zB,
              postBody: QB,
              tenantId: nB,
              error: dB,
              type: IB
            } = BB;
            if (dB) return void this.reject(dB);
            const NB = {
              auth: this.auth,
              requestUri: jB,
              sessionId: zB,
              tenantId: nB || void 0,
              postBody: QB || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(IB)(NB))
            } catch (uB) {
              this.reject(uB)
            }
          }
          onError(BB) {
            this.reject(BB)
          }
          getIdpTask(BB) {
            switch (BB) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return nn;
              case "linkViaPopup":
              case "linkViaRedirect":
                return In;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return dn;
              default:
                gB(this.auth, "internal-error")
            }
          }
          resolve(BB) {
            fB(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(BB), this.unregisterAndCleanUp()
          }
          reject(BB) {
            fB(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(BB), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const un = new FB(2e3, 1e4);
        async function Un(BB, jB, zB) {
          const QB = Fj(BB);
          MB(BB, jB, Bz);
          const nB = zn(QB, zB);
          return new rn(QB, "signInViaPopup", jB, nB).executeNotNull()
        }
        async function an(BB, jB, zB) {
          const nB = (0, QB.H)(BB);
          MB(nB.auth, jB, Bz);
          const dB = zn(nB.auth, zB);
          return new rn(nB.auth, "reauthViaPopup", jB, dB, nB).executeNotNull()
        }
        async function pn(BB, jB, zB) {
          const nB = (0, QB.H)(BB);
          MB(nB.auth, jB, Bz);
          const dB = zn(nB.auth, zB);
          return new rn(nB.auth, "linkViaPopup", jB, dB, nB).executeNotNull()
        }
        class rn extends Nn {
          constructor(BB, jB, zB, QB, nB) {
            super(BB, jB, QB, nB), this.provider = zB, this.authWindow = null, this.pollId = null, rn.currentPopupAction && rn.currentPopupAction.cancel(), rn.currentPopupAction = this
          }
          async executeNotNull() {
            const BB = await this.execute();
            return iB(BB, this.auth, "internal-error"), BB
          }
          async onExecution() {
            fB(1 === this.filter.length, "Popup operations only handle one event");
            const BB = MQ();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], BB), this.authWindow.associatedEvent = BB, this.resolver._originValidation(this.auth).catch((BB => {
              this.reject(BB)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (BB => {
              BB || this.reject(tB(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var BB;
            return (null === (BB = this.authWindow) || void 0 === BB ? void 0 : BB.associatedEvent) || null
          }
          cancel() {
            this.reject(tB(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, rn.currentPopupAction = null
          }
          pollUserCancellation() {
            const BB = () => {
              var jB, zB;
              (null === (zB = null === (jB = this.authWindow) || void 0 === jB ? void 0 : jB.window) || void 0 === zB ? void 0 : zB.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(tB(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(BB, un.get())
            };
            BB()
          }
        }
        rn.currentPopupAction = null;
        const sn = "pendingRedirect",
          Jn = new Map;
        class mn extends Nn {
          constructor(BB, jB) {
            super(BB, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], jB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let BB = Jn.get(this.auth._key());
            if (!BB) {
              try {
                const jB = await async function(BB, jB) {
                  const zB = Ln(jB),
                    QB = Gn(BB);
                  if (!await QB._isAvailable()) return !1;
                  const nB = "true" === await QB._get(zB);
                  return await QB._remove(zB), nB
                }(this.resolver, this.auth) ? await super.execute() : null;
                BB = () => Promise.resolve(jB)
              } catch (jB) {
                BB = () => Promise.reject(jB)
              }
              Jn.set(this.auth._key(), BB)
            }
            return this.bypassAuthState || Jn.set(this.auth._key(), (() => Promise.resolve(null))), BB()
          }
          async onAuthEvent(BB) {
            if ("signInViaRedirect" === BB.type) return super.onAuthEvent(BB);
            if ("unknown" !== BB.type) {
              if (BB.eventId) {
                const jB = await this.auth._redirectUserForId(BB.eventId);
                if (jB) return this.user = jB, super.onAuthEvent(BB);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function yn(BB, jB) {
          return Gn(BB)._set(Ln(jB), "true")
        }

        function kn(BB, jB) {
          Jn.set(BB._key(), jB)
        }

        function Gn(BB) {
          return dj(BB._redirectPersistence)
        }

        function Ln(BB) {
          return uj(sn, BB.config.apiKey, BB.name)
        }

        function gn(BB, jB, zB) {
          return async function(BB, jB, zB) {
            const QB = Fj(BB);
            MB(BB, jB, Bz), await QB._initializationPromise;
            const nB = zn(QB, zB);
            return await yn(nB, QB), nB._openRedirect(QB, jB, "signInViaRedirect")
          }(BB, jB, zB)
        }

        function tn(BB, jB, zB) {
          return async function(BB, jB, zB) {
            const nB = (0, QB.H)(BB);
            MB(nB.auth, jB, Bz), await nB.auth._initializationPromise;
            const dB = zn(nB.auth, zB);
            await yn(dB, nB.auth);
            const IB = await qn(nB);
            return dB._openRedirect(nB.auth, jB, "reauthViaRedirect", IB)
          }(BB, jB, zB)
        }

        function Sn(BB, jB, zB) {
          return async function(BB, jB, zB) {
            const nB = (0, QB.H)(BB);
            MB(nB.auth, jB, Bz), await nB.auth._initializationPromise;
            const dB = zn(nB.auth, zB);
            await Gz(!1, nB, jB.providerId), await yn(dB, nB.auth);
            const IB = await qn(nB);
            return dB._openRedirect(nB.auth, jB, "linkViaRedirect", IB)
          }(BB, jB, zB)
        }
        async function Mn(BB, jB) {
          return await Fj(BB)._initializationPromise, En(BB, jB, !1)
        }
        async function En(BB, jB) {
          let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const QB = Fj(BB),
            nB = zn(QB, jB),
            dB = new mn(QB, nB, zB),
            IB = await dB.execute();
          return IB && !zB && (delete IB.user._redirectEventId, await QB._persistUserIfCurrent(IB.user), await QB._setRedirectUser(null, jB)), IB
        }
        async function qn(BB) {
          const jB = MQ(`${BB.uid}:::`);
          return BB._redirectEventId = jB, await BB.auth._setRedirectUser(BB), await BB.auth._persistUserIfCurrent(BB), jB
        }
        class fn {
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
            let jB = !1;
            return this.consumers.forEach((zB => {
              this.isEventForConsumer(BB, zB) && (jB = !0, this.sendToConsumer(BB, zB), this.saveEventToCache(BB))
            })), this.hasHandledPotentialRedirect || ! function(BB) {
              switch (BB.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return Dn(BB);
                default:
                  return !1
              }
            }(BB) || (this.hasHandledPotentialRedirect = !0, jB || (this.queuedRedirectEvent = BB, jB = !0)), jB
          }
          sendToConsumer(BB, jB) {
            var zB;
            if (BB.error && !Dn(BB)) {
              const QB = (null === (zB = BB.error.code) || void 0 === zB ? void 0 : zB.split("auth/")[1]) || "internal-error";
              jB.onError(tB(this.auth, QB))
            } else jB.onAuthEvent(BB)
          }
          isEventForConsumer(BB, jB) {
            const zB = null === jB.eventId || !!BB.eventId && BB.eventId === jB.eventId;
            return jB.filter.includes(BB.type) && zB
          }
          hasEventBeenHandled(BB) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(Hn(BB))
          }
          saveEventToCache(BB) {
            this.cachedEventUids.add(Hn(BB)), this.lastProcessedEventTime = Date.now()
          }
        }

        function Hn(BB) {
          return [BB.type, BB.eventId, BB.sessionId, BB.tenantId].filter((BB => BB)).join("-")
        }

        function Dn(BB) {
          let {
            type: jB,
            error: zB
          } = BB;
          return "unknown" === jB && "auth/no-auth-event" === (null === zB || void 0 === zB ? void 0 : zB.code)
        }
        const Fn = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          Yn = /^https?/;
        async function Vn(BB) {
          if (BB.config.emulator) return;
          const {
            authorizedDomains: jB
          } = await async function(BB) {
            return AB(BB, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(BB);
          for (const QB of jB) try {
            if (hn(QB)) return
          } catch (zB) {}
          gB(BB, "unauthorized-domain")
        }

        function hn(BB) {
          const jB = oB(),
            {
              protocol: zB,
              hostname: QB
            } = new URL(jB);
          if (BB.startsWith("chrome-extension://")) {
            const nB = new URL(BB);
            return "" === nB.hostname && "" === QB ? "chrome-extension:" === zB && BB.replace("chrome-extension://", "") === jB.replace("chrome-extension://", "") : "chrome-extension:" === zB && nB.hostname === QB
          }
          if (!Yn.test(zB)) return !1;
          if (Fn.test(BB)) return QB === BB;
          const nB = BB.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + nB + "|" + nB + ")$", "i").test(QB)
        }
        const Xn = new FB(3e4, 6e4);

        function Zn() {
          const BB = iQ().___jsl;
          if (null === BB || void 0 === BB ? void 0 : BB.H)
            for (const jB of Object.keys(BB.H))
              if (BB.H[jB].r = BB.H[jB].r || [], BB.H[jB].L = BB.H[jB].L || [], BB.H[jB].r = [...BB.H[jB].L], BB.CP)
                for (let zB = 0; zB < BB.CP.length; zB++) BB.CP[zB] = null
        }
        let An = null;

        function Tn(BB) {
          return An = An || function(BB) {
            return new Promise(((jB, zB) => {
              var QB, nB, dB;

              function IB() {
                Zn(), gapi.load("gapi.iframes", {
                  callback: () => {
                    jB(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    Zn(), zB(tB(BB, "network-request-failed"))
                  },
                  timeout: Xn.get()
                })
              }
              if (null === (nB = null === (QB = iQ().gapi) || void 0 === QB ? void 0 : QB.iframes) || void 0 === nB ? void 0 : nB.Iframe) jB(gapi.iframes.getContext());
              else {
                if (!(null === (dB = iQ().gapi) || void 0 === dB ? void 0 : dB.load)) {
                  const jB = qj("iframefcb");
                  return iQ()[jB] = () => {
                    gapi.load ? IB() : zB(tB(BB, "network-request-failed"))
                  }, ij(`https://apis.google.com/js/api.js?onload=${jB}`).catch((BB => zB(BB)))
                }
                IB()
              }
            })).catch((BB => {
              throw An = null, BB
            }))
          }(BB), An
        }
        const Pn = new FB(5e3, 15e3),
          Wn = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          en = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function wn(BB) {
          const jB = BB.config;
          iB(jB.authDomain, BB, "auth-domain-config-required");
          const zB = jB.emulator ? YB(jB, "emulator/auth/iframe") : `https://${BB.config.authDomain}/__/auth/iframe`,
            dB = {
              apiKey: jB.apiKey,
              appName: BB.name,
              v: nB.e
            },
            IB = en.get(BB.config.apiHost);
          IB && (dB.eid = IB);
          const NB = BB._getFrameworks();
          return NB.length && (dB.fw = NB.join(",")), `${zB}?${(0,QB.$)(dB).slice(1)}`
        }
        const xn = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class Kn {
          constructor(BB) {
            this.window = BB, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (BB) {}
          }
        }

        function Cn(BB, jB, zB) {
          let nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const IB = Math.max((window.screen.availHeight - dB) / 2, 0).toString(),
            NB = Math.max((window.screen.availWidth - nB) / 2, 0).toString();
          let uB = "";
          const UB = Object.assign(Object.assign({}, xn), {
              width: nB.toString(),
              height: dB.toString(),
              top: IB,
              left: NB
            }),
            aB = (0, QB.J)().toLowerCase();
          zB && (uB = sj(aB) ? "_blank" : zB), pj(aB) && (jB = jB || "http://localhost", UB.scrollbars = "yes");
          const pB = Object.entries(UB).reduce(((BB, jB) => {
            let [zB, QB] = jB;
            return `${BB}${zB}=${QB},`
          }), "");
          if (function() {
              var BB;
              return Gj(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.J)()) && !!(null === (BB = window.navigator) || void 0 === BB ? void 0 : BB.standalone)
            }(aB) && "_self" !== uB) return function(BB, jB) {
            const zB = document.createElement("a");
            zB.href = BB, zB.target = jB;
            const QB = document.createEvent("MouseEvent");
            QB.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), zB.dispatchEvent(QB)
          }(jB || "", uB), new Kn(null);
          const rB = window.open(jB || "", uB, pB);
          iB(rB, BB, "popup-blocked");
          try {
            rB.focus()
          } catch (sB) {}
          return new Kn(rB)
        }
        const cn = "__/auth/handler",
          bn = "emulator/auth/handler",
          vn = encodeURIComponent("fac");
        async function Rn(BB, jB, zB, dB, IB, NB) {
            iB(BB.config.authDomain, BB, "auth-domain-config-required"), iB(BB.config.apiKey, BB, "invalid-api-key");
            const uB = {
              apiKey: BB.config.apiKey,
              appName: BB.name,
              authType: zB,
              redirectUrl: dB,
              v: nB.e,
              eventId: IB
            };
            if (jB instanceof Bz) {
              jB.setDefaultLanguage(BB.languageCode), uB.providerId = jB.providerId || "", (0, QB.N)(jB.getCustomParameters()) || (uB.customParameters = JSON.stringify(jB.getCustomParameters()));
              for (const [BB, jB] of Object.entries(NB || {})) uB[BB] = jB
            }
            if (jB instanceof jz) {
              const BB = jB.getScopes().filter((BB => "" !== BB));
              BB.length > 0 && (uB.scopes = BB.join(","))
            }
            BB.tenantId && (uB.tid = BB.tenantId);
            const UB = uB;
            for (const QB of Object.keys(UB)) void 0 === UB[QB] && delete UB[QB];
            const aB = await BB._getAppCheckToken(),
              pB = aB ? `#${vn}=${encodeURIComponent(aB)}` : "";
            return `${function(BB){let{config:jB}=BB;if(!jB.emulator)return`
            https: //${jB.authDomain}/${cn}`;return YB(jB,bn)}(BB)}?${(0,QB.$)(UB).slice(1)}${pB}`}const On="webStorageSupport";const Bd=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tQ,this._completeRedirectFn=En,this._overrideRedirectResult=kn}async _openPopup(BB,jB,zB,QB){var nB;fB(null===(nB=this.eventManagers[BB._key()])||void 0===nB?void 0:nB.manager,"_initialize() not called before _openPopup()");return Cn(BB,await Rn(BB,jB,zB,oB(),QB),MQ())}async _openRedirect(BB,jB,zB,QB){await this._originValidation(BB);return function(BB){iQ().location.href=BB}(await Rn(BB,jB,zB,oB(),QB)),new Promise((()=>{}))}_initialize(BB){const jB=BB._key();if(this.eventManagers[jB]){const{manager:BB,promise:zB}=this.eventManagers[jB];return BB?Promise.resolve(BB):(fB(zB,"If manager is not set, promise should be"),zB)}const zB=this.initAndGetManager(BB);return this.eventManagers[jB]={promise:zB},zB.catch((()=>{delete this.eventManagers[jB]})),zB}async initAndGetManager(BB){const jB=await async function(BB){const jB=await Tn(BB),zB=iQ().gapi;return iB(zB,BB,"internal-error"),jB.open({where:document.body,url:wn(BB),messageHandlersFilter:zB.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wn,dontclear:!0},(jB=>new Promise((async(zB,QB)=>{await jB.restyle({setHideOnLeave:!1});const nB=tB(BB,"network-request-failed"),dB=iQ().setTimeout((()=>{QB(nB)}),Pn.get());function IB(){iQ().clearTimeout(dB),zB(jB)}jB.ping(IB).then(IB,(()=>{QB(nB)}))}))))}(BB),zB=new fn(BB);return jB.register("authEvent",(jB=>{iB(null===jB||void 0===jB?void 0:jB.authEvent,BB,"invalid-auth-event");return{status:zB.onEvent(jB.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[BB._key()]={manager:zB},this.iframes[BB._key()]=jB,zB}_isIframeWebStorageSupported(BB,jB){this.iframes[BB._key()].send(On,{type:On},(zB=>{var QB;const nB=null===(QB=null===zB||void 0===zB?void 0:zB[0])||void 0===QB?void 0:QB[On];void 0!==nB&&jB(!!nB),gB(BB,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(BB){const jB=BB._key();return this.originValidationPromises[jB]||(this.originValidationPromises[jB]=Vn(BB)),this.originValidationPromises[jB]}get _shouldInitProactively(){return Lj()||rj()||Gj()}};class jd{constructor(BB){this.factorId=BB}_process(BB,jB,zB){switch(jB.type){case"enroll":return this._finalizeEnroll(BB,jB.credential,zB);case"signin":return this._finalizeSignIn(BB,jB.credential);default:return qB("unexpected MultiFactorSessionType")}}}class zd extends jd{constructor(BB){super("phone"),this.credential=BB}static _fromCredential(BB){return new zd(BB)}_finalizeEnroll(BB,jB,zB){return function(BB,jB){return AB(BB,"POST","/v2/accounts/mfaEnrollment:finalize",ZB(BB,jB))}(BB,{idToken:jB,displayName:zB,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(BB,jB){return function(BB,jB){return AB(BB,"POST","/v2/accounts/mfaSignIn:finalize",ZB(BB,jB))}(BB,{mfaPendingCredential:jB,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Qd{constructor(){}static assertion(BB){return zd._fromCredential(BB)}}Qd.FACTOR_ID="phone";class nd{static assertionForEnrollment(BB,jB){return dd._fromSecret(BB,jB)}static assertionForSignIn(BB,jB){return dd._fromEnrollmentId(BB,jB)}static async generateSecret(BB){const jB=BB;iB("undefined"!==typeof jB.auth,"internal-error");const zB=await(QB=jB.auth,nB={idToken:jB.credential,totpEnrollmentInfo:{}},AB(QB,"POST","/v2/accounts/mfaEnrollment:start",ZB(QB,nB)));var QB,nB;return Id._fromStartTotpMfaEnrollmentResponse(zB,jB.auth)}}nd.FACTOR_ID="totp";class dd extends jd{constructor(BB,jB,zB){super("totp"),this.otp=BB,this.enrollmentId=jB,this.secret=zB}static _fromSecret(BB,jB){return new dd(jB,void 0,BB)}static _fromEnrollmentId(BB,jB){return new dd(jB,BB)}async _finalizeEnroll(BB,jB,zB){return iB("undefined"!==typeof this.secret,BB,"argument-error"),function(BB,jB){return AB(BB,"POST","/v2/accounts/mfaEnrollment:finalize",ZB(BB,jB))}(BB,{idToken:jB,displayName:zB,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(BB,jB){iB(void 0!==this.enrollmentId&&void 0!==this.otp,BB,"argument-error");const zB={verificationCode:this.otp};return function(BB,jB){return AB(BB,"POST","/v2/accounts/mfaSignIn:finalize",ZB(BB,jB))}(BB,{mfaPendingCredential:jB,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:zB})}}class Id{constructor(BB,jB,zB,QB,nB,dB,IB){this.sessionInfo=dB,this.auth=IB,this.secretKey=BB,this.hashingAlgorithm=jB,this.codeLength=zB,this.codeIntervalSeconds=QB,this.enrollmentCompletionDeadline=nB}static _fromStartTotpMfaEnrollmentResponse(BB,jB){return new Id(BB.totpSessionInfo.sharedSecretKey,BB.totpSessionInfo.hashingAlgorithm,BB.totpSessionInfo.verificationCodeLength,BB.totpSessionInfo.periodSec,new Date(BB.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),BB.totpSessionInfo.sessionInfo,jB)}_makeTotpVerificationInfo(BB){return{sessionInfo:this.sessionInfo,verificationCode:BB}}generateQrCodeUrl(BB,jB){var zB;let QB=!1;return(Nd(BB)||Nd(jB))&&(QB=!0),QB&&(Nd(BB)&&(BB=(null===(zB=this.auth.currentUser)||void 0===zB?void 0:zB.email)||"unknownuser"),Nd(jB)&&(jB=this.auth.name)),`otpauth://totp/${jB}:${BB}?secret=${this.secretKey}&issuer=${jB}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Nd(BB){return"undefined"===typeof BB||0===(null===BB||void 0===BB?void 0:BB.length)}var ud="@firebase/auth",Ud="0.23.2";class pd{constructor(BB){this.auth=BB,this.internalListeners=new Map}getUid(){var BB;return this.assertAuthConfigured(),(null===(BB=this.auth.currentUser)||void 0===BB?void 0:BB.uid)||null}async getToken(BB){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(BB)}}addAuthTokenListener(BB){if(this.assertAuthConfigured(),this.internalListeners.has(BB))return;const jB=this.auth.onIdTokenChanged((jB=>{BB((null===jB||void 0===jB?void 0:jB.stsTokenManager.accessToken)||null)}));this.internalListeners.set(BB,jB),this.updateProactiveRefresh()}removeAuthTokenListener(BB){this.assertAuthConfigured();const jB=this.internalListeners.get(BB);jB&&(this.internalListeners.delete(BB),jB(),this.updateProactiveRefresh())}assertAuthConfigured(){iB(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const rd=(0,QB.G)("authIdTokenMaxAge")||300;let sd=null;const Jd=BB=>async jB=>{const zB=jB&&await jB.getIdTokenResult(),QB=zB&&((new Date).getTime()-Date.parse(zB.issuedAtTime))/1e3;if(QB&&QB>rd)return;const nB=null===zB||void 0===zB?void 0:zB.token;sd!==nB&&(sd=nB,await fetch(BB,{method:nB?"POST":"DELETE",headers:nB?{Authorization:`Bearer ${nB}`}:{}}))};function md(){let BB=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,nB.N)();const jB=(0,nB.z)(BB,"auth");if(jB.isInitialized())return jB.getImmediate();const zB=Vj(BB,{popupRedirectResolver:Bd,persistence:[ZQ,LQ,tQ]}),dB=(0,QB.G)("authTokenSyncURL");if(dB){const BB=Jd(dB);nQ(zB,BB,(()=>BB(zB.currentUser))),QQ(zB,(jB=>BB(jB)))}const IB=(0,QB.D)("auth");return IB&&hj(zB,`http://${IB}`),zB}var yd;yd="Browser",(0,nB.D)(new NB.d("auth",((BB,jB)=>{let{options:zB}=jB;const QB=BB.getProvider("app").getImmediate(),nB=BB.getProvider("heartbeat"),dB=BB.getProvider("app-check-internal"),{apiKey:IB,authDomain:NB}=QB.options;iB(IB&&!IB.includes(":"),"invalid-api-key",{appName:QB.name});const uB={apiKey:IB,authDomain:NB,clientPlatform:yd,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gj(yd)},UB=new Dj(QB,nB,dB,uB);return function(BB,jB){const zB=(null===jB||void 0===jB?void 0:jB.persistence)||[],QB=(Array.isArray(zB)?zB:[zB]).map(dj);(null===jB||void 0===jB?void 0:jB.errorMap)&&BB._updateErrorMap(jB.errorMap),BB._initializeWithPersistence(QB,null===jB||void 0===jB?void 0:jB.popupRedirectResolver)}(UB,zB),UB}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((BB,jB,zB)=>{BB.getProvider("auth-internal").initialize()}))),(0,nB.D)(new NB.d("auth-internal",(BB=>(BB=>new pd(BB))(Fj(BB.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,nB.X)(ud,Ud,function(BB){switch(BB){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(yd)),(0,nB.X)(ud,Ud,"esm2017")}};Object.freeze(modules);for(const BB in modules)Object.freeze(modules[BB]);