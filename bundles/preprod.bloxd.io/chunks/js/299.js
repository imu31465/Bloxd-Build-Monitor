/*! For license information please see cwj32u.299.a1e2599a.chunk.js.LICENSE.txt */
export const id = 299;
export const ids = [299];
export const modules = {
    41847: (HH, BH, LH) => {
        LH.r(BH), LH.d(BH, {
          ActionCodeOperation: () => GH,
          ActionCodeURL: () => iB,
          AuthCredential: () => NB,
          AuthErrorCodes: () => MH,
          EmailAuthCredential: () => ZB,
          EmailAuthProvider: () => yB,
          FacebookAuthProvider: () => AL,
          FactorId: () => zH,
          GithubAuthProvider: () => SL,
          GoogleAuthProvider: () => rL,
          OAuthCredential: () => aB,
          OAuthProvider: () => LL,
          OperationType: () => XH,
          PhoneAuthCredential: () => JB,
          PhoneAuthProvider: () => Br,
          PhoneMultiFactorGenerator: () => HS,
          ProviderId: () => CH,
          RecaptchaVerifier: () => aA,
          SAMLAuthProvider: () => tL,
          SignInMethod: () => EH,
          TotpMultiFactorGenerator: () => BS,
          TotpSecret: () => AS,
          TwitterAuthProvider: () => zL,
          applyActionCode: () => lL,
          beforeAuthStateChanged: () => rA,
          browserLocalPersistence: () => vA,
          browserPopupRedirectResolver: () => ir,
          browserSessionPersistence: () => TA,
          checkActionCode: () => KL,
          confirmPasswordReset: () => fL,
          connectAuthEmulator: () => eB,
          createUserWithEmailAndPassword: () => eL,
          debugErrorMap: () => uH,
          deleteUser: () => CA,
          fetchSignInMethodsForEmail: () => jL,
          getAdditionalUserInfo: () => HA,
          getAuth: () => XS,
          getIdToken: () => ZH,
          getIdTokenResult: () => dH,
          getMultiFactorResolver: () => GA,
          getRedirectResult: () => Vr,
          inMemoryPersistence: () => tB,
          indexedDBLocalPersistence: () => gA,
          initializeAuth: () => cB,
          initializeRecaptchaConfig: () => LA,
          isSignInWithEmailLink: () => NL,
          linkWithCredential: () => UL,
          linkWithPhoneNumber: () => iA,
          linkWithPopup: () => Xr,
          linkWithRedirect: () => Ur,
          multiFactor: () => QA,
          onAuthStateChanged: () => SA,
          onIdTokenChanged: () => AA,
          parseActionCodeURL: () => pB,
          prodErrorMap: () => QH,
          reauthenticateWithCredential: () => VL,
          reauthenticateWithPhoneNumber: () => pA,
          reauthenticateWithPopup: () => Er,
          reauthenticateWithRedirect: () => Tr,
          reload: () => HB,
          sendEmailVerification: () => nL,
          sendPasswordResetEmail: () => IL,
          sendSignInLinkToEmail: () => gL,
          setPersistence: () => BA,
          signInAnonymously: () => GL,
          signInWithCredential: () => TL,
          signInWithCustomToken: () => OL,
          signInWithEmailAndPassword: () => qL,
          signInWithEmailLink: () => RL,
          signInWithPhoneNumber: () => JA,
          signInWithPopup: () => Cr,
          signInWithRedirect: () => Pr,
          signOut: () => zA,
          unlink: () => WL,
          updateCurrentUser: () => tA,
          updateEmail: () => wL,
          updatePassword: () => ZL,
          updatePhoneNumber: () => Hr,
          updateProfile: () => DL,
          useDeviceLanguage: () => hA,
          verifyBeforeUpdateEmail: () => FL,
          verifyPasswordResetCode: () => cL
        });
        var AH = LH(41831),
          rH = LH(41817);

        function SH(HH, BH) {
          var LH = {};
          for (var AH in HH) Object.prototype.hasOwnProperty.call(HH, AH) && BH.indexOf(AH) < 0 && (LH[AH] = HH[AH]);
          if (null != HH && "function" === typeof Object.getOwnPropertySymbols) {
            var rH = 0;
            for (AH = Object.getOwnPropertySymbols(HH); rH < AH.length; rH++) BH.indexOf(AH[rH]) < 0 && Object.prototype.propertyIsEnumerable.call(HH, AH[rH]) && (LH[AH[rH]] = HH[AH[rH]])
          }
          return LH
        }
        Object.create;
        Object.create;
        "function" === typeof SuppressedError && SuppressedError;
        var hH = LH(41836),
          tH = LH(41822);
        const zH = {
            PHONE: "phone",
            TOTP: "totp"
          },
          CH = {
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PASSWORD: "password",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          EH = {
            EMAIL_LINK: "emailLink",
            EMAIL_PASSWORD: "password",
            FACEBOOK: "facebook.com",
            GITHUB: "github.com",
            GOOGLE: "google.com",
            PHONE: "phone",
            TWITTER: "twitter.com"
          },
          XH = {
            LINK: "link",
            REAUTHENTICATE: "reauthenticate",
            SIGN_IN: "signIn"
          },
          GH = {
            EMAIL_SIGNIN: "EMAIL_SIGNIN",
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
            VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
            VERIFY_EMAIL: "VERIFY_EMAIL"
          };

        function YH() {
          return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }
        }
        const uH = function() {
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
          QH = YH,
          WH = new AH.h("auth", "Firebase", {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
          }),
          MH = {
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
          xH = new hH.g("@firebase/auth");

        function vH(HH) {
          if (xH.logLevel <= hH.e.ERROR) {
            for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
            xH.error(`Auth (${rH.f}): ${HH}`, ...LH)
          }
        }

        function PH(HH) {
          for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
          throw OH(HH, ...LH)
        }

        function TH(HH) {
          for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
          return OH(HH, ...LH)
        }

        function UH(HH, BH, LH) {
          const rH = Object.assign(Object.assign({}, QH()), {
            [BH]: LH
          });
          return new AH.h("auth", "Firebase", rH).create(BH, {
            appName: HH.name
          })
        }

        function VH(HH, BH, LH) {
          if (!(BH instanceof LH)) throw LH.name !== BH.constructor.name && PH(HH, "argument-error"), UH(HH, "argument-error", `Type of ${BH.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
        }

        function OH(HH) {
          for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
          if ("string" !== typeof HH) {
            const BH = LH[0],
              AH = [...LH.slice(1)];
            return AH[0] && (AH[0].appName = HH.name), HH._errorFactory.create(BH, ...AH)
          }
          return WH.create(HH, ...LH)
        }

        function bH(HH, BH) {
          if (!HH) {
            for (var LH = arguments.length, AH = new Array(LH > 2 ? LH - 2 : 0), rH = 2; rH < LH; rH++) AH[rH - 2] = arguments[rH];
            throw OH(BH, ...AH)
          }
        }

        function kH(HH) {
          const BH = "INTERNAL ASSERTION FAILED: " + HH;
          throw vH(BH), new Error(BH)
        }

        function mH(HH, BH) {
          HH || kH(BH)
        }

        function oH() {
          var HH;
          return "undefined" !== typeof self && (null === (HH = self.location) || void 0 === HH ? void 0 : HH.href) || ""
        }

        function IH() {
          return "http:" === fH() || "https:" === fH()
        }

        function fH() {
          var HH;
          return "undefined" !== typeof self && (null === (HH = self.location) || void 0 === HH ? void 0 : HH.protocol) || null
        }
        class lH {
          constructor(HH, BH) {
            this.shortDelay = HH, this.longDelay = BH, mH(BH > HH, "Short delay should be less than long delay!"), this.isMobile = (0, AH.fb)() || (0, AH.hb)()
          }
          get() {
            return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (IH() || (0, AH.V)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.shortDelay
          }
        }

        function KH(HH, BH) {
          mH(HH.emulator, "Emulator should always be set here");
          const {
            url: LH
          } = HH.emulator;
          return BH ? `${LH}${BH.startsWith("/")?BH.slice(1):BH}` : LH
        }
        class cH {
          static initialize(HH, BH, LH) {
            this.fetchImpl = HH, BH && (this.headersImpl = BH), LH && (this.responseImpl = LH)
          }
          static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void kH("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void kH("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
          static response() {
            return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void kH("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
          }
        }
        const eH = {
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
          qH = new lH(3e4, 6e4);

        function gH(HH, BH) {
          return HH.tenantId && !BH.tenantId ? Object.assign(Object.assign({}, BH), {
            tenantId: HH.tenantId
          }) : BH
        }
        async function NH(HH, BH, LH, rH) {
          return RH(HH, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, (async () => {
            let SH = {},
              hH = {};
            rH && ("GET" === BH ? hH = rH : SH = {
              body: JSON.stringify(rH)
            });
            const tH = (0, AH.ob)(Object.assign({
                key: HH.config.apiKey
              }, hH)).slice(1),
              zH = await HH._getAdditionalHeaders();
            return zH["Content-Type"] = "application/json", HH.languageCode && (zH["X-Firebase-Locale"] = HH.languageCode), cH.fetch()(nH(HH, HH.config.apiHost, LH, tH), Object.assign({
              method: BH,
              headers: zH,
              referrerPolicy: "no-referrer"
            }, SH))
          }))
        }
        async function RH(HH, BH, LH) {
          HH._canInitEmulator = !1;
          const rH = Object.assign(Object.assign({}, eH), BH);
          try {
            const BH = new FH(HH),
              AH = await Promise.race([LH(), BH.promise]);
            BH.clearNetworkTimeout();
            const SH = await AH.json();
            if ("needConfirmation" in SH) throw DH(HH, "account-exists-with-different-credential", SH);
            if (AH.ok && !("errorMessage" in SH)) return SH;
            {
              const BH = AH.ok ? SH.errorMessage : SH.error.message,
                [LH, hH] = BH.split(" : ");
              if ("FEDERATED_USER_ID_ALREADY_LINKED" === LH) throw DH(HH, "credential-already-in-use", SH);
              if ("EMAIL_EXISTS" === LH) throw DH(HH, "email-already-in-use", SH);
              if ("USER_DISABLED" === LH) throw DH(HH, "user-disabled", SH);
              const tH = rH[LH] || LH.toLowerCase().replace(/[_\s]+/g, "-");
              if (hH) throw UH(HH, tH, hH);
              PH(HH, tH)
            }
          } catch (SH) {
            if (SH instanceof AH.j) throw SH;
            PH(HH, "network-request-failed", {
              message: String(SH)
            })
          }
        }
        async function jH(HH, BH, LH, AH) {
          let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
          const SH = await NH(HH, BH, LH, AH, rH);
          return "mfaPendingCredential" in SH && PH(HH, "multi-factor-auth-required", {
            _serverResponse: SH
          }), SH
        }

        function nH(HH, BH, LH, AH) {
          const rH = `${BH}${LH}?${AH}`;
          return HH.config.emulator ? KH(HH.config, rH) : `${HH.config.apiScheme}://${rH}`
        }
        class FH {
          constructor(HH) {
            this.auth = HH, this.timer = null, this.promise = new Promise(((HH, BH) => {
              this.timer = setTimeout((() => BH(TH(this.auth, "network-request-failed"))), qH.get())
            }))
          }
          clearNetworkTimeout() {
            clearTimeout(this.timer)
          }
        }

        function DH(HH, BH, LH) {
          const AH = {
            appName: HH.name
          };
          LH.email && (AH.email = LH.email), LH.phoneNumber && (AH.phoneNumber = LH.phoneNumber);
          const rH = TH(HH, BH, AH);
          return rH.customData._tokenResponse = LH, rH
        }

        function wH(HH) {
          if (HH) try {
            const BH = new Date(Number(HH));
            if (!isNaN(BH.getTime())) return BH.toUTCString()
          } catch (BH) {}
        }

        function ZH(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (0, AH.P)(HH).getIdToken(BH)
        }
        async function dH(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const LH = (0, AH.P)(HH),
            rH = await LH.getIdToken(BH),
            SH = sH(rH);
          bH(SH && SH.exp && SH.auth_time && SH.iat, LH.auth, "internal-error");
          const hH = "object" === typeof SH.firebase ? SH.firebase : void 0,
            tH = null === hH || void 0 === hH ? void 0 : hH.sign_in_provider;
          return {
            claims: SH,
            token: rH,
            authTime: wH(aH(SH.auth_time)),
            issuedAtTime: wH(aH(SH.iat)),
            expirationTime: wH(aH(SH.exp)),
            signInProvider: tH || null,
            signInSecondFactor: (null === hH || void 0 === hH ? void 0 : hH.sign_in_second_factor) || null
          }
        }

        function aH(HH) {
          return 1e3 * Number(HH)
        }

        function sH(HH) {
          const [BH, LH, rH] = HH.split(".");
          if (void 0 === BH || void 0 === LH || void 0 === rH) return vH("JWT malformed, contained fewer than 3 sections"), null;
          try {
            const HH = (0, AH.p)(LH);
            return HH ? JSON.parse(HH) : (vH("Failed to decode base64 JWT payload"), null)
          } catch (SH) {
            return vH("Caught error parsing JWT payload as JSON", null === SH || void 0 === SH ? void 0 : SH.toString()), null
          }
        }
        async function JH(HH, BH) {
          if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return BH;
          try {
            return await BH
          } catch (LH) {
            throw LH instanceof AH.j && function(HH) {
              let {
                code: BH
              } = HH;
              return "auth/user-disabled" === BH || "auth/user-token-expired" === BH
            }(LH) && HH.auth.currentUser === HH && await HH.auth.signOut(), LH
          }
        }
        class iH {
          constructor(HH) {
            this.user = HH, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
          }
          _start() {
            this.isRunning || (this.isRunning = !0, this.schedule())
          }
          _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
          }
          getInterval(HH) {
            var BH;
            if (HH) {
              const HH = this.errorBackoff;
              return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), HH
            } {
              this.errorBackoff = 3e4;
              const HH = (null !== (BH = this.user.stsTokenManager.expirationTime) && void 0 !== BH ? BH : 0) - Date.now() - 3e5;
              return Math.max(0, HH)
            }
          }
          schedule() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!this.isRunning) return;
            const BH = this.getInterval(HH);
            this.timerId = setTimeout((async () => {
              await this.iteration()
            }), BH)
          }
          async iteration() {
            try {
              await this.user.getIdToken(!0)
            } catch (HH) {
              return void("auth/network-request-failed" === (null === HH || void 0 === HH ? void 0 : HH.code) && this.schedule(!0))
            }
            this.schedule()
          }
        }
        class pH {
          constructor(HH, BH) {
            this.createdAt = HH, this.lastLoginAt = BH, this._initializeTime()
          }
          _initializeTime() {
            this.lastSignInTime = wH(this.lastLoginAt), this.creationTime = wH(this.createdAt)
          }
          _copy(HH) {
            this.createdAt = HH.createdAt, this.lastLoginAt = HH.lastLoginAt, this._initializeTime()
          }
          toJSON() {
            return {
              createdAt: this.createdAt,
              lastLoginAt: this.lastLoginAt
            }
          }
        }
        async function yH(HH) {
          var BH;
          const LH = HH.auth,
            AH = await HH.getIdToken(),
            rH = await JH(HH, async function(HH, BH) {
              return NH(HH, "POST", "/v1/accounts:lookup", BH)
            }(LH, {
              idToken: AH
            }));
          bH(null === rH || void 0 === rH ? void 0 : rH.users.length, LH, "internal-error");
          const hH = rH.users[0];
          HH._notifyReloadListener(hH);
          const tH = (null === (BH = hH.providerUserInfo) || void 0 === BH ? void 0 : BH.length) ? hH.providerUserInfo.map((HH => {
            var {
              providerId: BH
            } = HH, LH = SH(HH, ["providerId"]);
            return {
              providerId: BH,
              uid: LH.rawId || "",
              displayName: LH.displayName || null,
              email: LH.email || null,
              phoneNumber: LH.phoneNumber || null,
              photoURL: LH.photoUrl || null
            }
          })) : [];
          const zH = (CH = HH.providerData, EH = tH, [...CH.filter((HH => !EH.some((BH => BH.providerId === HH.providerId)))), ...EH]);
          var CH, EH;
          const XH = HH.isAnonymous,
            GH = !(HH.email && hH.passwordHash) && !(null === zH || void 0 === zH ? void 0 : zH.length),
            YH = !!XH && GH,
            uH = {
              uid: hH.localId,
              displayName: hH.displayName || null,
              photoURL: hH.photoUrl || null,
              email: hH.email || null,
              emailVerified: hH.emailVerified || !1,
              phoneNumber: hH.phoneNumber || null,
              tenantId: hH.tenantId || null,
              providerData: zH,
              metadata: new pH(hH.createdAt, hH.lastLoginAt),
              isAnonymous: YH
            };
          Object.assign(HH, uH)
        }
        async function HB(HH) {
          const BH = (0, AH.P)(HH);
          await yH(BH), await BH.auth._persistUserIfCurrent(BH), BH.auth._notifyListenersIfCurrent(BH)
        }
        class BB {
          constructor() {
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null
          }
          get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4
          }
          updateFromServerResponse(HH) {
            bH(HH.idToken, "internal-error"), bH("undefined" !== typeof HH.idToken, "internal-error"), bH("undefined" !== typeof HH.refreshToken, "internal-error");
            const BH = "expiresIn" in HH && "undefined" !== typeof HH.expiresIn ? Number(HH.expiresIn) : function(HH) {
              const BH = sH(HH);
              return bH(BH, "internal-error"), bH("undefined" !== typeof BH.exp, "internal-error"), bH("undefined" !== typeof BH.iat, "internal-error"), Number(BH.exp) - Number(BH.iat)
            }(HH.idToken);
            this.updateTokensAndExpiration(HH.idToken, HH.refreshToken, BH)
          }
          async getToken(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return bH(!this.accessToken || this.refreshToken, HH, "user-token-expired"), BH || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(HH, this.refreshToken), this.accessToken) : null : this.accessToken
          }
          clearRefreshToken() {
            this.refreshToken = null
          }
          async refresh(HH, BH) {
            const {
              accessToken: LH,
              refreshToken: rH,
              expiresIn: SH
            } = await async function(HH, BH) {
              const LH = await RH(HH, {}, (async () => {
                const LH = (0, AH.ob)({
                    grant_type: "refresh_token",
                    refresh_token: BH
                  }).slice(1),
                  {
                    tokenApiHost: rH,
                    apiKey: SH
                  } = HH.config,
                  hH = nH(HH, rH, "/v1/token", `key=${SH}`),
                  tH = await HH._getAdditionalHeaders();
                return tH["Content-Type"] = "application/x-www-form-urlencoded", cH.fetch()(hH, {
                  method: "POST",
                  headers: tH,
                  body: LH
                })
              }));
              return {
                accessToken: LH.access_token,
                expiresIn: LH.expires_in,
                refreshToken: LH.refresh_token
              }
            }(HH, BH);
            this.updateTokensAndExpiration(LH, rH, Number(SH))
          }
          updateTokensAndExpiration(HH, BH, LH) {
            this.refreshToken = BH || null, this.accessToken = HH || null, this.expirationTime = Date.now() + 1e3 * LH
          }
          static fromJSON(HH, BH) {
            const {
              refreshToken: LH,
              accessToken: AH,
              expirationTime: rH
            } = BH, SH = new BB;
            return LH && (bH("string" === typeof LH, "internal-error", {
              appName: HH
            }), SH.refreshToken = LH), AH && (bH("string" === typeof AH, "internal-error", {
              appName: HH
            }), SH.accessToken = AH), rH && (bH("number" === typeof rH, "internal-error", {
              appName: HH
            }), SH.expirationTime = rH), SH
          }
          toJSON() {
            return {
              refreshToken: this.refreshToken,
              accessToken: this.accessToken,
              expirationTime: this.expirationTime
            }
          }
          _assign(HH) {
            this.accessToken = HH.accessToken, this.refreshToken = HH.refreshToken, this.expirationTime = HH.expirationTime
          }
          _clone() {
            return Object.assign(new BB, this.toJSON())
          }
          _performRefresh() {
            return kH("not implemented")
          }
        }

        function LB(HH, BH) {
          bH("string" === typeof HH || "undefined" === typeof HH, "internal-error", {
            appName: BH
          })
        }
        class AB {
          constructor(HH) {
            var {
              uid: BH,
              auth: LH,
              stsTokenManager: AH
            } = HH, rH = SH(HH, ["uid", "auth", "stsTokenManager"]);
            this.providerId = "firebase", this.proactiveRefresh = new iH(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = BH, this.auth = LH, this.stsTokenManager = AH, this.accessToken = AH.accessToken, this.displayName = rH.displayName || null, this.email = rH.email || null, this.emailVerified = rH.emailVerified || !1, this.phoneNumber = rH.phoneNumber || null, this.photoURL = rH.photoURL || null, this.isAnonymous = rH.isAnonymous || !1, this.tenantId = rH.tenantId || null, this.providerData = rH.providerData ? [...rH.providerData] : [], this.metadata = new pH(rH.createdAt || void 0, rH.lastLoginAt || void 0)
          }
          async getIdToken(HH) {
            const BH = await JH(this, this.stsTokenManager.getToken(this.auth, HH));
            return bH(BH, this.auth, "internal-error"), this.accessToken !== BH && (this.accessToken = BH, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), BH
          }
          getIdTokenResult(HH) {
            return dH(this, HH)
          }
          reload() {
            return HB(this)
          }
          _assign(HH) {
            this !== HH && (bH(this.uid === HH.uid, this.auth, "internal-error"), this.displayName = HH.displayName, this.photoURL = HH.photoURL, this.email = HH.email, this.emailVerified = HH.emailVerified, this.phoneNumber = HH.phoneNumber, this.isAnonymous = HH.isAnonymous, this.tenantId = HH.tenantId, this.providerData = HH.providerData.map((HH => Object.assign({}, HH))), this.metadata._copy(HH.metadata), this.stsTokenManager._assign(HH.stsTokenManager))
          }
          _clone(HH) {
            const BH = new AB(Object.assign(Object.assign({}, this), {
              auth: HH,
              stsTokenManager: this.stsTokenManager._clone()
            }));
            return BH.metadata._copy(this.metadata), BH
          }
          _onReload(HH) {
            bH(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = HH, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
          }
          _notifyReloadListener(HH) {
            this.reloadListener ? this.reloadListener(HH) : this.reloadUserInfo = HH
          }
          _startProactiveRefresh() {
            this.proactiveRefresh._start()
          }
          _stopProactiveRefresh() {
            this.proactiveRefresh._stop()
          }
          async _updateTokensIfNecessary(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              LH = !1;
            HH.idToken && HH.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(HH), LH = !0), BH && await yH(this), await this.auth._persistUserIfCurrent(this), LH && this.auth._notifyListenersIfCurrent(this)
          }
          async delete() {
            const HH = await this.getIdToken();
            return await JH(this, async function(HH, BH) {
              return NH(HH, "POST", "/v1/accounts:delete", BH)
            }(this.auth, {
              idToken: HH
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
              providerData: this.providerData.map((HH => Object.assign({}, HH))),
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
          static _fromJSON(HH, BH) {
            var LH, AH, rH, SH, hH, tH, zH, CH;
            const EH = null !== (LH = BH.displayName) && void 0 !== LH ? LH : void 0,
              XH = null !== (AH = BH.email) && void 0 !== AH ? AH : void 0,
              GH = null !== (rH = BH.phoneNumber) && void 0 !== rH ? rH : void 0,
              YH = null !== (SH = BH.photoURL) && void 0 !== SH ? SH : void 0,
              uH = null !== (hH = BH.tenantId) && void 0 !== hH ? hH : void 0,
              QH = null !== (tH = BH._redirectEventId) && void 0 !== tH ? tH : void 0,
              WH = null !== (zH = BH.createdAt) && void 0 !== zH ? zH : void 0,
              MH = null !== (CH = BH.lastLoginAt) && void 0 !== CH ? CH : void 0,
              {
                uid: xH,
                emailVerified: vH,
                isAnonymous: PH,
                providerData: TH,
                stsTokenManager: UH
              } = BH;
            bH(xH && UH, HH, "internal-error");
            const VH = BB.fromJSON(this.name, UH);
            bH("string" === typeof xH, HH, "internal-error"), LB(EH, HH.name), LB(XH, HH.name), bH("boolean" === typeof vH, HH, "internal-error"), bH("boolean" === typeof PH, HH, "internal-error"), LB(GH, HH.name), LB(YH, HH.name), LB(uH, HH.name), LB(QH, HH.name), LB(WH, HH.name), LB(MH, HH.name);
            const OH = new AB({
              uid: xH,
              auth: HH,
              email: XH,
              emailVerified: vH,
              displayName: EH,
              isAnonymous: PH,
              photoURL: YH,
              phoneNumber: GH,
              tenantId: uH,
              stsTokenManager: VH,
              createdAt: WH,
              lastLoginAt: MH
            });
            return TH && Array.isArray(TH) && (OH.providerData = TH.map((HH => Object.assign({}, HH)))), QH && (OH._redirectEventId = QH), OH
          }
          static async _fromIdTokenResponse(HH, BH) {
            let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const AH = new BB;
            AH.updateFromServerResponse(BH);
            const rH = new AB({
              uid: BH.localId,
              auth: HH,
              stsTokenManager: AH,
              isAnonymous: LH
            });
            return await yH(rH), rH
          }
        }
        const rB = new Map;

        function SB(HH) {
          mH(HH instanceof Function, "Expected a class definition");
          let BH = rB.get(HH);
          return BH ? (mH(BH instanceof HH, "Instance stored in cache mismatched with class"), BH) : (BH = new HH, rB.set(HH, BH), BH)
        }
        class hB {
          constructor() {
            this.type = "NONE", this.storage = {}
          }
          async _isAvailable() {
            return !0
          }
          async _set(HH, BH) {
            this.storage[HH] = BH
          }
          async _get(HH) {
            const BH = this.storage[HH];
            return void 0 === BH ? null : BH
          }
          async _remove(HH) {
            delete this.storage[HH]
          }
          _addListener(HH, BH) {}
          _removeListener(HH, BH) {}
        }
        hB.type = "NONE";
        const tB = hB;

        function zB(HH, BH, LH) {
          return `firebase:${HH}:${BH}:${LH}`
        }
        class CB {
          constructor(HH, BH, LH) {
            this.persistence = HH, this.auth = BH, this.userKey = LH;
            const {
              config: AH,
              name: rH
            } = this.auth;
            this.fullUserKey = zB(this.userKey, AH.apiKey, rH), this.fullPersistenceKey = zB("persistence", AH.apiKey, rH), this.boundEventHandler = BH._onStorageEvent.bind(BH), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
          }
          setCurrentUser(HH) {
            return this.persistence._set(this.fullUserKey, HH.toJSON())
          }
          async getCurrentUser() {
            const HH = await this.persistence._get(this.fullUserKey);
            return HH ? AB._fromJSON(this.auth, HH) : null
          }
          removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey)
          }
          savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
          }
          async setPersistence(HH) {
            if (this.persistence === HH) return;
            const BH = await this.getCurrentUser();
            return await this.removeCurrentUser(), this.persistence = HH, BH ? this.setCurrentUser(BH) : void 0
          }
          delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
          }
          static async create(HH, BH) {
            let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "authUser";
            if (!BH.length) return new CB(SB(tB), HH, LH);
            const AH = (await Promise.all(BH.map((async HH => {
              if (await HH._isAvailable()) return HH
            })))).filter((HH => HH));
            let rH = AH[0] || SB(tB);
            const SH = zB(LH, HH.config.apiKey, HH.name);
            let hH = null;
            for (const CH of BH) try {
              const BH = await CH._get(SH);
              if (BH) {
                const LH = AB._fromJSON(HH, BH);
                CH !== rH && (hH = LH), rH = CH;
                break
              }
            } catch (zH) {}
            const tH = AH.filter((HH => HH._shouldAllowMigration));
            return rH._shouldAllowMigration && tH.length ? (rH = tH[0], hH && await rH._set(SH, hH.toJSON()), await Promise.all(BH.map((async HH => {
              if (HH !== rH) try {
                await HH._remove(SH)
              } catch (zH) {}
            }))), new CB(rH, HH, LH)) : new CB(rH, HH, LH)
          }
        }

        function EB(HH) {
          const BH = HH.toLowerCase();
          if (BH.includes("opera/") || BH.includes("opr/") || BH.includes("opios/")) return "Opera";
          if (uB(BH)) return "IEMobile";
          if (BH.includes("msie") || BH.includes("trident/")) return "IE";
          if (BH.includes("edge/")) return "Edge";
          if (XB(BH)) return "Firefox";
          if (BH.includes("silk/")) return "Silk";
          if (WB(BH)) return "Blackberry";
          if (MB(BH)) return "Webos";
          if (GB(BH)) return "Safari";
          if ((BH.includes("chrome/") || YB(BH)) && !BH.includes("edge/")) return "Chrome";
          if (QB(BH)) return "Android";
          {
            const BH = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
              LH = HH.match(BH);
            if (2 === (null === LH || void 0 === LH ? void 0 : LH.length)) return LH[1]
          }
          return "Other"
        }

        function XB() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, AH.T)();
          return /firefox\//i.test(HH)
        }

        function GB() {
          const HH = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, AH.T)()).toLowerCase();
          return HH.includes("safari/") && !HH.includes("chrome/") && !HH.includes("crios/") && !HH.includes("android")
        }

        function YB() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, AH.T)();
          return /crios\//i.test(HH)
        }

        function uB() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, AH.T)();
          return /iemobile/i.test(HH)
        }

        function QB() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, AH.T)();
          return /android/i.test(HH)
        }

        function WB() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, AH.T)();
          return /blackberry/i.test(HH)
        }

        function MB() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, AH.T)();
          return /webos/i.test(HH)
        }

        function xB() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, AH.T)();
          return /iphone|ipad|ipod/i.test(HH) || /macintosh/i.test(HH) && /mobile/i.test(HH)
        }

        function vB() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, AH.T)();
          return xB(HH) || QB(HH) || MB(HH) || WB(HH) || /windows phone/i.test(HH) || uB(HH)
        }

        function PB(HH) {
          let BH, LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          switch (HH) {
            case "Browser":
              BH = EB((0, AH.T)());
              break;
            case "Worker":
              BH = `${EB((0,AH.T)())}-${HH}`;
              break;
            default:
              BH = HH
          }
          const SH = LH.length ? LH.join(",") : "FirebaseCore-web";
          return `${BH}/JsCore/${rH.f}/${SH}`
        }
        async function TB(HH, BH) {
          return NH(HH, "GET", "/v2/recaptchaConfig", gH(HH, BH))
        }

        function UB(HH) {
          return void 0 !== HH && void 0 !== HH.getResponse
        }

        function VB(HH) {
          return void 0 !== HH && void 0 !== HH.enterprise
        }
        class OB {
          constructor(HH) {
            if (this.siteKey = "", this.emailPasswordEnabled = !1, void 0 === HH.recaptchaKey) throw new Error("recaptchaKey undefined");
            this.siteKey = HH.recaptchaKey.split("/")[3], this.emailPasswordEnabled = HH.recaptchaEnforcementState.some((HH => "EMAIL_PASSWORD_PROVIDER" === HH.provider && "OFF" !== HH.enforcementState))
          }
        }

        function bB(HH) {
          return new Promise(((BH, LH) => {
            const AH = document.createElement("script");
            AH.setAttribute("src", HH), AH.onload = BH, AH.onerror = HH => {
                const BH = TH("internal-error");
                BH.customData = HH, LH(BH)
              }, AH.type = "text/javascript", AH.charset = "UTF-8",
              function() {
                var HH, BH;
                return null !== (BH = null === (HH = document.getElementsByTagName("head")) || void 0 === HH ? void 0 : HH[0]) && void 0 !== BH ? BH : document
              }().appendChild(AH)
          }))
        }

        function kB(HH) {
          return `__${HH}${Math.floor(1e6*Math.random())}`
        }
        class mB {
          constructor(HH) {
            this.type = "recaptcha-enterprise", this.auth = lB(HH)
          }
          async verify() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
              BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            function LH(BH, LH, AH) {
              const rH = window.grecaptcha;
              VB(rH) ? rH.enterprise.ready((() => {
                rH.enterprise.execute(BH, {
                  action: HH
                }).then((HH => {
                  LH(HH)
                })).catch((() => {
                  LH("NO_RECAPTCHA")
                }))
              })) : AH(Error("No reCAPTCHA enterprise script loaded."))
            }
            return new Promise(((HH, AH) => {
              (async function(HH) {
                if (!BH) {
                  if (null == HH.tenantId && null != HH._agentRecaptchaConfig) return HH._agentRecaptchaConfig.siteKey;
                  if (null != HH.tenantId && void 0 !== HH._tenantRecaptchaConfigs[HH.tenantId]) return HH._tenantRecaptchaConfigs[HH.tenantId].siteKey
                }
                return new Promise((async (BH, LH) => {
                  TB(HH, {
                    clientType: "CLIENT_TYPE_WEB",
                    version: "RECAPTCHA_ENTERPRISE"
                  }).then((AH => {
                    if (void 0 !== AH.recaptchaKey) {
                      const LH = new OB(AH);
                      return null == HH.tenantId ? HH._agentRecaptchaConfig = LH : HH._tenantRecaptchaConfigs[HH.tenantId] = LH, BH(LH.siteKey)
                    }
                    LH(new Error("recaptcha Enterprise site key undefined"))
                  })).catch((HH => {
                    LH(HH)
                  }))
                }))
              })(this.auth).then((rH => {
                if (!BH && VB(window.grecaptcha)) LH(rH, HH, AH);
                else {
                  if ("undefined" === typeof window) return void AH(new Error("RecaptchaVerifier is only supported in browser"));
                  bB("https://www.google.com/recaptcha/enterprise.js?render=" + rH).then((() => {
                    LH(rH, HH, AH)
                  })).catch((HH => {
                    AH(HH)
                  }))
                }
              })).catch((HH => {
                AH(HH)
              }))
            }))
          }
        }
        async function oB(HH, BH, LH) {
          let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const rH = new mB(HH);
          let SH;
          try {
            SH = await rH.verify(LH)
          } catch (tH) {
            SH = await rH.verify(LH, !0)
          }
          const hH = Object.assign({}, BH);
          return AH ? Object.assign(hH, {
            captchaResp: SH
          }) : Object.assign(hH, {
            captchaResponse: SH
          }), Object.assign(hH, {
            clientType: "CLIENT_TYPE_WEB"
          }), Object.assign(hH, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
          }), hH
        }
        class IB {
          constructor(HH) {
            this.auth = HH, this.queue = []
          }
          pushCallback(HH, BH) {
            const LH = BH => new Promise(((LH, AH) => {
              try {
                LH(HH(BH))
              } catch (rH) {
                AH(rH)
              }
            }));
            LH.onAbort = BH, this.queue.push(LH);
            const AH = this.queue.length - 1;
            return () => {
              this.queue[AH] = () => Promise.resolve()
            }
          }
          async runMiddleware(HH) {
            if (this.auth.currentUser === HH) return;
            const BH = [];
            try {
              for (const LH of this.queue) await LH(HH), LH.onAbort && BH.push(LH.onAbort)
            } catch (LH) {
              BH.reverse();
              for (const HH of BH) try {
                HH()
              } catch (AH) {}
              throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: null === LH || void 0 === LH ? void 0 : LH.message
              })
            }
          }
        }
        class fB {
          constructor(HH, BH, LH, AH) {
            this.app = HH, this.heartbeatServiceProvider = BH, this.appCheckServiceProvider = LH, this.config = AH, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new KB(this), this.idTokenSubscription = new KB(this), this.beforeStateQueue = new IB(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = WH, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
              appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = HH.name, this.clientVersion = AH.sdkClientVersion
          }
          _initializeWithPersistence(HH, BH) {
            return BH && (this._popupRedirectResolver = SB(BH)), this._initializationPromise = this.queue((async () => {
              var LH, AH;
              if (!this._deleted && (this.persistenceManager = await CB.create(this, HH), !this._deleted)) {
                if (null === (LH = this._popupRedirectResolver) || void 0 === LH ? void 0 : LH._shouldInitProactively) try {
                  await this._popupRedirectResolver._initialize(this)
                } catch (rH) {}
                await this.initializeCurrentUser(BH), this.lastNotifiedUid = (null === (AH = this.currentUser) || void 0 === AH ? void 0 : AH.uid) || null, this._deleted || (this._isInitialized = !0)
              }
            })), this._initializationPromise
          }
          async _onStorageEvent() {
            if (this._deleted) return;
            const HH = await this.assertedPersistence.getCurrentUser();
            return this.currentUser || HH ? this.currentUser && HH && this.currentUser.uid === HH.uid ? (this._currentUser._assign(HH), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(HH, !0) : void 0
          }
          async initializeCurrentUser(HH) {
            var BH;
            const LH = await this.assertedPersistence.getCurrentUser();
            let AH = LH,
              rH = !1;
            if (HH && this.config.authDomain) {
              await this.getOrInitRedirectPersistenceManager();
              const LH = null === (BH = this.redirectUser) || void 0 === BH ? void 0 : BH._redirectEventId,
                SH = null === AH || void 0 === AH ? void 0 : AH._redirectEventId,
                hH = await this.tryRedirectSignIn(HH);
              LH && LH !== SH || !(null === hH || void 0 === hH ? void 0 : hH.user) || (AH = hH.user, rH = !0)
            }
            if (!AH) return this.directlySetCurrentUser(null);
            if (!AH._redirectEventId) {
              if (rH) try {
                await this.beforeStateQueue.runMiddleware(AH)
              } catch (SH) {
                AH = LH, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(SH)))
              }
              return AH ? this.reloadAndSetCurrentUserOrClear(AH) : this.directlySetCurrentUser(null)
            }
            return bH(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === AH._redirectEventId ? this.directlySetCurrentUser(AH) : this.reloadAndSetCurrentUserOrClear(AH)
          }
          async tryRedirectSignIn(HH) {
            let BH = null;
            try {
              BH = await this._popupRedirectResolver._completeRedirectFn(this, HH, !0)
            } catch (LH) {
              await this._setRedirectUser(null)
            }
            return BH
          }
          async reloadAndSetCurrentUserOrClear(HH) {
            try {
              await yH(HH)
            } catch (BH) {
              if ("auth/network-request-failed" !== (null === BH || void 0 === BH ? void 0 : BH.code)) return this.directlySetCurrentUser(null)
            }
            return this.directlySetCurrentUser(HH)
          }
          useDeviceLanguage() {
            this.languageCode = function() {
              if ("undefined" === typeof navigator) return null;
              const HH = navigator;
              return HH.languages && HH.languages[0] || HH.language || null
            }()
          }
          async _delete() {
            this._deleted = !0
          }
          async updateCurrentUser(HH) {
            const BH = HH ? (0, AH.P)(HH) : null;
            return BH && bH(BH.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(BH && BH._clone(this))
          }
          async _updateCurrentUser(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this._deleted) return HH && bH(this.tenantId === HH.tenantId, this, "tenant-id-mismatch"), BH || await this.beforeStateQueue.runMiddleware(HH), this.queue((async () => {
              await this.directlySetCurrentUser(HH), this.notifyAuthListeners()
            }))
          }
          async signOut() {
            return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
          }
          setPersistence(HH) {
            return this.queue((async () => {
              await this.assertedPersistence.setPersistence(SB(HH))
            }))
          }
          async initializeRecaptchaConfig() {
            const HH = await TB(this, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }),
              BH = new OB(HH);
            if (null == this.tenantId ? this._agentRecaptchaConfig = BH : this._tenantRecaptchaConfigs[this.tenantId] = BH, BH.emailPasswordEnabled) {
              new mB(this).verify()
            }
          }
          _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
          }
          _getPersistence() {
            return this.assertedPersistence.persistence.type
          }
          _updateErrorMap(HH) {
            this._errorFactory = new AH.h("auth", "Firebase", HH())
          }
          onAuthStateChanged(HH, BH, LH) {
            return this.registerStateListener(this.authStateSubscription, HH, BH, LH)
          }
          beforeAuthStateChanged(HH, BH) {
            return this.beforeStateQueue.pushCallback(HH, BH)
          }
          onIdTokenChanged(HH, BH, LH) {
            return this.registerStateListener(this.idTokenSubscription, HH, BH, LH)
          }
          toJSON() {
            var HH;
            return {
              apiKey: this.config.apiKey,
              authDomain: this.config.authDomain,
              appName: this.name,
              currentUser: null === (HH = this._currentUser) || void 0 === HH ? void 0 : HH.toJSON()
            }
          }
          async _setRedirectUser(HH, BH) {
            const LH = await this.getOrInitRedirectPersistenceManager(BH);
            return null === HH ? LH.removeCurrentUser() : LH.setCurrentUser(HH)
          }
          async getOrInitRedirectPersistenceManager(HH) {
            if (!this.redirectPersistenceManager) {
              const BH = HH && SB(HH) || this._popupRedirectResolver;
              bH(BH, this, "argument-error"), this.redirectPersistenceManager = await CB.create(this, [SB(BH._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
            }
            return this.redirectPersistenceManager
          }
          async _redirectUserForId(HH) {
            var BH, LH;
            return this._isInitialized && await this.queue((async () => {})), (null === (BH = this._currentUser) || void 0 === BH ? void 0 : BH._redirectEventId) === HH ? this._currentUser : (null === (LH = this.redirectUser) || void 0 === LH ? void 0 : LH._redirectEventId) === HH ? this.redirectUser : null
          }
          async _persistUserIfCurrent(HH) {
            if (HH === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(HH)))
          }
          _notifyListenersIfCurrent(HH) {
            HH === this.currentUser && this.notifyAuthListeners()
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
            var HH, BH;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            const LH = null !== (BH = null === (HH = this.currentUser) || void 0 === HH ? void 0 : HH.uid) && void 0 !== BH ? BH : null;
            this.lastNotifiedUid !== LH && (this.lastNotifiedUid = LH, this.authStateSubscription.next(this.currentUser))
          }
          registerStateListener(HH, BH, LH, AH) {
            if (this._deleted) return () => {};
            const rH = "function" === typeof BH ? BH : BH.next.bind(BH),
              SH = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            return bH(SH, this, "internal-error"), SH.then((() => rH(this.currentUser))), "function" === typeof BH ? HH.addObserver(BH, LH, AH) : HH.addObserver(BH)
          }
          async directlySetCurrentUser(HH) {
            this.currentUser && this.currentUser !== HH && this._currentUser._stopProactiveRefresh(), HH && this.isProactiveRefreshEnabled && HH._startProactiveRefresh(), this.currentUser = HH, HH ? await this.assertedPersistence.setCurrentUser(HH) : await this.assertedPersistence.removeCurrentUser()
          }
          queue(HH) {
            return this.operations = this.operations.then(HH, HH), this.operations
          }
          get assertedPersistence() {
            return bH(this.persistenceManager, this, "internal-error"), this.persistenceManager
          }
          _logFramework(HH) {
            HH && !this.frameworks.includes(HH) && (this.frameworks.push(HH), this.frameworks.sort(), this.clientVersion = PB(this.config.clientPlatform, this._getFrameworks()))
          }
          _getFrameworks() {
            return this.frameworks
          }
          async _getAdditionalHeaders() {
            var HH;
            const BH = {
              "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (BH["X-Firebase-gmpid"] = this.app.options.appId);
            const LH = await (null === (HH = this.heartbeatServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === HH ? void 0 : HH.getHeartbeatsHeader());
            LH && (BH["X-Firebase-Client"] = LH);
            const AH = await this._getAppCheckToken();
            return AH && (BH["X-Firebase-AppCheck"] = AH), BH
          }
          async _getAppCheckToken() {
            var HH;
            const BH = await (null === (HH = this.appCheckServiceProvider.getImmediate({
              optional: !0
            })) || void 0 === HH ? void 0 : HH.getToken());
            return (null === BH || void 0 === BH ? void 0 : BH.error) && function(HH) {
              if (xH.logLevel <= hH.e.WARN) {
                for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
                xH.warn(`Auth (${rH.f}): ${HH}`, ...LH)
              }
            }(`Error while retrieving App Check token: ${BH.error}`), null === BH || void 0 === BH ? void 0 : BH.token
          }
        }

        function lB(HH) {
          return (0, AH.P)(HH)
        }
        class KB {
          constructor(HH) {
            this.auth = HH, this.observer = null, this.addObserver = (0, AH.A)((HH => this.observer = HH))
          }
          get next() {
            return bH(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
          }
        }

        function cB(HH, BH) {
          const LH = (0, rH.r)(HH, "auth");
          if (LH.isInitialized()) {
            const HH = LH.getImmediate(),
              rH = LH.getOptions();
            if ((0, AH.D)(rH, null !== BH && void 0 !== BH ? BH : {})) return HH;
            PH(HH, "already-initialized")
          }
          return LH.initialize({
            options: BH
          })
        }

        function eB(HH, BH, LH) {
          const AH = lB(HH);
          bH(AH._canInitEmulator, AH, "emulator-config-failed"), bH(/^https?:\/\//.test(BH), AH, "invalid-emulator-scheme");
          const rH = !!(null === LH || void 0 === LH ? void 0 : LH.disableWarnings),
            SH = qB(BH),
            {
              host: hH,
              port: tH
            } = function(HH) {
              const BH = qB(HH),
                LH = /(\/\/)?([^?#/]+)/.exec(HH.substr(BH.length));
              if (!LH) return {
                host: "",
                port: null
              };
              const AH = LH[2].split("@").pop() || "",
                rH = /^(\[[^\]]+\])(:|$)/.exec(AH);
              if (rH) {
                const HH = rH[1];
                return {
                  host: HH,
                  port: gB(AH.substr(HH.length + 1))
                }
              } {
                const [HH, BH] = AH.split(":");
                return {
                  host: HH,
                  port: gB(BH)
                }
              }
            }(BH),
            zH = null === tH ? "" : `:${tH}`;
          AH.config.emulator = {
            url: `${SH}//${hH}${zH}/`
          }, AH.settings.appVerificationDisabledForTesting = !0, AH.emulatorConfig = Object.freeze({
            host: hH,
            port: tH,
            protocol: SH.replace(":", ""),
            options: Object.freeze({
              disableWarnings: rH
            })
          }), rH || function() {
            function HH() {
              const HH = document.createElement("p"),
                BH = HH.style;
              HH.innerText = "Running in emulator mode. Do not use with production credentials.", BH.position = "fixed", BH.width = "100%", BH.backgroundColor = "#ffffff", BH.border = ".1em solid #000000", BH.color = "#b50000", BH.bottom = "0px", BH.left = "0px", BH.margin = "0px", BH.zIndex = "10000", BH.textAlign = "center", HH.classList.add("firebase-emulator-warning"), document.body.appendChild(HH)
            }
            "undefined" !== typeof console && "function" === typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
            "undefined" !== typeof window && "undefined" !== typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", HH) : HH())
          }()
        }

        function qB(HH) {
          const BH = HH.indexOf(":");
          return BH < 0 ? "" : HH.substr(0, BH + 1)
        }

        function gB(HH) {
          if (!HH) return null;
          const BH = Number(HH);
          return isNaN(BH) ? null : BH
        }
        class NB {
          constructor(HH, BH) {
            this.providerId = HH, this.signInMethod = BH
          }
          toJSON() {
            return kH("not implemented")
          }
          _getIdTokenResponse(HH) {
            return kH("not implemented")
          }
          _linkToIdToken(HH, BH) {
            return kH("not implemented")
          }
          _getReauthenticationResolver(HH) {
            return kH("not implemented")
          }
        }
        async function RB(HH, BH) {
          return NH(HH, "POST", "/v1/accounts:resetPassword", gH(HH, BH))
        }
        async function jB(HH, BH) {
          return NH(HH, "POST", "/v1/accounts:update", BH)
        }
        async function nB(HH, BH) {
          return jH(HH, "POST", "/v1/accounts:signInWithPassword", gH(HH, BH))
        }
        async function FB(HH, BH) {
          return NH(HH, "POST", "/v1/accounts:sendOobCode", gH(HH, BH))
        }
        async function DB(HH, BH) {
          return FB(HH, BH)
        }
        async function wB(HH, BH) {
          return FB(HH, BH)
        }
        class ZB extends NB {
          constructor(HH, BH, LH) {
            let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            super("password", LH), this._email = HH, this._password = BH, this._tenantId = AH
          }
          static _fromEmailAndPassword(HH, BH) {
            return new ZB(HH, BH, "password")
          }
          static _fromEmailAndCode(HH, BH) {
            return new ZB(HH, BH, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
          }
          toJSON() {
            return {
              email: this._email,
              password: this._password,
              signInMethod: this.signInMethod,
              tenantId: this._tenantId
            }
          }
          static fromJSON(HH) {
            const BH = "string" === typeof HH ? JSON.parse(HH) : HH;
            if ((null === BH || void 0 === BH ? void 0 : BH.email) && (null === BH || void 0 === BH ? void 0 : BH.password)) {
              if ("password" === BH.signInMethod) return this._fromEmailAndPassword(BH.email, BH.password);
              if ("emailLink" === BH.signInMethod) return this._fromEmailAndCode(BH.email, BH.password, BH.tenantId)
            }
            return null
          }
          async _getIdTokenResponse(HH) {
            var BH;
            switch (this.signInMethod) {
              case "password":
                const LH = {
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password,
                  clientType: "CLIENT_TYPE_WEB"
                };
                if (null === (BH = HH._getRecaptchaConfig()) || void 0 === BH ? void 0 : BH.emailPasswordEnabled) {
                  const BH = await oB(HH, LH, "signInWithPassword");
                  return nB(HH, BH)
                }
                return nB(HH, LH).catch((async BH => {
                  if ("auth/missing-recaptcha-token" === BH.code) {
                    console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                    const BH = await oB(HH, LH, "signInWithPassword");
                    return nB(HH, BH)
                  }
                  return Promise.reject(BH)
                }));
              case "emailLink":
                return async function(HH, BH) {
                  return jH(HH, "POST", "/v1/accounts:signInWithEmailLink", gH(HH, BH))
                }(HH, {
                  email: this._email,
                  oobCode: this._password
                });
              default:
                PH(HH, "internal-error")
            }
          }
          async _linkToIdToken(HH, BH) {
            switch (this.signInMethod) {
              case "password":
                return jB(HH, {
                  idToken: BH,
                  returnSecureToken: !0,
                  email: this._email,
                  password: this._password
                });
              case "emailLink":
                return async function(HH, BH) {
                  return jH(HH, "POST", "/v1/accounts:signInWithEmailLink", gH(HH, BH))
                }(HH, {
                  idToken: BH,
                  email: this._email,
                  oobCode: this._password
                });
              default:
                PH(HH, "internal-error")
            }
          }
          _getReauthenticationResolver(HH) {
            return this._getIdTokenResponse(HH)
          }
        }
        async function dB(HH, BH) {
          return jH(HH, "POST", "/v1/accounts:signInWithIdp", gH(HH, BH))
        }
        class aB extends NB {
          constructor() {
            super(...arguments), this.pendingToken = null
          }
          static _fromParams(HH) {
            const BH = new aB(HH.providerId, HH.signInMethod);
            return HH.idToken || HH.accessToken ? (HH.idToken && (BH.idToken = HH.idToken), HH.accessToken && (BH.accessToken = HH.accessToken), HH.nonce && !HH.pendingToken && (BH.nonce = HH.nonce), HH.pendingToken && (BH.pendingToken = HH.pendingToken)) : HH.oauthToken && HH.oauthTokenSecret ? (BH.accessToken = HH.oauthToken, BH.secret = HH.oauthTokenSecret) : PH("argument-error"), BH
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
          static fromJSON(HH) {
            const BH = "string" === typeof HH ? JSON.parse(HH) : HH,
              {
                providerId: LH,
                signInMethod: AH
              } = BH,
              rH = SH(BH, ["providerId", "signInMethod"]);
            if (!LH || !AH) return null;
            const hH = new aB(LH, AH);
            return hH.idToken = rH.idToken || void 0, hH.accessToken = rH.accessToken || void 0, hH.secret = rH.secret, hH.nonce = rH.nonce, hH.pendingToken = rH.pendingToken || null, hH
          }
          _getIdTokenResponse(HH) {
            return dB(HH, this.buildRequest())
          }
          _linkToIdToken(HH, BH) {
            const LH = this.buildRequest();
            return LH.idToken = BH, dB(HH, LH)
          }
          _getReauthenticationResolver(HH) {
            const BH = this.buildRequest();
            return BH.autoCreate = !1, dB(HH, BH)
          }
          buildRequest() {
            const HH = {
              requestUri: "http://localhost",
              returnSecureToken: !0
            };
            if (this.pendingToken) HH.pendingToken = this.pendingToken;
            else {
              const BH = {};
              this.idToken && (BH.id_token = this.idToken), this.accessToken && (BH.access_token = this.accessToken), this.secret && (BH.oauth_token_secret = this.secret), BH.providerId = this.providerId, this.nonce && !this.pendingToken && (BH.nonce = this.nonce), HH.postBody = (0, AH.ob)(BH)
            }
            return HH
          }
        }
        const sB = {
          USER_NOT_FOUND: "user-not-found"
        };
        class JB extends NB {
          constructor(HH) {
            super("phone", "phone"), this.params = HH
          }
          static _fromVerification(HH, BH) {
            return new JB({
              verificationId: HH,
              verificationCode: BH
            })
          }
          static _fromTokenResponse(HH, BH) {
            return new JB({
              phoneNumber: HH,
              temporaryProof: BH
            })
          }
          _getIdTokenResponse(HH) {
            return async function(HH, BH) {
              return jH(HH, "POST", "/v1/accounts:signInWithPhoneNumber", gH(HH, BH))
            }(HH, this._makeVerificationRequest())
          }
          _linkToIdToken(HH, BH) {
            return async function(HH, BH) {
              const LH = await jH(HH, "POST", "/v1/accounts:signInWithPhoneNumber", gH(HH, BH));
              if (LH.temporaryProof) throw DH(HH, "account-exists-with-different-credential", LH);
              return LH
            }(HH, Object.assign({
              idToken: BH
            }, this._makeVerificationRequest()))
          }
          _getReauthenticationResolver(HH) {
            return async function(HH, BH) {
              return jH(HH, "POST", "/v1/accounts:signInWithPhoneNumber", gH(HH, Object.assign(Object.assign({}, BH), {
                operation: "REAUTH"
              })), sB)
            }(HH, this._makeVerificationRequest())
          }
          _makeVerificationRequest() {
            const {
              temporaryProof: HH,
              phoneNumber: BH,
              verificationId: LH,
              verificationCode: AH
            } = this.params;
            return HH && BH ? {
              temporaryProof: HH,
              phoneNumber: BH
            } : {
              sessionInfo: LH,
              code: AH
            }
          }
          toJSON() {
            const HH = {
              providerId: this.providerId
            };
            return this.params.phoneNumber && (HH.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (HH.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (HH.verificationCode = this.params.verificationCode), this.params.verificationId && (HH.verificationId = this.params.verificationId), HH
          }
          static fromJSON(HH) {
            "string" === typeof HH && (HH = JSON.parse(HH));
            const {
              verificationId: BH,
              verificationCode: LH,
              phoneNumber: AH,
              temporaryProof: rH
            } = HH;
            return LH || BH || AH || rH ? new JB({
              verificationId: BH,
              verificationCode: LH,
              phoneNumber: AH,
              temporaryProof: rH
            }) : null
          }
        }
        class iB {
          constructor(HH) {
            var BH, LH, rH, SH, hH, tH;
            const zH = (0, AH.kb)((0, AH.F)(HH)),
              CH = null !== (BH = zH.apiKey) && void 0 !== BH ? BH : null,
              EH = null !== (LH = zH.oobCode) && void 0 !== LH ? LH : null,
              XH = function(HH) {
                switch (HH) {
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
              }(null !== (rH = zH.mode) && void 0 !== rH ? rH : null);
            bH(CH && EH && XH, "argument-error"), this.apiKey = CH, this.operation = XH, this.code = EH, this.continueUrl = null !== (SH = zH.continueUrl) && void 0 !== SH ? SH : null, this.languageCode = null !== (hH = zH.languageCode) && void 0 !== hH ? hH : null, this.tenantId = null !== (tH = zH.tenantId) && void 0 !== tH ? tH : null
          }
          static parseLink(HH) {
            const BH = function(HH) {
              const BH = (0, AH.kb)((0, AH.F)(HH)).link,
                LH = BH ? (0, AH.kb)((0, AH.F)(BH)).deep_link_id : null,
                rH = (0, AH.kb)((0, AH.F)(HH)).deep_link_id;
              return (rH ? (0, AH.kb)((0, AH.F)(rH)).link : null) || rH || LH || BH || HH
            }(HH);
            try {
              return new iB(BH)
            } catch (LH) {
              return null
            }
          }
        }

        function pB(HH) {
          return iB.parseLink(HH)
        }
        class yB {
          constructor() {
            this.providerId = yB.PROVIDER_ID
          }
          static credential(HH, BH) {
            return ZB._fromEmailAndPassword(HH, BH)
          }
          static credentialWithLink(HH, BH) {
            const LH = iB.parseLink(BH);
            return bH(LH, "argument-error"), ZB._fromEmailAndCode(HH, LH.code, LH.tenantId)
          }
        }
        yB.PROVIDER_ID = "password", yB.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", yB.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
        class HL {
          constructor(HH) {
            this.providerId = HH, this.defaultLanguageCode = null, this.customParameters = {}
          }
          setDefaultLanguage(HH) {
            this.defaultLanguageCode = HH
          }
          setCustomParameters(HH) {
            return this.customParameters = HH, this
          }
          getCustomParameters() {
            return this.customParameters
          }
        }
        class BL extends HL {
          constructor() {
            super(...arguments), this.scopes = []
          }
          addScope(HH) {
            return this.scopes.includes(HH) || this.scopes.push(HH), this
          }
          getScopes() {
            return [...this.scopes]
          }
        }
        class LL extends BL {
          static credentialFromJSON(HH) {
            const BH = "string" === typeof HH ? JSON.parse(HH) : HH;
            return bH("providerId" in BH && "signInMethod" in BH, "argument-error"), aB._fromParams(BH)
          }
          credential(HH) {
            return this._credential(Object.assign(Object.assign({}, HH), {
              nonce: HH.rawNonce
            }))
          }
          _credential(HH) {
            return bH(HH.idToken || HH.accessToken, "argument-error"), aB._fromParams(Object.assign(Object.assign({}, HH), {
              providerId: this.providerId,
              signInMethod: this.providerId
            }))
          }
          static credentialFromResult(HH) {
            return LL.oauthCredentialFromTaggedObject(HH)
          }
          static credentialFromError(HH) {
            return LL.oauthCredentialFromTaggedObject(HH.customData || {})
          }
          static oauthCredentialFromTaggedObject(HH) {
            let {
              _tokenResponse: BH
            } = HH;
            if (!BH) return null;
            const {
              oauthIdToken: LH,
              oauthAccessToken: AH,
              oauthTokenSecret: rH,
              pendingToken: SH,
              nonce: hH,
              providerId: tH
            } = BH;
            if (!AH && !rH && !LH && !SH) return null;
            if (!tH) return null;
            try {
              return new LL(tH)._credential({
                idToken: LH,
                accessToken: AH,
                nonce: hH,
                pendingToken: SH
              })
            } catch (zH) {
              return null
            }
          }
        }
        class AL extends BL {
          constructor() {
            super("facebook.com")
          }
          static credential(HH) {
            return aB._fromParams({
              providerId: AL.PROVIDER_ID,
              signInMethod: AL.FACEBOOK_SIGN_IN_METHOD,
              accessToken: HH
            })
          }
          static credentialFromResult(HH) {
            return AL.credentialFromTaggedObject(HH)
          }
          static credentialFromError(HH) {
            return AL.credentialFromTaggedObject(HH.customData || {})
          }
          static credentialFromTaggedObject(HH) {
            let {
              _tokenResponse: BH
            } = HH;
            if (!BH || !("oauthAccessToken" in BH)) return null;
            if (!BH.oauthAccessToken) return null;
            try {
              return AL.credential(BH.oauthAccessToken)
            } catch (LH) {
              return null
            }
          }
        }
        AL.FACEBOOK_SIGN_IN_METHOD = "facebook.com", AL.PROVIDER_ID = "facebook.com";
        class rL extends BL {
          constructor() {
            super("google.com"), this.addScope("profile")
          }
          static credential(HH, BH) {
            return aB._fromParams({
              providerId: rL.PROVIDER_ID,
              signInMethod: rL.GOOGLE_SIGN_IN_METHOD,
              idToken: HH,
              accessToken: BH
            })
          }
          static credentialFromResult(HH) {
            return rL.credentialFromTaggedObject(HH)
          }
          static credentialFromError(HH) {
            return rL.credentialFromTaggedObject(HH.customData || {})
          }
          static credentialFromTaggedObject(HH) {
            let {
              _tokenResponse: BH
            } = HH;
            if (!BH) return null;
            const {
              oauthIdToken: LH,
              oauthAccessToken: AH
            } = BH;
            if (!LH && !AH) return null;
            try {
              return rL.credential(LH, AH)
            } catch (rH) {
              return null
            }
          }
        }
        rL.GOOGLE_SIGN_IN_METHOD = "google.com", rL.PROVIDER_ID = "google.com";
        class SL extends BL {
          constructor() {
            super("github.com")
          }
          static credential(HH) {
            return aB._fromParams({
              providerId: SL.PROVIDER_ID,
              signInMethod: SL.GITHUB_SIGN_IN_METHOD,
              accessToken: HH
            })
          }
          static credentialFromResult(HH) {
            return SL.credentialFromTaggedObject(HH)
          }
          static credentialFromError(HH) {
            return SL.credentialFromTaggedObject(HH.customData || {})
          }
          static credentialFromTaggedObject(HH) {
            let {
              _tokenResponse: BH
            } = HH;
            if (!BH || !("oauthAccessToken" in BH)) return null;
            if (!BH.oauthAccessToken) return null;
            try {
              return SL.credential(BH.oauthAccessToken)
            } catch (LH) {
              return null
            }
          }
        }
        SL.GITHUB_SIGN_IN_METHOD = "github.com", SL.PROVIDER_ID = "github.com";
        class hL extends NB {
          constructor(HH, BH) {
            super(HH, HH), this.pendingToken = BH
          }
          _getIdTokenResponse(HH) {
            return dB(HH, this.buildRequest())
          }
          _linkToIdToken(HH, BH) {
            const LH = this.buildRequest();
            return LH.idToken = BH, dB(HH, LH)
          }
          _getReauthenticationResolver(HH) {
            const BH = this.buildRequest();
            return BH.autoCreate = !1, dB(HH, BH)
          }
          toJSON() {
            return {
              signInMethod: this.signInMethod,
              providerId: this.providerId,
              pendingToken: this.pendingToken
            }
          }
          static fromJSON(HH) {
            const BH = "string" === typeof HH ? JSON.parse(HH) : HH,
              {
                providerId: LH,
                signInMethod: AH,
                pendingToken: rH
              } = BH;
            return LH && AH && rH && LH === AH ? new hL(LH, rH) : null
          }
          static _create(HH, BH) {
            return new hL(HH, BH)
          }
          buildRequest() {
            return {
              requestUri: "http://localhost",
              returnSecureToken: !0,
              pendingToken: this.pendingToken
            }
          }
        }
        class tL extends HL {
          constructor(HH) {
            bH(HH.startsWith("saml."), "argument-error"), super(HH)
          }
          static credentialFromResult(HH) {
            return tL.samlCredentialFromTaggedObject(HH)
          }
          static credentialFromError(HH) {
            return tL.samlCredentialFromTaggedObject(HH.customData || {})
          }
          static credentialFromJSON(HH) {
            const BH = hL.fromJSON(HH);
            return bH(BH, "argument-error"), BH
          }
          static samlCredentialFromTaggedObject(HH) {
            let {
              _tokenResponse: BH
            } = HH;
            if (!BH) return null;
            const {
              pendingToken: LH,
              providerId: AH
            } = BH;
            if (!LH || !AH) return null;
            try {
              return hL._create(AH, LH)
            } catch (rH) {
              return null
            }
          }
        }
        class zL extends BL {
          constructor() {
            super("twitter.com")
          }
          static credential(HH, BH) {
            return aB._fromParams({
              providerId: zL.PROVIDER_ID,
              signInMethod: zL.TWITTER_SIGN_IN_METHOD,
              oauthToken: HH,
              oauthTokenSecret: BH
            })
          }
          static credentialFromResult(HH) {
            return zL.credentialFromTaggedObject(HH)
          }
          static credentialFromError(HH) {
            return zL.credentialFromTaggedObject(HH.customData || {})
          }
          static credentialFromTaggedObject(HH) {
            let {
              _tokenResponse: BH
            } = HH;
            if (!BH) return null;
            const {
              oauthAccessToken: LH,
              oauthTokenSecret: AH
            } = BH;
            if (!LH || !AH) return null;
            try {
              return zL.credential(LH, AH)
            } catch (rH) {
              return null
            }
          }
        }
        async function CL(HH, BH) {
          return jH(HH, "POST", "/v1/accounts:signUp", gH(HH, BH))
        }
        zL.TWITTER_SIGN_IN_METHOD = "twitter.com", zL.PROVIDER_ID = "twitter.com";
        class EL {
          constructor(HH) {
            this.user = HH.user, this.providerId = HH.providerId, this._tokenResponse = HH._tokenResponse, this.operationType = HH.operationType
          }
          static async _fromIdTokenResponse(HH, BH, LH) {
            let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            const rH = await AB._fromIdTokenResponse(HH, LH, AH),
              SH = XL(LH);
            return new EL({
              user: rH,
              providerId: SH,
              _tokenResponse: LH,
              operationType: BH
            })
          }
          static async _forOperation(HH, BH, LH) {
            await HH._updateTokensIfNecessary(LH, !0);
            const AH = XL(LH);
            return new EL({
              user: HH,
              providerId: AH,
              _tokenResponse: LH,
              operationType: BH
            })
          }
        }

        function XL(HH) {
          return HH.providerId ? HH.providerId : "phoneNumber" in HH ? "phone" : null
        }
        async function GL(HH) {
          var BH;
          const LH = lB(HH);
          if (await LH._initializationPromise, null === (BH = LH.currentUser) || void 0 === BH ? void 0 : BH.isAnonymous) return new EL({
            user: LH.currentUser,
            providerId: null,
            operationType: "signIn"
          });
          const AH = await CL(LH, {
              returnSecureToken: !0
            }),
            rH = await EL._fromIdTokenResponse(LH, "signIn", AH, !0);
          return await LH._updateCurrentUser(rH.user), rH
        }
        class YL extends AH.j {
          constructor(HH, BH, LH, AH) {
            var rH;
            super(BH.code, BH.message), this.operationType = LH, this.user = AH, Object.setPrototypeOf(this, YL.prototype), this.customData = {
              appName: HH.name,
              tenantId: null !== (rH = HH.tenantId) && void 0 !== rH ? rH : void 0,
              _serverResponse: BH.customData._serverResponse,
              operationType: LH
            }
          }
          static _fromErrorAndOperation(HH, BH, LH, AH) {
            return new YL(HH, BH, LH, AH)
          }
        }

        function uL(HH, BH, LH, AH) {
          return ("reauthenticate" === BH ? LH._getReauthenticationResolver(HH) : LH._getIdTokenResponse(HH)).catch((LH => {
            if ("auth/multi-factor-auth-required" === LH.code) throw YL._fromErrorAndOperation(HH, LH, BH, AH);
            throw LH
          }))
        }

        function QL(HH) {
          return new Set(HH.map((HH => {
            let {
              providerId: BH
            } = HH;
            return BH
          })).filter((HH => !!HH)))
        }
        async function WL(HH, BH) {
          const LH = (0, AH.P)(HH);
          await xL(!0, LH, BH);
          const {
            providerUserInfo: rH
          } = await async function(HH, BH) {
            return NH(HH, "POST", "/v1/accounts:update", BH)
          }(LH.auth, {
            idToken: await LH.getIdToken(),
            deleteProvider: [BH]
          }), SH = QL(rH || []);
          return LH.providerData = LH.providerData.filter((HH => SH.has(HH.providerId))), SH.has("phone") || (LH.phoneNumber = null), await LH.auth._persistUserIfCurrent(LH), LH
        }
        async function ML(HH, BH) {
          let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const AH = await JH(HH, BH._linkToIdToken(HH.auth, await HH.getIdToken()), LH);
          return EL._forOperation(HH, "link", AH)
        }
        async function xL(HH, BH, LH) {
          await yH(BH);
          const AH = !1 === HH ? "provider-already-linked" : "no-such-provider";
          bH(QL(BH.providerData).has(LH) === HH, BH.auth, AH)
        }
        async function vL(HH, BH) {
          let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            auth: AH
          } = HH, rH = "reauthenticate";
          try {
            const SH = await JH(HH, uL(AH, rH, BH, HH), LH);
            bH(SH.idToken, AH, "internal-error");
            const hH = sH(SH.idToken);
            bH(hH, AH, "internal-error");
            const {
              sub: tH
            } = hH;
            return bH(HH.uid === tH, AH, "user-mismatch"), EL._forOperation(HH, rH, SH)
          } catch (SH) {
            throw "auth/user-not-found" === (null === SH || void 0 === SH ? void 0 : SH.code) && PH(AH, "user-mismatch"), SH
          }
        }
        async function PL(HH, BH) {
          let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const AH = "signIn",
            rH = await uL(HH, AH, BH),
            SH = await EL._fromIdTokenResponse(HH, AH, rH);
          return LH || await HH._updateCurrentUser(SH.user), SH
        }
        async function TL(HH, BH) {
          return PL(lB(HH), BH)
        }
        async function UL(HH, BH) {
          const LH = (0, AH.P)(HH);
          return await xL(!1, LH, BH.providerId), ML(LH, BH)
        }
        async function VL(HH, BH) {
          return vL((0, AH.P)(HH), BH)
        }
        async function OL(HH, BH) {
          const LH = lB(HH),
            AH = await async function(HH, BH) {
              return jH(HH, "POST", "/v1/accounts:signInWithCustomToken", gH(HH, BH))
            }(LH, {
              token: BH,
              returnSecureToken: !0
            }), rH = await EL._fromIdTokenResponse(LH, "signIn", AH);
          return await LH._updateCurrentUser(rH.user), rH
        }
        class bL {
          constructor(HH, BH) {
            this.factorId = HH, this.uid = BH.mfaEnrollmentId, this.enrollmentTime = new Date(BH.enrolledAt).toUTCString(), this.displayName = BH.displayName
          }
          static _fromServerResponse(HH, BH) {
            return "phoneInfo" in BH ? kL._fromServerResponse(HH, BH) : "totpInfo" in BH ? mL._fromServerResponse(HH, BH) : PH(HH, "internal-error")
          }
        }
        class kL extends bL {
          constructor(HH) {
            super("phone", HH), this.phoneNumber = HH.phoneInfo
          }
          static _fromServerResponse(HH, BH) {
            return new kL(BH)
          }
        }
        class mL extends bL {
          constructor(HH) {
            super("totp", HH)
          }
          static _fromServerResponse(HH, BH) {
            return new mL(BH)
          }
        }

        function oL(HH, BH, LH) {
          var AH;
          bH((null === (AH = LH.url) || void 0 === AH ? void 0 : AH.length) > 0, HH, "invalid-continue-uri"), bH("undefined" === typeof LH.dynamicLinkDomain || LH.dynamicLinkDomain.length > 0, HH, "invalid-dynamic-link-domain"), BH.continueUrl = LH.url, BH.dynamicLinkDomain = LH.dynamicLinkDomain, BH.canHandleCodeInApp = LH.handleCodeInApp, LH.iOS && (bH(LH.iOS.bundleId.length > 0, HH, "missing-ios-bundle-id"), BH.iOSBundleId = LH.iOS.bundleId), LH.android && (bH(LH.android.packageName.length > 0, HH, "missing-android-pkg-name"), BH.androidInstallApp = LH.android.installApp, BH.androidMinimumVersionCode = LH.android.minimumVersion, BH.androidPackageName = LH.android.packageName)
        }
        async function IL(HH, BH, LH) {
          var AH;
          const rH = lB(HH),
            SH = {
              requestType: "PASSWORD_RESET",
              email: BH,
              clientType: "CLIENT_TYPE_WEB"
            };
          if (null === (AH = rH._getRecaptchaConfig()) || void 0 === AH ? void 0 : AH.emailPasswordEnabled) {
            const HH = await oB(rH, SH, "getOobCode", !0);
            LH && oL(rH, HH, LH), await DB(rH, HH)
          } else LH && oL(rH, SH, LH), await DB(rH, SH).catch((async HH => {
            if ("auth/missing-recaptcha-token" !== HH.code) return Promise.reject(HH);
            {
              console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
              const HH = await oB(rH, SH, "getOobCode", !0);
              LH && oL(rH, HH, LH), await DB(rH, HH)
            }
          }))
        }
        async function fL(HH, BH, LH) {
          await RB((0, AH.P)(HH), {
            oobCode: BH,
            newPassword: LH
          })
        }
        async function lL(HH, BH) {
          await async function(HH, BH) {
            return NH(HH, "POST", "/v1/accounts:update", gH(HH, BH))
          }((0, AH.P)(HH), {
            oobCode: BH
          })
        }
        async function KL(HH, BH) {
          const LH = (0, AH.P)(HH),
            rH = await RB(LH, {
              oobCode: BH
            }),
            SH = rH.requestType;
          switch (bH(SH, LH, "internal-error"), SH) {
            case "EMAIL_SIGNIN":
              break;
            case "VERIFY_AND_CHANGE_EMAIL":
              bH(rH.newEmail, LH, "internal-error");
              break;
            case "REVERT_SECOND_FACTOR_ADDITION":
              bH(rH.mfaInfo, LH, "internal-error");
            default:
              bH(rH.email, LH, "internal-error")
          }
          let hH = null;
          return rH.mfaInfo && (hH = bL._fromServerResponse(lB(LH), rH.mfaInfo)), {
            data: {
              email: ("VERIFY_AND_CHANGE_EMAIL" === rH.requestType ? rH.newEmail : rH.email) || null,
              previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === rH.requestType ? rH.email : rH.newEmail) || null,
              multiFactorInfo: hH
            },
            operation: SH
          }
        }
        async function cL(HH, BH) {
          const {
            data: LH
          } = await KL((0, AH.P)(HH), BH);
          return LH.email
        }
        async function eL(HH, BH, LH) {
          var AH;
          const rH = lB(HH),
            SH = {
              returnSecureToken: !0,
              email: BH,
              password: LH,
              clientType: "CLIENT_TYPE_WEB"
            };
          let hH;
          if (null === (AH = rH._getRecaptchaConfig()) || void 0 === AH ? void 0 : AH.emailPasswordEnabled) {
            const HH = await oB(rH, SH, "signUpPassword");
            hH = CL(rH, HH)
          } else hH = CL(rH, SH).catch((async HH => {
            if ("auth/missing-recaptcha-token" === HH.code) {
              console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
              const HH = await oB(rH, SH, "signUpPassword");
              return CL(rH, HH)
            }
            return Promise.reject(HH)
          }));
          const tH = await hH.catch((HH => Promise.reject(HH))),
            zH = await EL._fromIdTokenResponse(rH, "signIn", tH);
          return await rH._updateCurrentUser(zH.user), zH
        }

        function qL(HH, BH, LH) {
          return TL((0, AH.P)(HH), yB.credential(BH, LH))
        }
        async function gL(HH, BH, LH) {
          var AH;
          const rH = lB(HH),
            SH = {
              requestType: "EMAIL_SIGNIN",
              email: BH,
              clientType: "CLIENT_TYPE_WEB"
            };

          function hH(HH, BH) {
            bH(BH.handleCodeInApp, rH, "argument-error"), BH && oL(rH, HH, BH)
          }
          if (null === (AH = rH._getRecaptchaConfig()) || void 0 === AH ? void 0 : AH.emailPasswordEnabled) {
            const HH = await oB(rH, SH, "getOobCode", !0);
            hH(HH, LH), await wB(rH, HH)
          } else hH(SH, LH), await wB(rH, SH).catch((async HH => {
            if ("auth/missing-recaptcha-token" !== HH.code) return Promise.reject(HH);
            {
              console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
              const HH = await oB(rH, SH, "getOobCode", !0);
              hH(HH, LH), await wB(rH, HH)
            }
          }))
        }

        function NL(HH, BH) {
          const LH = iB.parseLink(BH);
          return "EMAIL_SIGNIN" === (null === LH || void 0 === LH ? void 0 : LH.operation)
        }
        async function RL(HH, BH, LH) {
          const rH = (0, AH.P)(HH),
            SH = yB.credentialWithLink(BH, LH || oH());
          return bH(SH._tenantId === (rH.tenantId || null), rH, "tenant-id-mismatch"), TL(rH, SH)
        }
        async function jL(HH, BH) {
          const LH = {
              identifier: BH,
              continueUri: IH() ? oH() : "http://localhost"
            },
            {
              signinMethods: rH
            } = await async function(HH, BH) {
              return NH(HH, "POST", "/v1/accounts:createAuthUri", gH(HH, BH))
            }((0, AH.P)(HH), LH);
          return rH || []
        }
        async function nL(HH, BH) {
          const LH = (0, AH.P)(HH),
            rH = {
              requestType: "VERIFY_EMAIL",
              idToken: await HH.getIdToken()
            };
          BH && oL(LH.auth, rH, BH);
          const {
            email: SH
          } = await async function(HH, BH) {
            return FB(HH, BH)
          }(LH.auth, rH);
          SH !== HH.email && await HH.reload()
        }
        async function FL(HH, BH, LH) {
          const rH = (0, AH.P)(HH),
            SH = {
              requestType: "VERIFY_AND_CHANGE_EMAIL",
              idToken: await HH.getIdToken(),
              newEmail: BH
            };
          LH && oL(rH.auth, SH, LH);
          const {
            email: hH
          } = await async function(HH, BH) {
            return FB(HH, BH)
          }(rH.auth, SH);
          hH !== HH.email && await HH.reload()
        }
        async function DL(HH, BH) {
          let {
            displayName: LH,
            photoURL: rH
          } = BH;
          if (void 0 === LH && void 0 === rH) return;
          const SH = (0, AH.P)(HH),
            hH = {
              idToken: await SH.getIdToken(),
              displayName: LH,
              photoUrl: rH,
              returnSecureToken: !0
            },
            tH = await JH(SH, async function(HH, BH) {
              return NH(HH, "POST", "/v1/accounts:update", BH)
            }(SH.auth, hH));
          SH.displayName = tH.displayName || null, SH.photoURL = tH.photoUrl || null;
          const zH = SH.providerData.find((HH => {
            let {
              providerId: BH
            } = HH;
            return "password" === BH
          }));
          zH && (zH.displayName = SH.displayName, zH.photoURL = SH.photoURL), await SH._updateTokensIfNecessary(tH)
        }

        function wL(HH, BH) {
          return dL((0, AH.P)(HH), BH, null)
        }

        function ZL(HH, BH) {
          return dL((0, AH.P)(HH), null, BH)
        }
        async function dL(HH, BH, LH) {
          const {
            auth: AH
          } = HH, rH = {
            idToken: await HH.getIdToken(),
            returnSecureToken: !0
          };
          BH && (rH.email = BH), LH && (rH.password = LH);
          const SH = await JH(HH, jB(AH, rH));
          await HH._updateTokensIfNecessary(SH, !0)
        }
        class aL {
          constructor(HH, BH) {
            let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.isNewUser = HH, this.providerId = BH, this.profile = LH
          }
        }
        class sL extends aL {
          constructor(HH, BH, LH, AH) {
            super(HH, BH, LH), this.username = AH
          }
        }
        class JL extends aL {
          constructor(HH, BH) {
            super(HH, "facebook.com", BH)
          }
        }
        class iL extends sL {
          constructor(HH, BH) {
            super(HH, "github.com", BH, "string" === typeof(null === BH || void 0 === BH ? void 0 : BH.login) ? null === BH || void 0 === BH ? void 0 : BH.login : null)
          }
        }
        class pL extends aL {
          constructor(HH, BH) {
            super(HH, "google.com", BH)
          }
        }
        class yL extends sL {
          constructor(HH, BH, LH) {
            super(HH, "twitter.com", BH, LH)
          }
        }

        function HA(HH) {
          const {
            user: BH,
            _tokenResponse: LH
          } = HH;
          return BH.isAnonymous && !LH ? {
            providerId: null,
            isNewUser: !1,
            profile: null
          } : function(HH) {
            var BH, LH;
            if (!HH) return null;
            const {
              providerId: AH
            } = HH, rH = HH.rawUserInfo ? JSON.parse(HH.rawUserInfo) : {}, SH = HH.isNewUser || "identitytoolkit#SignupNewUserResponse" === HH.kind;
            if (!AH && (null === HH || void 0 === HH ? void 0 : HH.idToken)) {
              const AH = null === (LH = null === (BH = sH(HH.idToken)) || void 0 === BH ? void 0 : BH.firebase) || void 0 === LH ? void 0 : LH.sign_in_provider;
              if (AH) return new aL(SH, "anonymous" !== AH && "custom" !== AH ? AH : null)
            }
            if (!AH) return null;
            switch (AH) {
              case "facebook.com":
                return new JL(SH, rH);
              case "github.com":
                return new iL(SH, rH);
              case "google.com":
                return new pL(SH, rH);
              case "twitter.com":
                return new yL(SH, rH, HH.screenName || null);
              case "custom":
              case "anonymous":
                return new aL(SH, null);
              default:
                return new aL(SH, AH, rH)
            }
          }(LH)
        }

        function BA(HH, BH) {
          return (0, AH.P)(HH).setPersistence(BH)
        }

        function LA(HH) {
          return lB(HH).initializeRecaptchaConfig()
        }

        function AA(HH, BH, LH, rH) {
          return (0, AH.P)(HH).onIdTokenChanged(BH, LH, rH)
        }

        function rA(HH, BH, LH) {
          return (0, AH.P)(HH).beforeAuthStateChanged(BH, LH)
        }

        function SA(HH, BH, LH, rH) {
          return (0, AH.P)(HH).onAuthStateChanged(BH, LH, rH)
        }

        function hA(HH) {
          (0, AH.P)(HH).useDeviceLanguage()
        }

        function tA(HH, BH) {
          return (0, AH.P)(HH).updateCurrentUser(BH)
        }

        function zA(HH) {
          return (0, AH.P)(HH).signOut()
        }
        async function CA(HH) {
          return (0, AH.P)(HH).delete()
        }
        class EA {
          constructor(HH, BH, LH) {
            this.type = HH, this.credential = BH, this.auth = LH
          }
          static _fromIdtoken(HH, BH) {
            return new EA("enroll", HH, BH)
          }
          static _fromMfaPendingCredential(HH) {
            return new EA("signin", HH)
          }
          toJSON() {
            const HH = "enroll" === this.type ? "idToken" : "pendingCredential";
            return {
              multiFactorSession: {
                [HH]: this.credential
              }
            }
          }
          static fromJSON(HH) {
            var BH, LH;
            if (null === HH || void 0 === HH ? void 0 : HH.multiFactorSession) {
              if (null === (BH = HH.multiFactorSession) || void 0 === BH ? void 0 : BH.pendingCredential) return EA._fromMfaPendingCredential(HH.multiFactorSession.pendingCredential);
              if (null === (LH = HH.multiFactorSession) || void 0 === LH ? void 0 : LH.idToken) return EA._fromIdtoken(HH.multiFactorSession.idToken)
            }
            return null
          }
        }
        class XA {
          constructor(HH, BH, LH) {
            this.session = HH, this.hints = BH, this.signInResolver = LH
          }
          static _fromError(HH, BH) {
            const LH = lB(HH),
              AH = BH.customData._serverResponse,
              rH = (AH.mfaInfo || []).map((HH => bL._fromServerResponse(LH, HH)));
            bH(AH.mfaPendingCredential, LH, "internal-error");
            const SH = EA._fromMfaPendingCredential(AH.mfaPendingCredential);
            return new XA(SH, rH, (async HH => {
              const rH = await HH._process(LH, SH);
              delete AH.mfaInfo, delete AH.mfaPendingCredential;
              const hH = Object.assign(Object.assign({}, AH), {
                idToken: rH.idToken,
                refreshToken: rH.refreshToken
              });
              switch (BH.operationType) {
                case "signIn":
                  const HH = await EL._fromIdTokenResponse(LH, BH.operationType, hH);
                  return await LH._updateCurrentUser(HH.user), HH;
                case "reauthenticate":
                  return bH(BH.user, LH, "internal-error"), EL._forOperation(BH.user, BH.operationType, hH);
                default:
                  PH(LH, "internal-error")
              }
            }))
          }
          async resolveSignIn(HH) {
            const BH = HH;
            return this.signInResolver(BH)
          }
        }

        function GA(HH, BH) {
          var LH;
          const rH = (0, AH.P)(HH),
            SH = BH;
          return bH(BH.customData.operationType, rH, "argument-error"), bH(null === (LH = SH.customData._serverResponse) || void 0 === LH ? void 0 : LH.mfaPendingCredential, rH, "argument-error"), XA._fromError(rH, SH)
        }
        class YA {
          constructor(HH) {
            this.user = HH, this.enrolledFactors = [], HH._onReload((BH => {
              BH.mfaInfo && (this.enrolledFactors = BH.mfaInfo.map((BH => bL._fromServerResponse(HH.auth, BH))))
            }))
          }
          static _fromUser(HH) {
            return new YA(HH)
          }
          async getSession() {
            return EA._fromIdtoken(await this.user.getIdToken(), this.user.auth)
          }
          async enroll(HH, BH) {
            const LH = HH,
              AH = await this.getSession(),
              rH = await JH(this.user, LH._process(this.user.auth, AH, BH));
            return await this.user._updateTokensIfNecessary(rH), this.user.reload()
          }
          async unenroll(HH) {
            const BH = "string" === typeof HH ? HH : HH.uid,
              LH = await this.user.getIdToken();
            try {
              const HH = await JH(this.user, (AH = this.user.auth, rH = {
                idToken: LH,
                mfaEnrollmentId: BH
              }, NH(AH, "POST", "/v2/accounts/mfaEnrollment:withdraw", gH(AH, rH))));
              this.enrolledFactors = this.enrolledFactors.filter((HH => {
                let {
                  uid: LH
                } = HH;
                return LH !== BH
              })), await this.user._updateTokensIfNecessary(HH), await this.user.reload()
            } catch (SH) {
              throw SH
            }
            var AH, rH
          }
        }
        const uA = new WeakMap;

        function QA(HH) {
          const BH = (0, AH.P)(HH);
          return uA.has(BH) || uA.set(BH, YA._fromUser(BH)), uA.get(BH)
        }
        const WA = "__sak";
        class MA {
          constructor(HH, BH) {
            this.storageRetriever = HH, this.type = BH
          }
          _isAvailable() {
            try {
              return this.storage ? (this.storage.setItem(WA, "1"), this.storage.removeItem(WA), Promise.resolve(!0)) : Promise.resolve(!1)
            } catch (HH) {
              return Promise.resolve(!1)
            }
          }
          _set(HH, BH) {
            return this.storage.setItem(HH, JSON.stringify(BH)), Promise.resolve()
          }
          _get(HH) {
            const BH = this.storage.getItem(HH);
            return Promise.resolve(BH ? JSON.parse(BH) : null)
          }
          _remove(HH) {
            return this.storage.removeItem(HH), Promise.resolve()
          }
          get storage() {
            return this.storageRetriever()
          }
        }
        class xA extends MA {
          constructor() {
            super((() => window.localStorage), "LOCAL"), this.boundEventHandler = (HH, BH) => this.onStorageEvent(HH, BH), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function() {
              const HH = (0, AH.T)();
              return GB(HH) || xB(HH)
            }() && function() {
              try {
                return !(!window || window === window.top)
              } catch (HH) {
                return !1
              }
            }(), this.fallbackToPolling = vB(), this._shouldAllowMigration = !0
          }
          forAllChangedKeys(HH) {
            for (const BH of Object.keys(this.listeners)) {
              const LH = this.storage.getItem(BH),
                AH = this.localCache[BH];
              LH !== AH && HH(BH, AH, LH)
            }
          }
          onStorageEvent(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!HH.key) return void this.forAllChangedKeys(((HH, BH, LH) => {
              this.notifyListeners(HH, LH)
            }));
            const LH = HH.key;
            if (BH ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
              const AH = this.storage.getItem(LH);
              if (HH.newValue !== AH) null !== HH.newValue ? this.storage.setItem(LH, HH.newValue) : this.storage.removeItem(LH);
              else if (this.localCache[LH] === HH.newValue && !BH) return
            }
            const rH = () => {
                const HH = this.storage.getItem(LH);
                (BH || this.localCache[LH] !== HH) && this.notifyListeners(LH, HH)
              },
              SH = this.storage.getItem(LH);
            (0, AH.bb)() && 10 === document.documentMode && SH !== HH.newValue && HH.newValue !== HH.oldValue ? setTimeout(rH, 10) : rH()
          }
          notifyListeners(HH, BH) {
            this.localCache[HH] = BH;
            const LH = this.listeners[HH];
            if (LH)
              for (const AH of Array.from(LH)) AH(BH ? JSON.parse(BH) : BH)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((() => {
              this.forAllChangedKeys(((HH, BH, LH) => {
                this.onStorageEvent(new StorageEvent("storage", {
                  key: HH,
                  oldValue: BH,
                  newValue: LH
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
          _addListener(HH, BH) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[HH] || (this.listeners[HH] = new Set, this.localCache[HH] = this.storage.getItem(HH)), this.listeners[HH].add(BH)
          }
          _removeListener(HH, BH) {
            this.listeners[HH] && (this.listeners[HH].delete(BH), 0 === this.listeners[HH].size && delete this.listeners[HH]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
          }
          async _set(HH, BH) {
            await super._set(HH, BH), this.localCache[HH] = JSON.stringify(BH)
          }
          async _get(HH) {
            const BH = await super._get(HH);
            return this.localCache[HH] = JSON.stringify(BH), BH
          }
          async _remove(HH) {
            await super._remove(HH), delete this.localCache[HH]
          }
        }
        xA.type = "LOCAL";
        const vA = xA;
        class PA extends MA {
          constructor() {
            super((() => window.sessionStorage), "SESSION")
          }
          _addListener(HH, BH) {}
          _removeListener(HH, BH) {}
        }
        PA.type = "SESSION";
        const TA = PA;
        class UA {
          constructor(HH) {
            this.eventTarget = HH, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
          }
          static _getInstance(HH) {
            const BH = this.receivers.find((BH => BH.isListeningto(HH)));
            if (BH) return BH;
            const LH = new UA(HH);
            return this.receivers.push(LH), LH
          }
          isListeningto(HH) {
            return this.eventTarget === HH
          }
          async handleEvent(HH) {
            const BH = HH,
              {
                eventId: LH,
                eventType: AH,
                data: rH
              } = BH.data,
              SH = this.handlersMap[AH];
            if (!(null === SH || void 0 === SH ? void 0 : SH.size)) return;
            BH.ports[0].postMessage({
              status: "ack",
              eventId: LH,
              eventType: AH
            });
            const hH = Array.from(SH).map((async HH => HH(BH.origin, rH))),
              tH = await
            function(HH) {
              return Promise.all(HH.map((async HH => {
                try {
                  return {
                    fulfilled: !0,
                    value: await HH
                  }
                } catch (BH) {
                  return {
                    fulfilled: !1,
                    reason: BH
                  }
                }
              })))
            }(hH);
            BH.ports[0].postMessage({
              status: "done",
              eventId: LH,
              eventType: AH,
              response: tH
            })
          }
          _subscribe(HH, BH) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[HH] || (this.handlersMap[HH] = new Set), this.handlersMap[HH].add(BH)
          }
          _unsubscribe(HH, BH) {
            this.handlersMap[HH] && BH && this.handlersMap[HH].delete(BH), BH && 0 !== this.handlersMap[HH].size || delete this.handlersMap[HH], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
          }
        }

        function VA() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
            LH = "";
          for (let AH = 0; AH < BH; AH++) LH += Math.floor(10 * Math.random());
          return HH + LH
        }
        UA.receivers = [];
        class OA {
          constructor(HH) {
            this.target = HH, this.handlers = new Set
          }
          removeMessageHandler(HH) {
            HH.messageChannel && (HH.messageChannel.port1.removeEventListener("message", HH.lT), HH.messageChannel.port1.close()), this.handlers.delete(HH)
          }
          async _send(HH, BH) {
            let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
            const AH = "undefined" !== typeof MessageChannel ? new MessageChannel : null;
            if (!AH) throw new Error("connection_unavailable");
            let rH, SH;
            return new Promise(((hH, tH) => {
              const zH = VA("", 20);
              AH.port1.start();
              const CH = setTimeout((() => {
                tH(new Error("unsupported_event"))
              }), LH);
              SH = {
                messageChannel: AH,
                lT(HH) {
                  const BH = HH;
                  if (BH.data.eventId === zH) switch (BH.data.status) {
                    case "ack":
                      clearTimeout(CH), rH = setTimeout((() => {
                        tH(new Error("timeout"))
                      }), 3e3);
                      break;
                    case "done":
                      clearTimeout(rH), hH(BH.data.response);
                      break;
                    default:
                      clearTimeout(CH), clearTimeout(rH), tH(new Error("invalid_response"))
                  }
                }
              }, this.handlers.add(SH), AH.port1.addEventListener("message", SH.lT), this.target.postMessage({
                eventType: HH,
                eventId: zH,
                data: BH
              }, [AH.port2])
            })).finally((() => {
              SH && this.removeMessageHandler(SH)
            }))
          }
        }

        function bA() {
          return window
        }

        function kA() {
          return "undefined" !== typeof bA().WorkerGlobalScope && "function" === typeof bA().importScripts
        }
        const mA = "firebaseLocalStorageDb",
          oA = "firebaseLocalStorage",
          IA = "fbase_key";
        class fA {
          constructor(HH) {
            this.request = HH
          }
          toPromise() {
            return new Promise(((HH, BH) => {
              this.request.addEventListener("success", (() => {
                HH(this.request.result)
              })), this.request.addEventListener("error", (() => {
                BH(this.request.error)
              }))
            }))
          }
        }

        function lA(HH, BH) {
          return HH.transaction([oA], BH ? "readwrite" : "readonly").objectStore(oA)
        }

        function KA() {
          const HH = indexedDB.open(mA, 1);
          return new Promise(((BH, LH) => {
            HH.addEventListener("error", (() => {
              LH(HH.error)
            })), HH.addEventListener("upgradeneeded", (() => {
              const BH = HH.result;
              try {
                BH.createObjectStore(oA, {
                  keyPath: IA
                })
              } catch (AH) {
                LH(AH)
              }
            })), HH.addEventListener("success", (async () => {
              const LH = HH.result;
              LH.objectStoreNames.contains(oA) ? BH(LH) : (LH.close(), await
                function() {
                  const HH = indexedDB.deleteDatabase(mA);
                  return new fA(HH).toPromise()
                }(), BH(await KA()))
            }))
          }))
        }
        async function cA(HH, BH, LH) {
          const AH = lA(HH, !0).put({
            [IA]: BH,
            value: LH
          });
          return new fA(AH).toPromise()
        }

        function eA(HH, BH) {
          const LH = lA(HH, !0).delete(BH);
          return new fA(LH).toPromise()
        }
        class qA {
          constructor() {
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then((() => {}), (() => {}))
          }
          async _openDb() {
            return this.db || (this.db = await KA()), this.db
          }
          async _withRetries(HH) {
            let BH = 0;
            for (;;) try {
              const BH = await this._openDb();
              return await HH(BH)
            } catch (LH) {
              if (BH++ > 3) throw LH;
              this.db && (this.db.close(), this.db = void 0)
            }
          }
          async initializeServiceWorkerMessaging() {
            return kA() ? this.initializeReceiver() : this.initializeSender()
          }
          async initializeReceiver() {
            this.receiver = UA._getInstance(kA() ? self : null), this.receiver._subscribe("keyChanged", (async (HH, BH) => ({
              keyProcessed: (await this._poll()).includes(BH.key)
            }))), this.receiver._subscribe("ping", (async (HH, BH) => ["keyChanged"]))
          }
          async initializeSender() {
            var HH, BH;
            if (this.activeServiceWorker = await async function() {
                if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
                try {
                  return (await navigator.serviceWorker.ready).active
                } catch (HH) {
                  return null
                }
              }(), !this.activeServiceWorker) return;
            this.sender = new OA(this.activeServiceWorker);
            const LH = await this.sender._send("ping", {}, 800);
            LH && (null === (HH = LH[0]) || void 0 === HH ? void 0 : HH.fulfilled) && (null === (BH = LH[0]) || void 0 === BH ? void 0 : BH.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0)
          }
          async notifyServiceWorker(HH) {
            if (this.sender && this.activeServiceWorker && function() {
                var HH;
                return (null === (HH = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === HH ? void 0 : HH.controller) || null
              }() === this.activeServiceWorker) try {
              await this.sender._send("keyChanged", {
                key: HH
              }, this.serviceWorkerReceiverAvailable ? 800 : 50)
            } catch (BH) {}
          }
          async _isAvailable() {
            try {
              if (!indexedDB) return !1;
              const HH = await KA();
              return await cA(HH, WA, "1"), await eA(HH, WA), !0
            } catch (HH) {}
            return !1
          }
          async _withPendingWrite(HH) {
            this.pendingWrites++;
            try {
              await HH()
            } finally {
              this.pendingWrites--
            }
          }
          async _set(HH, BH) {
            return this._withPendingWrite((async () => (await this._withRetries((LH => cA(LH, HH, BH))), this.localCache[HH] = BH, this.notifyServiceWorker(HH))))
          }
          async _get(HH) {
            const BH = await this._withRetries((BH => async function(HH, BH) {
              const LH = lA(HH, !1).get(BH),
                AH = await new fA(LH).toPromise();
              return void 0 === AH ? null : AH.value
            }(BH, HH)));
            return this.localCache[HH] = BH, BH
          }
          async _remove(HH) {
            return this._withPendingWrite((async () => (await this._withRetries((BH => eA(BH, HH))), delete this.localCache[HH], this.notifyServiceWorker(HH))))
          }
          async _poll() {
            const HH = await this._withRetries((HH => {
              const BH = lA(HH, !1).getAll();
              return new fA(BH).toPromise()
            }));
            if (!HH) return [];
            if (0 !== this.pendingWrites) return [];
            const BH = [],
              LH = new Set;
            for (const {
                fbase_key: AH,
                value: rH
              }
              of HH) LH.add(AH), JSON.stringify(this.localCache[AH]) !== JSON.stringify(rH) && (this.notifyListeners(AH, rH), BH.push(AH));
            for (const AH of Object.keys(this.localCache)) this.localCache[AH] && !LH.has(AH) && (this.notifyListeners(AH, null), BH.push(AH));
            return BH
          }
          notifyListeners(HH, BH) {
            this.localCache[HH] = BH;
            const LH = this.listeners[HH];
            if (LH)
              for (const AH of Array.from(LH)) AH(BH)
          }
          startPolling() {
            this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
          }
          stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
          }
          _addListener(HH, BH) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[HH] || (this.listeners[HH] = new Set, this._get(HH)), this.listeners[HH].add(BH)
          }
          _removeListener(HH, BH) {
            this.listeners[HH] && (this.listeners[HH].delete(BH), 0 === this.listeners[HH].size && delete this.listeners[HH]), 0 === Object.keys(this.listeners).length && this.stopPolling()
          }
        }
        qA.type = "LOCAL";
        const gA = qA;
        const NA = 1e12;
        class RA {
          constructor(HH) {
            this.auth = HH, this.counter = NA, this._widgets = new Map
          }
          render(HH, BH) {
            const LH = this.counter;
            return this._widgets.set(LH, new jA(HH, this.auth.name, BH || {})), this.counter++, LH
          }
          reset(HH) {
            var BH;
            const LH = HH || NA;
            null === (BH = this._widgets.get(LH)) || void 0 === BH || BH.delete(), this._widgets.delete(LH)
          }
          getResponse(HH) {
            var BH;
            const LH = HH || NA;
            return (null === (BH = this._widgets.get(LH)) || void 0 === BH ? void 0 : BH.getResponse()) || ""
          }
          async execute(HH) {
            var BH;
            const LH = HH || NA;
            return null === (BH = this._widgets.get(LH)) || void 0 === BH || BH.execute(), ""
          }
        }
        class jA {
          constructor(HH, BH, LH) {
            this.params = LH, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
              this.execute()
            };
            const AH = "string" === typeof HH ? document.getElementById(HH) : HH;
            bH(AH, "argument-error", {
              appName: BH
            }), this.container = AH, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
          }
          getResponse() {
            return this.checkIfDeleted(), this.responseToken
          }
          delete() {
            this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
          }
          execute() {
            this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
              this.responseToken = function(HH) {
                const BH = [],
                  LH = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let AH = 0; AH < HH; AH++) BH.push(LH.charAt(Math.floor(Math.random() * LH.length)));
                return BH.join("")
              }(50);
              const {
                callback: HH,
                "expired-callback": BH
              } = this.params;
              if (HH) try {
                HH(this.responseToken)
              } catch (LH) {}
              this.timerId = window.setTimeout((() => {
                if (this.timerId = null, this.responseToken = null, BH) try {
                  BH()
                } catch (LH) {}
                this.isVisible && this.execute()
              }), 6e4)
            }), 500))
          }
          checkIfDeleted() {
            if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
          }
        }
        const nA = kB("rcb"),
          FA = new lH(3e4, 6e4);
        class DA {
          constructor() {
            var HH;
            this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !!(null === (HH = bA().grecaptcha) || void 0 === HH ? void 0 : HH.render)
          }
          load(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return bH(function(HH) {
              return HH.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(HH)
            }(BH), HH, "argument-error"), this.shouldResolveImmediately(BH) && UB(bA().grecaptcha) ? Promise.resolve(bA().grecaptcha) : new Promise(((LH, rH) => {
              const SH = bA().setTimeout((() => {
                rH(TH(HH, "network-request-failed"))
              }), FA.get());
              bA()[nA] = () => {
                bA().clearTimeout(SH), delete bA()[nA];
                const AH = bA().grecaptcha;
                if (!AH || !UB(AH)) return void rH(TH(HH, "internal-error"));
                const hH = AH.render;
                AH.render = (HH, BH) => {
                  const LH = hH(HH, BH);
                  return this.counter++, LH
                }, this.hostLanguage = BH, LH(AH)
              };
              bB(`https://www.google.com/recaptcha/api.js??${(0,AH.ob)({onload:nA,render:"explicit",hl:BH})}`).catch((() => {
                clearTimeout(SH), rH(TH(HH, "internal-error"))
              }))
            }))
          }
          clearedOneInstance() {
            this.counter--
          }
          shouldResolveImmediately(HH) {
            var BH;
            return !!(null === (BH = bA().grecaptcha) || void 0 === BH ? void 0 : BH.render) && (HH === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
          }
        }
        class wA {
          async load(HH) {
            return new RA(HH)
          }
          clearedOneInstance() {}
        }
        const ZA = "recaptcha",
          dA = {
            theme: "light",
            type: "image"
          };
        class aA {
          constructor(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, dA),
              LH = arguments.length > 2 ? arguments[2] : void 0;
            this.parameters = BH, this.type = ZA, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = lB(LH), this.isInvisible = "invisible" === this.parameters.size, bH("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment");
            const AH = "string" === typeof HH ? document.getElementById(HH) : HH;
            bH(AH, this.auth, "argument-error"), this.container = AH, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new wA : new DA, this.validateStartingState()
          }
          async verify() {
            this.assertNotDestroyed();
            const HH = await this.render(),
              BH = this.getAssertedRecaptcha(),
              LH = BH.getResponse(HH);
            return LH || new Promise((LH => {
              const AH = HH => {
                HH && (this.tokenChangeListeners.delete(AH), LH(HH))
              };
              this.tokenChangeListeners.add(AH), this.isInvisible && BH.execute(HH)
            }))
          }
          render() {
            try {
              this.assertNotDestroyed()
            } catch (HH) {
              return Promise.reject(HH)
            }
            return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch((HH => {
              throw this.renderPromise = null, HH
            }))), this.renderPromise
          }
          _reset() {
            this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
          }
          clear() {
            this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((HH => {
              this.container.removeChild(HH)
            }))
          }
          validateStartingState() {
            bH(!this.parameters.sitekey, this.auth, "argument-error"), bH(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), bH("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
          }
          makeTokenCallback(HH) {
            return BH => {
              if (this.tokenChangeListeners.forEach((HH => HH(BH))), "function" === typeof HH) HH(BH);
              else if ("string" === typeof HH) {
                const LH = bA()[HH];
                "function" === typeof LH && LH(BH)
              }
            }
          }
          assertNotDestroyed() {
            bH(!this.destroyed, this.auth, "internal-error")
          }
          async makeRenderPromise() {
            if (await this.init(), !this.widgetId) {
              let HH = this.container;
              if (!this.isInvisible) {
                const BH = document.createElement("div");
                HH.appendChild(BH), HH = BH
              }
              this.widgetId = this.getAssertedRecaptcha().render(HH, this.parameters)
            }
            return this.widgetId
          }
          async init() {
            bH(IH() && !kA(), this.auth, "internal-error"), await
            function() {
              let HH = null;
              return new Promise((BH => {
                "complete" !== document.readyState ? (HH = () => BH(), window.addEventListener("load", HH)) : BH()
              })).catch((BH => {
                throw HH && window.removeEventListener("load", HH), BH
              }))
            }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
            const HH = await async function(HH) {
              return (await NH(HH, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
            }(this.auth);
            bH(HH, this.auth, "internal-error"), this.parameters.sitekey = HH
          }
          getAssertedRecaptcha() {
            return bH(this.recaptcha, this.auth, "internal-error"), this.recaptcha
          }
        }
        class sA {
          constructor(HH, BH) {
            this.verificationId = HH, this.onConfirmation = BH
          }
          confirm(HH) {
            const BH = JB._fromVerification(this.verificationId, HH);
            return this.onConfirmation(BH)
          }
        }
        async function JA(HH, BH, LH) {
          const rH = lB(HH),
            SH = await yA(rH, BH, (0, AH.P)(LH));
          return new sA(SH, (HH => TL(rH, HH)))
        }
        async function iA(HH, BH, LH) {
          const rH = (0, AH.P)(HH);
          await xL(!1, rH, "phone");
          const SH = await yA(rH.auth, BH, (0, AH.P)(LH));
          return new sA(SH, (HH => UL(rH, HH)))
        }
        async function pA(HH, BH, LH) {
          const rH = (0, AH.P)(HH),
            SH = await yA(rH.auth, BH, (0, AH.P)(LH));
          return new sA(SH, (HH => VL(rH, HH)))
        }
        async function yA(HH, BH, LH) {
          var AH;
          const rH = await LH.verify();
          try {
            let SH;
            if (bH("string" === typeof rH, HH, "argument-error"), bH(LH.type === ZA, HH, "argument-error"), SH = "string" === typeof BH ? {
                phoneNumber: BH
              } : BH, "session" in SH) {
              const BH = SH.session;
              if ("phoneNumber" in SH) {
                bH("enroll" === BH.type, HH, "internal-error");
                const LH = await
                function(HH, BH) {
                  return NH(HH, "POST", "/v2/accounts/mfaEnrollment:start", gH(HH, BH))
                }(HH, {
                  idToken: BH.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: SH.phoneNumber,
                    recaptchaToken: rH
                  }
                });
                return LH.phoneSessionInfo.sessionInfo
              } {
                bH("signin" === BH.type, HH, "internal-error");
                const LH = (null === (AH = SH.multiFactorHint) || void 0 === AH ? void 0 : AH.uid) || SH.multiFactorUid;
                bH(LH, HH, "missing-multi-factor-info");
                const hH = await
                function(HH, BH) {
                  return NH(HH, "POST", "/v2/accounts/mfaSignIn:start", gH(HH, BH))
                }(HH, {
                  mfaPendingCredential: BH.credential,
                  mfaEnrollmentId: LH,
                  phoneSignInInfo: {
                    recaptchaToken: rH
                  }
                });
                return hH.phoneResponseInfo.sessionInfo
              }
            } {
              const {
                sessionInfo: BH
              } = await async function(HH, BH) {
                return NH(HH, "POST", "/v1/accounts:sendVerificationCode", gH(HH, BH))
              }(HH, {
                phoneNumber: SH.phoneNumber,
                recaptchaToken: rH
              });
              return BH
            }
          } finally {
            LH._reset()
          }
        }
        async function Hr(HH, BH) {
          await ML((0, AH.P)(HH), BH)
        }
        class Br {
          constructor(HH) {
            this.providerId = Br.PROVIDER_ID, this.auth = lB(HH)
          }
          verifyPhoneNumber(HH, BH) {
            return yA(this.auth, HH, (0, AH.P)(BH))
          }
          static credential(HH, BH) {
            return JB._fromVerification(HH, BH)
          }
          static credentialFromResult(HH) {
            const BH = HH;
            return Br.credentialFromTaggedObject(BH)
          }
          static credentialFromError(HH) {
            return Br.credentialFromTaggedObject(HH.customData || {})
          }
          static credentialFromTaggedObject(HH) {
            let {
              _tokenResponse: BH
            } = HH;
            if (!BH) return null;
            const {
              phoneNumber: LH,
              temporaryProof: AH
            } = BH;
            return LH && AH ? JB._fromTokenResponse(LH, AH) : null
          }
        }

        function Lr(HH, BH) {
          return BH ? SB(BH) : (bH(HH._popupRedirectResolver, HH, "argument-error"), HH._popupRedirectResolver)
        }
        Br.PROVIDER_ID = "phone", Br.PHONE_SIGN_IN_METHOD = "phone";
        class Ar extends NB {
          constructor(HH) {
            super("custom", "custom"), this.params = HH
          }
          _getIdTokenResponse(HH) {
            return dB(HH, this._buildIdpRequest())
          }
          _linkToIdToken(HH, BH) {
            return dB(HH, this._buildIdpRequest(BH))
          }
          _getReauthenticationResolver(HH) {
            return dB(HH, this._buildIdpRequest())
          }
          _buildIdpRequest(HH) {
            const BH = {
              requestUri: this.params.requestUri,
              sessionId: this.params.sessionId,
              postBody: this.params.postBody,
              tenantId: this.params.tenantId,
              pendingToken: this.params.pendingToken,
              returnSecureToken: !0,
              returnIdpCredential: !0
            };
            return HH && (BH.idToken = HH), BH
          }
        }

        function rr(HH) {
          return PL(HH.auth, new Ar(HH), HH.bypassAuthState)
        }

        function Sr(HH) {
          const {
            auth: BH,
            user: LH
          } = HH;
          return bH(LH, BH, "internal-error"), vL(LH, new Ar(HH), HH.bypassAuthState)
        }
        async function hr(HH) {
          const {
            auth: BH,
            user: LH
          } = HH;
          return bH(LH, BH, "internal-error"), ML(LH, new Ar(HH), HH.bypassAuthState)
        }
        class tr {
          constructor(HH, BH, LH, AH) {
            let rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            this.auth = HH, this.resolver = LH, this.user = AH, this.bypassAuthState = rH, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(BH) ? BH : [BH]
          }
          execute() {
            return new Promise((async (HH, BH) => {
              this.pendingPromise = {
                resolve: HH,
                reject: BH
              };
              try {
                this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this)
              } catch (LH) {
                this.reject(LH)
              }
            }))
          }
          async onAuthEvent(HH) {
            const {
              urlResponse: BH,
              sessionId: LH,
              postBody: AH,
              tenantId: rH,
              error: SH,
              type: hH
            } = HH;
            if (SH) return void this.reject(SH);
            const tH = {
              auth: this.auth,
              requestUri: BH,
              sessionId: LH,
              tenantId: rH || void 0,
              postBody: AH || void 0,
              user: this.user,
              bypassAuthState: this.bypassAuthState
            };
            try {
              this.resolve(await this.getIdpTask(hH)(tH))
            } catch (zH) {
              this.reject(zH)
            }
          }
          onError(HH) {
            this.reject(HH)
          }
          getIdpTask(HH) {
            switch (HH) {
              case "signInViaPopup":
              case "signInViaRedirect":
                return rr;
              case "linkViaPopup":
              case "linkViaRedirect":
                return hr;
              case "reauthViaPopup":
              case "reauthViaRedirect":
                return Sr;
              default:
                PH(this.auth, "internal-error")
            }
          }
          resolve(HH) {
            mH(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(HH), this.unregisterAndCleanUp()
          }
          reject(HH) {
            mH(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(HH), this.unregisterAndCleanUp()
          }
          unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
          }
        }
        const zr = new lH(2e3, 1e4);
        async function Cr(HH, BH, LH) {
          const AH = lB(HH);
          VH(HH, BH, HL);
          const rH = Lr(AH, LH);
          return new Gr(AH, "signInViaPopup", BH, rH).executeNotNull()
        }
        async function Er(HH, BH, LH) {
          const rH = (0, AH.P)(HH);
          VH(rH.auth, BH, HL);
          const SH = Lr(rH.auth, LH);
          return new Gr(rH.auth, "reauthViaPopup", BH, SH, rH).executeNotNull()
        }
        async function Xr(HH, BH, LH) {
          const rH = (0, AH.P)(HH);
          VH(rH.auth, BH, HL);
          const SH = Lr(rH.auth, LH);
          return new Gr(rH.auth, "linkViaPopup", BH, SH, rH).executeNotNull()
        }
        class Gr extends tr {
          constructor(HH, BH, LH, AH, rH) {
            super(HH, BH, AH, rH), this.provider = LH, this.authWindow = null, this.pollId = null, Gr.currentPopupAction && Gr.currentPopupAction.cancel(), Gr.currentPopupAction = this
          }
          async executeNotNull() {
            const HH = await this.execute();
            return bH(HH, this.auth, "internal-error"), HH
          }
          async onExecution() {
            mH(1 === this.filter.length, "Popup operations only handle one event");
            const HH = VA();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], HH), this.authWindow.associatedEvent = HH, this.resolver._originValidation(this.auth).catch((HH => {
              this.reject(HH)
            })), this.resolver._isIframeWebStorageSupported(this.auth, (HH => {
              HH || this.reject(TH(this.auth, "web-storage-unsupported"))
            })), this.pollUserCancellation()
          }
          get eventId() {
            var HH;
            return (null === (HH = this.authWindow) || void 0 === HH ? void 0 : HH.associatedEvent) || null
          }
          cancel() {
            this.reject(TH(this.auth, "cancelled-popup-request"))
          }
          cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, Gr.currentPopupAction = null
          }
          pollUserCancellation() {
            const HH = () => {
              var BH, LH;
              (null === (LH = null === (BH = this.authWindow) || void 0 === BH ? void 0 : BH.window) || void 0 === LH ? void 0 : LH.closed) ? this.pollId = window.setTimeout((() => {
                this.pollId = null, this.reject(TH(this.auth, "popup-closed-by-user"))
              }), 8e3): this.pollId = window.setTimeout(HH, zr.get())
            };
            HH()
          }
        }
        Gr.currentPopupAction = null;
        const Yr = "pendingRedirect",
          ur = new Map;
        class Qr extends tr {
          constructor(HH, BH) {
            super(HH, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], BH, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.eventId = null
          }
          async execute() {
            let HH = ur.get(this.auth._key());
            if (!HH) {
              try {
                const BH = await async function(HH, BH) {
                  const LH = vr(BH),
                    AH = xr(HH);
                  if (!await AH._isAvailable()) return !1;
                  const rH = "true" === await AH._get(LH);
                  return await AH._remove(LH), rH
                }(this.resolver, this.auth) ? await super.execute() : null;
                HH = () => Promise.resolve(BH)
              } catch (BH) {
                HH = () => Promise.reject(BH)
              }
              ur.set(this.auth._key(), HH)
            }
            return this.bypassAuthState || ur.set(this.auth._key(), (() => Promise.resolve(null))), HH()
          }
          async onAuthEvent(HH) {
            if ("signInViaRedirect" === HH.type) return super.onAuthEvent(HH);
            if ("unknown" !== HH.type) {
              if (HH.eventId) {
                const BH = await this.auth._redirectUserForId(HH.eventId);
                if (BH) return this.user = BH, super.onAuthEvent(HH);
                this.resolve(null)
              }
            } else this.resolve(null)
          }
          async onExecution() {}
          cleanUp() {}
        }
        async function Wr(HH, BH) {
          return xr(HH)._set(vr(BH), "true")
        }

        function Mr(HH, BH) {
          ur.set(HH._key(), BH)
        }

        function xr(HH) {
          return SB(HH._redirectPersistence)
        }

        function vr(HH) {
          return zB(Yr, HH.config.apiKey, HH.name)
        }

        function Pr(HH, BH, LH) {
          return async function(HH, BH, LH) {
            const AH = lB(HH);
            VH(HH, BH, HL), await AH._initializationPromise;
            const rH = Lr(AH, LH);
            return await Wr(rH, AH), rH._openRedirect(AH, BH, "signInViaRedirect")
          }(HH, BH, LH)
        }

        function Tr(HH, BH, LH) {
          return async function(HH, BH, LH) {
            const rH = (0, AH.P)(HH);
            VH(rH.auth, BH, HL), await rH.auth._initializationPromise;
            const SH = Lr(rH.auth, LH);
            await Wr(SH, rH.auth);
            const hH = await br(rH);
            return SH._openRedirect(rH.auth, BH, "reauthViaRedirect", hH)
          }(HH, BH, LH)
        }

        function Ur(HH, BH, LH) {
          return async function(HH, BH, LH) {
            const rH = (0, AH.P)(HH);
            VH(rH.auth, BH, HL), await rH.auth._initializationPromise;
            const SH = Lr(rH.auth, LH);
            await xL(!1, rH, BH.providerId), await Wr(SH, rH.auth);
            const hH = await br(rH);
            return SH._openRedirect(rH.auth, BH, "linkViaRedirect", hH)
          }(HH, BH, LH)
        }
        async function Vr(HH, BH) {
          return await lB(HH)._initializationPromise, Or(HH, BH, !1)
        }
        async function Or(HH, BH) {
          let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const AH = lB(HH),
            rH = Lr(AH, BH),
            SH = new Qr(AH, rH, LH),
            hH = await SH.execute();
          return hH && !LH && (delete hH.user._redirectEventId, await AH._persistUserIfCurrent(hH.user), await AH._setRedirectUser(null, BH)), hH
        }
        async function br(HH) {
          const BH = VA(`${HH.uid}:::`);
          return HH._redirectEventId = BH, await HH.auth._setRedirectUser(HH), await HH.auth._persistUserIfCurrent(HH), BH
        }
        class kr {
          constructor(HH) {
            this.auth = HH, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
          }
          registerConsumer(HH) {
            this.consumers.add(HH), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, HH) && (this.sendToConsumer(this.queuedRedirectEvent, HH), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
          }
          unregisterConsumer(HH) {
            this.consumers.delete(HH)
          }
          onEvent(HH) {
            if (this.hasEventBeenHandled(HH)) return !1;
            let BH = !1;
            return this.consumers.forEach((LH => {
              this.isEventForConsumer(HH, LH) && (BH = !0, this.sendToConsumer(HH, LH), this.saveEventToCache(HH))
            })), this.hasHandledPotentialRedirect || ! function(HH) {
              switch (HH.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return or(HH);
                default:
                  return !1
              }
            }(HH) || (this.hasHandledPotentialRedirect = !0, BH || (this.queuedRedirectEvent = HH, BH = !0)), BH
          }
          sendToConsumer(HH, BH) {
            var LH;
            if (HH.error && !or(HH)) {
              const AH = (null === (LH = HH.error.code) || void 0 === LH ? void 0 : LH.split("auth/")[1]) || "internal-error";
              BH.onError(TH(this.auth, AH))
            } else BH.onAuthEvent(HH)
          }
          isEventForConsumer(HH, BH) {
            const LH = null === BH.eventId || !!HH.eventId && HH.eventId === BH.eventId;
            return BH.filter.includes(HH.type) && LH
          }
          hasEventBeenHandled(HH) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(mr(HH))
          }
          saveEventToCache(HH) {
            this.cachedEventUids.add(mr(HH)), this.lastProcessedEventTime = Date.now()
          }
        }

        function mr(HH) {
          return [HH.type, HH.eventId, HH.sessionId, HH.tenantId].filter((HH => HH)).join("-")
        }

        function or(HH) {
          let {
            type: BH,
            error: LH
          } = HH;
          return "unknown" === BH && "auth/no-auth-event" === (null === LH || void 0 === LH ? void 0 : LH.code)
        }
        const Ir = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          fr = /^https?/;
        async function lr(HH) {
          if (HH.config.emulator) return;
          const {
            authorizedDomains: BH
          } = await async function(HH) {
            return NH(HH, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }(HH);
          for (const AH of BH) try {
            if (Kr(AH)) return
          } catch (LH) {}
          PH(HH, "unauthorized-domain")
        }

        function Kr(HH) {
          const BH = oH(),
            {
              protocol: LH,
              hostname: AH
            } = new URL(BH);
          if (HH.startsWith("chrome-extension://")) {
            const rH = new URL(HH);
            return "" === rH.hostname && "" === AH ? "chrome-extension:" === LH && HH.replace("chrome-extension://", "") === BH.replace("chrome-extension://", "") : "chrome-extension:" === LH && rH.hostname === AH
          }
          if (!fr.test(LH)) return !1;
          if (Ir.test(HH)) return AH === HH;
          const rH = HH.replace(/\./g, "\\.");
          return new RegExp("^(.+\\." + rH + "|" + rH + ")$", "i").test(AH)
        }
        const cr = new lH(3e4, 6e4);

        function er() {
          const HH = bA().___jsl;
          if (null === HH || void 0 === HH ? void 0 : HH.H)
            for (const BH of Object.keys(HH.H))
              if (HH.H[BH].r = HH.H[BH].r || [], HH.H[BH].L = HH.H[BH].L || [], HH.H[BH].r = [...HH.H[BH].L], HH.CP)
                for (let LH = 0; LH < HH.CP.length; LH++) HH.CP[LH] = null
        }
        let qr = null;

        function gr(HH) {
          return qr = qr || function(HH) {
            return new Promise(((BH, LH) => {
              var AH, rH, SH;

              function hH() {
                er(), gapi.load("gapi.iframes", {
                  callback: () => {
                    BH(gapi.iframes.getContext())
                  },
                  ontimeout: () => {
                    er(), LH(TH(HH, "network-request-failed"))
                  },
                  timeout: cr.get()
                })
              }
              if (null === (rH = null === (AH = bA().gapi) || void 0 === AH ? void 0 : AH.iframes) || void 0 === rH ? void 0 : rH.Iframe) BH(gapi.iframes.getContext());
              else {
                if (!(null === (SH = bA().gapi) || void 0 === SH ? void 0 : SH.load)) {
                  const BH = kB("iframefcb");
                  return bA()[BH] = () => {
                    gapi.load ? hH() : LH(TH(HH, "network-request-failed"))
                  }, bB(`https://apis.google.com/js/api.js?onload=${BH}`).catch((HH => LH(HH)))
                }
                hH()
              }
            })).catch((HH => {
              throw qr = null, HH
            }))
          }(HH), qr
        }
        const Nr = new lH(5e3, 15e3),
          Rr = {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            },
            "aria-hidden": "true",
            tabindex: "-1"
          },
          jr = new Map([
            ["identitytoolkit.googleapis.com", "p"],
            ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
            ["test-identitytoolkit.sandbox.googleapis.com", "t"]
          ]);

        function nr(HH) {
          const BH = HH.config;
          bH(BH.authDomain, HH, "auth-domain-config-required");
          const LH = BH.emulator ? KH(BH, "emulator/auth/iframe") : `https://${HH.config.authDomain}/__/auth/iframe`,
            SH = {
              apiKey: BH.apiKey,
              appName: HH.name,
              v: rH.f
            },
            hH = jr.get(HH.config.apiHost);
          hH && (SH.eid = hH);
          const tH = HH._getFrameworks();
          return tH.length && (SH.fw = tH.join(",")), `${LH}?${(0,AH.ob)(SH).slice(1)}`
        }
        const Fr = {
          location: "yes",
          resizable: "yes",
          statusbar: "yes",
          toolbar: "no"
        };
        class Dr {
          constructor(HH) {
            this.window = HH, this.associatedEvent = null
          }
          close() {
            if (this.window) try {
              this.window.close()
            } catch (HH) {}
          }
        }

        function wr(HH, BH, LH) {
          let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
          const hH = Math.max((window.screen.availHeight - SH) / 2, 0).toString(),
            tH = Math.max((window.screen.availWidth - rH) / 2, 0).toString();
          let zH = "";
          const CH = Object.assign(Object.assign({}, Fr), {
              width: rH.toString(),
              height: SH.toString(),
              top: hH,
              left: tH
            }),
            EH = (0, AH.T)().toLowerCase();
          LH && (zH = YB(EH) ? "_blank" : LH), XB(EH) && (BH = BH || "http://localhost", CH.scrollbars = "yes");
          const XH = Object.entries(CH).reduce(((HH, BH) => {
            let [LH, AH] = BH;
            return `${HH}${LH}=${AH},`
          }), "");
          if (function() {
              var HH;
              return xB(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, AH.T)()) && !!(null === (HH = window.navigator) || void 0 === HH ? void 0 : HH.standalone)
            }(EH) && "_self" !== zH) return function(HH, BH) {
            const LH = document.createElement("a");
            LH.href = HH, LH.target = BH;
            const AH = document.createEvent("MouseEvent");
            AH.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), LH.dispatchEvent(AH)
          }(BH || "", zH), new Dr(null);
          const GH = window.open(BH || "", zH, XH);
          bH(GH, HH, "popup-blocked");
          try {
            GH.focus()
          } catch (YH) {}
          return new Dr(GH)
        }
        const Zr = "__/auth/handler",
          dr = "emulator/auth/handler",
          ar = encodeURIComponent("fac");
        async function sr(HH, BH, LH, SH, hH, tH) {
            bH(HH.config.authDomain, HH, "auth-domain-config-required"), bH(HH.config.apiKey, HH, "invalid-api-key");
            const zH = {
              apiKey: HH.config.apiKey,
              appName: HH.name,
              authType: LH,
              redirectUrl: SH,
              v: rH.f,
              eventId: hH
            };
            if (BH instanceof HL) {
              BH.setDefaultLanguage(HH.languageCode), zH.providerId = BH.providerId || "", (0, AH.Z)(BH.getCustomParameters()) || (zH.customParameters = JSON.stringify(BH.getCustomParameters()));
              for (const [HH, BH] of Object.entries(tH || {})) zH[HH] = BH
            }
            if (BH instanceof BL) {
              const HH = BH.getScopes().filter((HH => "" !== HH));
              HH.length > 0 && (zH.scopes = HH.join(","))
            }
            HH.tenantId && (zH.tid = HH.tenantId);
            const CH = zH;
            for (const AH of Object.keys(CH)) void 0 === CH[AH] && delete CH[AH];
            const EH = await HH._getAppCheckToken(),
              XH = EH ? `#${ar}=${encodeURIComponent(EH)}` : "";
            return `${function(HH){let{config:BH}=HH;if(!BH.emulator)return`
            https: //${BH.authDomain}/${Zr}`;return KH(BH,dr)}(HH)}?${(0,AH.ob)(CH).slice(1)}${XH}`}const Jr="webStorageSupport";const ir=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=TA,this._completeRedirectFn=Or,this._overrideRedirectResult=Mr}async _openPopup(HH,BH,LH,AH){var rH;mH(null===(rH=this.eventManagers[HH._key()])||void 0===rH?void 0:rH.manager,"_initialize() not called before _openPopup()");return wr(HH,await sr(HH,BH,LH,oH(),AH),VA())}async _openRedirect(HH,BH,LH,AH){await this._originValidation(HH);return function(HH){bA().location.href=HH}(await sr(HH,BH,LH,oH(),AH)),new Promise((()=>{}))}_initialize(HH){const BH=HH._key();if(this.eventManagers[BH]){const{manager:HH,promise:LH}=this.eventManagers[BH];return HH?Promise.resolve(HH):(mH(LH,"If manager is not set, promise should be"),LH)}const LH=this.initAndGetManager(HH);return this.eventManagers[BH]={promise:LH},LH.catch((()=>{delete this.eventManagers[BH]})),LH}async initAndGetManager(HH){const BH=await async function(HH){const BH=await gr(HH),LH=bA().gapi;return bH(LH,HH,"internal-error"),BH.open({where:document.body,url:nr(HH),messageHandlersFilter:LH.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rr,dontclear:!0},(BH=>new Promise((async(LH,AH)=>{await BH.restyle({setHideOnLeave:!1});const rH=TH(HH,"network-request-failed"),SH=bA().setTimeout((()=>{AH(rH)}),Nr.get());function hH(){bA().clearTimeout(SH),LH(BH)}BH.ping(hH).then(hH,(()=>{AH(rH)}))}))))}(HH),LH=new kr(HH);return BH.register("authEvent",(BH=>{bH(null===BH||void 0===BH?void 0:BH.authEvent,HH,"invalid-auth-event");return{status:LH.onEvent(BH.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[HH._key()]={manager:LH},this.iframes[HH._key()]=BH,LH}_isIframeWebStorageSupported(HH,BH){this.iframes[HH._key()].send(Jr,{type:Jr},(LH=>{var AH;const rH=null===(AH=null===LH||void 0===LH?void 0:LH[0])||void 0===AH?void 0:AH[Jr];void 0!==rH&&BH(!!rH),PH(HH,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(HH){const BH=HH._key();return this.originValidationPromises[BH]||(this.originValidationPromises[BH]=lr(HH)),this.originValidationPromises[BH]}get _shouldInitProactively(){return vB()||GB()||xB()}};class pr{constructor(HH){this.factorId=HH}_process(HH,BH,LH){switch(BH.type){case"enroll":return this._finalizeEnroll(HH,BH.credential,LH);case"signin":return this._finalizeSignIn(HH,BH.credential);default:return kH("unexpected MultiFactorSessionType")}}}class yr extends pr{constructor(HH){super("phone"),this.credential=HH}static _fromCredential(HH){return new yr(HH)}_finalizeEnroll(HH,BH,LH){return function(HH,BH){return NH(HH,"POST","/v2/accounts/mfaEnrollment:finalize",gH(HH,BH))}(HH,{idToken:BH,displayName:LH,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(HH,BH){return function(HH,BH){return NH(HH,"POST","/v2/accounts/mfaSignIn:finalize",gH(HH,BH))}(HH,{mfaPendingCredential:BH,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class HS{constructor(){}static assertion(HH){return yr._fromCredential(HH)}}HS.FACTOR_ID="phone";class BS{static assertionForEnrollment(HH,BH){return LS._fromSecret(HH,BH)}static assertionForSignIn(HH,BH){return LS._fromEnrollmentId(HH,BH)}static async generateSecret(HH){const BH=HH;bH("undefined"!==typeof BH.auth,"internal-error");const LH=await(AH=BH.auth,rH={idToken:BH.credential,totpEnrollmentInfo:{}},NH(AH,"POST","/v2/accounts/mfaEnrollment:start",gH(AH,rH)));var AH,rH;return AS._fromStartTotpMfaEnrollmentResponse(LH,BH.auth)}}BS.FACTOR_ID="totp";class LS extends pr{constructor(HH,BH,LH){super("totp"),this.otp=HH,this.enrollmentId=BH,this.secret=LH}static _fromSecret(HH,BH){return new LS(BH,void 0,HH)}static _fromEnrollmentId(HH,BH){return new LS(BH,HH)}async _finalizeEnroll(HH,BH,LH){return bH("undefined"!==typeof this.secret,HH,"argument-error"),function(HH,BH){return NH(HH,"POST","/v2/accounts/mfaEnrollment:finalize",gH(HH,BH))}(HH,{idToken:BH,displayName:LH,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(HH,BH){bH(void 0!==this.enrollmentId&&void 0!==this.otp,HH,"argument-error");const LH={verificationCode:this.otp};return function(HH,BH){return NH(HH,"POST","/v2/accounts/mfaSignIn:finalize",gH(HH,BH))}(HH,{mfaPendingCredential:BH,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:LH})}}class AS{constructor(HH,BH,LH,AH,rH,SH,hH){this.sessionInfo=SH,this.auth=hH,this.secretKey=HH,this.hashingAlgorithm=BH,this.codeLength=LH,this.codeIntervalSeconds=AH,this.enrollmentCompletionDeadline=rH}static _fromStartTotpMfaEnrollmentResponse(HH,BH){return new AS(HH.totpSessionInfo.sharedSecretKey,HH.totpSessionInfo.hashingAlgorithm,HH.totpSessionInfo.verificationCodeLength,HH.totpSessionInfo.periodSec,new Date(HH.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),HH.totpSessionInfo.sessionInfo,BH)}_makeTotpVerificationInfo(HH){return{sessionInfo:this.sessionInfo,verificationCode:HH}}generateQrCodeUrl(HH,BH){var LH;let AH=!1;return(rS(HH)||rS(BH))&&(AH=!0),AH&&(rS(HH)&&(HH=(null===(LH=this.auth.currentUser)||void 0===LH?void 0:LH.email)||"unknownuser"),rS(BH)&&(BH=this.auth.name)),`otpauth://totp/${BH}:${HH}?secret=${this.secretKey}&issuer=${BH}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function rS(HH){return"undefined"===typeof HH||0===(null===HH||void 0===HH?void 0:HH.length)}var SS="@firebase/auth",hS="0.23.2";class tS{constructor(HH){this.auth=HH,this.internalListeners=new Map}getUid(){var HH;return this.assertAuthConfigured(),(null===(HH=this.auth.currentUser)||void 0===HH?void 0:HH.uid)||null}async getToken(HH){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(HH)}}addAuthTokenListener(HH){if(this.assertAuthConfigured(),this.internalListeners.has(HH))return;const BH=this.auth.onIdTokenChanged((BH=>{HH((null===BH||void 0===BH?void 0:BH.stsTokenManager.accessToken)||null)}));this.internalListeners.set(HH,BH),this.updateProactiveRefresh()}removeAuthTokenListener(HH){this.assertAuthConfigured();const BH=this.internalListeners.get(HH);BH&&(this.internalListeners.delete(HH),BH(),this.updateProactiveRefresh())}assertAuthConfigured(){bH(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const zS=(0,AH.M)("authIdTokenMaxAge")||300;let CS=null;const ES=HH=>async BH=>{const LH=BH&&await BH.getIdTokenResult(),AH=LH&&((new Date).getTime()-Date.parse(LH.issuedAtTime))/1e3;if(AH&&AH>zS)return;const rH=null===LH||void 0===LH?void 0:LH.token;CS!==rH&&(CS=rH,await fetch(HH,{method:rH?"POST":"DELETE",headers:rH?{Authorization:`Bearer ${rH}`}:{}}))};function XS(){let HH=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,rH.H)();const BH=(0,rH.r)(HH,"auth");if(BH.isInitialized())return BH.getImmediate();const LH=cB(HH,{popupRedirectResolver:ir,persistence:[gA,vA,TA]}),SH=(0,AH.M)("authTokenSyncURL");if(SH){const HH=ES(SH);rA(LH,HH,(()=>HH(LH.currentUser))),AA(LH,(BH=>HH(BH)))}const hH=(0,AH.K)("auth");return hH&&eB(LH,`http://${hH}`),LH}var GS;GS="Browser",(0,rH.u)(new tH.f("auth",((HH,BH)=>{let{options:LH}=BH;const AH=HH.getProvider("app").getImmediate(),rH=HH.getProvider("heartbeat"),SH=HH.getProvider("app-check-internal"),{apiKey:hH,authDomain:tH}=AH.options;bH(hH&&!hH.includes(":"),"invalid-api-key",{appName:AH.name});const zH={apiKey:hH,authDomain:tH,clientPlatform:GS,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:PB(GS)},CH=new fB(AH,rH,SH,zH);return function(HH,BH){const LH=(null===BH||void 0===BH?void 0:BH.persistence)||[],AH=(Array.isArray(LH)?LH:[LH]).map(SB);(null===BH||void 0===BH?void 0:BH.errorMap)&&HH._updateErrorMap(BH.errorMap),HH._initializeWithPersistence(AH,null===BH||void 0===BH?void 0:BH.popupRedirectResolver)}(CH,LH),CH}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((HH,BH,LH)=>{HH.getProvider("auth-internal").initialize()}))),(0,rH.u)(new tH.f("auth-internal",(HH=>(HH=>new tS(HH))(lB(HH.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,rH.L)(SS,hS,function(HH){switch(HH){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(GS)),(0,rH.L)(SS,hS,"esm2017")}};Object.freeze(modules);for(const HH in modules)Object.freeze(modules[HH]);