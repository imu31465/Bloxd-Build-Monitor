export const id = 263;
export const ids = [263];
export const modules = {
  41617: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS
    });
    class tS {}
    tS.AUTOSAMPLERSUFFIX = "Sampler", tS.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", tS.ALPHA_DISABLE = 0, tS.ALPHA_ADD = 1, tS.ALPHA_COMBINE = 2, tS.ALPHA_SUBTRACT = 3, tS.ALPHA_MULTIPLY = 4, tS.ALPHA_MAXIMIZED = 5, tS.ALPHA_ONEONE = 6, tS.ALPHA_PREMULTIPLIED = 7, tS.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, tS.ALPHA_INTERPOLATE = 9, tS.ALPHA_SCREENMODE = 10, tS.ALPHA_ONEONE_ONEONE = 11, tS.ALPHA_ALPHATOCOLOR = 12, tS.ALPHA_REVERSEONEMINUS = 13, tS.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, tS.ALPHA_ONEONE_ONEZERO = 15, tS.ALPHA_EXCLUSION = 16, tS.ALPHA_LAYER_ACCUMULATE = 17, tS.ALPHA_MIN = 18, tS.ALPHA_MAX = 19, tS.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, tS.ALPHA_REPLACE_COLOR = 21, tS.ALPHA_EQUATION_ADD = 0, tS.ALPHA_EQUATION_SUBSTRACT = 1, tS.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, tS.ALPHA_EQUATION_MAX = 3, tS.ALPHA_EQUATION_MIN = 4, tS.ALPHA_EQUATION_DARKEN = 5, tS.DELAYLOADSTATE_NONE = 0, tS.DELAYLOADSTATE_LOADED = 1, tS.DELAYLOADSTATE_LOADING = 2, tS.DELAYLOADSTATE_NOTLOADED = 4, tS.NEVER = 512, tS.ALWAYS = 519, tS.LESS = 513, tS.EQUAL = 514, tS.LEQUAL = 515, tS.GREATER = 516, tS.GEQUAL = 518, tS.NOTEQUAL = 517, tS.KEEP = 7680, tS.ZERO = 0, tS.REPLACE = 7681, tS.INCR = 7682, tS.DECR = 7683, tS.INVERT = 5386, tS.INCR_WRAP = 34055, tS.DECR_WRAP = 34056, tS.TEXTURE_CLAMP_ADDRESSMODE = 0, tS.TEXTURE_WRAP_ADDRESSMODE = 1, tS.TEXTURE_MIRROR_ADDRESSMODE = 2, tS.TEXTURE_REPETITION_NONE = 0, tS.TEXTURE_REPETITION_NOISE_BLEND = 1, tS.TEXTURE_REPETITION_HEX_TILING = 2, tS.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, tS.TEXTURE_REPETITION_VORONOI_BOMBING = 4, tS.TEXTURE_CREATIONFLAG_STORAGE = 1, tS.TEXTUREFORMAT_ALPHA = 0, tS.TEXTUREFORMAT_LUMINANCE = 1, tS.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, tS.TEXTUREFORMAT_RGB = 4, tS.TEXTUREFORMAT_RGBA = 5, tS.TEXTUREFORMAT_RED = 6, tS.TEXTUREFORMAT_R = 6, tS.TEXTUREFORMAT_R16_UNORM = 33322, tS.TEXTUREFORMAT_RG16_UNORM = 33324, tS.TEXTUREFORMAT_RGB16_UNORM = 32852, tS.TEXTUREFORMAT_RGBA16_UNORM = 32859, tS.TEXTUREFORMAT_R16_SNORM = 36760, tS.TEXTUREFORMAT_RG16_SNORM = 36761, tS.TEXTUREFORMAT_RGB16_SNORM = 36762, tS.TEXTUREFORMAT_RGBA16_SNORM = 36763, tS.TEXTUREFORMAT_RG = 7, tS.TEXTUREFORMAT_RED_INTEGER = 8, tS.TEXTUREFORMAT_R_INTEGER = 8, tS.TEXTUREFORMAT_RG_INTEGER = 9, tS.TEXTUREFORMAT_RGB_INTEGER = 10, tS.TEXTUREFORMAT_RGBA_INTEGER = 11, tS.TEXTUREFORMAT_BGRA = 12, tS.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, tS.TEXTUREFORMAT_DEPTH32_FLOAT = 14, tS.TEXTUREFORMAT_DEPTH16 = 15, tS.TEXTUREFORMAT_DEPTH24 = 16, tS.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, tS.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, tS.TEXTUREFORMAT_STENCIL8 = 19, tS.TEXTUREFORMAT_UNDEFINED = 4294967295, tS.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, tS.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, tS.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, tS.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, tS.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, tS.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, tS.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, tS.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, tS.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, tS.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, tS.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, tS.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, tS.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, tS.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, tS.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, tS.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, tS.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, tS.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, tS.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, tS.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, tS.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, tS.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, tS.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, tS.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, tS.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, tS.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, tS.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, tS.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, tS.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, tS.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, tS.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, tS.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, tS.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, tS.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, tS.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, tS.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, tS.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, tS.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, tS.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, tS.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, tS.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, tS.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, tS.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, tS.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, tS.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, tS.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, tS.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, tS.TEXTURETYPE_UNSIGNED_BYTE = 0, tS.TEXTURETYPE_UNSIGNED_INT = 0, tS.TEXTURETYPE_FLOAT = 1, tS.TEXTURETYPE_HALF_FLOAT = 2, tS.TEXTURETYPE_BYTE = 3, tS.TEXTURETYPE_SHORT = 4, tS.TEXTURETYPE_UNSIGNED_SHORT = 5, tS.TEXTURETYPE_INT = 6, tS.TEXTURETYPE_UNSIGNED_INTEGER = 7, tS.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, tS.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, tS.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, tS.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, tS.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, tS.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, tS.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, tS.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, tS.TEXTURETYPE_UNDEFINED = 16, tS.TEXTURE_2D = 3553, tS.TEXTURE_2D_ARRAY = 35866, tS.TEXTURE_CUBE_MAP = 34067, tS.TEXTURE_CUBE_MAP_ARRAY = 3735928559, tS.TEXTURE_3D = 32879, tS.TEXTURE_NEAREST_SAMPLINGMODE = 1, tS.TEXTURE_NEAREST_NEAREST = 1, tS.TEXTURE_BILINEAR_SAMPLINGMODE = 2, tS.TEXTURE_LINEAR_LINEAR = 2, tS.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, tS.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, tS.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, tS.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, tS.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, tS.TEXTURE_NEAREST_LINEAR = 7, tS.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, tS.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, tS.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, tS.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, tS.TEXTURE_LINEAR_NEAREST = 12, tS.TEXTURE_EXPLICIT_MODE = 0, tS.TEXTURE_SPHERICAL_MODE = 1, tS.TEXTURE_PLANAR_MODE = 2, tS.TEXTURE_CUBIC_MODE = 3, tS.TEXTURE_PROJECTION_MODE = 4, tS.TEXTURE_SKYBOX_MODE = 5, tS.TEXTURE_INVCUBIC_MODE = 6, tS.TEXTURE_EQUIRECTANGULAR_MODE = 7, tS.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, tS.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, tS.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, tS.TEXTURE_FILTERING_QUALITY_HIGH = 64, tS.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, tS.TEXTURE_FILTERING_QUALITY_LOW = 8, tS.SCALEMODE_FLOOR = 1, tS.SCALEMODE_NEAREST = 2, tS.SCALEMODE_CEILING = 3, tS.MATERIAL_TextureDirtyFlag = 1, tS.MATERIAL_LightDirtyFlag = 2, tS.MATERIAL_FresnelDirtyFlag = 4, tS.MATERIAL_AttributesDirtyFlag = 8, tS.MATERIAL_MiscDirtyFlag = 16, tS.MATERIAL_PrePassDirtyFlag = 32, tS.MATERIAL_ImageProcessingDirtyFlag = 64, tS.MATERIAL_AllDirtyFlag = 127, tS.MATERIAL_TriangleFillMode = 0, tS.MATERIAL_WireFrameFillMode = 1, tS.MATERIAL_PointFillMode = 2, tS.MATERIAL_PointListDrawMode = 3, tS.MATERIAL_LineListDrawMode = 4, tS.MATERIAL_LineLoopDrawMode = 5, tS.MATERIAL_LineStripDrawMode = 6, tS.MATERIAL_TriangleStripDrawMode = 7, tS.MATERIAL_TriangleFanDrawMode = 8, tS.MATERIAL_ClockWiseSideOrientation = 0, tS.MATERIAL_CounterClockWiseSideOrientation = 1, tS.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, tS.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, tS.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, tS.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, tS.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, tS.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, tS.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, tS.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, tS.ACTION_NothingTrigger = 0, tS.ACTION_OnPickTrigger = 1, tS.ACTION_OnLeftPickTrigger = 2, tS.ACTION_OnRightPickTrigger = 3, tS.ACTION_OnCenterPickTrigger = 4, tS.ACTION_OnPickDownTrigger = 5, tS.ACTION_OnDoublePickTrigger = 6, tS.ACTION_OnPickUpTrigger = 7, tS.ACTION_OnPickOutTrigger = 16, tS.ACTION_OnLongPressTrigger = 8, tS.ACTION_OnPointerOverTrigger = 9, tS.ACTION_OnPointerOutTrigger = 10, tS.ACTION_OnEveryFrameTrigger = 11, tS.ACTION_OnIntersectionEnterTrigger = 12, tS.ACTION_OnIntersectionExitTrigger = 13, tS.ACTION_OnKeyDownTrigger = 14, tS.ACTION_OnKeyUpTrigger = 15, tS.PARTICLES_BILLBOARDMODE_Y = 2, tS.PARTICLES_BILLBOARDMODE_ALL = 7, tS.PARTICLES_BILLBOARDMODE_STRETCHED = 8, tS.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, tS.MESHES_CULLINGSTRATEGY_STANDARD = 0, tS.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, tS.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, tS.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, tS.SCENELOADER_NO_LOGGING = 0, tS.SCENELOADER_MINIMAL_LOGGING = 1, tS.SCENELOADER_SUMMARY_LOGGING = 2, tS.SCENELOADER_DETAILED_LOGGING = 3, tS.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, tS.PREPASS_POSITION_TEXTURE_TYPE = 1, tS.PREPASS_VELOCITY_TEXTURE_TYPE = 2, tS.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, tS.PREPASS_COLOR_TEXTURE_TYPE = 4, tS.PREPASS_DEPTH_TEXTURE_TYPE = 5, tS.PREPASS_NORMAL_TEXTURE_TYPE = 6, tS.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, tS.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, tS.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, tS.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, tS.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, tS.PREPASS_ALBEDO_TEXTURE_TYPE = 12, tS.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, tS.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, tS.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, tS.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, tS.BUFFER_CREATIONFLAG_READ = 1, tS.BUFFER_CREATIONFLAG_WRITE = 2, tS.BUFFER_CREATIONFLAG_READWRITE = 3, tS.BUFFER_CREATIONFLAG_UNIFORM = 4, tS.BUFFER_CREATIONFLAG_VERTEX = 8, tS.BUFFER_CREATIONFLAG_INDEX = 16, tS.BUFFER_CREATIONFLAG_STORAGE = 32, tS.BUFFER_CREATIONFLAG_INDIRECT = 64, tS.RENDERPASS_MAIN = 0, tS.INPUT_ALT_KEY = 18, tS.INPUT_CTRL_KEY = 17, tS.INPUT_META_KEY1 = 91, tS.INPUT_META_KEY2 = 92, tS.INPUT_META_KEY3 = 93, tS.INPUT_SHIFT_KEY = 16, tS.SNAPSHOTRENDERING_STANDARD = 0, tS.SNAPSHOTRENDERING_FAST = 1, tS.PERSPECTIVE_CAMERA = 0, tS.ORTHOGRAPHIC_CAMERA = 1, tS.FOVMODE_VERTICAL_FIXED = 0, tS.FOVMODE_HORIZONTAL_FIXED = 1, tS.RIG_MODE_NONE = 0, tS.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, tS.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, tS.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, tS.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, tS.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, tS.RIG_MODE_VR = 20, tS.RIG_MODE_CUSTOM = 22, tS.MAX_SUPPORTED_UV_SETS = 6, tS.GL_ALPHA_EQUATION_ADD = 32774, tS.GL_ALPHA_EQUATION_MIN = 32775, tS.GL_ALPHA_EQUATION_MAX = 32776, tS.GL_ALPHA_EQUATION_SUBTRACT = 32778, tS.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, tS.GL_ALPHA_FUNCTION_SRC = 768, tS.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, tS.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, tS.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, tS.GL_ALPHA_FUNCTION_DST_ALPHA = 772, tS.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, tS.GL_ALPHA_FUNCTION_DST_COLOR = 774, tS.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, tS.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, tS.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, tS.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, tS.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, tS.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, tS.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, tS.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, tS.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, tS.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, tS.SnippetUrl = "https://snippet.babylonjs.com", tS.FOGMODE_NONE = 0, tS.FOGMODE_EXP = 1, tS.FOGMODE_EXP2 = 2, tS.FOGMODE_LINEAR = 3, tS.BYTE = 5120, tS.UNSIGNED_BYTE = 5121, tS.SHORT = 5122, tS.UNSIGNED_SHORT = 5123, tS.INT = 5124, tS.UNSIGNED_INT = 5125, tS.FLOAT = 5126, tS.HALF_FLOAT = 5131, tS.PositionKind = "position", tS.NormalKind = "normal", tS.TangentKind = "tangent", tS.UVKind = "uv", tS.UV2Kind = "uv2", tS.UV3Kind = "uv3", tS.UV4Kind = "uv4", tS.UV5Kind = "uv5", tS.UV6Kind = "uv6", tS.ColorKind = "color", tS.ColorInstanceKind = "instanceColor", tS.MatricesIndicesKind = "matricesIndices", tS.MatricesWeightsKind = "matricesWeights", tS.MatricesIndicesExtraKind = "matricesIndicesExtra", tS.MatricesWeightsExtraKind = "matricesWeightsExtra", tS.ANIMATIONTYPE_FLOAT = 0, tS.ANIMATIONTYPE_VECTOR3 = 1, tS.ANIMATIONTYPE_QUATERNION = 2, tS.ANIMATIONTYPE_MATRIX = 3, tS.ANIMATIONTYPE_COLOR3 = 4, tS.ANIMATIONTYPE_COLOR4 = 7, tS.ANIMATIONTYPE_VECTOR2 = 5, tS.ANIMATIONTYPE_SIZE = 6, tS.ShadowMinZ = 0, tS.ShadowMaxZ = 1e4, tS.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, tS.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  41591: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => qS
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(37117),
      xS = gS(40304),
      NS = gS(40264);
    let qS = (() => {
      var SS;
      let HS, gS, qS, uS, IS = xS.e,
        fS = [];
      return SS = class extends IS {
        constructor() {
          super(...arguments), this._position = (0, tS.k)(this, fS), this._needProjectionMatrixCompute = !0, this._viewMatrix = XS.e.Identity(), this._projectionMatrix = XS.e.Identity()
        }
        _setPosition(SS) {
          this._position = SS
        }
        get position() {
          return this._position
        }
        set position(SS) {
          this._setPosition(SS)
        }
        _setDirection(SS) {
          this._direction = SS
        }
        get direction() {
          return this._direction
        }
        set direction(SS) {
          this._setDirection(SS)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(SS) {
          this._shadowMinZ = SS, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(SS) {
          this._shadowMaxZ = SS, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = XS.n.Zero()), XS.n.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = XS.n.Zero()), XS.n.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(SS) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(SS) {
          return this.direction = XS.n.Normalize(SS.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const SS = XS.n.Cross(this.direction, NS.b.Y),
            HS = XS.n.Cross(SS, this.direction);
          return XS.n.RotationFromAxis(SS, HS, this.direction)
        }
        needCube() {
          return !1
        }
        needProjectionMatrixCompute() {
          return this._needProjectionMatrixCompute
        }
        forceProjectionMatrixCompute() {
          this._needProjectionMatrixCompute = !0
        }
        _initCache() {
          super._initCache(), this._cache.position = XS.n.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(SS) {
          return !SS && this.isSynchronized() ? (this._currentRenderId = this.lL().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.dJ(this.position), this._worldMatrix || (this._worldMatrix = XS.e.Identity()), XS.e.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(SS) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : SS?.minZ || 0
        }
        getDepthMaxZ(SS) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : SS?.maxZ || 1e4
        }
        setShadowProjectionMatrix(SS, HS, gS) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(HS, gS, SS) : this._setDefaultShadowProjectionMatrix(SS, HS, gS), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(SS) {
          const HS = XS.l.VK[0];
          let gS = this.position;
          this.computeTransformedInformation() && (gS = this.transformedPosition), XS.n.NormalizeToRef(this.getShadowDirection(SS), HS), 1 === Math.abs(XS.n.Dot(HS, XS.n.Up())) && (HS.z = 1e-13);
          const tS = XS.l.VK[1];
          return gS.addToRef(HS, tS), XS.e.LookAtLHToRef(gS, tS, XS.n.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(SS, HS) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, SS ?? this._viewMatrix, HS ?? []), this._projectionMatrix
        }
      }, (() => {
        const XS = "function" === typeof Symbol && Symbol.metadata ? Object.create(IS[Symbol.metadata] ?? null) : void 0;
        HS = [(0, bS.I)()], gS = [(0, bS.I)()], qS = [(0, bS.M)()], uS = [(0, bS.M)()], (0, tS.j)(SS, null, HS, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: SS => "position" in SS,
            get: SS => SS.position
          },
          metadata: XS
        }, null, fS), (0, tS.j)(SS, null, gS, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: SS => "direction" in SS,
            get: SS => SS.direction
          },
          metadata: XS
        }, null, fS), (0, tS.j)(SS, null, qS, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: SS => "shadowMinZ" in SS,
            get: SS => SS.shadowMinZ
          },
          metadata: XS
        }, null, fS), (0, tS.j)(SS, null, uS, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: SS => "shadowMaxZ" in SS,
            get: SS => SS.shadowMaxZ
          },
          metadata: XS
        }, null, fS), XS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XS
        })
      })(), SS
    })()
  },
  41613: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS
    });
    var tS = gS(40510);
    class bS extends tS.i {
      constructor(SS, HS, gS, bS, XS) {
        let xS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          NS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          qS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          uS = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          IS = arguments.length > 9 ? arguments[9] : void 0,
          fS = arguments.length > 10 ? arguments[10] : void 0,
          kS = arguments.length > 11 ? arguments[11] : void 0,
          aS = arguments.length > 12 ? arguments[12] : void 0;
        super(null, XS, !xS, NS, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, IS), this.format = bS, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== uS || (qS = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== uS || (qS = 1), this._texture = this._engine.createRawTexture(SS, HS, gS, bS, xS, NS, qS, null, uS, IS ?? 0, fS ?? !1, aS), this.wrapU = tS.i.CLAMP_ADDRESSMODE, this.wrapV = tS.i.CLAMP_ADDRESSMODE, this._waitingForData = !!kS && !SS)
      }
      update(SS) {
        this.updateMipLevel(SS, 0)
      }
      updateMipLevel(SS, HS) {
        this._getEngine().updateRawTexture(this._texture, SS, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, HS), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const SS = new bS(null, this.getSize().width, this.getSize().height, this.format, this.lL(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return SS._texture = this._texture, this._texture.incrementReferences(), SS
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(SS, HS, gS, tS) {
        return new bS(SS, HS, gS, 1, tS, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(SS, HS, gS, tS) {
        return new bS(SS, HS, gS, 2, tS, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(SS, HS, gS, tS) {
        return new bS(SS, HS, gS, 0, tS, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(SS, HS, gS, tS) {
        return new bS(SS, HS, gS, 4, tS, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(SS, HS, gS, tS) {
        return new bS(SS, HS, gS, 5, tS, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(SS, HS, gS, tS) {
        return new bS(SS, HS, gS, 5, tS, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(SS, HS, gS, XS) {
        let xS = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          NS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          qS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : tS.i.TRILINEAR_SAMPLINGMODE;
        return new bS(SS, HS, gS, 6, XS, xS, NS, qS, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(SS, HS, gS, XS) {
        let xS = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          NS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          qS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : tS.i.TRILINEAR_SAMPLINGMODE;
        return new bS(SS, HS, gS, 6, XS, xS, NS, qS, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  41650: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS.b
    });
    var tS = gS(40468);
    (0, tS.c)()
  },
  41598: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS.e
    });
    var tS = gS(40491);
    (0, tS.g)()
  },
  40491: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => kS,
      g: () => jS
    });
    var tS, bS, XS = gS(37300),
      xS = gS(40183),
      NS = gS(40439),
      qS = gS(40495),
      uS = gS(40331),
      IS = gS(40504),
      fS = gS(39926);
    class kS extends NS.e {
      _isShaderMaterial(SS) {
        return !!SS && "ShaderMaterial" === SS.getClassName()
      }
      constructor(SS) {
        let HS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          tS = arguments.length > 5 ? arguments[5] : void 0,
          bS = arguments.length > 6 ? arguments[6] : void 0,
          NS = arguments.length > 7 ? arguments[7] : void 0;
        super(SS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, HS, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = tS, this.useVertexAlpha = bS, this.color = new XS.b(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, HS && (this.color = HS.color.clone(), this.alpha = HS.alpha, this.useVertexColor = HS.useVertexColor, this.useVertexAlpha = HS.useVertexAlpha), this.intersectionThreshold = .1;
        const qS = {
          attributes: [xS.h.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? qS.defines.push("#define VERTEXALPHA") : qS.needAlphaBlending = !1, this.useVertexColor ? (qS.defines.push("#define VERTEXCOLOR"), qS.attributes.push(xS.h.ColorKind)) : (qS.uniforms.push("color"), this._color4 = new XS.c), NS) this.material = NS;
        else {
          this.lL().AK().isWebGPU && !kS.ForceGLSL && (this._shaderLanguage = 1), qS.shaderLanguage = this._shaderLanguage, qS.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([gS.e(344).then((() => gS(42568))), gS.e(350).then((() => gS(42570)))]) : await Promise.all([gS.e(326).then((() => gS(42577))), gS.e(332).then((() => gS(42584)))])
          };
          const SS = new IS.o("colorShader", this.lL(), "color", qS, !1);
          SS.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(SS)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(SS) {
        const HS = this.material;
        if (HS === SS) return;
        const gS = HS && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(SS), gS && HS?.dispose()
      }
      _setInternalMaterial(SS) {
        this._setMaterial(SS), this.material && (this.material.fillMode = uS.d.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(SS) {}
      _bind(SS, HS) {
        if (!this._geometry) return this;
        const gS = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(HS, gS) : this._geometry._bind(HS, gS, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: SS,
            g: HS,
            b: gS
          } = this.color;
          this._color4.set(SS, HS, gS, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(SS, HS, gS) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const tS = this.lL().AK();
        return this._unIndexed ? tS.drawArraysType(uS.d.LineListDrawMode, SS.verticesStart, SS.verticesCount, gS) : tS.drawElementsType(uS.d.LineListDrawMode, SS.indexStart, SS.indexCount, gS), this
      }
      dispose(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || HS) && this.material?.dispose(!1, !1, !0), super.dispose(SS)
      }
      clone(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        if (HS && void 0 === HS._addToSceneRootNodes) {
          const gS = HS;
          return gS.source = this, new kS(SS, this.lL(), gS.parent, gS.source, gS.doNotCloneChildren)
        }
        return new kS(SS, this.lL(), HS, this, gS)
      }
      createInstance(SS) {
        const HS = new aS(SS, this);
        if (this.mY) {
          HS.mY = {};
          for (const SS in this.mY) HS.mY[SS] = this.mY[SS]
        }
        return HS
      }
      serialize(SS) {
        super.serialize(SS), SS.color = this.color.lgS(), SS.alpha = this.alpha
      }
      static Parse(SS, HS) {
        const gS = new kS(SS.name, HS);
        return gS.color = XS.b.FromArray(SS.color), gS.alpha = SS.alpha, gS
      }
    }
    kS.ForceGLSL = !1;
    class aS extends qS.c {
      constructor(SS, HS) {
        super(SS, HS), this.intersectionThreshold = HS.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let KS = !1;

    function jS() {
      KS || (KS = !0, NS.e._LinesMeshParser = (SS, HS) => kS.Parse(SS, HS))
    }(tS = kS.prototype).enableEdgesRendering ?? (tS.enableEdgesRendering = (0, fS.i)("LinesMesh", "enableEdgesRendering")), (bS = aS.prototype).enableEdgesRendering ?? (bS.enableEdgesRendering = (0, fS.i)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);