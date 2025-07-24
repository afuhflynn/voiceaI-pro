"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Settings, User, Bell, Shield, Palette, Mic, Save, Download, Trash2 } from "lucide-react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // Profile settings
    name: "John Doe",
    email: "john.doe@example.com",
    company: "Acme Corp",
    bio: "AI enthusiast and voice technology researcher",

    // Voice settings
    voiceSpeed: "normal",
    voiceVolume: "80",
    autoSpeak: true,
    voiceLanguage: "en-US",

    // Notification settings
    emailNotifications: true,
    pushNotifications: false,
    weeklyDigest: true,
    productUpdates: true,

    // Privacy settings
    dataCollection: true,
    analyticsTracking: false,
    shareUsageData: false,

    // Appearance settings
    theme: "system",
    fontSize: "medium",
    reducedMotion: false,
  })

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    // In a real app, this would save to a backend
    console.log("Saving settings:", settings)
    // Show success message
  }

  const handleExportData = () => {
    const dataStr = JSON.stringify(settings, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = "voiceai-settings.json"
    link.click()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-chart-1/10 to-chart-2/10 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-chart-2/10 to-chart-1/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6 bg-background/50 backdrop-blur-sm">
            <Settings className="w-4 h-4 mr-2" />
            User Settings
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Customize Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Personalize your VoiceAI Pro experience with custom preferences, privacy controls, and advanced
            configuration options.
          </p>
        </div>
      </section>

      {/* Settings Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-16 p-1 bg-muted/30 backdrop-blur-xl border border-border/50 mb-8">
              <TabsTrigger value="profile" className="text-sm font-medium h-full">
                <User className="w-4 h-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="voice" className="text-sm font-medium h-full">
                <Mic className="w-4 h-4 mr-2" />
                Voice
              </TabsTrigger>
              <TabsTrigger value="notifications" className="text-sm font-medium h-full">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="privacy" className="text-sm font-medium h-full">
                <Shield className="w-4 h-4 mr-2" />
                Privacy
              </TabsTrigger>
              <TabsTrigger value="appearance" className="text-sm font-medium h-full">
                <Palette className="w-4 h-4 mr-2" />
                Appearance
              </TabsTrigger>
            </TabsList>

            {/* Profile Settings */}
            <TabsContent value="profile">
              <Card className="border-0 shadow-xl bg-card/60 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Profile Information
                  </CardTitle>
                  <CardDescription>Manage your personal information and account details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={settings.name}
                        onChange={(e) => handleSettingChange("name", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={settings.email}
                        onChange={(e) => handleSettingChange("email", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={settings.company}
                      onChange={(e) => handleSettingChange("company", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      rows={4}
                      value={settings.bio}
                      onChange={(e) => handleSettingChange("bio", e.target.value)}
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button onClick={handleSave}>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={handleExportData}>
                      <Download className="w-4 h-4 mr-2" />
                      Export Data
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Voice Settings */}
            <TabsContent value="voice">
              <Card className="border-0 shadow-xl bg-card/60 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mic className="w-5 h-5" />
                    Voice Configuration
                  </CardTitle>
                  <CardDescription>Customize voice recognition and synthesis settings.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="voiceSpeed">Voice Speed</Label>
                      <Select
                        value={settings.voiceSpeed}
                        onValueChange={(value) => handleSettingChange("voiceSpeed", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="slow">Slow</SelectItem>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="fast">Fast</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="voiceLanguage">Voice Language</Label>
                      <Select
                        value={settings.voiceLanguage}
                        onValueChange={(value) => handleSettingChange("voiceLanguage", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en-US">English (US)</SelectItem>
                          <SelectItem value="en-GB">English (UK)</SelectItem>
                          <SelectItem value="es-ES">Spanish</SelectItem>
                          <SelectItem value="fr-FR">French</SelectItem>
                          <SelectItem value="de-DE">German</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="voiceVolume">Voice Volume: {settings.voiceVolume}%</Label>
                    <input
                      type="range"
                      id="voiceVolume"
                      min="0"
                      max="100"
                      value={settings.voiceVolume}
                      onChange={(e) => handleSettingChange("voiceVolume", e.target.value)}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="autoSpeak">Auto-speak responses</Label>
                      <p className="text-sm text-muted-foreground">Automatically speak AI responses aloud</p>
                    </div>
                    <Switch
                      id="autoSpeak"
                      checked={settings.autoSpeak}
                      onCheckedChange={(checked) => handleSettingChange("autoSpeak", checked)}
                    />
                  </div>

                  <Button onClick={handleSave}>
                    <Save className="w-4 h-4 mr-2" />
                    Save Voice Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notification Settings */}
            <TabsContent value="notifications">
              <Card className="border-0 shadow-xl bg-card/60 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>Control how and when you receive notifications.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="emailNotifications">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive important updates via email</p>
                      </div>
                      <Switch
                        id="emailNotifications"
                        checked={settings.emailNotifications}
                        onCheckedChange={(checked) => handleSettingChange("emailNotifications", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="pushNotifications">Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive browser push notifications</p>
                      </div>
                      <Switch
                        id="pushNotifications"
                        checked={settings.pushNotifications}
                        onCheckedChange={(checked) => handleSettingChange("pushNotifications", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="weeklyDigest">Weekly Digest</Label>
                        <p className="text-sm text-muted-foreground">Weekly summary of your voice AI usage</p>
                      </div>
                      <Switch
                        id="weeklyDigest"
                        checked={settings.weeklyDigest}
                        onCheckedChange={(checked) => handleSettingChange("weeklyDigest", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="productUpdates">Product Updates</Label>
                        <p className="text-sm text-muted-foreground">News about new features and improvements</p>
                      </div>
                      <Switch
                        id="productUpdates"
                        checked={settings.productUpdates}
                        onCheckedChange={(checked) => handleSettingChange("productUpdates", checked)}
                      />
                    </div>
                  </div>

                  <Button onClick={handleSave}>
                    <Save className="w-4 h-4 mr-2" />
                    Save Notification Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Settings */}
            <TabsContent value="privacy">
              <Card className="border-0 shadow-xl bg-card/60 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Privacy & Security
                  </CardTitle>
                  <CardDescription>Manage your data privacy and security preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="dataCollection">Data Collection</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow collection of usage data to improve services
                        </p>
                      </div>
                      <Switch
                        id="dataCollection"
                        checked={settings.dataCollection}
                        onCheckedChange={(checked) => handleSettingChange("dataCollection", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="analyticsTracking">Analytics Tracking</Label>
                        <p className="text-sm text-muted-foreground">
                          Enable analytics to help us understand usage patterns
                        </p>
                      </div>
                      <Switch
                        id="analyticsTracking"
                        checked={settings.analyticsTracking}
                        onCheckedChange={(checked) => handleSettingChange("analyticsTracking", checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="shareUsageData">Share Usage Data</Label>
                        <p className="text-sm text-muted-foreground">
                          Share anonymized usage data with research partners
                        </p>
                      </div>
                      <Switch
                        id="shareUsageData"
                        checked={settings.shareUsageData}
                        onCheckedChange={(checked) => handleSettingChange("shareUsageData", checked)}
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <h4 className="font-semibold mb-4">Data Management</h4>
                    <div className="flex gap-4">
                      <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download My Data
                      </Button>
                      <Button variant="destructive">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete Account
                      </Button>
                    </div>
                  </div>

                  <Button onClick={handleSave}>
                    <Save className="w-4 h-4 mr-2" />
                    Save Privacy Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Appearance Settings */}
            <TabsContent value="appearance">
              <Card className="border-0 shadow-xl bg-card/60 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    Appearance & Accessibility
                  </CardTitle>
                  <CardDescription>Customize the look and feel of your interface.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="theme">Theme</Label>
                      <Select value={settings.theme} onValueChange={(value) => handleSettingChange("theme", value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fontSize">Font Size</Label>
                      <Select
                        value={settings.fontSize}
                        onValueChange={(value) => handleSettingChange("fontSize", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="reducedMotion">Reduced Motion</Label>
                      <p className="text-sm text-muted-foreground">Minimize animations and transitions</p>
                    </div>
                    <Switch
                      id="reducedMotion"
                      checked={settings.reducedMotion}
                      onCheckedChange={(checked) => handleSettingChange("reducedMotion", checked)}
                    />
                  </div>

                  <Button onClick={handleSave}>
                    <Save className="w-4 h-4 mr-2" />
                    Save Appearance Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
