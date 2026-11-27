export const id = 299;
export const ids = [299];
export const modules = {
  54125: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr
    });
    class Zr {}
    Zr.AUTOSAMPLERSUFFIX = "Sampler", Zr.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", Zr.ALPHA_DISABLE = 0, Zr.ALPHA_ADD = 1, Zr.ALPHA_COMBINE = 2, Zr.ALPHA_SUBTRACT = 3, Zr.ALPHA_MULTIPLY = 4, Zr.ALPHA_MAXIMIZED = 5, Zr.ALPHA_ONEONE = 6, Zr.ALPHA_PREMULTIPLIED = 7, Zr.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Zr.ALPHA_INTERPOLATE = 9, Zr.ALPHA_SCREENMODE = 10, Zr.ALPHA_ONEONE_ONEONE = 11, Zr.ALPHA_ALPHATOCOLOR = 12, Zr.ALPHA_REVERSEONEMINUS = 13, Zr.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, Zr.ALPHA_ONEONE_ONEZERO = 15, Zr.ALPHA_EXCLUSION = 16, Zr.ALPHA_LAYER_ACCUMULATE = 17, Zr.ALPHA_MIN = 18, Zr.ALPHA_MAX = 19, Zr.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, Zr.ALPHA_REPLACE_COLOR = 21, Zr.ALPHA_EQUATION_ADD = 0, Zr.ALPHA_EQUATION_SUBSTRACT = 1, Zr.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, Zr.ALPHA_EQUATION_MAX = 3, Zr.ALPHA_EQUATION_MIN = 4, Zr.ALPHA_EQUATION_DARKEN = 5, Zr.DELAYLOADSTATE_NONE = 0, Zr.DELAYLOADSTATE_LOADED = 1, Zr.DELAYLOADSTATE_LOADING = 2, Zr.DELAYLOADSTATE_NOTLOADED = 4, Zr.NEVER = 512, Zr.ALWAYS = 519, Zr.LESS = 513, Zr.EQUAL = 514, Zr.LEQUAL = 515, Zr.GREATER = 516, Zr.GEQUAL = 518, Zr.NOTEQUAL = 517, Zr.KEEP = 7680, Zr.ZERO = 0, Zr.REPLACE = 7681, Zr.INCR = 7682, Zr.DECR = 7683, Zr.INVERT = 5386, Zr.INCR_WRAP = 34055, Zr.DECR_WRAP = 34056, Zr.TEXTURE_CLAMP_ADDRESSMODE = 0, Zr.TEXTURE_WRAP_ADDRESSMODE = 1, Zr.TEXTURE_MIRROR_ADDRESSMODE = 2, Zr.TEXTURE_REPETITION_NONE = 0, Zr.TEXTURE_REPETITION_NOISE_BLEND = 1, Zr.TEXTURE_REPETITION_HEX_TILING = 2, Zr.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, Zr.TEXTURE_REPETITION_VORONOI_BOMBING = 4, Zr.TEXTURE_CREATIONFLAG_STORAGE = 1, Zr.TEXTUREFORMAT_ALPHA = 0, Zr.TEXTUREFORMAT_LUMINANCE = 1, Zr.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Zr.TEXTUREFORMAT_RGB = 4, Zr.TEXTUREFORMAT_RGBA = 5, Zr.TEXTUREFORMAT_RED = 6, Zr.TEXTUREFORMAT_R = 6, Zr.TEXTUREFORMAT_R16_UNORM = 33322, Zr.TEXTUREFORMAT_RG16_UNORM = 33324, Zr.TEXTUREFORMAT_RGB16_UNORM = 32852, Zr.TEXTUREFORMAT_RGBA16_UNORM = 32859, Zr.TEXTUREFORMAT_R16_SNORM = 36760, Zr.TEXTUREFORMAT_RG16_SNORM = 36761, Zr.TEXTUREFORMAT_RGB16_SNORM = 36762, Zr.TEXTUREFORMAT_RGBA16_SNORM = 36763, Zr.TEXTUREFORMAT_RG = 7, Zr.TEXTUREFORMAT_RED_INTEGER = 8, Zr.TEXTUREFORMAT_R_INTEGER = 8, Zr.TEXTUREFORMAT_RG_INTEGER = 9, Zr.TEXTUREFORMAT_RGB_INTEGER = 10, Zr.TEXTUREFORMAT_RGBA_INTEGER = 11, Zr.TEXTUREFORMAT_BGRA = 12, Zr.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, Zr.TEXTUREFORMAT_DEPTH32_FLOAT = 14, Zr.TEXTUREFORMAT_DEPTH16 = 15, Zr.TEXTUREFORMAT_DEPTH24 = 16, Zr.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, Zr.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, Zr.TEXTUREFORMAT_STENCIL8 = 19, Zr.TEXTUREFORMAT_UNDEFINED = 4294967295, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, Zr.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, Zr.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, Zr.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, Zr.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, Zr.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, Zr.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, Zr.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, Zr.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, Zr.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, Zr.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, Zr.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, Zr.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, Zr.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, Zr.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, Zr.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, Zr.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, Zr.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, Zr.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, Zr.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, Zr.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, Zr.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, Zr.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, Zr.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, Zr.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, Zr.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, Zr.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, Zr.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, Zr.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, Zr.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, Zr.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, Zr.TEXTURETYPE_UNSIGNED_BYTE = 0, Zr.TEXTURETYPE_UNSIGNED_INT = 0, Zr.TEXTURETYPE_FLOAT = 1, Zr.TEXTURETYPE_HALF_FLOAT = 2, Zr.TEXTURETYPE_BYTE = 3, Zr.TEXTURETYPE_SHORT = 4, Zr.TEXTURETYPE_UNSIGNED_SHORT = 5, Zr.TEXTURETYPE_INT = 6, Zr.TEXTURETYPE_UNSIGNED_INTEGER = 7, Zr.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Zr.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Zr.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Zr.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Zr.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Zr.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Zr.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Zr.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Zr.TEXTURETYPE_UNDEFINED = 16, Zr.TEXTURE_2D = 3553, Zr.TEXTURE_2D_ARRAY = 35866, Zr.TEXTURE_CUBE_MAP = 34067, Zr.TEXTURE_CUBE_MAP_ARRAY = 3735928559, Zr.TEXTURE_3D = 32879, Zr.TEXTURE_NEAREST_SAMPLINGMODE = 1, Zr.TEXTURE_NEAREST_NEAREST = 1, Zr.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Zr.TEXTURE_LINEAR_LINEAR = 2, Zr.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Zr.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Zr.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Zr.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Zr.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Zr.TEXTURE_NEAREST_LINEAR = 7, Zr.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Zr.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Zr.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Zr.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Zr.TEXTURE_LINEAR_NEAREST = 12, Zr.TEXTURE_EXPLICIT_MODE = 0, Zr.TEXTURE_SPHERICAL_MODE = 1, Zr.TEXTURE_PLANAR_MODE = 2, Zr.TEXTURE_CUBIC_MODE = 3, Zr.TEXTURE_PROJECTION_MODE = 4, Zr.TEXTURE_SKYBOX_MODE = 5, Zr.TEXTURE_INVCUBIC_MODE = 6, Zr.TEXTURE_EQUIRECTANGULAR_MODE = 7, Zr.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Zr.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Zr.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, Zr.TEXTURE_FILTERING_QUALITY_HIGH = 64, Zr.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, Zr.TEXTURE_FILTERING_QUALITY_LOW = 8, Zr.SCALEMODE_FLOOR = 1, Zr.SCALEMODE_NEAREST = 2, Zr.SCALEMODE_CEILING = 3, Zr.MATERIAL_TextureDirtyFlag = 1, Zr.MATERIAL_LightDirtyFlag = 2, Zr.MATERIAL_FresnelDirtyFlag = 4, Zr.MATERIAL_AttributesDirtyFlag = 8, Zr.MATERIAL_MiscDirtyFlag = 16, Zr.MATERIAL_PrePassDirtyFlag = 32, Zr.MATERIAL_ImageProcessingDirtyFlag = 64, Zr.MATERIAL_AllDirtyFlag = 127, Zr.MATERIAL_TriangleFillMode = 0, Zr.MATERIAL_WireFrameFillMode = 1, Zr.MATERIAL_PointFillMode = 2, Zr.MATERIAL_PointListDrawMode = 3, Zr.MATERIAL_LineListDrawMode = 4, Zr.MATERIAL_LineLoopDrawMode = 5, Zr.MATERIAL_LineStripDrawMode = 6, Zr.MATERIAL_TriangleStripDrawMode = 7, Zr.MATERIAL_TriangleFanDrawMode = 8, Zr.MATERIAL_ClockWiseSideOrientation = 0, Zr.MATERIAL_CounterClockWiseSideOrientation = 1, Zr.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, Zr.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, Zr.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, Zr.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, Zr.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, Zr.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, Zr.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, Zr.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, Zr.ACTION_NothingTrigger = 0, Zr.ACTION_OnPickTrigger = 1, Zr.ACTION_OnLeftPickTrigger = 2, Zr.ACTION_OnRightPickTrigger = 3, Zr.ACTION_OnCenterPickTrigger = 4, Zr.ACTION_OnPickDownTrigger = 5, Zr.ACTION_OnDoublePickTrigger = 6, Zr.ACTION_OnPickUpTrigger = 7, Zr.ACTION_OnPickOutTrigger = 16, Zr.ACTION_OnLongPressTrigger = 8, Zr.ACTION_OnPointerOverTrigger = 9, Zr.ACTION_OnPointerOutTrigger = 10, Zr.ACTION_OnEveryFrameTrigger = 11, Zr.ACTION_OnIntersectionEnterTrigger = 12, Zr.ACTION_OnIntersectionExitTrigger = 13, Zr.ACTION_OnKeyDownTrigger = 14, Zr.ACTION_OnKeyUpTrigger = 15, Zr.PARTICLES_BILLBOARDMODE_Y = 2, Zr.PARTICLES_BILLBOARDMODE_ALL = 7, Zr.PARTICLES_BILLBOARDMODE_STRETCHED = 8, Zr.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, Zr.MESHES_CULLINGSTRATEGY_STANDARD = 0, Zr.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, Zr.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, Zr.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, Zr.SCENELOADER_NO_LOGGING = 0, Zr.SCENELOADER_MINIMAL_LOGGING = 1, Zr.SCENELOADER_SUMMARY_LOGGING = 2, Zr.SCENELOADER_DETAILED_LOGGING = 3, Zr.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, Zr.PREPASS_POSITION_TEXTURE_TYPE = 1, Zr.PREPASS_VELOCITY_TEXTURE_TYPE = 2, Zr.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, Zr.PREPASS_COLOR_TEXTURE_TYPE = 4, Zr.PREPASS_DEPTH_TEXTURE_TYPE = 5, Zr.PREPASS_NORMAL_TEXTURE_TYPE = 6, Zr.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, Zr.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, Zr.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, Zr.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, Zr.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, Zr.PREPASS_ALBEDO_TEXTURE_TYPE = 12, Zr.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, Zr.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, Zr.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, Zr.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, Zr.BUFFER_CREATIONFLAG_READ = 1, Zr.BUFFER_CREATIONFLAG_WRITE = 2, Zr.BUFFER_CREATIONFLAG_READWRITE = 3, Zr.BUFFER_CREATIONFLAG_UNIFORM = 4, Zr.BUFFER_CREATIONFLAG_VERTEX = 8, Zr.BUFFER_CREATIONFLAG_INDEX = 16, Zr.BUFFER_CREATIONFLAG_STORAGE = 32, Zr.BUFFER_CREATIONFLAG_INDIRECT = 64, Zr.RENDERPASS_MAIN = 0, Zr.INPUT_ALT_KEY = 18, Zr.INPUT_CTRL_KEY = 17, Zr.INPUT_META_KEY1 = 91, Zr.INPUT_META_KEY2 = 92, Zr.INPUT_META_KEY3 = 93, Zr.INPUT_SHIFT_KEY = 16, Zr.SNAPSHOTRENDERING_STANDARD = 0, Zr.SNAPSHOTRENDERING_FAST = 1, Zr.PERSPECTIVE_CAMERA = 0, Zr.ORTHOGRAPHIC_CAMERA = 1, Zr.FOVMODE_VERTICAL_FIXED = 0, Zr.FOVMODE_HORIZONTAL_FIXED = 1, Zr.RIG_MODE_NONE = 0, Zr.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, Zr.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, Zr.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, Zr.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, Zr.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, Zr.RIG_MODE_VR = 20, Zr.RIG_MODE_CUSTOM = 22, Zr.MAX_SUPPORTED_UV_SETS = 6, Zr.GL_ALPHA_EQUATION_ADD = 32774, Zr.GL_ALPHA_EQUATION_MIN = 32775, Zr.GL_ALPHA_EQUATION_MAX = 32776, Zr.GL_ALPHA_EQUATION_SUBTRACT = 32778, Zr.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, Zr.GL_ALPHA_FUNCTION_SRC = 768, Zr.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, Zr.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, Zr.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, Zr.GL_ALPHA_FUNCTION_DST_ALPHA = 772, Zr.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, Zr.GL_ALPHA_FUNCTION_DST_COLOR = 774, Zr.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, Zr.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, Zr.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, Zr.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, Zr.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, Zr.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, Zr.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, Zr.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, Zr.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, Zr.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, Zr.SnippetUrl = "https://snippet.babylonjs.com", Zr.FOGMODE_NONE = 0, Zr.FOGMODE_EXP = 1, Zr.FOGMODE_EXP2 = 2, Zr.FOGMODE_LINEAR = 3, Zr.BYTE = 5120, Zr.UNSIGNED_BYTE = 5121, Zr.SHORT = 5122, Zr.UNSIGNED_SHORT = 5123, Zr.INT = 5124, Zr.UNSIGNED_INT = 5125, Zr.FLOAT = 5126, Zr.HALF_FLOAT = 5131, Zr.PositionKind = "position", Zr.NormalKind = "normal", Zr.TangentKind = "tangent", Zr.UVKind = "uv", Zr.UV2Kind = "uv2", Zr.UV3Kind = "uv3", Zr.UV4Kind = "uv4", Zr.UV5Kind = "uv5", Zr.UV6Kind = "uv6", Zr.ColorKind = "color", Zr.ColorInstanceKind = "instanceColor", Zr.MatricesIndicesKind = "matricesIndices", Zr.MatricesWeightsKind = "matricesWeights", Zr.MatricesIndicesExtraKind = "matricesIndicesExtra", Zr.MatricesWeightsExtraKind = "matricesWeightsExtra", Zr.ANIMATIONTYPE_FLOAT = 0, Zr.ANIMATIONTYPE_VECTOR3 = 1, Zr.ANIMATIONTYPE_QUATERNION = 2, Zr.ANIMATIONTYPE_MATRIX = 3, Zr.ANIMATIONTYPE_COLOR3 = 4, Zr.ANIMATIONTYPE_COLOR4 = 7, Zr.ANIMATIONTYPE_VECTOR2 = 5, Zr.ANIMATIONTYPE_SIZE = 6, Zr.ShadowMinZ = 0, Zr.ShadowMaxZ = 1e4, Zr.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, Zr.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  54104: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => fr
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(38560),
      jr = Qr(42094),
      Ir = Qr(42069);
    let fr = (() => {
      var rr;
      let Sr, Qr, fr, Er, pr = jr.c,
        xr = [];
      return rr = class extends pr {
        constructor() {
          super(...arguments), this._position = (0, Zr.m)(this, xr), this._needProjectionMatrixCompute = !0, this._viewMatrix = ar.d.Identity(), this._projectionMatrix = ar.d.Identity()
        }
        _setPosition(rr) {
          this._position = rr
        }
        get position() {
          return this._position
        }
        set position(rr) {
          this._setPosition(rr)
        }
        _setDirection(rr) {
          this._direction = rr
        }
        get direction() {
          return this._direction
        }
        set direction(rr) {
          this._setDirection(rr)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(rr) {
          this._shadowMinZ = rr, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(rr) {
          this._shadowMaxZ = rr, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = ar.u.Zero()), ar.u.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = ar.u.Zero()), ar.u.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(rr) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(rr) {
          return this.direction = ar.u.Normalize(rr.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const rr = ar.u.Cross(this.direction, Ir.c.Y),
            Sr = ar.u.Cross(rr, this.direction);
          return ar.u.RotationFromAxis(rr, Sr, this.direction)
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
          super._initCache(), this._cache.position = ar.u.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(rr) {
          return !rr && this.isSynchronized() ? (this._currentRenderId = this.eC().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.iH(this.position), this._worldMatrix || (this._worldMatrix = ar.d.Identity()), ar.d.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(rr) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : rr?.minZ || 0
        }
        getDepthMaxZ(rr) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : rr?.maxZ || 1e4
        }
        setShadowProjectionMatrix(rr, Sr, Qr) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(Sr, Qr, rr) : this._setDefaultShadowProjectionMatrix(rr, Sr, Qr), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(rr) {
          const Sr = ar.n.kU[0];
          let Qr = this.position;
          this.computeTransformedInformation() && (Qr = this.transformedPosition), ar.u.NormalizeToRef(this.getShadowDirection(rr), Sr), 1 === Math.abs(ar.u.Dot(Sr, ar.u.Up())) && (Sr.z = 1e-13);
          const Zr = ar.n.kU[1];
          return Qr.addToRef(Sr, Zr), ar.d.LookAtLHToRef(Qr, Zr, ar.u.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(rr, Sr) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, rr ?? this._viewMatrix, Sr ?? []), this._projectionMatrix
        }
      }, (() => {
        const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(pr[Symbol.metadata] ?? null) : void 0;
        Sr = [(0, Wr.C)()], Qr = [(0, Wr.C)()], fr = [(0, Wr.G)()], Er = [(0, Wr.G)()], (0, Zr.k)(rr, null, Sr, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: rr => "position" in rr,
            get: rr => rr.position
          },
          metadata: ar
        }, null, xr), (0, Zr.k)(rr, null, Qr, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: rr => "direction" in rr,
            get: rr => rr.direction
          },
          metadata: ar
        }, null, xr), (0, Zr.k)(rr, null, fr, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: rr => "shadowMinZ" in rr,
            get: rr => rr.shadowMinZ
          },
          metadata: ar
        }, null, xr), (0, Zr.k)(rr, null, Er, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: rr => "shadowMaxZ" in rr,
            get: rr => rr.shadowMaxZ
          },
          metadata: ar
        }, null, xr), ar && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ar
        })
      })(), rr
    })()
  },
  54122: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr
    });
    var Zr = Qr(42310);
    class Wr extends Zr.f {
      constructor(rr, Sr, Qr, Wr, ar) {
        let jr = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ir = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          fr = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          Er = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          pr = arguments.length > 9 ? arguments[9] : void 0,
          xr = arguments.length > 10 ? arguments[10] : void 0,
          mr = arguments.length > 11 ? arguments[11] : void 0,
          Nr = arguments.length > 12 ? arguments[12] : void 0;
        super(null, ar, !jr, Ir, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, pr), this.format = Wr, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== Er || (fr = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== Er || (fr = 1), this._texture = this._engine.createRawTexture(rr, Sr, Qr, Wr, jr, Ir, fr, null, Er, pr ?? 0, xr ?? !1, Nr), this.wrapU = Zr.f.CLAMP_ADDRESSMODE, this.wrapV = Zr.f.CLAMP_ADDRESSMODE, this._waitingForData = !!mr && !rr)
      }
      update(rr) {
        this.updateMipLevel(rr, 0)
      }
      updateMipLevel(rr, Sr) {
        this._getEngine().updateRawTexture(this._texture, rr, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, Sr), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const rr = new Wr(null, this.getSize().width, this.getSize().height, this.format, this.eC(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return rr._texture = this._texture, this._texture.incrementReferences(), rr
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(rr, Sr, Qr, Zr) {
        return new Wr(rr, Sr, Qr, 1, Zr, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(rr, Sr, Qr, Zr) {
        return new Wr(rr, Sr, Qr, 2, Zr, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(rr, Sr, Qr, Zr) {
        return new Wr(rr, Sr, Qr, 0, Zr, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(rr, Sr, Qr, Zr) {
        return new Wr(rr, Sr, Qr, 4, Zr, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(rr, Sr, Qr, Zr) {
        return new Wr(rr, Sr, Qr, 5, Zr, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(rr, Sr, Qr, Zr) {
        return new Wr(rr, Sr, Qr, 5, Zr, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(rr, Sr, Qr, ar) {
        let jr = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ir = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          fr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Zr.f.TRILINEAR_SAMPLINGMODE;
        return new Wr(rr, Sr, Qr, 6, ar, jr, Ir, fr, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(rr, Sr, Qr, ar) {
        let jr = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ir = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          fr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Zr.f.TRILINEAR_SAMPLINGMODE;
        return new Wr(rr, Sr, Qr, 6, ar, jr, Ir, fr, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  54151: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr.c
    });
    var Zr = Qr(42284);
    (0, Zr.f)()
  },
  54112: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr.b
    });
    var Zr = Qr(42297);
    (0, Zr.c)()
  },
  42297: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => mr,
      c: () => tr
    });
    var Zr, Wr, ar = Qr(38684),
      jr = Qr(41995),
      Ir = Qr(42243),
      fr = Qr(42299),
      Er = Qr(42130),
      pr = Qr(42308),
      xr = Qr(41769);
    class mr extends Ir.c {
      _isShaderMaterial(rr) {
        return !!rr && "ShaderMaterial" === rr.getClassName()
      }
      constructor(rr) {
        let Sr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Zr = arguments.length > 5 ? arguments[5] : void 0,
          Wr = arguments.length > 6 ? arguments[6] : void 0,
          Ir = arguments.length > 7 ? arguments[7] : void 0;
        super(rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Sr, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Zr, this.useVertexAlpha = Wr, this.color = new ar.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, Sr && (this.color = Sr.color.clone(), this.alpha = Sr.alpha, this.useVertexColor = Sr.useVertexColor, this.useVertexAlpha = Sr.useVertexAlpha), this.intersectionThreshold = .1;
        const fr = {
          attributes: [jr.j.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? fr.defines.push("#define VERTEXALPHA") : fr.needAlphaBlending = !1, this.useVertexColor ? (fr.defines.push("#define VERTEXCOLOR"), fr.attributes.push(jr.j.ColorKind)) : (fr.uniforms.push("color"), this._color4 = new ar.f), Ir) this.material = Ir;
        else {
          this.eC().MU().isWebGPU && !mr.ForceGLSL && (this._shaderLanguage = 1), fr.shaderLanguage = this._shaderLanguage, fr.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([Qr.e(663).then((() => Qr(55069))), Qr.e(669).then((() => Qr(55072)))]) : await Promise.all([Qr.e(645).then((() => Qr(55079))), Qr.e(651).then((() => Qr(55084)))])
          };
          const rr = new pr.o("colorShader", this.eC(), "color", fr, !1);
          rr.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(rr)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(rr) {
        const Sr = this.material;
        if (Sr === rr) return;
        const Qr = Sr && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(rr), Qr && Sr?.dispose()
      }
      _setInternalMaterial(rr) {
        this._setMaterial(rr), this.material && (this.material.fillMode = Er.d.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(rr) {}
      _bind(rr, Sr) {
        if (!this._geometry) return this;
        const Qr = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Sr, Qr) : this._geometry._bind(Sr, Qr, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: rr,
            g: Sr,
            b: Qr
          } = this.color;
          this._color4.set(rr, Sr, Qr, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(rr, Sr, Qr) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Zr = this.eC().MU();
        return this._unIndexed ? Zr.drawArraysType(Er.d.LineListDrawMode, rr.verticesStart, rr.verticesCount, Qr) : Zr.drawElementsType(Er.d.LineListDrawMode, rr.indexStart, rr.indexCount, Qr), this
      }
      dispose(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Sr) && this.material?.dispose(!1, !1, !0), super.dispose(rr)
      }
      clone(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        if (Sr && void 0 === Sr._addToSceneRootNodes) {
          const Qr = Sr;
          return Qr.source = this, new mr(rr, this.eC(), Qr.parent, Qr.source, Qr.doNotCloneChildren)
        }
        return new mr(rr, this.eC(), Sr, this, Qr)
      }
      createInstance(rr) {
        const Sr = new Nr(rr, this);
        if (this.pG) {
          Sr.pG = {};
          for (const rr in this.pG) Sr.pG[rr] = this.pG[rr]
        }
        return Sr
      }
      serialize(rr) {
        super.serialize(rr), rr.color = this.color.OWr(), rr.alpha = this.alpha
      }
      static Parse(rr, Sr) {
        const Qr = new mr(rr.name, Sr);
        return Qr.color = ar.e.FromArray(rr.color), Qr.alpha = rr.alpha, Qr
      }
    }
    mr.ForceGLSL = !1;
    class Nr extends fr.e {
      constructor(rr, Sr) {
        super(rr, Sr), this.intersectionThreshold = Sr.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let Ur = !1;

    function tr() {
      Ur || (Ur = !0, Ir.c._LinesMeshParser = (rr, Sr) => mr.Parse(rr, Sr))
    }(Zr = mr.prototype).enableEdgesRendering ?? (Zr.enableEdgesRendering = (0, xr.h)("LinesMesh", "enableEdgesRendering")), (Wr = Nr.prototype).enableEdgesRendering ?? (Wr.enableEdgesRendering = (0, xr.h)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);