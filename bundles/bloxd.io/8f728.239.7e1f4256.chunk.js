export const id = 239;
export const ids = [239];
export const modules = {
  39555: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc
    });
    class Vc {}
    Vc.AUTOSAMPLERSUFFIX = "Sampler", Vc.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", Vc.ALPHA_DISABLE = 0, Vc.ALPHA_ADD = 1, Vc.ALPHA_COMBINE = 2, Vc.ALPHA_SUBTRACT = 3, Vc.ALPHA_MULTIPLY = 4, Vc.ALPHA_MAXIMIZED = 5, Vc.ALPHA_ONEONE = 6, Vc.ALPHA_PREMULTIPLIED = 7, Vc.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Vc.ALPHA_INTERPOLATE = 9, Vc.ALPHA_SCREENMODE = 10, Vc.ALPHA_ONEONE_ONEONE = 11, Vc.ALPHA_ALPHATOCOLOR = 12, Vc.ALPHA_REVERSEONEMINUS = 13, Vc.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, Vc.ALPHA_ONEONE_ONEZERO = 15, Vc.ALPHA_EXCLUSION = 16, Vc.ALPHA_LAYER_ACCUMULATE = 17, Vc.ALPHA_MIN = 18, Vc.ALPHA_MAX = 19, Vc.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, Vc.ALPHA_REPLACE_COLOR = 21, Vc.ALPHA_EQUATION_ADD = 0, Vc.ALPHA_EQUATION_SUBSTRACT = 1, Vc.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, Vc.ALPHA_EQUATION_MAX = 3, Vc.ALPHA_EQUATION_MIN = 4, Vc.ALPHA_EQUATION_DARKEN = 5, Vc.DELAYLOADSTATE_NONE = 0, Vc.DELAYLOADSTATE_LOADED = 1, Vc.DELAYLOADSTATE_LOADING = 2, Vc.DELAYLOADSTATE_NOTLOADED = 4, Vc.NEVER = 512, Vc.ALWAYS = 519, Vc.LESS = 513, Vc.EQUAL = 514, Vc.LEQUAL = 515, Vc.GREATER = 516, Vc.GEQUAL = 518, Vc.NOTEQUAL = 517, Vc.KEEP = 7680, Vc.ZERO = 0, Vc.REPLACE = 7681, Vc.INCR = 7682, Vc.DECR = 7683, Vc.INVERT = 5386, Vc.INCR_WRAP = 34055, Vc.DECR_WRAP = 34056, Vc.TEXTURE_CLAMP_ADDRESSMODE = 0, Vc.TEXTURE_WRAP_ADDRESSMODE = 1, Vc.TEXTURE_MIRROR_ADDRESSMODE = 2, Vc.TEXTURE_REPETITION_NONE = 0, Vc.TEXTURE_REPETITION_NOISE_BLEND = 1, Vc.TEXTURE_REPETITION_HEX_TILING = 2, Vc.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, Vc.TEXTURE_REPETITION_VORONOI_BOMBING = 4, Vc.TEXTURE_CREATIONFLAG_STORAGE = 1, Vc.TEXTUREFORMAT_ALPHA = 0, Vc.TEXTUREFORMAT_LUMINANCE = 1, Vc.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Vc.TEXTUREFORMAT_RGB = 4, Vc.TEXTUREFORMAT_RGBA = 5, Vc.TEXTUREFORMAT_RED = 6, Vc.TEXTUREFORMAT_R = 6, Vc.TEXTUREFORMAT_R16_UNORM = 33322, Vc.TEXTUREFORMAT_RG16_UNORM = 33324, Vc.TEXTUREFORMAT_RGB16_UNORM = 32852, Vc.TEXTUREFORMAT_RGBA16_UNORM = 32859, Vc.TEXTUREFORMAT_R16_SNORM = 36760, Vc.TEXTUREFORMAT_RG16_SNORM = 36761, Vc.TEXTUREFORMAT_RGB16_SNORM = 36762, Vc.TEXTUREFORMAT_RGBA16_SNORM = 36763, Vc.TEXTUREFORMAT_RG = 7, Vc.TEXTUREFORMAT_RED_INTEGER = 8, Vc.TEXTUREFORMAT_R_INTEGER = 8, Vc.TEXTUREFORMAT_RG_INTEGER = 9, Vc.TEXTUREFORMAT_RGB_INTEGER = 10, Vc.TEXTUREFORMAT_RGBA_INTEGER = 11, Vc.TEXTUREFORMAT_BGRA = 12, Vc.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, Vc.TEXTUREFORMAT_DEPTH32_FLOAT = 14, Vc.TEXTUREFORMAT_DEPTH16 = 15, Vc.TEXTUREFORMAT_DEPTH24 = 16, Vc.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, Vc.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, Vc.TEXTUREFORMAT_STENCIL8 = 19, Vc.TEXTUREFORMAT_UNDEFINED = 4294967295, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, Vc.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, Vc.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, Vc.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, Vc.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, Vc.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, Vc.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, Vc.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, Vc.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, Vc.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, Vc.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, Vc.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, Vc.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, Vc.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, Vc.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, Vc.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, Vc.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, Vc.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, Vc.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, Vc.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, Vc.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, Vc.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, Vc.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, Vc.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, Vc.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, Vc.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, Vc.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, Vc.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, Vc.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, Vc.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, Vc.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, Vc.TEXTURETYPE_UNSIGNED_BYTE = 0, Vc.TEXTURETYPE_UNSIGNED_INT = 0, Vc.TEXTURETYPE_FLOAT = 1, Vc.TEXTURETYPE_HALF_FLOAT = 2, Vc.TEXTURETYPE_BYTE = 3, Vc.TEXTURETYPE_SHORT = 4, Vc.TEXTURETYPE_UNSIGNED_SHORT = 5, Vc.TEXTURETYPE_INT = 6, Vc.TEXTURETYPE_UNSIGNED_INTEGER = 7, Vc.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Vc.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Vc.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Vc.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Vc.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Vc.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Vc.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Vc.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Vc.TEXTURETYPE_UNDEFINED = 16, Vc.TEXTURE_2D = 3553, Vc.TEXTURE_2D_ARRAY = 35866, Vc.TEXTURE_CUBE_MAP = 34067, Vc.TEXTURE_CUBE_MAP_ARRAY = 3735928559, Vc.TEXTURE_3D = 32879, Vc.TEXTURE_NEAREST_SAMPLINGMODE = 1, Vc.TEXTURE_NEAREST_NEAREST = 1, Vc.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Vc.TEXTURE_LINEAR_LINEAR = 2, Vc.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Vc.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Vc.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Vc.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Vc.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Vc.TEXTURE_NEAREST_LINEAR = 7, Vc.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Vc.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Vc.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Vc.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Vc.TEXTURE_LINEAR_NEAREST = 12, Vc.TEXTURE_EXPLICIT_MODE = 0, Vc.TEXTURE_SPHERICAL_MODE = 1, Vc.TEXTURE_PLANAR_MODE = 2, Vc.TEXTURE_CUBIC_MODE = 3, Vc.TEXTURE_PROJECTION_MODE = 4, Vc.TEXTURE_SKYBOX_MODE = 5, Vc.TEXTURE_INVCUBIC_MODE = 6, Vc.TEXTURE_EQUIRECTANGULAR_MODE = 7, Vc.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Vc.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Vc.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, Vc.TEXTURE_FILTERING_QUALITY_HIGH = 64, Vc.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, Vc.TEXTURE_FILTERING_QUALITY_LOW = 8, Vc.SCALEMODE_FLOOR = 1, Vc.SCALEMODE_NEAREST = 2, Vc.SCALEMODE_CEILING = 3, Vc.MATERIAL_TextureDirtyFlag = 1, Vc.MATERIAL_LightDirtyFlag = 2, Vc.MATERIAL_FresnelDirtyFlag = 4, Vc.MATERIAL_AttributesDirtyFlag = 8, Vc.MATERIAL_MiscDirtyFlag = 16, Vc.MATERIAL_PrePassDirtyFlag = 32, Vc.MATERIAL_ImageProcessingDirtyFlag = 64, Vc.MATERIAL_AllDirtyFlag = 127, Vc.MATERIAL_TriangleFillMode = 0, Vc.MATERIAL_WireFrameFillMode = 1, Vc.MATERIAL_PointFillMode = 2, Vc.MATERIAL_PointListDrawMode = 3, Vc.MATERIAL_LineListDrawMode = 4, Vc.MATERIAL_LineLoopDrawMode = 5, Vc.MATERIAL_LineStripDrawMode = 6, Vc.MATERIAL_TriangleStripDrawMode = 7, Vc.MATERIAL_TriangleFanDrawMode = 8, Vc.MATERIAL_ClockWiseSideOrientation = 0, Vc.MATERIAL_CounterClockWiseSideOrientation = 1, Vc.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, Vc.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, Vc.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, Vc.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, Vc.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, Vc.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, Vc.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, Vc.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, Vc.ACTION_NothingTrigger = 0, Vc.ACTION_OnPickTrigger = 1, Vc.ACTION_OnLeftPickTrigger = 2, Vc.ACTION_OnRightPickTrigger = 3, Vc.ACTION_OnCenterPickTrigger = 4, Vc.ACTION_OnPickDownTrigger = 5, Vc.ACTION_OnDoublePickTrigger = 6, Vc.ACTION_OnPickUpTrigger = 7, Vc.ACTION_OnPickOutTrigger = 16, Vc.ACTION_OnLongPressTrigger = 8, Vc.ACTION_OnPointerOverTrigger = 9, Vc.ACTION_OnPointerOutTrigger = 10, Vc.ACTION_OnEveryFrameTrigger = 11, Vc.ACTION_OnIntersectionEnterTrigger = 12, Vc.ACTION_OnIntersectionExitTrigger = 13, Vc.ACTION_OnKeyDownTrigger = 14, Vc.ACTION_OnKeyUpTrigger = 15, Vc.PARTICLES_BILLBOARDMODE_Y = 2, Vc.PARTICLES_BILLBOARDMODE_ALL = 7, Vc.PARTICLES_BILLBOARDMODE_STRETCHED = 8, Vc.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, Vc.MESHES_CULLINGSTRATEGY_STANDARD = 0, Vc.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, Vc.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, Vc.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, Vc.SCENELOADER_NO_LOGGING = 0, Vc.SCENELOADER_MINIMAL_LOGGING = 1, Vc.SCENELOADER_SUMMARY_LOGGING = 2, Vc.SCENELOADER_DETAILED_LOGGING = 3, Vc.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, Vc.PREPASS_POSITION_TEXTURE_TYPE = 1, Vc.PREPASS_VELOCITY_TEXTURE_TYPE = 2, Vc.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, Vc.PREPASS_COLOR_TEXTURE_TYPE = 4, Vc.PREPASS_DEPTH_TEXTURE_TYPE = 5, Vc.PREPASS_NORMAL_TEXTURE_TYPE = 6, Vc.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, Vc.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, Vc.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, Vc.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, Vc.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, Vc.PREPASS_ALBEDO_TEXTURE_TYPE = 12, Vc.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, Vc.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, Vc.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, Vc.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, Vc.BUFFER_CREATIONFLAG_READ = 1, Vc.BUFFER_CREATIONFLAG_WRITE = 2, Vc.BUFFER_CREATIONFLAG_READWRITE = 3, Vc.BUFFER_CREATIONFLAG_UNIFORM = 4, Vc.BUFFER_CREATIONFLAG_VERTEX = 8, Vc.BUFFER_CREATIONFLAG_INDEX = 16, Vc.BUFFER_CREATIONFLAG_STORAGE = 32, Vc.BUFFER_CREATIONFLAG_INDIRECT = 64, Vc.RENDERPASS_MAIN = 0, Vc.INPUT_ALT_KEY = 18, Vc.INPUT_CTRL_KEY = 17, Vc.INPUT_META_KEY1 = 91, Vc.INPUT_META_KEY2 = 92, Vc.INPUT_META_KEY3 = 93, Vc.INPUT_SHIFT_KEY = 16, Vc.SNAPSHOTRENDERING_STANDARD = 0, Vc.SNAPSHOTRENDERING_FAST = 1, Vc.PERSPECTIVE_CAMERA = 0, Vc.ORTHOGRAPHIC_CAMERA = 1, Vc.FOVMODE_VERTICAL_FIXED = 0, Vc.FOVMODE_HORIZONTAL_FIXED = 1, Vc.RIG_MODE_NONE = 0, Vc.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, Vc.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, Vc.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, Vc.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, Vc.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, Vc.RIG_MODE_VR = 20, Vc.RIG_MODE_CUSTOM = 22, Vc.MAX_SUPPORTED_UV_SETS = 6, Vc.GL_ALPHA_EQUATION_ADD = 32774, Vc.GL_ALPHA_EQUATION_MIN = 32775, Vc.GL_ALPHA_EQUATION_MAX = 32776, Vc.GL_ALPHA_EQUATION_SUBTRACT = 32778, Vc.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, Vc.GL_ALPHA_FUNCTION_SRC = 768, Vc.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, Vc.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, Vc.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, Vc.GL_ALPHA_FUNCTION_DST_ALPHA = 772, Vc.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, Vc.GL_ALPHA_FUNCTION_DST_COLOR = 774, Vc.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, Vc.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, Vc.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, Vc.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, Vc.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, Vc.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, Vc.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, Vc.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, Vc.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, Vc.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, Vc.SnippetUrl = "https://snippet.babylonjs.com", Vc.FOGMODE_NONE = 0, Vc.FOGMODE_EXP = 1, Vc.FOGMODE_EXP2 = 2, Vc.FOGMODE_LINEAR = 3, Vc.BYTE = 5120, Vc.UNSIGNED_BYTE = 5121, Vc.SHORT = 5122, Vc.UNSIGNED_SHORT = 5123, Vc.INT = 5124, Vc.UNSIGNED_INT = 5125, Vc.FLOAT = 5126, Vc.HALF_FLOAT = 5131, Vc.PositionKind = "position", Vc.NormalKind = "normal", Vc.TangentKind = "tangent", Vc.UVKind = "uv", Vc.UV2Kind = "uv2", Vc.UV3Kind = "uv3", Vc.UV4Kind = "uv4", Vc.UV5Kind = "uv5", Vc.UV6Kind = "uv6", Vc.ColorKind = "color", Vc.ColorInstanceKind = "instanceColor", Vc.MatricesIndicesKind = "matricesIndices", Vc.MatricesWeightsKind = "matricesWeights", Vc.MatricesIndicesExtraKind = "matricesIndicesExtra", Vc.MatricesWeightsExtraKind = "matricesWeightsExtra", Vc.ANIMATIONTYPE_FLOAT = 0, Vc.ANIMATIONTYPE_VECTOR3 = 1, Vc.ANIMATIONTYPE_QUATERNION = 2, Vc.ANIMATIONTYPE_MATRIX = 3, Vc.ANIMATIONTYPE_COLOR3 = 4, Vc.ANIMATIONTYPE_COLOR4 = 7, Vc.ANIMATIONTYPE_VECTOR2 = 5, Vc.ANIMATIONTYPE_SIZE = 6, Vc.ShadowMinZ = 0, Vc.ShadowMaxZ = 1e4, Vc.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, Vc.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  39527: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Mc
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(35756),
      uc = nc(38291),
      sc = nc(38264);
    let Mc = (() => {
      var cB;
      let Bc, nc, Mc, Pc, qB = uc.b,
        Oc = [];
      return cB = class extends qB {
        constructor() {
          super(...arguments), this._position = (0, Vc.k)(this, Oc), this._needProjectionMatrixCompute = !0, this._viewMatrix = rB.d.Identity(), this._projectionMatrix = rB.d.Identity()
        }
        _setPosition(cB) {
          this._position = cB
        }
        get position() {
          return this._position
        }
        set position(cB) {
          this._setPosition(cB)
        }
        _setDirection(cB) {
          this._direction = cB
        }
        get direction() {
          return this._direction
        }
        set direction(cB) {
          this._setDirection(cB)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(cB) {
          this._shadowMinZ = cB, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(cB) {
          this._shadowMaxZ = cB, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = rB.p.Zero()), rB.p.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = rB.p.Zero()), rB.p.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(cB) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(cB) {
          return this.direction = rB.p.Normalize(cB.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const cB = rB.p.Cross(this.direction, sc.e.Y),
            Bc = rB.p.Cross(cB, this.direction);
          return rB.p.RotationFromAxis(cB, Bc, this.direction)
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
          super._initCache(), this._cache.position = rB.p.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(cB) {
          return !cB && this.isSynchronized() ? (this._currentRenderId = this.knc().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.qqc(this.position), this._worldMatrix || (this._worldMatrix = rB.d.Identity()), rB.d.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(cB) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : cB?.minZ || 0
        }
        getDepthMaxZ(cB) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : cB?.maxZ || 1e4
        }
        setShadowProjectionMatrix(cB, Bc, nc) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(Bc, nc, cB) : this._setDefaultShadowProjectionMatrix(cB, Bc, nc), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(cB) {
          const Bc = rB.i.KV[0];
          let nc = this.position;
          this.computeTransformedInformation() && (nc = this.transformedPosition), rB.p.NormalizeToRef(this.getShadowDirection(cB), Bc), 1 === Math.abs(rB.p.Dot(Bc, rB.p.Up())) && (Bc.z = 1e-13);
          const Vc = rB.i.KV[1];
          return nc.addToRef(Bc, Vc), rB.d.LookAtLHToRef(nc, Vc, rB.p.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(cB, Bc) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, cB ?? this._viewMatrix, Bc ?? []), this._projectionMatrix
        }
      }, (() => {
        const rB = "function" === typeof Symbol && Symbol.metadata ? Object.create(qB[Symbol.metadata] ?? null) : void 0;
        Bc = [(0, Ic.L)()], nc = [(0, Ic.L)()], Mc = [(0, Ic.M)()], Pc = [(0, Ic.M)()], (0, Vc.g)(cB, null, Bc, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: cB => "position" in cB,
            get: cB => cB.position
          },
          metadata: rB
        }, null, Oc), (0, Vc.g)(cB, null, nc, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: cB => "direction" in cB,
            get: cB => cB.direction
          },
          metadata: rB
        }, null, Oc), (0, Vc.g)(cB, null, Mc, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: cB => "shadowMinZ" in cB,
            get: cB => cB.shadowMinZ
          },
          metadata: rB
        }, null, Oc), (0, Vc.g)(cB, null, Pc, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: cB => "shadowMaxZ" in cB,
            get: cB => cB.shadowMaxZ
          },
          metadata: rB
        }, null, Oc), rB && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rB
        })
      })(), cB
    })()
  },
  39550: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic
    });
    var Vc = nc(38493);
    class Ic extends Vc.e {
      constructor(cB, Bc, nc, Ic, rB) {
        let uc = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          sc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Mc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          Pc = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          qB = arguments.length > 9 ? arguments[9] : void 0,
          Oc = arguments.length > 10 ? arguments[10] : void 0,
          Tc = arguments.length > 11 ? arguments[11] : void 0,
          fc = arguments.length > 12 ? arguments[12] : void 0;
        super(null, rB, !uc, sc, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, qB), this.format = Ic, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== Pc || (Mc = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== Pc || (Mc = 1), this._texture = this._engine.createRawTexture(cB, Bc, nc, Ic, uc, sc, Mc, null, Pc, qB ?? 0, Oc ?? !1, fc), this.wrapU = Vc.e.CLAMP_ADDRESSMODE, this.wrapV = Vc.e.CLAMP_ADDRESSMODE, this._waitingForData = !!Tc && !cB)
      }
      update(cB) {
        this.updateMipLevel(cB, 0)
      }
      updateMipLevel(cB, Bc) {
        this._getEngine().updateRawTexture(this._texture, cB, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, Bc), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const cB = new Ic(null, this.getSize().width, this.getSize().height, this.format, this.knc(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return cB._texture = this._texture, this._texture.incrementReferences(), cB
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(cB, Bc, nc, Vc) {
        return new Ic(cB, Bc, nc, 1, Vc, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(cB, Bc, nc, Vc) {
        return new Ic(cB, Bc, nc, 2, Vc, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(cB, Bc, nc, Vc) {
        return new Ic(cB, Bc, nc, 0, Vc, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(cB, Bc, nc, Vc) {
        return new Ic(cB, Bc, nc, 4, Vc, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(cB, Bc, nc, Vc) {
        return new Ic(cB, Bc, nc, 5, Vc, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(cB, Bc, nc, Vc) {
        return new Ic(cB, Bc, nc, 5, Vc, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(cB, Bc, nc, rB) {
        let uc = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          sc = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Mc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Vc.e.TRILINEAR_SAMPLINGMODE;
        return new Ic(cB, Bc, nc, 6, rB, uc, sc, Mc, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(cB, Bc, nc, rB) {
        let uc = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          sc = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Mc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Vc.e.TRILINEAR_SAMPLINGMODE;
        return new Ic(cB, Bc, nc, 6, rB, uc, sc, Mc, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  39580: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc.c
    });
    var Vc = nc(38456);
    (0, Vc.e)()
  },
  39535: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc.b
    });
    var Vc = nc(38471);
    (0, Vc.c)()
  },
  38471: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Tc,
      c: () => ec
    });
    var Vc, Ic, rB = nc(35815),
      uc = nc(38194),
      sc = nc(38425),
      Mc = nc(38479),
      Pc = nc(38326),
      qB = nc(38485),
      Oc = nc(37953);
    class Tc extends sc.b {
      _isShaderMaterial(cB) {
        return !!cB && "ShaderMaterial" === cB.getClassName()
      }
      constructor(cB) {
        let Bc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Vc = arguments.length > 5 ? arguments[5] : void 0,
          Ic = arguments.length > 6 ? arguments[6] : void 0,
          sc = arguments.length > 7 ? arguments[7] : void 0;
        super(cB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Bc, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Vc, this.useVertexAlpha = Ic, this.color = new rB.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, Bc && (this.color = Bc.color.clone(), this.alpha = Bc.alpha, this.useVertexColor = Bc.useVertexColor, this.useVertexAlpha = Bc.useVertexAlpha), this.intersectionThreshold = .1;
        const Mc = {
          attributes: [uc.i.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Mc.defines.push("#define VERTEXALPHA") : Mc.needAlphaBlending = !1, this.useVertexColor ? (Mc.defines.push("#define VERTEXCOLOR"), Mc.attributes.push(uc.i.ColorKind)) : (Mc.uniforms.push("color"), this._color4 = new rB.g), sc) this.material = sc;
        else {
          this.knc().RV().isWebGPU && !Tc.ForceGLSL && (this._shaderLanguage = 1), Mc.shaderLanguage = this._shaderLanguage, Mc.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([nc.e(319).then((() => nc(40501))), nc.e(325).then((() => nc(40507)))]) : await Promise.all([nc.e(301).then((() => nc(40510))), nc.e(307).then((() => nc(40518)))])
          };
          const cB = new qB.t("colorShader", this.knc(), "color", Mc, !1);
          cB.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(cB)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(cB) {
        const Bc = this.material;
        if (Bc === cB) return;
        const nc = Bc && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(cB), nc && Bc?.dispose()
      }
      _setInternalMaterial(cB) {
        this._setMaterial(cB), this.material && (this.material.fillMode = Pc.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(cB) {}
      _bind(cB, Bc) {
        if (!this._geometry) return this;
        const nc = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Bc, nc) : this._geometry._bind(Bc, nc, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: cB,
            g: Bc,
            b: nc
          } = this.color;
          this._color4.set(cB, Bc, nc, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(cB, Bc, nc) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Vc = this.knc().RV();
        return this._unIndexed ? Vc.drawArraysType(Pc.c.LineListDrawMode, cB.verticesStart, cB.verticesCount, nc) : Vc.drawElementsType(Pc.c.LineListDrawMode, cB.indexStart, cB.indexCount, nc), this
      }
      dispose(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Bc) && this.material?.dispose(!1, !1, !0), super.dispose(cB)
      }
      clone(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        if (Bc && void 0 === Bc._addToSceneRootNodes) {
          const nc = Bc;
          return nc.source = this, new Tc(cB, this.knc(), nc.parent, nc.source, nc.doNotCloneChildren)
        }
        return new Tc(cB, this.knc(), Bc, this, nc)
      }
      createInstance(cB) {
        const Bc = new fc(cB, this);
        if (this.snc) {
          Bc.snc = {};
          for (const cB in this.snc) Bc.snc[cB] = this.snc[cB]
        }
        return Bc
      }
      serialize(cB) {
        super.serialize(cB), cB.color = this.color.KPc(), cB.alpha = this.alpha
      }
      static Parse(cB, Bc) {
        const nc = new Tc(cB.name, Bc);
        return nc.color = rB.e.FromArray(cB.color), nc.alpha = cB.alpha, nc
      }
    }
    Tc.ForceGLSL = !1;
    class fc extends Mc.c {
      constructor(cB, Bc) {
        super(cB, Bc), this.intersectionThreshold = Bc.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let mB = !1;

    function ec() {
      mB || (mB = !0, sc.b._LinesMeshParser = (cB, Bc) => Tc.Parse(cB, Bc))
    }(Vc = Tc.prototype).enableEdgesRendering ?? (Vc.enableEdgesRendering = (0, Oc.h)("LinesMesh", "enableEdgesRendering")), (Ic = fc.prototype).enableEdgesRendering ?? (Ic.enableEdgesRendering = (0, Oc.h)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);