export const id = 286;
export const ids = [286];
export const modules = {
  44270: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    class cU {}
    cU.AUTOSAMPLERSUFFIX = "Sampler", cU.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", cU.ALPHA_DISABLE = 0, cU.ALPHA_ADD = 1, cU.ALPHA_COMBINE = 2, cU.ALPHA_SUBTRACT = 3, cU.ALPHA_MULTIPLY = 4, cU.ALPHA_MAXIMIZED = 5, cU.ALPHA_ONEONE = 6, cU.ALPHA_PREMULTIPLIED = 7, cU.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, cU.ALPHA_INTERPOLATE = 9, cU.ALPHA_SCREENMODE = 10, cU.ALPHA_ONEONE_ONEONE = 11, cU.ALPHA_ALPHATOCOLOR = 12, cU.ALPHA_REVERSEONEMINUS = 13, cU.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, cU.ALPHA_ONEONE_ONEZERO = 15, cU.ALPHA_EXCLUSION = 16, cU.ALPHA_LAYER_ACCUMULATE = 17, cU.ALPHA_MIN = 18, cU.ALPHA_MAX = 19, cU.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, cU.ALPHA_REPLACE_COLOR = 21, cU.ALPHA_EQUATION_ADD = 0, cU.ALPHA_EQUATION_SUBSTRACT = 1, cU.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, cU.ALPHA_EQUATION_MAX = 3, cU.ALPHA_EQUATION_MIN = 4, cU.ALPHA_EQUATION_DARKEN = 5, cU.DELAYLOADSTATE_NONE = 0, cU.DELAYLOADSTATE_LOADED = 1, cU.DELAYLOADSTATE_LOADING = 2, cU.DELAYLOADSTATE_NOTLOADED = 4, cU.NEVER = 512, cU.ALWAYS = 519, cU.LESS = 513, cU.EQUAL = 514, cU.LEQUAL = 515, cU.GREATER = 516, cU.GEQUAL = 518, cU.NOTEQUAL = 517, cU.KEEP = 7680, cU.ZERO = 0, cU.REPLACE = 7681, cU.INCR = 7682, cU.DECR = 7683, cU.INVERT = 5386, cU.INCR_WRAP = 34055, cU.DECR_WRAP = 34056, cU.TEXTURE_CLAMP_ADDRESSMODE = 0, cU.TEXTURE_WRAP_ADDRESSMODE = 1, cU.TEXTURE_MIRROR_ADDRESSMODE = 2, cU.TEXTURE_REPETITION_NONE = 0, cU.TEXTURE_REPETITION_NOISE_BLEND = 1, cU.TEXTURE_REPETITION_HEX_TILING = 2, cU.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, cU.TEXTURE_REPETITION_VORONOI_BOMBING = 4, cU.TEXTURE_CREATIONFLAG_STORAGE = 1, cU.TEXTUREFORMAT_ALPHA = 0, cU.TEXTUREFORMAT_LUMINANCE = 1, cU.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, cU.TEXTUREFORMAT_RGB = 4, cU.TEXTUREFORMAT_RGBA = 5, cU.TEXTUREFORMAT_RED = 6, cU.TEXTUREFORMAT_R = 6, cU.TEXTUREFORMAT_R16_UNORM = 33322, cU.TEXTUREFORMAT_RG16_UNORM = 33324, cU.TEXTUREFORMAT_RGB16_UNORM = 32852, cU.TEXTUREFORMAT_RGBA16_UNORM = 32859, cU.TEXTUREFORMAT_R16_SNORM = 36760, cU.TEXTUREFORMAT_RG16_SNORM = 36761, cU.TEXTUREFORMAT_RGB16_SNORM = 36762, cU.TEXTUREFORMAT_RGBA16_SNORM = 36763, cU.TEXTUREFORMAT_RG = 7, cU.TEXTUREFORMAT_RED_INTEGER = 8, cU.TEXTUREFORMAT_R_INTEGER = 8, cU.TEXTUREFORMAT_RG_INTEGER = 9, cU.TEXTUREFORMAT_RGB_INTEGER = 10, cU.TEXTUREFORMAT_RGBA_INTEGER = 11, cU.TEXTUREFORMAT_BGRA = 12, cU.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, cU.TEXTUREFORMAT_DEPTH32_FLOAT = 14, cU.TEXTUREFORMAT_DEPTH16 = 15, cU.TEXTUREFORMAT_DEPTH24 = 16, cU.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, cU.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, cU.TEXTUREFORMAT_STENCIL8 = 19, cU.TEXTUREFORMAT_UNDEFINED = 4294967295, cU.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, cU.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, cU.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, cU.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, cU.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, cU.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, cU.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, cU.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, cU.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, cU.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, cU.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, cU.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, cU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, cU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, cU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, cU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, cU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, cU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, cU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, cU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, cU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, cU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, cU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, cU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, cU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, cU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, cU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, cU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, cU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, cU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, cU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, cU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, cU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, cU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, cU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, cU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, cU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, cU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, cU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, cU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, cU.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, cU.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, cU.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, cU.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, cU.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, cU.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, cU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, cU.TEXTURETYPE_UNSIGNED_BYTE = 0, cU.TEXTURETYPE_UNSIGNED_INT = 0, cU.TEXTURETYPE_FLOAT = 1, cU.TEXTURETYPE_HALF_FLOAT = 2, cU.TEXTURETYPE_BYTE = 3, cU.TEXTURETYPE_SHORT = 4, cU.TEXTURETYPE_UNSIGNED_SHORT = 5, cU.TEXTURETYPE_INT = 6, cU.TEXTURETYPE_UNSIGNED_INTEGER = 7, cU.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, cU.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, cU.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, cU.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, cU.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, cU.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, cU.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, cU.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, cU.TEXTURETYPE_UNDEFINED = 16, cU.TEXTURE_2D = 3553, cU.TEXTURE_2D_ARRAY = 35866, cU.TEXTURE_CUBE_MAP = 34067, cU.TEXTURE_CUBE_MAP_ARRAY = 3735928559, cU.TEXTURE_3D = 32879, cU.TEXTURE_NEAREST_SAMPLINGMODE = 1, cU.TEXTURE_NEAREST_NEAREST = 1, cU.TEXTURE_BILINEAR_SAMPLINGMODE = 2, cU.TEXTURE_LINEAR_LINEAR = 2, cU.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, cU.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, cU.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, cU.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, cU.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, cU.TEXTURE_NEAREST_LINEAR = 7, cU.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, cU.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, cU.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, cU.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, cU.TEXTURE_LINEAR_NEAREST = 12, cU.TEXTURE_EXPLICIT_MODE = 0, cU.TEXTURE_SPHERICAL_MODE = 1, cU.TEXTURE_PLANAR_MODE = 2, cU.TEXTURE_CUBIC_MODE = 3, cU.TEXTURE_PROJECTION_MODE = 4, cU.TEXTURE_SKYBOX_MODE = 5, cU.TEXTURE_INVCUBIC_MODE = 6, cU.TEXTURE_EQUIRECTANGULAR_MODE = 7, cU.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, cU.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, cU.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, cU.TEXTURE_FILTERING_QUALITY_HIGH = 64, cU.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, cU.TEXTURE_FILTERING_QUALITY_LOW = 8, cU.SCALEMODE_FLOOR = 1, cU.SCALEMODE_NEAREST = 2, cU.SCALEMODE_CEILING = 3, cU.MATERIAL_TextureDirtyFlag = 1, cU.MATERIAL_LightDirtyFlag = 2, cU.MATERIAL_FresnelDirtyFlag = 4, cU.MATERIAL_AttributesDirtyFlag = 8, cU.MATERIAL_MiscDirtyFlag = 16, cU.MATERIAL_PrePassDirtyFlag = 32, cU.MATERIAL_ImageProcessingDirtyFlag = 64, cU.MATERIAL_AllDirtyFlag = 127, cU.MATERIAL_TriangleFillMode = 0, cU.MATERIAL_WireFrameFillMode = 1, cU.MATERIAL_PointFillMode = 2, cU.MATERIAL_PointListDrawMode = 3, cU.MATERIAL_LineListDrawMode = 4, cU.MATERIAL_LineLoopDrawMode = 5, cU.MATERIAL_LineStripDrawMode = 6, cU.MATERIAL_TriangleStripDrawMode = 7, cU.MATERIAL_TriangleFanDrawMode = 8, cU.MATERIAL_ClockWiseSideOrientation = 0, cU.MATERIAL_CounterClockWiseSideOrientation = 1, cU.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, cU.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, cU.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, cU.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, cU.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, cU.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, cU.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, cU.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, cU.ACTION_NothingTrigger = 0, cU.ACTION_OnPickTrigger = 1, cU.ACTION_OnLeftPickTrigger = 2, cU.ACTION_OnRightPickTrigger = 3, cU.ACTION_OnCenterPickTrigger = 4, cU.ACTION_OnPickDownTrigger = 5, cU.ACTION_OnDoublePickTrigger = 6, cU.ACTION_OnPickUpTrigger = 7, cU.ACTION_OnPickOutTrigger = 16, cU.ACTION_OnLongPressTrigger = 8, cU.ACTION_OnPointerOverTrigger = 9, cU.ACTION_OnPointerOutTrigger = 10, cU.ACTION_OnEveryFrameTrigger = 11, cU.ACTION_OnIntersectionEnterTrigger = 12, cU.ACTION_OnIntersectionExitTrigger = 13, cU.ACTION_OnKeyDownTrigger = 14, cU.ACTION_OnKeyUpTrigger = 15, cU.PARTICLES_BILLBOARDMODE_Y = 2, cU.PARTICLES_BILLBOARDMODE_ALL = 7, cU.PARTICLES_BILLBOARDMODE_STRETCHED = 8, cU.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, cU.MESHES_CULLINGSTRATEGY_STANDARD = 0, cU.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, cU.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, cU.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, cU.SCENELOADER_NO_LOGGING = 0, cU.SCENELOADER_MINIMAL_LOGGING = 1, cU.SCENELOADER_SUMMARY_LOGGING = 2, cU.SCENELOADER_DETAILED_LOGGING = 3, cU.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, cU.PREPASS_POSITION_TEXTURE_TYPE = 1, cU.PREPASS_VELOCITY_TEXTURE_TYPE = 2, cU.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, cU.PREPASS_COLOR_TEXTURE_TYPE = 4, cU.PREPASS_DEPTH_TEXTURE_TYPE = 5, cU.PREPASS_NORMAL_TEXTURE_TYPE = 6, cU.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, cU.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, cU.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, cU.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, cU.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, cU.PREPASS_ALBEDO_TEXTURE_TYPE = 12, cU.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, cU.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, cU.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, cU.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, cU.BUFFER_CREATIONFLAG_READ = 1, cU.BUFFER_CREATIONFLAG_WRITE = 2, cU.BUFFER_CREATIONFLAG_READWRITE = 3, cU.BUFFER_CREATIONFLAG_UNIFORM = 4, cU.BUFFER_CREATIONFLAG_VERTEX = 8, cU.BUFFER_CREATIONFLAG_INDEX = 16, cU.BUFFER_CREATIONFLAG_STORAGE = 32, cU.BUFFER_CREATIONFLAG_INDIRECT = 64, cU.RENDERPASS_MAIN = 0, cU.INPUT_ALT_KEY = 18, cU.INPUT_CTRL_KEY = 17, cU.INPUT_META_KEY1 = 91, cU.INPUT_META_KEY2 = 92, cU.INPUT_META_KEY3 = 93, cU.INPUT_SHIFT_KEY = 16, cU.SNAPSHOTRENDERING_STANDARD = 0, cU.SNAPSHOTRENDERING_FAST = 1, cU.PERSPECTIVE_CAMERA = 0, cU.ORTHOGRAPHIC_CAMERA = 1, cU.FOVMODE_VERTICAL_FIXED = 0, cU.FOVMODE_HORIZONTAL_FIXED = 1, cU.RIG_MODE_NONE = 0, cU.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, cU.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, cU.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, cU.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, cU.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, cU.RIG_MODE_VR = 20, cU.RIG_MODE_CUSTOM = 22, cU.MAX_SUPPORTED_UV_SETS = 6, cU.GL_ALPHA_EQUATION_ADD = 32774, cU.GL_ALPHA_EQUATION_MIN = 32775, cU.GL_ALPHA_EQUATION_MAX = 32776, cU.GL_ALPHA_EQUATION_SUBTRACT = 32778, cU.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, cU.GL_ALPHA_FUNCTION_SRC = 768, cU.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, cU.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, cU.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, cU.GL_ALPHA_FUNCTION_DST_ALPHA = 772, cU.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, cU.GL_ALPHA_FUNCTION_DST_COLOR = 774, cU.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, cU.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, cU.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, cU.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, cU.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, cU.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, cU.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, cU.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, cU.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, cU.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, cU.SnippetUrl = "https://snippet.babylonjs.com", cU.FOGMODE_NONE = 0, cU.FOGMODE_EXP = 1, cU.FOGMODE_EXP2 = 2, cU.FOGMODE_LINEAR = 3, cU.BYTE = 5120, cU.UNSIGNED_BYTE = 5121, cU.SHORT = 5122, cU.UNSIGNED_SHORT = 5123, cU.INT = 5124, cU.UNSIGNED_INT = 5125, cU.FLOAT = 5126, cU.HALF_FLOAT = 5131, cU.PositionKind = "position", cU.NormalKind = "normal", cU.TangentKind = "tangent", cU.UVKind = "uv", cU.UV2Kind = "uv2", cU.UV3Kind = "uv3", cU.UV4Kind = "uv4", cU.UV5Kind = "uv5", cU.UV6Kind = "uv6", cU.ColorKind = "color", cU.ColorInstanceKind = "instanceColor", cU.MatricesIndicesKind = "matricesIndices", cU.MatricesWeightsKind = "matricesWeights", cU.MatricesIndicesExtraKind = "matricesIndicesExtra", cU.MatricesWeightsExtraKind = "matricesWeightsExtra", cU.ANIMATIONTYPE_FLOAT = 0, cU.ANIMATIONTYPE_VECTOR3 = 1, cU.ANIMATIONTYPE_QUATERNION = 2, cU.ANIMATIONTYPE_MATRIX = 3, cU.ANIMATIONTYPE_COLOR3 = 4, cU.ANIMATIONTYPE_COLOR4 = 7, cU.ANIMATIONTYPE_VECTOR2 = 5, cU.ANIMATIONTYPE_SIZE = 6, cU.ShadowMinZ = 0, cU.ShadowMaxZ = 1e4, cU.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, cU.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  44249: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => oU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(37819),
      AU = zU(41346),
      FU = zU(41317);
    let oU = (() => {
      var UU;
      let XU, zU, oU, DU, EU = AU.b,
        YU = [];
      return UU = class extends EU {
        constructor() {
          super(...arguments), this._position = (0, cU.n)(this, YU), this._needProjectionMatrixCompute = !0, this._viewMatrix = QU.e.Identity(), this._projectionMatrix = QU.e.Identity()
        }
        _setPosition(UU) {
          this._position = UU
        }
        get position() {
          return this._position
        }
        set position(UU) {
          this._setPosition(UU)
        }
        _setDirection(UU) {
          this._direction = UU
        }
        get direction() {
          return this._direction
        }
        set direction(UU) {
          this._setDirection(UU)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(UU) {
          this._shadowMinZ = UU, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(UU) {
          this._shadowMaxZ = UU, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = QU.q.Zero()), QU.q.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = QU.q.Zero()), QU.q.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(UU) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(UU) {
          return this.direction = QU.q.Normalize(UU.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const UU = QU.q.Cross(this.direction, FU.b.Y),
            XU = QU.q.Cross(UU, this.direction);
          return QU.q.RotationFromAxis(UU, XU, this.direction)
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
          super._initCache(), this._cache.position = QU.q.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(UU) {
          return !UU && this.isSynchronized() ? (this._currentRenderId = this.nS().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.YL(this.position), this._worldMatrix || (this._worldMatrix = QU.e.Identity()), QU.e.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(UU) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : UU?.minZ || 0
        }
        getDepthMaxZ(UU) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : UU?.maxZ || 1e4
        }
        setShadowProjectionMatrix(UU, XU, zU) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(XU, zU, UU) : this._setDefaultShadowProjectionMatrix(UU, XU, zU), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(UU) {
          const XU = QU.l.Sp[0];
          let zU = this.position;
          this.computeTransformedInformation() && (zU = this.transformedPosition), QU.q.NormalizeToRef(this.getShadowDirection(UU), XU), 1 === Math.abs(QU.q.Dot(XU, QU.q.Up())) && (XU.z = 1e-13);
          const cU = QU.l.Sp[1];
          return zU.addToRef(XU, cU), QU.e.LookAtLHToRef(zU, cU, QU.q.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(UU, XU) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, UU ?? this._viewMatrix, XU ?? []), this._projectionMatrix
        }
      }, (() => {
        const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(EU[Symbol.metadata] ?? null) : void 0;
        XU = [(0, yU.F)()], zU = [(0, yU.F)()], oU = [(0, yU.I)()], DU = [(0, yU.I)()], (0, cU.j)(UU, null, XU, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: UU => "position" in UU,
            get: UU => UU.position
          },
          metadata: QU
        }, null, YU), (0, cU.j)(UU, null, zU, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: UU => "direction" in UU,
            get: UU => UU.direction
          },
          metadata: QU
        }, null, YU), (0, cU.j)(UU, null, oU, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: UU => "shadowMinZ" in UU,
            get: UU => UU.shadowMinZ
          },
          metadata: QU
        }, null, YU), (0, cU.j)(UU, null, DU, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: UU => "shadowMaxZ" in UU,
            get: UU => UU.shadowMaxZ
          },
          metadata: QU
        }, null, YU), QU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: QU
        })
      })(), UU
    })()
  },
  44262: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    var cU = zU(41557);
    class yU extends cU.e {
      constructor(UU, XU, zU, yU, QU) {
        let AU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          FU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          oU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          DU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          EU = arguments.length > 9 ? arguments[9] : void 0,
          YU = arguments.length > 10 ? arguments[10] : void 0,
          NU = arguments.length > 11 ? arguments[11] : void 0,
          IU = arguments.length > 12 ? arguments[12] : void 0;
        super(null, QU, !AU, FU, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, EU), this.format = yU, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== DU || (oU = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== DU || (oU = 1), this._texture = this._engine.createRawTexture(UU, XU, zU, yU, AU, FU, oU, null, DU, EU ?? 0, YU ?? !1, IU), this.wrapU = cU.e.CLAMP_ADDRESSMODE, this.wrapV = cU.e.CLAMP_ADDRESSMODE, this._waitingForData = !!NU && !UU)
      }
      update(UU) {
        this.updateMipLevel(UU, 0)
      }
      updateMipLevel(UU, XU) {
        this._getEngine().updateRawTexture(this._texture, UU, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, XU), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const UU = new yU(null, this.getSize().width, this.getSize().height, this.format, this.nS(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return UU._texture = this._texture, this._texture.incrementReferences(), UU
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(UU, XU, zU, cU) {
        return new yU(UU, XU, zU, 1, cU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(UU, XU, zU, cU) {
        return new yU(UU, XU, zU, 2, cU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(UU, XU, zU, cU) {
        return new yU(UU, XU, zU, 0, cU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(UU, XU, zU, cU) {
        return new yU(UU, XU, zU, 4, cU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(UU, XU, zU, cU) {
        return new yU(UU, XU, zU, 5, cU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(UU, XU, zU, cU) {
        return new yU(UU, XU, zU, 5, cU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(UU, XU, zU, QU) {
        let AU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          FU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          oU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : cU.e.TRILINEAR_SAMPLINGMODE;
        return new yU(UU, XU, zU, 6, QU, AU, FU, oU, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(UU, XU, zU, QU) {
        let AU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          FU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          oU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : cU.e.TRILINEAR_SAMPLINGMODE;
        return new yU(UU, XU, zU, 6, QU, AU, FU, oU, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  44307: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU.c
    });
    var cU = zU(41512);
    (0, cU.g)()
  },
  44254: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU.d
    });
    var cU = zU(41536);
    (0, cU.e)()
  },
  41536: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => NU,
      e: () => aU
    });
    var cU, yU, QU = zU(37923),
      AU = zU(41237),
      FU = zU(41481),
      oU = zU(41540),
      DU = zU(41374),
      EU = zU(41549),
      YU = zU(40989);
    class NU extends FU.b {
      _isShaderMaterial(UU) {
        return !!UU && "ShaderMaterial" === UU.getClassName()
      }
      constructor(UU) {
        let XU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          cU = arguments.length > 5 ? arguments[5] : void 0,
          yU = arguments.length > 6 ? arguments[6] : void 0,
          FU = arguments.length > 7 ? arguments[7] : void 0;
        super(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, XU, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = cU, this.useVertexAlpha = yU, this.color = new QU.b(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, XU && (this.color = XU.color.clone(), this.alpha = XU.alpha, this.useVertexColor = XU.useVertexColor, this.useVertexAlpha = XU.useVertexAlpha), this.intersectionThreshold = .1;
        const oU = {
          attributes: [AU.h.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? oU.defines.push("#define VERTEXALPHA") : oU.needAlphaBlending = !1, this.useVertexColor ? (oU.defines.push("#define VERTEXCOLOR"), oU.attributes.push(AU.h.ColorKind)) : (oU.uniforms.push("color"), this._color4 = new QU.e), FU) this.material = FU;
        else {
          this.nS().qp().isWebGPU && !NU.ForceGLSL && (this._shaderLanguage = 1), oU.shaderLanguage = this._shaderLanguage, oU.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([zU.e(650).then((() => zU(45224))), zU.e(656).then((() => zU(45229)))]) : await Promise.all([zU.e(632).then((() => zU(45233))), zU.e(638).then((() => zU(45242)))])
          };
          const UU = new EU.o("colorShader", this.nS(), "color", oU, !1);
          UU.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(UU)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(UU) {
        const XU = this.material;
        if (XU === UU) return;
        const zU = XU && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(UU), zU && XU?.dispose()
      }
      _setInternalMaterial(UU) {
        this._setMaterial(UU), this.material && (this.material.fillMode = DU.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(UU) {}
      _bind(UU, XU) {
        if (!this._geometry) return this;
        const zU = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(XU, zU) : this._geometry._bind(XU, zU, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: UU,
            g: XU,
            b: zU
          } = this.color;
          this._color4.set(UU, XU, zU, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(UU, XU, zU) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const cU = this.nS().qp();
        return this._unIndexed ? cU.drawArraysType(DU.c.LineListDrawMode, UU.verticesStart, UU.verticesCount, zU) : cU.drawElementsType(DU.c.LineListDrawMode, UU.indexStart, UU.indexCount, zU), this
      }
      dispose(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || XU) && this.material?.dispose(!1, !1, !0), super.dispose(UU)
      }
      clone(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        if (XU && void 0 === XU._addToSceneRootNodes) {
          const zU = XU;
          return zU.source = this, new NU(UU, this.nS(), zU.parent, zU.source, zU.doNotCloneChildren)
        }
        return new NU(UU, this.nS(), XU, this, zU)
      }
      createInstance(UU) {
        const XU = new IU(UU, this);
        if (this.XM) {
          XU.XM = {};
          for (const UU in this.XM) XU.XM[UU] = this.XM[UU]
        }
        return XU
      }
      serialize(UU) {
        super.serialize(UU), UU.color = this.color.cyU(), UU.alpha = this.alpha
      }
      static Parse(UU, XU) {
        const zU = new NU(UU.name, XU);
        return zU.color = QU.b.FromArray(UU.color), zU.alpha = UU.alpha, zU
      }
    }
    NU.ForceGLSL = !1;
    class IU extends oU.b {
      constructor(UU, XU) {
        super(UU, XU), this.intersectionThreshold = XU.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let pU = !1;

    function aU() {
      pU || (pU = !0, FU.b._LinesMeshParser = (UU, XU) => NU.Parse(UU, XU))
    }(cU = NU.prototype).enableEdgesRendering ?? (cU.enableEdgesRendering = (0, YU.k)("LinesMesh", "enableEdgesRendering")), (yU = IU.prototype).enableEdgesRendering ?? (yU.enableEdgesRendering = (0, YU.k)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);