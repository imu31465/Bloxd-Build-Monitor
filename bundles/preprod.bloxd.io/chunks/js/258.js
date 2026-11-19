/*! For license information please see ad2avs.258.ddc8eab6.chunk.js.LICENSE.txt */
export const id = 258;
export const ids = [258];
export const modules = {
    39688: (zz, uz, bz) => {
        bz.r(uz), bz.d(uz, {
          ActionCodeOperation: () => dz,
          ActionCodeURL: () => Cu,
          AuthCredential: () => Uu,
          AuthErrorCodes: () => wz,
          EmailAuthCredential: () => Wu,
          EmailAuthProvider: () => ku,
          FacebookAuthProvider: () => Eb,
          FactorId: () => tz,
          GithubAuthProvider: () => ib,
          GoogleAuthProvider: () => nb,
          OAuthCredential: () => ju,
          OAuthProvider: () => bb,
          OperationType: () => pz,
          PhoneAuthCredential: () => Bu,
          PhoneAuthProvider: () => un,
          PhoneMultiFactorGenerator: () => Ei,
          ProviderId: () => Hz,
          RecaptchaVerifier: () => jE,
          SAMLAuthProvider: () => Mb,
          SignInMethod: () => Oz,
          TotpMultiFactorGenerator: () => ni,
          TotpSecret: () => li,
          TwitterAuthProvider: () => tb,
          applyActionCode: () => Gb,
          beforeAuthStateChanged: () => nE,
          browserLocalPersistence: () => fE,
          browserPopupRedirectResolver: () => zi,
          browserSessionPersistence: () => rE,
          checkActionCode: () => ab,
          confirmPasswordReset: () => Pb,
          connectAuthEmulator: () => mu,
          createUserWithEmailAndPassword: () => mb,
          debugErrorMap: () => Zz,
          deleteUser: () => HE,
          fetchSignInMethodsForEmail: () => gb,
          getAdditionalUserInfo: () => zE,
          getAuth: () => Ri,
          getIdToken: () => Wz,
          getIdTokenResult: () => ez,
          getMultiFactorResolver: () => dE,
          getRedirectResult: () => Jn,
          inMemoryPersistence: () => Mu,
          indexedDBLocalPersistence: () => hE,
          initializeAuth: () => Vu,
          initializeRecaptchaConfig: () => bE,
          isSignInWithEmailLink: () => Ub,
          linkWithCredential: () => ob,
          linkWithPhoneNumber: () => CE,
          linkWithPopup: () => Fn,
          linkWithRedirect: () => xn,
          multiFactor: () => RE,
          onAuthStateChanged: () => iE,
          onIdTokenChanged: () => EE,
          parseActionCodeURL: () => Yu,
          prodErrorMap: () => Rz,
          reauthenticateWithCredential: () => Nb,
          reauthenticateWithPhoneNumber: () => YE,
          reauthenticateWithPopup: () => dn,
          reauthenticateWithRedirect: () => vn,
          reload: () => zu,
          sendEmailVerification: () => Sb,
          sendPasswordResetEmail: () => Lb,
          sendSignInLinkToEmail: () => hb,
          setPersistence: () => uE,
          signInAnonymously: () => db,
          signInWithCredential: () => rb,
          signInWithCustomToken: () => vb,
          signInWithEmailAndPassword: () => qb,
          signInWithEmailLink: () => cb,
          signInWithPhoneNumber: () => BE,
          signInWithPopup: () => pn,
          signInWithRedirect: () => Nn,
          signOut: () => tE,
          unlink: () => Kb,
          updateCurrentUser: () => ME,
          updateEmail: () => Qb,
          updatePassword: () => Wb,
          updatePhoneNumber: () => zn,
          updateProfile: () => Db,
          useDeviceLanguage: () => lE,
          verifyBeforeUpdateEmail: () => yb,
          verifyPasswordResetCode: () => Vb
        });
        var Ez = bz(39673),
          nz = bz(39660);

        function iz(zz, uz) {
          var bz = {};
          for (var Ez in zz) Object.prototype.hasOwnProperty.call(zz, Ez) && uz.indexOf(Ez) < 0 && (bz[Ez] = zz[Ez]);
          if (null != zz && "function" === typeof Object.getOwnPropertySymbols) {
            var nz = 0;
            for (Ez = Object.getOwnPropertySymbols(zz); nz < Ez.length; nz++) uz.indexOf(Ez[nz]) < 0 && Object.prototype.propertyIsEnumerable.call(zz, Ez[nz]) && (bz[Ez[nz]] = zz[Ez[nz]])
          }
          return bz
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var lz = bz(39682),
          Mz = bz(39669);
        const tz = {
            PHONE: "phone",
            TOTP: "totp"
          },
          Hz = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          Oz = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          pz = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          dz = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function Fz() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const Zz = function() {
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
          Rz = Fz,
          Kz = new Ez.c("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          wz = {
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
          Xz = new lz.e("@firebase/auth");

        function fz(zz) {
          if (Xz.logLevel <= lz.c.ERROR) {
            for (var uz = arguments.length, bz = new Array(uz > 1 ? uz - 1 : 0), Ez = 1; Ez < uz; Ez++) bz[Ez - 1] = arguments[Ez];
            Xz.error(`Auth (${nz.h}): ${zz}`, ...bz)
          }
        }

        function sz(zz) {
          for (var uz = arguments.length, bz = new Array(uz > 1 ? uz - 1 : 0), Ez = 1; Ez < uz; Ez++) bz[Ez - 1] = arguments[Ez];
          throw vz(zz, ...bz)
        }

        function rz(zz) {
          for (var uz = arguments.length, bz = new Array(uz > 1 ? uz - 1 : 0), Ez = 1; Ez < uz; Ez++) bz[Ez - 1] = arguments[Ez];
          return vz(zz, ...bz)
        }

        function oz(zz, uz, bz) {
          const nz = Object.assign(Object.assign({}, Rz()), {
            [uz]: bz
          });
          return new Ez.c("auth", "Firebase", nz).create(uz, {
            appName: zz.name
          })
        }

        function Nz(zz, uz, bz) {
          if (!(uz instanceof bz)) throw bz.name !== uz.constructor.name && sz(zz, "argument-error"), oz(zz, "argument-error", `Type of ${uz.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function vz(zz) {
          for (var uz = arguments.length, bz = new Array(uz > 1 ? uz - 1 : 0), Ez = 1; Ez < uz; Ez++) bz[Ez - 1] = arguments[Ez];
          if ("string" !== typeof zz) {
            const uz = bz[0],
              Ez = [...bz.slice(1)];
            return Ez[0] && (Ez[0].appName = zz.name), zz._errorFactory.create(uz, ...Ez)
          }
          return Kz.create(zz, ...bz)
        }

        function xz(zz, uz) {
          if (!zz) {
            for (var bz = arguments.length, Ez = new Array(bz > 2 ? bz - 2 : 0), nz = 2; nz < bz; nz++) Ez[nz - 2] = arguments[nz];
            throw vz(uz, ...Ez)
          }
        }

        function Jz(zz) {
          const uz = "INTERNAL ASSERTION FAILED: " + zz;
          throw fz(uz), new Error(uz)
        }

        function Az(zz, uz) {
          zz || Jz(uz)
        }

        function Tz() {
          var zz;
          return "undefined" !== typeof self && (null === (zz = self.location) || void 0 === zz ? void 0 : zz.href) || ""
        }

        function Lz() {
          return "http:" === Pz() || "https:" === Pz()
        }

        function Pz() {
          var zz;
          return "undefined" !== typeof self && (null === (zz = self.location) || void 0 === zz ? void 0 : zz.protocol) || null
        }
        class Gz {
          constructor(zz, uz) {
            this.shortDelay = zz, this.longDelay = uz, Az(uz > zz, "Short delay should be less than long delay!"), this.isMobile = (0, Ez.Z)() || (0, Ez.bb)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (Lz() || (0, Ez.N)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function az(zz, uz) {
          Az(zz.emulator, "Emulator should always be set here");
          const {
            url: bz
          } = zz.emulator;
          return uz ? `${bz}${uz.startsWith("/")?uz.slice(1):uz}` : bz
        }
        class Vz {
          static initialize(zz, uz, bz) {
            this.fetchImpl = zz, uz && (this.headersImpl = uz), bz && (this.responseImpl = bz)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void Jz("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void Jz("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void Jz("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const mz = {
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
          qz = new Gz(3e4, 6e4);

        function hz(zz, uz) {
          return zz.tenantId && !uz.tenantId ? Object.assign(Object.assign({}, uz), {
            tenantId: zz.tenantId
          }) : uz
        }
        async function Uz(zz, uz, bz, nz) {
          return cz(zz, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let iz = {},
              lz = {};
            nz && ("GET" === uz ? lz = nz : iz = {
              body: JSON.stringify(nz)
            });
            const Mz = (0, Ez.gb)(Object.assign({
                key: zz.config.apiKey
              }, lz)).slice(1),
              tz = await zz._getAdditionalHeaders();
            return tz["Content-Type"] = "application/json", zz.languageCode && (tz["X-Firebase-Locale"] = zz.languageCode), Vz.fetch()(Sz(zz, zz.config.apiHost, bz, Mz), Object.assign({
              method: uz,
              headers: tz,
              referrerPolicy: "no-referrer"
            }, iz))
          }))
        }
        async function cz(zz, uz, bz) {
          zz._canInitEmulator = !1;
          const nz = Object.assign(Object.assign({}, mz), uz);
          try {
            const uz = new yz(zz),
              Ez = await Promise.race([bz(), uz.promise]);
            uz.clearNetworkTimeout();
            const iz = await Ez.json();
            if ("needConfirmation" in iz) throw Dz(zz, "account-exists-with-different-credential", iz);
            if (Ez.ok && !("errorMessage" in iz)) return iz;
            {
              const uz = Ez.ok ? iz.errorMessage : iz.error.message,
                [bz, lz] = uz.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === bz) throw Dz(zz, "credential-already-in-use", iz);
              if ("EMAIL_EXISTS" === bz) throw Dz(zz, "email-already-in-use", iz);
              if ("USER_DISABLED" === bz) throw Dz(zz, "user-disabled", iz);
              const Mz = nz[bz] || bz.toLowerCase().replace(/[_\s]+/g, "-");
              if (lz) throw oz(zz, Mz, lz);
              sz(zz, Mz)
            }
          } catch (iz) {
            if (iz instanceof Ez.f) throw iz;
            sz(zz, "network-request-failed", {
              message: String(iz)
            })
          }
        }
        async function gz(zz, uz, bz, Ez) {
          let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const iz = await Uz(zz, uz, bz, Ez, nz);
          return "mfaPendingCredential" in iz && sz(zz, "multi-factor-auth-required", {
            _serverResponse: iz
          }), iz
        }

        function Sz(zz, uz, bz, Ez) {
          const nz = `${uz}${bz}?${Ez}`;
          return zz.config.emulator ? az(zz.config, nz) : `${zz.config.apiScheme}://${nz}`
        }
        class yz {
          constructor(zz) {
            this.auth = zz, this.timer = null, this.promise = new Promise(((zz, uz) => {
              this.timer = setTimeout((() => uz(rz(this.auth, "network-request-failed"))), qz.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function Dz(zz, uz, bz) {
          const Ez = {
            appName: zz.name
          };
          bz.email && (Ez.email = bz.email), bz.phoneNumber && (Ez.phoneNumber = bz.phoneNumber);
          const nz = rz(zz, uz, Ez);
          return nz.customData._tokenResponse = bz, nz
        }

        function Qz(zz) {
          if (zz) try {
            const uz = new Date(Number(zz));
            if (!isNaN(uz.getTime())) return uz.toUTCString()
          } catch (uz) {}
        }

        function Wz(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, Ez.I)(zz).getIdToken(uz)
        }
        async function ez(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const bz = (0, Ez.I)(zz),
            nz = await bz.getIdToken(uz),
            iz = Iz(nz);
          xz(iz && iz.exp && iz.auth_time && iz.iat, bz.auth, "internal-error");
          const lz = "object" === typeof iz.firebase ? iz.firebase : void 0,
            Mz = null === lz || void 0 === lz ? void 0 : lz.sign_in_provider;
          return {
            claims: iz,
            token: nz,
            authTime: Qz(jz(iz.auth_time)),
            issuedAtTime: Qz(jz(iz.iat)),
            expirationTime: Qz(jz(iz.exp)),
            signInProvider: Mz || null,
            signInSecondFactor: (null === lz || void 0 === lz ? void 0 : lz.sign_in_second_factor) || null
          }
        }

        function jz(zz) {
          return 1e3 * Number(zz)
        }

        function Iz(zz) {
          const [uz, bz, nz] = zz.split(".");
          if (void 0 === uz || void 0 === bz || void 0 === nz) return fz("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const zz = (0, Ez.l)(bz);
            return zz ? JSON.parse(zz) : (fz("Failed to decode base64 JWT payload"), null)
          } catch (iz) {
            return fz("Caught error parsing JWT payload as JSON", null === iz || void 0 === iz ? void 0 : iz.toString()), null
          }
        }
        async function Bz(zz, uz) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return uz;
          try {
            return await uz
          } catch (bz) {
            throw bz instanceof Ez.f && function(zz) {
              let {
                code: uz
              } = zz;
              return "auth/user-disabled" === uz || "auth/user-token-expired" === uz
            }(bz) && zz.auth.currentUser === zz && await zz.auth.signOut(), bz
          }
        }
        class Cz {
          constructor(zz) {
            this.user = zz, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(zz) {
            var uz;
            if (zz) {
              const zz = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), zz
            } {
              this.errorBackoff = 3e4;
              const zz = (null !== (uz = this.user.stsTokenManager.expirationTime) && void 0 !== uz ? uz : 0) - Date.now() - 3e5;
              return Math.max(0, zz)
            }
          }
          schedule() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const uz = this.getInterval(zz);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), uz)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (zz) {
              return void("auth/network-request-failed" === (null === zz || void 0 === zz ? void 0 : zz.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class Yz {
          constructor(zz, uz) {
            this.createdAt = zz, this.lastLoginAt = uz, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = Qz(this.lastLoginAt), this.creationTime = Qz(this.createdAt)
          }
          _copy(zz) {
            this.createdAt = zz.createdAt, this.lastLoginAt = zz.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function kz(zz) {
          var uz;
          const bz = zz.auth,
            Ez = await zz.getIdToken(),
            nz = await Bz(zz, async function(zz, uz) {
              return Uz(zz, "POST", "/v1/accounts:lookup", uz)
            }(bz, {
              idToken: Ez
            }));
          xz(null === nz || void 0 === nz ? void 0 : nz.users.length, bz, "internal-error");
          const lz = nz.users[0];
          zz._notifyReloadListener(lz);
          const Mz = (null === (uz = lz.providerUserInfo) || void 0 === uz ? void 0 : uz.length) ? lz.providerUserInfo.map((zz => {
            var {
              providerId: uz
            } = zz, bz = iz(zz, ["providerId"]);
            return {
              providerId: uz,
              uid: bz.rawId || "",
              displayName: bz.displayName || null,
              email: bz.email || null,
              phoneNumber: bz.phoneNumber || null,
              photoURL: bz.photoUrl || null
            }
          })) : [];
          const tz = (Hz = zz.providerData, Oz = Mz, [...Hz.filter((zz => !Oz.some((uz => uz.providerId === zz.providerId)))), ...Oz]);
          var Hz, Oz;
          const pz = zz.isAnonymous,
            dz = !(zz.email && lz.passwordHash) && !(null === tz || void 0 === tz ? void 0 : tz.length),
            Fz = !!pz && dz,
            Zz = {
              uid: lz.localId,
              displayName: lz.displayName || null,
              photoURL: lz.photoUrl || null,
              email: lz.email || null,
              emailVerified: lz.emailVerified || !1,
              phoneNumber: lz.phoneNumber || null,
              tenantId: lz.tenantId || null,
              providerData: tz,
              metadata: new Yz(lz.createdAt, lz.lastLoginAt),
              isAnonymous: Fz
            };
          Object.assign(zz, Zz)
        }
        async function zu(zz) {
          const uz = (0, Ez.I)(zz);
          await kz(uz), await uz.auth._persistUserIfCurrent(uz), uz.auth._notifyListenersIfCurrent(uz)
        }
        class uu {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(zz) {
            xz(zz.idToken, "internal-error"), xz("undefined" !== typeof zz.idToken, "internal-error"), xz("undefined" !== typeof zz.refreshToken, "internal-error");
            const uz = "expiresIn" in zz && "undefined" !== typeof zz.expiresIn ? Number(zz.expiresIn) : function(zz) {
              const uz = Iz(zz);
              return xz(uz, "internal-error"), xz("undefined" !== typeof uz.exp, "internal-error"), xz("undefined" !== typeof uz.iat, "internal-error"), Number(uz.exp) - Number(uz.iat)
            }(zz.idToken);
            this.updateTokensAndExpiration(zz.idToken, zz.refreshToken, uz)
          }
          async getToken(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return xz(!this.accessToken || this.refreshToken, zz, "user-token-expired"), uz || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(zz, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(zz, uz) {
            const {
              accessToken: bz,
              refreshToken: nz,
              expiresIn: iz
            } = await async function(zz, uz) {
              const bz = await cz(zz, {}, (async () => {
                const bz = (0, Ez.gb)({
                    grant_type: "refresh_token",
                    refresh_token: uz
                  }).slice(1),
                  {
                    tokenApiHost: nz,
                    apiKey: iz
                  } = zz.config,
                  lz = Sz(zz, nz, "/v1/token", `key=${iz}`),
                  Mz = await zz._getAdditionalHeaders();
                return Mz["Content-Type"] = "application/x-www-form-urlencoded", Vz.fetch()(lz, {
                  method: "POST",
                  headers: Mz,
                  body: bz
                })
              }));
              return {
                accessToken: bz.access_token,
                expiresIn: bz.expires_in,
                refreshToken: bz.refresh_token
              }
            }(zz, uz);
            this.updateTokensAndExpiration(bz, nz, Number(iz))
          }
          updateTokensAndExpiration(zz, uz, bz) {
            this.refreshToken = uz || null, this.accessToken = zz || null, this.expirationTime = Date.now() + 1e3 * bz
          }
          static fromJSON(zz, uz) {
            const {
              refreshToken: bz,
              accessToken: Ez,
              expirationTime: nz
            } = uz, iz = new uu;
            return bz && (xz("string" === typeof bz, "internal-error", {
              appName: zz
            }), iz.refreshToken = bz), Ez && (xz("string" === typeof Ez, "internal-error", {
              appName: zz
            }), iz.accessToken = Ez), nz && (xz("number" === typeof nz, "internal-error", {
              appName: zz
            }), iz.expirationTime = nz), iz
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(zz) {
            this.accessToken = zz.accessToken, this.refreshToken = zz.refreshToken, this.expirationTime = zz.expirationTime
          }
          _clone() {
            return Object.assign(new uu, this.toJSON())
          }
          _performRefresh() {
            return Jz("not implemented")
          }
        }

        function bu(zz, uz) {
          xz("string" === typeof zz || "undefined" === typeof zz, "internal-error", {
            appName: uz
          })
        }
        class Eu {
          constructor(zz) {
            var {
              uid: uz,
              auth: bz,
              stsTokenManager: Ez
            } = zz, nz = iz(zz, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new Cz(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = uz, this.auth = bz, this.stsTokenManager = Ez, this.accessToken = Ez.accessToken, this.displayName = nz.displayName || null, this.email = nz.email || null, this.emailVerified = nz.emailVerified || !1, this.phoneNumber = nz.phoneNumber || null, this.photoURL = nz.photoURL || null, this.isAnonymous = nz.isAnonymous || !1, this.tenantId = nz.tenantId || null, this.providerData = nz.providerData ? [...nz.providerData] : [], this.metadata = new Yz(nz.createdAt || void 0, nz.lastLoginAt || void 0)
          }
          async getIdToken(zz) {
            const uz = await Bz(this, this.stsTokenManager.getToken(this.auth, zz));
            return xz(uz, this.auth, "internal-error"), this.accessToken !== uz && (this.accessToken = uz, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), uz
          }
          getIdTokenResult(zz) {
            return ez(this, zz)
          }
          reload() {
            return zu(this)
          }
          _assign(zz) {
            this !== zz && (xz(this.uid === zz.uid, this.auth, "internal-error"), this.displayName = zz.displayName, this.photoURL = zz.photoURL, this.email = zz.email, this.emailVerified = zz.emailVerified, this.phoneNumber = zz.phoneNumber, this.isAnonymous = zz.isAnonymous, this.tenantId = zz.tenantId, this.providerData = zz.providerData.map((zz => Object.assign({}, zz))), this.metadata._copy(zz.metadata), this.stsTokenManager._assign(zz.stsTokenManager))
          }
          _clone(zz) {
            const uz = new Eu(Object.assign(Object.assign({}, this), {
              auth: zz,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return uz.metadata._copy(this.metadata), uz
          }
          _onReload(zz) {
            xz(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = zz, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(zz) {
            this.reloadListener ? this.reloadListener(zz) : this.reloadUserInfo = zz
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              bz = !1;
            zz.idToken && zz.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(zz), bz = !0), uz && await kz(this), await this.auth._persistUserIfCurrent(this), bz && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const zz = await this.getIdToken();
            return await Bz(this, async function(zz, uz) {
              return Uz(zz, "POST", "/v1/accounts:delete", uz)
            }(this.auth, {
              idToken: zz
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
              providerData: this.providerData.map((zz => Object.assign({}, zz))),
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
          static _fromJSON(zz, uz) {
            var bz, Ez, nz, iz, lz, Mz, tz, Hz;
            const Oz = null !== (bz = uz.displayName) && void 0 !== bz ? bz : void 0,
              pz = null !== (Ez = uz.email) && void 0 !== Ez ? Ez : void 0,
              dz = null !== (nz = uz.phoneNumber) && void 0 !== nz ? nz : void 0,
              Fz = null !== (iz = uz.photoURL) && void 0 !== iz ? iz : void 0,
              Zz = null !== (lz = uz.tenantId) && void 0 !== lz ? lz : void 0,
              Rz = null !== (Mz = uz._redirectEventId) && void 0 !== Mz ? Mz : void 0,
              Kz = null !== (tz = uz.createdAt) && void 0 !== tz ? tz : void 0,
              wz = null !== (Hz = uz.lastLoginAt) && void 0 !== Hz ? Hz : void 0,
              {
                uid: Xz,
                emailVerified: fz,
                isAnonymous: sz,
                providerData: rz,
                stsTokenManager: oz
              } = uz;
            xz(Xz && oz, zz, "internal-error");
            const Nz = uu.fromJSON(this.name, oz);
            xz("string" === typeof Xz, zz, "internal-error"), bu(Oz, zz.name), bu(pz, zz.name), xz("boolean" === typeof fz, zz, "internal-error"), xz("boolean" === typeof sz, zz, "internal-error"), bu(dz, zz.name), bu(Fz, zz.name), bu(Zz, zz.name), bu(Rz, zz.name), bu(Kz, zz.name), bu(wz, zz.name);
            const vz = new Eu({
              uid: Xz,
              auth: zz,
              email: pz,
              emailVerified: fz,
              displayName: Oz,
              isAnonymous: sz,
              photoURL: Fz,
              phoneNumber: dz,
              tenantId: Zz,
              stsTokenManager: Nz,
              createdAt: Kz,
              lastLoginAt: wz
            });
            return rz && Array.isArray(rz) && (vz.providerData = rz.map((zz => Object.assign({}, zz)))), Rz && (vz._redirectEventId = Rz), vz
          }
          static async _fromIdTokenResponse(zz, uz) {
            let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const Ez = new uu;
            Ez.updateFromServerResponse(uz);
            const nz = new Eu({
              uid: uz.localId,
              auth: zz,
              stsTokenManager: Ez,
              isAnonymous: bz
            });
            return await kz(nz), nz
          }
        }
        const nu = new Map;

        function iu(zz) {
          Az(zz instanceof Function, "Expected a class definition");
          let uz = nu.get(zz);
          return uz ? (Az(uz instanceof zz, "Instance stored in cache mismatched with class"), uz) : (uz = new zz, nu.set(zz, uz), uz)
        }
        class lu {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(zz, uz) {
            this.storage[zz] = uz
          }
          async _get(zz) {
            const uz = this.storage[zz];
            return void 0 === uz ? null : uz
          }
          async _remove(zz) {
            delete this.storage[zz]
          }
          _addListener(zz, uz) {}
          _removeListener(zz, uz) {}
        }
        lu.type = "NONE";
        const Mu = lu;

        function tu(zz, uz, bz) {
          return `firebase:${zz}:${uz}:${bz}`
        }
        class Hu {
          constructor(zz, uz, bz) {
            this.persistence = zz, this.auth = uz, this.userKey = bz;
            const {
              config: Ez,
              name: nz
            } = this.auth;
            this.fullUserKey = tu(this.userKey, Ez.apiKey, nz), this.fullPersistenceKey = tu("persistence", Ez.apiKey, nz), this.boundEventHandler = uz._onStorageEvent.bind(uz), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(zz) {
            return this.persistence._set(this.fullUserKey, zz.toJSON())
          }
          async getCurrentUser() {
            const zz = await this.persistence._get(this.fullUserKey);
            return zz ? Eu._fromJSON(this.auth, zz) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(zz) {
            if (this.persistence === zz) return;
            const uz = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = zz, uz ? this.setCurrentUser(uz) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(zz, uz) {
            let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!uz.length) return new Hu(iu(Mu), zz, bz);
            const Ez = (await Promise.all(uz.map((async zz => {
              if (await zz._isAvailable()) return zz
            })))).filter((zz => zz));
            let nz = Ez[0] || iu(Mu);
            const iz = tu(bz, zz.config.apiKey, zz.name);
            let lz = null;
            for (const Hz of uz) try {
              const uz = await Hz._get(iz);
              if (uz) {
                const bz = Eu._fromJSON(zz, uz);
                Hz !== nz && (lz = bz), nz = Hz;
                break
              }
            } catch (tz) {}
            const Mz = Ez.filter((zz => zz._shouldAllowMigration));
            return nz._shouldAllowMigration && Mz.length ? (nz = Mz[0], lz && await nz._set(iz, lz.toJSON()), await Promise.all(uz.map((async zz => {
              if (zz !== nz) try {
                await zz._remove(iz)
              } catch (tz) {}
            }))), new Hu(nz, zz, bz)) : new Hu(nz, zz, bz)
          }
        }

        function Ou(zz) {
          const uz = zz.toLowerCase();
          if (uz.includes("opera/") || uz.includes("opr/") || uz.includes("opios/")) return "Opera";
          if (Zu(uz)) return "IEMobile";
          if (uz.includes("msie") || uz.includes("trident/")) return "IE";
          if (uz.includes("edge/")) return "Edge";
          if (pu(uz)) return "Firefox";
          if (uz.includes("silk/")) return "Silk";
          if (Ku(uz)) return "Blackberry";
          if (wu(uz)) return "Webos";
          if (du(uz)) return "Safari";
          if ((uz.includes("chrome/") || Fu(uz)) && !uz.includes("edge/")) return "Chrome";
          if (Ru(uz)) return "Android";
          {
            const uz = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              bz = zz.match(uz);
            if (2 === (null === bz || void 0 === bz ? void 0 : bz.length)) return bz[1]
          }
          return "Other"
        }

        function pu() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ez.J)();
          return /firefox\//i.test(zz)
        }

        function du() {
          const zz = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ez.J)()).toLowerCase();
          return zz.includes("safari/") && !zz.includes("chrome/") && !zz.includes("crios/") && !zz.includes("android")
        }

        function Fu() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ez.J)();
          return /crios\//i.test(zz)
        }

        function Zu() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ez.J)();
          return /iemobile/i.test(zz)
        }

        function Ru() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ez.J)();
          return /android/i.test(zz)
        }

        function Ku() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ez.J)();
          return /blackberry/i.test(zz)
        }

        function wu() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ez.J)();
          return /webos/i.test(zz)
        }

        function Xu() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ez.J)();
          return /iphone|ipad|ipod/i.test(zz) || /macintosh/i.test(zz) && /mobile/i.test(zz)
        }

        function fu() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ez.J)();
          return Xu(zz) || Ru(zz) || wu(zz) || Ku(zz) || /windows phone/i.test(zz) || Zu(zz)
        }

        function su(zz) {
          let uz, bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (zz) {
            case "Browser":
              uz = Ou((0, Ez.J)());
              break;
            case "Worker":
              uz = `${Ou((0,Ez.J)())}-${zz}`;
              break;
            default:
              uz = zz
          }
          const iz = bz.length ? bz.join(",") : "FirebaseCore-web";
          return `${uz}/JsCore/${nz.h}/${iz}`
        }
        async function ru(zz, uz) {
          return Uz(zz, "GET", "/v2/recaptchaConfig", hz(zz, uz))
        }

        function ou(zz) {
          return void 0 !== zz && void 0 !== zz.getResponse
        }

        function Nu(zz) {
          return void 0 !== zz && void 0 !== zz.enterprise
        }
        class vu {
          constructor(zz) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === zz.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = zz.recaptchaKey.split("/")[3], this.emailPasswordEnabled = zz.recaptchaEnforcementState.some((zz => "EMAIL_PASSWORD_PROVIDER" === zz.provider && "OFF" !== zz.enforcementState))
          }
        }

        function xu(zz) {
          return new Promise(((uz, bz) => {
            const Ez = document.createElement("script");
            Ez.setAttribute("src", zz), Ez.onload = uz, Ez.onerror = zz => {
                const uz = rz("internal-error");
                uz.customData = zz, bz(uz)
              }, Ez.type = "text/javascript", Ez.charset = "UTF-8",
              function() {
                var zz, uz;
                return null !== (uz = null === (zz = document.getElementsByTagName("head")) || void 0 === zz ? void 0 : zz[0]) && void 0 !== uz ? uz : document
              }().appendChild(Ez)
          }))
        }

        function Ju(zz) {
          return `__${zz}${Math.floor(1e6*Math.random())}`
        }
        class Au {
          constructor(zz) {
            this.type = "recaptcha-enterprise", this.auth = Gu(zz)
          }
          async verify() {
            let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function bz(uz, bz, Ez) {
              const nz = window.grecaptcha;
              Nu(nz) ? nz.enterprise.ready((() => {
                nz.enterprise.execute(uz, {
                  action: zz
                }).then((zz => {
                  bz(zz)
                })).catch((() => {
                  bz("NO_RECAPTCHA")
                }))
              })) : Ez(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((zz, Ez) => {
              (async function(zz) {
                if (!uz) {
                  if (null == zz.tenantId && null != zz._agentRecaptchaConfig) return zz._agentRecaptchaConfig.siteKey;
                  if (null != zz.tenantId && void 0 !== zz._tenantRecaptchaConfigs[zz.tenantId]) return zz._tenantRecaptchaConfigs[zz.tenantId].siteKey
                }
                return new Promise((async (uz, bz) => {
                  ru(zz, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((Ez => {
                    if (void 0 !== Ez.recaptchaKey) {
                      const bz = new vu(Ez);
                      return null == zz.tenantId ? zz._agentRecaptchaConfig = bz : zz._tenantRecaptchaConfigs[zz.tenantId] = bz, uz(bz.siteKey)
                    }
                    bz(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((zz => {
                    bz(zz)
                  }))
                }))
              })(this.auth).then((nz => {
                if (!uz && Nu(window.grecaptcha)) bz(nz, zz, Ez);
                else {
                  if ("undefined" === typeof window) return void Ez(new Error("RecaptchaVerifier is only supported in browser"));
                  xu("https://www.google.com/recaptcha/enterprise.js?render=" + nz).then((() => {
                    bz(nz, zz, Ez)
                  })).catch((zz => {
                    Ez(zz)
                  }))
                }
              })).catch((zz => {
                Ez(zz)
              }))
            }))
          }
        }
        async function Tu(zz, uz, bz) {
          let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const nz = new Au(zz);
          let iz;
          try {
            iz = await nz.verify(bz)
          } catch (Mz) {
            iz = await nz.verify(bz, !0)
          }
          const lz = Object.assign({}, uz);
          return Ez ? Object.assign(lz, {
            captchaResp: iz
          }) : Object.assign(lz, {
            captchaResponse: iz
          }), Object.assign(lz, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(lz, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), lz
        }
        class Lu {
          constructor(zz) {
            this.auth = zz, this.queue = []
          }
          pushCallback(zz, uz) {
            const bz = uz => new Promise(((bz, Ez) => {
              try {
                bz(zz(uz))
              } catch (nz) {
                Ez(nz)
              }
            }));
            bz.onAbort = uz, this.queue.push(bz);
            const Ez = this.queue.length - 1;
            return () => {
              this.queue[Ez] = () => Promise.resolve()
            }
          }
          async runMiddleware(zz) {
            if (this.auth.currentUser === zz) return;
            const uz = [];
            try {
              for (const bz of this.queue) await bz(zz), bz.onAbort && uz.push(bz.onAbort)
            } catch (bz) {
              uz.reverse();
              for (const zz of uz) try {
                zz()
              } catch (Ez) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === bz || void 0 === bz ? void 0 : bz.message
              })
            }
          }
        }
        class Pu {
          constructor(zz, uz, bz, Ez) {
            this.app = zz, this.heartbeatServiceProvider = uz, this.appCheckServiceProvider = bz, this.config = Ez, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new au(this), this.idTokenSubscription = new au(this), this.beforeStateQueue = new Lu(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = Kz, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = zz.name, this.clientVersion = Ez.sdkClientVersion
          }
          _initializeWithPersistence(zz, uz) {
            return uz && (this._popupRedirectResolver = iu(uz)), this._initializationPromise = this.queue((async () => {
              var bz, Ez;
              if (!this._deleted && (this.persistenceManager = await Hu.create(this, zz), !this._deleted)) {
                if (null === (bz = this._popupRedirectResolver) || void 0 === bz ? void 0 : bz._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (nz) {}
                await this.initializeCurrentUser(uz), this.lastNotifiedUid = (null === (Ez = this.currentUser) || void 0 === Ez ? void 0 : Ez.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const zz = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || zz ? this.currentUser && zz && this.currentUser.uid === zz.uid ? (this._currentUser._assign(zz), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(zz, !0) : void 0
          }
          async initializeCurrentUser(zz) {
            var uz;
            const bz = await this.assertedPersistence.getCurrentUser();
            let Ez = bz,
              nz = !1;
            if (zz && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const bz = null === (uz = this.redirectUser) || void 0 === uz ? void 0 : uz._redirectEventId,
                iz = null === Ez || void 0 === Ez ? void 0 : Ez._redirectEventId,
                lz = await this.tryRedirectSignIn(zz);
              bz && bz !== iz || !(null === lz || void 0 === lz ? void 0 : lz.user) || (Ez = lz.user, nz = !0)
            }
            if (!Ez) return this.directlySetCurrentUser(null);
            if (!Ez._redirectEventId) {
              if (nz) try {
                await this.beforeStateQueue.runMiddleware(Ez)
              } catch (iz) {
                Ez = bz, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(iz)))
              }
              return Ez ? this.reloadAndSetCurrentUserOrClear(Ez) : this.directlySetCurrentUser(null)
            }
            return xz(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === Ez._redirectEventId ? this.directlySetCurrentUser(Ez) : this.reloadAndSetCurrentUserOrClear(Ez)
          }
          async tryRedirectSignIn(zz) {
            let uz = null;
            try {
              uz = await this._popupRedirectResolver._completeRedirectFn(this, zz, !0)
            } catch (bz) {
              await this._setRedirectUser(null)
            }
            return uz
          }
          async reloadAndSetCurrentUserOrClear(zz) {
            try {
              await kz(zz)
            } catch (uz) {
              if ("auth/network-request-failed" !== (null === uz || void 0 === uz ? void 0 : uz.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(zz)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const zz = navigator;
              return zz.languages && zz.languages[0] || zz.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(zz) {
            const uz = zz ? (0, Ez.I)(zz) : null;
            return uz && xz(uz.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(uz && uz._clone(this))
          }
          async _updateCurrentUser(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return zz && xz(this.tenantId === zz.tenantId, this, "tenant-id-mismatch"), uz || await this.beforeStateQueue.runMiddleware(zz), this.queue((async () => {
              await this.directlySetCurrentUser(zz), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(zz) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(iu(zz))
            }))
          }
          async initializeRecaptchaConfig() {
            const zz = await ru(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              uz = new vu(zz);
            if (null == this.tenantId ? this._agentRecaptchaConfig = uz : this._tenantRecaptchaConfigs[this.tenantId] = uz, uz.emailPasswordEnabled) {
              new Au(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(zz) {
            this._errorFactory = new Ez.c("auth", "Firebase", zz())
          }
          onAuthStateChanged(zz, uz, bz) {
            return this.registerStateListener(this.authStateSubscription, zz, uz, bz)
          }
          beforeAuthStateChanged(zz, uz) {
            return this.beforeStateQueue.pushCallback(zz, uz)
          }
          onIdTokenChanged(zz, uz, bz) {
            return this.registerStateListener(this.idTokenSubscription, zz, uz, bz)
          }
          toJSON() {
            var zz;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (zz = this._currentUser) || void 0 === zz ? void 0 : zz.toJSON()
            }
          }
          async _setRedirectUser(zz, uz) {
            const bz = await this.getOrInitRedirectPersistenceManager(uz);
            return null === zz ? bz.removeCurrentUser() : bz.setCurrentUser(zz)
          }
          async getOrInitRedirectPersistenceManager(zz) {
            if (!this.redirectPersistenceManager) {
              const uz = zz && iu(zz) || this._popupRedirectResolver;
              xz(uz, this, "argument-error"), this.redirectPersistenceManager = await Hu.create(this, [iu(uz._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(zz) {
            var uz, bz;
            return this._isInitialized && await this.queue((async () => {})), (null === (uz = this._currentUser) || void 0 === uz ? void 0 : uz._redirectEventId) === zz ? this._currentUser : (null === (bz = this.redirectUser) || void 0 === bz ? void 0 : bz._redirectEventId) === zz ? this.redirectUser : null
          }
          async _persistUserIfCurrent(zz) {
            if (zz === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(zz)))
          }
          _notifyListenersIfCurrent(zz) {
            zz === this.currentUser && this.notifyAuthListeners()
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
            var zz, uz;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const bz = null !== (uz = null === (zz = this.currentUser) || void 0 === zz ? void 0 : zz.uid) && void 0 !== uz ? uz : null;
            this.lastNotifiedUid !== bz && (this.lastNotifiedUid = bz, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(zz, uz, bz, Ez) {
            if (this._deleted) return () => {};
            const nz = "function" === typeof uz ? uz : uz.next.bind(uz),
              iz = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return xz(iz, this, "internal-error"), iz.then((() => nz(this.currentUser))), "function" === typeof uz ? zz.addObserver(uz, bz, Ez) : zz.addObserver(uz)
          }
          async directlySetCurrentUser(zz) {
            this.currentUser && this.currentUser !== zz && this._currentUser._stopProactiveRefresh(), zz && this.isProactiveRefreshEnabled && zz._startProactiveRefresh(), this.currentUser = zz, zz ? await this.assertedPersistence.setCurrentUser(zz) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(zz) {
            return this.operations = this.operations.then(zz, zz), this.operations
          }
          get assertedPersistence() {
            return xz(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(zz) {
            zz && !this.frameworks.includes(zz) && (this.frameworks.push(zz), this.frameworks.sort(), this.clientVersion = su(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var zz;
            const uz = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (uz["X-Firebase-gmpid"] = this.app.options.appId);
            const bz = await (null === (zz = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === zz ? void 0 : zz.getHeartbeatsHeader());
            bz && (uz["X-Firebase-Client"] = bz);
            const Ez = await this._getAppCheckToken();
            return Ez && (uz["X-Firebase-AppCheck"] = Ez), uz
          }
          async _getAppCheckToken() {
            var zz;
            const uz = await (null === (zz = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === zz ? void 0 : zz.getToken());
            return (null === uz || void 0 === uz ? void 0 : uz.error) && function(zz) {
              if (Xz.logLevel <= lz.c.WARN) {
                for (var uz = arguments.length, bz = new Array(uz > 1 ? uz - 1 : 0), Ez = 1; Ez < uz; Ez++) bz[Ez - 1] = arguments[Ez];
                Xz.warn(`Auth (${nz.h}): ${zz}`, ...bz)
              }
            }(`Error while retrieving App Check token: ${uz.error}`), null === uz || void 0 === uz ? void 0 : uz.token
          }
        }

        function Gu(zz) {
          return (0, Ez.I)(zz)
        }
        class au {
          constructor(zz) {
            this.auth = zz, this.observer = null, this.addObserver = (0, Ez.s)((zz => this.observer = zz))
          }
          get next() {
            return xz(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function Vu(zz, uz) {
          const bz = (0, nz.x)(zz, "auth");
          if (bz.isInitialized()) {
            const zz = bz.getImmediate(),
              nz = bz.getOptions();
            if ((0, Ez.t)(nz, null !== uz && void 0 !== uz ? uz : {})) return zz;
            sz(zz, "already-initialized")
          }
          return bz.initialize({
            options: uz
          })
        }

        function mu(zz, uz, bz) {
          const Ez = Gu(zz);
          xz(Ez._canInitEmulator, Ez, "emulator-config-failed"), xz(/^https?:\/\//.test(uz), Ez, "invalid-emulator-scheme");
          const nz = !!(null === bz || void 0 === bz ? void 0 : bz.disableWarnings),
            iz = qu(uz),
            {
              host: lz,
              port: Mz
            } = function(zz) {
              const uz = qu(zz),
                bz = /(\/\/)?([^?#/]+)/.exec(zz.substr(uz.length));
              if (!bz) return {
                host: "",
                port: null
              };
              const Ez = bz[2].split("@").pop() || "",
                nz = /^(\[[^\]]+\])(:|$)/.exec(Ez);
              if (nz) {
                const zz = nz[1];
                return {
                  host: zz,
                  port: hu(Ez.substr(zz.length + 1))
                }
              } {
                const [zz, uz] = Ez.split(":");
                return {
                  host: zz,
                  port: hu(uz)
                }
              }
            }(uz),
            tz = null === Mz ? "" : `:${Mz}`;
          Ez.config.emulator = {
            url: `${iz}//${lz}${tz}/`
          }, Ez.settings.appVerificationDisabledForTesting = !0, Ez.emulatorConfig = Object.freeze({
            host: lz,
            port: Mz,
            protocol: iz.replace(":", ""),
            options: Object.freeze({
              disableWarnings: nz
            })
          }), nz || function() {
            function zz() {
              const zz = document.createElement("p"),
                uz = zz.style;
              zz.innerText = "Running in emulator mode. Do not use with production credentials.", uz.position = "fixed", uz.width = "100%", uz.backgroundColor = "#ffffff", uz.border = ".1em solid #000000", uz.color = "#b50000", uz.bottom = "0px", uz.left = "0px", uz.margin = "0px", uz.zIndex = "10000", uz.textAlign = "center", zz.classList.add("firebase-emulator-warning"), document.body.appendChild(zz)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", zz) : zz())
          }()
        }

        function qu(zz) {
          const uz = zz.indexOf(":");
          return uz < 0 ? "" : zz.substr(0, uz + 1)
        }

        function hu(zz) {
          if (!zz) return null;
          const uz = Number(zz);
          return isNaN(uz) ? null : uz
        }
        class Uu {
          constructor(zz, uz) {
            this.providerId = zz, this.signInMethod = uz
          }
          toJSON() {
            return Jz("not implemented")
          }
          _getIdTokenResponse(zz) {
            return Jz("not implemented")
          }
          _linkToIdToken(zz, uz) {
            return Jz("not implemented")
          }
          _getReauthenticationResolver(zz) {
            return Jz("not implemented")
          }
        }
        async function cu(zz, uz) {
          return Uz(zz, "POST", "/v1/accounts:resetPassword", hz(zz, uz))
        }
        async function gu(zz, uz) {
          return Uz(zz, "POST", "/v1/accounts:update", uz)
        }
        async function Su(zz, uz) {
          return gz(zz, "POST", "/v1/accounts:signInWithPassword", hz(zz, uz))
        }
        async function yu(zz, uz) {
          return Uz(zz, "POST", "/v1/accounts:sendOobCode", hz(zz, uz))
        }
        async function Du(zz, uz) {
          return yu(zz, uz)
        }
        async function Qu(zz, uz) {
          return yu(zz, uz)
        }
        class Wu extends Uu {
          constructor(zz, uz, bz) {
            let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", bz), this._email = zz, this._password = uz, this._tenantId = Ez
          }
          static _fromEmailAndPassword(zz, uz) {
            return new Wu(zz, uz, "password")
          }
          static _fromEmailAndCode(zz, uz) {
            return new Wu(zz, uz, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(zz) {
            const uz = "string" === typeof zz ? JSON.parse(zz) : zz;
            if ((null === uz || void 0 === uz ? void 0 : uz.email) && (null === uz || void 0 === uz ? void 0 : uz.password)) {
              if ("password" === uz.signInMethod) return this._fromEmailAndPassword(uz.email, uz.password);
              if ("emailLink" === uz.signInMethod) return this._fromEmailAndCode(uz.email, uz.password, uz.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(zz) {
            var uz;
            switch (this.signInMethod) {
              case "password":
                const bz = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (uz = zz._getRecaptchaConfig()) || void 0 === uz ? void 0 : uz.emailPasswordEnabled) {
                  const uz = await Tu(zz, bz, "signInWithPassword");
                  return Su(zz, uz)
                }
                return Su(zz, bz).catch((async uz => {
                  if ("auth/missing-recaptcha-token" === uz.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const uz = await Tu(zz, bz, "signInWithPassword");
                    return Su(zz, uz)
                  }
                  return Promise.reject(uz)
                }));
              case "emailLink":
                return async function(zz, uz) {
                  return gz(zz, "POST", "/v1/accounts:signInWithEmailLink", hz(zz, uz))
                }(zz, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                sz(zz, "internal-error")
            }
          }
          async _linkToIdToken(zz, uz) {
            switch (this.signInMethod) {
              case "password":
                return gu(zz, {
                  idToken: uz,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(zz, uz) {
                  return gz(zz, "POST", "/v1/accounts:signInWithEmailLink", hz(zz, uz))
                }(zz, {
                  idToken: uz,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                sz(zz, "internal-error")
            }
          }
          _getReauthenticationResolver(zz) {
            return this._getIdTokenResponse(zz)
          }
        }
        async function eu(zz, uz) {
          return gz(zz, "POST", "/v1/accounts:signInWithIdp", hz(zz, uz))
        }
        class ju extends Uu {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(zz) {
            const uz = new ju(zz.providerId, zz.signInMethod);
            return zz.idToken || zz.accessToken ? (zz.idToken && (uz.idToken = zz.idToken), zz.accessToken && (uz.accessToken = zz.accessToken), zz.nonce && !zz.pendingToken && (uz.nonce = zz.nonce), zz.pendingToken && (uz.pendingToken = zz.pendingToken)) : zz.oauthToken && zz.oauthTokenSecret ? (uz.accessToken = zz.oauthToken, uz.secret = zz.oauthTokenSecret) : sz("argument-error"), uz
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
          static fromJSON(zz) {
            const uz = "string" === typeof zz ? JSON.parse(zz) : zz,
              {
                providerId: bz,
                signInMethod: Ez
              } = uz,
              nz = iz(uz, ["providerId", "signInMethod"]);
            if (!bz || !Ez) return null;
            const lz = new ju(bz, Ez);
            return lz.idToken = nz.idToken || void 0, lz.accessToken = nz.accessToken || void 0, lz.secret = nz.secret, lz.nonce = nz.nonce, lz.pendingToken = nz.pendingToken || null, lz
          }
          _getIdTokenResponse(zz) {
            return eu(zz, this.buildRequest())
          }
          _linkToIdToken(zz, uz) {
            const bz = this.buildRequest();
            return bz.idToken = uz, eu(zz, bz)
          }
          _getReauthenticationResolver(zz) {
            const uz = this.buildRequest();
            return uz.autoCreate = !1, eu(zz, uz)
          }
          buildRequest() {
            const zz = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) zz.pendingToken = this.pendingToken;
            else {
              const uz = {};
              this.idToken && (uz.id_token = this.idToken), this.accessToken && (uz.access_token = this.accessToken), this.secret && (uz.oauth_token_secret = this.secret), uz.providerId = this.providerId, this.nonce && !this.pendingToken && (uz.nonce = this.nonce), zz.postBody = (0, Ez.gb)(uz)
            }
            return zz
          }
        }
        const Iu = {
          USER_NOT_FOUND: "user-not-found"
        };
        class Bu extends Uu {
          constructor(zz) {
            super("phone", "phone"), this.params = zz
          }
          static _fromVerification(zz, uz) {
            return new Bu({
              verificationId: zz,
              verificationCode: uz
            })
          }
          static _fromTokenResponse(zz, uz) {
            return new Bu({
              phoneNumber: zz,
              temporaryProof: uz
            })
          }
          _getIdTokenResponse(zz) {
            return async function(zz, uz) {
              return gz(zz, "POST", "/v1/accounts:signInWithPhoneNumber", hz(zz, uz))
            }(zz, this._makeVerificationRequest())
          }
          _linkToIdToken(zz, uz) {
            return async function(zz, uz) {
              const bz = await gz(zz, "POST", "/v1/accounts:signInWithPhoneNumber", hz(zz, uz));
              if (bz.temporaryProof) throw Dz(zz, "account-exists-with-different-credential", bz);
              return bz
            }(zz, Object.assign({
              idToken: uz
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(zz) {
            return async function(zz, uz) {
              return gz(zz, "POST", "/v1/accounts:signInWithPhoneNumber", hz(zz, Object.assign(Object.assign({}, uz), {
                operation: "REAUTH"
              })), Iu)
            }(zz, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: zz,
              phoneNumber: uz,
              verificationId: bz,
              verificationCode: Ez
            } = this.params;
            return zz && uz ? {
              temporaryProof: zz,
              phoneNumber: uz
            } : {
              sessionInfo: bz,
              code: Ez
            }
          }
          toJSON() {
            const zz = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (zz.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (zz.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (zz.verificationCode = this.params.verificationCode), this.params.verificationId && (zz.verificationId = this.params.verificationId), zz
          }
          static fromJSON(zz) {
            "string" === typeof zz && (zz = JSON.parse(zz));
            const {
              verificationId: uz,
              verificationCode: bz,
              phoneNumber: Ez,
              temporaryProof: nz
            } = zz;
            return bz || uz || Ez || nz ? new Bu({
              verificationId: uz,
              verificationCode: bz,
              phoneNumber: Ez,
              temporaryProof: nz
            }) : null
          }
        }
        class Cu {
          constructor(zz) {
            var uz, bz, nz, iz, lz, Mz;
            const tz = (0, Ez.fb)((0, Ez.w)(zz)),
              Hz = null !== (uz = tz.apiKey) && void 0 !== uz ? uz : null,
              Oz = null !== (bz = tz.oobCode) && void 0 !== bz ? bz : null,
              pz = function(zz) {
                switch (zz) {
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
              }(null !== (nz = tz.mode) && void 0 !== nz ? nz : null);
            xz(Hz && Oz && pz, "argument-error"), this.apiKey = Hz, this.operation = pz, this.code = Oz, this.continueUrl = null !== (iz = tz.continueUrl) && void 0 !== iz ? iz : null, this.languageCode = null !== (lz = tz.languageCode) && void 0 !== lz ? lz : null, this.tenantId = null !== (Mz = tz.tenantId) && void 0 !== Mz ? Mz : null
          }
          static parseLink(zz) {
            const uz = function(zz) {
              const uz = (0, Ez.fb)((0, Ez.w)(zz)).link,
                bz = uz ? (0, Ez.fb)((0, Ez.w)(uz)).deep_link_id : null,
                nz = (0, Ez.fb)((0, Ez.w)(zz)).deep_link_id;
              return (nz ? (0, Ez.fb)((0, Ez.w)(nz)).link : null) || nz || bz || uz || zz
            }(zz);
            try {
              return new Cu(uz)
            } catch (bz) {
              return null
            }
          }
        }

        function Yu(zz) {
          return Cu.parseLink(zz)
        }
        class ku {
          constructor() {
            this.providerId = ku.PROVIDER_ID
          }
          static credential(zz, uz) {
            return Wu._fromEmailAndPassword(zz, uz)
          }
          static credentialWithLink(zz, uz) {
            const bz = Cu.parseLink(uz);
            return xz(bz, "argument-error"), Wu._fromEmailAndCode(zz, bz.code, bz.tenantId)
          }
        }
        ku.PROVIDER_ID = "password", ku.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", ku.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class zb {
          constructor(zz) {
            this.providerId = zz, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(zz) {
            this.defaultLanguageCode = zz
          }
          setCustomParameters(zz) {
            return this.customParameters = zz, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class ub extends zb {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(zz) {
            return this.scopes.includes(zz) || this.scopes.push(zz), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class bb extends ub {
          static credentialFromJSON(zz) {
            const uz = "string" === typeof zz ? JSON.parse(zz) : zz;
            return xz("providerId" in uz && "signInMethod" in uz, "argument-error"), ju._fromParams(uz)
          }
          credential(zz) {
            return this._credential(Object.assign(Object.assign({}, zz), {
              nonce: zz.rawNonce
            }))
          }
          _credential(zz) {
            return xz(zz.idToken || zz.accessToken, "argument-error"), ju._fromParams(Object.assign(Object.assign({}, zz), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(zz) {
            return bb.oauthCredentialFromTaggedObject(zz)
          }
          static credentialFromError(zz) {
            return bb.oauthCredentialFromTaggedObject(zz.customData || {})
          }
          static oauthCredentialFromTaggedObject(zz) {
            let {
              _tokenResponse: uz
            } = zz;
            if (!uz) return null;
            const {
              oauthIdToken: bz,
              oauthAccessToken: Ez,
              oauthTokenSecret: nz,
              pendingToken: iz,
              nonce: lz,
              providerId: Mz
            } = uz;
            if (!Ez && !nz && !bz && !iz) return null;
            if (!Mz) return null;
            try {
              return new bb(Mz)._credential({
                idToken: bz,
                accessToken: Ez,
                nonce: lz,
                pendingToken: iz
              })
            } catch (tz) {
              return null
            }
          }
        }
        class Eb extends ub {
          constructor() {
            super("facebook.com")
          }
          static credential(zz) {
            return ju._fromParams({
              providerId: Eb.PROVIDER_ID,
              signInMethod: Eb.FACEBOOK_SIGN_IN_METHOD,
              accessToken: zz
            })
          }
          static credentialFromResult(zz) {
            return Eb.credentialFromTaggedObject(zz)
          }
          static credentialFromError(zz) {
            return Eb.credentialFromTaggedObject(zz.customData || {})
          }
          static credentialFromTaggedObject(zz) {
            let {
              _tokenResponse: uz
            } = zz;
            if (!uz || !("oauthAccessToken" in uz)) return null;
            if (!uz.oauthAccessToken) return null;
            try {
              return Eb.credential(uz.oauthAccessToken)
            } catch (bz) {
              return null
            }
          }
        }
        Eb.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Eb.PROVIDER_ID = "facebook.com";
        class nb extends ub {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(zz, uz) {
            return ju._fromParams({
              providerId: nb.PROVIDER_ID,
              signInMethod: nb.GOOGLE_SIGN_IN_METHOD,
              idToken: zz,
              accessToken: uz
            })
          }
          static credentialFromResult(zz) {
            return nb.credentialFromTaggedObject(zz)
          }
          static credentialFromError(zz) {
            return nb.credentialFromTaggedObject(zz.customData || {})
          }
          static credentialFromTaggedObject(zz) {
            let {
              _tokenResponse: uz
            } = zz;
            if (!uz) return null;
            const {
              oauthIdToken: bz,
              oauthAccessToken: Ez
            } = uz;
            if (!bz && !Ez) return null;
            try {
              return nb.credential(bz, Ez)
            } catch (nz) {
              return null
            }
          }
        }
        nb.GOOGLE_SIGN_IN_METHOD = "google.com", nb.PROVIDER_ID = "google.com";
        class ib extends ub {
          constructor() {
            super("github.com")
          }
          static credential(zz) {
            return ju._fromParams({
              providerId: ib.PROVIDER_ID,
              signInMethod: ib.GITHUB_SIGN_IN_METHOD,
              accessToken: zz
            })
          }
          static credentialFromResult(zz) {
            return ib.credentialFromTaggedObject(zz)
          }
          static credentialFromError(zz) {
            return ib.credentialFromTaggedObject(zz.customData || {})
          }
          static credentialFromTaggedObject(zz) {
            let {
              _tokenResponse: uz
            } = zz;
            if (!uz || !("oauthAccessToken" in uz)) return null;
            if (!uz.oauthAccessToken) return null;
            try {
              return ib.credential(uz.oauthAccessToken)
            } catch (bz) {
              return null
            }
          }
        }
        ib.GITHUB_SIGN_IN_METHOD = "github.com", ib.PROVIDER_ID = "github.com";
        class lb extends Uu {
          constructor(zz, uz) {
            super(zz, zz), this.pendingToken = uz
          }
          _getIdTokenResponse(zz) {
            return eu(zz, this.buildRequest())
          }
          _linkToIdToken(zz, uz) {
            const bz = this.buildRequest();
            return bz.idToken = uz, eu(zz, bz)
          }
          _getReauthenticationResolver(zz) {
            const uz = this.buildRequest();
            return uz.autoCreate = !1, eu(zz, uz)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(zz) {
            const uz = "string" === typeof zz ? JSON.parse(zz) : zz,
              {
                providerId: bz,
                signInMethod: Ez,
                pendingToken: nz
              } = uz;
            return bz && Ez && nz && bz === Ez ? new lb(bz, nz) : null
          }
          static _create(zz, uz) {
            return new lb(zz, uz)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class Mb extends zb {
          constructor(zz) {
            xz(zz.startsWith("saml."), "argument-error"), super(zz)
          }
          static credentialFromResult(zz) {
            return Mb.samlCredentialFromTaggedObject(zz)
          }
          static credentialFromError(zz) {
            return Mb.samlCredentialFromTaggedObject(zz.customData || {})
          }
          static credentialFromJSON(zz) {
            const uz = lb.fromJSON(zz);
            return xz(uz, "argument-error"), uz
          }
          static samlCredentialFromTaggedObject(zz) {
            let {
              _tokenResponse: uz
            } = zz;
            if (!uz) return null;
            const {
              pendingToken: bz,
              providerId: Ez
            } = uz;
            if (!bz || !Ez) return null;
            try {
              return lb._create(Ez, bz)
            } catch (nz) {
              return null
            }
          }
        }
        class tb extends ub {
          constructor() {
            super("twitter.com")
          }
          static credential(zz, uz) {
            return ju._fromParams({
              providerId: tb.PROVIDER_ID,
              signInMethod: tb.TWITTER_SIGN_IN_METHOD,
              oauthToken: zz,
              oauthTokenSecret: uz
            })
          }
          static credentialFromResult(zz) {
            return tb.credentialFromTaggedObject(zz)
          }
          static credentialFromError(zz) {
            return tb.credentialFromTaggedObject(zz.customData || {})
          }
          static credentialFromTaggedObject(zz) {
            let {
              _tokenResponse: uz
            } = zz;
            if (!uz) return null;
            const {
              oauthAccessToken: bz,
              oauthTokenSecret: Ez
            } = uz;
            if (!bz || !Ez) return null;
            try {
              return tb.credential(bz, Ez)
            } catch (nz) {
              return null
            }
          }
        }
        async function Hb(zz, uz) {
          return gz(zz, "POST", "/v1/accounts:signUp", hz(zz, uz))
        }
        tb.TWITTER_SIGN_IN_METHOD = "twitter.com", tb.PROVIDER_ID = "twitter.com";
        class Ob {
          constructor(zz) {
            this.user = zz.user, this.providerId = zz.providerId, this._tokenResponse = zz._tokenResponse, this.operationType = zz.operationType
          }
          static async _fromIdTokenResponse(zz, uz, bz) {
            let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const nz = await Eu._fromIdTokenResponse(zz, bz, Ez),
              iz = pb(bz);
            return new Ob({
              user: nz,
              providerId: iz,
              _tokenResponse: bz,
              operationType: uz
            })
          }
          static async _forOperation(zz, uz, bz) {
            await zz._updateTokensIfNecessary(bz, !0);
            const Ez = pb(bz);
            return new Ob({
              user: zz,
              providerId: Ez,
              _tokenResponse: bz,
              operationType: uz
            })
          }
        }

        function pb(zz) {
          return zz.providerId ? zz.providerId : "phoneNumber" in zz ? "phone" : null
        }
        async function db(zz) {
          var uz;
          const bz = Gu(zz);
          if (await bz._initializationPromise, null === (uz = bz.currentUser) || void 0 === uz ? void 0 : uz.isAnonymous) return new Ob({
            user: bz.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const Ez = await Hb(bz, {
              returnSecureToken: !0
            }),
            nz = await Ob._fromIdTokenResponse(bz, "signIn", Ez, !0);
          return await bz._updateCurrentUser(nz.user), nz
        }
        class Fb extends Ez.f {
          constructor(zz, uz, bz, Ez) {
            var nz;
            super(uz.code, uz.message), this.operationType = bz, this.user = Ez, Object.setPrototypeOf(this, Fb.prototype), this.customData = {
              appName: zz.name,
              tenantId: null !== (nz = zz.tenantId) && void 0 !== nz ? nz : void 0,
              _serverResponse: uz.customData._serverResponse,
              operationType: bz
            }
          }
          static _fromErrorAndOperation(zz, uz, bz, Ez) {
            return new Fb(zz, uz, bz, Ez)
          }
        }

        function Zb(zz, uz, bz, Ez) {
          return ("reauthenticate" === uz ? bz._getReauthenticationResolver(zz) : bz._getIdTokenResponse(zz)).catch((bz => {
            if ("auth/multi-factor-auth-required" === bz.code) throw Fb._fromErrorAndOperation(zz, bz, uz, Ez);
            throw bz
          }))
        }

        function Rb(zz) {
          return new Set(zz.map((zz => {
            let {
              providerId: uz
            } = zz;
            return uz
          })).filter((zz => !!zz)))
        }
        async function Kb(zz, uz) {
          const bz = (0, Ez.I)(zz);
          await Xb(!0, bz, uz);
          const {
            providerUserInfo: nz
          } = await async function(zz, uz) {
            return Uz(zz, "POST", "/v1/accounts:update", uz)
          }(bz.auth, {
            idToken: await bz.getIdToken(),
            deleteProvider: [uz]
          }), iz = Rb(nz || []);
          return bz.providerData = bz.providerData.filter((zz => iz.has(zz.providerId))), iz.has("phone") || (bz.phoneNumber = null), await bz.auth._persistUserIfCurrent(bz), bz
        }
        async function wb(zz, uz) {
          let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Ez = await Bz(zz, uz._linkToIdToken(zz.auth, await zz.getIdToken()), bz);
          return Ob._forOperation(zz, "link", Ez)
        }
        async function Xb(zz, uz, bz) {
          await kz(uz);
          const Ez = !1 === zz ? "provider-already-linked" : "no-such-provider";
          xz(Rb(uz.providerData).has(bz) === zz, uz.auth, Ez)
        }
        async function fb(zz, uz) {
          let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: Ez
          } = zz, nz = "reauthenticate";
          try {
            const iz = await Bz(zz, Zb(Ez, nz, uz, zz), bz);
            xz(iz.idToken, Ez, "internal-error");
            const lz = Iz(iz.idToken);
            xz(lz, Ez, "internal-error");
            const {
              sub: Mz
            } = lz;
            return xz(zz.uid === Mz, Ez, "user-mismatch"), Ob._forOperation(zz, nz, iz)
          } catch (iz) {
            throw "auth/user-not-found" === (null === iz || void 0 === iz ? void 0 : iz.code) && sz(Ez, "user-mismatch"), iz
          }
        }
        async function sb(zz, uz) {
          let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Ez = "signIn",
            nz = await Zb(zz, Ez, uz),
            iz = await Ob._fromIdTokenResponse(zz, Ez, nz);
          return bz || await zz._updateCurrentUser(iz.user), iz
        }
        async function rb(zz, uz) {
          return sb(Gu(zz), uz)
        }
        async function ob(zz, uz) {
          const bz = (0, Ez.I)(zz);
          return await Xb(!1, bz, uz.providerId), wb(bz, uz)
        }
        async function Nb(zz, uz) {
          return fb((0, Ez.I)(zz), uz)
        }
        async function vb(zz, uz) {
          const bz = Gu(zz),
            Ez = await async function(zz, uz) {
              return gz(zz, "POST", "/v1/accounts:signInWithCustomToken", hz(zz, uz))
            }(bz, {
              token: uz,
              returnSecureToken: !0
            }), nz = await Ob._fromIdTokenResponse(bz, "signIn", Ez);
          return await bz._updateCurrentUser(nz.user), nz
        }
        class xb {
          constructor(zz, uz) {
            this.factorId = zz, this.uid = uz.mfaEnrollmentId, this.enrollmentTime = new Date(uz.enrolledAt).toUTCString(), this.displayName = uz.displayName
          }
          static _fromServerResponse(zz, uz) {
            return "phoneInfo" in uz ? Jb._fromServerResponse(zz, uz) : "totpInfo" in uz ? Ab._fromServerResponse(zz, uz) : sz(zz, "internal-error")
          }
        }
        class Jb extends xb {
          constructor(zz) {
            super("phone", zz), this.phoneNumber = zz.phoneInfo
          }
          static _fromServerResponse(zz, uz) {
            return new Jb(uz)
          }
        }
        class Ab extends xb {
          constructor(zz) {
            super("totp", zz)
          }
          static _fromServerResponse(zz, uz) {
            return new Ab(uz)
          }
        }

        function Tb(zz, uz, bz) {
          var Ez;
          xz((null === (Ez = bz.url) || void 0 === Ez ? void 0 : Ez.length) > 0, zz, "invalid-continue-uri"), xz("undefined" === typeof bz.dynamicLinkDomain || bz.dynamicLinkDomain.length > 0, zz, "invalid-dynamic-link-domain"), uz.continueUrl = bz.url, uz.dynamicLinkDomain = bz.dynamicLinkDomain, uz.canHandleCodeInApp = bz.handleCodeInApp, bz.iOS && (xz(bz.iOS.bundleId.length > 0, zz, "missing-ios-bundle-id"), uz.iOSBundleId = bz.iOS.bundleId), bz.android && (xz(bz.android.packageName.length > 0, zz, "missing-android-pkg-name"), uz.androidInstallApp = bz.android.installApp, uz.androidMinimumVersionCode = bz.android.minimumVersion, uz.androidPackageName = bz.android.packageName)
        }
        async function Lb(zz, uz, bz) {
          var Ez;
          const nz = Gu(zz),
            iz = {
              requestType: "PASSWORD_RESET",
              email: uz,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (Ez = nz._getRecaptchaConfig()) || void 0 === Ez ? void 0 : Ez.emailPasswordEnabled) {
            const zz = await Tu(nz, iz, "getOobCode", !0);
            bz && Tb(nz, zz, bz), await Du(nz, zz)
          } else bz && Tb(nz, iz, bz), await Du(nz, iz).catch((async zz => {
            if ("auth/missing-recaptcha-token" !== zz.code) return Promise.reject(zz);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const zz = await Tu(nz, iz, "getOobCode", !0);
              bz && Tb(nz, zz, bz), await Du(nz, zz)
            }
          }))
        }
        async function Pb(zz, uz, bz) {
          await cu((0, Ez.I)(zz), {
            oobCode: uz,
            newPassword: bz
          })
        }
        async function Gb(zz, uz) {
          await async function(zz, uz) {
            return Uz(zz, "POST", "/v1/accounts:update", hz(zz, uz))
          }((0, Ez.I)(zz), {
            oobCode: uz
          })
        }
        async function ab(zz, uz) {
          const bz = (0, Ez.I)(zz),
            nz = await cu(bz, {
              oobCode: uz
            }),
            iz = nz.requestType;
          switch (xz(iz, bz, "internal-error"), iz) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              xz(nz.newEmail, bz, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              xz(nz.mfaInfo, bz, "internal-error");
            default:
              xz(nz.email, bz, "internal-error")
          }
          let lz = null;
          return nz.mfaInfo && (lz = xb._fromServerResponse(Gu(bz), nz.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === nz.requestType ? nz.newEmail : nz.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === nz.requestType ? nz.email : nz.newEmail) || null,
              multiFactorInfo: lz
            },
            operation: iz
          }
        }
        async function Vb(zz, uz) {
          const {
            data: bz
          } = await ab((0, Ez.I)(zz), uz);
          return bz.email
        }
        async function mb(zz, uz, bz) {
          var Ez;
          const nz = Gu(zz),
            iz = {
              returnSecureToken: !0,
              email: uz,
              password: bz,
              clientType: "CLIENT_TYPE_WEB"
            };
          let lz;
          if (null === (Ez = nz._getRecaptchaConfig()) || void 0 === Ez ? void 0 : Ez.emailPasswordEnabled) {
            const zz = await Tu(nz, iz, "signUpPassword");
            lz = Hb(nz, zz)
          } else lz = Hb(nz, iz).catch((async zz => {
            if ("auth/missing-recaptcha-token" === zz.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const zz = await Tu(nz, iz, "signUpPassword");
              return Hb(nz, zz)
            }
            return Promise.reject(zz)
          }));
          const Mz = await lz.catch((zz => Promise.reject(zz))),
            tz = await Ob._fromIdTokenResponse(nz, "signIn", Mz);
          return await nz._updateCurrentUser(tz.user), tz
        }

        function qb(zz, uz, bz) {
          return rb((0, Ez.I)(zz), ku.credential(uz, bz))
        }
        async function hb(zz, uz, bz) {
          var Ez;
          const nz = Gu(zz),
            iz = {
              requestType: "EMAIL_SIGNIN",
              email: uz,
              clientType: "CLIENT_TYPE_WEB"
            };

          function lz(zz, uz) {
            xz(uz.handleCodeInApp, nz, "argument-error"), uz && Tb(nz, zz, uz)
          }
          if (null === (Ez = nz._getRecaptchaConfig()) || void 0 === Ez ? void 0 : Ez.emailPasswordEnabled) {
            const zz = await Tu(nz, iz, "getOobCode", !0);
            lz(zz, bz), await Qu(nz, zz)
          } else lz(iz, bz), await Qu(nz, iz).catch((async zz => {
            if ("auth/missing-recaptcha-token" !== zz.code) return Promise.reject(zz);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const zz = await Tu(nz, iz, "getOobCode", !0);
              lz(zz, bz), await Qu(nz, zz)
            }
          }))
        }

        function Ub(zz, uz) {
          const bz = Cu.parseLink(uz);
          return "EMAIL_SIGNIN" === (null === bz || void 0 === bz ? void 0 : bz.operation)
        }
        async function cb(zz, uz, bz) {
          const nz = (0, Ez.I)(zz),
            iz = ku.credentialWithLink(uz, bz || Tz());
          return xz(iz._tenantId === (nz.tenantId || null), nz, "tenant-id-mismatch"), rb(nz, iz)
        }
        async function gb(zz, uz) {
          const bz = {
              identifier: uz,
              continueUri: Lz() ? Tz() : "http://localhost"
            },
            {
              signinMethods: nz
            } = await async function(zz, uz) {
              return Uz(zz, "POST", "/v1/accounts:createAuthUri", hz(zz, uz))
            }((0, Ez.I)(zz), bz);
          return nz || []
        }
        async function Sb(zz, uz) {
          const bz = (0, Ez.I)(zz),
            nz = {
              requestType: "VERIFY_EMAIL",
              idToken: await zz.getIdToken()
            };
          uz && Tb(bz.auth, nz, uz);
          const {
            email: iz
          } = await async function(zz, uz) {
            return yu(zz, uz)
          }(bz.auth, nz);
          iz !== zz.email && await zz.reload()
        }
        async function yb(zz, uz, bz) {
          const nz = (0, Ez.I)(zz),
            iz = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await zz.getIdToken(),
              newEmail: uz
            };
          bz && Tb(nz.auth, iz, bz);
          const {
            email: lz
          } = await async function(zz, uz) {
            return yu(zz, uz)
          }(nz.auth, iz);
          lz !== zz.email && await zz.reload()
        }
        async function Db(zz, uz) {
          let {
            displayName: bz,
            photoURL: nz
          } = uz;
          if (void 0 === bz && void 0 === nz) return;
          const iz = (0, Ez.I)(zz),
            lz = {
              idToken: await iz.getIdToken(),
              displayName: bz,
              photoUrl: nz,
              returnSecureToken: !0
            },
            Mz = await Bz(iz, async function(zz, uz) {
              return Uz(zz, "POST", "/v1/accounts:update", uz)
            }(iz.auth, lz));
          iz.displayName = Mz.displayName || null, iz.photoURL = Mz.photoUrl || null;
          const tz = iz.providerData.find((zz => {
            let {
              providerId: uz
            } = zz;
            return "password" === uz
          }));
          tz && (tz.displayName = iz.displayName, tz.photoURL = iz.photoURL), await iz._updateTokensIfNecessary(Mz)
        }

        function Qb(zz, uz) {
          return eb((0, Ez.I)(zz), uz, null)
        }

        function Wb(zz, uz) {
          return eb((0, Ez.I)(zz), null, uz)
        }
        async function eb(zz, uz, bz) {
          const {
            auth: Ez
          } = zz, nz = {
            idToken: await zz.getIdToken(),
            returnSecureToken: !0
          };
          uz && (nz.email = uz), bz && (nz.password = bz);
          const iz = await Bz(zz, gu(Ez, nz));
          await zz._updateTokensIfNecessary(iz, !0)
        }
        class jb {
          constructor(zz, uz) {
            let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = zz, this.providerId = uz, this.profile = bz
          }
        }
        class Ib extends jb {
          constructor(zz, uz, bz, Ez) {
            super(zz, uz, bz), this.username = Ez
          }
        }
        class Bb extends jb {
          constructor(zz, uz) {
            super(zz, "facebook.com", uz)
          }
        }
        class Cb extends Ib {
          constructor(zz, uz) {
            super(zz, "github.com", uz, "string" === typeof(null === uz || void 0 === uz ? void 0 : uz.login) ? null === uz || void 0 === uz ? void 0 : uz.login : null)
          }
        }
        class Yb extends jb {
          constructor(zz, uz) {
            super(zz, "google.com", uz)
          }
        }
        class kb extends Ib {
          constructor(zz, uz, bz) {
            super(zz, "twitter.com", uz, bz)
          }
        }

        function zE(zz) {
          const {
            user: uz,
            _tokenResponse: bz
          } = zz;
          return uz.isAnonymous && !bz ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(zz) {
            var uz, bz;
            if (!zz) return null;
            const {
              providerId: Ez
            } = zz, nz = zz.rawUserInfo ? JSON.parse(zz.rawUserInfo) : {}, iz = zz.isNewUser || "identitytoolkit#SignupNewUserResponse" === zz.kind;
            if (!Ez && (null === zz || void 0 === zz ? void 0 : zz.idToken)) {
              const Ez = null === (bz = null === (uz = Iz(zz.idToken)) || void 0 === uz ? void 0 : uz.firebase) || void 0 === bz ? void 0 : bz.sign_in_provider;
              if (Ez) return new jb(iz, "anonymous" !== Ez && "custom" !== Ez ? Ez : null)
            }
            if (!Ez) return null;
            switch (Ez) {
              case "facebook.com":
                return new Bb(iz, nz);
              case "github.com":
                return new Cb(iz, nz);
              case "google.com":
                return new Yb(iz, nz);
              case "twitter.com":
                return new kb(iz, nz, zz.screenName || null);
              case "custom":
              case "anonymous":
                return new jb(iz, null);
              default:
                return new jb(iz, Ez, nz)
            }
          }(bz)
        }

        function uE(zz, uz) {
          return (0, Ez.I)(zz).setPersistence(uz)
        }

        function bE(zz) {
          return Gu(zz).initializeRecaptchaConfig()
        }

        function EE(zz, uz, bz, nz) {
          return (0, Ez.I)(zz).onIdTokenChanged(uz, bz, nz)
        }

        function nE(zz, uz, bz) {
          return (0, Ez.I)(zz).beforeAuthStateChanged(uz, bz)
        }

        function iE(zz, uz, bz, nz) {
          return (0, Ez.I)(zz).onAuthStateChanged(uz, bz, nz)
        }

        function lE(zz) {
          (0, Ez.I)(zz).useDeviceLanguage()
        }

        function ME(zz, uz) {
          return (0, Ez.I)(zz).updateCurrentUser(uz)
        }

        function tE(zz) {
          return (0, Ez.I)(zz).signOut()
        }
        async function HE(zz) {
          return (0, Ez.I)(zz).delete()
        }
        class OE {
          constructor(zz, uz, bz) {
            this.type = zz, this.credential = uz, this.auth = bz
          }
          static _fromIdtoken(zz, uz) {
            return new OE("enroll", zz, uz)
          }
          static _fromMfaPendingCredential(zz) {
            return new OE("signin", zz)
          }
          toJSON() {
            const zz = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [zz]: this.credential
              }
            }
          }
          static fromJSON(zz) {
            var uz, bz;
            if (null === zz || void 0 === zz ? void 0 : zz.multiFactorSession) {
              if (null === (uz = zz.multiFactorSession) || void 0 === uz ? void 0 : uz.pendingCredential) return OE._fromMfaPendingCredential(zz.multiFactorSession.pendingCredential);
              if (null === (bz = zz.multiFactorSession) || void 0 === bz ? void 0 : bz.idToken) return OE._fromIdtoken(zz.multiFactorSession.idToken)
            }
            return null
          }
        }
        class pE {
          constructor(zz, uz, bz) {
            this.session = zz, this.hints = uz, this.signInResolver = bz
          }
          static _fromError(zz, uz) {
            const bz = Gu(zz),
              Ez = uz.customData._serverResponse,
              nz = (Ez.mfaInfo || []).map((zz => xb._fromServerResponse(bz, zz)));
            xz(Ez.mfaPendingCredential, bz, "internal-error");
            const iz = OE._fromMfaPendingCredential(Ez.mfaPendingCredential);
            return new pE(iz, nz, (async zz => {
              const nz = await zz._process(bz, iz);
              delete Ez.mfaInfo, delete Ez.mfaPendingCredential;
              const lz = Object.assign(Object.assign({}, Ez), {
                idToken: nz.idToken,
                refreshToken: nz.refreshToken
              });
              switch (uz.operationType) {
                case "signIn":
                  const zz = await Ob._fromIdTokenResponse(bz, uz.operationType, lz);
                  return await bz._updateCurrentUser(zz.user), zz;
                case "reauthenticate":
                  return xz(uz.user, bz, "internal-error"), Ob._forOperation(uz.user, uz.operationType, lz);
                default:
                  sz(bz, "internal-error")
              }
            }))
          }
          async resolveSignIn(zz) {
            const uz = zz;
            return this.signInResolver(uz)
          }
        }

        function dE(zz, uz) {
          var bz;
          const nz = (0, Ez.I)(zz),
            iz = uz;
          return xz(uz.customData.operationType, nz, "argument-error"), xz(null === (bz = iz.customData._serverResponse) || void 0 === bz ? void 0 : bz.mfaPendingCredential, nz, "argument-error"), pE._fromError(nz, iz)
        }
        class FE {
          constructor(zz) {
            this.user = zz, this.enrolledFactors = [], zz._onReload((uz => {
              uz.mfaInfo && (this.enrolledFactors = uz.mfaInfo.map((uz => xb._fromServerResponse(zz.auth, uz))))
            }))
          }
          static _fromUser(zz) {
            return new FE(zz)
          }
          async getSession() {
            return OE._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(zz, uz) {
            const bz = zz,
              Ez = await this.getSession(),
              nz = await Bz(this.user, bz._process(this.user.auth, Ez, uz));
            return await this.user._updateTokensIfNecessary(nz), this.user.reload()
          }
          async unenroll(zz) {
            const uz = "string" === typeof zz ? zz : zz.uid,
              bz = await this.user.getIdToken();
            try {
              const zz = await Bz(this.user, (Ez = this.user.auth, nz = {
                idToken: bz,
                mfaEnrollmentId: uz
              }, Uz(Ez, "POST", "/v2/accounts/mfaEnrollment:withdraw", hz(Ez, nz))));
              this.enrolledFactors = this.enrolledFactors.filter((zz => {
                let {
                  uid: bz
                } = zz;
                return bz !== uz
              })), await this.user._updateTokensIfNecessary(zz), await this.user.reload()
            } catch (iz) {
              throw iz
            }
            var Ez, nz
          }
        }
        const ZE = new WeakMap;

        function RE(zz) {
          const uz = (0, Ez.I)(zz);
          return ZE.has(uz) || ZE.set(uz, FE._fromUser(uz)), ZE.get(uz)
        }
        const KE = "__sak";
        class wE {
          constructor(zz, uz) {
            this.storageRetriever = zz, this.type = uz
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(KE, "1"), this.storage.removeItem(KE), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (zz) {
              return Promise.resolve(!1)
            }
          }
          _set(zz, uz) {
            return this.storage.setItem(zz, JSON.stringify(uz)), Promise.resolve()
          }
          _get(zz) {
            const uz = this.storage.getItem(zz);
            return Promise.resolve(uz ? JSON.parse(uz) : null)
          }
          _remove(zz) {
            return this.storage.removeItem(zz), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class XE extends wE {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (zz, uz) => this.onStorageEvent(zz, uz), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const zz = (0, Ez.J)();
              return du(zz) || Xu(zz)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (zz) {
                return !1
              }
            }(), this.fallbackToPolling = fu(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(zz) {
            for (const uz of Object.keys(this.listeners)) {
              const bz = this.storage.getItem(uz),
                Ez = this.localCache[uz];
              bz !== Ez && zz(uz, Ez, bz)
            }
          }
          onStorageEvent(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!zz.key) return void this.forAllChangedKeys(((zz, uz, bz) => {
              this.notifyListeners(zz, bz)
            }));
            const bz = zz.key;
            if (uz ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const Ez = this.storage.getItem(bz);
              if (zz.newValue !== Ez) null !== zz.newValue ? this.storage.setItem(bz, zz.newValue) : this.storage.removeItem(bz);
              else if (this.localCache[bz] === zz.newValue && !uz) return
            }
            const nz = () => {
                const zz = this.storage.getItem(bz);
                (uz || this.localCache[bz] !== zz) && this.notifyListeners(bz, zz)
              },
              iz = this.storage.getItem(bz);
            (0, Ez.T)() && 10 === document.documentMode && iz !== zz.newValue && zz.newValue !== zz.oldValue ? setTimeout(nz, 10) : nz()
          }
          notifyListeners(zz, uz) {
            this.localCache[zz] = uz;
            const bz = this.listeners[zz];
            if (bz)
              for (const Ez of Array.from(bz)) Ez(uz ? JSON.parse(uz) : uz)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((zz, uz, bz) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: zz,
                  oldValue: uz,
                  newValue: bz
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
          _addListener(zz, uz) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[zz] || (this.listeners[zz] = new Set, this.localCache[zz] = this.storage.getItem(zz)), this.listeners[zz].add(uz)
          }
          _removeListener(zz, uz) {
            this.listeners[zz] && (this.listeners[zz].delete(uz), 0 === this.listeners[zz].size && delete this.listeners[zz]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(zz, uz) {
            await super._set(zz, uz), this.localCache[zz] = JSON.stringify(uz)
          }
          async _get(zz) {
            const uz = await super._get(zz);
            return this.localCache[zz] = JSON.stringify(uz), uz
          }
          async _remove(zz) {
            await super._remove(zz), delete this.localCache[zz]
          }
        }
        XE.type = "LOCAL";
        const fE = XE;
        class sE extends wE {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(zz, uz) {}
          _removeListener(zz, uz) {}
        }
        sE.type = "SESSION";
        const rE = sE;
        class oE {
          constructor(zz) {
            this.eventTarget = zz, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(zz) {
            const uz = this.receivers.find((uz => uz.isListeningto(zz)));
            if (uz) return uz;
            const bz = new oE(zz);
            return this.receivers.push(bz), bz
          }
          isListeningto(zz) {
            return this.eventTarget === zz
          }
          async handleEvent(zz) {
            const uz = zz,
              {
                eventId: bz,
                eventType: Ez,
                data: nz
              } = uz.data,
              iz = this.handlersMap[Ez];
            if (!(null === iz || void 0 === iz ? void 0 : iz.size)) return;
            uz.ports[0].postMessage({
              status: "ack",
              eventId: bz,
              eventType: Ez
            });
            const lz = Array.from(iz).map((async zz => zz(uz.origin, nz))),
              Mz = await
            function(zz) {
              return Promise.all(zz.map((async zz => {
                try {
                  return {
                    fulfilled: !0,
                    value: await zz
                  }
                } catch (uz) {
                  return {
                    fulfilled: !1,
                    reason: uz
                  }
                }
              })))
            }(lz);
            uz.ports[0].postMessage({
              status: "done",
              eventId: bz,
              eventType: Ez,
              response: Mz
            })
          }
          _subscribe(zz, uz) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[zz] || (this.handlersMap[zz] = new Set), this.handlersMap[zz].add(uz)
          }
          _unsubscribe(zz, uz) {
            this.handlersMap[zz] && uz && this.handlersMap[zz].delete(uz), uz && 0 !== this.handlersMap[zz].size || delete this.handlersMap[zz], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function NE() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            bz = "";
          for (let Ez = 0; Ez < uz; Ez++) bz += Math.floor(10 * Math.random());
          return zz + bz
        }
        oE.receivers = [];
        class vE {
          constructor(zz) {
            this.target = zz, this.handlers = new Set
          }
          removeMessageHandler(zz) {
            zz.messageChannel && (zz.messageChannel.port1.removeEventListener("message", zz.Ws), zz.messageChannel.port1.close()), this.handlers.delete(zz)
          }
          async _send(zz, uz) {
            let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const Ez = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!Ez) throw new Error("connection_unavailable");
            let nz, iz;
            return new Promise(((lz, Mz) => {
              const tz = NE("", 20);
              Ez.port1.start();
              const Hz = setTimeout((() => {
                Mz(new Error("unsupported_event"))
              }), bz);
              iz = {
                messageChannel: Ez,
                Ws(zz) {
                  const uz = zz;
                  if (uz.data.eventId === tz) switch (uz.data.status) {
                    case "ack":
                      clearTimeout(Hz), nz = setTimeout((() => {
                        Mz(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(nz), lz(uz.data.response);
                      break;
                    default:
                      clearTimeout(Hz), clearTimeout(nz), Mz(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(iz), Ez.port1.addEventListener("message", iz.Ws), this.target.postMessage({
                eventType: zz,
                eventId: tz,
                data: uz
              }, [Ez.port2])
            })).finally((() => {
              iz && this.removeMessageHandler(iz)
            }))
          }
        }

        function xE() {
          return window
        }

        function JE() {
          return "undefined" !== typeof xE().WorkerGlobalScope && "function" === typeof xE().importScripts
        }
        const AE = "firebaseLocalStorageDb",
          TE = "firebaseLocalStorage",
          LE = "fbase_key";
        class PE {
          constructor(zz) {
            this.request = zz
          }
          toPromise() {
            return new Promise(((zz, uz) => {
              this.request.addEventListener("success", (() => {
                zz(this.request.result)
              })), this.request.addEventListener("error", (() => {
                uz(this.request.error)
              }))
            }))
          }
        }

        function GE(zz, uz) {
          return zz.transaction([TE], uz ? "readwrite" : "readonly").objectStore(TE)
        }

        function aE() {
          const zz = indexedDB.open(AE, 1);
          return new Promise(((uz, bz) => {
            zz.addEventListener("error", (() => {
              bz(zz.error)
            })), zz.addEventListener("upgradeneeded", (() => {
              const uz = zz.result;
              try {
                uz.createObjectStore(TE, {
                  keyPath: LE
                })
              } catch (Ez) {
                bz(Ez)
              }
            })), zz.addEventListener("success", (async () => {
              const bz = zz.result;
              bz.objectStoreNames.contains(TE) ? uz(bz) : (bz.close(), await
                function() {
                  const zz = indexedDB.deleteDatabase(AE);
                  return new PE(zz).toPromise()
                }(), uz(await aE()))
            }))
          }))
        }
        async function VE(zz, uz, bz) {
          const Ez = GE(zz, !0).put({
            [LE]: uz,
            value: bz
          });
          return new PE(Ez).toPromise()
        }

        function mE(zz, uz) {
          const bz = GE(zz, !0).delete(uz);
          return new PE(bz).toPromise()
        }
        class qE {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await aE()), this.db
          }
          async _withRetries(zz) {
            let uz = 0;
            for (;;) try {
              const uz = await this._openDb();
              return await zz(uz)
            } catch (bz) {
              if (uz++ > 3) throw bz;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return JE() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = oE._getInstance(JE() ? self : null), this.receiver._subscribe("keyChanged", (async (zz, uz) => ({
              keyProcessed: (await this._poll()).includes(uz.key)
            }))), this.receiver._subscribe("ping", (async (zz, uz) => ["keyChanged"]))
          }
          async initializeSender() {
            var zz, uz;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (zz) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new vE(this.activeServiceWorker);
            const bz = await this.sender._send("ping", {}, 800);
            bz && (null === (zz = bz[0]) || void 0 === zz ? void 0 : zz.fulfilled) && (null === (uz = bz[0]) || void 0 === uz ? void 0 : uz.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(zz) {
            if (this.sender && this.activeServiceWorker && function() {
                var zz;
                return (null === (zz = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === zz ? void 0 : zz.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: zz
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (uz) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const zz = await aE();
              return await VE(zz, KE, "1"), await mE(zz, KE), !0
            } catch (zz) {}
            return !1
          }
          async _withPendingWrite(zz) {
            this.pendingWrites++;
            try {
              await zz()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(zz, uz) {
            return this._withPendingWrite((async () => (await this._withRetries((bz => VE(bz, zz, uz))), this.localCache[zz] = uz, this.notifyServiceWorker(zz))))
          }
          async _get(zz) {
            const uz = await this._withRetries((uz => async function(zz, uz) {
              const bz = GE(zz, !1).get(uz),
                Ez = await new PE(bz).toPromise();
              return void 0 === Ez ? null : Ez.value
            }(uz, zz)));
            return this.localCache[zz] = uz, uz
          }
          async _remove(zz) {
            return this._withPendingWrite((async () => (await this._withRetries((uz => mE(uz, zz))), delete this.localCache[zz], this.notifyServiceWorker(zz))))
          }
          async _poll() {
            const zz = await this._withRetries((zz => {
              const uz = GE(zz, !1).getAll();
              return new PE(uz).toPromise()
            }));
            if (!zz) return [];
            if (0 !== this.pendingWrites) return [];
            const uz = [],
              bz = new Set;
            for (const {
                fbase_key: Ez,
                value: nz
              }
              of zz) bz.add(Ez), JSON.stringify(this.localCache[Ez]) !== JSON.stringify(nz) && (this.notifyListeners(Ez, nz), uz.push(Ez));
            for (const Ez of Object.keys(this.localCache)) this.localCache[Ez] && !bz.has(Ez) && (this.notifyListeners(Ez, null), uz.push(Ez));
            return uz
          }
          notifyListeners(zz, uz) {
            this.localCache[zz] = uz;
            const bz = this.listeners[zz];
            if (bz)
              for (const Ez of Array.from(bz)) Ez(uz)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(zz, uz) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[zz] || (this.listeners[zz] = new Set, this._get(zz)), this.listeners[zz].add(uz)
          }
          _removeListener(zz, uz) {
            this.listeners[zz] && (this.listeners[zz].delete(uz), 0 === this.listeners[zz].size && delete this.listeners[zz]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        qE.type = "LOCAL";
        const hE = qE;
        const UE = 1e12;
        class cE {
          constructor(zz) {
            this.auth = zz, this.counter = UE, this._widgets = new Map
          }
          render(zz, uz) {
            const bz = this.counter;
            return this._widgets.set(bz, new gE(zz, this.auth.name, uz || {})), this.counter++, bz
          }
          reset(zz) {
            var uz;
            const bz = zz || UE;
            null === (uz = this._widgets.get(bz)) || void 0 === uz || uz.delete(), this._widgets.delete(bz)
          }
          getResponse(zz) {
            var uz;
            const bz = zz || UE;
            return (null === (uz = this._widgets.get(bz)) || void 0 === uz ? void 0 : uz.getResponse()) || ""
          }
          async execute(zz) {
            var uz;
            const bz = zz || UE;
            return null === (uz = this._widgets.get(bz)) || void 0 === uz || uz.execute(), ""
          }
        }
        class gE {
          constructor(zz, uz, bz) {
            this.params = bz, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const Ez = "string" === typeof zz ? document.getElementById(zz) : zz;
            xz(Ez, "argument-error", {
              appName: uz
            }), this.container = Ez, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(zz) {
                const uz = [],
                  bz = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let Ez = 0; Ez < zz; Ez++) uz.push(bz.charAt(Math.floor(Math.random() * bz.length)));
                return uz.join("")
              }(50);
              const {
                callback: zz,
                "expired-callback": uz
              } = this.params;
              if (zz) try {
                zz(this.responseToken)
              } catch (bz) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, uz) try {
                  uz()
                } catch (bz) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const SE = Ju("rcb"),
          yE = new Gz(3e4, 6e4);
        class DE {
          constructor() {
            var zz;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (zz = xE().grecaptcha) || void 0 === zz ? void 0 : zz.render)
          }
          load(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return xz(function(zz) {
              return zz.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(zz)
            }(uz), zz, "argument-error"), this.shouldResolveImmediately(uz) && ou(xE().grecaptcha) ? Promise.resolve(xE().grecaptcha) : new Promise(((bz, nz) => {
              const iz = xE().setTimeout((() => {
                nz(rz(zz, "network-request-failed"))
              }), yE.get());
              xE()[SE] = () => {
                xE().clearTimeout(iz), delete xE()[SE];
                const Ez = xE().grecaptcha;
                if (!Ez || !ou(Ez)) return void nz(rz(zz, "internal-error"));
                const lz = Ez.render;
                Ez.render = (zz, uz) => {
                  const bz = lz(zz, uz);
                  return this.counter++, bz
                }, this.hostLanguage = uz, bz(Ez)
              };
              xu(`https://www.google.com/recaptcha/api.js??${(0,Ez.gb)({onload:SE,render:"explicit",hl:uz})}`).catch((() => {
                clearTimeout(iz), nz(rz(zz, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(zz) {
            var uz;
            return !!(null === (uz = xE().grecaptcha) || void 0 === uz ? void 0 : uz.render) && (zz === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class QE {
          async load(zz) {
            return new cE(zz)
          }
          clearedOneInstance() {}
        }
        const WE = "recaptcha",
          eE = {
            theme: "light",
            type: "image"
          };
        class jE {
          constructor(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, eE),
              bz = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = uz, this.type = WE, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = Gu(bz), this.isInvisible = "invisible" === this.parameters.size, xz("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const Ez = "string" === typeof zz ? document.getElementById(zz) : zz;
            xz(Ez, this.auth, "argument-error"), this.container = Ez, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new QE : new DE, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const zz = await this.render(),
              uz = this.getAssertedRecaptcha(),
              bz = uz.getResponse(zz);
            return bz || new Promise((bz => {
              const Ez = zz => {
                zz && (this.tokenChangeListeners.delete(Ez), bz(zz))
              };
              this.tokenChangeListeners.add(Ez), this.isInvisible && uz.execute(zz)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (zz) {
              return Promise.reject(zz)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((zz => {
              throw this.renderPromise = null, zz
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((zz => {
              this.container.removeChild(zz)
            }))
          }
          validateStartingState() {
            xz(!this.parameters.sitekey, this.auth, "argument-error"), xz(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), xz("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(zz) {
            return uz => {
              if (this.tokenChangeListeners.forEach((zz => zz(uz))), "function" === typeof zz) zz(uz);
              else if ("string" === typeof zz) {
                const bz = xE()[zz];
                "function" === typeof bz && bz(uz)
              }
            }
          }
          assertNotDestroyed() {
            xz(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let zz = this.container;
              if (!this.isInvisible) {
                const uz = document.createElement("div");
                zz.appendChild(uz), zz = uz
              }
              this.widgetId = this.getAssertedRecaptcha().render(zz, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            xz(Lz() && !JE(), this.auth, "internal-error"), await
            function() {
              let zz = null;
              return new Promise((uz => {
                "complete" !== document.readyState ? (zz = () => uz(), window.addEventListener("load", zz)) : uz()
              })).catch((uz => {
                throw zz && window.removeEventListener("load", zz), uz
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const zz = await async function(zz) {
              return (await Uz(zz, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            xz(zz, this.auth, "internal-error"), this.parameters.sitekey = zz
          }
          getAssertedRecaptcha() {
            return xz(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class IE {
          constructor(zz, uz) {
            this.verificationId = zz, this.onConfirmation = uz
          }
          confirm(zz) {
            const uz = Bu._fromVerification(this.verificationId, zz);
            return this.onConfirmation(uz)
          }
        }
        async function BE(zz, uz, bz) {
          const nz = Gu(zz),
            iz = await kE(nz, uz, (0, Ez.I)(bz));
          return new IE(iz, (zz => rb(nz, zz)))
        }
        async function CE(zz, uz, bz) {
          const nz = (0, Ez.I)(zz);
          await Xb(!1, nz, "phone");
          const iz = await kE(nz.auth, uz, (0, Ez.I)(bz));
          return new IE(iz, (zz => ob(nz, zz)))
        }
        async function YE(zz, uz, bz) {
          const nz = (0, Ez.I)(zz),
            iz = await kE(nz.auth, uz, (0, Ez.I)(bz));
          return new IE(iz, (zz => Nb(nz, zz)))
        }
        async function kE(zz, uz, bz) {
          var Ez;
          const nz = await bz.verify();
          try {
            let iz;
            if (xz("string" === typeof nz, zz, "argument-error"), xz(bz.type === WE, zz, "argument-error"), iz = "string" === typeof uz ? {
                phoneNumber: uz
              } : uz, "session" in iz) {
              const uz = iz.session;
              if ("phoneNumber" in iz) {
                xz("enroll" === uz.type, zz, "internal-error");
                const bz = await
                function(zz, uz) {
                  return Uz(zz, "POST", "/v2/accounts/mfaEnrollment:start", hz(zz, uz))
                }(zz, {
                  idToken: uz.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: iz.phoneNumber,
                    recaptchaToken: nz
                  }
                });
                return bz.phoneSessionInfo.sessionInfo
              } {
                xz("signin" === uz.type, zz, "internal-error");
                const bz = (null === (Ez = iz.multiFactorHint) || void 0 === Ez ? void 0 : Ez.uid) || iz.multiFactorUid;
                xz(bz, zz, "missing-multi-factor-info");
                const lz = await
                function(zz, uz) {
                  return Uz(zz, "POST", "/v2/accounts/mfaSignIn:start", hz(zz, uz))
                }(zz, {
                  mfaPendingCredential: uz.credential,
                  mfaEnrollmentId: bz,
                  phoneSignInInfo: {
                    recaptchaToken: nz
                  }
                });
                return lz.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: uz
              } = await async function(zz, uz) {
                return Uz(zz, "POST", "/v1/accounts:sendVerificationCode", hz(zz, uz))
              }(zz, {
                phoneNumber: iz.phoneNumber,
                recaptchaToken: nz
              });
              return uz
            }
          } finally {
            bz._reset()
          }
        }
        async function zn(zz, uz) {
          await wb((0, Ez.I)(zz), uz)
        }
        class un {
          constructor(zz) {
            this.providerId = un.PROVIDER_ID, this.auth = Gu(zz)
          }
          verifyPhoneNumber(zz, uz) {
            return kE(this.auth, zz, (0, Ez.I)(uz))
          }
          static credential(zz, uz) {
            return Bu._fromVerification(zz, uz)
          }
          static credentialFromResult(zz) {
            const uz = zz;
            return un.credentialFromTaggedObject(uz)
          }
          static credentialFromError(zz) {
            return un.credentialFromTaggedObject(zz.customData || {})
          }
          static credentialFromTaggedObject(zz) {
            let {
              _tokenResponse: uz
            } = zz;
            if (!uz) return null;
            const {
              phoneNumber: bz,
              temporaryProof: Ez
            } = uz;
            return bz && Ez ? Bu._fromTokenResponse(bz, Ez) : null
          }
        }

        function bn(zz, uz) {
          return uz ? iu(uz) : (xz(zz._popupRedirectResolver, zz, "argument-error"), zz._popupRedirectResolver)
        }
        un.PROVIDER_ID = "phone", un.PHONE_SIGN_IN_METHOD = "phone";
        class En extends Uu {
          constructor(zz) {
            super("custom", "custom"), this.params = zz
          }
          _getIdTokenResponse(zz) {
            return eu(zz, this._buildIdpRequest())
          }
          _linkToIdToken(zz, uz) {
            return eu(zz, this._buildIdpRequest(uz))
          }
          _getReauthenticationResolver(zz) {
            return eu(zz, this._buildIdpRequest())
          }
          _buildIdpRequest(zz) {
            const uz = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return zz && (uz.idToken = zz), uz
          }
        }

        function nn(zz) {
          return sb(zz.auth, new En(zz), zz.bypassAuthState)
        }

        function Mn(zz) {
          const {
            auth: uz,
            user: bz
          } = zz;
          return xz(bz, uz, "internal-error"), fb(bz, new En(zz), zz.bypassAuthState)
        }
        async function tn(zz) {
          const {
            auth: uz,
            user: bz
          } = zz;
          return xz(bz, uz, "internal-error"), wb(bz, new En(zz), zz.bypassAuthState)
        }
        class Hn {
          constructor(zz, uz, bz, Ez) {
            let nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = zz, this.resolver = bz, this.user = Ez, this.bypassAuthState = nz, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(uz) ? uz : [uz]
          }
          execute() {
            return new Promise((async (zz, uz) => {
              this.pendingPromise = {
                resolve: zz,
                reject: uz
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (bz) {
                this.reject(bz)
              }
            }))
          }
          async onAuthEvent(zz) {
            const {
              urlResponse: uz,
              sessionId: bz,
              postBody: Ez,
              tenantId: nz,
              error: iz,
              type: lz
            } = zz;
            if (iz) return void this.reject(iz);
            const Mz = {
              auth: this.auth,
              requestUri: uz,
              sessionId: bz,
              tenantId: nz || void 0,
              postBody: Ez || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(lz)(Mz))
            } catch (tz) {
              this.reject(tz)
            }
          }
          onError(zz) {
            this.reject(zz)
          }
          getIdpTask(zz) {
            switch (zz) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return nn;
              case "linkViaPopup":
              case "linkViaRedirect":
                return tn;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return Mn;
              default:
                sz(this.auth, "internal-error")
            }
          }
          resolve(zz) {
            Az(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(zz), this.unregisterAndCleanUp()
          }
          reject(zz) {
            Az(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(zz), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const On = new Gz(2e3, 1e4);
        async function pn(zz, uz, bz) {
          const Ez = Gu(zz);
          Nz(zz, uz, zb);
          const nz = bn(Ez, bz);
          return new Zn(Ez, "signInViaPopup", uz, nz).executeNotNull()
        }
        async function dn(zz, uz, bz) {
          const nz = (0, Ez.I)(zz);
          Nz(nz.auth, uz, zb);
          const iz = bn(nz.auth, bz);
          return new Zn(nz.auth, "reauthViaPopup", uz, iz, nz).executeNotNull()
        }
        async function Fn(zz, uz, bz) {
          const nz = (0, Ez.I)(zz);
          Nz(nz.auth, uz, zb);
          const iz = bn(nz.auth, bz);
          return new Zn(nz.auth, "linkViaPopup", uz, iz, nz).executeNotNull()
        }
        class Zn extends Hn {
          constructor(zz, uz, bz, Ez, nz) {
            super(zz, uz, Ez, nz), this.provider = bz, this.authWindow = null, this.pollId = null, Zn.currentPopupAction && Zn.currentPopupAction.cancel(), Zn.currentPopupAction = this
          }
          async executeNotNull() {
            const zz = await this.execute();
            return xz(zz, this.auth, "internal-error"), zz
          }
          async onExecution() {
            Az(1 === this.filter.length, "Popup operations only handle one event");
            const zz = NE();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], zz), this.authWindow.associatedEvent = zz, this.resolver._originValidation(this.auth).catch((zz => {
              this.reject(zz)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (zz => {
              zz || this.reject(rz(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var zz;
            return (null === (zz = this.authWindow) || void 0 === zz ? void 0 : zz.associatedEvent) || null
          }
          cancel() {
            this.reject(rz(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Zn.currentPopupAction = null
          }
          pollUserCancellation() {
            const zz = () => {
              var uz, bz;
              (null === (bz = null === (uz = this.authWindow) || void 0 === uz ? void 0 : uz.window) || void 0 === bz ? void 0 : bz.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(rz(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(zz, On.get())
            };
            zz()
          }
        }
        Zn.currentPopupAction = null;
        const Rn = "pendingRedirect",
          Kn = new Map;
        class wn extends Hn {
          constructor(zz, uz) {
            super(zz, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], uz, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let zz = Kn.get(this.auth._key());
            if (!zz) {
              try {
                const uz = await async function(zz, uz) {
                  const bz = rn(uz),
                    Ez = sn(zz);
                  if (!await Ez._isAvailable()) return !1;
                  const nz = "true" === await Ez._get(bz);
                  return await Ez._remove(bz), nz
                }(this.resolver, this.auth) ? await super.execute() : null;
                zz = () => Promise.resolve(uz)
              } catch (uz) {
                zz = () => Promise.reject(uz)
              }
              Kn.set(this.auth._key(), zz)
            }
            return this.bypassAuthState || Kn.set(this.auth._key(), (() => Promise.resolve(null))), zz()
          }
          async onAuthEvent(zz) {
            if ("signInViaRedirect" === zz.type) return super.onAuthEvent(zz);
            if ("unknown" !== zz.type) {
              if (zz.eventId) {
                const uz = await this.auth._redirectUserForId(zz.eventId);
                if (uz) return this.user = uz, super.onAuthEvent(zz);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function Xn(zz, uz) {
          return sn(zz)._set(rn(uz), "true")
        }

        function fn(zz, uz) {
          Kn.set(zz._key(), uz)
        }

        function sn(zz) {
          return iu(zz._redirectPersistence)
        }

        function rn(zz) {
          return tu(Rn, zz.config.apiKey, zz.name)
        }

        function Nn(zz, uz, bz) {
          return async function(zz, uz, bz) {
            const Ez = Gu(zz);
            Nz(zz, uz, zb), await Ez._initializationPromise;
            const nz = bn(Ez, bz);
            return await Xn(nz, Ez), nz._openRedirect(Ez, uz, "signInViaRedirect")
          }(zz, uz, bz)
        }

        function vn(zz, uz, bz) {
          return async function(zz, uz, bz) {
            const nz = (0, Ez.I)(zz);
            Nz(nz.auth, uz, zb), await nz.auth._initializationPromise;
            const iz = bn(nz.auth, bz);
            await Xn(iz, nz.auth);
            const lz = await Tn(nz);
            return iz._openRedirect(nz.auth, uz, "reauthViaRedirect", lz)
          }(zz, uz, bz)
        }

        function xn(zz, uz, bz) {
          return async function(zz, uz, bz) {
            const nz = (0, Ez.I)(zz);
            Nz(nz.auth, uz, zb), await nz.auth._initializationPromise;
            const iz = bn(nz.auth, bz);
            await Xb(!1, nz, uz.providerId), await Xn(iz, nz.auth);
            const lz = await Tn(nz);
            return iz._openRedirect(nz.auth, uz, "linkViaRedirect", lz)
          }(zz, uz, bz)
        }
        async function Jn(zz, uz) {
          return await Gu(zz)._initializationPromise, An(zz, uz, !1)
        }
        async function An(zz, uz) {
          let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const Ez = Gu(zz),
            nz = bn(Ez, uz),
            iz = new wn(Ez, nz, bz),
            lz = await iz.execute();
          return lz && !bz && (delete lz.user._redirectEventId, await Ez._persistUserIfCurrent(lz.user), await Ez._setRedirectUser(null, uz)), lz
        }
        async function Tn(zz) {
          const uz = NE(`${zz.uid}:::`);
          return zz._redirectEventId = uz, await zz.auth._setRedirectUser(zz), await zz.auth._persistUserIfCurrent(zz), uz
        }
        class Ln {
          constructor(zz) {
            this.auth = zz, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(zz) {
            this.consumers.add(zz), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, zz) && (this.sendToConsumer(this.queuedRedirectEvent, zz), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(zz) {
            this.consumers.delete(zz)
          }
          onEvent(zz) {
            if (this.hasEventBeenHandled(zz)) return !1;
            let uz = !1;
            return this.consumers.forEach((bz => {
              this.isEventForConsumer(zz, bz) && (uz = !0, this.sendToConsumer(zz, bz), this.saveEventToCache(zz))
            })), this.hasHandledPotentialRedirect || ! function(zz) {
              switch (zz.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return Gn(zz);
                default:
                  return !1
              }
            }(zz) || (this.hasHandledPotentialRedirect = !0, uz || (this.queuedRedirectEvent = zz, uz = !0)), uz
          }
          sendToConsumer(zz, uz) {
            var bz;
            if (zz.error && !Gn(zz)) {
              const Ez = (null === (bz = zz.error.code) || void 0 === bz ? void 0 : bz.split("auth/")[1]) || "internal-error";
              uz.onError(rz(this.auth, Ez))
            } else uz.onAuthEvent(zz)
          }
          isEventForConsumer(zz, uz) {
            const bz = null === uz.eventId || !!zz.eventId && zz.eventId === uz.eventId;
            return uz.filter.includes(zz.type) && bz
          }
          hasEventBeenHandled(zz) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(Pn(zz))
          }
          saveEventToCache(zz) {
            this.cachedEventUids.add(Pn(zz)), this.lastProcessedEventTime = Date.now()
          }
        }

        function Pn(zz) {
          return [zz.type, zz.eventId, zz.sessionId, zz.tenantId].filter((zz => zz)).join("-")
        }

        function Gn(zz) {
          let {
            type: uz,
            error: bz
          } = zz;
          return "unknown" === uz && "auth/no-auth-event" === (null === bz || void 0 === bz ? void 0 : bz.code)
        }
        const an = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          Vn = /^https?/;
        async function mn(zz) {
          if (zz.config.emulator) return;
          const {
            authorizedDomains: uz
          } = await async function(zz) {
            return Uz(zz, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(zz);
          for (const Ez of uz) try {
            if (qn(Ez)) return
          } catch (bz) {}
          sz(zz, "unauthorized-domain")
        }

        function qn(zz) {
          const uz = Tz(),
            {
              protocol: bz,
              hostname: Ez
            } = new URL(uz);
          if (zz.startsWith("chrome-extension://")) {
            const nz = new URL(zz);
            return "" === nz.hostname && "" === Ez ? "chrome-extension:" === bz && zz.replace("chrome-extension://", "") === uz.replace("chrome-extension://", "") : "chrome-extension:" === bz && nz.hostname === Ez
          }
          if (!Vn.test(bz)) return !1;
          if (an.test(zz)) return Ez === zz;
          const nz = zz.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + nz + "|" + nz + ")$", "i").test(Ez)
        }
        const hn = new Gz(3e4, 6e4);

        function Un() {
          const zz = xE().___jsl;
          if (null === zz || void 0 === zz ? void 0 : zz.H)
            for (const uz of Object.keys(zz.H))
              if (zz.H[uz].r = zz.H[uz].r || [], zz.H[uz].L = zz.H[uz].L || [], zz.H[uz].r = [...zz.H[uz].L], zz.CP)
                for (let bz = 0; bz < zz.CP.length; bz++) zz.CP[bz] = null
        }
        let cn = null;

        function gn(zz) {
          return cn = cn || function(zz) {
            return new Promise(((uz, bz) => {
              var Ez, nz, iz;

              function lz() {
                Un(), gapi.load("gapi.iframes", {
                  callback: () => {
                    uz(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    Un(), bz(rz(zz, "network-request-failed"))
                  },
                  timeout: hn.get()
                })
              }
              if (null === (nz = null === (Ez = xE().gapi) || void 0 === Ez ? void 0 : Ez.iframes) || void 0 === nz ? void 0 : nz.Iframe) uz(gapi.iframes.getContext());
              else {
                if (!(null === (iz = xE().gapi) || void 0 === iz ? void 0 : iz.load)) {
                  const uz = Ju("iframefcb");
                  return xE()[uz] = () => {
                    gapi.load ? lz() : bz(rz(zz, "network-request-failed"))
                  }, xu(`https://apis.google.com/js/api.js?onload=${uz}`).catch((zz => bz(zz)))
                }
                lz()
              }
            })).catch((zz => {
              throw cn = null, zz
            }))
          }(zz), cn
        }
        const Sn = new Gz(5e3, 15e3),
          yn = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          Dn = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function Qn(zz) {
          const uz = zz.config;
          xz(uz.authDomain, zz, "auth-domain-config-required");
          const bz = uz.emulator ? az(uz, "emulator/auth/iframe") : `https://${zz.config.authDomain}/__/auth/iframe`,
            iz = {
              apiKey: uz.apiKey,
              appName: zz.name,
              v: nz.h
            },
            lz = Dn.get(zz.config.apiHost);
          lz && (iz.eid = lz);
          const Mz = zz._getFrameworks();
          return Mz.length && (iz.fw = Mz.join(",")), `${bz}?${(0,Ez.gb)(iz).slice(1)}`
        }
        const Wn = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class en {
          constructor(zz) {
            this.window = zz, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (zz) {}
          }
        }

        function jn(zz, uz, bz) {
          let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const lz = Math.max((window.screen.availHeight - iz) / 2, 0).toString(),
            Mz = Math.max((window.screen.availWidth - nz) / 2, 0).toString();
          let tz = "";
          const Hz = Object.assign(Object.assign({}, Wn), {
              width: nz.toString(),
              height: iz.toString(),
              top: lz,
              left: Mz
            }),
            Oz = (0, Ez.J)().toLowerCase();
          bz && (tz = Fu(Oz) ? "_blank" : bz), pu(Oz) && (uz = uz || "http://localhost", Hz.scrollbars = "yes");
          const pz = Object.entries(Hz).reduce(((zz, uz) => {
            let [bz, Ez] = uz;
            return `${zz}${bz}=${Ez},`
          }), "");
          if (function() {
              var zz;
              return Xu(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ez.J)()) && !!(null === (zz = window.navigator) || void 0 === zz ? void 0 : zz.standalone)
            }(Oz) && "_self" !== tz) return function(zz, uz) {
            const bz = document.createElement("a");
            bz.href = zz, bz.target = uz;
            const Ez = document.createEvent("MouseEvent");
            Ez.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), bz.dispatchEvent(Ez)
          }(uz || "", tz), new en(null);
          const dz = window.open(uz || "", tz, pz);
          xz(dz, zz, "popup-blocked");
          try {
            dz.focus()
          } catch (Fz) {}
          return new en(dz)
        }
        const In = "__/auth/handler",
          Bn = "emulator/auth/handler",
          Cn = encodeURIComponent("fac");
        async function Yn(zz, uz, bz, iz, lz, Mz) {
            xz(zz.config.authDomain, zz, "auth-domain-config-required"), xz(zz.config.apiKey, zz, "invalid-api-key");
            const tz = {
              apiKey: zz.config.apiKey,
              appName: zz.name,
              authType: bz,
              redirectUrl: iz,
              v: nz.h,
              eventId: lz
            };
            if (uz instanceof zb) {
              uz.setDefaultLanguage(zz.languageCode), tz.providerId = uz.providerId || "", (0, Ez.Q)(uz.getCustomParameters()) || (tz.customParameters = JSON.stringify(uz.getCustomParameters()));
              for (const [zz, uz] of Object.entries(Mz || {})) tz[zz] = uz
            }
            if (uz instanceof ub) {
              const zz = uz.getScopes().filter((zz => "" !== zz));
              zz.length > 0 && (tz.scopes = zz.join(","))
            }
            zz.tenantId && (tz.tid = zz.tenantId);
            const Hz = tz;
            for (const Ez of Object.keys(Hz)) void 0 === Hz[Ez] && delete Hz[Ez];
            const Oz = await zz._getAppCheckToken(),
              pz = Oz ? `#${Cn}=${encodeURIComponent(Oz)}` : "";
            return `${function(zz){let{config:uz}=zz;if(!uz.emulator)return`
            https: //${uz.authDomain}/${In}`;return az(uz,Bn)}(zz)}?${(0,Ez.gb)(Hz).slice(1)}${pz}`}const kn="webStorageSupport";const zi=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rE,this._completeRedirectFn=An,this._overrideRedirectResult=fn}async _openPopup(zz,uz,bz,Ez){var nz;Az(null===(nz=this.eventManagers[zz._key()])||void 0===nz?void 0:nz.manager,"_initialize() not called before _openPopup()");return jn(zz,await Yn(zz,uz,bz,Tz(),Ez),NE())}async _openRedirect(zz,uz,bz,Ez){await this._originValidation(zz);return function(zz){xE().location.href=zz}(await Yn(zz,uz,bz,Tz(),Ez)),new Promise((()=>{}))}_initialize(zz){const uz=zz._key();if(this.eventManagers[uz]){const{manager:zz,promise:bz}=this.eventManagers[uz];return zz?Promise.resolve(zz):(Az(bz,"If manager is not set, promise should be"),bz)}const bz=this.initAndGetManager(zz);return this.eventManagers[uz]={promise:bz},bz.catch((()=>{delete this.eventManagers[uz]})),bz}async initAndGetManager(zz){const uz=await async function(zz){const uz=await gn(zz),bz=xE().gapi;return xz(bz,zz,"internal-error"),uz.open({where:document.body,url:Qn(zz),messageHandlersFilter:bz.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yn,dontclear:!0},(uz=>new Promise((async(bz,Ez)=>{await uz.restyle({setHideOnLeave:!1});const nz=rz(zz,"network-request-failed"),iz=xE().setTimeout((()=>{Ez(nz)}),Sn.get());function lz(){xE().clearTimeout(iz),bz(uz)}uz.ping(lz).then(lz,(()=>{Ez(nz)}))}))))}(zz),bz=new Ln(zz);return uz.register("authEvent",(uz=>{xz(null===uz||void 0===uz?void 0:uz.authEvent,zz,"invalid-auth-event");return{status:bz.onEvent(uz.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[zz._key()]={manager:bz},this.iframes[zz._key()]=uz,bz}_isIframeWebStorageSupported(zz,uz){this.iframes[zz._key()].send(kn,{type:kn},(bz=>{var Ez;const nz=null===(Ez=null===bz||void 0===bz?void 0:bz[0])||void 0===Ez?void 0:Ez[kn];void 0!==nz&&uz(!!nz),sz(zz,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(zz){const uz=zz._key();return this.originValidationPromises[uz]||(this.originValidationPromises[uz]=mn(zz)),this.originValidationPromises[uz]}get _shouldInitProactively(){return fu()||du()||Xu()}};class ui{constructor(zz){this.factorId=zz}_process(zz,uz,bz){switch(uz.type){case"enroll":return this._finalizeEnroll(zz,uz.credential,bz);case"signin":return this._finalizeSignIn(zz,uz.credential);default:return Jz("unexpected MultiFactorSessionType")}}}class bi extends ui{constructor(zz){super("phone"),this.credential=zz}static _fromCredential(zz){return new bi(zz)}_finalizeEnroll(zz,uz,bz){return function(zz,uz){return Uz(zz,"POST","/v2/accounts/mfaEnrollment:finalize",hz(zz,uz))}(zz,{idToken:uz,displayName:bz,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(zz,uz){return function(zz,uz){return Uz(zz,"POST","/v2/accounts/mfaSignIn:finalize",hz(zz,uz))}(zz,{mfaPendingCredential:uz,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ei{constructor(){}static assertion(zz){return bi._fromCredential(zz)}}Ei.FACTOR_ID="phone";class ni{static assertionForEnrollment(zz,uz){return ii._fromSecret(zz,uz)}static assertionForSignIn(zz,uz){return ii._fromEnrollmentId(zz,uz)}static async generateSecret(zz){const uz=zz;xz("undefined"!==typeof uz.auth,"internal-error");const bz=await(Ez=uz.auth,nz={idToken:uz.credential,totpEnrollmentInfo:{}},Uz(Ez,"POST","/v2/accounts/mfaEnrollment:start",hz(Ez,nz)));var Ez,nz;return li._fromStartTotpMfaEnrollmentResponse(bz,uz.auth)}}ni.FACTOR_ID="totp";class ii extends ui{constructor(zz,uz,bz){super("totp"),this.otp=zz,this.enrollmentId=uz,this.secret=bz}static _fromSecret(zz,uz){return new ii(uz,void 0,zz)}static _fromEnrollmentId(zz,uz){return new ii(uz,zz)}async _finalizeEnroll(zz,uz,bz){return xz("undefined"!==typeof this.secret,zz,"argument-error"),function(zz,uz){return Uz(zz,"POST","/v2/accounts/mfaEnrollment:finalize",hz(zz,uz))}(zz,{idToken:uz,displayName:bz,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(zz,uz){xz(void 0!==this.enrollmentId&&void 0!==this.otp,zz,"argument-error");const bz={verificationCode:this.otp};return function(zz,uz){return Uz(zz,"POST","/v2/accounts/mfaSignIn:finalize",hz(zz,uz))}(zz,{mfaPendingCredential:uz,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:bz})}}class li{constructor(zz,uz,bz,Ez,nz,iz,lz){this.sessionInfo=iz,this.auth=lz,this.secretKey=zz,this.hashingAlgorithm=uz,this.codeLength=bz,this.codeIntervalSeconds=Ez,this.enrollmentCompletionDeadline=nz}static _fromStartTotpMfaEnrollmentResponse(zz,uz){return new li(zz.totpSessionInfo.sharedSecretKey,zz.totpSessionInfo.hashingAlgorithm,zz.totpSessionInfo.verificationCodeLength,zz.totpSessionInfo.periodSec,new Date(zz.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),zz.totpSessionInfo.sessionInfo,uz)}_makeTotpVerificationInfo(zz){return{sessionInfo:this.sessionInfo,verificationCode:zz}}generateQrCodeUrl(zz,uz){var bz;let Ez=!1;return(Mi(zz)||Mi(uz))&&(Ez=!0),Ez&&(Mi(zz)&&(zz=(null===(bz=this.auth.currentUser)||void 0===bz?void 0:bz.email)||"unknownuser"),Mi(uz)&&(uz=this.auth.name)),`otpauth://totp/${uz}:${zz}?secret=${this.secretKey}&issuer=${uz}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Mi(zz){return"undefined"===typeof zz||0===(null===zz||void 0===zz?void 0:zz.length)}var ti="@firebase/auth",Hi="0.23.2";class Oi{constructor(zz){this.auth=zz,this.internalListeners=new Map}getUid(){var zz;return this.assertAuthConfigured(),(null===(zz=this.auth.currentUser)||void 0===zz?void 0:zz.uid)||null}async getToken(zz){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(zz)}}addAuthTokenListener(zz){if(this.assertAuthConfigured(),this.internalListeners.has(zz))return;const uz=this.auth.onIdTokenChanged((uz=>{zz((null===uz||void 0===uz?void 0:uz.stsTokenManager.accessToken)||null)}));this.internalListeners.set(zz,uz),this.updateProactiveRefresh()}removeAuthTokenListener(zz){this.assertAuthConfigured();const uz=this.internalListeners.get(zz);uz&&(this.internalListeners.delete(zz),uz(),this.updateProactiveRefresh())}assertAuthConfigured(){xz(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const di=(0,Ez.E)("authIdTokenMaxAge")||300;let Fi=null;const Zi=zz=>async uz=>{const bz=uz&&await uz.getIdTokenResult(),Ez=bz&&((new Date).getTime()-Date.parse(bz.issuedAtTime))/1e3;if(Ez&&Ez>di)return;const nz=null===bz||void 0===bz?void 0:bz.token;Fi!==nz&&(Fi=nz,await fetch(zz,{method:nz?"POST":"DELETE",headers:nz?{Authorization:`Bearer ${nz}`}:{}}))};function Ri(){let zz=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,nz.K)();const uz=(0,nz.x)(zz,"auth");if(uz.isInitialized())return uz.getImmediate();const bz=Vu(zz,{popupRedirectResolver:zi,persistence:[hE,fE,rE]}),iz=(0,Ez.E)("authTokenSyncURL");if(iz){const zz=Zi(iz);nE(bz,zz,(()=>zz(bz.currentUser))),EE(bz,(uz=>zz(uz)))}const lz=(0,Ez.B)("auth");return lz&&mu(bz,`http://${lz}`),bz}var Ki;Ki="Browser",(0,nz.A)(new Mz.f("auth",((zz,uz)=>{let{options:bz}=uz;const Ez=zz.getProvider("app").getImmediate(),nz=zz.getProvider("heartbeat"),iz=zz.getProvider("app-check-internal"),{apiKey:lz,authDomain:Mz}=Ez.options;xz(lz&&!lz.includes(":"),"invalid-api-key",{appName:Ez.name});const tz={apiKey:lz,authDomain:Mz,clientPlatform:Ki,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:su(Ki)},Hz=new Pu(Ez,nz,iz,tz);return function(zz,uz){const bz=(null===uz||void 0===uz?void 0:uz.persistence)||[],Ez=(Array.isArray(bz)?bz:[bz]).map(iu);(null===uz||void 0===uz?void 0:uz.errorMap)&&zz._updateErrorMap(uz.errorMap),zz._initializeWithPersistence(Ez,null===uz||void 0===uz?void 0:uz.popupRedirectResolver)}(Hz,bz),Hz}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((zz,uz,bz)=>{zz.getProvider("auth-internal").initialize()}))),(0,nz.A)(new Mz.f("auth-internal",(zz=>(zz=>new Oi(zz))(Gu(zz.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,nz.S)(ti,Hi,function(zz){switch(zz){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ki)),(0,nz.S)(ti,Hi,"esm2017")}};Object.freeze(modules);for(const zz in modules)Object.freeze(modules[zz]);