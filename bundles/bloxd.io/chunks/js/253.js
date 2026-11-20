export const id = 253;
export const ids = [253];
export const modules = {
  41024: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk
    });
    class Rk {}
    Rk.AUTOSAMPLERSUFFIX = "Sampler", Rk.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", Rk.ALPHA_DISABLE = 0, Rk.ALPHA_ADD = 1, Rk.ALPHA_COMBINE = 2, Rk.ALPHA_SUBTRACT = 3, Rk.ALPHA_MULTIPLY = 4, Rk.ALPHA_MAXIMIZED = 5, Rk.ALPHA_ONEONE = 6, Rk.ALPHA_PREMULTIPLIED = 7, Rk.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Rk.ALPHA_INTERPOLATE = 9, Rk.ALPHA_SCREENMODE = 10, Rk.ALPHA_ONEONE_ONEONE = 11, Rk.ALPHA_ALPHATOCOLOR = 12, Rk.ALPHA_REVERSEONEMINUS = 13, Rk.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, Rk.ALPHA_ONEONE_ONEZERO = 15, Rk.ALPHA_EXCLUSION = 16, Rk.ALPHA_LAYER_ACCUMULATE = 17, Rk.ALPHA_MIN = 18, Rk.ALPHA_MAX = 19, Rk.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, Rk.ALPHA_REPLACE_COLOR = 21, Rk.ALPHA_EQUATION_ADD = 0, Rk.ALPHA_EQUATION_SUBSTRACT = 1, Rk.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, Rk.ALPHA_EQUATION_MAX = 3, Rk.ALPHA_EQUATION_MIN = 4, Rk.ALPHA_EQUATION_DARKEN = 5, Rk.DELAYLOADSTATE_NONE = 0, Rk.DELAYLOADSTATE_LOADED = 1, Rk.DELAYLOADSTATE_LOADING = 2, Rk.DELAYLOADSTATE_NOTLOADED = 4, Rk.NEVER = 512, Rk.ALWAYS = 519, Rk.LESS = 513, Rk.EQUAL = 514, Rk.LEQUAL = 515, Rk.GREATER = 516, Rk.GEQUAL = 518, Rk.NOTEQUAL = 517, Rk.KEEP = 7680, Rk.ZERO = 0, Rk.REPLACE = 7681, Rk.INCR = 7682, Rk.DECR = 7683, Rk.INVERT = 5386, Rk.INCR_WRAP = 34055, Rk.DECR_WRAP = 34056, Rk.TEXTURE_CLAMP_ADDRESSMODE = 0, Rk.TEXTURE_WRAP_ADDRESSMODE = 1, Rk.TEXTURE_MIRROR_ADDRESSMODE = 2, Rk.TEXTURE_REPETITION_NONE = 0, Rk.TEXTURE_REPETITION_NOISE_BLEND = 1, Rk.TEXTURE_REPETITION_HEX_TILING = 2, Rk.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, Rk.TEXTURE_REPETITION_VORONOI_BOMBING = 4, Rk.TEXTURE_CREATIONFLAG_STORAGE = 1, Rk.TEXTUREFORMAT_ALPHA = 0, Rk.TEXTUREFORMAT_LUMINANCE = 1, Rk.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Rk.TEXTUREFORMAT_RGB = 4, Rk.TEXTUREFORMAT_RGBA = 5, Rk.TEXTUREFORMAT_RED = 6, Rk.TEXTUREFORMAT_R = 6, Rk.TEXTUREFORMAT_R16_UNORM = 33322, Rk.TEXTUREFORMAT_RG16_UNORM = 33324, Rk.TEXTUREFORMAT_RGB16_UNORM = 32852, Rk.TEXTUREFORMAT_RGBA16_UNORM = 32859, Rk.TEXTUREFORMAT_R16_SNORM = 36760, Rk.TEXTUREFORMAT_RG16_SNORM = 36761, Rk.TEXTUREFORMAT_RGB16_SNORM = 36762, Rk.TEXTUREFORMAT_RGBA16_SNORM = 36763, Rk.TEXTUREFORMAT_RG = 7, Rk.TEXTUREFORMAT_RED_INTEGER = 8, Rk.TEXTUREFORMAT_R_INTEGER = 8, Rk.TEXTUREFORMAT_RG_INTEGER = 9, Rk.TEXTUREFORMAT_RGB_INTEGER = 10, Rk.TEXTUREFORMAT_RGBA_INTEGER = 11, Rk.TEXTUREFORMAT_BGRA = 12, Rk.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, Rk.TEXTUREFORMAT_DEPTH32_FLOAT = 14, Rk.TEXTUREFORMAT_DEPTH16 = 15, Rk.TEXTUREFORMAT_DEPTH24 = 16, Rk.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, Rk.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, Rk.TEXTUREFORMAT_STENCIL8 = 19, Rk.TEXTUREFORMAT_UNDEFINED = 4294967295, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, Rk.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, Rk.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, Rk.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, Rk.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, Rk.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, Rk.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, Rk.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, Rk.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, Rk.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, Rk.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, Rk.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, Rk.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, Rk.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, Rk.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, Rk.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, Rk.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, Rk.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, Rk.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, Rk.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, Rk.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, Rk.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, Rk.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, Rk.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, Rk.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, Rk.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, Rk.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, Rk.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, Rk.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, Rk.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, Rk.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, Rk.TEXTURETYPE_UNSIGNED_BYTE = 0, Rk.TEXTURETYPE_UNSIGNED_INT = 0, Rk.TEXTURETYPE_FLOAT = 1, Rk.TEXTURETYPE_HALF_FLOAT = 2, Rk.TEXTURETYPE_BYTE = 3, Rk.TEXTURETYPE_SHORT = 4, Rk.TEXTURETYPE_UNSIGNED_SHORT = 5, Rk.TEXTURETYPE_INT = 6, Rk.TEXTURETYPE_UNSIGNED_INTEGER = 7, Rk.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Rk.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Rk.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Rk.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Rk.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Rk.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Rk.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Rk.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Rk.TEXTURETYPE_UNDEFINED = 16, Rk.TEXTURE_2D = 3553, Rk.TEXTURE_2D_ARRAY = 35866, Rk.TEXTURE_CUBE_MAP = 34067, Rk.TEXTURE_CUBE_MAP_ARRAY = 3735928559, Rk.TEXTURE_3D = 32879, Rk.TEXTURE_NEAREST_SAMPLINGMODE = 1, Rk.TEXTURE_NEAREST_NEAREST = 1, Rk.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Rk.TEXTURE_LINEAR_LINEAR = 2, Rk.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Rk.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Rk.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Rk.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Rk.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Rk.TEXTURE_NEAREST_LINEAR = 7, Rk.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Rk.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Rk.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Rk.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Rk.TEXTURE_LINEAR_NEAREST = 12, Rk.TEXTURE_EXPLICIT_MODE = 0, Rk.TEXTURE_SPHERICAL_MODE = 1, Rk.TEXTURE_PLANAR_MODE = 2, Rk.TEXTURE_CUBIC_MODE = 3, Rk.TEXTURE_PROJECTION_MODE = 4, Rk.TEXTURE_SKYBOX_MODE = 5, Rk.TEXTURE_INVCUBIC_MODE = 6, Rk.TEXTURE_EQUIRECTANGULAR_MODE = 7, Rk.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Rk.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Rk.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, Rk.TEXTURE_FILTERING_QUALITY_HIGH = 64, Rk.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, Rk.TEXTURE_FILTERING_QUALITY_LOW = 8, Rk.SCALEMODE_FLOOR = 1, Rk.SCALEMODE_NEAREST = 2, Rk.SCALEMODE_CEILING = 3, Rk.MATERIAL_TextureDirtyFlag = 1, Rk.MATERIAL_LightDirtyFlag = 2, Rk.MATERIAL_FresnelDirtyFlag = 4, Rk.MATERIAL_AttributesDirtyFlag = 8, Rk.MATERIAL_MiscDirtyFlag = 16, Rk.MATERIAL_PrePassDirtyFlag = 32, Rk.MATERIAL_ImageProcessingDirtyFlag = 64, Rk.MATERIAL_AllDirtyFlag = 127, Rk.MATERIAL_TriangleFillMode = 0, Rk.MATERIAL_WireFrameFillMode = 1, Rk.MATERIAL_PointFillMode = 2, Rk.MATERIAL_PointListDrawMode = 3, Rk.MATERIAL_LineListDrawMode = 4, Rk.MATERIAL_LineLoopDrawMode = 5, Rk.MATERIAL_LineStripDrawMode = 6, Rk.MATERIAL_TriangleStripDrawMode = 7, Rk.MATERIAL_TriangleFanDrawMode = 8, Rk.MATERIAL_ClockWiseSideOrientation = 0, Rk.MATERIAL_CounterClockWiseSideOrientation = 1, Rk.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, Rk.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, Rk.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, Rk.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, Rk.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, Rk.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, Rk.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, Rk.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, Rk.ACTION_NothingTrigger = 0, Rk.ACTION_OnPickTrigger = 1, Rk.ACTION_OnLeftPickTrigger = 2, Rk.ACTION_OnRightPickTrigger = 3, Rk.ACTION_OnCenterPickTrigger = 4, Rk.ACTION_OnPickDownTrigger = 5, Rk.ACTION_OnDoublePickTrigger = 6, Rk.ACTION_OnPickUpTrigger = 7, Rk.ACTION_OnPickOutTrigger = 16, Rk.ACTION_OnLongPressTrigger = 8, Rk.ACTION_OnPointerOverTrigger = 9, Rk.ACTION_OnPointerOutTrigger = 10, Rk.ACTION_OnEveryFrameTrigger = 11, Rk.ACTION_OnIntersectionEnterTrigger = 12, Rk.ACTION_OnIntersectionExitTrigger = 13, Rk.ACTION_OnKeyDownTrigger = 14, Rk.ACTION_OnKeyUpTrigger = 15, Rk.PARTICLES_BILLBOARDMODE_Y = 2, Rk.PARTICLES_BILLBOARDMODE_ALL = 7, Rk.PARTICLES_BILLBOARDMODE_STRETCHED = 8, Rk.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, Rk.MESHES_CULLINGSTRATEGY_STANDARD = 0, Rk.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, Rk.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, Rk.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, Rk.SCENELOADER_NO_LOGGING = 0, Rk.SCENELOADER_MINIMAL_LOGGING = 1, Rk.SCENELOADER_SUMMARY_LOGGING = 2, Rk.SCENELOADER_DETAILED_LOGGING = 3, Rk.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, Rk.PREPASS_POSITION_TEXTURE_TYPE = 1, Rk.PREPASS_VELOCITY_TEXTURE_TYPE = 2, Rk.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, Rk.PREPASS_COLOR_TEXTURE_TYPE = 4, Rk.PREPASS_DEPTH_TEXTURE_TYPE = 5, Rk.PREPASS_NORMAL_TEXTURE_TYPE = 6, Rk.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, Rk.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, Rk.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, Rk.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, Rk.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, Rk.PREPASS_ALBEDO_TEXTURE_TYPE = 12, Rk.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, Rk.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, Rk.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, Rk.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, Rk.BUFFER_CREATIONFLAG_READ = 1, Rk.BUFFER_CREATIONFLAG_WRITE = 2, Rk.BUFFER_CREATIONFLAG_READWRITE = 3, Rk.BUFFER_CREATIONFLAG_UNIFORM = 4, Rk.BUFFER_CREATIONFLAG_VERTEX = 8, Rk.BUFFER_CREATIONFLAG_INDEX = 16, Rk.BUFFER_CREATIONFLAG_STORAGE = 32, Rk.BUFFER_CREATIONFLAG_INDIRECT = 64, Rk.RENDERPASS_MAIN = 0, Rk.INPUT_ALT_KEY = 18, Rk.INPUT_CTRL_KEY = 17, Rk.INPUT_META_KEY1 = 91, Rk.INPUT_META_KEY2 = 92, Rk.INPUT_META_KEY3 = 93, Rk.INPUT_SHIFT_KEY = 16, Rk.SNAPSHOTRENDERING_STANDARD = 0, Rk.SNAPSHOTRENDERING_FAST = 1, Rk.PERSPECTIVE_CAMERA = 0, Rk.ORTHOGRAPHIC_CAMERA = 1, Rk.FOVMODE_VERTICAL_FIXED = 0, Rk.FOVMODE_HORIZONTAL_FIXED = 1, Rk.RIG_MODE_NONE = 0, Rk.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, Rk.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, Rk.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, Rk.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, Rk.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, Rk.RIG_MODE_VR = 20, Rk.RIG_MODE_CUSTOM = 22, Rk.MAX_SUPPORTED_UV_SETS = 6, Rk.GL_ALPHA_EQUATION_ADD = 32774, Rk.GL_ALPHA_EQUATION_MIN = 32775, Rk.GL_ALPHA_EQUATION_MAX = 32776, Rk.GL_ALPHA_EQUATION_SUBTRACT = 32778, Rk.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, Rk.GL_ALPHA_FUNCTION_SRC = 768, Rk.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, Rk.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, Rk.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, Rk.GL_ALPHA_FUNCTION_DST_ALPHA = 772, Rk.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, Rk.GL_ALPHA_FUNCTION_DST_COLOR = 774, Rk.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, Rk.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, Rk.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, Rk.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, Rk.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, Rk.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, Rk.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, Rk.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, Rk.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, Rk.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, Rk.SnippetUrl = "https://snippet.babylonjs.com", Rk.FOGMODE_NONE = 0, Rk.FOGMODE_EXP = 1, Rk.FOGMODE_EXP2 = 2, Rk.FOGMODE_LINEAR = 3, Rk.BYTE = 5120, Rk.UNSIGNED_BYTE = 5121, Rk.SHORT = 5122, Rk.UNSIGNED_SHORT = 5123, Rk.INT = 5124, Rk.UNSIGNED_INT = 5125, Rk.FLOAT = 5126, Rk.HALF_FLOAT = 5131, Rk.PositionKind = "position", Rk.NormalKind = "normal", Rk.TangentKind = "tangent", Rk.UVKind = "uv", Rk.UV2Kind = "uv2", Rk.UV3Kind = "uv3", Rk.UV4Kind = "uv4", Rk.UV5Kind = "uv5", Rk.UV6Kind = "uv6", Rk.ColorKind = "color", Rk.ColorInstanceKind = "instanceColor", Rk.MatricesIndicesKind = "matricesIndices", Rk.MatricesWeightsKind = "matricesWeights", Rk.MatricesIndicesExtraKind = "matricesIndicesExtra", Rk.MatricesWeightsExtraKind = "matricesWeightsExtra", Rk.ANIMATIONTYPE_FLOAT = 0, Rk.ANIMATIONTYPE_VECTOR3 = 1, Rk.ANIMATIONTYPE_QUATERNION = 2, Rk.ANIMATIONTYPE_MATRIX = 3, Rk.ANIMATIONTYPE_COLOR3 = 4, Rk.ANIMATIONTYPE_COLOR4 = 7, Rk.ANIMATIONTYPE_VECTOR2 = 5, Rk.ANIMATIONTYPE_SIZE = 6, Rk.ShadowMinZ = 0, Rk.ShadowMaxZ = 1e4, Rk.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, Rk.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  41003: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => wk
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(36758),
      Xk = Bk(39668),
      bk = Bk(39637);
    let wk = (() => {
      var kk;
      let Fk, Bk, wk, dk, sk = Xk.d,
        Vk = [];
      return kk = class extends sk {
        constructor() {
          super(...arguments), this._position = (0, Rk.l)(this, Vk), this._needProjectionMatrixCompute = !0, this._viewMatrix = ak.c.Identity(), this._projectionMatrix = ak.c.Identity()
        }
        _setPosition(kk) {
          this._position = kk
        }
        get position() {
          return this._position
        }
        set position(kk) {
          this._setPosition(kk)
        }
        _setDirection(kk) {
          this._direction = kk
        }
        get direction() {
          return this._direction
        }
        set direction(kk) {
          this._setDirection(kk)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(kk) {
          this._shadowMinZ = kk, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(kk) {
          this._shadowMaxZ = kk, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = ak.s.Zero()), ak.s.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = ak.s.Zero()), ak.s.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(kk) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(kk) {
          return this.direction = ak.s.Normalize(kk.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const kk = ak.s.Cross(this.direction, bk.b.Y),
            Fk = ak.s.Cross(kk, this.direction);
          return ak.s.RotationFromAxis(kk, Fk, this.direction)
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
          super._initCache(), this._cache.position = ak.s.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(kk) {
          return !kk && this.isSynchronized() ? (this._currentRenderId = this.XN().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.sBk(this.position), this._worldMatrix || (this._worldMatrix = ak.c.Identity()), ak.c.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(kk) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : kk?.minZ || 0
        }
        getDepthMaxZ(kk) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : kk?.maxZ || 1e4
        }
        setShadowProjectionMatrix(kk, Fk, Bk) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(Fk, Bk, kk) : this._setDefaultShadowProjectionMatrix(kk, Fk, Bk), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(kk) {
          const Fk = ak.l.Qe[0];
          let Bk = this.position;
          this.computeTransformedInformation() && (Bk = this.transformedPosition), ak.s.NormalizeToRef(this.getShadowDirection(kk), Fk), 1 === Math.abs(ak.s.Dot(Fk, ak.s.Up())) && (Fk.z = 1e-13);
          const Rk = ak.l.Qe[1];
          return Bk.addToRef(Fk, Rk), ak.c.LookAtLHToRef(Bk, Rk, ak.s.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(kk, Fk) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, kk ?? this._viewMatrix, Fk ?? []), this._projectionMatrix
        }
      }, (() => {
        const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(sk[Symbol.metadata] ?? null) : void 0;
        Fk = [(0, tk.K)()], Bk = [(0, tk.K)()], wk = [(0, tk.M)()], dk = [(0, tk.M)()], (0, Rk.j)(kk, null, Fk, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: kk => "position" in kk,
            get: kk => kk.position
          },
          metadata: ak
        }, null, Vk), (0, Rk.j)(kk, null, Bk, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: kk => "direction" in kk,
            get: kk => kk.direction
          },
          metadata: ak
        }, null, Vk), (0, Rk.j)(kk, null, wk, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: kk => "shadowMinZ" in kk,
            get: kk => kk.shadowMinZ
          },
          metadata: ak
        }, null, Vk), (0, Rk.j)(kk, null, dk, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: kk => "shadowMaxZ" in kk,
            get: kk => kk.shadowMaxZ
          },
          metadata: ak
        }, null, Vk), ak && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ak
        })
      })(), kk
    })()
  },
  41021: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk
    });
    var Rk = Bk(39895);
    class tk extends Rk.f {
      constructor(kk, Fk, Bk, tk, ak) {
        let Xk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          wk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          dk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          sk = arguments.length > 9 ? arguments[9] : void 0,
          Vk = arguments.length > 10 ? arguments[10] : void 0,
          Jk = arguments.length > 11 ? arguments[11] : void 0,
          Ak = arguments.length > 12 ? arguments[12] : void 0;
        super(null, ak, !Xk, bk, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, sk), this.format = tk, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== dk || (wk = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== dk || (wk = 1), this._texture = this._engine.createRawTexture(kk, Fk, Bk, tk, Xk, bk, wk, null, dk, sk ?? 0, Vk ?? !1, Ak), this.wrapU = Rk.f.CLAMP_ADDRESSMODE, this.wrapV = Rk.f.CLAMP_ADDRESSMODE, this._waitingForData = !!Jk && !kk)
      }
      update(kk) {
        this.updateMipLevel(kk, 0)
      }
      updateMipLevel(kk, Fk) {
        this._getEngine().updateRawTexture(this._texture, kk, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, Fk), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const kk = new tk(null, this.getSize().width, this.getSize().height, this.format, this.XN(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return kk._texture = this._texture, this._texture.incrementReferences(), kk
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(kk, Fk, Bk, Rk) {
        return new tk(kk, Fk, Bk, 1, Rk, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(kk, Fk, Bk, Rk) {
        return new tk(kk, Fk, Bk, 2, Rk, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(kk, Fk, Bk, Rk) {
        return new tk(kk, Fk, Bk, 0, Rk, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(kk, Fk, Bk, Rk) {
        return new tk(kk, Fk, Bk, 4, Rk, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(kk, Fk, Bk, Rk) {
        return new tk(kk, Fk, Bk, 5, Rk, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(kk, Fk, Bk, Rk) {
        return new tk(kk, Fk, Bk, 5, Rk, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(kk, Fk, Bk, ak) {
        let Xk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          wk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Rk.f.TRILINEAR_SAMPLINGMODE;
        return new tk(kk, Fk, Bk, 6, ak, Xk, bk, wk, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(kk, Fk, Bk, ak) {
        let Xk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          wk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Rk.f.TRILINEAR_SAMPLINGMODE;
        return new tk(kk, Fk, Bk, 6, ak, Xk, bk, wk, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  41060: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk.b
    });
    var Rk = Bk(39853);
    (0, Rk.d)()
  },
  41009: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk.e
    });
    var Rk = Bk(39870);
    (0, Rk.f)()
  },
  39870: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Jk,
      f: () => yk
    });
    var Rk, tk, ak = Bk(36917),
      Xk = Bk(39541),
      bk = Bk(39817),
      wk = Bk(39879),
      dk = Bk(39695),
      sk = Bk(39887),
      Vk = Bk(39296);
    class Jk extends bk.b {
      _isShaderMaterial(kk) {
        return !!kk && "ShaderMaterial" === kk.getClassName()
      }
      constructor(kk) {
        let Fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Rk = arguments.length > 5 ? arguments[5] : void 0,
          tk = arguments.length > 6 ? arguments[6] : void 0,
          bk = arguments.length > 7 ? arguments[7] : void 0;
        super(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Fk, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Rk, this.useVertexAlpha = tk, this.color = new ak.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, Fk && (this.color = Fk.color.clone(), this.alpha = Fk.alpha, this.useVertexColor = Fk.useVertexColor, this.useVertexAlpha = Fk.useVertexAlpha), this.intersectionThreshold = .1;
        const wk = {
          attributes: [Xk.n.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? wk.defines.push("#define VERTEXALPHA") : wk.needAlphaBlending = !1, this.useVertexColor ? (wk.defines.push("#define VERTEXCOLOR"), wk.attributes.push(Xk.n.ColorKind)) : (wk.uniforms.push("color"), this._color4 = new ak.i), bk) this.material = bk;
        else {
          this.XN().ne().isWebGPU && !Jk.ForceGLSL && (this._shaderLanguage = 1), wk.shaderLanguage = this._shaderLanguage, wk.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([Bk.e(334).then((() => Bk(41975))), Bk.e(340).then((() => Bk(41977)))]) : await Promise.all([Bk.e(316).then((() => Bk(41980))), Bk.e(322).then((() => Bk(41983)))])
          };
          const kk = new sk.n("colorShader", this.XN(), "color", wk, !1);
          kk.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(kk)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(kk) {
        const Fk = this.material;
        if (Fk === kk) return;
        const Bk = Fk && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(kk), Bk && Fk?.dispose()
      }
      _setInternalMaterial(kk) {
        this._setMaterial(kk), this.material && (this.material.fillMode = dk.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(kk) {}
      _bind(kk, Fk) {
        if (!this._geometry) return this;
        const Bk = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Fk, Bk) : this._geometry._bind(Fk, Bk, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: kk,
            g: Fk,
            b: Bk
          } = this.color;
          this._color4.set(kk, Fk, Bk, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(kk, Fk, Bk) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Rk = this.XN().ne();
        return this._unIndexed ? Rk.drawArraysType(dk.c.LineListDrawMode, kk.verticesStart, kk.verticesCount, Bk) : Rk.drawElementsType(dk.c.LineListDrawMode, kk.indexStart, kk.indexCount, Bk), this
      }
      dispose(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Fk) && this.material?.dispose(!1, !1, !0), super.dispose(kk)
      }
      clone(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        if (Fk && void 0 === Fk._addToSceneRootNodes) {
          const Bk = Fk;
          return Bk.source = this, new Jk(kk, this.XN(), Bk.parent, Bk.source, Bk.doNotCloneChildren)
        }
        return new Jk(kk, this.XN(), Fk, this, Bk)
      }
      createInstance(kk) {
        const Fk = new Ak(kk, this);
        if (this.gH) {
          Fk.gH = {};
          for (const kk in this.gH) Fk.gH[kk] = this.gH[kk]
        }
        return Fk
      }
      serialize(kk) {
        super.serialize(kk), kk.color = this.color.PBk(), kk.alpha = this.alpha
      }
      static Parse(kk, Fk) {
        const Bk = new Jk(kk.name, Fk);
        return Bk.color = ak.e.FromArray(kk.color), Bk.alpha = kk.alpha, Bk
      }
    }
    Jk.ForceGLSL = !1;
    class Ak extends wk.b {
      constructor(kk, Fk) {
        super(kk, Fk), this.intersectionThreshold = Fk.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let ek = !1;

    function yk() {
      ek || (ek = !0, bk.b._LinesMeshParser = (kk, Fk) => Jk.Parse(kk, Fk))
    }(Rk = Jk.prototype).enableEdgesRendering ?? (Rk.enableEdgesRendering = (0, Vk.g)("LinesMesh", "enableEdgesRendering")), (tk = Ak.prototype).enableEdgesRendering ?? (tk.enableEdgesRendering = (0, Vk.g)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);