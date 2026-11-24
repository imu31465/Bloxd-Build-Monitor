/*! For license information please see yma3ej.272.e4575882.chunk.js.LICENSE.txt */
export const id = 272;
export const ids = [272];
export const modules = {
    40659: (TT, UT, mT) => {
        mT.r(UT), mT.d(UT, {
          ActionCodeOperation: () => LT,
          ActionCodeURL: () => oU,
          AuthCredential: () => PU,
          AuthErrorCodes: () => vT,
          EmailAuthCredential: () => GU,
          EmailAuthProvider: () => RU,
          FacebookAuthProvider: () => Wm,
          FactorId: () => HT,
          GithubAuthProvider: () => Mm,
          GoogleAuthProvider: () => zm,
          OAuthCredential: () => EU,
          OAuthProvider: () => mm,
          OperationType: () => lT,
          PhoneAuthCredential: () => DU,
          PhoneAuthProvider: () => mz,
          PhoneMultiFactorGenerator: () => UM,
          ProviderId: () => kT,
          RecaptchaVerifier: () => hW,
          SAMLAuthProvider: () => nm,
          SignInMethod: () => jT,
          TotpMultiFactorGenerator: () => mM,
          TotpSecret: () => zM,
          TwitterAuthProvider: () => Hm,
          applyActionCode: () => Xm,
          beforeAuthStateChanged: () => MW,
          browserLocalPersistence: () => iW,
          browserPopupRedirectResolver: () => Az,
          browserSessionPersistence: () => OW,
          checkActionCode: () => Im,
          confirmPasswordReset: () => ym,
          connectAuthEmulator: () => QU,
          createUserWithEmailAndPassword: () => sm,
          debugErrorMap: () => BT,
          deleteUser: () => jW,
          fetchSignInMethodsForEmail: () => Cm,
          getAdditionalUserInfo: () => UW,
          getAuth: () => LM,
          getIdToken: () => GT,
          getIdTokenResult: () => NT,
          getMultiFactorResolver: () => pW,
          getRedirectResult: () => Yz,
          inMemoryPersistence: () => nU,
          indexedDBLocalPersistence: () => PW,
          initializeAuth: () => IU,
          initializeRecaptchaConfig: () => WW,
          isSignInWithEmailLink: () => Vm,
          linkWithCredential: () => em,
          linkWithPhoneNumber: () => AW,
          linkWithPopup: () => Lz,
          linkWithRedirect: () => ez,
          multiFactor: () => cW,
          onAuthStateChanged: () => gW,
          onIdTokenChanged: () => zW,
          parseActionCodeURL: () => AU,
          prodErrorMap: () => ZT,
          reauthenticateWithCredential: () => Ym,
          reauthenticateWithPhoneNumber: () => RW,
          reauthenticateWithPopup: () => lz,
          reauthenticateWithRedirect: () => Oz,
          reload: () => TU,
          sendEmailVerification: () => rm,
          sendPasswordResetEmail: () => am,
          sendSignInLinkToEmail: () => Pm,
          setPersistence: () => mW,
          signInAnonymously: () => Lm,
          signInWithCredential: () => Om,
          signInWithCustomToken: () => Jm,
          signInWithEmailAndPassword: () => Fm,
          signInWithEmailLink: () => um,
          signInWithPhoneNumber: () => oW,
          signInWithPopup: () => jz,
          signInWithRedirect: () => bz,
          signOut: () => kW,
          unlink: () => cm,
          updateCurrentUser: () => HW,
          updateEmail: () => Gm,
          updatePassword: () => Nm,
          updatePhoneNumber: () => Uz,
          updateProfile: () => Sm,
          useDeviceLanguage: () => nW,
          verifyBeforeUpdateEmail: () => Km,
          verifyPasswordResetCode: () => Qm
        });
        var WT = mT(40643),
          zT = mT(40631);

        function MT(TT, UT) {
          var mT = {};
          for (var WT in TT) Object.prototype.hasOwnProperty.call(TT, WT) && UT.indexOf(WT) < 0 && (mT[WT] = TT[WT]);
          if (null != TT && "function" === typeof Object.getOwnPropertySymbols) {
            var zT = 0;
            for (WT = Object.getOwnPropertySymbols(TT); zT < WT.length; zT++) UT.indexOf(WT[zT]) < 0 && Object.prototype.propertyIsEnumerable.call(TT, WT[zT]) && (mT[WT[zT]] = TT[WT[zT]])
          }
          return mT
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var gT = mT(40651),
          nT = mT(40639);
        const HT = {
            PHONE: "phone",
            TOTP: "totp"
          },
          kT = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          jT = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          lT = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          LT = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function pT() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const BT = function() {
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
          ZT = pT,
          cT = new WT.g("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          vT = {
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
          fT = new gT.h("@firebase/auth");

        function qT(TT) {
          if (fT.logLevel <= gT.d.ERROR) {
            for (var UT = arguments.length, mT = new Array(UT > 1 ? UT - 1 : 0), WT = 1; WT < UT; WT++) mT[WT - 1] = arguments[WT];
            fT.error(`Auth (${zT.f}): ${TT}`, ...mT)
          }
        }

        function iT(TT) {
          for (var UT = arguments.length, mT = new Array(UT > 1 ? UT - 1 : 0), WT = 1; WT < UT; WT++) mT[WT - 1] = arguments[WT];
          throw YT(TT, ...mT)
        }

        function bT(TT) {
          for (var UT = arguments.length, mT = new Array(UT > 1 ? UT - 1 : 0), WT = 1; WT < UT; WT++) mT[WT - 1] = arguments[WT];
          return YT(TT, ...mT)
        }

        function OT(TT, UT, mT) {
          const zT = Object.assign(Object.assign({}, ZT()), {
            [UT]: mT
          });
          return new WT.g("auth", "Firebase", zT).create(UT, {
            appName: TT.name
          })
        }

        function eT(TT, UT, mT) {
          if (!(UT instanceof mT)) throw mT.name !== UT.constructor.name && iT(TT, "argument-error"), OT(TT, "argument-error", `Type of ${UT.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function YT(TT) {
          for (var UT = arguments.length, mT = new Array(UT > 1 ? UT - 1 : 0), WT = 1; WT < UT; WT++) mT[WT - 1] = arguments[WT];
          if ("string" !== typeof TT) {
            const UT = mT[0],
              WT = [...mT.slice(1)];
            return WT[0] && (WT[0].appName = TT.name), TT._errorFactory.create(UT, ...WT)
          }
          return cT.create(TT, ...mT)
        }

        function JT(TT, UT) {
          if (!TT) {
            for (var mT = arguments.length, WT = new Array(mT > 2 ? mT - 2 : 0), zT = 2; zT < mT; zT++) WT[zT - 2] = arguments[zT];
            throw YT(UT, ...WT)
          }
        }

        function xT(TT) {
          const UT = "INTERNAL ASSERTION FAILED: " + TT;
          throw qT(UT), new Error(UT)
        }

        function dT(TT, UT) {
          TT || xT(UT)
        }

        function wT() {
          var TT;
          return "undefined" !== typeof self && (null === (TT = self.location) || void 0 === TT ? void 0 : TT.href) || ""
        }

        function tT() {
          return "http:" === aT() || "https:" === aT()
        }

        function aT() {
          var TT;
          return "undefined" !== typeof self && (null === (TT = self.location) || void 0 === TT ? void 0 : TT.protocol) || null
        }
        class yT {
          constructor(TT, UT) {
            this.shortDelay = TT, this.longDelay = UT, dT(UT > TT, "Short delay should be less than long delay!"), this.isMobile = (0, WT.gb)() || (0, WT.ib)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (tT() || (0, WT.V)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function XT(TT, UT) {
          dT(TT.emulator, "Emulator should always be set here");
          const {
            url: mT
          } = TT.emulator;
          return UT ? `${mT}${UT.startsWith("/")?UT.slice(1):UT}` : mT
        }
        class IT {
          static initialize(TT, UT, mT) {
            this.fetchImpl = TT, UT && (this.headersImpl = UT), mT && (this.responseImpl = mT)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void xT("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void xT("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void xT("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const QT = {
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
          sT = new yT(3e4, 6e4);

        function FT(TT, UT) {
          return TT.tenantId && !UT.tenantId ? Object.assign(Object.assign({}, UT), {
            tenantId: TT.tenantId
          }) : UT
        }
        async function PT(TT, UT, mT, zT) {
          return VT(TT, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let MT = {},
              gT = {};
            zT && ("GET" === UT ? gT = zT : MT = {
              body: JSON.stringify(zT)
            });
            const nT = (0, WT.pb)(Object.assign({
                key: TT.config.apiKey
              }, gT)).slice(1),
              HT = await TT._getAdditionalHeaders();
            return HT["Content-Type"] = "application/json", TT.languageCode && (HT["X-Firebase-Locale"] = TT.languageCode), IT.fetch()(CT(TT, TT.config.apiHost, mT, nT), Object.assign({
              method: UT,
              headers: HT,
              referrerPolicy: "no-referrer"
            }, MT))
          }))
        }
        async function VT(TT, UT, mT) {
          TT._canInitEmulator = !1;
          const zT = Object.assign(Object.assign({}, QT), UT);
          try {
            const UT = new rT(TT),
              WT = await Promise.race([mT(), UT.promise]);
            UT.clearNetworkTimeout();
            const MT = await WT.json();
            if ("needConfirmation" in MT) throw KT(TT, "account-exists-with-different-credential", MT);
            if (WT.ok && !("errorMessage" in MT)) return MT;
            {
              const UT = WT.ok ? MT.errorMessage : MT.error.message,
                [mT, gT] = UT.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === mT) throw KT(TT, "credential-already-in-use", MT);
              if ("EMAIL_EXISTS" === mT) throw KT(TT, "email-already-in-use", MT);
              if ("USER_DISABLED" === mT) throw KT(TT, "user-disabled", MT);
              const nT = zT[mT] || mT.toLowerCase().replace(/[_\s]+/g, "-");
              if (gT) throw OT(TT, nT, gT);
              iT(TT, nT)
            }
          } catch (MT) {
            if (MT instanceof WT.i) throw MT;
            iT(TT, "network-request-failed", {
              message: String(MT)
            })
          }
        }
        async function uT(TT, UT, mT, WT) {
          let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const MT = await PT(TT, UT, mT, WT, zT);
          return "mfaPendingCredential" in MT && iT(TT, "multi-factor-auth-required", {
            _serverResponse: MT
          }), MT
        }

        function CT(TT, UT, mT, WT) {
          const zT = `${UT}${mT}?${WT}`;
          return TT.config.emulator ? XT(TT.config, zT) : `${TT.config.apiScheme}://${zT}`
        }
        class rT {
          constructor(TT) {
            this.auth = TT, this.timer = null, this.promise = new Promise(((TT, UT) => {
              this.timer = setTimeout((() => UT(bT(this.auth, "network-request-failed"))), sT.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function KT(TT, UT, mT) {
          const WT = {
            appName: TT.name
          };
          mT.email && (WT.email = mT.email), mT.phoneNumber && (WT.phoneNumber = mT.phoneNumber);
          const zT = bT(TT, UT, WT);
          return zT.customData._tokenResponse = mT, zT
        }

        function ST(TT) {
          if (TT) try {
            const UT = new Date(Number(TT));
            if (!isNaN(UT.getTime())) return UT.toUTCString()
          } catch (UT) {}
        }

        function GT(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, WT.P)(TT).getIdToken(UT)
        }
        async function NT(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const mT = (0, WT.P)(TT),
            zT = await mT.getIdToken(UT),
            MT = hT(zT);
          JT(MT && MT.exp && MT.auth_time && MT.iat, mT.auth, "internal-error");
          const gT = "object" === typeof MT.firebase ? MT.firebase : void 0,
            nT = null === gT || void 0 === gT ? void 0 : gT.sign_in_provider;
          return {
            claims: MT,
            token: zT,
            authTime: ST(ET(MT.auth_time)),
            issuedAtTime: ST(ET(MT.iat)),
            expirationTime: ST(ET(MT.exp)),
            signInProvider: nT || null,
            signInSecondFactor: (null === gT || void 0 === gT ? void 0 : gT.sign_in_second_factor) || null
          }
        }

        function ET(TT) {
          return 1e3 * Number(TT)
        }

        function hT(TT) {
          const [UT, mT, zT] = TT.split(".");
          if (void 0 === UT || void 0 === mT || void 0 === zT) return qT("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const TT = (0, WT.q)(mT);
            return TT ? JSON.parse(TT) : (qT("Failed to decode base64 JWT payload"), null)
          } catch (MT) {
            return qT("Caught error parsing JWT payload as JSON", null === MT || void 0 === MT ? void 0 : MT.toString()), null
          }
        }
        async function DT(TT, UT) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return UT;
          try {
            return await UT
          } catch (mT) {
            throw mT instanceof WT.i && function(TT) {
              let {
                code: UT
              } = TT;
              return "auth/user-disabled" === UT || "auth/user-token-expired" === UT
            }(mT) && TT.auth.currentUser === TT && await TT.auth.signOut(), mT
          }
        }
        class oT {
          constructor(TT) {
            this.user = TT, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(TT) {
            var UT;
            if (TT) {
              const TT = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), TT
            } {
              this.errorBackoff = 3e4;
              const TT = (null !== (UT = this.user.stsTokenManager.expirationTime) && void 0 !== UT ? UT : 0) - Date.now() - 3e5;
              return Math.max(0, TT)
            }
          }
          schedule() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const UT = this.getInterval(TT);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), UT)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (TT) {
              return void("auth/network-request-failed" === (null === TT || void 0 === TT ? void 0 : TT.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class AT {
          constructor(TT, UT) {
            this.createdAt = TT, this.lastLoginAt = UT, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = ST(this.lastLoginAt), this.creationTime = ST(this.createdAt)
          }
          _copy(TT) {
            this.createdAt = TT.createdAt, this.lastLoginAt = TT.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function RT(TT) {
          var UT;
          const mT = TT.auth,
            WT = await TT.getIdToken(),
            zT = await DT(TT, async function(TT, UT) {
              return PT(TT, "POST", "/v1/accounts:lookup", UT)
            }(mT, {
              idToken: WT
            }));
          JT(null === zT || void 0 === zT ? void 0 : zT.users.length, mT, "internal-error");
          const gT = zT.users[0];
          TT._notifyReloadListener(gT);
          const nT = (null === (UT = gT.providerUserInfo) || void 0 === UT ? void 0 : UT.length) ? gT.providerUserInfo.map((TT => {
            var {
              providerId: UT
            } = TT, mT = MT(TT, ["providerId"]);
            return {
              providerId: UT,
              uid: mT.rawId || "",
              displayName: mT.displayName || null,
              email: mT.email || null,
              phoneNumber: mT.phoneNumber || null,
              photoURL: mT.photoUrl || null
            }
          })) : [];
          const HT = (kT = TT.providerData, jT = nT, [...kT.filter((TT => !jT.some((UT => UT.providerId === TT.providerId)))), ...jT]);
          var kT, jT;
          const lT = TT.isAnonymous,
            LT = !(TT.email && gT.passwordHash) && !(null === HT || void 0 === HT ? void 0 : HT.length),
            pT = !!lT && LT,
            BT = {
              uid: gT.localId,
              displayName: gT.displayName || null,
              photoURL: gT.photoUrl || null,
              email: gT.email || null,
              emailVerified: gT.emailVerified || !1,
              phoneNumber: gT.phoneNumber || null,
              tenantId: gT.tenantId || null,
              providerData: HT,
              metadata: new AT(gT.createdAt, gT.lastLoginAt),
              isAnonymous: pT
            };
          Object.assign(TT, BT)
        }
        async function TU(TT) {
          const UT = (0, WT.P)(TT);
          await RT(UT), await UT.auth._persistUserIfCurrent(UT), UT.auth._notifyListenersIfCurrent(UT)
        }
        class UU {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(TT) {
            JT(TT.idToken, "internal-error"), JT("undefined" !== typeof TT.idToken, "internal-error"), JT("undefined" !== typeof TT.refreshToken, "internal-error");
            const UT = "expiresIn" in TT && "undefined" !== typeof TT.expiresIn ? Number(TT.expiresIn) : function(TT) {
              const UT = hT(TT);
              return JT(UT, "internal-error"), JT("undefined" !== typeof UT.exp, "internal-error"), JT("undefined" !== typeof UT.iat, "internal-error"), Number(UT.exp) - Number(UT.iat)
            }(TT.idToken);
            this.updateTokensAndExpiration(TT.idToken, TT.refreshToken, UT)
          }
          async getToken(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return JT(!this.accessToken || this.refreshToken, TT, "user-token-expired"), UT || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(TT, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(TT, UT) {
            const {
              accessToken: mT,
              refreshToken: zT,
              expiresIn: MT
            } = await async function(TT, UT) {
              const mT = await VT(TT, {}, (async () => {
                const mT = (0, WT.pb)({
                    grant_type: "refresh_token",
                    refresh_token: UT
                  }).slice(1),
                  {
                    tokenApiHost: zT,
                    apiKey: MT
                  } = TT.config,
                  gT = CT(TT, zT, "/v1/token", `key=${MT}`),
                  nT = await TT._getAdditionalHeaders();
                return nT["Content-Type"] = "application/x-www-form-urlencoded", IT.fetch()(gT, {
                  method: "POST",
                  headers: nT,
                  body: mT
                })
              }));
              return {
                accessToken: mT.access_token,
                expiresIn: mT.expires_in,
                refreshToken: mT.refresh_token
              }
            }(TT, UT);
            this.updateTokensAndExpiration(mT, zT, Number(MT))
          }
          updateTokensAndExpiration(TT, UT, mT) {
            this.refreshToken = UT || null, this.accessToken = TT || null, this.expirationTime = Date.now() + 1e3 * mT
          }
          static fromJSON(TT, UT) {
            const {
              refreshToken: mT,
              accessToken: WT,
              expirationTime: zT
            } = UT, MT = new UU;
            return mT && (JT("string" === typeof mT, "internal-error", {
              appName: TT
            }), MT.refreshToken = mT), WT && (JT("string" === typeof WT, "internal-error", {
              appName: TT
            }), MT.accessToken = WT), zT && (JT("number" === typeof zT, "internal-error", {
              appName: TT
            }), MT.expirationTime = zT), MT
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(TT) {
            this.accessToken = TT.accessToken, this.refreshToken = TT.refreshToken, this.expirationTime = TT.expirationTime
          }
          _clone() {
            return Object.assign(new UU, this.toJSON())
          }
          _performRefresh() {
            return xT("not implemented")
          }
        }

        function mU(TT, UT) {
          JT("string" === typeof TT || "undefined" === typeof TT, "internal-error", {
            appName: UT
          })
        }
        class WU {
          constructor(TT) {
            var {
              uid: UT,
              auth: mT,
              stsTokenManager: WT
            } = TT, zT = MT(TT, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new oT(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = UT, this.auth = mT, this.stsTokenManager = WT, this.accessToken = WT.accessToken, this.displayName = zT.displayName || null, this.email = zT.email || null, this.emailVerified = zT.emailVerified || !1, this.phoneNumber = zT.phoneNumber || null, this.photoURL = zT.photoURL || null, this.isAnonymous = zT.isAnonymous || !1, this.tenantId = zT.tenantId || null, this.providerData = zT.providerData ? [...zT.providerData] : [], this.metadata = new AT(zT.createdAt || void 0, zT.lastLoginAt || void 0)
          }
          async getIdToken(TT) {
            const UT = await DT(this, this.stsTokenManager.getToken(this.auth, TT));
            return JT(UT, this.auth, "internal-error"), this.accessToken !== UT && (this.accessToken = UT, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), UT
          }
          getIdTokenResult(TT) {
            return NT(this, TT)
          }
          reload() {
            return TU(this)
          }
          _assign(TT) {
            this !== TT && (JT(this.uid === TT.uid, this.auth, "internal-error"), this.displayName = TT.displayName, this.photoURL = TT.photoURL, this.email = TT.email, this.emailVerified = TT.emailVerified, this.phoneNumber = TT.phoneNumber, this.isAnonymous = TT.isAnonymous, this.tenantId = TT.tenantId, this.providerData = TT.providerData.map((TT => Object.assign({}, TT))), this.metadata._copy(TT.metadata), this.stsTokenManager._assign(TT.stsTokenManager))
          }
          _clone(TT) {
            const UT = new WU(Object.assign(Object.assign({}, this), {
              auth: TT,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return UT.metadata._copy(this.metadata), UT
          }
          _onReload(TT) {
            JT(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = TT, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(TT) {
            this.reloadListener ? this.reloadListener(TT) : this.reloadUserInfo = TT
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              mT = !1;
            TT.idToken && TT.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(TT), mT = !0), UT && await RT(this), await this.auth._persistUserIfCurrent(this), mT && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const TT = await this.getIdToken();
            return await DT(this, async function(TT, UT) {
              return PT(TT, "POST", "/v1/accounts:delete", UT)
            }(this.auth, {
              idToken: TT
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
              providerData: this.providerData.map((TT => Object.assign({}, TT))),
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
          static _fromJSON(TT, UT) {
            var mT, WT, zT, MT, gT, nT, HT, kT;
            const jT = null !== (mT = UT.displayName) && void 0 !== mT ? mT : void 0,
              lT = null !== (WT = UT.email) && void 0 !== WT ? WT : void 0,
              LT = null !== (zT = UT.phoneNumber) && void 0 !== zT ? zT : void 0,
              pT = null !== (MT = UT.photoURL) && void 0 !== MT ? MT : void 0,
              BT = null !== (gT = UT.tenantId) && void 0 !== gT ? gT : void 0,
              ZT = null !== (nT = UT._redirectEventId) && void 0 !== nT ? nT : void 0,
              cT = null !== (HT = UT.createdAt) && void 0 !== HT ? HT : void 0,
              vT = null !== (kT = UT.lastLoginAt) && void 0 !== kT ? kT : void 0,
              {
                uid: fT,
                emailVerified: qT,
                isAnonymous: iT,
                providerData: bT,
                stsTokenManager: OT
              } = UT;
            JT(fT && OT, TT, "internal-error");
            const eT = UU.fromJSON(this.name, OT);
            JT("string" === typeof fT, TT, "internal-error"), mU(jT, TT.name), mU(lT, TT.name), JT("boolean" === typeof qT, TT, "internal-error"), JT("boolean" === typeof iT, TT, "internal-error"), mU(LT, TT.name), mU(pT, TT.name), mU(BT, TT.name), mU(ZT, TT.name), mU(cT, TT.name), mU(vT, TT.name);
            const YT = new WU({
              uid: fT,
              auth: TT,
              email: lT,
              emailVerified: qT,
              displayName: jT,
              isAnonymous: iT,
              photoURL: pT,
              phoneNumber: LT,
              tenantId: BT,
              stsTokenManager: eT,
              createdAt: cT,
              lastLoginAt: vT
            });
            return bT && Array.isArray(bT) && (YT.providerData = bT.map((TT => Object.assign({}, TT)))), ZT && (YT._redirectEventId = ZT), YT
          }
          static async _fromIdTokenResponse(TT, UT) {
            let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const WT = new UU;
            WT.updateFromServerResponse(UT);
            const zT = new WU({
              uid: UT.localId,
              auth: TT,
              stsTokenManager: WT,
              isAnonymous: mT
            });
            return await RT(zT), zT
          }
        }
        const zU = new Map;

        function MU(TT) {
          dT(TT instanceof Function, "Expected a class definition");
          let UT = zU.get(TT);
          return UT ? (dT(UT instanceof TT, "Instance stored in cache mismatched with class"), UT) : (UT = new TT, zU.set(TT, UT), UT)
        }
        class gU {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(TT, UT) {
            this.storage[TT] = UT
          }
          async _get(TT) {
            const UT = this.storage[TT];
            return void 0 === UT ? null : UT
          }
          async _remove(TT) {
            delete this.storage[TT]
          }
          _addListener(TT, UT) {}
          _removeListener(TT, UT) {}
        }
        gU.type = "NONE";
        const nU = gU;

        function HU(TT, UT, mT) {
          return `firebase:${TT}:${UT}:${mT}`
        }
        class kU {
          constructor(TT, UT, mT) {
            this.persistence = TT, this.auth = UT, this.userKey = mT;
            const {
              config: WT,
              name: zT
            } = this.auth;
            this.fullUserKey = HU(this.userKey, WT.apiKey, zT), this.fullPersistenceKey = HU("persistence", WT.apiKey, zT), this.boundEventHandler = UT._onStorageEvent.bind(UT), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(TT) {
            return this.persistence._set(this.fullUserKey, TT.toJSON())
          }
          async getCurrentUser() {
            const TT = await this.persistence._get(this.fullUserKey);
            return TT ? WU._fromJSON(this.auth, TT) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(TT) {
            if (this.persistence === TT) return;
            const UT = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = TT, UT ? this.setCurrentUser(UT) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(TT, UT) {
            let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!UT.length) return new kU(MU(nU), TT, mT);
            const WT = (await Promise.all(UT.map((async TT => {
              if (await TT._isAvailable()) return TT
            })))).filter((TT => TT));
            let zT = WT[0] || MU(nU);
            const MT = HU(mT, TT.config.apiKey, TT.name);
            let gT = null;
            for (const kT of UT) try {
              const UT = await kT._get(MT);
              if (UT) {
                const mT = WU._fromJSON(TT, UT);
                kT !== zT && (gT = mT), zT = kT;
                break
              }
            } catch (HT) {}
            const nT = WT.filter((TT => TT._shouldAllowMigration));
            return zT._shouldAllowMigration && nT.length ? (zT = nT[0], gT && await zT._set(MT, gT.toJSON()), await Promise.all(UT.map((async TT => {
              if (TT !== zT) try {
                await TT._remove(MT)
              } catch (HT) {}
            }))), new kU(zT, TT, mT)) : new kU(zT, TT, mT)
          }
        }

        function jU(TT) {
          const UT = TT.toLowerCase();
          if (UT.includes("opera/") || UT.includes("opr/") || UT.includes("opios/")) return "Opera";
          if (BU(UT)) return "IEMobile";
          if (UT.includes("msie") || UT.includes("trident/")) return "IE";
          if (UT.includes("edge/")) return "Edge";
          if (lU(UT)) return "Firefox";
          if (UT.includes("silk/")) return "Silk";
          if (cU(UT)) return "Blackberry";
          if (vU(UT)) return "Webos";
          if (LU(UT)) return "Safari";
          if ((UT.includes("chrome/") || pU(UT)) && !UT.includes("edge/")) return "Chrome";
          if (ZU(UT)) return "Android";
          {
            const UT = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              mT = TT.match(UT);
            if (2 === (null === mT || void 0 === mT ? void 0 : mT.length)) return mT[1]
          }
          return "Other"
        }

        function lU() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, WT.R)();
          return /firefox\//i.test(TT)
        }

        function LU() {
          const TT = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, WT.R)()).toLowerCase();
          return TT.includes("safari/") && !TT.includes("chrome/") && !TT.includes("crios/") && !TT.includes("android")
        }

        function pU() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, WT.R)();
          return /crios\//i.test(TT)
        }

        function BU() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, WT.R)();
          return /iemobile/i.test(TT)
        }

        function ZU() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, WT.R)();
          return /android/i.test(TT)
        }

        function cU() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, WT.R)();
          return /blackberry/i.test(TT)
        }

        function vU() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, WT.R)();
          return /webos/i.test(TT)
        }

        function fU() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, WT.R)();
          return /iphone|ipad|ipod/i.test(TT) || /macintosh/i.test(TT) && /mobile/i.test(TT)
        }

        function qU() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, WT.R)();
          return fU(TT) || ZU(TT) || vU(TT) || cU(TT) || /windows phone/i.test(TT) || BU(TT)
        }

        function iU(TT) {
          let UT, mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (TT) {
            case "Browser":
              UT = jU((0, WT.R)());
              break;
            case "Worker":
              UT = `${jU((0,WT.R)())}-${TT}`;
              break;
            default:
              UT = TT
          }
          const MT = mT.length ? mT.join(",") : "FirebaseCore-web";
          return `${UT}/JsCore/${zT.f}/${MT}`
        }
        async function bU(TT, UT) {
          return PT(TT, "GET", "/v2/recaptchaConfig", FT(TT, UT))
        }

        function OU(TT) {
          return void 0 !== TT && void 0 !== TT.getResponse
        }

        function eU(TT) {
          return void 0 !== TT && void 0 !== TT.enterprise
        }
        class YU {
          constructor(TT) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === TT.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = TT.recaptchaKey.split("/")[3], this.emailPasswordEnabled = TT.recaptchaEnforcementState.some((TT => "EMAIL_PASSWORD_PROVIDER" === TT.provider && "OFF" !== TT.enforcementState))
          }
        }

        function JU(TT) {
          return new Promise(((UT, mT) => {
            const WT = document.createElement("script");
            WT.setAttribute("src", TT), WT.onload = UT, WT.onerror = TT => {
                const UT = bT("internal-error");
                UT.customData = TT, mT(UT)
              }, WT.type = "text/javascript", WT.charset = "UTF-8",
              function() {
                var TT, UT;
                return null !== (UT = null === (TT = document.getElementsByTagName("head")) || void 0 === TT ? void 0 : TT[0]) && void 0 !== UT ? UT : document
              }().appendChild(WT)
          }))
        }

        function xU(TT) {
          return `__${TT}${Math.floor(1e6*Math.random())}`
        }
        class dU {
          constructor(TT) {
            this.type = "recaptcha-enterprise", this.auth = yU(TT)
          }
          async verify() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function mT(UT, mT, WT) {
              const zT = window.grecaptcha;
              eU(zT) ? zT.enterprise.ready((() => {
                zT.enterprise.execute(UT, {
                  action: TT
                }).then((TT => {
                  mT(TT)
                })).catch((() => {
                  mT("NO_RECAPTCHA")
                }))
              })) : WT(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((TT, WT) => {
              (async function(TT) {
                if (!UT) {
                  if (null == TT.tenantId && null != TT._agentRecaptchaConfig) return TT._agentRecaptchaConfig.siteKey;
                  if (null != TT.tenantId && void 0 !== TT._tenantRecaptchaConfigs[TT.tenantId]) return TT._tenantRecaptchaConfigs[TT.tenantId].siteKey
                }
                return new Promise((async (UT, mT) => {
                  bU(TT, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((WT => {
                    if (void 0 !== WT.recaptchaKey) {
                      const mT = new YU(WT);
                      return null == TT.tenantId ? TT._agentRecaptchaConfig = mT : TT._tenantRecaptchaConfigs[TT.tenantId] = mT, UT(mT.siteKey)
                    }
                    mT(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((TT => {
                    mT(TT)
                  }))
                }))
              })(this.auth).then((zT => {
                if (!UT && eU(window.grecaptcha)) mT(zT, TT, WT);
                else {
                  if ("undefined" === typeof window) return void WT(new Error("RecaptchaVerifier is only supported in browser"));
                  JU("https://www.google.com/recaptcha/enterprise.js?render=" + zT).then((() => {
                    mT(zT, TT, WT)
                  })).catch((TT => {
                    WT(TT)
                  }))
                }
              })).catch((TT => {
                WT(TT)
              }))
            }))
          }
        }
        async function wU(TT, UT, mT) {
          let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const zT = new dU(TT);
          let MT;
          try {
            MT = await zT.verify(mT)
          } catch (nT) {
            MT = await zT.verify(mT, !0)
          }
          const gT = Object.assign({}, UT);
          return WT ? Object.assign(gT, {
            captchaResp: MT
          }) : Object.assign(gT, {
            captchaResponse: MT
          }), Object.assign(gT, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(gT, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), gT
        }
        class tU {
          constructor(TT) {
            this.auth = TT, this.queue = []
          }
          pushCallback(TT, UT) {
            const mT = UT => new Promise(((mT, WT) => {
              try {
                mT(TT(UT))
              } catch (zT) {
                WT(zT)
              }
            }));
            mT.onAbort = UT, this.queue.push(mT);
            const WT = this.queue.length - 1;
            return () => {
              this.queue[WT] = () => Promise.resolve()
            }
          }
          async runMiddleware(TT) {
            if (this.auth.currentUser === TT) return;
            const UT = [];
            try {
              for (const mT of this.queue) await mT(TT), mT.onAbort && UT.push(mT.onAbort)
            } catch (mT) {
              UT.reverse();
              for (const TT of UT) try {
                TT()
              } catch (WT) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === mT || void 0 === mT ? void 0 : mT.message
              })
            }
          }
        }
        class aU {
          constructor(TT, UT, mT, WT) {
            this.app = TT, this.heartbeatServiceProvider = UT, this.appCheckServiceProvider = mT, this.config = WT, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new XU(this), this.idTokenSubscription = new XU(this), this.beforeStateQueue = new tU(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = cT, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = TT.name, this.clientVersion = WT.sdkClientVersion
          }
          _initializeWithPersistence(TT, UT) {
            return UT && (this._popupRedirectResolver = MU(UT)), this._initializationPromise = this.queue((async () => {
              var mT, WT;
              if (!this._deleted && (this.persistenceManager = await kU.create(this, TT), !this._deleted)) {
                if (null === (mT = this._popupRedirectResolver) || void 0 === mT ? void 0 : mT._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (zT) {}
                await this.initializeCurrentUser(UT), this.lastNotifiedUid = (null === (WT = this.currentUser) || void 0 === WT ? void 0 : WT.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const TT = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || TT ? this.currentUser && TT && this.currentUser.uid === TT.uid ? (this._currentUser._assign(TT), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(TT, !0) : void 0
          }
          async initializeCurrentUser(TT) {
            var UT;
            const mT = await this.assertedPersistence.getCurrentUser();
            let WT = mT,
              zT = !1;
            if (TT && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const mT = null === (UT = this.redirectUser) || void 0 === UT ? void 0 : UT._redirectEventId,
                MT = null === WT || void 0 === WT ? void 0 : WT._redirectEventId,
                gT = await this.tryRedirectSignIn(TT);
              mT && mT !== MT || !(null === gT || void 0 === gT ? void 0 : gT.user) || (WT = gT.user, zT = !0)
            }
            if (!WT) return this.directlySetCurrentUser(null);
            if (!WT._redirectEventId) {
              if (zT) try {
                await this.beforeStateQueue.runMiddleware(WT)
              } catch (MT) {
                WT = mT, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(MT)))
              }
              return WT ? this.reloadAndSetCurrentUserOrClear(WT) : this.directlySetCurrentUser(null)
            }
            return JT(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === WT._redirectEventId ? this.directlySetCurrentUser(WT) : this.reloadAndSetCurrentUserOrClear(WT)
          }
          async tryRedirectSignIn(TT) {
            let UT = null;
            try {
              UT = await this._popupRedirectResolver._completeRedirectFn(this, TT, !0)
            } catch (mT) {
              await this._setRedirectUser(null)
            }
            return UT
          }
          async reloadAndSetCurrentUserOrClear(TT) {
            try {
              await RT(TT)
            } catch (UT) {
              if ("auth/network-request-failed" !== (null === UT || void 0 === UT ? void 0 : UT.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(TT)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const TT = navigator;
              return TT.languages && TT.languages[0] || TT.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(TT) {
            const UT = TT ? (0, WT.P)(TT) : null;
            return UT && JT(UT.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(UT && UT._clone(this))
          }
          async _updateCurrentUser(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return TT && JT(this.tenantId === TT.tenantId, this, "tenant-id-mismatch"), UT || await this.beforeStateQueue.runMiddleware(TT), this.queue((async () => {
              await this.directlySetCurrentUser(TT), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(TT) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(MU(TT))
            }))
          }
          async initializeRecaptchaConfig() {
            const TT = await bU(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              UT = new YU(TT);
            if (null == this.tenantId ? this._agentRecaptchaConfig = UT : this._tenantRecaptchaConfigs[this.tenantId] = UT, UT.emailPasswordEnabled) {
              new dU(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(TT) {
            this._errorFactory = new WT.g("auth", "Firebase", TT())
          }
          onAuthStateChanged(TT, UT, mT) {
            return this.registerStateListener(this.authStateSubscription, TT, UT, mT)
          }
          beforeAuthStateChanged(TT, UT) {
            return this.beforeStateQueue.pushCallback(TT, UT)
          }
          onIdTokenChanged(TT, UT, mT) {
            return this.registerStateListener(this.idTokenSubscription, TT, UT, mT)
          }
          toJSON() {
            var TT;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (TT = this._currentUser) || void 0 === TT ? void 0 : TT.toJSON()
            }
          }
          async _setRedirectUser(TT, UT) {
            const mT = await this.getOrInitRedirectPersistenceManager(UT);
            return null === TT ? mT.removeCurrentUser() : mT.setCurrentUser(TT)
          }
          async getOrInitRedirectPersistenceManager(TT) {
            if (!this.redirectPersistenceManager) {
              const UT = TT && MU(TT) || this._popupRedirectResolver;
              JT(UT, this, "argument-error"), this.redirectPersistenceManager = await kU.create(this, [MU(UT._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(TT) {
            var UT, mT;
            return this._isInitialized && await this.queue((async () => {})), (null === (UT = this._currentUser) || void 0 === UT ? void 0 : UT._redirectEventId) === TT ? this._currentUser : (null === (mT = this.redirectUser) || void 0 === mT ? void 0 : mT._redirectEventId) === TT ? this.redirectUser : null
          }
          async _persistUserIfCurrent(TT) {
            if (TT === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(TT)))
          }
          _notifyListenersIfCurrent(TT) {
            TT === this.currentUser && this.notifyAuthListeners()
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
            var TT, UT;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const mT = null !== (UT = null === (TT = this.currentUser) || void 0 === TT ? void 0 : TT.uid) && void 0 !== UT ? UT : null;
            this.lastNotifiedUid !== mT && (this.lastNotifiedUid = mT, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(TT, UT, mT, WT) {
            if (this._deleted) return () => {};
            const zT = "function" === typeof UT ? UT : UT.next.bind(UT),
              MT = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return JT(MT, this, "internal-error"), MT.then((() => zT(this.currentUser))), "function" === typeof UT ? TT.addObserver(UT, mT, WT) : TT.addObserver(UT)
          }
          async directlySetCurrentUser(TT) {
            this.currentUser && this.currentUser !== TT && this._currentUser._stopProactiveRefresh(), TT && this.isProactiveRefreshEnabled && TT._startProactiveRefresh(), this.currentUser = TT, TT ? await this.assertedPersistence.setCurrentUser(TT) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(TT) {
            return this.operations = this.operations.then(TT, TT), this.operations
          }
          get assertedPersistence() {
            return JT(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(TT) {
            TT && !this.frameworks.includes(TT) && (this.frameworks.push(TT), this.frameworks.sort(), this.clientVersion = iU(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var TT;
            const UT = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (UT["X-Firebase-gmpid"] = this.app.options.appId);
            const mT = await (null === (TT = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === TT ? void 0 : TT.getHeartbeatsHeader());
            mT && (UT["X-Firebase-Client"] = mT);
            const WT = await this._getAppCheckToken();
            return WT && (UT["X-Firebase-AppCheck"] = WT), UT
          }
          async _getAppCheckToken() {
            var TT;
            const UT = await (null === (TT = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === TT ? void 0 : TT.getToken());
            return (null === UT || void 0 === UT ? void 0 : UT.error) && function(TT) {
              if (fT.logLevel <= gT.d.WARN) {
                for (var UT = arguments.length, mT = new Array(UT > 1 ? UT - 1 : 0), WT = 1; WT < UT; WT++) mT[WT - 1] = arguments[WT];
                fT.warn(`Auth (${zT.f}): ${TT}`, ...mT)
              }
            }(`Error while retrieving App Check token: ${UT.error}`), null === UT || void 0 === UT ? void 0 : UT.token
          }
        }

        function yU(TT) {
          return (0, WT.P)(TT)
        }
        class XU {
          constructor(TT) {
            this.auth = TT, this.observer = null, this.addObserver = (0, WT.y)((TT => this.observer = TT))
          }
          get next() {
            return JT(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function IU(TT, UT) {
          const mT = (0, zT.B)(TT, "auth");
          if (mT.isInitialized()) {
            const TT = mT.getImmediate(),
              zT = mT.getOptions();
            if ((0, WT.B)(zT, null !== UT && void 0 !== UT ? UT : {})) return TT;
            iT(TT, "already-initialized")
          }
          return mT.initialize({
            options: UT
          })
        }

        function QU(TT, UT, mT) {
          const WT = yU(TT);
          JT(WT._canInitEmulator, WT, "emulator-config-failed"), JT(/^https?:\/\//.test(UT), WT, "invalid-emulator-scheme");
          const zT = !!(null === mT || void 0 === mT ? void 0 : mT.disableWarnings),
            MT = sU(UT),
            {
              host: gT,
              port: nT
            } = function(TT) {
              const UT = sU(TT),
                mT = /(\/\/)?([^?#/]+)/.exec(TT.substr(UT.length));
              if (!mT) return {
                host: "",
                port: null
              };
              const WT = mT[2].split("@").pop() || "",
                zT = /^(\[[^\]]+\])(:|$)/.exec(WT);
              if (zT) {
                const TT = zT[1];
                return {
                  host: TT,
                  port: FU(WT.substr(TT.length + 1))
                }
              } {
                const [TT, UT] = WT.split(":");
                return {
                  host: TT,
                  port: FU(UT)
                }
              }
            }(UT),
            HT = null === nT ? "" : `:${nT}`;
          WT.config.emulator = {
            url: `${MT}//${gT}${HT}/`
          }, WT.settings.appVerificationDisabledForTesting = !0, WT.emulatorConfig = Object.freeze({
            host: gT,
            port: nT,
            protocol: MT.replace(":", ""),
            options: Object.freeze({
              disableWarnings: zT
            })
          }), zT || function() {
            function TT() {
              const TT = document.createElement("p"),
                UT = TT.style;
              TT.innerText = "Running in emulator mode. Do not use with production credentials.", UT.position = "fixed", UT.width = "100%", UT.backgroundColor = "#ffffff", UT.border = ".1em solid #000000", UT.color = "#b50000", UT.bottom = "0px", UT.left = "0px", UT.margin = "0px", UT.zIndex = "10000", UT.textAlign = "center", TT.classList.add("firebase-emulator-warning"), document.body.appendChild(TT)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", TT) : TT())
          }()
        }

        function sU(TT) {
          const UT = TT.indexOf(":");
          return UT < 0 ? "" : TT.substr(0, UT + 1)
        }

        function FU(TT) {
          if (!TT) return null;
          const UT = Number(TT);
          return isNaN(UT) ? null : UT
        }
        class PU {
          constructor(TT, UT) {
            this.providerId = TT, this.signInMethod = UT
          }
          toJSON() {
            return xT("not implemented")
          }
          _getIdTokenResponse(TT) {
            return xT("not implemented")
          }
          _linkToIdToken(TT, UT) {
            return xT("not implemented")
          }
          _getReauthenticationResolver(TT) {
            return xT("not implemented")
          }
        }
        async function VU(TT, UT) {
          return PT(TT, "POST", "/v1/accounts:resetPassword", FT(TT, UT))
        }
        async function uU(TT, UT) {
          return PT(TT, "POST", "/v1/accounts:update", UT)
        }
        async function CU(TT, UT) {
          return uT(TT, "POST", "/v1/accounts:signInWithPassword", FT(TT, UT))
        }
        async function rU(TT, UT) {
          return PT(TT, "POST", "/v1/accounts:sendOobCode", FT(TT, UT))
        }
        async function KU(TT, UT) {
          return rU(TT, UT)
        }
        async function SU(TT, UT) {
          return rU(TT, UT)
        }
        class GU extends PU {
          constructor(TT, UT, mT) {
            let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", mT), this._email = TT, this._password = UT, this._tenantId = WT
          }
          static _fromEmailAndPassword(TT, UT) {
            return new GU(TT, UT, "password")
          }
          static _fromEmailAndCode(TT, UT) {
            return new GU(TT, UT, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(TT) {
            const UT = "string" === typeof TT ? JSON.parse(TT) : TT;
            if ((null === UT || void 0 === UT ? void 0 : UT.email) && (null === UT || void 0 === UT ? void 0 : UT.password)) {
              if ("password" === UT.signInMethod) return this._fromEmailAndPassword(UT.email, UT.password);
              if ("emailLink" === UT.signInMethod) return this._fromEmailAndCode(UT.email, UT.password, UT.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(TT) {
            var UT;
            switch (this.signInMethod) {
              case "password":
                const mT = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (UT = TT._getRecaptchaConfig()) || void 0 === UT ? void 0 : UT.emailPasswordEnabled) {
                  const UT = await wU(TT, mT, "signInWithPassword");
                  return CU(TT, UT)
                }
                return CU(TT, mT).catch((async UT => {
                  if ("auth/missing-recaptcha-token" === UT.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const UT = await wU(TT, mT, "signInWithPassword");
                    return CU(TT, UT)
                  }
                  return Promise.reject(UT)
                }));
              case "emailLink":
                return async function(TT, UT) {
                  return uT(TT, "POST", "/v1/accounts:signInWithEmailLink", FT(TT, UT))
                }(TT, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                iT(TT, "internal-error")
            }
          }
          async _linkToIdToken(TT, UT) {
            switch (this.signInMethod) {
              case "password":
                return uU(TT, {
                  idToken: UT,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(TT, UT) {
                  return uT(TT, "POST", "/v1/accounts:signInWithEmailLink", FT(TT, UT))
                }(TT, {
                  idToken: UT,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                iT(TT, "internal-error")
            }
          }
          _getReauthenticationResolver(TT) {
            return this._getIdTokenResponse(TT)
          }
        }
        async function NU(TT, UT) {
          return uT(TT, "POST", "/v1/accounts:signInWithIdp", FT(TT, UT))
        }
        class EU extends PU {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(TT) {
            const UT = new EU(TT.providerId, TT.signInMethod);
            return TT.idToken || TT.accessToken ? (TT.idToken && (UT.idToken = TT.idToken), TT.accessToken && (UT.accessToken = TT.accessToken), TT.nonce && !TT.pendingToken && (UT.nonce = TT.nonce), TT.pendingToken && (UT.pendingToken = TT.pendingToken)) : TT.oauthToken && TT.oauthTokenSecret ? (UT.accessToken = TT.oauthToken, UT.secret = TT.oauthTokenSecret) : iT("argument-error"), UT
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
          static fromJSON(TT) {
            const UT = "string" === typeof TT ? JSON.parse(TT) : TT,
              {
                providerId: mT,
                signInMethod: WT
              } = UT,
              zT = MT(UT, ["providerId", "signInMethod"]);
            if (!mT || !WT) return null;
            const gT = new EU(mT, WT);
            return gT.idToken = zT.idToken || void 0, gT.accessToken = zT.accessToken || void 0, gT.secret = zT.secret, gT.nonce = zT.nonce, gT.pendingToken = zT.pendingToken || null, gT
          }
          _getIdTokenResponse(TT) {
            return NU(TT, this.buildRequest())
          }
          _linkToIdToken(TT, UT) {
            const mT = this.buildRequest();
            return mT.idToken = UT, NU(TT, mT)
          }
          _getReauthenticationResolver(TT) {
            const UT = this.buildRequest();
            return UT.autoCreate = !1, NU(TT, UT)
          }
          buildRequest() {
            const TT = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) TT.pendingToken = this.pendingToken;
            else {
              const UT = {};
              this.idToken && (UT.id_token = this.idToken), this.accessToken && (UT.access_token = this.accessToken), this.secret && (UT.oauth_token_secret = this.secret), UT.providerId = this.providerId, this.nonce && !this.pendingToken && (UT.nonce = this.nonce), TT.postBody = (0, WT.pb)(UT)
            }
            return TT
          }
        }
        const hU = {
          USER_NOT_FOUND: "user-not-found"
        };
        class DU extends PU {
          constructor(TT) {
            super("phone", "phone"), this.params = TT
          }
          static _fromVerification(TT, UT) {
            return new DU({
              verificationId: TT,
              verificationCode: UT
            })
          }
          static _fromTokenResponse(TT, UT) {
            return new DU({
              phoneNumber: TT,
              temporaryProof: UT
            })
          }
          _getIdTokenResponse(TT) {
            return async function(TT, UT) {
              return uT(TT, "POST", "/v1/accounts:signInWithPhoneNumber", FT(TT, UT))
            }(TT, this._makeVerificationRequest())
          }
          _linkToIdToken(TT, UT) {
            return async function(TT, UT) {
              const mT = await uT(TT, "POST", "/v1/accounts:signInWithPhoneNumber", FT(TT, UT));
              if (mT.temporaryProof) throw KT(TT, "account-exists-with-different-credential", mT);
              return mT
            }(TT, Object.assign({
              idToken: UT
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(TT) {
            return async function(TT, UT) {
              return uT(TT, "POST", "/v1/accounts:signInWithPhoneNumber", FT(TT, Object.assign(Object.assign({}, UT), {
                operation: "REAUTH"
              })), hU)
            }(TT, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: TT,
              phoneNumber: UT,
              verificationId: mT,
              verificationCode: WT
            } = this.params;
            return TT && UT ? {
              temporaryProof: TT,
              phoneNumber: UT
            } : {
              sessionInfo: mT,
              code: WT
            }
          }
          toJSON() {
            const TT = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (TT.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (TT.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (TT.verificationCode = this.params.verificationCode), this.params.verificationId && (TT.verificationId = this.params.verificationId), TT
          }
          static fromJSON(TT) {
            "string" === typeof TT && (TT = JSON.parse(TT));
            const {
              verificationId: UT,
              verificationCode: mT,
              phoneNumber: WT,
              temporaryProof: zT
            } = TT;
            return mT || UT || WT || zT ? new DU({
              verificationId: UT,
              verificationCode: mT,
              phoneNumber: WT,
              temporaryProof: zT
            }) : null
          }
        }
        class oU {
          constructor(TT) {
            var UT, mT, zT, MT, gT, nT;
            const HT = (0, WT.lb)((0, WT.E)(TT)),
              kT = null !== (UT = HT.apiKey) && void 0 !== UT ? UT : null,
              jT = null !== (mT = HT.oobCode) && void 0 !== mT ? mT : null,
              lT = function(TT) {
                switch (TT) {
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
              }(null !== (zT = HT.mode) && void 0 !== zT ? zT : null);
            JT(kT && jT && lT, "argument-error"), this.apiKey = kT, this.operation = lT, this.code = jT, this.continueUrl = null !== (MT = HT.continueUrl) && void 0 !== MT ? MT : null, this.languageCode = null !== (gT = HT.languageCode) && void 0 !== gT ? gT : null, this.tenantId = null !== (nT = HT.tenantId) && void 0 !== nT ? nT : null
          }
          static parseLink(TT) {
            const UT = function(TT) {
              const UT = (0, WT.lb)((0, WT.E)(TT)).link,
                mT = UT ? (0, WT.lb)((0, WT.E)(UT)).deep_link_id : null,
                zT = (0, WT.lb)((0, WT.E)(TT)).deep_link_id;
              return (zT ? (0, WT.lb)((0, WT.E)(zT)).link : null) || zT || mT || UT || TT
            }(TT);
            try {
              return new oU(UT)
            } catch (mT) {
              return null
            }
          }
        }

        function AU(TT) {
          return oU.parseLink(TT)
        }
        class RU {
          constructor() {
            this.providerId = RU.PROVIDER_ID
          }
          static credential(TT, UT) {
            return GU._fromEmailAndPassword(TT, UT)
          }
          static credentialWithLink(TT, UT) {
            const mT = oU.parseLink(UT);
            return JT(mT, "argument-error"), GU._fromEmailAndCode(TT, mT.code, mT.tenantId)
          }
        }
        RU.PROVIDER_ID = "password", RU.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", RU.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class Tm {
          constructor(TT) {
            this.providerId = TT, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(TT) {
            this.defaultLanguageCode = TT
          }
          setCustomParameters(TT) {
            return this.customParameters = TT, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class Um extends Tm {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(TT) {
            return this.scopes.includes(TT) || this.scopes.push(TT), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class mm extends Um {
          static credentialFromJSON(TT) {
            const UT = "string" === typeof TT ? JSON.parse(TT) : TT;
            return JT("providerId" in UT && "signInMethod" in UT, "argument-error"), EU._fromParams(UT)
          }
          credential(TT) {
            return this._credential(Object.assign(Object.assign({}, TT), {
              nonce: TT.rawNonce
            }))
          }
          _credential(TT) {
            return JT(TT.idToken || TT.accessToken, "argument-error"), EU._fromParams(Object.assign(Object.assign({}, TT), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(TT) {
            return mm.oauthCredentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return mm.oauthCredentialFromTaggedObject(TT.customData || {})
          }
          static oauthCredentialFromTaggedObject(TT) {
            let {
              _tokenResponse: UT
            } = TT;
            if (!UT) return null;
            const {
              oauthIdToken: mT,
              oauthAccessToken: WT,
              oauthTokenSecret: zT,
              pendingToken: MT,
              nonce: gT,
              providerId: nT
            } = UT;
            if (!WT && !zT && !mT && !MT) return null;
            if (!nT) return null;
            try {
              return new mm(nT)._credential({
                idToken: mT,
                accessToken: WT,
                nonce: gT,
                pendingToken: MT
              })
            } catch (HT) {
              return null
            }
          }
        }
        class Wm extends Um {
          constructor() {
            super("facebook.com")
          }
          static credential(TT) {
            return EU._fromParams({
              providerId: Wm.PROVIDER_ID,
              signInMethod: Wm.FACEBOOK_SIGN_IN_METHOD,
              accessToken: TT
            })
          }
          static credentialFromResult(TT) {
            return Wm.credentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return Wm.credentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromTaggedObject(TT) {
            let {
              _tokenResponse: UT
            } = TT;
            if (!UT || !("oauthAccessToken" in UT)) return null;
            if (!UT.oauthAccessToken) return null;
            try {
              return Wm.credential(UT.oauthAccessToken)
            } catch (mT) {
              return null
            }
          }
        }
        Wm.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Wm.PROVIDER_ID = "facebook.com";
        class zm extends Um {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(TT, UT) {
            return EU._fromParams({
              providerId: zm.PROVIDER_ID,
              signInMethod: zm.GOOGLE_SIGN_IN_METHOD,
              idToken: TT,
              accessToken: UT
            })
          }
          static credentialFromResult(TT) {
            return zm.credentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return zm.credentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromTaggedObject(TT) {
            let {
              _tokenResponse: UT
            } = TT;
            if (!UT) return null;
            const {
              oauthIdToken: mT,
              oauthAccessToken: WT
            } = UT;
            if (!mT && !WT) return null;
            try {
              return zm.credential(mT, WT)
            } catch (zT) {
              return null
            }
          }
        }
        zm.GOOGLE_SIGN_IN_METHOD = "google.com", zm.PROVIDER_ID = "google.com";
        class Mm extends Um {
          constructor() {
            super("github.com")
          }
          static credential(TT) {
            return EU._fromParams({
              providerId: Mm.PROVIDER_ID,
              signInMethod: Mm.GITHUB_SIGN_IN_METHOD,
              accessToken: TT
            })
          }
          static credentialFromResult(TT) {
            return Mm.credentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return Mm.credentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromTaggedObject(TT) {
            let {
              _tokenResponse: UT
            } = TT;
            if (!UT || !("oauthAccessToken" in UT)) return null;
            if (!UT.oauthAccessToken) return null;
            try {
              return Mm.credential(UT.oauthAccessToken)
            } catch (mT) {
              return null
            }
          }
        }
        Mm.GITHUB_SIGN_IN_METHOD = "github.com", Mm.PROVIDER_ID = "github.com";
        class gm extends PU {
          constructor(TT, UT) {
            super(TT, TT), this.pendingToken = UT
          }
          _getIdTokenResponse(TT) {
            return NU(TT, this.buildRequest())
          }
          _linkToIdToken(TT, UT) {
            const mT = this.buildRequest();
            return mT.idToken = UT, NU(TT, mT)
          }
          _getReauthenticationResolver(TT) {
            const UT = this.buildRequest();
            return UT.autoCreate = !1, NU(TT, UT)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(TT) {
            const UT = "string" === typeof TT ? JSON.parse(TT) : TT,
              {
                providerId: mT,
                signInMethod: WT,
                pendingToken: zT
              } = UT;
            return mT && WT && zT && mT === WT ? new gm(mT, zT) : null
          }
          static _create(TT, UT) {
            return new gm(TT, UT)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class nm extends Tm {
          constructor(TT) {
            JT(TT.startsWith("saml."), "argument-error"), super(TT)
          }
          static credentialFromResult(TT) {
            return nm.samlCredentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return nm.samlCredentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromJSON(TT) {
            const UT = gm.fromJSON(TT);
            return JT(UT, "argument-error"), UT
          }
          static samlCredentialFromTaggedObject(TT) {
            let {
              _tokenResponse: UT
            } = TT;
            if (!UT) return null;
            const {
              pendingToken: mT,
              providerId: WT
            } = UT;
            if (!mT || !WT) return null;
            try {
              return gm._create(WT, mT)
            } catch (zT) {
              return null
            }
          }
        }
        class Hm extends Um {
          constructor() {
            super("twitter.com")
          }
          static credential(TT, UT) {
            return EU._fromParams({
              providerId: Hm.PROVIDER_ID,
              signInMethod: Hm.TWITTER_SIGN_IN_METHOD,
              oauthToken: TT,
              oauthTokenSecret: UT
            })
          }
          static credentialFromResult(TT) {
            return Hm.credentialFromTaggedObject(TT)
          }
          static credentialFromError(TT) {
            return Hm.credentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromTaggedObject(TT) {
            let {
              _tokenResponse: UT
            } = TT;
            if (!UT) return null;
            const {
              oauthAccessToken: mT,
              oauthTokenSecret: WT
            } = UT;
            if (!mT || !WT) return null;
            try {
              return Hm.credential(mT, WT)
            } catch (zT) {
              return null
            }
          }
        }
        async function km(TT, UT) {
          return uT(TT, "POST", "/v1/accounts:signUp", FT(TT, UT))
        }
        Hm.TWITTER_SIGN_IN_METHOD = "twitter.com", Hm.PROVIDER_ID = "twitter.com";
        class jm {
          constructor(TT) {
            this.user = TT.user, this.providerId = TT.providerId, this._tokenResponse = TT._tokenResponse, this.operationType = TT.operationType
          }
          static async _fromIdTokenResponse(TT, UT, mT) {
            let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const zT = await WU._fromIdTokenResponse(TT, mT, WT),
              MT = lm(mT);
            return new jm({
              user: zT,
              providerId: MT,
              _tokenResponse: mT,
              operationType: UT
            })
          }
          static async _forOperation(TT, UT, mT) {
            await TT._updateTokensIfNecessary(mT, !0);
            const WT = lm(mT);
            return new jm({
              user: TT,
              providerId: WT,
              _tokenResponse: mT,
              operationType: UT
            })
          }
        }

        function lm(TT) {
          return TT.providerId ? TT.providerId : "phoneNumber" in TT ? "phone" : null
        }
        async function Lm(TT) {
          var UT;
          const mT = yU(TT);
          if (await mT._initializationPromise, null === (UT = mT.currentUser) || void 0 === UT ? void 0 : UT.isAnonymous) return new jm({
            user: mT.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const WT = await km(mT, {
              returnSecureToken: !0
            }),
            zT = await jm._fromIdTokenResponse(mT, "signIn", WT, !0);
          return await mT._updateCurrentUser(zT.user), zT
        }
        class pm extends WT.i {
          constructor(TT, UT, mT, WT) {
            var zT;
            super(UT.code, UT.message), this.operationType = mT, this.user = WT, Object.setPrototypeOf(this, pm.prototype), this.customData = {
              appName: TT.name,
              tenantId: null !== (zT = TT.tenantId) && void 0 !== zT ? zT : void 0,
              _serverResponse: UT.customData._serverResponse,
              operationType: mT
            }
          }
          static _fromErrorAndOperation(TT, UT, mT, WT) {
            return new pm(TT, UT, mT, WT)
          }
        }

        function Bm(TT, UT, mT, WT) {
          return ("reauthenticate" === UT ? mT._getReauthenticationResolver(TT) : mT._getIdTokenResponse(TT)).catch((mT => {
            if ("auth/multi-factor-auth-required" === mT.code) throw pm._fromErrorAndOperation(TT, mT, UT, WT);
            throw mT
          }))
        }

        function Zm(TT) {
          return new Set(TT.map((TT => {
            let {
              providerId: UT
            } = TT;
            return UT
          })).filter((TT => !!TT)))
        }
        async function cm(TT, UT) {
          const mT = (0, WT.P)(TT);
          await qm(!0, mT, UT);
          const {
            providerUserInfo: zT
          } = await async function(TT, UT) {
            return PT(TT, "POST", "/v1/accounts:update", UT)
          }(mT.auth, {
            idToken: await mT.getIdToken(),
            deleteProvider: [UT]
          }), MT = Zm(zT || []);
          return mT.providerData = mT.providerData.filter((TT => MT.has(TT.providerId))), MT.has("phone") || (mT.phoneNumber = null), await mT.auth._persistUserIfCurrent(mT), mT
        }
        async function fm(TT, UT) {
          let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const WT = await DT(TT, UT._linkToIdToken(TT.auth, await TT.getIdToken()), mT);
          return jm._forOperation(TT, "link", WT)
        }
        async function qm(TT, UT, mT) {
          await RT(UT);
          const WT = !1 === TT ? "provider-already-linked" : "no-such-provider";
          JT(Zm(UT.providerData).has(mT) === TT, UT.auth, WT)
        }
        async function im(TT, UT) {
          let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: WT
          } = TT, zT = "reauthenticate";
          try {
            const MT = await DT(TT, Bm(WT, zT, UT, TT), mT);
            JT(MT.idToken, WT, "internal-error");
            const gT = hT(MT.idToken);
            JT(gT, WT, "internal-error");
            const {
              sub: nT
            } = gT;
            return JT(TT.uid === nT, WT, "user-mismatch"), jm._forOperation(TT, zT, MT)
          } catch (MT) {
            throw "auth/user-not-found" === (null === MT || void 0 === MT ? void 0 : MT.code) && iT(WT, "user-mismatch"), MT
          }
        }
        async function bm(TT, UT) {
          let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const WT = "signIn",
            zT = await Bm(TT, WT, UT),
            MT = await jm._fromIdTokenResponse(TT, WT, zT);
          return mT || await TT._updateCurrentUser(MT.user), MT
        }
        async function Om(TT, UT) {
          return bm(yU(TT), UT)
        }
        async function em(TT, UT) {
          const mT = (0, WT.P)(TT);
          return await qm(!1, mT, UT.providerId), fm(mT, UT)
        }
        async function Ym(TT, UT) {
          return im((0, WT.P)(TT), UT)
        }
        async function Jm(TT, UT) {
          const mT = yU(TT),
            WT = await async function(TT, UT) {
              return uT(TT, "POST", "/v1/accounts:signInWithCustomToken", FT(TT, UT))
            }(mT, {
              token: UT,
              returnSecureToken: !0
            }), zT = await jm._fromIdTokenResponse(mT, "signIn", WT);
          return await mT._updateCurrentUser(zT.user), zT
        }
        class xm {
          constructor(TT, UT) {
            this.factorId = TT, this.uid = UT.mfaEnrollmentId, this.enrollmentTime = new Date(UT.enrolledAt).toUTCString(), this.displayName = UT.displayName
          }
          static _fromServerResponse(TT, UT) {
            return "phoneInfo" in UT ? dm._fromServerResponse(TT, UT) : "totpInfo" in UT ? wm._fromServerResponse(TT, UT) : iT(TT, "internal-error")
          }
        }
        class dm extends xm {
          constructor(TT) {
            super("phone", TT), this.phoneNumber = TT.phoneInfo
          }
          static _fromServerResponse(TT, UT) {
            return new dm(UT)
          }
        }
        class wm extends xm {
          constructor(TT) {
            super("totp", TT)
          }
          static _fromServerResponse(TT, UT) {
            return new wm(UT)
          }
        }

        function tm(TT, UT, mT) {
          var WT;
          JT((null === (WT = mT.url) || void 0 === WT ? void 0 : WT.length) > 0, TT, "invalid-continue-uri"), JT("undefined" === typeof mT.dynamicLinkDomain || mT.dynamicLinkDomain.length > 0, TT, "invalid-dynamic-link-domain"), UT.continueUrl = mT.url, UT.dynamicLinkDomain = mT.dynamicLinkDomain, UT.canHandleCodeInApp = mT.handleCodeInApp, mT.iOS && (JT(mT.iOS.bundleId.length > 0, TT, "missing-ios-bundle-id"), UT.iOSBundleId = mT.iOS.bundleId), mT.android && (JT(mT.android.packageName.length > 0, TT, "missing-android-pkg-name"), UT.androidInstallApp = mT.android.installApp, UT.androidMinimumVersionCode = mT.android.minimumVersion, UT.androidPackageName = mT.android.packageName)
        }
        async function am(TT, UT, mT) {
          var WT;
          const zT = yU(TT),
            MT = {
              requestType: "PASSWORD_RESET",
              email: UT,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (WT = zT._getRecaptchaConfig()) || void 0 === WT ? void 0 : WT.emailPasswordEnabled) {
            const TT = await wU(zT, MT, "getOobCode", !0);
            mT && tm(zT, TT, mT), await KU(zT, TT)
          } else mT && tm(zT, MT, mT), await KU(zT, MT).catch((async TT => {
            if ("auth/missing-recaptcha-token" !== TT.code) return Promise.reject(TT);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const TT = await wU(zT, MT, "getOobCode", !0);
              mT && tm(zT, TT, mT), await KU(zT, TT)
            }
          }))
        }
        async function ym(TT, UT, mT) {
          await VU((0, WT.P)(TT), {
            oobCode: UT,
            newPassword: mT
          })
        }
        async function Xm(TT, UT) {
          await async function(TT, UT) {
            return PT(TT, "POST", "/v1/accounts:update", FT(TT, UT))
          }((0, WT.P)(TT), {
            oobCode: UT
          })
        }
        async function Im(TT, UT) {
          const mT = (0, WT.P)(TT),
            zT = await VU(mT, {
              oobCode: UT
            }),
            MT = zT.requestType;
          switch (JT(MT, mT, "internal-error"), MT) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              JT(zT.newEmail, mT, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              JT(zT.mfaInfo, mT, "internal-error");
            default:
              JT(zT.email, mT, "internal-error")
          }
          let gT = null;
          return zT.mfaInfo && (gT = xm._fromServerResponse(yU(mT), zT.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === zT.requestType ? zT.newEmail : zT.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === zT.requestType ? zT.email : zT.newEmail) || null,
              multiFactorInfo: gT
            },
            operation: MT
          }
        }
        async function Qm(TT, UT) {
          const {
            data: mT
          } = await Im((0, WT.P)(TT), UT);
          return mT.email
        }
        async function sm(TT, UT, mT) {
          var WT;
          const zT = yU(TT),
            MT = {
              returnSecureToken: !0,
              email: UT,
              password: mT,
              clientType: "CLIENT_TYPE_WEB"
            };
          let gT;
          if (null === (WT = zT._getRecaptchaConfig()) || void 0 === WT ? void 0 : WT.emailPasswordEnabled) {
            const TT = await wU(zT, MT, "signUpPassword");
            gT = km(zT, TT)
          } else gT = km(zT, MT).catch((async TT => {
            if ("auth/missing-recaptcha-token" === TT.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const TT = await wU(zT, MT, "signUpPassword");
              return km(zT, TT)
            }
            return Promise.reject(TT)
          }));
          const nT = await gT.catch((TT => Promise.reject(TT))),
            HT = await jm._fromIdTokenResponse(zT, "signIn", nT);
          return await zT._updateCurrentUser(HT.user), HT
        }

        function Fm(TT, UT, mT) {
          return Om((0, WT.P)(TT), RU.credential(UT, mT))
        }
        async function Pm(TT, UT, mT) {
          var WT;
          const zT = yU(TT),
            MT = {
              requestType: "EMAIL_SIGNIN",
              email: UT,
              clientType: "CLIENT_TYPE_WEB"
            };

          function gT(TT, UT) {
            JT(UT.handleCodeInApp, zT, "argument-error"), UT && tm(zT, TT, UT)
          }
          if (null === (WT = zT._getRecaptchaConfig()) || void 0 === WT ? void 0 : WT.emailPasswordEnabled) {
            const TT = await wU(zT, MT, "getOobCode", !0);
            gT(TT, mT), await SU(zT, TT)
          } else gT(MT, mT), await SU(zT, MT).catch((async TT => {
            if ("auth/missing-recaptcha-token" !== TT.code) return Promise.reject(TT);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const TT = await wU(zT, MT, "getOobCode", !0);
              gT(TT, mT), await SU(zT, TT)
            }
          }))
        }

        function Vm(TT, UT) {
          const mT = oU.parseLink(UT);
          return "EMAIL_SIGNIN" === (null === mT || void 0 === mT ? void 0 : mT.operation)
        }
        async function um(TT, UT, mT) {
          const zT = (0, WT.P)(TT),
            MT = RU.credentialWithLink(UT, mT || wT());
          return JT(MT._tenantId === (zT.tenantId || null), zT, "tenant-id-mismatch"), Om(zT, MT)
        }
        async function Cm(TT, UT) {
          const mT = {
              identifier: UT,
              continueUri: tT() ? wT() : "http://localhost"
            },
            {
              signinMethods: zT
            } = await async function(TT, UT) {
              return PT(TT, "POST", "/v1/accounts:createAuthUri", FT(TT, UT))
            }((0, WT.P)(TT), mT);
          return zT || []
        }
        async function rm(TT, UT) {
          const mT = (0, WT.P)(TT),
            zT = {
              requestType: "VERIFY_EMAIL",
              idToken: await TT.getIdToken()
            };
          UT && tm(mT.auth, zT, UT);
          const {
            email: MT
          } = await async function(TT, UT) {
            return rU(TT, UT)
          }(mT.auth, zT);
          MT !== TT.email && await TT.reload()
        }
        async function Km(TT, UT, mT) {
          const zT = (0, WT.P)(TT),
            MT = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await TT.getIdToken(),
              newEmail: UT
            };
          mT && tm(zT.auth, MT, mT);
          const {
            email: gT
          } = await async function(TT, UT) {
            return rU(TT, UT)
          }(zT.auth, MT);
          gT !== TT.email && await TT.reload()
        }
        async function Sm(TT, UT) {
          let {
            displayName: mT,
            photoURL: zT
          } = UT;
          if (void 0 === mT && void 0 === zT) return;
          const MT = (0, WT.P)(TT),
            gT = {
              idToken: await MT.getIdToken(),
              displayName: mT,
              photoUrl: zT,
              returnSecureToken: !0
            },
            nT = await DT(MT, async function(TT, UT) {
              return PT(TT, "POST", "/v1/accounts:update", UT)
            }(MT.auth, gT));
          MT.displayName = nT.displayName || null, MT.photoURL = nT.photoUrl || null;
          const HT = MT.providerData.find((TT => {
            let {
              providerId: UT
            } = TT;
            return "password" === UT
          }));
          HT && (HT.displayName = MT.displayName, HT.photoURL = MT.photoURL), await MT._updateTokensIfNecessary(nT)
        }

        function Gm(TT, UT) {
          return Em((0, WT.P)(TT), UT, null)
        }

        function Nm(TT, UT) {
          return Em((0, WT.P)(TT), null, UT)
        }
        async function Em(TT, UT, mT) {
          const {
            auth: WT
          } = TT, zT = {
            idToken: await TT.getIdToken(),
            returnSecureToken: !0
          };
          UT && (zT.email = UT), mT && (zT.password = mT);
          const MT = await DT(TT, uU(WT, zT));
          await TT._updateTokensIfNecessary(MT, !0)
        }
        class hm {
          constructor(TT, UT) {
            let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = TT, this.providerId = UT, this.profile = mT
          }
        }
        class Dm extends hm {
          constructor(TT, UT, mT, WT) {
            super(TT, UT, mT), this.username = WT
          }
        }
        class om extends hm {
          constructor(TT, UT) {
            super(TT, "facebook.com", UT)
          }
        }
        class Am extends Dm {
          constructor(TT, UT) {
            super(TT, "github.com", UT, "string" === typeof(null === UT || void 0 === UT ? void 0 : UT.login) ? null === UT || void 0 === UT ? void 0 : UT.login : null)
          }
        }
        class Rm extends hm {
          constructor(TT, UT) {
            super(TT, "google.com", UT)
          }
        }
        class TW extends Dm {
          constructor(TT, UT, mT) {
            super(TT, "twitter.com", UT, mT)
          }
        }

        function UW(TT) {
          const {
            user: UT,
            _tokenResponse: mT
          } = TT;
          return UT.isAnonymous && !mT ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(TT) {
            var UT, mT;
            if (!TT) return null;
            const {
              providerId: WT
            } = TT, zT = TT.rawUserInfo ? JSON.parse(TT.rawUserInfo) : {}, MT = TT.isNewUser || "identitytoolkit#SignupNewUserResponse" === TT.kind;
            if (!WT && (null === TT || void 0 === TT ? void 0 : TT.idToken)) {
              const WT = null === (mT = null === (UT = hT(TT.idToken)) || void 0 === UT ? void 0 : UT.firebase) || void 0 === mT ? void 0 : mT.sign_in_provider;
              if (WT) return new hm(MT, "anonymous" !== WT && "custom" !== WT ? WT : null)
            }
            if (!WT) return null;
            switch (WT) {
              case "facebook.com":
                return new om(MT, zT);
              case "github.com":
                return new Am(MT, zT);
              case "google.com":
                return new Rm(MT, zT);
              case "twitter.com":
                return new TW(MT, zT, TT.screenName || null);
              case "custom":
              case "anonymous":
                return new hm(MT, null);
              default:
                return new hm(MT, WT, zT)
            }
          }(mT)
        }

        function mW(TT, UT) {
          return (0, WT.P)(TT).setPersistence(UT)
        }

        function WW(TT) {
          return yU(TT).initializeRecaptchaConfig()
        }

        function zW(TT, UT, mT, zT) {
          return (0, WT.P)(TT).onIdTokenChanged(UT, mT, zT)
        }

        function MW(TT, UT, mT) {
          return (0, WT.P)(TT).beforeAuthStateChanged(UT, mT)
        }

        function gW(TT, UT, mT, zT) {
          return (0, WT.P)(TT).onAuthStateChanged(UT, mT, zT)
        }

        function nW(TT) {
          (0, WT.P)(TT).useDeviceLanguage()
        }

        function HW(TT, UT) {
          return (0, WT.P)(TT).updateCurrentUser(UT)
        }

        function kW(TT) {
          return (0, WT.P)(TT).signOut()
        }
        async function jW(TT) {
          return (0, WT.P)(TT).delete()
        }
        class lW {
          constructor(TT, UT, mT) {
            this.type = TT, this.credential = UT, this.auth = mT
          }
          static _fromIdtoken(TT, UT) {
            return new lW("enroll", TT, UT)
          }
          static _fromMfaPendingCredential(TT) {
            return new lW("signin", TT)
          }
          toJSON() {
            const TT = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [TT]: this.credential
              }
            }
          }
          static fromJSON(TT) {
            var UT, mT;
            if (null === TT || void 0 === TT ? void 0 : TT.multiFactorSession) {
              if (null === (UT = TT.multiFactorSession) || void 0 === UT ? void 0 : UT.pendingCredential) return lW._fromMfaPendingCredential(TT.multiFactorSession.pendingCredential);
              if (null === (mT = TT.multiFactorSession) || void 0 === mT ? void 0 : mT.idToken) return lW._fromIdtoken(TT.multiFactorSession.idToken)
            }
            return null
          }
        }
        class LW {
          constructor(TT, UT, mT) {
            this.session = TT, this.hints = UT, this.signInResolver = mT
          }
          static _fromError(TT, UT) {
            const mT = yU(TT),
              WT = UT.customData._serverResponse,
              zT = (WT.mfaInfo || []).map((TT => xm._fromServerResponse(mT, TT)));
            JT(WT.mfaPendingCredential, mT, "internal-error");
            const MT = lW._fromMfaPendingCredential(WT.mfaPendingCredential);
            return new LW(MT, zT, (async TT => {
              const zT = await TT._process(mT, MT);
              delete WT.mfaInfo, delete WT.mfaPendingCredential;
              const gT = Object.assign(Object.assign({}, WT), {
                idToken: zT.idToken,
                refreshToken: zT.refreshToken
              });
              switch (UT.operationType) {
                case "signIn":
                  const TT = await jm._fromIdTokenResponse(mT, UT.operationType, gT);
                  return await mT._updateCurrentUser(TT.user), TT;
                case "reauthenticate":
                  return JT(UT.user, mT, "internal-error"), jm._forOperation(UT.user, UT.operationType, gT);
                default:
                  iT(mT, "internal-error")
              }
            }))
          }
          async resolveSignIn(TT) {
            const UT = TT;
            return this.signInResolver(UT)
          }
        }

        function pW(TT, UT) {
          var mT;
          const zT = (0, WT.P)(TT),
            MT = UT;
          return JT(UT.customData.operationType, zT, "argument-error"), JT(null === (mT = MT.customData._serverResponse) || void 0 === mT ? void 0 : mT.mfaPendingCredential, zT, "argument-error"), LW._fromError(zT, MT)
        }
        class BW {
          constructor(TT) {
            this.user = TT, this.enrolledFactors = [], TT._onReload((UT => {
              UT.mfaInfo && (this.enrolledFactors = UT.mfaInfo.map((UT => xm._fromServerResponse(TT.auth, UT))))
            }))
          }
          static _fromUser(TT) {
            return new BW(TT)
          }
          async getSession() {
            return lW._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(TT, UT) {
            const mT = TT,
              WT = await this.getSession(),
              zT = await DT(this.user, mT._process(this.user.auth, WT, UT));
            return await this.user._updateTokensIfNecessary(zT), this.user.reload()
          }
          async unenroll(TT) {
            const UT = "string" === typeof TT ? TT : TT.uid,
              mT = await this.user.getIdToken();
            try {
              const TT = await DT(this.user, (WT = this.user.auth, zT = {
                idToken: mT,
                mfaEnrollmentId: UT
              }, PT(WT, "POST", "/v2/accounts/mfaEnrollment:withdraw", FT(WT, zT))));
              this.enrolledFactors = this.enrolledFactors.filter((TT => {
                let {
                  uid: mT
                } = TT;
                return mT !== UT
              })), await this.user._updateTokensIfNecessary(TT), await this.user.reload()
            } catch (MT) {
              throw MT
            }
            var WT, zT
          }
        }
        const ZW = new WeakMap;

        function cW(TT) {
          const UT = (0, WT.P)(TT);
          return ZW.has(UT) || ZW.set(UT, BW._fromUser(UT)), ZW.get(UT)
        }
        const vW = "__sak";
        class fW {
          constructor(TT, UT) {
            this.storageRetriever = TT, this.type = UT
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(vW, "1"), this.storage.removeItem(vW), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (TT) {
              return Promise.resolve(!1)
            }
          }
          _set(TT, UT) {
            return this.storage.setItem(TT, JSON.stringify(UT)), Promise.resolve()
          }
          _get(TT) {
            const UT = this.storage.getItem(TT);
            return Promise.resolve(UT ? JSON.parse(UT) : null)
          }
          _remove(TT) {
            return this.storage.removeItem(TT), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class qW extends fW {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (TT, UT) => this.onStorageEvent(TT, UT), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const TT = (0, WT.R)();
              return LU(TT) || fU(TT)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (TT) {
                return !1
              }
            }(), this.fallbackToPolling = qU(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(TT) {
            for (const UT of Object.keys(this.listeners)) {
              const mT = this.storage.getItem(UT),
                WT = this.localCache[UT];
              mT !== WT && TT(UT, WT, mT)
            }
          }
          onStorageEvent(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!TT.key) return void this.forAllChangedKeys(((TT, UT, mT) => {
              this.notifyListeners(TT, mT)
            }));
            const mT = TT.key;
            if (UT ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const WT = this.storage.getItem(mT);
              if (TT.newValue !== WT) null !== TT.newValue ? this.storage.setItem(mT, TT.newValue) : this.storage.removeItem(mT);
              else if (this.localCache[mT] === TT.newValue && !UT) return
            }
            const zT = () => {
                const TT = this.storage.getItem(mT);
                (UT || this.localCache[mT] !== TT) && this.notifyListeners(mT, TT)
              },
              MT = this.storage.getItem(mT);
            (0, WT.$)() && 10 === document.documentMode && MT !== TT.newValue && TT.newValue !== TT.oldValue ? setTimeout(zT, 10) : zT()
          }
          notifyListeners(TT, UT) {
            this.localCache[TT] = UT;
            const mT = this.listeners[TT];
            if (mT)
              for (const WT of Array.from(mT)) WT(UT ? JSON.parse(UT) : UT)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((TT, UT, mT) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: TT,
                  oldValue: UT,
                  newValue: mT
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
          _addListener(TT, UT) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[TT] || (this.listeners[TT] = new Set, this.localCache[TT] = this.storage.getItem(TT)), this.listeners[TT].add(UT)
          }
          _removeListener(TT, UT) {
            this.listeners[TT] && (this.listeners[TT].delete(UT), 0 === this.listeners[TT].size && delete this.listeners[TT]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(TT, UT) {
            await super._set(TT, UT), this.localCache[TT] = JSON.stringify(UT)
          }
          async _get(TT) {
            const UT = await super._get(TT);
            return this.localCache[TT] = JSON.stringify(UT), UT
          }
          async _remove(TT) {
            await super._remove(TT), delete this.localCache[TT]
          }
        }
        qW.type = "LOCAL";
        const iW = qW;
        class bW extends fW {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(TT, UT) {}
          _removeListener(TT, UT) {}
        }
        bW.type = "SESSION";
        const OW = bW;
        class eW {
          constructor(TT) {
            this.eventTarget = TT, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(TT) {
            const UT = this.receivers.find((UT => UT.isListeningto(TT)));
            if (UT) return UT;
            const mT = new eW(TT);
            return this.receivers.push(mT), mT
          }
          isListeningto(TT) {
            return this.eventTarget === TT
          }
          async handleEvent(TT) {
            const UT = TT,
              {
                eventId: mT,
                eventType: WT,
                data: zT
              } = UT.data,
              MT = this.handlersMap[WT];
            if (!(null === MT || void 0 === MT ? void 0 : MT.size)) return;
            UT.ports[0].postMessage({
              status: "ack",
              eventId: mT,
              eventType: WT
            });
            const gT = Array.from(MT).map((async TT => TT(UT.origin, zT))),
              nT = await
            function(TT) {
              return Promise.all(TT.map((async TT => {
                try {
                  return {
                    fulfilled: !0,
                    value: await TT
                  }
                } catch (UT) {
                  return {
                    fulfilled: !1,
                    reason: UT
                  }
                }
              })))
            }(gT);
            UT.ports[0].postMessage({
              status: "done",
              eventId: mT,
              eventType: WT,
              response: nT
            })
          }
          _subscribe(TT, UT) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[TT] || (this.handlersMap[TT] = new Set), this.handlersMap[TT].add(UT)
          }
          _unsubscribe(TT, UT) {
            this.handlersMap[TT] && UT && this.handlersMap[TT].delete(UT), UT && 0 !== this.handlersMap[TT].size || delete this.handlersMap[TT], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function YW() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            mT = "";
          for (let WT = 0; WT < UT; WT++) mT += Math.floor(10 * Math.random());
          return TT + mT
        }
        eW.receivers = [];
        class JW {
          constructor(TT) {
            this.target = TT, this.handlers = new Set
          }
          removeMessageHandler(TT) {
            TT.messageChannel && (TT.messageChannel.port1.removeEventListener("message", TT.LO), TT.messageChannel.port1.close()), this.handlers.delete(TT)
          }
          async _send(TT, UT) {
            let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const WT = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!WT) throw new Error("connection_unavailable");
            let zT, MT;
            return new Promise(((gT, nT) => {
              const HT = YW("", 20);
              WT.port1.start();
              const kT = setTimeout((() => {
                nT(new Error("unsupported_event"))
              }), mT);
              MT = {
                messageChannel: WT,
                LO(TT) {
                  const UT = TT;
                  if (UT.data.eventId === HT) switch (UT.data.status) {
                    case "ack":
                      clearTimeout(kT), zT = setTimeout((() => {
                        nT(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(zT), gT(UT.data.response);
                      break;
                    default:
                      clearTimeout(kT), clearTimeout(zT), nT(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(MT), WT.port1.addEventListener("message", MT.LO), this.target.postMessage({
                eventType: TT,
                eventId: HT,
                data: UT
              }, [WT.port2])
            })).finally((() => {
              MT && this.removeMessageHandler(MT)
            }))
          }
        }

        function xW() {
          return window
        }

        function dW() {
          return "undefined" !== typeof xW().WorkerGlobalScope && "function" === typeof xW().importScripts
        }
        const wW = "firebaseLocalStorageDb",
          tW = "firebaseLocalStorage",
          aW = "fbase_key";
        class yW {
          constructor(TT) {
            this.request = TT
          }
          toPromise() {
            return new Promise(((TT, UT) => {
              this.request.addEventListener("success", (() => {
                TT(this.request.result)
              })), this.request.addEventListener("error", (() => {
                UT(this.request.error)
              }))
            }))
          }
        }

        function XW(TT, UT) {
          return TT.transaction([tW], UT ? "readwrite" : "readonly").objectStore(tW)
        }

        function IW() {
          const TT = indexedDB.open(wW, 1);
          return new Promise(((UT, mT) => {
            TT.addEventListener("error", (() => {
              mT(TT.error)
            })), TT.addEventListener("upgradeneeded", (() => {
              const UT = TT.result;
              try {
                UT.createObjectStore(tW, {
                  keyPath: aW
                })
              } catch (WT) {
                mT(WT)
              }
            })), TT.addEventListener("success", (async () => {
              const mT = TT.result;
              mT.objectStoreNames.contains(tW) ? UT(mT) : (mT.close(), await
                function() {
                  const TT = indexedDB.deleteDatabase(wW);
                  return new yW(TT).toPromise()
                }(), UT(await IW()))
            }))
          }))
        }
        async function QW(TT, UT, mT) {
          const WT = XW(TT, !0).put({
            [aW]: UT,
            value: mT
          });
          return new yW(WT).toPromise()
        }

        function sW(TT, UT) {
          const mT = XW(TT, !0).delete(UT);
          return new yW(mT).toPromise()
        }
        class FW {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await IW()), this.db
          }
          async _withRetries(TT) {
            let UT = 0;
            for (;;) try {
              const UT = await this._openDb();
              return await TT(UT)
            } catch (mT) {
              if (UT++ > 3) throw mT;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return dW() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = eW._getInstance(dW() ? self : null), this.receiver._subscribe("keyChanged", (async (TT, UT) => ({
              keyProcessed: (await this._poll()).includes(UT.key)
            }))), this.receiver._subscribe("ping", (async (TT, UT) => ["keyChanged"]))
          }
          async initializeSender() {
            var TT, UT;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (TT) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new JW(this.activeServiceWorker);
            const mT = await this.sender._send("ping", {}, 800);
            mT && (null === (TT = mT[0]) || void 0 === TT ? void 0 : TT.fulfilled) && (null === (UT = mT[0]) || void 0 === UT ? void 0 : UT.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(TT) {
            if (this.sender && this.activeServiceWorker && function() {
                var TT;
                return (null === (TT = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === TT ? void 0 : TT.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: TT
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (UT) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const TT = await IW();
              return await QW(TT, vW, "1"), await sW(TT, vW), !0
            } catch (TT) {}
            return !1
          }
          async _withPendingWrite(TT) {
            this.pendingWrites++;
            try {
              await TT()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(TT, UT) {
            return this._withPendingWrite((async () => (await this._withRetries((mT => QW(mT, TT, UT))), this.localCache[TT] = UT, this.notifyServiceWorker(TT))))
          }
          async _get(TT) {
            const UT = await this._withRetries((UT => async function(TT, UT) {
              const mT = XW(TT, !1).get(UT),
                WT = await new yW(mT).toPromise();
              return void 0 === WT ? null : WT.value
            }(UT, TT)));
            return this.localCache[TT] = UT, UT
          }
          async _remove(TT) {
            return this._withPendingWrite((async () => (await this._withRetries((UT => sW(UT, TT))), delete this.localCache[TT], this.notifyServiceWorker(TT))))
          }
          async _poll() {
            const TT = await this._withRetries((TT => {
              const UT = XW(TT, !1).getAll();
              return new yW(UT).toPromise()
            }));
            if (!TT) return [];
            if (0 !== this.pendingWrites) return [];
            const UT = [],
              mT = new Set;
            for (const {
                fbase_key: WT,
                value: zT
              }
              of TT) mT.add(WT), JSON.stringify(this.localCache[WT]) !== JSON.stringify(zT) && (this.notifyListeners(WT, zT), UT.push(WT));
            for (const WT of Object.keys(this.localCache)) this.localCache[WT] && !mT.has(WT) && (this.notifyListeners(WT, null), UT.push(WT));
            return UT
          }
          notifyListeners(TT, UT) {
            this.localCache[TT] = UT;
            const mT = this.listeners[TT];
            if (mT)
              for (const WT of Array.from(mT)) WT(UT)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(TT, UT) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[TT] || (this.listeners[TT] = new Set, this._get(TT)), this.listeners[TT].add(UT)
          }
          _removeListener(TT, UT) {
            this.listeners[TT] && (this.listeners[TT].delete(UT), 0 === this.listeners[TT].size && delete this.listeners[TT]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        FW.type = "LOCAL";
        const PW = FW;
        const VW = 1e12;
        class uW {
          constructor(TT) {
            this.auth = TT, this.counter = VW, this._widgets = new Map
          }
          render(TT, UT) {
            const mT = this.counter;
            return this._widgets.set(mT, new CW(TT, this.auth.name, UT || {})), this.counter++, mT
          }
          reset(TT) {
            var UT;
            const mT = TT || VW;
            null === (UT = this._widgets.get(mT)) || void 0 === UT || UT.delete(), this._widgets.delete(mT)
          }
          getResponse(TT) {
            var UT;
            const mT = TT || VW;
            return (null === (UT = this._widgets.get(mT)) || void 0 === UT ? void 0 : UT.getResponse()) || ""
          }
          async execute(TT) {
            var UT;
            const mT = TT || VW;
            return null === (UT = this._widgets.get(mT)) || void 0 === UT || UT.execute(), ""
          }
        }
        class CW {
          constructor(TT, UT, mT) {
            this.params = mT, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const WT = "string" === typeof TT ? document.getElementById(TT) : TT;
            JT(WT, "argument-error", {
              appName: UT
            }), this.container = WT, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(TT) {
                const UT = [],
                  mT = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let WT = 0; WT < TT; WT++) UT.push(mT.charAt(Math.floor(Math.random() * mT.length)));
                return UT.join("")
              }(50);
              const {
                callback: TT,
                "expired-callback": UT
              } = this.params;
              if (TT) try {
                TT(this.responseToken)
              } catch (mT) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, UT) try {
                  UT()
                } catch (mT) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const rW = xU("rcb"),
          KW = new yT(3e4, 6e4);
        class SW {
          constructor() {
            var TT;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (TT = xW().grecaptcha) || void 0 === TT ? void 0 : TT.render)
          }
          load(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return JT(function(TT) {
              return TT.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(TT)
            }(UT), TT, "argument-error"), this.shouldResolveImmediately(UT) && OU(xW().grecaptcha) ? Promise.resolve(xW().grecaptcha) : new Promise(((mT, zT) => {
              const MT = xW().setTimeout((() => {
                zT(bT(TT, "network-request-failed"))
              }), KW.get());
              xW()[rW] = () => {
                xW().clearTimeout(MT), delete xW()[rW];
                const WT = xW().grecaptcha;
                if (!WT || !OU(WT)) return void zT(bT(TT, "internal-error"));
                const gT = WT.render;
                WT.render = (TT, UT) => {
                  const mT = gT(TT, UT);
                  return this.counter++, mT
                }, this.hostLanguage = UT, mT(WT)
              };
              JU(`https://www.google.com/recaptcha/api.js??${(0,WT.pb)({onload:rW,render:"explicit",hl:UT})}`).catch((() => {
                clearTimeout(MT), zT(bT(TT, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(TT) {
            var UT;
            return !!(null === (UT = xW().grecaptcha) || void 0 === UT ? void 0 : UT.render) && (TT === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class GW {
          async load(TT) {
            return new uW(TT)
          }
          clearedOneInstance() {}
        }
        const NW = "recaptcha",
          EW = {
            theme: "light",
            type: "image"
          };
        class hW {
          constructor(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, EW),
              mT = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = UT, this.type = NW, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = yU(mT), this.isInvisible = "invisible" === this.parameters.size, JT("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const WT = "string" === typeof TT ? document.getElementById(TT) : TT;
            JT(WT, this.auth, "argument-error"), this.container = WT, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new GW : new SW, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const TT = await this.render(),
              UT = this.getAssertedRecaptcha(),
              mT = UT.getResponse(TT);
            return mT || new Promise((mT => {
              const WT = TT => {
                TT && (this.tokenChangeListeners.delete(WT), mT(TT))
              };
              this.tokenChangeListeners.add(WT), this.isInvisible && UT.execute(TT)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (TT) {
              return Promise.reject(TT)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((TT => {
              throw this.renderPromise = null, TT
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((TT => {
              this.container.removeChild(TT)
            }))
          }
          validateStartingState() {
            JT(!this.parameters.sitekey, this.auth, "argument-error"), JT(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), JT("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(TT) {
            return UT => {
              if (this.tokenChangeListeners.forEach((TT => TT(UT))), "function" === typeof TT) TT(UT);
              else if ("string" === typeof TT) {
                const mT = xW()[TT];
                "function" === typeof mT && mT(UT)
              }
            }
          }
          assertNotDestroyed() {
            JT(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let TT = this.container;
              if (!this.isInvisible) {
                const UT = document.createElement("div");
                TT.appendChild(UT), TT = UT
              }
              this.widgetId = this.getAssertedRecaptcha().render(TT, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            JT(tT() && !dW(), this.auth, "internal-error"), await
            function() {
              let TT = null;
              return new Promise((UT => {
                "complete" !== document.readyState ? (TT = () => UT(), window.addEventListener("load", TT)) : UT()
              })).catch((UT => {
                throw TT && window.removeEventListener("load", TT), UT
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const TT = await async function(TT) {
              return (await PT(TT, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            JT(TT, this.auth, "internal-error"), this.parameters.sitekey = TT
          }
          getAssertedRecaptcha() {
            return JT(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class DW {
          constructor(TT, UT) {
            this.verificationId = TT, this.onConfirmation = UT
          }
          confirm(TT) {
            const UT = DU._fromVerification(this.verificationId, TT);
            return this.onConfirmation(UT)
          }
        }
        async function oW(TT, UT, mT) {
          const zT = yU(TT),
            MT = await Tz(zT, UT, (0, WT.P)(mT));
          return new DW(MT, (TT => Om(zT, TT)))
        }
        async function AW(TT, UT, mT) {
          const zT = (0, WT.P)(TT);
          await qm(!1, zT, "phone");
          const MT = await Tz(zT.auth, UT, (0, WT.P)(mT));
          return new DW(MT, (TT => em(zT, TT)))
        }
        async function RW(TT, UT, mT) {
          const zT = (0, WT.P)(TT),
            MT = await Tz(zT.auth, UT, (0, WT.P)(mT));
          return new DW(MT, (TT => Ym(zT, TT)))
        }
        async function Tz(TT, UT, mT) {
          var WT;
          const zT = await mT.verify();
          try {
            let MT;
            if (JT("string" === typeof zT, TT, "argument-error"), JT(mT.type === NW, TT, "argument-error"), MT = "string" === typeof UT ? {
                phoneNumber: UT
              } : UT, "session" in MT) {
              const UT = MT.session;
              if ("phoneNumber" in MT) {
                JT("enroll" === UT.type, TT, "internal-error");
                const mT = await
                function(TT, UT) {
                  return PT(TT, "POST", "/v2/accounts/mfaEnrollment:start", FT(TT, UT))
                }(TT, {
                  idToken: UT.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: MT.phoneNumber,
                    recaptchaToken: zT
                  }
                });
                return mT.phoneSessionInfo.sessionInfo
              } {
                JT("signin" === UT.type, TT, "internal-error");
                const mT = (null === (WT = MT.multiFactorHint) || void 0 === WT ? void 0 : WT.uid) || MT.multiFactorUid;
                JT(mT, TT, "missing-multi-factor-info");
                const gT = await
                function(TT, UT) {
                  return PT(TT, "POST", "/v2/accounts/mfaSignIn:start", FT(TT, UT))
                }(TT, {
                  mfaPendingCredential: UT.credential,
                  mfaEnrollmentId: mT,
                  phoneSignInInfo: {
                    recaptchaToken: zT
                  }
                });
                return gT.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: UT
              } = await async function(TT, UT) {
                return PT(TT, "POST", "/v1/accounts:sendVerificationCode", FT(TT, UT))
              }(TT, {
                phoneNumber: MT.phoneNumber,
                recaptchaToken: zT
              });
              return UT
            }
          } finally {
            mT._reset()
          }
        }
        async function Uz(TT, UT) {
          await fm((0, WT.P)(TT), UT)
        }
        class mz {
          constructor(TT) {
            this.providerId = mz.PROVIDER_ID, this.auth = yU(TT)
          }
          verifyPhoneNumber(TT, UT) {
            return Tz(this.auth, TT, (0, WT.P)(UT))
          }
          static credential(TT, UT) {
            return DU._fromVerification(TT, UT)
          }
          static credentialFromResult(TT) {
            const UT = TT;
            return mz.credentialFromTaggedObject(UT)
          }
          static credentialFromError(TT) {
            return mz.credentialFromTaggedObject(TT.customData || {})
          }
          static credentialFromTaggedObject(TT) {
            let {
              _tokenResponse: UT
            } = TT;
            if (!UT) return null;
            const {
              phoneNumber: mT,
              temporaryProof: WT
            } = UT;
            return mT && WT ? DU._fromTokenResponse(mT, WT) : null
          }
        }

        function Wz(TT, UT) {
          return UT ? MU(UT) : (JT(TT._popupRedirectResolver, TT, "argument-error"), TT._popupRedirectResolver)
        }
        mz.PROVIDER_ID = "phone", mz.PHONE_SIGN_IN_METHOD = "phone";
        class zz extends PU {
          constructor(TT) {
            super("custom", "custom"), this.params = TT
          }
          _getIdTokenResponse(TT) {
            return NU(TT, this._buildIdpRequest())
          }
          _linkToIdToken(TT, UT) {
            return NU(TT, this._buildIdpRequest(UT))
          }
          _getReauthenticationResolver(TT) {
            return NU(TT, this._buildIdpRequest())
          }
          _buildIdpRequest(TT) {
            const UT = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return TT && (UT.idToken = TT), UT
          }
        }

        function Mz(TT) {
          return bm(TT.auth, new zz(TT), TT.bypassAuthState)
        }

        function gz(TT) {
          const {
            auth: UT,
            user: mT
          } = TT;
          return JT(mT, UT, "internal-error"), im(mT, new zz(TT), TT.bypassAuthState)
        }
        async function nz(TT) {
          const {
            auth: UT,
            user: mT
          } = TT;
          return JT(mT, UT, "internal-error"), fm(mT, new zz(TT), TT.bypassAuthState)
        }
        class Hz {
          constructor(TT, UT, mT, WT) {
            let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = TT, this.resolver = mT, this.user = WT, this.bypassAuthState = zT, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(UT) ? UT : [UT]
          }
          execute() {
            return new Promise((async (TT, UT) => {
              this.pendingPromise = {
                resolve: TT,
                reject: UT
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (mT) {
                this.reject(mT)
              }
            }))
          }
          async onAuthEvent(TT) {
            const {
              urlResponse: UT,
              sessionId: mT,
              postBody: WT,
              tenantId: zT,
              error: MT,
              type: gT
            } = TT;
            if (MT) return void this.reject(MT);
            const nT = {
              auth: this.auth,
              requestUri: UT,
              sessionId: mT,
              tenantId: zT || void 0,
              postBody: WT || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(gT)(nT))
            } catch (HT) {
              this.reject(HT)
            }
          }
          onError(TT) {
            this.reject(TT)
          }
          getIdpTask(TT) {
            switch (TT) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return Mz;
              case "linkViaPopup":
              case "linkViaRedirect":
                return nz;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return gz;
              default:
                iT(this.auth, "internal-error")
            }
          }
          resolve(TT) {
            dT(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(TT), this.unregisterAndCleanUp()
          }
          reject(TT) {
            dT(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(TT), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const kz = new yT(2e3, 1e4);
        async function jz(TT, UT, mT) {
          const WT = yU(TT);
          eT(TT, UT, Tm);
          const zT = Wz(WT, mT);
          return new pz(WT, "signInViaPopup", UT, zT).executeNotNull()
        }
        async function lz(TT, UT, mT) {
          const zT = (0, WT.P)(TT);
          eT(zT.auth, UT, Tm);
          const MT = Wz(zT.auth, mT);
          return new pz(zT.auth, "reauthViaPopup", UT, MT, zT).executeNotNull()
        }
        async function Lz(TT, UT, mT) {
          const zT = (0, WT.P)(TT);
          eT(zT.auth, UT, Tm);
          const MT = Wz(zT.auth, mT);
          return new pz(zT.auth, "linkViaPopup", UT, MT, zT).executeNotNull()
        }
        class pz extends Hz {
          constructor(TT, UT, mT, WT, zT) {
            super(TT, UT, WT, zT), this.provider = mT, this.authWindow = null, this.pollId = null, pz.currentPopupAction && pz.currentPopupAction.cancel(), pz.currentPopupAction = this
          }
          async executeNotNull() {
            const TT = await this.execute();
            return JT(TT, this.auth, "internal-error"), TT
          }
          async onExecution() {
            dT(1 === this.filter.length, "Popup operations only handle one event");
            const TT = YW();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], TT), this.authWindow.associatedEvent = TT, this.resolver._originValidation(this.auth).catch((TT => {
              this.reject(TT)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (TT => {
              TT || this.reject(bT(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var TT;
            return (null === (TT = this.authWindow) || void 0 === TT ? void 0 : TT.associatedEvent) || null
          }
          cancel() {
            this.reject(bT(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, pz.currentPopupAction = null
          }
          pollUserCancellation() {
            const TT = () => {
              var UT, mT;
              (null === (mT = null === (UT = this.authWindow) || void 0 === UT ? void 0 : UT.window) || void 0 === mT ? void 0 : mT.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(bT(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(TT, kz.get())
            };
            TT()
          }
        }
        pz.currentPopupAction = null;
        const Bz = "pendingRedirect",
          Zz = new Map;
        class cz extends Hz {
          constructor(TT, UT) {
            super(TT, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], UT, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let TT = Zz.get(this.auth._key());
            if (!TT) {
              try {
                const UT = await async function(TT, UT) {
                  const mT = iz(UT),
                    WT = qz(TT);
                  if (!await WT._isAvailable()) return !1;
                  const zT = "true" === await WT._get(mT);
                  return await WT._remove(mT), zT
                }(this.resolver, this.auth) ? await super.execute() : null;
                TT = () => Promise.resolve(UT)
              } catch (UT) {
                TT = () => Promise.reject(UT)
              }
              Zz.set(this.auth._key(), TT)
            }
            return this.bypassAuthState || Zz.set(this.auth._key(), (() => Promise.resolve(null))), TT()
          }
          async onAuthEvent(TT) {
            if ("signInViaRedirect" === TT.type) return super.onAuthEvent(TT);
            if ("unknown" !== TT.type) {
              if (TT.eventId) {
                const UT = await this.auth._redirectUserForId(TT.eventId);
                if (UT) return this.user = UT, super.onAuthEvent(TT);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function vz(TT, UT) {
          return qz(TT)._set(iz(UT), "true")
        }

        function fz(TT, UT) {
          Zz.set(TT._key(), UT)
        }

        function qz(TT) {
          return MU(TT._redirectPersistence)
        }

        function iz(TT) {
          return HU(Bz, TT.config.apiKey, TT.name)
        }

        function bz(TT, UT, mT) {
          return async function(TT, UT, mT) {
            const WT = yU(TT);
            eT(TT, UT, Tm), await WT._initializationPromise;
            const zT = Wz(WT, mT);
            return await vz(zT, WT), zT._openRedirect(WT, UT, "signInViaRedirect")
          }(TT, UT, mT)
        }

        function Oz(TT, UT, mT) {
          return async function(TT, UT, mT) {
            const zT = (0, WT.P)(TT);
            eT(zT.auth, UT, Tm), await zT.auth._initializationPromise;
            const MT = Wz(zT.auth, mT);
            await vz(MT, zT.auth);
            const gT = await xz(zT);
            return MT._openRedirect(zT.auth, UT, "reauthViaRedirect", gT)
          }(TT, UT, mT)
        }

        function ez(TT, UT, mT) {
          return async function(TT, UT, mT) {
            const zT = (0, WT.P)(TT);
            eT(zT.auth, UT, Tm), await zT.auth._initializationPromise;
            const MT = Wz(zT.auth, mT);
            await qm(!1, zT, UT.providerId), await vz(MT, zT.auth);
            const gT = await xz(zT);
            return MT._openRedirect(zT.auth, UT, "linkViaRedirect", gT)
          }(TT, UT, mT)
        }
        async function Yz(TT, UT) {
          return await yU(TT)._initializationPromise, Jz(TT, UT, !1)
        }
        async function Jz(TT, UT) {
          let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const WT = yU(TT),
            zT = Wz(WT, UT),
            MT = new cz(WT, zT, mT),
            gT = await MT.execute();
          return gT && !mT && (delete gT.user._redirectEventId, await WT._persistUserIfCurrent(gT.user), await WT._setRedirectUser(null, UT)), gT
        }
        async function xz(TT) {
          const UT = YW(`${TT.uid}:::`);
          return TT._redirectEventId = UT, await TT.auth._setRedirectUser(TT), await TT.auth._persistUserIfCurrent(TT), UT
        }
        class dz {
          constructor(TT) {
            this.auth = TT, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(TT) {
            this.consumers.add(TT), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, TT) && (this.sendToConsumer(this.queuedRedirectEvent, TT), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(TT) {
            this.consumers.delete(TT)
          }
          onEvent(TT) {
            if (this.hasEventBeenHandled(TT)) return !1;
            let UT = !1;
            return this.consumers.forEach((mT => {
              this.isEventForConsumer(TT, mT) && (UT = !0, this.sendToConsumer(TT, mT), this.saveEventToCache(TT))
            })), this.hasHandledPotentialRedirect || ! function(TT) {
              switch (TT.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return tz(TT);
                default:
                  return !1
              }
            }(TT) || (this.hasHandledPotentialRedirect = !0, UT || (this.queuedRedirectEvent = TT, UT = !0)), UT
          }
          sendToConsumer(TT, UT) {
            var mT;
            if (TT.error && !tz(TT)) {
              const WT = (null === (mT = TT.error.code) || void 0 === mT ? void 0 : mT.split("auth/")[1]) || "internal-error";
              UT.onError(bT(this.auth, WT))
            } else UT.onAuthEvent(TT)
          }
          isEventForConsumer(TT, UT) {
            const mT = null === UT.eventId || !!TT.eventId && TT.eventId === UT.eventId;
            return UT.filter.includes(TT.type) && mT
          }
          hasEventBeenHandled(TT) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(wz(TT))
          }
          saveEventToCache(TT) {
            this.cachedEventUids.add(wz(TT)), this.lastProcessedEventTime = Date.now()
          }
        }

        function wz(TT) {
          return [TT.type, TT.eventId, TT.sessionId, TT.tenantId].filter((TT => TT)).join("-")
        }

        function tz(TT) {
          let {
            type: UT,
            error: mT
          } = TT;
          return "unknown" === UT && "auth/no-auth-event" === (null === mT || void 0 === mT ? void 0 : mT.code)
        }
        const az = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          yz = /^https?/;
        async function Xz(TT) {
          if (TT.config.emulator) return;
          const {
            authorizedDomains: UT
          } = await async function(TT) {
            return PT(TT, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(TT);
          for (const WT of UT) try {
            if (Iz(WT)) return
          } catch (mT) {}
          iT(TT, "unauthorized-domain")
        }

        function Iz(TT) {
          const UT = wT(),
            {
              protocol: mT,
              hostname: WT
            } = new URL(UT);
          if (TT.startsWith("chrome-extension://")) {
            const zT = new URL(TT);
            return "" === zT.hostname && "" === WT ? "chrome-extension:" === mT && TT.replace("chrome-extension://", "") === UT.replace("chrome-extension://", "") : "chrome-extension:" === mT && zT.hostname === WT
          }
          if (!yz.test(mT)) return !1;
          if (az.test(TT)) return WT === TT;
          const zT = TT.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + zT + "|" + zT + ")$", "i").test(WT)
        }
        const Qz = new yT(3e4, 6e4);

        function sz() {
          const TT = xW().___jsl;
          if (null === TT || void 0 === TT ? void 0 : TT.H)
            for (const UT of Object.keys(TT.H))
              if (TT.H[UT].r = TT.H[UT].r || [], TT.H[UT].L = TT.H[UT].L || [], TT.H[UT].r = [...TT.H[UT].L], TT.CP)
                for (let mT = 0; mT < TT.CP.length; mT++) TT.CP[mT] = null
        }
        let Fz = null;

        function Pz(TT) {
          return Fz = Fz || function(TT) {
            return new Promise(((UT, mT) => {
              var WT, zT, MT;

              function gT() {
                sz(), gapi.load("gapi.iframes", {
                  callback: () => {
                    UT(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    sz(), mT(bT(TT, "network-request-failed"))
                  },
                  timeout: Qz.get()
                })
              }
              if (null === (zT = null === (WT = xW().gapi) || void 0 === WT ? void 0 : WT.iframes) || void 0 === zT ? void 0 : zT.Iframe) UT(gapi.iframes.getContext());
              else {
                if (!(null === (MT = xW().gapi) || void 0 === MT ? void 0 : MT.load)) {
                  const UT = xU("iframefcb");
                  return xW()[UT] = () => {
                    gapi.load ? gT() : mT(bT(TT, "network-request-failed"))
                  }, JU(`https://apis.google.com/js/api.js?onload=${UT}`).catch((TT => mT(TT)))
                }
                gT()
              }
            })).catch((TT => {
              throw Fz = null, TT
            }))
          }(TT), Fz
        }
        const Vz = new yT(5e3, 15e3),
          uz = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          Cz = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function rz(TT) {
          const UT = TT.config;
          JT(UT.authDomain, TT, "auth-domain-config-required");
          const mT = UT.emulator ? XT(UT, "emulator/auth/iframe") : `https://${TT.config.authDomain}/__/auth/iframe`,
            MT = {
              apiKey: UT.apiKey,
              appName: TT.name,
              v: zT.f
            },
            gT = Cz.get(TT.config.apiHost);
          gT && (MT.eid = gT);
          const nT = TT._getFrameworks();
          return nT.length && (MT.fw = nT.join(",")), `${mT}?${(0,WT.pb)(MT).slice(1)}`
        }
        const Kz = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class Sz {
          constructor(TT) {
            this.window = TT, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (TT) {}
          }
        }

        function Gz(TT, UT, mT) {
          let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const gT = Math.max((window.screen.availHeight - MT) / 2, 0).toString(),
            nT = Math.max((window.screen.availWidth - zT) / 2, 0).toString();
          let HT = "";
          const kT = Object.assign(Object.assign({}, Kz), {
              width: zT.toString(),
              height: MT.toString(),
              top: gT,
              left: nT
            }),
            jT = (0, WT.R)().toLowerCase();
          mT && (HT = pU(jT) ? "_blank" : mT), lU(jT) && (UT = UT || "http://localhost", kT.scrollbars = "yes");
          const lT = Object.entries(kT).reduce(((TT, UT) => {
            let [mT, WT] = UT;
            return `${TT}${mT}=${WT},`
          }), "");
          if (function() {
              var TT;
              return fU(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, WT.R)()) && !!(null === (TT = window.navigator) || void 0 === TT ? void 0 : TT.standalone)
            }(jT) && "_self" !== HT) return function(TT, UT) {
            const mT = document.createElement("a");
            mT.href = TT, mT.target = UT;
            const WT = document.createEvent("MouseEvent");
            WT.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), mT.dispatchEvent(WT)
          }(UT || "", HT), new Sz(null);
          const LT = window.open(UT || "", HT, lT);
          JT(LT, TT, "popup-blocked");
          try {
            LT.focus()
          } catch (pT) {}
          return new Sz(LT)
        }
        const Nz = "__/auth/handler",
          Ez = "emulator/auth/handler",
          hz = encodeURIComponent("fac");
        async function Dz(TT, UT, mT, MT, gT, nT) {
            JT(TT.config.authDomain, TT, "auth-domain-config-required"), JT(TT.config.apiKey, TT, "invalid-api-key");
            const HT = {
              apiKey: TT.config.apiKey,
              appName: TT.name,
              authType: mT,
              redirectUrl: MT,
              v: zT.f,
              eventId: gT
            };
            if (UT instanceof Tm) {
              UT.setDefaultLanguage(TT.languageCode), HT.providerId = UT.providerId || "", (0, WT.Z)(UT.getCustomParameters()) || (HT.customParameters = JSON.stringify(UT.getCustomParameters()));
              for (const [TT, UT] of Object.entries(nT || {})) HT[TT] = UT
            }
            if (UT instanceof Um) {
              const TT = UT.getScopes().filter((TT => "" !== TT));
              TT.length > 0 && (HT.scopes = TT.join(","))
            }
            TT.tenantId && (HT.tid = TT.tenantId);
            const kT = HT;
            for (const WT of Object.keys(kT)) void 0 === kT[WT] && delete kT[WT];
            const jT = await TT._getAppCheckToken(),
              lT = jT ? `#${hz}=${encodeURIComponent(jT)}` : "";
            return `${function(TT){let{config:UT}=TT;if(!UT.emulator)return`
            https: //${UT.authDomain}/${Nz}`;return XT(UT,Ez)}(TT)}?${(0,WT.pb)(kT).slice(1)}${lT}`}const oz="webStorageSupport";const Az=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=OW,this._completeRedirectFn=Jz,this._overrideRedirectResult=fz}async _openPopup(TT,UT,mT,WT){var zT;dT(null===(zT=this.eventManagers[TT._key()])||void 0===zT?void 0:zT.manager,"_initialize() not called before _openPopup()");return Gz(TT,await Dz(TT,UT,mT,wT(),WT),YW())}async _openRedirect(TT,UT,mT,WT){await this._originValidation(TT);return function(TT){xW().location.href=TT}(await Dz(TT,UT,mT,wT(),WT)),new Promise((()=>{}))}_initialize(TT){const UT=TT._key();if(this.eventManagers[UT]){const{manager:TT,promise:mT}=this.eventManagers[UT];return TT?Promise.resolve(TT):(dT(mT,"If manager is not set, promise should be"),mT)}const mT=this.initAndGetManager(TT);return this.eventManagers[UT]={promise:mT},mT.catch((()=>{delete this.eventManagers[UT]})),mT}async initAndGetManager(TT){const UT=await async function(TT){const UT=await Pz(TT),mT=xW().gapi;return JT(mT,TT,"internal-error"),UT.open({where:document.body,url:rz(TT),messageHandlersFilter:mT.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uz,dontclear:!0},(UT=>new Promise((async(mT,WT)=>{await UT.restyle({setHideOnLeave:!1});const zT=bT(TT,"network-request-failed"),MT=xW().setTimeout((()=>{WT(zT)}),Vz.get());function gT(){xW().clearTimeout(MT),mT(UT)}UT.ping(gT).then(gT,(()=>{WT(zT)}))}))))}(TT),mT=new dz(TT);return UT.register("authEvent",(UT=>{JT(null===UT||void 0===UT?void 0:UT.authEvent,TT,"invalid-auth-event");return{status:mT.onEvent(UT.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[TT._key()]={manager:mT},this.iframes[TT._key()]=UT,mT}_isIframeWebStorageSupported(TT,UT){this.iframes[TT._key()].send(oz,{type:oz},(mT=>{var WT;const zT=null===(WT=null===mT||void 0===mT?void 0:mT[0])||void 0===WT?void 0:WT[oz];void 0!==zT&&UT(!!zT),iT(TT,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(TT){const UT=TT._key();return this.originValidationPromises[UT]||(this.originValidationPromises[UT]=Xz(TT)),this.originValidationPromises[UT]}get _shouldInitProactively(){return qU()||LU()||fU()}};class Rz{constructor(TT){this.factorId=TT}_process(TT,UT,mT){switch(UT.type){case"enroll":return this._finalizeEnroll(TT,UT.credential,mT);case"signin":return this._finalizeSignIn(TT,UT.credential);default:return xT("unexpected MultiFactorSessionType")}}}class TM extends Rz{constructor(TT){super("phone"),this.credential=TT}static _fromCredential(TT){return new TM(TT)}_finalizeEnroll(TT,UT,mT){return function(TT,UT){return PT(TT,"POST","/v2/accounts/mfaEnrollment:finalize",FT(TT,UT))}(TT,{idToken:UT,displayName:mT,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(TT,UT){return function(TT,UT){return PT(TT,"POST","/v2/accounts/mfaSignIn:finalize",FT(TT,UT))}(TT,{mfaPendingCredential:UT,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class UM{constructor(){}static assertion(TT){return TM._fromCredential(TT)}}UM.FACTOR_ID="phone";class mM{static assertionForEnrollment(TT,UT){return WM._fromSecret(TT,UT)}static assertionForSignIn(TT,UT){return WM._fromEnrollmentId(TT,UT)}static async generateSecret(TT){const UT=TT;JT("undefined"!==typeof UT.auth,"internal-error");const mT=await(WT=UT.auth,zT={idToken:UT.credential,totpEnrollmentInfo:{}},PT(WT,"POST","/v2/accounts/mfaEnrollment:start",FT(WT,zT)));var WT,zT;return zM._fromStartTotpMfaEnrollmentResponse(mT,UT.auth)}}mM.FACTOR_ID="totp";class WM extends Rz{constructor(TT,UT,mT){super("totp"),this.otp=TT,this.enrollmentId=UT,this.secret=mT}static _fromSecret(TT,UT){return new WM(UT,void 0,TT)}static _fromEnrollmentId(TT,UT){return new WM(UT,TT)}async _finalizeEnroll(TT,UT,mT){return JT("undefined"!==typeof this.secret,TT,"argument-error"),function(TT,UT){return PT(TT,"POST","/v2/accounts/mfaEnrollment:finalize",FT(TT,UT))}(TT,{idToken:UT,displayName:mT,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(TT,UT){JT(void 0!==this.enrollmentId&&void 0!==this.otp,TT,"argument-error");const mT={verificationCode:this.otp};return function(TT,UT){return PT(TT,"POST","/v2/accounts/mfaSignIn:finalize",FT(TT,UT))}(TT,{mfaPendingCredential:UT,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:mT})}}class zM{constructor(TT,UT,mT,WT,zT,MT,gT){this.sessionInfo=MT,this.auth=gT,this.secretKey=TT,this.hashingAlgorithm=UT,this.codeLength=mT,this.codeIntervalSeconds=WT,this.enrollmentCompletionDeadline=zT}static _fromStartTotpMfaEnrollmentResponse(TT,UT){return new zM(TT.totpSessionInfo.sharedSecretKey,TT.totpSessionInfo.hashingAlgorithm,TT.totpSessionInfo.verificationCodeLength,TT.totpSessionInfo.periodSec,new Date(TT.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),TT.totpSessionInfo.sessionInfo,UT)}_makeTotpVerificationInfo(TT){return{sessionInfo:this.sessionInfo,verificationCode:TT}}generateQrCodeUrl(TT,UT){var mT;let WT=!1;return(MM(TT)||MM(UT))&&(WT=!0),WT&&(MM(TT)&&(TT=(null===(mT=this.auth.currentUser)||void 0===mT?void 0:mT.email)||"unknownuser"),MM(UT)&&(UT=this.auth.name)),`otpauth://totp/${UT}:${TT}?secret=${this.secretKey}&issuer=${UT}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function MM(TT){return"undefined"===typeof TT||0===(null===TT||void 0===TT?void 0:TT.length)}var gM="@firebase/auth",nM="0.23.2";class HM{constructor(TT){this.auth=TT,this.internalListeners=new Map}getUid(){var TT;return this.assertAuthConfigured(),(null===(TT=this.auth.currentUser)||void 0===TT?void 0:TT.uid)||null}async getToken(TT){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(TT)}}addAuthTokenListener(TT){if(this.assertAuthConfigured(),this.internalListeners.has(TT))return;const UT=this.auth.onIdTokenChanged((UT=>{TT((null===UT||void 0===UT?void 0:UT.stsTokenManager.accessToken)||null)}));this.internalListeners.set(TT,UT),this.updateProactiveRefresh()}removeAuthTokenListener(TT){this.assertAuthConfigured();const UT=this.internalListeners.get(TT);UT&&(this.internalListeners.delete(TT),UT(),this.updateProactiveRefresh())}assertAuthConfigured(){JT(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const kM=(0,WT.N)("authIdTokenMaxAge")||300;let jM=null;const lM=TT=>async UT=>{const mT=UT&&await UT.getIdTokenResult(),WT=mT&&((new Date).getTime()-Date.parse(mT.issuedAtTime))/1e3;if(WT&&WT>kM)return;const zT=null===mT||void 0===mT?void 0:mT.token;jM!==zT&&(jM=zT,await fetch(TT,{method:zT?"POST":"DELETE",headers:zT?{Authorization:`Bearer ${zT}`}:{}}))};function LM(){let TT=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,zT.I)();const UT=(0,zT.B)(TT,"auth");if(UT.isInitialized())return UT.getImmediate();const mT=IU(TT,{popupRedirectResolver:Az,persistence:[PW,iW,OW]}),MT=(0,WT.N)("authTokenSyncURL");if(MT){const TT=lM(MT);MW(mT,TT,(()=>TT(mT.currentUser))),zW(mT,(UT=>TT(UT)))}const gT=(0,WT.K)("auth");return gT&&QU(mT,`http://${gT}`),mT}var pM;pM="Browser",(0,zT.D)(new nT.g("auth",((TT,UT)=>{let{options:mT}=UT;const WT=TT.getProvider("app").getImmediate(),zT=TT.getProvider("heartbeat"),MT=TT.getProvider("app-check-internal"),{apiKey:gT,authDomain:nT}=WT.options;JT(gT&&!gT.includes(":"),"invalid-api-key",{appName:WT.name});const HT={apiKey:gT,authDomain:nT,clientPlatform:pM,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iU(pM)},kT=new aU(WT,zT,MT,HT);return function(TT,UT){const mT=(null===UT||void 0===UT?void 0:UT.persistence)||[],WT=(Array.isArray(mT)?mT:[mT]).map(MU);(null===UT||void 0===UT?void 0:UT.errorMap)&&TT._updateErrorMap(UT.errorMap),TT._initializeWithPersistence(WT,null===UT||void 0===UT?void 0:UT.popupRedirectResolver)}(kT,mT),kT}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((TT,UT,mT)=>{TT.getProvider("auth-internal").initialize()}))),(0,zT.D)(new nT.g("auth-internal",(TT=>(TT=>new HM(TT))(yU(TT.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,zT.N)(gM,nM,function(TT){switch(TT){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(pM)),(0,zT.N)(gM,nM,"esm2017")}};Object.freeze(modules);for(const TT in modules)Object.freeze(modules[TT]);