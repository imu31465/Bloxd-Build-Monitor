export const id = 255;
export const ids = [255];
export const modules = {
  41056: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    class Bb {}
    Bb.AUTOSAMPLERSUFFIX = "Sampler", Bb.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", Bb.ALPHA_DISABLE = 0, Bb.ALPHA_ADD = 1, Bb.ALPHA_COMBINE = 2, Bb.ALPHA_SUBTRACT = 3, Bb.ALPHA_MULTIPLY = 4, Bb.ALPHA_MAXIMIZED = 5, Bb.ALPHA_ONEONE = 6, Bb.ALPHA_PREMULTIPLIED = 7, Bb.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Bb.ALPHA_INTERPOLATE = 9, Bb.ALPHA_SCREENMODE = 10, Bb.ALPHA_ONEONE_ONEONE = 11, Bb.ALPHA_ALPHATOCOLOR = 12, Bb.ALPHA_REVERSEONEMINUS = 13, Bb.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, Bb.ALPHA_ONEONE_ONEZERO = 15, Bb.ALPHA_EXCLUSION = 16, Bb.ALPHA_LAYER_ACCUMULATE = 17, Bb.ALPHA_MIN = 18, Bb.ALPHA_MAX = 19, Bb.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, Bb.ALPHA_REPLACE_COLOR = 21, Bb.ALPHA_EQUATION_ADD = 0, Bb.ALPHA_EQUATION_SUBSTRACT = 1, Bb.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, Bb.ALPHA_EQUATION_MAX = 3, Bb.ALPHA_EQUATION_MIN = 4, Bb.ALPHA_EQUATION_DARKEN = 5, Bb.DELAYLOADSTATE_NONE = 0, Bb.DELAYLOADSTATE_LOADED = 1, Bb.DELAYLOADSTATE_LOADING = 2, Bb.DELAYLOADSTATE_NOTLOADED = 4, Bb.NEVER = 512, Bb.ALWAYS = 519, Bb.LESS = 513, Bb.EQUAL = 514, Bb.LEQUAL = 515, Bb.GREATER = 516, Bb.GEQUAL = 518, Bb.NOTEQUAL = 517, Bb.KEEP = 7680, Bb.ZERO = 0, Bb.REPLACE = 7681, Bb.INCR = 7682, Bb.DECR = 7683, Bb.INVERT = 5386, Bb.INCR_WRAP = 34055, Bb.DECR_WRAP = 34056, Bb.TEXTURE_CLAMP_ADDRESSMODE = 0, Bb.TEXTURE_WRAP_ADDRESSMODE = 1, Bb.TEXTURE_MIRROR_ADDRESSMODE = 2, Bb.TEXTURE_REPETITION_NONE = 0, Bb.TEXTURE_REPETITION_NOISE_BLEND = 1, Bb.TEXTURE_REPETITION_HEX_TILING = 2, Bb.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, Bb.TEXTURE_REPETITION_VORONOI_BOMBING = 4, Bb.TEXTURE_CREATIONFLAG_STORAGE = 1, Bb.TEXTUREFORMAT_ALPHA = 0, Bb.TEXTUREFORMAT_LUMINANCE = 1, Bb.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Bb.TEXTUREFORMAT_RGB = 4, Bb.TEXTUREFORMAT_RGBA = 5, Bb.TEXTUREFORMAT_RED = 6, Bb.TEXTUREFORMAT_R = 6, Bb.TEXTUREFORMAT_R16_UNORM = 33322, Bb.TEXTUREFORMAT_RG16_UNORM = 33324, Bb.TEXTUREFORMAT_RGB16_UNORM = 32852, Bb.TEXTUREFORMAT_RGBA16_UNORM = 32859, Bb.TEXTUREFORMAT_R16_SNORM = 36760, Bb.TEXTUREFORMAT_RG16_SNORM = 36761, Bb.TEXTUREFORMAT_RGB16_SNORM = 36762, Bb.TEXTUREFORMAT_RGBA16_SNORM = 36763, Bb.TEXTUREFORMAT_RG = 7, Bb.TEXTUREFORMAT_RED_INTEGER = 8, Bb.TEXTUREFORMAT_R_INTEGER = 8, Bb.TEXTUREFORMAT_RG_INTEGER = 9, Bb.TEXTUREFORMAT_RGB_INTEGER = 10, Bb.TEXTUREFORMAT_RGBA_INTEGER = 11, Bb.TEXTUREFORMAT_BGRA = 12, Bb.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, Bb.TEXTUREFORMAT_DEPTH32_FLOAT = 14, Bb.TEXTUREFORMAT_DEPTH16 = 15, Bb.TEXTUREFORMAT_DEPTH24 = 16, Bb.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, Bb.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, Bb.TEXTUREFORMAT_STENCIL8 = 19, Bb.TEXTUREFORMAT_UNDEFINED = 4294967295, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, Bb.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, Bb.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, Bb.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, Bb.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, Bb.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, Bb.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, Bb.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, Bb.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, Bb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, Bb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, Bb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, Bb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, Bb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, Bb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, Bb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, Bb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, Bb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, Bb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, Bb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, Bb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, Bb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, Bb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, Bb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, Bb.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, Bb.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, Bb.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, Bb.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, Bb.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, Bb.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, Bb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, Bb.TEXTURETYPE_UNSIGNED_BYTE = 0, Bb.TEXTURETYPE_UNSIGNED_INT = 0, Bb.TEXTURETYPE_FLOAT = 1, Bb.TEXTURETYPE_HALF_FLOAT = 2, Bb.TEXTURETYPE_BYTE = 3, Bb.TEXTURETYPE_SHORT = 4, Bb.TEXTURETYPE_UNSIGNED_SHORT = 5, Bb.TEXTURETYPE_INT = 6, Bb.TEXTURETYPE_UNSIGNED_INTEGER = 7, Bb.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Bb.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Bb.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Bb.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Bb.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Bb.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Bb.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Bb.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Bb.TEXTURETYPE_UNDEFINED = 16, Bb.TEXTURE_2D = 3553, Bb.TEXTURE_2D_ARRAY = 35866, Bb.TEXTURE_CUBE_MAP = 34067, Bb.TEXTURE_CUBE_MAP_ARRAY = 3735928559, Bb.TEXTURE_3D = 32879, Bb.TEXTURE_NEAREST_SAMPLINGMODE = 1, Bb.TEXTURE_NEAREST_NEAREST = 1, Bb.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Bb.TEXTURE_LINEAR_LINEAR = 2, Bb.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Bb.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Bb.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Bb.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Bb.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Bb.TEXTURE_NEAREST_LINEAR = 7, Bb.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Bb.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Bb.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Bb.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Bb.TEXTURE_LINEAR_NEAREST = 12, Bb.TEXTURE_EXPLICIT_MODE = 0, Bb.TEXTURE_SPHERICAL_MODE = 1, Bb.TEXTURE_PLANAR_MODE = 2, Bb.TEXTURE_CUBIC_MODE = 3, Bb.TEXTURE_PROJECTION_MODE = 4, Bb.TEXTURE_SKYBOX_MODE = 5, Bb.TEXTURE_INVCUBIC_MODE = 6, Bb.TEXTURE_EQUIRECTANGULAR_MODE = 7, Bb.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Bb.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Bb.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, Bb.TEXTURE_FILTERING_QUALITY_HIGH = 64, Bb.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, Bb.TEXTURE_FILTERING_QUALITY_LOW = 8, Bb.SCALEMODE_FLOOR = 1, Bb.SCALEMODE_NEAREST = 2, Bb.SCALEMODE_CEILING = 3, Bb.MATERIAL_TextureDirtyFlag = 1, Bb.MATERIAL_LightDirtyFlag = 2, Bb.MATERIAL_FresnelDirtyFlag = 4, Bb.MATERIAL_AttributesDirtyFlag = 8, Bb.MATERIAL_MiscDirtyFlag = 16, Bb.MATERIAL_PrePassDirtyFlag = 32, Bb.MATERIAL_ImageProcessingDirtyFlag = 64, Bb.MATERIAL_AllDirtyFlag = 127, Bb.MATERIAL_TriangleFillMode = 0, Bb.MATERIAL_WireFrameFillMode = 1, Bb.MATERIAL_PointFillMode = 2, Bb.MATERIAL_PointListDrawMode = 3, Bb.MATERIAL_LineListDrawMode = 4, Bb.MATERIAL_LineLoopDrawMode = 5, Bb.MATERIAL_LineStripDrawMode = 6, Bb.MATERIAL_TriangleStripDrawMode = 7, Bb.MATERIAL_TriangleFanDrawMode = 8, Bb.MATERIAL_ClockWiseSideOrientation = 0, Bb.MATERIAL_CounterClockWiseSideOrientation = 1, Bb.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, Bb.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, Bb.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, Bb.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, Bb.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, Bb.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, Bb.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, Bb.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, Bb.ACTION_NothingTrigger = 0, Bb.ACTION_OnPickTrigger = 1, Bb.ACTION_OnLeftPickTrigger = 2, Bb.ACTION_OnRightPickTrigger = 3, Bb.ACTION_OnCenterPickTrigger = 4, Bb.ACTION_OnPickDownTrigger = 5, Bb.ACTION_OnDoublePickTrigger = 6, Bb.ACTION_OnPickUpTrigger = 7, Bb.ACTION_OnPickOutTrigger = 16, Bb.ACTION_OnLongPressTrigger = 8, Bb.ACTION_OnPointerOverTrigger = 9, Bb.ACTION_OnPointerOutTrigger = 10, Bb.ACTION_OnEveryFrameTrigger = 11, Bb.ACTION_OnIntersectionEnterTrigger = 12, Bb.ACTION_OnIntersectionExitTrigger = 13, Bb.ACTION_OnKeyDownTrigger = 14, Bb.ACTION_OnKeyUpTrigger = 15, Bb.PARTICLES_BILLBOARDMODE_Y = 2, Bb.PARTICLES_BILLBOARDMODE_ALL = 7, Bb.PARTICLES_BILLBOARDMODE_STRETCHED = 8, Bb.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, Bb.MESHES_CULLINGSTRATEGY_STANDARD = 0, Bb.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, Bb.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, Bb.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, Bb.SCENELOADER_NO_LOGGING = 0, Bb.SCENELOADER_MINIMAL_LOGGING = 1, Bb.SCENELOADER_SUMMARY_LOGGING = 2, Bb.SCENELOADER_DETAILED_LOGGING = 3, Bb.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, Bb.PREPASS_POSITION_TEXTURE_TYPE = 1, Bb.PREPASS_VELOCITY_TEXTURE_TYPE = 2, Bb.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, Bb.PREPASS_COLOR_TEXTURE_TYPE = 4, Bb.PREPASS_DEPTH_TEXTURE_TYPE = 5, Bb.PREPASS_NORMAL_TEXTURE_TYPE = 6, Bb.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, Bb.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, Bb.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, Bb.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, Bb.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, Bb.PREPASS_ALBEDO_TEXTURE_TYPE = 12, Bb.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, Bb.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, Bb.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, Bb.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, Bb.BUFFER_CREATIONFLAG_READ = 1, Bb.BUFFER_CREATIONFLAG_WRITE = 2, Bb.BUFFER_CREATIONFLAG_READWRITE = 3, Bb.BUFFER_CREATIONFLAG_UNIFORM = 4, Bb.BUFFER_CREATIONFLAG_VERTEX = 8, Bb.BUFFER_CREATIONFLAG_INDEX = 16, Bb.BUFFER_CREATIONFLAG_STORAGE = 32, Bb.BUFFER_CREATIONFLAG_INDIRECT = 64, Bb.RENDERPASS_MAIN = 0, Bb.INPUT_ALT_KEY = 18, Bb.INPUT_CTRL_KEY = 17, Bb.INPUT_META_KEY1 = 91, Bb.INPUT_META_KEY2 = 92, Bb.INPUT_META_KEY3 = 93, Bb.INPUT_SHIFT_KEY = 16, Bb.SNAPSHOTRENDERING_STANDARD = 0, Bb.SNAPSHOTRENDERING_FAST = 1, Bb.PERSPECTIVE_CAMERA = 0, Bb.ORTHOGRAPHIC_CAMERA = 1, Bb.FOVMODE_VERTICAL_FIXED = 0, Bb.FOVMODE_HORIZONTAL_FIXED = 1, Bb.RIG_MODE_NONE = 0, Bb.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, Bb.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, Bb.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, Bb.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, Bb.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, Bb.RIG_MODE_VR = 20, Bb.RIG_MODE_CUSTOM = 22, Bb.MAX_SUPPORTED_UV_SETS = 6, Bb.GL_ALPHA_EQUATION_ADD = 32774, Bb.GL_ALPHA_EQUATION_MIN = 32775, Bb.GL_ALPHA_EQUATION_MAX = 32776, Bb.GL_ALPHA_EQUATION_SUBTRACT = 32778, Bb.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, Bb.GL_ALPHA_FUNCTION_SRC = 768, Bb.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, Bb.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, Bb.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, Bb.GL_ALPHA_FUNCTION_DST_ALPHA = 772, Bb.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, Bb.GL_ALPHA_FUNCTION_DST_COLOR = 774, Bb.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, Bb.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, Bb.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, Bb.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, Bb.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, Bb.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, Bb.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, Bb.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, Bb.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, Bb.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, Bb.SnippetUrl = "https://snippet.babylonjs.com", Bb.FOGMODE_NONE = 0, Bb.FOGMODE_EXP = 1, Bb.FOGMODE_EXP2 = 2, Bb.FOGMODE_LINEAR = 3, Bb.BYTE = 5120, Bb.UNSIGNED_BYTE = 5121, Bb.SHORT = 5122, Bb.UNSIGNED_SHORT = 5123, Bb.INT = 5124, Bb.UNSIGNED_INT = 5125, Bb.FLOAT = 5126, Bb.HALF_FLOAT = 5131, Bb.PositionKind = "position", Bb.NormalKind = "normal", Bb.TangentKind = "tangent", Bb.UVKind = "uv", Bb.UV2Kind = "uv2", Bb.UV3Kind = "uv3", Bb.UV4Kind = "uv4", Bb.UV5Kind = "uv5", Bb.UV6Kind = "uv6", Bb.ColorKind = "color", Bb.ColorInstanceKind = "instanceColor", Bb.MatricesIndicesKind = "matricesIndices", Bb.MatricesWeightsKind = "matricesWeights", Bb.MatricesIndicesExtraKind = "matricesIndicesExtra", Bb.MatricesWeightsExtraKind = "matricesWeightsExtra", Bb.ANIMATIONTYPE_FLOAT = 0, Bb.ANIMATIONTYPE_VECTOR3 = 1, Bb.ANIMATIONTYPE_QUATERNION = 2, Bb.ANIMATIONTYPE_MATRIX = 3, Bb.ANIMATIONTYPE_COLOR3 = 4, Bb.ANIMATIONTYPE_COLOR4 = 7, Bb.ANIMATIONTYPE_VECTOR2 = 5, Bb.ANIMATIONTYPE_SIZE = 6, Bb.ShadowMinZ = 0, Bb.ShadowMaxZ = 1e4, Bb.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, Bb.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  41030: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Yb
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(36727),
      Ub = hb(39700),
      Lb = hb(39672);
    let Yb = (() => {
      var bb;
      let ub, hb, Yb, Sb, ab = Ub.b,
        Hb = [];
      return bb = class extends ab {
        constructor() {
          super(...arguments), this._position = (0, Bb.k)(this, Hb), this._needProjectionMatrixCompute = !0, this._viewMatrix = Gb.d.Identity(), this._projectionMatrix = Gb.d.Identity()
        }
        _setPosition(bb) {
          this._position = bb
        }
        get position() {
          return this._position
        }
        set position(bb) {
          this._setPosition(bb)
        }
        _setDirection(bb) {
          this._direction = bb
        }
        get direction() {
          return this._direction
        }
        set direction(bb) {
          this._setDirection(bb)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(bb) {
          this._shadowMinZ = bb, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(bb) {
          this._shadowMaxZ = bb, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = Gb.q.Zero()), Gb.q.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = Gb.q.Zero()), Gb.q.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(bb) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(bb) {
          return this.direction = Gb.q.Normalize(bb.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const bb = Gb.q.Cross(this.direction, Lb.e.Y),
            ub = Gb.q.Cross(bb, this.direction);
          return Gb.q.RotationFromAxis(bb, ub, this.direction)
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
          super._initCache(), this._cache.position = Gb.q.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(bb) {
          return !bb && this.isSynchronized() ? (this._currentRenderId = this.ZN().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.mD(this.position), this._worldMatrix || (this._worldMatrix = Gb.d.Identity()), Gb.d.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(bb) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : bb?.minZ || 0
        }
        getDepthMaxZ(bb) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : bb?.maxZ || 1e4
        }
        setShadowProjectionMatrix(bb, ub, hb) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(ub, hb, bb) : this._setDefaultShadowProjectionMatrix(bb, ub, hb), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(bb) {
          const ub = Gb.i.YX[0];
          let hb = this.position;
          this.computeTransformedInformation() && (hb = this.transformedPosition), Gb.q.NormalizeToRef(this.getShadowDirection(bb), ub), 1 === Math.abs(Gb.q.Dot(ub, Gb.q.Up())) && (ub.z = 1e-13);
          const Bb = Gb.i.YX[1];
          return hb.addToRef(ub, Bb), Gb.d.LookAtLHToRef(hb, Bb, Gb.q.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(bb, ub) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, bb ?? this._viewMatrix, ub ?? []), this._projectionMatrix
        }
      }, (() => {
        const Gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(ab[Symbol.metadata] ?? null) : void 0;
        ub = [(0, Ob.H)()], hb = [(0, Ob.H)()], Yb = [(0, Ob.K)()], Sb = [(0, Ob.K)()], (0, Bb.h)(bb, null, ub, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: bb => "position" in bb,
            get: bb => bb.position
          },
          metadata: Gb
        }, null, Hb), (0, Bb.h)(bb, null, hb, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: bb => "direction" in bb,
            get: bb => bb.direction
          },
          metadata: Gb
        }, null, Hb), (0, Bb.h)(bb, null, Yb, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "shadowMinZ" in bb,
            get: bb => bb.shadowMinZ
          },
          metadata: Gb
        }, null, Hb), (0, Bb.h)(bb, null, Sb, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "shadowMaxZ" in bb,
            get: bb => bb.shadowMaxZ
          },
          metadata: Gb
        }, null, Hb), Gb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Gb
        })
      })(), bb
    })()
  },
  41051: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob
    });
    var Bb = hb(39932);
    class Ob extends Bb.f {
      constructor(bb, ub, hb, Ob, Gb) {
        let Ub = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Lb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          Sb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          ab = arguments.length > 9 ? arguments[9] : void 0,
          Hb = arguments.length > 10 ? arguments[10] : void 0,
          wb = arguments.length > 11 ? arguments[11] : void 0,
          Zb = arguments.length > 12 ? arguments[12] : void 0;
        super(null, Gb, !Ub, Lb, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, ab), this.format = Ob, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== Sb || (Yb = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== Sb || (Yb = 1), this._texture = this._engine.createRawTexture(bb, ub, hb, Ob, Ub, Lb, Yb, null, Sb, ab ?? 0, Hb ?? !1, Zb), this.wrapU = Bb.f.CLAMP_ADDRESSMODE, this.wrapV = Bb.f.CLAMP_ADDRESSMODE, this._waitingForData = !!wb && !bb)
      }
      update(bb) {
        this.updateMipLevel(bb, 0)
      }
      updateMipLevel(bb, ub) {
        this._getEngine().updateRawTexture(this._texture, bb, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, ub), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const bb = new Ob(null, this.getSize().width, this.getSize().height, this.format, this.ZN(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return bb._texture = this._texture, this._texture.incrementReferences(), bb
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(bb, ub, hb, Bb) {
        return new Ob(bb, ub, hb, 1, Bb, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(bb, ub, hb, Bb) {
        return new Ob(bb, ub, hb, 2, Bb, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(bb, ub, hb, Bb) {
        return new Ob(bb, ub, hb, 0, Bb, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(bb, ub, hb, Bb) {
        return new Ob(bb, ub, hb, 4, Bb, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(bb, ub, hb, Bb) {
        return new Ob(bb, ub, hb, 5, Bb, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(bb, ub, hb, Bb) {
        return new Ob(bb, ub, hb, 5, Bb, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(bb, ub, hb, Gb) {
        let Ub = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Lb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Yb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Bb.f.TRILINEAR_SAMPLINGMODE;
        return new Ob(bb, ub, hb, 6, Gb, Ub, Lb, Yb, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(bb, ub, hb, Gb) {
        let Ub = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Lb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Yb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Bb.f.TRILINEAR_SAMPLINGMODE;
        return new Ob(bb, ub, hb, 6, Gb, Ub, Lb, Yb, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  41097: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb.c
    });
    var Bb = hb(39886);
    (0, Bb.e)()
  },
  41037: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb.d
    });
    var Bb = hb(39914);
    (0, Bb.e)()
  },
  39914: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => wb,
      e: () => pb
    });
    var Bb, Ob, Gb = hb(36893),
      Ub = hb(39609),
      Lb = hb(39854),
      Yb = hb(39921),
      Sb = hb(39728),
      ab = hb(39928),
      Hb = hb(39333);
    class wb extends Lb.c {
      _isShaderMaterial(bb) {
        return !!bb && "ShaderMaterial" === bb.getClassName()
      }
      constructor(bb) {
        let ub = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Bb = arguments.length > 5 ? arguments[5] : void 0,
          Ob = arguments.length > 6 ? arguments[6] : void 0,
          Lb = arguments.length > 7 ? arguments[7] : void 0;
        super(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, ub, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Bb, this.useVertexAlpha = Ob, this.color = new Gb.b(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, ub && (this.color = ub.color.clone(), this.alpha = ub.alpha, this.useVertexColor = ub.useVertexColor, this.useVertexAlpha = ub.useVertexAlpha), this.intersectionThreshold = .1;
        const Yb = {
          attributes: [Ub.i.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Yb.defines.push("#define VERTEXALPHA") : Yb.needAlphaBlending = !1, this.useVertexColor ? (Yb.defines.push("#define VERTEXCOLOR"), Yb.attributes.push(Ub.i.ColorKind)) : (Yb.uniforms.push("color"), this._color4 = new Gb.c), Lb) this.material = Lb;
        else {
          this.ZN().UX().isWebGPU && !wb.ForceGLSL && (this._shaderLanguage = 1), Yb.shaderLanguage = this._shaderLanguage, Yb.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([hb.e(335).then((() => hb(41974))), hb.e(341).then((() => hb(41980)))]) : await Promise.all([hb.e(317).then((() => hb(41982))), hb.e(323).then((() => hb(41987)))])
          };
          const bb = new ab.p("colorShader", this.ZN(), "color", Yb, !1);
          bb.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(bb)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(bb) {
        const ub = this.material;
        if (ub === bb) return;
        const hb = ub && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(bb), hb && ub?.dispose()
      }
      _setInternalMaterial(bb) {
        this._setMaterial(bb), this.material && (this.material.fillMode = Sb.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(bb) {}
      _bind(bb, ub) {
        if (!this._geometry) return this;
        const hb = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(ub, hb) : this._geometry._bind(ub, hb, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: bb,
            g: ub,
            b: hb
          } = this.color;
          this._color4.set(bb, ub, hb, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(bb, ub, hb) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Bb = this.ZN().UX();
        return this._unIndexed ? Bb.drawArraysType(Sb.e.LineListDrawMode, bb.verticesStart, bb.verticesCount, hb) : Bb.drawElementsType(Sb.e.LineListDrawMode, bb.indexStart, bb.indexCount, hb), this
      }
      dispose(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || ub) && this.material?.dispose(!1, !1, !0), super.dispose(bb)
      }
      clone(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        if (ub && void 0 === ub._addToSceneRootNodes) {
          const hb = ub;
          return hb.source = this, new wb(bb, this.ZN(), hb.parent, hb.source, hb.doNotCloneChildren)
        }
        return new wb(bb, this.ZN(), ub, this, hb)
      }
      createInstance(bb) {
        const ub = new Zb(bb, this);
        if (this.Fs) {
          ub.Fs = {};
          for (const bb in this.Fs) ub.Fs[bb] = this.Fs[bb]
        }
        return ub
      }
      serialize(bb) {
        super.serialize(bb), bb.color = this.color.ZBb(), bb.alpha = this.alpha
      }
      static Parse(bb, ub) {
        const hb = new wb(bb.name, ub);
        return hb.color = Gb.b.FromArray(bb.color), hb.alpha = bb.alpha, hb
      }
    }
    wb.ForceGLSL = !1;
    class Zb extends Yb.b {
      constructor(bb, ub) {
        super(bb, ub), this.intersectionThreshold = ub.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let Xb = !1;

    function pb() {
      Xb || (Xb = !0, Lb.c._LinesMeshParser = (bb, ub) => wb.Parse(bb, ub))
    }(Bb = wb.prototype).enableEdgesRendering ?? (Bb.enableEdgesRendering = (0, Hb.j)("LinesMesh", "enableEdgesRendering")), (Ob = Zb.prototype).enableEdgesRendering ?? (Ob.enableEdgesRendering = (0, Hb.j)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);