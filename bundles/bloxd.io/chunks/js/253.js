export const id = 253;
export const ids = [253];
export const modules = {
  40975: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    class tU {}
    tU.AUTOSAMPLERSUFFIX = "Sampler", tU.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", tU.ALPHA_DISABLE = 0, tU.ALPHA_ADD = 1, tU.ALPHA_COMBINE = 2, tU.ALPHA_SUBTRACT = 3, tU.ALPHA_MULTIPLY = 4, tU.ALPHA_MAXIMIZED = 5, tU.ALPHA_ONEONE = 6, tU.ALPHA_PREMULTIPLIED = 7, tU.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, tU.ALPHA_INTERPOLATE = 9, tU.ALPHA_SCREENMODE = 10, tU.ALPHA_ONEONE_ONEONE = 11, tU.ALPHA_ALPHATOCOLOR = 12, tU.ALPHA_REVERSEONEMINUS = 13, tU.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, tU.ALPHA_ONEONE_ONEZERO = 15, tU.ALPHA_EXCLUSION = 16, tU.ALPHA_LAYER_ACCUMULATE = 17, tU.ALPHA_MIN = 18, tU.ALPHA_MAX = 19, tU.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, tU.ALPHA_REPLACE_COLOR = 21, tU.ALPHA_EQUATION_ADD = 0, tU.ALPHA_EQUATION_SUBSTRACT = 1, tU.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, tU.ALPHA_EQUATION_MAX = 3, tU.ALPHA_EQUATION_MIN = 4, tU.ALPHA_EQUATION_DARKEN = 5, tU.DELAYLOADSTATE_NONE = 0, tU.DELAYLOADSTATE_LOADED = 1, tU.DELAYLOADSTATE_LOADING = 2, tU.DELAYLOADSTATE_NOTLOADED = 4, tU.NEVER = 512, tU.ALWAYS = 519, tU.LESS = 513, tU.EQUAL = 514, tU.LEQUAL = 515, tU.GREATER = 516, tU.GEQUAL = 518, tU.NOTEQUAL = 517, tU.KEEP = 7680, tU.ZERO = 0, tU.REPLACE = 7681, tU.INCR = 7682, tU.DECR = 7683, tU.INVERT = 5386, tU.INCR_WRAP = 34055, tU.DECR_WRAP = 34056, tU.TEXTURE_CLAMP_ADDRESSMODE = 0, tU.TEXTURE_WRAP_ADDRESSMODE = 1, tU.TEXTURE_MIRROR_ADDRESSMODE = 2, tU.TEXTURE_REPETITION_NONE = 0, tU.TEXTURE_REPETITION_NOISE_BLEND = 1, tU.TEXTURE_REPETITION_HEX_TILING = 2, tU.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, tU.TEXTURE_REPETITION_VORONOI_BOMBING = 4, tU.TEXTURE_CREATIONFLAG_STORAGE = 1, tU.TEXTUREFORMAT_ALPHA = 0, tU.TEXTUREFORMAT_LUMINANCE = 1, tU.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, tU.TEXTUREFORMAT_RGB = 4, tU.TEXTUREFORMAT_RGBA = 5, tU.TEXTUREFORMAT_RED = 6, tU.TEXTUREFORMAT_R = 6, tU.TEXTUREFORMAT_R16_UNORM = 33322, tU.TEXTUREFORMAT_RG16_UNORM = 33324, tU.TEXTUREFORMAT_RGB16_UNORM = 32852, tU.TEXTUREFORMAT_RGBA16_UNORM = 32859, tU.TEXTUREFORMAT_R16_SNORM = 36760, tU.TEXTUREFORMAT_RG16_SNORM = 36761, tU.TEXTUREFORMAT_RGB16_SNORM = 36762, tU.TEXTUREFORMAT_RGBA16_SNORM = 36763, tU.TEXTUREFORMAT_RG = 7, tU.TEXTUREFORMAT_RED_INTEGER = 8, tU.TEXTUREFORMAT_R_INTEGER = 8, tU.TEXTUREFORMAT_RG_INTEGER = 9, tU.TEXTUREFORMAT_RGB_INTEGER = 10, tU.TEXTUREFORMAT_RGBA_INTEGER = 11, tU.TEXTUREFORMAT_BGRA = 12, tU.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, tU.TEXTUREFORMAT_DEPTH32_FLOAT = 14, tU.TEXTUREFORMAT_DEPTH16 = 15, tU.TEXTUREFORMAT_DEPTH24 = 16, tU.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, tU.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, tU.TEXTUREFORMAT_STENCIL8 = 19, tU.TEXTUREFORMAT_UNDEFINED = 4294967295, tU.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, tU.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, tU.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, tU.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, tU.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, tU.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, tU.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, tU.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, tU.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, tU.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, tU.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, tU.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, tU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, tU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, tU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, tU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, tU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, tU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, tU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, tU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, tU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, tU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, tU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, tU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, tU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, tU.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, tU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, tU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, tU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, tU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, tU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, tU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, tU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, tU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, tU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, tU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, tU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, tU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, tU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, tU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, tU.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, tU.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, tU.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, tU.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, tU.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, tU.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, tU.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, tU.TEXTURETYPE_UNSIGNED_BYTE = 0, tU.TEXTURETYPE_UNSIGNED_INT = 0, tU.TEXTURETYPE_FLOAT = 1, tU.TEXTURETYPE_HALF_FLOAT = 2, tU.TEXTURETYPE_BYTE = 3, tU.TEXTURETYPE_SHORT = 4, tU.TEXTURETYPE_UNSIGNED_SHORT = 5, tU.TEXTURETYPE_INT = 6, tU.TEXTURETYPE_UNSIGNED_INTEGER = 7, tU.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, tU.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, tU.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, tU.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, tU.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, tU.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, tU.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, tU.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, tU.TEXTURETYPE_UNDEFINED = 16, tU.TEXTURE_2D = 3553, tU.TEXTURE_2D_ARRAY = 35866, tU.TEXTURE_CUBE_MAP = 34067, tU.TEXTURE_CUBE_MAP_ARRAY = 3735928559, tU.TEXTURE_3D = 32879, tU.TEXTURE_NEAREST_SAMPLINGMODE = 1, tU.TEXTURE_NEAREST_NEAREST = 1, tU.TEXTURE_BILINEAR_SAMPLINGMODE = 2, tU.TEXTURE_LINEAR_LINEAR = 2, tU.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, tU.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, tU.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, tU.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, tU.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, tU.TEXTURE_NEAREST_LINEAR = 7, tU.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, tU.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, tU.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, tU.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, tU.TEXTURE_LINEAR_NEAREST = 12, tU.TEXTURE_EXPLICIT_MODE = 0, tU.TEXTURE_SPHERICAL_MODE = 1, tU.TEXTURE_PLANAR_MODE = 2, tU.TEXTURE_CUBIC_MODE = 3, tU.TEXTURE_PROJECTION_MODE = 4, tU.TEXTURE_SKYBOX_MODE = 5, tU.TEXTURE_INVCUBIC_MODE = 6, tU.TEXTURE_EQUIRECTANGULAR_MODE = 7, tU.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, tU.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, tU.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, tU.TEXTURE_FILTERING_QUALITY_HIGH = 64, tU.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, tU.TEXTURE_FILTERING_QUALITY_LOW = 8, tU.SCALEMODE_FLOOR = 1, tU.SCALEMODE_NEAREST = 2, tU.SCALEMODE_CEILING = 3, tU.MATERIAL_TextureDirtyFlag = 1, tU.MATERIAL_LightDirtyFlag = 2, tU.MATERIAL_FresnelDirtyFlag = 4, tU.MATERIAL_AttributesDirtyFlag = 8, tU.MATERIAL_MiscDirtyFlag = 16, tU.MATERIAL_PrePassDirtyFlag = 32, tU.MATERIAL_ImageProcessingDirtyFlag = 64, tU.MATERIAL_AllDirtyFlag = 127, tU.MATERIAL_TriangleFillMode = 0, tU.MATERIAL_WireFrameFillMode = 1, tU.MATERIAL_PointFillMode = 2, tU.MATERIAL_PointListDrawMode = 3, tU.MATERIAL_LineListDrawMode = 4, tU.MATERIAL_LineLoopDrawMode = 5, tU.MATERIAL_LineStripDrawMode = 6, tU.MATERIAL_TriangleStripDrawMode = 7, tU.MATERIAL_TriangleFanDrawMode = 8, tU.MATERIAL_ClockWiseSideOrientation = 0, tU.MATERIAL_CounterClockWiseSideOrientation = 1, tU.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, tU.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, tU.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, tU.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, tU.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, tU.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, tU.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, tU.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, tU.ACTION_NothingTrigger = 0, tU.ACTION_OnPickTrigger = 1, tU.ACTION_OnLeftPickTrigger = 2, tU.ACTION_OnRightPickTrigger = 3, tU.ACTION_OnCenterPickTrigger = 4, tU.ACTION_OnPickDownTrigger = 5, tU.ACTION_OnDoublePickTrigger = 6, tU.ACTION_OnPickUpTrigger = 7, tU.ACTION_OnPickOutTrigger = 16, tU.ACTION_OnLongPressTrigger = 8, tU.ACTION_OnPointerOverTrigger = 9, tU.ACTION_OnPointerOutTrigger = 10, tU.ACTION_OnEveryFrameTrigger = 11, tU.ACTION_OnIntersectionEnterTrigger = 12, tU.ACTION_OnIntersectionExitTrigger = 13, tU.ACTION_OnKeyDownTrigger = 14, tU.ACTION_OnKeyUpTrigger = 15, tU.PARTICLES_BILLBOARDMODE_Y = 2, tU.PARTICLES_BILLBOARDMODE_ALL = 7, tU.PARTICLES_BILLBOARDMODE_STRETCHED = 8, tU.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, tU.MESHES_CULLINGSTRATEGY_STANDARD = 0, tU.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, tU.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, tU.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, tU.SCENELOADER_NO_LOGGING = 0, tU.SCENELOADER_MINIMAL_LOGGING = 1, tU.SCENELOADER_SUMMARY_LOGGING = 2, tU.SCENELOADER_DETAILED_LOGGING = 3, tU.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, tU.PREPASS_POSITION_TEXTURE_TYPE = 1, tU.PREPASS_VELOCITY_TEXTURE_TYPE = 2, tU.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, tU.PREPASS_COLOR_TEXTURE_TYPE = 4, tU.PREPASS_DEPTH_TEXTURE_TYPE = 5, tU.PREPASS_NORMAL_TEXTURE_TYPE = 6, tU.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, tU.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, tU.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, tU.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, tU.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, tU.PREPASS_ALBEDO_TEXTURE_TYPE = 12, tU.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, tU.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, tU.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, tU.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, tU.BUFFER_CREATIONFLAG_READ = 1, tU.BUFFER_CREATIONFLAG_WRITE = 2, tU.BUFFER_CREATIONFLAG_READWRITE = 3, tU.BUFFER_CREATIONFLAG_UNIFORM = 4, tU.BUFFER_CREATIONFLAG_VERTEX = 8, tU.BUFFER_CREATIONFLAG_INDEX = 16, tU.BUFFER_CREATIONFLAG_STORAGE = 32, tU.BUFFER_CREATIONFLAG_INDIRECT = 64, tU.RENDERPASS_MAIN = 0, tU.INPUT_ALT_KEY = 18, tU.INPUT_CTRL_KEY = 17, tU.INPUT_META_KEY1 = 91, tU.INPUT_META_KEY2 = 92, tU.INPUT_META_KEY3 = 93, tU.INPUT_SHIFT_KEY = 16, tU.SNAPSHOTRENDERING_STANDARD = 0, tU.SNAPSHOTRENDERING_FAST = 1, tU.PERSPECTIVE_CAMERA = 0, tU.ORTHOGRAPHIC_CAMERA = 1, tU.FOVMODE_VERTICAL_FIXED = 0, tU.FOVMODE_HORIZONTAL_FIXED = 1, tU.RIG_MODE_NONE = 0, tU.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, tU.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, tU.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, tU.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, tU.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, tU.RIG_MODE_VR = 20, tU.RIG_MODE_CUSTOM = 22, tU.MAX_SUPPORTED_UV_SETS = 6, tU.GL_ALPHA_EQUATION_ADD = 32774, tU.GL_ALPHA_EQUATION_MIN = 32775, tU.GL_ALPHA_EQUATION_MAX = 32776, tU.GL_ALPHA_EQUATION_SUBTRACT = 32778, tU.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, tU.GL_ALPHA_FUNCTION_SRC = 768, tU.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, tU.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, tU.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, tU.GL_ALPHA_FUNCTION_DST_ALPHA = 772, tU.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, tU.GL_ALPHA_FUNCTION_DST_COLOR = 774, tU.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, tU.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, tU.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, tU.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, tU.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, tU.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, tU.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, tU.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, tU.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, tU.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, tU.SnippetUrl = "https://snippet.babylonjs.com", tU.FOGMODE_NONE = 0, tU.FOGMODE_EXP = 1, tU.FOGMODE_EXP2 = 2, tU.FOGMODE_LINEAR = 3, tU.BYTE = 5120, tU.UNSIGNED_BYTE = 5121, tU.SHORT = 5122, tU.UNSIGNED_SHORT = 5123, tU.INT = 5124, tU.UNSIGNED_INT = 5125, tU.FLOAT = 5126, tU.HALF_FLOAT = 5131, tU.PositionKind = "position", tU.NormalKind = "normal", tU.TangentKind = "tangent", tU.UVKind = "uv", tU.UV2Kind = "uv2", tU.UV3Kind = "uv3", tU.UV4Kind = "uv4", tU.UV5Kind = "uv5", tU.UV6Kind = "uv6", tU.ColorKind = "color", tU.ColorInstanceKind = "instanceColor", tU.MatricesIndicesKind = "matricesIndices", tU.MatricesWeightsKind = "matricesWeights", tU.MatricesIndicesExtraKind = "matricesIndicesExtra", tU.MatricesWeightsExtraKind = "matricesWeightsExtra", tU.ANIMATIONTYPE_FLOAT = 0, tU.ANIMATIONTYPE_VECTOR3 = 1, tU.ANIMATIONTYPE_QUATERNION = 2, tU.ANIMATIONTYPE_MATRIX = 3, tU.ANIMATIONTYPE_COLOR3 = 4, tU.ANIMATIONTYPE_COLOR4 = 7, tU.ANIMATIONTYPE_VECTOR2 = 5, tU.ANIMATIONTYPE_SIZE = 6, tU.ShadowMinZ = 0, tU.ShadowMaxZ = 1e4, tU.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, tU.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  40953: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => qU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(36600),
      PU = gU(39645),
      TU = gU(39613);
    let qU = (() => {
      var UU;
      let RU, gU, qU, KU, cU = PU.e,
        GU = [];
      return UU = class extends cU {
        constructor() {
          super(...arguments), this._position = (0, tU.j)(this, GU), this._needProjectionMatrixCompute = !0, this._viewMatrix = EU.c.Identity(), this._projectionMatrix = EU.c.Identity()
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
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = EU.n.Zero()), EU.n.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = EU.n.Zero()), EU.n.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
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
          return this.direction = EU.n.Normalize(UU.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const UU = EU.n.Cross(this.direction, TU.c.Y),
            RU = EU.n.Cross(UU, this.direction);
          return EU.n.RotationFromAxis(UU, RU, this.direction)
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
          super._initCache(), this._cache.position = EU.n.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(UU) {
          return !UU && this.isSynchronized() ? (this._currentRenderId = this.aZ().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.PgU(this.position), this._worldMatrix || (this._worldMatrix = EU.c.Identity()), EU.c.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(UU) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : UU?.minZ || 0
        }
        getDepthMaxZ(UU) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : UU?.maxZ || 1e4
        }
        setShadowProjectionMatrix(UU, RU, gU) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(RU, gU, UU) : this._setDefaultShadowProjectionMatrix(UU, RU, gU), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(UU) {
          const RU = EU.h.xC[0];
          let gU = this.position;
          this.computeTransformedInformation() && (gU = this.transformedPosition), EU.n.NormalizeToRef(this.getShadowDirection(UU), RU), 1 === Math.abs(EU.n.Dot(RU, EU.n.Up())) && (RU.z = 1e-13);
          const tU = EU.h.xC[1];
          return gU.addToRef(RU, tU), EU.c.LookAtLHToRef(gU, tU, EU.n.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(UU, RU) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, UU ?? this._viewMatrix, RU ?? []), this._projectionMatrix
        }
      }, (() => {
        const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(cU[Symbol.metadata] ?? null) : void 0;
        RU = [(0, pU.I)()], gU = [(0, pU.I)()], qU = [(0, pU.K)()], KU = [(0, pU.K)()], (0, tU.i)(UU, null, RU, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: UU => "position" in UU,
            get: UU => UU.position
          },
          metadata: EU
        }, null, GU), (0, tU.i)(UU, null, gU, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: UU => "direction" in UU,
            get: UU => UU.direction
          },
          metadata: EU
        }, null, GU), (0, tU.i)(UU, null, qU, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: UU => "shadowMinZ" in UU,
            get: UU => UU.shadowMinZ
          },
          metadata: EU
        }, null, GU), (0, tU.i)(UU, null, KU, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: UU => "shadowMaxZ" in UU,
            get: UU => UU.shadowMaxZ
          },
          metadata: EU
        }, null, GU), EU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EU
        })
      })(), UU
    })()
  },
  40966: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU
    });
    var tU = gU(39855);
    class pU extends tU.e {
      constructor(UU, RU, gU, pU, EU) {
        let PU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          TU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          qU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          KU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          cU = arguments.length > 9 ? arguments[9] : void 0,
          GU = arguments.length > 10 ? arguments[10] : void 0,
          jU = arguments.length > 11 ? arguments[11] : void 0,
          uU = arguments.length > 12 ? arguments[12] : void 0;
        super(null, EU, !PU, TU, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, cU), this.format = pU, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== KU || (qU = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== KU || (qU = 1), this._texture = this._engine.createRawTexture(UU, RU, gU, pU, PU, TU, qU, null, KU, cU ?? 0, GU ?? !1, uU), this.wrapU = tU.e.CLAMP_ADDRESSMODE, this.wrapV = tU.e.CLAMP_ADDRESSMODE, this._waitingForData = !!jU && !UU)
      }
      update(UU) {
        this.updateMipLevel(UU, 0)
      }
      updateMipLevel(UU, RU) {
        this._getEngine().updateRawTexture(this._texture, UU, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, RU), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const UU = new pU(null, this.getSize().width, this.getSize().height, this.format, this.aZ(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return UU._texture = this._texture, this._texture.incrementReferences(), UU
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(UU, RU, gU, tU) {
        return new pU(UU, RU, gU, 1, tU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(UU, RU, gU, tU) {
        return new pU(UU, RU, gU, 2, tU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(UU, RU, gU, tU) {
        return new pU(UU, RU, gU, 0, tU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(UU, RU, gU, tU) {
        return new pU(UU, RU, gU, 4, tU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(UU, RU, gU, tU) {
        return new pU(UU, RU, gU, 5, tU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(UU, RU, gU, tU) {
        return new pU(UU, RU, gU, 5, tU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(UU, RU, gU, EU) {
        let PU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          TU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          qU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : tU.e.TRILINEAR_SAMPLINGMODE;
        return new pU(UU, RU, gU, 6, EU, PU, TU, qU, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(UU, RU, gU, EU) {
        let PU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          TU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          qU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : tU.e.TRILINEAR_SAMPLINGMODE;
        return new pU(UU, RU, gU, 6, EU, PU, TU, qU, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  41007: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU.d
    });
    var tU = gU(39817);
    (0, tU.h)()
  },
  40960: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU.e
    });
    var tU = gU(39835);
    (0, tU.i)()
  },
  39835: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => jU,
      i: () => hU
    });
    var tU, pU, EU = gU(36761),
      PU = gU(39517),
      TU = gU(39782),
      qU = gU(39844),
      KU = gU(39676),
      cU = gU(39847),
      GU = gU(39256);
    class jU extends TU.c {
      _isShaderMaterial(UU) {
        return !!UU && "ShaderMaterial" === UU.getClassName()
      }
      constructor(UU) {
        let RU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          tU = arguments.length > 5 ? arguments[5] : void 0,
          pU = arguments.length > 6 ? arguments[6] : void 0,
          TU = arguments.length > 7 ? arguments[7] : void 0;
        super(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, RU, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = tU, this.useVertexAlpha = pU, this.color = new EU.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, RU && (this.color = RU.color.clone(), this.alpha = RU.alpha, this.useVertexColor = RU.useVertexColor, this.useVertexAlpha = RU.useVertexAlpha), this.intersectionThreshold = .1;
        const qU = {
          attributes: [PU.l.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? qU.defines.push("#define VERTEXALPHA") : qU.needAlphaBlending = !1, this.useVertexColor ? (qU.defines.push("#define VERTEXCOLOR"), qU.attributes.push(PU.l.ColorKind)) : (qU.uniforms.push("color"), this._color4 = new EU.g), TU) this.material = TU;
        else {
          this.aZ().WC().isWebGPU && !jU.ForceGLSL && (this._shaderLanguage = 1), qU.shaderLanguage = this._shaderLanguage, qU.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([gU.e(334).then((() => gU(41887))), gU.e(340).then((() => gU(41895)))]) : await Promise.all([gU.e(316).then((() => gU(41903))), gU.e(322).then((() => gU(41912)))])
          };
          const UU = new cU.l("colorShader", this.aZ(), "color", qU, !1);
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
        const RU = this.material;
        if (RU === UU) return;
        const gU = RU && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(UU), gU && RU?.dispose()
      }
      _setInternalMaterial(UU) {
        this._setMaterial(UU), this.material && (this.material.fillMode = KU.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(UU) {}
      _bind(UU, RU) {
        if (!this._geometry) return this;
        const gU = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(RU, gU) : this._geometry._bind(RU, gU, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: UU,
            g: RU,
            b: gU
          } = this.color;
          this._color4.set(UU, RU, gU, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(UU, RU, gU) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const tU = this.aZ().WC();
        return this._unIndexed ? tU.drawArraysType(KU.c.LineListDrawMode, UU.verticesStart, UU.verticesCount, gU) : tU.drawElementsType(KU.c.LineListDrawMode, UU.indexStart, UU.indexCount, gU), this
      }
      dispose(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || RU) && this.material?.dispose(!1, !1, !0), super.dispose(UU)
      }
      clone(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        if (RU && void 0 === RU._addToSceneRootNodes) {
          const gU = RU;
          return gU.source = this, new jU(UU, this.aZ(), gU.parent, gU.source, gU.doNotCloneChildren)
        }
        return new jU(UU, this.aZ(), RU, this, gU)
      }
      createInstance(UU) {
        const RU = new uU(UU, this);
        if (this.kY) {
          RU.kY = {};
          for (const UU in this.kY) RU.kY[UU] = this.kY[UU]
        }
        return RU
      }
      serialize(UU) {
        super.serialize(UU), UU.color = this.color.vgU(), UU.alpha = this.alpha
      }
      static Parse(UU, RU) {
        const gU = new jU(UU.name, RU);
        return gU.color = EU.e.FromArray(UU.color), gU.alpha = UU.alpha, gU
      }
    }
    jU.ForceGLSL = !1;
    class uU extends qU.c {
      constructor(UU, RU) {
        super(UU, RU), this.intersectionThreshold = RU.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let CU = !1;

    function hU() {
      CU || (CU = !0, TU.c._LinesMeshParser = (UU, RU) => jU.Parse(UU, RU))
    }(tU = jU.prototype).enableEdgesRendering ?? (tU.enableEdgesRendering = (0, GU.m)("LinesMesh", "enableEdgesRendering")), (pU = uU.prototype).enableEdgesRendering ?? (pU.enableEdgesRendering = (0, GU.m)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);