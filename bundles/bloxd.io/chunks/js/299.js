/*! For license information please see u88b9b.299.a80c7691.chunk.js.LICENSE.txt */
export const id = 299;
export const ids = [299];
export const modules = {
    41654: (ee, ie, He) => {
        He.r(ie), He.d(ie, {
          ActionCodeOperation: () => ke,
          ActionCodeURL: () => Qi,
          AuthCredential: () => vi,
          AuthErrorCodes: () => Xe,
          EmailAuthCredential: () => si,
          EmailAuthProvider: () => iH,
          FacebookAuthProvider: () => MH,
          FactorId: () => Fe,
          GithubAuthProvider: () => UH,
          GoogleAuthProvider: () => KH,
          OAuthCredential: () => Ni,
          OAuthProvider: () => bH,
          OperationType: () => Re,
          PhoneAuthCredential: () => ri,
          PhoneAuthProvider: () => yb,
          PhoneMultiFactorGenerator: () => HM,
          ProviderId: () => Je,
          RecaptchaVerifier: () => Ny,
          SAMLAuthProvider: () => JH,
          SignInMethod: () => oe,
          TotpMultiFactorGenerator: () => yM,
          TotpSecret: () => MM,
          TwitterAuthProvider: () => oH,
          applyActionCode: () => aH,
          beforeAuthStateChanged: () => Ky,
          browserLocalPersistence: () => gy,
          browserPopupRedirectResolver: () => Qb,
          browserSessionPersistence: () => dy,
          checkActionCode: () => cH,
          confirmPasswordReset: () => VH,
          connectAuthEmulator: () => xi,
          createUserWithEmailAndPassword: () => LH,
          debugErrorMap: () => fe,
          deleteUser: () => Ry,
          fetchSignInMethodsForEmail: () => lH,
          getAdditionalUserInfo: () => Hy,
          getAuth: () => qM,
          getIdToken: () => je,
          getIdTokenResult: () => se,
          getMultiFactorResolver: () => fy,
          getRedirectResult: () => tb,
          inMemoryPersistence: () => Ui,
          indexedDBLocalPersistence: () => vy,
          initializeAuth: () => ci,
          initializeRecaptchaConfig: () => by,
          isSignInWithEmailLink: () => uH,
          linkWithCredential: () => WH,
          linkWithPhoneNumber: () => Qy,
          linkWithPopup: () => qb,
          linkWithRedirect: () => Wb,
          multiFactor: () => Xy,
          onAuthStateChanged: () => Uy,
          onIdTokenChanged: () => My,
          parseActionCodeURL: () => eH,
          prodErrorMap: () => Te,
          reauthenticateWithCredential: () => tH,
          reauthenticateWithPhoneNumber: () => eb,
          reauthenticateWithPopup: () => kb,
          reauthenticateWithRedirect: () => db,
          reload: () => ei,
          sendEmailVerification: () => SH,
          sendPasswordResetEmail: () => YH,
          sendSignInLinkToEmail: () => vH,
          setPersistence: () => yy,
          signInAnonymously: () => fH,
          signInWithCredential: () => dH,
          signInWithCustomToken: () => ZH,
          signInWithEmailAndPassword: () => CH,
          signInWithEmailLink: () => mH,
          signInWithPhoneNumber: () => ry,
          signInWithPopup: () => Rb,
          signInWithRedirect: () => Ob,
          signOut: () => oy,
          unlink: () => zH,
          updateCurrentUser: () => Jy,
          updateEmail: () => sH,
          updatePassword: () => IH,
          updatePhoneNumber: () => Hb,
          updateProfile: () => jH,
          useDeviceLanguage: () => Fy,
          verifyBeforeUpdateEmail: () => nH,
          verifyPasswordResetCode: () => xH
        });
        var ye = He(41632),
          be = He(41625);

        function Me(ee, ie) {
          var He = {};
          for (var ye in ee) Object.prototype.hasOwnProperty.call(ee, ye) && ie.indexOf(ye) < 0 && (He[ye] = ee[ye]);
          if (null != ee && "function" === typeof Object.getOwnPropertySymbols) {
            var be = 0;
            for (ye = Object.getOwnPropertySymbols(ee); be < ye.length; be++) ie.indexOf(ye[be]) < 0 && Object.prototype.propertyIsEnumerable.call(ee, ye[be]) && (He[ye[be]] = ee[ye[be]])
          }
          return He
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var Ke = He(41640),
          Ue = He(41628);
        const Fe = {
            PHONE: "phone",
            TOTP: "totp"
          },
          Je = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          oe = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Re = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          ke = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function qe() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const fe = function() {
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
          Te = qe,
          pe = new ye.h("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          Xe = {
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
          ze = new Ke.e("@firebase/auth");

        function Be(ee) {
          if (ze.logLevel <= Ke.d.ERROR) {
            for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
            ze.error(`Auth (${be.d}): ${ee}`, ...He)
          }
        }

        function Ee(ee) {
          for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
          throw We(ee, ...He)
        }

        function ge(ee) {
          for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
          return We(ee, ...He)
        }

        function Oe(ee, ie, He) {
          const be = Object.assign(Object.assign({}, Te()), {
            [ie]: He
          });
          return new ye.h("auth", "Firebase", be).create(ie, {
            appName: ee.name
          })
        }

        function de(ee, ie, He) {
          if (!(ie instanceof He)) throw He.name !== ie.constructor.name && Ee(ee, "argument-error"), Oe(ee, "argument-error", `Type of ${ie.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function We(ee) {
          for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
          if ("string" !== typeof ee) {
            const ie = He[0],
              ye = [...He.slice(1)];
            return ye[0] && (ye[0].appName = ee.name), ee._errorFactory.create(ie, ...ye)
          }
          return pe.create(ee, ...He)
        }

        function te(ee, ie) {
          if (!ee) {
            for (var He = arguments.length, ye = new Array(He > 2 ? He - 2 : 0), be = 2; be < He; be++) ye[be - 2] = arguments[be];
            throw We(ie, ...ye)
          }
        }

        function Ze(ee) {
          const ie = "INTERNAL ASSERTION FAILED: " + ee;
          throw Be(ie), new Error(ie)
        }

        function we(ee, ie) {
          ee || Ze(ie)
        }

        function De() {
          var ee;
          return "undefined" !== typeof self && (null === (ee = self.location) || void 0 === ee ? void 0 : ee.href) || ""
        }

        function Pe() {
          return "http:" === Ae() || "https:" === Ae()
        }

        function Ae() {
          var ee;
          return "undefined" !== typeof self && (null === (ee = self.location) || void 0 === ee ? void 0 : ee.protocol) || null
        }
        class Ye {
          constructor(ee, ie) {
            this.shortDelay = ee, this.longDelay = ie, we(ie > ee, "Short delay should be less than long delay!"), this.isMobile = (0, ye.W)() || (0, ye.Y)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (Pe() || (0, ye.O)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function Ve(ee, ie) {
          we(ee.emulator, "Emulator should always be set here");
          const {
            url: He
          } = ee.emulator;
          return ie ? `${He}${ie.startsWith("/")?ie.slice(1):ie}` : He
        }
        class ae {
          static initialize(ee, ie, He) {
            this.fetchImpl = ee, ie && (this.headersImpl = ie), He && (this.responseImpl = He)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const ce = {
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
          xe = new Ye(3e4, 6e4);

        function Le(ee, ie) {
          return ee.tenantId && !ie.tenantId ? Object.assign(Object.assign({}, ie), {
            tenantId: ee.tenantId
          }) : ie
        }
        async function Ce(ee, ie, He, be) {
          return ve(ee, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let Me = {},
              Ke = {};
            be && ("GET" === ie ? Ke = be : Me = {
              body: JSON.stringify(be)
            });
            const Ue = (0, ye.cb)(Object.assign({
                key: ee.config.apiKey
              }, Ke)).slice(1),
              Fe = await ee._getAdditionalHeaders();
            return Fe["Content-Type"] = "application/json", ee.languageCode && (Fe["X-Firebase-Locale"] = ee.languageCode), ae.fetch()(me(ee, ee.config.apiHost, He, Ue), Object.assign({
              method: ie,
              headers: Fe,
              referrerPolicy: "no-referrer"
            }, Me))
          }))
        }
        async function ve(ee, ie, He) {
          ee._canInitEmulator = !1;
          const be = Object.assign(Object.assign({}, ce), ie);
          try {
            const ie = new le(ee),
              ye = await Promise.race([He(), ie.promise]);
            ie.clearNetworkTimeout();
            const Me = await ye.json();
            if ("needConfirmation" in Me) throw Se(ee, "account-exists-with-different-credential", Me);
            if (ye.ok && !("errorMessage" in Me)) return Me;
            {
              const ie = ye.ok ? Me.errorMessage : Me.error.message,
                [He, Ke] = ie.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === He) throw Se(ee, "credential-already-in-use", Me);
              if ("EMAIL_EXISTS" === He) throw Se(ee, "email-already-in-use", Me);
              if ("USER_DISABLED" === He) throw Se(ee, "user-disabled", Me);
              const Ue = be[He] || He.toLowerCase().replace(/[_\s]+/g, "-");
              if (Ke) throw Oe(ee, Ue, Ke);
              Ee(ee, Ue)
            }
          } catch (Me) {
            if (Me instanceof ye.k) throw Me;
            Ee(ee, "network-request-failed", {
              message: String(Me)
            })
          }
        }
        async function ue(ee, ie, He, ye) {
          let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const Me = await Ce(ee, ie, He, ye, be);
          return "mfaPendingCredential" in Me && Ee(ee, "multi-factor-auth-required", {
            _serverResponse: Me
          }), Me
        }

        function me(ee, ie, He, ye) {
          const be = `${ie}${He}?${ye}`;
          return ee.config.emulator ? Ve(ee.config, be) : `${ee.config.apiScheme}://${be}`
        }
        class le {
          constructor(ee) {
            this.auth = ee, this.timer = null, this.promise = new Promise(((ee, ie) => {
              this.timer = setTimeout((() => ie(ge(this.auth, "network-request-failed"))), xe.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function Se(ee, ie, He) {
          const ye = {
            appName: ee.name
          };
          He.email && (ye.email = He.email), He.phoneNumber && (ye.phoneNumber = He.phoneNumber);
          const be = ge(ee, ie, ye);
          return be.customData._tokenResponse = He, be
        }

        function ne(ee) {
          if (ee) try {
            const ie = new Date(Number(ee));
            if (!isNaN(ie.getTime())) return ie.toUTCString()
          } catch (ie) {}
        }

        function je(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, ye.I)(ee).getIdToken(ie)
        }
        async function se(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const He = (0, ye.I)(ee),
            be = await He.getIdToken(ie),
            Me = he(be);
          te(Me && Me.exp && Me.auth_time && Me.iat, He.auth, "internal-error");
          const Ke = "object" === typeof Me.firebase ? Me.firebase : void 0,
            Ue = null === Ke || void 0 === Ke ? void 0 : Ke.sign_in_provider;
          return {
            claims: Me,
            token: be,
            authTime: ne(Ie(Me.auth_time)),
            issuedAtTime: ne(Ie(Me.iat)),
            expirationTime: ne(Ie(Me.exp)),
            signInProvider: Ue || null,
            signInSecondFactor: (null === Ke || void 0 === Ke ? void 0 : Ke.sign_in_second_factor) || null
          }
        }

        function Ie(ee) {
          return 1e3 * Number(ee)
        }

        function he(ee) {
          const [ie, He, be] = ee.split(".");
          if (void 0 === ie || void 0 === He || void 0 === be) return Be("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const ee = (0, ye.n)(He);
            return ee ? JSON.parse(ee) : (Be("Failed to decode base64 JWT payload"), null)
          } catch (Me) {
            return Be("Caught error parsing JWT payload as JSON", null === Me || void 0 === Me ? void 0 : Me.toString()), null
          }
        }
        async function Ne(ee, ie) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return ie;
          try {
            return await ie
          } catch (He) {
            throw He instanceof ye.k && function(ee) {
              let {
                code: ie
              } = ee;
              return "auth/user-disabled" === ie || "auth/user-token-expired" === ie
            }(He) && ee.auth.currentUser === ee && await ee.auth.signOut(), He
          }
        }
        class Ge {
          constructor(ee) {
            this.user = ee, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(ee) {
            var ie;
            if (ee) {
              const ee = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), ee
            } {
              this.errorBackoff = 3e4;
              const ee = (null !== (ie = this.user.stsTokenManager.expirationTime) && void 0 !== ie ? ie : 0) - Date.now() - 3e5;
              return Math.max(0, ee)
            }
          }
          schedule() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const ie = this.getInterval(ee);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), ie)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (ee) {
              return void("auth/network-request-failed" === (null === ee || void 0 === ee ? void 0 : ee.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class re {
          constructor(ee, ie) {
            this.createdAt = ee, this.lastLoginAt = ie, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = ne(this.lastLoginAt), this.creationTime = ne(this.createdAt)
          }
          _copy(ee) {
            this.createdAt = ee.createdAt, this.lastLoginAt = ee.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function Qe(ee) {
          var ie;
          const He = ee.auth,
            ye = await ee.getIdToken(),
            be = await Ne(ee, async function(ee, ie) {
              return Ce(ee, "POST", "/v1/accounts:lookup", ie)
            }(He, {
              idToken: ye
            }));
          te(null === be || void 0 === be ? void 0 : be.users.length, He, "internal-error");
          const Ke = be.users[0];
          ee._notifyReloadListener(Ke);
          const Ue = (null === (ie = Ke.providerUserInfo) || void 0 === ie ? void 0 : ie.length) ? Ke.providerUserInfo.map((ee => {
            var {
              providerId: ie
            } = ee, He = Me(ee, ["providerId"]);
            return {
              providerId: ie,
              uid: He.rawId || "",
              displayName: He.displayName || null,
              email: He.email || null,
              phoneNumber: He.phoneNumber || null,
              photoURL: He.photoUrl || null
            }
          })) : [];
          const Fe = (Je = ee.providerData, oe = Ue, [...Je.filter((ee => !oe.some((ie => ie.providerId === ee.providerId)))), ...oe]);
          var Je, oe;
          const Re = ee.isAnonymous,
            ke = !(ee.email && Ke.passwordHash) && !(null === Fe || void 0 === Fe ? void 0 : Fe.length),
            qe = !!Re && ke,
            fe = {
              uid: Ke.localId,
              displayName: Ke.displayName || null,
              photoURL: Ke.photoUrl || null,
              email: Ke.email || null,
              emailVerified: Ke.emailVerified || !1,
              phoneNumber: Ke.phoneNumber || null,
              tenantId: Ke.tenantId || null,
              providerData: Fe,
              metadata: new re(Ke.createdAt, Ke.lastLoginAt),
              isAnonymous: qe
            };
          Object.assign(ee, fe)
        }
        async function ei(ee) {
          const ie = (0, ye.I)(ee);
          await Qe(ie), await ie.auth._persistUserIfCurrent(ie), ie.auth._notifyListenersIfCurrent(ie)
        }
        class ii {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(ee) {
            te(ee.idToken, "internal-error"), te("undefined" !== typeof ee.idToken, "internal-error"), te("undefined" !== typeof ee.refreshToken, "internal-error");
            const ie = "expiresIn" in ee && "undefined" !== typeof ee.expiresIn ? Number(ee.expiresIn) : function(ee) {
              const ie = he(ee);
              return te(ie, "internal-error"), te("undefined" !== typeof ie.exp, "internal-error"), te("undefined" !== typeof ie.iat, "internal-error"), Number(ie.exp) - Number(ie.iat)
            }(ee.idToken);
            this.updateTokensAndExpiration(ee.idToken, ee.refreshToken, ie)
          }
          async getToken(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return te(!this.accessToken || this.refreshToken, ee, "user-token-expired"), ie || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(ee, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(ee, ie) {
            const {
              accessToken: He,
              refreshToken: be,
              expiresIn: Me
            } = await async function(ee, ie) {
              const He = await ve(ee, {}, (async () => {
                const He = (0, ye.cb)({
                    grant_type: "refresh_token",
                    refresh_token: ie
                  }).slice(1),
                  {
                    tokenApiHost: be,
                    apiKey: Me
                  } = ee.config,
                  Ke = me(ee, be, "/v1/token", `key=${Me}`),
                  Ue = await ee._getAdditionalHeaders();
                return Ue["Content-Type"] = "application/x-www-form-urlencoded", ae.fetch()(Ke, {
                  method: "POST",
                  headers: Ue,
                  body: He
                })
              }));
              return {
                accessToken: He.access_token,
                expiresIn: He.expires_in,
                refreshToken: He.refresh_token
              }
            }(ee, ie);
            this.updateTokensAndExpiration(He, be, Number(Me))
          }
          updateTokensAndExpiration(ee, ie, He) {
            this.refreshToken = ie || null, this.accessToken = ee || null, this.expirationTime = Date.now() + 1e3 * He
          }
          static fromJSON(ee, ie) {
            const {
              refreshToken: He,
              accessToken: ye,
              expirationTime: be
            } = ie, Me = new ii;
            return He && (te("string" === typeof He, "internal-error", {
              appName: ee
            }), Me.refreshToken = He), ye && (te("string" === typeof ye, "internal-error", {
              appName: ee
            }), Me.accessToken = ye), be && (te("number" === typeof be, "internal-error", {
              appName: ee
            }), Me.expirationTime = be), Me
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(ee) {
            this.accessToken = ee.accessToken, this.refreshToken = ee.refreshToken, this.expirationTime = ee.expirationTime
          }
          _clone() {
            return Object.assign(new ii, this.toJSON())
          }
          _performRefresh() {
            return Ze("not implemented")
          }
        }

        function Hi(ee, ie) {
          te("string" === typeof ee || "undefined" === typeof ee, "internal-error", {
            appName: ie
          })
        }
        class yi {
          constructor(ee) {
            var {
              uid: ie,
              auth: He,
              stsTokenManager: ye
            } = ee, be = Me(ee, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new Ge(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = ie, this.auth = He, this.stsTokenManager = ye, this.accessToken = ye.accessToken, this.displayName = be.displayName || null, this.email = be.email || null, this.emailVerified = be.emailVerified || !1, this.phoneNumber = be.phoneNumber || null, this.photoURL = be.photoURL || null, this.isAnonymous = be.isAnonymous || !1, this.tenantId = be.tenantId || null, this.providerData = be.providerData ? [...be.providerData] : [], this.metadata = new re(be.createdAt || void 0, be.lastLoginAt || void 0)
          }
          async getIdToken(ee) {
            const ie = await Ne(this, this.stsTokenManager.getToken(this.auth, ee));
            return te(ie, this.auth, "internal-error"), this.accessToken !== ie && (this.accessToken = ie, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), ie
          }
          getIdTokenResult(ee) {
            return se(this, ee)
          }
          reload() {
            return ei(this)
          }
          _assign(ee) {
            this !== ee && (te(this.uid === ee.uid, this.auth, "internal-error"), this.displayName = ee.displayName, this.photoURL = ee.photoURL, this.email = ee.email, this.emailVerified = ee.emailVerified, this.phoneNumber = ee.phoneNumber, this.isAnonymous = ee.isAnonymous, this.tenantId = ee.tenantId, this.providerData = ee.providerData.map((ee => Object.assign({}, ee))), this.metadata._copy(ee.metadata), this.stsTokenManager._assign(ee.stsTokenManager))
          }
          _clone(ee) {
            const ie = new yi(Object.assign(Object.assign({}, this), {
              auth: ee,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return ie.metadata._copy(this.metadata), ie
          }
          _onReload(ee) {
            te(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = ee, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(ee) {
            this.reloadListener ? this.reloadListener(ee) : this.reloadUserInfo = ee
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              He = !1;
            ee.idToken && ee.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(ee), He = !0), ie && await Qe(this), await this.auth._persistUserIfCurrent(this), He && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const ee = await this.getIdToken();
            return await Ne(this, async function(ee, ie) {
              return Ce(ee, "POST", "/v1/accounts:delete", ie)
            }(this.auth, {
              idToken: ee
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
              providerData: this.providerData.map((ee => Object.assign({}, ee))),
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
          static _fromJSON(ee, ie) {
            var He, ye, be, Me, Ke, Ue, Fe, Je;
            const oe = null !== (He = ie.displayName) && void 0 !== He ? He : void 0,
              Re = null !== (ye = ie.email) && void 0 !== ye ? ye : void 0,
              ke = null !== (be = ie.phoneNumber) && void 0 !== be ? be : void 0,
              qe = null !== (Me = ie.photoURL) && void 0 !== Me ? Me : void 0,
              fe = null !== (Ke = ie.tenantId) && void 0 !== Ke ? Ke : void 0,
              Te = null !== (Ue = ie._redirectEventId) && void 0 !== Ue ? Ue : void 0,
              pe = null !== (Fe = ie.createdAt) && void 0 !== Fe ? Fe : void 0,
              Xe = null !== (Je = ie.lastLoginAt) && void 0 !== Je ? Je : void 0,
              {
                uid: ze,
                emailVerified: Be,
                isAnonymous: Ee,
                providerData: ge,
                stsTokenManager: Oe
              } = ie;
            te(ze && Oe, ee, "internal-error");
            const de = ii.fromJSON(this.name, Oe);
            te("string" === typeof ze, ee, "internal-error"), Hi(oe, ee.name), Hi(Re, ee.name), te("boolean" === typeof Be, ee, "internal-error"), te("boolean" === typeof Ee, ee, "internal-error"), Hi(ke, ee.name), Hi(qe, ee.name), Hi(fe, ee.name), Hi(Te, ee.name), Hi(pe, ee.name), Hi(Xe, ee.name);
            const We = new yi({
              uid: ze,
              auth: ee,
              email: Re,
              emailVerified: Be,
              displayName: oe,
              isAnonymous: Ee,
              photoURL: qe,
              phoneNumber: ke,
              tenantId: fe,
              stsTokenManager: de,
              createdAt: pe,
              lastLoginAt: Xe
            });
            return ge && Array.isArray(ge) && (We.providerData = ge.map((ee => Object.assign({}, ee)))), Te && (We._redirectEventId = Te), We
          }
          static async _fromIdTokenResponse(ee, ie) {
            let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const ye = new ii;
            ye.updateFromServerResponse(ie);
            const be = new yi({
              uid: ie.localId,
              auth: ee,
              stsTokenManager: ye,
              isAnonymous: He
            });
            return await Qe(be), be
          }
        }
        const bi = new Map;

        function Mi(ee) {
          we(ee instanceof Function, "Expected a class definition");
          let ie = bi.get(ee);
          return ie ? (we(ie instanceof ee, "Instance stored in cache mismatched with class"), ie) : (ie = new ee, bi.set(ee, ie), ie)
        }
        class Ki {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(ee, ie) {
            this.storage[ee] = ie
          }
          async _get(ee) {
            const ie = this.storage[ee];
            return void 0 === ie ? null : ie
          }
          async _remove(ee) {
            delete this.storage[ee]
          }
          _addListener(ee, ie) {}
          _removeListener(ee, ie) {}
        }
        Ki.type = "NONE";
        const Ui = Ki;

        function Fi(ee, ie, He) {
          return `firebase:${ee}:${ie}:${He}`
        }
        class Ji {
          constructor(ee, ie, He) {
            this.persistence = ee, this.auth = ie, this.userKey = He;
            const {
              config: ye,
              name: be
            } = this.auth;
            this.fullUserKey = Fi(this.userKey, ye.apiKey, be), this.fullPersistenceKey = Fi("persistence", ye.apiKey, be), this.boundEventHandler = ie._onStorageEvent.bind(ie), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(ee) {
            return this.persistence._set(this.fullUserKey, ee.toJSON())
          }
          async getCurrentUser() {
            const ee = await this.persistence._get(this.fullUserKey);
            return ee ? yi._fromJSON(this.auth, ee) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(ee) {
            if (this.persistence === ee) return;
            const ie = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = ee, ie ? this.setCurrentUser(ie) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(ee, ie) {
            let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!ie.length) return new Ji(Mi(Ui), ee, He);
            const ye = (await Promise.all(ie.map((async ee => {
              if (await ee._isAvailable()) return ee
            })))).filter((ee => ee));
            let be = ye[0] || Mi(Ui);
            const Me = Fi(He, ee.config.apiKey, ee.name);
            let Ke = null;
            for (const Je of ie) try {
              const ie = await Je._get(Me);
              if (ie) {
                const He = yi._fromJSON(ee, ie);
                Je !== be && (Ke = He), be = Je;
                break
              }
            } catch (Fe) {}
            const Ue = ye.filter((ee => ee._shouldAllowMigration));
            return be._shouldAllowMigration && Ue.length ? (be = Ue[0], Ke && await be._set(Me, Ke.toJSON()), await Promise.all(ie.map((async ee => {
              if (ee !== be) try {
                await ee._remove(Me)
              } catch (Fe) {}
            }))), new Ji(be, ee, He)) : new Ji(be, ee, He)
          }
        }

        function oi(ee) {
          const ie = ee.toLowerCase();
          if (ie.includes("opera/") || ie.includes("opr/") || ie.includes("opios/")) return "Opera";
          if (fi(ie)) return "IEMobile";
          if (ie.includes("msie") || ie.includes("trident/")) return "IE";
          if (ie.includes("edge/")) return "Edge";
          if (Ri(ie)) return "Firefox";
          if (ie.includes("silk/")) return "Silk";
          if (Xi(ie)) return "Blackberry";
          if (zi(ie)) return "Webos";
          if (ki(ie)) return "Safari";
          if ((ie.includes("chrome/") || qi(ie)) && !ie.includes("edge/")) return "Chrome";
          if (Ti(ie)) return "Android";
          {
            const ie = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              He = ee.match(ie);
            if (2 === (null === He || void 0 === He ? void 0 : He.length)) return He[1]
          }
          return "Other"
        }

        function Ri() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ye.M)();
          return /firefox\//i.test(ee)
        }

        function ki() {
          const ee = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ye.M)()).toLowerCase();
          return ee.includes("safari/") && !ee.includes("chrome/") && !ee.includes("crios/") && !ee.includes("android")
        }

        function qi() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ye.M)();
          return /crios\//i.test(ee)
        }

        function fi() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ye.M)();
          return /iemobile/i.test(ee)
        }

        function Ti() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ye.M)();
          return /android/i.test(ee)
        }

        function Xi() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ye.M)();
          return /blackberry/i.test(ee)
        }

        function zi() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ye.M)();
          return /webos/i.test(ee)
        }

        function Bi() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ye.M)();
          return /iphone|ipad|ipod/i.test(ee) || /macintosh/i.test(ee) && /mobile/i.test(ee)
        }

        function Ei() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ye.M)();
          return Bi(ee) || Ti(ee) || zi(ee) || Xi(ee) || /windows phone/i.test(ee) || fi(ee)
        }

        function gi(ee) {
          let ie, He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (ee) {
            case "Browser":
              ie = oi((0, ye.M)());
              break;
            case "Worker":
              ie = `${oi((0,ye.M)())}-${ee}`;
              break;
            default:
              ie = ee
          }
          const Me = He.length ? He.join(",") : "FirebaseCore-web";
          return `${ie}/JsCore/${be.d}/${Me}`
        }
        async function Oi(ee, ie) {
          return Ce(ee, "GET", "/v2/recaptchaConfig", Le(ee, ie))
        }

        function di(ee) {
          return void 0 !== ee && void 0 !== ee.getResponse
        }

        function Wi(ee) {
          return void 0 !== ee && void 0 !== ee.enterprise
        }
        class ti {
          constructor(ee) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === ee.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = ee.recaptchaKey.split("/")[3], this.emailPasswordEnabled = ee.recaptchaEnforcementState.some((ee => "EMAIL_PASSWORD_PROVIDER" === ee.provider && "OFF" !== ee.enforcementState))
          }
        }

        function Zi(ee) {
          return new Promise(((ie, He) => {
            const ye = document.createElement("script");
            ye.setAttribute("src", ee), ye.onload = ie, ye.onerror = ee => {
                const ie = ge("internal-error");
                ie.customData = ee, He(ie)
              }, ye.type = "text/javascript", ye.charset = "UTF-8",
              function() {
                var ee, ie;
                return null !== (ie = null === (ee = document.getElementsByTagName("head")) || void 0 === ee ? void 0 : ee[0]) && void 0 !== ie ? ie : document
              }().appendChild(ye)
          }))
        }

        function wi(ee) {
          return `__${ee}${Math.floor(1e6*Math.random())}`
        }
        class Di {
          constructor(ee) {
            this.type = "recaptcha-enterprise", this.auth = Vi(ee)
          }
          async verify() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function He(ie, He, ye) {
              const be = window.grecaptcha;
              Wi(be) ? be.enterprise.ready((() => {
                be.enterprise.execute(ie, {
                  action: ee
                }).then((ee => {
                  He(ee)
                })).catch((() => {
                  He("NO_RECAPTCHA")
                }))
              })) : ye(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((ee, ye) => {
              (async function(ee) {
                if (!ie) {
                  if (null == ee.tenantId && null != ee._agentRecaptchaConfig) return ee._agentRecaptchaConfig.siteKey;
                  if (null != ee.tenantId && void 0 !== ee._tenantRecaptchaConfigs[ee.tenantId]) return ee._tenantRecaptchaConfigs[ee.tenantId].siteKey
                }
                return new Promise((async (ie, He) => {
                  Oi(ee, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((ye => {
                    if (void 0 !== ye.recaptchaKey) {
                      const He = new ti(ye);
                      return null == ee.tenantId ? ee._agentRecaptchaConfig = He : ee._tenantRecaptchaConfigs[ee.tenantId] = He, ie(He.siteKey)
                    }
                    He(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((ee => {
                    He(ee)
                  }))
                }))
              })(this.auth).then((be => {
                if (!ie && Wi(window.grecaptcha)) He(be, ee, ye);
                else {
                  if ("undefined" === typeof window) return void ye(new Error("RecaptchaVerifier is only supported in browser"));
                  Zi("https://www.google.com/recaptcha/enterprise.js?render=" + be).then((() => {
                    He(be, ee, ye)
                  })).catch((ee => {
                    ye(ee)
                  }))
                }
              })).catch((ee => {
                ye(ee)
              }))
            }))
          }
        }
        async function Pi(ee, ie, He) {
          let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const be = new Di(ee);
          let Me;
          try {
            Me = await be.verify(He)
          } catch (Ue) {
            Me = await be.verify(He, !0)
          }
          const Ke = Object.assign({}, ie);
          return ye ? Object.assign(Ke, {
            captchaResp: Me
          }) : Object.assign(Ke, {
            captchaResponse: Me
          }), Object.assign(Ke, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(Ke, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), Ke
        }
        class Ai {
          constructor(ee) {
            this.auth = ee, this.queue = []
          }
          pushCallback(ee, ie) {
            const He = ie => new Promise(((He, ye) => {
              try {
                He(ee(ie))
              } catch (be) {
                ye(be)
              }
            }));
            He.onAbort = ie, this.queue.push(He);
            const ye = this.queue.length - 1;
            return () => {
              this.queue[ye] = () => Promise.resolve()
            }
          }
          async runMiddleware(ee) {
            if (this.auth.currentUser === ee) return;
            const ie = [];
            try {
              for (const He of this.queue) await He(ee), He.onAbort && ie.push(He.onAbort)
            } catch (He) {
              ie.reverse();
              for (const ee of ie) try {
                ee()
              } catch (ye) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === He || void 0 === He ? void 0 : He.message
              })
            }
          }
        }
        class Yi {
          constructor(ee, ie, He, ye) {
            this.app = ee, this.heartbeatServiceProvider = ie, this.appCheckServiceProvider = He, this.config = ye, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new ai(this), this.idTokenSubscription = new ai(this), this.beforeStateQueue = new Ai(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = pe, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = ee.name, this.clientVersion = ye.sdkClientVersion
          }
          _initializeWithPersistence(ee, ie) {
            return ie && (this._popupRedirectResolver = Mi(ie)), this._initializationPromise = this.queue((async () => {
              var He, ye;
              if (!this._deleted && (this.persistenceManager = await Ji.create(this, ee), !this._deleted)) {
                if (null === (He = this._popupRedirectResolver) || void 0 === He ? void 0 : He._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (be) {}
                await this.initializeCurrentUser(ie), this.lastNotifiedUid = (null === (ye = this.currentUser) || void 0 === ye ? void 0 : ye.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const ee = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || ee ? this.currentUser && ee && this.currentUser.uid === ee.uid ? (this._currentUser._assign(ee), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(ee, !0) : void 0
          }
          async initializeCurrentUser(ee) {
            var ie;
            const He = await this.assertedPersistence.getCurrentUser();
            let ye = He,
              be = !1;
            if (ee && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const He = null === (ie = this.redirectUser) || void 0 === ie ? void 0 : ie._redirectEventId,
                Me = null === ye || void 0 === ye ? void 0 : ye._redirectEventId,
                Ke = await this.tryRedirectSignIn(ee);
              He && He !== Me || !(null === Ke || void 0 === Ke ? void 0 : Ke.user) || (ye = Ke.user, be = !0)
            }
            if (!ye) return this.directlySetCurrentUser(null);
            if (!ye._redirectEventId) {
              if (be) try {
                await this.beforeStateQueue.runMiddleware(ye)
              } catch (Me) {
                ye = He, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(Me)))
              }
              return ye ? this.reloadAndSetCurrentUserOrClear(ye) : this.directlySetCurrentUser(null)
            }
            return te(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === ye._redirectEventId ? this.directlySetCurrentUser(ye) : this.reloadAndSetCurrentUserOrClear(ye)
          }
          async tryRedirectSignIn(ee) {
            let ie = null;
            try {
              ie = await this._popupRedirectResolver._completeRedirectFn(this, ee, !0)
            } catch (He) {
              await this._setRedirectUser(null)
            }
            return ie
          }
          async reloadAndSetCurrentUserOrClear(ee) {
            try {
              await Qe(ee)
            } catch (ie) {
              if ("auth/network-request-failed" !== (null === ie || void 0 === ie ? void 0 : ie.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(ee)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const ee = navigator;
              return ee.languages && ee.languages[0] || ee.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(ee) {
            const ie = ee ? (0, ye.I)(ee) : null;
            return ie && te(ie.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(ie && ie._clone(this))
          }
          async _updateCurrentUser(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return ee && te(this.tenantId === ee.tenantId, this, "tenant-id-mismatch"), ie || await this.beforeStateQueue.runMiddleware(ee), this.queue((async () => {
              await this.directlySetCurrentUser(ee), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(ee) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(Mi(ee))
            }))
          }
          async initializeRecaptchaConfig() {
            const ee = await Oi(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              ie = new ti(ee);
            if (null == this.tenantId ? this._agentRecaptchaConfig = ie : this._tenantRecaptchaConfigs[this.tenantId] = ie, ie.emailPasswordEnabled) {
              new Di(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(ee) {
            this._errorFactory = new ye.h("auth", "Firebase", ee())
          }
          onAuthStateChanged(ee, ie, He) {
            return this.registerStateListener(this.authStateSubscription, ee, ie, He)
          }
          beforeAuthStateChanged(ee, ie) {
            return this.beforeStateQueue.pushCallback(ee, ie)
          }
          onIdTokenChanged(ee, ie, He) {
            return this.registerStateListener(this.idTokenSubscription, ee, ie, He)
          }
          toJSON() {
            var ee;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (ee = this._currentUser) || void 0 === ee ? void 0 : ee.toJSON()
            }
          }
          async _setRedirectUser(ee, ie) {
            const He = await this.getOrInitRedirectPersistenceManager(ie);
            return null === ee ? He.removeCurrentUser() : He.setCurrentUser(ee)
          }
          async getOrInitRedirectPersistenceManager(ee) {
            if (!this.redirectPersistenceManager) {
              const ie = ee && Mi(ee) || this._popupRedirectResolver;
              te(ie, this, "argument-error"), this.redirectPersistenceManager = await Ji.create(this, [Mi(ie._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(ee) {
            var ie, He;
            return this._isInitialized && await this.queue((async () => {})), (null === (ie = this._currentUser) || void 0 === ie ? void 0 : ie._redirectEventId) === ee ? this._currentUser : (null === (He = this.redirectUser) || void 0 === He ? void 0 : He._redirectEventId) === ee ? this.redirectUser : null
          }
          async _persistUserIfCurrent(ee) {
            if (ee === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(ee)))
          }
          _notifyListenersIfCurrent(ee) {
            ee === this.currentUser && this.notifyAuthListeners()
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
            var ee, ie;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const He = null !== (ie = null === (ee = this.currentUser) || void 0 === ee ? void 0 : ee.uid) && void 0 !== ie ? ie : null;
            this.lastNotifiedUid !== He && (this.lastNotifiedUid = He, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(ee, ie, He, ye) {
            if (this._deleted) return () => {};
            const be = "function" === typeof ie ? ie : ie.next.bind(ie),
              Me = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return te(Me, this, "internal-error"), Me.then((() => be(this.currentUser))), "function" === typeof ie ? ee.addObserver(ie, He, ye) : ee.addObserver(ie)
          }
          async directlySetCurrentUser(ee) {
            this.currentUser && this.currentUser !== ee && this._currentUser._stopProactiveRefresh(), ee && this.isProactiveRefreshEnabled && ee._startProactiveRefresh(), this.currentUser = ee, ee ? await this.assertedPersistence.setCurrentUser(ee) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(ee) {
            return this.operations = this.operations.then(ee, ee), this.operations
          }
          get assertedPersistence() {
            return te(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(ee) {
            ee && !this.frameworks.includes(ee) && (this.frameworks.push(ee), this.frameworks.sort(), this.clientVersion = gi(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var ee;
            const ie = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (ie["X-Firebase-gmpid"] = this.app.options.appId);
            const He = await (null === (ee = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === ee ? void 0 : ee.getHeartbeatsHeader());
            He && (ie["X-Firebase-Client"] = He);
            const ye = await this._getAppCheckToken();
            return ye && (ie["X-Firebase-AppCheck"] = ye), ie
          }
          async _getAppCheckToken() {
            var ee;
            const ie = await (null === (ee = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === ee ? void 0 : ee.getToken());
            return (null === ie || void 0 === ie ? void 0 : ie.error) && function(ee) {
              if (ze.logLevel <= Ke.d.WARN) {
                for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
                ze.warn(`Auth (${be.d}): ${ee}`, ...He)
              }
            }(`Error while retrieving App Check token: ${ie.error}`), null === ie || void 0 === ie ? void 0 : ie.token
          }
        }

        function Vi(ee) {
          return (0, ye.I)(ee)
        }
        class ai {
          constructor(ee) {
            this.auth = ee, this.observer = null, this.addObserver = (0, ye.s)((ee => this.observer = ee))
          }
          get next() {
            return te(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function ci(ee, ie) {
          const He = (0, be.r)(ee, "auth");
          if (He.isInitialized()) {
            const ee = He.getImmediate(),
              be = He.getOptions();
            if ((0, ye.t)(be, null !== ie && void 0 !== ie ? ie : {})) return ee;
            Ee(ee, "already-initialized")
          }
          return He.initialize({
            options: ie
          })
        }

        function xi(ee, ie, He) {
          const ye = Vi(ee);
          te(ye._canInitEmulator, ye, "emulator-config-failed"), te(/^https?:\/\//.test(ie), ye, "invalid-emulator-scheme");
          const be = !!(null === He || void 0 === He ? void 0 : He.disableWarnings),
            Me = Li(ie),
            {
              host: Ke,
              port: Ue
            } = function(ee) {
              const ie = Li(ee),
                He = /(\/\/)?([^?#/]+)/.exec(ee.substr(ie.length));
              if (!He) return {
                host: "",
                port: null
              };
              const ye = He[2].split("@").pop() || "",
                be = /^(\[[^\]]+\])(:|$)/.exec(ye);
              if (be) {
                const ee = be[1];
                return {
                  host: ee,
                  port: Ci(ye.substr(ee.length + 1))
                }
              } {
                const [ee, ie] = ye.split(":");
                return {
                  host: ee,
                  port: Ci(ie)
                }
              }
            }(ie),
            Fe = null === Ue ? "" : `:${Ue}`;
          ye.config.emulator = {
            url: `${Me}//${Ke}${Fe}/`
          }, ye.settings.appVerificationDisabledForTesting = !0, ye.emulatorConfig = Object.freeze({
            host: Ke,
            port: Ue,
            protocol: Me.replace(":", ""),
            options: Object.freeze({
              disableWarnings: be
            })
          }), be || function() {
            function ee() {
              const ee = document.createElement("p"),
                ie = ee.style;
              ee.innerText = "Running in emulator mode. Do not use with production credentials.", ie.position = "fixed", ie.width = "100%", ie.backgroundColor = "#ffffff", ie.border = ".1em solid #000000", ie.color = "#b50000", ie.bottom = "0px", ie.left = "0px", ie.margin = "0px", ie.zIndex = "10000", ie.textAlign = "center", ee.classList.add("firebase-emulator-warning"), document.body.appendChild(ee)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", ee) : ee())
          }()
        }

        function Li(ee) {
          const ie = ee.indexOf(":");
          return ie < 0 ? "" : ee.substr(0, ie + 1)
        }

        function Ci(ee) {
          if (!ee) return null;
          const ie = Number(ee);
          return isNaN(ie) ? null : ie
        }
        class vi {
          constructor(ee, ie) {
            this.providerId = ee, this.signInMethod = ie
          }
          toJSON() {
            return Ze("not implemented")
          }
          _getIdTokenResponse(ee) {
            return Ze("not implemented")
          }
          _linkToIdToken(ee, ie) {
            return Ze("not implemented")
          }
          _getReauthenticationResolver(ee) {
            return Ze("not implemented")
          }
        }
        async function ui(ee, ie) {
          return Ce(ee, "POST", "/v1/accounts:resetPassword", Le(ee, ie))
        }
        async function mi(ee, ie) {
          return Ce(ee, "POST", "/v1/accounts:update", ie)
        }
        async function li(ee, ie) {
          return ue(ee, "POST", "/v1/accounts:signInWithPassword", Le(ee, ie))
        }
        async function Si(ee, ie) {
          return Ce(ee, "POST", "/v1/accounts:sendOobCode", Le(ee, ie))
        }
        async function ni(ee, ie) {
          return Si(ee, ie)
        }
        async function ji(ee, ie) {
          return Si(ee, ie)
        }
        class si extends vi {
          constructor(ee, ie, He) {
            let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", He), this._email = ee, this._password = ie, this._tenantId = ye
          }
          static _fromEmailAndPassword(ee, ie) {
            return new si(ee, ie, "password")
          }
          static _fromEmailAndCode(ee, ie) {
            return new si(ee, ie, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(ee) {
            const ie = "string" === typeof ee ? JSON.parse(ee) : ee;
            if ((null === ie || void 0 === ie ? void 0 : ie.email) && (null === ie || void 0 === ie ? void 0 : ie.password)) {
              if ("password" === ie.signInMethod) return this._fromEmailAndPassword(ie.email, ie.password);
              if ("emailLink" === ie.signInMethod) return this._fromEmailAndCode(ie.email, ie.password, ie.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(ee) {
            var ie;
            switch (this.signInMethod) {
              case "password":
                const He = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (ie = ee._getRecaptchaConfig()) || void 0 === ie ? void 0 : ie.emailPasswordEnabled) {
                  const ie = await Pi(ee, He, "signInWithPassword");
                  return li(ee, ie)
                }
                return li(ee, He).catch((async ie => {
                  if ("auth/missing-recaptcha-token" === ie.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const ie = await Pi(ee, He, "signInWithPassword");
                    return li(ee, ie)
                  }
                  return Promise.reject(ie)
                }));
              case "emailLink":
                return async function(ee, ie) {
                  return ue(ee, "POST", "/v1/accounts:signInWithEmailLink", Le(ee, ie))
                }(ee, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Ee(ee, "internal-error")
            }
          }
          async _linkToIdToken(ee, ie) {
            switch (this.signInMethod) {
              case "password":
                return mi(ee, {
                  idToken: ie,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(ee, ie) {
                  return ue(ee, "POST", "/v1/accounts:signInWithEmailLink", Le(ee, ie))
                }(ee, {
                  idToken: ie,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                Ee(ee, "internal-error")
            }
          }
          _getReauthenticationResolver(ee) {
            return this._getIdTokenResponse(ee)
          }
        }
        async function Ii(ee, ie) {
          return ue(ee, "POST", "/v1/accounts:signInWithIdp", Le(ee, ie))
        }
        class Ni extends vi {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(ee) {
            const ie = new Ni(ee.providerId, ee.signInMethod);
            return ee.idToken || ee.accessToken ? (ee.idToken && (ie.idToken = ee.idToken), ee.accessToken && (ie.accessToken = ee.accessToken), ee.nonce && !ee.pendingToken && (ie.nonce = ee.nonce), ee.pendingToken && (ie.pendingToken = ee.pendingToken)) : ee.oauthToken && ee.oauthTokenSecret ? (ie.accessToken = ee.oauthToken, ie.secret = ee.oauthTokenSecret) : Ee("argument-error"), ie
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
          static fromJSON(ee) {
            const ie = "string" === typeof ee ? JSON.parse(ee) : ee,
              {
                providerId: He,
                signInMethod: ye
              } = ie,
              be = Me(ie, ["providerId", "signInMethod"]);
            if (!He || !ye) return null;
            const Ke = new Ni(He, ye);
            return Ke.idToken = be.idToken || void 0, Ke.accessToken = be.accessToken || void 0, Ke.secret = be.secret, Ke.nonce = be.nonce, Ke.pendingToken = be.pendingToken || null, Ke
          }
          _getIdTokenResponse(ee) {
            return Ii(ee, this.buildRequest())
          }
          _linkToIdToken(ee, ie) {
            const He = this.buildRequest();
            return He.idToken = ie, Ii(ee, He)
          }
          _getReauthenticationResolver(ee) {
            const ie = this.buildRequest();
            return ie.autoCreate = !1, Ii(ee, ie)
          }
          buildRequest() {
            const ee = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) ee.pendingToken = this.pendingToken;
            else {
              const ie = {};
              this.idToken && (ie.id_token = this.idToken), this.accessToken && (ie.access_token = this.accessToken), this.secret && (ie.oauth_token_secret = this.secret), ie.providerId = this.providerId, this.nonce && !this.pendingToken && (ie.nonce = this.nonce), ee.postBody = (0, ye.cb)(ie)
            }
            return ee
          }
        }
        const Gi = {
          USER_NOT_FOUND: "user-not-found"
        };
        class ri extends vi {
          constructor(ee) {
            super("phone", "phone"), this.params = ee
          }
          static _fromVerification(ee, ie) {
            return new ri({
              verificationId: ee,
              verificationCode: ie
            })
          }
          static _fromTokenResponse(ee, ie) {
            return new ri({
              phoneNumber: ee,
              temporaryProof: ie
            })
          }
          _getIdTokenResponse(ee) {
            return async function(ee, ie) {
              return ue(ee, "POST", "/v1/accounts:signInWithPhoneNumber", Le(ee, ie))
            }(ee, this._makeVerificationRequest())
          }
          _linkToIdToken(ee, ie) {
            return async function(ee, ie) {
              const He = await ue(ee, "POST", "/v1/accounts:signInWithPhoneNumber", Le(ee, ie));
              if (He.temporaryProof) throw Se(ee, "account-exists-with-different-credential", He);
              return He
            }(ee, Object.assign({
              idToken: ie
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(ee) {
            return async function(ee, ie) {
              return ue(ee, "POST", "/v1/accounts:signInWithPhoneNumber", Le(ee, Object.assign(Object.assign({}, ie), {
                operation: "REAUTH"
              })), Gi)
            }(ee, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: ee,
              phoneNumber: ie,
              verificationId: He,
              verificationCode: ye
            } = this.params;
            return ee && ie ? {
              temporaryProof: ee,
              phoneNumber: ie
            } : {
              sessionInfo: He,
              code: ye
            }
          }
          toJSON() {
            const ee = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (ee.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (ee.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (ee.verificationCode = this.params.verificationCode), this.params.verificationId && (ee.verificationId = this.params.verificationId), ee
          }
          static fromJSON(ee) {
            "string" === typeof ee && (ee = JSON.parse(ee));
            const {
              verificationId: ie,
              verificationCode: He,
              phoneNumber: ye,
              temporaryProof: be
            } = ee;
            return He || ie || ye || be ? new ri({
              verificationId: ie,
              verificationCode: He,
              phoneNumber: ye,
              temporaryProof: be
            }) : null
          }
        }
        class Qi {
          constructor(ee) {
            var ie, He, be, Me, Ke, Ue;
            const Fe = (0, ye.ab)((0, ye.v)(ee)),
              Je = null !== (ie = Fe.apiKey) && void 0 !== ie ? ie : null,
              oe = null !== (He = Fe.oobCode) && void 0 !== He ? He : null,
              Re = function(ee) {
                switch (ee) {
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
              }(null !== (be = Fe.mode) && void 0 !== be ? be : null);
            te(Je && oe && Re, "argument-error"), this.apiKey = Je, this.operation = Re, this.code = oe, this.continueUrl = null !== (Me = Fe.continueUrl) && void 0 !== Me ? Me : null, this.languageCode = null !== (Ke = Fe.languageCode) && void 0 !== Ke ? Ke : null, this.tenantId = null !== (Ue = Fe.tenantId) && void 0 !== Ue ? Ue : null
          }
          static parseLink(ee) {
            const ie = function(ee) {
              const ie = (0, ye.ab)((0, ye.v)(ee)).link,
                He = ie ? (0, ye.ab)((0, ye.v)(ie)).deep_link_id : null,
                be = (0, ye.ab)((0, ye.v)(ee)).deep_link_id;
              return (be ? (0, ye.ab)((0, ye.v)(be)).link : null) || be || He || ie || ee
            }(ee);
            try {
              return new Qi(ie)
            } catch (He) {
              return null
            }
          }
        }

        function eH(ee) {
          return Qi.parseLink(ee)
        }
        class iH {
          constructor() {
            this.providerId = iH.PROVIDER_ID
          }
          static credential(ee, ie) {
            return si._fromEmailAndPassword(ee, ie)
          }
          static credentialWithLink(ee, ie) {
            const He = Qi.parseLink(ie);
            return te(He, "argument-error"), si._fromEmailAndCode(ee, He.code, He.tenantId)
          }
        }
        iH.PROVIDER_ID = "password", iH.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", iH.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class HH {
          constructor(ee) {
            this.providerId = ee, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(ee) {
            this.defaultLanguageCode = ee
          }
          setCustomParameters(ee) {
            return this.customParameters = ee, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class yH extends HH {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(ee) {
            return this.scopes.includes(ee) || this.scopes.push(ee), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class bH extends yH {
          static credentialFromJSON(ee) {
            const ie = "string" === typeof ee ? JSON.parse(ee) : ee;
            return te("providerId" in ie && "signInMethod" in ie, "argument-error"), Ni._fromParams(ie)
          }
          credential(ee) {
            return this._credential(Object.assign(Object.assign({}, ee), {
              nonce: ee.rawNonce
            }))
          }
          _credential(ee) {
            return te(ee.idToken || ee.accessToken, "argument-error"), Ni._fromParams(Object.assign(Object.assign({}, ee), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(ee) {
            return bH.oauthCredentialFromTaggedObject(ee)
          }
          static credentialFromError(ee) {
            return bH.oauthCredentialFromTaggedObject(ee.customData || {})
          }
          static oauthCredentialFromTaggedObject(ee) {
            let {
              _tokenResponse: ie
            } = ee;
            if (!ie) return null;
            const {
              oauthIdToken: He,
              oauthAccessToken: ye,
              oauthTokenSecret: be,
              pendingToken: Me,
              nonce: Ke,
              providerId: Ue
            } = ie;
            if (!ye && !be && !He && !Me) return null;
            if (!Ue) return null;
            try {
              return new bH(Ue)._credential({
                idToken: He,
                accessToken: ye,
                nonce: Ke,
                pendingToken: Me
              })
            } catch (Fe) {
              return null
            }
          }
        }
        class MH extends yH {
          constructor() {
            super("facebook.com")
          }
          static credential(ee) {
            return Ni._fromParams({
              providerId: MH.PROVIDER_ID,
              signInMethod: MH.FACEBOOK_SIGN_IN_METHOD,
              accessToken: ee
            })
          }
          static credentialFromResult(ee) {
            return MH.credentialFromTaggedObject(ee)
          }
          static credentialFromError(ee) {
            return MH.credentialFromTaggedObject(ee.customData || {})
          }
          static credentialFromTaggedObject(ee) {
            let {
              _tokenResponse: ie
            } = ee;
            if (!ie || !("oauthAccessToken" in ie)) return null;
            if (!ie.oauthAccessToken) return null;
            try {
              return MH.credential(ie.oauthAccessToken)
            } catch (He) {
              return null
            }
          }
        }
        MH.FACEBOOK_SIGN_IN_METHOD = "facebook.com", MH.PROVIDER_ID = "facebook.com";
        class KH extends yH {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(ee, ie) {
            return Ni._fromParams({
              providerId: KH.PROVIDER_ID,
              signInMethod: KH.GOOGLE_SIGN_IN_METHOD,
              idToken: ee,
              accessToken: ie
            })
          }
          static credentialFromResult(ee) {
            return KH.credentialFromTaggedObject(ee)
          }
          static credentialFromError(ee) {
            return KH.credentialFromTaggedObject(ee.customData || {})
          }
          static credentialFromTaggedObject(ee) {
            let {
              _tokenResponse: ie
            } = ee;
            if (!ie) return null;
            const {
              oauthIdToken: He,
              oauthAccessToken: ye
            } = ie;
            if (!He && !ye) return null;
            try {
              return KH.credential(He, ye)
            } catch (be) {
              return null
            }
          }
        }
        KH.GOOGLE_SIGN_IN_METHOD = "google.com", KH.PROVIDER_ID = "google.com";
        class UH extends yH {
          constructor() {
            super("github.com")
          }
          static credential(ee) {
            return Ni._fromParams({
              providerId: UH.PROVIDER_ID,
              signInMethod: UH.GITHUB_SIGN_IN_METHOD,
              accessToken: ee
            })
          }
          static credentialFromResult(ee) {
            return UH.credentialFromTaggedObject(ee)
          }
          static credentialFromError(ee) {
            return UH.credentialFromTaggedObject(ee.customData || {})
          }
          static credentialFromTaggedObject(ee) {
            let {
              _tokenResponse: ie
            } = ee;
            if (!ie || !("oauthAccessToken" in ie)) return null;
            if (!ie.oauthAccessToken) return null;
            try {
              return UH.credential(ie.oauthAccessToken)
            } catch (He) {
              return null
            }
          }
        }
        UH.GITHUB_SIGN_IN_METHOD = "github.com", UH.PROVIDER_ID = "github.com";
        class FH extends vi {
          constructor(ee, ie) {
            super(ee, ee), this.pendingToken = ie
          }
          _getIdTokenResponse(ee) {
            return Ii(ee, this.buildRequest())
          }
          _linkToIdToken(ee, ie) {
            const He = this.buildRequest();
            return He.idToken = ie, Ii(ee, He)
          }
          _getReauthenticationResolver(ee) {
            const ie = this.buildRequest();
            return ie.autoCreate = !1, Ii(ee, ie)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(ee) {
            const ie = "string" === typeof ee ? JSON.parse(ee) : ee,
              {
                providerId: He,
                signInMethod: ye,
                pendingToken: be
              } = ie;
            return He && ye && be && He === ye ? new FH(He, be) : null
          }
          static _create(ee, ie) {
            return new FH(ee, ie)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class JH extends HH {
          constructor(ee) {
            te(ee.startsWith("saml."), "argument-error"), super(ee)
          }
          static credentialFromResult(ee) {
            return JH.samlCredentialFromTaggedObject(ee)
          }
          static credentialFromError(ee) {
            return JH.samlCredentialFromTaggedObject(ee.customData || {})
          }
          static credentialFromJSON(ee) {
            const ie = FH.fromJSON(ee);
            return te(ie, "argument-error"), ie
          }
          static samlCredentialFromTaggedObject(ee) {
            let {
              _tokenResponse: ie
            } = ee;
            if (!ie) return null;
            const {
              pendingToken: He,
              providerId: ye
            } = ie;
            if (!He || !ye) return null;
            try {
              return FH._create(ye, He)
            } catch (be) {
              return null
            }
          }
        }
        class oH extends yH {
          constructor() {
            super("twitter.com")
          }
          static credential(ee, ie) {
            return Ni._fromParams({
              providerId: oH.PROVIDER_ID,
              signInMethod: oH.TWITTER_SIGN_IN_METHOD,
              oauthToken: ee,
              oauthTokenSecret: ie
            })
          }
          static credentialFromResult(ee) {
            return oH.credentialFromTaggedObject(ee)
          }
          static credentialFromError(ee) {
            return oH.credentialFromTaggedObject(ee.customData || {})
          }
          static credentialFromTaggedObject(ee) {
            let {
              _tokenResponse: ie
            } = ee;
            if (!ie) return null;
            const {
              oauthAccessToken: He,
              oauthTokenSecret: ye
            } = ie;
            if (!He || !ye) return null;
            try {
              return oH.credential(He, ye)
            } catch (be) {
              return null
            }
          }
        }
        async function RH(ee, ie) {
          return ue(ee, "POST", "/v1/accounts:signUp", Le(ee, ie))
        }
        oH.TWITTER_SIGN_IN_METHOD = "twitter.com", oH.PROVIDER_ID = "twitter.com";
        class kH {
          constructor(ee) {
            this.user = ee.user, this.providerId = ee.providerId, this._tokenResponse = ee._tokenResponse, this.operationType = ee.operationType
          }
          static async _fromIdTokenResponse(ee, ie, He) {
            let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const be = await yi._fromIdTokenResponse(ee, He, ye),
              Me = qH(He);
            return new kH({
              user: be,
              providerId: Me,
              _tokenResponse: He,
              operationType: ie
            })
          }
          static async _forOperation(ee, ie, He) {
            await ee._updateTokensIfNecessary(He, !0);
            const ye = qH(He);
            return new kH({
              user: ee,
              providerId: ye,
              _tokenResponse: He,
              operationType: ie
            })
          }
        }

        function qH(ee) {
          return ee.providerId ? ee.providerId : "phoneNumber" in ee ? "phone" : null
        }
        async function fH(ee) {
          var ie;
          const He = Vi(ee);
          if (await He._initializationPromise, null === (ie = He.currentUser) || void 0 === ie ? void 0 : ie.isAnonymous) return new kH({
            user: He.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const ye = await RH(He, {
              returnSecureToken: !0
            }),
            be = await kH._fromIdTokenResponse(He, "signIn", ye, !0);
          return await He._updateCurrentUser(be.user), be
        }
        class TH extends ye.k {
          constructor(ee, ie, He, ye) {
            var be;
            super(ie.code, ie.message), this.operationType = He, this.user = ye, Object.setPrototypeOf(this, TH.prototype), this.customData = {
              appName: ee.name,
              tenantId: null !== (be = ee.tenantId) && void 0 !== be ? be : void 0,
              _serverResponse: ie.customData._serverResponse,
              operationType: He
            }
          }
          static _fromErrorAndOperation(ee, ie, He, ye) {
            return new TH(ee, ie, He, ye)
          }
        }

        function pH(ee, ie, He, ye) {
          return ("reauthenticate" === ie ? He._getReauthenticationResolver(ee) : He._getIdTokenResponse(ee)).catch((He => {
            if ("auth/multi-factor-auth-required" === He.code) throw TH._fromErrorAndOperation(ee, He, ie, ye);
            throw He
          }))
        }

        function XH(ee) {
          return new Set(ee.map((ee => {
            let {
              providerId: ie
            } = ee;
            return ie
          })).filter((ee => !!ee)))
        }
        async function zH(ee, ie) {
          const He = (0, ye.I)(ee);
          await EH(!0, He, ie);
          const {
            providerUserInfo: be
          } = await async function(ee, ie) {
            return Ce(ee, "POST", "/v1/accounts:update", ie)
          }(He.auth, {
            idToken: await He.getIdToken(),
            deleteProvider: [ie]
          }), Me = XH(be || []);
          return He.providerData = He.providerData.filter((ee => Me.has(ee.providerId))), Me.has("phone") || (He.phoneNumber = null), await He.auth._persistUserIfCurrent(He), He
        }
        async function BH(ee, ie) {
          let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const ye = await Ne(ee, ie._linkToIdToken(ee.auth, await ee.getIdToken()), He);
          return kH._forOperation(ee, "link", ye)
        }
        async function EH(ee, ie, He) {
          await Qe(ie);
          const ye = !1 === ee ? "provider-already-linked" : "no-such-provider";
          te(XH(ie.providerData).has(He) === ee, ie.auth, ye)
        }
        async function gH(ee, ie) {
          let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: ye
          } = ee, be = "reauthenticate";
          try {
            const Me = await Ne(ee, pH(ye, be, ie, ee), He);
            te(Me.idToken, ye, "internal-error");
            const Ke = he(Me.idToken);
            te(Ke, ye, "internal-error");
            const {
              sub: Ue
            } = Ke;
            return te(ee.uid === Ue, ye, "user-mismatch"), kH._forOperation(ee, be, Me)
          } catch (Me) {
            throw "auth/user-not-found" === (null === Me || void 0 === Me ? void 0 : Me.code) && Ee(ye, "user-mismatch"), Me
          }
        }
        async function OH(ee, ie) {
          let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const ye = "signIn",
            be = await pH(ee, ye, ie),
            Me = await kH._fromIdTokenResponse(ee, ye, be);
          return He || await ee._updateCurrentUser(Me.user), Me
        }
        async function dH(ee, ie) {
          return OH(Vi(ee), ie)
        }
        async function WH(ee, ie) {
          const He = (0, ye.I)(ee);
          return await EH(!1, He, ie.providerId), BH(He, ie)
        }
        async function tH(ee, ie) {
          return gH((0, ye.I)(ee), ie)
        }
        async function ZH(ee, ie) {
          const He = Vi(ee),
            ye = await async function(ee, ie) {
              return ue(ee, "POST", "/v1/accounts:signInWithCustomToken", Le(ee, ie))
            }(He, {
              token: ie,
              returnSecureToken: !0
            }), be = await kH._fromIdTokenResponse(He, "signIn", ye);
          return await He._updateCurrentUser(be.user), be
        }
        class wH {
          constructor(ee, ie) {
            this.factorId = ee, this.uid = ie.mfaEnrollmentId, this.enrollmentTime = new Date(ie.enrolledAt).toUTCString(), this.displayName = ie.displayName
          }
          static _fromServerResponse(ee, ie) {
            return "phoneInfo" in ie ? DH._fromServerResponse(ee, ie) : "totpInfo" in ie ? PH._fromServerResponse(ee, ie) : Ee(ee, "internal-error")
          }
        }
        class DH extends wH {
          constructor(ee) {
            super("phone", ee), this.phoneNumber = ee.phoneInfo
          }
          static _fromServerResponse(ee, ie) {
            return new DH(ie)
          }
        }
        class PH extends wH {
          constructor(ee) {
            super("totp", ee)
          }
          static _fromServerResponse(ee, ie) {
            return new PH(ie)
          }
        }

        function AH(ee, ie, He) {
          var ye;
          te((null === (ye = He.url) || void 0 === ye ? void 0 : ye.length) > 0, ee, "invalid-continue-uri"), te("undefined" === typeof He.dynamicLinkDomain || He.dynamicLinkDomain.length > 0, ee, "invalid-dynamic-link-domain"), ie.continueUrl = He.url, ie.dynamicLinkDomain = He.dynamicLinkDomain, ie.canHandleCodeInApp = He.handleCodeInApp, He.iOS && (te(He.iOS.bundleId.length > 0, ee, "missing-ios-bundle-id"), ie.iOSBundleId = He.iOS.bundleId), He.android && (te(He.android.packageName.length > 0, ee, "missing-android-pkg-name"), ie.androidInstallApp = He.android.installApp, ie.androidMinimumVersionCode = He.android.minimumVersion, ie.androidPackageName = He.android.packageName)
        }
        async function YH(ee, ie, He) {
          var ye;
          const be = Vi(ee),
            Me = {
              requestType: "PASSWORD_RESET",
              email: ie,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (ye = be._getRecaptchaConfig()) || void 0 === ye ? void 0 : ye.emailPasswordEnabled) {
            const ee = await Pi(be, Me, "getOobCode", !0);
            He && AH(be, ee, He), await ni(be, ee)
          } else He && AH(be, Me, He), await ni(be, Me).catch((async ee => {
            if ("auth/missing-recaptcha-token" !== ee.code) return Promise.reject(ee);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const ee = await Pi(be, Me, "getOobCode", !0);
              He && AH(be, ee, He), await ni(be, ee)
            }
          }))
        }
        async function VH(ee, ie, He) {
          await ui((0, ye.I)(ee), {
            oobCode: ie,
            newPassword: He
          })
        }
        async function aH(ee, ie) {
          await async function(ee, ie) {
            return Ce(ee, "POST", "/v1/accounts:update", Le(ee, ie))
          }((0, ye.I)(ee), {
            oobCode: ie
          })
        }
        async function cH(ee, ie) {
          const He = (0, ye.I)(ee),
            be = await ui(He, {
              oobCode: ie
            }),
            Me = be.requestType;
          switch (te(Me, He, "internal-error"), Me) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              te(be.newEmail, He, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              te(be.mfaInfo, He, "internal-error");
            default:
              te(be.email, He, "internal-error")
          }
          let Ke = null;
          return be.mfaInfo && (Ke = wH._fromServerResponse(Vi(He), be.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === be.requestType ? be.newEmail : be.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === be.requestType ? be.email : be.newEmail) || null,
              multiFactorInfo: Ke
            },
            operation: Me
          }
        }
        async function xH(ee, ie) {
          const {
            data: He
          } = await cH((0, ye.I)(ee), ie);
          return He.email
        }
        async function LH(ee, ie, He) {
          var ye;
          const be = Vi(ee),
            Me = {
              returnSecureToken: !0,
              email: ie,
              password: He,
              clientType: "CLIENT_TYPE_WEB"
            };
          let Ke;
          if (null === (ye = be._getRecaptchaConfig()) || void 0 === ye ? void 0 : ye.emailPasswordEnabled) {
            const ee = await Pi(be, Me, "signUpPassword");
            Ke = RH(be, ee)
          } else Ke = RH(be, Me).catch((async ee => {
            if ("auth/missing-recaptcha-token" === ee.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const ee = await Pi(be, Me, "signUpPassword");
              return RH(be, ee)
            }
            return Promise.reject(ee)
          }));
          const Ue = await Ke.catch((ee => Promise.reject(ee))),
            Fe = await kH._fromIdTokenResponse(be, "signIn", Ue);
          return await be._updateCurrentUser(Fe.user), Fe
        }

        function CH(ee, ie, He) {
          return dH((0, ye.I)(ee), iH.credential(ie, He))
        }
        async function vH(ee, ie, He) {
          var ye;
          const be = Vi(ee),
            Me = {
              requestType: "EMAIL_SIGNIN",
              email: ie,
              clientType: "CLIENT_TYPE_WEB"
            };

          function Ke(ee, ie) {
            te(ie.handleCodeInApp, be, "argument-error"), ie && AH(be, ee, ie)
          }
          if (null === (ye = be._getRecaptchaConfig()) || void 0 === ye ? void 0 : ye.emailPasswordEnabled) {
            const ee = await Pi(be, Me, "getOobCode", !0);
            Ke(ee, He), await ji(be, ee)
          } else Ke(Me, He), await ji(be, Me).catch((async ee => {
            if ("auth/missing-recaptcha-token" !== ee.code) return Promise.reject(ee);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const ee = await Pi(be, Me, "getOobCode", !0);
              Ke(ee, He), await ji(be, ee)
            }
          }))
        }

        function uH(ee, ie) {
          const He = Qi.parseLink(ie);
          return "EMAIL_SIGNIN" === (null === He || void 0 === He ? void 0 : He.operation)
        }
        async function mH(ee, ie, He) {
          const be = (0, ye.I)(ee),
            Me = iH.credentialWithLink(ie, He || De());
          return te(Me._tenantId === (be.tenantId || null), be, "tenant-id-mismatch"), dH(be, Me)
        }
        async function lH(ee, ie) {
          const He = {
              identifier: ie,
              continueUri: Pe() ? De() : "http://localhost"
            },
            {
              signinMethods: be
            } = await async function(ee, ie) {
              return Ce(ee, "POST", "/v1/accounts:createAuthUri", Le(ee, ie))
            }((0, ye.I)(ee), He);
          return be || []
        }
        async function SH(ee, ie) {
          const He = (0, ye.I)(ee),
            be = {
              requestType: "VERIFY_EMAIL",
              idToken: await ee.getIdToken()
            };
          ie && AH(He.auth, be, ie);
          const {
            email: Me
          } = await async function(ee, ie) {
            return Si(ee, ie)
          }(He.auth, be);
          Me !== ee.email && await ee.reload()
        }
        async function nH(ee, ie, He) {
          const be = (0, ye.I)(ee),
            Me = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await ee.getIdToken(),
              newEmail: ie
            };
          He && AH(be.auth, Me, He);
          const {
            email: Ke
          } = await async function(ee, ie) {
            return Si(ee, ie)
          }(be.auth, Me);
          Ke !== ee.email && await ee.reload()
        }
        async function jH(ee, ie) {
          let {
            displayName: He,
            photoURL: be
          } = ie;
          if (void 0 === He && void 0 === be) return;
          const Me = (0, ye.I)(ee),
            Ke = {
              idToken: await Me.getIdToken(),
              displayName: He,
              photoUrl: be,
              returnSecureToken: !0
            },
            Ue = await Ne(Me, async function(ee, ie) {
              return Ce(ee, "POST", "/v1/accounts:update", ie)
            }(Me.auth, Ke));
          Me.displayName = Ue.displayName || null, Me.photoURL = Ue.photoUrl || null;
          const Fe = Me.providerData.find((ee => {
            let {
              providerId: ie
            } = ee;
            return "password" === ie
          }));
          Fe && (Fe.displayName = Me.displayName, Fe.photoURL = Me.photoURL), await Me._updateTokensIfNecessary(Ue)
        }

        function sH(ee, ie) {
          return hH((0, ye.I)(ee), ie, null)
        }

        function IH(ee, ie) {
          return hH((0, ye.I)(ee), null, ie)
        }
        async function hH(ee, ie, He) {
          const {
            auth: ye
          } = ee, be = {
            idToken: await ee.getIdToken(),
            returnSecureToken: !0
          };
          ie && (be.email = ie), He && (be.password = He);
          const Me = await Ne(ee, mi(ye, be));
          await ee._updateTokensIfNecessary(Me, !0)
        }
        class NH {
          constructor(ee, ie) {
            let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = ee, this.providerId = ie, this.profile = He
          }
        }
        class GH extends NH {
          constructor(ee, ie, He, ye) {
            super(ee, ie, He), this.username = ye
          }
        }
        class rH extends NH {
          constructor(ee, ie) {
            super(ee, "facebook.com", ie)
          }
        }
        class QH extends GH {
          constructor(ee, ie) {
            super(ee, "github.com", ie, "string" === typeof(null === ie || void 0 === ie ? void 0 : ie.login) ? null === ie || void 0 === ie ? void 0 : ie.login : null)
          }
        }
        class ey extends NH {
          constructor(ee, ie) {
            super(ee, "google.com", ie)
          }
        }
        class iy extends GH {
          constructor(ee, ie, He) {
            super(ee, "twitter.com", ie, He)
          }
        }

        function Hy(ee) {
          const {
            user: ie,
            _tokenResponse: He
          } = ee;
          return ie.isAnonymous && !He ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(ee) {
            var ie, He;
            if (!ee) return null;
            const {
              providerId: ye
            } = ee, be = ee.rawUserInfo ? JSON.parse(ee.rawUserInfo) : {}, Me = ee.isNewUser || "identitytoolkit#SignupNewUserResponse" === ee.kind;
            if (!ye && (null === ee || void 0 === ee ? void 0 : ee.idToken)) {
              const ye = null === (He = null === (ie = he(ee.idToken)) || void 0 === ie ? void 0 : ie.firebase) || void 0 === He ? void 0 : He.sign_in_provider;
              if (ye) return new NH(Me, "anonymous" !== ye && "custom" !== ye ? ye : null)
            }
            if (!ye) return null;
            switch (ye) {
              case "facebook.com":
                return new rH(Me, be);
              case "github.com":
                return new QH(Me, be);
              case "google.com":
                return new ey(Me, be);
              case "twitter.com":
                return new iy(Me, be, ee.screenName || null);
              case "custom":
              case "anonymous":
                return new NH(Me, null);
              default:
                return new NH(Me, ye, be)
            }
          }(He)
        }

        function yy(ee, ie) {
          return (0, ye.I)(ee).setPersistence(ie)
        }

        function by(ee) {
          return Vi(ee).initializeRecaptchaConfig()
        }

        function My(ee, ie, He, be) {
          return (0, ye.I)(ee).onIdTokenChanged(ie, He, be)
        }

        function Ky(ee, ie, He) {
          return (0, ye.I)(ee).beforeAuthStateChanged(ie, He)
        }

        function Uy(ee, ie, He, be) {
          return (0, ye.I)(ee).onAuthStateChanged(ie, He, be)
        }

        function Fy(ee) {
          (0, ye.I)(ee).useDeviceLanguage()
        }

        function Jy(ee, ie) {
          return (0, ye.I)(ee).updateCurrentUser(ie)
        }

        function oy(ee) {
          return (0, ye.I)(ee).signOut()
        }
        async function Ry(ee) {
          return (0, ye.I)(ee).delete()
        }
        class ky {
          constructor(ee, ie, He) {
            this.type = ee, this.credential = ie, this.auth = He
          }
          static _fromIdtoken(ee, ie) {
            return new ky("enroll", ee, ie)
          }
          static _fromMfaPendingCredential(ee) {
            return new ky("signin", ee)
          }
          toJSON() {
            const ee = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [ee]: this.credential
              }
            }
          }
          static fromJSON(ee) {
            var ie, He;
            if (null === ee || void 0 === ee ? void 0 : ee.multiFactorSession) {
              if (null === (ie = ee.multiFactorSession) || void 0 === ie ? void 0 : ie.pendingCredential) return ky._fromMfaPendingCredential(ee.multiFactorSession.pendingCredential);
              if (null === (He = ee.multiFactorSession) || void 0 === He ? void 0 : He.idToken) return ky._fromIdtoken(ee.multiFactorSession.idToken)
            }
            return null
          }
        }
        class qy {
          constructor(ee, ie, He) {
            this.session = ee, this.hints = ie, this.signInResolver = He
          }
          static _fromError(ee, ie) {
            const He = Vi(ee),
              ye = ie.customData._serverResponse,
              be = (ye.mfaInfo || []).map((ee => wH._fromServerResponse(He, ee)));
            te(ye.mfaPendingCredential, He, "internal-error");
            const Me = ky._fromMfaPendingCredential(ye.mfaPendingCredential);
            return new qy(Me, be, (async ee => {
              const be = await ee._process(He, Me);
              delete ye.mfaInfo, delete ye.mfaPendingCredential;
              const Ke = Object.assign(Object.assign({}, ye), {
                idToken: be.idToken,
                refreshToken: be.refreshToken
              });
              switch (ie.operationType) {
                case "signIn":
                  const ee = await kH._fromIdTokenResponse(He, ie.operationType, Ke);
                  return await He._updateCurrentUser(ee.user), ee;
                case "reauthenticate":
                  return te(ie.user, He, "internal-error"), kH._forOperation(ie.user, ie.operationType, Ke);
                default:
                  Ee(He, "internal-error")
              }
            }))
          }
          async resolveSignIn(ee) {
            const ie = ee;
            return this.signInResolver(ie)
          }
        }

        function fy(ee, ie) {
          var He;
          const be = (0, ye.I)(ee),
            Me = ie;
          return te(ie.customData.operationType, be, "argument-error"), te(null === (He = Me.customData._serverResponse) || void 0 === He ? void 0 : He.mfaPendingCredential, be, "argument-error"), qy._fromError(be, Me)
        }
        class Ty {
          constructor(ee) {
            this.user = ee, this.enrolledFactors = [], ee._onReload((ie => {
              ie.mfaInfo && (this.enrolledFactors = ie.mfaInfo.map((ie => wH._fromServerResponse(ee.auth, ie))))
            }))
          }
          static _fromUser(ee) {
            return new Ty(ee)
          }
          async getSession() {
            return ky._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(ee, ie) {
            const He = ee,
              ye = await this.getSession(),
              be = await Ne(this.user, He._process(this.user.auth, ye, ie));
            return await this.user._updateTokensIfNecessary(be), this.user.reload()
          }
          async unenroll(ee) {
            const ie = "string" === typeof ee ? ee : ee.uid,
              He = await this.user.getIdToken();
            try {
              const ee = await Ne(this.user, (ye = this.user.auth, be = {
                idToken: He,
                mfaEnrollmentId: ie
              }, Ce(ye, "POST", "/v2/accounts/mfaEnrollment:withdraw", Le(ye, be))));
              this.enrolledFactors = this.enrolledFactors.filter((ee => {
                let {
                  uid: He
                } = ee;
                return He !== ie
              })), await this.user._updateTokensIfNecessary(ee), await this.user.reload()
            } catch (Me) {
              throw Me
            }
            var ye, be
          }
        }
        const py = new WeakMap;

        function Xy(ee) {
          const ie = (0, ye.I)(ee);
          return py.has(ie) || py.set(ie, Ty._fromUser(ie)), py.get(ie)
        }
        const zy = "__sak";
        class By {
          constructor(ee, ie) {
            this.storageRetriever = ee, this.type = ie
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(zy, "1"), this.storage.removeItem(zy), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (ee) {
              return Promise.resolve(!1)
            }
          }
          _set(ee, ie) {
            return this.storage.setItem(ee, JSON.stringify(ie)), Promise.resolve()
          }
          _get(ee) {
            const ie = this.storage.getItem(ee);
            return Promise.resolve(ie ? JSON.parse(ie) : null)
          }
          _remove(ee) {
            return this.storage.removeItem(ee), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class Ey extends By {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (ee, ie) => this.onStorageEvent(ee, ie), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const ee = (0, ye.M)();
              return ki(ee) || Bi(ee)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (ee) {
                return !1
              }
            }(), this.fallbackToPolling = Ei(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(ee) {
            for (const ie of Object.keys(this.listeners)) {
              const He = this.storage.getItem(ie),
                ye = this.localCache[ie];
              He !== ye && ee(ie, ye, He)
            }
          }
          onStorageEvent(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!ee.key) return void this.forAllChangedKeys(((ee, ie, He) => {
              this.notifyListeners(ee, He)
            }));
            const He = ee.key;
            if (ie ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const ye = this.storage.getItem(He);
              if (ee.newValue !== ye) null !== ee.newValue ? this.storage.setItem(He, ee.newValue) : this.storage.removeItem(He);
              else if (this.localCache[He] === ee.newValue && !ie) return
            }
            const be = () => {
                const ee = this.storage.getItem(He);
                (ie || this.localCache[He] !== ee) && this.notifyListeners(He, ee)
              },
              Me = this.storage.getItem(He);
            (0, ye.R)() && 10 === document.documentMode && Me !== ee.newValue && ee.newValue !== ee.oldValue ? setTimeout(be, 10) : be()
          }
          notifyListeners(ee, ie) {
            this.localCache[ee] = ie;
            const He = this.listeners[ee];
            if (He)
              for (const ye of Array.from(He)) ye(ie ? JSON.parse(ie) : ie)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((ee, ie, He) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: ee,
                  oldValue: ie,
                  newValue: He
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
          _addListener(ee, ie) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[ee] || (this.listeners[ee] = new Set, this.localCache[ee] = this.storage.getItem(ee)), this.listeners[ee].add(ie)
          }
          _removeListener(ee, ie) {
            this.listeners[ee] && (this.listeners[ee].delete(ie), 0 === this.listeners[ee].size && delete this.listeners[ee]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(ee, ie) {
            await super._set(ee, ie), this.localCache[ee] = JSON.stringify(ie)
          }
          async _get(ee) {
            const ie = await super._get(ee);
            return this.localCache[ee] = JSON.stringify(ie), ie
          }
          async _remove(ee) {
            await super._remove(ee), delete this.localCache[ee]
          }
        }
        Ey.type = "LOCAL";
        const gy = Ey;
        class Oy extends By {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(ee, ie) {}
          _removeListener(ee, ie) {}
        }
        Oy.type = "SESSION";
        const dy = Oy;
        class Wy {
          constructor(ee) {
            this.eventTarget = ee, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(ee) {
            const ie = this.receivers.find((ie => ie.isListeningto(ee)));
            if (ie) return ie;
            const He = new Wy(ee);
            return this.receivers.push(He), He
          }
          isListeningto(ee) {
            return this.eventTarget === ee
          }
          async handleEvent(ee) {
            const ie = ee,
              {
                eventId: He,
                eventType: ye,
                data: be
              } = ie.data,
              Me = this.handlersMap[ye];
            if (!(null === Me || void 0 === Me ? void 0 : Me.size)) return;
            ie.ports[0].postMessage({
              status: "ack",
              eventId: He,
              eventType: ye
            });
            const Ke = Array.from(Me).map((async ee => ee(ie.origin, be))),
              Ue = await
            function(ee) {
              return Promise.all(ee.map((async ee => {
                try {
                  return {
                    fulfilled: !0,
                    value: await ee
                  }
                } catch (ie) {
                  return {
                    fulfilled: !1,
                    reason: ie
                  }
                }
              })))
            }(Ke);
            ie.ports[0].postMessage({
              status: "done",
              eventId: He,
              eventType: ye,
              response: Ue
            })
          }
          _subscribe(ee, ie) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[ee] || (this.handlersMap[ee] = new Set), this.handlersMap[ee].add(ie)
          }
          _unsubscribe(ee, ie) {
            this.handlersMap[ee] && ie && this.handlersMap[ee].delete(ie), ie && 0 !== this.handlersMap[ee].size || delete this.handlersMap[ee], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function ty() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            He = "";
          for (let ye = 0; ye < ie; ye++) He += Math.floor(10 * Math.random());
          return ee + He
        }
        Wy.receivers = [];
        class Zy {
          constructor(ee) {
            this.target = ee, this.handlers = new Set
          }
          removeMessageHandler(ee) {
            ee.messageChannel && (ee.messageChannel.port1.removeEventListener("message", ee.OE), ee.messageChannel.port1.close()), this.handlers.delete(ee)
          }
          async _send(ee, ie) {
            let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const ye = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!ye) throw new Error("connection_unavailable");
            let be, Me;
            return new Promise(((Ke, Ue) => {
              const Fe = ty("", 20);
              ye.port1.start();
              const Je = setTimeout((() => {
                Ue(new Error("unsupported_event"))
              }), He);
              Me = {
                messageChannel: ye,
                OE(ee) {
                  const ie = ee;
                  if (ie.data.eventId === Fe) switch (ie.data.status) {
                    case "ack":
                      clearTimeout(Je), be = setTimeout((() => {
                        Ue(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(be), Ke(ie.data.response);
                      break;
                    default:
                      clearTimeout(Je), clearTimeout(be), Ue(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(Me), ye.port1.addEventListener("message", Me.OE), this.target.postMessage({
                eventType: ee,
                eventId: Fe,
                data: ie
              }, [ye.port2])
            })).finally((() => {
              Me && this.removeMessageHandler(Me)
            }))
          }
        }

        function wy() {
          return window
        }

        function Dy() {
          return "undefined" !== typeof wy().WorkerGlobalScope && "function" === typeof wy().importScripts
        }
        const Py = "firebaseLocalStorageDb",
          Ay = "firebaseLocalStorage",
          Yy = "fbase_key";
        class Vy {
          constructor(ee) {
            this.request = ee
          }
          toPromise() {
            return new Promise(((ee, ie) => {
              this.request.addEventListener("success", (() => {
                ee(this.request.result)
              })), this.request.addEventListener("error", (() => {
                ie(this.request.error)
              }))
            }))
          }
        }

        function ay(ee, ie) {
          return ee.transaction([Ay], ie ? "readwrite" : "readonly").objectStore(Ay)
        }

        function cy() {
          const ee = indexedDB.open(Py, 1);
          return new Promise(((ie, He) => {
            ee.addEventListener("error", (() => {
              He(ee.error)
            })), ee.addEventListener("upgradeneeded", (() => {
              const ie = ee.result;
              try {
                ie.createObjectStore(Ay, {
                  keyPath: Yy
                })
              } catch (ye) {
                He(ye)
              }
            })), ee.addEventListener("success", (async () => {
              const He = ee.result;
              He.objectStoreNames.contains(Ay) ? ie(He) : (He.close(), await
                function() {
                  const ee = indexedDB.deleteDatabase(Py);
                  return new Vy(ee).toPromise()
                }(), ie(await cy()))
            }))
          }))
        }
        async function xy(ee, ie, He) {
          const ye = ay(ee, !0).put({
            [Yy]: ie,
            value: He
          });
          return new Vy(ye).toPromise()
        }

        function Ly(ee, ie) {
          const He = ay(ee, !0).delete(ie);
          return new Vy(He).toPromise()
        }
        class Cy {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await cy()), this.db
          }
          async _withRetries(ee) {
            let ie = 0;
            for (;;) try {
              const ie = await this._openDb();
              return await ee(ie)
            } catch (He) {
              if (ie++ > 3) throw He;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return Dy() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = Wy._getInstance(Dy() ? self : null), this.receiver._subscribe("keyChanged", (async (ee, ie) => ({
              keyProcessed: (await this._poll()).includes(ie.key)
            }))), this.receiver._subscribe("ping", (async (ee, ie) => ["keyChanged"]))
          }
          async initializeSender() {
            var ee, ie;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (ee) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new Zy(this.activeServiceWorker);
            const He = await this.sender._send("ping", {}, 800);
            He && (null === (ee = He[0]) || void 0 === ee ? void 0 : ee.fulfilled) && (null === (ie = He[0]) || void 0 === ie ? void 0 : ie.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(ee) {
            if (this.sender && this.activeServiceWorker && function() {
                var ee;
                return (null === (ee = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === ee ? void 0 : ee.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: ee
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (ie) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const ee = await cy();
              return await xy(ee, zy, "1"), await Ly(ee, zy), !0
            } catch (ee) {}
            return !1
          }
          async _withPendingWrite(ee) {
            this.pendingWrites++;
            try {
              await ee()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(ee, ie) {
            return this._withPendingWrite((async () => (await this._withRetries((He => xy(He, ee, ie))), this.localCache[ee] = ie, this.notifyServiceWorker(ee))))
          }
          async _get(ee) {
            const ie = await this._withRetries((ie => async function(ee, ie) {
              const He = ay(ee, !1).get(ie),
                ye = await new Vy(He).toPromise();
              return void 0 === ye ? null : ye.value
            }(ie, ee)));
            return this.localCache[ee] = ie, ie
          }
          async _remove(ee) {
            return this._withPendingWrite((async () => (await this._withRetries((ie => Ly(ie, ee))), delete this.localCache[ee], this.notifyServiceWorker(ee))))
          }
          async _poll() {
            const ee = await this._withRetries((ee => {
              const ie = ay(ee, !1).getAll();
              return new Vy(ie).toPromise()
            }));
            if (!ee) return [];
            if (0 !== this.pendingWrites) return [];
            const ie = [],
              He = new Set;
            for (const {
                fbase_key: ye,
                value: be
              }
              of ee) He.add(ye), JSON.stringify(this.localCache[ye]) !== JSON.stringify(be) && (this.notifyListeners(ye, be), ie.push(ye));
            for (const ye of Object.keys(this.localCache)) this.localCache[ye] && !He.has(ye) && (this.notifyListeners(ye, null), ie.push(ye));
            return ie
          }
          notifyListeners(ee, ie) {
            this.localCache[ee] = ie;
            const He = this.listeners[ee];
            if (He)
              for (const ye of Array.from(He)) ye(ie)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(ee, ie) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[ee] || (this.listeners[ee] = new Set, this._get(ee)), this.listeners[ee].add(ie)
          }
          _removeListener(ee, ie) {
            this.listeners[ee] && (this.listeners[ee].delete(ie), 0 === this.listeners[ee].size && delete this.listeners[ee]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        Cy.type = "LOCAL";
        const vy = Cy;
        const uy = 1e12;
        class my {
          constructor(ee) {
            this.auth = ee, this.counter = uy, this._widgets = new Map
          }
          render(ee, ie) {
            const He = this.counter;
            return this._widgets.set(He, new ly(ee, this.auth.name, ie || {})), this.counter++, He
          }
          reset(ee) {
            var ie;
            const He = ee || uy;
            null === (ie = this._widgets.get(He)) || void 0 === ie || ie.delete(), this._widgets.delete(He)
          }
          getResponse(ee) {
            var ie;
            const He = ee || uy;
            return (null === (ie = this._widgets.get(He)) || void 0 === ie ? void 0 : ie.getResponse()) || ""
          }
          async execute(ee) {
            var ie;
            const He = ee || uy;
            return null === (ie = this._widgets.get(He)) || void 0 === ie || ie.execute(), ""
          }
        }
        class ly {
          constructor(ee, ie, He) {
            this.params = He, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const ye = "string" === typeof ee ? document.getElementById(ee) : ee;
            te(ye, "argument-error", {
              appName: ie
            }), this.container = ye, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(ee) {
                const ie = [],
                  He = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let ye = 0; ye < ee; ye++) ie.push(He.charAt(Math.floor(Math.random() * He.length)));
                return ie.join("")
              }(50);
              const {
                callback: ee,
                "expired-callback": ie
              } = this.params;
              if (ee) try {
                ee(this.responseToken)
              } catch (He) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, ie) try {
                  ie()
                } catch (He) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const Sy = wi("rcb"),
          ny = new Ye(3e4, 6e4);
        class jy {
          constructor() {
            var ee;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (ee = wy().grecaptcha) || void 0 === ee ? void 0 : ee.render)
          }
          load(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return te(function(ee) {
              return ee.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(ee)
            }(ie), ee, "argument-error"), this.shouldResolveImmediately(ie) && di(wy().grecaptcha) ? Promise.resolve(wy().grecaptcha) : new Promise(((He, be) => {
              const Me = wy().setTimeout((() => {
                be(ge(ee, "network-request-failed"))
              }), ny.get());
              wy()[Sy] = () => {
                wy().clearTimeout(Me), delete wy()[Sy];
                const ye = wy().grecaptcha;
                if (!ye || !di(ye)) return void be(ge(ee, "internal-error"));
                const Ke = ye.render;
                ye.render = (ee, ie) => {
                  const He = Ke(ee, ie);
                  return this.counter++, He
                }, this.hostLanguage = ie, He(ye)
              };
              Zi(`https://www.google.com/recaptcha/api.js??${(0,ye.cb)({onload:Sy,render:"explicit",hl:ie})}`).catch((() => {
                clearTimeout(Me), be(ge(ee, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(ee) {
            var ie;
            return !!(null === (ie = wy().grecaptcha) || void 0 === ie ? void 0 : ie.render) && (ee === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class sy {
          async load(ee) {
            return new my(ee)
          }
          clearedOneInstance() {}
        }
        const Iy = "recaptcha",
          hy = {
            theme: "light",
            type: "image"
          };
        class Ny {
          constructor(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, hy),
              He = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = ie, this.type = Iy, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = Vi(He), this.isInvisible = "invisible" === this.parameters.size, te("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const ye = "string" === typeof ee ? document.getElementById(ee) : ee;
            te(ye, this.auth, "argument-error"), this.container = ye, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new sy : new jy, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const ee = await this.render(),
              ie = this.getAssertedRecaptcha(),
              He = ie.getResponse(ee);
            return He || new Promise((He => {
              const ye = ee => {
                ee && (this.tokenChangeListeners.delete(ye), He(ee))
              };
              this.tokenChangeListeners.add(ye), this.isInvisible && ie.execute(ee)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (ee) {
              return Promise.reject(ee)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((ee => {
              throw this.renderPromise = null, ee
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((ee => {
              this.container.removeChild(ee)
            }))
          }
          validateStartingState() {
            te(!this.parameters.sitekey, this.auth, "argument-error"), te(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), te("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(ee) {
            return ie => {
              if (this.tokenChangeListeners.forEach((ee => ee(ie))), "function" === typeof ee) ee(ie);
              else if ("string" === typeof ee) {
                const He = wy()[ee];
                "function" === typeof He && He(ie)
              }
            }
          }
          assertNotDestroyed() {
            te(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let ee = this.container;
              if (!this.isInvisible) {
                const ie = document.createElement("div");
                ee.appendChild(ie), ee = ie
              }
              this.widgetId = this.getAssertedRecaptcha().render(ee, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            te(Pe() && !Dy(), this.auth, "internal-error"), await
            function() {
              let ee = null;
              return new Promise((ie => {
                "complete" !== document.readyState ? (ee = () => ie(), window.addEventListener("load", ee)) : ie()
              })).catch((ie => {
                throw ee && window.removeEventListener("load", ee), ie
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const ee = await async function(ee) {
              return (await Ce(ee, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            te(ee, this.auth, "internal-error"), this.parameters.sitekey = ee
          }
          getAssertedRecaptcha() {
            return te(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class Gy {
          constructor(ee, ie) {
            this.verificationId = ee, this.onConfirmation = ie
          }
          confirm(ee) {
            const ie = ri._fromVerification(this.verificationId, ee);
            return this.onConfirmation(ie)
          }
        }
        async function ry(ee, ie, He) {
          const be = Vi(ee),
            Me = await ib(be, ie, (0, ye.I)(He));
          return new Gy(Me, (ee => dH(be, ee)))
        }
        async function Qy(ee, ie, He) {
          const be = (0, ye.I)(ee);
          await EH(!1, be, "phone");
          const Me = await ib(be.auth, ie, (0, ye.I)(He));
          return new Gy(Me, (ee => WH(be, ee)))
        }
        async function eb(ee, ie, He) {
          const be = (0, ye.I)(ee),
            Me = await ib(be.auth, ie, (0, ye.I)(He));
          return new Gy(Me, (ee => tH(be, ee)))
        }
        async function ib(ee, ie, He) {
          var ye;
          const be = await He.verify();
          try {
            let Me;
            if (te("string" === typeof be, ee, "argument-error"), te(He.type === Iy, ee, "argument-error"), Me = "string" === typeof ie ? {
                phoneNumber: ie
              } : ie, "session" in Me) {
              const ie = Me.session;
              if ("phoneNumber" in Me) {
                te("enroll" === ie.type, ee, "internal-error");
                const He = await
                function(ee, ie) {
                  return Ce(ee, "POST", "/v2/accounts/mfaEnrollment:start", Le(ee, ie))
                }(ee, {
                  idToken: ie.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: Me.phoneNumber,
                    recaptchaToken: be
                  }
                });
                return He.phoneSessionInfo.sessionInfo
              } {
                te("signin" === ie.type, ee, "internal-error");
                const He = (null === (ye = Me.multiFactorHint) || void 0 === ye ? void 0 : ye.uid) || Me.multiFactorUid;
                te(He, ee, "missing-multi-factor-info");
                const Ke = await
                function(ee, ie) {
                  return Ce(ee, "POST", "/v2/accounts/mfaSignIn:start", Le(ee, ie))
                }(ee, {
                  mfaPendingCredential: ie.credential,
                  mfaEnrollmentId: He,
                  phoneSignInInfo: {
                    recaptchaToken: be
                  }
                });
                return Ke.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: ie
              } = await async function(ee, ie) {
                return Ce(ee, "POST", "/v1/accounts:sendVerificationCode", Le(ee, ie))
              }(ee, {
                phoneNumber: Me.phoneNumber,
                recaptchaToken: be
              });
              return ie
            }
          } finally {
            He._reset()
          }
        }
        async function Hb(ee, ie) {
          await BH((0, ye.I)(ee), ie)
        }
        class yb {
          constructor(ee) {
            this.providerId = yb.PROVIDER_ID, this.auth = Vi(ee)
          }
          verifyPhoneNumber(ee, ie) {
            return ib(this.auth, ee, (0, ye.I)(ie))
          }
          static credential(ee, ie) {
            return ri._fromVerification(ee, ie)
          }
          static credentialFromResult(ee) {
            const ie = ee;
            return yb.credentialFromTaggedObject(ie)
          }
          static credentialFromError(ee) {
            return yb.credentialFromTaggedObject(ee.customData || {})
          }
          static credentialFromTaggedObject(ee) {
            let {
              _tokenResponse: ie
            } = ee;
            if (!ie) return null;
            const {
              phoneNumber: He,
              temporaryProof: ye
            } = ie;
            return He && ye ? ri._fromTokenResponse(He, ye) : null
          }
        }

        function bb(ee, ie) {
          return ie ? Mi(ie) : (te(ee._popupRedirectResolver, ee, "argument-error"), ee._popupRedirectResolver)
        }
        yb.PROVIDER_ID = "phone", yb.PHONE_SIGN_IN_METHOD = "phone";
        class Mb extends vi {
          constructor(ee) {
            super("custom", "custom"), this.params = ee
          }
          _getIdTokenResponse(ee) {
            return Ii(ee, this._buildIdpRequest())
          }
          _linkToIdToken(ee, ie) {
            return Ii(ee, this._buildIdpRequest(ie))
          }
          _getReauthenticationResolver(ee) {
            return Ii(ee, this._buildIdpRequest())
          }
          _buildIdpRequest(ee) {
            const ie = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return ee && (ie.idToken = ee), ie
          }
        }

        function Kb(ee) {
          return OH(ee.auth, new Mb(ee), ee.bypassAuthState)
        }

        function Ub(ee) {
          const {
            auth: ie,
            user: He
          } = ee;
          return te(He, ie, "internal-error"), gH(He, new Mb(ee), ee.bypassAuthState)
        }
        async function Fb(ee) {
          const {
            auth: ie,
            user: He
          } = ee;
          return te(He, ie, "internal-error"), BH(He, new Mb(ee), ee.bypassAuthState)
        }
        class Jb {
          constructor(ee, ie, He, ye) {
            let be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = ee, this.resolver = He, this.user = ye, this.bypassAuthState = be, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(ie) ? ie : [ie]
          }
          execute() {
            return new Promise((async (ee, ie) => {
              this.pendingPromise = {
                resolve: ee,
                reject: ie
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (He) {
                this.reject(He)
              }
            }))
          }
          async onAuthEvent(ee) {
            const {
              urlResponse: ie,
              sessionId: He,
              postBody: ye,
              tenantId: be,
              error: Me,
              type: Ke
            } = ee;
            if (Me) return void this.reject(Me);
            const Ue = {
              auth: this.auth,
              requestUri: ie,
              sessionId: He,
              tenantId: be || void 0,
              postBody: ye || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(Ke)(Ue))
            } catch (Fe) {
              this.reject(Fe)
            }
          }
          onError(ee) {
            this.reject(ee)
          }
          getIdpTask(ee) {
            switch (ee) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return Kb;
              case "linkViaPopup":
              case "linkViaRedirect":
                return Fb;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return Ub;
              default:
                Ee(this.auth, "internal-error")
            }
          }
          resolve(ee) {
            we(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(ee), this.unregisterAndCleanUp()
          }
          reject(ee) {
            we(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(ee), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const ob = new Ye(2e3, 1e4);
        async function Rb(ee, ie, He) {
          const ye = Vi(ee);
          de(ee, ie, HH);
          const be = bb(ye, He);
          return new fb(ye, "signInViaPopup", ie, be).executeNotNull()
        }
        async function kb(ee, ie, He) {
          const be = (0, ye.I)(ee);
          de(be.auth, ie, HH);
          const Me = bb(be.auth, He);
          return new fb(be.auth, "reauthViaPopup", ie, Me, be).executeNotNull()
        }
        async function qb(ee, ie, He) {
          const be = (0, ye.I)(ee);
          de(be.auth, ie, HH);
          const Me = bb(be.auth, He);
          return new fb(be.auth, "linkViaPopup", ie, Me, be).executeNotNull()
        }
        class fb extends Jb {
          constructor(ee, ie, He, ye, be) {
            super(ee, ie, ye, be), this.provider = He, this.authWindow = null, this.pollId = null, fb.currentPopupAction && fb.currentPopupAction.cancel(), fb.currentPopupAction = this
          }
          async executeNotNull() {
            const ee = await this.execute();
            return te(ee, this.auth, "internal-error"), ee
          }
          async onExecution() {
            we(1 === this.filter.length, "Popup operations only handle one event");
            const ee = ty();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], ee), this.authWindow.associatedEvent = ee, this.resolver._originValidation(this.auth).catch((ee => {
              this.reject(ee)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (ee => {
              ee || this.reject(ge(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var ee;
            return (null === (ee = this.authWindow) || void 0 === ee ? void 0 : ee.associatedEvent) || null
          }
          cancel() {
            this.reject(ge(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, fb.currentPopupAction = null
          }
          pollUserCancellation() {
            const ee = () => {
              var ie, He;
              (null === (He = null === (ie = this.authWindow) || void 0 === ie ? void 0 : ie.window) || void 0 === He ? void 0 : He.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(ge(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(ee, ob.get())
            };
            ee()
          }
        }
        fb.currentPopupAction = null;
        const Tb = "pendingRedirect",
          pb = new Map;
        class Xb extends Jb {
          constructor(ee, ie) {
            super(ee, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], ie, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let ee = pb.get(this.auth._key());
            if (!ee) {
              try {
                const ie = await async function(ee, ie) {
                  const He = gb(ie),
                    ye = Eb(ee);
                  if (!await ye._isAvailable()) return !1;
                  const be = "true" === await ye._get(He);
                  return await ye._remove(He), be
                }(this.resolver, this.auth) ? await super.execute() : null;
                ee = () => Promise.resolve(ie)
              } catch (ie) {
                ee = () => Promise.reject(ie)
              }
              pb.set(this.auth._key(), ee)
            }
            return this.bypassAuthState || pb.set(this.auth._key(), (() => Promise.resolve(null))), ee()
          }
          async onAuthEvent(ee) {
            if ("signInViaRedirect" === ee.type) return super.onAuthEvent(ee);
            if ("unknown" !== ee.type) {
              if (ee.eventId) {
                const ie = await this.auth._redirectUserForId(ee.eventId);
                if (ie) return this.user = ie, super.onAuthEvent(ee);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function zb(ee, ie) {
          return Eb(ee)._set(gb(ie), "true")
        }

        function Bb(ee, ie) {
          pb.set(ee._key(), ie)
        }

        function Eb(ee) {
          return Mi(ee._redirectPersistence)
        }

        function gb(ee) {
          return Fi(Tb, ee.config.apiKey, ee.name)
        }

        function Ob(ee, ie, He) {
          return async function(ee, ie, He) {
            const ye = Vi(ee);
            de(ee, ie, HH), await ye._initializationPromise;
            const be = bb(ye, He);
            return await zb(be, ye), be._openRedirect(ye, ie, "signInViaRedirect")
          }(ee, ie, He)
        }

        function db(ee, ie, He) {
          return async function(ee, ie, He) {
            const be = (0, ye.I)(ee);
            de(be.auth, ie, HH), await be.auth._initializationPromise;
            const Me = bb(be.auth, He);
            await zb(Me, be.auth);
            const Ke = await wb(be);
            return Me._openRedirect(be.auth, ie, "reauthViaRedirect", Ke)
          }(ee, ie, He)
        }

        function Wb(ee, ie, He) {
          return async function(ee, ie, He) {
            const be = (0, ye.I)(ee);
            de(be.auth, ie, HH), await be.auth._initializationPromise;
            const Me = bb(be.auth, He);
            await EH(!1, be, ie.providerId), await zb(Me, be.auth);
            const Ke = await wb(be);
            return Me._openRedirect(be.auth, ie, "linkViaRedirect", Ke)
          }(ee, ie, He)
        }
        async function tb(ee, ie) {
          return await Vi(ee)._initializationPromise, Zb(ee, ie, !1)
        }
        async function Zb(ee, ie) {
          let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const ye = Vi(ee),
            be = bb(ye, ie),
            Me = new Xb(ye, be, He),
            Ke = await Me.execute();
          return Ke && !He && (delete Ke.user._redirectEventId, await ye._persistUserIfCurrent(Ke.user), await ye._setRedirectUser(null, ie)), Ke
        }
        async function wb(ee) {
          const ie = ty(`${ee.uid}:::`);
          return ee._redirectEventId = ie, await ee.auth._setRedirectUser(ee), await ee.auth._persistUserIfCurrent(ee), ie
        }
        class Db {
          constructor(ee) {
            this.auth = ee, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(ee) {
            this.consumers.add(ee), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, ee) && (this.sendToConsumer(this.queuedRedirectEvent, ee), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(ee) {
            this.consumers.delete(ee)
          }
          onEvent(ee) {
            if (this.hasEventBeenHandled(ee)) return !1;
            let ie = !1;
            return this.consumers.forEach((He => {
              this.isEventForConsumer(ee, He) && (ie = !0, this.sendToConsumer(ee, He), this.saveEventToCache(ee))
            })), this.hasHandledPotentialRedirect || ! function(ee) {
              switch (ee.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return Ab(ee);
                default:
                  return !1
              }
            }(ee) || (this.hasHandledPotentialRedirect = !0, ie || (this.queuedRedirectEvent = ee, ie = !0)), ie
          }
          sendToConsumer(ee, ie) {
            var He;
            if (ee.error && !Ab(ee)) {
              const ye = (null === (He = ee.error.code) || void 0 === He ? void 0 : He.split("auth/")[1]) || "internal-error";
              ie.onError(ge(this.auth, ye))
            } else ie.onAuthEvent(ee)
          }
          isEventForConsumer(ee, ie) {
            const He = null === ie.eventId || !!ee.eventId && ee.eventId === ie.eventId;
            return ie.filter.includes(ee.type) && He
          }
          hasEventBeenHandled(ee) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(Pb(ee))
          }
          saveEventToCache(ee) {
            this.cachedEventUids.add(Pb(ee)), this.lastProcessedEventTime = Date.now()
          }
        }

        function Pb(ee) {
          return [ee.type, ee.eventId, ee.sessionId, ee.tenantId].filter((ee => ee)).join("-")
        }

        function Ab(ee) {
          let {
            type: ie,
            error: He
          } = ee;
          return "unknown" === ie && "auth/no-auth-event" === (null === He || void 0 === He ? void 0 : He.code)
        }
        const Yb = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          Vb = /^https?/;
        async function ab(ee) {
          if (ee.config.emulator) return;
          const {
            authorizedDomains: ie
          } = await async function(ee) {
            return Ce(ee, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(ee);
          for (const ye of ie) try {
            if (cb(ye)) return
          } catch (He) {}
          Ee(ee, "unauthorized-domain")
        }

        function cb(ee) {
          const ie = De(),
            {
              protocol: He,
              hostname: ye
            } = new URL(ie);
          if (ee.startsWith("chrome-extension://")) {
            const be = new URL(ee);
            return "" === be.hostname && "" === ye ? "chrome-extension:" === He && ee.replace("chrome-extension://", "") === ie.replace("chrome-extension://", "") : "chrome-extension:" === He && be.hostname === ye
          }
          if (!Vb.test(He)) return !1;
          if (Yb.test(ee)) return ye === ee;
          const be = ee.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + be + "|" + be + ")$", "i").test(ye)
        }
        const xb = new Ye(3e4, 6e4);

        function Lb() {
          const ee = wy().___jsl;
          if (null === ee || void 0 === ee ? void 0 : ee.H)
            for (const ie of Object.keys(ee.H))
              if (ee.H[ie].r = ee.H[ie].r || [], ee.H[ie].L = ee.H[ie].L || [], ee.H[ie].r = [...ee.H[ie].L], ee.CP)
                for (let He = 0; He < ee.CP.length; He++) ee.CP[He] = null
        }
        let Cb = null;

        function vb(ee) {
          return Cb = Cb || function(ee) {
            return new Promise(((ie, He) => {
              var ye, be, Me;

              function Ke() {
                Lb(), gapi.load("gapi.iframes", {
                  callback: () => {
                    ie(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    Lb(), He(ge(ee, "network-request-failed"))
                  },
                  timeout: xb.get()
                })
              }
              if (null === (be = null === (ye = wy().gapi) || void 0 === ye ? void 0 : ye.iframes) || void 0 === be ? void 0 : be.Iframe) ie(gapi.iframes.getContext());
              else {
                if (!(null === (Me = wy().gapi) || void 0 === Me ? void 0 : Me.load)) {
                  const ie = wi("iframefcb");
                  return wy()[ie] = () => {
                    gapi.load ? Ke() : He(ge(ee, "network-request-failed"))
                  }, Zi(`https://apis.google.com/js/api.js?onload=${ie}`).catch((ee => He(ee)))
                }
                Ke()
              }
            })).catch((ee => {
              throw Cb = null, ee
            }))
          }(ee), Cb
        }
        const ub = new Ye(5e3, 15e3),
          mb = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          lb = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function Sb(ee) {
          const ie = ee.config;
          te(ie.authDomain, ee, "auth-domain-config-required");
          const He = ie.emulator ? Ve(ie, "emulator/auth/iframe") : `https://${ee.config.authDomain}/__/auth/iframe`,
            Me = {
              apiKey: ie.apiKey,
              appName: ee.name,
              v: be.d
            },
            Ke = lb.get(ee.config.apiHost);
          Ke && (Me.eid = Ke);
          const Ue = ee._getFrameworks();
          return Ue.length && (Me.fw = Ue.join(",")), `${He}?${(0,ye.cb)(Me).slice(1)}`
        }
        const nb = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class jb {
          constructor(ee) {
            this.window = ee, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (ee) {}
          }
        }

        function sb(ee, ie, He) {
          let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const Ke = Math.max((window.screen.availHeight - Me) / 2, 0).toString(),
            Ue = Math.max((window.screen.availWidth - be) / 2, 0).toString();
          let Fe = "";
          const Je = Object.assign(Object.assign({}, nb), {
              width: be.toString(),
              height: Me.toString(),
              top: Ke,
              left: Ue
            }),
            oe = (0, ye.M)().toLowerCase();
          He && (Fe = qi(oe) ? "_blank" : He), Ri(oe) && (ie = ie || "http://localhost", Je.scrollbars = "yes");
          const Re = Object.entries(Je).reduce(((ee, ie) => {
            let [He, ye] = ie;
            return `${ee}${He}=${ye},`
          }), "");
          if (function() {
              var ee;
              return Bi(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ye.M)()) && !!(null === (ee = window.navigator) || void 0 === ee ? void 0 : ee.standalone)
            }(oe) && "_self" !== Fe) return function(ee, ie) {
            const He = document.createElement("a");
            He.href = ee, He.target = ie;
            const ye = document.createEvent("MouseEvent");
            ye.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), He.dispatchEvent(ye)
          }(ie || "", Fe), new jb(null);
          const ke = window.open(ie || "", Fe, Re);
          te(ke, ee, "popup-blocked");
          try {
            ke.focus()
          } catch (qe) {}
          return new jb(ke)
        }
        const Ib = "__/auth/handler",
          hb = "emulator/auth/handler",
          Nb = encodeURIComponent("fac");
        async function Gb(ee, ie, He, Me, Ke, Ue) {
            te(ee.config.authDomain, ee, "auth-domain-config-required"), te(ee.config.apiKey, ee, "invalid-api-key");
            const Fe = {
              apiKey: ee.config.apiKey,
              appName: ee.name,
              authType: He,
              redirectUrl: Me,
              v: be.d,
              eventId: Ke
            };
            if (ie instanceof HH) {
              ie.setDefaultLanguage(ee.languageCode), Fe.providerId = ie.providerId || "", (0, ye.Q)(ie.getCustomParameters()) || (Fe.customParameters = JSON.stringify(ie.getCustomParameters()));
              for (const [ee, ie] of Object.entries(Ue || {})) Fe[ee] = ie
            }
            if (ie instanceof yH) {
              const ee = ie.getScopes().filter((ee => "" !== ee));
              ee.length > 0 && (Fe.scopes = ee.join(","))
            }
            ee.tenantId && (Fe.tid = ee.tenantId);
            const Je = Fe;
            for (const ye of Object.keys(Je)) void 0 === Je[ye] && delete Je[ye];
            const oe = await ee._getAppCheckToken(),
              Re = oe ? `#${Nb}=${encodeURIComponent(oe)}` : "";
            return `${function(ee){let{config:ie}=ee;if(!ie.emulator)return`
            https: //${ie.authDomain}/${Ib}`;return Ve(ie,hb)}(ee)}?${(0,ye.cb)(Je).slice(1)}${Re}`}const rb="webStorageSupport";const Qb=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dy,this._completeRedirectFn=Zb,this._overrideRedirectResult=Bb}async _openPopup(ee,ie,He,ye){var be;we(null===(be=this.eventManagers[ee._key()])||void 0===be?void 0:be.manager,"_initialize() not called before _openPopup()");return sb(ee,await Gb(ee,ie,He,De(),ye),ty())}async _openRedirect(ee,ie,He,ye){await this._originValidation(ee);return function(ee){wy().location.href=ee}(await Gb(ee,ie,He,De(),ye)),new Promise((()=>{}))}_initialize(ee){const ie=ee._key();if(this.eventManagers[ie]){const{manager:ee,promise:He}=this.eventManagers[ie];return ee?Promise.resolve(ee):(we(He,"If manager is not set, promise should be"),He)}const He=this.initAndGetManager(ee);return this.eventManagers[ie]={promise:He},He.catch((()=>{delete this.eventManagers[ie]})),He}async initAndGetManager(ee){const ie=await async function(ee){const ie=await vb(ee),He=wy().gapi;return te(He,ee,"internal-error"),ie.open({where:document.body,url:Sb(ee),messageHandlersFilter:He.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mb,dontclear:!0},(ie=>new Promise((async(He,ye)=>{await ie.restyle({setHideOnLeave:!1});const be=ge(ee,"network-request-failed"),Me=wy().setTimeout((()=>{ye(be)}),ub.get());function Ke(){wy().clearTimeout(Me),He(ie)}ie.ping(Ke).then(Ke,(()=>{ye(be)}))}))))}(ee),He=new Db(ee);return ie.register("authEvent",(ie=>{te(null===ie||void 0===ie?void 0:ie.authEvent,ee,"invalid-auth-event");return{status:He.onEvent(ie.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[ee._key()]={manager:He},this.iframes[ee._key()]=ie,He}_isIframeWebStorageSupported(ee,ie){this.iframes[ee._key()].send(rb,{type:rb},(He=>{var ye;const be=null===(ye=null===He||void 0===He?void 0:He[0])||void 0===ye?void 0:ye[rb];void 0!==be&&ie(!!be),Ee(ee,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(ee){const ie=ee._key();return this.originValidationPromises[ie]||(this.originValidationPromises[ie]=ab(ee)),this.originValidationPromises[ie]}get _shouldInitProactively(){return Ei()||ki()||Bi()}};class eM{constructor(ee){this.factorId=ee}_process(ee,ie,He){switch(ie.type){case"enroll":return this._finalizeEnroll(ee,ie.credential,He);case"signin":return this._finalizeSignIn(ee,ie.credential);default:return Ze("unexpected MultiFactorSessionType")}}}class iM extends eM{constructor(ee){super("phone"),this.credential=ee}static _fromCredential(ee){return new iM(ee)}_finalizeEnroll(ee,ie,He){return function(ee,ie){return Ce(ee,"POST","/v2/accounts/mfaEnrollment:finalize",Le(ee,ie))}(ee,{idToken:ie,displayName:He,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(ee,ie){return function(ee,ie){return Ce(ee,"POST","/v2/accounts/mfaSignIn:finalize",Le(ee,ie))}(ee,{mfaPendingCredential:ie,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class HM{constructor(){}static assertion(ee){return iM._fromCredential(ee)}}HM.FACTOR_ID="phone";class yM{static assertionForEnrollment(ee,ie){return bM._fromSecret(ee,ie)}static assertionForSignIn(ee,ie){return bM._fromEnrollmentId(ee,ie)}static async generateSecret(ee){const ie=ee;te("undefined"!==typeof ie.auth,"internal-error");const He=await(ye=ie.auth,be={idToken:ie.credential,totpEnrollmentInfo:{}},Ce(ye,"POST","/v2/accounts/mfaEnrollment:start",Le(ye,be)));var ye,be;return MM._fromStartTotpMfaEnrollmentResponse(He,ie.auth)}}yM.FACTOR_ID="totp";class bM extends eM{constructor(ee,ie,He){super("totp"),this.otp=ee,this.enrollmentId=ie,this.secret=He}static _fromSecret(ee,ie){return new bM(ie,void 0,ee)}static _fromEnrollmentId(ee,ie){return new bM(ie,ee)}async _finalizeEnroll(ee,ie,He){return te("undefined"!==typeof this.secret,ee,"argument-error"),function(ee,ie){return Ce(ee,"POST","/v2/accounts/mfaEnrollment:finalize",Le(ee,ie))}(ee,{idToken:ie,displayName:He,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(ee,ie){te(void 0!==this.enrollmentId&&void 0!==this.otp,ee,"argument-error");const He={verificationCode:this.otp};return function(ee,ie){return Ce(ee,"POST","/v2/accounts/mfaSignIn:finalize",Le(ee,ie))}(ee,{mfaPendingCredential:ie,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:He})}}class MM{constructor(ee,ie,He,ye,be,Me,Ke){this.sessionInfo=Me,this.auth=Ke,this.secretKey=ee,this.hashingAlgorithm=ie,this.codeLength=He,this.codeIntervalSeconds=ye,this.enrollmentCompletionDeadline=be}static _fromStartTotpMfaEnrollmentResponse(ee,ie){return new MM(ee.totpSessionInfo.sharedSecretKey,ee.totpSessionInfo.hashingAlgorithm,ee.totpSessionInfo.verificationCodeLength,ee.totpSessionInfo.periodSec,new Date(ee.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),ee.totpSessionInfo.sessionInfo,ie)}_makeTotpVerificationInfo(ee){return{sessionInfo:this.sessionInfo,verificationCode:ee}}generateQrCodeUrl(ee,ie){var He;let ye=!1;return(KM(ee)||KM(ie))&&(ye=!0),ye&&(KM(ee)&&(ee=(null===(He=this.auth.currentUser)||void 0===He?void 0:He.email)||"unknownuser"),KM(ie)&&(ie=this.auth.name)),`otpauth://totp/${ie}:${ee}?secret=${this.secretKey}&issuer=${ie}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function KM(ee){return"undefined"===typeof ee||0===(null===ee||void 0===ee?void 0:ee.length)}var UM="@firebase/auth",FM="0.23.2";class JM{constructor(ee){this.auth=ee,this.internalListeners=new Map}getUid(){var ee;return this.assertAuthConfigured(),(null===(ee=this.auth.currentUser)||void 0===ee?void 0:ee.uid)||null}async getToken(ee){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(ee)}}addAuthTokenListener(ee){if(this.assertAuthConfigured(),this.internalListeners.has(ee))return;const ie=this.auth.onIdTokenChanged((ie=>{ee((null===ie||void 0===ie?void 0:ie.stsTokenManager.accessToken)||null)}));this.internalListeners.set(ee,ie),this.updateProactiveRefresh()}removeAuthTokenListener(ee){this.assertAuthConfigured();const ie=this.internalListeners.get(ee);ie&&(this.internalListeners.delete(ee),ie(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const oM=(0,ye.F)("authIdTokenMaxAge")||300;let RM=null;const kM=ee=>async ie=>{const He=ie&&await ie.getIdTokenResult(),ye=He&&((new Date).getTime()-Date.parse(He.issuedAtTime))/1e3;if(ye&&ye>oM)return;const be=null===He||void 0===He?void 0:He.token;RM!==be&&(RM=be,await fetch(ee,{method:be?"POST":"DELETE",headers:be?{Authorization:`Bearer ${be}`}:{}}))};function qM(){let ee=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,be.D)();const ie=(0,be.r)(ee,"auth");if(ie.isInitialized())return ie.getImmediate();const He=ci(ee,{popupRedirectResolver:Qb,persistence:[vy,gy,dy]}),Me=(0,ye.F)("authTokenSyncURL");if(Me){const ee=kM(Me);Ky(He,ee,(()=>ee(He.currentUser))),My(He,(ie=>ee(ie)))}const Ke=(0,ye.B)("auth");return Ke&&xi(He,`http://${Ke}`),He}var fM;fM="Browser",(0,be.v)(new Ue.h("auth",((ee,ie)=>{let{options:He}=ie;const ye=ee.getProvider("app").getImmediate(),be=ee.getProvider("heartbeat"),Me=ee.getProvider("app-check-internal"),{apiKey:Ke,authDomain:Ue}=ye.options;te(Ke&&!Ke.includes(":"),"invalid-api-key",{appName:ye.name});const Fe={apiKey:Ke,authDomain:Ue,clientPlatform:fM,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gi(fM)},Je=new Yi(ye,be,Me,Fe);return function(ee,ie){const He=(null===ie||void 0===ie?void 0:ie.persistence)||[],ye=(Array.isArray(He)?He:[He]).map(Mi);(null===ie||void 0===ie?void 0:ie.errorMap)&&ee._updateErrorMap(ie.errorMap),ee._initializeWithPersistence(ye,null===ie||void 0===ie?void 0:ie.popupRedirectResolver)}(Je,He),Je}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((ee,ie,He)=>{ee.getProvider("auth-internal").initialize()}))),(0,be.v)(new Ue.h("auth-internal",(ee=>(ee=>new JM(ee))(Vi(ee.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,be.H)(UM,FM,function(ee){switch(ee){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(fM)),(0,be.H)(UM,FM,"esm2017")}};Object.freeze(modules);for(const ee in modules)Object.freeze(modules[ee]);