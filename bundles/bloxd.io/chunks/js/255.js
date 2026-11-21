export const id = 255;
export const ids = [255];
export const modules = {
  41005: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ
    });
    class LQ {}
    LQ.AUTOSAMPLERSUFFIX = "Sampler", LQ.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", LQ.ALPHA_DISABLE = 0, LQ.ALPHA_ADD = 1, LQ.ALPHA_COMBINE = 2, LQ.ALPHA_SUBTRACT = 3, LQ.ALPHA_MULTIPLY = 4, LQ.ALPHA_MAXIMIZED = 5, LQ.ALPHA_ONEONE = 6, LQ.ALPHA_PREMULTIPLIED = 7, LQ.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, LQ.ALPHA_INTERPOLATE = 9, LQ.ALPHA_SCREENMODE = 10, LQ.ALPHA_ONEONE_ONEONE = 11, LQ.ALPHA_ALPHATOCOLOR = 12, LQ.ALPHA_REVERSEONEMINUS = 13, LQ.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, LQ.ALPHA_ONEONE_ONEZERO = 15, LQ.ALPHA_EXCLUSION = 16, LQ.ALPHA_LAYER_ACCUMULATE = 17, LQ.ALPHA_MIN = 18, LQ.ALPHA_MAX = 19, LQ.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, LQ.ALPHA_REPLACE_COLOR = 21, LQ.ALPHA_EQUATION_ADD = 0, LQ.ALPHA_EQUATION_SUBSTRACT = 1, LQ.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, LQ.ALPHA_EQUATION_MAX = 3, LQ.ALPHA_EQUATION_MIN = 4, LQ.ALPHA_EQUATION_DARKEN = 5, LQ.DELAYLOADSTATE_NONE = 0, LQ.DELAYLOADSTATE_LOADED = 1, LQ.DELAYLOADSTATE_LOADING = 2, LQ.DELAYLOADSTATE_NOTLOADED = 4, LQ.NEVER = 512, LQ.ALWAYS = 519, LQ.LESS = 513, LQ.EQUAL = 514, LQ.LEQUAL = 515, LQ.GREATER = 516, LQ.GEQUAL = 518, LQ.NOTEQUAL = 517, LQ.KEEP = 7680, LQ.ZERO = 0, LQ.REPLACE = 7681, LQ.INCR = 7682, LQ.DECR = 7683, LQ.INVERT = 5386, LQ.INCR_WRAP = 34055, LQ.DECR_WRAP = 34056, LQ.TEXTURE_CLAMP_ADDRESSMODE = 0, LQ.TEXTURE_WRAP_ADDRESSMODE = 1, LQ.TEXTURE_MIRROR_ADDRESSMODE = 2, LQ.TEXTURE_REPETITION_NONE = 0, LQ.TEXTURE_REPETITION_NOISE_BLEND = 1, LQ.TEXTURE_REPETITION_HEX_TILING = 2, LQ.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, LQ.TEXTURE_REPETITION_VORONOI_BOMBING = 4, LQ.TEXTURE_CREATIONFLAG_STORAGE = 1, LQ.TEXTUREFORMAT_ALPHA = 0, LQ.TEXTUREFORMAT_LUMINANCE = 1, LQ.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, LQ.TEXTUREFORMAT_RGB = 4, LQ.TEXTUREFORMAT_RGBA = 5, LQ.TEXTUREFORMAT_RED = 6, LQ.TEXTUREFORMAT_R = 6, LQ.TEXTUREFORMAT_R16_UNORM = 33322, LQ.TEXTUREFORMAT_RG16_UNORM = 33324, LQ.TEXTUREFORMAT_RGB16_UNORM = 32852, LQ.TEXTUREFORMAT_RGBA16_UNORM = 32859, LQ.TEXTUREFORMAT_R16_SNORM = 36760, LQ.TEXTUREFORMAT_RG16_SNORM = 36761, LQ.TEXTUREFORMAT_RGB16_SNORM = 36762, LQ.TEXTUREFORMAT_RGBA16_SNORM = 36763, LQ.TEXTUREFORMAT_RG = 7, LQ.TEXTUREFORMAT_RED_INTEGER = 8, LQ.TEXTUREFORMAT_R_INTEGER = 8, LQ.TEXTUREFORMAT_RG_INTEGER = 9, LQ.TEXTUREFORMAT_RGB_INTEGER = 10, LQ.TEXTUREFORMAT_RGBA_INTEGER = 11, LQ.TEXTUREFORMAT_BGRA = 12, LQ.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, LQ.TEXTUREFORMAT_DEPTH32_FLOAT = 14, LQ.TEXTUREFORMAT_DEPTH16 = 15, LQ.TEXTUREFORMAT_DEPTH24 = 16, LQ.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, LQ.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, LQ.TEXTUREFORMAT_STENCIL8 = 19, LQ.TEXTUREFORMAT_UNDEFINED = 4294967295, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, LQ.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, LQ.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, LQ.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, LQ.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, LQ.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, LQ.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, LQ.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, LQ.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, LQ.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, LQ.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, LQ.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, LQ.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, LQ.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, LQ.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, LQ.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, LQ.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, LQ.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, LQ.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, LQ.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, LQ.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, LQ.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, LQ.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, LQ.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, LQ.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, LQ.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, LQ.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, LQ.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, LQ.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, LQ.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, LQ.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, LQ.TEXTURETYPE_UNSIGNED_BYTE = 0, LQ.TEXTURETYPE_UNSIGNED_INT = 0, LQ.TEXTURETYPE_FLOAT = 1, LQ.TEXTURETYPE_HALF_FLOAT = 2, LQ.TEXTURETYPE_BYTE = 3, LQ.TEXTURETYPE_SHORT = 4, LQ.TEXTURETYPE_UNSIGNED_SHORT = 5, LQ.TEXTURETYPE_INT = 6, LQ.TEXTURETYPE_UNSIGNED_INTEGER = 7, LQ.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, LQ.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, LQ.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, LQ.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, LQ.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, LQ.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, LQ.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, LQ.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, LQ.TEXTURETYPE_UNDEFINED = 16, LQ.TEXTURE_2D = 3553, LQ.TEXTURE_2D_ARRAY = 35866, LQ.TEXTURE_CUBE_MAP = 34067, LQ.TEXTURE_CUBE_MAP_ARRAY = 3735928559, LQ.TEXTURE_3D = 32879, LQ.TEXTURE_NEAREST_SAMPLINGMODE = 1, LQ.TEXTURE_NEAREST_NEAREST = 1, LQ.TEXTURE_BILINEAR_SAMPLINGMODE = 2, LQ.TEXTURE_LINEAR_LINEAR = 2, LQ.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, LQ.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, LQ.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, LQ.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, LQ.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, LQ.TEXTURE_NEAREST_LINEAR = 7, LQ.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, LQ.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, LQ.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, LQ.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, LQ.TEXTURE_LINEAR_NEAREST = 12, LQ.TEXTURE_EXPLICIT_MODE = 0, LQ.TEXTURE_SPHERICAL_MODE = 1, LQ.TEXTURE_PLANAR_MODE = 2, LQ.TEXTURE_CUBIC_MODE = 3, LQ.TEXTURE_PROJECTION_MODE = 4, LQ.TEXTURE_SKYBOX_MODE = 5, LQ.TEXTURE_INVCUBIC_MODE = 6, LQ.TEXTURE_EQUIRECTANGULAR_MODE = 7, LQ.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, LQ.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, LQ.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, LQ.TEXTURE_FILTERING_QUALITY_HIGH = 64, LQ.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, LQ.TEXTURE_FILTERING_QUALITY_LOW = 8, LQ.SCALEMODE_FLOOR = 1, LQ.SCALEMODE_NEAREST = 2, LQ.SCALEMODE_CEILING = 3, LQ.MATERIAL_TextureDirtyFlag = 1, LQ.MATERIAL_LightDirtyFlag = 2, LQ.MATERIAL_FresnelDirtyFlag = 4, LQ.MATERIAL_AttributesDirtyFlag = 8, LQ.MATERIAL_MiscDirtyFlag = 16, LQ.MATERIAL_PrePassDirtyFlag = 32, LQ.MATERIAL_ImageProcessingDirtyFlag = 64, LQ.MATERIAL_AllDirtyFlag = 127, LQ.MATERIAL_TriangleFillMode = 0, LQ.MATERIAL_WireFrameFillMode = 1, LQ.MATERIAL_PointFillMode = 2, LQ.MATERIAL_PointListDrawMode = 3, LQ.MATERIAL_LineListDrawMode = 4, LQ.MATERIAL_LineLoopDrawMode = 5, LQ.MATERIAL_LineStripDrawMode = 6, LQ.MATERIAL_TriangleStripDrawMode = 7, LQ.MATERIAL_TriangleFanDrawMode = 8, LQ.MATERIAL_ClockWiseSideOrientation = 0, LQ.MATERIAL_CounterClockWiseSideOrientation = 1, LQ.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, LQ.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, LQ.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, LQ.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, LQ.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, LQ.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, LQ.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, LQ.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, LQ.ACTION_NothingTrigger = 0, LQ.ACTION_OnPickTrigger = 1, LQ.ACTION_OnLeftPickTrigger = 2, LQ.ACTION_OnRightPickTrigger = 3, LQ.ACTION_OnCenterPickTrigger = 4, LQ.ACTION_OnPickDownTrigger = 5, LQ.ACTION_OnDoublePickTrigger = 6, LQ.ACTION_OnPickUpTrigger = 7, LQ.ACTION_OnPickOutTrigger = 16, LQ.ACTION_OnLongPressTrigger = 8, LQ.ACTION_OnPointerOverTrigger = 9, LQ.ACTION_OnPointerOutTrigger = 10, LQ.ACTION_OnEveryFrameTrigger = 11, LQ.ACTION_OnIntersectionEnterTrigger = 12, LQ.ACTION_OnIntersectionExitTrigger = 13, LQ.ACTION_OnKeyDownTrigger = 14, LQ.ACTION_OnKeyUpTrigger = 15, LQ.PARTICLES_BILLBOARDMODE_Y = 2, LQ.PARTICLES_BILLBOARDMODE_ALL = 7, LQ.PARTICLES_BILLBOARDMODE_STRETCHED = 8, LQ.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, LQ.MESHES_CULLINGSTRATEGY_STANDARD = 0, LQ.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, LQ.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, LQ.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, LQ.SCENELOADER_NO_LOGGING = 0, LQ.SCENELOADER_MINIMAL_LOGGING = 1, LQ.SCENELOADER_SUMMARY_LOGGING = 2, LQ.SCENELOADER_DETAILED_LOGGING = 3, LQ.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, LQ.PREPASS_POSITION_TEXTURE_TYPE = 1, LQ.PREPASS_VELOCITY_TEXTURE_TYPE = 2, LQ.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, LQ.PREPASS_COLOR_TEXTURE_TYPE = 4, LQ.PREPASS_DEPTH_TEXTURE_TYPE = 5, LQ.PREPASS_NORMAL_TEXTURE_TYPE = 6, LQ.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, LQ.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, LQ.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, LQ.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, LQ.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, LQ.PREPASS_ALBEDO_TEXTURE_TYPE = 12, LQ.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, LQ.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, LQ.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, LQ.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, LQ.BUFFER_CREATIONFLAG_READ = 1, LQ.BUFFER_CREATIONFLAG_WRITE = 2, LQ.BUFFER_CREATIONFLAG_READWRITE = 3, LQ.BUFFER_CREATIONFLAG_UNIFORM = 4, LQ.BUFFER_CREATIONFLAG_VERTEX = 8, LQ.BUFFER_CREATIONFLAG_INDEX = 16, LQ.BUFFER_CREATIONFLAG_STORAGE = 32, LQ.BUFFER_CREATIONFLAG_INDIRECT = 64, LQ.RENDERPASS_MAIN = 0, LQ.INPUT_ALT_KEY = 18, LQ.INPUT_CTRL_KEY = 17, LQ.INPUT_META_KEY1 = 91, LQ.INPUT_META_KEY2 = 92, LQ.INPUT_META_KEY3 = 93, LQ.INPUT_SHIFT_KEY = 16, LQ.SNAPSHOTRENDERING_STANDARD = 0, LQ.SNAPSHOTRENDERING_FAST = 1, LQ.PERSPECTIVE_CAMERA = 0, LQ.ORTHOGRAPHIC_CAMERA = 1, LQ.FOVMODE_VERTICAL_FIXED = 0, LQ.FOVMODE_HORIZONTAL_FIXED = 1, LQ.RIG_MODE_NONE = 0, LQ.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, LQ.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, LQ.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, LQ.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, LQ.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, LQ.RIG_MODE_VR = 20, LQ.RIG_MODE_CUSTOM = 22, LQ.MAX_SUPPORTED_UV_SETS = 6, LQ.GL_ALPHA_EQUATION_ADD = 32774, LQ.GL_ALPHA_EQUATION_MIN = 32775, LQ.GL_ALPHA_EQUATION_MAX = 32776, LQ.GL_ALPHA_EQUATION_SUBTRACT = 32778, LQ.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, LQ.GL_ALPHA_FUNCTION_SRC = 768, LQ.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, LQ.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, LQ.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, LQ.GL_ALPHA_FUNCTION_DST_ALPHA = 772, LQ.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, LQ.GL_ALPHA_FUNCTION_DST_COLOR = 774, LQ.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, LQ.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, LQ.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, LQ.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, LQ.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, LQ.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, LQ.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, LQ.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, LQ.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, LQ.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, LQ.SnippetUrl = "https://snippet.babylonjs.com", LQ.FOGMODE_NONE = 0, LQ.FOGMODE_EXP = 1, LQ.FOGMODE_EXP2 = 2, LQ.FOGMODE_LINEAR = 3, LQ.BYTE = 5120, LQ.UNSIGNED_BYTE = 5121, LQ.SHORT = 5122, LQ.UNSIGNED_SHORT = 5123, LQ.INT = 5124, LQ.UNSIGNED_INT = 5125, LQ.FLOAT = 5126, LQ.HALF_FLOAT = 5131, LQ.PositionKind = "position", LQ.NormalKind = "normal", LQ.TangentKind = "tangent", LQ.UVKind = "uv", LQ.UV2Kind = "uv2", LQ.UV3Kind = "uv3", LQ.UV4Kind = "uv4", LQ.UV5Kind = "uv5", LQ.UV6Kind = "uv6", LQ.ColorKind = "color", LQ.ColorInstanceKind = "instanceColor", LQ.MatricesIndicesKind = "matricesIndices", LQ.MatricesWeightsKind = "matricesWeights", LQ.MatricesIndicesExtraKind = "matricesIndicesExtra", LQ.MatricesWeightsExtraKind = "matricesWeightsExtra", LQ.ANIMATIONTYPE_FLOAT = 0, LQ.ANIMATIONTYPE_VECTOR3 = 1, LQ.ANIMATIONTYPE_QUATERNION = 2, LQ.ANIMATIONTYPE_MATRIX = 3, LQ.ANIMATIONTYPE_COLOR3 = 4, LQ.ANIMATIONTYPE_COLOR4 = 7, LQ.ANIMATIONTYPE_VECTOR2 = 5, LQ.ANIMATIONTYPE_SIZE = 6, LQ.ShadowMinZ = 0, LQ.ShadowMaxZ = 1e4, LQ.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, LQ.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  40986: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => vQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(36696),
      DQ = wQ(39690),
      kQ = wQ(39655);
    let vQ = (() => {
      var QQ;
      let FQ, wQ, vQ, mQ, uQ = DQ.c,
        HQ = [];
      return QQ = class extends uQ {
        constructor() {
          super(...arguments), this._position = (0, LQ.l)(this, HQ), this._needProjectionMatrixCompute = !0, this._viewMatrix = oQ.c.Identity(), this._projectionMatrix = oQ.c.Identity()
        }
        _setPosition(QQ) {
          this._position = QQ
        }
        get position() {
          return this._position
        }
        set position(QQ) {
          this._setPosition(QQ)
        }
        _setDirection(QQ) {
          this._direction = QQ
        }
        get direction() {
          return this._direction
        }
        set direction(QQ) {
          this._setDirection(QQ)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(QQ) {
          this._shadowMinZ = QQ, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(QQ) {
          this._shadowMaxZ = QQ, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = oQ.p.Zero()), oQ.p.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = oQ.p.Zero()), oQ.p.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(QQ) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(QQ) {
          return this.direction = oQ.p.Normalize(QQ.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const QQ = oQ.p.Cross(this.direction, kQ.b.Y),
            FQ = oQ.p.Cross(QQ, this.direction);
          return oQ.p.RotationFromAxis(QQ, FQ, this.direction)
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
          super._initCache(), this._cache.position = oQ.p.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(QQ) {
          return !QQ && this.isSynchronized() ? (this._currentRenderId = this.iN().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.Qs(this.position), this._worldMatrix || (this._worldMatrix = oQ.c.Identity()), oQ.c.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(QQ) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : QQ?.minZ || 0
        }
        getDepthMaxZ(QQ) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : QQ?.maxZ || 1e4
        }
        setShadowProjectionMatrix(QQ, FQ, wQ) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(FQ, wQ, QQ) : this._setDefaultShadowProjectionMatrix(QQ, FQ, wQ), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(QQ) {
          const FQ = oQ.k.Ox[0];
          let wQ = this.position;
          this.computeTransformedInformation() && (wQ = this.transformedPosition), oQ.p.NormalizeToRef(this.getShadowDirection(QQ), FQ), 1 === Math.abs(oQ.p.Dot(FQ, oQ.p.Up())) && (FQ.z = 1e-13);
          const LQ = oQ.k.Ox[1];
          return wQ.addToRef(FQ, LQ), oQ.c.LookAtLHToRef(wQ, LQ, oQ.p.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(QQ, FQ) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, QQ ?? this._viewMatrix, FQ ?? []), this._projectionMatrix
        }
      }, (() => {
        const oQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(uQ[Symbol.metadata] ?? null) : void 0;
        FQ = [(0, qQ.F)()], wQ = [(0, qQ.F)()], vQ = [(0, qQ.I)()], mQ = [(0, qQ.I)()], (0, LQ.i)(QQ, null, FQ, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: QQ => "position" in QQ,
            get: QQ => QQ.position
          },
          metadata: oQ
        }, null, HQ), (0, LQ.i)(QQ, null, wQ, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: QQ => "direction" in QQ,
            get: QQ => QQ.direction
          },
          metadata: oQ
        }, null, HQ), (0, LQ.i)(QQ, null, vQ, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: QQ => "shadowMinZ" in QQ,
            get: QQ => QQ.shadowMinZ
          },
          metadata: oQ
        }, null, HQ), (0, LQ.i)(QQ, null, mQ, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: QQ => "shadowMaxZ" in QQ,
            get: QQ => QQ.shadowMaxZ
          },
          metadata: oQ
        }, null, HQ), oQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oQ
        })
      })(), QQ
    })()
  },
  40998: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ
    });
    var LQ = wQ(39897);
    class qQ extends LQ.e {
      constructor(QQ, FQ, wQ, qQ, oQ) {
        let DQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          kQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          vQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          mQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          uQ = arguments.length > 9 ? arguments[9] : void 0,
          HQ = arguments.length > 10 ? arguments[10] : void 0,
          bQ = arguments.length > 11 ? arguments[11] : void 0,
          YQ = arguments.length > 12 ? arguments[12] : void 0;
        super(null, oQ, !DQ, kQ, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, uQ), this.format = qQ, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== mQ || (vQ = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== mQ || (vQ = 1), this._texture = this._engine.createRawTexture(QQ, FQ, wQ, qQ, DQ, kQ, vQ, null, mQ, uQ ?? 0, HQ ?? !1, YQ), this.wrapU = LQ.e.CLAMP_ADDRESSMODE, this.wrapV = LQ.e.CLAMP_ADDRESSMODE, this._waitingForData = !!bQ && !QQ)
      }
      update(QQ) {
        this.updateMipLevel(QQ, 0)
      }
      updateMipLevel(QQ, FQ) {
        this._getEngine().updateRawTexture(this._texture, QQ, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, FQ), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const QQ = new qQ(null, this.getSize().width, this.getSize().height, this.format, this.iN(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return QQ._texture = this._texture, this._texture.incrementReferences(), QQ
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(QQ, FQ, wQ, LQ) {
        return new qQ(QQ, FQ, wQ, 1, LQ, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(QQ, FQ, wQ, LQ) {
        return new qQ(QQ, FQ, wQ, 2, LQ, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(QQ, FQ, wQ, LQ) {
        return new qQ(QQ, FQ, wQ, 0, LQ, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(QQ, FQ, wQ, LQ) {
        return new qQ(QQ, FQ, wQ, 4, LQ, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(QQ, FQ, wQ, LQ) {
        return new qQ(QQ, FQ, wQ, 5, LQ, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(QQ, FQ, wQ, LQ) {
        return new qQ(QQ, FQ, wQ, 5, LQ, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(QQ, FQ, wQ, oQ) {
        let DQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          kQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          vQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : LQ.e.TRILINEAR_SAMPLINGMODE;
        return new qQ(QQ, FQ, wQ, 6, oQ, DQ, kQ, vQ, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(QQ, FQ, wQ, oQ) {
        let DQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          kQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          vQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : LQ.e.TRILINEAR_SAMPLINGMODE;
        return new qQ(QQ, FQ, wQ, 6, oQ, DQ, kQ, vQ, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  41039: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ.c
    });
    var LQ = wQ(39855);
    (0, LQ.d)()
  },
  40988: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ.b
    });
    var LQ = wQ(39881);
    (0, LQ.f)()
  },
  39881: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => bQ,
      f: () => AQ
    });
    var LQ, qQ, oQ = wQ(36873),
      DQ = wQ(39561),
      kQ = wQ(39829),
      vQ = wQ(39886),
      mQ = wQ(39717),
      uQ = wQ(39892),
      HQ = wQ(39277);
    class bQ extends kQ.c {
      _isShaderMaterial(QQ) {
        return !!QQ && "ShaderMaterial" === QQ.getClassName()
      }
      constructor(QQ) {
        let FQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          LQ = arguments.length > 5 ? arguments[5] : void 0,
          qQ = arguments.length > 6 ? arguments[6] : void 0,
          kQ = arguments.length > 7 ? arguments[7] : void 0;
        super(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, FQ, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = LQ, this.useVertexAlpha = qQ, this.color = new oQ.b(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, FQ && (this.color = FQ.color.clone(), this.alpha = FQ.alpha, this.useVertexColor = FQ.useVertexColor, this.useVertexAlpha = FQ.useVertexAlpha), this.intersectionThreshold = .1;
        const vQ = {
          attributes: [DQ.h.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? vQ.defines.push("#define VERTEXALPHA") : vQ.needAlphaBlending = !1, this.useVertexColor ? (vQ.defines.push("#define VERTEXCOLOR"), vQ.attributes.push(DQ.h.ColorKind)) : (vQ.uniforms.push("color"), this._color4 = new oQ.e), kQ) this.material = kQ;
        else {
          this.iN().Wx().isWebGPU && !bQ.ForceGLSL && (this._shaderLanguage = 1), vQ.shaderLanguage = this._shaderLanguage, vQ.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([wQ.e(335).then((() => wQ(41934))), wQ.e(341).then((() => wQ(41942)))]) : await Promise.all([wQ.e(317).then((() => wQ(41944))), wQ.e(323).then((() => wQ(41950)))])
          };
          const QQ = new uQ.q("colorShader", this.iN(), "color", vQ, !1);
          QQ.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(QQ)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(QQ) {
        const FQ = this.material;
        if (FQ === QQ) return;
        const wQ = FQ && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(QQ), wQ && FQ?.dispose()
      }
      _setInternalMaterial(QQ) {
        this._setMaterial(QQ), this.material && (this.material.fillMode = mQ.d.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(QQ) {}
      _bind(QQ, FQ) {
        if (!this._geometry) return this;
        const wQ = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(FQ, wQ) : this._geometry._bind(FQ, wQ, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: QQ,
            g: FQ,
            b: wQ
          } = this.color;
          this._color4.set(QQ, FQ, wQ, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(QQ, FQ, wQ) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const LQ = this.iN().Wx();
        return this._unIndexed ? LQ.drawArraysType(mQ.d.LineListDrawMode, QQ.verticesStart, QQ.verticesCount, wQ) : LQ.drawElementsType(mQ.d.LineListDrawMode, QQ.indexStart, QQ.indexCount, wQ), this
      }
      dispose(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || FQ) && this.material?.dispose(!1, !1, !0), super.dispose(QQ)
      }
      clone(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        if (FQ && void 0 === FQ._addToSceneRootNodes) {
          const wQ = FQ;
          return wQ.source = this, new bQ(QQ, this.iN(), wQ.parent, wQ.source, wQ.doNotCloneChildren)
        }
        return new bQ(QQ, this.iN(), FQ, this, wQ)
      }
      createInstance(QQ) {
        const FQ = new YQ(QQ, this);
        if (this.bK) {
          FQ.bK = {};
          for (const QQ in this.bK) FQ.bK[QQ] = this.bK[QQ]
        }
        return FQ
      }
      serialize(QQ) {
        super.serialize(QQ), QQ.color = this.color.RLQ(), QQ.alpha = this.alpha
      }
      static Parse(QQ, FQ) {
        const wQ = new bQ(QQ.name, FQ);
        return wQ.color = oQ.b.FromArray(QQ.color), wQ.alpha = QQ.alpha, wQ
      }
    }
    bQ.ForceGLSL = !1;
    class YQ extends vQ.c {
      constructor(QQ, FQ) {
        super(QQ, FQ), this.intersectionThreshold = FQ.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let xQ = !1;

    function AQ() {
      xQ || (xQ = !0, kQ.c._LinesMeshParser = (QQ, FQ) => bQ.Parse(QQ, FQ))
    }(LQ = bQ.prototype).enableEdgesRendering ?? (LQ.enableEdgesRendering = (0, HQ.g)("LinesMesh", "enableEdgesRendering")), (qQ = YQ.prototype).enableEdgesRendering ?? (qQ.enableEdgesRendering = (0, HQ.g)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);