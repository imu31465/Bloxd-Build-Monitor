export const id = 263;
export const ids = [263];
export const modules = {
  41402: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    class QC {}
    QC.AUTOSAMPLERSUFFIX = "Sampler", QC.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", QC.ALPHA_DISABLE = 0, QC.ALPHA_ADD = 1, QC.ALPHA_COMBINE = 2, QC.ALPHA_SUBTRACT = 3, QC.ALPHA_MULTIPLY = 4, QC.ALPHA_MAXIMIZED = 5, QC.ALPHA_ONEONE = 6, QC.ALPHA_PREMULTIPLIED = 7, QC.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, QC.ALPHA_INTERPOLATE = 9, QC.ALPHA_SCREENMODE = 10, QC.ALPHA_ONEONE_ONEONE = 11, QC.ALPHA_ALPHATOCOLOR = 12, QC.ALPHA_REVERSEONEMINUS = 13, QC.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, QC.ALPHA_ONEONE_ONEZERO = 15, QC.ALPHA_EXCLUSION = 16, QC.ALPHA_LAYER_ACCUMULATE = 17, QC.ALPHA_MIN = 18, QC.ALPHA_MAX = 19, QC.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, QC.ALPHA_REPLACE_COLOR = 21, QC.ALPHA_EQUATION_ADD = 0, QC.ALPHA_EQUATION_SUBSTRACT = 1, QC.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, QC.ALPHA_EQUATION_MAX = 3, QC.ALPHA_EQUATION_MIN = 4, QC.ALPHA_EQUATION_DARKEN = 5, QC.DELAYLOADSTATE_NONE = 0, QC.DELAYLOADSTATE_LOADED = 1, QC.DELAYLOADSTATE_LOADING = 2, QC.DELAYLOADSTATE_NOTLOADED = 4, QC.NEVER = 512, QC.ALWAYS = 519, QC.LESS = 513, QC.EQUAL = 514, QC.LEQUAL = 515, QC.GREATER = 516, QC.GEQUAL = 518, QC.NOTEQUAL = 517, QC.KEEP = 7680, QC.ZERO = 0, QC.REPLACE = 7681, QC.INCR = 7682, QC.DECR = 7683, QC.INVERT = 5386, QC.INCR_WRAP = 34055, QC.DECR_WRAP = 34056, QC.TEXTURE_CLAMP_ADDRESSMODE = 0, QC.TEXTURE_WRAP_ADDRESSMODE = 1, QC.TEXTURE_MIRROR_ADDRESSMODE = 2, QC.TEXTURE_REPETITION_NONE = 0, QC.TEXTURE_REPETITION_NOISE_BLEND = 1, QC.TEXTURE_REPETITION_HEX_TILING = 2, QC.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, QC.TEXTURE_REPETITION_VORONOI_BOMBING = 4, QC.TEXTURE_CREATIONFLAG_STORAGE = 1, QC.TEXTUREFORMAT_ALPHA = 0, QC.TEXTUREFORMAT_LUMINANCE = 1, QC.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, QC.TEXTUREFORMAT_RGB = 4, QC.TEXTUREFORMAT_RGBA = 5, QC.TEXTUREFORMAT_RED = 6, QC.TEXTUREFORMAT_R = 6, QC.TEXTUREFORMAT_R16_UNORM = 33322, QC.TEXTUREFORMAT_RG16_UNORM = 33324, QC.TEXTUREFORMAT_RGB16_UNORM = 32852, QC.TEXTUREFORMAT_RGBA16_UNORM = 32859, QC.TEXTUREFORMAT_R16_SNORM = 36760, QC.TEXTUREFORMAT_RG16_SNORM = 36761, QC.TEXTUREFORMAT_RGB16_SNORM = 36762, QC.TEXTUREFORMAT_RGBA16_SNORM = 36763, QC.TEXTUREFORMAT_RG = 7, QC.TEXTUREFORMAT_RED_INTEGER = 8, QC.TEXTUREFORMAT_R_INTEGER = 8, QC.TEXTUREFORMAT_RG_INTEGER = 9, QC.TEXTUREFORMAT_RGB_INTEGER = 10, QC.TEXTUREFORMAT_RGBA_INTEGER = 11, QC.TEXTUREFORMAT_BGRA = 12, QC.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, QC.TEXTUREFORMAT_DEPTH32_FLOAT = 14, QC.TEXTUREFORMAT_DEPTH16 = 15, QC.TEXTUREFORMAT_DEPTH24 = 16, QC.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, QC.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, QC.TEXTUREFORMAT_STENCIL8 = 19, QC.TEXTUREFORMAT_UNDEFINED = 4294967295, QC.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, QC.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, QC.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, QC.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, QC.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, QC.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, QC.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, QC.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, QC.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, QC.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, QC.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, QC.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, QC.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, QC.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, QC.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, QC.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, QC.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, QC.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, QC.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, QC.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, QC.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, QC.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, QC.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, QC.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, QC.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, QC.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, QC.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, QC.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, QC.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, QC.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, QC.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, QC.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, QC.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, QC.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, QC.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, QC.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, QC.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, QC.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, QC.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, QC.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, QC.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, QC.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, QC.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, QC.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, QC.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, QC.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, QC.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, QC.TEXTURETYPE_UNSIGNED_BYTE = 0, QC.TEXTURETYPE_UNSIGNED_INT = 0, QC.TEXTURETYPE_FLOAT = 1, QC.TEXTURETYPE_HALF_FLOAT = 2, QC.TEXTURETYPE_BYTE = 3, QC.TEXTURETYPE_SHORT = 4, QC.TEXTURETYPE_UNSIGNED_SHORT = 5, QC.TEXTURETYPE_INT = 6, QC.TEXTURETYPE_UNSIGNED_INTEGER = 7, QC.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, QC.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, QC.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, QC.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, QC.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, QC.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, QC.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, QC.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, QC.TEXTURETYPE_UNDEFINED = 16, QC.TEXTURE_2D = 3553, QC.TEXTURE_2D_ARRAY = 35866, QC.TEXTURE_CUBE_MAP = 34067, QC.TEXTURE_CUBE_MAP_ARRAY = 3735928559, QC.TEXTURE_3D = 32879, QC.TEXTURE_NEAREST_SAMPLINGMODE = 1, QC.TEXTURE_NEAREST_NEAREST = 1, QC.TEXTURE_BILINEAR_SAMPLINGMODE = 2, QC.TEXTURE_LINEAR_LINEAR = 2, QC.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, QC.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, QC.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, QC.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, QC.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, QC.TEXTURE_NEAREST_LINEAR = 7, QC.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, QC.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, QC.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, QC.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, QC.TEXTURE_LINEAR_NEAREST = 12, QC.TEXTURE_EXPLICIT_MODE = 0, QC.TEXTURE_SPHERICAL_MODE = 1, QC.TEXTURE_PLANAR_MODE = 2, QC.TEXTURE_CUBIC_MODE = 3, QC.TEXTURE_PROJECTION_MODE = 4, QC.TEXTURE_SKYBOX_MODE = 5, QC.TEXTURE_INVCUBIC_MODE = 6, QC.TEXTURE_EQUIRECTANGULAR_MODE = 7, QC.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, QC.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, QC.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, QC.TEXTURE_FILTERING_QUALITY_HIGH = 64, QC.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, QC.TEXTURE_FILTERING_QUALITY_LOW = 8, QC.SCALEMODE_FLOOR = 1, QC.SCALEMODE_NEAREST = 2, QC.SCALEMODE_CEILING = 3, QC.MATERIAL_TextureDirtyFlag = 1, QC.MATERIAL_LightDirtyFlag = 2, QC.MATERIAL_FresnelDirtyFlag = 4, QC.MATERIAL_AttributesDirtyFlag = 8, QC.MATERIAL_MiscDirtyFlag = 16, QC.MATERIAL_PrePassDirtyFlag = 32, QC.MATERIAL_ImageProcessingDirtyFlag = 64, QC.MATERIAL_AllDirtyFlag = 127, QC.MATERIAL_TriangleFillMode = 0, QC.MATERIAL_WireFrameFillMode = 1, QC.MATERIAL_PointFillMode = 2, QC.MATERIAL_PointListDrawMode = 3, QC.MATERIAL_LineListDrawMode = 4, QC.MATERIAL_LineLoopDrawMode = 5, QC.MATERIAL_LineStripDrawMode = 6, QC.MATERIAL_TriangleStripDrawMode = 7, QC.MATERIAL_TriangleFanDrawMode = 8, QC.MATERIAL_ClockWiseSideOrientation = 0, QC.MATERIAL_CounterClockWiseSideOrientation = 1, QC.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, QC.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, QC.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, QC.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, QC.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, QC.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, QC.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, QC.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, QC.ACTION_NothingTrigger = 0, QC.ACTION_OnPickTrigger = 1, QC.ACTION_OnLeftPickTrigger = 2, QC.ACTION_OnRightPickTrigger = 3, QC.ACTION_OnCenterPickTrigger = 4, QC.ACTION_OnPickDownTrigger = 5, QC.ACTION_OnDoublePickTrigger = 6, QC.ACTION_OnPickUpTrigger = 7, QC.ACTION_OnPickOutTrigger = 16, QC.ACTION_OnLongPressTrigger = 8, QC.ACTION_OnPointerOverTrigger = 9, QC.ACTION_OnPointerOutTrigger = 10, QC.ACTION_OnEveryFrameTrigger = 11, QC.ACTION_OnIntersectionEnterTrigger = 12, QC.ACTION_OnIntersectionExitTrigger = 13, QC.ACTION_OnKeyDownTrigger = 14, QC.ACTION_OnKeyUpTrigger = 15, QC.PARTICLES_BILLBOARDMODE_Y = 2, QC.PARTICLES_BILLBOARDMODE_ALL = 7, QC.PARTICLES_BILLBOARDMODE_STRETCHED = 8, QC.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, QC.MESHES_CULLINGSTRATEGY_STANDARD = 0, QC.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, QC.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, QC.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, QC.SCENELOADER_NO_LOGGING = 0, QC.SCENELOADER_MINIMAL_LOGGING = 1, QC.SCENELOADER_SUMMARY_LOGGING = 2, QC.SCENELOADER_DETAILED_LOGGING = 3, QC.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, QC.PREPASS_POSITION_TEXTURE_TYPE = 1, QC.PREPASS_VELOCITY_TEXTURE_TYPE = 2, QC.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, QC.PREPASS_COLOR_TEXTURE_TYPE = 4, QC.PREPASS_DEPTH_TEXTURE_TYPE = 5, QC.PREPASS_NORMAL_TEXTURE_TYPE = 6, QC.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, QC.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, QC.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, QC.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, QC.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, QC.PREPASS_ALBEDO_TEXTURE_TYPE = 12, QC.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, QC.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, QC.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, QC.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, QC.BUFFER_CREATIONFLAG_READ = 1, QC.BUFFER_CREATIONFLAG_WRITE = 2, QC.BUFFER_CREATIONFLAG_READWRITE = 3, QC.BUFFER_CREATIONFLAG_UNIFORM = 4, QC.BUFFER_CREATIONFLAG_VERTEX = 8, QC.BUFFER_CREATIONFLAG_INDEX = 16, QC.BUFFER_CREATIONFLAG_STORAGE = 32, QC.BUFFER_CREATIONFLAG_INDIRECT = 64, QC.RENDERPASS_MAIN = 0, QC.INPUT_ALT_KEY = 18, QC.INPUT_CTRL_KEY = 17, QC.INPUT_META_KEY1 = 91, QC.INPUT_META_KEY2 = 92, QC.INPUT_META_KEY3 = 93, QC.INPUT_SHIFT_KEY = 16, QC.SNAPSHOTRENDERING_STANDARD = 0, QC.SNAPSHOTRENDERING_FAST = 1, QC.PERSPECTIVE_CAMERA = 0, QC.ORTHOGRAPHIC_CAMERA = 1, QC.FOVMODE_VERTICAL_FIXED = 0, QC.FOVMODE_HORIZONTAL_FIXED = 1, QC.RIG_MODE_NONE = 0, QC.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, QC.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, QC.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, QC.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, QC.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, QC.RIG_MODE_VR = 20, QC.RIG_MODE_CUSTOM = 22, QC.MAX_SUPPORTED_UV_SETS = 6, QC.GL_ALPHA_EQUATION_ADD = 32774, QC.GL_ALPHA_EQUATION_MIN = 32775, QC.GL_ALPHA_EQUATION_MAX = 32776, QC.GL_ALPHA_EQUATION_SUBTRACT = 32778, QC.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, QC.GL_ALPHA_FUNCTION_SRC = 768, QC.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, QC.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, QC.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, QC.GL_ALPHA_FUNCTION_DST_ALPHA = 772, QC.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, QC.GL_ALPHA_FUNCTION_DST_COLOR = 774, QC.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, QC.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, QC.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, QC.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, QC.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, QC.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, QC.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, QC.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, QC.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, QC.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, QC.SnippetUrl = "https://snippet.babylonjs.com", QC.FOGMODE_NONE = 0, QC.FOGMODE_EXP = 1, QC.FOGMODE_EXP2 = 2, QC.FOGMODE_LINEAR = 3, QC.BYTE = 5120, QC.UNSIGNED_BYTE = 5121, QC.SHORT = 5122, QC.UNSIGNED_SHORT = 5123, QC.INT = 5124, QC.UNSIGNED_INT = 5125, QC.FLOAT = 5126, QC.HALF_FLOAT = 5131, QC.PositionKind = "position", QC.NormalKind = "normal", QC.TangentKind = "tangent", QC.UVKind = "uv", QC.UV2Kind = "uv2", QC.UV3Kind = "uv3", QC.UV4Kind = "uv4", QC.UV5Kind = "uv5", QC.UV6Kind = "uv6", QC.ColorKind = "color", QC.ColorInstanceKind = "instanceColor", QC.MatricesIndicesKind = "matricesIndices", QC.MatricesWeightsKind = "matricesWeights", QC.MatricesIndicesExtraKind = "matricesIndicesExtra", QC.MatricesWeightsExtraKind = "matricesWeightsExtra", QC.ANIMATIONTYPE_FLOAT = 0, QC.ANIMATIONTYPE_VECTOR3 = 1, QC.ANIMATIONTYPE_QUATERNION = 2, QC.ANIMATIONTYPE_MATRIX = 3, QC.ANIMATIONTYPE_COLOR3 = 4, QC.ANIMATIONTYPE_COLOR4 = 7, QC.ANIMATIONTYPE_VECTOR2 = 5, QC.ANIMATIONTYPE_SIZE = 6, QC.ShadowMinZ = 0, QC.ShadowMaxZ = 1e4, QC.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, QC.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  41384: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => oC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(36963),
      nC = ZC(40084),
      fC = ZC(40049);
    let oC = (() => {
      var CC;
      let zC, ZC, oC, qC, FC = nC.c,
        WC = [];
      return CC = class extends FC {
        constructor() {
          super(...arguments), this._position = (0, QC.n)(this, WC), this._needProjectionMatrixCompute = !0, this._viewMatrix = bC.b.Identity(), this._projectionMatrix = bC.b.Identity()
        }
        _setPosition(CC) {
          this._position = CC
        }
        get position() {
          return this._position
        }
        set position(CC) {
          this._setPosition(CC)
        }
        _setDirection(CC) {
          this._direction = CC
        }
        get direction() {
          return this._direction
        }
        set direction(CC) {
          this._setDirection(CC)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(CC) {
          this._shadowMinZ = CC, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(CC) {
          this._shadowMaxZ = CC, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = bC.r.Zero()), bC.r.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = bC.r.Zero()), bC.r.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(CC) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(CC) {
          return this.direction = bC.r.Normalize(CC.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const CC = bC.r.Cross(this.direction, fC.c.Y),
            zC = bC.r.Cross(CC, this.direction);
          return bC.r.RotationFromAxis(CC, zC, this.direction)
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
          super._initCache(), this._cache.position = bC.r.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(CC) {
          return !CC && this.isSynchronized() ? (this._currentRenderId = this.Km().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.Av(this.position), this._worldMatrix || (this._worldMatrix = bC.b.Identity()), bC.b.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(CC) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : CC?.minZ || 0
        }
        getDepthMaxZ(CC) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : CC?.maxZ || 1e4
        }
        setShadowProjectionMatrix(CC, zC, ZC) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(zC, ZC, CC) : this._setDefaultShadowProjectionMatrix(CC, zC, ZC), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(CC) {
          const zC = bC.j.Eg[0];
          let ZC = this.position;
          this.computeTransformedInformation() && (ZC = this.transformedPosition), bC.r.NormalizeToRef(this.getShadowDirection(CC), zC), 1 === Math.abs(bC.r.Dot(zC, bC.r.Up())) && (zC.z = 1e-13);
          const QC = bC.j.Eg[1];
          return ZC.addToRef(zC, QC), bC.b.LookAtLHToRef(ZC, QC, bC.r.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(CC, zC) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, CC ?? this._viewMatrix, zC ?? []), this._projectionMatrix
        }
      }, (() => {
        const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(FC[Symbol.metadata] ?? null) : void 0;
        zC = [(0, wC.J)()], ZC = [(0, wC.J)()], oC = [(0, wC.M)()], qC = [(0, wC.M)()], (0, QC.j)(CC, null, zC, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: CC => "position" in CC,
            get: CC => CC.position
          },
          metadata: bC
        }, null, WC), (0, QC.j)(CC, null, ZC, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: CC => "direction" in CC,
            get: CC => CC.direction
          },
          metadata: bC
        }, null, WC), (0, QC.j)(CC, null, oC, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: CC => "shadowMinZ" in CC,
            get: CC => CC.shadowMinZ
          },
          metadata: bC
        }, null, WC), (0, QC.j)(CC, null, qC, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: CC => "shadowMaxZ" in CC,
            get: CC => CC.shadowMaxZ
          },
          metadata: bC
        }, null, WC), bC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bC
        })
      })(), CC
    })()
  },
  41396: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC
    });
    var QC = ZC(40303);
    class wC extends QC.h {
      constructor(CC, zC, ZC, wC, bC) {
        let nC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          fC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          oC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          qC = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          FC = arguments.length > 9 ? arguments[9] : void 0,
          WC = arguments.length > 10 ? arguments[10] : void 0,
          NC = arguments.length > 11 ? arguments[11] : void 0,
          MC = arguments.length > 12 ? arguments[12] : void 0;
        super(null, bC, !nC, fC, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, FC), this.format = wC, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== qC || (oC = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== qC || (oC = 1), this._texture = this._engine.createRawTexture(CC, zC, ZC, wC, nC, fC, oC, null, qC, FC ?? 0, WC ?? !1, MC), this.wrapU = QC.h.CLAMP_ADDRESSMODE, this.wrapV = QC.h.CLAMP_ADDRESSMODE, this._waitingForData = !!NC && !CC)
      }
      update(CC) {
        this.updateMipLevel(CC, 0)
      }
      updateMipLevel(CC, zC) {
        this._getEngine().updateRawTexture(this._texture, CC, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, zC), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const CC = new wC(null, this.getSize().width, this.getSize().height, this.format, this.Km(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return CC._texture = this._texture, this._texture.incrementReferences(), CC
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(CC, zC, ZC, QC) {
        return new wC(CC, zC, ZC, 1, QC, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(CC, zC, ZC, QC) {
        return new wC(CC, zC, ZC, 2, QC, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(CC, zC, ZC, QC) {
        return new wC(CC, zC, ZC, 0, QC, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(CC, zC, ZC, QC) {
        return new wC(CC, zC, ZC, 4, QC, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(CC, zC, ZC, QC) {
        return new wC(CC, zC, ZC, 5, QC, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(CC, zC, ZC, QC) {
        return new wC(CC, zC, ZC, 5, QC, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(CC, zC, ZC, bC) {
        let nC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          fC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          oC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : QC.h.TRILINEAR_SAMPLINGMODE;
        return new wC(CC, zC, ZC, 6, bC, nC, fC, oC, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(CC, zC, ZC, bC) {
        let nC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          fC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          oC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : QC.h.TRILINEAR_SAMPLINGMODE;
        return new wC(CC, zC, ZC, 6, bC, nC, fC, oC, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  41438: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC.b
    });
    var QC = ZC(40265);
    (0, QC.e)()
  },
  41392: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC.c
    });
    var QC = ZC(40283);
    (0, QC.e)()
  },
  40283: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => NC,
      e: () => SC
    });
    var QC, wC, bC = ZC(37142),
      nC = ZC(39959),
      fC = ZC(40224),
      oC = ZC(40292),
      qC = ZC(40110),
      FC = ZC(40297),
      WC = ZC(39694);
    class NC extends fC.b {
      _isShaderMaterial(CC) {
        return !!CC && "ShaderMaterial" === CC.getClassName()
      }
      constructor(CC) {
        let zC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          QC = arguments.length > 5 ? arguments[5] : void 0,
          wC = arguments.length > 6 ? arguments[6] : void 0,
          fC = arguments.length > 7 ? arguments[7] : void 0;
        super(CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, zC, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = QC, this.useVertexAlpha = wC, this.color = new bC.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, zC && (this.color = zC.color.clone(), this.alpha = zC.alpha, this.useVertexColor = zC.useVertexColor, this.useVertexAlpha = zC.useVertexAlpha), this.intersectionThreshold = .1;
        const oC = {
          attributes: [nC.k.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? oC.defines.push("#define VERTEXALPHA") : oC.needAlphaBlending = !1, this.useVertexColor ? (oC.defines.push("#define VERTEXCOLOR"), oC.attributes.push(nC.k.ColorKind)) : (oC.uniforms.push("color"), this._color4 = new bC.g), fC) this.material = fC;
        else {
          this.Km().mg().isWebGPU && !NC.ForceGLSL && (this._shaderLanguage = 1), oC.shaderLanguage = this._shaderLanguage, oC.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([ZC.e(344).then((() => ZC(42355))), ZC.e(350).then((() => ZC(42359)))]) : await Promise.all([ZC.e(326).then((() => ZC(42363))), ZC.e(332).then((() => ZC(42370)))])
          };
          const CC = new FC.r("colorShader", this.Km(), "color", oC, !1);
          CC.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(CC)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(CC) {
        const zC = this.material;
        if (zC === CC) return;
        const ZC = zC && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(CC), ZC && zC?.dispose()
      }
      _setInternalMaterial(CC) {
        this._setMaterial(CC), this.material && (this.material.fillMode = qC.d.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(CC) {}
      _bind(CC, zC) {
        if (!this._geometry) return this;
        const ZC = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(zC, ZC) : this._geometry._bind(zC, ZC, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: CC,
            g: zC,
            b: ZC
          } = this.color;
          this._color4.set(CC, zC, ZC, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(CC, zC, ZC) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const QC = this.Km().mg();
        return this._unIndexed ? QC.drawArraysType(qC.d.LineListDrawMode, CC.verticesStart, CC.verticesCount, ZC) : QC.drawElementsType(qC.d.LineListDrawMode, CC.indexStart, CC.indexCount, ZC), this
      }
      dispose(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || zC) && this.material?.dispose(!1, !1, !0), super.dispose(CC)
      }
      clone(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        if (zC && void 0 === zC._addToSceneRootNodes) {
          const ZC = zC;
          return ZC.source = this, new NC(CC, this.Km(), ZC.parent, ZC.source, ZC.doNotCloneChildren)
        }
        return new NC(CC, this.Km(), zC, this, ZC)
      }
      createInstance(CC) {
        const zC = new MC(CC, this);
        if (this.ZE) {
          zC.ZE = {};
          for (const CC in this.ZE) zC.ZE[CC] = this.ZE[CC]
        }
        return zC
      }
      serialize(CC) {
        super.serialize(CC), CC.color = this.color.VZC(), CC.alpha = this.alpha
      }
      static Parse(CC, zC) {
        const ZC = new NC(CC.name, zC);
        return ZC.color = bC.e.FromArray(CC.color), ZC.alpha = CC.alpha, ZC
      }
    }
    NC.ForceGLSL = !1;
    class MC extends oC.c {
      constructor(CC, zC) {
        super(CC, zC), this.intersectionThreshold = zC.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let gC = !1;

    function SC() {
      gC || (gC = !0, fC.b._LinesMeshParser = (CC, zC) => NC.Parse(CC, zC))
    }(QC = NC.prototype).enableEdgesRendering ?? (QC.enableEdgesRendering = (0, WC.f)("LinesMesh", "enableEdgesRendering")), (wC = MC.prototype).enableEdgesRendering ?? (wC.enableEdgesRendering = (0, WC.f)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);