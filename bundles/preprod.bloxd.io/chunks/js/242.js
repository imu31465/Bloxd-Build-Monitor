export const id = 242;
export const ids = [242];
export const modules = {
  40059: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    class Uy {}
    Uy.AUTOSAMPLERSUFFIX = "Sampler", Uy.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", Uy.ALPHA_DISABLE = 0, Uy.ALPHA_ADD = 1, Uy.ALPHA_COMBINE = 2, Uy.ALPHA_SUBTRACT = 3, Uy.ALPHA_MULTIPLY = 4, Uy.ALPHA_MAXIMIZED = 5, Uy.ALPHA_ONEONE = 6, Uy.ALPHA_PREMULTIPLIED = 7, Uy.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Uy.ALPHA_INTERPOLATE = 9, Uy.ALPHA_SCREENMODE = 10, Uy.ALPHA_ONEONE_ONEONE = 11, Uy.ALPHA_ALPHATOCOLOR = 12, Uy.ALPHA_REVERSEONEMINUS = 13, Uy.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, Uy.ALPHA_ONEONE_ONEZERO = 15, Uy.ALPHA_EXCLUSION = 16, Uy.ALPHA_LAYER_ACCUMULATE = 17, Uy.ALPHA_MIN = 18, Uy.ALPHA_MAX = 19, Uy.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, Uy.ALPHA_REPLACE_COLOR = 21, Uy.ALPHA_EQUATION_ADD = 0, Uy.ALPHA_EQUATION_SUBSTRACT = 1, Uy.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, Uy.ALPHA_EQUATION_MAX = 3, Uy.ALPHA_EQUATION_MIN = 4, Uy.ALPHA_EQUATION_DARKEN = 5, Uy.DELAYLOADSTATE_NONE = 0, Uy.DELAYLOADSTATE_LOADED = 1, Uy.DELAYLOADSTATE_LOADING = 2, Uy.DELAYLOADSTATE_NOTLOADED = 4, Uy.NEVER = 512, Uy.ALWAYS = 519, Uy.LESS = 513, Uy.EQUAL = 514, Uy.LEQUAL = 515, Uy.GREATER = 516, Uy.GEQUAL = 518, Uy.NOTEQUAL = 517, Uy.KEEP = 7680, Uy.ZERO = 0, Uy.REPLACE = 7681, Uy.INCR = 7682, Uy.DECR = 7683, Uy.INVERT = 5386, Uy.INCR_WRAP = 34055, Uy.DECR_WRAP = 34056, Uy.TEXTURE_CLAMP_ADDRESSMODE = 0, Uy.TEXTURE_WRAP_ADDRESSMODE = 1, Uy.TEXTURE_MIRROR_ADDRESSMODE = 2, Uy.TEXTURE_REPETITION_NONE = 0, Uy.TEXTURE_REPETITION_NOISE_BLEND = 1, Uy.TEXTURE_REPETITION_HEX_TILING = 2, Uy.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, Uy.TEXTURE_REPETITION_VORONOI_BOMBING = 4, Uy.TEXTURE_CREATIONFLAG_STORAGE = 1, Uy.TEXTUREFORMAT_ALPHA = 0, Uy.TEXTUREFORMAT_LUMINANCE = 1, Uy.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Uy.TEXTUREFORMAT_RGB = 4, Uy.TEXTUREFORMAT_RGBA = 5, Uy.TEXTUREFORMAT_RED = 6, Uy.TEXTUREFORMAT_R = 6, Uy.TEXTUREFORMAT_R16_UNORM = 33322, Uy.TEXTUREFORMAT_RG16_UNORM = 33324, Uy.TEXTUREFORMAT_RGB16_UNORM = 32852, Uy.TEXTUREFORMAT_RGBA16_UNORM = 32859, Uy.TEXTUREFORMAT_R16_SNORM = 36760, Uy.TEXTUREFORMAT_RG16_SNORM = 36761, Uy.TEXTUREFORMAT_RGB16_SNORM = 36762, Uy.TEXTUREFORMAT_RGBA16_SNORM = 36763, Uy.TEXTUREFORMAT_RG = 7, Uy.TEXTUREFORMAT_RED_INTEGER = 8, Uy.TEXTUREFORMAT_R_INTEGER = 8, Uy.TEXTUREFORMAT_RG_INTEGER = 9, Uy.TEXTUREFORMAT_RGB_INTEGER = 10, Uy.TEXTUREFORMAT_RGBA_INTEGER = 11, Uy.TEXTUREFORMAT_BGRA = 12, Uy.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, Uy.TEXTUREFORMAT_DEPTH32_FLOAT = 14, Uy.TEXTUREFORMAT_DEPTH16 = 15, Uy.TEXTUREFORMAT_DEPTH24 = 16, Uy.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, Uy.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, Uy.TEXTUREFORMAT_STENCIL8 = 19, Uy.TEXTUREFORMAT_UNDEFINED = 4294967295, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, Uy.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, Uy.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, Uy.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, Uy.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, Uy.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, Uy.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, Uy.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, Uy.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, Uy.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, Uy.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, Uy.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, Uy.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, Uy.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, Uy.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, Uy.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, Uy.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, Uy.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, Uy.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, Uy.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, Uy.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, Uy.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, Uy.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, Uy.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, Uy.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, Uy.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, Uy.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, Uy.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, Uy.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, Uy.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, Uy.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, Uy.TEXTURETYPE_UNSIGNED_BYTE = 0, Uy.TEXTURETYPE_UNSIGNED_INT = 0, Uy.TEXTURETYPE_FLOAT = 1, Uy.TEXTURETYPE_HALF_FLOAT = 2, Uy.TEXTURETYPE_BYTE = 3, Uy.TEXTURETYPE_SHORT = 4, Uy.TEXTURETYPE_UNSIGNED_SHORT = 5, Uy.TEXTURETYPE_INT = 6, Uy.TEXTURETYPE_UNSIGNED_INTEGER = 7, Uy.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Uy.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Uy.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Uy.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Uy.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Uy.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Uy.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Uy.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Uy.TEXTURETYPE_UNDEFINED = 16, Uy.TEXTURE_2D = 3553, Uy.TEXTURE_2D_ARRAY = 35866, Uy.TEXTURE_CUBE_MAP = 34067, Uy.TEXTURE_CUBE_MAP_ARRAY = 3735928559, Uy.TEXTURE_3D = 32879, Uy.TEXTURE_NEAREST_SAMPLINGMODE = 1, Uy.TEXTURE_NEAREST_NEAREST = 1, Uy.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Uy.TEXTURE_LINEAR_LINEAR = 2, Uy.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Uy.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Uy.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Uy.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Uy.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Uy.TEXTURE_NEAREST_LINEAR = 7, Uy.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Uy.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Uy.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Uy.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Uy.TEXTURE_LINEAR_NEAREST = 12, Uy.TEXTURE_EXPLICIT_MODE = 0, Uy.TEXTURE_SPHERICAL_MODE = 1, Uy.TEXTURE_PLANAR_MODE = 2, Uy.TEXTURE_CUBIC_MODE = 3, Uy.TEXTURE_PROJECTION_MODE = 4, Uy.TEXTURE_SKYBOX_MODE = 5, Uy.TEXTURE_INVCUBIC_MODE = 6, Uy.TEXTURE_EQUIRECTANGULAR_MODE = 7, Uy.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Uy.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Uy.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, Uy.TEXTURE_FILTERING_QUALITY_HIGH = 64, Uy.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, Uy.TEXTURE_FILTERING_QUALITY_LOW = 8, Uy.SCALEMODE_FLOOR = 1, Uy.SCALEMODE_NEAREST = 2, Uy.SCALEMODE_CEILING = 3, Uy.MATERIAL_TextureDirtyFlag = 1, Uy.MATERIAL_LightDirtyFlag = 2, Uy.MATERIAL_FresnelDirtyFlag = 4, Uy.MATERIAL_AttributesDirtyFlag = 8, Uy.MATERIAL_MiscDirtyFlag = 16, Uy.MATERIAL_PrePassDirtyFlag = 32, Uy.MATERIAL_ImageProcessingDirtyFlag = 64, Uy.MATERIAL_AllDirtyFlag = 127, Uy.MATERIAL_TriangleFillMode = 0, Uy.MATERIAL_WireFrameFillMode = 1, Uy.MATERIAL_PointFillMode = 2, Uy.MATERIAL_PointListDrawMode = 3, Uy.MATERIAL_LineListDrawMode = 4, Uy.MATERIAL_LineLoopDrawMode = 5, Uy.MATERIAL_LineStripDrawMode = 6, Uy.MATERIAL_TriangleStripDrawMode = 7, Uy.MATERIAL_TriangleFanDrawMode = 8, Uy.MATERIAL_ClockWiseSideOrientation = 0, Uy.MATERIAL_CounterClockWiseSideOrientation = 1, Uy.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, Uy.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, Uy.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, Uy.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, Uy.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, Uy.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, Uy.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, Uy.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, Uy.ACTION_NothingTrigger = 0, Uy.ACTION_OnPickTrigger = 1, Uy.ACTION_OnLeftPickTrigger = 2, Uy.ACTION_OnRightPickTrigger = 3, Uy.ACTION_OnCenterPickTrigger = 4, Uy.ACTION_OnPickDownTrigger = 5, Uy.ACTION_OnDoublePickTrigger = 6, Uy.ACTION_OnPickUpTrigger = 7, Uy.ACTION_OnPickOutTrigger = 16, Uy.ACTION_OnLongPressTrigger = 8, Uy.ACTION_OnPointerOverTrigger = 9, Uy.ACTION_OnPointerOutTrigger = 10, Uy.ACTION_OnEveryFrameTrigger = 11, Uy.ACTION_OnIntersectionEnterTrigger = 12, Uy.ACTION_OnIntersectionExitTrigger = 13, Uy.ACTION_OnKeyDownTrigger = 14, Uy.ACTION_OnKeyUpTrigger = 15, Uy.PARTICLES_BILLBOARDMODE_Y = 2, Uy.PARTICLES_BILLBOARDMODE_ALL = 7, Uy.PARTICLES_BILLBOARDMODE_STRETCHED = 8, Uy.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, Uy.MESHES_CULLINGSTRATEGY_STANDARD = 0, Uy.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, Uy.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, Uy.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, Uy.SCENELOADER_NO_LOGGING = 0, Uy.SCENELOADER_MINIMAL_LOGGING = 1, Uy.SCENELOADER_SUMMARY_LOGGING = 2, Uy.SCENELOADER_DETAILED_LOGGING = 3, Uy.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, Uy.PREPASS_POSITION_TEXTURE_TYPE = 1, Uy.PREPASS_VELOCITY_TEXTURE_TYPE = 2, Uy.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, Uy.PREPASS_COLOR_TEXTURE_TYPE = 4, Uy.PREPASS_DEPTH_TEXTURE_TYPE = 5, Uy.PREPASS_NORMAL_TEXTURE_TYPE = 6, Uy.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, Uy.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, Uy.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, Uy.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, Uy.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, Uy.PREPASS_ALBEDO_TEXTURE_TYPE = 12, Uy.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, Uy.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, Uy.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, Uy.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, Uy.BUFFER_CREATIONFLAG_READ = 1, Uy.BUFFER_CREATIONFLAG_WRITE = 2, Uy.BUFFER_CREATIONFLAG_READWRITE = 3, Uy.BUFFER_CREATIONFLAG_UNIFORM = 4, Uy.BUFFER_CREATIONFLAG_VERTEX = 8, Uy.BUFFER_CREATIONFLAG_INDEX = 16, Uy.BUFFER_CREATIONFLAG_STORAGE = 32, Uy.BUFFER_CREATIONFLAG_INDIRECT = 64, Uy.RENDERPASS_MAIN = 0, Uy.INPUT_ALT_KEY = 18, Uy.INPUT_CTRL_KEY = 17, Uy.INPUT_META_KEY1 = 91, Uy.INPUT_META_KEY2 = 92, Uy.INPUT_META_KEY3 = 93, Uy.INPUT_SHIFT_KEY = 16, Uy.SNAPSHOTRENDERING_STANDARD = 0, Uy.SNAPSHOTRENDERING_FAST = 1, Uy.PERSPECTIVE_CAMERA = 0, Uy.ORTHOGRAPHIC_CAMERA = 1, Uy.FOVMODE_VERTICAL_FIXED = 0, Uy.FOVMODE_HORIZONTAL_FIXED = 1, Uy.RIG_MODE_NONE = 0, Uy.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, Uy.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, Uy.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, Uy.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, Uy.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, Uy.RIG_MODE_VR = 20, Uy.RIG_MODE_CUSTOM = 22, Uy.MAX_SUPPORTED_UV_SETS = 6, Uy.GL_ALPHA_EQUATION_ADD = 32774, Uy.GL_ALPHA_EQUATION_MIN = 32775, Uy.GL_ALPHA_EQUATION_MAX = 32776, Uy.GL_ALPHA_EQUATION_SUBTRACT = 32778, Uy.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, Uy.GL_ALPHA_FUNCTION_SRC = 768, Uy.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, Uy.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, Uy.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, Uy.GL_ALPHA_FUNCTION_DST_ALPHA = 772, Uy.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, Uy.GL_ALPHA_FUNCTION_DST_COLOR = 774, Uy.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, Uy.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, Uy.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, Uy.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, Uy.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, Uy.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, Uy.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, Uy.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, Uy.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, Uy.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, Uy.SnippetUrl = "https://snippet.babylonjs.com", Uy.FOGMODE_NONE = 0, Uy.FOGMODE_EXP = 1, Uy.FOGMODE_EXP2 = 2, Uy.FOGMODE_LINEAR = 3, Uy.BYTE = 5120, Uy.UNSIGNED_BYTE = 5121, Uy.SHORT = 5122, Uy.UNSIGNED_SHORT = 5123, Uy.INT = 5124, Uy.UNSIGNED_INT = 5125, Uy.FLOAT = 5126, Uy.HALF_FLOAT = 5131, Uy.PositionKind = "position", Uy.NormalKind = "normal", Uy.TangentKind = "tangent", Uy.UVKind = "uv", Uy.UV2Kind = "uv2", Uy.UV3Kind = "uv3", Uy.UV4Kind = "uv4", Uy.UV5Kind = "uv5", Uy.UV6Kind = "uv6", Uy.ColorKind = "color", Uy.ColorInstanceKind = "instanceColor", Uy.MatricesIndicesKind = "matricesIndices", Uy.MatricesWeightsKind = "matricesWeights", Uy.MatricesIndicesExtraKind = "matricesIndicesExtra", Uy.MatricesWeightsExtraKind = "matricesWeightsExtra", Uy.ANIMATIONTYPE_FLOAT = 0, Uy.ANIMATIONTYPE_VECTOR3 = 1, Uy.ANIMATIONTYPE_QUATERNION = 2, Uy.ANIMATIONTYPE_MATRIX = 3, Uy.ANIMATIONTYPE_COLOR3 = 4, Uy.ANIMATIONTYPE_COLOR4 = 7, Uy.ANIMATIONTYPE_VECTOR2 = 5, Uy.ANIMATIONTYPE_SIZE = 6, Uy.ShadowMinZ = 0, Uy.ShadowMaxZ = 1e4, Uy.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, Uy.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  40028: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Py
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(35861),
      Zy = Wy(38742),
      cb = Wy(38706);
    let Py = (() => {
      var yb;
      let bb, Wy, Py, oy, By = Zy.d,
        Ky = [];
      return yb = class extends By {
        constructor() {
          super(...arguments), this._position = (0, Uy.l)(this, Ky), this._needProjectionMatrixCompute = !0, this._viewMatrix = fy.c.Identity(), this._projectionMatrix = fy.c.Identity()
        }
        _setPosition(yb) {
          this._position = yb
        }
        get position() {
          return this._position
        }
        set position(yb) {
          this._setPosition(yb)
        }
        _setDirection(yb) {
          this._direction = yb
        }
        get direction() {
          return this._direction
        }
        set direction(yb) {
          this._setDirection(yb)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(yb) {
          this._shadowMinZ = yb, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(yb) {
          this._shadowMaxZ = yb, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = fy.n.Zero()), fy.n.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = fy.n.Zero()), fy.n.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(yb) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(yb) {
          return this.direction = fy.n.Normalize(yb.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const yb = fy.n.Cross(this.direction, cb.d.Y),
            bb = fy.n.Cross(yb, this.direction);
          return fy.n.RotationFromAxis(yb, bb, this.direction)
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
          super._initCache(), this._cache.position = fy.n.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(yb) {
          return !yb && this.isSynchronized() ? (this._currentRenderId = this.kWy().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.Coy(this.position), this._worldMatrix || (this._worldMatrix = fy.c.Identity()), fy.c.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(yb) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : yb?.minZ || 0
        }
        getDepthMaxZ(yb) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : yb?.maxZ || 1e4
        }
        setShadowProjectionMatrix(yb, bb, Wy) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(bb, Wy, yb) : this._setDefaultShadowProjectionMatrix(yb, bb, Wy), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(yb) {
          const bb = fy.j.dU[0];
          let Wy = this.position;
          this.computeTransformedInformation() && (Wy = this.transformedPosition), fy.n.NormalizeToRef(this.getShadowDirection(yb), bb), 1 === Math.abs(fy.n.Dot(bb, fy.n.Up())) && (bb.z = 1e-13);
          const Uy = fy.j.dU[1];
          return Wy.addToRef(bb, Uy), fy.c.LookAtLHToRef(Wy, Uy, fy.n.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(yb, bb) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, yb ?? this._viewMatrix, bb ?? []), this._projectionMatrix
        }
      }, (() => {
        const fy = "function" === typeof Symbol && Symbol.metadata ? Object.create(By[Symbol.metadata] ?? null) : void 0;
        bb = [(0, hy.P)()], Wy = [(0, hy.P)()], Py = [(0, hy.T)()], oy = [(0, hy.T)()], (0, Uy.j)(yb, null, bb, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: yb => "position" in yb,
            get: yb => yb.position
          },
          metadata: fy
        }, null, Ky), (0, Uy.j)(yb, null, Wy, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: yb => "direction" in yb,
            get: yb => yb.direction
          },
          metadata: fy
        }, null, Ky), (0, Uy.j)(yb, null, Py, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: yb => "shadowMinZ" in yb,
            get: yb => yb.shadowMinZ
          },
          metadata: fy
        }, null, Ky), (0, Uy.j)(yb, null, oy, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: yb => "shadowMaxZ" in yb,
            get: yb => yb.shadowMaxZ
          },
          metadata: fy
        }, null, Ky), fy && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fy
        })
      })(), yb
    })()
  },
  40051: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy
    });
    var Uy = Wy(38989);
    class hy extends Uy.f {
      constructor(yb, bb, Wy, hy, fy) {
        let Zy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          cb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Py = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          oy = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          By = arguments.length > 9 ? arguments[9] : void 0,
          Ky = arguments.length > 10 ? arguments[10] : void 0,
          ey = arguments.length > 11 ? arguments[11] : void 0,
          qb = arguments.length > 12 ? arguments[12] : void 0;
        super(null, fy, !Zy, cb, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, By), this.format = hy, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== oy || (Py = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== oy || (Py = 1), this._texture = this._engine.createRawTexture(yb, bb, Wy, hy, Zy, cb, Py, null, oy, By ?? 0, Ky ?? !1, qb), this.wrapU = Uy.f.CLAMP_ADDRESSMODE, this.wrapV = Uy.f.CLAMP_ADDRESSMODE, this._waitingForData = !!ey && !yb)
      }
      update(yb) {
        this.updateMipLevel(yb, 0)
      }
      updateMipLevel(yb, bb) {
        this._getEngine().updateRawTexture(this._texture, yb, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, bb), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const yb = new hy(null, this.getSize().width, this.getSize().height, this.format, this.kWy(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return yb._texture = this._texture, this._texture.incrementReferences(), yb
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(yb, bb, Wy, Uy) {
        return new hy(yb, bb, Wy, 1, Uy, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(yb, bb, Wy, Uy) {
        return new hy(yb, bb, Wy, 2, Uy, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(yb, bb, Wy, Uy) {
        return new hy(yb, bb, Wy, 0, Uy, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(yb, bb, Wy, Uy) {
        return new hy(yb, bb, Wy, 4, Uy, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(yb, bb, Wy, Uy) {
        return new hy(yb, bb, Wy, 5, Uy, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(yb, bb, Wy, Uy) {
        return new hy(yb, bb, Wy, 5, Uy, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(yb, bb, Wy, fy) {
        let Zy = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          cb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Py = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Uy.f.TRILINEAR_SAMPLINGMODE;
        return new hy(yb, bb, Wy, 6, fy, Zy, cb, Py, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(yb, bb, Wy, fy) {
        let Zy = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          cb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Py = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Uy.f.TRILINEAR_SAMPLINGMODE;
        return new hy(yb, bb, Wy, 6, fy, Zy, cb, Py, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  40099: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy.b
    });
    var Uy = Wy(38944);
    (0, Uy.c)()
  },
  40034: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy.b
    });
    var Uy = Wy(38968);
    (0, Uy.d)()
  },
  38968: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => ey,
      d: () => Sy
    });
    var Uy, hy, fy = Wy(35919),
      Zy = Wy(38620),
      cb = Wy(38902),
      Py = Wy(38976),
      oy = Wy(38782),
      By = Wy(38983),
      Ky = Wy(38347);
    class ey extends cb.c {
      _isShaderMaterial(yb) {
        return !!yb && "ShaderMaterial" === yb.getClassName()
      }
      constructor(yb) {
        let bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Uy = arguments.length > 5 ? arguments[5] : void 0,
          hy = arguments.length > 6 ? arguments[6] : void 0,
          cb = arguments.length > 7 ? arguments[7] : void 0;
        super(yb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, bb, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Uy, this.useVertexAlpha = hy, this.color = new fy.d(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, bb && (this.color = bb.color.clone(), this.alpha = bb.alpha, this.useVertexColor = bb.useVertexColor, this.useVertexAlpha = bb.useVertexAlpha), this.intersectionThreshold = .1;
        const Py = {
          attributes: [Zy.k.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Py.defines.push("#define VERTEXALPHA") : Py.needAlphaBlending = !1, this.useVertexColor ? (Py.defines.push("#define VERTEXCOLOR"), Py.attributes.push(Zy.k.ColorKind)) : (Py.uniforms.push("color"), this._color4 = new fy.e), cb) this.material = cb;
        else {
          this.kWy().xh().isWebGPU && !ey.ForceGLSL && (this._shaderLanguage = 1), Py.shaderLanguage = this._shaderLanguage, Py.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([Wy.e(322).then((() => Wy(41039))), Wy.e(328).then((() => Wy(41044)))]) : await Promise.all([Wy.e(304).then((() => Wy(41049))), Wy.e(310).then((() => Wy(41056)))])
          };
          const yb = new By.s("colorShader", this.kWy(), "color", Py, !1);
          yb.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(yb)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(yb) {
        const bb = this.material;
        if (bb === yb) return;
        const Wy = bb && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(yb), Wy && bb?.dispose()
      }
      _setInternalMaterial(yb) {
        this._setMaterial(yb), this.material && (this.material.fillMode = oy.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(yb) {}
      _bind(yb, bb) {
        if (!this._geometry) return this;
        const Wy = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(bb, Wy) : this._geometry._bind(bb, Wy, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: yb,
            g: bb,
            b: Wy
          } = this.color;
          this._color4.set(yb, bb, Wy, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(yb, bb, Wy) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Uy = this.kWy().xh();
        return this._unIndexed ? Uy.drawArraysType(oy.e.LineListDrawMode, yb.verticesStart, yb.verticesCount, Wy) : Uy.drawElementsType(oy.e.LineListDrawMode, yb.indexStart, yb.indexCount, Wy), this
      }
      dispose(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || bb) && this.material?.dispose(!1, !1, !0), super.dispose(yb)
      }
      clone(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        if (bb && void 0 === bb._addToSceneRootNodes) {
          const Wy = bb;
          return Wy.source = this, new ey(yb, this.kWy(), Wy.parent, Wy.source, Wy.doNotCloneChildren)
        }
        return new ey(yb, this.kWy(), bb, this, Wy)
      }
      createInstance(yb) {
        const bb = new qb(yb, this);
        if (this.BWy) {
          bb.BWy = {};
          for (const yb in this.BWy) bb.BWy[yb] = this.BWy[yb]
        }
        return bb
      }
      serialize(yb) {
        super.serialize(yb), yb.color = this.color.hBy(), yb.alpha = this.alpha
      }
      static Parse(yb, bb) {
        const Wy = new ey(yb.name, bb);
        return Wy.color = fy.d.FromArray(yb.color), Wy.alpha = yb.alpha, Wy
      }
    }
    ey.ForceGLSL = !1;
    class qb extends Py.d {
      constructor(yb, bb) {
        super(yb, bb), this.intersectionThreshold = bb.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let sy = !1;

    function Sy() {
      sy || (sy = !0, cb.c._LinesMeshParser = (yb, bb) => ey.Parse(yb, bb))
    }(Uy = ey.prototype).enableEdgesRendering ?? (Uy.enableEdgesRendering = (0, Ky.f)("LinesMesh", "enableEdgesRendering")), (hy = qb.prototype).enableEdgesRendering ?? (hy.enableEdgesRendering = (0, Ky.f)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);