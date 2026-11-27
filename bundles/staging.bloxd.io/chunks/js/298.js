export const id = 298;
export const ids = [298];
export const modules = {
  53769: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    class mW {}
    mW.AUTOSAMPLERSUFFIX = "Sampler", mW.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", mW.ALPHA_DISABLE = 0, mW.ALPHA_ADD = 1, mW.ALPHA_COMBINE = 2, mW.ALPHA_SUBTRACT = 3, mW.ALPHA_MULTIPLY = 4, mW.ALPHA_MAXIMIZED = 5, mW.ALPHA_ONEONE = 6, mW.ALPHA_PREMULTIPLIED = 7, mW.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, mW.ALPHA_INTERPOLATE = 9, mW.ALPHA_SCREENMODE = 10, mW.ALPHA_ONEONE_ONEONE = 11, mW.ALPHA_ALPHATOCOLOR = 12, mW.ALPHA_REVERSEONEMINUS = 13, mW.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, mW.ALPHA_ONEONE_ONEZERO = 15, mW.ALPHA_EXCLUSION = 16, mW.ALPHA_LAYER_ACCUMULATE = 17, mW.ALPHA_MIN = 18, mW.ALPHA_MAX = 19, mW.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, mW.ALPHA_REPLACE_COLOR = 21, mW.ALPHA_EQUATION_ADD = 0, mW.ALPHA_EQUATION_SUBSTRACT = 1, mW.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, mW.ALPHA_EQUATION_MAX = 3, mW.ALPHA_EQUATION_MIN = 4, mW.ALPHA_EQUATION_DARKEN = 5, mW.DELAYLOADSTATE_NONE = 0, mW.DELAYLOADSTATE_LOADED = 1, mW.DELAYLOADSTATE_LOADING = 2, mW.DELAYLOADSTATE_NOTLOADED = 4, mW.NEVER = 512, mW.ALWAYS = 519, mW.LESS = 513, mW.EQUAL = 514, mW.LEQUAL = 515, mW.GREATER = 516, mW.GEQUAL = 518, mW.NOTEQUAL = 517, mW.KEEP = 7680, mW.ZERO = 0, mW.REPLACE = 7681, mW.INCR = 7682, mW.DECR = 7683, mW.INVERT = 5386, mW.INCR_WRAP = 34055, mW.DECR_WRAP = 34056, mW.TEXTURE_CLAMP_ADDRESSMODE = 0, mW.TEXTURE_WRAP_ADDRESSMODE = 1, mW.TEXTURE_MIRROR_ADDRESSMODE = 2, mW.TEXTURE_REPETITION_NONE = 0, mW.TEXTURE_REPETITION_NOISE_BLEND = 1, mW.TEXTURE_REPETITION_HEX_TILING = 2, mW.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, mW.TEXTURE_REPETITION_VORONOI_BOMBING = 4, mW.TEXTURE_CREATIONFLAG_STORAGE = 1, mW.TEXTUREFORMAT_ALPHA = 0, mW.TEXTUREFORMAT_LUMINANCE = 1, mW.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, mW.TEXTUREFORMAT_RGB = 4, mW.TEXTUREFORMAT_RGBA = 5, mW.TEXTUREFORMAT_RED = 6, mW.TEXTUREFORMAT_R = 6, mW.TEXTUREFORMAT_R16_UNORM = 33322, mW.TEXTUREFORMAT_RG16_UNORM = 33324, mW.TEXTUREFORMAT_RGB16_UNORM = 32852, mW.TEXTUREFORMAT_RGBA16_UNORM = 32859, mW.TEXTUREFORMAT_R16_SNORM = 36760, mW.TEXTUREFORMAT_RG16_SNORM = 36761, mW.TEXTUREFORMAT_RGB16_SNORM = 36762, mW.TEXTUREFORMAT_RGBA16_SNORM = 36763, mW.TEXTUREFORMAT_RG = 7, mW.TEXTUREFORMAT_RED_INTEGER = 8, mW.TEXTUREFORMAT_R_INTEGER = 8, mW.TEXTUREFORMAT_RG_INTEGER = 9, mW.TEXTUREFORMAT_RGB_INTEGER = 10, mW.TEXTUREFORMAT_RGBA_INTEGER = 11, mW.TEXTUREFORMAT_BGRA = 12, mW.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, mW.TEXTUREFORMAT_DEPTH32_FLOAT = 14, mW.TEXTUREFORMAT_DEPTH16 = 15, mW.TEXTUREFORMAT_DEPTH24 = 16, mW.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, mW.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, mW.TEXTUREFORMAT_STENCIL8 = 19, mW.TEXTUREFORMAT_UNDEFINED = 4294967295, mW.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, mW.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, mW.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, mW.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, mW.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, mW.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, mW.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, mW.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, mW.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, mW.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, mW.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, mW.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, mW.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, mW.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, mW.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, mW.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, mW.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, mW.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, mW.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, mW.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, mW.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, mW.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, mW.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, mW.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, mW.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, mW.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, mW.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, mW.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, mW.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, mW.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, mW.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, mW.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, mW.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, mW.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, mW.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, mW.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, mW.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, mW.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, mW.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, mW.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, mW.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, mW.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, mW.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, mW.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, mW.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, mW.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, mW.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, mW.TEXTURETYPE_UNSIGNED_BYTE = 0, mW.TEXTURETYPE_UNSIGNED_INT = 0, mW.TEXTURETYPE_FLOAT = 1, mW.TEXTURETYPE_HALF_FLOAT = 2, mW.TEXTURETYPE_BYTE = 3, mW.TEXTURETYPE_SHORT = 4, mW.TEXTURETYPE_UNSIGNED_SHORT = 5, mW.TEXTURETYPE_INT = 6, mW.TEXTURETYPE_UNSIGNED_INTEGER = 7, mW.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, mW.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, mW.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, mW.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, mW.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, mW.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, mW.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, mW.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, mW.TEXTURETYPE_UNDEFINED = 16, mW.TEXTURE_2D = 3553, mW.TEXTURE_2D_ARRAY = 35866, mW.TEXTURE_CUBE_MAP = 34067, mW.TEXTURE_CUBE_MAP_ARRAY = 3735928559, mW.TEXTURE_3D = 32879, mW.TEXTURE_NEAREST_SAMPLINGMODE = 1, mW.TEXTURE_NEAREST_NEAREST = 1, mW.TEXTURE_BILINEAR_SAMPLINGMODE = 2, mW.TEXTURE_LINEAR_LINEAR = 2, mW.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, mW.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, mW.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, mW.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, mW.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, mW.TEXTURE_NEAREST_LINEAR = 7, mW.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, mW.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, mW.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, mW.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, mW.TEXTURE_LINEAR_NEAREST = 12, mW.TEXTURE_EXPLICIT_MODE = 0, mW.TEXTURE_SPHERICAL_MODE = 1, mW.TEXTURE_PLANAR_MODE = 2, mW.TEXTURE_CUBIC_MODE = 3, mW.TEXTURE_PROJECTION_MODE = 4, mW.TEXTURE_SKYBOX_MODE = 5, mW.TEXTURE_INVCUBIC_MODE = 6, mW.TEXTURE_EQUIRECTANGULAR_MODE = 7, mW.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, mW.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, mW.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, mW.TEXTURE_FILTERING_QUALITY_HIGH = 64, mW.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, mW.TEXTURE_FILTERING_QUALITY_LOW = 8, mW.SCALEMODE_FLOOR = 1, mW.SCALEMODE_NEAREST = 2, mW.SCALEMODE_CEILING = 3, mW.MATERIAL_TextureDirtyFlag = 1, mW.MATERIAL_LightDirtyFlag = 2, mW.MATERIAL_FresnelDirtyFlag = 4, mW.MATERIAL_AttributesDirtyFlag = 8, mW.MATERIAL_MiscDirtyFlag = 16, mW.MATERIAL_PrePassDirtyFlag = 32, mW.MATERIAL_ImageProcessingDirtyFlag = 64, mW.MATERIAL_AllDirtyFlag = 127, mW.MATERIAL_TriangleFillMode = 0, mW.MATERIAL_WireFrameFillMode = 1, mW.MATERIAL_PointFillMode = 2, mW.MATERIAL_PointListDrawMode = 3, mW.MATERIAL_LineListDrawMode = 4, mW.MATERIAL_LineLoopDrawMode = 5, mW.MATERIAL_LineStripDrawMode = 6, mW.MATERIAL_TriangleStripDrawMode = 7, mW.MATERIAL_TriangleFanDrawMode = 8, mW.MATERIAL_ClockWiseSideOrientation = 0, mW.MATERIAL_CounterClockWiseSideOrientation = 1, mW.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, mW.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, mW.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, mW.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, mW.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, mW.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, mW.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, mW.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, mW.ACTION_NothingTrigger = 0, mW.ACTION_OnPickTrigger = 1, mW.ACTION_OnLeftPickTrigger = 2, mW.ACTION_OnRightPickTrigger = 3, mW.ACTION_OnCenterPickTrigger = 4, mW.ACTION_OnPickDownTrigger = 5, mW.ACTION_OnDoublePickTrigger = 6, mW.ACTION_OnPickUpTrigger = 7, mW.ACTION_OnPickOutTrigger = 16, mW.ACTION_OnLongPressTrigger = 8, mW.ACTION_OnPointerOverTrigger = 9, mW.ACTION_OnPointerOutTrigger = 10, mW.ACTION_OnEveryFrameTrigger = 11, mW.ACTION_OnIntersectionEnterTrigger = 12, mW.ACTION_OnIntersectionExitTrigger = 13, mW.ACTION_OnKeyDownTrigger = 14, mW.ACTION_OnKeyUpTrigger = 15, mW.PARTICLES_BILLBOARDMODE_Y = 2, mW.PARTICLES_BILLBOARDMODE_ALL = 7, mW.PARTICLES_BILLBOARDMODE_STRETCHED = 8, mW.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, mW.MESHES_CULLINGSTRATEGY_STANDARD = 0, mW.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, mW.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, mW.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, mW.SCENELOADER_NO_LOGGING = 0, mW.SCENELOADER_MINIMAL_LOGGING = 1, mW.SCENELOADER_SUMMARY_LOGGING = 2, mW.SCENELOADER_DETAILED_LOGGING = 3, mW.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, mW.PREPASS_POSITION_TEXTURE_TYPE = 1, mW.PREPASS_VELOCITY_TEXTURE_TYPE = 2, mW.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, mW.PREPASS_COLOR_TEXTURE_TYPE = 4, mW.PREPASS_DEPTH_TEXTURE_TYPE = 5, mW.PREPASS_NORMAL_TEXTURE_TYPE = 6, mW.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, mW.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, mW.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, mW.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, mW.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, mW.PREPASS_ALBEDO_TEXTURE_TYPE = 12, mW.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, mW.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, mW.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, mW.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, mW.BUFFER_CREATIONFLAG_READ = 1, mW.BUFFER_CREATIONFLAG_WRITE = 2, mW.BUFFER_CREATIONFLAG_READWRITE = 3, mW.BUFFER_CREATIONFLAG_UNIFORM = 4, mW.BUFFER_CREATIONFLAG_VERTEX = 8, mW.BUFFER_CREATIONFLAG_INDEX = 16, mW.BUFFER_CREATIONFLAG_STORAGE = 32, mW.BUFFER_CREATIONFLAG_INDIRECT = 64, mW.RENDERPASS_MAIN = 0, mW.INPUT_ALT_KEY = 18, mW.INPUT_CTRL_KEY = 17, mW.INPUT_META_KEY1 = 91, mW.INPUT_META_KEY2 = 92, mW.INPUT_META_KEY3 = 93, mW.INPUT_SHIFT_KEY = 16, mW.SNAPSHOTRENDERING_STANDARD = 0, mW.SNAPSHOTRENDERING_FAST = 1, mW.PERSPECTIVE_CAMERA = 0, mW.ORTHOGRAPHIC_CAMERA = 1, mW.FOVMODE_VERTICAL_FIXED = 0, mW.FOVMODE_HORIZONTAL_FIXED = 1, mW.RIG_MODE_NONE = 0, mW.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, mW.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, mW.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, mW.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, mW.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, mW.RIG_MODE_VR = 20, mW.RIG_MODE_CUSTOM = 22, mW.MAX_SUPPORTED_UV_SETS = 6, mW.GL_ALPHA_EQUATION_ADD = 32774, mW.GL_ALPHA_EQUATION_MIN = 32775, mW.GL_ALPHA_EQUATION_MAX = 32776, mW.GL_ALPHA_EQUATION_SUBTRACT = 32778, mW.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, mW.GL_ALPHA_FUNCTION_SRC = 768, mW.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, mW.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, mW.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, mW.GL_ALPHA_FUNCTION_DST_ALPHA = 772, mW.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, mW.GL_ALPHA_FUNCTION_DST_COLOR = 774, mW.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, mW.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, mW.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, mW.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, mW.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, mW.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, mW.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, mW.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, mW.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, mW.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, mW.SnippetUrl = "https://snippet.babylonjs.com", mW.FOGMODE_NONE = 0, mW.FOGMODE_EXP = 1, mW.FOGMODE_EXP2 = 2, mW.FOGMODE_LINEAR = 3, mW.BYTE = 5120, mW.UNSIGNED_BYTE = 5121, mW.SHORT = 5122, mW.UNSIGNED_SHORT = 5123, mW.INT = 5124, mW.UNSIGNED_INT = 5125, mW.FLOAT = 5126, mW.HALF_FLOAT = 5131, mW.PositionKind = "position", mW.NormalKind = "normal", mW.TangentKind = "tangent", mW.UVKind = "uv", mW.UV2Kind = "uv2", mW.UV3Kind = "uv3", mW.UV4Kind = "uv4", mW.UV5Kind = "uv5", mW.UV6Kind = "uv6", mW.ColorKind = "color", mW.ColorInstanceKind = "instanceColor", mW.MatricesIndicesKind = "matricesIndices", mW.MatricesWeightsKind = "matricesWeights", mW.MatricesIndicesExtraKind = "matricesIndicesExtra", mW.MatricesWeightsExtraKind = "matricesWeightsExtra", mW.ANIMATIONTYPE_FLOAT = 0, mW.ANIMATIONTYPE_VECTOR3 = 1, mW.ANIMATIONTYPE_QUATERNION = 2, mW.ANIMATIONTYPE_MATRIX = 3, mW.ANIMATIONTYPE_COLOR3 = 4, mW.ANIMATIONTYPE_COLOR4 = 7, mW.ANIMATIONTYPE_VECTOR2 = 5, mW.ANIMATIONTYPE_SIZE = 6, mW.ShadowMinZ = 0, mW.ShadowMaxZ = 1e4, mW.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, mW.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  53745: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => cW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(38241),
      PW = OW(41773),
      LW = OW(41739);
    let cW = (() => {
      var WW;
      let iW, OW, cW, wW, tW = PW.b,
        ZW = [];
      return WW = class extends tW {
        constructor() {
          super(...arguments), this._position = (0, mW.g)(this, ZW), this._needProjectionMatrixCompute = !0, this._viewMatrix = NW.d.Identity(), this._projectionMatrix = NW.d.Identity()
        }
        _setPosition(WW) {
          this._position = WW
        }
        get position() {
          return this._position
        }
        set position(WW) {
          this._setPosition(WW)
        }
        _setDirection(WW) {
          this._direction = WW
        }
        get direction() {
          return this._direction
        }
        set direction(WW) {
          this._setDirection(WW)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(WW) {
          this._shadowMinZ = WW, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(WW) {
          this._shadowMaxZ = WW, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = NW.q.Zero()), NW.q.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = NW.q.Zero()), NW.q.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(WW) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(WW) {
          return this.direction = NW.q.Normalize(WW.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const WW = NW.q.Cross(this.direction, LW.c.Y),
            iW = NW.q.Cross(WW, this.direction);
          return NW.q.RotationFromAxis(WW, iW, this.direction)
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
          super._initCache(), this._cache.position = NW.q.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(WW) {
          return !WW && this.isSynchronized() ? (this._currentRenderId = this.bD().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.HJ(this.position), this._worldMatrix || (this._worldMatrix = NW.d.Identity()), NW.d.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(WW) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : WW?.minZ || 0
        }
        getDepthMaxZ(WW) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : WW?.maxZ || 1e4
        }
        setShadowProjectionMatrix(WW, iW, OW) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(iW, OW, WW) : this._setDefaultShadowProjectionMatrix(WW, iW, OW), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(WW) {
          const iW = NW.l.fA[0];
          let OW = this.position;
          this.computeTransformedInformation() && (OW = this.transformedPosition), NW.q.NormalizeToRef(this.getShadowDirection(WW), iW), 1 === Math.abs(NW.q.Dot(iW, NW.q.Up())) && (iW.z = 1e-13);
          const mW = NW.l.fA[1];
          return OW.addToRef(iW, mW), NW.d.LookAtLHToRef(OW, mW, NW.q.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(WW, iW) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, WW ?? this._viewMatrix, iW ?? []), this._projectionMatrix
        }
      }, (() => {
        const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(tW[Symbol.metadata] ?? null) : void 0;
        iW = [(0, EW.K)()], OW = [(0, EW.K)()], cW = [(0, EW.M)()], wW = [(0, EW.M)()], (0, mW.e)(WW, null, iW, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: WW => "position" in WW,
            get: WW => WW.position
          },
          metadata: NW
        }, null, ZW), (0, mW.e)(WW, null, OW, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: WW => "direction" in WW,
            get: WW => WW.direction
          },
          metadata: NW
        }, null, ZW), (0, mW.e)(WW, null, cW, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: WW => "shadowMinZ" in WW,
            get: WW => WW.shadowMinZ
          },
          metadata: NW
        }, null, ZW), (0, mW.e)(WW, null, wW, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: WW => "shadowMaxZ" in WW,
            get: WW => WW.shadowMaxZ
          },
          metadata: NW
        }, null, ZW), NW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: NW
        })
      })(), WW
    })()
  },
  53763: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW
    });
    var mW = OW(41992);
    class EW extends mW.h {
      constructor(WW, iW, OW, EW, NW) {
        let PW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          LW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          cW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          wW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          tW = arguments.length > 9 ? arguments[9] : void 0,
          ZW = arguments.length > 10 ? arguments[10] : void 0,
          xW = arguments.length > 11 ? arguments[11] : void 0,
          lW = arguments.length > 12 ? arguments[12] : void 0;
        super(null, NW, !PW, LW, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, tW), this.format = EW, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== wW || (cW = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== wW || (cW = 1), this._texture = this._engine.createRawTexture(WW, iW, OW, EW, PW, LW, cW, null, wW, tW ?? 0, ZW ?? !1, lW), this.wrapU = mW.h.CLAMP_ADDRESSMODE, this.wrapV = mW.h.CLAMP_ADDRESSMODE, this._waitingForData = !!xW && !WW)
      }
      update(WW) {
        this.updateMipLevel(WW, 0)
      }
      updateMipLevel(WW, iW) {
        this._getEngine().updateRawTexture(this._texture, WW, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, iW), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const WW = new EW(null, this.getSize().width, this.getSize().height, this.format, this.bD(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return WW._texture = this._texture, this._texture.incrementReferences(), WW
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(WW, iW, OW, mW) {
        return new EW(WW, iW, OW, 1, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(WW, iW, OW, mW) {
        return new EW(WW, iW, OW, 2, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(WW, iW, OW, mW) {
        return new EW(WW, iW, OW, 0, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(WW, iW, OW, mW) {
        return new EW(WW, iW, OW, 4, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(WW, iW, OW, mW) {
        return new EW(WW, iW, OW, 5, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(WW, iW, OW, mW) {
        return new EW(WW, iW, OW, 5, mW, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(WW, iW, OW, NW) {
        let PW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          LW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          cW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : mW.h.TRILINEAR_SAMPLINGMODE;
        return new EW(WW, iW, OW, 6, NW, PW, LW, cW, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(WW, iW, OW, NW) {
        let PW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          LW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          cW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : mW.h.TRILINEAR_SAMPLINGMODE;
        return new EW(WW, iW, OW, 6, NW, PW, LW, cW, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  53801: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW.b
    });
    var mW = OW(41942);
    (0, mW.d)()
  },
  53752: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW.c
    });
    var mW = OW(41969);
    (0, mW.d)()
  },
  41969: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => xW,
      d: () => bW
    });
    var mW, EW, NW = OW(38372),
      PW = OW(41660),
      LW = OW(41919),
      cW = OW(41976),
      wW = OW(41805),
      tW = OW(41985),
      ZW = OW(41415);
    class xW extends LW.e {
      _isShaderMaterial(WW) {
        return !!WW && "ShaderMaterial" === WW.getClassName()
      }
      constructor(WW) {
        let iW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          mW = arguments.length > 5 ? arguments[5] : void 0,
          EW = arguments.length > 6 ? arguments[6] : void 0,
          LW = arguments.length > 7 ? arguments[7] : void 0;
        super(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, iW, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = mW, this.useVertexAlpha = EW, this.color = new NW.b(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, iW && (this.color = iW.color.clone(), this.alpha = iW.alpha, this.useVertexColor = iW.useVertexColor, this.useVertexAlpha = iW.useVertexAlpha), this.intersectionThreshold = .1;
        const cW = {
          attributes: [PW.k.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? cW.defines.push("#define VERTEXALPHA") : cW.needAlphaBlending = !1, this.useVertexColor ? (cW.defines.push("#define VERTEXCOLOR"), cW.attributes.push(PW.k.ColorKind)) : (cW.uniforms.push("color"), this._color4 = new NW.d), LW) this.material = LW;
        else {
          this.bD().VA().isWebGPU && !xW.ForceGLSL && (this._shaderLanguage = 1), cW.shaderLanguage = this._shaderLanguage, cW.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([OW.e(662).then((() => OW(54717))), OW.e(668).then((() => OW(54719)))]) : await Promise.all([OW.e(644).then((() => OW(54721))), OW.e(650).then((() => OW(54726)))])
          };
          const WW = new tW.o("colorShader", this.bD(), "color", cW, !1);
          WW.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(WW)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(WW) {
        const iW = this.material;
        if (iW === WW) return;
        const OW = iW && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(WW), OW && iW?.dispose()
      }
      _setInternalMaterial(WW) {
        this._setMaterial(WW), this.material && (this.material.fillMode = wW.d.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(WW) {}
      _bind(WW, iW) {
        if (!this._geometry) return this;
        const OW = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(iW, OW) : this._geometry._bind(iW, OW, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: WW,
            g: iW,
            b: OW
          } = this.color;
          this._color4.set(WW, iW, OW, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(WW, iW, OW) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const mW = this.bD().VA();
        return this._unIndexed ? mW.drawArraysType(wW.d.LineListDrawMode, WW.verticesStart, WW.verticesCount, OW) : mW.drawElementsType(wW.d.LineListDrawMode, WW.indexStart, WW.indexCount, OW), this
      }
      dispose(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || iW) && this.material?.dispose(!1, !1, !0), super.dispose(WW)
      }
      clone(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        if (iW && void 0 === iW._addToSceneRootNodes) {
          const OW = iW;
          return OW.source = this, new xW(WW, this.bD(), OW.parent, OW.source, OW.doNotCloneChildren)
        }
        return new xW(WW, this.bD(), iW, this, OW)
      }
      createInstance(WW) {
        const iW = new lW(WW, this);
        if (this.bV) {
          iW.bV = {};
          for (const WW in this.bV) iW.bV[WW] = this.bV[WW]
        }
        return iW
      }
      serialize(WW) {
        super.serialize(WW), WW.color = this.color.wEW(), WW.alpha = this.alpha
      }
      static Parse(WW, iW) {
        const OW = new xW(WW.name, iW);
        return OW.color = NW.b.FromArray(WW.color), OW.alpha = WW.alpha, OW
      }
    }
    xW.ForceGLSL = !1;
    class lW extends cW.e {
      constructor(WW, iW) {
        super(WW, iW), this.intersectionThreshold = iW.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let AW = !1;

    function bW() {
      AW || (AW = !0, LW.e._LinesMeshParser = (WW, iW) => xW.Parse(WW, iW))
    }(mW = xW.prototype).enableEdgesRendering ?? (mW.enableEdgesRendering = (0, ZW.k)("LinesMesh", "enableEdgesRendering")), (EW = lW.prototype).enableEdgesRendering ?? (EW.enableEdgesRendering = (0, ZW.k)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);