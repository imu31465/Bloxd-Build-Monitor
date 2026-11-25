/*! For license information please see wp3j0a.272.f95bbed6.chunk.js.LICENSE.txt */
export const id = 272;
export const ids = [272];
export const modules = {
    40916: (GG, bG, ZG) => {
        ZG.r(bG), ZG.d(bG, {
          ActionCodeOperation: () => fG,
          ActionCodeURL: () => Ob,
          AuthCredential: () => Ab,
          AuthErrorCodes: () => JG,
          EmailAuthCredential: () => Tb,
          EmailAuthProvider: () => Bb,
          FacebookAuthProvider: () => wZ,
          FactorId: () => UG,
          GithubAuthProvider: () => LZ,
          GoogleAuthProvider: () => SZ,
          OAuthCredential: () => tb,
          OAuthProvider: () => ZZ,
          OperationType: () => pG,
          PhoneAuthCredential: () => Nb,
          PhoneAuthProvider: () => ZS,
          PhoneMultiFactorGenerator: () => bL,
          ProviderId: () => YG,
          RecaptchaVerifier: () => Dw,
          SAMLAuthProvider: () => kZ,
          SignInMethod: () => VG,
          TotpMultiFactorGenerator: () => ZL,
          TotpSecret: () => SL,
          TwitterAuthProvider: () => UZ,
          applyActionCode: () => aZ,
          beforeAuthStateChanged: () => Sw,
          browserLocalPersistence: () => zw,
          browserPopupRedirectResolver: () => xS,
          browserSessionPersistence: () => ow,
          checkActionCode: () => cZ,
          confirmPasswordReset: () => vZ,
          connectAuthEmulator: () => jb,
          createUserWithEmailAndPassword: () => jZ,
          debugErrorMap: () => KG,
          deleteUser: () => Yw,
          fetchSignInMethodsForEmail: () => qZ,
          getAdditionalUserInfo: () => Gw,
          getAuth: () => fL,
          getIdToken: () => TG,
          getIdTokenResult: () => HG,
          getMultiFactorResolver: () => fw,
          getRedirectResult: () => iS,
          inMemoryPersistence: () => kb,
          indexedDBLocalPersistence: () => Aw,
          initializeAuth: () => lb,
          initializeRecaptchaConfig: () => Zw,
          isSignInWithEmailLink: () => AZ,
          linkWithCredential: () => XZ,
          linkWithPhoneNumber: () => xw,
          linkWithPopup: () => fS,
          linkWithRedirect: () => uS,
          multiFactor: () => hw,
          onAuthStateChanged: () => Lw,
          onIdTokenChanged: () => ww,
          parseActionCodeURL: () => xb,
          prodErrorMap: () => hG,
          reauthenticateWithCredential: () => uZ,
          reauthenticateWithPhoneNumber: () => Bw,
          reauthenticateWithPopup: () => pS,
          reauthenticateWithRedirect: () => XS,
          reload: () => Gb,
          sendEmailVerification: () => nZ,
          sendPasswordResetEmail: () => FZ,
          sendSignInLinkToEmail: () => MZ,
          setPersistence: () => bw,
          signInAnonymously: () => fZ,
          signInWithCredential: () => oZ,
          signInWithCustomToken: () => iZ,
          signInWithEmailAndPassword: () => PZ,
          signInWithEmailLink: () => sZ,
          signInWithPhoneNumber: () => Ow,
          signInWithPopup: () => VS,
          signInWithRedirect: () => oS,
          signOut: () => Uw,
          unlink: () => dZ,
          updateCurrentUser: () => kw,
          updateEmail: () => RZ,
          updatePassword: () => TZ,
          updatePhoneNumber: () => bS,
          updateProfile: () => eZ,
          useDeviceLanguage: () => yw,
          verifyBeforeUpdateEmail: () => gZ,
          verifyPasswordResetCode: () => lZ
        });
        var wG = ZG(40899),
          SG = ZG(40891);

        function LG(GG, bG) {
          var ZG = {};
          for (var wG in GG) Object.prototype.hasOwnProperty.call(GG, wG) && bG.indexOf(wG) < 0 && (ZG[wG] = GG[wG]);
          if (null != GG && "function" === typeof Object.getOwnPropertySymbols) {
            var SG = 0;
            for (wG = Object.getOwnPropertySymbols(GG); SG < wG.length; SG++) bG.indexOf(wG[SG]) < 0 && Object.prototype.propertyIsEnumerable.call(GG, wG[SG]) && (ZG[wG[SG]] = GG[wG[SG]])
          }
          return ZG
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var yG = ZG(40901),
          kG = ZG(40895);
        const UG = {
            PHONE: "phone",
            TOTP: "totp"
          },
          YG = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          VG = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          pG = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          fG = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function QG() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const KG = function() {
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
          hG = QG,
          dG = new wG.i("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          JG = {
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
          rG = new yG.e("@firebase/auth");

        function zG(GG) {
          if (rG.logLevel <= yG.b.ERROR) {
            for (var bG = arguments.length, ZG = new Array(bG > 1 ? bG - 1 : 0), wG = 1; wG < bG; wG++) ZG[wG - 1] = arguments[wG];
            rG.error(`Auth (${SG.f}): ${GG}`, ...ZG)
          }
        }

        function EG(GG) {
          for (var bG = arguments.length, ZG = new Array(bG > 1 ? bG - 1 : 0), wG = 1; wG < bG; wG++) ZG[wG - 1] = arguments[wG];
          throw iG(GG, ...ZG)
        }

        function oG(GG) {
          for (var bG = arguments.length, ZG = new Array(bG > 1 ? bG - 1 : 0), wG = 1; wG < bG; wG++) ZG[wG - 1] = arguments[wG];
          return iG(GG, ...ZG)
        }

        function XG(GG, bG, ZG) {
          const SG = Object.assign(Object.assign({}, hG()), {
            [bG]: ZG
          });
          return new wG.i("auth", "Firebase", SG).create(bG, {
            appName: GG.name
          })
        }

        function uG(GG, bG, ZG) {
          if (!(bG instanceof ZG)) throw ZG.name !== bG.constructor.name && EG(GG, "argument-error"), XG(GG, "argument-error", `Type of ${bG.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function iG(GG) {
          for (var bG = arguments.length, ZG = new Array(bG > 1 ? bG - 1 : 0), wG = 1; wG < bG; wG++) ZG[wG - 1] = arguments[wG];
          if ("string" !== typeof GG) {
            const bG = ZG[0],
              wG = [...ZG.slice(1)];
            return wG[0] && (wG[0].appName = GG.name), GG._errorFactory.create(bG, ...wG)
          }
          return dG.create(GG, ...ZG)
        }

        function CG(GG, bG) {
          if (!GG) {
            for (var ZG = arguments.length, wG = new Array(ZG > 2 ? ZG - 2 : 0), SG = 2; SG < ZG; SG++) wG[SG - 2] = arguments[SG];
            throw iG(bG, ...wG)
          }
        }

        function WG(GG) {
          const bG = "INTERNAL ASSERTION FAILED: " + GG;
          throw zG(bG), new Error(bG)
        }

        function mG(GG, bG) {
          GG || WG(bG)
        }

        function IG() {
          var GG;
          return "undefined" !== typeof self && (null === (GG = self.location) || void 0 === GG ? void 0 : GG.href) || ""
        }

        function FG() {
          return "http:" === vG() || "https:" === vG()
        }

        function vG() {
          var GG;
          return "undefined" !== typeof self && (null === (GG = self.location) || void 0 === GG ? void 0 : GG.protocol) || null
        }
        class aG {
          constructor(GG, bG) {
            this.shortDelay = GG, this.longDelay = bG, mG(bG > GG, "Short delay should be less than long delay!"), this.isMobile = (0, wG.V)() || (0, wG.X)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (FG() || (0, wG.M)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function cG(GG, bG) {
          mG(GG.emulator, "Emulator should always be set here");
          const {
            url: ZG
          } = GG.emulator;
          return bG ? `${ZG}${bG.startsWith("/")?bG.slice(1):bG}` : ZG
        }
        class lG {
          static initialize(GG, bG, ZG) {
            this.fetchImpl = GG, bG && (this.headersImpl = bG), ZG && (this.responseImpl = ZG)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void WG("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void WG("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void WG("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const jG = {
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
          PG = new aG(3e4, 6e4);

        function MG(GG, bG) {
          return GG.tenantId && !bG.tenantId ? Object.assign(Object.assign({}, bG), {
            tenantId: GG.tenantId
          }) : bG
        }
        async function AG(GG, bG, ZG, SG) {
          return sG(GG, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let LG = {},
              yG = {};
            SG && ("GET" === bG ? yG = SG : LG = {
              body: JSON.stringify(SG)
            });
            const kG = (0, wG.cb)(Object.assign({
                key: GG.config.apiKey
              }, yG)).slice(1),
              UG = await GG._getAdditionalHeaders();
            return UG["Content-Type"] = "application/json", GG.languageCode && (UG["X-Firebase-Locale"] = GG.languageCode), lG.fetch()(nG(GG, GG.config.apiHost, ZG, kG), Object.assign({
              method: bG,
              headers: UG,
              referrerPolicy: "no-referrer"
            }, LG))
          }))
        }
        async function sG(GG, bG, ZG) {
          GG._canInitEmulator = !1;
          const SG = Object.assign(Object.assign({}, jG), bG);
          try {
            const bG = new gG(GG),
              wG = await Promise.race([ZG(), bG.promise]);
            bG.clearNetworkTimeout();
            const LG = await wG.json();
            if ("needConfirmation" in LG) throw eG(GG, "account-exists-with-different-credential", LG);
            if (wG.ok && !("errorMessage" in LG)) return LG;
            {
              const bG = wG.ok ? LG.errorMessage : LG.error.message,
                [ZG, yG] = bG.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === ZG) throw eG(GG, "credential-already-in-use", LG);
              if ("EMAIL_EXISTS" === ZG) throw eG(GG, "email-already-in-use", LG);
              if ("USER_DISABLED" === ZG) throw eG(GG, "user-disabled", LG);
              const kG = SG[ZG] || ZG.toLowerCase().replace(/[_\s]+/g, "-");
              if (yG) throw XG(GG, kG, yG);
              EG(GG, kG)
            }
          } catch (LG) {
            if (LG instanceof wG.m) throw LG;
            EG(GG, "network-request-failed", {
              message: String(LG)
            })
          }
        }
        async function qG(GG, bG, ZG, wG) {
          let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const LG = await AG(GG, bG, ZG, wG, SG);
          return "mfaPendingCredential" in LG && EG(GG, "multi-factor-auth-required", {
            _serverResponse: LG
          }), LG
        }

        function nG(GG, bG, ZG, wG) {
          const SG = `${bG}${ZG}?${wG}`;
          return GG.config.emulator ? cG(GG.config, SG) : `${GG.config.apiScheme}://${SG}`
        }
        class gG {
          constructor(GG) {
            this.auth = GG, this.timer = null, this.promise = new Promise(((GG, bG) => {
              this.timer = setTimeout((() => bG(oG(this.auth, "network-request-failed"))), PG.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function eG(GG, bG, ZG) {
          const wG = {
            appName: GG.name
          };
          ZG.email && (wG.email = ZG.email), ZG.phoneNumber && (wG.phoneNumber = ZG.phoneNumber);
          const SG = oG(GG, bG, wG);
          return SG.customData._tokenResponse = ZG, SG
        }

        function RG(GG) {
          if (GG) try {
            const bG = new Date(Number(GG));
            if (!isNaN(bG.getTime())) return bG.toUTCString()
          } catch (bG) {}
        }

        function TG(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, wG.H)(GG).getIdToken(bG)
        }
        async function HG(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const ZG = (0, wG.H)(GG),
            SG = await ZG.getIdToken(bG),
            LG = DG(SG);
          CG(LG && LG.exp && LG.auth_time && LG.iat, ZG.auth, "internal-error");
          const yG = "object" === typeof LG.firebase ? LG.firebase : void 0,
            kG = null === yG || void 0 === yG ? void 0 : yG.sign_in_provider;
          return {
            claims: LG,
            token: SG,
            authTime: RG(tG(LG.auth_time)),
            issuedAtTime: RG(tG(LG.iat)),
            expirationTime: RG(tG(LG.exp)),
            signInProvider: kG || null,
            signInSecondFactor: (null === yG || void 0 === yG ? void 0 : yG.sign_in_second_factor) || null
          }
        }

        function tG(GG) {
          return 1e3 * Number(GG)
        }

        function DG(GG) {
          const [bG, ZG, SG] = GG.split(".");
          if (void 0 === bG || void 0 === ZG || void 0 === SG) return zG("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const GG = (0, wG.p)(ZG);
            return GG ? JSON.parse(GG) : (zG("Failed to decode base64 JWT payload"), null)
          } catch (LG) {
            return zG("Caught error parsing JWT payload as JSON", null === LG || void 0 === LG ? void 0 : LG.toString()), null
          }
        }
        async function NG(GG, bG) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return bG;
          try {
            return await bG
          } catch (ZG) {
            throw ZG instanceof wG.m && function(GG) {
              let {
                code: bG
              } = GG;
              return "auth/user-disabled" === bG || "auth/user-token-expired" === bG
            }(ZG) && GG.auth.currentUser === GG && await GG.auth.signOut(), ZG
          }
        }
        class OG {
          constructor(GG) {
            this.user = GG, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(GG) {
            var bG;
            if (GG) {
              const GG = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), GG
            } {
              this.errorBackoff = 3e4;
              const GG = (null !== (bG = this.user.stsTokenManager.expirationTime) && void 0 !== bG ? bG : 0) - Date.now() - 3e5;
              return Math.max(0, GG)
            }
          }
          schedule() {
            let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const bG = this.getInterval(GG);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), bG)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (GG) {
              return void("auth/network-request-failed" === (null === GG || void 0 === GG ? void 0 : GG.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class xG {
          constructor(GG, bG) {
            this.createdAt = GG, this.lastLoginAt = bG, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = RG(this.lastLoginAt), this.creationTime = RG(this.createdAt)
          }
          _copy(GG) {
            this.createdAt = GG.createdAt, this.lastLoginAt = GG.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function BG(GG) {
          var bG;
          const ZG = GG.auth,
            wG = await GG.getIdToken(),
            SG = await NG(GG, async function(GG, bG) {
              return AG(GG, "POST", "/v1/accounts:lookup", bG)
            }(ZG, {
              idToken: wG
            }));
          CG(null === SG || void 0 === SG ? void 0 : SG.users.length, ZG, "internal-error");
          const yG = SG.users[0];
          GG._notifyReloadListener(yG);
          const kG = (null === (bG = yG.providerUserInfo) || void 0 === bG ? void 0 : bG.length) ? yG.providerUserInfo.map((GG => {
            var {
              providerId: bG
            } = GG, ZG = LG(GG, ["providerId"]);
            return {
              providerId: bG,
              uid: ZG.rawId || "",
              displayName: ZG.displayName || null,
              email: ZG.email || null,
              phoneNumber: ZG.phoneNumber || null,
              photoURL: ZG.photoUrl || null
            }
          })) : [];
          const UG = (YG = GG.providerData, VG = kG, [...YG.filter((GG => !VG.some((bG => bG.providerId === GG.providerId)))), ...VG]);
          var YG, VG;
          const pG = GG.isAnonymous,
            fG = !(GG.email && yG.passwordHash) && !(null === UG || void 0 === UG ? void 0 : UG.length),
            QG = !!pG && fG,
            KG = {
              uid: yG.localId,
              displayName: yG.displayName || null,
              photoURL: yG.photoUrl || null,
              email: yG.email || null,
              emailVerified: yG.emailVerified || !1,
              phoneNumber: yG.phoneNumber || null,
              tenantId: yG.tenantId || null,
              providerData: UG,
              metadata: new xG(yG.createdAt, yG.lastLoginAt),
              isAnonymous: QG
            };
          Object.assign(GG, KG)
        }
        async function Gb(GG) {
          const bG = (0, wG.H)(GG);
          await BG(bG), await bG.auth._persistUserIfCurrent(bG), bG.auth._notifyListenersIfCurrent(bG)
        }
        class bb {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(GG) {
            CG(GG.idToken, "internal-error"), CG("undefined" !== typeof GG.idToken, "internal-error"), CG("undefined" !== typeof GG.refreshToken, "internal-error");
            const bG = "expiresIn" in GG && "undefined" !== typeof GG.expiresIn ? Number(GG.expiresIn) : function(GG) {
              const bG = DG(GG);
              return CG(bG, "internal-error"), CG("undefined" !== typeof bG.exp, "internal-error"), CG("undefined" !== typeof bG.iat, "internal-error"), Number(bG.exp) - Number(bG.iat)
            }(GG.idToken);
            this.updateTokensAndExpiration(GG.idToken, GG.refreshToken, bG)
          }
          async getToken(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return CG(!this.accessToken || this.refreshToken, GG, "user-token-expired"), bG || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(GG, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(GG, bG) {
            const {
              accessToken: ZG,
              refreshToken: SG,
              expiresIn: LG
            } = await async function(GG, bG) {
              const ZG = await sG(GG, {}, (async () => {
                const ZG = (0, wG.cb)({
                    grant_type: "refresh_token",
                    refresh_token: bG
                  }).slice(1),
                  {
                    tokenApiHost: SG,
                    apiKey: LG
                  } = GG.config,
                  yG = nG(GG, SG, "/v1/token", `key=${LG}`),
                  kG = await GG._getAdditionalHeaders();
                return kG["Content-Type"] = "application/x-www-form-urlencoded", lG.fetch()(yG, {
                  method: "POST",
                  headers: kG,
                  body: ZG
                })
              }));
              return {
                accessToken: ZG.access_token,
                expiresIn: ZG.expires_in,
                refreshToken: ZG.refresh_token
              }
            }(GG, bG);
            this.updateTokensAndExpiration(ZG, SG, Number(LG))
          }
          updateTokensAndExpiration(GG, bG, ZG) {
            this.refreshToken = bG || null, this.accessToken = GG || null, this.expirationTime = Date.now() + 1e3 * ZG
          }
          static fromJSON(GG, bG) {
            const {
              refreshToken: ZG,
              accessToken: wG,
              expirationTime: SG
            } = bG, LG = new bb;
            return ZG && (CG("string" === typeof ZG, "internal-error", {
              appName: GG
            }), LG.refreshToken = ZG), wG && (CG("string" === typeof wG, "internal-error", {
              appName: GG
            }), LG.accessToken = wG), SG && (CG("number" === typeof SG, "internal-error", {
              appName: GG
            }), LG.expirationTime = SG), LG
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(GG) {
            this.accessToken = GG.accessToken, this.refreshToken = GG.refreshToken, this.expirationTime = GG.expirationTime
          }
          _clone() {
            return Object.assign(new bb, this.toJSON())
          }
          _performRefresh() {
            return WG("not implemented")
          }
        }

        function Zb(GG, bG) {
          CG("string" === typeof GG || "undefined" === typeof GG, "internal-error", {
            appName: bG
          })
        }
        class wb {
          constructor(GG) {
            var {
              uid: bG,
              auth: ZG,
              stsTokenManager: wG
            } = GG, SG = LG(GG, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new OG(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = bG, this.auth = ZG, this.stsTokenManager = wG, this.accessToken = wG.accessToken, this.displayName = SG.displayName || null, this.email = SG.email || null, this.emailVerified = SG.emailVerified || !1, this.phoneNumber = SG.phoneNumber || null, this.photoURL = SG.photoURL || null, this.isAnonymous = SG.isAnonymous || !1, this.tenantId = SG.tenantId || null, this.providerData = SG.providerData ? [...SG.providerData] : [], this.metadata = new xG(SG.createdAt || void 0, SG.lastLoginAt || void 0)
          }
          async getIdToken(GG) {
            const bG = await NG(this, this.stsTokenManager.getToken(this.auth, GG));
            return CG(bG, this.auth, "internal-error"), this.accessToken !== bG && (this.accessToken = bG, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), bG
          }
          getIdTokenResult(GG) {
            return HG(this, GG)
          }
          reload() {
            return Gb(this)
          }
          _assign(GG) {
            this !== GG && (CG(this.uid === GG.uid, this.auth, "internal-error"), this.displayName = GG.displayName, this.photoURL = GG.photoURL, this.email = GG.email, this.emailVerified = GG.emailVerified, this.phoneNumber = GG.phoneNumber, this.isAnonymous = GG.isAnonymous, this.tenantId = GG.tenantId, this.providerData = GG.providerData.map((GG => Object.assign({}, GG))), this.metadata._copy(GG.metadata), this.stsTokenManager._assign(GG.stsTokenManager))
          }
          _clone(GG) {
            const bG = new wb(Object.assign(Object.assign({}, this), {
              auth: GG,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return bG.metadata._copy(this.metadata), bG
          }
          _onReload(GG) {
            CG(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = GG, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(GG) {
            this.reloadListener ? this.reloadListener(GG) : this.reloadUserInfo = GG
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZG = !1;
            GG.idToken && GG.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(GG), ZG = !0), bG && await BG(this), await this.auth._persistUserIfCurrent(this), ZG && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const GG = await this.getIdToken();
            return await NG(this, async function(GG, bG) {
              return AG(GG, "POST", "/v1/accounts:delete", bG)
            }(this.auth, {
              idToken: GG
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
              providerData: this.providerData.map((GG => Object.assign({}, GG))),
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
          static _fromJSON(GG, bG) {
            var ZG, wG, SG, LG, yG, kG, UG, YG;
            const VG = null !== (ZG = bG.displayName) && void 0 !== ZG ? ZG : void 0,
              pG = null !== (wG = bG.email) && void 0 !== wG ? wG : void 0,
              fG = null !== (SG = bG.phoneNumber) && void 0 !== SG ? SG : void 0,
              QG = null !== (LG = bG.photoURL) && void 0 !== LG ? LG : void 0,
              KG = null !== (yG = bG.tenantId) && void 0 !== yG ? yG : void 0,
              hG = null !== (kG = bG._redirectEventId) && void 0 !== kG ? kG : void 0,
              dG = null !== (UG = bG.createdAt) && void 0 !== UG ? UG : void 0,
              JG = null !== (YG = bG.lastLoginAt) && void 0 !== YG ? YG : void 0,
              {
                uid: rG,
                emailVerified: zG,
                isAnonymous: EG,
                providerData: oG,
                stsTokenManager: XG
              } = bG;
            CG(rG && XG, GG, "internal-error");
            const uG = bb.fromJSON(this.name, XG);
            CG("string" === typeof rG, GG, "internal-error"), Zb(VG, GG.name), Zb(pG, GG.name), CG("boolean" === typeof zG, GG, "internal-error"), CG("boolean" === typeof EG, GG, "internal-error"), Zb(fG, GG.name), Zb(QG, GG.name), Zb(KG, GG.name), Zb(hG, GG.name), Zb(dG, GG.name), Zb(JG, GG.name);
            const iG = new wb({
              uid: rG,
              auth: GG,
              email: pG,
              emailVerified: zG,
              displayName: VG,
              isAnonymous: EG,
              photoURL: QG,
              phoneNumber: fG,
              tenantId: KG,
              stsTokenManager: uG,
              createdAt: dG,
              lastLoginAt: JG
            });
            return oG && Array.isArray(oG) && (iG.providerData = oG.map((GG => Object.assign({}, GG)))), hG && (iG._redirectEventId = hG), iG
          }
          static async _fromIdTokenResponse(GG, bG) {
            let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const wG = new bb;
            wG.updateFromServerResponse(bG);
            const SG = new wb({
              uid: bG.localId,
              auth: GG,
              stsTokenManager: wG,
              isAnonymous: ZG
            });
            return await BG(SG), SG
          }
        }
        const Sb = new Map;

        function Lb(GG) {
          mG(GG instanceof Function, "Expected a class definition");
          let bG = Sb.get(GG);
          return bG ? (mG(bG instanceof GG, "Instance stored in cache mismatched with class"), bG) : (bG = new GG, Sb.set(GG, bG), bG)
        }
        class yb {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(GG, bG) {
            this.storage[GG] = bG
          }
          async _get(GG) {
            const bG = this.storage[GG];
            return void 0 === bG ? null : bG
          }
          async _remove(GG) {
            delete this.storage[GG]
          }
          _addListener(GG, bG) {}
          _removeListener(GG, bG) {}
        }
        yb.type = "NONE";
        const kb = yb;

        function Ub(GG, bG, ZG) {
          return `firebase:${GG}:${bG}:${ZG}`
        }
        class Yb {
          constructor(GG, bG, ZG) {
            this.persistence = GG, this.auth = bG, this.userKey = ZG;
            const {
              config: wG,
              name: SG
            } = this.auth;
            this.fullUserKey = Ub(this.userKey, wG.apiKey, SG), this.fullPersistenceKey = Ub("persistence", wG.apiKey, SG), this.boundEventHandler = bG._onStorageEvent.bind(bG), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(GG) {
            return this.persistence._set(this.fullUserKey, GG.toJSON())
          }
          async getCurrentUser() {
            const GG = await this.persistence._get(this.fullUserKey);
            return GG ? wb._fromJSON(this.auth, GG) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(GG) {
            if (this.persistence === GG) return;
            const bG = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = GG, bG ? this.setCurrentUser(bG) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(GG, bG) {
            let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!bG.length) return new Yb(Lb(kb), GG, ZG);
            const wG = (await Promise.all(bG.map((async GG => {
              if (await GG._isAvailable()) return GG
            })))).filter((GG => GG));
            let SG = wG[0] || Lb(kb);
            const LG = Ub(ZG, GG.config.apiKey, GG.name);
            let yG = null;
            for (const YG of bG) try {
              const bG = await YG._get(LG);
              if (bG) {
                const ZG = wb._fromJSON(GG, bG);
                YG !== SG && (yG = ZG), SG = YG;
                break
              }
            } catch (UG) {}
            const kG = wG.filter((GG => GG._shouldAllowMigration));
            return SG._shouldAllowMigration && kG.length ? (SG = kG[0], yG && await SG._set(LG, yG.toJSON()), await Promise.all(bG.map((async GG => {
              if (GG !== SG) try {
                await GG._remove(LG)
              } catch (UG) {}
            }))), new Yb(SG, GG, ZG)) : new Yb(SG, GG, ZG)
          }
        }

        function Vb(GG) {
          const bG = GG.toLowerCase();
          if (bG.includes("opera/") || bG.includes("opr/") || bG.includes("opios/")) return "Opera";
          if (Kb(bG)) return "IEMobile";
          if (bG.includes("msie") || bG.includes("trident/")) return "IE";
          if (bG.includes("edge/")) return "Edge";
          if (pb(bG)) return "Firefox";
          if (bG.includes("silk/")) return "Silk";
          if (db(bG)) return "Blackberry";
          if (Jb(bG)) return "Webos";
          if (fb(bG)) return "Safari";
          if ((bG.includes("chrome/") || Qb(bG)) && !bG.includes("edge/")) return "Chrome";
          if (hb(bG)) return "Android";
          {
            const bG = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              ZG = GG.match(bG);
            if (2 === (null === ZG || void 0 === ZG ? void 0 : ZG.length)) return ZG[1]
          }
          return "Other"
        }

        function pb() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wG.K)();
          return /firefox\//i.test(GG)
        }

        function fb() {
          const GG = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wG.K)()).toLowerCase();
          return GG.includes("safari/") && !GG.includes("chrome/") && !GG.includes("crios/") && !GG.includes("android")
        }

        function Qb() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wG.K)();
          return /crios\//i.test(GG)
        }

        function Kb() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wG.K)();
          return /iemobile/i.test(GG)
        }

        function hb() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wG.K)();
          return /android/i.test(GG)
        }

        function db() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wG.K)();
          return /blackberry/i.test(GG)
        }

        function Jb() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wG.K)();
          return /webos/i.test(GG)
        }

        function rb() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wG.K)();
          return /iphone|ipad|ipod/i.test(GG) || /macintosh/i.test(GG) && /mobile/i.test(GG)
        }

        function zb() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wG.K)();
          return rb(GG) || hb(GG) || Jb(GG) || db(GG) || /windows phone/i.test(GG) || Kb(GG)
        }

        function Eb(GG) {
          let bG, ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (GG) {
            case "Browser":
              bG = Vb((0, wG.K)());
              break;
            case "Worker":
              bG = `${Vb((0,wG.K)())}-${GG}`;
              break;
            default:
              bG = GG
          }
          const LG = ZG.length ? ZG.join(",") : "FirebaseCore-web";
          return `${bG}/JsCore/${SG.f}/${LG}`
        }
        async function ob(GG, bG) {
          return AG(GG, "GET", "/v2/recaptchaConfig", MG(GG, bG))
        }

        function Xb(GG) {
          return void 0 !== GG && void 0 !== GG.getResponse
        }

        function ub(GG) {
          return void 0 !== GG && void 0 !== GG.enterprise
        }
        class ib {
          constructor(GG) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === GG.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = GG.recaptchaKey.split("/")[3], this.emailPasswordEnabled = GG.recaptchaEnforcementState.some((GG => "EMAIL_PASSWORD_PROVIDER" === GG.provider && "OFF" !== GG.enforcementState))
          }
        }

        function Cb(GG) {
          return new Promise(((bG, ZG) => {
            const wG = document.createElement("script");
            wG.setAttribute("src", GG), wG.onload = bG, wG.onerror = GG => {
                const bG = oG("internal-error");
                bG.customData = GG, ZG(bG)
              }, wG.type = "text/javascript", wG.charset = "UTF-8",
              function() {
                var GG, bG;
                return null !== (bG = null === (GG = document.getElementsByTagName("head")) || void 0 === GG ? void 0 : GG[0]) && void 0 !== bG ? bG : document
              }().appendChild(wG)
          }))
        }

        function Wb(GG) {
          return `__${GG}${Math.floor(1e6*Math.random())}`
        }
        class mb {
          constructor(GG) {
            this.type = "recaptcha-enterprise", this.auth = ab(GG)
          }
          async verify() {
            let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function ZG(bG, ZG, wG) {
              const SG = window.grecaptcha;
              ub(SG) ? SG.enterprise.ready((() => {
                SG.enterprise.execute(bG, {
                  action: GG
                }).then((GG => {
                  ZG(GG)
                })).catch((() => {
                  ZG("NO_RECAPTCHA")
                }))
              })) : wG(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((GG, wG) => {
              (async function(GG) {
                if (!bG) {
                  if (null == GG.tenantId && null != GG._agentRecaptchaConfig) return GG._agentRecaptchaConfig.siteKey;
                  if (null != GG.tenantId && void 0 !== GG._tenantRecaptchaConfigs[GG.tenantId]) return GG._tenantRecaptchaConfigs[GG.tenantId].siteKey
                }
                return new Promise((async (bG, ZG) => {
                  ob(GG, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((wG => {
                    if (void 0 !== wG.recaptchaKey) {
                      const ZG = new ib(wG);
                      return null == GG.tenantId ? GG._agentRecaptchaConfig = ZG : GG._tenantRecaptchaConfigs[GG.tenantId] = ZG, bG(ZG.siteKey)
                    }
                    ZG(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((GG => {
                    ZG(GG)
                  }))
                }))
              })(this.auth).then((SG => {
                if (!bG && ub(window.grecaptcha)) ZG(SG, GG, wG);
                else {
                  if ("undefined" === typeof window) return void wG(new Error("RecaptchaVerifier is only supported in browser"));
                  Cb("https://www.google.com/recaptcha/enterprise.js?render=" + SG).then((() => {
                    ZG(SG, GG, wG)
                  })).catch((GG => {
                    wG(GG)
                  }))
                }
              })).catch((GG => {
                wG(GG)
              }))
            }))
          }
        }
        async function Ib(GG, bG, ZG) {
          let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const SG = new mb(GG);
          let LG;
          try {
            LG = await SG.verify(ZG)
          } catch (kG) {
            LG = await SG.verify(ZG, !0)
          }
          const yG = Object.assign({}, bG);
          return wG ? Object.assign(yG, {
            captchaResp: LG
          }) : Object.assign(yG, {
            captchaResponse: LG
          }), Object.assign(yG, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(yG, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), yG
        }
        class Fb {
          constructor(GG) {
            this.auth = GG, this.queue = []
          }
          pushCallback(GG, bG) {
            const ZG = bG => new Promise(((ZG, wG) => {
              try {
                ZG(GG(bG))
              } catch (SG) {
                wG(SG)
              }
            }));
            ZG.onAbort = bG, this.queue.push(ZG);
            const wG = this.queue.length - 1;
            return () => {
              this.queue[wG] = () => Promise.resolve()
            }
          }
          async runMiddleware(GG) {
            if (this.auth.currentUser === GG) return;
            const bG = [];
            try {
              for (const ZG of this.queue) await ZG(GG), ZG.onAbort && bG.push(ZG.onAbort)
            } catch (ZG) {
              bG.reverse();
              for (const GG of bG) try {
                GG()
              } catch (wG) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === ZG || void 0 === ZG ? void 0 : ZG.message
              })
            }
          }
        }
        class vb {
          constructor(GG, bG, ZG, wG) {
            this.app = GG, this.heartbeatServiceProvider = bG, this.appCheckServiceProvider = ZG, this.config = wG, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new cb(this), this.idTokenSubscription = new cb(this), this.beforeStateQueue = new Fb(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = dG, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = GG.name, this.clientVersion = wG.sdkClientVersion
          }
          _initializeWithPersistence(GG, bG) {
            return bG && (this._popupRedirectResolver = Lb(bG)), this._initializationPromise = this.queue((async () => {
              var ZG, wG;
              if (!this._deleted && (this.persistenceManager = await Yb.create(this, GG), !this._deleted)) {
                if (null === (ZG = this._popupRedirectResolver) || void 0 === ZG ? void 0 : ZG._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (SG) {}
                await this.initializeCurrentUser(bG), this.lastNotifiedUid = (null === (wG = this.currentUser) || void 0 === wG ? void 0 : wG.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const GG = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || GG ? this.currentUser && GG && this.currentUser.uid === GG.uid ? (this._currentUser._assign(GG), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(GG, !0) : void 0
          }
          async initializeCurrentUser(GG) {
            var bG;
            const ZG = await this.assertedPersistence.getCurrentUser();
            let wG = ZG,
              SG = !1;
            if (GG && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const ZG = null === (bG = this.redirectUser) || void 0 === bG ? void 0 : bG._redirectEventId,
                LG = null === wG || void 0 === wG ? void 0 : wG._redirectEventId,
                yG = await this.tryRedirectSignIn(GG);
              ZG && ZG !== LG || !(null === yG || void 0 === yG ? void 0 : yG.user) || (wG = yG.user, SG = !0)
            }
            if (!wG) return this.directlySetCurrentUser(null);
            if (!wG._redirectEventId) {
              if (SG) try {
                await this.beforeStateQueue.runMiddleware(wG)
              } catch (LG) {
                wG = ZG, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(LG)))
              }
              return wG ? this.reloadAndSetCurrentUserOrClear(wG) : this.directlySetCurrentUser(null)
            }
            return CG(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === wG._redirectEventId ? this.directlySetCurrentUser(wG) : this.reloadAndSetCurrentUserOrClear(wG)
          }
          async tryRedirectSignIn(GG) {
            let bG = null;
            try {
              bG = await this._popupRedirectResolver._completeRedirectFn(this, GG, !0)
            } catch (ZG) {
              await this._setRedirectUser(null)
            }
            return bG
          }
          async reloadAndSetCurrentUserOrClear(GG) {
            try {
              await BG(GG)
            } catch (bG) {
              if ("auth/network-request-failed" !== (null === bG || void 0 === bG ? void 0 : bG.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(GG)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const GG = navigator;
              return GG.languages && GG.languages[0] || GG.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(GG) {
            const bG = GG ? (0, wG.H)(GG) : null;
            return bG && CG(bG.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(bG && bG._clone(this))
          }
          async _updateCurrentUser(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return GG && CG(this.tenantId === GG.tenantId, this, "tenant-id-mismatch"), bG || await this.beforeStateQueue.runMiddleware(GG), this.queue((async () => {
              await this.directlySetCurrentUser(GG), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(GG) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(Lb(GG))
            }))
          }
          async initializeRecaptchaConfig() {
            const GG = await ob(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              bG = new ib(GG);
            if (null == this.tenantId ? this._agentRecaptchaConfig = bG : this._tenantRecaptchaConfigs[this.tenantId] = bG, bG.emailPasswordEnabled) {
              new mb(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(GG) {
            this._errorFactory = new wG.i("auth", "Firebase", GG())
          }
          onAuthStateChanged(GG, bG, ZG) {
            return this.registerStateListener(this.authStateSubscription, GG, bG, ZG)
          }
          beforeAuthStateChanged(GG, bG) {
            return this.beforeStateQueue.pushCallback(GG, bG)
          }
          onIdTokenChanged(GG, bG, ZG) {
            return this.registerStateListener(this.idTokenSubscription, GG, bG, ZG)
          }
          toJSON() {
            var GG;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (GG = this._currentUser) || void 0 === GG ? void 0 : GG.toJSON()
            }
          }
          async _setRedirectUser(GG, bG) {
            const ZG = await this.getOrInitRedirectPersistenceManager(bG);
            return null === GG ? ZG.removeCurrentUser() : ZG.setCurrentUser(GG)
          }
          async getOrInitRedirectPersistenceManager(GG) {
            if (!this.redirectPersistenceManager) {
              const bG = GG && Lb(GG) || this._popupRedirectResolver;
              CG(bG, this, "argument-error"), this.redirectPersistenceManager = await Yb.create(this, [Lb(bG._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(GG) {
            var bG, ZG;
            return this._isInitialized && await this.queue((async () => {})), (null === (bG = this._currentUser) || void 0 === bG ? void 0 : bG._redirectEventId) === GG ? this._currentUser : (null === (ZG = this.redirectUser) || void 0 === ZG ? void 0 : ZG._redirectEventId) === GG ? this.redirectUser : null
          }
          async _persistUserIfCurrent(GG) {
            if (GG === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(GG)))
          }
          _notifyListenersIfCurrent(GG) {
            GG === this.currentUser && this.notifyAuthListeners()
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
            var GG, bG;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const ZG = null !== (bG = null === (GG = this.currentUser) || void 0 === GG ? void 0 : GG.uid) && void 0 !== bG ? bG : null;
            this.lastNotifiedUid !== ZG && (this.lastNotifiedUid = ZG, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(GG, bG, ZG, wG) {
            if (this._deleted) return () => {};
            const SG = "function" === typeof bG ? bG : bG.next.bind(bG),
              LG = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return CG(LG, this, "internal-error"), LG.then((() => SG(this.currentUser))), "function" === typeof bG ? GG.addObserver(bG, ZG, wG) : GG.addObserver(bG)
          }
          async directlySetCurrentUser(GG) {
            this.currentUser && this.currentUser !== GG && this._currentUser._stopProactiveRefresh(), GG && this.isProactiveRefreshEnabled && GG._startProactiveRefresh(), this.currentUser = GG, GG ? await this.assertedPersistence.setCurrentUser(GG) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(GG) {
            return this.operations = this.operations.then(GG, GG), this.operations
          }
          get assertedPersistence() {
            return CG(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(GG) {
            GG && !this.frameworks.includes(GG) && (this.frameworks.push(GG), this.frameworks.sort(), this.clientVersion = Eb(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var GG;
            const bG = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (bG["X-Firebase-gmpid"] = this.app.options.appId);
            const ZG = await (null === (GG = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === GG ? void 0 : GG.getHeartbeatsHeader());
            ZG && (bG["X-Firebase-Client"] = ZG);
            const wG = await this._getAppCheckToken();
            return wG && (bG["X-Firebase-AppCheck"] = wG), bG
          }
          async _getAppCheckToken() {
            var GG;
            const bG = await (null === (GG = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === GG ? void 0 : GG.getToken());
            return (null === bG || void 0 === bG ? void 0 : bG.error) && function(GG) {
              if (rG.logLevel <= yG.b.WARN) {
                for (var bG = arguments.length, ZG = new Array(bG > 1 ? bG - 1 : 0), wG = 1; wG < bG; wG++) ZG[wG - 1] = arguments[wG];
                rG.warn(`Auth (${SG.f}): ${GG}`, ...ZG)
              }
            }(`Error while retrieving App Check token: ${bG.error}`), null === bG || void 0 === bG ? void 0 : bG.token
          }
        }

        function ab(GG) {
          return (0, wG.H)(GG)
        }
        class cb {
          constructor(GG) {
            this.auth = GG, this.observer = null, this.addObserver = (0, wG.u)((GG => this.observer = GG))
          }
          get next() {
            return CG(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function lb(GG, bG) {
          const ZG = (0, SG.y)(GG, "auth");
          if (ZG.isInitialized()) {
            const GG = ZG.getImmediate(),
              SG = ZG.getOptions();
            if ((0, wG.v)(SG, null !== bG && void 0 !== bG ? bG : {})) return GG;
            EG(GG, "already-initialized")
          }
          return ZG.initialize({
            options: bG
          })
        }

        function jb(GG, bG, ZG) {
          const wG = ab(GG);
          CG(wG._canInitEmulator, wG, "emulator-config-failed"), CG(/^https?:\/\//.test(bG), wG, "invalid-emulator-scheme");
          const SG = !!(null === ZG || void 0 === ZG ? void 0 : ZG.disableWarnings),
            LG = Pb(bG),
            {
              host: yG,
              port: kG
            } = function(GG) {
              const bG = Pb(GG),
                ZG = /(\/\/)?([^?#/]+)/.exec(GG.substr(bG.length));
              if (!ZG) return {
                host: "",
                port: null
              };
              const wG = ZG[2].split("@").pop() || "",
                SG = /^(\[[^\]]+\])(:|$)/.exec(wG);
              if (SG) {
                const GG = SG[1];
                return {
                  host: GG,
                  port: Mb(wG.substr(GG.length + 1))
                }
              } {
                const [GG, bG] = wG.split(":");
                return {
                  host: GG,
                  port: Mb(bG)
                }
              }
            }(bG),
            UG = null === kG ? "" : `:${kG}`;
          wG.config.emulator = {
            url: `${LG}//${yG}${UG}/`
          }, wG.settings.appVerificationDisabledForTesting = !0, wG.emulatorConfig = Object.freeze({
            host: yG,
            port: kG,
            protocol: LG.replace(":", ""),
            options: Object.freeze({
              disableWarnings: SG
            })
          }), SG || function() {
            function GG() {
              const GG = document.createElement("p"),
                bG = GG.style;
              GG.innerText = "Running in emulator mode. Do not use with production credentials.", bG.position = "fixed", bG.width = "100%", bG.backgroundColor = "#ffffff", bG.border = ".1em solid #000000", bG.color = "#b50000", bG.bottom = "0px", bG.left = "0px", bG.margin = "0px", bG.zIndex = "10000", bG.textAlign = "center", GG.classList.add("firebase-emulator-warning"), document.body.appendChild(GG)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", GG) : GG())
          }()
        }

        function Pb(GG) {
          const bG = GG.indexOf(":");
          return bG < 0 ? "" : GG.substr(0, bG + 1)
        }

        function Mb(GG) {
          if (!GG) return null;
          const bG = Number(GG);
          return isNaN(bG) ? null : bG
        }
        class Ab {
          constructor(GG, bG) {
            this.providerId = GG, this.signInMethod = bG
          }
          toJSON() {
            return WG("not implemented")
          }
          _getIdTokenResponse(GG) {
            return WG("not implemented")
          }
          _linkToIdToken(GG, bG) {
            return WG("not implemented")
          }
          _getReauthenticationResolver(GG) {
            return WG("not implemented")
          }
        }
        async function sb(GG, bG) {
          return AG(GG, "POST", "/v1/accounts:resetPassword", MG(GG, bG))
        }
        async function qb(GG, bG) {
          return AG(GG, "POST", "/v1/accounts:update", bG)
        }
        async function nb(GG, bG) {
          return qG(GG, "POST", "/v1/accounts:signInWithPassword", MG(GG, bG))
        }
        async function gb(GG, bG) {
          return AG(GG, "POST", "/v1/accounts:sendOobCode", MG(GG, bG))
        }
        async function eb(GG, bG) {
          return gb(GG, bG)
        }
        async function Rb(GG, bG) {
          return gb(GG, bG)
        }
        class Tb extends Ab {
          constructor(GG, bG, ZG) {
            let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", ZG), this._email = GG, this._password = bG, this._tenantId = wG
          }
          static _fromEmailAndPassword(GG, bG) {
            return new Tb(GG, bG, "password")
          }
          static _fromEmailAndCode(GG, bG) {
            return new Tb(GG, bG, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(GG) {
            const bG = "string" === typeof GG ? JSON.parse(GG) : GG;
            if ((null === bG || void 0 === bG ? void 0 : bG.email) && (null === bG || void 0 === bG ? void 0 : bG.password)) {
              if ("password" === bG.signInMethod) return this._fromEmailAndPassword(bG.email, bG.password);
              if ("emailLink" === bG.signInMethod) return this._fromEmailAndCode(bG.email, bG.password, bG.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(GG) {
            var bG;
            switch (this.signInMethod) {
              case "password":
                const ZG = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (bG = GG._getRecaptchaConfig()) || void 0 === bG ? void 0 : bG.emailPasswordEnabled) {
                  const bG = await Ib(GG, ZG, "signInWithPassword");
                  return nb(GG, bG)
                }
                return nb(GG, ZG).catch((async bG => {
                  if ("auth/missing-recaptcha-token" === bG.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const bG = await Ib(GG, ZG, "signInWithPassword");
                    return nb(GG, bG)
                  }
                  return Promise.reject(bG)
                }));
              case "emailLink":
                return async function(GG, bG) {
                  return qG(GG, "POST", "/v1/accounts:signInWithEmailLink", MG(GG, bG))
                }(GG, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                EG(GG, "internal-error")
            }
          }
          async _linkToIdToken(GG, bG) {
            switch (this.signInMethod) {
              case "password":
                return qb(GG, {
                  idToken: bG,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(GG, bG) {
                  return qG(GG, "POST", "/v1/accounts:signInWithEmailLink", MG(GG, bG))
                }(GG, {
                  idToken: bG,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                EG(GG, "internal-error")
            }
          }
          _getReauthenticationResolver(GG) {
            return this._getIdTokenResponse(GG)
          }
        }
        async function Hb(GG, bG) {
          return qG(GG, "POST", "/v1/accounts:signInWithIdp", MG(GG, bG))
        }
        class tb extends Ab {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(GG) {
            const bG = new tb(GG.providerId, GG.signInMethod);
            return GG.idToken || GG.accessToken ? (GG.idToken && (bG.idToken = GG.idToken), GG.accessToken && (bG.accessToken = GG.accessToken), GG.nonce && !GG.pendingToken && (bG.nonce = GG.nonce), GG.pendingToken && (bG.pendingToken = GG.pendingToken)) : GG.oauthToken && GG.oauthTokenSecret ? (bG.accessToken = GG.oauthToken, bG.secret = GG.oauthTokenSecret) : EG("argument-error"), bG
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
          static fromJSON(GG) {
            const bG = "string" === typeof GG ? JSON.parse(GG) : GG,
              {
                providerId: ZG,
                signInMethod: wG
              } = bG,
              SG = LG(bG, ["providerId", "signInMethod"]);
            if (!ZG || !wG) return null;
            const yG = new tb(ZG, wG);
            return yG.idToken = SG.idToken || void 0, yG.accessToken = SG.accessToken || void 0, yG.secret = SG.secret, yG.nonce = SG.nonce, yG.pendingToken = SG.pendingToken || null, yG
          }
          _getIdTokenResponse(GG) {
            return Hb(GG, this.buildRequest())
          }
          _linkToIdToken(GG, bG) {
            const ZG = this.buildRequest();
            return ZG.idToken = bG, Hb(GG, ZG)
          }
          _getReauthenticationResolver(GG) {
            const bG = this.buildRequest();
            return bG.autoCreate = !1, Hb(GG, bG)
          }
          buildRequest() {
            const GG = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) GG.pendingToken = this.pendingToken;
            else {
              const bG = {};
              this.idToken && (bG.id_token = this.idToken), this.accessToken && (bG.access_token = this.accessToken), this.secret && (bG.oauth_token_secret = this.secret), bG.providerId = this.providerId, this.nonce && !this.pendingToken && (bG.nonce = this.nonce), GG.postBody = (0, wG.cb)(bG)
            }
            return GG
          }
        }
        const Db = {
          USER_NOT_FOUND: "user-not-found"
        };
        class Nb extends Ab {
          constructor(GG) {
            super("phone", "phone"), this.params = GG
          }
          static _fromVerification(GG, bG) {
            return new Nb({
              verificationId: GG,
              verificationCode: bG
            })
          }
          static _fromTokenResponse(GG, bG) {
            return new Nb({
              phoneNumber: GG,
              temporaryProof: bG
            })
          }
          _getIdTokenResponse(GG) {
            return async function(GG, bG) {
              return qG(GG, "POST", "/v1/accounts:signInWithPhoneNumber", MG(GG, bG))
            }(GG, this._makeVerificationRequest())
          }
          _linkToIdToken(GG, bG) {
            return async function(GG, bG) {
              const ZG = await qG(GG, "POST", "/v1/accounts:signInWithPhoneNumber", MG(GG, bG));
              if (ZG.temporaryProof) throw eG(GG, "account-exists-with-different-credential", ZG);
              return ZG
            }(GG, Object.assign({
              idToken: bG
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(GG) {
            return async function(GG, bG) {
              return qG(GG, "POST", "/v1/accounts:signInWithPhoneNumber", MG(GG, Object.assign(Object.assign({}, bG), {
                operation: "REAUTH"
              })), Db)
            }(GG, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: GG,
              phoneNumber: bG,
              verificationId: ZG,
              verificationCode: wG
            } = this.params;
            return GG && bG ? {
              temporaryProof: GG,
              phoneNumber: bG
            } : {
              sessionInfo: ZG,
              code: wG
            }
          }
          toJSON() {
            const GG = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (GG.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (GG.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (GG.verificationCode = this.params.verificationCode), this.params.verificationId && (GG.verificationId = this.params.verificationId), GG
          }
          static fromJSON(GG) {
            "string" === typeof GG && (GG = JSON.parse(GG));
            const {
              verificationId: bG,
              verificationCode: ZG,
              phoneNumber: wG,
              temporaryProof: SG
            } = GG;
            return ZG || bG || wG || SG ? new Nb({
              verificationId: bG,
              verificationCode: ZG,
              phoneNumber: wG,
              temporaryProof: SG
            }) : null
          }
        }
        class Ob {
          constructor(GG) {
            var bG, ZG, SG, LG, yG, kG;
            const UG = (0, wG._)((0, wG.w)(GG)),
              YG = null !== (bG = UG.apiKey) && void 0 !== bG ? bG : null,
              VG = null !== (ZG = UG.oobCode) && void 0 !== ZG ? ZG : null,
              pG = function(GG) {
                switch (GG) {
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
              }(null !== (SG = UG.mode) && void 0 !== SG ? SG : null);
            CG(YG && VG && pG, "argument-error"), this.apiKey = YG, this.operation = pG, this.code = VG, this.continueUrl = null !== (LG = UG.continueUrl) && void 0 !== LG ? LG : null, this.languageCode = null !== (yG = UG.languageCode) && void 0 !== yG ? yG : null, this.tenantId = null !== (kG = UG.tenantId) && void 0 !== kG ? kG : null
          }
          static parseLink(GG) {
            const bG = function(GG) {
              const bG = (0, wG._)((0, wG.w)(GG)).link,
                ZG = bG ? (0, wG._)((0, wG.w)(bG)).deep_link_id : null,
                SG = (0, wG._)((0, wG.w)(GG)).deep_link_id;
              return (SG ? (0, wG._)((0, wG.w)(SG)).link : null) || SG || ZG || bG || GG
            }(GG);
            try {
              return new Ob(bG)
            } catch (ZG) {
              return null
            }
          }
        }

        function xb(GG) {
          return Ob.parseLink(GG)
        }
        class Bb {
          constructor() {
            this.providerId = Bb.PROVIDER_ID
          }
          static credential(GG, bG) {
            return Tb._fromEmailAndPassword(GG, bG)
          }
          static credentialWithLink(GG, bG) {
            const ZG = Ob.parseLink(bG);
            return CG(ZG, "argument-error"), Tb._fromEmailAndCode(GG, ZG.code, ZG.tenantId)
          }
        }
        Bb.PROVIDER_ID = "password", Bb.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", Bb.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class GZ {
          constructor(GG) {
            this.providerId = GG, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(GG) {
            this.defaultLanguageCode = GG
          }
          setCustomParameters(GG) {
            return this.customParameters = GG, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class bZ extends GZ {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(GG) {
            return this.scopes.includes(GG) || this.scopes.push(GG), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class ZZ extends bZ {
          static credentialFromJSON(GG) {
            const bG = "string" === typeof GG ? JSON.parse(GG) : GG;
            return CG("providerId" in bG && "signInMethod" in bG, "argument-error"), tb._fromParams(bG)
          }
          credential(GG) {
            return this._credential(Object.assign(Object.assign({}, GG), {
              nonce: GG.rawNonce
            }))
          }
          _credential(GG) {
            return CG(GG.idToken || GG.accessToken, "argument-error"), tb._fromParams(Object.assign(Object.assign({}, GG), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(GG) {
            return ZZ.oauthCredentialFromTaggedObject(GG)
          }
          static credentialFromError(GG) {
            return ZZ.oauthCredentialFromTaggedObject(GG.customData || {})
          }
          static oauthCredentialFromTaggedObject(GG) {
            let {
              _tokenResponse: bG
            } = GG;
            if (!bG) return null;
            const {
              oauthIdToken: ZG,
              oauthAccessToken: wG,
              oauthTokenSecret: SG,
              pendingToken: LG,
              nonce: yG,
              providerId: kG
            } = bG;
            if (!wG && !SG && !ZG && !LG) return null;
            if (!kG) return null;
            try {
              return new ZZ(kG)._credential({
                idToken: ZG,
                accessToken: wG,
                nonce: yG,
                pendingToken: LG
              })
            } catch (UG) {
              return null
            }
          }
        }
        class wZ extends bZ {
          constructor() {
            super("facebook.com")
          }
          static credential(GG) {
            return tb._fromParams({
              providerId: wZ.PROVIDER_ID,
              signInMethod: wZ.FACEBOOK_SIGN_IN_METHOD,
              accessToken: GG
            })
          }
          static credentialFromResult(GG) {
            return wZ.credentialFromTaggedObject(GG)
          }
          static credentialFromError(GG) {
            return wZ.credentialFromTaggedObject(GG.customData || {})
          }
          static credentialFromTaggedObject(GG) {
            let {
              _tokenResponse: bG
            } = GG;
            if (!bG || !("oauthAccessToken" in bG)) return null;
            if (!bG.oauthAccessToken) return null;
            try {
              return wZ.credential(bG.oauthAccessToken)
            } catch (ZG) {
              return null
            }
          }
        }
        wZ.FACEBOOK_SIGN_IN_METHOD = "facebook.com", wZ.PROVIDER_ID = "facebook.com";
        class SZ extends bZ {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(GG, bG) {
            return tb._fromParams({
              providerId: SZ.PROVIDER_ID,
              signInMethod: SZ.GOOGLE_SIGN_IN_METHOD,
              idToken: GG,
              accessToken: bG
            })
          }
          static credentialFromResult(GG) {
            return SZ.credentialFromTaggedObject(GG)
          }
          static credentialFromError(GG) {
            return SZ.credentialFromTaggedObject(GG.customData || {})
          }
          static credentialFromTaggedObject(GG) {
            let {
              _tokenResponse: bG
            } = GG;
            if (!bG) return null;
            const {
              oauthIdToken: ZG,
              oauthAccessToken: wG
            } = bG;
            if (!ZG && !wG) return null;
            try {
              return SZ.credential(ZG, wG)
            } catch (SG) {
              return null
            }
          }
        }
        SZ.GOOGLE_SIGN_IN_METHOD = "google.com", SZ.PROVIDER_ID = "google.com";
        class LZ extends bZ {
          constructor() {
            super("github.com")
          }
          static credential(GG) {
            return tb._fromParams({
              providerId: LZ.PROVIDER_ID,
              signInMethod: LZ.GITHUB_SIGN_IN_METHOD,
              accessToken: GG
            })
          }
          static credentialFromResult(GG) {
            return LZ.credentialFromTaggedObject(GG)
          }
          static credentialFromError(GG) {
            return LZ.credentialFromTaggedObject(GG.customData || {})
          }
          static credentialFromTaggedObject(GG) {
            let {
              _tokenResponse: bG
            } = GG;
            if (!bG || !("oauthAccessToken" in bG)) return null;
            if (!bG.oauthAccessToken) return null;
            try {
              return LZ.credential(bG.oauthAccessToken)
            } catch (ZG) {
              return null
            }
          }
        }
        LZ.GITHUB_SIGN_IN_METHOD = "github.com", LZ.PROVIDER_ID = "github.com";
        class yZ extends Ab {
          constructor(GG, bG) {
            super(GG, GG), this.pendingToken = bG
          }
          _getIdTokenResponse(GG) {
            return Hb(GG, this.buildRequest())
          }
          _linkToIdToken(GG, bG) {
            const ZG = this.buildRequest();
            return ZG.idToken = bG, Hb(GG, ZG)
          }
          _getReauthenticationResolver(GG) {
            const bG = this.buildRequest();
            return bG.autoCreate = !1, Hb(GG, bG)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(GG) {
            const bG = "string" === typeof GG ? JSON.parse(GG) : GG,
              {
                providerId: ZG,
                signInMethod: wG,
                pendingToken: SG
              } = bG;
            return ZG && wG && SG && ZG === wG ? new yZ(ZG, SG) : null
          }
          static _create(GG, bG) {
            return new yZ(GG, bG)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class kZ extends GZ {
          constructor(GG) {
            CG(GG.startsWith("saml."), "argument-error"), super(GG)
          }
          static credentialFromResult(GG) {
            return kZ.samlCredentialFromTaggedObject(GG)
          }
          static credentialFromError(GG) {
            return kZ.samlCredentialFromTaggedObject(GG.customData || {})
          }
          static credentialFromJSON(GG) {
            const bG = yZ.fromJSON(GG);
            return CG(bG, "argument-error"), bG
          }
          static samlCredentialFromTaggedObject(GG) {
            let {
              _tokenResponse: bG
            } = GG;
            if (!bG) return null;
            const {
              pendingToken: ZG,
              providerId: wG
            } = bG;
            if (!ZG || !wG) return null;
            try {
              return yZ._create(wG, ZG)
            } catch (SG) {
              return null
            }
          }
        }
        class UZ extends bZ {
          constructor() {
            super("twitter.com")
          }
          static credential(GG, bG) {
            return tb._fromParams({
              providerId: UZ.PROVIDER_ID,
              signInMethod: UZ.TWITTER_SIGN_IN_METHOD,
              oauthToken: GG,
              oauthTokenSecret: bG
            })
          }
          static credentialFromResult(GG) {
            return UZ.credentialFromTaggedObject(GG)
          }
          static credentialFromError(GG) {
            return UZ.credentialFromTaggedObject(GG.customData || {})
          }
          static credentialFromTaggedObject(GG) {
            let {
              _tokenResponse: bG
            } = GG;
            if (!bG) return null;
            const {
              oauthAccessToken: ZG,
              oauthTokenSecret: wG
            } = bG;
            if (!ZG || !wG) return null;
            try {
              return UZ.credential(ZG, wG)
            } catch (SG) {
              return null
            }
          }
        }
        async function YZ(GG, bG) {
          return qG(GG, "POST", "/v1/accounts:signUp", MG(GG, bG))
        }
        UZ.TWITTER_SIGN_IN_METHOD = "twitter.com", UZ.PROVIDER_ID = "twitter.com";
        class VZ {
          constructor(GG) {
            this.user = GG.user, this.providerId = GG.providerId, this._tokenResponse = GG._tokenResponse, this.operationType = GG.operationType
          }
          static async _fromIdTokenResponse(GG, bG, ZG) {
            let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const SG = await wb._fromIdTokenResponse(GG, ZG, wG),
              LG = pZ(ZG);
            return new VZ({
              user: SG,
              providerId: LG,
              _tokenResponse: ZG,
              operationType: bG
            })
          }
          static async _forOperation(GG, bG, ZG) {
            await GG._updateTokensIfNecessary(ZG, !0);
            const wG = pZ(ZG);
            return new VZ({
              user: GG,
              providerId: wG,
              _tokenResponse: ZG,
              operationType: bG
            })
          }
        }

        function pZ(GG) {
          return GG.providerId ? GG.providerId : "phoneNumber" in GG ? "phone" : null
        }
        async function fZ(GG) {
          var bG;
          const ZG = ab(GG);
          if (await ZG._initializationPromise, null === (bG = ZG.currentUser) || void 0 === bG ? void 0 : bG.isAnonymous) return new VZ({
            user: ZG.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const wG = await YZ(ZG, {
              returnSecureToken: !0
            }),
            SG = await VZ._fromIdTokenResponse(ZG, "signIn", wG, !0);
          return await ZG._updateCurrentUser(SG.user), SG
        }
        class QZ extends wG.m {
          constructor(GG, bG, ZG, wG) {
            var SG;
            super(bG.code, bG.message), this.operationType = ZG, this.user = wG, Object.setPrototypeOf(this, QZ.prototype), this.customData = {
              appName: GG.name,
              tenantId: null !== (SG = GG.tenantId) && void 0 !== SG ? SG : void 0,
              _serverResponse: bG.customData._serverResponse,
              operationType: ZG
            }
          }
          static _fromErrorAndOperation(GG, bG, ZG, wG) {
            return new QZ(GG, bG, ZG, wG)
          }
        }

        function KZ(GG, bG, ZG, wG) {
          return ("reauthenticate" === bG ? ZG._getReauthenticationResolver(GG) : ZG._getIdTokenResponse(GG)).catch((ZG => {
            if ("auth/multi-factor-auth-required" === ZG.code) throw QZ._fromErrorAndOperation(GG, ZG, bG, wG);
            throw ZG
          }))
        }

        function hZ(GG) {
          return new Set(GG.map((GG => {
            let {
              providerId: bG
            } = GG;
            return bG
          })).filter((GG => !!GG)))
        }
        async function dZ(GG, bG) {
          const ZG = (0, wG.H)(GG);
          await rZ(!0, ZG, bG);
          const {
            providerUserInfo: SG
          } = await async function(GG, bG) {
            return AG(GG, "POST", "/v1/accounts:update", bG)
          }(ZG.auth, {
            idToken: await ZG.getIdToken(),
            deleteProvider: [bG]
          }), LG = hZ(SG || []);
          return ZG.providerData = ZG.providerData.filter((GG => LG.has(GG.providerId))), LG.has("phone") || (ZG.phoneNumber = null), await ZG.auth._persistUserIfCurrent(ZG), ZG
        }
        async function JZ(GG, bG) {
          let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const wG = await NG(GG, bG._linkToIdToken(GG.auth, await GG.getIdToken()), ZG);
          return VZ._forOperation(GG, "link", wG)
        }
        async function rZ(GG, bG, ZG) {
          await BG(bG);
          const wG = !1 === GG ? "provider-already-linked" : "no-such-provider";
          CG(hZ(bG.providerData).has(ZG) === GG, bG.auth, wG)
        }
        async function zZ(GG, bG) {
          let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: wG
          } = GG, SG = "reauthenticate";
          try {
            const LG = await NG(GG, KZ(wG, SG, bG, GG), ZG);
            CG(LG.idToken, wG, "internal-error");
            const yG = DG(LG.idToken);
            CG(yG, wG, "internal-error");
            const {
              sub: kG
            } = yG;
            return CG(GG.uid === kG, wG, "user-mismatch"), VZ._forOperation(GG, SG, LG)
          } catch (LG) {
            throw "auth/user-not-found" === (null === LG || void 0 === LG ? void 0 : LG.code) && EG(wG, "user-mismatch"), LG
          }
        }
        async function EZ(GG, bG) {
          let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const wG = "signIn",
            SG = await KZ(GG, wG, bG),
            LG = await VZ._fromIdTokenResponse(GG, wG, SG);
          return ZG || await GG._updateCurrentUser(LG.user), LG
        }
        async function oZ(GG, bG) {
          return EZ(ab(GG), bG)
        }
        async function XZ(GG, bG) {
          const ZG = (0, wG.H)(GG);
          return await rZ(!1, ZG, bG.providerId), JZ(ZG, bG)
        }
        async function uZ(GG, bG) {
          return zZ((0, wG.H)(GG), bG)
        }
        async function iZ(GG, bG) {
          const ZG = ab(GG),
            wG = await async function(GG, bG) {
              return qG(GG, "POST", "/v1/accounts:signInWithCustomToken", MG(GG, bG))
            }(ZG, {
              token: bG,
              returnSecureToken: !0
            }), SG = await VZ._fromIdTokenResponse(ZG, "signIn", wG);
          return await ZG._updateCurrentUser(SG.user), SG
        }
        class CZ {
          constructor(GG, bG) {
            this.factorId = GG, this.uid = bG.mfaEnrollmentId, this.enrollmentTime = new Date(bG.enrolledAt).toUTCString(), this.displayName = bG.displayName
          }
          static _fromServerResponse(GG, bG) {
            return "phoneInfo" in bG ? WZ._fromServerResponse(GG, bG) : "totpInfo" in bG ? mZ._fromServerResponse(GG, bG) : EG(GG, "internal-error")
          }
        }
        class WZ extends CZ {
          constructor(GG) {
            super("phone", GG), this.phoneNumber = GG.phoneInfo
          }
          static _fromServerResponse(GG, bG) {
            return new WZ(bG)
          }
        }
        class mZ extends CZ {
          constructor(GG) {
            super("totp", GG)
          }
          static _fromServerResponse(GG, bG) {
            return new mZ(bG)
          }
        }

        function IZ(GG, bG, ZG) {
          var wG;
          CG((null === (wG = ZG.url) || void 0 === wG ? void 0 : wG.length) > 0, GG, "invalid-continue-uri"), CG("undefined" === typeof ZG.dynamicLinkDomain || ZG.dynamicLinkDomain.length > 0, GG, "invalid-dynamic-link-domain"), bG.continueUrl = ZG.url, bG.dynamicLinkDomain = ZG.dynamicLinkDomain, bG.canHandleCodeInApp = ZG.handleCodeInApp, ZG.iOS && (CG(ZG.iOS.bundleId.length > 0, GG, "missing-ios-bundle-id"), bG.iOSBundleId = ZG.iOS.bundleId), ZG.android && (CG(ZG.android.packageName.length > 0, GG, "missing-android-pkg-name"), bG.androidInstallApp = ZG.android.installApp, bG.androidMinimumVersionCode = ZG.android.minimumVersion, bG.androidPackageName = ZG.android.packageName)
        }
        async function FZ(GG, bG, ZG) {
          var wG;
          const SG = ab(GG),
            LG = {
              requestType: "PASSWORD_RESET",
              email: bG,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (wG = SG._getRecaptchaConfig()) || void 0 === wG ? void 0 : wG.emailPasswordEnabled) {
            const GG = await Ib(SG, LG, "getOobCode", !0);
            ZG && IZ(SG, GG, ZG), await eb(SG, GG)
          } else ZG && IZ(SG, LG, ZG), await eb(SG, LG).catch((async GG => {
            if ("auth/missing-recaptcha-token" !== GG.code) return Promise.reject(GG);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const GG = await Ib(SG, LG, "getOobCode", !0);
              ZG && IZ(SG, GG, ZG), await eb(SG, GG)
            }
          }))
        }
        async function vZ(GG, bG, ZG) {
          await sb((0, wG.H)(GG), {
            oobCode: bG,
            newPassword: ZG
          })
        }
        async function aZ(GG, bG) {
          await async function(GG, bG) {
            return AG(GG, "POST", "/v1/accounts:update", MG(GG, bG))
          }((0, wG.H)(GG), {
            oobCode: bG
          })
        }
        async function cZ(GG, bG) {
          const ZG = (0, wG.H)(GG),
            SG = await sb(ZG, {
              oobCode: bG
            }),
            LG = SG.requestType;
          switch (CG(LG, ZG, "internal-error"), LG) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              CG(SG.newEmail, ZG, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              CG(SG.mfaInfo, ZG, "internal-error");
            default:
              CG(SG.email, ZG, "internal-error")
          }
          let yG = null;
          return SG.mfaInfo && (yG = CZ._fromServerResponse(ab(ZG), SG.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === SG.requestType ? SG.newEmail : SG.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === SG.requestType ? SG.email : SG.newEmail) || null,
              multiFactorInfo: yG
            },
            operation: LG
          }
        }
        async function lZ(GG, bG) {
          const {
            data: ZG
          } = await cZ((0, wG.H)(GG), bG);
          return ZG.email
        }
        async function jZ(GG, bG, ZG) {
          var wG;
          const SG = ab(GG),
            LG = {
              returnSecureToken: !0,
              email: bG,
              password: ZG,
              clientType: "CLIENT_TYPE_WEB"
            };
          let yG;
          if (null === (wG = SG._getRecaptchaConfig()) || void 0 === wG ? void 0 : wG.emailPasswordEnabled) {
            const GG = await Ib(SG, LG, "signUpPassword");
            yG = YZ(SG, GG)
          } else yG = YZ(SG, LG).catch((async GG => {
            if ("auth/missing-recaptcha-token" === GG.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const GG = await Ib(SG, LG, "signUpPassword");
              return YZ(SG, GG)
            }
            return Promise.reject(GG)
          }));
          const kG = await yG.catch((GG => Promise.reject(GG))),
            UG = await VZ._fromIdTokenResponse(SG, "signIn", kG);
          return await SG._updateCurrentUser(UG.user), UG
        }

        function PZ(GG, bG, ZG) {
          return oZ((0, wG.H)(GG), Bb.credential(bG, ZG))
        }
        async function MZ(GG, bG, ZG) {
          var wG;
          const SG = ab(GG),
            LG = {
              requestType: "EMAIL_SIGNIN",
              email: bG,
              clientType: "CLIENT_TYPE_WEB"
            };

          function yG(GG, bG) {
            CG(bG.handleCodeInApp, SG, "argument-error"), bG && IZ(SG, GG, bG)
          }
          if (null === (wG = SG._getRecaptchaConfig()) || void 0 === wG ? void 0 : wG.emailPasswordEnabled) {
            const GG = await Ib(SG, LG, "getOobCode", !0);
            yG(GG, ZG), await Rb(SG, GG)
          } else yG(LG, ZG), await Rb(SG, LG).catch((async GG => {
            if ("auth/missing-recaptcha-token" !== GG.code) return Promise.reject(GG);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const GG = await Ib(SG, LG, "getOobCode", !0);
              yG(GG, ZG), await Rb(SG, GG)
            }
          }))
        }

        function AZ(GG, bG) {
          const ZG = Ob.parseLink(bG);
          return "EMAIL_SIGNIN" === (null === ZG || void 0 === ZG ? void 0 : ZG.operation)
        }
        async function sZ(GG, bG, ZG) {
          const SG = (0, wG.H)(GG),
            LG = Bb.credentialWithLink(bG, ZG || IG());
          return CG(LG._tenantId === (SG.tenantId || null), SG, "tenant-id-mismatch"), oZ(SG, LG)
        }
        async function qZ(GG, bG) {
          const ZG = {
              identifier: bG,
              continueUri: FG() ? IG() : "http://localhost"
            },
            {
              signinMethods: SG
            } = await async function(GG, bG) {
              return AG(GG, "POST", "/v1/accounts:createAuthUri", MG(GG, bG))
            }((0, wG.H)(GG), ZG);
          return SG || []
        }
        async function nZ(GG, bG) {
          const ZG = (0, wG.H)(GG),
            SG = {
              requestType: "VERIFY_EMAIL",
              idToken: await GG.getIdToken()
            };
          bG && IZ(ZG.auth, SG, bG);
          const {
            email: LG
          } = await async function(GG, bG) {
            return gb(GG, bG)
          }(ZG.auth, SG);
          LG !== GG.email && await GG.reload()
        }
        async function gZ(GG, bG, ZG) {
          const SG = (0, wG.H)(GG),
            LG = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await GG.getIdToken(),
              newEmail: bG
            };
          ZG && IZ(SG.auth, LG, ZG);
          const {
            email: yG
          } = await async function(GG, bG) {
            return gb(GG, bG)
          }(SG.auth, LG);
          yG !== GG.email && await GG.reload()
        }
        async function eZ(GG, bG) {
          let {
            displayName: ZG,
            photoURL: SG
          } = bG;
          if (void 0 === ZG && void 0 === SG) return;
          const LG = (0, wG.H)(GG),
            yG = {
              idToken: await LG.getIdToken(),
              displayName: ZG,
              photoUrl: SG,
              returnSecureToken: !0
            },
            kG = await NG(LG, async function(GG, bG) {
              return AG(GG, "POST", "/v1/accounts:update", bG)
            }(LG.auth, yG));
          LG.displayName = kG.displayName || null, LG.photoURL = kG.photoUrl || null;
          const UG = LG.providerData.find((GG => {
            let {
              providerId: bG
            } = GG;
            return "password" === bG
          }));
          UG && (UG.displayName = LG.displayName, UG.photoURL = LG.photoURL), await LG._updateTokensIfNecessary(kG)
        }

        function RZ(GG, bG) {
          return HZ((0, wG.H)(GG), bG, null)
        }

        function TZ(GG, bG) {
          return HZ((0, wG.H)(GG), null, bG)
        }
        async function HZ(GG, bG, ZG) {
          const {
            auth: wG
          } = GG, SG = {
            idToken: await GG.getIdToken(),
            returnSecureToken: !0
          };
          bG && (SG.email = bG), ZG && (SG.password = ZG);
          const LG = await NG(GG, qb(wG, SG));
          await GG._updateTokensIfNecessary(LG, !0)
        }
        class tZ {
          constructor(GG, bG) {
            let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = GG, this.providerId = bG, this.profile = ZG
          }
        }
        class DZ extends tZ {
          constructor(GG, bG, ZG, wG) {
            super(GG, bG, ZG), this.username = wG
          }
        }
        class NZ extends tZ {
          constructor(GG, bG) {
            super(GG, "facebook.com", bG)
          }
        }
        class OZ extends DZ {
          constructor(GG, bG) {
            super(GG, "github.com", bG, "string" === typeof(null === bG || void 0 === bG ? void 0 : bG.login) ? null === bG || void 0 === bG ? void 0 : bG.login : null)
          }
        }
        class xZ extends tZ {
          constructor(GG, bG) {
            super(GG, "google.com", bG)
          }
        }
        class BZ extends DZ {
          constructor(GG, bG, ZG) {
            super(GG, "twitter.com", bG, ZG)
          }
        }

        function Gw(GG) {
          const {
            user: bG,
            _tokenResponse: ZG
          } = GG;
          return bG.isAnonymous && !ZG ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(GG) {
            var bG, ZG;
            if (!GG) return null;
            const {
              providerId: wG
            } = GG, SG = GG.rawUserInfo ? JSON.parse(GG.rawUserInfo) : {}, LG = GG.isNewUser || "identitytoolkit#SignupNewUserResponse" === GG.kind;
            if (!wG && (null === GG || void 0 === GG ? void 0 : GG.idToken)) {
              const wG = null === (ZG = null === (bG = DG(GG.idToken)) || void 0 === bG ? void 0 : bG.firebase) || void 0 === ZG ? void 0 : ZG.sign_in_provider;
              if (wG) return new tZ(LG, "anonymous" !== wG && "custom" !== wG ? wG : null)
            }
            if (!wG) return null;
            switch (wG) {
              case "facebook.com":
                return new NZ(LG, SG);
              case "github.com":
                return new OZ(LG, SG);
              case "google.com":
                return new xZ(LG, SG);
              case "twitter.com":
                return new BZ(LG, SG, GG.screenName || null);
              case "custom":
              case "anonymous":
                return new tZ(LG, null);
              default:
                return new tZ(LG, wG, SG)
            }
          }(ZG)
        }

        function bw(GG, bG) {
          return (0, wG.H)(GG).setPersistence(bG)
        }

        function Zw(GG) {
          return ab(GG).initializeRecaptchaConfig()
        }

        function ww(GG, bG, ZG, SG) {
          return (0, wG.H)(GG).onIdTokenChanged(bG, ZG, SG)
        }

        function Sw(GG, bG, ZG) {
          return (0, wG.H)(GG).beforeAuthStateChanged(bG, ZG)
        }

        function Lw(GG, bG, ZG, SG) {
          return (0, wG.H)(GG).onAuthStateChanged(bG, ZG, SG)
        }

        function yw(GG) {
          (0, wG.H)(GG).useDeviceLanguage()
        }

        function kw(GG, bG) {
          return (0, wG.H)(GG).updateCurrentUser(bG)
        }

        function Uw(GG) {
          return (0, wG.H)(GG).signOut()
        }
        async function Yw(GG) {
          return (0, wG.H)(GG).delete()
        }
        class Vw {
          constructor(GG, bG, ZG) {
            this.type = GG, this.credential = bG, this.auth = ZG
          }
          static _fromIdtoken(GG, bG) {
            return new Vw("enroll", GG, bG)
          }
          static _fromMfaPendingCredential(GG) {
            return new Vw("signin", GG)
          }
          toJSON() {
            const GG = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [GG]: this.credential
              }
            }
          }
          static fromJSON(GG) {
            var bG, ZG;
            if (null === GG || void 0 === GG ? void 0 : GG.multiFactorSession) {
              if (null === (bG = GG.multiFactorSession) || void 0 === bG ? void 0 : bG.pendingCredential) return Vw._fromMfaPendingCredential(GG.multiFactorSession.pendingCredential);
              if (null === (ZG = GG.multiFactorSession) || void 0 === ZG ? void 0 : ZG.idToken) return Vw._fromIdtoken(GG.multiFactorSession.idToken)
            }
            return null
          }
        }
        class pw {
          constructor(GG, bG, ZG) {
            this.session = GG, this.hints = bG, this.signInResolver = ZG
          }
          static _fromError(GG, bG) {
            const ZG = ab(GG),
              wG = bG.customData._serverResponse,
              SG = (wG.mfaInfo || []).map((GG => CZ._fromServerResponse(ZG, GG)));
            CG(wG.mfaPendingCredential, ZG, "internal-error");
            const LG = Vw._fromMfaPendingCredential(wG.mfaPendingCredential);
            return new pw(LG, SG, (async GG => {
              const SG = await GG._process(ZG, LG);
              delete wG.mfaInfo, delete wG.mfaPendingCredential;
              const yG = Object.assign(Object.assign({}, wG), {
                idToken: SG.idToken,
                refreshToken: SG.refreshToken
              });
              switch (bG.operationType) {
                case "signIn":
                  const GG = await VZ._fromIdTokenResponse(ZG, bG.operationType, yG);
                  return await ZG._updateCurrentUser(GG.user), GG;
                case "reauthenticate":
                  return CG(bG.user, ZG, "internal-error"), VZ._forOperation(bG.user, bG.operationType, yG);
                default:
                  EG(ZG, "internal-error")
              }
            }))
          }
          async resolveSignIn(GG) {
            const bG = GG;
            return this.signInResolver(bG)
          }
        }

        function fw(GG, bG) {
          var ZG;
          const SG = (0, wG.H)(GG),
            LG = bG;
          return CG(bG.customData.operationType, SG, "argument-error"), CG(null === (ZG = LG.customData._serverResponse) || void 0 === ZG ? void 0 : ZG.mfaPendingCredential, SG, "argument-error"), pw._fromError(SG, LG)
        }
        class Qw {
          constructor(GG) {
            this.user = GG, this.enrolledFactors = [], GG._onReload((bG => {
              bG.mfaInfo && (this.enrolledFactors = bG.mfaInfo.map((bG => CZ._fromServerResponse(GG.auth, bG))))
            }))
          }
          static _fromUser(GG) {
            return new Qw(GG)
          }
          async getSession() {
            return Vw._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(GG, bG) {
            const ZG = GG,
              wG = await this.getSession(),
              SG = await NG(this.user, ZG._process(this.user.auth, wG, bG));
            return await this.user._updateTokensIfNecessary(SG), this.user.reload()
          }
          async unenroll(GG) {
            const bG = "string" === typeof GG ? GG : GG.uid,
              ZG = await this.user.getIdToken();
            try {
              const GG = await NG(this.user, (wG = this.user.auth, SG = {
                idToken: ZG,
                mfaEnrollmentId: bG
              }, AG(wG, "POST", "/v2/accounts/mfaEnrollment:withdraw", MG(wG, SG))));
              this.enrolledFactors = this.enrolledFactors.filter((GG => {
                let {
                  uid: ZG
                } = GG;
                return ZG !== bG
              })), await this.user._updateTokensIfNecessary(GG), await this.user.reload()
            } catch (LG) {
              throw LG
            }
            var wG, SG
          }
        }
        const Kw = new WeakMap;

        function hw(GG) {
          const bG = (0, wG.H)(GG);
          return Kw.has(bG) || Kw.set(bG, Qw._fromUser(bG)), Kw.get(bG)
        }
        const dw = "__sak";
        class Jw {
          constructor(GG, bG) {
            this.storageRetriever = GG, this.type = bG
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(dw, "1"), this.storage.removeItem(dw), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (GG) {
              return Promise.resolve(!1)
            }
          }
          _set(GG, bG) {
            return this.storage.setItem(GG, JSON.stringify(bG)), Promise.resolve()
          }
          _get(GG) {
            const bG = this.storage.getItem(GG);
            return Promise.resolve(bG ? JSON.parse(bG) : null)
          }
          _remove(GG) {
            return this.storage.removeItem(GG), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class rw extends Jw {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (GG, bG) => this.onStorageEvent(GG, bG), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const GG = (0, wG.K)();
              return fb(GG) || rb(GG)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (GG) {
                return !1
              }
            }(), this.fallbackToPolling = zb(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(GG) {
            for (const bG of Object.keys(this.listeners)) {
              const ZG = this.storage.getItem(bG),
                wG = this.localCache[bG];
              ZG !== wG && GG(bG, wG, ZG)
            }
          }
          onStorageEvent(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!GG.key) return void this.forAllChangedKeys(((GG, bG, ZG) => {
              this.notifyListeners(GG, ZG)
            }));
            const ZG = GG.key;
            if (bG ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const wG = this.storage.getItem(ZG);
              if (GG.newValue !== wG) null !== GG.newValue ? this.storage.setItem(ZG, GG.newValue) : this.storage.removeItem(ZG);
              else if (this.localCache[ZG] === GG.newValue && !bG) return
            }
            const SG = () => {
                const GG = this.storage.getItem(ZG);
                (bG || this.localCache[ZG] !== GG) && this.notifyListeners(ZG, GG)
              },
              LG = this.storage.getItem(ZG);
            (0, wG.T)() && 10 === document.documentMode && LG !== GG.newValue && GG.newValue !== GG.oldValue ? setTimeout(SG, 10) : SG()
          }
          notifyListeners(GG, bG) {
            this.localCache[GG] = bG;
            const ZG = this.listeners[GG];
            if (ZG)
              for (const wG of Array.from(ZG)) wG(bG ? JSON.parse(bG) : bG)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((GG, bG, ZG) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: GG,
                  oldValue: bG,
                  newValue: ZG
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
          _addListener(GG, bG) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[GG] || (this.listeners[GG] = new Set, this.localCache[GG] = this.storage.getItem(GG)), this.listeners[GG].add(bG)
          }
          _removeListener(GG, bG) {
            this.listeners[GG] && (this.listeners[GG].delete(bG), 0 === this.listeners[GG].size && delete this.listeners[GG]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(GG, bG) {
            await super._set(GG, bG), this.localCache[GG] = JSON.stringify(bG)
          }
          async _get(GG) {
            const bG = await super._get(GG);
            return this.localCache[GG] = JSON.stringify(bG), bG
          }
          async _remove(GG) {
            await super._remove(GG), delete this.localCache[GG]
          }
        }
        rw.type = "LOCAL";
        const zw = rw;
        class Ew extends Jw {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(GG, bG) {}
          _removeListener(GG, bG) {}
        }
        Ew.type = "SESSION";
        const ow = Ew;
        class Xw {
          constructor(GG) {
            this.eventTarget = GG, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(GG) {
            const bG = this.receivers.find((bG => bG.isListeningto(GG)));
            if (bG) return bG;
            const ZG = new Xw(GG);
            return this.receivers.push(ZG), ZG
          }
          isListeningto(GG) {
            return this.eventTarget === GG
          }
          async handleEvent(GG) {
            const bG = GG,
              {
                eventId: ZG,
                eventType: wG,
                data: SG
              } = bG.data,
              LG = this.handlersMap[wG];
            if (!(null === LG || void 0 === LG ? void 0 : LG.size)) return;
            bG.ports[0].postMessage({
              status: "ack",
              eventId: ZG,
              eventType: wG
            });
            const yG = Array.from(LG).map((async GG => GG(bG.origin, SG))),
              kG = await
            function(GG) {
              return Promise.all(GG.map((async GG => {
                try {
                  return {
                    fulfilled: !0,
                    value: await GG
                  }
                } catch (bG) {
                  return {
                    fulfilled: !1,
                    reason: bG
                  }
                }
              })))
            }(yG);
            bG.ports[0].postMessage({
              status: "done",
              eventId: ZG,
              eventType: wG,
              response: kG
            })
          }
          _subscribe(GG, bG) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[GG] || (this.handlersMap[GG] = new Set), this.handlersMap[GG].add(bG)
          }
          _unsubscribe(GG, bG) {
            this.handlersMap[GG] && bG && this.handlersMap[GG].delete(bG), bG && 0 !== this.handlersMap[GG].size || delete this.handlersMap[GG], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function uw() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            ZG = "";
          for (let wG = 0; wG < bG; wG++) ZG += Math.floor(10 * Math.random());
          return GG + ZG
        }
        Xw.receivers = [];
        class iw {
          constructor(GG) {
            this.target = GG, this.handlers = new Set
          }
          removeMessageHandler(GG) {
            GG.messageChannel && (GG.messageChannel.port1.removeEventListener("message", GG.OJ), GG.messageChannel.port1.close()), this.handlers.delete(GG)
          }
          async _send(GG, bG) {
            let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const wG = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!wG) throw new Error("connection_unavailable");
            let SG, LG;
            return new Promise(((yG, kG) => {
              const UG = uw("", 20);
              wG.port1.start();
              const YG = setTimeout((() => {
                kG(new Error("unsupported_event"))
              }), ZG);
              LG = {
                messageChannel: wG,
                OJ(GG) {
                  const bG = GG;
                  if (bG.data.eventId === UG) switch (bG.data.status) {
                    case "ack":
                      clearTimeout(YG), SG = setTimeout((() => {
                        kG(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(SG), yG(bG.data.response);
                      break;
                    default:
                      clearTimeout(YG), clearTimeout(SG), kG(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(LG), wG.port1.addEventListener("message", LG.OJ), this.target.postMessage({
                eventType: GG,
                eventId: UG,
                data: bG
              }, [wG.port2])
            })).finally((() => {
              LG && this.removeMessageHandler(LG)
            }))
          }
        }

        function Cw() {
          return window
        }

        function Ww() {
          return "undefined" !== typeof Cw().WorkerGlobalScope && "function" === typeof Cw().importScripts
        }
        const mw = "firebaseLocalStorageDb",
          Iw = "firebaseLocalStorage",
          Fw = "fbase_key";
        class vw {
          constructor(GG) {
            this.request = GG
          }
          toPromise() {
            return new Promise(((GG, bG) => {
              this.request.addEventListener("success", (() => {
                GG(this.request.result)
              })), this.request.addEventListener("error", (() => {
                bG(this.request.error)
              }))
            }))
          }
        }

        function aw(GG, bG) {
          return GG.transaction([Iw], bG ? "readwrite" : "readonly").objectStore(Iw)
        }

        function lw() {
          const GG = indexedDB.open(mw, 1);
          return new Promise(((bG, ZG) => {
            GG.addEventListener("error", (() => {
              ZG(GG.error)
            })), GG.addEventListener("upgradeneeded", (() => {
              const bG = GG.result;
              try {
                bG.createObjectStore(Iw, {
                  keyPath: Fw
                })
              } catch (wG) {
                ZG(wG)
              }
            })), GG.addEventListener("success", (async () => {
              const ZG = GG.result;
              ZG.objectStoreNames.contains(Iw) ? bG(ZG) : (ZG.close(), await
                function() {
                  const GG = indexedDB.deleteDatabase(mw);
                  return new vw(GG).toPromise()
                }(), bG(await lw()))
            }))
          }))
        }
        async function jw(GG, bG, ZG) {
          const wG = aw(GG, !0).put({
            [Fw]: bG,
            value: ZG
          });
          return new vw(wG).toPromise()
        }

        function Pw(GG, bG) {
          const ZG = aw(GG, !0).delete(bG);
          return new vw(ZG).toPromise()
        }
        class Mw {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await lw()), this.db
          }
          async _withRetries(GG) {
            let bG = 0;
            for (;;) try {
              const bG = await this._openDb();
              return await GG(bG)
            } catch (ZG) {
              if (bG++ > 3) throw ZG;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return Ww() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = Xw._getInstance(Ww() ? self : null), this.receiver._subscribe("keyChanged", (async (GG, bG) => ({
              keyProcessed: (await this._poll()).includes(bG.key)
            }))), this.receiver._subscribe("ping", (async (GG, bG) => ["keyChanged"]))
          }
          async initializeSender() {
            var GG, bG;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (GG) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new iw(this.activeServiceWorker);
            const ZG = await this.sender._send("ping", {}, 800);
            ZG && (null === (GG = ZG[0]) || void 0 === GG ? void 0 : GG.fulfilled) && (null === (bG = ZG[0]) || void 0 === bG ? void 0 : bG.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(GG) {
            if (this.sender && this.activeServiceWorker && function() {
                var GG;
                return (null === (GG = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === GG ? void 0 : GG.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: GG
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (bG) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const GG = await lw();
              return await jw(GG, dw, "1"), await Pw(GG, dw), !0
            } catch (GG) {}
            return !1
          }
          async _withPendingWrite(GG) {
            this.pendingWrites++;
            try {
              await GG()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(GG, bG) {
            return this._withPendingWrite((async () => (await this._withRetries((ZG => jw(ZG, GG, bG))), this.localCache[GG] = bG, this.notifyServiceWorker(GG))))
          }
          async _get(GG) {
            const bG = await this._withRetries((bG => async function(GG, bG) {
              const ZG = aw(GG, !1).get(bG),
                wG = await new vw(ZG).toPromise();
              return void 0 === wG ? null : wG.value
            }(bG, GG)));
            return this.localCache[GG] = bG, bG
          }
          async _remove(GG) {
            return this._withPendingWrite((async () => (await this._withRetries((bG => Pw(bG, GG))), delete this.localCache[GG], this.notifyServiceWorker(GG))))
          }
          async _poll() {
            const GG = await this._withRetries((GG => {
              const bG = aw(GG, !1).getAll();
              return new vw(bG).toPromise()
            }));
            if (!GG) return [];
            if (0 !== this.pendingWrites) return [];
            const bG = [],
              ZG = new Set;
            for (const {
                fbase_key: wG,
                value: SG
              }
              of GG) ZG.add(wG), JSON.stringify(this.localCache[wG]) !== JSON.stringify(SG) && (this.notifyListeners(wG, SG), bG.push(wG));
            for (const wG of Object.keys(this.localCache)) this.localCache[wG] && !ZG.has(wG) && (this.notifyListeners(wG, null), bG.push(wG));
            return bG
          }
          notifyListeners(GG, bG) {
            this.localCache[GG] = bG;
            const ZG = this.listeners[GG];
            if (ZG)
              for (const wG of Array.from(ZG)) wG(bG)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(GG, bG) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[GG] || (this.listeners[GG] = new Set, this._get(GG)), this.listeners[GG].add(bG)
          }
          _removeListener(GG, bG) {
            this.listeners[GG] && (this.listeners[GG].delete(bG), 0 === this.listeners[GG].size && delete this.listeners[GG]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        Mw.type = "LOCAL";
        const Aw = Mw;
        const sw = 1e12;
        class qw {
          constructor(GG) {
            this.auth = GG, this.counter = sw, this._widgets = new Map
          }
          render(GG, bG) {
            const ZG = this.counter;
            return this._widgets.set(ZG, new nw(GG, this.auth.name, bG || {})), this.counter++, ZG
          }
          reset(GG) {
            var bG;
            const ZG = GG || sw;
            null === (bG = this._widgets.get(ZG)) || void 0 === bG || bG.delete(), this._widgets.delete(ZG)
          }
          getResponse(GG) {
            var bG;
            const ZG = GG || sw;
            return (null === (bG = this._widgets.get(ZG)) || void 0 === bG ? void 0 : bG.getResponse()) || ""
          }
          async execute(GG) {
            var bG;
            const ZG = GG || sw;
            return null === (bG = this._widgets.get(ZG)) || void 0 === bG || bG.execute(), ""
          }
        }
        class nw {
          constructor(GG, bG, ZG) {
            this.params = ZG, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const wG = "string" === typeof GG ? document.getElementById(GG) : GG;
            CG(wG, "argument-error", {
              appName: bG
            }), this.container = wG, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(GG) {
                const bG = [],
                  ZG = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let wG = 0; wG < GG; wG++) bG.push(ZG.charAt(Math.floor(Math.random() * ZG.length)));
                return bG.join("")
              }(50);
              const {
                callback: GG,
                "expired-callback": bG
              } = this.params;
              if (GG) try {
                GG(this.responseToken)
              } catch (ZG) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, bG) try {
                  bG()
                } catch (ZG) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const gw = Wb("rcb"),
          ew = new aG(3e4, 6e4);
        class Rw {
          constructor() {
            var GG;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (GG = Cw().grecaptcha) || void 0 === GG ? void 0 : GG.render)
          }
          load(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return CG(function(GG) {
              return GG.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(GG)
            }(bG), GG, "argument-error"), this.shouldResolveImmediately(bG) && Xb(Cw().grecaptcha) ? Promise.resolve(Cw().grecaptcha) : new Promise(((ZG, SG) => {
              const LG = Cw().setTimeout((() => {
                SG(oG(GG, "network-request-failed"))
              }), ew.get());
              Cw()[gw] = () => {
                Cw().clearTimeout(LG), delete Cw()[gw];
                const wG = Cw().grecaptcha;
                if (!wG || !Xb(wG)) return void SG(oG(GG, "internal-error"));
                const yG = wG.render;
                wG.render = (GG, bG) => {
                  const ZG = yG(GG, bG);
                  return this.counter++, ZG
                }, this.hostLanguage = bG, ZG(wG)
              };
              Cb(`https://www.google.com/recaptcha/api.js??${(0,wG.cb)({onload:gw,render:"explicit",hl:bG})}`).catch((() => {
                clearTimeout(LG), SG(oG(GG, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(GG) {
            var bG;
            return !!(null === (bG = Cw().grecaptcha) || void 0 === bG ? void 0 : bG.render) && (GG === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class Tw {
          async load(GG) {
            return new qw(GG)
          }
          clearedOneInstance() {}
        }
        const Hw = "recaptcha",
          tw = {
            theme: "light",
            type: "image"
          };
        class Dw {
          constructor(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, tw),
              ZG = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = bG, this.type = Hw, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = ab(ZG), this.isInvisible = "invisible" === this.parameters.size, CG("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const wG = "string" === typeof GG ? document.getElementById(GG) : GG;
            CG(wG, this.auth, "argument-error"), this.container = wG, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new Tw : new Rw, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const GG = await this.render(),
              bG = this.getAssertedRecaptcha(),
              ZG = bG.getResponse(GG);
            return ZG || new Promise((ZG => {
              const wG = GG => {
                GG && (this.tokenChangeListeners.delete(wG), ZG(GG))
              };
              this.tokenChangeListeners.add(wG), this.isInvisible && bG.execute(GG)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (GG) {
              return Promise.reject(GG)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((GG => {
              throw this.renderPromise = null, GG
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((GG => {
              this.container.removeChild(GG)
            }))
          }
          validateStartingState() {
            CG(!this.parameters.sitekey, this.auth, "argument-error"), CG(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), CG("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(GG) {
            return bG => {
              if (this.tokenChangeListeners.forEach((GG => GG(bG))), "function" === typeof GG) GG(bG);
              else if ("string" === typeof GG) {
                const ZG = Cw()[GG];
                "function" === typeof ZG && ZG(bG)
              }
            }
          }
          assertNotDestroyed() {
            CG(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let GG = this.container;
              if (!this.isInvisible) {
                const bG = document.createElement("div");
                GG.appendChild(bG), GG = bG
              }
              this.widgetId = this.getAssertedRecaptcha().render(GG, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            CG(FG() && !Ww(), this.auth, "internal-error"), await
            function() {
              let GG = null;
              return new Promise((bG => {
                "complete" !== document.readyState ? (GG = () => bG(), window.addEventListener("load", GG)) : bG()
              })).catch((bG => {
                throw GG && window.removeEventListener("load", GG), bG
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const GG = await async function(GG) {
              return (await AG(GG, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            CG(GG, this.auth, "internal-error"), this.parameters.sitekey = GG
          }
          getAssertedRecaptcha() {
            return CG(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class Nw {
          constructor(GG, bG) {
            this.verificationId = GG, this.onConfirmation = bG
          }
          confirm(GG) {
            const bG = Nb._fromVerification(this.verificationId, GG);
            return this.onConfirmation(bG)
          }
        }
        async function Ow(GG, bG, ZG) {
          const SG = ab(GG),
            LG = await GS(SG, bG, (0, wG.H)(ZG));
          return new Nw(LG, (GG => oZ(SG, GG)))
        }
        async function xw(GG, bG, ZG) {
          const SG = (0, wG.H)(GG);
          await rZ(!1, SG, "phone");
          const LG = await GS(SG.auth, bG, (0, wG.H)(ZG));
          return new Nw(LG, (GG => XZ(SG, GG)))
        }
        async function Bw(GG, bG, ZG) {
          const SG = (0, wG.H)(GG),
            LG = await GS(SG.auth, bG, (0, wG.H)(ZG));
          return new Nw(LG, (GG => uZ(SG, GG)))
        }
        async function GS(GG, bG, ZG) {
          var wG;
          const SG = await ZG.verify();
          try {
            let LG;
            if (CG("string" === typeof SG, GG, "argument-error"), CG(ZG.type === Hw, GG, "argument-error"), LG = "string" === typeof bG ? {
                phoneNumber: bG
              } : bG, "session" in LG) {
              const bG = LG.session;
              if ("phoneNumber" in LG) {
                CG("enroll" === bG.type, GG, "internal-error");
                const ZG = await
                function(GG, bG) {
                  return AG(GG, "POST", "/v2/accounts/mfaEnrollment:start", MG(GG, bG))
                }(GG, {
                  idToken: bG.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: LG.phoneNumber,
                    recaptchaToken: SG
                  }
                });
                return ZG.phoneSessionInfo.sessionInfo
              } {
                CG("signin" === bG.type, GG, "internal-error");
                const ZG = (null === (wG = LG.multiFactorHint) || void 0 === wG ? void 0 : wG.uid) || LG.multiFactorUid;
                CG(ZG, GG, "missing-multi-factor-info");
                const yG = await
                function(GG, bG) {
                  return AG(GG, "POST", "/v2/accounts/mfaSignIn:start", MG(GG, bG))
                }(GG, {
                  mfaPendingCredential: bG.credential,
                  mfaEnrollmentId: ZG,
                  phoneSignInInfo: {
                    recaptchaToken: SG
                  }
                });
                return yG.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: bG
              } = await async function(GG, bG) {
                return AG(GG, "POST", "/v1/accounts:sendVerificationCode", MG(GG, bG))
              }(GG, {
                phoneNumber: LG.phoneNumber,
                recaptchaToken: SG
              });
              return bG
            }
          } finally {
            ZG._reset()
          }
        }
        async function bS(GG, bG) {
          await JZ((0, wG.H)(GG), bG)
        }
        class ZS {
          constructor(GG) {
            this.providerId = ZS.PROVIDER_ID, this.auth = ab(GG)
          }
          verifyPhoneNumber(GG, bG) {
            return GS(this.auth, GG, (0, wG.H)(bG))
          }
          static credential(GG, bG) {
            return Nb._fromVerification(GG, bG)
          }
          static credentialFromResult(GG) {
            const bG = GG;
            return ZS.credentialFromTaggedObject(bG)
          }
          static credentialFromError(GG) {
            return ZS.credentialFromTaggedObject(GG.customData || {})
          }
          static credentialFromTaggedObject(GG) {
            let {
              _tokenResponse: bG
            } = GG;
            if (!bG) return null;
            const {
              phoneNumber: ZG,
              temporaryProof: wG
            } = bG;
            return ZG && wG ? Nb._fromTokenResponse(ZG, wG) : null
          }
        }

        function wS(GG, bG) {
          return bG ? Lb(bG) : (CG(GG._popupRedirectResolver, GG, "argument-error"), GG._popupRedirectResolver)
        }
        ZS.PROVIDER_ID = "phone", ZS.PHONE_SIGN_IN_METHOD = "phone";
        class SS extends Ab {
          constructor(GG) {
            super("custom", "custom"), this.params = GG
          }
          _getIdTokenResponse(GG) {
            return Hb(GG, this._buildIdpRequest())
          }
          _linkToIdToken(GG, bG) {
            return Hb(GG, this._buildIdpRequest(bG))
          }
          _getReauthenticationResolver(GG) {
            return Hb(GG, this._buildIdpRequest())
          }
          _buildIdpRequest(GG) {
            const bG = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return GG && (bG.idToken = GG), bG
          }
        }

        function LS(GG) {
          return EZ(GG.auth, new SS(GG), GG.bypassAuthState)
        }

        function yS(GG) {
          const {
            auth: bG,
            user: ZG
          } = GG;
          return CG(ZG, bG, "internal-error"), zZ(ZG, new SS(GG), GG.bypassAuthState)
        }
        async function kS(GG) {
          const {
            auth: bG,
            user: ZG
          } = GG;
          return CG(ZG, bG, "internal-error"), JZ(ZG, new SS(GG), GG.bypassAuthState)
        }
        class US {
          constructor(GG, bG, ZG, wG) {
            let SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = GG, this.resolver = ZG, this.user = wG, this.bypassAuthState = SG, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(bG) ? bG : [bG]
          }
          execute() {
            return new Promise((async (GG, bG) => {
              this.pendingPromise = {
                resolve: GG,
                reject: bG
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (ZG) {
                this.reject(ZG)
              }
            }))
          }
          async onAuthEvent(GG) {
            const {
              urlResponse: bG,
              sessionId: ZG,
              postBody: wG,
              tenantId: SG,
              error: LG,
              type: yG
            } = GG;
            if (LG) return void this.reject(LG);
            const kG = {
              auth: this.auth,
              requestUri: bG,
              sessionId: ZG,
              tenantId: SG || void 0,
              postBody: wG || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(yG)(kG))
            } catch (UG) {
              this.reject(UG)
            }
          }
          onError(GG) {
            this.reject(GG)
          }
          getIdpTask(GG) {
            switch (GG) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return LS;
              case "linkViaPopup":
              case "linkViaRedirect":
                return kS;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return yS;
              default:
                EG(this.auth, "internal-error")
            }
          }
          resolve(GG) {
            mG(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(GG), this.unregisterAndCleanUp()
          }
          reject(GG) {
            mG(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(GG), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const YS = new aG(2e3, 1e4);
        async function VS(GG, bG, ZG) {
          const wG = ab(GG);
          uG(GG, bG, GZ);
          const SG = wS(wG, ZG);
          return new QS(wG, "signInViaPopup", bG, SG).executeNotNull()
        }
        async function pS(GG, bG, ZG) {
          const SG = (0, wG.H)(GG);
          uG(SG.auth, bG, GZ);
          const LG = wS(SG.auth, ZG);
          return new QS(SG.auth, "reauthViaPopup", bG, LG, SG).executeNotNull()
        }
        async function fS(GG, bG, ZG) {
          const SG = (0, wG.H)(GG);
          uG(SG.auth, bG, GZ);
          const LG = wS(SG.auth, ZG);
          return new QS(SG.auth, "linkViaPopup", bG, LG, SG).executeNotNull()
        }
        class QS extends US {
          constructor(GG, bG, ZG, wG, SG) {
            super(GG, bG, wG, SG), this.provider = ZG, this.authWindow = null, this.pollId = null, QS.currentPopupAction && QS.currentPopupAction.cancel(), QS.currentPopupAction = this
          }
          async executeNotNull() {
            const GG = await this.execute();
            return CG(GG, this.auth, "internal-error"), GG
          }
          async onExecution() {
            mG(1 === this.filter.length, "Popup operations only handle one event");
            const GG = uw();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], GG), this.authWindow.associatedEvent = GG, this.resolver._originValidation(this.auth).catch((GG => {
              this.reject(GG)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (GG => {
              GG || this.reject(oG(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var GG;
            return (null === (GG = this.authWindow) || void 0 === GG ? void 0 : GG.associatedEvent) || null
          }
          cancel() {
            this.reject(oG(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, QS.currentPopupAction = null
          }
          pollUserCancellation() {
            const GG = () => {
              var bG, ZG;
              (null === (ZG = null === (bG = this.authWindow) || void 0 === bG ? void 0 : bG.window) || void 0 === ZG ? void 0 : ZG.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(oG(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(GG, YS.get())
            };
            GG()
          }
        }
        QS.currentPopupAction = null;
        const KS = "pendingRedirect",
          hS = new Map;
        class dS extends US {
          constructor(GG, bG) {
            super(GG, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], bG, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let GG = hS.get(this.auth._key());
            if (!GG) {
              try {
                const bG = await async function(GG, bG) {
                  const ZG = ES(bG),
                    wG = zS(GG);
                  if (!await wG._isAvailable()) return !1;
                  const SG = "true" === await wG._get(ZG);
                  return await wG._remove(ZG), SG
                }(this.resolver, this.auth) ? await super.execute() : null;
                GG = () => Promise.resolve(bG)
              } catch (bG) {
                GG = () => Promise.reject(bG)
              }
              hS.set(this.auth._key(), GG)
            }
            return this.bypassAuthState || hS.set(this.auth._key(), (() => Promise.resolve(null))), GG()
          }
          async onAuthEvent(GG) {
            if ("signInViaRedirect" === GG.type) return super.onAuthEvent(GG);
            if ("unknown" !== GG.type) {
              if (GG.eventId) {
                const bG = await this.auth._redirectUserForId(GG.eventId);
                if (bG) return this.user = bG, super.onAuthEvent(GG);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function JS(GG, bG) {
          return zS(GG)._set(ES(bG), "true")
        }

        function rS(GG, bG) {
          hS.set(GG._key(), bG)
        }

        function zS(GG) {
          return Lb(GG._redirectPersistence)
        }

        function ES(GG) {
          return Ub(KS, GG.config.apiKey, GG.name)
        }

        function oS(GG, bG, ZG) {
          return async function(GG, bG, ZG) {
            const wG = ab(GG);
            uG(GG, bG, GZ), await wG._initializationPromise;
            const SG = wS(wG, ZG);
            return await JS(SG, wG), SG._openRedirect(wG, bG, "signInViaRedirect")
          }(GG, bG, ZG)
        }

        function XS(GG, bG, ZG) {
          return async function(GG, bG, ZG) {
            const SG = (0, wG.H)(GG);
            uG(SG.auth, bG, GZ), await SG.auth._initializationPromise;
            const LG = wS(SG.auth, ZG);
            await JS(LG, SG.auth);
            const yG = await WS(SG);
            return LG._openRedirect(SG.auth, bG, "reauthViaRedirect", yG)
          }(GG, bG, ZG)
        }

        function uS(GG, bG, ZG) {
          return async function(GG, bG, ZG) {
            const SG = (0, wG.H)(GG);
            uG(SG.auth, bG, GZ), await SG.auth._initializationPromise;
            const LG = wS(SG.auth, ZG);
            await rZ(!1, SG, bG.providerId), await JS(LG, SG.auth);
            const yG = await WS(SG);
            return LG._openRedirect(SG.auth, bG, "linkViaRedirect", yG)
          }(GG, bG, ZG)
        }
        async function iS(GG, bG) {
          return await ab(GG)._initializationPromise, CS(GG, bG, !1)
        }
        async function CS(GG, bG) {
          let ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const wG = ab(GG),
            SG = wS(wG, bG),
            LG = new dS(wG, SG, ZG),
            yG = await LG.execute();
          return yG && !ZG && (delete yG.user._redirectEventId, await wG._persistUserIfCurrent(yG.user), await wG._setRedirectUser(null, bG)), yG
        }
        async function WS(GG) {
          const bG = uw(`${GG.uid}:::`);
          return GG._redirectEventId = bG, await GG.auth._setRedirectUser(GG), await GG.auth._persistUserIfCurrent(GG), bG
        }
        class mS {
          constructor(GG) {
            this.auth = GG, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(GG) {
            this.consumers.add(GG), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, GG) && (this.sendToConsumer(this.queuedRedirectEvent, GG), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(GG) {
            this.consumers.delete(GG)
          }
          onEvent(GG) {
            if (this.hasEventBeenHandled(GG)) return !1;
            let bG = !1;
            return this.consumers.forEach((ZG => {
              this.isEventForConsumer(GG, ZG) && (bG = !0, this.sendToConsumer(GG, ZG), this.saveEventToCache(GG))
            })), this.hasHandledPotentialRedirect || ! function(GG) {
              switch (GG.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return FS(GG);
                default:
                  return !1
              }
            }(GG) || (this.hasHandledPotentialRedirect = !0, bG || (this.queuedRedirectEvent = GG, bG = !0)), bG
          }
          sendToConsumer(GG, bG) {
            var ZG;
            if (GG.error && !FS(GG)) {
              const wG = (null === (ZG = GG.error.code) || void 0 === ZG ? void 0 : ZG.split("auth/")[1]) || "internal-error";
              bG.onError(oG(this.auth, wG))
            } else bG.onAuthEvent(GG)
          }
          isEventForConsumer(GG, bG) {
            const ZG = null === bG.eventId || !!GG.eventId && GG.eventId === bG.eventId;
            return bG.filter.includes(GG.type) && ZG
          }
          hasEventBeenHandled(GG) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(IS(GG))
          }
          saveEventToCache(GG) {
            this.cachedEventUids.add(IS(GG)), this.lastProcessedEventTime = Date.now()
          }
        }

        function IS(GG) {
          return [GG.type, GG.eventId, GG.sessionId, GG.tenantId].filter((GG => GG)).join("-")
        }

        function FS(GG) {
          let {
            type: bG,
            error: ZG
          } = GG;
          return "unknown" === bG && "auth/no-auth-event" === (null === ZG || void 0 === ZG ? void 0 : ZG.code)
        }
        const vS = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          aS = /^https?/;
        async function cS(GG) {
          if (GG.config.emulator) return;
          const {
            authorizedDomains: bG
          } = await async function(GG) {
            return AG(GG, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(GG);
          for (const wG of bG) try {
            if (lS(wG)) return
          } catch (ZG) {}
          EG(GG, "unauthorized-domain")
        }

        function lS(GG) {
          const bG = IG(),
            {
              protocol: ZG,
              hostname: wG
            } = new URL(bG);
          if (GG.startsWith("chrome-extension://")) {
            const SG = new URL(GG);
            return "" === SG.hostname && "" === wG ? "chrome-extension:" === ZG && GG.replace("chrome-extension://", "") === bG.replace("chrome-extension://", "") : "chrome-extension:" === ZG && SG.hostname === wG
          }
          if (!aS.test(ZG)) return !1;
          if (vS.test(GG)) return wG === GG;
          const SG = GG.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + SG + "|" + SG + ")$", "i").test(wG)
        }
        const jS = new aG(3e4, 6e4);

        function PS() {
          const GG = Cw().___jsl;
          if (null === GG || void 0 === GG ? void 0 : GG.H)
            for (const bG of Object.keys(GG.H))
              if (GG.H[bG].r = GG.H[bG].r || [], GG.H[bG].L = GG.H[bG].L || [], GG.H[bG].r = [...GG.H[bG].L], GG.CP)
                for (let ZG = 0; ZG < GG.CP.length; ZG++) GG.CP[ZG] = null
        }
        let MS = null;

        function AS(GG) {
          return MS = MS || function(GG) {
            return new Promise(((bG, ZG) => {
              var wG, SG, LG;

              function yG() {
                PS(), gapi.load("gapi.iframes", {
                  callback: () => {
                    bG(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    PS(), ZG(oG(GG, "network-request-failed"))
                  },
                  timeout: jS.get()
                })
              }
              if (null === (SG = null === (wG = Cw().gapi) || void 0 === wG ? void 0 : wG.iframes) || void 0 === SG ? void 0 : SG.Iframe) bG(gapi.iframes.getContext());
              else {
                if (!(null === (LG = Cw().gapi) || void 0 === LG ? void 0 : LG.load)) {
                  const bG = Wb("iframefcb");
                  return Cw()[bG] = () => {
                    gapi.load ? yG() : ZG(oG(GG, "network-request-failed"))
                  }, Cb(`https://apis.google.com/js/api.js?onload=${bG}`).catch((GG => ZG(GG)))
                }
                yG()
              }
            })).catch((GG => {
              throw MS = null, GG
            }))
          }(GG), MS
        }
        const sS = new aG(5e3, 15e3),
          qS = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          nS = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function gS(GG) {
          const bG = GG.config;
          CG(bG.authDomain, GG, "auth-domain-config-required");
          const ZG = bG.emulator ? cG(bG, "emulator/auth/iframe") : `https://${GG.config.authDomain}/__/auth/iframe`,
            LG = {
              apiKey: bG.apiKey,
              appName: GG.name,
              v: SG.f
            },
            yG = nS.get(GG.config.apiHost);
          yG && (LG.eid = yG);
          const kG = GG._getFrameworks();
          return kG.length && (LG.fw = kG.join(",")), `${ZG}?${(0,wG.cb)(LG).slice(1)}`
        }
        const eS = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class RS {
          constructor(GG) {
            this.window = GG, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (GG) {}
          }
        }

        function TS(GG, bG, ZG) {
          let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const yG = Math.max((window.screen.availHeight - LG) / 2, 0).toString(),
            kG = Math.max((window.screen.availWidth - SG) / 2, 0).toString();
          let UG = "";
          const YG = Object.assign(Object.assign({}, eS), {
              width: SG.toString(),
              height: LG.toString(),
              top: yG,
              left: kG
            }),
            VG = (0, wG.K)().toLowerCase();
          ZG && (UG = Qb(VG) ? "_blank" : ZG), pb(VG) && (bG = bG || "http://localhost", YG.scrollbars = "yes");
          const pG = Object.entries(YG).reduce(((GG, bG) => {
            let [ZG, wG] = bG;
            return `${GG}${ZG}=${wG},`
          }), "");
          if (function() {
              var GG;
              return rb(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wG.K)()) && !!(null === (GG = window.navigator) || void 0 === GG ? void 0 : GG.standalone)
            }(VG) && "_self" !== UG) return function(GG, bG) {
            const ZG = document.createElement("a");
            ZG.href = GG, ZG.target = bG;
            const wG = document.createEvent("MouseEvent");
            wG.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), ZG.dispatchEvent(wG)
          }(bG || "", UG), new RS(null);
          const fG = window.open(bG || "", UG, pG);
          CG(fG, GG, "popup-blocked");
          try {
            fG.focus()
          } catch (QG) {}
          return new RS(fG)
        }
        const HS = "__/auth/handler",
          tS = "emulator/auth/handler",
          DS = encodeURIComponent("fac");
        async function NS(GG, bG, ZG, LG, yG, kG) {
            CG(GG.config.authDomain, GG, "auth-domain-config-required"), CG(GG.config.apiKey, GG, "invalid-api-key");
            const UG = {
              apiKey: GG.config.apiKey,
              appName: GG.name,
              authType: ZG,
              redirectUrl: LG,
              v: SG.f,
              eventId: yG
            };
            if (bG instanceof GZ) {
              bG.setDefaultLanguage(GG.languageCode), UG.providerId = bG.providerId || "", (0, wG.P)(bG.getCustomParameters()) || (UG.customParameters = JSON.stringify(bG.getCustomParameters()));
              for (const [GG, bG] of Object.entries(kG || {})) UG[GG] = bG
            }
            if (bG instanceof bZ) {
              const GG = bG.getScopes().filter((GG => "" !== GG));
              GG.length > 0 && (UG.scopes = GG.join(","))
            }
            GG.tenantId && (UG.tid = GG.tenantId);
            const YG = UG;
            for (const wG of Object.keys(YG)) void 0 === YG[wG] && delete YG[wG];
            const VG = await GG._getAppCheckToken(),
              pG = VG ? `#${DS}=${encodeURIComponent(VG)}` : "";
            return `${function(GG){let{config:bG}=GG;if(!bG.emulator)return`
            https: //${bG.authDomain}/${HS}`;return cG(bG,tS)}(GG)}?${(0,wG.cb)(YG).slice(1)}${pG}`}const OS="webStorageSupport";const xS=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ow,this._completeRedirectFn=CS,this._overrideRedirectResult=rS}async _openPopup(GG,bG,ZG,wG){var SG;mG(null===(SG=this.eventManagers[GG._key()])||void 0===SG?void 0:SG.manager,"_initialize() not called before _openPopup()");return TS(GG,await NS(GG,bG,ZG,IG(),wG),uw())}async _openRedirect(GG,bG,ZG,wG){await this._originValidation(GG);return function(GG){Cw().location.href=GG}(await NS(GG,bG,ZG,IG(),wG)),new Promise((()=>{}))}_initialize(GG){const bG=GG._key();if(this.eventManagers[bG]){const{manager:GG,promise:ZG}=this.eventManagers[bG];return GG?Promise.resolve(GG):(mG(ZG,"If manager is not set, promise should be"),ZG)}const ZG=this.initAndGetManager(GG);return this.eventManagers[bG]={promise:ZG},ZG.catch((()=>{delete this.eventManagers[bG]})),ZG}async initAndGetManager(GG){const bG=await async function(GG){const bG=await AS(GG),ZG=Cw().gapi;return CG(ZG,GG,"internal-error"),bG.open({where:document.body,url:gS(GG),messageHandlersFilter:ZG.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qS,dontclear:!0},(bG=>new Promise((async(ZG,wG)=>{await bG.restyle({setHideOnLeave:!1});const SG=oG(GG,"network-request-failed"),LG=Cw().setTimeout((()=>{wG(SG)}),sS.get());function yG(){Cw().clearTimeout(LG),ZG(bG)}bG.ping(yG).then(yG,(()=>{wG(SG)}))}))))}(GG),ZG=new mS(GG);return bG.register("authEvent",(bG=>{CG(null===bG||void 0===bG?void 0:bG.authEvent,GG,"invalid-auth-event");return{status:ZG.onEvent(bG.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[GG._key()]={manager:ZG},this.iframes[GG._key()]=bG,ZG}_isIframeWebStorageSupported(GG,bG){this.iframes[GG._key()].send(OS,{type:OS},(ZG=>{var wG;const SG=null===(wG=null===ZG||void 0===ZG?void 0:ZG[0])||void 0===wG?void 0:wG[OS];void 0!==SG&&bG(!!SG),EG(GG,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(GG){const bG=GG._key();return this.originValidationPromises[bG]||(this.originValidationPromises[bG]=cS(GG)),this.originValidationPromises[bG]}get _shouldInitProactively(){return zb()||fb()||rb()}};class BS{constructor(GG){this.factorId=GG}_process(GG,bG,ZG){switch(bG.type){case"enroll":return this._finalizeEnroll(GG,bG.credential,ZG);case"signin":return this._finalizeSignIn(GG,bG.credential);default:return WG("unexpected MultiFactorSessionType")}}}class GL extends BS{constructor(GG){super("phone"),this.credential=GG}static _fromCredential(GG){return new GL(GG)}_finalizeEnroll(GG,bG,ZG){return function(GG,bG){return AG(GG,"POST","/v2/accounts/mfaEnrollment:finalize",MG(GG,bG))}(GG,{idToken:bG,displayName:ZG,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(GG,bG){return function(GG,bG){return AG(GG,"POST","/v2/accounts/mfaSignIn:finalize",MG(GG,bG))}(GG,{mfaPendingCredential:bG,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class bL{constructor(){}static assertion(GG){return GL._fromCredential(GG)}}bL.FACTOR_ID="phone";class ZL{static assertionForEnrollment(GG,bG){return wL._fromSecret(GG,bG)}static assertionForSignIn(GG,bG){return wL._fromEnrollmentId(GG,bG)}static async generateSecret(GG){const bG=GG;CG("undefined"!==typeof bG.auth,"internal-error");const ZG=await(wG=bG.auth,SG={idToken:bG.credential,totpEnrollmentInfo:{}},AG(wG,"POST","/v2/accounts/mfaEnrollment:start",MG(wG,SG)));var wG,SG;return SL._fromStartTotpMfaEnrollmentResponse(ZG,bG.auth)}}ZL.FACTOR_ID="totp";class wL extends BS{constructor(GG,bG,ZG){super("totp"),this.otp=GG,this.enrollmentId=bG,this.secret=ZG}static _fromSecret(GG,bG){return new wL(bG,void 0,GG)}static _fromEnrollmentId(GG,bG){return new wL(bG,GG)}async _finalizeEnroll(GG,bG,ZG){return CG("undefined"!==typeof this.secret,GG,"argument-error"),function(GG,bG){return AG(GG,"POST","/v2/accounts/mfaEnrollment:finalize",MG(GG,bG))}(GG,{idToken:bG,displayName:ZG,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(GG,bG){CG(void 0!==this.enrollmentId&&void 0!==this.otp,GG,"argument-error");const ZG={verificationCode:this.otp};return function(GG,bG){return AG(GG,"POST","/v2/accounts/mfaSignIn:finalize",MG(GG,bG))}(GG,{mfaPendingCredential:bG,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:ZG})}}class SL{constructor(GG,bG,ZG,wG,SG,LG,yG){this.sessionInfo=LG,this.auth=yG,this.secretKey=GG,this.hashingAlgorithm=bG,this.codeLength=ZG,this.codeIntervalSeconds=wG,this.enrollmentCompletionDeadline=SG}static _fromStartTotpMfaEnrollmentResponse(GG,bG){return new SL(GG.totpSessionInfo.sharedSecretKey,GG.totpSessionInfo.hashingAlgorithm,GG.totpSessionInfo.verificationCodeLength,GG.totpSessionInfo.periodSec,new Date(GG.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),GG.totpSessionInfo.sessionInfo,bG)}_makeTotpVerificationInfo(GG){return{sessionInfo:this.sessionInfo,verificationCode:GG}}generateQrCodeUrl(GG,bG){var ZG;let wG=!1;return(LL(GG)||LL(bG))&&(wG=!0),wG&&(LL(GG)&&(GG=(null===(ZG=this.auth.currentUser)||void 0===ZG?void 0:ZG.email)||"unknownuser"),LL(bG)&&(bG=this.auth.name)),`otpauth://totp/${bG}:${GG}?secret=${this.secretKey}&issuer=${bG}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function LL(GG){return"undefined"===typeof GG||0===(null===GG||void 0===GG?void 0:GG.length)}var yL="@firebase/auth",kL="0.23.2";class UL{constructor(GG){this.auth=GG,this.internalListeners=new Map}getUid(){var GG;return this.assertAuthConfigured(),(null===(GG=this.auth.currentUser)||void 0===GG?void 0:GG.uid)||null}async getToken(GG){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(GG)}}addAuthTokenListener(GG){if(this.assertAuthConfigured(),this.internalListeners.has(GG))return;const bG=this.auth.onIdTokenChanged((bG=>{GG((null===bG||void 0===bG?void 0:bG.stsTokenManager.accessToken)||null)}));this.internalListeners.set(GG,bG),this.updateProactiveRefresh()}removeAuthTokenListener(GG){this.assertAuthConfigured();const bG=this.internalListeners.get(GG);bG&&(this.internalListeners.delete(GG),bG(),this.updateProactiveRefresh())}assertAuthConfigured(){CG(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const YL=(0,wG.D)("authIdTokenMaxAge")||300;let VL=null;const pL=GG=>async bG=>{const ZG=bG&&await bG.getIdTokenResult(),wG=ZG&&((new Date).getTime()-Date.parse(ZG.issuedAtTime))/1e3;if(wG&&wG>YL)return;const SG=null===ZG||void 0===ZG?void 0:ZG.token;VL!==SG&&(VL=SG,await fetch(GG,{method:SG?"POST":"DELETE",headers:SG?{Authorization:`Bearer ${SG}`}:{}}))};function fL(){let GG=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,SG.M)();const bG=(0,SG.y)(GG,"auth");if(bG.isInitialized())return bG.getImmediate();const ZG=lb(GG,{popupRedirectResolver:xS,persistence:[Aw,zw,ow]}),LG=(0,wG.D)("authTokenSyncURL");if(LG){const GG=pL(LG);Sw(ZG,GG,(()=>GG(ZG.currentUser))),ww(ZG,(bG=>GG(bG)))}const yG=(0,wG.C)("auth");return yG&&jb(ZG,`http://${yG}`),ZG}var QL;QL="Browser",(0,SG.B)(new kG.f("auth",((GG,bG)=>{let{options:ZG}=bG;const wG=GG.getProvider("app").getImmediate(),SG=GG.getProvider("heartbeat"),LG=GG.getProvider("app-check-internal"),{apiKey:yG,authDomain:kG}=wG.options;CG(yG&&!yG.includes(":"),"invalid-api-key",{appName:wG.name});const UG={apiKey:yG,authDomain:kG,clientPlatform:QL,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Eb(QL)},YG=new vb(wG,SG,LG,UG);return function(GG,bG){const ZG=(null===bG||void 0===bG?void 0:bG.persistence)||[],wG=(Array.isArray(ZG)?ZG:[ZG]).map(Lb);(null===bG||void 0===bG?void 0:bG.errorMap)&&GG._updateErrorMap(bG.errorMap),GG._initializeWithPersistence(wG,null===bG||void 0===bG?void 0:bG.popupRedirectResolver)}(YG,ZG),YG}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((GG,bG,ZG)=>{GG.getProvider("auth-internal").initialize()}))),(0,SG.B)(new kG.f("auth-internal",(GG=>(GG=>new UL(GG))(ab(GG.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,SG.U)(yL,kL,function(GG){switch(GG){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(QL)),(0,SG.U)(yL,kL,"esm2017")}};Object.freeze(modules);for(const GG in modules)Object.freeze(modules[GG]);