export const id = 255;
export const ids = [255];
export const modules = {
  41188: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT
    });
    class lT {}
    lT.AUTOSAMPLERSUFFIX = "Sampler", lT.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", lT.ALPHA_DISABLE = 0, lT.ALPHA_ADD = 1, lT.ALPHA_COMBINE = 2, lT.ALPHA_SUBTRACT = 3, lT.ALPHA_MULTIPLY = 4, lT.ALPHA_MAXIMIZED = 5, lT.ALPHA_ONEONE = 6, lT.ALPHA_PREMULTIPLIED = 7, lT.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, lT.ALPHA_INTERPOLATE = 9, lT.ALPHA_SCREENMODE = 10, lT.ALPHA_ONEONE_ONEONE = 11, lT.ALPHA_ALPHATOCOLOR = 12, lT.ALPHA_REVERSEONEMINUS = 13, lT.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, lT.ALPHA_ONEONE_ONEZERO = 15, lT.ALPHA_EXCLUSION = 16, lT.ALPHA_LAYER_ACCUMULATE = 17, lT.ALPHA_MIN = 18, lT.ALPHA_MAX = 19, lT.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, lT.ALPHA_REPLACE_COLOR = 21, lT.ALPHA_EQUATION_ADD = 0, lT.ALPHA_EQUATION_SUBSTRACT = 1, lT.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, lT.ALPHA_EQUATION_MAX = 3, lT.ALPHA_EQUATION_MIN = 4, lT.ALPHA_EQUATION_DARKEN = 5, lT.DELAYLOADSTATE_NONE = 0, lT.DELAYLOADSTATE_LOADED = 1, lT.DELAYLOADSTATE_LOADING = 2, lT.DELAYLOADSTATE_NOTLOADED = 4, lT.NEVER = 512, lT.ALWAYS = 519, lT.LESS = 513, lT.EQUAL = 514, lT.LEQUAL = 515, lT.GREATER = 516, lT.GEQUAL = 518, lT.NOTEQUAL = 517, lT.KEEP = 7680, lT.ZERO = 0, lT.REPLACE = 7681, lT.INCR = 7682, lT.DECR = 7683, lT.INVERT = 5386, lT.INCR_WRAP = 34055, lT.DECR_WRAP = 34056, lT.TEXTURE_CLAMP_ADDRESSMODE = 0, lT.TEXTURE_WRAP_ADDRESSMODE = 1, lT.TEXTURE_MIRROR_ADDRESSMODE = 2, lT.TEXTURE_REPETITION_NONE = 0, lT.TEXTURE_REPETITION_NOISE_BLEND = 1, lT.TEXTURE_REPETITION_HEX_TILING = 2, lT.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, lT.TEXTURE_REPETITION_VORONOI_BOMBING = 4, lT.TEXTURE_CREATIONFLAG_STORAGE = 1, lT.TEXTUREFORMAT_ALPHA = 0, lT.TEXTUREFORMAT_LUMINANCE = 1, lT.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, lT.TEXTUREFORMAT_RGB = 4, lT.TEXTUREFORMAT_RGBA = 5, lT.TEXTUREFORMAT_RED = 6, lT.TEXTUREFORMAT_R = 6, lT.TEXTUREFORMAT_R16_UNORM = 33322, lT.TEXTUREFORMAT_RG16_UNORM = 33324, lT.TEXTUREFORMAT_RGB16_UNORM = 32852, lT.TEXTUREFORMAT_RGBA16_UNORM = 32859, lT.TEXTUREFORMAT_R16_SNORM = 36760, lT.TEXTUREFORMAT_RG16_SNORM = 36761, lT.TEXTUREFORMAT_RGB16_SNORM = 36762, lT.TEXTUREFORMAT_RGBA16_SNORM = 36763, lT.TEXTUREFORMAT_RG = 7, lT.TEXTUREFORMAT_RED_INTEGER = 8, lT.TEXTUREFORMAT_R_INTEGER = 8, lT.TEXTUREFORMAT_RG_INTEGER = 9, lT.TEXTUREFORMAT_RGB_INTEGER = 10, lT.TEXTUREFORMAT_RGBA_INTEGER = 11, lT.TEXTUREFORMAT_BGRA = 12, lT.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, lT.TEXTUREFORMAT_DEPTH32_FLOAT = 14, lT.TEXTUREFORMAT_DEPTH16 = 15, lT.TEXTUREFORMAT_DEPTH24 = 16, lT.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, lT.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, lT.TEXTUREFORMAT_STENCIL8 = 19, lT.TEXTUREFORMAT_UNDEFINED = 4294967295, lT.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, lT.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, lT.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, lT.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, lT.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, lT.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, lT.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, lT.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, lT.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, lT.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, lT.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, lT.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, lT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, lT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, lT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, lT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, lT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, lT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, lT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, lT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, lT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, lT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, lT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, lT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, lT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, lT.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, lT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, lT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, lT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, lT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, lT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, lT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, lT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, lT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, lT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, lT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, lT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, lT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, lT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, lT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, lT.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, lT.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, lT.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, lT.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, lT.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, lT.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, lT.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, lT.TEXTURETYPE_UNSIGNED_BYTE = 0, lT.TEXTURETYPE_UNSIGNED_INT = 0, lT.TEXTURETYPE_FLOAT = 1, lT.TEXTURETYPE_HALF_FLOAT = 2, lT.TEXTURETYPE_BYTE = 3, lT.TEXTURETYPE_SHORT = 4, lT.TEXTURETYPE_UNSIGNED_SHORT = 5, lT.TEXTURETYPE_INT = 6, lT.TEXTURETYPE_UNSIGNED_INTEGER = 7, lT.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, lT.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, lT.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, lT.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, lT.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, lT.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, lT.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, lT.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, lT.TEXTURETYPE_UNDEFINED = 16, lT.TEXTURE_2D = 3553, lT.TEXTURE_2D_ARRAY = 35866, lT.TEXTURE_CUBE_MAP = 34067, lT.TEXTURE_CUBE_MAP_ARRAY = 3735928559, lT.TEXTURE_3D = 32879, lT.TEXTURE_NEAREST_SAMPLINGMODE = 1, lT.TEXTURE_NEAREST_NEAREST = 1, lT.TEXTURE_BILINEAR_SAMPLINGMODE = 2, lT.TEXTURE_LINEAR_LINEAR = 2, lT.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, lT.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, lT.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, lT.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, lT.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, lT.TEXTURE_NEAREST_LINEAR = 7, lT.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, lT.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, lT.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, lT.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, lT.TEXTURE_LINEAR_NEAREST = 12, lT.TEXTURE_EXPLICIT_MODE = 0, lT.TEXTURE_SPHERICAL_MODE = 1, lT.TEXTURE_PLANAR_MODE = 2, lT.TEXTURE_CUBIC_MODE = 3, lT.TEXTURE_PROJECTION_MODE = 4, lT.TEXTURE_SKYBOX_MODE = 5, lT.TEXTURE_INVCUBIC_MODE = 6, lT.TEXTURE_EQUIRECTANGULAR_MODE = 7, lT.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, lT.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, lT.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, lT.TEXTURE_FILTERING_QUALITY_HIGH = 64, lT.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, lT.TEXTURE_FILTERING_QUALITY_LOW = 8, lT.SCALEMODE_FLOOR = 1, lT.SCALEMODE_NEAREST = 2, lT.SCALEMODE_CEILING = 3, lT.MATERIAL_TextureDirtyFlag = 1, lT.MATERIAL_LightDirtyFlag = 2, lT.MATERIAL_FresnelDirtyFlag = 4, lT.MATERIAL_AttributesDirtyFlag = 8, lT.MATERIAL_MiscDirtyFlag = 16, lT.MATERIAL_PrePassDirtyFlag = 32, lT.MATERIAL_ImageProcessingDirtyFlag = 64, lT.MATERIAL_AllDirtyFlag = 127, lT.MATERIAL_TriangleFillMode = 0, lT.MATERIAL_WireFrameFillMode = 1, lT.MATERIAL_PointFillMode = 2, lT.MATERIAL_PointListDrawMode = 3, lT.MATERIAL_LineListDrawMode = 4, lT.MATERIAL_LineLoopDrawMode = 5, lT.MATERIAL_LineStripDrawMode = 6, lT.MATERIAL_TriangleStripDrawMode = 7, lT.MATERIAL_TriangleFanDrawMode = 8, lT.MATERIAL_ClockWiseSideOrientation = 0, lT.MATERIAL_CounterClockWiseSideOrientation = 1, lT.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, lT.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, lT.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, lT.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, lT.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, lT.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, lT.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, lT.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, lT.ACTION_NothingTrigger = 0, lT.ACTION_OnPickTrigger = 1, lT.ACTION_OnLeftPickTrigger = 2, lT.ACTION_OnRightPickTrigger = 3, lT.ACTION_OnCenterPickTrigger = 4, lT.ACTION_OnPickDownTrigger = 5, lT.ACTION_OnDoublePickTrigger = 6, lT.ACTION_OnPickUpTrigger = 7, lT.ACTION_OnPickOutTrigger = 16, lT.ACTION_OnLongPressTrigger = 8, lT.ACTION_OnPointerOverTrigger = 9, lT.ACTION_OnPointerOutTrigger = 10, lT.ACTION_OnEveryFrameTrigger = 11, lT.ACTION_OnIntersectionEnterTrigger = 12, lT.ACTION_OnIntersectionExitTrigger = 13, lT.ACTION_OnKeyDownTrigger = 14, lT.ACTION_OnKeyUpTrigger = 15, lT.PARTICLES_BILLBOARDMODE_Y = 2, lT.PARTICLES_BILLBOARDMODE_ALL = 7, lT.PARTICLES_BILLBOARDMODE_STRETCHED = 8, lT.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, lT.MESHES_CULLINGSTRATEGY_STANDARD = 0, lT.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, lT.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, lT.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, lT.SCENELOADER_NO_LOGGING = 0, lT.SCENELOADER_MINIMAL_LOGGING = 1, lT.SCENELOADER_SUMMARY_LOGGING = 2, lT.SCENELOADER_DETAILED_LOGGING = 3, lT.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, lT.PREPASS_POSITION_TEXTURE_TYPE = 1, lT.PREPASS_VELOCITY_TEXTURE_TYPE = 2, lT.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, lT.PREPASS_COLOR_TEXTURE_TYPE = 4, lT.PREPASS_DEPTH_TEXTURE_TYPE = 5, lT.PREPASS_NORMAL_TEXTURE_TYPE = 6, lT.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, lT.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, lT.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, lT.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, lT.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, lT.PREPASS_ALBEDO_TEXTURE_TYPE = 12, lT.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, lT.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, lT.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, lT.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, lT.BUFFER_CREATIONFLAG_READ = 1, lT.BUFFER_CREATIONFLAG_WRITE = 2, lT.BUFFER_CREATIONFLAG_READWRITE = 3, lT.BUFFER_CREATIONFLAG_UNIFORM = 4, lT.BUFFER_CREATIONFLAG_VERTEX = 8, lT.BUFFER_CREATIONFLAG_INDEX = 16, lT.BUFFER_CREATIONFLAG_STORAGE = 32, lT.BUFFER_CREATIONFLAG_INDIRECT = 64, lT.RENDERPASS_MAIN = 0, lT.INPUT_ALT_KEY = 18, lT.INPUT_CTRL_KEY = 17, lT.INPUT_META_KEY1 = 91, lT.INPUT_META_KEY2 = 92, lT.INPUT_META_KEY3 = 93, lT.INPUT_SHIFT_KEY = 16, lT.SNAPSHOTRENDERING_STANDARD = 0, lT.SNAPSHOTRENDERING_FAST = 1, lT.PERSPECTIVE_CAMERA = 0, lT.ORTHOGRAPHIC_CAMERA = 1, lT.FOVMODE_VERTICAL_FIXED = 0, lT.FOVMODE_HORIZONTAL_FIXED = 1, lT.RIG_MODE_NONE = 0, lT.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, lT.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, lT.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, lT.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, lT.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, lT.RIG_MODE_VR = 20, lT.RIG_MODE_CUSTOM = 22, lT.MAX_SUPPORTED_UV_SETS = 6, lT.GL_ALPHA_EQUATION_ADD = 32774, lT.GL_ALPHA_EQUATION_MIN = 32775, lT.GL_ALPHA_EQUATION_MAX = 32776, lT.GL_ALPHA_EQUATION_SUBTRACT = 32778, lT.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, lT.GL_ALPHA_FUNCTION_SRC = 768, lT.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, lT.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, lT.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, lT.GL_ALPHA_FUNCTION_DST_ALPHA = 772, lT.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, lT.GL_ALPHA_FUNCTION_DST_COLOR = 774, lT.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, lT.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, lT.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, lT.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, lT.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, lT.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, lT.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, lT.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, lT.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, lT.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, lT.SnippetUrl = "https://snippet.babylonjs.com", lT.FOGMODE_NONE = 0, lT.FOGMODE_EXP = 1, lT.FOGMODE_EXP2 = 2, lT.FOGMODE_LINEAR = 3, lT.BYTE = 5120, lT.UNSIGNED_BYTE = 5121, lT.SHORT = 5122, lT.UNSIGNED_SHORT = 5123, lT.INT = 5124, lT.UNSIGNED_INT = 5125, lT.FLOAT = 5126, lT.HALF_FLOAT = 5131, lT.PositionKind = "position", lT.NormalKind = "normal", lT.TangentKind = "tangent", lT.UVKind = "uv", lT.UV2Kind = "uv2", lT.UV3Kind = "uv3", lT.UV4Kind = "uv4", lT.UV5Kind = "uv5", lT.UV6Kind = "uv6", lT.ColorKind = "color", lT.ColorInstanceKind = "instanceColor", lT.MatricesIndicesKind = "matricesIndices", lT.MatricesWeightsKind = "matricesWeights", lT.MatricesIndicesExtraKind = "matricesIndicesExtra", lT.MatricesWeightsExtraKind = "matricesWeightsExtra", lT.ANIMATIONTYPE_FLOAT = 0, lT.ANIMATIONTYPE_VECTOR3 = 1, lT.ANIMATIONTYPE_QUATERNION = 2, lT.ANIMATIONTYPE_MATRIX = 3, lT.ANIMATIONTYPE_COLOR3 = 4, lT.ANIMATIONTYPE_COLOR4 = 7, lT.ANIMATIONTYPE_VECTOR2 = 5, lT.ANIMATIONTYPE_SIZE = 6, lT.ShadowMinZ = 0, lT.ShadowMaxZ = 1e4, lT.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, lT.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  41164: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => fT
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(36892),
      OT = cT(39883),
      yT = cT(39849);
    let fT = (() => {
      var TT;
      let kT, cT, fT, xT, IT = OT.d,
        AT = [];
      return TT = class extends IT {
        constructor() {
          super(...arguments), this._position = (0, lT.h)(this, AT), this._needProjectionMatrixCompute = !0, this._viewMatrix = KT.d.Identity(), this._projectionMatrix = KT.d.Identity()
        }
        _setPosition(TT) {
          this._position = TT
        }
        get position() {
          return this._position
        }
        set position(TT) {
          this._setPosition(TT)
        }
        _setDirection(TT) {
          this._direction = TT
        }
        get direction() {
          return this._direction
        }
        set direction(TT) {
          this._setDirection(TT)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(TT) {
          this._shadowMinZ = TT, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(TT) {
          this._shadowMaxZ = TT, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = KT.m.Zero()), KT.m.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = KT.m.Zero()), KT.m.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(TT) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(TT) {
          return this.direction = KT.m.Normalize(TT.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const TT = KT.m.Cross(this.direction, yT.c.Y),
            kT = KT.m.Cross(TT, this.direction);
          return KT.m.RotationFromAxis(TT, kT, this.direction)
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
          super._initCache(), this._cache.position = KT.m.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(TT) {
          return !TT && this.isSynchronized() ? (this._currentRenderId = this.NJ().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.UkT(this.position), this._worldMatrix || (this._worldMatrix = KT.d.Identity()), KT.d.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(TT) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : TT?.minZ || 0
        }
        getDepthMaxZ(TT) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : TT?.maxZ || 1e4
        }
        setShadowProjectionMatrix(TT, kT, cT) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(kT, cT, TT) : this._setDefaultShadowProjectionMatrix(TT, kT, cT), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(TT) {
          const kT = KT.h.Fv[0];
          let cT = this.position;
          this.computeTransformedInformation() && (cT = this.transformedPosition), KT.m.NormalizeToRef(this.getShadowDirection(TT), kT), 1 === Math.abs(KT.m.Dot(kT, KT.m.Up())) && (kT.z = 1e-13);
          const lT = KT.h.Fv[1];
          return cT.addToRef(kT, lT), KT.d.LookAtLHToRef(cT, lT, KT.m.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(TT, kT) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, TT ?? this._viewMatrix, kT ?? []), this._projectionMatrix
        }
      }, (() => {
        const KT = "function" === typeof Symbol && Symbol.metadata ? Object.create(IT[Symbol.metadata] ?? null) : void 0;
        kT = [(0, MT.F)()], cT = [(0, MT.F)()], fT = [(0, MT.J)()], xT = [(0, MT.J)()], (0, lT.e)(TT, null, kT, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: TT => "position" in TT,
            get: TT => TT.position
          },
          metadata: KT
        }, null, AT), (0, lT.e)(TT, null, cT, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: TT => "direction" in TT,
            get: TT => TT.direction
          },
          metadata: KT
        }, null, AT), (0, lT.e)(TT, null, fT, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "shadowMinZ" in TT,
            get: TT => TT.shadowMinZ
          },
          metadata: KT
        }, null, AT), (0, lT.e)(TT, null, xT, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: TT => "shadowMaxZ" in TT,
            get: TT => TT.shadowMaxZ
          },
          metadata: KT
        }, null, AT), KT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: KT
        })
      })(), TT
    })()
  },
  41180: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT
    });
    var lT = cT(40111);
    class MT extends lT.f {
      constructor(TT, kT, cT, MT, KT) {
        let OT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          fT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          xT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          IT = arguments.length > 9 ? arguments[9] : void 0,
          AT = arguments.length > 10 ? arguments[10] : void 0,
          CT = arguments.length > 11 ? arguments[11] : void 0,
          jT = arguments.length > 12 ? arguments[12] : void 0;
        super(null, KT, !OT, yT, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, IT), this.format = MT, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== xT || (fT = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== xT || (fT = 1), this._texture = this._engine.createRawTexture(TT, kT, cT, MT, OT, yT, fT, null, xT, IT ?? 0, AT ?? !1, jT), this.wrapU = lT.f.CLAMP_ADDRESSMODE, this.wrapV = lT.f.CLAMP_ADDRESSMODE, this._waitingForData = !!CT && !TT)
      }
      update(TT) {
        this.updateMipLevel(TT, 0)
      }
      updateMipLevel(TT, kT) {
        this._getEngine().updateRawTexture(this._texture, TT, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, kT), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const TT = new MT(null, this.getSize().width, this.getSize().height, this.format, this.NJ(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return TT._texture = this._texture, this._texture.incrementReferences(), TT
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(TT, kT, cT, lT) {
        return new MT(TT, kT, cT, 1, lT, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(TT, kT, cT, lT) {
        return new MT(TT, kT, cT, 2, lT, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(TT, kT, cT, lT) {
        return new MT(TT, kT, cT, 0, lT, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(TT, kT, cT, lT) {
        return new MT(TT, kT, cT, 4, lT, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(TT, kT, cT, lT) {
        return new MT(TT, kT, cT, 5, lT, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(TT, kT, cT, lT) {
        return new MT(TT, kT, cT, 5, lT, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(TT, kT, cT, KT) {
        let OT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          yT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          fT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : lT.f.TRILINEAR_SAMPLINGMODE;
        return new MT(TT, kT, cT, 6, KT, OT, yT, fT, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(TT, kT, cT, KT) {
        let OT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          yT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          fT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : lT.f.TRILINEAR_SAMPLINGMODE;
        return new MT(TT, kT, cT, 6, KT, OT, yT, fT, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  41225: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT.c
    });
    var lT = cT(40066);
    (0, lT.g)()
  },
  41166: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT.b
    });
    var lT = cT(40090);
    (0, lT.d)()
  },
  40090: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => CT,
      d: () => tT
    });
    var lT, MT, KT = cT(37093),
      OT = cT(39782),
      yT = cT(40025),
      fT = cT(40095),
      xT = cT(39908),
      IT = cT(40104),
      AT = cT(39500);
    class CT extends yT.e {
      _isShaderMaterial(TT) {
        return !!TT && "ShaderMaterial" === TT.getClassName()
      }
      constructor(TT) {
        let kT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          lT = arguments.length > 5 ? arguments[5] : void 0,
          MT = arguments.length > 6 ? arguments[6] : void 0,
          yT = arguments.length > 7 ? arguments[7] : void 0;
        super(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, kT, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = lT, this.useVertexAlpha = MT, this.color = new KT.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, kT && (this.color = kT.color.clone(), this.alpha = kT.alpha, this.useVertexColor = kT.useVertexColor, this.useVertexAlpha = kT.useVertexAlpha), this.intersectionThreshold = .1;
        const fT = {
          attributes: [OT.l.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? fT.defines.push("#define VERTEXALPHA") : fT.needAlphaBlending = !1, this.useVertexColor ? (fT.defines.push("#define VERTEXCOLOR"), fT.attributes.push(OT.l.ColorKind)) : (fT.uniforms.push("color"), this._color4 = new KT.g), yT) this.material = yT;
        else {
          this.NJ().Dv().isWebGPU && !CT.ForceGLSL && (this._shaderLanguage = 1), fT.shaderLanguage = this._shaderLanguage, fT.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([cT.e(335).then((() => cT(42095))), cT.e(341).then((() => cT(42104)))]) : await Promise.all([cT.e(317).then((() => cT(42113))), cT.e(323).then((() => cT(42118)))])
          };
          const TT = new IT.q("colorShader", this.NJ(), "color", fT, !1);
          TT.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(TT)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(TT) {
        const kT = this.material;
        if (kT === TT) return;
        const cT = kT && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(TT), cT && kT?.dispose()
      }
      _setInternalMaterial(TT) {
        this._setMaterial(TT), this.material && (this.material.fillMode = xT.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(TT) {}
      _bind(TT, kT) {
        if (!this._geometry) return this;
        const cT = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(kT, cT) : this._geometry._bind(kT, cT, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: TT,
            g: kT,
            b: cT
          } = this.color;
          this._color4.set(TT, kT, cT, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(TT, kT, cT) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const lT = this.NJ().Dv();
        return this._unIndexed ? lT.drawArraysType(xT.e.LineListDrawMode, TT.verticesStart, TT.verticesCount, cT) : lT.drawElementsType(xT.e.LineListDrawMode, TT.indexStart, TT.indexCount, cT), this
      }
      dispose(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || kT) && this.material?.dispose(!1, !1, !0), super.dispose(TT)
      }
      clone(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        if (kT && void 0 === kT._addToSceneRootNodes) {
          const cT = kT;
          return cT.source = this, new CT(TT, this.NJ(), cT.parent, cT.source, cT.doNotCloneChildren)
        }
        return new CT(TT, this.NJ(), kT, this, cT)
      }
      createInstance(TT) {
        const kT = new jT(TT, this);
        if (this.xH) {
          kT.xH = {};
          for (const TT in this.xH) kT.xH[TT] = this.xH[TT]
        }
        return kT
      }
      serialize(TT) {
        super.serialize(TT), TT.color = this.color.acT(), TT.alpha = this.alpha
      }
      static Parse(TT, kT) {
        const cT = new CT(TT.name, kT);
        return cT.color = KT.c.FromArray(TT.color), cT.alpha = TT.alpha, cT
      }
    }
    CT.ForceGLSL = !1;
    class jT extends fT.c {
      constructor(TT, kT) {
        super(TT, kT), this.intersectionThreshold = kT.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let vT = !1;

    function tT() {
      vT || (vT = !0, yT.e._LinesMeshParser = (TT, kT) => CT.Parse(TT, kT))
    }(lT = CT.prototype).enableEdgesRendering ?? (lT.enableEdgesRendering = (0, AT.f)("LinesMesh", "enableEdgesRendering")), (MT = jT.prototype).enableEdgesRendering ?? (MT.enableEdgesRendering = (0, AT.f)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);