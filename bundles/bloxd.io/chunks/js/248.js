/*! For license information please see l9xvfg.248.a5dd6768.chunk.js.LICENSE.txt */
export const id = 248;
export const ids = [248];
export const modules = {
    39267: (BB, TB, dB) => {
        dB.r(TB), dB.d(TB, {
          ActionCodeOperation: () => LB,
          ActionCodeURL: () => bT,
          AuthCredential: () => RT,
          AuthErrorCodes: () => EB,
          EmailAuthCredential: () => GT,
          EmailAuthProvider: () => eT,
          FacebookAuthProvider: () => Vd,
          FactorId: () => YB,
          GithubAuthProvider: () => pd,
          GoogleAuthProvider: () => yd,
          OAuthCredential: () => xT,
          OAuthProvider: () => dd,
          OperationType: () => kB,
          PhoneAuthCredential: () => AT,
          PhoneAuthProvider: () => dy,
          PhoneMultiFactorGenerator: () => Tp,
          ProviderId: () => gB,
          RecaptchaVerifier: () => jV,
          SAMLAuthProvider: () => Jd,
          SignInMethod: () => oB,
          TotpMultiFactorGenerator: () => dp,
          TotpSecret: () => yp,
          TwitterAuthProvider: () => Yd,
          applyActionCode: () => Id,
          beforeAuthStateChanged: () => pV,
          browserLocalPersistence: () => iV,
          browserPopupRedirectResolver: () => ny,
          browserSessionPersistence: () => tV,
          checkActionCode: () => cd,
          confirmPasswordReset: () => rd,
          connectAuthEmulator: () => ST,
          createUserWithEmailAndPassword: () => Pd,
          debugErrorMap: () => DB,
          deleteUser: () => oV,
          fetchSignInMethodsForEmail: () => Xd,
          getAdditionalUserInfo: () => TV,
          getAuth: () => Lp,
          getIdToken: () => GB,
          getIdTokenResult: () => qB,
          getMultiFactorResolver: () => OV,
          getRedirectResult: () => sy,
          inMemoryPersistence: () => JT,
          indexedDBLocalPersistence: () => RV,
          initializeAuth: () => cT,
          initializeRecaptchaConfig: () => VV,
          isSignInWithEmailLink: () => ad,
          linkWithCredential: () => fd,
          linkWithPhoneNumber: () => nV,
          linkWithPopup: () => Ly,
          linkWithRedirect: () => fy,
          multiFactor: () => HV,
          onAuthStateChanged: () => lV,
          onIdTokenChanged: () => yV,
          parseActionCodeURL: () => nT,
          prodErrorMap: () => uB,
          reauthenticateWithCredential: () => sd,
          reauthenticateWithPhoneNumber: () => eV,
          reauthenticateWithPopup: () => ky,
          reauthenticateWithRedirect: () => ty,
          reload: () => BT,
          sendEmailVerification: () => Wd,
          sendPasswordResetEmail: () => Kd,
          sendSignInLinkToEmail: () => Rd,
          setPersistence: () => dV,
          signInAnonymously: () => Ld,
          signInWithCredential: () => td,
          signInWithCustomToken: () => Md,
          signInWithEmailAndPassword: () => Qd,
          signInWithEmailLink: () => Zd,
          signInWithPhoneNumber: () => bV,
          signInWithPopup: () => oy,
          signInWithRedirect: () => Ny,
          signOut: () => gV,
          unlink: () => Hd,
          updateCurrentUser: () => YV,
          updateEmail: () => Gd,
          updatePassword: () => qd,
          updatePhoneNumber: () => Ty,
          updateProfile: () => Cd,
          useDeviceLanguage: () => JV,
          verifyBeforeUpdateEmail: () => hd,
          verifyPasswordResetCode: () => Sd
        });
        var VB = dB(39255),
          yB = dB(39248);

        function pB(BB, TB) {
          var dB = {};
          for (var VB in BB) Object.prototype.hasOwnProperty.call(BB, VB) && TB.indexOf(VB) < 0 && (dB[VB] = BB[VB]);
          if (null != BB && "function" === typeof Object.getOwnPropertySymbols) {
            var yB = 0;
            for (VB = Object.getOwnPropertySymbols(BB); yB < VB.length; yB++) TB.indexOf(VB[yB]) < 0 && Object.prototype.propertyIsEnumerable.call(BB, VB[yB]) && (dB[VB[yB]] = BB[VB[yB]])
          }
          return dB
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var lB = dB(39258),
          JB = dB(39253);
        const YB = {
            PHONE: "phone",
            TOTP: "totp"
          },
          gB = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          oB = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          kB = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          LB = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function OB() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const DB = function() {
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
          uB = OB,
          HB = new VB.e("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          EB = {
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
          vB = new lB.h("@firebase/auth");

        function mB(BB) {
          if (vB.logLevel <= lB.e.ERROR) {
            for (var TB = arguments.length, dB = new Array(TB > 1 ? TB - 1 : 0), VB = 1; VB < TB; VB++) dB[VB - 1] = arguments[VB];
            vB.error(`Auth (${yB.h}): ${BB}`, ...dB)
          }
        }

        function iB(BB) {
          for (var TB = arguments.length, dB = new Array(TB > 1 ? TB - 1 : 0), VB = 1; VB < TB; VB++) dB[VB - 1] = arguments[VB];
          throw sB(BB, ...dB)
        }

        function NB(BB) {
          for (var TB = arguments.length, dB = new Array(TB > 1 ? TB - 1 : 0), VB = 1; VB < TB; VB++) dB[VB - 1] = arguments[VB];
          return sB(BB, ...dB)
        }

        function tB(BB, TB, dB) {
          const yB = Object.assign(Object.assign({}, uB()), {
            [TB]: dB
          });
          return new VB.e("auth", "Firebase", yB).create(TB, {
            appName: BB.name
          })
        }

        function fB(BB, TB, dB) {
          if (!(TB instanceof dB)) throw dB.name !== TB.constructor.name && iB(BB, "argument-error"), tB(BB, "argument-error", `Type of ${TB.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function sB(BB) {
          for (var TB = arguments.length, dB = new Array(TB > 1 ? TB - 1 : 0), VB = 1; VB < TB; VB++) dB[VB - 1] = arguments[VB];
          if ("string" !== typeof BB) {
            const TB = dB[0],
              VB = [...dB.slice(1)];
            return VB[0] && (VB[0].appName = BB.name), BB._errorFactory.create(TB, ...VB)
          }
          return HB.create(BB, ...dB)
        }

        function MB(BB, TB) {
          if (!BB) {
            for (var dB = arguments.length, VB = new Array(dB > 2 ? dB - 2 : 0), yB = 2; yB < dB; yB++) VB[yB - 2] = arguments[yB];
            throw sB(TB, ...VB)
          }
        }

        function zB(BB) {
          const TB = "INTERNAL ASSERTION FAILED: " + BB;
          throw mB(TB), new Error(TB)
        }

        function wB(BB, TB) {
          BB || zB(TB)
        }

        function UB() {
          var BB;
          return "undefined" !== typeof self && (null === (BB = self.location) || void 0 === BB ? void 0 : BB.href) || ""
        }

        function FB() {
          return "http:" === KB() || "https:" === KB()
        }

        function KB() {
          var BB;
          return "undefined" !== typeof self && (null === (BB = self.location) || void 0 === BB ? void 0 : BB.protocol) || null
        }
        class rB {
          constructor(BB, TB) {
            this.shortDelay = BB, this.longDelay = TB, wB(TB > BB, "Short delay should be less than long delay!"), this.isMobile = (0, VB.db)() || (0, VB.gb)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (FB() || (0, VB.V)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function IB(BB, TB) {
          wB(BB.emulator, "Emulator should always be set here");
          const {
            url: dB
          } = BB.emulator;
          return TB ? `${dB}${TB.startsWith("/")?TB.slice(1):TB}` : dB
        }
        class cB {
          static initialize(BB, TB, dB) {
            this.fetchImpl = BB, TB && (this.headersImpl = TB), dB && (this.responseImpl = dB)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void zB("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void zB("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void zB("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const SB = {
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
          PB = new rB(3e4, 6e4);

        function QB(BB, TB) {
          return BB.tenantId && !TB.tenantId ? Object.assign(Object.assign({}, TB), {
            tenantId: BB.tenantId
          }) : TB
        }
        async function RB(BB, TB, dB, yB) {
          return aB(BB, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let pB = {},
              lB = {};
            yB && ("GET" === TB ? lB = yB : pB = {
              body: JSON.stringify(yB)
            });
            const JB = (0, VB.mb)(Object.assign({
                key: BB.config.apiKey
              }, lB)).slice(1),
              YB = await BB._getAdditionalHeaders();
            return YB["Content-Type"] = "application/json", BB.languageCode && (YB["X-Firebase-Locale"] = BB.languageCode), cB.fetch()(XB(BB, BB.config.apiHost, dB, JB), Object.assign({
              method: TB,
              headers: YB,
              referrerPolicy: "no-referrer"
            }, pB))
          }))
        }
        async function aB(BB, TB, dB) {
          BB._canInitEmulator = !1;
          const yB = Object.assign(Object.assign({}, SB), TB);
          try {
            const TB = new WB(BB),
              VB = await Promise.race([dB(), TB.promise]);
            TB.clearNetworkTimeout();
            const pB = await VB.json();
            if ("needConfirmation" in pB) throw hB(BB, "account-exists-with-different-credential", pB);
            if (VB.ok && !("errorMessage" in pB)) return pB;
            {
              const TB = VB.ok ? pB.errorMessage : pB.error.message,
                [dB, lB] = TB.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === dB) throw hB(BB, "credential-already-in-use", pB);
              if ("EMAIL_EXISTS" === dB) throw hB(BB, "email-already-in-use", pB);
              if ("USER_DISABLED" === dB) throw hB(BB, "user-disabled", pB);
              const JB = yB[dB] || dB.toLowerCase().replace(/[_\s]+/g, "-");
              if (lB) throw tB(BB, JB, lB);
              iB(BB, JB)
            }
          } catch (pB) {
            if (pB instanceof VB.g) throw pB;
            iB(BB, "network-request-failed", {
              message: String(pB)
            })
          }
        }
        async function ZB(BB, TB, dB, VB) {
          let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const pB = await RB(BB, TB, dB, VB, yB);
          return "mfaPendingCredential" in pB && iB(BB, "multi-factor-auth-required", {
            _serverResponse: pB
          }), pB
        }

        function XB(BB, TB, dB, VB) {
          const yB = `${TB}${dB}?${VB}`;
          return BB.config.emulator ? IB(BB.config, yB) : `${BB.config.apiScheme}://${yB}`
        }
        class WB {
          constructor(BB) {
            this.auth = BB, this.timer = null, this.promise = new Promise(((BB, TB) => {
              this.timer = setTimeout((() => TB(NB(this.auth, "network-request-failed"))), PB.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function hB(BB, TB, dB) {
          const VB = {
            appName: BB.name
          };
          dB.email && (VB.email = dB.email), dB.phoneNumber && (VB.phoneNumber = dB.phoneNumber);
          const yB = NB(BB, TB, VB);
          return yB.customData._tokenResponse = dB, yB
        }

        function CB(BB) {
          if (BB) try {
            const TB = new Date(Number(BB));
            if (!isNaN(TB.getTime())) return TB.toUTCString()
          } catch (TB) {}
        }

        function GB(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, VB.N)(BB).getIdToken(TB)
        }
        async function qB(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const dB = (0, VB.N)(BB),
            yB = await dB.getIdToken(TB),
            pB = jB(yB);
          MB(pB && pB.exp && pB.auth_time && pB.iat, dB.auth, "internal-error");
          const lB = "object" === typeof pB.firebase ? pB.firebase : void 0,
            JB = null === lB || void 0 === lB ? void 0 : lB.sign_in_provider;
          return {
            claims: pB,
            token: yB,
            authTime: CB(xB(pB.auth_time)),
            issuedAtTime: CB(xB(pB.iat)),
            expirationTime: CB(xB(pB.exp)),
            signInProvider: JB || null,
            signInSecondFactor: (null === lB || void 0 === lB ? void 0 : lB.sign_in_second_factor) || null
          }
        }

        function xB(BB) {
          return 1e3 * Number(BB)
        }

        function jB(BB) {
          const [TB, dB, yB] = BB.split(".");
          if (void 0 === TB || void 0 === dB || void 0 === yB) return mB("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const BB = (0, VB.l)(dB);
            return BB ? JSON.parse(BB) : (mB("Failed to decode base64 JWT payload"), null)
          } catch (pB) {
            return mB("Caught error parsing JWT payload as JSON", null === pB || void 0 === pB ? void 0 : pB.toString()), null
          }
        }
        async function AB(BB, TB) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return TB;
          try {
            return await TB
          } catch (dB) {
            throw dB instanceof VB.g && function(BB) {
              let {
                code: TB
              } = BB;
              return "auth/user-disabled" === TB || "auth/user-token-expired" === TB
            }(dB) && BB.auth.currentUser === BB && await BB.auth.signOut(), dB
          }
        }
        class bB {
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
            var TB;
            if (BB) {
              const BB = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), BB
            } {
              this.errorBackoff = 3e4;
              const BB = (null !== (TB = this.user.stsTokenManager.expirationTime) && void 0 !== TB ? TB : 0) - Date.now() - 3e5;
              return Math.max(0, BB)
            }
          }
          schedule() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const TB = this.getInterval(BB);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), TB)
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
        class nB {
          constructor(BB, TB) {
            this.createdAt = BB, this.lastLoginAt = TB, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = CB(this.lastLoginAt), this.creationTime = CB(this.createdAt)
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
        async function eB(BB) {
          var TB;
          const dB = BB.auth,
            VB = await BB.getIdToken(),
            yB = await AB(BB, async function(BB, TB) {
              return RB(BB, "POST", "/v1/accounts:lookup", TB)
            }(dB, {
              idToken: VB
            }));
          MB(null === yB || void 0 === yB ? void 0 : yB.users.length, dB, "internal-error");
          const lB = yB.users[0];
          BB._notifyReloadListener(lB);
          const JB = (null === (TB = lB.providerUserInfo) || void 0 === TB ? void 0 : TB.length) ? lB.providerUserInfo.map((BB => {
            var {
              providerId: TB
            } = BB, dB = pB(BB, ["providerId"]);
            return {
              providerId: TB,
              uid: dB.rawId || "",
              displayName: dB.displayName || null,
              email: dB.email || null,
              phoneNumber: dB.phoneNumber || null,
              photoURL: dB.photoUrl || null
            }
          })) : [];
          const YB = (gB = BB.providerData, oB = JB, [...gB.filter((BB => !oB.some((TB => TB.providerId === BB.providerId)))), ...oB]);
          var gB, oB;
          const kB = BB.isAnonymous,
            LB = !(BB.email && lB.passwordHash) && !(null === YB || void 0 === YB ? void 0 : YB.length),
            OB = !!kB && LB,
            DB = {
              uid: lB.localId,
              displayName: lB.displayName || null,
              photoURL: lB.photoUrl || null,
              email: lB.email || null,
              emailVerified: lB.emailVerified || !1,
              phoneNumber: lB.phoneNumber || null,
              tenantId: lB.tenantId || null,
              providerData: YB,
              metadata: new nB(lB.createdAt, lB.lastLoginAt),
              isAnonymous: OB
            };
          Object.assign(BB, DB)
        }
        async function BT(BB) {
          const TB = (0, VB.N)(BB);
          await eB(TB), await TB.auth._persistUserIfCurrent(TB), TB.auth._notifyListenersIfCurrent(TB)
        }
        class TT {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(BB) {
            MB(BB.idToken, "internal-error"), MB("undefined" !== typeof BB.idToken, "internal-error"), MB("undefined" !== typeof BB.refreshToken, "internal-error");
            const TB = "expiresIn" in BB && "undefined" !== typeof BB.expiresIn ? Number(BB.expiresIn) : function(BB) {
              const TB = jB(BB);
              return MB(TB, "internal-error"), MB("undefined" !== typeof TB.exp, "internal-error"), MB("undefined" !== typeof TB.iat, "internal-error"), Number(TB.exp) - Number(TB.iat)
            }(BB.idToken);
            this.updateTokensAndExpiration(BB.idToken, BB.refreshToken, TB)
          }
          async getToken(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return MB(!this.accessToken || this.refreshToken, BB, "user-token-expired"), TB || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(BB, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(BB, TB) {
            const {
              accessToken: dB,
              refreshToken: yB,
              expiresIn: pB
            } = await async function(BB, TB) {
              const dB = await aB(BB, {}, (async () => {
                const dB = (0, VB.mb)({
                    grant_type: "refresh_token",
                    refresh_token: TB
                  }).slice(1),
                  {
                    tokenApiHost: yB,
                    apiKey: pB
                  } = BB.config,
                  lB = XB(BB, yB, "/v1/token", `key=${pB}`),
                  JB = await BB._getAdditionalHeaders();
                return JB["Content-Type"] = "application/x-www-form-urlencoded", cB.fetch()(lB, {
                  method: "POST",
                  headers: JB,
                  body: dB
                })
              }));
              return {
                accessToken: dB.access_token,
                expiresIn: dB.expires_in,
                refreshToken: dB.refresh_token
              }
            }(BB, TB);
            this.updateTokensAndExpiration(dB, yB, Number(pB))
          }
          updateTokensAndExpiration(BB, TB, dB) {
            this.refreshToken = TB || null, this.accessToken = BB || null, this.expirationTime = Date.now() + 1e3 * dB
          }
          static fromJSON(BB, TB) {
            const {
              refreshToken: dB,
              accessToken: VB,
              expirationTime: yB
            } = TB, pB = new TT;
            return dB && (MB("string" === typeof dB, "internal-error", {
              appName: BB
            }), pB.refreshToken = dB), VB && (MB("string" === typeof VB, "internal-error", {
              appName: BB
            }), pB.accessToken = VB), yB && (MB("number" === typeof yB, "internal-error", {
              appName: BB
            }), pB.expirationTime = yB), pB
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
            return Object.assign(new TT, this.toJSON())
          }
          _performRefresh() {
            return zB("not implemented")
          }
        }

        function dT(BB, TB) {
          MB("string" === typeof BB || "undefined" === typeof BB, "internal-error", {
            appName: TB
          })
        }
        class VT {
          constructor(BB) {
            var {
              uid: TB,
              auth: dB,
              stsTokenManager: VB
            } = BB, yB = pB(BB, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new bB(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = TB, this.auth = dB, this.stsTokenManager = VB, this.accessToken = VB.accessToken, this.displayName = yB.displayName || null, this.email = yB.email || null, this.emailVerified = yB.emailVerified || !1, this.phoneNumber = yB.phoneNumber || null, this.photoURL = yB.photoURL || null, this.isAnonymous = yB.isAnonymous || !1, this.tenantId = yB.tenantId || null, this.providerData = yB.providerData ? [...yB.providerData] : [], this.metadata = new nB(yB.createdAt || void 0, yB.lastLoginAt || void 0)
          }
          async getIdToken(BB) {
            const TB = await AB(this, this.stsTokenManager.getToken(this.auth, BB));
            return MB(TB, this.auth, "internal-error"), this.accessToken !== TB && (this.accessToken = TB, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), TB
          }
          getIdTokenResult(BB) {
            return qB(this, BB)
          }
          reload() {
            return BT(this)
          }
          _assign(BB) {
            this !== BB && (MB(this.uid === BB.uid, this.auth, "internal-error"), this.displayName = BB.displayName, this.photoURL = BB.photoURL, this.email = BB.email, this.emailVerified = BB.emailVerified, this.phoneNumber = BB.phoneNumber, this.isAnonymous = BB.isAnonymous, this.tenantId = BB.tenantId, this.providerData = BB.providerData.map((BB => Object.assign({}, BB))), this.metadata._copy(BB.metadata), this.stsTokenManager._assign(BB.stsTokenManager))
          }
          _clone(BB) {
            const TB = new VT(Object.assign(Object.assign({}, this), {
              auth: BB,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return TB.metadata._copy(this.metadata), TB
          }
          _onReload(BB) {
            MB(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = BB, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
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
            let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              dB = !1;
            BB.idToken && BB.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(BB), dB = !0), TB && await eB(this), await this.auth._persistUserIfCurrent(this), dB && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const BB = await this.getIdToken();
            return await AB(this, async function(BB, TB) {
              return RB(BB, "POST", "/v1/accounts:delete", TB)
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
          static _fromJSON(BB, TB) {
            var dB, VB, yB, pB, lB, JB, YB, gB;
            const oB = null !== (dB = TB.displayName) && void 0 !== dB ? dB : void 0,
              kB = null !== (VB = TB.email) && void 0 !== VB ? VB : void 0,
              LB = null !== (yB = TB.phoneNumber) && void 0 !== yB ? yB : void 0,
              OB = null !== (pB = TB.photoURL) && void 0 !== pB ? pB : void 0,
              DB = null !== (lB = TB.tenantId) && void 0 !== lB ? lB : void 0,
              uB = null !== (JB = TB._redirectEventId) && void 0 !== JB ? JB : void 0,
              HB = null !== (YB = TB.createdAt) && void 0 !== YB ? YB : void 0,
              EB = null !== (gB = TB.lastLoginAt) && void 0 !== gB ? gB : void 0,
              {
                uid: vB,
                emailVerified: mB,
                isAnonymous: iB,
                providerData: NB,
                stsTokenManager: tB
              } = TB;
            MB(vB && tB, BB, "internal-error");
            const fB = TT.fromJSON(this.name, tB);
            MB("string" === typeof vB, BB, "internal-error"), dT(oB, BB.name), dT(kB, BB.name), MB("boolean" === typeof mB, BB, "internal-error"), MB("boolean" === typeof iB, BB, "internal-error"), dT(LB, BB.name), dT(OB, BB.name), dT(DB, BB.name), dT(uB, BB.name), dT(HB, BB.name), dT(EB, BB.name);
            const sB = new VT({
              uid: vB,
              auth: BB,
              email: kB,
              emailVerified: mB,
              displayName: oB,
              isAnonymous: iB,
              photoURL: OB,
              phoneNumber: LB,
              tenantId: DB,
              stsTokenManager: fB,
              createdAt: HB,
              lastLoginAt: EB
            });
            return NB && Array.isArray(NB) && (sB.providerData = NB.map((BB => Object.assign({}, BB)))), uB && (sB._redirectEventId = uB), sB
          }
          static async _fromIdTokenResponse(BB, TB) {
            let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const VB = new TT;
            VB.updateFromServerResponse(TB);
            const yB = new VT({
              uid: TB.localId,
              auth: BB,
              stsTokenManager: VB,
              isAnonymous: dB
            });
            return await eB(yB), yB
          }
        }
        const yT = new Map;

        function pT(BB) {
          wB(BB instanceof Function, "Expected a class definition");
          let TB = yT.get(BB);
          return TB ? (wB(TB instanceof BB, "Instance stored in cache mismatched with class"), TB) : (TB = new BB, yT.set(BB, TB), TB)
        }
        class lT {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(BB, TB) {
            this.storage[BB] = TB
          }
          async _get(BB) {
            const TB = this.storage[BB];
            return void 0 === TB ? null : TB
          }
          async _remove(BB) {
            delete this.storage[BB]
          }
          _addListener(BB, TB) {}
          _removeListener(BB, TB) {}
        }
        lT.type = "NONE";
        const JT = lT;

        function YT(BB, TB, dB) {
          return `firebase:${BB}:${TB}:${dB}`
        }
        class gT {
          constructor(BB, TB, dB) {
            this.persistence = BB, this.auth = TB, this.userKey = dB;
            const {
              config: VB,
              name: yB
            } = this.auth;
            this.fullUserKey = YT(this.userKey, VB.apiKey, yB), this.fullPersistenceKey = YT("persistence", VB.apiKey, yB), this.boundEventHandler = TB._onStorageEvent.bind(TB), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(BB) {
            return this.persistence._set(this.fullUserKey, BB.toJSON())
          }
          async getCurrentUser() {
            const BB = await this.persistence._get(this.fullUserKey);
            return BB ? VT._fromJSON(this.auth, BB) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(BB) {
            if (this.persistence === BB) return;
            const TB = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = BB, TB ? this.setCurrentUser(TB) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(BB, TB) {
            let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!TB.length) return new gT(pT(JT), BB, dB);
            const VB = (await Promise.all(TB.map((async BB => {
              if (await BB._isAvailable()) return BB
            })))).filter((BB => BB));
            let yB = VB[0] || pT(JT);
            const pB = YT(dB, BB.config.apiKey, BB.name);
            let lB = null;
            for (const gB of TB) try {
              const TB = await gB._get(pB);
              if (TB) {
                const dB = VT._fromJSON(BB, TB);
                gB !== yB && (lB = dB), yB = gB;
                break
              }
            } catch (YB) {}
            const JB = VB.filter((BB => BB._shouldAllowMigration));
            return yB._shouldAllowMigration && JB.length ? (yB = JB[0], lB && await yB._set(pB, lB.toJSON()), await Promise.all(TB.map((async BB => {
              if (BB !== yB) try {
                await BB._remove(pB)
              } catch (YB) {}
            }))), new gT(yB, BB, dB)) : new gT(yB, BB, dB)
          }
        }

        function oT(BB) {
          const TB = BB.toLowerCase();
          if (TB.includes("opera/") || TB.includes("opr/") || TB.includes("opios/")) return "Opera";
          if (DT(TB)) return "IEMobile";
          if (TB.includes("msie") || TB.includes("trident/")) return "IE";
          if (TB.includes("edge/")) return "Edge";
          if (kT(TB)) return "Firefox";
          if (TB.includes("silk/")) return "Silk";
          if (HT(TB)) return "Blackberry";
          if (ET(TB)) return "Webos";
          if (LT(TB)) return "Safari";
          if ((TB.includes("chrome/") || OT(TB)) && !TB.includes("edge/")) return "Chrome";
          if (uT(TB)) return "Android";
          {
            const TB = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              dB = BB.match(TB);
            if (2 === (null === dB || void 0 === dB ? void 0 : dB.length)) return dB[1]
          }
          return "Other"
        }

        function kT() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, VB.R)();
          return /firefox\//i.test(BB)
        }

        function LT() {
          const BB = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, VB.R)()).toLowerCase();
          return BB.includes("safari/") && !BB.includes("chrome/") && !BB.includes("crios/") && !BB.includes("android")
        }

        function OT() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, VB.R)();
          return /crios\//i.test(BB)
        }

        function DT() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, VB.R)();
          return /iemobile/i.test(BB)
        }

        function uT() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, VB.R)();
          return /android/i.test(BB)
        }

        function HT() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, VB.R)();
          return /blackberry/i.test(BB)
        }

        function ET() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, VB.R)();
          return /webos/i.test(BB)
        }

        function vT() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, VB.R)();
          return /iphone|ipad|ipod/i.test(BB) || /macintosh/i.test(BB) && /mobile/i.test(BB)
        }

        function mT() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, VB.R)();
          return vT(BB) || uT(BB) || ET(BB) || HT(BB) || /windows phone/i.test(BB) || DT(BB)
        }

        function iT(BB) {
          let TB, dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (BB) {
            case "Browser":
              TB = oT((0, VB.R)());
              break;
            case "Worker":
              TB = `${oT((0,VB.R)())}-${BB}`;
              break;
            default:
              TB = BB
          }
          const pB = dB.length ? dB.join(",") : "FirebaseCore-web";
          return `${TB}/JsCore/${yB.h}/${pB}`
        }
        async function NT(BB, TB) {
          return RB(BB, "GET", "/v2/recaptchaConfig", QB(BB, TB))
        }

        function tT(BB) {
          return void 0 !== BB && void 0 !== BB.getResponse
        }

        function fT(BB) {
          return void 0 !== BB && void 0 !== BB.enterprise
        }
        class sT {
          constructor(BB) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === BB.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = BB.recaptchaKey.split("/")[3], this.emailPasswordEnabled = BB.recaptchaEnforcementState.some((BB => "EMAIL_PASSWORD_PROVIDER" === BB.provider && "OFF" !== BB.enforcementState))
          }
        }

        function MT(BB) {
          return new Promise(((TB, dB) => {
            const VB = document.createElement("script");
            VB.setAttribute("src", BB), VB.onload = TB, VB.onerror = BB => {
                const TB = NB("internal-error");
                TB.customData = BB, dB(TB)
              }, VB.type = "text/javascript", VB.charset = "UTF-8",
              function() {
                var BB, TB;
                return null !== (TB = null === (BB = document.getElementsByTagName("head")) || void 0 === BB ? void 0 : BB[0]) && void 0 !== TB ? TB : document
              }().appendChild(VB)
          }))
        }

        function zT(BB) {
          return `__${BB}${Math.floor(1e6*Math.random())}`
        }
        class wT {
          constructor(BB) {
            this.type = "recaptcha-enterprise", this.auth = rT(BB)
          }
          async verify() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function dB(TB, dB, VB) {
              const yB = window.grecaptcha;
              fT(yB) ? yB.enterprise.ready((() => {
                yB.enterprise.execute(TB, {
                  action: BB
                }).then((BB => {
                  dB(BB)
                })).catch((() => {
                  dB("NO_RECAPTCHA")
                }))
              })) : VB(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((BB, VB) => {
              (async function(BB) {
                if (!TB) {
                  if (null == BB.tenantId && null != BB._agentRecaptchaConfig) return BB._agentRecaptchaConfig.siteKey;
                  if (null != BB.tenantId && void 0 !== BB._tenantRecaptchaConfigs[BB.tenantId]) return BB._tenantRecaptchaConfigs[BB.tenantId].siteKey
                }
                return new Promise((async (TB, dB) => {
                  NT(BB, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((VB => {
                    if (void 0 !== VB.recaptchaKey) {
                      const dB = new sT(VB);
                      return null == BB.tenantId ? BB._agentRecaptchaConfig = dB : BB._tenantRecaptchaConfigs[BB.tenantId] = dB, TB(dB.siteKey)
                    }
                    dB(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((BB => {
                    dB(BB)
                  }))
                }))
              })(this.auth).then((yB => {
                if (!TB && fT(window.grecaptcha)) dB(yB, BB, VB);
                else {
                  if ("undefined" === typeof window) return void VB(new Error("RecaptchaVerifier is only supported in browser"));
                  MT("https://www.google.com/recaptcha/enterprise.js?render=" + yB).then((() => {
                    dB(yB, BB, VB)
                  })).catch((BB => {
                    VB(BB)
                  }))
                }
              })).catch((BB => {
                VB(BB)
              }))
            }))
          }
        }
        async function UT(BB, TB, dB) {
          let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const yB = new wT(BB);
          let pB;
          try {
            pB = await yB.verify(dB)
          } catch (JB) {
            pB = await yB.verify(dB, !0)
          }
          const lB = Object.assign({}, TB);
          return VB ? Object.assign(lB, {
            captchaResp: pB
          }) : Object.assign(lB, {
            captchaResponse: pB
          }), Object.assign(lB, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(lB, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), lB
        }
        class FT {
          constructor(BB) {
            this.auth = BB, this.queue = []
          }
          pushCallback(BB, TB) {
            const dB = TB => new Promise(((dB, VB) => {
              try {
                dB(BB(TB))
              } catch (yB) {
                VB(yB)
              }
            }));
            dB.onAbort = TB, this.queue.push(dB);
            const VB = this.queue.length - 1;
            return () => {
              this.queue[VB] = () => Promise.resolve()
            }
          }
          async runMiddleware(BB) {
            if (this.auth.currentUser === BB) return;
            const TB = [];
            try {
              for (const dB of this.queue) await dB(BB), dB.onAbort && TB.push(dB.onAbort)
            } catch (dB) {
              TB.reverse();
              for (const BB of TB) try {
                BB()
              } catch (VB) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === dB || void 0 === dB ? void 0 : dB.message
              })
            }
          }
        }
        class KT {
          constructor(BB, TB, dB, VB) {
            this.app = BB, this.heartbeatServiceProvider = TB, this.appCheckServiceProvider = dB, this.config = VB, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new IT(this), this.idTokenSubscription = new IT(this), this.beforeStateQueue = new FT(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = HB, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = BB.name, this.clientVersion = VB.sdkClientVersion
          }
          _initializeWithPersistence(BB, TB) {
            return TB && (this._popupRedirectResolver = pT(TB)), this._initializationPromise = this.queue((async () => {
              var dB, VB;
              if (!this._deleted && (this.persistenceManager = await gT.create(this, BB), !this._deleted)) {
                if (null === (dB = this._popupRedirectResolver) || void 0 === dB ? void 0 : dB._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (yB) {}
                await this.initializeCurrentUser(TB), this.lastNotifiedUid = (null === (VB = this.currentUser) || void 0 === VB ? void 0 : VB.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const BB = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || BB ? this.currentUser && BB && this.currentUser.uid === BB.uid ? (this._currentUser._assign(BB), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(BB, !0) : void 0
          }
          async initializeCurrentUser(BB) {
            var TB;
            const dB = await this.assertedPersistence.getCurrentUser();
            let VB = dB,
              yB = !1;
            if (BB && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const dB = null === (TB = this.redirectUser) || void 0 === TB ? void 0 : TB._redirectEventId,
                pB = null === VB || void 0 === VB ? void 0 : VB._redirectEventId,
                lB = await this.tryRedirectSignIn(BB);
              dB && dB !== pB || !(null === lB || void 0 === lB ? void 0 : lB.user) || (VB = lB.user, yB = !0)
            }
            if (!VB) return this.directlySetCurrentUser(null);
            if (!VB._redirectEventId) {
              if (yB) try {
                await this.beforeStateQueue.runMiddleware(VB)
              } catch (pB) {
                VB = dB, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(pB)))
              }
              return VB ? this.reloadAndSetCurrentUserOrClear(VB) : this.directlySetCurrentUser(null)
            }
            return MB(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === VB._redirectEventId ? this.directlySetCurrentUser(VB) : this.reloadAndSetCurrentUserOrClear(VB)
          }
          async tryRedirectSignIn(BB) {
            let TB = null;
            try {
              TB = await this._popupRedirectResolver._completeRedirectFn(this, BB, !0)
            } catch (dB) {
              await this._setRedirectUser(null)
            }
            return TB
          }
          async reloadAndSetCurrentUserOrClear(BB) {
            try {
              await eB(BB)
            } catch (TB) {
              if ("auth/network-request-failed" !== (null === TB || void 0 === TB ? void 0 : TB.code)) return this.directlySetCurrentUser(null)
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
            const TB = BB ? (0, VB.N)(BB) : null;
            return TB && MB(TB.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(TB && TB._clone(this))
          }
          async _updateCurrentUser(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return BB && MB(this.tenantId === BB.tenantId, this, "tenant-id-mismatch"), TB || await this.beforeStateQueue.runMiddleware(BB), this.queue((async () => {
              await this.directlySetCurrentUser(BB), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(BB) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(pT(BB))
            }))
          }
          async initializeRecaptchaConfig() {
            const BB = await NT(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              TB = new sT(BB);
            if (null == this.tenantId ? this._agentRecaptchaConfig = TB : this._tenantRecaptchaConfigs[this.tenantId] = TB, TB.emailPasswordEnabled) {
              new wT(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(BB) {
            this._errorFactory = new VB.e("auth", "Firebase", BB())
          }
          onAuthStateChanged(BB, TB, dB) {
            return this.registerStateListener(this.authStateSubscription, BB, TB, dB)
          }
          beforeAuthStateChanged(BB, TB) {
            return this.beforeStateQueue.pushCallback(BB, TB)
          }
          onIdTokenChanged(BB, TB, dB) {
            return this.registerStateListener(this.idTokenSubscription, BB, TB, dB)
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
          async _setRedirectUser(BB, TB) {
            const dB = await this.getOrInitRedirectPersistenceManager(TB);
            return null === BB ? dB.removeCurrentUser() : dB.setCurrentUser(BB)
          }
          async getOrInitRedirectPersistenceManager(BB) {
            if (!this.redirectPersistenceManager) {
              const TB = BB && pT(BB) || this._popupRedirectResolver;
              MB(TB, this, "argument-error"), this.redirectPersistenceManager = await gT.create(this, [pT(TB._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(BB) {
            var TB, dB;
            return this._isInitialized && await this.queue((async () => {})), (null === (TB = this._currentUser) || void 0 === TB ? void 0 : TB._redirectEventId) === BB ? this._currentUser : (null === (dB = this.redirectUser) || void 0 === dB ? void 0 : dB._redirectEventId) === BB ? this.redirectUser : null
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
            var BB, TB;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const dB = null !== (TB = null === (BB = this.currentUser) || void 0 === BB ? void 0 : BB.uid) && void 0 !== TB ? TB : null;
            this.lastNotifiedUid !== dB && (this.lastNotifiedUid = dB, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(BB, TB, dB, VB) {
            if (this._deleted) return () => {};
            const yB = "function" === typeof TB ? TB : TB.next.bind(TB),
              pB = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return MB(pB, this, "internal-error"), pB.then((() => yB(this.currentUser))), "function" === typeof TB ? BB.addObserver(TB, dB, VB) : BB.addObserver(TB)
          }
          async directlySetCurrentUser(BB) {
            this.currentUser && this.currentUser !== BB && this._currentUser._stopProactiveRefresh(), BB && this.isProactiveRefreshEnabled && BB._startProactiveRefresh(), this.currentUser = BB, BB ? await this.assertedPersistence.setCurrentUser(BB) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(BB) {
            return this.operations = this.operations.then(BB, BB), this.operations
          }
          get assertedPersistence() {
            return MB(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(BB) {
            BB && !this.frameworks.includes(BB) && (this.frameworks.push(BB), this.frameworks.sort(), this.clientVersion = iT(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var BB;
            const TB = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (TB["X-Firebase-gmpid"] = this.app.options.appId);
            const dB = await (null === (BB = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === BB ? void 0 : BB.getHeartbeatsHeader());
            dB && (TB["X-Firebase-Client"] = dB);
            const VB = await this._getAppCheckToken();
            return VB && (TB["X-Firebase-AppCheck"] = VB), TB
          }
          async _getAppCheckToken() {
            var BB;
            const TB = await (null === (BB = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === BB ? void 0 : BB.getToken());
            return (null === TB || void 0 === TB ? void 0 : TB.error) && function(BB) {
              if (vB.logLevel <= lB.e.WARN) {
                for (var TB = arguments.length, dB = new Array(TB > 1 ? TB - 1 : 0), VB = 1; VB < TB; VB++) dB[VB - 1] = arguments[VB];
                vB.warn(`Auth (${yB.h}): ${BB}`, ...dB)
              }
            }(`Error while retrieving App Check token: ${TB.error}`), null === TB || void 0 === TB ? void 0 : TB.token
          }
        }

        function rT(BB) {
          return (0, VB.N)(BB)
        }
        class IT {
          constructor(BB) {
            this.auth = BB, this.observer = null, this.addObserver = (0, VB.v)((BB => this.observer = BB))
          }
          get next() {
            return MB(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function cT(BB, TB) {
          const dB = (0, yB.y)(BB, "auth");
          if (dB.isInitialized()) {
            const BB = dB.getImmediate(),
              yB = dB.getOptions();
            if ((0, VB.z)(yB, null !== TB && void 0 !== TB ? TB : {})) return BB;
            iB(BB, "already-initialized")
          }
          return dB.initialize({
            options: TB
          })
        }

        function ST(BB, TB, dB) {
          const VB = rT(BB);
          MB(VB._canInitEmulator, VB, "emulator-config-failed"), MB(/^https?:\/\//.test(TB), VB, "invalid-emulator-scheme");
          const yB = !!(null === dB || void 0 === dB ? void 0 : dB.disableWarnings),
            pB = PT(TB),
            {
              host: lB,
              port: JB
            } = function(BB) {
              const TB = PT(BB),
                dB = /(\/\/)?([^?#/]+)/.exec(BB.substr(TB.length));
              if (!dB) return {
                host: "",
                port: null
              };
              const VB = dB[2].split("@").pop() || "",
                yB = /^(\[[^\]]+\])(:|$)/.exec(VB);
              if (yB) {
                const BB = yB[1];
                return {
                  host: BB,
                  port: QT(VB.substr(BB.length + 1))
                }
              } {
                const [BB, TB] = VB.split(":");
                return {
                  host: BB,
                  port: QT(TB)
                }
              }
            }(TB),
            YB = null === JB ? "" : `:${JB}`;
          VB.config.emulator = {
            url: `${pB}//${lB}${YB}/`
          }, VB.settings.appVerificationDisabledForTesting = !0, VB.emulatorConfig = Object.freeze({
            host: lB,
            port: JB,
            protocol: pB.replace(":", ""),
            options: Object.freeze({
              disableWarnings: yB
            })
          }), yB || function() {
            function BB() {
              const BB = document.createElement("p"),
                TB = BB.style;
              BB.innerText = "Running in emulator mode. Do not use with production credentials.", TB.position = "fixed", TB.width = "100%", TB.backgroundColor = "#ffffff", TB.border = ".1em solid #000000", TB.color = "#b50000", TB.bottom = "0px", TB.left = "0px", TB.margin = "0px", TB.zIndex = "10000", TB.textAlign = "center", BB.classList.add("firebase-emulator-warning"), document.body.appendChild(BB)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", BB) : BB())
          }()
        }

        function PT(BB) {
          const TB = BB.indexOf(":");
          return TB < 0 ? "" : BB.substr(0, TB + 1)
        }

        function QT(BB) {
          if (!BB) return null;
          const TB = Number(BB);
          return isNaN(TB) ? null : TB
        }
        class RT {
          constructor(BB, TB) {
            this.providerId = BB, this.signInMethod = TB
          }
          toJSON() {
            return zB("not implemented")
          }
          _getIdTokenResponse(BB) {
            return zB("not implemented")
          }
          _linkToIdToken(BB, TB) {
            return zB("not implemented")
          }
          _getReauthenticationResolver(BB) {
            return zB("not implemented")
          }
        }
        async function aT(BB, TB) {
          return RB(BB, "POST", "/v1/accounts:resetPassword", QB(BB, TB))
        }
        async function ZT(BB, TB) {
          return RB(BB, "POST", "/v1/accounts:update", TB)
        }
        async function XT(BB, TB) {
          return ZB(BB, "POST", "/v1/accounts:signInWithPassword", QB(BB, TB))
        }
        async function WT(BB, TB) {
          return RB(BB, "POST", "/v1/accounts:sendOobCode", QB(BB, TB))
        }
        async function hT(BB, TB) {
          return WT(BB, TB)
        }
        async function CT(BB, TB) {
          return WT(BB, TB)
        }
        class GT extends RT {
          constructor(BB, TB, dB) {
            let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", dB), this._email = BB, this._password = TB, this._tenantId = VB
          }
          static _fromEmailAndPassword(BB, TB) {
            return new GT(BB, TB, "password")
          }
          static _fromEmailAndCode(BB, TB) {
            return new GT(BB, TB, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
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
            const TB = "string" === typeof BB ? JSON.parse(BB) : BB;
            if ((null === TB || void 0 === TB ? void 0 : TB.email) && (null === TB || void 0 === TB ? void 0 : TB.password)) {
              if ("password" === TB.signInMethod) return this._fromEmailAndPassword(TB.email, TB.password);
              if ("emailLink" === TB.signInMethod) return this._fromEmailAndCode(TB.email, TB.password, TB.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(BB) {
            var TB;
            switch (this.signInMethod) {
              case "password":
                const dB = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (TB = BB._getRecaptchaConfig()) || void 0 === TB ? void 0 : TB.emailPasswordEnabled) {
                  const TB = await UT(BB, dB, "signInWithPassword");
                  return XT(BB, TB)
                }
                return XT(BB, dB).catch((async TB => {
                  if ("auth/missing-recaptcha-token" === TB.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const TB = await UT(BB, dB, "signInWithPassword");
                    return XT(BB, TB)
                  }
                  return Promise.reject(TB)
                }));
              case "emailLink":
                return async function(BB, TB) {
                  return ZB(BB, "POST", "/v1/accounts:signInWithEmailLink", QB(BB, TB))
                }(BB, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                iB(BB, "internal-error")
            }
          }
          async _linkToIdToken(BB, TB) {
            switch (this.signInMethod) {
              case "password":
                return ZT(BB, {
                  idToken: TB,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(BB, TB) {
                  return ZB(BB, "POST", "/v1/accounts:signInWithEmailLink", QB(BB, TB))
                }(BB, {
                  idToken: TB,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                iB(BB, "internal-error")
            }
          }
          _getReauthenticationResolver(BB) {
            return this._getIdTokenResponse(BB)
          }
        }
        async function qT(BB, TB) {
          return ZB(BB, "POST", "/v1/accounts:signInWithIdp", QB(BB, TB))
        }
        class xT extends RT {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(BB) {
            const TB = new xT(BB.providerId, BB.signInMethod);
            return BB.idToken || BB.accessToken ? (BB.idToken && (TB.idToken = BB.idToken), BB.accessToken && (TB.accessToken = BB.accessToken), BB.nonce && !BB.pendingToken && (TB.nonce = BB.nonce), BB.pendingToken && (TB.pendingToken = BB.pendingToken)) : BB.oauthToken && BB.oauthTokenSecret ? (TB.accessToken = BB.oauthToken, TB.secret = BB.oauthTokenSecret) : iB("argument-error"), TB
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
            const TB = "string" === typeof BB ? JSON.parse(BB) : BB,
              {
                providerId: dB,
                signInMethod: VB
              } = TB,
              yB = pB(TB, ["providerId", "signInMethod"]);
            if (!dB || !VB) return null;
            const lB = new xT(dB, VB);
            return lB.idToken = yB.idToken || void 0, lB.accessToken = yB.accessToken || void 0, lB.secret = yB.secret, lB.nonce = yB.nonce, lB.pendingToken = yB.pendingToken || null, lB
          }
          _getIdTokenResponse(BB) {
            return qT(BB, this.buildRequest())
          }
          _linkToIdToken(BB, TB) {
            const dB = this.buildRequest();
            return dB.idToken = TB, qT(BB, dB)
          }
          _getReauthenticationResolver(BB) {
            const TB = this.buildRequest();
            return TB.autoCreate = !1, qT(BB, TB)
          }
          buildRequest() {
            const BB = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) BB.pendingToken = this.pendingToken;
            else {
              const TB = {};
              this.idToken && (TB.id_token = this.idToken), this.accessToken && (TB.access_token = this.accessToken), this.secret && (TB.oauth_token_secret = this.secret), TB.providerId = this.providerId, this.nonce && !this.pendingToken && (TB.nonce = this.nonce), BB.postBody = (0, VB.mb)(TB)
            }
            return BB
          }
        }
        const jT = {
          USER_NOT_FOUND: "user-not-found"
        };
        class AT extends RT {
          constructor(BB) {
            super("phone", "phone"), this.params = BB
          }
          static _fromVerification(BB, TB) {
            return new AT({
              verificationId: BB,
              verificationCode: TB
            })
          }
          static _fromTokenResponse(BB, TB) {
            return new AT({
              phoneNumber: BB,
              temporaryProof: TB
            })
          }
          _getIdTokenResponse(BB) {
            return async function(BB, TB) {
              return ZB(BB, "POST", "/v1/accounts:signInWithPhoneNumber", QB(BB, TB))
            }(BB, this._makeVerificationRequest())
          }
          _linkToIdToken(BB, TB) {
            return async function(BB, TB) {
              const dB = await ZB(BB, "POST", "/v1/accounts:signInWithPhoneNumber", QB(BB, TB));
              if (dB.temporaryProof) throw hB(BB, "account-exists-with-different-credential", dB);
              return dB
            }(BB, Object.assign({
              idToken: TB
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(BB) {
            return async function(BB, TB) {
              return ZB(BB, "POST", "/v1/accounts:signInWithPhoneNumber", QB(BB, Object.assign(Object.assign({}, TB), {
                operation: "REAUTH"
              })), jT)
            }(BB, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: BB,
              phoneNumber: TB,
              verificationId: dB,
              verificationCode: VB
            } = this.params;
            return BB && TB ? {
              temporaryProof: BB,
              phoneNumber: TB
            } : {
              sessionInfo: dB,
              code: VB
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
              verificationId: TB,
              verificationCode: dB,
              phoneNumber: VB,
              temporaryProof: yB
            } = BB;
            return dB || TB || VB || yB ? new AT({
              verificationId: TB,
              verificationCode: dB,
              phoneNumber: VB,
              temporaryProof: yB
            }) : null
          }
        }
        class bT {
          constructor(BB) {
            var TB, dB, yB, pB, lB, JB;
            const YB = (0, VB.jb)((0, VB.C)(BB)),
              gB = null !== (TB = YB.apiKey) && void 0 !== TB ? TB : null,
              oB = null !== (dB = YB.oobCode) && void 0 !== dB ? dB : null,
              kB = function(BB) {
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
              }(null !== (yB = YB.mode) && void 0 !== yB ? yB : null);
            MB(gB && oB && kB, "argument-error"), this.apiKey = gB, this.operation = kB, this.code = oB, this.continueUrl = null !== (pB = YB.continueUrl) && void 0 !== pB ? pB : null, this.languageCode = null !== (lB = YB.languageCode) && void 0 !== lB ? lB : null, this.tenantId = null !== (JB = YB.tenantId) && void 0 !== JB ? JB : null
          }
          static parseLink(BB) {
            const TB = function(BB) {
              const TB = (0, VB.jb)((0, VB.C)(BB)).link,
                dB = TB ? (0, VB.jb)((0, VB.C)(TB)).deep_link_id : null,
                yB = (0, VB.jb)((0, VB.C)(BB)).deep_link_id;
              return (yB ? (0, VB.jb)((0, VB.C)(yB)).link : null) || yB || dB || TB || BB
            }(BB);
            try {
              return new bT(TB)
            } catch (dB) {
              return null
            }
          }
        }

        function nT(BB) {
          return bT.parseLink(BB)
        }
        class eT {
          constructor() {
            this.providerId = eT.PROVIDER_ID
          }
          static credential(BB, TB) {
            return GT._fromEmailAndPassword(BB, TB)
          }
          static credentialWithLink(BB, TB) {
            const dB = bT.parseLink(TB);
            return MB(dB, "argument-error"), GT._fromEmailAndCode(BB, dB.code, dB.tenantId)
          }
        }
        eT.PROVIDER_ID = "password", eT.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", eT.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class Bd {
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
        class Td extends Bd {
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
        class dd extends Td {
          static credentialFromJSON(BB) {
            const TB = "string" === typeof BB ? JSON.parse(BB) : BB;
            return MB("providerId" in TB && "signInMethod" in TB, "argument-error"), xT._fromParams(TB)
          }
          credential(BB) {
            return this._credential(Object.assign(Object.assign({}, BB), {
              nonce: BB.rawNonce
            }))
          }
          _credential(BB) {
            return MB(BB.idToken || BB.accessToken, "argument-error"), xT._fromParams(Object.assign(Object.assign({}, BB), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(BB) {
            return dd.oauthCredentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return dd.oauthCredentialFromTaggedObject(BB.customData || {})
          }
          static oauthCredentialFromTaggedObject(BB) {
            let {
              _tokenResponse: TB
            } = BB;
            if (!TB) return null;
            const {
              oauthIdToken: dB,
              oauthAccessToken: VB,
              oauthTokenSecret: yB,
              pendingToken: pB,
              nonce: lB,
              providerId: JB
            } = TB;
            if (!VB && !yB && !dB && !pB) return null;
            if (!JB) return null;
            try {
              return new dd(JB)._credential({
                idToken: dB,
                accessToken: VB,
                nonce: lB,
                pendingToken: pB
              })
            } catch (YB) {
              return null
            }
          }
        }
        class Vd extends Td {
          constructor() {
            super("facebook.com")
          }
          static credential(BB) {
            return xT._fromParams({
              providerId: Vd.PROVIDER_ID,
              signInMethod: Vd.FACEBOOK_SIGN_IN_METHOD,
              accessToken: BB
            })
          }
          static credentialFromResult(BB) {
            return Vd.credentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return Vd.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: TB
            } = BB;
            if (!TB || !("oauthAccessToken" in TB)) return null;
            if (!TB.oauthAccessToken) return null;
            try {
              return Vd.credential(TB.oauthAccessToken)
            } catch (dB) {
              return null
            }
          }
        }
        Vd.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Vd.PROVIDER_ID = "facebook.com";
        class yd extends Td {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(BB, TB) {
            return xT._fromParams({
              providerId: yd.PROVIDER_ID,
              signInMethod: yd.GOOGLE_SIGN_IN_METHOD,
              idToken: BB,
              accessToken: TB
            })
          }
          static credentialFromResult(BB) {
            return yd.credentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return yd.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: TB
            } = BB;
            if (!TB) return null;
            const {
              oauthIdToken: dB,
              oauthAccessToken: VB
            } = TB;
            if (!dB && !VB) return null;
            try {
              return yd.credential(dB, VB)
            } catch (yB) {
              return null
            }
          }
        }
        yd.GOOGLE_SIGN_IN_METHOD = "google.com", yd.PROVIDER_ID = "google.com";
        class pd extends Td {
          constructor() {
            super("github.com")
          }
          static credential(BB) {
            return xT._fromParams({
              providerId: pd.PROVIDER_ID,
              signInMethod: pd.GITHUB_SIGN_IN_METHOD,
              accessToken: BB
            })
          }
          static credentialFromResult(BB) {
            return pd.credentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return pd.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: TB
            } = BB;
            if (!TB || !("oauthAccessToken" in TB)) return null;
            if (!TB.oauthAccessToken) return null;
            try {
              return pd.credential(TB.oauthAccessToken)
            } catch (dB) {
              return null
            }
          }
        }
        pd.GITHUB_SIGN_IN_METHOD = "github.com", pd.PROVIDER_ID = "github.com";
        class ld extends RT {
          constructor(BB, TB) {
            super(BB, BB), this.pendingToken = TB
          }
          _getIdTokenResponse(BB) {
            return qT(BB, this.buildRequest())
          }
          _linkToIdToken(BB, TB) {
            const dB = this.buildRequest();
            return dB.idToken = TB, qT(BB, dB)
          }
          _getReauthenticationResolver(BB) {
            const TB = this.buildRequest();
            return TB.autoCreate = !1, qT(BB, TB)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(BB) {
            const TB = "string" === typeof BB ? JSON.parse(BB) : BB,
              {
                providerId: dB,
                signInMethod: VB,
                pendingToken: yB
              } = TB;
            return dB && VB && yB && dB === VB ? new ld(dB, yB) : null
          }
          static _create(BB, TB) {
            return new ld(BB, TB)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class Jd extends Bd {
          constructor(BB) {
            MB(BB.startsWith("saml."), "argument-error"), super(BB)
          }
          static credentialFromResult(BB) {
            return Jd.samlCredentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return Jd.samlCredentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromJSON(BB) {
            const TB = ld.fromJSON(BB);
            return MB(TB, "argument-error"), TB
          }
          static samlCredentialFromTaggedObject(BB) {
            let {
              _tokenResponse: TB
            } = BB;
            if (!TB) return null;
            const {
              pendingToken: dB,
              providerId: VB
            } = TB;
            if (!dB || !VB) return null;
            try {
              return ld._create(VB, dB)
            } catch (yB) {
              return null
            }
          }
        }
        class Yd extends Td {
          constructor() {
            super("twitter.com")
          }
          static credential(BB, TB) {
            return xT._fromParams({
              providerId: Yd.PROVIDER_ID,
              signInMethod: Yd.TWITTER_SIGN_IN_METHOD,
              oauthToken: BB,
              oauthTokenSecret: TB
            })
          }
          static credentialFromResult(BB) {
            return Yd.credentialFromTaggedObject(BB)
          }
          static credentialFromError(BB) {
            return Yd.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: TB
            } = BB;
            if (!TB) return null;
            const {
              oauthAccessToken: dB,
              oauthTokenSecret: VB
            } = TB;
            if (!dB || !VB) return null;
            try {
              return Yd.credential(dB, VB)
            } catch (yB) {
              return null
            }
          }
        }
        async function gd(BB, TB) {
          return ZB(BB, "POST", "/v1/accounts:signUp", QB(BB, TB))
        }
        Yd.TWITTER_SIGN_IN_METHOD = "twitter.com", Yd.PROVIDER_ID = "twitter.com";
        class od {
          constructor(BB) {
            this.user = BB.user, this.providerId = BB.providerId, this._tokenResponse = BB._tokenResponse, this.operationType = BB.operationType
          }
          static async _fromIdTokenResponse(BB, TB, dB) {
            let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const yB = await VT._fromIdTokenResponse(BB, dB, VB),
              pB = kd(dB);
            return new od({
              user: yB,
              providerId: pB,
              _tokenResponse: dB,
              operationType: TB
            })
          }
          static async _forOperation(BB, TB, dB) {
            await BB._updateTokensIfNecessary(dB, !0);
            const VB = kd(dB);
            return new od({
              user: BB,
              providerId: VB,
              _tokenResponse: dB,
              operationType: TB
            })
          }
        }

        function kd(BB) {
          return BB.providerId ? BB.providerId : "phoneNumber" in BB ? "phone" : null
        }
        async function Ld(BB) {
          var TB;
          const dB = rT(BB);
          if (await dB._initializationPromise, null === (TB = dB.currentUser) || void 0 === TB ? void 0 : TB.isAnonymous) return new od({
            user: dB.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const VB = await gd(dB, {
              returnSecureToken: !0
            }),
            yB = await od._fromIdTokenResponse(dB, "signIn", VB, !0);
          return await dB._updateCurrentUser(yB.user), yB
        }
        class Od extends VB.g {
          constructor(BB, TB, dB, VB) {
            var yB;
            super(TB.code, TB.message), this.operationType = dB, this.user = VB, Object.setPrototypeOf(this, Od.prototype), this.customData = {
              appName: BB.name,
              tenantId: null !== (yB = BB.tenantId) && void 0 !== yB ? yB : void 0,
              _serverResponse: TB.customData._serverResponse,
              operationType: dB
            }
          }
          static _fromErrorAndOperation(BB, TB, dB, VB) {
            return new Od(BB, TB, dB, VB)
          }
        }

        function Dd(BB, TB, dB, VB) {
          return ("reauthenticate" === TB ? dB._getReauthenticationResolver(BB) : dB._getIdTokenResponse(BB)).catch((dB => {
            if ("auth/multi-factor-auth-required" === dB.code) throw Od._fromErrorAndOperation(BB, dB, TB, VB);
            throw dB
          }))
        }

        function ud(BB) {
          return new Set(BB.map((BB => {
            let {
              providerId: TB
            } = BB;
            return TB
          })).filter((BB => !!BB)))
        }
        async function Hd(BB, TB) {
          const dB = (0, VB.N)(BB);
          await vd(!0, dB, TB);
          const {
            providerUserInfo: yB
          } = await async function(BB, TB) {
            return RB(BB, "POST", "/v1/accounts:update", TB)
          }(dB.auth, {
            idToken: await dB.getIdToken(),
            deleteProvider: [TB]
          }), pB = ud(yB || []);
          return dB.providerData = dB.providerData.filter((BB => pB.has(BB.providerId))), pB.has("phone") || (dB.phoneNumber = null), await dB.auth._persistUserIfCurrent(dB), dB
        }
        async function Ed(BB, TB) {
          let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const VB = await AB(BB, TB._linkToIdToken(BB.auth, await BB.getIdToken()), dB);
          return od._forOperation(BB, "link", VB)
        }
        async function vd(BB, TB, dB) {
          await eB(TB);
          const VB = !1 === BB ? "provider-already-linked" : "no-such-provider";
          MB(ud(TB.providerData).has(dB) === BB, TB.auth, VB)
        }
        async function md(BB, TB) {
          let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: VB
          } = BB, yB = "reauthenticate";
          try {
            const pB = await AB(BB, Dd(VB, yB, TB, BB), dB);
            MB(pB.idToken, VB, "internal-error");
            const lB = jB(pB.idToken);
            MB(lB, VB, "internal-error");
            const {
              sub: JB
            } = lB;
            return MB(BB.uid === JB, VB, "user-mismatch"), od._forOperation(BB, yB, pB)
          } catch (pB) {
            throw "auth/user-not-found" === (null === pB || void 0 === pB ? void 0 : pB.code) && iB(VB, "user-mismatch"), pB
          }
        }
        async function Nd(BB, TB) {
          let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const VB = "signIn",
            yB = await Dd(BB, VB, TB),
            pB = await od._fromIdTokenResponse(BB, VB, yB);
          return dB || await BB._updateCurrentUser(pB.user), pB
        }
        async function td(BB, TB) {
          return Nd(rT(BB), TB)
        }
        async function fd(BB, TB) {
          const dB = (0, VB.N)(BB);
          return await vd(!1, dB, TB.providerId), Ed(dB, TB)
        }
        async function sd(BB, TB) {
          return md((0, VB.N)(BB), TB)
        }
        async function Md(BB, TB) {
          const dB = rT(BB),
            VB = await async function(BB, TB) {
              return ZB(BB, "POST", "/v1/accounts:signInWithCustomToken", QB(BB, TB))
            }(dB, {
              token: TB,
              returnSecureToken: !0
            }), yB = await od._fromIdTokenResponse(dB, "signIn", VB);
          return await dB._updateCurrentUser(yB.user), yB
        }
        class zd {
          constructor(BB, TB) {
            this.factorId = BB, this.uid = TB.mfaEnrollmentId, this.enrollmentTime = new Date(TB.enrolledAt).toUTCString(), this.displayName = TB.displayName
          }
          static _fromServerResponse(BB, TB) {
            return "phoneInfo" in TB ? wd._fromServerResponse(BB, TB) : "totpInfo" in TB ? Ud._fromServerResponse(BB, TB) : iB(BB, "internal-error")
          }
        }
        class wd extends zd {
          constructor(BB) {
            super("phone", BB), this.phoneNumber = BB.phoneInfo
          }
          static _fromServerResponse(BB, TB) {
            return new wd(TB)
          }
        }
        class Ud extends zd {
          constructor(BB) {
            super("totp", BB)
          }
          static _fromServerResponse(BB, TB) {
            return new Ud(TB)
          }
        }

        function Fd(BB, TB, dB) {
          var VB;
          MB((null === (VB = dB.url) || void 0 === VB ? void 0 : VB.length) > 0, BB, "invalid-continue-uri"), MB("undefined" === typeof dB.dynamicLinkDomain || dB.dynamicLinkDomain.length > 0, BB, "invalid-dynamic-link-domain"), TB.continueUrl = dB.url, TB.dynamicLinkDomain = dB.dynamicLinkDomain, TB.canHandleCodeInApp = dB.handleCodeInApp, dB.iOS && (MB(dB.iOS.bundleId.length > 0, BB, "missing-ios-bundle-id"), TB.iOSBundleId = dB.iOS.bundleId), dB.android && (MB(dB.android.packageName.length > 0, BB, "missing-android-pkg-name"), TB.androidInstallApp = dB.android.installApp, TB.androidMinimumVersionCode = dB.android.minimumVersion, TB.androidPackageName = dB.android.packageName)
        }
        async function Kd(BB, TB, dB) {
          var VB;
          const yB = rT(BB),
            pB = {
              requestType: "PASSWORD_RESET",
              email: TB,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (VB = yB._getRecaptchaConfig()) || void 0 === VB ? void 0 : VB.emailPasswordEnabled) {
            const BB = await UT(yB, pB, "getOobCode", !0);
            dB && Fd(yB, BB, dB), await hT(yB, BB)
          } else dB && Fd(yB, pB, dB), await hT(yB, pB).catch((async BB => {
            if ("auth/missing-recaptcha-token" !== BB.code) return Promise.reject(BB);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const BB = await UT(yB, pB, "getOobCode", !0);
              dB && Fd(yB, BB, dB), await hT(yB, BB)
            }
          }))
        }
        async function rd(BB, TB, dB) {
          await aT((0, VB.N)(BB), {
            oobCode: TB,
            newPassword: dB
          })
        }
        async function Id(BB, TB) {
          await async function(BB, TB) {
            return RB(BB, "POST", "/v1/accounts:update", QB(BB, TB))
          }((0, VB.N)(BB), {
            oobCode: TB
          })
        }
        async function cd(BB, TB) {
          const dB = (0, VB.N)(BB),
            yB = await aT(dB, {
              oobCode: TB
            }),
            pB = yB.requestType;
          switch (MB(pB, dB, "internal-error"), pB) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              MB(yB.newEmail, dB, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              MB(yB.mfaInfo, dB, "internal-error");
            default:
              MB(yB.email, dB, "internal-error")
          }
          let lB = null;
          return yB.mfaInfo && (lB = zd._fromServerResponse(rT(dB), yB.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === yB.requestType ? yB.newEmail : yB.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === yB.requestType ? yB.email : yB.newEmail) || null,
              multiFactorInfo: lB
            },
            operation: pB
          }
        }
        async function Sd(BB, TB) {
          const {
            data: dB
          } = await cd((0, VB.N)(BB), TB);
          return dB.email
        }
        async function Pd(BB, TB, dB) {
          var VB;
          const yB = rT(BB),
            pB = {
              returnSecureToken: !0,
              email: TB,
              password: dB,
              clientType: "CLIENT_TYPE_WEB"
            };
          let lB;
          if (null === (VB = yB._getRecaptchaConfig()) || void 0 === VB ? void 0 : VB.emailPasswordEnabled) {
            const BB = await UT(yB, pB, "signUpPassword");
            lB = gd(yB, BB)
          } else lB = gd(yB, pB).catch((async BB => {
            if ("auth/missing-recaptcha-token" === BB.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const BB = await UT(yB, pB, "signUpPassword");
              return gd(yB, BB)
            }
            return Promise.reject(BB)
          }));
          const JB = await lB.catch((BB => Promise.reject(BB))),
            YB = await od._fromIdTokenResponse(yB, "signIn", JB);
          return await yB._updateCurrentUser(YB.user), YB
        }

        function Qd(BB, TB, dB) {
          return td((0, VB.N)(BB), eT.credential(TB, dB))
        }
        async function Rd(BB, TB, dB) {
          var VB;
          const yB = rT(BB),
            pB = {
              requestType: "EMAIL_SIGNIN",
              email: TB,
              clientType: "CLIENT_TYPE_WEB"
            };

          function lB(BB, TB) {
            MB(TB.handleCodeInApp, yB, "argument-error"), TB && Fd(yB, BB, TB)
          }
          if (null === (VB = yB._getRecaptchaConfig()) || void 0 === VB ? void 0 : VB.emailPasswordEnabled) {
            const BB = await UT(yB, pB, "getOobCode", !0);
            lB(BB, dB), await CT(yB, BB)
          } else lB(pB, dB), await CT(yB, pB).catch((async BB => {
            if ("auth/missing-recaptcha-token" !== BB.code) return Promise.reject(BB);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const BB = await UT(yB, pB, "getOobCode", !0);
              lB(BB, dB), await CT(yB, BB)
            }
          }))
        }

        function ad(BB, TB) {
          const dB = bT.parseLink(TB);
          return "EMAIL_SIGNIN" === (null === dB || void 0 === dB ? void 0 : dB.operation)
        }
        async function Zd(BB, TB, dB) {
          const yB = (0, VB.N)(BB),
            pB = eT.credentialWithLink(TB, dB || UB());
          return MB(pB._tenantId === (yB.tenantId || null), yB, "tenant-id-mismatch"), td(yB, pB)
        }
        async function Xd(BB, TB) {
          const dB = {
              identifier: TB,
              continueUri: FB() ? UB() : "http://localhost"
            },
            {
              signinMethods: yB
            } = await async function(BB, TB) {
              return RB(BB, "POST", "/v1/accounts:createAuthUri", QB(BB, TB))
            }((0, VB.N)(BB), dB);
          return yB || []
        }
        async function Wd(BB, TB) {
          const dB = (0, VB.N)(BB),
            yB = {
              requestType: "VERIFY_EMAIL",
              idToken: await BB.getIdToken()
            };
          TB && Fd(dB.auth, yB, TB);
          const {
            email: pB
          } = await async function(BB, TB) {
            return WT(BB, TB)
          }(dB.auth, yB);
          pB !== BB.email && await BB.reload()
        }
        async function hd(BB, TB, dB) {
          const yB = (0, VB.N)(BB),
            pB = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await BB.getIdToken(),
              newEmail: TB
            };
          dB && Fd(yB.auth, pB, dB);
          const {
            email: lB
          } = await async function(BB, TB) {
            return WT(BB, TB)
          }(yB.auth, pB);
          lB !== BB.email && await BB.reload()
        }
        async function Cd(BB, TB) {
          let {
            displayName: dB,
            photoURL: yB
          } = TB;
          if (void 0 === dB && void 0 === yB) return;
          const pB = (0, VB.N)(BB),
            lB = {
              idToken: await pB.getIdToken(),
              displayName: dB,
              photoUrl: yB,
              returnSecureToken: !0
            },
            JB = await AB(pB, async function(BB, TB) {
              return RB(BB, "POST", "/v1/accounts:update", TB)
            }(pB.auth, lB));
          pB.displayName = JB.displayName || null, pB.photoURL = JB.photoUrl || null;
          const YB = pB.providerData.find((BB => {
            let {
              providerId: TB
            } = BB;
            return "password" === TB
          }));
          YB && (YB.displayName = pB.displayName, YB.photoURL = pB.photoURL), await pB._updateTokensIfNecessary(JB)
        }

        function Gd(BB, TB) {
          return xd((0, VB.N)(BB), TB, null)
        }

        function qd(BB, TB) {
          return xd((0, VB.N)(BB), null, TB)
        }
        async function xd(BB, TB, dB) {
          const {
            auth: VB
          } = BB, yB = {
            idToken: await BB.getIdToken(),
            returnSecureToken: !0
          };
          TB && (yB.email = TB), dB && (yB.password = dB);
          const pB = await AB(BB, ZT(VB, yB));
          await BB._updateTokensIfNecessary(pB, !0)
        }
        class jd {
          constructor(BB, TB) {
            let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = BB, this.providerId = TB, this.profile = dB
          }
        }
        class Ad extends jd {
          constructor(BB, TB, dB, VB) {
            super(BB, TB, dB), this.username = VB
          }
        }
        class bd extends jd {
          constructor(BB, TB) {
            super(BB, "facebook.com", TB)
          }
        }
        class nd extends Ad {
          constructor(BB, TB) {
            super(BB, "github.com", TB, "string" === typeof(null === TB || void 0 === TB ? void 0 : TB.login) ? null === TB || void 0 === TB ? void 0 : TB.login : null)
          }
        }
        class ed extends jd {
          constructor(BB, TB) {
            super(BB, "google.com", TB)
          }
        }
        class BV extends Ad {
          constructor(BB, TB, dB) {
            super(BB, "twitter.com", TB, dB)
          }
        }

        function TV(BB) {
          const {
            user: TB,
            _tokenResponse: dB
          } = BB;
          return TB.isAnonymous && !dB ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(BB) {
            var TB, dB;
            if (!BB) return null;
            const {
              providerId: VB
            } = BB, yB = BB.rawUserInfo ? JSON.parse(BB.rawUserInfo) : {}, pB = BB.isNewUser || "identitytoolkit#SignupNewUserResponse" === BB.kind;
            if (!VB && (null === BB || void 0 === BB ? void 0 : BB.idToken)) {
              const VB = null === (dB = null === (TB = jB(BB.idToken)) || void 0 === TB ? void 0 : TB.firebase) || void 0 === dB ? void 0 : dB.sign_in_provider;
              if (VB) return new jd(pB, "anonymous" !== VB && "custom" !== VB ? VB : null)
            }
            if (!VB) return null;
            switch (VB) {
              case "facebook.com":
                return new bd(pB, yB);
              case "github.com":
                return new nd(pB, yB);
              case "google.com":
                return new ed(pB, yB);
              case "twitter.com":
                return new BV(pB, yB, BB.screenName || null);
              case "custom":
              case "anonymous":
                return new jd(pB, null);
              default:
                return new jd(pB, VB, yB)
            }
          }(dB)
        }

        function dV(BB, TB) {
          return (0, VB.N)(BB).setPersistence(TB)
        }

        function VV(BB) {
          return rT(BB).initializeRecaptchaConfig()
        }

        function yV(BB, TB, dB, yB) {
          return (0, VB.N)(BB).onIdTokenChanged(TB, dB, yB)
        }

        function pV(BB, TB, dB) {
          return (0, VB.N)(BB).beforeAuthStateChanged(TB, dB)
        }

        function lV(BB, TB, dB, yB) {
          return (0, VB.N)(BB).onAuthStateChanged(TB, dB, yB)
        }

        function JV(BB) {
          (0, VB.N)(BB).useDeviceLanguage()
        }

        function YV(BB, TB) {
          return (0, VB.N)(BB).updateCurrentUser(TB)
        }

        function gV(BB) {
          return (0, VB.N)(BB).signOut()
        }
        async function oV(BB) {
          return (0, VB.N)(BB).delete()
        }
        class kV {
          constructor(BB, TB, dB) {
            this.type = BB, this.credential = TB, this.auth = dB
          }
          static _fromIdtoken(BB, TB) {
            return new kV("enroll", BB, TB)
          }
          static _fromMfaPendingCredential(BB) {
            return new kV("signin", BB)
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
            var TB, dB;
            if (null === BB || void 0 === BB ? void 0 : BB.multiFactorSession) {
              if (null === (TB = BB.multiFactorSession) || void 0 === TB ? void 0 : TB.pendingCredential) return kV._fromMfaPendingCredential(BB.multiFactorSession.pendingCredential);
              if (null === (dB = BB.multiFactorSession) || void 0 === dB ? void 0 : dB.idToken) return kV._fromIdtoken(BB.multiFactorSession.idToken)
            }
            return null
          }
        }
        class LV {
          constructor(BB, TB, dB) {
            this.session = BB, this.hints = TB, this.signInResolver = dB
          }
          static _fromError(BB, TB) {
            const dB = rT(BB),
              VB = TB.customData._serverResponse,
              yB = (VB.mfaInfo || []).map((BB => zd._fromServerResponse(dB, BB)));
            MB(VB.mfaPendingCredential, dB, "internal-error");
            const pB = kV._fromMfaPendingCredential(VB.mfaPendingCredential);
            return new LV(pB, yB, (async BB => {
              const yB = await BB._process(dB, pB);
              delete VB.mfaInfo, delete VB.mfaPendingCredential;
              const lB = Object.assign(Object.assign({}, VB), {
                idToken: yB.idToken,
                refreshToken: yB.refreshToken
              });
              switch (TB.operationType) {
                case "signIn":
                  const BB = await od._fromIdTokenResponse(dB, TB.operationType, lB);
                  return await dB._updateCurrentUser(BB.user), BB;
                case "reauthenticate":
                  return MB(TB.user, dB, "internal-error"), od._forOperation(TB.user, TB.operationType, lB);
                default:
                  iB(dB, "internal-error")
              }
            }))
          }
          async resolveSignIn(BB) {
            const TB = BB;
            return this.signInResolver(TB)
          }
        }

        function OV(BB, TB) {
          var dB;
          const yB = (0, VB.N)(BB),
            pB = TB;
          return MB(TB.customData.operationType, yB, "argument-error"), MB(null === (dB = pB.customData._serverResponse) || void 0 === dB ? void 0 : dB.mfaPendingCredential, yB, "argument-error"), LV._fromError(yB, pB)
        }
        class DV {
          constructor(BB) {
            this.user = BB, this.enrolledFactors = [], BB._onReload((TB => {
              TB.mfaInfo && (this.enrolledFactors = TB.mfaInfo.map((TB => zd._fromServerResponse(BB.auth, TB))))
            }))
          }
          static _fromUser(BB) {
            return new DV(BB)
          }
          async getSession() {
            return kV._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(BB, TB) {
            const dB = BB,
              VB = await this.getSession(),
              yB = await AB(this.user, dB._process(this.user.auth, VB, TB));
            return await this.user._updateTokensIfNecessary(yB), this.user.reload()
          }
          async unenroll(BB) {
            const TB = "string" === typeof BB ? BB : BB.uid,
              dB = await this.user.getIdToken();
            try {
              const BB = await AB(this.user, (VB = this.user.auth, yB = {
                idToken: dB,
                mfaEnrollmentId: TB
              }, RB(VB, "POST", "/v2/accounts/mfaEnrollment:withdraw", QB(VB, yB))));
              this.enrolledFactors = this.enrolledFactors.filter((BB => {
                let {
                  uid: dB
                } = BB;
                return dB !== TB
              })), await this.user._updateTokensIfNecessary(BB), await this.user.reload()
            } catch (pB) {
              throw pB
            }
            var VB, yB
          }
        }
        const uV = new WeakMap;

        function HV(BB) {
          const TB = (0, VB.N)(BB);
          return uV.has(TB) || uV.set(TB, DV._fromUser(TB)), uV.get(TB)
        }
        const EV = "__sak";
        class vV {
          constructor(BB, TB) {
            this.storageRetriever = BB, this.type = TB
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(EV, "1"), this.storage.removeItem(EV), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (BB) {
              return Promise.resolve(!1)
            }
          }
          _set(BB, TB) {
            return this.storage.setItem(BB, JSON.stringify(TB)), Promise.resolve()
          }
          _get(BB) {
            const TB = this.storage.getItem(BB);
            return Promise.resolve(TB ? JSON.parse(TB) : null)
          }
          _remove(BB) {
            return this.storage.removeItem(BB), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class mV extends vV {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (BB, TB) => this.onStorageEvent(BB, TB), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const BB = (0, VB.R)();
              return LT(BB) || vT(BB)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (BB) {
                return !1
              }
            }(), this.fallbackToPolling = mT(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(BB) {
            for (const TB of Object.keys(this.listeners)) {
              const dB = this.storage.getItem(TB),
                VB = this.localCache[TB];
              dB !== VB && BB(TB, VB, dB)
            }
          }
          onStorageEvent(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!BB.key) return void this.forAllChangedKeys(((BB, TB, dB) => {
              this.notifyListeners(BB, dB)
            }));
            const dB = BB.key;
            if (TB ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const VB = this.storage.getItem(dB);
              if (BB.newValue !== VB) null !== BB.newValue ? this.storage.setItem(dB, BB.newValue) : this.storage.removeItem(dB);
              else if (this.localCache[dB] === BB.newValue && !TB) return
            }
            const yB = () => {
                const BB = this.storage.getItem(dB);
                (TB || this.localCache[dB] !== BB) && this.notifyListeners(dB, BB)
              },
              pB = this.storage.getItem(dB);
            (0, VB._)() && 10 === document.documentMode && pB !== BB.newValue && BB.newValue !== BB.oldValue ? setTimeout(yB, 10) : yB()
          }
          notifyListeners(BB, TB) {
            this.localCache[BB] = TB;
            const dB = this.listeners[BB];
            if (dB)
              for (const VB of Array.from(dB)) VB(TB ? JSON.parse(TB) : TB)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((BB, TB, dB) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: BB,
                  oldValue: TB,
                  newValue: dB
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
          _addListener(BB, TB) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[BB] || (this.listeners[BB] = new Set, this.localCache[BB] = this.storage.getItem(BB)), this.listeners[BB].add(TB)
          }
          _removeListener(BB, TB) {
            this.listeners[BB] && (this.listeners[BB].delete(TB), 0 === this.listeners[BB].size && delete this.listeners[BB]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(BB, TB) {
            await super._set(BB, TB), this.localCache[BB] = JSON.stringify(TB)
          }
          async _get(BB) {
            const TB = await super._get(BB);
            return this.localCache[BB] = JSON.stringify(TB), TB
          }
          async _remove(BB) {
            await super._remove(BB), delete this.localCache[BB]
          }
        }
        mV.type = "LOCAL";
        const iV = mV;
        class NV extends vV {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(BB, TB) {}
          _removeListener(BB, TB) {}
        }
        NV.type = "SESSION";
        const tV = NV;
        class fV {
          constructor(BB) {
            this.eventTarget = BB, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(BB) {
            const TB = this.receivers.find((TB => TB.isListeningto(BB)));
            if (TB) return TB;
            const dB = new fV(BB);
            return this.receivers.push(dB), dB
          }
          isListeningto(BB) {
            return this.eventTarget === BB
          }
          async handleEvent(BB) {
            const TB = BB,
              {
                eventId: dB,
                eventType: VB,
                data: yB
              } = TB.data,
              pB = this.handlersMap[VB];
            if (!(null === pB || void 0 === pB ? void 0 : pB.size)) return;
            TB.ports[0].postMessage({
              status: "ack",
              eventId: dB,
              eventType: VB
            });
            const lB = Array.from(pB).map((async BB => BB(TB.origin, yB))),
              JB = await
            function(BB) {
              return Promise.all(BB.map((async BB => {
                try {
                  return {
                    fulfilled: !0,
                    value: await BB
                  }
                } catch (TB) {
                  return {
                    fulfilled: !1,
                    reason: TB
                  }
                }
              })))
            }(lB);
            TB.ports[0].postMessage({
              status: "done",
              eventId: dB,
              eventType: VB,
              response: JB
            })
          }
          _subscribe(BB, TB) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[BB] || (this.handlersMap[BB] = new Set), this.handlersMap[BB].add(TB)
          }
          _unsubscribe(BB, TB) {
            this.handlersMap[BB] && TB && this.handlersMap[BB].delete(TB), TB && 0 !== this.handlersMap[BB].size || delete this.handlersMap[BB], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function sV() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            dB = "";
          for (let VB = 0; VB < TB; VB++) dB += Math.floor(10 * Math.random());
          return BB + dB
        }
        fV.receivers = [];
        class MV {
          constructor(BB) {
            this.target = BB, this.handlers = new Set
          }
          removeMessageHandler(BB) {
            BB.messageChannel && (BB.messageChannel.port1.removeEventListener("message", BB.Qv), BB.messageChannel.port1.close()), this.handlers.delete(BB)
          }
          async _send(BB, TB) {
            let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const VB = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!VB) throw new Error("connection_unavailable");
            let yB, pB;
            return new Promise(((lB, JB) => {
              const YB = sV("", 20);
              VB.port1.start();
              const gB = setTimeout((() => {
                JB(new Error("unsupported_event"))
              }), dB);
              pB = {
                messageChannel: VB,
                Qv(BB) {
                  const TB = BB;
                  if (TB.data.eventId === YB) switch (TB.data.status) {
                    case "ack":
                      clearTimeout(gB), yB = setTimeout((() => {
                        JB(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(yB), lB(TB.data.response);
                      break;
                    default:
                      clearTimeout(gB), clearTimeout(yB), JB(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(pB), VB.port1.addEventListener("message", pB.Qv), this.target.postMessage({
                eventType: BB,
                eventId: YB,
                data: TB
              }, [VB.port2])
            })).finally((() => {
              pB && this.removeMessageHandler(pB)
            }))
          }
        }

        function zV() {
          return window
        }

        function wV() {
          return "undefined" !== typeof zV().WorkerGlobalScope && "function" === typeof zV().importScripts
        }
        const UV = "firebaseLocalStorageDb",
          FV = "firebaseLocalStorage",
          KV = "fbase_key";
        class rV {
          constructor(BB) {
            this.request = BB
          }
          toPromise() {
            return new Promise(((BB, TB) => {
              this.request.addEventListener("success", (() => {
                BB(this.request.result)
              })), this.request.addEventListener("error", (() => {
                TB(this.request.error)
              }))
            }))
          }
        }

        function IV(BB, TB) {
          return BB.transaction([FV], TB ? "readwrite" : "readonly").objectStore(FV)
        }

        function cV() {
          const BB = indexedDB.open(UV, 1);
          return new Promise(((TB, dB) => {
            BB.addEventListener("error", (() => {
              dB(BB.error)
            })), BB.addEventListener("upgradeneeded", (() => {
              const TB = BB.result;
              try {
                TB.createObjectStore(FV, {
                  keyPath: KV
                })
              } catch (VB) {
                dB(VB)
              }
            })), BB.addEventListener("success", (async () => {
              const dB = BB.result;
              dB.objectStoreNames.contains(FV) ? TB(dB) : (dB.close(), await
                function() {
                  const BB = indexedDB.deleteDatabase(UV);
                  return new rV(BB).toPromise()
                }(), TB(await cV()))
            }))
          }))
        }
        async function SV(BB, TB, dB) {
          const VB = IV(BB, !0).put({
            [KV]: TB,
            value: dB
          });
          return new rV(VB).toPromise()
        }

        function PV(BB, TB) {
          const dB = IV(BB, !0).delete(TB);
          return new rV(dB).toPromise()
        }
        class QV {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await cV()), this.db
          }
          async _withRetries(BB) {
            let TB = 0;
            for (;;) try {
              const TB = await this._openDb();
              return await BB(TB)
            } catch (dB) {
              if (TB++ > 3) throw dB;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return wV() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = fV._getInstance(wV() ? self : null), this.receiver._subscribe("keyChanged", (async (BB, TB) => ({
              keyProcessed: (await this._poll()).includes(TB.key)
            }))), this.receiver._subscribe("ping", (async (BB, TB) => ["keyChanged"]))
          }
          async initializeSender() {
            var BB, TB;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (BB) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new MV(this.activeServiceWorker);
            const dB = await this.sender._send("ping", {}, 800);
            dB && (null === (BB = dB[0]) || void 0 === BB ? void 0 : BB.fulfilled) && (null === (TB = dB[0]) || void 0 === TB ? void 0 : TB.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(BB) {
            if (this.sender && this.activeServiceWorker && function() {
                var BB;
                return (null === (BB = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === BB ? void 0 : BB.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: BB
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (TB) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const BB = await cV();
              return await SV(BB, EV, "1"), await PV(BB, EV), !0
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
          async _set(BB, TB) {
            return this._withPendingWrite((async () => (await this._withRetries((dB => SV(dB, BB, TB))), this.localCache[BB] = TB, this.notifyServiceWorker(BB))))
          }
          async _get(BB) {
            const TB = await this._withRetries((TB => async function(BB, TB) {
              const dB = IV(BB, !1).get(TB),
                VB = await new rV(dB).toPromise();
              return void 0 === VB ? null : VB.value
            }(TB, BB)));
            return this.localCache[BB] = TB, TB
          }
          async _remove(BB) {
            return this._withPendingWrite((async () => (await this._withRetries((TB => PV(TB, BB))), delete this.localCache[BB], this.notifyServiceWorker(BB))))
          }
          async _poll() {
            const BB = await this._withRetries((BB => {
              const TB = IV(BB, !1).getAll();
              return new rV(TB).toPromise()
            }));
            if (!BB) return [];
            if (0 !== this.pendingWrites) return [];
            const TB = [],
              dB = new Set;
            for (const {
                fbase_key: VB,
                value: yB
              }
              of BB) dB.add(VB), JSON.stringify(this.localCache[VB]) !== JSON.stringify(yB) && (this.notifyListeners(VB, yB), TB.push(VB));
            for (const VB of Object.keys(this.localCache)) this.localCache[VB] && !dB.has(VB) && (this.notifyListeners(VB, null), TB.push(VB));
            return TB
          }
          notifyListeners(BB, TB) {
            this.localCache[BB] = TB;
            const dB = this.listeners[BB];
            if (dB)
              for (const VB of Array.from(dB)) VB(TB)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(BB, TB) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[BB] || (this.listeners[BB] = new Set, this._get(BB)), this.listeners[BB].add(TB)
          }
          _removeListener(BB, TB) {
            this.listeners[BB] && (this.listeners[BB].delete(TB), 0 === this.listeners[BB].size && delete this.listeners[BB]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        QV.type = "LOCAL";
        const RV = QV;
        const aV = 1e12;
        class ZV {
          constructor(BB) {
            this.auth = BB, this.counter = aV, this._widgets = new Map
          }
          render(BB, TB) {
            const dB = this.counter;
            return this._widgets.set(dB, new XV(BB, this.auth.name, TB || {})), this.counter++, dB
          }
          reset(BB) {
            var TB;
            const dB = BB || aV;
            null === (TB = this._widgets.get(dB)) || void 0 === TB || TB.delete(), this._widgets.delete(dB)
          }
          getResponse(BB) {
            var TB;
            const dB = BB || aV;
            return (null === (TB = this._widgets.get(dB)) || void 0 === TB ? void 0 : TB.getResponse()) || ""
          }
          async execute(BB) {
            var TB;
            const dB = BB || aV;
            return null === (TB = this._widgets.get(dB)) || void 0 === TB || TB.execute(), ""
          }
        }
        class XV {
          constructor(BB, TB, dB) {
            this.params = dB, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const VB = "string" === typeof BB ? document.getElementById(BB) : BB;
            MB(VB, "argument-error", {
              appName: TB
            }), this.container = VB, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
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
                const TB = [],
                  dB = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let VB = 0; VB < BB; VB++) TB.push(dB.charAt(Math.floor(Math.random() * dB.length)));
                return TB.join("")
              }(50);
              const {
                callback: BB,
                "expired-callback": TB
              } = this.params;
              if (BB) try {
                BB(this.responseToken)
              } catch (dB) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, TB) try {
                  TB()
                } catch (dB) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const WV = zT("rcb"),
          hV = new rB(3e4, 6e4);
        class CV {
          constructor() {
            var BB;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (BB = zV().grecaptcha) || void 0 === BB ? void 0 : BB.render)
          }
          load(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return MB(function(BB) {
              return BB.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(BB)
            }(TB), BB, "argument-error"), this.shouldResolveImmediately(TB) && tT(zV().grecaptcha) ? Promise.resolve(zV().grecaptcha) : new Promise(((dB, yB) => {
              const pB = zV().setTimeout((() => {
                yB(NB(BB, "network-request-failed"))
              }), hV.get());
              zV()[WV] = () => {
                zV().clearTimeout(pB), delete zV()[WV];
                const VB = zV().grecaptcha;
                if (!VB || !tT(VB)) return void yB(NB(BB, "internal-error"));
                const lB = VB.render;
                VB.render = (BB, TB) => {
                  const dB = lB(BB, TB);
                  return this.counter++, dB
                }, this.hostLanguage = TB, dB(VB)
              };
              MT(`https://www.google.com/recaptcha/api.js??${(0,VB.mb)({onload:WV,render:"explicit",hl:TB})}`).catch((() => {
                clearTimeout(pB), yB(NB(BB, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(BB) {
            var TB;
            return !!(null === (TB = zV().grecaptcha) || void 0 === TB ? void 0 : TB.render) && (BB === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class GV {
          async load(BB) {
            return new ZV(BB)
          }
          clearedOneInstance() {}
        }
        const qV = "recaptcha",
          xV = {
            theme: "light",
            type: "image"
          };
        class jV {
          constructor(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, xV),
              dB = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = TB, this.type = qV, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = rT(dB), this.isInvisible = "invisible" === this.parameters.size, MB("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const VB = "string" === typeof BB ? document.getElementById(BB) : BB;
            MB(VB, this.auth, "argument-error"), this.container = VB, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new GV : new CV, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const BB = await this.render(),
              TB = this.getAssertedRecaptcha(),
              dB = TB.getResponse(BB);
            return dB || new Promise((dB => {
              const VB = BB => {
                BB && (this.tokenChangeListeners.delete(VB), dB(BB))
              };
              this.tokenChangeListeners.add(VB), this.isInvisible && TB.execute(BB)
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
            MB(!this.parameters.sitekey, this.auth, "argument-error"), MB(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), MB("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(BB) {
            return TB => {
              if (this.tokenChangeListeners.forEach((BB => BB(TB))), "function" === typeof BB) BB(TB);
              else if ("string" === typeof BB) {
                const dB = zV()[BB];
                "function" === typeof dB && dB(TB)
              }
            }
          }
          assertNotDestroyed() {
            MB(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let BB = this.container;
              if (!this.isInvisible) {
                const TB = document.createElement("div");
                BB.appendChild(TB), BB = TB
              }
              this.widgetId = this.getAssertedRecaptcha().render(BB, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            MB(FB() && !wV(), this.auth, "internal-error"), await
            function() {
              let BB = null;
              return new Promise((TB => {
                "complete" !== document.readyState ? (BB = () => TB(), window.addEventListener("load", BB)) : TB()
              })).catch((TB => {
                throw BB && window.removeEventListener("load", BB), TB
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const BB = await async function(BB) {
              return (await RB(BB, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            MB(BB, this.auth, "internal-error"), this.parameters.sitekey = BB
          }
          getAssertedRecaptcha() {
            return MB(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class AV {
          constructor(BB, TB) {
            this.verificationId = BB, this.onConfirmation = TB
          }
          confirm(BB) {
            const TB = AT._fromVerification(this.verificationId, BB);
            return this.onConfirmation(TB)
          }
        }
        async function bV(BB, TB, dB) {
          const yB = rT(BB),
            pB = await By(yB, TB, (0, VB.N)(dB));
          return new AV(pB, (BB => td(yB, BB)))
        }
        async function nV(BB, TB, dB) {
          const yB = (0, VB.N)(BB);
          await vd(!1, yB, "phone");
          const pB = await By(yB.auth, TB, (0, VB.N)(dB));
          return new AV(pB, (BB => fd(yB, BB)))
        }
        async function eV(BB, TB, dB) {
          const yB = (0, VB.N)(BB),
            pB = await By(yB.auth, TB, (0, VB.N)(dB));
          return new AV(pB, (BB => sd(yB, BB)))
        }
        async function By(BB, TB, dB) {
          var VB;
          const yB = await dB.verify();
          try {
            let pB;
            if (MB("string" === typeof yB, BB, "argument-error"), MB(dB.type === qV, BB, "argument-error"), pB = "string" === typeof TB ? {
                phoneNumber: TB
              } : TB, "session" in pB) {
              const TB = pB.session;
              if ("phoneNumber" in pB) {
                MB("enroll" === TB.type, BB, "internal-error");
                const dB = await
                function(BB, TB) {
                  return RB(BB, "POST", "/v2/accounts/mfaEnrollment:start", QB(BB, TB))
                }(BB, {
                  idToken: TB.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: pB.phoneNumber,
                    recaptchaToken: yB
                  }
                });
                return dB.phoneSessionInfo.sessionInfo
              } {
                MB("signin" === TB.type, BB, "internal-error");
                const dB = (null === (VB = pB.multiFactorHint) || void 0 === VB ? void 0 : VB.uid) || pB.multiFactorUid;
                MB(dB, BB, "missing-multi-factor-info");
                const lB = await
                function(BB, TB) {
                  return RB(BB, "POST", "/v2/accounts/mfaSignIn:start", QB(BB, TB))
                }(BB, {
                  mfaPendingCredential: TB.credential,
                  mfaEnrollmentId: dB,
                  phoneSignInInfo: {
                    recaptchaToken: yB
                  }
                });
                return lB.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: TB
              } = await async function(BB, TB) {
                return RB(BB, "POST", "/v1/accounts:sendVerificationCode", QB(BB, TB))
              }(BB, {
                phoneNumber: pB.phoneNumber,
                recaptchaToken: yB
              });
              return TB
            }
          } finally {
            dB._reset()
          }
        }
        async function Ty(BB, TB) {
          await Ed((0, VB.N)(BB), TB)
        }
        class dy {
          constructor(BB) {
            this.providerId = dy.PROVIDER_ID, this.auth = rT(BB)
          }
          verifyPhoneNumber(BB, TB) {
            return By(this.auth, BB, (0, VB.N)(TB))
          }
          static credential(BB, TB) {
            return AT._fromVerification(BB, TB)
          }
          static credentialFromResult(BB) {
            const TB = BB;
            return dy.credentialFromTaggedObject(TB)
          }
          static credentialFromError(BB) {
            return dy.credentialFromTaggedObject(BB.customData || {})
          }
          static credentialFromTaggedObject(BB) {
            let {
              _tokenResponse: TB
            } = BB;
            if (!TB) return null;
            const {
              phoneNumber: dB,
              temporaryProof: VB
            } = TB;
            return dB && VB ? AT._fromTokenResponse(dB, VB) : null
          }
        }

        function Vy(BB, TB) {
          return TB ? pT(TB) : (MB(BB._popupRedirectResolver, BB, "argument-error"), BB._popupRedirectResolver)
        }
        dy.PROVIDER_ID = "phone", dy.PHONE_SIGN_IN_METHOD = "phone";
        class yy extends RT {
          constructor(BB) {
            super("custom", "custom"), this.params = BB
          }
          _getIdTokenResponse(BB) {
            return qT(BB, this._buildIdpRequest())
          }
          _linkToIdToken(BB, TB) {
            return qT(BB, this._buildIdpRequest(TB))
          }
          _getReauthenticationResolver(BB) {
            return qT(BB, this._buildIdpRequest())
          }
          _buildIdpRequest(BB) {
            const TB = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return BB && (TB.idToken = BB), TB
          }
        }

        function py(BB) {
          return Nd(BB.auth, new yy(BB), BB.bypassAuthState)
        }

        function ly(BB) {
          const {
            auth: TB,
            user: dB
          } = BB;
          return MB(dB, TB, "internal-error"), md(dB, new yy(BB), BB.bypassAuthState)
        }
        async function Jy(BB) {
          const {
            auth: TB,
            user: dB
          } = BB;
          return MB(dB, TB, "internal-error"), Ed(dB, new yy(BB), BB.bypassAuthState)
        }
        class Yy {
          constructor(BB, TB, dB, VB) {
            let yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = BB, this.resolver = dB, this.user = VB, this.bypassAuthState = yB, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(TB) ? TB : [TB]
          }
          execute() {
            return new Promise((async (BB, TB) => {
              this.pendingPromise = {
                resolve: BB,
                reject: TB
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (dB) {
                this.reject(dB)
              }
            }))
          }
          async onAuthEvent(BB) {
            const {
              urlResponse: TB,
              sessionId: dB,
              postBody: VB,
              tenantId: yB,
              error: pB,
              type: lB
            } = BB;
            if (pB) return void this.reject(pB);
            const JB = {
              auth: this.auth,
              requestUri: TB,
              sessionId: dB,
              tenantId: yB || void 0,
              postBody: VB || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(lB)(JB))
            } catch (YB) {
              this.reject(YB)
            }
          }
          onError(BB) {
            this.reject(BB)
          }
          getIdpTask(BB) {
            switch (BB) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return py;
              case "linkViaPopup":
              case "linkViaRedirect":
                return Jy;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return ly;
              default:
                iB(this.auth, "internal-error")
            }
          }
          resolve(BB) {
            wB(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(BB), this.unregisterAndCleanUp()
          }
          reject(BB) {
            wB(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(BB), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const gy = new rB(2e3, 1e4);
        async function oy(BB, TB, dB) {
          const VB = rT(BB);
          fB(BB, TB, Bd);
          const yB = Vy(VB, dB);
          return new Oy(VB, "signInViaPopup", TB, yB).executeNotNull()
        }
        async function ky(BB, TB, dB) {
          const yB = (0, VB.N)(BB);
          fB(yB.auth, TB, Bd);
          const pB = Vy(yB.auth, dB);
          return new Oy(yB.auth, "reauthViaPopup", TB, pB, yB).executeNotNull()
        }
        async function Ly(BB, TB, dB) {
          const yB = (0, VB.N)(BB);
          fB(yB.auth, TB, Bd);
          const pB = Vy(yB.auth, dB);
          return new Oy(yB.auth, "linkViaPopup", TB, pB, yB).executeNotNull()
        }
        class Oy extends Yy {
          constructor(BB, TB, dB, VB, yB) {
            super(BB, TB, VB, yB), this.provider = dB, this.authWindow = null, this.pollId = null, Oy.currentPopupAction && Oy.currentPopupAction.cancel(), Oy.currentPopupAction = this
          }
          async executeNotNull() {
            const BB = await this.execute();
            return MB(BB, this.auth, "internal-error"), BB
          }
          async onExecution() {
            wB(1 === this.filter.length, "Popup operations only handle one event");
            const BB = sV();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], BB), this.authWindow.associatedEvent = BB, this.resolver._originValidation(this.auth).catch((BB => {
              this.reject(BB)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (BB => {
              BB || this.reject(NB(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var BB;
            return (null === (BB = this.authWindow) || void 0 === BB ? void 0 : BB.associatedEvent) || null
          }
          cancel() {
            this.reject(NB(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Oy.currentPopupAction = null
          }
          pollUserCancellation() {
            const BB = () => {
              var TB, dB;
              (null === (dB = null === (TB = this.authWindow) || void 0 === TB ? void 0 : TB.window) || void 0 === dB ? void 0 : dB.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(NB(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(BB, gy.get())
            };
            BB()
          }
        }
        Oy.currentPopupAction = null;
        const Dy = "pendingRedirect",
          uy = new Map;
        class Hy extends Yy {
          constructor(BB, TB) {
            super(BB, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], TB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let BB = uy.get(this.auth._key());
            if (!BB) {
              try {
                const TB = await async function(BB, TB) {
                  const dB = iy(TB),
                    VB = my(BB);
                  if (!await VB._isAvailable()) return !1;
                  const yB = "true" === await VB._get(dB);
                  return await VB._remove(dB), yB
                }(this.resolver, this.auth) ? await super.execute() : null;
                BB = () => Promise.resolve(TB)
              } catch (TB) {
                BB = () => Promise.reject(TB)
              }
              uy.set(this.auth._key(), BB)
            }
            return this.bypassAuthState || uy.set(this.auth._key(), (() => Promise.resolve(null))), BB()
          }
          async onAuthEvent(BB) {
            if ("signInViaRedirect" === BB.type) return super.onAuthEvent(BB);
            if ("unknown" !== BB.type) {
              if (BB.eventId) {
                const TB = await this.auth._redirectUserForId(BB.eventId);
                if (TB) return this.user = TB, super.onAuthEvent(BB);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function Ey(BB, TB) {
          return my(BB)._set(iy(TB), "true")
        }

        function vy(BB, TB) {
          uy.set(BB._key(), TB)
        }

        function my(BB) {
          return pT(BB._redirectPersistence)
        }

        function iy(BB) {
          return YT(Dy, BB.config.apiKey, BB.name)
        }

        function Ny(BB, TB, dB) {
          return async function(BB, TB, dB) {
            const VB = rT(BB);
            fB(BB, TB, Bd), await VB._initializationPromise;
            const yB = Vy(VB, dB);
            return await Ey(yB, VB), yB._openRedirect(VB, TB, "signInViaRedirect")
          }(BB, TB, dB)
        }

        function ty(BB, TB, dB) {
          return async function(BB, TB, dB) {
            const yB = (0, VB.N)(BB);
            fB(yB.auth, TB, Bd), await yB.auth._initializationPromise;
            const pB = Vy(yB.auth, dB);
            await Ey(pB, yB.auth);
            const lB = await zy(yB);
            return pB._openRedirect(yB.auth, TB, "reauthViaRedirect", lB)
          }(BB, TB, dB)
        }

        function fy(BB, TB, dB) {
          return async function(BB, TB, dB) {
            const yB = (0, VB.N)(BB);
            fB(yB.auth, TB, Bd), await yB.auth._initializationPromise;
            const pB = Vy(yB.auth, dB);
            await vd(!1, yB, TB.providerId), await Ey(pB, yB.auth);
            const lB = await zy(yB);
            return pB._openRedirect(yB.auth, TB, "linkViaRedirect", lB)
          }(BB, TB, dB)
        }
        async function sy(BB, TB) {
          return await rT(BB)._initializationPromise, My(BB, TB, !1)
        }
        async function My(BB, TB) {
          let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const VB = rT(BB),
            yB = Vy(VB, TB),
            pB = new Hy(VB, yB, dB),
            lB = await pB.execute();
          return lB && !dB && (delete lB.user._redirectEventId, await VB._persistUserIfCurrent(lB.user), await VB._setRedirectUser(null, TB)), lB
        }
        async function zy(BB) {
          const TB = sV(`${BB.uid}:::`);
          return BB._redirectEventId = TB, await BB.auth._setRedirectUser(BB), await BB.auth._persistUserIfCurrent(BB), TB
        }
        class wy {
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
            let TB = !1;
            return this.consumers.forEach((dB => {
              this.isEventForConsumer(BB, dB) && (TB = !0, this.sendToConsumer(BB, dB), this.saveEventToCache(BB))
            })), this.hasHandledPotentialRedirect || ! function(BB) {
              switch (BB.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return Fy(BB);
                default:
                  return !1
              }
            }(BB) || (this.hasHandledPotentialRedirect = !0, TB || (this.queuedRedirectEvent = BB, TB = !0)), TB
          }
          sendToConsumer(BB, TB) {
            var dB;
            if (BB.error && !Fy(BB)) {
              const VB = (null === (dB = BB.error.code) || void 0 === dB ? void 0 : dB.split("auth/")[1]) || "internal-error";
              TB.onError(NB(this.auth, VB))
            } else TB.onAuthEvent(BB)
          }
          isEventForConsumer(BB, TB) {
            const dB = null === TB.eventId || !!BB.eventId && BB.eventId === TB.eventId;
            return TB.filter.includes(BB.type) && dB
          }
          hasEventBeenHandled(BB) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(Uy(BB))
          }
          saveEventToCache(BB) {
            this.cachedEventUids.add(Uy(BB)), this.lastProcessedEventTime = Date.now()
          }
        }

        function Uy(BB) {
          return [BB.type, BB.eventId, BB.sessionId, BB.tenantId].filter((BB => BB)).join("-")
        }

        function Fy(BB) {
          let {
            type: TB,
            error: dB
          } = BB;
          return "unknown" === TB && "auth/no-auth-event" === (null === dB || void 0 === dB ? void 0 : dB.code)
        }
        const Ky = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          ry = /^https?/;
        async function Iy(BB) {
          if (BB.config.emulator) return;
          const {
            authorizedDomains: TB
          } = await async function(BB) {
            return RB(BB, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(BB);
          for (const VB of TB) try {
            if (cy(VB)) return
          } catch (dB) {}
          iB(BB, "unauthorized-domain")
        }

        function cy(BB) {
          const TB = UB(),
            {
              protocol: dB,
              hostname: VB
            } = new URL(TB);
          if (BB.startsWith("chrome-extension://")) {
            const yB = new URL(BB);
            return "" === yB.hostname && "" === VB ? "chrome-extension:" === dB && BB.replace("chrome-extension://", "") === TB.replace("chrome-extension://", "") : "chrome-extension:" === dB && yB.hostname === VB
          }
          if (!ry.test(dB)) return !1;
          if (Ky.test(BB)) return VB === BB;
          const yB = BB.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + yB + "|" + yB + ")$", "i").test(VB)
        }
        const Sy = new rB(3e4, 6e4);

        function Py() {
          const BB = zV().___jsl;
          if (null === BB || void 0 === BB ? void 0 : BB.H)
            for (const TB of Object.keys(BB.H))
              if (BB.H[TB].r = BB.H[TB].r || [], BB.H[TB].L = BB.H[TB].L || [], BB.H[TB].r = [...BB.H[TB].L], BB.CP)
                for (let dB = 0; dB < BB.CP.length; dB++) BB.CP[dB] = null
        }
        let Qy = null;

        function Ry(BB) {
          return Qy = Qy || function(BB) {
            return new Promise(((TB, dB) => {
              var VB, yB, pB;

              function lB() {
                Py(), gapi.load("gapi.iframes", {
                  callback: () => {
                    TB(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    Py(), dB(NB(BB, "network-request-failed"))
                  },
                  timeout: Sy.get()
                })
              }
              if (null === (yB = null === (VB = zV().gapi) || void 0 === VB ? void 0 : VB.iframes) || void 0 === yB ? void 0 : yB.Iframe) TB(gapi.iframes.getContext());
              else {
                if (!(null === (pB = zV().gapi) || void 0 === pB ? void 0 : pB.load)) {
                  const TB = zT("iframefcb");
                  return zV()[TB] = () => {
                    gapi.load ? lB() : dB(NB(BB, "network-request-failed"))
                  }, MT(`https://apis.google.com/js/api.js?onload=${TB}`).catch((BB => dB(BB)))
                }
                lB()
              }
            })).catch((BB => {
              throw Qy = null, BB
            }))
          }(BB), Qy
        }
        const ay = new rB(5e3, 15e3),
          Zy = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          Xy = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function Wy(BB) {
          const TB = BB.config;
          MB(TB.authDomain, BB, "auth-domain-config-required");
          const dB = TB.emulator ? IB(TB, "emulator/auth/iframe") : `https://${BB.config.authDomain}/__/auth/iframe`,
            pB = {
              apiKey: TB.apiKey,
              appName: BB.name,
              v: yB.h
            },
            lB = Xy.get(BB.config.apiHost);
          lB && (pB.eid = lB);
          const JB = BB._getFrameworks();
          return JB.length && (pB.fw = JB.join(",")), `${dB}?${(0,VB.mb)(pB).slice(1)}`
        }
        const hy = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class Cy {
          constructor(BB) {
            this.window = BB, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (BB) {}
          }
        }

        function Gy(BB, TB, dB) {
          let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const lB = Math.max((window.screen.availHeight - pB) / 2, 0).toString(),
            JB = Math.max((window.screen.availWidth - yB) / 2, 0).toString();
          let YB = "";
          const gB = Object.assign(Object.assign({}, hy), {
              width: yB.toString(),
              height: pB.toString(),
              top: lB,
              left: JB
            }),
            oB = (0, VB.R)().toLowerCase();
          dB && (YB = OT(oB) ? "_blank" : dB), kT(oB) && (TB = TB || "http://localhost", gB.scrollbars = "yes");
          const kB = Object.entries(gB).reduce(((BB, TB) => {
            let [dB, VB] = TB;
            return `${BB}${dB}=${VB},`
          }), "");
          if (function() {
              var BB;
              return vT(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, VB.R)()) && !!(null === (BB = window.navigator) || void 0 === BB ? void 0 : BB.standalone)
            }(oB) && "_self" !== YB) return function(BB, TB) {
            const dB = document.createElement("a");
            dB.href = BB, dB.target = TB;
            const VB = document.createEvent("MouseEvent");
            VB.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), dB.dispatchEvent(VB)
          }(TB || "", YB), new Cy(null);
          const LB = window.open(TB || "", YB, kB);
          MB(LB, BB, "popup-blocked");
          try {
            LB.focus()
          } catch (OB) {}
          return new Cy(LB)
        }
        const qy = "__/auth/handler",
          xy = "emulator/auth/handler",
          jy = encodeURIComponent("fac");
        async function Ay(BB, TB, dB, pB, lB, JB) {
            MB(BB.config.authDomain, BB, "auth-domain-config-required"), MB(BB.config.apiKey, BB, "invalid-api-key");
            const YB = {
              apiKey: BB.config.apiKey,
              appName: BB.name,
              authType: dB,
              redirectUrl: pB,
              v: yB.h,
              eventId: lB
            };
            if (TB instanceof Bd) {
              TB.setDefaultLanguage(BB.languageCode), YB.providerId = TB.providerId || "", (0, VB.X)(TB.getCustomParameters()) || (YB.customParameters = JSON.stringify(TB.getCustomParameters()));
              for (const [BB, TB] of Object.entries(JB || {})) YB[BB] = TB
            }
            if (TB instanceof Td) {
              const BB = TB.getScopes().filter((BB => "" !== BB));
              BB.length > 0 && (YB.scopes = BB.join(","))
            }
            BB.tenantId && (YB.tid = BB.tenantId);
            const gB = YB;
            for (const VB of Object.keys(gB)) void 0 === gB[VB] && delete gB[VB];
            const oB = await BB._getAppCheckToken(),
              kB = oB ? `#${jy}=${encodeURIComponent(oB)}` : "";
            return `${function(BB){let{config:TB}=BB;if(!TB.emulator)return`
            https: //${TB.authDomain}/${qy}`;return IB(TB,xy)}(BB)}?${(0,VB.mb)(gB).slice(1)}${kB}`}const by="webStorageSupport";const ny=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tV,this._completeRedirectFn=My,this._overrideRedirectResult=vy}async _openPopup(BB,TB,dB,VB){var yB;wB(null===(yB=this.eventManagers[BB._key()])||void 0===yB?void 0:yB.manager,"_initialize() not called before _openPopup()");return Gy(BB,await Ay(BB,TB,dB,UB(),VB),sV())}async _openRedirect(BB,TB,dB,VB){await this._originValidation(BB);return function(BB){zV().location.href=BB}(await Ay(BB,TB,dB,UB(),VB)),new Promise((()=>{}))}_initialize(BB){const TB=BB._key();if(this.eventManagers[TB]){const{manager:BB,promise:dB}=this.eventManagers[TB];return BB?Promise.resolve(BB):(wB(dB,"If manager is not set, promise should be"),dB)}const dB=this.initAndGetManager(BB);return this.eventManagers[TB]={promise:dB},dB.catch((()=>{delete this.eventManagers[TB]})),dB}async initAndGetManager(BB){const TB=await async function(BB){const TB=await Ry(BB),dB=zV().gapi;return MB(dB,BB,"internal-error"),TB.open({where:document.body,url:Wy(BB),messageHandlersFilter:dB.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zy,dontclear:!0},(TB=>new Promise((async(dB,VB)=>{await TB.restyle({setHideOnLeave:!1});const yB=NB(BB,"network-request-failed"),pB=zV().setTimeout((()=>{VB(yB)}),ay.get());function lB(){zV().clearTimeout(pB),dB(TB)}TB.ping(lB).then(lB,(()=>{VB(yB)}))}))))}(BB),dB=new wy(BB);return TB.register("authEvent",(TB=>{MB(null===TB||void 0===TB?void 0:TB.authEvent,BB,"invalid-auth-event");return{status:dB.onEvent(TB.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[BB._key()]={manager:dB},this.iframes[BB._key()]=TB,dB}_isIframeWebStorageSupported(BB,TB){this.iframes[BB._key()].send(by,{type:by},(dB=>{var VB;const yB=null===(VB=null===dB||void 0===dB?void 0:dB[0])||void 0===VB?void 0:VB[by];void 0!==yB&&TB(!!yB),iB(BB,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(BB){const TB=BB._key();return this.originValidationPromises[TB]||(this.originValidationPromises[TB]=Iy(BB)),this.originValidationPromises[TB]}get _shouldInitProactively(){return mT()||LT()||vT()}};class ey{constructor(BB){this.factorId=BB}_process(BB,TB,dB){switch(TB.type){case"enroll":return this._finalizeEnroll(BB,TB.credential,dB);case"signin":return this._finalizeSignIn(BB,TB.credential);default:return zB("unexpected MultiFactorSessionType")}}}class Bp extends ey{constructor(BB){super("phone"),this.credential=BB}static _fromCredential(BB){return new Bp(BB)}_finalizeEnroll(BB,TB,dB){return function(BB,TB){return RB(BB,"POST","/v2/accounts/mfaEnrollment:finalize",QB(BB,TB))}(BB,{idToken:TB,displayName:dB,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(BB,TB){return function(BB,TB){return RB(BB,"POST","/v2/accounts/mfaSignIn:finalize",QB(BB,TB))}(BB,{mfaPendingCredential:TB,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Tp{constructor(){}static assertion(BB){return Bp._fromCredential(BB)}}Tp.FACTOR_ID="phone";class dp{static assertionForEnrollment(BB,TB){return Vp._fromSecret(BB,TB)}static assertionForSignIn(BB,TB){return Vp._fromEnrollmentId(BB,TB)}static async generateSecret(BB){const TB=BB;MB("undefined"!==typeof TB.auth,"internal-error");const dB=await(VB=TB.auth,yB={idToken:TB.credential,totpEnrollmentInfo:{}},RB(VB,"POST","/v2/accounts/mfaEnrollment:start",QB(VB,yB)));var VB,yB;return yp._fromStartTotpMfaEnrollmentResponse(dB,TB.auth)}}dp.FACTOR_ID="totp";class Vp extends ey{constructor(BB,TB,dB){super("totp"),this.otp=BB,this.enrollmentId=TB,this.secret=dB}static _fromSecret(BB,TB){return new Vp(TB,void 0,BB)}static _fromEnrollmentId(BB,TB){return new Vp(TB,BB)}async _finalizeEnroll(BB,TB,dB){return MB("undefined"!==typeof this.secret,BB,"argument-error"),function(BB,TB){return RB(BB,"POST","/v2/accounts/mfaEnrollment:finalize",QB(BB,TB))}(BB,{idToken:TB,displayName:dB,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(BB,TB){MB(void 0!==this.enrollmentId&&void 0!==this.otp,BB,"argument-error");const dB={verificationCode:this.otp};return function(BB,TB){return RB(BB,"POST","/v2/accounts/mfaSignIn:finalize",QB(BB,TB))}(BB,{mfaPendingCredential:TB,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:dB})}}class yp{constructor(BB,TB,dB,VB,yB,pB,lB){this.sessionInfo=pB,this.auth=lB,this.secretKey=BB,this.hashingAlgorithm=TB,this.codeLength=dB,this.codeIntervalSeconds=VB,this.enrollmentCompletionDeadline=yB}static _fromStartTotpMfaEnrollmentResponse(BB,TB){return new yp(BB.totpSessionInfo.sharedSecretKey,BB.totpSessionInfo.hashingAlgorithm,BB.totpSessionInfo.verificationCodeLength,BB.totpSessionInfo.periodSec,new Date(BB.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),BB.totpSessionInfo.sessionInfo,TB)}_makeTotpVerificationInfo(BB){return{sessionInfo:this.sessionInfo,verificationCode:BB}}generateQrCodeUrl(BB,TB){var dB;let VB=!1;return(pp(BB)||pp(TB))&&(VB=!0),VB&&(pp(BB)&&(BB=(null===(dB=this.auth.currentUser)||void 0===dB?void 0:dB.email)||"unknownuser"),pp(TB)&&(TB=this.auth.name)),`otpauth://totp/${TB}:${BB}?secret=${this.secretKey}&issuer=${TB}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function pp(BB){return"undefined"===typeof BB||0===(null===BB||void 0===BB?void 0:BB.length)}var lp="@firebase/auth",Jp="0.23.2";class Yp{constructor(BB){this.auth=BB,this.internalListeners=new Map}getUid(){var BB;return this.assertAuthConfigured(),(null===(BB=this.auth.currentUser)||void 0===BB?void 0:BB.uid)||null}async getToken(BB){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(BB)}}addAuthTokenListener(BB){if(this.assertAuthConfigured(),this.internalListeners.has(BB))return;const TB=this.auth.onIdTokenChanged((TB=>{BB((null===TB||void 0===TB?void 0:TB.stsTokenManager.accessToken)||null)}));this.internalListeners.set(BB,TB),this.updateProactiveRefresh()}removeAuthTokenListener(BB){this.assertAuthConfigured();const TB=this.internalListeners.get(BB);TB&&(this.internalListeners.delete(BB),TB(),this.updateProactiveRefresh())}assertAuthConfigured(){MB(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const gp=(0,VB.K)("authIdTokenMaxAge")||300;let op=null;const kp=BB=>async TB=>{const dB=TB&&await TB.getIdTokenResult(),VB=dB&&((new Date).getTime()-Date.parse(dB.issuedAtTime))/1e3;if(VB&&VB>gp)return;const yB=null===dB||void 0===dB?void 0:dB.token;op!==yB&&(op=yB,await fetch(BB,{method:yB?"POST":"DELETE",headers:yB?{Authorization:`Bearer ${yB}`}:{}}))};function Lp(){let BB=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,yB.I)();const TB=(0,yB.y)(BB,"auth");if(TB.isInitialized())return TB.getImmediate();const dB=cT(BB,{popupRedirectResolver:ny,persistence:[RV,iV,tV]}),pB=(0,VB.K)("authTokenSyncURL");if(pB){const BB=kp(pB);pV(dB,BB,(()=>BB(dB.currentUser))),yV(dB,(TB=>BB(TB)))}const lB=(0,VB.H)("auth");return lB&&ST(dB,`http://${lB}`),dB}var Op;Op="Browser",(0,yB.A)(new JB.c("auth",((BB,TB)=>{let{options:dB}=TB;const VB=BB.getProvider("app").getImmediate(),yB=BB.getProvider("heartbeat"),pB=BB.getProvider("app-check-internal"),{apiKey:lB,authDomain:JB}=VB.options;MB(lB&&!lB.includes(":"),"invalid-api-key",{appName:VB.name});const YB={apiKey:lB,authDomain:JB,clientPlatform:Op,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iT(Op)},gB=new KT(VB,yB,pB,YB);return function(BB,TB){const dB=(null===TB||void 0===TB?void 0:TB.persistence)||[],VB=(Array.isArray(dB)?dB:[dB]).map(pT);(null===TB||void 0===TB?void 0:TB.errorMap)&&BB._updateErrorMap(TB.errorMap),BB._initializeWithPersistence(VB,null===TB||void 0===TB?void 0:TB.popupRedirectResolver)}(gB,dB),gB}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((BB,TB,dB)=>{BB.getProvider("auth-internal").initialize()}))),(0,yB.A)(new JB.c("auth-internal",(BB=>(BB=>new Yp(BB))(rT(BB.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,yB.R)(lp,Jp,function(BB){switch(BB){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Op)),(0,yB.R)(lp,Jp,"esm2017")}};Object.freeze(modules);for(const BB in modules)Object.freeze(modules[BB]);