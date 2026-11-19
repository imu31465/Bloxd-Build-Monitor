export const id = 252;
export const ids = [252];
export const modules = {
  40663: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    class FY {}
    FY.AUTOSAMPLERSUFFIX = "Sampler", FY.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", FY.ALPHA_DISABLE = 0, FY.ALPHA_ADD = 1, FY.ALPHA_COMBINE = 2, FY.ALPHA_SUBTRACT = 3, FY.ALPHA_MULTIPLY = 4, FY.ALPHA_MAXIMIZED = 5, FY.ALPHA_ONEONE = 6, FY.ALPHA_PREMULTIPLIED = 7, FY.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, FY.ALPHA_INTERPOLATE = 9, FY.ALPHA_SCREENMODE = 10, FY.ALPHA_ONEONE_ONEONE = 11, FY.ALPHA_ALPHATOCOLOR = 12, FY.ALPHA_REVERSEONEMINUS = 13, FY.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, FY.ALPHA_ONEONE_ONEZERO = 15, FY.ALPHA_EXCLUSION = 16, FY.ALPHA_LAYER_ACCUMULATE = 17, FY.ALPHA_MIN = 18, FY.ALPHA_MAX = 19, FY.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, FY.ALPHA_REPLACE_COLOR = 21, FY.ALPHA_EQUATION_ADD = 0, FY.ALPHA_EQUATION_SUBSTRACT = 1, FY.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, FY.ALPHA_EQUATION_MAX = 3, FY.ALPHA_EQUATION_MIN = 4, FY.ALPHA_EQUATION_DARKEN = 5, FY.DELAYLOADSTATE_NONE = 0, FY.DELAYLOADSTATE_LOADED = 1, FY.DELAYLOADSTATE_LOADING = 2, FY.DELAYLOADSTATE_NOTLOADED = 4, FY.NEVER = 512, FY.ALWAYS = 519, FY.LESS = 513, FY.EQUAL = 514, FY.LEQUAL = 515, FY.GREATER = 516, FY.GEQUAL = 518, FY.NOTEQUAL = 517, FY.KEEP = 7680, FY.ZERO = 0, FY.REPLACE = 7681, FY.INCR = 7682, FY.DECR = 7683, FY.INVERT = 5386, FY.INCR_WRAP = 34055, FY.DECR_WRAP = 34056, FY.TEXTURE_CLAMP_ADDRESSMODE = 0, FY.TEXTURE_WRAP_ADDRESSMODE = 1, FY.TEXTURE_MIRROR_ADDRESSMODE = 2, FY.TEXTURE_REPETITION_NONE = 0, FY.TEXTURE_REPETITION_NOISE_BLEND = 1, FY.TEXTURE_REPETITION_HEX_TILING = 2, FY.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, FY.TEXTURE_REPETITION_VORONOI_BOMBING = 4, FY.TEXTURE_CREATIONFLAG_STORAGE = 1, FY.TEXTUREFORMAT_ALPHA = 0, FY.TEXTUREFORMAT_LUMINANCE = 1, FY.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, FY.TEXTUREFORMAT_RGB = 4, FY.TEXTUREFORMAT_RGBA = 5, FY.TEXTUREFORMAT_RED = 6, FY.TEXTUREFORMAT_R = 6, FY.TEXTUREFORMAT_R16_UNORM = 33322, FY.TEXTUREFORMAT_RG16_UNORM = 33324, FY.TEXTUREFORMAT_RGB16_UNORM = 32852, FY.TEXTUREFORMAT_RGBA16_UNORM = 32859, FY.TEXTUREFORMAT_R16_SNORM = 36760, FY.TEXTUREFORMAT_RG16_SNORM = 36761, FY.TEXTUREFORMAT_RGB16_SNORM = 36762, FY.TEXTUREFORMAT_RGBA16_SNORM = 36763, FY.TEXTUREFORMAT_RG = 7, FY.TEXTUREFORMAT_RED_INTEGER = 8, FY.TEXTUREFORMAT_R_INTEGER = 8, FY.TEXTUREFORMAT_RG_INTEGER = 9, FY.TEXTUREFORMAT_RGB_INTEGER = 10, FY.TEXTUREFORMAT_RGBA_INTEGER = 11, FY.TEXTUREFORMAT_BGRA = 12, FY.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, FY.TEXTUREFORMAT_DEPTH32_FLOAT = 14, FY.TEXTUREFORMAT_DEPTH16 = 15, FY.TEXTUREFORMAT_DEPTH24 = 16, FY.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, FY.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, FY.TEXTUREFORMAT_STENCIL8 = 19, FY.TEXTUREFORMAT_UNDEFINED = 4294967295, FY.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, FY.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, FY.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, FY.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, FY.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, FY.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, FY.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, FY.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, FY.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, FY.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, FY.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, FY.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, FY.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, FY.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, FY.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, FY.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, FY.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, FY.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, FY.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, FY.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, FY.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, FY.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, FY.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, FY.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, FY.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, FY.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, FY.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, FY.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, FY.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, FY.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, FY.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, FY.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, FY.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, FY.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, FY.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, FY.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, FY.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, FY.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, FY.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, FY.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, FY.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, FY.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, FY.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, FY.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, FY.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, FY.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, FY.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, FY.TEXTURETYPE_UNSIGNED_BYTE = 0, FY.TEXTURETYPE_UNSIGNED_INT = 0, FY.TEXTURETYPE_FLOAT = 1, FY.TEXTURETYPE_HALF_FLOAT = 2, FY.TEXTURETYPE_BYTE = 3, FY.TEXTURETYPE_SHORT = 4, FY.TEXTURETYPE_UNSIGNED_SHORT = 5, FY.TEXTURETYPE_INT = 6, FY.TEXTURETYPE_UNSIGNED_INTEGER = 7, FY.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, FY.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, FY.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, FY.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, FY.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, FY.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, FY.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, FY.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, FY.TEXTURETYPE_UNDEFINED = 16, FY.TEXTURE_2D = 3553, FY.TEXTURE_2D_ARRAY = 35866, FY.TEXTURE_CUBE_MAP = 34067, FY.TEXTURE_CUBE_MAP_ARRAY = 3735928559, FY.TEXTURE_3D = 32879, FY.TEXTURE_NEAREST_SAMPLINGMODE = 1, FY.TEXTURE_NEAREST_NEAREST = 1, FY.TEXTURE_BILINEAR_SAMPLINGMODE = 2, FY.TEXTURE_LINEAR_LINEAR = 2, FY.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, FY.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, FY.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, FY.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, FY.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, FY.TEXTURE_NEAREST_LINEAR = 7, FY.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, FY.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, FY.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, FY.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, FY.TEXTURE_LINEAR_NEAREST = 12, FY.TEXTURE_EXPLICIT_MODE = 0, FY.TEXTURE_SPHERICAL_MODE = 1, FY.TEXTURE_PLANAR_MODE = 2, FY.TEXTURE_CUBIC_MODE = 3, FY.TEXTURE_PROJECTION_MODE = 4, FY.TEXTURE_SKYBOX_MODE = 5, FY.TEXTURE_INVCUBIC_MODE = 6, FY.TEXTURE_EQUIRECTANGULAR_MODE = 7, FY.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, FY.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, FY.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, FY.TEXTURE_FILTERING_QUALITY_HIGH = 64, FY.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, FY.TEXTURE_FILTERING_QUALITY_LOW = 8, FY.SCALEMODE_FLOOR = 1, FY.SCALEMODE_NEAREST = 2, FY.SCALEMODE_CEILING = 3, FY.MATERIAL_TextureDirtyFlag = 1, FY.MATERIAL_LightDirtyFlag = 2, FY.MATERIAL_FresnelDirtyFlag = 4, FY.MATERIAL_AttributesDirtyFlag = 8, FY.MATERIAL_MiscDirtyFlag = 16, FY.MATERIAL_PrePassDirtyFlag = 32, FY.MATERIAL_ImageProcessingDirtyFlag = 64, FY.MATERIAL_AllDirtyFlag = 127, FY.MATERIAL_TriangleFillMode = 0, FY.MATERIAL_WireFrameFillMode = 1, FY.MATERIAL_PointFillMode = 2, FY.MATERIAL_PointListDrawMode = 3, FY.MATERIAL_LineListDrawMode = 4, FY.MATERIAL_LineLoopDrawMode = 5, FY.MATERIAL_LineStripDrawMode = 6, FY.MATERIAL_TriangleStripDrawMode = 7, FY.MATERIAL_TriangleFanDrawMode = 8, FY.MATERIAL_ClockWiseSideOrientation = 0, FY.MATERIAL_CounterClockWiseSideOrientation = 1, FY.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, FY.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, FY.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, FY.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, FY.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, FY.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, FY.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, FY.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, FY.ACTION_NothingTrigger = 0, FY.ACTION_OnPickTrigger = 1, FY.ACTION_OnLeftPickTrigger = 2, FY.ACTION_OnRightPickTrigger = 3, FY.ACTION_OnCenterPickTrigger = 4, FY.ACTION_OnPickDownTrigger = 5, FY.ACTION_OnDoublePickTrigger = 6, FY.ACTION_OnPickUpTrigger = 7, FY.ACTION_OnPickOutTrigger = 16, FY.ACTION_OnLongPressTrigger = 8, FY.ACTION_OnPointerOverTrigger = 9, FY.ACTION_OnPointerOutTrigger = 10, FY.ACTION_OnEveryFrameTrigger = 11, FY.ACTION_OnIntersectionEnterTrigger = 12, FY.ACTION_OnIntersectionExitTrigger = 13, FY.ACTION_OnKeyDownTrigger = 14, FY.ACTION_OnKeyUpTrigger = 15, FY.PARTICLES_BILLBOARDMODE_Y = 2, FY.PARTICLES_BILLBOARDMODE_ALL = 7, FY.PARTICLES_BILLBOARDMODE_STRETCHED = 8, FY.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, FY.MESHES_CULLINGSTRATEGY_STANDARD = 0, FY.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, FY.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, FY.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, FY.SCENELOADER_NO_LOGGING = 0, FY.SCENELOADER_MINIMAL_LOGGING = 1, FY.SCENELOADER_SUMMARY_LOGGING = 2, FY.SCENELOADER_DETAILED_LOGGING = 3, FY.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, FY.PREPASS_POSITION_TEXTURE_TYPE = 1, FY.PREPASS_VELOCITY_TEXTURE_TYPE = 2, FY.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, FY.PREPASS_COLOR_TEXTURE_TYPE = 4, FY.PREPASS_DEPTH_TEXTURE_TYPE = 5, FY.PREPASS_NORMAL_TEXTURE_TYPE = 6, FY.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, FY.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, FY.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, FY.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, FY.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, FY.PREPASS_ALBEDO_TEXTURE_TYPE = 12, FY.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, FY.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, FY.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, FY.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, FY.BUFFER_CREATIONFLAG_READ = 1, FY.BUFFER_CREATIONFLAG_WRITE = 2, FY.BUFFER_CREATIONFLAG_READWRITE = 3, FY.BUFFER_CREATIONFLAG_UNIFORM = 4, FY.BUFFER_CREATIONFLAG_VERTEX = 8, FY.BUFFER_CREATIONFLAG_INDEX = 16, FY.BUFFER_CREATIONFLAG_STORAGE = 32, FY.BUFFER_CREATIONFLAG_INDIRECT = 64, FY.RENDERPASS_MAIN = 0, FY.INPUT_ALT_KEY = 18, FY.INPUT_CTRL_KEY = 17, FY.INPUT_META_KEY1 = 91, FY.INPUT_META_KEY2 = 92, FY.INPUT_META_KEY3 = 93, FY.INPUT_SHIFT_KEY = 16, FY.SNAPSHOTRENDERING_STANDARD = 0, FY.SNAPSHOTRENDERING_FAST = 1, FY.PERSPECTIVE_CAMERA = 0, FY.ORTHOGRAPHIC_CAMERA = 1, FY.FOVMODE_VERTICAL_FIXED = 0, FY.FOVMODE_HORIZONTAL_FIXED = 1, FY.RIG_MODE_NONE = 0, FY.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, FY.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, FY.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, FY.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, FY.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, FY.RIG_MODE_VR = 20, FY.RIG_MODE_CUSTOM = 22, FY.MAX_SUPPORTED_UV_SETS = 6, FY.GL_ALPHA_EQUATION_ADD = 32774, FY.GL_ALPHA_EQUATION_MIN = 32775, FY.GL_ALPHA_EQUATION_MAX = 32776, FY.GL_ALPHA_EQUATION_SUBTRACT = 32778, FY.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, FY.GL_ALPHA_FUNCTION_SRC = 768, FY.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, FY.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, FY.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, FY.GL_ALPHA_FUNCTION_DST_ALPHA = 772, FY.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, FY.GL_ALPHA_FUNCTION_DST_COLOR = 774, FY.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, FY.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, FY.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, FY.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, FY.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, FY.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, FY.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, FY.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, FY.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, FY.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, FY.SnippetUrl = "https://snippet.babylonjs.com", FY.FOGMODE_NONE = 0, FY.FOGMODE_EXP = 1, FY.FOGMODE_EXP2 = 2, FY.FOGMODE_LINEAR = 3, FY.BYTE = 5120, FY.UNSIGNED_BYTE = 5121, FY.SHORT = 5122, FY.UNSIGNED_SHORT = 5123, FY.INT = 5124, FY.UNSIGNED_INT = 5125, FY.FLOAT = 5126, FY.HALF_FLOAT = 5131, FY.PositionKind = "position", FY.NormalKind = "normal", FY.TangentKind = "tangent", FY.UVKind = "uv", FY.UV2Kind = "uv2", FY.UV3Kind = "uv3", FY.UV4Kind = "uv4", FY.UV5Kind = "uv5", FY.UV6Kind = "uv6", FY.ColorKind = "color", FY.ColorInstanceKind = "instanceColor", FY.MatricesIndicesKind = "matricesIndices", FY.MatricesWeightsKind = "matricesWeights", FY.MatricesIndicesExtraKind = "matricesIndicesExtra", FY.MatricesWeightsExtraKind = "matricesWeightsExtra", FY.ANIMATIONTYPE_FLOAT = 0, FY.ANIMATIONTYPE_VECTOR3 = 1, FY.ANIMATIONTYPE_QUATERNION = 2, FY.ANIMATIONTYPE_MATRIX = 3, FY.ANIMATIONTYPE_COLOR3 = 4, FY.ANIMATIONTYPE_COLOR4 = 7, FY.ANIMATIONTYPE_VECTOR2 = 5, FY.ANIMATIONTYPE_SIZE = 6, FY.ShadowMinZ = 0, FY.ShadowMaxZ = 1e4, FY.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, FY.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  40636: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => gY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(36524),
      RY = DY(39387),
      OY = DY(39355);
    let gY = (() => {
      var YY;
      let rY, DY, gY, aY, vY = RY.c,
        uY = [];
      return YY = class extends vY {
        constructor() {
          super(...arguments), this._position = (0, FY.j)(this, uY), this._needProjectionMatrixCompute = !0, this._viewMatrix = IY.e.Identity(), this._projectionMatrix = IY.e.Identity()
        }
        _setPosition(YY) {
          this._position = YY
        }
        get position() {
          return this._position
        }
        set position(YY) {
          this._setPosition(YY)
        }
        _setDirection(YY) {
          this._direction = YY
        }
        get direction() {
          return this._direction
        }
        set direction(YY) {
          this._setDirection(YY)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(YY) {
          this._shadowMinZ = YY, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(YY) {
          this._shadowMaxZ = YY, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = IY.r.Zero()), IY.r.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = IY.r.Zero()), IY.r.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(YY) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(YY) {
          return this.direction = IY.r.Normalize(YY.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const YY = IY.r.Cross(this.direction, OY.b.Y),
            rY = IY.r.Cross(YY, this.direction);
          return IY.r.RotationFromAxis(YY, rY, this.direction)
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
          super._initCache(), this._cache.position = IY.r.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(YY) {
          return !YY && this.isSynchronized() ? (this._currentRenderId = this.hT().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.brY(this.position), this._worldMatrix || (this._worldMatrix = IY.e.Identity()), IY.e.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(YY) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : YY?.minZ || 0
        }
        getDepthMaxZ(YY) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : YY?.maxZ || 1e4
        }
        setShadowProjectionMatrix(YY, rY, DY) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(rY, DY, YY) : this._setDefaultShadowProjectionMatrix(YY, rY, DY), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(YY) {
          const rY = IY.n.xy[0];
          let DY = this.position;
          this.computeTransformedInformation() && (DY = this.transformedPosition), IY.r.NormalizeToRef(this.getShadowDirection(YY), rY), 1 === Math.abs(IY.r.Dot(rY, IY.r.Up())) && (rY.z = 1e-13);
          const FY = IY.n.xy[1];
          return DY.addToRef(rY, FY), IY.e.LookAtLHToRef(DY, FY, IY.r.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(YY, rY) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, YY ?? this._viewMatrix, rY ?? []), this._projectionMatrix
        }
      }, (() => {
        const IY = "function" === typeof Symbol && Symbol.metadata ? Object.create(vY[Symbol.metadata] ?? null) : void 0;
        rY = [(0, AY.J)()], DY = [(0, AY.J)()], gY = [(0, AY.M)()], aY = [(0, AY.M)()], (0, FY.i)(YY, null, rY, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: YY => "position" in YY,
            get: YY => YY.position
          },
          metadata: IY
        }, null, uY), (0, FY.i)(YY, null, DY, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: YY => "direction" in YY,
            get: YY => YY.direction
          },
          metadata: IY
        }, null, uY), (0, FY.i)(YY, null, gY, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: YY => "shadowMinZ" in YY,
            get: YY => YY.shadowMinZ
          },
          metadata: IY
        }, null, uY), (0, FY.i)(YY, null, aY, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: YY => "shadowMaxZ" in YY,
            get: YY => YY.shadowMaxZ
          },
          metadata: IY
        }, null, uY), IY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IY
        })
      })(), YY
    })()
  },
  40654: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY
    });
    var FY = DY(39596);
    class AY extends FY.i {
      constructor(YY, rY, DY, AY, IY) {
        let RY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          OY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          gY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          aY = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          vY = arguments.length > 9 ? arguments[9] : void 0,
          uY = arguments.length > 10 ? arguments[10] : void 0,
          sY = arguments.length > 11 ? arguments[11] : void 0,
          iY = arguments.length > 12 ? arguments[12] : void 0;
        super(null, IY, !RY, OY, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, vY), this.format = AY, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== aY || (gY = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== aY || (gY = 1), this._texture = this._engine.createRawTexture(YY, rY, DY, AY, RY, OY, gY, null, aY, vY ?? 0, uY ?? !1, iY), this.wrapU = FY.i.CLAMP_ADDRESSMODE, this.wrapV = FY.i.CLAMP_ADDRESSMODE, this._waitingForData = !!sY && !YY)
      }
      update(YY) {
        this.updateMipLevel(YY, 0)
      }
      updateMipLevel(YY, rY) {
        this._getEngine().updateRawTexture(this._texture, YY, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, rY), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const YY = new AY(null, this.getSize().width, this.getSize().height, this.format, this.hT(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return YY._texture = this._texture, this._texture.incrementReferences(), YY
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(YY, rY, DY, FY) {
        return new AY(YY, rY, DY, 1, FY, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(YY, rY, DY, FY) {
        return new AY(YY, rY, DY, 2, FY, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(YY, rY, DY, FY) {
        return new AY(YY, rY, DY, 0, FY, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(YY, rY, DY, FY) {
        return new AY(YY, rY, DY, 4, FY, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(YY, rY, DY, FY) {
        return new AY(YY, rY, DY, 5, FY, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(YY, rY, DY, FY) {
        return new AY(YY, rY, DY, 5, FY, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(YY, rY, DY, IY) {
        let RY = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          OY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          gY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : FY.i.TRILINEAR_SAMPLINGMODE;
        return new AY(YY, rY, DY, 6, IY, RY, OY, gY, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(YY, rY, DY, IY) {
        let RY = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          OY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          gY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : FY.i.TRILINEAR_SAMPLINGMODE;
        return new AY(YY, rY, DY, 6, IY, RY, OY, gY, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  40700: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY.b
    });
    var FY = DY(39554);
    (0, FY.c)()
  },
  40640: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY.d
    });
    var FY = DY(39576);
    (0, FY.h)()
  },
  39576: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => sY,
      h: () => QY
    });
    var FY, AY, IY = DY(36588),
      RY = DY(39270),
      OY = DY(39514),
      gY = DY(39582),
      aY = DY(39414),
      vY = DY(39587),
      uY = DY(39029);
    class sY extends OY.c {
      _isShaderMaterial(YY) {
        return !!YY && "ShaderMaterial" === YY.getClassName()
      }
      constructor(YY) {
        let rY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          FY = arguments.length > 5 ? arguments[5] : void 0,
          AY = arguments.length > 6 ? arguments[6] : void 0,
          OY = arguments.length > 7 ? arguments[7] : void 0;
        super(YY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, rY, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = FY, this.useVertexAlpha = AY, this.color = new IY.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, rY && (this.color = rY.color.clone(), this.alpha = rY.alpha, this.useVertexColor = rY.useVertexColor, this.useVertexAlpha = rY.useVertexAlpha), this.intersectionThreshold = .1;
        const gY = {
          attributes: [RY.l.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? gY.defines.push("#define VERTEXALPHA") : gY.needAlphaBlending = !1, this.useVertexColor ? (gY.defines.push("#define VERTEXCOLOR"), gY.attributes.push(RY.l.ColorKind)) : (gY.uniforms.push("color"), this._color4 = new IY.d), OY) this.material = OY;
        else {
          this.hT().ky().isWebGPU && !sY.ForceGLSL && (this._shaderLanguage = 1), gY.shaderLanguage = this._shaderLanguage, gY.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([DY.e(334).then((() => DY(41603))), DY.e(340).then((() => DY(41605)))]) : await Promise.all([DY.e(316).then((() => DY(41614))), DY.e(322).then((() => DY(41618)))])
          };
          const YY = new vY.t("colorShader", this.hT(), "color", gY, !1);
          YY.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(YY)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(YY) {
        const rY = this.material;
        if (rY === YY) return;
        const DY = rY && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(YY), DY && rY?.dispose()
      }
      _setInternalMaterial(YY) {
        this._setMaterial(YY), this.material && (this.material.fillMode = aY.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(YY) {}
      _bind(YY, rY) {
        if (!this._geometry) return this;
        const DY = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(rY, DY) : this._geometry._bind(rY, DY, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: YY,
            g: rY,
            b: DY
          } = this.color;
          this._color4.set(YY, rY, DY, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(YY, rY, DY) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const FY = this.hT().ky();
        return this._unIndexed ? FY.drawArraysType(aY.c.LineListDrawMode, YY.verticesStart, YY.verticesCount, DY) : FY.drawElementsType(aY.c.LineListDrawMode, YY.indexStart, YY.indexCount, DY), this
      }
      dispose(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || rY) && this.material?.dispose(!1, !1, !0), super.dispose(YY)
      }
      clone(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        if (rY && void 0 === rY._addToSceneRootNodes) {
          const DY = rY;
          return DY.source = this, new sY(YY, this.hT(), DY.parent, DY.source, DY.doNotCloneChildren)
        }
        return new sY(YY, this.hT(), rY, this, DY)
      }
      createInstance(YY) {
        const rY = new iY(YY, this);
        if (this.YB) {
          rY.YB = {};
          for (const YY in this.YB) rY.YB[YY] = this.YB[YY]
        }
        return rY
      }
      serialize(YY) {
        super.serialize(YY), YY.color = this.color.VDY(), YY.alpha = this.alpha
      }
      static Parse(YY, rY) {
        const DY = new sY(YY.name, rY);
        return DY.color = IY.c.FromArray(YY.color), DY.alpha = YY.alpha, DY
      }
    }
    sY.ForceGLSL = !1;
    class iY extends gY.d {
      constructor(YY, rY) {
        super(YY, rY), this.intersectionThreshold = rY.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let yY = !1;

    function QY() {
      yY || (yY = !0, OY.c._LinesMeshParser = (YY, rY) => sY.Parse(YY, rY))
    }(FY = sY.prototype).enableEdgesRendering ?? (FY.enableEdgesRendering = (0, uY.g)("LinesMesh", "enableEdgesRendering")), (AY = iY.prototype).enableEdgesRendering ?? (AY.enableEdgesRendering = (0, uY.g)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);