export const id = 253;
export const ids = [253];
export const modules = {
  41171: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu
    });
    class Eu {}
    Eu.AUTOSAMPLERSUFFIX = "Sampler", Eu.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", Eu.ALPHA_DISABLE = 0, Eu.ALPHA_ADD = 1, Eu.ALPHA_COMBINE = 2, Eu.ALPHA_SUBTRACT = 3, Eu.ALPHA_MULTIPLY = 4, Eu.ALPHA_MAXIMIZED = 5, Eu.ALPHA_ONEONE = 6, Eu.ALPHA_PREMULTIPLIED = 7, Eu.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Eu.ALPHA_INTERPOLATE = 9, Eu.ALPHA_SCREENMODE = 10, Eu.ALPHA_ONEONE_ONEONE = 11, Eu.ALPHA_ALPHATOCOLOR = 12, Eu.ALPHA_REVERSEONEMINUS = 13, Eu.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, Eu.ALPHA_ONEONE_ONEZERO = 15, Eu.ALPHA_EXCLUSION = 16, Eu.ALPHA_LAYER_ACCUMULATE = 17, Eu.ALPHA_MIN = 18, Eu.ALPHA_MAX = 19, Eu.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, Eu.ALPHA_REPLACE_COLOR = 21, Eu.ALPHA_EQUATION_ADD = 0, Eu.ALPHA_EQUATION_SUBSTRACT = 1, Eu.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, Eu.ALPHA_EQUATION_MAX = 3, Eu.ALPHA_EQUATION_MIN = 4, Eu.ALPHA_EQUATION_DARKEN = 5, Eu.DELAYLOADSTATE_NONE = 0, Eu.DELAYLOADSTATE_LOADED = 1, Eu.DELAYLOADSTATE_LOADING = 2, Eu.DELAYLOADSTATE_NOTLOADED = 4, Eu.NEVER = 512, Eu.ALWAYS = 519, Eu.LESS = 513, Eu.EQUAL = 514, Eu.LEQUAL = 515, Eu.GREATER = 516, Eu.GEQUAL = 518, Eu.NOTEQUAL = 517, Eu.KEEP = 7680, Eu.ZERO = 0, Eu.REPLACE = 7681, Eu.INCR = 7682, Eu.DECR = 7683, Eu.INVERT = 5386, Eu.INCR_WRAP = 34055, Eu.DECR_WRAP = 34056, Eu.TEXTURE_CLAMP_ADDRESSMODE = 0, Eu.TEXTURE_WRAP_ADDRESSMODE = 1, Eu.TEXTURE_MIRROR_ADDRESSMODE = 2, Eu.TEXTURE_REPETITION_NONE = 0, Eu.TEXTURE_REPETITION_NOISE_BLEND = 1, Eu.TEXTURE_REPETITION_HEX_TILING = 2, Eu.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, Eu.TEXTURE_REPETITION_VORONOI_BOMBING = 4, Eu.TEXTURE_CREATIONFLAG_STORAGE = 1, Eu.TEXTUREFORMAT_ALPHA = 0, Eu.TEXTUREFORMAT_LUMINANCE = 1, Eu.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Eu.TEXTUREFORMAT_RGB = 4, Eu.TEXTUREFORMAT_RGBA = 5, Eu.TEXTUREFORMAT_RED = 6, Eu.TEXTUREFORMAT_R = 6, Eu.TEXTUREFORMAT_R16_UNORM = 33322, Eu.TEXTUREFORMAT_RG16_UNORM = 33324, Eu.TEXTUREFORMAT_RGB16_UNORM = 32852, Eu.TEXTUREFORMAT_RGBA16_UNORM = 32859, Eu.TEXTUREFORMAT_R16_SNORM = 36760, Eu.TEXTUREFORMAT_RG16_SNORM = 36761, Eu.TEXTUREFORMAT_RGB16_SNORM = 36762, Eu.TEXTUREFORMAT_RGBA16_SNORM = 36763, Eu.TEXTUREFORMAT_RG = 7, Eu.TEXTUREFORMAT_RED_INTEGER = 8, Eu.TEXTUREFORMAT_R_INTEGER = 8, Eu.TEXTUREFORMAT_RG_INTEGER = 9, Eu.TEXTUREFORMAT_RGB_INTEGER = 10, Eu.TEXTUREFORMAT_RGBA_INTEGER = 11, Eu.TEXTUREFORMAT_BGRA = 12, Eu.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, Eu.TEXTUREFORMAT_DEPTH32_FLOAT = 14, Eu.TEXTUREFORMAT_DEPTH16 = 15, Eu.TEXTUREFORMAT_DEPTH24 = 16, Eu.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, Eu.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, Eu.TEXTUREFORMAT_STENCIL8 = 19, Eu.TEXTUREFORMAT_UNDEFINED = 4294967295, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, Eu.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, Eu.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, Eu.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, Eu.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, Eu.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, Eu.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, Eu.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, Eu.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, Eu.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, Eu.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, Eu.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, Eu.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, Eu.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, Eu.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, Eu.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, Eu.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, Eu.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, Eu.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, Eu.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, Eu.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, Eu.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, Eu.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, Eu.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, Eu.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, Eu.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, Eu.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, Eu.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, Eu.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, Eu.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, Eu.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, Eu.TEXTURETYPE_UNSIGNED_BYTE = 0, Eu.TEXTURETYPE_UNSIGNED_INT = 0, Eu.TEXTURETYPE_FLOAT = 1, Eu.TEXTURETYPE_HALF_FLOAT = 2, Eu.TEXTURETYPE_BYTE = 3, Eu.TEXTURETYPE_SHORT = 4, Eu.TEXTURETYPE_UNSIGNED_SHORT = 5, Eu.TEXTURETYPE_INT = 6, Eu.TEXTURETYPE_UNSIGNED_INTEGER = 7, Eu.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Eu.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Eu.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Eu.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Eu.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Eu.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Eu.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Eu.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Eu.TEXTURETYPE_UNDEFINED = 16, Eu.TEXTURE_2D = 3553, Eu.TEXTURE_2D_ARRAY = 35866, Eu.TEXTURE_CUBE_MAP = 34067, Eu.TEXTURE_CUBE_MAP_ARRAY = 3735928559, Eu.TEXTURE_3D = 32879, Eu.TEXTURE_NEAREST_SAMPLINGMODE = 1, Eu.TEXTURE_NEAREST_NEAREST = 1, Eu.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Eu.TEXTURE_LINEAR_LINEAR = 2, Eu.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Eu.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Eu.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Eu.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Eu.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Eu.TEXTURE_NEAREST_LINEAR = 7, Eu.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Eu.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Eu.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Eu.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Eu.TEXTURE_LINEAR_NEAREST = 12, Eu.TEXTURE_EXPLICIT_MODE = 0, Eu.TEXTURE_SPHERICAL_MODE = 1, Eu.TEXTURE_PLANAR_MODE = 2, Eu.TEXTURE_CUBIC_MODE = 3, Eu.TEXTURE_PROJECTION_MODE = 4, Eu.TEXTURE_SKYBOX_MODE = 5, Eu.TEXTURE_INVCUBIC_MODE = 6, Eu.TEXTURE_EQUIRECTANGULAR_MODE = 7, Eu.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Eu.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Eu.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, Eu.TEXTURE_FILTERING_QUALITY_HIGH = 64, Eu.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, Eu.TEXTURE_FILTERING_QUALITY_LOW = 8, Eu.SCALEMODE_FLOOR = 1, Eu.SCALEMODE_NEAREST = 2, Eu.SCALEMODE_CEILING = 3, Eu.MATERIAL_TextureDirtyFlag = 1, Eu.MATERIAL_LightDirtyFlag = 2, Eu.MATERIAL_FresnelDirtyFlag = 4, Eu.MATERIAL_AttributesDirtyFlag = 8, Eu.MATERIAL_MiscDirtyFlag = 16, Eu.MATERIAL_PrePassDirtyFlag = 32, Eu.MATERIAL_ImageProcessingDirtyFlag = 64, Eu.MATERIAL_AllDirtyFlag = 127, Eu.MATERIAL_TriangleFillMode = 0, Eu.MATERIAL_WireFrameFillMode = 1, Eu.MATERIAL_PointFillMode = 2, Eu.MATERIAL_PointListDrawMode = 3, Eu.MATERIAL_LineListDrawMode = 4, Eu.MATERIAL_LineLoopDrawMode = 5, Eu.MATERIAL_LineStripDrawMode = 6, Eu.MATERIAL_TriangleStripDrawMode = 7, Eu.MATERIAL_TriangleFanDrawMode = 8, Eu.MATERIAL_ClockWiseSideOrientation = 0, Eu.MATERIAL_CounterClockWiseSideOrientation = 1, Eu.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, Eu.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, Eu.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, Eu.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, Eu.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, Eu.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, Eu.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, Eu.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, Eu.ACTION_NothingTrigger = 0, Eu.ACTION_OnPickTrigger = 1, Eu.ACTION_OnLeftPickTrigger = 2, Eu.ACTION_OnRightPickTrigger = 3, Eu.ACTION_OnCenterPickTrigger = 4, Eu.ACTION_OnPickDownTrigger = 5, Eu.ACTION_OnDoublePickTrigger = 6, Eu.ACTION_OnPickUpTrigger = 7, Eu.ACTION_OnPickOutTrigger = 16, Eu.ACTION_OnLongPressTrigger = 8, Eu.ACTION_OnPointerOverTrigger = 9, Eu.ACTION_OnPointerOutTrigger = 10, Eu.ACTION_OnEveryFrameTrigger = 11, Eu.ACTION_OnIntersectionEnterTrigger = 12, Eu.ACTION_OnIntersectionExitTrigger = 13, Eu.ACTION_OnKeyDownTrigger = 14, Eu.ACTION_OnKeyUpTrigger = 15, Eu.PARTICLES_BILLBOARDMODE_Y = 2, Eu.PARTICLES_BILLBOARDMODE_ALL = 7, Eu.PARTICLES_BILLBOARDMODE_STRETCHED = 8, Eu.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, Eu.MESHES_CULLINGSTRATEGY_STANDARD = 0, Eu.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, Eu.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, Eu.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, Eu.SCENELOADER_NO_LOGGING = 0, Eu.SCENELOADER_MINIMAL_LOGGING = 1, Eu.SCENELOADER_SUMMARY_LOGGING = 2, Eu.SCENELOADER_DETAILED_LOGGING = 3, Eu.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, Eu.PREPASS_POSITION_TEXTURE_TYPE = 1, Eu.PREPASS_VELOCITY_TEXTURE_TYPE = 2, Eu.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, Eu.PREPASS_COLOR_TEXTURE_TYPE = 4, Eu.PREPASS_DEPTH_TEXTURE_TYPE = 5, Eu.PREPASS_NORMAL_TEXTURE_TYPE = 6, Eu.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, Eu.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, Eu.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, Eu.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, Eu.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, Eu.PREPASS_ALBEDO_TEXTURE_TYPE = 12, Eu.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, Eu.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, Eu.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, Eu.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, Eu.BUFFER_CREATIONFLAG_READ = 1, Eu.BUFFER_CREATIONFLAG_WRITE = 2, Eu.BUFFER_CREATIONFLAG_READWRITE = 3, Eu.BUFFER_CREATIONFLAG_UNIFORM = 4, Eu.BUFFER_CREATIONFLAG_VERTEX = 8, Eu.BUFFER_CREATIONFLAG_INDEX = 16, Eu.BUFFER_CREATIONFLAG_STORAGE = 32, Eu.BUFFER_CREATIONFLAG_INDIRECT = 64, Eu.RENDERPASS_MAIN = 0, Eu.INPUT_ALT_KEY = 18, Eu.INPUT_CTRL_KEY = 17, Eu.INPUT_META_KEY1 = 91, Eu.INPUT_META_KEY2 = 92, Eu.INPUT_META_KEY3 = 93, Eu.INPUT_SHIFT_KEY = 16, Eu.SNAPSHOTRENDERING_STANDARD = 0, Eu.SNAPSHOTRENDERING_FAST = 1, Eu.PERSPECTIVE_CAMERA = 0, Eu.ORTHOGRAPHIC_CAMERA = 1, Eu.FOVMODE_VERTICAL_FIXED = 0, Eu.FOVMODE_HORIZONTAL_FIXED = 1, Eu.RIG_MODE_NONE = 0, Eu.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, Eu.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, Eu.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, Eu.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, Eu.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, Eu.RIG_MODE_VR = 20, Eu.RIG_MODE_CUSTOM = 22, Eu.MAX_SUPPORTED_UV_SETS = 6, Eu.GL_ALPHA_EQUATION_ADD = 32774, Eu.GL_ALPHA_EQUATION_MIN = 32775, Eu.GL_ALPHA_EQUATION_MAX = 32776, Eu.GL_ALPHA_EQUATION_SUBTRACT = 32778, Eu.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, Eu.GL_ALPHA_FUNCTION_SRC = 768, Eu.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, Eu.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, Eu.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, Eu.GL_ALPHA_FUNCTION_DST_ALPHA = 772, Eu.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, Eu.GL_ALPHA_FUNCTION_DST_COLOR = 774, Eu.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, Eu.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, Eu.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, Eu.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, Eu.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, Eu.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, Eu.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, Eu.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, Eu.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, Eu.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, Eu.SnippetUrl = "https://snippet.babylonjs.com", Eu.FOGMODE_NONE = 0, Eu.FOGMODE_EXP = 1, Eu.FOGMODE_EXP2 = 2, Eu.FOGMODE_LINEAR = 3, Eu.BYTE = 5120, Eu.UNSIGNED_BYTE = 5121, Eu.SHORT = 5122, Eu.UNSIGNED_SHORT = 5123, Eu.INT = 5124, Eu.UNSIGNED_INT = 5125, Eu.FLOAT = 5126, Eu.HALF_FLOAT = 5131, Eu.PositionKind = "position", Eu.NormalKind = "normal", Eu.TangentKind = "tangent", Eu.UVKind = "uv", Eu.UV2Kind = "uv2", Eu.UV3Kind = "uv3", Eu.UV4Kind = "uv4", Eu.UV5Kind = "uv5", Eu.UV6Kind = "uv6", Eu.ColorKind = "color", Eu.ColorInstanceKind = "instanceColor", Eu.MatricesIndicesKind = "matricesIndices", Eu.MatricesWeightsKind = "matricesWeights", Eu.MatricesIndicesExtraKind = "matricesIndicesExtra", Eu.MatricesWeightsExtraKind = "matricesWeightsExtra", Eu.ANIMATIONTYPE_FLOAT = 0, Eu.ANIMATIONTYPE_VECTOR3 = 1, Eu.ANIMATIONTYPE_QUATERNION = 2, Eu.ANIMATIONTYPE_MATRIX = 3, Eu.ANIMATIONTYPE_COLOR3 = 4, Eu.ANIMATIONTYPE_COLOR4 = 7, Eu.ANIMATIONTYPE_VECTOR2 = 5, Eu.ANIMATIONTYPE_SIZE = 6, Eu.ShadowMinZ = 0, Eu.ShadowMaxZ = 1e4, Eu.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, Eu.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  41151: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Nu
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(36830),
      mu = yu(39823),
      Ju = yu(39784);
    let Nu = (() => {
      var uu;
      let Ru, yu, Nu, Xu, Vu = mu.e,
        ru = [];
      return uu = class extends Vu {
        constructor() {
          super(...arguments), this._position = (0, Eu.l)(this, ru), this._needProjectionMatrixCompute = !0, this._viewMatrix = Qu.d.Identity(), this._projectionMatrix = Qu.d.Identity()
        }
        _setPosition(uu) {
          this._position = uu
        }
        get position() {
          return this._position
        }
        set position(uu) {
          this._setPosition(uu)
        }
        _setDirection(uu) {
          this._direction = uu
        }
        get direction() {
          return this._direction
        }
        set direction(uu) {
          this._setDirection(uu)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(uu) {
          this._shadowMinZ = uu, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(uu) {
          this._shadowMaxZ = uu, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = Qu.p.Zero()), Qu.p.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = Qu.p.Zero()), Qu.p.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(uu) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(uu) {
          return this.direction = Qu.p.Normalize(uu.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const uu = Qu.p.Cross(this.direction, Ju.b.Y),
            Ru = Qu.p.Cross(uu, this.direction);
          return Qu.p.RotationFromAxis(uu, Ru, this.direction)
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
          super._initCache(), this._cache.position = Qu.p.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(uu) {
          return !uu && this.isSynchronized() ? (this._currentRenderId = this.lD().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.Oyu(this.position), this._worldMatrix || (this._worldMatrix = Qu.d.Identity()), Qu.d.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(uu) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : uu?.minZ || 0
        }
        getDepthMaxZ(uu) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : uu?.maxZ || 1e4
        }
        setShadowProjectionMatrix(uu, Ru, yu) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(Ru, yu, uu) : this._setDefaultShadowProjectionMatrix(uu, Ru, yu), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(uu) {
          const Ru = Qu.m.MS[0];
          let yu = this.position;
          this.computeTransformedInformation() && (yu = this.transformedPosition), Qu.p.NormalizeToRef(this.getShadowDirection(uu), Ru), 1 === Math.abs(Qu.p.Dot(Ru, Qu.p.Up())) && (Ru.z = 1e-13);
          const Eu = Qu.m.MS[1];
          return yu.addToRef(Ru, Eu), Qu.d.LookAtLHToRef(yu, Eu, Qu.p.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(uu, Ru) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, uu ?? this._viewMatrix, Ru ?? []), this._projectionMatrix
        }
      }, (() => {
        const Qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Vu[Symbol.metadata] ?? null) : void 0;
        Ru = [(0, Ku.G)()], yu = [(0, Ku.G)()], Nu = [(0, Ku.K)()], Xu = [(0, Ku.K)()], (0, Eu.h)(uu, null, Ru, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: uu => "position" in uu,
            get: uu => uu.position
          },
          metadata: Qu
        }, null, ru), (0, Eu.h)(uu, null, yu, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: uu => "direction" in uu,
            get: uu => uu.direction
          },
          metadata: Qu
        }, null, ru), (0, Eu.h)(uu, null, Nu, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: uu => "shadowMinZ" in uu,
            get: uu => uu.shadowMinZ
          },
          metadata: Qu
        }, null, ru), (0, Eu.h)(uu, null, Xu, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: uu => "shadowMaxZ" in uu,
            get: uu => uu.shadowMaxZ
          },
          metadata: Qu
        }, null, ru), Qu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Qu
        })
      })(), uu
    })()
  },
  41165: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    var Eu = yu(40054);
    class Ku extends Eu.h {
      constructor(uu, Ru, yu, Ku, Qu) {
        let mu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ju = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Nu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          Xu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Vu = arguments.length > 9 ? arguments[9] : void 0,
          ru = arguments.length > 10 ? arguments[10] : void 0,
          Bu = arguments.length > 11 ? arguments[11] : void 0,
          xu = arguments.length > 12 ? arguments[12] : void 0;
        super(null, Qu, !mu, Ju, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, Vu), this.format = Ku, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== Xu || (Nu = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== Xu || (Nu = 1), this._texture = this._engine.createRawTexture(uu, Ru, yu, Ku, mu, Ju, Nu, null, Xu, Vu ?? 0, ru ?? !1, xu), this.wrapU = Eu.h.CLAMP_ADDRESSMODE, this.wrapV = Eu.h.CLAMP_ADDRESSMODE, this._waitingForData = !!Bu && !uu)
      }
      update(uu) {
        this.updateMipLevel(uu, 0)
      }
      updateMipLevel(uu, Ru) {
        this._getEngine().updateRawTexture(this._texture, uu, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, Ru), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const uu = new Ku(null, this.getSize().width, this.getSize().height, this.format, this.lD(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return uu._texture = this._texture, this._texture.incrementReferences(), uu
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(uu, Ru, yu, Eu) {
        return new Ku(uu, Ru, yu, 1, Eu, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(uu, Ru, yu, Eu) {
        return new Ku(uu, Ru, yu, 2, Eu, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(uu, Ru, yu, Eu) {
        return new Ku(uu, Ru, yu, 0, Eu, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(uu, Ru, yu, Eu) {
        return new Ku(uu, Ru, yu, 4, Eu, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(uu, Ru, yu, Eu) {
        return new Ku(uu, Ru, yu, 5, Eu, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(uu, Ru, yu, Eu) {
        return new Ku(uu, Ru, yu, 5, Eu, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(uu, Ru, yu, Qu) {
        let mu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ju = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Nu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Eu.h.TRILINEAR_SAMPLINGMODE;
        return new Ku(uu, Ru, yu, 6, Qu, mu, Ju, Nu, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(uu, Ru, yu, Qu) {
        let mu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ju = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Nu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Eu.h.TRILINEAR_SAMPLINGMODE;
        return new Ku(uu, Ru, yu, 6, Qu, mu, Ju, Nu, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  41197: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu.e
    });
    var Eu = yu(40008);
    (0, Eu.i)()
  },
  41154: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu.e
    });
    var Eu = yu(40035);
    (0, Eu.i)()
  },
  40035: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Bu,
      i: () => pu
    });
    var Eu, Ku, Qu = yu(36991),
      mu = yu(39706),
      Ju = yu(39984),
      Nu = yu(40038),
      Xu = yu(39863),
      Vu = yu(40047),
      ru = yu(39430);
    class Bu extends Ju.e {
      _isShaderMaterial(uu) {
        return !!uu && "ShaderMaterial" === uu.getClassName()
      }
      constructor(uu) {
        let Ru = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Eu = arguments.length > 5 ? arguments[5] : void 0,
          Ku = arguments.length > 6 ? arguments[6] : void 0,
          Ju = arguments.length > 7 ? arguments[7] : void 0;
        super(uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Ru, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Eu, this.useVertexAlpha = Ku, this.color = new Qu.d(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, Ru && (this.color = Ru.color.clone(), this.alpha = Ru.alpha, this.useVertexColor = Ru.useVertexColor, this.useVertexAlpha = Ru.useVertexAlpha), this.intersectionThreshold = .1;
        const Nu = {
          attributes: [mu.h.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Nu.defines.push("#define VERTEXALPHA") : Nu.needAlphaBlending = !1, this.useVertexColor ? (Nu.defines.push("#define VERTEXCOLOR"), Nu.attributes.push(mu.h.ColorKind)) : (Nu.uniforms.push("color"), this._color4 = new Qu.h), Ju) this.material = Ju;
        else {
          this.lD().eS().isWebGPU && !Bu.ForceGLSL && (this._shaderLanguage = 1), Nu.shaderLanguage = this._shaderLanguage, Nu.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([yu.e(334).then((() => yu(42114))), yu.e(340).then((() => yu(42120)))]) : await Promise.all([yu.e(316).then((() => yu(42122))), yu.e(322).then((() => yu(42126)))])
          };
          const uu = new Vu.s("colorShader", this.lD(), "color", Nu, !1);
          uu.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(uu)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(uu) {
        const Ru = this.material;
        if (Ru === uu) return;
        const yu = Ru && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(uu), yu && Ru?.dispose()
      }
      _setInternalMaterial(uu) {
        this._setMaterial(uu), this.material && (this.material.fillMode = Xu.d.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(uu) {}
      _bind(uu, Ru) {
        if (!this._geometry) return this;
        const yu = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Ru, yu) : this._geometry._bind(Ru, yu, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: uu,
            g: Ru,
            b: yu
          } = this.color;
          this._color4.set(uu, Ru, yu, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(uu, Ru, yu) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Eu = this.lD().eS();
        return this._unIndexed ? Eu.drawArraysType(Xu.d.LineListDrawMode, uu.verticesStart, uu.verticesCount, yu) : Eu.drawElementsType(Xu.d.LineListDrawMode, uu.indexStart, uu.indexCount, yu), this
      }
      dispose(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Ru) && this.material?.dispose(!1, !1, !0), super.dispose(uu)
      }
      clone(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        if (Ru && void 0 === Ru._addToSceneRootNodes) {
          const yu = Ru;
          return yu.source = this, new Bu(uu, this.lD(), yu.parent, yu.source, yu.doNotCloneChildren)
        }
        return new Bu(uu, this.lD(), Ru, this, yu)
      }
      createInstance(uu) {
        const Ru = new xu(uu, this);
        if (this.bI) {
          Ru.bI = {};
          for (const uu in this.bI) Ru.bI[uu] = this.bI[uu]
        }
        return Ru
      }
      serialize(uu) {
        super.serialize(uu), uu.color = this.color.AEu(), uu.alpha = this.alpha
      }
      static Parse(uu, Ru) {
        const yu = new Bu(uu.name, Ru);
        return yu.color = Qu.d.FromArray(uu.color), yu.alpha = uu.alpha, yu
      }
    }
    Bu.ForceGLSL = !1;
    class xu extends Nu.c {
      constructor(uu, Ru) {
        super(uu, Ru), this.intersectionThreshold = Ru.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let Su = !1;

    function pu() {
      Su || (Su = !0, Ju.e._LinesMeshParser = (uu, Ru) => Bu.Parse(uu, Ru))
    }(Eu = Bu.prototype).enableEdgesRendering ?? (Eu.enableEdgesRendering = (0, ru.i)("LinesMesh", "enableEdgesRendering")), (Ku = xu.prototype).enableEdgesRendering ?? (Ku.enableEdgesRendering = (0, ru.i)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);