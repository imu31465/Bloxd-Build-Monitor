/*! For license information please see pxmq3aq.295.f9fd278f.chunk.js.LICENSE.txt */
export const id = 295;
export const ids = [295];
export const modules = {
    41819: (VV, eV, xV) => {
        xV.r(eV), xV.d(eV, {
          ActionCodeOperation: () => vV,
          ActionCodeURL: () => Ie,
          AuthCredential: () => oe,
          AuthErrorCodes: () => BV,
          EmailAuthCredential: () => Ke,
          EmailAuthProvider: () => Oe,
          FacebookAuthProvider: () => Jx,
          FactorId: () => QV,
          GithubAuthProvider: () => Ux,
          GoogleAuthProvider: () => Yx,
          OAuthCredential: () => ue,
          OAuthProvider: () => xx,
          OperationType: () => ZV,
          PhoneAuthCredential: () => Se,
          PhoneAuthProvider: () => eY,
          PhoneMultiFactorGenerator: () => VU,
          ProviderId: () => nV,
          RecaptchaVerifier: () => uJ,
          SAMLAuthProvider: () => px,
          SignInMethod: () => wV,
          TotpMultiFactorGenerator: () => eU,
          TotpSecret: () => JU,
          TwitterAuthProvider: () => Qx,
          applyActionCode: () => Rx,
          beforeAuthStateChanged: () => YJ,
          browserLocalPersistence: () => qJ,
          browserPopupRedirectResolver: () => IY,
          browserSessionPersistence: () => FJ,
          checkActionCode: () => gx,
          confirmPasswordReset: () => Wx,
          connectAuthEmulator: () => ie,
          createUserWithEmailAndPassword: () => ix,
          debugErrorMap: () => kV,
          deleteUser: () => nJ,
          fetchSignInMethodsForEmail: () => hx,
          getAdditionalUserInfo: () => VJ,
          getAuth: () => ZU,
          getIdToken: () => KV,
          getIdTokenResult: () => HV,
          getMultiFactorResolver: () => vJ,
          getRedirectResult: () => PY,
          inMemoryPersistence: () => pe,
          indexedDBLocalPersistence: () => aJ,
          initializeAuth: () => De,
          initializeRecaptchaConfig: () => xJ,
          isSignInWithEmailLink: () => ox,
          linkWithCredential: () => Tx,
          linkWithPhoneNumber: () => IJ,
          linkWithPopup: () => ZY,
          linkWithRedirect: () => TY,
          multiFactor: () => bJ,
          onAuthStateChanged: () => UJ,
          onIdTokenChanged: () => JJ,
          parseActionCodeURL: () => de,
          prodErrorMap: () => bV,
          reauthenticateWithCredential: () => Px,
          reauthenticateWithPhoneNumber: () => dJ,
          reauthenticateWithPopup: () => wY,
          reauthenticateWithRedirect: () => FY,
          reload: () => Ve,
          sendEmailVerification: () => lx,
          sendPasswordResetEmail: () => Gx,
          sendSignInLinkToEmail: () => ax,
          setPersistence: () => eJ,
          signInAnonymously: () => vx,
          signInWithCredential: () => Fx,
          signInWithCustomToken: () => Ax,
          signInWithEmailAndPassword: () => Cx,
          signInWithEmailLink: () => cx,
          signInWithPhoneNumber: () => SJ,
          signInWithPopup: () => nY,
          signInWithRedirect: () => tY,
          signOut: () => QJ,
          unlink: () => Ex,
          updateCurrentUser: () => pJ,
          updateEmail: () => mx,
          updatePassword: () => Kx,
          updatePhoneNumber: () => VY,
          updateProfile: () => fx,
          useDeviceLanguage: () => yJ,
          verifyBeforeUpdateEmail: () => Lx,
          verifyPasswordResetCode: () => Dx
        });
        var JV = xV(41794),
          YV = xV(41783);

        function UV(VV, eV) {
          var xV = {};
          for (var JV in VV) Object.prototype.hasOwnProperty.call(VV, JV) && eV.indexOf(JV) < 0 && (xV[JV] = VV[JV]);
          if (null != VV && "function" === typeof Object.getOwnPropertySymbols) {
            var YV = 0;
            for (JV = Object.getOwnPropertySymbols(VV); YV < JV.length; YV++) eV.indexOf(JV[YV]) < 0 && Object.prototype.propertyIsEnumerable.call(VV, JV[YV]) && (xV[JV[YV]] = VV[JV[YV]])
          }
          return xV
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var yV = xV(41802),
          pV = xV(41787);
        const QV = {
            PHONE: "phone",
            TOTP: "totp"
          },
          nV = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          wV = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          ZV = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          vV = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function rV() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const kV = function() {
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
          bV = rV,
          EV = new JV.g("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          BV = {
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
          jV = new yV.g("@firebase/auth");

        function qV(VV) {
          if (jV.logLevel <= yV.d.ERROR) {
            for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
            jV.error(`Auth (${YV.e}): ${VV}`, ...xV)
          }
        }

        function tV(VV) {
          for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
          throw AV(VV, ...xV)
        }

        function FV(VV) {
          for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
          return AV(VV, ...xV)
        }

        function TV(VV, eV, xV) {
          const YV = Object.assign(Object.assign({}, bV()), {
            [eV]: xV
          });
          return new JV.g("auth", "Firebase", YV).create(eV, {
            appName: VV.name
          })
        }

        function PV(VV, eV, xV) {
          if (!(eV instanceof xV)) throw xV.name !== eV.constructor.name && tV(VV, "argument-error"), TV(VV, "argument-error", `Type of ${eV.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function AV(VV) {
          for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
          if ("string" !== typeof VV) {
            const eV = xV[0],
              JV = [...xV.slice(1)];
            return JV[0] && (JV[0].appName = VV.name), VV._errorFactory.create(eV, ...JV)
          }
          return EV.create(VV, ...xV)
        }

        function NV(VV, eV) {
          if (!VV) {
            for (var xV = arguments.length, JV = new Array(xV > 2 ? xV - 2 : 0), YV = 2; YV < xV; YV++) JV[YV - 2] = arguments[YV];
            throw AV(eV, ...JV)
          }
        }

        function XV(VV) {
          const eV = "INTERNAL ASSERTION FAILED: " + VV;
          throw qV(eV), new Error(eV)
        }

        function MV(VV, eV) {
          VV || XV(eV)
        }

        function zV() {
          var VV;
          return "undefined" !== typeof self && (null === (VV = self.location) || void 0 === VV ? void 0 : VV.href) || ""
        }

        function GV() {
          return "http:" === WV() || "https:" === WV()
        }

        function WV() {
          var VV;
          return "undefined" !== typeof self && (null === (VV = self.location) || void 0 === VV ? void 0 : VV.protocol) || null
        }
        class RV {
          constructor(VV, eV) {
            this.shortDelay = VV, this.longDelay = eV, MV(eV > VV, "Short delay should be less than long delay!"), this.isMobile = (0, JV._)() || (0, JV.bb)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (GV() || (0, JV.Q)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function gV(VV, eV) {
          MV(VV.emulator, "Emulator should always be set here");
          const {
            url: xV
          } = VV.emulator;
          return eV ? `${xV}${eV.startsWith("/")?eV.slice(1):eV}` : xV
        }
        class DV {
          static initialize(VV, eV, xV) {
            this.fetchImpl = VV, eV && (this.headersImpl = eV), xV && (this.responseImpl = xV)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void XV("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void XV("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void XV("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const iV = {
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
          CV = new RV(3e4, 6e4);

        function aV(VV, eV) {
          return VV.tenantId && !eV.tenantId ? Object.assign(Object.assign({}, eV), {
            tenantId: VV.tenantId
          }) : eV
        }
        async function oV(VV, eV, xV, YV) {
          return cV(VV, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let UV = {},
              yV = {};
            YV && ("GET" === eV ? yV = YV : UV = {
              body: JSON.stringify(YV)
            });
            const pV = (0, JV.hb)(Object.assign({
                key: VV.config.apiKey
              }, yV)).slice(1),
              QV = await VV._getAdditionalHeaders();
            return QV["Content-Type"] = "application/json", VV.languageCode && (QV["X-Firebase-Locale"] = VV.languageCode), DV.fetch()(lV(VV, VV.config.apiHost, xV, pV), Object.assign({
              method: eV,
              headers: QV,
              referrerPolicy: "no-referrer"
            }, UV))
          }))
        }
        async function cV(VV, eV, xV) {
          VV._canInitEmulator = !1;
          const YV = Object.assign(Object.assign({}, iV), eV);
          try {
            const eV = new LV(VV),
              JV = await Promise.race([xV(), eV.promise]);
            eV.clearNetworkTimeout();
            const UV = await JV.json();
            if ("needConfirmation" in UV) throw fV(VV, "account-exists-with-different-credential", UV);
            if (JV.ok && !("errorMessage" in UV)) return UV;
            {
              const eV = JV.ok ? UV.errorMessage : UV.error.message,
                [xV, yV] = eV.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === xV) throw fV(VV, "credential-already-in-use", UV);
              if ("EMAIL_EXISTS" === xV) throw fV(VV, "email-already-in-use", UV);
              if ("USER_DISABLED" === xV) throw fV(VV, "user-disabled", UV);
              const pV = YV[xV] || xV.toLowerCase().replace(/[_\s]+/g, "-");
              if (yV) throw TV(VV, pV, yV);
              tV(VV, pV)
            }
          } catch (UV) {
            if (UV instanceof JV.j) throw UV;
            tV(VV, "network-request-failed", {
              message: String(UV)
            })
          }
        }
        async function hV(VV, eV, xV, JV) {
          let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const UV = await oV(VV, eV, xV, JV, YV);
          return "mfaPendingCredential" in UV && tV(VV, "multi-factor-auth-required", {
            _serverResponse: UV
          }), UV
        }

        function lV(VV, eV, xV, JV) {
          const YV = `${eV}${xV}?${JV}`;
          return VV.config.emulator ? gV(VV.config, YV) : `${VV.config.apiScheme}://${YV}`
        }
        class LV {
          constructor(VV) {
            this.auth = VV, this.timer = null, this.promise = new Promise(((VV, eV) => {
              this.timer = setTimeout((() => eV(FV(this.auth, "network-request-failed"))), CV.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function fV(VV, eV, xV) {
          const JV = {
            appName: VV.name
          };
          xV.email && (JV.email = xV.email), xV.phoneNumber && (JV.phoneNumber = xV.phoneNumber);
          const YV = FV(VV, eV, JV);
          return YV.customData._tokenResponse = xV, YV
        }

        function mV(VV) {
          if (VV) try {
            const eV = new Date(Number(VV));
            if (!isNaN(eV.getTime())) return eV.toUTCString()
          } catch (eV) {}
        }

        function KV(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, JV.L)(VV).getIdToken(eV)
        }
        async function HV(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const xV = (0, JV.L)(VV),
            YV = await xV.getIdToken(eV),
            UV = sV(YV);
          NV(UV && UV.exp && UV.auth_time && UV.iat, xV.auth, "internal-error");
          const yV = "object" === typeof UV.firebase ? UV.firebase : void 0,
            pV = null === yV || void 0 === yV ? void 0 : yV.sign_in_provider;
          return {
            claims: UV,
            token: YV,
            authTime: mV(uV(UV.auth_time)),
            issuedAtTime: mV(uV(UV.iat)),
            expirationTime: mV(uV(UV.exp)),
            signInProvider: pV || null,
            signInSecondFactor: (null === yV || void 0 === yV ? void 0 : yV.sign_in_second_factor) || null
          }
        }

        function uV(VV) {
          return 1e3 * Number(VV)
        }

        function sV(VV) {
          const [eV, xV, YV] = VV.split(".");
          if (void 0 === eV || void 0 === xV || void 0 === YV) return qV("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const VV = (0, JV.o)(xV);
            return VV ? JSON.parse(VV) : (qV("Failed to decode base64 JWT payload"), null)
          } catch (UV) {
            return qV("Caught error parsing JWT payload as JSON", null === UV || void 0 === UV ? void 0 : UV.toString()), null
          }
        }
        async function SV(VV, eV) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return eV;
          try {
            return await eV
          } catch (xV) {
            throw xV instanceof JV.j && function(VV) {
              let {
                code: eV
              } = VV;
              return "auth/user-disabled" === eV || "auth/user-token-expired" === eV
            }(xV) && VV.auth.currentUser === VV && await VV.auth.signOut(), xV
          }
        }
        class IV {
          constructor(VV) {
            this.user = VV, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(VV) {
            var eV;
            if (VV) {
              const VV = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), VV
            } {
              this.errorBackoff = 3e4;
              const VV = (null !== (eV = this.user.stsTokenManager.expirationTime) && void 0 !== eV ? eV : 0) - Date.now() - 3e5;
              return Math.max(0, VV)
            }
          }
          schedule() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const eV = this.getInterval(VV);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), eV)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (VV) {
              return void("auth/network-request-failed" === (null === VV || void 0 === VV ? void 0 : VV.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class dV {
          constructor(VV, eV) {
            this.createdAt = VV, this.lastLoginAt = eV, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = mV(this.lastLoginAt), this.creationTime = mV(this.createdAt)
          }
          _copy(VV) {
            this.createdAt = VV.createdAt, this.lastLoginAt = VV.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function OV(VV) {
          var eV;
          const xV = VV.auth,
            JV = await VV.getIdToken(),
            YV = await SV(VV, async function(VV, eV) {
              return oV(VV, "POST", "/v1/accounts:lookup", eV)
            }(xV, {
              idToken: JV
            }));
          NV(null === YV || void 0 === YV ? void 0 : YV.users.length, xV, "internal-error");
          const yV = YV.users[0];
          VV._notifyReloadListener(yV);
          const pV = (null === (eV = yV.providerUserInfo) || void 0 === eV ? void 0 : eV.length) ? yV.providerUserInfo.map((VV => {
            var {
              providerId: eV
            } = VV, xV = UV(VV, ["providerId"]);
            return {
              providerId: eV,
              uid: xV.rawId || "",
              displayName: xV.displayName || null,
              email: xV.email || null,
              phoneNumber: xV.phoneNumber || null,
              photoURL: xV.photoUrl || null
            }
          })) : [];
          const QV = (nV = VV.providerData, wV = pV, [...nV.filter((VV => !wV.some((eV => eV.providerId === VV.providerId)))), ...wV]);
          var nV, wV;
          const ZV = VV.isAnonymous,
            vV = !(VV.email && yV.passwordHash) && !(null === QV || void 0 === QV ? void 0 : QV.length),
            rV = !!ZV && vV,
            kV = {
              uid: yV.localId,
              displayName: yV.displayName || null,
              photoURL: yV.photoUrl || null,
              email: yV.email || null,
              emailVerified: yV.emailVerified || !1,
              phoneNumber: yV.phoneNumber || null,
              tenantId: yV.tenantId || null,
              providerData: QV,
              metadata: new dV(yV.createdAt, yV.lastLoginAt),
              isAnonymous: rV
            };
          Object.assign(VV, kV)
        }
        async function Ve(VV) {
          const eV = (0, JV.L)(VV);
          await OV(eV), await eV.auth._persistUserIfCurrent(eV), eV.auth._notifyListenersIfCurrent(eV)
        }
        class ee {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(VV) {
            NV(VV.idToken, "internal-error"), NV("undefined" !== typeof VV.idToken, "internal-error"), NV("undefined" !== typeof VV.refreshToken, "internal-error");
            const eV = "expiresIn" in VV && "undefined" !== typeof VV.expiresIn ? Number(VV.expiresIn) : function(VV) {
              const eV = sV(VV);
              return NV(eV, "internal-error"), NV("undefined" !== typeof eV.exp, "internal-error"), NV("undefined" !== typeof eV.iat, "internal-error"), Number(eV.exp) - Number(eV.iat)
            }(VV.idToken);
            this.updateTokensAndExpiration(VV.idToken, VV.refreshToken, eV)
          }
          async getToken(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return NV(!this.accessToken || this.refreshToken, VV, "user-token-expired"), eV || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(VV, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(VV, eV) {
            const {
              accessToken: xV,
              refreshToken: YV,
              expiresIn: UV
            } = await async function(VV, eV) {
              const xV = await cV(VV, {}, (async () => {
                const xV = (0, JV.hb)({
                    grant_type: "refresh_token",
                    refresh_token: eV
                  }).slice(1),
                  {
                    tokenApiHost: YV,
                    apiKey: UV
                  } = VV.config,
                  yV = lV(VV, YV, "/v1/token", `key=${UV}`),
                  pV = await VV._getAdditionalHeaders();
                return pV["Content-Type"] = "application/x-www-form-urlencoded", DV.fetch()(yV, {
                  method: "POST",
                  headers: pV,
                  body: xV
                })
              }));
              return {
                accessToken: xV.access_token,
                expiresIn: xV.expires_in,
                refreshToken: xV.refresh_token
              }
            }(VV, eV);
            this.updateTokensAndExpiration(xV, YV, Number(UV))
          }
          updateTokensAndExpiration(VV, eV, xV) {
            this.refreshToken = eV || null, this.accessToken = VV || null, this.expirationTime = Date.now() + 1e3 * xV
          }
          static fromJSON(VV, eV) {
            const {
              refreshToken: xV,
              accessToken: JV,
              expirationTime: YV
            } = eV, UV = new ee;
            return xV && (NV("string" === typeof xV, "internal-error", {
              appName: VV
            }), UV.refreshToken = xV), JV && (NV("string" === typeof JV, "internal-error", {
              appName: VV
            }), UV.accessToken = JV), YV && (NV("number" === typeof YV, "internal-error", {
              appName: VV
            }), UV.expirationTime = YV), UV
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(VV) {
            this.accessToken = VV.accessToken, this.refreshToken = VV.refreshToken, this.expirationTime = VV.expirationTime
          }
          _clone() {
            return Object.assign(new ee, this.toJSON())
          }
          _performRefresh() {
            return XV("not implemented")
          }
        }

        function xe(VV, eV) {
          NV("string" === typeof VV || "undefined" === typeof VV, "internal-error", {
            appName: eV
          })
        }
        class Je {
          constructor(VV) {
            var {
              uid: eV,
              auth: xV,
              stsTokenManager: JV
            } = VV, YV = UV(VV, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new IV(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = eV, this.auth = xV, this.stsTokenManager = JV, this.accessToken = JV.accessToken, this.displayName = YV.displayName || null, this.email = YV.email || null, this.emailVerified = YV.emailVerified || !1, this.phoneNumber = YV.phoneNumber || null, this.photoURL = YV.photoURL || null, this.isAnonymous = YV.isAnonymous || !1, this.tenantId = YV.tenantId || null, this.providerData = YV.providerData ? [...YV.providerData] : [], this.metadata = new dV(YV.createdAt || void 0, YV.lastLoginAt || void 0)
          }
          async getIdToken(VV) {
            const eV = await SV(this, this.stsTokenManager.getToken(this.auth, VV));
            return NV(eV, this.auth, "internal-error"), this.accessToken !== eV && (this.accessToken = eV, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), eV
          }
          getIdTokenResult(VV) {
            return HV(this, VV)
          }
          reload() {
            return Ve(this)
          }
          _assign(VV) {
            this !== VV && (NV(this.uid === VV.uid, this.auth, "internal-error"), this.displayName = VV.displayName, this.photoURL = VV.photoURL, this.email = VV.email, this.emailVerified = VV.emailVerified, this.phoneNumber = VV.phoneNumber, this.isAnonymous = VV.isAnonymous, this.tenantId = VV.tenantId, this.providerData = VV.providerData.map((VV => Object.assign({}, VV))), this.metadata._copy(VV.metadata), this.stsTokenManager._assign(VV.stsTokenManager))
          }
          _clone(VV) {
            const eV = new Je(Object.assign(Object.assign({}, this), {
              auth: VV,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return eV.metadata._copy(this.metadata), eV
          }
          _onReload(VV) {
            NV(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = VV, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(VV) {
            this.reloadListener ? this.reloadListener(VV) : this.reloadUserInfo = VV
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              xV = !1;
            VV.idToken && VV.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(VV), xV = !0), eV && await OV(this), await this.auth._persistUserIfCurrent(this), xV && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const VV = await this.getIdToken();
            return await SV(this, async function(VV, eV) {
              return oV(VV, "POST", "/v1/accounts:delete", eV)
            }(this.auth, {
              idToken: VV
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
              providerData: this.providerData.map((VV => Object.assign({}, VV))),
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
          static _fromJSON(VV, eV) {
            var xV, JV, YV, UV, yV, pV, QV, nV;
            const wV = null !== (xV = eV.displayName) && void 0 !== xV ? xV : void 0,
              ZV = null !== (JV = eV.email) && void 0 !== JV ? JV : void 0,
              vV = null !== (YV = eV.phoneNumber) && void 0 !== YV ? YV : void 0,
              rV = null !== (UV = eV.photoURL) && void 0 !== UV ? UV : void 0,
              kV = null !== (yV = eV.tenantId) && void 0 !== yV ? yV : void 0,
              bV = null !== (pV = eV._redirectEventId) && void 0 !== pV ? pV : void 0,
              EV = null !== (QV = eV.createdAt) && void 0 !== QV ? QV : void 0,
              BV = null !== (nV = eV.lastLoginAt) && void 0 !== nV ? nV : void 0,
              {
                uid: jV,
                emailVerified: qV,
                isAnonymous: tV,
                providerData: FV,
                stsTokenManager: TV
              } = eV;
            NV(jV && TV, VV, "internal-error");
            const PV = ee.fromJSON(this.name, TV);
            NV("string" === typeof jV, VV, "internal-error"), xe(wV, VV.name), xe(ZV, VV.name), NV("boolean" === typeof qV, VV, "internal-error"), NV("boolean" === typeof tV, VV, "internal-error"), xe(vV, VV.name), xe(rV, VV.name), xe(kV, VV.name), xe(bV, VV.name), xe(EV, VV.name), xe(BV, VV.name);
            const AV = new Je({
              uid: jV,
              auth: VV,
              email: ZV,
              emailVerified: qV,
              displayName: wV,
              isAnonymous: tV,
              photoURL: rV,
              phoneNumber: vV,
              tenantId: kV,
              stsTokenManager: PV,
              createdAt: EV,
              lastLoginAt: BV
            });
            return FV && Array.isArray(FV) && (AV.providerData = FV.map((VV => Object.assign({}, VV)))), bV && (AV._redirectEventId = bV), AV
          }
          static async _fromIdTokenResponse(VV, eV) {
            let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const JV = new ee;
            JV.updateFromServerResponse(eV);
            const YV = new Je({
              uid: eV.localId,
              auth: VV,
              stsTokenManager: JV,
              isAnonymous: xV
            });
            return await OV(YV), YV
          }
        }
        const Ye = new Map;

        function Ue(VV) {
          MV(VV instanceof Function, "Expected a class definition");
          let eV = Ye.get(VV);
          return eV ? (MV(eV instanceof VV, "Instance stored in cache mismatched with class"), eV) : (eV = new VV, Ye.set(VV, eV), eV)
        }
        class ye {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(VV, eV) {
            this.storage[VV] = eV
          }
          async _get(VV) {
            const eV = this.storage[VV];
            return void 0 === eV ? null : eV
          }
          async _remove(VV) {
            delete this.storage[VV]
          }
          _addListener(VV, eV) {}
          _removeListener(VV, eV) {}
        }
        ye.type = "NONE";
        const pe = ye;

        function Qe(VV, eV, xV) {
          return `firebase:${VV}:${eV}:${xV}`
        }
        class ne {
          constructor(VV, eV, xV) {
            this.persistence = VV, this.auth = eV, this.userKey = xV;
            const {
              config: JV,
              name: YV
            } = this.auth;
            this.fullUserKey = Qe(this.userKey, JV.apiKey, YV), this.fullPersistenceKey = Qe("persistence", JV.apiKey, YV), this.boundEventHandler = eV._onStorageEvent.bind(eV), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(VV) {
            return this.persistence._set(this.fullUserKey, VV.toJSON())
          }
          async getCurrentUser() {
            const VV = await this.persistence._get(this.fullUserKey);
            return VV ? Je._fromJSON(this.auth, VV) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(VV) {
            if (this.persistence === VV) return;
            const eV = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = VV, eV ? this.setCurrentUser(eV) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(VV, eV) {
            let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!eV.length) return new ne(Ue(pe), VV, xV);
            const JV = (await Promise.all(eV.map((async VV => {
              if (await VV._isAvailable()) return VV
            })))).filter((VV => VV));
            let YV = JV[0] || Ue(pe);
            const UV = Qe(xV, VV.config.apiKey, VV.name);
            let yV = null;
            for (const nV of eV) try {
              const eV = await nV._get(UV);
              if (eV) {
                const xV = Je._fromJSON(VV, eV);
                nV !== YV && (yV = xV), YV = nV;
                break
              }
            } catch (QV) {}
            const pV = JV.filter((VV => VV._shouldAllowMigration));
            return YV._shouldAllowMigration && pV.length ? (YV = pV[0], yV && await YV._set(UV, yV.toJSON()), await Promise.all(eV.map((async VV => {
              if (VV !== YV) try {
                await VV._remove(UV)
              } catch (QV) {}
            }))), new ne(YV, VV, xV)) : new ne(YV, VV, xV)
          }
        }

        function we(VV) {
          const eV = VV.toLowerCase();
          if (eV.includes("opera/") || eV.includes("opr/") || eV.includes("opios/")) return "Opera";
          if (ke(eV)) return "IEMobile";
          if (eV.includes("msie") || eV.includes("trident/")) return "IE";
          if (eV.includes("edge/")) return "Edge";
          if (Ze(eV)) return "Firefox";
          if (eV.includes("silk/")) return "Silk";
          if (Ee(eV)) return "Blackberry";
          if (Be(eV)) return "Webos";
          if (ve(eV)) return "Safari";
          if ((eV.includes("chrome/") || re(eV)) && !eV.includes("edge/")) return "Chrome";
          if (be(eV)) return "Android";
          {
            const eV = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              xV = VV.match(eV);
            if (2 === (null === xV || void 0 === xV ? void 0 : xV.length)) return xV[1]
          }
          return "Other"
        }

        function Ze() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)();
          return /firefox\//i.test(VV)
        }

        function ve() {
          const VV = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)()).toLowerCase();
          return VV.includes("safari/") && !VV.includes("chrome/") && !VV.includes("crios/") && !VV.includes("android")
        }

        function re() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)();
          return /crios\//i.test(VV)
        }

        function ke() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)();
          return /iemobile/i.test(VV)
        }

        function be() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)();
          return /android/i.test(VV)
        }

        function Ee() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)();
          return /blackberry/i.test(VV)
        }

        function Be() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)();
          return /webos/i.test(VV)
        }

        function je() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)();
          return /iphone|ipad|ipod/i.test(VV) || /macintosh/i.test(VV) && /mobile/i.test(VV)
        }

        function qe() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)();
          return je(VV) || be(VV) || Be(VV) || Ee(VV) || /windows phone/i.test(VV) || ke(VV)
        }

        function te(VV) {
          let eV, xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (VV) {
            case "Browser":
              eV = we((0, JV.P)());
              break;
            case "Worker":
              eV = `${we((0,JV.P)())}-${VV}`;
              break;
            default:
              eV = VV
          }
          const UV = xV.length ? xV.join(",") : "FirebaseCore-web";
          return `${eV}/JsCore/${YV.e}/${UV}`
        }
        async function Fe(VV, eV) {
          return oV(VV, "GET", "/v2/recaptchaConfig", aV(VV, eV))
        }

        function Te(VV) {
          return void 0 !== VV && void 0 !== VV.getResponse
        }

        function Pe(VV) {
          return void 0 !== VV && void 0 !== VV.enterprise
        }
        class Ae {
          constructor(VV) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === VV.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = VV.recaptchaKey.split("/")[3], this.emailPasswordEnabled = VV.recaptchaEnforcementState.some((VV => "EMAIL_PASSWORD_PROVIDER" === VV.provider && "OFF" !== VV.enforcementState))
          }
        }

        function Ne(VV) {
          return new Promise(((eV, xV) => {
            const JV = document.createElement("script");
            JV.setAttribute("src", VV), JV.onload = eV, JV.onerror = VV => {
                const eV = FV("internal-error");
                eV.customData = VV, xV(eV)
              }, JV.type = "text/javascript", JV.charset = "UTF-8",
              function() {
                var VV, eV;
                return null !== (eV = null === (VV = document.getElementsByTagName("head")) || void 0 === VV ? void 0 : VV[0]) && void 0 !== eV ? eV : document
              }().appendChild(JV)
          }))
        }

        function Xe(VV) {
          return `__${VV}${Math.floor(1e6*Math.random())}`
        }
        class Me {
          constructor(VV) {
            this.type = "recaptcha-enterprise", this.auth = Re(VV)
          }
          async verify() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function xV(eV, xV, JV) {
              const YV = window.grecaptcha;
              Pe(YV) ? YV.enterprise.ready((() => {
                YV.enterprise.execute(eV, {
                  action: VV
                }).then((VV => {
                  xV(VV)
                })).catch((() => {
                  xV("NO_RECAPTCHA")
                }))
              })) : JV(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((VV, JV) => {
              (async function(VV) {
                if (!eV) {
                  if (null == VV.tenantId && null != VV._agentRecaptchaConfig) return VV._agentRecaptchaConfig.siteKey;
                  if (null != VV.tenantId && void 0 !== VV._tenantRecaptchaConfigs[VV.tenantId]) return VV._tenantRecaptchaConfigs[VV.tenantId].siteKey
                }
                return new Promise((async (eV, xV) => {
                  Fe(VV, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((JV => {
                    if (void 0 !== JV.recaptchaKey) {
                      const xV = new Ae(JV);
                      return null == VV.tenantId ? VV._agentRecaptchaConfig = xV : VV._tenantRecaptchaConfigs[VV.tenantId] = xV, eV(xV.siteKey)
                    }
                    xV(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((VV => {
                    xV(VV)
                  }))
                }))
              })(this.auth).then((YV => {
                if (!eV && Pe(window.grecaptcha)) xV(YV, VV, JV);
                else {
                  if ("undefined" === typeof window) return void JV(new Error("RecaptchaVerifier is only supported in browser"));
                  Ne("https://www.google.com/recaptcha/enterprise.js?render=" + YV).then((() => {
                    xV(YV, VV, JV)
                  })).catch((VV => {
                    JV(VV)
                  }))
                }
              })).catch((VV => {
                JV(VV)
              }))
            }))
          }
        }
        async function ze(VV, eV, xV) {
          let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const YV = new Me(VV);
          let UV;
          try {
            UV = await YV.verify(xV)
          } catch (pV) {
            UV = await YV.verify(xV, !0)
          }
          const yV = Object.assign({}, eV);
          return JV ? Object.assign(yV, {
            captchaResp: UV
          }) : Object.assign(yV, {
            captchaResponse: UV
          }), Object.assign(yV, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(yV, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), yV
        }
        class Ge {
          constructor(VV) {
            this.auth = VV, this.queue = []
          }
          pushCallback(VV, eV) {
            const xV = eV => new Promise(((xV, JV) => {
              try {
                xV(VV(eV))
              } catch (YV) {
                JV(YV)
              }
            }));
            xV.onAbort = eV, this.queue.push(xV);
            const JV = this.queue.length - 1;
            return () => {
              this.queue[JV] = () => Promise.resolve()
            }
          }
          async runMiddleware(VV) {
            if (this.auth.currentUser === VV) return;
            const eV = [];
            try {
              for (const xV of this.queue) await xV(VV), xV.onAbort && eV.push(xV.onAbort)
            } catch (xV) {
              eV.reverse();
              for (const VV of eV) try {
                VV()
              } catch (JV) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === xV || void 0 === xV ? void 0 : xV.message
              })
            }
          }
        }
        class We {
          constructor(VV, eV, xV, JV) {
            this.app = VV, this.heartbeatServiceProvider = eV, this.appCheckServiceProvider = xV, this.config = JV, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new ge(this), this.idTokenSubscription = new ge(this), this.beforeStateQueue = new Ge(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = EV, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = VV.name, this.clientVersion = JV.sdkClientVersion
          }
          _initializeWithPersistence(VV, eV) {
            return eV && (this._popupRedirectResolver = Ue(eV)), this._initializationPromise = this.queue((async () => {
              var xV, JV;
              if (!this._deleted && (this.persistenceManager = await ne.create(this, VV), !this._deleted)) {
                if (null === (xV = this._popupRedirectResolver) || void 0 === xV ? void 0 : xV._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (YV) {}
                await this.initializeCurrentUser(eV), this.lastNotifiedUid = (null === (JV = this.currentUser) || void 0 === JV ? void 0 : JV.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const VV = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || VV ? this.currentUser && VV && this.currentUser.uid === VV.uid ? (this._currentUser._assign(VV), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(VV, !0) : void 0
          }
          async initializeCurrentUser(VV) {
            var eV;
            const xV = await this.assertedPersistence.getCurrentUser();
            let JV = xV,
              YV = !1;
            if (VV && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const xV = null === (eV = this.redirectUser) || void 0 === eV ? void 0 : eV._redirectEventId,
                UV = null === JV || void 0 === JV ? void 0 : JV._redirectEventId,
                yV = await this.tryRedirectSignIn(VV);
              xV && xV !== UV || !(null === yV || void 0 === yV ? void 0 : yV.user) || (JV = yV.user, YV = !0)
            }
            if (!JV) return this.directlySetCurrentUser(null);
            if (!JV._redirectEventId) {
              if (YV) try {
                await this.beforeStateQueue.runMiddleware(JV)
              } catch (UV) {
                JV = xV, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(UV)))
              }
              return JV ? this.reloadAndSetCurrentUserOrClear(JV) : this.directlySetCurrentUser(null)
            }
            return NV(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === JV._redirectEventId ? this.directlySetCurrentUser(JV) : this.reloadAndSetCurrentUserOrClear(JV)
          }
          async tryRedirectSignIn(VV) {
            let eV = null;
            try {
              eV = await this._popupRedirectResolver._completeRedirectFn(this, VV, !0)
            } catch (xV) {
              await this._setRedirectUser(null)
            }
            return eV
          }
          async reloadAndSetCurrentUserOrClear(VV) {
            try {
              await OV(VV)
            } catch (eV) {
              if ("auth/network-request-failed" !== (null === eV || void 0 === eV ? void 0 : eV.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(VV)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const VV = navigator;
              return VV.languages && VV.languages[0] || VV.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(VV) {
            const eV = VV ? (0, JV.L)(VV) : null;
            return eV && NV(eV.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(eV && eV._clone(this))
          }
          async _updateCurrentUser(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return VV && NV(this.tenantId === VV.tenantId, this, "tenant-id-mismatch"), eV || await this.beforeStateQueue.runMiddleware(VV), this.queue((async () => {
              await this.directlySetCurrentUser(VV), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(VV) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(Ue(VV))
            }))
          }
          async initializeRecaptchaConfig() {
            const VV = await Fe(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              eV = new Ae(VV);
            if (null == this.tenantId ? this._agentRecaptchaConfig = eV : this._tenantRecaptchaConfigs[this.tenantId] = eV, eV.emailPasswordEnabled) {
              new Me(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(VV) {
            this._errorFactory = new JV.g("auth", "Firebase", VV())
          }
          onAuthStateChanged(VV, eV, xV) {
            return this.registerStateListener(this.authStateSubscription, VV, eV, xV)
          }
          beforeAuthStateChanged(VV, eV) {
            return this.beforeStateQueue.pushCallback(VV, eV)
          }
          onIdTokenChanged(VV, eV, xV) {
            return this.registerStateListener(this.idTokenSubscription, VV, eV, xV)
          }
          toJSON() {
            var VV;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (VV = this._currentUser) || void 0 === VV ? void 0 : VV.toJSON()
            }
          }
          async _setRedirectUser(VV, eV) {
            const xV = await this.getOrInitRedirectPersistenceManager(eV);
            return null === VV ? xV.removeCurrentUser() : xV.setCurrentUser(VV)
          }
          async getOrInitRedirectPersistenceManager(VV) {
            if (!this.redirectPersistenceManager) {
              const eV = VV && Ue(VV) || this._popupRedirectResolver;
              NV(eV, this, "argument-error"), this.redirectPersistenceManager = await ne.create(this, [Ue(eV._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(VV) {
            var eV, xV;
            return this._isInitialized && await this.queue((async () => {})), (null === (eV = this._currentUser) || void 0 === eV ? void 0 : eV._redirectEventId) === VV ? this._currentUser : (null === (xV = this.redirectUser) || void 0 === xV ? void 0 : xV._redirectEventId) === VV ? this.redirectUser : null
          }
          async _persistUserIfCurrent(VV) {
            if (VV === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(VV)))
          }
          _notifyListenersIfCurrent(VV) {
            VV === this.currentUser && this.notifyAuthListeners()
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
            var VV, eV;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const xV = null !== (eV = null === (VV = this.currentUser) || void 0 === VV ? void 0 : VV.uid) && void 0 !== eV ? eV : null;
            this.lastNotifiedUid !== xV && (this.lastNotifiedUid = xV, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(VV, eV, xV, JV) {
            if (this._deleted) return () => {};
            const YV = "function" === typeof eV ? eV : eV.next.bind(eV),
              UV = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return NV(UV, this, "internal-error"), UV.then((() => YV(this.currentUser))), "function" === typeof eV ? VV.addObserver(eV, xV, JV) : VV.addObserver(eV)
          }
          async directlySetCurrentUser(VV) {
            this.currentUser && this.currentUser !== VV && this._currentUser._stopProactiveRefresh(), VV && this.isProactiveRefreshEnabled && VV._startProactiveRefresh(), this.currentUser = VV, VV ? await this.assertedPersistence.setCurrentUser(VV) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(VV) {
            return this.operations = this.operations.then(VV, VV), this.operations
          }
          get assertedPersistence() {
            return NV(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(VV) {
            VV && !this.frameworks.includes(VV) && (this.frameworks.push(VV), this.frameworks.sort(), this.clientVersion = te(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var VV;
            const eV = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (eV["X-Firebase-gmpid"] = this.app.options.appId);
            const xV = await (null === (VV = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === VV ? void 0 : VV.getHeartbeatsHeader());
            xV && (eV["X-Firebase-Client"] = xV);
            const JV = await this._getAppCheckToken();
            return JV && (eV["X-Firebase-AppCheck"] = JV), eV
          }
          async _getAppCheckToken() {
            var VV;
            const eV = await (null === (VV = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === VV ? void 0 : VV.getToken());
            return (null === eV || void 0 === eV ? void 0 : eV.error) && function(VV) {
              if (jV.logLevel <= yV.d.WARN) {
                for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
                jV.warn(`Auth (${YV.e}): ${VV}`, ...xV)
              }
            }(`Error while retrieving App Check token: ${eV.error}`), null === eV || void 0 === eV ? void 0 : eV.token
          }
        }

        function Re(VV) {
          return (0, JV.L)(VV)
        }
        class ge {
          constructor(VV) {
            this.auth = VV, this.observer = null, this.addObserver = (0, JV.w)((VV => this.observer = VV))
          }
          get next() {
            return NV(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function De(VV, eV) {
          const xV = (0, YV.r)(VV, "auth");
          if (xV.isInitialized()) {
            const VV = xV.getImmediate(),
              YV = xV.getOptions();
            if ((0, JV.x)(YV, null !== eV && void 0 !== eV ? eV : {})) return VV;
            tV(VV, "already-initialized")
          }
          return xV.initialize({
            options: eV
          })
        }

        function ie(VV, eV, xV) {
          const JV = Re(VV);
          NV(JV._canInitEmulator, JV, "emulator-config-failed"), NV(/^https?:\/\//.test(eV), JV, "invalid-emulator-scheme");
          const YV = !!(null === xV || void 0 === xV ? void 0 : xV.disableWarnings),
            UV = Ce(eV),
            {
              host: yV,
              port: pV
            } = function(VV) {
              const eV = Ce(VV),
                xV = /(\/\/)?([^?#/]+)/.exec(VV.substr(eV.length));
              if (!xV) return {
                host: "",
                port: null
              };
              const JV = xV[2].split("@").pop() || "",
                YV = /^(\[[^\]]+\])(:|$)/.exec(JV);
              if (YV) {
                const VV = YV[1];
                return {
                  host: VV,
                  port: ae(JV.substr(VV.length + 1))
                }
              } {
                const [VV, eV] = JV.split(":");
                return {
                  host: VV,
                  port: ae(eV)
                }
              }
            }(eV),
            QV = null === pV ? "" : `:${pV}`;
          JV.config.emulator = {
            url: `${UV}//${yV}${QV}/`
          }, JV.settings.appVerificationDisabledForTesting = !0, JV.emulatorConfig = Object.freeze({
            host: yV,
            port: pV,
            protocol: UV.replace(":", ""),
            options: Object.freeze({
              disableWarnings: YV
            })
          }), YV || function() {
            function VV() {
              const VV = document.createElement("p"),
                eV = VV.style;
              VV.innerText = "Running in emulator mode. Do not use with production credentials.", eV.position = "fixed", eV.width = "100%", eV.backgroundColor = "#ffffff", eV.border = ".1em solid #000000", eV.color = "#b50000", eV.bottom = "0px", eV.left = "0px", eV.margin = "0px", eV.zIndex = "10000", eV.textAlign = "center", VV.classList.add("firebase-emulator-warning"), document.body.appendChild(VV)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", VV) : VV())
          }()
        }

        function Ce(VV) {
          const eV = VV.indexOf(":");
          return eV < 0 ? "" : VV.substr(0, eV + 1)
        }

        function ae(VV) {
          if (!VV) return null;
          const eV = Number(VV);
          return isNaN(eV) ? null : eV
        }
        class oe {
          constructor(VV, eV) {
            this.providerId = VV, this.signInMethod = eV
          }
          toJSON() {
            return XV("not implemented")
          }
          _getIdTokenResponse(VV) {
            return XV("not implemented")
          }
          _linkToIdToken(VV, eV) {
            return XV("not implemented")
          }
          _getReauthenticationResolver(VV) {
            return XV("not implemented")
          }
        }
        async function ce(VV, eV) {
          return oV(VV, "POST", "/v1/accounts:resetPassword", aV(VV, eV))
        }
        async function he(VV, eV) {
          return oV(VV, "POST", "/v1/accounts:update", eV)
        }
        async function le(VV, eV) {
          return hV(VV, "POST", "/v1/accounts:signInWithPassword", aV(VV, eV))
        }
        async function Le(VV, eV) {
          return oV(VV, "POST", "/v1/accounts:sendOobCode", aV(VV, eV))
        }
        async function fe(VV, eV) {
          return Le(VV, eV)
        }
        async function me(VV, eV) {
          return Le(VV, eV)
        }
        class Ke extends oe {
          constructor(VV, eV, xV) {
            let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", xV), this._email = VV, this._password = eV, this._tenantId = JV
          }
          static _fromEmailAndPassword(VV, eV) {
            return new Ke(VV, eV, "password")
          }
          static _fromEmailAndCode(VV, eV) {
            return new Ke(VV, eV, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(VV) {
            const eV = "string" === typeof VV ? JSON.parse(VV) : VV;
            if ((null === eV || void 0 === eV ? void 0 : eV.email) && (null === eV || void 0 === eV ? void 0 : eV.password)) {
              if ("password" === eV.signInMethod) return this._fromEmailAndPassword(eV.email, eV.password);
              if ("emailLink" === eV.signInMethod) return this._fromEmailAndCode(eV.email, eV.password, eV.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(VV) {
            var eV;
            switch (this.signInMethod) {
              case "password":
                const xV = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (eV = VV._getRecaptchaConfig()) || void 0 === eV ? void 0 : eV.emailPasswordEnabled) {
                  const eV = await ze(VV, xV, "signInWithPassword");
                  return le(VV, eV)
                }
                return le(VV, xV).catch((async eV => {
                  if ("auth/missing-recaptcha-token" === eV.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const eV = await ze(VV, xV, "signInWithPassword");
                    return le(VV, eV)
                  }
                  return Promise.reject(eV)
                }));
              case "emailLink":
                return async function(VV, eV) {
                  return hV(VV, "POST", "/v1/accounts:signInWithEmailLink", aV(VV, eV))
                }(VV, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                tV(VV, "internal-error")
            }
          }
          async _linkToIdToken(VV, eV) {
            switch (this.signInMethod) {
              case "password":
                return he(VV, {
                  idToken: eV,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(VV, eV) {
                  return hV(VV, "POST", "/v1/accounts:signInWithEmailLink", aV(VV, eV))
                }(VV, {
                  idToken: eV,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                tV(VV, "internal-error")
            }
          }
          _getReauthenticationResolver(VV) {
            return this._getIdTokenResponse(VV)
          }
        }
        async function He(VV, eV) {
          return hV(VV, "POST", "/v1/accounts:signInWithIdp", aV(VV, eV))
        }
        class ue extends oe {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(VV) {
            const eV = new ue(VV.providerId, VV.signInMethod);
            return VV.idToken || VV.accessToken ? (VV.idToken && (eV.idToken = VV.idToken), VV.accessToken && (eV.accessToken = VV.accessToken), VV.nonce && !VV.pendingToken && (eV.nonce = VV.nonce), VV.pendingToken && (eV.pendingToken = VV.pendingToken)) : VV.oauthToken && VV.oauthTokenSecret ? (eV.accessToken = VV.oauthToken, eV.secret = VV.oauthTokenSecret) : tV("argument-error"), eV
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
          static fromJSON(VV) {
            const eV = "string" === typeof VV ? JSON.parse(VV) : VV,
              {
                providerId: xV,
                signInMethod: JV
              } = eV,
              YV = UV(eV, ["providerId", "signInMethod"]);
            if (!xV || !JV) return null;
            const yV = new ue(xV, JV);
            return yV.idToken = YV.idToken || void 0, yV.accessToken = YV.accessToken || void 0, yV.secret = YV.secret, yV.nonce = YV.nonce, yV.pendingToken = YV.pendingToken || null, yV
          }
          _getIdTokenResponse(VV) {
            return He(VV, this.buildRequest())
          }
          _linkToIdToken(VV, eV) {
            const xV = this.buildRequest();
            return xV.idToken = eV, He(VV, xV)
          }
          _getReauthenticationResolver(VV) {
            const eV = this.buildRequest();
            return eV.autoCreate = !1, He(VV, eV)
          }
          buildRequest() {
            const VV = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) VV.pendingToken = this.pendingToken;
            else {
              const eV = {};
              this.idToken && (eV.id_token = this.idToken), this.accessToken && (eV.access_token = this.accessToken), this.secret && (eV.oauth_token_secret = this.secret), eV.providerId = this.providerId, this.nonce && !this.pendingToken && (eV.nonce = this.nonce), VV.postBody = (0, JV.hb)(eV)
            }
            return VV
          }
        }
        const se = {
          USER_NOT_FOUND: "user-not-found"
        };
        class Se extends oe {
          constructor(VV) {
            super("phone", "phone"), this.params = VV
          }
          static _fromVerification(VV, eV) {
            return new Se({
              verificationId: VV,
              verificationCode: eV
            })
          }
          static _fromTokenResponse(VV, eV) {
            return new Se({
              phoneNumber: VV,
              temporaryProof: eV
            })
          }
          _getIdTokenResponse(VV) {
            return async function(VV, eV) {
              return hV(VV, "POST", "/v1/accounts:signInWithPhoneNumber", aV(VV, eV))
            }(VV, this._makeVerificationRequest())
          }
          _linkToIdToken(VV, eV) {
            return async function(VV, eV) {
              const xV = await hV(VV, "POST", "/v1/accounts:signInWithPhoneNumber", aV(VV, eV));
              if (xV.temporaryProof) throw fV(VV, "account-exists-with-different-credential", xV);
              return xV
            }(VV, Object.assign({
              idToken: eV
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(VV) {
            return async function(VV, eV) {
              return hV(VV, "POST", "/v1/accounts:signInWithPhoneNumber", aV(VV, Object.assign(Object.assign({}, eV), {
                operation: "REAUTH"
              })), se)
            }(VV, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: VV,
              phoneNumber: eV,
              verificationId: xV,
              verificationCode: JV
            } = this.params;
            return VV && eV ? {
              temporaryProof: VV,
              phoneNumber: eV
            } : {
              sessionInfo: xV,
              code: JV
            }
          }
          toJSON() {
            const VV = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (VV.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (VV.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (VV.verificationCode = this.params.verificationCode), this.params.verificationId && (VV.verificationId = this.params.verificationId), VV
          }
          static fromJSON(VV) {
            "string" === typeof VV && (VV = JSON.parse(VV));
            const {
              verificationId: eV,
              verificationCode: xV,
              phoneNumber: JV,
              temporaryProof: YV
            } = VV;
            return xV || eV || JV || YV ? new Se({
              verificationId: eV,
              verificationCode: xV,
              phoneNumber: JV,
              temporaryProof: YV
            }) : null
          }
        }
        class Ie {
          constructor(VV) {
            var eV, xV, YV, UV, yV, pV;
            const QV = (0, JV.db)((0, JV.z)(VV)),
              nV = null !== (eV = QV.apiKey) && void 0 !== eV ? eV : null,
              wV = null !== (xV = QV.oobCode) && void 0 !== xV ? xV : null,
              ZV = function(VV) {
                switch (VV) {
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
              }(null !== (YV = QV.mode) && void 0 !== YV ? YV : null);
            NV(nV && wV && ZV, "argument-error"), this.apiKey = nV, this.operation = ZV, this.code = wV, this.continueUrl = null !== (UV = QV.continueUrl) && void 0 !== UV ? UV : null, this.languageCode = null !== (yV = QV.languageCode) && void 0 !== yV ? yV : null, this.tenantId = null !== (pV = QV.tenantId) && void 0 !== pV ? pV : null
          }
          static parseLink(VV) {
            const eV = function(VV) {
              const eV = (0, JV.db)((0, JV.z)(VV)).link,
                xV = eV ? (0, JV.db)((0, JV.z)(eV)).deep_link_id : null,
                YV = (0, JV.db)((0, JV.z)(VV)).deep_link_id;
              return (YV ? (0, JV.db)((0, JV.z)(YV)).link : null) || YV || xV || eV || VV
            }(VV);
            try {
              return new Ie(eV)
            } catch (xV) {
              return null
            }
          }
        }

        function de(VV) {
          return Ie.parseLink(VV)
        }
        class Oe {
          constructor() {
            this.providerId = Oe.PROVIDER_ID
          }
          static credential(VV, eV) {
            return Ke._fromEmailAndPassword(VV, eV)
          }
          static credentialWithLink(VV, eV) {
            const xV = Ie.parseLink(eV);
            return NV(xV, "argument-error"), Ke._fromEmailAndCode(VV, xV.code, xV.tenantId)
          }
        }
        Oe.PROVIDER_ID = "password", Oe.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", Oe.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class Vx {
          constructor(VV) {
            this.providerId = VV, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(VV) {
            this.defaultLanguageCode = VV
          }
          setCustomParameters(VV) {
            return this.customParameters = VV, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class ex extends Vx {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(VV) {
            return this.scopes.includes(VV) || this.scopes.push(VV), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class xx extends ex {
          static credentialFromJSON(VV) {
            const eV = "string" === typeof VV ? JSON.parse(VV) : VV;
            return NV("providerId" in eV && "signInMethod" in eV, "argument-error"), ue._fromParams(eV)
          }
          credential(VV) {
            return this._credential(Object.assign(Object.assign({}, VV), {
              nonce: VV.rawNonce
            }))
          }
          _credential(VV) {
            return NV(VV.idToken || VV.accessToken, "argument-error"), ue._fromParams(Object.assign(Object.assign({}, VV), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(VV) {
            return xx.oauthCredentialFromTaggedObject(VV)
          }
          static credentialFromError(VV) {
            return xx.oauthCredentialFromTaggedObject(VV.customData || {})
          }
          static oauthCredentialFromTaggedObject(VV) {
            let {
              _tokenResponse: eV
            } = VV;
            if (!eV) return null;
            const {
              oauthIdToken: xV,
              oauthAccessToken: JV,
              oauthTokenSecret: YV,
              pendingToken: UV,
              nonce: yV,
              providerId: pV
            } = eV;
            if (!JV && !YV && !xV && !UV) return null;
            if (!pV) return null;
            try {
              return new xx(pV)._credential({
                idToken: xV,
                accessToken: JV,
                nonce: yV,
                pendingToken: UV
              })
            } catch (QV) {
              return null
            }
          }
        }
        class Jx extends ex {
          constructor() {
            super("facebook.com")
          }
          static credential(VV) {
            return ue._fromParams({
              providerId: Jx.PROVIDER_ID,
              signInMethod: Jx.FACEBOOK_SIGN_IN_METHOD,
              accessToken: VV
            })
          }
          static credentialFromResult(VV) {
            return Jx.credentialFromTaggedObject(VV)
          }
          static credentialFromError(VV) {
            return Jx.credentialFromTaggedObject(VV.customData || {})
          }
          static credentialFromTaggedObject(VV) {
            let {
              _tokenResponse: eV
            } = VV;
            if (!eV || !("oauthAccessToken" in eV)) return null;
            if (!eV.oauthAccessToken) return null;
            try {
              return Jx.credential(eV.oauthAccessToken)
            } catch (xV) {
              return null
            }
          }
        }
        Jx.FACEBOOK_SIGN_IN_METHOD = "facebook.com", Jx.PROVIDER_ID = "facebook.com";
        class Yx extends ex {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(VV, eV) {
            return ue._fromParams({
              providerId: Yx.PROVIDER_ID,
              signInMethod: Yx.GOOGLE_SIGN_IN_METHOD,
              idToken: VV,
              accessToken: eV
            })
          }
          static credentialFromResult(VV) {
            return Yx.credentialFromTaggedObject(VV)
          }
          static credentialFromError(VV) {
            return Yx.credentialFromTaggedObject(VV.customData || {})
          }
          static credentialFromTaggedObject(VV) {
            let {
              _tokenResponse: eV
            } = VV;
            if (!eV) return null;
            const {
              oauthIdToken: xV,
              oauthAccessToken: JV
            } = eV;
            if (!xV && !JV) return null;
            try {
              return Yx.credential(xV, JV)
            } catch (YV) {
              return null
            }
          }
        }
        Yx.GOOGLE_SIGN_IN_METHOD = "google.com", Yx.PROVIDER_ID = "google.com";
        class Ux extends ex {
          constructor() {
            super("github.com")
          }
          static credential(VV) {
            return ue._fromParams({
              providerId: Ux.PROVIDER_ID,
              signInMethod: Ux.GITHUB_SIGN_IN_METHOD,
              accessToken: VV
            })
          }
          static credentialFromResult(VV) {
            return Ux.credentialFromTaggedObject(VV)
          }
          static credentialFromError(VV) {
            return Ux.credentialFromTaggedObject(VV.customData || {})
          }
          static credentialFromTaggedObject(VV) {
            let {
              _tokenResponse: eV
            } = VV;
            if (!eV || !("oauthAccessToken" in eV)) return null;
            if (!eV.oauthAccessToken) return null;
            try {
              return Ux.credential(eV.oauthAccessToken)
            } catch (xV) {
              return null
            }
          }
        }
        Ux.GITHUB_SIGN_IN_METHOD = "github.com", Ux.PROVIDER_ID = "github.com";
        class yx extends oe {
          constructor(VV, eV) {
            super(VV, VV), this.pendingToken = eV
          }
          _getIdTokenResponse(VV) {
            return He(VV, this.buildRequest())
          }
          _linkToIdToken(VV, eV) {
            const xV = this.buildRequest();
            return xV.idToken = eV, He(VV, xV)
          }
          _getReauthenticationResolver(VV) {
            const eV = this.buildRequest();
            return eV.autoCreate = !1, He(VV, eV)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(VV) {
            const eV = "string" === typeof VV ? JSON.parse(VV) : VV,
              {
                providerId: xV,
                signInMethod: JV,
                pendingToken: YV
              } = eV;
            return xV && JV && YV && xV === JV ? new yx(xV, YV) : null
          }
          static _create(VV, eV) {
            return new yx(VV, eV)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class px extends Vx {
          constructor(VV) {
            NV(VV.startsWith("saml."), "argument-error"), super(VV)
          }
          static credentialFromResult(VV) {
            return px.samlCredentialFromTaggedObject(VV)
          }
          static credentialFromError(VV) {
            return px.samlCredentialFromTaggedObject(VV.customData || {})
          }
          static credentialFromJSON(VV) {
            const eV = yx.fromJSON(VV);
            return NV(eV, "argument-error"), eV
          }
          static samlCredentialFromTaggedObject(VV) {
            let {
              _tokenResponse: eV
            } = VV;
            if (!eV) return null;
            const {
              pendingToken: xV,
              providerId: JV
            } = eV;
            if (!xV || !JV) return null;
            try {
              return yx._create(JV, xV)
            } catch (YV) {
              return null
            }
          }
        }
        class Qx extends ex {
          constructor() {
            super("twitter.com")
          }
          static credential(VV, eV) {
            return ue._fromParams({
              providerId: Qx.PROVIDER_ID,
              signInMethod: Qx.TWITTER_SIGN_IN_METHOD,
              oauthToken: VV,
              oauthTokenSecret: eV
            })
          }
          static credentialFromResult(VV) {
            return Qx.credentialFromTaggedObject(VV)
          }
          static credentialFromError(VV) {
            return Qx.credentialFromTaggedObject(VV.customData || {})
          }
          static credentialFromTaggedObject(VV) {
            let {
              _tokenResponse: eV
            } = VV;
            if (!eV) return null;
            const {
              oauthAccessToken: xV,
              oauthTokenSecret: JV
            } = eV;
            if (!xV || !JV) return null;
            try {
              return Qx.credential(xV, JV)
            } catch (YV) {
              return null
            }
          }
        }
        async function nx(VV, eV) {
          return hV(VV, "POST", "/v1/accounts:signUp", aV(VV, eV))
        }
        Qx.TWITTER_SIGN_IN_METHOD = "twitter.com", Qx.PROVIDER_ID = "twitter.com";
        class wx {
          constructor(VV) {
            this.user = VV.user, this.providerId = VV.providerId, this._tokenResponse = VV._tokenResponse, this.operationType = VV.operationType
          }
          static async _fromIdTokenResponse(VV, eV, xV) {
            let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const YV = await Je._fromIdTokenResponse(VV, xV, JV),
              UV = Zx(xV);
            return new wx({
              user: YV,
              providerId: UV,
              _tokenResponse: xV,
              operationType: eV
            })
          }
          static async _forOperation(VV, eV, xV) {
            await VV._updateTokensIfNecessary(xV, !0);
            const JV = Zx(xV);
            return new wx({
              user: VV,
              providerId: JV,
              _tokenResponse: xV,
              operationType: eV
            })
          }
        }

        function Zx(VV) {
          return VV.providerId ? VV.providerId : "phoneNumber" in VV ? "phone" : null
        }
        async function vx(VV) {
          var eV;
          const xV = Re(VV);
          if (await xV._initializationPromise, null === (eV = xV.currentUser) || void 0 === eV ? void 0 : eV.isAnonymous) return new wx({
            user: xV.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const JV = await nx(xV, {
              returnSecureToken: !0
            }),
            YV = await wx._fromIdTokenResponse(xV, "signIn", JV, !0);
          return await xV._updateCurrentUser(YV.user), YV
        }
        class rx extends JV.j {
          constructor(VV, eV, xV, JV) {
            var YV;
            super(eV.code, eV.message), this.operationType = xV, this.user = JV, Object.setPrototypeOf(this, rx.prototype), this.customData = {
              appName: VV.name,
              tenantId: null !== (YV = VV.tenantId) && void 0 !== YV ? YV : void 0,
              _serverResponse: eV.customData._serverResponse,
              operationType: xV
            }
          }
          static _fromErrorAndOperation(VV, eV, xV, JV) {
            return new rx(VV, eV, xV, JV)
          }
        }

        function kx(VV, eV, xV, JV) {
          return ("reauthenticate" === eV ? xV._getReauthenticationResolver(VV) : xV._getIdTokenResponse(VV)).catch((xV => {
            if ("auth/multi-factor-auth-required" === xV.code) throw rx._fromErrorAndOperation(VV, xV, eV, JV);
            throw xV
          }))
        }

        function bx(VV) {
          return new Set(VV.map((VV => {
            let {
              providerId: eV
            } = VV;
            return eV
          })).filter((VV => !!VV)))
        }
        async function Ex(VV, eV) {
          const xV = (0, JV.L)(VV);
          await jx(!0, xV, eV);
          const {
            providerUserInfo: YV
          } = await async function(VV, eV) {
            return oV(VV, "POST", "/v1/accounts:update", eV)
          }(xV.auth, {
            idToken: await xV.getIdToken(),
            deleteProvider: [eV]
          }), UV = bx(YV || []);
          return xV.providerData = xV.providerData.filter((VV => UV.has(VV.providerId))), UV.has("phone") || (xV.phoneNumber = null), await xV.auth._persistUserIfCurrent(xV), xV
        }
        async function Bx(VV, eV) {
          let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const JV = await SV(VV, eV._linkToIdToken(VV.auth, await VV.getIdToken()), xV);
          return wx._forOperation(VV, "link", JV)
        }
        async function jx(VV, eV, xV) {
          await OV(eV);
          const JV = !1 === VV ? "provider-already-linked" : "no-such-provider";
          NV(bx(eV.providerData).has(xV) === VV, eV.auth, JV)
        }
        async function qx(VV, eV) {
          let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: JV
          } = VV, YV = "reauthenticate";
          try {
            const UV = await SV(VV, kx(JV, YV, eV, VV), xV);
            NV(UV.idToken, JV, "internal-error");
            const yV = sV(UV.idToken);
            NV(yV, JV, "internal-error");
            const {
              sub: pV
            } = yV;
            return NV(VV.uid === pV, JV, "user-mismatch"), wx._forOperation(VV, YV, UV)
          } catch (UV) {
            throw "auth/user-not-found" === (null === UV || void 0 === UV ? void 0 : UV.code) && tV(JV, "user-mismatch"), UV
          }
        }
        async function tx(VV, eV) {
          let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const JV = "signIn",
            YV = await kx(VV, JV, eV),
            UV = await wx._fromIdTokenResponse(VV, JV, YV);
          return xV || await VV._updateCurrentUser(UV.user), UV
        }
        async function Fx(VV, eV) {
          return tx(Re(VV), eV)
        }
        async function Tx(VV, eV) {
          const xV = (0, JV.L)(VV);
          return await jx(!1, xV, eV.providerId), Bx(xV, eV)
        }
        async function Px(VV, eV) {
          return qx((0, JV.L)(VV), eV)
        }
        async function Ax(VV, eV) {
          const xV = Re(VV),
            JV = await async function(VV, eV) {
              return hV(VV, "POST", "/v1/accounts:signInWithCustomToken", aV(VV, eV))
            }(xV, {
              token: eV,
              returnSecureToken: !0
            }), YV = await wx._fromIdTokenResponse(xV, "signIn", JV);
          return await xV._updateCurrentUser(YV.user), YV
        }
        class Nx {
          constructor(VV, eV) {
            this.factorId = VV, this.uid = eV.mfaEnrollmentId, this.enrollmentTime = new Date(eV.enrolledAt).toUTCString(), this.displayName = eV.displayName
          }
          static _fromServerResponse(VV, eV) {
            return "phoneInfo" in eV ? Xx._fromServerResponse(VV, eV) : "totpInfo" in eV ? Mx._fromServerResponse(VV, eV) : tV(VV, "internal-error")
          }
        }
        class Xx extends Nx {
          constructor(VV) {
            super("phone", VV), this.phoneNumber = VV.phoneInfo
          }
          static _fromServerResponse(VV, eV) {
            return new Xx(eV)
          }
        }
        class Mx extends Nx {
          constructor(VV) {
            super("totp", VV)
          }
          static _fromServerResponse(VV, eV) {
            return new Mx(eV)
          }
        }

        function zx(VV, eV, xV) {
          var JV;
          NV((null === (JV = xV.url) || void 0 === JV ? void 0 : JV.length) > 0, VV, "invalid-continue-uri"), NV("undefined" === typeof xV.dynamicLinkDomain || xV.dynamicLinkDomain.length > 0, VV, "invalid-dynamic-link-domain"), eV.continueUrl = xV.url, eV.dynamicLinkDomain = xV.dynamicLinkDomain, eV.canHandleCodeInApp = xV.handleCodeInApp, xV.iOS && (NV(xV.iOS.bundleId.length > 0, VV, "missing-ios-bundle-id"), eV.iOSBundleId = xV.iOS.bundleId), xV.android && (NV(xV.android.packageName.length > 0, VV, "missing-android-pkg-name"), eV.androidInstallApp = xV.android.installApp, eV.androidMinimumVersionCode = xV.android.minimumVersion, eV.androidPackageName = xV.android.packageName)
        }
        async function Gx(VV, eV, xV) {
          var JV;
          const YV = Re(VV),
            UV = {
              requestType: "PASSWORD_RESET",
              email: eV,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (JV = YV._getRecaptchaConfig()) || void 0 === JV ? void 0 : JV.emailPasswordEnabled) {
            const VV = await ze(YV, UV, "getOobCode", !0);
            xV && zx(YV, VV, xV), await fe(YV, VV)
          } else xV && zx(YV, UV, xV), await fe(YV, UV).catch((async VV => {
            if ("auth/missing-recaptcha-token" !== VV.code) return Promise.reject(VV);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const VV = await ze(YV, UV, "getOobCode", !0);
              xV && zx(YV, VV, xV), await fe(YV, VV)
            }
          }))
        }
        async function Wx(VV, eV, xV) {
          await ce((0, JV.L)(VV), {
            oobCode: eV,
            newPassword: xV
          })
        }
        async function Rx(VV, eV) {
          await async function(VV, eV) {
            return oV(VV, "POST", "/v1/accounts:update", aV(VV, eV))
          }((0, JV.L)(VV), {
            oobCode: eV
          })
        }
        async function gx(VV, eV) {
          const xV = (0, JV.L)(VV),
            YV = await ce(xV, {
              oobCode: eV
            }),
            UV = YV.requestType;
          switch (NV(UV, xV, "internal-error"), UV) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              NV(YV.newEmail, xV, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              NV(YV.mfaInfo, xV, "internal-error");
            default:
              NV(YV.email, xV, "internal-error")
          }
          let yV = null;
          return YV.mfaInfo && (yV = Nx._fromServerResponse(Re(xV), YV.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === YV.requestType ? YV.newEmail : YV.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === YV.requestType ? YV.email : YV.newEmail) || null,
              multiFactorInfo: yV
            },
            operation: UV
          }
        }
        async function Dx(VV, eV) {
          const {
            data: xV
          } = await gx((0, JV.L)(VV), eV);
          return xV.email
        }
        async function ix(VV, eV, xV) {
          var JV;
          const YV = Re(VV),
            UV = {
              returnSecureToken: !0,
              email: eV,
              password: xV,
              clientType: "CLIENT_TYPE_WEB"
            };
          let yV;
          if (null === (JV = YV._getRecaptchaConfig()) || void 0 === JV ? void 0 : JV.emailPasswordEnabled) {
            const VV = await ze(YV, UV, "signUpPassword");
            yV = nx(YV, VV)
          } else yV = nx(YV, UV).catch((async VV => {
            if ("auth/missing-recaptcha-token" === VV.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const VV = await ze(YV, UV, "signUpPassword");
              return nx(YV, VV)
            }
            return Promise.reject(VV)
          }));
          const pV = await yV.catch((VV => Promise.reject(VV))),
            QV = await wx._fromIdTokenResponse(YV, "signIn", pV);
          return await YV._updateCurrentUser(QV.user), QV
        }

        function Cx(VV, eV, xV) {
          return Fx((0, JV.L)(VV), Oe.credential(eV, xV))
        }
        async function ax(VV, eV, xV) {
          var JV;
          const YV = Re(VV),
            UV = {
              requestType: "EMAIL_SIGNIN",
              email: eV,
              clientType: "CLIENT_TYPE_WEB"
            };

          function yV(VV, eV) {
            NV(eV.handleCodeInApp, YV, "argument-error"), eV && zx(YV, VV, eV)
          }
          if (null === (JV = YV._getRecaptchaConfig()) || void 0 === JV ? void 0 : JV.emailPasswordEnabled) {
            const VV = await ze(YV, UV, "getOobCode", !0);
            yV(VV, xV), await me(YV, VV)
          } else yV(UV, xV), await me(YV, UV).catch((async VV => {
            if ("auth/missing-recaptcha-token" !== VV.code) return Promise.reject(VV);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const VV = await ze(YV, UV, "getOobCode", !0);
              yV(VV, xV), await me(YV, VV)
            }
          }))
        }

        function ox(VV, eV) {
          const xV = Ie.parseLink(eV);
          return "EMAIL_SIGNIN" === (null === xV || void 0 === xV ? void 0 : xV.operation)
        }
        async function cx(VV, eV, xV) {
          const YV = (0, JV.L)(VV),
            UV = Oe.credentialWithLink(eV, xV || zV());
          return NV(UV._tenantId === (YV.tenantId || null), YV, "tenant-id-mismatch"), Fx(YV, UV)
        }
        async function hx(VV, eV) {
          const xV = {
              identifier: eV,
              continueUri: GV() ? zV() : "http://localhost"
            },
            {
              signinMethods: YV
            } = await async function(VV, eV) {
              return oV(VV, "POST", "/v1/accounts:createAuthUri", aV(VV, eV))
            }((0, JV.L)(VV), xV);
          return YV || []
        }
        async function lx(VV, eV) {
          const xV = (0, JV.L)(VV),
            YV = {
              requestType: "VERIFY_EMAIL",
              idToken: await VV.getIdToken()
            };
          eV && zx(xV.auth, YV, eV);
          const {
            email: UV
          } = await async function(VV, eV) {
            return Le(VV, eV)
          }(xV.auth, YV);
          UV !== VV.email && await VV.reload()
        }
        async function Lx(VV, eV, xV) {
          const YV = (0, JV.L)(VV),
            UV = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await VV.getIdToken(),
              newEmail: eV
            };
          xV && zx(YV.auth, UV, xV);
          const {
            email: yV
          } = await async function(VV, eV) {
            return Le(VV, eV)
          }(YV.auth, UV);
          yV !== VV.email && await VV.reload()
        }
        async function fx(VV, eV) {
          let {
            displayName: xV,
            photoURL: YV
          } = eV;
          if (void 0 === xV && void 0 === YV) return;
          const UV = (0, JV.L)(VV),
            yV = {
              idToken: await UV.getIdToken(),
              displayName: xV,
              photoUrl: YV,
              returnSecureToken: !0
            },
            pV = await SV(UV, async function(VV, eV) {
              return oV(VV, "POST", "/v1/accounts:update", eV)
            }(UV.auth, yV));
          UV.displayName = pV.displayName || null, UV.photoURL = pV.photoUrl || null;
          const QV = UV.providerData.find((VV => {
            let {
              providerId: eV
            } = VV;
            return "password" === eV
          }));
          QV && (QV.displayName = UV.displayName, QV.photoURL = UV.photoURL), await UV._updateTokensIfNecessary(pV)
        }

        function mx(VV, eV) {
          return Hx((0, JV.L)(VV), eV, null)
        }

        function Kx(VV, eV) {
          return Hx((0, JV.L)(VV), null, eV)
        }
        async function Hx(VV, eV, xV) {
          const {
            auth: JV
          } = VV, YV = {
            idToken: await VV.getIdToken(),
            returnSecureToken: !0
          };
          eV && (YV.email = eV), xV && (YV.password = xV);
          const UV = await SV(VV, he(JV, YV));
          await VV._updateTokensIfNecessary(UV, !0)
        }
        class ux {
          constructor(VV, eV) {
            let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = VV, this.providerId = eV, this.profile = xV
          }
        }
        class sx extends ux {
          constructor(VV, eV, xV, JV) {
            super(VV, eV, xV), this.username = JV
          }
        }
        class Sx extends ux {
          constructor(VV, eV) {
            super(VV, "facebook.com", eV)
          }
        }
        class Ix extends sx {
          constructor(VV, eV) {
            super(VV, "github.com", eV, "string" === typeof(null === eV || void 0 === eV ? void 0 : eV.login) ? null === eV || void 0 === eV ? void 0 : eV.login : null)
          }
        }
        class dx extends ux {
          constructor(VV, eV) {
            super(VV, "google.com", eV)
          }
        }
        class Ox extends sx {
          constructor(VV, eV, xV) {
            super(VV, "twitter.com", eV, xV)
          }
        }

        function VJ(VV) {
          const {
            user: eV,
            _tokenResponse: xV
          } = VV;
          return eV.isAnonymous && !xV ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(VV) {
            var eV, xV;
            if (!VV) return null;
            const {
              providerId: JV
            } = VV, YV = VV.rawUserInfo ? JSON.parse(VV.rawUserInfo) : {}, UV = VV.isNewUser || "identitytoolkit#SignupNewUserResponse" === VV.kind;
            if (!JV && (null === VV || void 0 === VV ? void 0 : VV.idToken)) {
              const JV = null === (xV = null === (eV = sV(VV.idToken)) || void 0 === eV ? void 0 : eV.firebase) || void 0 === xV ? void 0 : xV.sign_in_provider;
              if (JV) return new ux(UV, "anonymous" !== JV && "custom" !== JV ? JV : null)
            }
            if (!JV) return null;
            switch (JV) {
              case "facebook.com":
                return new Sx(UV, YV);
              case "github.com":
                return new Ix(UV, YV);
              case "google.com":
                return new dx(UV, YV);
              case "twitter.com":
                return new Ox(UV, YV, VV.screenName || null);
              case "custom":
              case "anonymous":
                return new ux(UV, null);
              default:
                return new ux(UV, JV, YV)
            }
          }(xV)
        }

        function eJ(VV, eV) {
          return (0, JV.L)(VV).setPersistence(eV)
        }

        function xJ(VV) {
          return Re(VV).initializeRecaptchaConfig()
        }

        function JJ(VV, eV, xV, YV) {
          return (0, JV.L)(VV).onIdTokenChanged(eV, xV, YV)
        }

        function YJ(VV, eV, xV) {
          return (0, JV.L)(VV).beforeAuthStateChanged(eV, xV)
        }

        function UJ(VV, eV, xV, YV) {
          return (0, JV.L)(VV).onAuthStateChanged(eV, xV, YV)
        }

        function yJ(VV) {
          (0, JV.L)(VV).useDeviceLanguage()
        }

        function pJ(VV, eV) {
          return (0, JV.L)(VV).updateCurrentUser(eV)
        }

        function QJ(VV) {
          return (0, JV.L)(VV).signOut()
        }
        async function nJ(VV) {
          return (0, JV.L)(VV).delete()
        }
        class wJ {
          constructor(VV, eV, xV) {
            this.type = VV, this.credential = eV, this.auth = xV
          }
          static _fromIdtoken(VV, eV) {
            return new wJ("enroll", VV, eV)
          }
          static _fromMfaPendingCredential(VV) {
            return new wJ("signin", VV)
          }
          toJSON() {
            const VV = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [VV]: this.credential
              }
            }
          }
          static fromJSON(VV) {
            var eV, xV;
            if (null === VV || void 0 === VV ? void 0 : VV.multiFactorSession) {
              if (null === (eV = VV.multiFactorSession) || void 0 === eV ? void 0 : eV.pendingCredential) return wJ._fromMfaPendingCredential(VV.multiFactorSession.pendingCredential);
              if (null === (xV = VV.multiFactorSession) || void 0 === xV ? void 0 : xV.idToken) return wJ._fromIdtoken(VV.multiFactorSession.idToken)
            }
            return null
          }
        }
        class ZJ {
          constructor(VV, eV, xV) {
            this.session = VV, this.hints = eV, this.signInResolver = xV
          }
          static _fromError(VV, eV) {
            const xV = Re(VV),
              JV = eV.customData._serverResponse,
              YV = (JV.mfaInfo || []).map((VV => Nx._fromServerResponse(xV, VV)));
            NV(JV.mfaPendingCredential, xV, "internal-error");
            const UV = wJ._fromMfaPendingCredential(JV.mfaPendingCredential);
            return new ZJ(UV, YV, (async VV => {
              const YV = await VV._process(xV, UV);
              delete JV.mfaInfo, delete JV.mfaPendingCredential;
              const yV = Object.assign(Object.assign({}, JV), {
                idToken: YV.idToken,
                refreshToken: YV.refreshToken
              });
              switch (eV.operationType) {
                case "signIn":
                  const VV = await wx._fromIdTokenResponse(xV, eV.operationType, yV);
                  return await xV._updateCurrentUser(VV.user), VV;
                case "reauthenticate":
                  return NV(eV.user, xV, "internal-error"), wx._forOperation(eV.user, eV.operationType, yV);
                default:
                  tV(xV, "internal-error")
              }
            }))
          }
          async resolveSignIn(VV) {
            const eV = VV;
            return this.signInResolver(eV)
          }
        }

        function vJ(VV, eV) {
          var xV;
          const YV = (0, JV.L)(VV),
            UV = eV;
          return NV(eV.customData.operationType, YV, "argument-error"), NV(null === (xV = UV.customData._serverResponse) || void 0 === xV ? void 0 : xV.mfaPendingCredential, YV, "argument-error"), ZJ._fromError(YV, UV)
        }
        class rJ {
          constructor(VV) {
            this.user = VV, this.enrolledFactors = [], VV._onReload((eV => {
              eV.mfaInfo && (this.enrolledFactors = eV.mfaInfo.map((eV => Nx._fromServerResponse(VV.auth, eV))))
            }))
          }
          static _fromUser(VV) {
            return new rJ(VV)
          }
          async getSession() {
            return wJ._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(VV, eV) {
            const xV = VV,
              JV = await this.getSession(),
              YV = await SV(this.user, xV._process(this.user.auth, JV, eV));
            return await this.user._updateTokensIfNecessary(YV), this.user.reload()
          }
          async unenroll(VV) {
            const eV = "string" === typeof VV ? VV : VV.uid,
              xV = await this.user.getIdToken();
            try {
              const VV = await SV(this.user, (JV = this.user.auth, YV = {
                idToken: xV,
                mfaEnrollmentId: eV
              }, oV(JV, "POST", "/v2/accounts/mfaEnrollment:withdraw", aV(JV, YV))));
              this.enrolledFactors = this.enrolledFactors.filter((VV => {
                let {
                  uid: xV
                } = VV;
                return xV !== eV
              })), await this.user._updateTokensIfNecessary(VV), await this.user.reload()
            } catch (UV) {
              throw UV
            }
            var JV, YV
          }
        }
        const kJ = new WeakMap;

        function bJ(VV) {
          const eV = (0, JV.L)(VV);
          return kJ.has(eV) || kJ.set(eV, rJ._fromUser(eV)), kJ.get(eV)
        }
        const EJ = "__sak";
        class BJ {
          constructor(VV, eV) {
            this.storageRetriever = VV, this.type = eV
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(EJ, "1"), this.storage.removeItem(EJ), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (VV) {
              return Promise.resolve(!1)
            }
          }
          _set(VV, eV) {
            return this.storage.setItem(VV, JSON.stringify(eV)), Promise.resolve()
          }
          _get(VV) {
            const eV = this.storage.getItem(VV);
            return Promise.resolve(eV ? JSON.parse(eV) : null)
          }
          _remove(VV) {
            return this.storage.removeItem(VV), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class jJ extends BJ {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (VV, eV) => this.onStorageEvent(VV, eV), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const VV = (0, JV.P)();
              return ve(VV) || je(VV)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (VV) {
                return !1
              }
            }(), this.fallbackToPolling = qe(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(VV) {
            for (const eV of Object.keys(this.listeners)) {
              const xV = this.storage.getItem(eV),
                JV = this.localCache[eV];
              xV !== JV && VV(eV, JV, xV)
            }
          }
          onStorageEvent(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!VV.key) return void this.forAllChangedKeys(((VV, eV, xV) => {
              this.notifyListeners(VV, xV)
            }));
            const xV = VV.key;
            if (eV ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const JV = this.storage.getItem(xV);
              if (VV.newValue !== JV) null !== VV.newValue ? this.storage.setItem(xV, VV.newValue) : this.storage.removeItem(xV);
              else if (this.localCache[xV] === VV.newValue && !eV) return
            }
            const YV = () => {
                const VV = this.storage.getItem(xV);
                (eV || this.localCache[xV] !== VV) && this.notifyListeners(xV, VV)
              },
              UV = this.storage.getItem(xV);
            (0, JV.W)() && 10 === document.documentMode && UV !== VV.newValue && VV.newValue !== VV.oldValue ? setTimeout(YV, 10) : YV()
          }
          notifyListeners(VV, eV) {
            this.localCache[VV] = eV;
            const xV = this.listeners[VV];
            if (xV)
              for (const JV of Array.from(xV)) JV(eV ? JSON.parse(eV) : eV)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((VV, eV, xV) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: VV,
                  oldValue: eV,
                  newValue: xV
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
          _addListener(VV, eV) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[VV] || (this.listeners[VV] = new Set, this.localCache[VV] = this.storage.getItem(VV)), this.listeners[VV].add(eV)
          }
          _removeListener(VV, eV) {
            this.listeners[VV] && (this.listeners[VV].delete(eV), 0 === this.listeners[VV].size && delete this.listeners[VV]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(VV, eV) {
            await super._set(VV, eV), this.localCache[VV] = JSON.stringify(eV)
          }
          async _get(VV) {
            const eV = await super._get(VV);
            return this.localCache[VV] = JSON.stringify(eV), eV
          }
          async _remove(VV) {
            await super._remove(VV), delete this.localCache[VV]
          }
        }
        jJ.type = "LOCAL";
        const qJ = jJ;
        class tJ extends BJ {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(VV, eV) {}
          _removeListener(VV, eV) {}
        }
        tJ.type = "SESSION";
        const FJ = tJ;
        class TJ {
          constructor(VV) {
            this.eventTarget = VV, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(VV) {
            const eV = this.receivers.find((eV => eV.isListeningto(VV)));
            if (eV) return eV;
            const xV = new TJ(VV);
            return this.receivers.push(xV), xV
          }
          isListeningto(VV) {
            return this.eventTarget === VV
          }
          async handleEvent(VV) {
            const eV = VV,
              {
                eventId: xV,
                eventType: JV,
                data: YV
              } = eV.data,
              UV = this.handlersMap[JV];
            if (!(null === UV || void 0 === UV ? void 0 : UV.size)) return;
            eV.ports[0].postMessage({
              status: "ack",
              eventId: xV,
              eventType: JV
            });
            const yV = Array.from(UV).map((async VV => VV(eV.origin, YV))),
              pV = await
            function(VV) {
              return Promise.all(VV.map((async VV => {
                try {
                  return {
                    fulfilled: !0,
                    value: await VV
                  }
                } catch (eV) {
                  return {
                    fulfilled: !1,
                    reason: eV
                  }
                }
              })))
            }(yV);
            eV.ports[0].postMessage({
              status: "done",
              eventId: xV,
              eventType: JV,
              response: pV
            })
          }
          _subscribe(VV, eV) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[VV] || (this.handlersMap[VV] = new Set), this.handlersMap[VV].add(eV)
          }
          _unsubscribe(VV, eV) {
            this.handlersMap[VV] && eV && this.handlersMap[VV].delete(eV), eV && 0 !== this.handlersMap[VV].size || delete this.handlersMap[VV], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function PJ() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            xV = "";
          for (let JV = 0; JV < eV; JV++) xV += Math.floor(10 * Math.random());
          return VV + xV
        }
        TJ.receivers = [];
        class AJ {
          constructor(VV) {
            this.target = VV, this.handlers = new Set
          }
          removeMessageHandler(VV) {
            VV.messageChannel && (VV.messageChannel.port1.removeEventListener("message", VV.jF), VV.messageChannel.port1.close()), this.handlers.delete(VV)
          }
          async _send(VV, eV) {
            let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const JV = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!JV) throw new Error("connection_unavailable");
            let YV, UV;
            return new Promise(((yV, pV) => {
              const QV = PJ("", 20);
              JV.port1.start();
              const nV = setTimeout((() => {
                pV(new Error("unsupported_event"))
              }), xV);
              UV = {
                messageChannel: JV,
                jF(VV) {
                  const eV = VV;
                  if (eV.data.eventId === QV) switch (eV.data.status) {
                    case "ack":
                      clearTimeout(nV), YV = setTimeout((() => {
                        pV(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(YV), yV(eV.data.response);
                      break;
                    default:
                      clearTimeout(nV), clearTimeout(YV), pV(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(UV), JV.port1.addEventListener("message", UV.jF), this.target.postMessage({
                eventType: VV,
                eventId: QV,
                data: eV
              }, [JV.port2])
            })).finally((() => {
              UV && this.removeMessageHandler(UV)
            }))
          }
        }

        function NJ() {
          return window
        }

        function XJ() {
          return "undefined" !== typeof NJ().WorkerGlobalScope && "function" === typeof NJ().importScripts
        }
        const MJ = "firebaseLocalStorageDb",
          zJ = "firebaseLocalStorage",
          GJ = "fbase_key";
        class WJ {
          constructor(VV) {
            this.request = VV
          }
          toPromise() {
            return new Promise(((VV, eV) => {
              this.request.addEventListener("success", (() => {
                VV(this.request.result)
              })), this.request.addEventListener("error", (() => {
                eV(this.request.error)
              }))
            }))
          }
        }

        function RJ(VV, eV) {
          return VV.transaction([zJ], eV ? "readwrite" : "readonly").objectStore(zJ)
        }

        function gJ() {
          const VV = indexedDB.open(MJ, 1);
          return new Promise(((eV, xV) => {
            VV.addEventListener("error", (() => {
              xV(VV.error)
            })), VV.addEventListener("upgradeneeded", (() => {
              const eV = VV.result;
              try {
                eV.createObjectStore(zJ, {
                  keyPath: GJ
                })
              } catch (JV) {
                xV(JV)
              }
            })), VV.addEventListener("success", (async () => {
              const xV = VV.result;
              xV.objectStoreNames.contains(zJ) ? eV(xV) : (xV.close(), await
                function() {
                  const VV = indexedDB.deleteDatabase(MJ);
                  return new WJ(VV).toPromise()
                }(), eV(await gJ()))
            }))
          }))
        }
        async function DJ(VV, eV, xV) {
          const JV = RJ(VV, !0).put({
            [GJ]: eV,
            value: xV
          });
          return new WJ(JV).toPromise()
        }

        function iJ(VV, eV) {
          const xV = RJ(VV, !0).delete(eV);
          return new WJ(xV).toPromise()
        }
        class CJ {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await gJ()), this.db
          }
          async _withRetries(VV) {
            let eV = 0;
            for (;;) try {
              const eV = await this._openDb();
              return await VV(eV)
            } catch (xV) {
              if (eV++ > 3) throw xV;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return XJ() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = TJ._getInstance(XJ() ? self : null), this.receiver._subscribe("keyChanged", (async (VV, eV) => ({
              keyProcessed: (await this._poll()).includes(eV.key)
            }))), this.receiver._subscribe("ping", (async (VV, eV) => ["keyChanged"]))
          }
          async initializeSender() {
            var VV, eV;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (VV) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new AJ(this.activeServiceWorker);
            const xV = await this.sender._send("ping", {}, 800);
            xV && (null === (VV = xV[0]) || void 0 === VV ? void 0 : VV.fulfilled) && (null === (eV = xV[0]) || void 0 === eV ? void 0 : eV.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(VV) {
            if (this.sender && this.activeServiceWorker && function() {
                var VV;
                return (null === (VV = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === VV ? void 0 : VV.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: VV
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (eV) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const VV = await gJ();
              return await DJ(VV, EJ, "1"), await iJ(VV, EJ), !0
            } catch (VV) {}
            return !1
          }
          async _withPendingWrite(VV) {
            this.pendingWrites++;
            try {
              await VV()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(VV, eV) {
            return this._withPendingWrite((async () => (await this._withRetries((xV => DJ(xV, VV, eV))), this.localCache[VV] = eV, this.notifyServiceWorker(VV))))
          }
          async _get(VV) {
            const eV = await this._withRetries((eV => async function(VV, eV) {
              const xV = RJ(VV, !1).get(eV),
                JV = await new WJ(xV).toPromise();
              return void 0 === JV ? null : JV.value
            }(eV, VV)));
            return this.localCache[VV] = eV, eV
          }
          async _remove(VV) {
            return this._withPendingWrite((async () => (await this._withRetries((eV => iJ(eV, VV))), delete this.localCache[VV], this.notifyServiceWorker(VV))))
          }
          async _poll() {
            const VV = await this._withRetries((VV => {
              const eV = RJ(VV, !1).getAll();
              return new WJ(eV).toPromise()
            }));
            if (!VV) return [];
            if (0 !== this.pendingWrites) return [];
            const eV = [],
              xV = new Set;
            for (const {
                fbase_key: JV,
                value: YV
              }
              of VV) xV.add(JV), JSON.stringify(this.localCache[JV]) !== JSON.stringify(YV) && (this.notifyListeners(JV, YV), eV.push(JV));
            for (const JV of Object.keys(this.localCache)) this.localCache[JV] && !xV.has(JV) && (this.notifyListeners(JV, null), eV.push(JV));
            return eV
          }
          notifyListeners(VV, eV) {
            this.localCache[VV] = eV;
            const xV = this.listeners[VV];
            if (xV)
              for (const JV of Array.from(xV)) JV(eV)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(VV, eV) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[VV] || (this.listeners[VV] = new Set, this._get(VV)), this.listeners[VV].add(eV)
          }
          _removeListener(VV, eV) {
            this.listeners[VV] && (this.listeners[VV].delete(eV), 0 === this.listeners[VV].size && delete this.listeners[VV]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        CJ.type = "LOCAL";
        const aJ = CJ;
        const oJ = 1e12;
        class cJ {
          constructor(VV) {
            this.auth = VV, this.counter = oJ, this._widgets = new Map
          }
          render(VV, eV) {
            const xV = this.counter;
            return this._widgets.set(xV, new hJ(VV, this.auth.name, eV || {})), this.counter++, xV
          }
          reset(VV) {
            var eV;
            const xV = VV || oJ;
            null === (eV = this._widgets.get(xV)) || void 0 === eV || eV.delete(), this._widgets.delete(xV)
          }
          getResponse(VV) {
            var eV;
            const xV = VV || oJ;
            return (null === (eV = this._widgets.get(xV)) || void 0 === eV ? void 0 : eV.getResponse()) || ""
          }
          async execute(VV) {
            var eV;
            const xV = VV || oJ;
            return null === (eV = this._widgets.get(xV)) || void 0 === eV || eV.execute(), ""
          }
        }
        class hJ {
          constructor(VV, eV, xV) {
            this.params = xV, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const JV = "string" === typeof VV ? document.getElementById(VV) : VV;
            NV(JV, "argument-error", {
              appName: eV
            }), this.container = JV, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(VV) {
                const eV = [],
                  xV = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let JV = 0; JV < VV; JV++) eV.push(xV.charAt(Math.floor(Math.random() * xV.length)));
                return eV.join("")
              }(50);
              const {
                callback: VV,
                "expired-callback": eV
              } = this.params;
              if (VV) try {
                VV(this.responseToken)
              } catch (xV) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, eV) try {
                  eV()
                } catch (xV) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const lJ = Xe("rcb"),
          LJ = new RV(3e4, 6e4);
        class fJ {
          constructor() {
            var VV;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (VV = NJ().grecaptcha) || void 0 === VV ? void 0 : VV.render)
          }
          load(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return NV(function(VV) {
              return VV.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(VV)
            }(eV), VV, "argument-error"), this.shouldResolveImmediately(eV) && Te(NJ().grecaptcha) ? Promise.resolve(NJ().grecaptcha) : new Promise(((xV, YV) => {
              const UV = NJ().setTimeout((() => {
                YV(FV(VV, "network-request-failed"))
              }), LJ.get());
              NJ()[lJ] = () => {
                NJ().clearTimeout(UV), delete NJ()[lJ];
                const JV = NJ().grecaptcha;
                if (!JV || !Te(JV)) return void YV(FV(VV, "internal-error"));
                const yV = JV.render;
                JV.render = (VV, eV) => {
                  const xV = yV(VV, eV);
                  return this.counter++, xV
                }, this.hostLanguage = eV, xV(JV)
              };
              Ne(`https://www.google.com/recaptcha/api.js??${(0,JV.hb)({onload:lJ,render:"explicit",hl:eV})}`).catch((() => {
                clearTimeout(UV), YV(FV(VV, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(VV) {
            var eV;
            return !!(null === (eV = NJ().grecaptcha) || void 0 === eV ? void 0 : eV.render) && (VV === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class mJ {
          async load(VV) {
            return new cJ(VV)
          }
          clearedOneInstance() {}
        }
        const KJ = "recaptcha",
          HJ = {
            theme: "light",
            type: "image"
          };
        class uJ {
          constructor(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, HJ),
              xV = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = eV, this.type = KJ, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = Re(xV), this.isInvisible = "invisible" === this.parameters.size, NV("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const JV = "string" === typeof VV ? document.getElementById(VV) : VV;
            NV(JV, this.auth, "argument-error"), this.container = JV, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new mJ : new fJ, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const VV = await this.render(),
              eV = this.getAssertedRecaptcha(),
              xV = eV.getResponse(VV);
            return xV || new Promise((xV => {
              const JV = VV => {
                VV && (this.tokenChangeListeners.delete(JV), xV(VV))
              };
              this.tokenChangeListeners.add(JV), this.isInvisible && eV.execute(VV)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (VV) {
              return Promise.reject(VV)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((VV => {
              throw this.renderPromise = null, VV
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((VV => {
              this.container.removeChild(VV)
            }))
          }
          validateStartingState() {
            NV(!this.parameters.sitekey, this.auth, "argument-error"), NV(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), NV("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(VV) {
            return eV => {
              if (this.tokenChangeListeners.forEach((VV => VV(eV))), "function" === typeof VV) VV(eV);
              else if ("string" === typeof VV) {
                const xV = NJ()[VV];
                "function" === typeof xV && xV(eV)
              }
            }
          }
          assertNotDestroyed() {
            NV(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let VV = this.container;
              if (!this.isInvisible) {
                const eV = document.createElement("div");
                VV.appendChild(eV), VV = eV
              }
              this.widgetId = this.getAssertedRecaptcha().render(VV, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            NV(GV() && !XJ(), this.auth, "internal-error"), await
            function() {
              let VV = null;
              return new Promise((eV => {
                "complete" !== document.readyState ? (VV = () => eV(), window.addEventListener("load", VV)) : eV()
              })).catch((eV => {
                throw VV && window.removeEventListener("load", VV), eV
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const VV = await async function(VV) {
              return (await oV(VV, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            NV(VV, this.auth, "internal-error"), this.parameters.sitekey = VV
          }
          getAssertedRecaptcha() {
            return NV(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class sJ {
          constructor(VV, eV) {
            this.verificationId = VV, this.onConfirmation = eV
          }
          confirm(VV) {
            const eV = Se._fromVerification(this.verificationId, VV);
            return this.onConfirmation(eV)
          }
        }
        async function SJ(VV, eV, xV) {
          const YV = Re(VV),
            UV = await OJ(YV, eV, (0, JV.L)(xV));
          return new sJ(UV, (VV => Fx(YV, VV)))
        }
        async function IJ(VV, eV, xV) {
          const YV = (0, JV.L)(VV);
          await jx(!1, YV, "phone");
          const UV = await OJ(YV.auth, eV, (0, JV.L)(xV));
          return new sJ(UV, (VV => Tx(YV, VV)))
        }
        async function dJ(VV, eV, xV) {
          const YV = (0, JV.L)(VV),
            UV = await OJ(YV.auth, eV, (0, JV.L)(xV));
          return new sJ(UV, (VV => Px(YV, VV)))
        }
        async function OJ(VV, eV, xV) {
          var JV;
          const YV = await xV.verify();
          try {
            let UV;
            if (NV("string" === typeof YV, VV, "argument-error"), NV(xV.type === KJ, VV, "argument-error"), UV = "string" === typeof eV ? {
                phoneNumber: eV
              } : eV, "session" in UV) {
              const eV = UV.session;
              if ("phoneNumber" in UV) {
                NV("enroll" === eV.type, VV, "internal-error");
                const xV = await
                function(VV, eV) {
                  return oV(VV, "POST", "/v2/accounts/mfaEnrollment:start", aV(VV, eV))
                }(VV, {
                  idToken: eV.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: UV.phoneNumber,
                    recaptchaToken: YV
                  }
                });
                return xV.phoneSessionInfo.sessionInfo
              } {
                NV("signin" === eV.type, VV, "internal-error");
                const xV = (null === (JV = UV.multiFactorHint) || void 0 === JV ? void 0 : JV.uid) || UV.multiFactorUid;
                NV(xV, VV, "missing-multi-factor-info");
                const yV = await
                function(VV, eV) {
                  return oV(VV, "POST", "/v2/accounts/mfaSignIn:start", aV(VV, eV))
                }(VV, {
                  mfaPendingCredential: eV.credential,
                  mfaEnrollmentId: xV,
                  phoneSignInInfo: {
                    recaptchaToken: YV
                  }
                });
                return yV.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: eV
              } = await async function(VV, eV) {
                return oV(VV, "POST", "/v1/accounts:sendVerificationCode", aV(VV, eV))
              }(VV, {
                phoneNumber: UV.phoneNumber,
                recaptchaToken: YV
              });
              return eV
            }
          } finally {
            xV._reset()
          }
        }
        async function VY(VV, eV) {
          await Bx((0, JV.L)(VV), eV)
        }
        class eY {
          constructor(VV) {
            this.providerId = eY.PROVIDER_ID, this.auth = Re(VV)
          }
          verifyPhoneNumber(VV, eV) {
            return OJ(this.auth, VV, (0, JV.L)(eV))
          }
          static credential(VV, eV) {
            return Se._fromVerification(VV, eV)
          }
          static credentialFromResult(VV) {
            const eV = VV;
            return eY.credentialFromTaggedObject(eV)
          }
          static credentialFromError(VV) {
            return eY.credentialFromTaggedObject(VV.customData || {})
          }
          static credentialFromTaggedObject(VV) {
            let {
              _tokenResponse: eV
            } = VV;
            if (!eV) return null;
            const {
              phoneNumber: xV,
              temporaryProof: JV
            } = eV;
            return xV && JV ? Se._fromTokenResponse(xV, JV) : null
          }
        }

        function xY(VV, eV) {
          return eV ? Ue(eV) : (NV(VV._popupRedirectResolver, VV, "argument-error"), VV._popupRedirectResolver)
        }
        eY.PROVIDER_ID = "phone", eY.PHONE_SIGN_IN_METHOD = "phone";
        class JY extends oe {
          constructor(VV) {
            super("custom", "custom"), this.params = VV
          }
          _getIdTokenResponse(VV) {
            return He(VV, this._buildIdpRequest())
          }
          _linkToIdToken(VV, eV) {
            return He(VV, this._buildIdpRequest(eV))
          }
          _getReauthenticationResolver(VV) {
            return He(VV, this._buildIdpRequest())
          }
          _buildIdpRequest(VV) {
            const eV = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return VV && (eV.idToken = VV), eV
          }
        }

        function YY(VV) {
          return tx(VV.auth, new JY(VV), VV.bypassAuthState)
        }

        function UY(VV) {
          const {
            auth: eV,
            user: xV
          } = VV;
          return NV(xV, eV, "internal-error"), qx(xV, new JY(VV), VV.bypassAuthState)
        }
        async function yY(VV) {
          const {
            auth: eV,
            user: xV
          } = VV;
          return NV(xV, eV, "internal-error"), Bx(xV, new JY(VV), VV.bypassAuthState)
        }
        class pY {
          constructor(VV, eV, xV, JV) {
            let YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = VV, this.resolver = xV, this.user = JV, this.bypassAuthState = YV, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(eV) ? eV : [eV]
          }
          execute() {
            return new Promise((async (VV, eV) => {
              this.pendingPromise = {
                resolve: VV,
                reject: eV
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (xV) {
                this.reject(xV)
              }
            }))
          }
          async onAuthEvent(VV) {
            const {
              urlResponse: eV,
              sessionId: xV,
              postBody: JV,
              tenantId: YV,
              error: UV,
              type: yV
            } = VV;
            if (UV) return void this.reject(UV);
            const pV = {
              auth: this.auth,
              requestUri: eV,
              sessionId: xV,
              tenantId: YV || void 0,
              postBody: JV || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(yV)(pV))
            } catch (QV) {
              this.reject(QV)
            }
          }
          onError(VV) {
            this.reject(VV)
          }
          getIdpTask(VV) {
            switch (VV) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return YY;
              case "linkViaPopup":
              case "linkViaRedirect":
                return yY;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return UY;
              default:
                tV(this.auth, "internal-error")
            }
          }
          resolve(VV) {
            MV(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(VV), this.unregisterAndCleanUp()
          }
          reject(VV) {
            MV(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(VV), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const QY = new RV(2e3, 1e4);
        async function nY(VV, eV, xV) {
          const JV = Re(VV);
          PV(VV, eV, Vx);
          const YV = xY(JV, xV);
          return new vY(JV, "signInViaPopup", eV, YV).executeNotNull()
        }
        async function wY(VV, eV, xV) {
          const YV = (0, JV.L)(VV);
          PV(YV.auth, eV, Vx);
          const UV = xY(YV.auth, xV);
          return new vY(YV.auth, "reauthViaPopup", eV, UV, YV).executeNotNull()
        }
        async function ZY(VV, eV, xV) {
          const YV = (0, JV.L)(VV);
          PV(YV.auth, eV, Vx);
          const UV = xY(YV.auth, xV);
          return new vY(YV.auth, "linkViaPopup", eV, UV, YV).executeNotNull()
        }
        class vY extends pY {
          constructor(VV, eV, xV, JV, YV) {
            super(VV, eV, JV, YV), this.provider = xV, this.authWindow = null, this.pollId = null, vY.currentPopupAction && vY.currentPopupAction.cancel(), vY.currentPopupAction = this
          }
          async executeNotNull() {
            const VV = await this.execute();
            return NV(VV, this.auth, "internal-error"), VV
          }
          async onExecution() {
            MV(1 === this.filter.length, "Popup operations only handle one event");
            const VV = PJ();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], VV), this.authWindow.associatedEvent = VV, this.resolver._originValidation(this.auth).catch((VV => {
              this.reject(VV)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (VV => {
              VV || this.reject(FV(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var VV;
            return (null === (VV = this.authWindow) || void 0 === VV ? void 0 : VV.associatedEvent) || null
          }
          cancel() {
            this.reject(FV(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, vY.currentPopupAction = null
          }
          pollUserCancellation() {
            const VV = () => {
              var eV, xV;
              (null === (xV = null === (eV = this.authWindow) || void 0 === eV ? void 0 : eV.window) || void 0 === xV ? void 0 : xV.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(FV(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(VV, QY.get())
            };
            VV()
          }
        }
        vY.currentPopupAction = null;
        const rY = "pendingRedirect",
          kY = new Map;
        class bY extends pY {
          constructor(VV, eV) {
            super(VV, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], eV, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let VV = kY.get(this.auth._key());
            if (!VV) {
              try {
                const eV = await async function(VV, eV) {
                  const xV = qY(eV),
                    JV = jY(VV);
                  if (!await JV._isAvailable()) return !1;
                  const YV = "true" === await JV._get(xV);
                  return await JV._remove(xV), YV
                }(this.resolver, this.auth) ? await super.execute() : null;
                VV = () => Promise.resolve(eV)
              } catch (eV) {
                VV = () => Promise.reject(eV)
              }
              kY.set(this.auth._key(), VV)
            }
            return this.bypassAuthState || kY.set(this.auth._key(), (() => Promise.resolve(null))), VV()
          }
          async onAuthEvent(VV) {
            if ("signInViaRedirect" === VV.type) return super.onAuthEvent(VV);
            if ("unknown" !== VV.type) {
              if (VV.eventId) {
                const eV = await this.auth._redirectUserForId(VV.eventId);
                if (eV) return this.user = eV, super.onAuthEvent(VV);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function EY(VV, eV) {
          return jY(VV)._set(qY(eV), "true")
        }

        function BY(VV, eV) {
          kY.set(VV._key(), eV)
        }

        function jY(VV) {
          return Ue(VV._redirectPersistence)
        }

        function qY(VV) {
          return Qe(rY, VV.config.apiKey, VV.name)
        }

        function tY(VV, eV, xV) {
          return async function(VV, eV, xV) {
            const JV = Re(VV);
            PV(VV, eV, Vx), await JV._initializationPromise;
            const YV = xY(JV, xV);
            return await EY(YV, JV), YV._openRedirect(JV, eV, "signInViaRedirect")
          }(VV, eV, xV)
        }

        function FY(VV, eV, xV) {
          return async function(VV, eV, xV) {
            const YV = (0, JV.L)(VV);
            PV(YV.auth, eV, Vx), await YV.auth._initializationPromise;
            const UV = xY(YV.auth, xV);
            await EY(UV, YV.auth);
            const yV = await NY(YV);
            return UV._openRedirect(YV.auth, eV, "reauthViaRedirect", yV)
          }(VV, eV, xV)
        }

        function TY(VV, eV, xV) {
          return async function(VV, eV, xV) {
            const YV = (0, JV.L)(VV);
            PV(YV.auth, eV, Vx), await YV.auth._initializationPromise;
            const UV = xY(YV.auth, xV);
            await jx(!1, YV, eV.providerId), await EY(UV, YV.auth);
            const yV = await NY(YV);
            return UV._openRedirect(YV.auth, eV, "linkViaRedirect", yV)
          }(VV, eV, xV)
        }
        async function PY(VV, eV) {
          return await Re(VV)._initializationPromise, AY(VV, eV, !1)
        }
        async function AY(VV, eV) {
          let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const JV = Re(VV),
            YV = xY(JV, eV),
            UV = new bY(JV, YV, xV),
            yV = await UV.execute();
          return yV && !xV && (delete yV.user._redirectEventId, await JV._persistUserIfCurrent(yV.user), await JV._setRedirectUser(null, eV)), yV
        }
        async function NY(VV) {
          const eV = PJ(`${VV.uid}:::`);
          return VV._redirectEventId = eV, await VV.auth._setRedirectUser(VV), await VV.auth._persistUserIfCurrent(VV), eV
        }
        class XY {
          constructor(VV) {
            this.auth = VV, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(VV) {
            this.consumers.add(VV), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, VV) && (this.sendToConsumer(this.queuedRedirectEvent, VV), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(VV) {
            this.consumers.delete(VV)
          }
          onEvent(VV) {
            if (this.hasEventBeenHandled(VV)) return !1;
            let eV = !1;
            return this.consumers.forEach((xV => {
              this.isEventForConsumer(VV, xV) && (eV = !0, this.sendToConsumer(VV, xV), this.saveEventToCache(VV))
            })), this.hasHandledPotentialRedirect || ! function(VV) {
              switch (VV.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return zY(VV);
                default:
                  return !1
              }
            }(VV) || (this.hasHandledPotentialRedirect = !0, eV || (this.queuedRedirectEvent = VV, eV = !0)), eV
          }
          sendToConsumer(VV, eV) {
            var xV;
            if (VV.error && !zY(VV)) {
              const JV = (null === (xV = VV.error.code) || void 0 === xV ? void 0 : xV.split("auth/")[1]) || "internal-error";
              eV.onError(FV(this.auth, JV))
            } else eV.onAuthEvent(VV)
          }
          isEventForConsumer(VV, eV) {
            const xV = null === eV.eventId || !!VV.eventId && VV.eventId === eV.eventId;
            return eV.filter.includes(VV.type) && xV
          }
          hasEventBeenHandled(VV) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(MY(VV))
          }
          saveEventToCache(VV) {
            this.cachedEventUids.add(MY(VV)), this.lastProcessedEventTime = Date.now()
          }
        }

        function MY(VV) {
          return [VV.type, VV.eventId, VV.sessionId, VV.tenantId].filter((VV => VV)).join("-")
        }

        function zY(VV) {
          let {
            type: eV,
            error: xV
          } = VV;
          return "unknown" === eV && "auth/no-auth-event" === (null === xV || void 0 === xV ? void 0 : xV.code)
        }
        const GY = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          WY = /^https?/;
        async function RY(VV) {
          if (VV.config.emulator) return;
          const {
            authorizedDomains: eV
          } = await async function(VV) {
            return oV(VV, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(VV);
          for (const JV of eV) try {
            if (gY(JV)) return
          } catch (xV) {}
          tV(VV, "unauthorized-domain")
        }

        function gY(VV) {
          const eV = zV(),
            {
              protocol: xV,
              hostname: JV
            } = new URL(eV);
          if (VV.startsWith("chrome-extension://")) {
            const YV = new URL(VV);
            return "" === YV.hostname && "" === JV ? "chrome-extension:" === xV && VV.replace("chrome-extension://", "") === eV.replace("chrome-extension://", "") : "chrome-extension:" === xV && YV.hostname === JV
          }
          if (!WY.test(xV)) return !1;
          if (GY.test(VV)) return JV === VV;
          const YV = VV.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + YV + "|" + YV + ")$", "i").test(JV)
        }
        const DY = new RV(3e4, 6e4);

        function iY() {
          const VV = NJ().___jsl;
          if (null === VV || void 0 === VV ? void 0 : VV.H)
            for (const eV of Object.keys(VV.H))
              if (VV.H[eV].r = VV.H[eV].r || [], VV.H[eV].L = VV.H[eV].L || [], VV.H[eV].r = [...VV.H[eV].L], VV.CP)
                for (let xV = 0; xV < VV.CP.length; xV++) VV.CP[xV] = null
        }
        let CY = null;

        function aY(VV) {
          return CY = CY || function(VV) {
            return new Promise(((eV, xV) => {
              var JV, YV, UV;

              function yV() {
                iY(), gapi.load("gapi.iframes", {
                  callback: () => {
                    eV(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    iY(), xV(FV(VV, "network-request-failed"))
                  },
                  timeout: DY.get()
                })
              }
              if (null === (YV = null === (JV = NJ().gapi) || void 0 === JV ? void 0 : JV.iframes) || void 0 === YV ? void 0 : YV.Iframe) eV(gapi.iframes.getContext());
              else {
                if (!(null === (UV = NJ().gapi) || void 0 === UV ? void 0 : UV.load)) {
                  const eV = Xe("iframefcb");
                  return NJ()[eV] = () => {
                    gapi.load ? yV() : xV(FV(VV, "network-request-failed"))
                  }, Ne(`https://apis.google.com/js/api.js?onload=${eV}`).catch((VV => xV(VV)))
                }
                yV()
              }
            })).catch((VV => {
              throw CY = null, VV
            }))
          }(VV), CY
        }
        const oY = new RV(5e3, 15e3),
          cY = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          hY = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function lY(VV) {
          const eV = VV.config;
          NV(eV.authDomain, VV, "auth-domain-config-required");
          const xV = eV.emulator ? gV(eV, "emulator/auth/iframe") : `https://${VV.config.authDomain}/__/auth/iframe`,
            UV = {
              apiKey: eV.apiKey,
              appName: VV.name,
              v: YV.e
            },
            yV = hY.get(VV.config.apiHost);
          yV && (UV.eid = yV);
          const pV = VV._getFrameworks();
          return pV.length && (UV.fw = pV.join(",")), `${xV}?${(0,JV.hb)(UV).slice(1)}`
        }
        const LY = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class fY {
          constructor(VV) {
            this.window = VV, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (VV) {}
          }
        }

        function mY(VV, eV, xV) {
          let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const yV = Math.max((window.screen.availHeight - UV) / 2, 0).toString(),
            pV = Math.max((window.screen.availWidth - YV) / 2, 0).toString();
          let QV = "";
          const nV = Object.assign(Object.assign({}, LY), {
              width: YV.toString(),
              height: UV.toString(),
              top: yV,
              left: pV
            }),
            wV = (0, JV.P)().toLowerCase();
          xV && (QV = re(wV) ? "_blank" : xV), Ze(wV) && (eV = eV || "http://localhost", nV.scrollbars = "yes");
          const ZV = Object.entries(nV).reduce(((VV, eV) => {
            let [xV, JV] = eV;
            return `${VV}${xV}=${JV},`
          }), "");
          if (function() {
              var VV;
              return je(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, JV.P)()) && !!(null === (VV = window.navigator) || void 0 === VV ? void 0 : VV.standalone)
            }(wV) && "_self" !== QV) return function(VV, eV) {
            const xV = document.createElement("a");
            xV.href = VV, xV.target = eV;
            const JV = document.createEvent("MouseEvent");
            JV.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), xV.dispatchEvent(JV)
          }(eV || "", QV), new fY(null);
          const vV = window.open(eV || "", QV, ZV);
          NV(vV, VV, "popup-blocked");
          try {
            vV.focus()
          } catch (rV) {}
          return new fY(vV)
        }
        const KY = "__/auth/handler",
          HY = "emulator/auth/handler",
          uY = encodeURIComponent("fac");
        async function sY(VV, eV, xV, UV, yV, pV) {
            NV(VV.config.authDomain, VV, "auth-domain-config-required"), NV(VV.config.apiKey, VV, "invalid-api-key");
            const QV = {
              apiKey: VV.config.apiKey,
              appName: VV.name,
              authType: xV,
              redirectUrl: UV,
              v: YV.e,
              eventId: yV
            };
            if (eV instanceof Vx) {
              eV.setDefaultLanguage(VV.languageCode), QV.providerId = eV.providerId || "", (0, JV.S)(eV.getCustomParameters()) || (QV.customParameters = JSON.stringify(eV.getCustomParameters()));
              for (const [VV, eV] of Object.entries(pV || {})) QV[VV] = eV
            }
            if (eV instanceof ex) {
              const VV = eV.getScopes().filter((VV => "" !== VV));
              VV.length > 0 && (QV.scopes = VV.join(","))
            }
            VV.tenantId && (QV.tid = VV.tenantId);
            const nV = QV;
            for (const JV of Object.keys(nV)) void 0 === nV[JV] && delete nV[JV];
            const wV = await VV._getAppCheckToken(),
              ZV = wV ? `#${uY}=${encodeURIComponent(wV)}` : "";
            return `${function(VV){let{config:eV}=VV;if(!eV.emulator)return`
            https: //${eV.authDomain}/${KY}`;return gV(eV,HY)}(VV)}?${(0,JV.hb)(nV).slice(1)}${ZV}`}const SY="webStorageSupport";const IY=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=FJ,this._completeRedirectFn=AY,this._overrideRedirectResult=BY}async _openPopup(VV,eV,xV,JV){var YV;MV(null===(YV=this.eventManagers[VV._key()])||void 0===YV?void 0:YV.manager,"_initialize() not called before _openPopup()");return mY(VV,await sY(VV,eV,xV,zV(),JV),PJ())}async _openRedirect(VV,eV,xV,JV){await this._originValidation(VV);return function(VV){NJ().location.href=VV}(await sY(VV,eV,xV,zV(),JV)),new Promise((()=>{}))}_initialize(VV){const eV=VV._key();if(this.eventManagers[eV]){const{manager:VV,promise:xV}=this.eventManagers[eV];return VV?Promise.resolve(VV):(MV(xV,"If manager is not set, promise should be"),xV)}const xV=this.initAndGetManager(VV);return this.eventManagers[eV]={promise:xV},xV.catch((()=>{delete this.eventManagers[eV]})),xV}async initAndGetManager(VV){const eV=await async function(VV){const eV=await aY(VV),xV=NJ().gapi;return NV(xV,VV,"internal-error"),eV.open({where:document.body,url:lY(VV),messageHandlersFilter:xV.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cY,dontclear:!0},(eV=>new Promise((async(xV,JV)=>{await eV.restyle({setHideOnLeave:!1});const YV=FV(VV,"network-request-failed"),UV=NJ().setTimeout((()=>{JV(YV)}),oY.get());function yV(){NJ().clearTimeout(UV),xV(eV)}eV.ping(yV).then(yV,(()=>{JV(YV)}))}))))}(VV),xV=new XY(VV);return eV.register("authEvent",(eV=>{NV(null===eV||void 0===eV?void 0:eV.authEvent,VV,"invalid-auth-event");return{status:xV.onEvent(eV.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[VV._key()]={manager:xV},this.iframes[VV._key()]=eV,xV}_isIframeWebStorageSupported(VV,eV){this.iframes[VV._key()].send(SY,{type:SY},(xV=>{var JV;const YV=null===(JV=null===xV||void 0===xV?void 0:xV[0])||void 0===JV?void 0:JV[SY];void 0!==YV&&eV(!!YV),tV(VV,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(VV){const eV=VV._key();return this.originValidationPromises[eV]||(this.originValidationPromises[eV]=RY(VV)),this.originValidationPromises[eV]}get _shouldInitProactively(){return qe()||ve()||je()}};class dY{constructor(VV){this.factorId=VV}_process(VV,eV,xV){switch(eV.type){case"enroll":return this._finalizeEnroll(VV,eV.credential,xV);case"signin":return this._finalizeSignIn(VV,eV.credential);default:return XV("unexpected MultiFactorSessionType")}}}class OY extends dY{constructor(VV){super("phone"),this.credential=VV}static _fromCredential(VV){return new OY(VV)}_finalizeEnroll(VV,eV,xV){return function(VV,eV){return oV(VV,"POST","/v2/accounts/mfaEnrollment:finalize",aV(VV,eV))}(VV,{idToken:eV,displayName:xV,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(VV,eV){return function(VV,eV){return oV(VV,"POST","/v2/accounts/mfaSignIn:finalize",aV(VV,eV))}(VV,{mfaPendingCredential:eV,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class VU{constructor(){}static assertion(VV){return OY._fromCredential(VV)}}VU.FACTOR_ID="phone";class eU{static assertionForEnrollment(VV,eV){return xU._fromSecret(VV,eV)}static assertionForSignIn(VV,eV){return xU._fromEnrollmentId(VV,eV)}static async generateSecret(VV){const eV=VV;NV("undefined"!==typeof eV.auth,"internal-error");const xV=await(JV=eV.auth,YV={idToken:eV.credential,totpEnrollmentInfo:{}},oV(JV,"POST","/v2/accounts/mfaEnrollment:start",aV(JV,YV)));var JV,YV;return JU._fromStartTotpMfaEnrollmentResponse(xV,eV.auth)}}eU.FACTOR_ID="totp";class xU extends dY{constructor(VV,eV,xV){super("totp"),this.otp=VV,this.enrollmentId=eV,this.secret=xV}static _fromSecret(VV,eV){return new xU(eV,void 0,VV)}static _fromEnrollmentId(VV,eV){return new xU(eV,VV)}async _finalizeEnroll(VV,eV,xV){return NV("undefined"!==typeof this.secret,VV,"argument-error"),function(VV,eV){return oV(VV,"POST","/v2/accounts/mfaEnrollment:finalize",aV(VV,eV))}(VV,{idToken:eV,displayName:xV,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(VV,eV){NV(void 0!==this.enrollmentId&&void 0!==this.otp,VV,"argument-error");const xV={verificationCode:this.otp};return function(VV,eV){return oV(VV,"POST","/v2/accounts/mfaSignIn:finalize",aV(VV,eV))}(VV,{mfaPendingCredential:eV,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:xV})}}class JU{constructor(VV,eV,xV,JV,YV,UV,yV){this.sessionInfo=UV,this.auth=yV,this.secretKey=VV,this.hashingAlgorithm=eV,this.codeLength=xV,this.codeIntervalSeconds=JV,this.enrollmentCompletionDeadline=YV}static _fromStartTotpMfaEnrollmentResponse(VV,eV){return new JU(VV.totpSessionInfo.sharedSecretKey,VV.totpSessionInfo.hashingAlgorithm,VV.totpSessionInfo.verificationCodeLength,VV.totpSessionInfo.periodSec,new Date(VV.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),VV.totpSessionInfo.sessionInfo,eV)}_makeTotpVerificationInfo(VV){return{sessionInfo:this.sessionInfo,verificationCode:VV}}generateQrCodeUrl(VV,eV){var xV;let JV=!1;return(YU(VV)||YU(eV))&&(JV=!0),JV&&(YU(VV)&&(VV=(null===(xV=this.auth.currentUser)||void 0===xV?void 0:xV.email)||"unknownuser"),YU(eV)&&(eV=this.auth.name)),`otpauth://totp/${eV}:${VV}?secret=${this.secretKey}&issuer=${eV}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function YU(VV){return"undefined"===typeof VV||0===(null===VV||void 0===VV?void 0:VV.length)}var UU="@firebase/auth",yU="0.23.2";class pU{constructor(VV){this.auth=VV,this.internalListeners=new Map}getUid(){var VV;return this.assertAuthConfigured(),(null===(VV=this.auth.currentUser)||void 0===VV?void 0:VV.uid)||null}async getToken(VV){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(VV)}}addAuthTokenListener(VV){if(this.assertAuthConfigured(),this.internalListeners.has(VV))return;const eV=this.auth.onIdTokenChanged((eV=>{VV((null===eV||void 0===eV?void 0:eV.stsTokenManager.accessToken)||null)}));this.internalListeners.set(VV,eV),this.updateProactiveRefresh()}removeAuthTokenListener(VV){this.assertAuthConfigured();const eV=this.internalListeners.get(VV);eV&&(this.internalListeners.delete(VV),eV(),this.updateProactiveRefresh())}assertAuthConfigured(){NV(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const QU=(0,JV.I)("authIdTokenMaxAge")||300;let nU=null;const wU=VV=>async eV=>{const xV=eV&&await eV.getIdTokenResult(),JV=xV&&((new Date).getTime()-Date.parse(xV.issuedAtTime))/1e3;if(JV&&JV>QU)return;const YV=null===xV||void 0===xV?void 0:xV.token;nU!==YV&&(nU=YV,await fetch(VV,{method:YV?"POST":"DELETE",headers:YV?{Authorization:`Bearer ${YV}`}:{}}))};function ZU(){let VV=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,YV.J)();const eV=(0,YV.r)(VV,"auth");if(eV.isInitialized())return eV.getImmediate();const xV=De(VV,{popupRedirectResolver:IY,persistence:[aJ,qJ,FJ]}),UV=(0,JV.I)("authTokenSyncURL");if(UV){const VV=wU(UV);YJ(xV,VV,(()=>VV(xV.currentUser))),JJ(xV,(eV=>VV(eV)))}const yV=(0,JV.E)("auth");return yV&&ie(xV,`http://${yV}`),xV}var vU;vU="Browser",(0,YV.v)(new pV.e("auth",((VV,eV)=>{let{options:xV}=eV;const JV=VV.getProvider("app").getImmediate(),YV=VV.getProvider("heartbeat"),UV=VV.getProvider("app-check-internal"),{apiKey:yV,authDomain:pV}=JV.options;NV(yV&&!yV.includes(":"),"invalid-api-key",{appName:JV.name});const QV={apiKey:yV,authDomain:pV,clientPlatform:vU,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:te(vU)},nV=new We(JV,YV,UV,QV);return function(VV,eV){const xV=(null===eV||void 0===eV?void 0:eV.persistence)||[],JV=(Array.isArray(xV)?xV:[xV]).map(Ue);(null===eV||void 0===eV?void 0:eV.errorMap)&&VV._updateErrorMap(eV.errorMap),VV._initializeWithPersistence(JV,null===eV||void 0===eV?void 0:eV.popupRedirectResolver)}(nV,xV),nV}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((VV,eV,xV)=>{VV.getProvider("auth-internal").initialize()}))),(0,YV.v)(new pV.e("auth-internal",(VV=>(VV=>new pU(VV))(Re(VV.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,YV.O)(UU,yU,function(VV){switch(VV){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(vU)),(0,YV.O)(UU,yU,"esm2017")}};Object.freeze(modules);for(const VV in modules)Object.freeze(modules[VV]);