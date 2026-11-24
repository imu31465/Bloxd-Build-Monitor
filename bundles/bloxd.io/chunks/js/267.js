export const id = 267;
export const ids = [267];
export const modules = {
  41842: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot
    });
    class Ot {}
    Ot.AUTOSAMPLERSUFFIX = "Sampler", Ot.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", Ot.ALPHA_DISABLE = 0, Ot.ALPHA_ADD = 1, Ot.ALPHA_COMBINE = 2, Ot.ALPHA_SUBTRACT = 3, Ot.ALPHA_MULTIPLY = 4, Ot.ALPHA_MAXIMIZED = 5, Ot.ALPHA_ONEONE = 6, Ot.ALPHA_PREMULTIPLIED = 7, Ot.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Ot.ALPHA_INTERPOLATE = 9, Ot.ALPHA_SCREENMODE = 10, Ot.ALPHA_ONEONE_ONEONE = 11, Ot.ALPHA_ALPHATOCOLOR = 12, Ot.ALPHA_REVERSEONEMINUS = 13, Ot.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, Ot.ALPHA_ONEONE_ONEZERO = 15, Ot.ALPHA_EXCLUSION = 16, Ot.ALPHA_LAYER_ACCUMULATE = 17, Ot.ALPHA_MIN = 18, Ot.ALPHA_MAX = 19, Ot.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, Ot.ALPHA_REPLACE_COLOR = 21, Ot.ALPHA_EQUATION_ADD = 0, Ot.ALPHA_EQUATION_SUBSTRACT = 1, Ot.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, Ot.ALPHA_EQUATION_MAX = 3, Ot.ALPHA_EQUATION_MIN = 4, Ot.ALPHA_EQUATION_DARKEN = 5, Ot.DELAYLOADSTATE_NONE = 0, Ot.DELAYLOADSTATE_LOADED = 1, Ot.DELAYLOADSTATE_LOADING = 2, Ot.DELAYLOADSTATE_NOTLOADED = 4, Ot.NEVER = 512, Ot.ALWAYS = 519, Ot.LESS = 513, Ot.EQUAL = 514, Ot.LEQUAL = 515, Ot.GREATER = 516, Ot.GEQUAL = 518, Ot.NOTEQUAL = 517, Ot.KEEP = 7680, Ot.ZERO = 0, Ot.REPLACE = 7681, Ot.INCR = 7682, Ot.DECR = 7683, Ot.INVERT = 5386, Ot.INCR_WRAP = 34055, Ot.DECR_WRAP = 34056, Ot.TEXTURE_CLAMP_ADDRESSMODE = 0, Ot.TEXTURE_WRAP_ADDRESSMODE = 1, Ot.TEXTURE_MIRROR_ADDRESSMODE = 2, Ot.TEXTURE_REPETITION_NONE = 0, Ot.TEXTURE_REPETITION_NOISE_BLEND = 1, Ot.TEXTURE_REPETITION_HEX_TILING = 2, Ot.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, Ot.TEXTURE_REPETITION_VORONOI_BOMBING = 4, Ot.TEXTURE_CREATIONFLAG_STORAGE = 1, Ot.TEXTUREFORMAT_ALPHA = 0, Ot.TEXTUREFORMAT_LUMINANCE = 1, Ot.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Ot.TEXTUREFORMAT_RGB = 4, Ot.TEXTUREFORMAT_RGBA = 5, Ot.TEXTUREFORMAT_RED = 6, Ot.TEXTUREFORMAT_R = 6, Ot.TEXTUREFORMAT_R16_UNORM = 33322, Ot.TEXTUREFORMAT_RG16_UNORM = 33324, Ot.TEXTUREFORMAT_RGB16_UNORM = 32852, Ot.TEXTUREFORMAT_RGBA16_UNORM = 32859, Ot.TEXTUREFORMAT_R16_SNORM = 36760, Ot.TEXTUREFORMAT_RG16_SNORM = 36761, Ot.TEXTUREFORMAT_RGB16_SNORM = 36762, Ot.TEXTUREFORMAT_RGBA16_SNORM = 36763, Ot.TEXTUREFORMAT_RG = 7, Ot.TEXTUREFORMAT_RED_INTEGER = 8, Ot.TEXTUREFORMAT_R_INTEGER = 8, Ot.TEXTUREFORMAT_RG_INTEGER = 9, Ot.TEXTUREFORMAT_RGB_INTEGER = 10, Ot.TEXTUREFORMAT_RGBA_INTEGER = 11, Ot.TEXTUREFORMAT_BGRA = 12, Ot.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, Ot.TEXTUREFORMAT_DEPTH32_FLOAT = 14, Ot.TEXTUREFORMAT_DEPTH16 = 15, Ot.TEXTUREFORMAT_DEPTH24 = 16, Ot.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, Ot.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, Ot.TEXTUREFORMAT_STENCIL8 = 19, Ot.TEXTUREFORMAT_UNDEFINED = 4294967295, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, Ot.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, Ot.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, Ot.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, Ot.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, Ot.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, Ot.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, Ot.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, Ot.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, Ot.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, Ot.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, Ot.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, Ot.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, Ot.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, Ot.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, Ot.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, Ot.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, Ot.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, Ot.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, Ot.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, Ot.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, Ot.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, Ot.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, Ot.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, Ot.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, Ot.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, Ot.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, Ot.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, Ot.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, Ot.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, Ot.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, Ot.TEXTURETYPE_UNSIGNED_BYTE = 0, Ot.TEXTURETYPE_UNSIGNED_INT = 0, Ot.TEXTURETYPE_FLOAT = 1, Ot.TEXTURETYPE_HALF_FLOAT = 2, Ot.TEXTURETYPE_BYTE = 3, Ot.TEXTURETYPE_SHORT = 4, Ot.TEXTURETYPE_UNSIGNED_SHORT = 5, Ot.TEXTURETYPE_INT = 6, Ot.TEXTURETYPE_UNSIGNED_INTEGER = 7, Ot.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Ot.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Ot.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Ot.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Ot.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Ot.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Ot.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Ot.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Ot.TEXTURETYPE_UNDEFINED = 16, Ot.TEXTURE_2D = 3553, Ot.TEXTURE_2D_ARRAY = 35866, Ot.TEXTURE_CUBE_MAP = 34067, Ot.TEXTURE_CUBE_MAP_ARRAY = 3735928559, Ot.TEXTURE_3D = 32879, Ot.TEXTURE_NEAREST_SAMPLINGMODE = 1, Ot.TEXTURE_NEAREST_NEAREST = 1, Ot.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Ot.TEXTURE_LINEAR_LINEAR = 2, Ot.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Ot.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Ot.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Ot.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Ot.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Ot.TEXTURE_NEAREST_LINEAR = 7, Ot.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Ot.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Ot.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Ot.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Ot.TEXTURE_LINEAR_NEAREST = 12, Ot.TEXTURE_EXPLICIT_MODE = 0, Ot.TEXTURE_SPHERICAL_MODE = 1, Ot.TEXTURE_PLANAR_MODE = 2, Ot.TEXTURE_CUBIC_MODE = 3, Ot.TEXTURE_PROJECTION_MODE = 4, Ot.TEXTURE_SKYBOX_MODE = 5, Ot.TEXTURE_INVCUBIC_MODE = 6, Ot.TEXTURE_EQUIRECTANGULAR_MODE = 7, Ot.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Ot.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Ot.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, Ot.TEXTURE_FILTERING_QUALITY_HIGH = 64, Ot.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, Ot.TEXTURE_FILTERING_QUALITY_LOW = 8, Ot.SCALEMODE_FLOOR = 1, Ot.SCALEMODE_NEAREST = 2, Ot.SCALEMODE_CEILING = 3, Ot.MATERIAL_TextureDirtyFlag = 1, Ot.MATERIAL_LightDirtyFlag = 2, Ot.MATERIAL_FresnelDirtyFlag = 4, Ot.MATERIAL_AttributesDirtyFlag = 8, Ot.MATERIAL_MiscDirtyFlag = 16, Ot.MATERIAL_PrePassDirtyFlag = 32, Ot.MATERIAL_ImageProcessingDirtyFlag = 64, Ot.MATERIAL_AllDirtyFlag = 127, Ot.MATERIAL_TriangleFillMode = 0, Ot.MATERIAL_WireFrameFillMode = 1, Ot.MATERIAL_PointFillMode = 2, Ot.MATERIAL_PointListDrawMode = 3, Ot.MATERIAL_LineListDrawMode = 4, Ot.MATERIAL_LineLoopDrawMode = 5, Ot.MATERIAL_LineStripDrawMode = 6, Ot.MATERIAL_TriangleStripDrawMode = 7, Ot.MATERIAL_TriangleFanDrawMode = 8, Ot.MATERIAL_ClockWiseSideOrientation = 0, Ot.MATERIAL_CounterClockWiseSideOrientation = 1, Ot.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, Ot.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, Ot.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, Ot.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, Ot.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, Ot.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, Ot.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, Ot.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, Ot.ACTION_NothingTrigger = 0, Ot.ACTION_OnPickTrigger = 1, Ot.ACTION_OnLeftPickTrigger = 2, Ot.ACTION_OnRightPickTrigger = 3, Ot.ACTION_OnCenterPickTrigger = 4, Ot.ACTION_OnPickDownTrigger = 5, Ot.ACTION_OnDoublePickTrigger = 6, Ot.ACTION_OnPickUpTrigger = 7, Ot.ACTION_OnPickOutTrigger = 16, Ot.ACTION_OnLongPressTrigger = 8, Ot.ACTION_OnPointerOverTrigger = 9, Ot.ACTION_OnPointerOutTrigger = 10, Ot.ACTION_OnEveryFrameTrigger = 11, Ot.ACTION_OnIntersectionEnterTrigger = 12, Ot.ACTION_OnIntersectionExitTrigger = 13, Ot.ACTION_OnKeyDownTrigger = 14, Ot.ACTION_OnKeyUpTrigger = 15, Ot.PARTICLES_BILLBOARDMODE_Y = 2, Ot.PARTICLES_BILLBOARDMODE_ALL = 7, Ot.PARTICLES_BILLBOARDMODE_STRETCHED = 8, Ot.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, Ot.MESHES_CULLINGSTRATEGY_STANDARD = 0, Ot.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, Ot.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, Ot.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, Ot.SCENELOADER_NO_LOGGING = 0, Ot.SCENELOADER_MINIMAL_LOGGING = 1, Ot.SCENELOADER_SUMMARY_LOGGING = 2, Ot.SCENELOADER_DETAILED_LOGGING = 3, Ot.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, Ot.PREPASS_POSITION_TEXTURE_TYPE = 1, Ot.PREPASS_VELOCITY_TEXTURE_TYPE = 2, Ot.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, Ot.PREPASS_COLOR_TEXTURE_TYPE = 4, Ot.PREPASS_DEPTH_TEXTURE_TYPE = 5, Ot.PREPASS_NORMAL_TEXTURE_TYPE = 6, Ot.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, Ot.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, Ot.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, Ot.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, Ot.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, Ot.PREPASS_ALBEDO_TEXTURE_TYPE = 12, Ot.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, Ot.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, Ot.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, Ot.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, Ot.BUFFER_CREATIONFLAG_READ = 1, Ot.BUFFER_CREATIONFLAG_WRITE = 2, Ot.BUFFER_CREATIONFLAG_READWRITE = 3, Ot.BUFFER_CREATIONFLAG_UNIFORM = 4, Ot.BUFFER_CREATIONFLAG_VERTEX = 8, Ot.BUFFER_CREATIONFLAG_INDEX = 16, Ot.BUFFER_CREATIONFLAG_STORAGE = 32, Ot.BUFFER_CREATIONFLAG_INDIRECT = 64, Ot.RENDERPASS_MAIN = 0, Ot.INPUT_ALT_KEY = 18, Ot.INPUT_CTRL_KEY = 17, Ot.INPUT_META_KEY1 = 91, Ot.INPUT_META_KEY2 = 92, Ot.INPUT_META_KEY3 = 93, Ot.INPUT_SHIFT_KEY = 16, Ot.SNAPSHOTRENDERING_STANDARD = 0, Ot.SNAPSHOTRENDERING_FAST = 1, Ot.PERSPECTIVE_CAMERA = 0, Ot.ORTHOGRAPHIC_CAMERA = 1, Ot.FOVMODE_VERTICAL_FIXED = 0, Ot.FOVMODE_HORIZONTAL_FIXED = 1, Ot.RIG_MODE_NONE = 0, Ot.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, Ot.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, Ot.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, Ot.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, Ot.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, Ot.RIG_MODE_VR = 20, Ot.RIG_MODE_CUSTOM = 22, Ot.MAX_SUPPORTED_UV_SETS = 6, Ot.GL_ALPHA_EQUATION_ADD = 32774, Ot.GL_ALPHA_EQUATION_MIN = 32775, Ot.GL_ALPHA_EQUATION_MAX = 32776, Ot.GL_ALPHA_EQUATION_SUBTRACT = 32778, Ot.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, Ot.GL_ALPHA_FUNCTION_SRC = 768, Ot.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, Ot.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, Ot.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, Ot.GL_ALPHA_FUNCTION_DST_ALPHA = 772, Ot.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, Ot.GL_ALPHA_FUNCTION_DST_COLOR = 774, Ot.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, Ot.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, Ot.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, Ot.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, Ot.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, Ot.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, Ot.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, Ot.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, Ot.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, Ot.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, Ot.SnippetUrl = "https://snippet.babylonjs.com", Ot.FOGMODE_NONE = 0, Ot.FOGMODE_EXP = 1, Ot.FOGMODE_EXP2 = 2, Ot.FOGMODE_LINEAR = 3, Ot.BYTE = 5120, Ot.UNSIGNED_BYTE = 5121, Ot.SHORT = 5122, Ot.UNSIGNED_SHORT = 5123, Ot.INT = 5124, Ot.UNSIGNED_INT = 5125, Ot.FLOAT = 5126, Ot.HALF_FLOAT = 5131, Ot.PositionKind = "position", Ot.NormalKind = "normal", Ot.TangentKind = "tangent", Ot.UVKind = "uv", Ot.UV2Kind = "uv2", Ot.UV3Kind = "uv3", Ot.UV4Kind = "uv4", Ot.UV5Kind = "uv5", Ot.UV6Kind = "uv6", Ot.ColorKind = "color", Ot.ColorInstanceKind = "instanceColor", Ot.MatricesIndicesKind = "matricesIndices", Ot.MatricesWeightsKind = "matricesWeights", Ot.MatricesIndicesExtraKind = "matricesIndicesExtra", Ot.MatricesWeightsExtraKind = "matricesWeightsExtra", Ot.ANIMATIONTYPE_FLOAT = 0, Ot.ANIMATIONTYPE_VECTOR3 = 1, Ot.ANIMATIONTYPE_QUATERNION = 2, Ot.ANIMATIONTYPE_MATRIX = 3, Ot.ANIMATIONTYPE_COLOR3 = 4, Ot.ANIMATIONTYPE_COLOR4 = 7, Ot.ANIMATIONTYPE_VECTOR2 = 5, Ot.ANIMATIONTYPE_SIZE = 6, Ot.ShadowMinZ = 0, Ot.ShadowMaxZ = 1e4, Ot.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, Ot.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  41819: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(37336),
      mt = Vt(40445),
      dt = Vt(40418);
    let jt = (() => {
      var tt;
      let et, Vt, jt, Ht, Xt = mt.e,
        Qt = [];
      return tt = class extends Xt {
        constructor() {
          super(...arguments), this._position = (0, Ot.m)(this, Qt), this._needProjectionMatrixCompute = !0, this._viewMatrix = Dt.c.Identity(), this._projectionMatrix = Dt.c.Identity()
        }
        _setPosition(tt) {
          this._position = tt
        }
        get position() {
          return this._position
        }
        set position(tt) {
          this._setPosition(tt)
        }
        _setDirection(tt) {
          this._direction = tt
        }
        get direction() {
          return this._direction
        }
        set direction(tt) {
          this._setDirection(tt)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(tt) {
          this._shadowMinZ = tt, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(tt) {
          this._shadowMaxZ = tt, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = Dt.n.Zero()), Dt.n.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = Dt.n.Zero()), Dt.n.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(tt) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(tt) {
          return this.direction = Dt.n.Normalize(tt.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const tt = Dt.n.Cross(this.direction, dt.b.Y),
            et = Dt.n.Cross(tt, this.direction);
          return Dt.n.RotationFromAxis(tt, et, this.direction)
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
          super._initCache(), this._cache.position = Dt.n.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(tt) {
          return !tt && this.isSynchronized() ? (this._currentRenderId = this.vI().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.rK(this.position), this._worldMatrix || (this._worldMatrix = Dt.c.Identity()), Dt.c.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(tt) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : tt?.minZ || 0
        }
        getDepthMaxZ(tt) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : tt?.maxZ || 1e4
        }
        setShadowProjectionMatrix(tt, et, Vt) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(et, Vt, tt) : this._setDefaultShadowProjectionMatrix(tt, et, Vt), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(tt) {
          const et = Dt.k.uf[0];
          let Vt = this.position;
          this.computeTransformedInformation() && (Vt = this.transformedPosition), Dt.n.NormalizeToRef(this.getShadowDirection(tt), et), 1 === Math.abs(Dt.n.Dot(et, Dt.n.Up())) && (et.z = 1e-13);
          const Ot = Dt.k.uf[1];
          return Vt.addToRef(et, Ot), Dt.c.LookAtLHToRef(Vt, Ot, Dt.n.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(tt, et) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, tt ?? this._viewMatrix, et ?? []), this._projectionMatrix
        }
      }, (() => {
        const Dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xt[Symbol.metadata] ?? null) : void 0;
        et = [(0, qt.M)()], Vt = [(0, qt.M)()], jt = [(0, qt.P)()], Ht = [(0, qt.P)()], (0, Ot.l)(tt, null, et, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: tt => "position" in tt,
            get: tt => tt.position
          },
          metadata: Dt
        }, null, Qt), (0, Ot.l)(tt, null, Vt, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: tt => "direction" in tt,
            get: tt => tt.direction
          },
          metadata: Dt
        }, null, Qt), (0, Ot.l)(tt, null, jt, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: tt => "shadowMinZ" in tt,
            get: tt => tt.shadowMinZ
          },
          metadata: Dt
        }, null, Qt), (0, Ot.l)(tt, null, Ht, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: tt => "shadowMaxZ" in tt,
            get: tt => tt.shadowMaxZ
          },
          metadata: Dt
        }, null, Qt), Dt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Dt
        })
      })(), tt
    })()
  },
  41840: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => qt
    });
    var Ot = Vt(40661);
    class qt extends Ot.f {
      constructor(tt, et, Vt, qt, Dt) {
        let mt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          dt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          jt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          Ht = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Xt = arguments.length > 9 ? arguments[9] : void 0,
          Qt = arguments.length > 10 ? arguments[10] : void 0,
          lt = arguments.length > 11 ? arguments[11] : void 0,
          Et = arguments.length > 12 ? arguments[12] : void 0;
        super(null, Dt, !mt, dt, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, Xt), this.format = qt, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== Ht || (jt = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== Ht || (jt = 1), this._texture = this._engine.createRawTexture(tt, et, Vt, qt, mt, dt, jt, null, Ht, Xt ?? 0, Qt ?? !1, Et), this.wrapU = Ot.f.CLAMP_ADDRESSMODE, this.wrapV = Ot.f.CLAMP_ADDRESSMODE, this._waitingForData = !!lt && !tt)
      }
      update(tt) {
        this.updateMipLevel(tt, 0)
      }
      updateMipLevel(tt, et) {
        this._getEngine().updateRawTexture(this._texture, tt, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, et), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const tt = new qt(null, this.getSize().width, this.getSize().height, this.format, this.vI(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return tt._texture = this._texture, this._texture.incrementReferences(), tt
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(tt, et, Vt, Ot) {
        return new qt(tt, et, Vt, 1, Ot, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(tt, et, Vt, Ot) {
        return new qt(tt, et, Vt, 2, Ot, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(tt, et, Vt, Ot) {
        return new qt(tt, et, Vt, 0, Ot, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(tt, et, Vt, Ot) {
        return new qt(tt, et, Vt, 4, Ot, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(tt, et, Vt, Ot) {
        return new qt(tt, et, Vt, 5, Ot, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(tt, et, Vt, Ot) {
        return new qt(tt, et, Vt, 5, Ot, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(tt, et, Vt, Dt) {
        let mt = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          jt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Ot.f.TRILINEAR_SAMPLINGMODE;
        return new qt(tt, et, Vt, 6, Dt, mt, dt, jt, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(tt, et, Vt, Dt) {
        let mt = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          jt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Ot.f.TRILINEAR_SAMPLINGMODE;
        return new qt(tt, et, Vt, 6, Dt, mt, dt, jt, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  41873: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot.e
    });
    var Ot = Vt(40633);
    (0, Ot.f)()
  },
  41824: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot.b
    });
    var Ot = Vt(40650);
    (0, Ot.e)()
  },
  40650: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => lt,
      e: () => wt
    });
    var Ot, qt, Dt = Vt(37513),
      mt = Vt(40343),
      dt = Vt(40601),
      jt = Vt(40656),
      Ht = Vt(40474),
      Xt = Vt(40659),
      Qt = Vt(40080);
    class lt extends dt.d {
      _isShaderMaterial(tt) {
        return !!tt && "ShaderMaterial" === tt.getClassName()
      }
      constructor(tt) {
        let et = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Ot = arguments.length > 5 ? arguments[5] : void 0,
          qt = arguments.length > 6 ? arguments[6] : void 0,
          dt = arguments.length > 7 ? arguments[7] : void 0;
        super(tt, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, et, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Ot, this.useVertexAlpha = qt, this.color = new Dt.b(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, et && (this.color = et.color.clone(), this.alpha = et.alpha, this.useVertexColor = et.useVertexColor, this.useVertexAlpha = et.useVertexAlpha), this.intersectionThreshold = .1;
        const jt = {
          attributes: [mt.m.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? jt.defines.push("#define VERTEXALPHA") : jt.needAlphaBlending = !1, this.useVertexColor ? (jt.defines.push("#define VERTEXCOLOR"), jt.attributes.push(mt.m.ColorKind)) : (jt.uniforms.push("color"), this._color4 = new Dt.c), dt) this.material = dt;
        else {
          this.vI().Jf().isWebGPU && !lt.ForceGLSL && (this._shaderLanguage = 1), jt.shaderLanguage = this._shaderLanguage, jt.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([Vt.e(349).then((() => Vt(42798))), Vt.e(355).then((() => Vt(42805)))]) : await Promise.all([Vt.e(331).then((() => Vt(42814))), Vt.e(337).then((() => Vt(42818)))])
          };
          const tt = new Xt.o("colorShader", this.vI(), "color", jt, !1);
          tt.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(tt)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(tt) {
        const et = this.material;
        if (et === tt) return;
        const Vt = et && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(tt), Vt && et?.dispose()
      }
      _setInternalMaterial(tt) {
        this._setMaterial(tt), this.material && (this.material.fillMode = Ht.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(tt) {}
      _bind(tt, et) {
        if (!this._geometry) return this;
        const Vt = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(et, Vt) : this._geometry._bind(et, Vt, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: tt,
            g: et,
            b: Vt
          } = this.color;
          this._color4.set(tt, et, Vt, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(tt, et, Vt) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Ot = this.vI().Jf();
        return this._unIndexed ? Ot.drawArraysType(Ht.c.LineListDrawMode, tt.verticesStart, tt.verticesCount, Vt) : Ot.drawElementsType(Ht.c.LineListDrawMode, tt.indexStart, tt.indexCount, Vt), this
      }
      dispose(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || et) && this.material?.dispose(!1, !1, !0), super.dispose(tt)
      }
      clone(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        if (et && void 0 === et._addToSceneRootNodes) {
          const Vt = et;
          return Vt.source = this, new lt(tt, this.vI(), Vt.parent, Vt.source, Vt.doNotCloneChildren)
        }
        return new lt(tt, this.vI(), et, this, Vt)
      }
      createInstance(tt) {
        const et = new Et(tt, this);
        if (this.qL) {
          et.qL = {};
          for (const tt in this.qL) et.qL[tt] = this.qL[tt]
        }
        return et
      }
      serialize(tt) {
        super.serialize(tt), tt.color = this.color.GOt(), tt.alpha = this.alpha
      }
      static Parse(tt, et) {
        const Vt = new lt(tt.name, et);
        return Vt.color = Dt.b.FromArray(tt.color), Vt.alpha = tt.alpha, Vt
      }
    }
    lt.ForceGLSL = !1;
    class Et extends jt.b {
      constructor(tt, et) {
        super(tt, et), this.intersectionThreshold = et.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let ft = !1;

    function wt() {
      ft || (ft = !0, dt.d._LinesMeshParser = (tt, et) => lt.Parse(tt, et))
    }(Ot = lt.prototype).enableEdgesRendering ?? (Ot.enableEdgesRendering = (0, Qt.d)("LinesMesh", "enableEdgesRendering")), (qt = Et.prototype).enableEdgesRendering ?? (qt.enableEdgesRendering = (0, Qt.d)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);